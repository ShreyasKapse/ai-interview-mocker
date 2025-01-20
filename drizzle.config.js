import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:V2IH4LSPxFkl@ep-dawn-bush-a8ig9k2t.eastus2.azure.neon.tech/AI%20Interview%20Mocker?sslmode=require',
  },
});
