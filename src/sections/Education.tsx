import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export function Education() {
  return (
    <section className="py-24 bg-muted/5 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-8">04 / Education</h2>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-display font-medium text-foreground">
                {portfolioData.education.institution}
              </h3>
              <p className="text-lg text-muted">
                {portfolioData.education.degree}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted mt-2">
                <span>{portfolioData.education.period}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span>{portfolioData.education.location}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span className="text-foreground bg-border/50 px-2 py-1 rounded-md">CGPA: {portfolioData.education.cgpa}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-8">05 / Certifications & Languages</h2>
            
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                {portfolioData.certifications.map(cert => (
                  <div key={cert} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                    <span className="text-lg text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <span className="text-sm font-medium uppercase tracking-wider text-muted mr-2 self-center">Languages:</span>
                {portfolioData.languages.map(lang => (
                  <span key={lang} className="text-muted">{lang}</span>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
