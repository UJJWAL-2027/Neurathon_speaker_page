import { useGallery } from "@/hooks/use-gallery";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlitchText } from "@/components/GlitchText";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Gallery() {
  const { data: galleryItems, isLoading } = useGallery();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neon-purple/10 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <GlitchText text="ARCHIVES" />
          </h1>
          <p className="text-neon-cyan font-mono tracking-widest uppercase">
            Moments captured in time
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-10 h-10 text-neon-cyan animate-spin" />
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryItems && galleryItems.length > 0 ? (
              galleryItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid relative group overflow-hidden border border-white/5 bg-card"
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.caption || "Gallery Image"} 
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    {item.year && (
                      <span className="text-neon-magenta font-mono text-xs mb-1 block">
                        {item.year}
                      </span>
                    )}
                    {item.caption && (
                      <p className="text-white font-display text-lg">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              // Fallback gallery items
              [
                "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070",
                "https://images.unsplash.com/photo-1459749411177-8c475d41d3bb?q=80&w=2070",
                "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070",
                "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070",
                "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070",
                "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
              ].map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid relative group overflow-hidden border border-white/5 bg-card"
                >
                  <img 
                    src={src} 
                    alt="Past Edition" 
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-neon-magenta font-mono text-xs mb-1 block">2024</span>
                    <p className="text-white font-display text-lg">Electric Atmosphere</p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
