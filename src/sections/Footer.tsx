import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-32"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-medium tracking-tighter text-foreground mb-8">
            Let's build something <br className="hidden md:block"/> meaningful.
          </h2>
          
          <p className="text-xl text-muted mb-12 max-w-2xl font-light">
            Have an interesting problem? I'm always open to discussing new opportunities, ideas, or collaborations.
          </p>
          
          <a 
            href={`mailto:${portfolioData.personal.email}`}
            className="group flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-all duration-300 hover:scale-105"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-6">
          <p className="text-sm font-medium text-muted">
            © {currentYear} {portfolioData.personal.name}
          </p>
          
          <div className="flex items-center gap-8">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted hover:text-foreground transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted hover:text-foreground transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="text-sm font-medium text-muted hover:text-foreground transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
