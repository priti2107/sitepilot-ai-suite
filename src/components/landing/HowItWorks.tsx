import { motion } from "framer-motion";
import { Building, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: Building,
    number: "01",
    title: "Create Tenant",
    description: "Sign up and create your workspace. Invite your team and set up branding.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Generate Site with AI",
    description: "Describe your business and AI creates a fully designed, responsive website.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Publish & Monitor",
    description: "Go live with one click. Track performance with built-in analytics.",
  },
];

const HowItWorks = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">How It Works</span>
          <h2 className="heading-lg text-foreground mb-4">From Idea to Live Website in 3 Steps</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-accent/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 relative z-10 glow-primary">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary mb-2 block">{step.number}</span>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
