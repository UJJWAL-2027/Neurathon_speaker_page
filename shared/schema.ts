import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const artists = pgTable("artists", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(), // e.g., "Headliner", "Opening Act", "DJ"
  genre: text("genre").notNull(),
  imageUrl: text("image_url").notNull(),
  bio: text("bio").notNull(),
  performanceTime: text("performance_time"), // e.g., "Oct 27, 8:00 PM"
});

export const galleryItems = pgTable("gallery_items", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  caption: text("caption"),
  year: text("year"),
});

export const insertArtistSchema = createInsertSchema(artists).omit({ id: true });
export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({ id: true });

export type Artist = typeof artists.$inferSelect;
export type InsertArtist = z.infer<typeof insertArtistSchema>;
export type GalleryItem = typeof galleryItems.$inferSelect;
export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;
