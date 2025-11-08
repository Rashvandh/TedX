import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.section 
        id="about" 
        className="py-24 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.h2 
                  className="text-5xl font-bold"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="inline-block"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <span className="text-primary">ABOUT</span>
                    <span className="text-foreground">x</span>
                  </motion.span>
                </motion.h2>
                
                <motion.div 
                  className="space-y-4 text-muted-foreground leading-relaxed"
                  variants={itemVariants}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    TEDx is a program of local, self-organized events that bring people together 
                    to share a TED-like experience. At our TEDxKPRCAS event, TED Talks video and 
                    live speakers will combine to spark deep discussion and connection.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    The TED Conference provides general guidance for the TEDx program, but individual 
                    TEDx events, including ours, are self-organized. The spirit of TED - ideas worth 
                    spreading - is at the heart of everything we do.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Join us for a day filled with inspiring talks, innovative ideas, and meaningful 
                    connections. Our carefully curated lineup of speakers will challenge your 
                    perspective and ignite your passion for change.
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="flex gap-8 pt-4"
                  variants={itemVariants}
                >
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Speakers</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Attendees</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">8hrs</div>
                    <div className="text-sm text-muted-foreground">Of Content</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative"
                variants={cardVariants}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden border border-primary/20">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div 
                        className="text-8xl font-bold text-primary/20 mb-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, type: 'spring' }}
                      >
                        x
                      </motion.div>
                      <motion.p 
                        className="text-muted-foreground"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        Ideas Worth<br />Spreading
                      </motion.p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-8 -right-8 w-32 h-32 border-4 border-primary/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: 'spring' }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9, type: 'spring' }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};