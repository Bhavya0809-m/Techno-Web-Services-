import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Star, Quote, Send, CheckCircle2, User } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    position: "CEO",
    company: "Nova Solutions",
    content:
      "Techno Web Services completely transformed our online presence. The new website is not only beautiful but our conversion rate has increased since launch. Highly recommended!",
    avatar: "SJ",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    position: "Founder",
    company: "Aura Coffee Co.",
    content:
      "Working with TWS was a breeze. They understood our minimalist aesthetic perfectly and delivered a website that is lightning fast and easy to manage.",
    avatar: "DC",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "Elevate Consulting",
    content:
      "The attention to detail is unmatched. Every hover state, transition, and layout decision feels premium. They truly deliver quality work.",
    avatar: "ER",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chang",
    position: "Independent Creator",
    company: "MC Photography",
    content:
      "I needed a portfolio that didn't distract from my photos but still felt high-end. TWS struck the perfect balance. It looks incredible on mobile too.",
    avatar: "MC",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Walsh",
    position: "VP of Operations",
    company: "TechFlow Systems",
    content:
      "They delivered the project ahead of schedule and the code quality is superb. SEO improvements were noticeable within weeks. A fantastic agency partner.",
    avatar: "JW",
    rating: 5,
  },
];

// ─── Review Form ───────────────────────────────────────────────────────────────

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  projectOrWebsite: z.string().optional(),
  rating: z.number().min(1, "Please select a rating").max(5),
  review: z.string().min(20, "Review must be at least 20 characters"),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

function StarRatingInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110 focus:outline-none"
          aria-label={`${star} star`}
        >
          <Star
            className={`w-8 h-8 transition-colors ${
              star <= (hovered || value)
                ? "fill-primary text-primary"
                : "text-white/20"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function ReviewForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      projectOrWebsite: "",
      rating: 0,
      review: "",
    },
  });

  const onSubmit = (data: ReviewFormValues) => {
    const stars = "⭐".repeat(data.rating);
    const subject = encodeURIComponent(`[TWS Review] ${stars} from ${data.name}`);
    const body = encodeURIComponent(
      `Hi Bhavya,\n\nYou have a new review submitted on the Techno Web Services website!\n\n` +
        `Name: ${data.name}\n` +
        `Project / Website: ${data.projectOrWebsite || "—"}\n` +
        `Rating: ${stars} (${data.rating}/5)\n\n` +
        `Review:\n"${data.review}"\n\n` +
        `---\nSubmitted from technowebservices.in testimonials page`
    );

    window.location.href = `mailto:technowebservices.contact@gmail.com?subject=${subject}&body=${body}`;

    setIsSuccess(true);
    form.reset();
    setTimeout(() => setIsSuccess(false), 7000);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center flex flex-col items-center"
      >
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank you! 🎉</h3>
        <p className="text-muted-foreground max-w-sm">
          Your email client has opened with your review pre-filled. Just hit{" "}
          <strong className="text-foreground">Send</strong> and we'll feature it on the site!
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Star Rating */}
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Your Rating</FormLabel>
              <FormControl>
                <StarRatingInput value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Your Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Priya Sharma"
                    className="bg-background/50 border-white/10 focus:bg-background"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectOrWebsite"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">
                  Project / Website{" "}
                  <span className="text-muted-foreground text-xs">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. My Online Store"
                    className="bg-background/50 border-white/10 focus:bg-background"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Your Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your experience working with Techno Web Services..."
                  className="min-h-[140px] bg-background/50 border-white/10 focus:bg-background resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold glow-primary gap-2"
        >
          <Send className="w-4 h-4" />
          Submit My Review
        </Button>
      </form>
    </Form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Testimonials() {
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
            Client <span className="text-primary">Love</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take our word for it — here's what our clients have to say about
            working with Techno Web Services.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-card border border-white/5 p-8 rounded-2xl relative flex flex-col ${
                  i === 0
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card to-secondary/20"
                    : ""
                }`}
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p
                  className={`text-muted-foreground leading-relaxed mb-8 flex-1 ${
                    i === 0 ? "text-lg md:text-xl" : "text-base"
                  }`}
                >
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary font-display shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.position}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Share Your Review ─────────────────────────────────────────── */}
      <section className="py-24 bg-card/50 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                <User className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Share Your <span className="text-primary">Experience</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
                Worked with us? We'd love to hear about your experience! Submit your review
                below and we'll feature it on this page.
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-card border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
              <div className="relative z-10">
                <ReviewForm />
              </div>
            </div>

            {/* Note */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Your review will be sent to us via email. We review all submissions before
              featuring them on the site. Thank you! 💜
            </p>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
