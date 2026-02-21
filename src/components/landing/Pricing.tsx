import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect to get started",
    features: ["1 Website", "500 Visitors/mo", "SitePilot Subdomain", "Basic Analytics", "Community Support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing businesses",
    features: [
      "10 Websites",
      "50,000 Visitors/mo",
      "Custom Domain",
      "Advanced Analytics",
      "AI Credits: 100/mo",
      "Priority Support",
      "Version Control",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large teams & agencies",
    features: [
      "Unlimited Websites",
      "Unlimited Visitors",
      "Multiple Custom Domains",
      "Full Analytics Suite",
      "Unlimited AI Credits",
      "24/7 Support",
      "SSO & RBAC",
      "SLA Guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Pricing</span>
          <h2 className="heading-lg text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-body max-w-xl mx-auto">Start free. Scale as you grow.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 border card-hover ${
                plan.popular
                  ? "gradient-primary text-primary-foreground border-transparent scale-105"
                  : "bg-card border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className={`font-display font-bold text-xl mb-1 ${plan.popular ? "" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl ${
                  plan.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "gradient-primary text-primary-foreground border-0"
                }`}
                asChild
              >
                <Link to="/signup">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
