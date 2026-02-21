import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Save, Eye, Upload, Plus, FileText,
  Type, Image, Palette, LayoutGrid, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const pages = [
  { name: "Home", active: true },
  { name: "About", active: false },
  { name: "Services", active: false },
  { name: "Contact", active: false },
];

const sections = [
  { name: "Hero Section", type: "hero" },
  { name: "Features", type: "features" },
  { name: "About Us", type: "about" },
  { name: "Testimonials", type: "testimonials" },
  { name: "Footer", type: "footer" },
];

const Editor = () => {
  const [activePage, setActivePage] = useState("Home");
  const [activeSection, setActiveSection] = useState("Hero Section");

  return (
    <div className="flex h-screen bg-background">
      {/* Left sidebar - Pages */}
      <aside className="w-56 bg-card border-r border-border flex flex-col">
        <div className="h-14 flex items-center px-4 border-b border-border">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link to="/dashboard/websites"><ArrowLeft className="h-4 w-4" /></Link>
          </Button>
          <span className="font-display font-semibold text-sm text-foreground truncate">TechBridge</span>
        </div>

        <div className="p-3">
          <p className="text-xs font-medium text-muted-foreground mb-2 px-2">Pages</p>
          <div className="space-y-1">
            {pages.map((page) => (
              <button
                key={page.name}
                onClick={() => setActivePage(page.name)}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors flex items-center gap-2 ${
                  activePage === page.name
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <FileText className="h-4 w-4" />
                {page.name}
              </button>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-2 text-xs text-muted-foreground">
            <Plus className="h-3 w-3 mr-1" /> Add Page
          </Button>
        </div>
      </aside>

      {/* Center - Preview canvas */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="h-14 border-b border-border flex items-center justify-between px-6 bg-card">
          <span className="text-sm text-muted-foreground">{activePage} — {activeSection}</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-xl text-xs">
              <Save className="h-3 w-3 mr-1" /> Save Draft
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl text-xs">
              <Eye className="h-3 w-3 mr-1" /> Preview
            </Button>
            <Button size="sm" className="gradient-primary text-primary-foreground border-0 rounded-xl text-xs">
              <Upload className="h-3 w-3 mr-1" /> Publish
            </Button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-y-auto p-8 bg-muted">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            {/* Mock website preview */}
            <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-primary" />
                <span className="font-display font-bold text-sm text-foreground">TechBridge</span>
                <div className="ml-auto flex gap-4 text-xs text-muted-foreground">
                  <span>Home</span><span>About</span><span>Services</span><span>Contact</span>
                </div>
              </div>
            </div>

            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveSection(section.name)}
                className={`w-full text-left p-8 border-b border-border last:border-0 transition-colors ${
                  activeSection === section.name ? "bg-primary/5 ring-2 ring-primary/20 ring-inset" : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-primary mb-1">{section.type.toUpperCase()}</p>
                    <p className="text-sm font-medium text-foreground">{section.name}</p>
                    <div className="mt-2 h-16 bg-muted rounded-lg" />
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right sidebar - Section editor */}
      <aside className="w-64 bg-card border-l border-border flex flex-col">
        <div className="h-14 flex items-center px-4 border-b border-border">
          <span className="font-display font-semibold text-sm text-foreground">Edit Section</span>
        </div>

        <div className="p-4 space-y-5 overflow-y-auto flex-1">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <Type className="h-3 w-3" /> Text
            </p>
            <Input placeholder="Headline text..." className="rounded-xl text-sm mb-2" />
            <Input placeholder="Subtext..." className="rounded-xl text-sm" />
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <Image className="h-3 w-3" /> Image
            </p>
            <div className="w-full h-24 rounded-xl bg-muted border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
              <Upload className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <Palette className="h-3 w-3" /> Colors
            </p>
            <div className="flex gap-2">
              {["#4F46E5", "#2563EB", "#0891B2", "#F59E0B", "#EF4444"].map((c) => (
                <button key={c} className="w-8 h-8 rounded-lg hover:scale-110 transition-transform" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <LayoutGrid className="h-3 w-3" /> Layout
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["Left", "Center", "Right"].map((l) => (
                <button key={l} className="px-3 py-2 rounded-xl border border-border text-xs text-foreground hover:border-primary/50 transition-colors">
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Editor;
