import { motion } from "framer-motion";
import { Building2, Sparkles, Shield, Globe, BarChart3, GitBranch } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Multi-Tenant Architecture",
    description: "Isolated workspaces for each team with their own branding, domains, and settings.",
  },
  {
    icon: Sparkles,
    title: "AI Website Builder",
    description: "Describe your business and let AI generate a fully functional, beautiful website.",
  },
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description: "Owner, Admin, Editor roles with granular permissions for your entire team.",
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Connect your own domain or use our free subdomain for every website you build.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Track traffic, page views, device breakdown, and performance in real-time.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Every change is tracked. Roll back to any previous version instantly.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Features</span>
          <h2 className="heading-lg text-foreground mb-4">Everything You Need to Build & Scale</h2>
          <p className="text-body max-w-2xl mx-auto">
            A complete platform for building, deploying, and managing websites at any scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
