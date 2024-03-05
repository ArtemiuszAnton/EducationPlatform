import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  password: '12345678',
  user: 'postgres',
  database: 'EducationPlatform',
});

export default pool;
