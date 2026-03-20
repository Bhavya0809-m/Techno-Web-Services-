import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Monitor, Briefcase, Layers, Instagram, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const INSTAGRAM_URL = "https://www.instagram.com/techno_web_services?igsh=NnBlemQ4bHJkYWxi";
const EMAIL = "technowebservices.contact@gmail.com";

const services = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Business Website Design",
    description:
      "Professional, modern websites built specifically for startups and small businesses. We create clean layouts that establish credibility, attract clients, and help your brand grow online.",
    badge: "Most Popular",
  },
  {
    icon: <Monitor className="w-8 h-8 text-primary" />,
    title: "Portfolio Websites",
    description:
      "Showcase your work elegantly with responsive, visually stunning portfolio layouts. Perfect for designers, photographers, freelancers, and creators who want to impress at first glance.",
    badge: null,
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Landing Pages",
    description:
      "High-converting landing pages for products, services, or events. Designed with clear call-to-actions and persuasive layouts that turn visitors into customers.",
    badge: null,
  },
];

const pricingPlans = [
  {
    name: "Basic Website",
    price: "₹4,000 – ₹5,000",
    description: "Great for individuals and small businesses getting started online.",
    features: [
      "Up to 3 pages",
      "Fully responsive design",
      "Clean & modern layout",
      "Contact form",
      "Basic SEO setup",
    ],
  },
  {
    name: "Advanced Website",
    price: "₹6,000 – ₹7,000",
    description: "Ideal for businesses that need a more complete, feature-rich website.",
    features: [
      "Up to 6 pages",
      "Custom design & branding",
      "Fully responsive design",
      "Portfolio or service section",
      "Advanced SEO optimization",
      "Contact form & integrations",
    ],
    highlighted: true,
  },
];

export default function Services() {
  return (
    <MainLayout>
      {/* Header */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            At Techno Web Services, we provide a range of website design services to help
            businesses and creators establish a strong digital presence.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {service.badge && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/30">
                    {service.badge}
                  </div>
                )}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center mb-6 shadow-sm border border-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-card/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Affordable pricing with premium results. No hidden fees, ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary/20 to-secondary/30 border border-primary/40 shadow-xl shadow-primary/10"
                    : "bg-card border border-white/5"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-extrabold text-primary mb-2">{plan.price}</p>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm text-foreground/90">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:-translate-y-1 glow-primary"
                      : "bg-white/5 border border-white/10 text-foreground hover:bg-white/10"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-card to-secondary/30 border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10">
              Want a customized website?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto relative z-10">
              DM us on Instagram or email us for details — we'll craft something perfect for your
              brand!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground glow-primary hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" /> DM on Instagram
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white/5 border border-white/10 text-foreground hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
