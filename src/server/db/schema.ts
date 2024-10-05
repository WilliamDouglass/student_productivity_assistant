// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql, } from "drizzle-orm";
import { pgTable, serial, varchar, integer, timestamp, pgTableCreator } from 'drizzle-orm/pg-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `student_productivity_assistant_${name}`);

// export const posts = createTable(
//   "post",
//   {
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 256 }),
//     createdAt: timestamp("created_at", { withTimezone: true })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
//       () => new Date()
//     ),
//   },
//   (example) => ({
//     nameIndex: index("name_idx").on(example.name),
//   })
// );

// export const images = pgTable("Images", {
//   id: serial("id").primaryKey(), // Auto-incrementing ID
//   data: bytea, // Store binary data as bytea
//   contentType: varchar("content_type", { length: 50 }).notNull(), // Content type (e.g., "image/jpeg")
//   name: varchar("name", { length: 100 }).notNull(), // Original name of the file
//   size: integer("size").notNull(), // Size of the file in bytes
//   createdAt: timestamp("created_at").defaultNow().notNull(), // Timestamp for when the image was uploaded
// });