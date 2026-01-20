import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Award } from "lucide-react";
import heroDental from "@/assets/hero-dental.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDental}
          alt="Modern dental clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted by 10,000+ Happy Patients
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Trusted Dental Care for a{" "}
            <span className="text-primary">Healthy, Confident Smile</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up animation-delay-200">
            Experience gentle, painless treatments with our certified dental experts. 
            Modern equipment, strict hygiene protocols, and personalized care for your entire family.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up animation-delay-300">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+918237100519">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call Now: 8237100519
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-6 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">20+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">4.9★</p>
                <p className="text-sm text-primary-foreground/70">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
