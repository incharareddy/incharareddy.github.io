import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { cn } from "../utils/cn";

export function Experience() {
  return (
    <section className="py-24 md:py-32 bg-muted/5 border-y border-border/50" id="experience">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-4">02 / Experience</h2>
          <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground">
            Career Progression
          </h3>
        </motion.div>

        <div className="relative max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-[23px] top-4 bottom-12 w-px bg-border"></div>

          <div className="flex flex-col gap-16 md:gap-24">
            {portfolioData.experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={cn(
                  "relative pl-12 md:pl-20 group",
                  index === 0 ? "opacity-100" : "opacity-70 hover:opacity-100 transition-opacity duration-300"
                )}
              >
                {/* Timeline node */}
                <div className={cn(
                  "absolute left-0 w-[30px] h-[30px] md:w-[46px] md:h-[46px] rounded-full border-[6px] border-muted/5 flex items-center justify-center bg-background top-0 transition-colors duration-300",
                  index === 0 ? "border-accent/10" : ""
                )}>
                  <div className={cn(
                    "w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-300",
                    index === 0 ? "bg-accent shadow-[0_0_10px_rgba(67,56,202,0.5)]" : "bg-border group-hover:bg-muted"
                  )}></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                  <h4 className="text-xl md:text-2xl font-display font-medium text-foreground">
                    {exp.role}
                  </h4>
                  <span className="text-sm font-medium text-muted shrink-0 bg-muted/10 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <div className="text-lg font-medium text-accent mb-6 flex items-center gap-2">
                  {exp.company}
                  <span className="w-1 h-1 rounded-full bg-muted/50"></span>
                  <span className="text-muted text-sm font-normal">{exp.location}</span>
                </div>
                
                <p className="text-muted leading-relaxed max-w-2xl text-base md:text-lg">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
