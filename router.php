<?php
/**
 * Local dev router for PHP built-in server.
 * Run from nesco_backup/:
 *   php -S localhost:8080 router.php -t /path/to/nesco_backup
 */

$root = __DIR__;
$uri  = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$file = $root . $uri;

// ── Serve real files (CSS, JS, images, fonts, etc.) ──────────────────────
if ($uri !== '/' && file_exists($file) && !is_dir($file)) {
    $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    $mime = [
        'css'  => 'text/css',
        'js'   => 'application/javascript',
        'png'  => 'image/png',
        'jpg'  => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'gif'  => 'image/gif',
        'svg'  => 'image/svg+xml',
        'ico'  => 'image/x-icon',
        'woff' => 'font/woff',
        'woff2'=> 'font/woff2',
        'ttf'  => 'font/ttf',
        'webp' => 'image/webp',
    ][$ext] ?? 'application/octet-stream';
    header('Content-Type: ' . $mime);
    readfile($file);
    return true;
}

// ── API ───────────────────────────────────────────────────────────────────
if ($uri === '/register/api.php') {
    require $root . '/register/api.php';
    return true;
}

// ── Stub out /g/fonts.css (Google Fonts proxy — not available locally) ───
if (strpos($uri, '/g/fonts.css') === 0) {
    header('Content-Type: text/css');
    // Load from Google directly — redirect
    $query = $_SERVER['QUERY_STRING'] ?? '';
    $families = '';
    if (preg_match('/family=([^&]+)/', $query, $m)) {
        $families = $m[1];
    }
    $gUrl = 'https://fonts.googleapis.com/css2?family=' . $families . '&display=swap';
    echo "@import url('" . $gUrl . "');";
    return true;
}

// ── Directory → index.html ────────────────────────────────────────────────
$candidates = [
    $file . 'index.html',
    $file . '/index.html',
    rtrim($file, '/') . '/index.html',
];

foreach ($candidates as $candidate) {
    if (file_exists($candidate)) {
        header('Content-Type: text/html; charset=utf-8');
        readfile($candidate);
        return true;
    }
}

// ── 404 ──────────────────────────────────────────────────────────────────
http_response_code(404);
echo "<h2 style='font-family:sans-serif'>404 — Not found: " . htmlspecialchars($uri) . "</h2>";
