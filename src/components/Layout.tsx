import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const Section = ({ children, id, className = "", delay = 0 }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ 
        duration: 1.2, 
        delay, 
        ease: [0.19, 1, 0.22, 1] 
      }}
      className={`py-24 md:py-40 px-6 scroll-mt-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export const Container = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>
);
