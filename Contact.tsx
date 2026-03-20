import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquare, MapPin, Loader2, CheckCircle2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Build a real mailto: link so the message goes directly to the inbox
    const subject = encodeURIComponent(`[TWS Website] ${data.subject}`);
    const body = encodeURIComponent(
      `Hi Bhavya,\n\nYou have a new message from the Techno Web Services website:\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Subject: ${data.subject}\n\n` +
      `Message:\n${data.message}\n\n` +
      `---\nSent from technowebservices.in contact form`
    );

    // Opens the visitor's email client with everything pre-filled
    window.location.href = `mailto:technowebservices.contact@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    setTimeout(() => setIsSuccess(false), 6000);
  };

  const FAQS = [
    {
      q: "How much does a website cost?",
      a: "Our pricing is simple and transparent. A Basic Website starts at ₹4,000–₹5,000, and an Advanced Website starts at ₹6,000–₹7,000. We provide a detailed quote based on your specific requirements."
    },
    {
      q: "How long does it take to build a website?",
      a: "A typical project takes 1 to 2 weeks from kickoff to launch. Timelines depend on the complexity and how quickly we receive your content and feedback."
    },
    {
      q: "How do I get started?",
      a: "Simply DM us on Instagram (@techno_web_services) or send us an email at technowebservices.contact@gmail.com. We'll discuss your requirements and provide a free quote."
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Absolutely. 100% of our websites are designed with a mobile-first approach, ensuring flawless performance across smartphones, tablets, and desktops."
    }
  ];

  return (
    <MainLayout>
      {/* Header Image/Banner */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}images/contact-bg.png`} 
          alt="Contact background" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            Let's <span className="text-primary">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Have a project in mind? We'd love to hear about it.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Left Column: Info & Form */}
          <div className="lg:col-span-3 space-y-12">
            <div className="bg-card border border-white/5 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-display font-bold mb-6">Send us a message</h2>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[300px]"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Almost there!</h3>
                  <p className="text-muted-foreground">Your email client has opened with the message pre-filled. Just hit <strong className="text-foreground">Send</strong> to deliver it to us. We'll reply within 24 hours!</p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-background/50 focus:bg-background border-white/10" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" className="bg-background/50 focus:bg-background border-white/10" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" className="bg-background/50 focus:bg-background border-white/10" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              className="min-h-[150px] bg-background/50 focus:bg-background border-white/10 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-semibold glow-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Info & FAQ */}
          <div className="lg:col-span-2 space-y-10">
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                  <p className="text-sm text-muted-foreground mb-2">Our friendly team is here to help.</p>
                  <a href="mailto:technowebservices.contact@gmail.com" className="text-primary hover:underline font-medium break-all">technowebservices.contact@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Instagram DM</h4>
                  <p className="text-sm text-muted-foreground mb-2">Fastest way to get a quick response.</p>
                  <a href="https://www.instagram.com/techno_web_services?igsh=NnBlemQ4bHJkYWxi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">@techno_web_services</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">Remote First Agency<br/>Serving clients globally.</p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Common Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                    <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
