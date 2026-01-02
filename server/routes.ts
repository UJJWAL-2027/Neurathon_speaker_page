import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Initialize seed data
  await storage.seedData();

  app.get(api.artists.list.path, async (_req, res) => {
    const artists = await storage.getArtists();
    res.json(artists);
  });

  app.get(api.artists.get.path, async (req, res) => {
    const artist = await storage.getArtist(Number(req.params.id));
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.json(artist);
  });

  app.get(api.gallery.list.path, async (_req, res) => {
    const items = await storage.getGalleryItems();
    res.json(items);
  });

  return httpServer;
}
