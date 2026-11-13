CREATE TABLE `generations` (
	`id` text NOT NULL,
	`user_id` text NOT NULL,
	`created_at` integer NOT NULL,
	PRIMARY KEY(`user_id`, `id`)
);
--> statement-breakpoint
CREATE TABLE `prompts` (
	`id` text NOT NULL,
	`user_id` text NOT NULL,
	`title` text NOT NULL,
	`target` text NOT NULL,
	`content` text NOT NULL,
	`brief` text NOT NULL,
	`created_at` integer NOT NULL,
	PRIMARY KEY(`user_id`, `id`)
);
--> statement-breakpoint
CREATE TABLE `workspaces` (
	`user_id` text PRIMARY KEY NOT NULL,
	`profile` text DEFAULT '{}' NOT NULL,
	`draft` text DEFAULT '{}' NOT NULL,
	`updated_at` integer NOT NULL
);
