import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Instagram, Mail } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/techno_web_services?igsh=NnBlemQ4bHJkYWxi";
const EMAIL = "technowebservices.contact@gmail.com";

const whyUs = [
  "Clean, modern, professional designs",
  "Fully responsive websites for all devices",
  "Easy communication via Instagram DM or Email",
  "Affordable pricing with premium results",
];

export default function About() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            About <span className="text-primary">Techno Web Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Techno Web Services is dedicated to helping businesses and personal brands establish
            a professional online presence. We design modern, responsive, and user-friendly websites
            that reflect your brand identity and help you grow online.
          </motion.p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-none"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl bg-card">
                <img
                  src={`${import.meta.env.BASE_URL}images/founder-bhavya.jpg`}
                  alt="Bhavya Malviya – Founder & CEO of Techno Web Services"
                  className="w-full h-full object-cover object-top"
                />

                {/* Name card overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-background/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
                    <h3 className="text-xl font-display font-bold text-foreground">
                      Bhavya Malviya
                    </h3>
                    <p className="text-primary font-semibold text-sm mt-1">Founder & CEO</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      "Design is more than just aesthetics — it's about building digital homes that
                      businesses are proud of."
                    </p>
                  </div>
                </div>
              </div>

              {/* Background glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" />
            </motion.div>

            {/* Founder Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                Meet Our Founder
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Bhavya Malviya
              </h2>
              <p className="text-primary font-semibold text-lg mb-6">Founder & CEO</p>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
                <p>
                  Bhavya is a passionate web designer and digital creator who started Techno Web
                  Services to help businesses establish a strong online presence.
                </p>
                <p>
                  With expertise in modern web design, she focuses on creating websites that are
                  clean, responsive, and visually engaging — tailored to reflect each client's
                  unique brand identity.
                </p>
                <p>
                  Her mission is simple: make premium web design accessible and affordable for
                  startups, small businesses, and personal brands across India and beyond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Why Choose <span className="text-primary">Us?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                We combine clean design, modern technology, and thoughtful communication to
                deliver websites your business will be proud of.
              </p>
              <ul className="space-y-5">
                {whyUs.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/90 text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Stats / Visual Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "100%", label: "Client Satisfaction" },
                { value: "Fast", label: "Delivery Turnaround" },
                { value: "2x", label: "More Affordable" },
                { value: "∞", label: "Support & Care" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-background border border-white/5 rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
                >
                  <p className="text-4xl font-display font-extrabold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
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
              Start your digital journey with Techno Web Services today!
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto relative z-10">
              Contact us via Instagram or email — we'd love to help you build something amazing.
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
