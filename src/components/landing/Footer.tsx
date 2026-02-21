import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding bg-foreground text-background py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm font-display">S</span>
              </div>
              <span className="font-display font-bold text-xl">SitePilot</span>
            </div>
            <p className="text-sm opacity-70">Build AI-powered websites for your business in minutes.</p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a></li>
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Docs</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-sm opacity-50">
          © 2026 SitePilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
