import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useArtists() {
  return useQuery({
    queryKey: [api.artists.list.path],
    queryFn: async () => {
      const res = await fetch(api.artists.list.path);
      if (!res.ok) throw new Error("Failed to fetch artists");
      return api.artists.list.responses[200].parse(await res.json());
    },
  });
}

export function useArtist(id: number) {
  return useQuery({
    queryKey: [api.artists.get.path, id],
    queryFn: async () => {
      const url = api.artists.get.path.replace(':id', String(id));
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch artist");
      return api.artists.get.responses[200].parse(await res.json());
    },
  });
}
