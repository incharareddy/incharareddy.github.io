import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden" id="hero">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          className="lg:col-span-7 flex flex-col z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-accent inline-block"></span>
            <p className="text-sm font-medium tracking-wide uppercase text-accent">
              {portfolioData.personal.location}
            </p>
          </motion.div>
          
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-display font-medium leading-[1.1] tracking-tighter mb-6 text-foreground">
            {portfolioData.personal.name}
            <span className="block text-muted mt-2">{portfolioData.personal.role}</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10 font-light">
            {portfolioData.personal.heroStatement}
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap items-center gap-6">
            <a 
              href="#work" 
              className="group flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-accent transition-all duration-300"
            >
              Selected Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-foreground font-medium px-6 py-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
          
          <motion.div variants={item} className="flex items-center gap-6 mt-16 pt-8 border-t border-border/50">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="text-muted hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-5 relative hidden md:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted/10 border border-border/50 p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent mix-blend-multiply rounded-xl z-10" />
            <img 
              src={portfolioData.personal.photoUrl} 
              alt={portfolioData.personal.name}
              className="w-full h-full object-cover rounded-xl filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23f5f5f5"/><text x="50" y="50" font-family="sans-serif" font-size="5" text-anchor="middle" dominant-baseline="middle" fill="%23a3a3a3">Profile Photo Placeholder</text></svg>';
              }}
            />
          </div>
          
          {/* Subtle decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/5 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent"></div>
      </motion.div>
    </section>
  );
}
