// import 'dotenv/config';
// import { defineConfig } from 'drizzle-kit';

// export default defineConfig({
//   out: './drizzle',
//   schema: './utils/schema.js',
//   dialect: 'postgresql',
//   driver: 'pg',  // Change 'pg' to 'neon' for serverless support
//   dbCredentials: {
//     connectionString: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL, // Use environment variable
//   },
// });
/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql', 
  dbCredentials: {
    url: 'postgresql://neondb_owner:V2IH4LSPxFkl@ep-dawn-bush-a8ig9k2t-pooler.eastus2.azure.neon.tech/ai-interview-mocker?sslmode=require',
  }
};

