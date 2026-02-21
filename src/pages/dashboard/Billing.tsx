import { motion } from "framer-motion";
import { Check, CreditCard, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Billing = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="heading-md text-foreground mb-1">Billing</h1>
        <p className="text-sm text-muted-foreground">Manage your plan and usage</p>
      </motion.div>

      {/* Current plan */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="bg-card rounded-2xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display font-semibold text-xl text-foreground">Pro Plan</h3>
              <Badge className="gradient-primary text-primary-foreground border-0 rounded-full">Current</Badge>
            </div>
            <p className="text-sm text-muted-foreground">$29/month · Renews Feb 28, 2026</p>
          </div>
          <Button className="gradient-primary text-primary-foreground border-0 rounded-xl">
            <ArrowUpRight className="h-4 w-4 mr-2" /> Upgrade
          </Button>
        </div>
      </motion.div>

      {/* Usage */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl border border-border p-6 space-y-5">
        <h3 className="font-display font-semibold text-foreground">Usage This Month</h3>
        {[
          { label: "Websites", used: 3, limit: 10 },
          { label: "AI Credits", used: 28, limit: 100 },
          { label: "Storage (GB)", used: 1.2, limit: 5 },
          { label: "Visitors (K)", used: 12, limit: 50 },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-foreground">{item.label}</span>
              <span className="text-muted-foreground">{item.used} / {item.limit}</span>
            </div>
            <Progress value={(item.used / item.limit) * 100} className="h-2 rounded-full" />
          </div>
        ))}
      </motion.div>

      {/* Plan comparison */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-display font-semibold text-foreground">Plan Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                <th className="text-center p-4 text-muted-foreground font-medium">Free</th>
                <th className="text-center p-4 text-primary font-medium">Pro</th>
                <th className="text-center p-4 text-muted-foreground font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Websites", "1", "10", "Unlimited"],
                ["AI Credits", "10/mo", "100/mo", "Unlimited"],
                ["Custom Domain", "—", "✓", "✓"],
                ["Analytics", "Basic", "Advanced", "Full Suite"],
                ["Support", "Community", "Priority", "24/7"],
              ].map(([feature, free, pro, ent]) => (
                <tr key={feature} className="border-b border-border last:border-0">
                  <td className="p-4 text-foreground">{feature}</td>
                  <td className="p-4 text-center text-muted-foreground">{free}</td>
                  <td className="p-4 text-center text-foreground font-medium">{pro}</td>
                  <td className="p-4 text-center text-muted-foreground">{ent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Billing;
