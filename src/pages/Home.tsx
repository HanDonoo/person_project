import { motion } from 'framer-motion';
import { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Server, Cloud } from 'lucide-react';

const Home: FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm [Your Name]
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Full Stack Developer
          </motion.p>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-8">
              I'm a passionate developer focused on creating exceptional user experiences and high-quality code.
              Specializing in frontend development, backend development, and system architecture design.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="h-full">
              <Card className="h-full backdrop-blur-sm bg-background/50 border-primary/20">
                <CardHeader>
                  <Code2 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Frontend Development</CardTitle>
                  <CardDescription>
                    Modern web technologies and frameworks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    React, Vue, TypeScript, TailwindCSS
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="h-full">
              <Card className="h-full backdrop-blur-sm bg-background/50 border-primary/20">
                <CardHeader>
                  <Server className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Backend Development</CardTitle>
                  <CardDescription>
                    Robust server-side solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Node.js, Python, Java, Databases
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="h-full">
              <Card className="h-full backdrop-blur-sm bg-background/50 border-primary/20">
                <CardHeader>
                  <Cloud className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Other Skills</CardTitle>
                  <CardDescription>
                    Additional technical expertise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    DevOps, Cloud Services, System Design
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 