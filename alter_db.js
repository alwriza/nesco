const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set in .env.local");
    return;
  }
  const sql = neon(process.env.DATABASE_URL);
  try {
    await sql`ALTER TABLE registrations ADD COLUMN p5_name TEXT;`;
    await sql`ALTER TABLE registrations ADD COLUMN p5_grade TEXT;`;
    await sql`ALTER TABLE registrations ADD COLUMN p5_email TEXT;`;
    await sql`ALTER TABLE registrations ADD COLUMN p5_phone TEXT;`;
    await sql`ALTER TABLE registrations ADD COLUMN p5_school TEXT;`;
    console.log("Columns added successfully.");
  } catch (err) {
    console.error("Error adding columns:", err.message);
  }
}
main();
