// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-serverless';
// import * as schema  from './schema';

// const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
// export const db = drizzle({ client: sql,schema });
// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-serverless';
// import 'dotenv/config';


// const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
// export const db = drizzle(sql,{schema});
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql,{schema});

