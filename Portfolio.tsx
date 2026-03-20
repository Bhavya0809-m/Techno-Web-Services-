import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const CATEGORIES = ["All", "Business", "Personal Brand", "E-commerce"];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Nova Fintech Solutions",
    category: "Business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Tailwind", "Finance"]
  },
  {
    id: 2,
    title: "Aura Creative Studio",
    category: "Personal Brand",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    tags: ["Portfolio", "Minimal", "Photography"]
  },
  {
    id: 3,
    title: "Lumina Organic Skincare",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    tags: ["Shopify", "Store", "Beauty"]
  },
  {
    id: 4,
    title: "Elevate Consulting Group",
    category: "Business",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    tags: ["Corporate", "Next.js", "CMS"]
  },
  {
    id: 5,
    title: "Dr. Marcus Chen, MD",
    category: "Personal Brand",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["Medical", "Booking", "Clean"]
  },
  {
    id: 6,
    title: "Vanguard Tech Gear",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=800&q=80",
    tags: ["Stripe", "Gadgets", "Dark Mode"]
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = PORTFOLIO_ITEMS.filter(
    item => activeTab === "All" || item.category === activeTab
  );

  return (
    <MainLayout>
      <div className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our <span className="text-primary">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of our recent projects, showcasing our commitment to quality, performance, and aesthetic excellence.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25" 
                    : "bg-card border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <Link href="/contact" className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform group-hover:bg-primary group-hover:text-white">
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium text-muted-foreground px-2 py-1 rounded bg-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
