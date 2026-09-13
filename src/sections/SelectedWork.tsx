import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { cn } from "../utils/cn";

// SVG Motifs for projects
const AIVisionMotif = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-accent/20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="currentColor" />
      </pattern>
      <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <circle cx="200" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="200" cy="150" r="40" fill="url(#ai-grad)" />
    <path d="M120 150 L280 150 M200 70 L200 230" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="250" cy="100" r="4" fill="currentColor" className="animate-pulse" />
    <circle cx="160" cy="210" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: "1s" }} />
  </svg>
);

const BackendMotif = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-foreground/20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1.5" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
    <rect x="150" y="80" width="100" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="80" y="180" width="80" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="240" y="180" width="80" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    
    <path d="M200 120 L200 150 L120 150 L120 180" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M200 120 L200 150 L280 150 L280 180" fill="none" stroke="currentColor" strokeWidth="1" />
    
    <circle cx="200" cy="150" r="4" fill="currentColor" />
    
    {/* Animated packet */}
    <circle cx="200" cy="120" r="3" fill="currentColor">
      <animate attributeName="cy" values="120;150;150" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" />
      <animate attributeName="cx" values="200;200;120" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const MobileMotif = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-muted/30" xmlns="http://www.w3.org/2000/svg">
    <rect x="150" y="40" width="100" height="220" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="155" y="45" width="90" height="210" rx="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
    
    {/* Screen elements */}
    <rect x="165" y="70" width="70" height="40" rx="4" fill="currentColor" fillOpacity="0.2" />
    <rect x="165" y="125" width="70" height="10" rx="2" fill="currentColor" fillOpacity="0.4" />
    <rect x="165" y="145" width="40" height="10" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="165" y="165" width="50" height="10" rx="2" fill="currentColor" fillOpacity="0.2" />
    
    {/* Pulse */}
    <path d="M165 210 L180 210 L185 195 L195 225 L200 210 L235 210" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function SelectedWork() {
  return (
    <section className="py-24 md:py-32 relative bg-background" id="work">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-4">01 / Selected Work</h2>
            <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground">
              Applied AI, backend systems, <br className="hidden md:block"/> and intelligent applications.
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={cn(
                "flex flex-col gap-8 md:gap-16 group",
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}
            >
              {/* Visual Side */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted/5 border border-border/40 group-hover:border-border/80 transition-colors duration-500 flex items-center justify-center">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                    {project.motif === "ai-vision" && <AIVisionMotif />}
                    {project.motif === "backend-architecture" && <BackendMotif />}
                    {project.motif === "mobile-health" && <MobileMotif />}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-sm font-medium text-accent mb-4 block">
                  {project.category}
                </span>
                
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-foreground mb-6 leading-tight">
                  {project.title}
                </h4>
                
                <p className="text-muted leading-relaxed mb-8 md:text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium px-3 py-1 bg-muted/10 text-foreground/80 rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* As requested, no fake links. We just present it elegantly. */}
                {/* We can have a subtle indicator that it's a case study or project */}
                <div className="flex items-center gap-4 mt-auto">
                  <span className="text-sm font-medium text-muted flex items-center gap-2 group-hover:text-foreground transition-colors">
                    <span className="w-6 h-px bg-muted group-hover:bg-foreground transition-colors"></span>
                    Portfolio Project
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
