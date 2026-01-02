import { Artist } from "@shared/schema";
import { motion } from "framer-motion";
import { Calendar, Music } from "lucide-react";

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

export function ArtistCard({ artist, index }: ArtistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
        <img 
          src={artist.imageUrl} 
          alt={artist.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
        />
        
        {/* Role Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-neon-magenta/90 text-black font-mono text-xs px-2 py-1 uppercase font-bold tracking-wider">
            {artist.role}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
            {artist.name}
          </h3>
          <p className="text-neon-cyan/80 font-mono text-sm mb-4 tracking-wider uppercase flex items-center gap-2">
            <Music className="w-3 h-3" /> {artist.genre}
          </p>
          
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-3">
            <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
              {artist.bio}
            </p>
            {artist.performanceTime && (
              <div className="flex items-center gap-2 text-neon-magenta font-mono text-xs">
                <Calendar className="w-3 h-3" />
                {artist.performanceTime}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
