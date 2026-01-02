import { db } from "./db";
import {
  artists,
  galleryItems,
  type Artist,
  type InsertArtist,
  type GalleryItem,
  type InsertGalleryItem
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getArtists(): Promise<Artist[]>;
  getArtist(id: number): Promise<Artist | undefined>;
  getGalleryItems(): Promise<GalleryItem[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getArtists(): Promise<Artist[]> {
    return await db.select().from(artists);
  }

  async getArtist(id: number): Promise<Artist | undefined> {
    const [artist] = await db.select().from(artists).where(eq(artists.id, id));
    return artist;
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return await db.select().from(galleryItems);
  }

  async seedData(): Promise<void> {
    const existingArtists = await this.getArtists();
    if (existingArtists.length === 0) {
      await db.insert(artists).values([
        {
          name: "Neon Pulse",
          role: "Headliner",
          genre: "Synthwave / EDM",
          imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
          bio: "International electronic sensation bringing the grid to life.",
          performanceTime: "Oct 27, 9:00 PM"
        },
        {
          name: "The Glitch",
          role: "Opening Act",
          genre: "Cyber-Rock",
          imageUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&q=80",
          bio: "Fusing distorted guitars with digital artifacts.",
          performanceTime: "Oct 27, 7:00 PM"
        },
        {
          name: "DJ Cyber",
          role: "DJ Set",
          genre: "Techno",
          imageUrl: "https://images.unsplash.com/photo-1571266028243-e4733b090bb1?w=800&q=80",
          bio: "Beats that synchronize with your heartbeat.",
          performanceTime: "Oct 27, 10:30 PM"
        }
      ]);

      await db.insert(galleryItems).values([
        { imageUrl: "https://images.unsplash.com/photo-1459749411177-0473ef71607b?w=800&q=80", caption: "Crowd at Spark 2024", year: "2024" },
        { imageUrl: "https://images.unsplash.com/photo-1533174072545-e8d4aa97d848?w=800&q=80", caption: "Light Show", year: "2024" },
        { imageUrl: "https://images.unsplash.com/photo-1514525253440-b393452e8d03?w=800&q=80", caption: "Guitar Solo", year: "2023" },
        { imageUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80", caption: "Night Vibes", year: "2023" },
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
