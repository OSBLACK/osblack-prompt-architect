import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core';
export const workspaces = sqliteTable('workspaces', {
  userId: text('user_id').primaryKey(), profile: text('profile').notNull().default('{}'),
  draft: text('draft').notNull().default('{}'), updatedAt: integer('updated_at').notNull(),
});
export const prompts = sqliteTable('prompts', {
  id: text('id').notNull(), userId: text('user_id').notNull(),
  title: text('title').notNull(), target: text('target').notNull(),
  content: text('content').notNull(), brief: text('brief').notNull(), createdAt: integer('created_at').notNull(),
}, t => [primaryKey({ columns: [t.userId, t.id] })]);
export const generations = sqliteTable('generations', {
  id: text('id').notNull(), userId: text('user_id').notNull(), createdAt: integer('created_at').notNull(),
}, t => [primaryKey({ columns: [t.userId, t.id] })]);
