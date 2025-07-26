import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL!;

const db: ReturnType<typeof drizzle> = (() => {
  if (!global.__drizzleDb) {
    const client = postgres(connectionString, { prepare: false });
    global.__drizzleDb = drizzle(client);
  }
  return global.__drizzleDb;
})();

declare global {
  var __drizzleDb: ReturnType<typeof drizzle> | undefined;
}

export { db };
