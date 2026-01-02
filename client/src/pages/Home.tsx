import { useEffect, useRef } from "react";
import { useArtists } from "@/hooks/use-artists";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CyberButton } from "@/components/CyberButton";
import { GlitchText } from "@/components/GlitchText";
import { ArtistCard } from "@/components/ArtistCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Zap } from "lucide-react";

export default function Home() {
  const { data: artists, isLoading } = useArtists();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-neon-cyan selection:text-black">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-small opacity-20" />
        
        <motion.div 
          style={{ y, opacity }}
          className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase rounded-sm mb-6">
              The Grand Finale
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-2 tracking-tighter leading-none text-white">
            <GlitchText text="SPARK" />
          </h1>
          
          <p className="text-2xl md:text-3xl font-display font-light text-neon-magenta tracking-widest uppercase mb-12 text-shadow-magenta">
            Into The Grid
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center mb-16">
            <div className="flex items-center gap-3 text-gray-300 font-mono text-sm border-r border-white/20 pr-6 mr-2">
              <Calendar className="text-neon-cyan w-5 h-5" />
              <span>OCT 27-29, 2025</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 font-mono text-sm">
              <MapPin className="text-neon-magenta w-5 h-5" />
              <span>NIT SILCHAR, ASSAM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <CyberButton variant="primary" onClick={() => document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth'})}>
              View Lineup <Zap className="w-4 h-4" />
            </CyberButton>
            <CyberButton variant="outline">
              Get Tickets
            </CyberButton>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative bg-black">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neon-purple/5 skew-x-12 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                THE BIGGEST <br />
                <span className="text-neon-cyan text-shadow-neon">MUSICAL NIGHT</span> <br />
                OF NORTHEAST
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-neon-magenta pl-6">
                Spark isn't just a concert; it's an experience. As the flagship event of Tecnoesis, 
                it brings together thousands of music lovers for a night of euphoria, energy, and 
                electric vibes. From headbanging rock to soul-soothing indie and pulsating EDM, 
                Spark transcends genres and boundaries.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                {[
                  { label: "Footfall", value: "15K+" },
                  { label: "Artists", value: "20+" },
                  { label: "Hours", value: "08+" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-neon-magenta font-mono text-xs uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
              <a href="/gallery" className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors uppercase font-mono text-sm tracking-wider group">
                Explore Past Editions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-gray-900 border border-white/10 relative overflow-hidden group">
                 {/* Concert crowd image */}
                 <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" 
                  alt="Concert Crowd" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-neon-magenta/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-neon-cyan/20 blur-2xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lineup Section */}
      <section id="lineup" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-neon-magenta text-sm tracking-widest uppercase mb-2 block">Who's Playing</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white">
              <GlitchText text="2025 LINEUP" />
            </h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-white/5 animate-pulse rounded-sm" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists && artists.length > 0 ? (
                artists.map((artist, idx) => (
                  <ArtistCard key={artist.id} artist={artist} index={idx} />
                ))
              ) : (
                // Fallback if no data
                <>
                  <ArtistCard 
                    artist={{
                      id: 1,
                      name: "Neon Pulse",
                      role: "Headliner",
                      genre: "Synthwave / EDM",
                      imageUrl: "https://images.unsplash.com/photo-1514525253440-b393452e8d03?q=80&w=2070&auto=format&fit=crop",
                      bio: "International electronic duo known for their high-energy visual performances.",
                      performanceTime: "Oct 29, 9:00 PM"
                    }} 
                    index={0} 
                  />
                  <ArtistCard 
                    artist={{
                      id: 2,
                      name: "Void Walker",
                      role: "Special Guest",
                      genre: "Techno",
                      imageUrl: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=2070&auto=format&fit=crop",
                      bio: "The rising star of the underground techno scene, bringing dark beats to the grid.",
                      performanceTime: "Oct 28, 8:00 PM"
                    }} 
                    index={1} 
                  />
                  <ArtistCard 
                    artist={{
                      id: 3,
                      name: "Cyber Punkz",
                      role: "Opening Act",
                      genre: "Industrial Rock",
                      imageUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
                      bio: "Local legends returning to their roots with a brand new sound.",
                      performanceTime: "Oct 27, 7:00 PM"
                    }} 
                    index={2} 
                  />
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-neon-cyan/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-small opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 max-w-4xl mx-auto">
            READY TO ENTER THE <span className="text-neon-cyan">GRID</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">
            Tickets are selling out fast. Secure your spot at the most anticipated event of the year.
          </p>
          <CyberButton variant="secondary" className="scale-125">
            Grab Your Passes
          </CyberButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
