import { Link } from "wouter";
import { MainLayout } from "@/components/layout/MainLayout";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/" 
            className="inline-flex px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground glow-primary hover:-translate-y-1 transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
