import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export function TechnicalToolkit() {
  return (
    <section className="py-24 md:py-32 bg-background" id="about">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-4">03 / Profile</h2>
            <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground mb-8">
              Technical Toolkit & Background
            </h3>
            <div className="prose prose-lg text-muted">
              <p className="leading-relaxed">
                {portfolioData.personal.about}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            {portfolioData.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="flex flex-col gap-4">
                <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <span 
                      key={item} 
                      className="text-sm font-medium px-4 py-2 bg-muted/5 text-muted-foreground border border-border/50 rounded-lg hover:border-accent/50 hover:bg-accent/5 hover:text-accent transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
