import { motion } from "framer-motion";
import { Upload, Palette, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const fonts = ["Inter", "Space Grotesk", "DM Sans", "Plus Jakarta Sans", "Outfit"];
const colors = [
  "#4F46E5", "#2563EB", "#0891B2", "#059669",
  "#D97706", "#DC2626", "#7C3AED", "#EC4899",
];

const Branding = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  return (
    <div className="space-y-6 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="heading-md text-foreground mb-1">Branding</h1>
        <p className="text-sm text-muted-foreground">Customize your tenant branding</p>
      </motion.div>

      {/* Logo */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Upload className="h-5 w-5 text-primary" /> Logo
        </h3>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-2xl bg-muted border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
            <Upload className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm text-foreground font-medium">Upload your logo</p>
            <p className="text-xs text-muted-foreground">PNG, SVG, or JPG. Max 2MB.</p>
            <Button variant="outline" size="sm" className="mt-2 rounded-xl">Choose File</Button>
          </div>
        </div>
      </motion.div>

      {/* Primary Color */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Palette className="h-5 w-5 text-primary" /> Primary Color
        </h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedColor(c)}
              className={`w-10 h-10 rounded-xl transition-all ${selectedColor === c ? "ring-2 ring-offset-2 ring-primary scale-110" : "hover:scale-105"}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Label className="text-sm">Custom:</Label>
          <Input type="text" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="w-32 rounded-xl" />
          <div className="w-10 h-10 rounded-xl border border-border" style={{ backgroundColor: selectedColor }} />
        </div>
      </motion.div>

      {/* Font */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Type className="h-5 w-5 text-primary" /> Font Family
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {fonts.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFont(f)}
              className={`p-4 rounded-xl border text-center transition-all ${
                selectedFont === f ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
              }`}
            >
              <span className="text-sm font-medium text-foreground" style={{ fontFamily: f }}>{f}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Live Preview */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-display font-semibold text-foreground mb-4">Live Preview</h3>
        <div className="rounded-xl border border-border p-6" style={{ fontFamily: selectedFont }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: selectedColor }} />
            <span className="font-bold text-foreground">Your Brand</span>
          </div>
          <h4 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: selectedFont }}>Welcome to Our Website</h4>
          <p className="text-sm text-muted-foreground">This is how your branding will look across your websites.</p>
          <button className="mt-4 px-6 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: selectedColor, color: "#fff" }}>
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Branding;
