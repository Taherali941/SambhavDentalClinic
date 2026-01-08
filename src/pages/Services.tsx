import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { StickyBookingButton } from "@/components/StickyBookingButton";
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  Zap,
  Crown,
  Smile,
  CheckCircle,
  Calendar,
} from "lucide-react";

const services = [
  {
    id: "general",
    icon: Heart,
    title: "General Dentistry",
    description: "Comprehensive dental care to maintain your oral health and prevent future problems.",
    features: [
      "Routine dental checkups",
      "Professional teeth cleaning",
      "Dental fillings",
      "Gum disease treatment",
      "Oral cancer screening",
    ],
    painInfo: "Most general dentistry procedures are painless. We use gentle techniques and local anesthesia when needed to ensure your comfort.",
  },
  {
    id: "cosmetic",
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic dental treatments.",
    features: [
      "Smile design consultation",
      "Dental veneers",
      "Teeth whitening",
      "Dental bonding",
      "Smile makeovers",
    ],
    painInfo: "Cosmetic procedures like whitening are completely painless. Veneers may involve minimal sensitivity that subsides quickly.",
  },
  {
    id: "root-canal",
    icon: Zap,
    title: "Root Canal Treatment",
    description: "Save your natural teeth with our advanced, painless root canal procedures.",
    features: [
      "Painless root canal therapy",
      "Infected tooth treatment",
      "Tooth preservation",
      "Post-treatment restoration",
      "Same-day emergency care",
    ],
    painInfo: "Modern root canal treatment is virtually painless! We use advanced anesthesia and techniques to ensure a comfortable experience.",
  },
  {
    id: "implants",
    icon: Crown,
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacement solutions that last a lifetime.",
    features: [
      "Single tooth implants",
      "Multiple teeth replacement",
      "All-on-4 implants",
      "Implant-supported dentures",
      "Bone grafting if needed",
    ],
    painInfo: "Implant surgery is performed under anesthesia. Post-operative discomfort is minimal and well-managed with medication.",
  },
  {
    id: "orthodontics",
    icon: Smile,
    title: "Orthodontics",
    description: "Straighten your teeth with modern braces and clear aligners for a perfect smile.",
    features: [
      "Traditional metal braces",
      "Ceramic braces",
      "Clear aligners (Invisalign)",
      "Retainers",
      "Teen & adult orthodontics",
    ],
    painInfo: "Initial adjustment may cause mild discomfort that resolves within days. Clear aligners offer a more comfortable experience.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dental-teal-light via-background to-dental-mint">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Comprehensive Dental Services for Every Need
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From routine checkups to advanced procedures, our experienced team provides 
                gentle, personalized care using the latest dental technology.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-dental-teal-light flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pain Info Box */}
                    <div className="bg-dental-sage-light rounded-xl p-5 mb-6">
                      <p className="text-sm font-medium text-accent mb-1">
                        💡 Is this painful?
                      </p>
                      <p className="text-sm text-foreground/80">
                        {service.painInfo}
                      </p>
                    </div>

                    <Link to="/contact">
                      <Button variant="hero">
                        Schedule Consultation
                      </Button>
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-dental-teal-light to-dental-mint flex items-center justify-center">
                        <service.icon className="w-32 h-32 text-primary/30" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-xl -z-10" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation and our dental experts will assess your needs 
              and recommend the best treatment plan for you.
            </p>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default ServicesPage;
