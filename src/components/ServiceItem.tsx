import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceItemProps {
  icon: any;
  name: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-help shadow-lg"
      >
        <Icon size={32} />
      </motion.div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-md whitespace-nowrap z-30 shadow-xl pointer-events-none"
          >
            {name}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceItem;
