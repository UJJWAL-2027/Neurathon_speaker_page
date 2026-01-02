import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-3xl font-bold mb-4">
              <span className="text-neon-cyan">SPARK</span> 
              <span className="text-white ml-2">2025</span>
            </h2>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              The grand finale of Tecnoesis. A convergence of sound, light, and technology. 
              Join us as we enter the grid for the most electrifying night of the year.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-cyan hover:text-black transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-6 text-white border-b border-neon-magenta/30 pb-2 inline-block">Explore</h3>
            <ul className="space-y-3 font-mono text-sm text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Tecnoesis Home</a></li>
              <li><a href="#lineup" className="hover:text-neon-cyan transition-colors">Lineup</a></li>
              <li><a href="/gallery" className="hover:text-neon-cyan transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Sponsors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-6 text-white border-b border-neon-magenta/30 pb-2 inline-block">Contact</h3>
            <ul className="space-y-3 font-mono text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neon-magenta" />
                tecnoesis@nits.ac.in
              </li>
              <li>NIT Silchar Campus,</li>
              <li>Silchar, Assam 788010</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
          <p>© 2025 Tecnoesis. All rights reserved.</p>
          <p>Designed & Developed with <span className="text-neon-cyan">⚡</span> by Tecnoesis Web Team</p>
        </div>
      </div>
    </footer>
  );
}
