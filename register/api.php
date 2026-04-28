<?php
/**
 * NEScO Registration API
 * Accepts POST requests with JSON body, stores team registration in Neon Postgres.
 *
 * CONFIGURATION — choose one:
 *
 * Option A (PaaS: Vercel, Railway, Render, etc.)
 *   Set NEON_DB_URL as an environment variable in your hosting dashboard.
 *   No file changes needed.
 *
 * Option B (Traditional shared host: cPanel, etc.)
 *   Create register/.env with the line below, then make sure .htaccess blocks
 *   direct web access to it (see register/.htaccess).
 *   NEON_DB_URL=postgresql://user:password@host/dbname?sslmode=require
 */

// Load .env if it exists (for local dev or shared hosting)
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        if (str_starts_with(trim($line), '#') || !str_contains($line, '=')) continue;
        [$key, $val] = explode('=', $line, 2);
        putenv(trim($key) . '=' . trim($val));
    }
}

$dbUrl = getenv('NEON_DB_URL');
if (!$dbUrl) {
    http_response_code(503);
    echo json_encode(['error' => 'Database not configured. Set NEON_DB_URL.']);
    exit;
}
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Parse input
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON body']);
    exit;
}

// Validate required fields
$required = ['team_name', 'captain_name', 'captain_email', 'captain_phone', 'school', 'grade', 'member2', 'member3', 'member4'];
foreach ($required as $field) {
    if (empty(trim($data[$field] ?? ''))) {
        http_response_code(422);
        echo json_encode(['error' => "Field '$field' is required"]);
        exit;
    }
}

$teamName     = trim($data['team_name']);
$captainName  = trim($data['captain_name']);
$captainEmail = trim($data['captain_email']);
$captainPhone = trim($data['captain_phone']);
$school       = trim($data['school']);
$grade        = intval($data['grade']);
$member2      = trim($data['member2']);
$member3      = trim($data['member3']);
$member4      = trim($data['member4']);

if (!filter_var($captainEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

if ($grade < 8 || $grade > 12) {
    http_response_code(422);
    echo json_encode(['error' => 'Grade must be between 8 and 12']);
    exit;
}

// Connect to Neon Postgres
try {
    $url  = parse_url($dbUrl);
    $dsn  = "pgsql:host={$url['host']};port=" . ($url['port'] ?? 5432) . ";dbname=" . ltrim($url['path'], '/') . ";sslmode=require";
    $user = $url['user'];
    $pass = $url['pass'];

    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(503);
    echo json_encode(['error' => 'Database connection failed. Please try again later.']);
    // Log internally but don't expose details
    error_log('NEScO DB connect error: ' . $e->getMessage());
    exit;
}

// Create table if it doesn't exist
$pdo->exec("
    CREATE TABLE IF NOT EXISTS teams (
        id            SERIAL PRIMARY KEY,
        team_name     VARCHAR(255) UNIQUE NOT NULL,
        captain_name  VARCHAR(255) NOT NULL,
        captain_email VARCHAR(255) NOT NULL,
        captain_phone VARCHAR(50)  NOT NULL,
        school        VARCHAR(255) NOT NULL,
        grade         SMALLINT     NOT NULL,
        member2       VARCHAR(255) NOT NULL,
        member3       VARCHAR(255) NOT NULL,
        member4       VARCHAR(255) NOT NULL,
        registered_at TIMESTAMPTZ  DEFAULT NOW()
    )
");

// Check for duplicate team name
$stmt = $pdo->prepare('SELECT id FROM teams WHERE LOWER(team_name) = LOWER(?)');
$stmt->execute([$teamName]);
if ($stmt->fetch()) {
    http_response_code(409);
    echo json_encode(['error' => 'duplicate_team_name']);
    exit;
}

// Insert registration
try {
    $insert = $pdo->prepare("
        INSERT INTO teams (team_name, captain_name, captain_email, captain_phone, school, grade, member2, member3, member4)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    $insert->execute([$teamName, $captainName, $captainEmail, $captainPhone, $school, $grade, $member2, $member3, $member4]);
} catch (PDOException $e) {
    if (strpos($e->getMessage(), 'unique') !== false || strpos($e->getMessage(), 'duplicate') !== false) {
        http_response_code(409);
        echo json_encode(['error' => 'duplicate_team_name']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Registration failed. Please try again.']);
        error_log('NEScO insert error: ' . $e->getMessage());
    }
    exit;
}

echo json_encode(['success' => true]);
