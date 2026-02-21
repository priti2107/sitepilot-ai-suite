import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Sparkles, Shield, Globe } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col justify-center p-16 text-primary-foreground">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
              <span className="font-bold text-lg font-display">S</span>
            </div>
            <span className="font-display font-bold text-2xl">SitePilot</span>
          </div>

          <h2 className="font-display text-4xl font-bold mb-6">Start building your next great website today.</h2>
          <p className="text-lg opacity-80 mb-12">Join thousands of teams using SitePilot to create stunning AI-powered websites.</p>

          <div className="space-y-6">
            {[
              { icon: Sparkles, text: "AI-powered website generation" },
              { icon: Shield, text: "Enterprise-grade security" },
              { icon: Globe, text: "Custom domains & branding" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-8 lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-display">S</span>
              </div>
              <span className="font-display font-bold text-2xl text-foreground">SitePilot</span>
            </Link>
          </div>

          <h1 className="heading-md text-foreground mb-2">Create your account</h1>
          <p className="text-sm text-muted-foreground mb-8">Get started for free — no credit card required</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="mt-1.5 rounded-xl" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5 rounded-xl" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" className="mt-1.5 rounded-xl" />
            </div>
            <div>
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input id="confirm" type="password" placeholder="••••••••" className="mt-1.5 rounded-xl" />
            </div>
            <div>
              <Label htmlFor="tenant">Workspace Name</Label>
              <Input id="tenant" placeholder="My Company" className="mt-1.5 rounded-xl" />
            </div>
            <Button className="w-full gradient-primary text-primary-foreground border-0 rounded-xl h-11 mt-2" type="submit">
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
