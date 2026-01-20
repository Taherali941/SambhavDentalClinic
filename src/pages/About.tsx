import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { StickyBookingButton } from "@/components/StickyBookingButton";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Heart, Users, Calendar } from "lucide-react";
import dentistPortrait from "@/assets/dentist-portrait.jpg";

const credentials = [
  "Bachelor of Dental Surgery (BDS)",
  "Master of Dental Surgery (MDS) - Prosthodontics",
  "Member, Indian Dental Association",
  "Advanced Training in Dental Implants",
  "Certified in Cosmetic Dentistry",
];

const values = [
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    description: "Every decision we make is guided by what's best for your oral health and comfort.",
  },
  {
    icon: Award,
    title: "Excellence in Care",
    description: "We stay updated with the latest techniques and technologies to provide the best outcomes.",
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description: "We treat patients of all ages, from toddlers to seniors, with the same gentle care.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dental-teal-light via-background to-dental-sage-light">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Meet Dr. Priyanka Kaushal, Your Trusted Dental Expert
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With over 20 years of experience in dental care, Dr. Priyanka Kaushal has dedicated 
                  her career to providing gentle, comprehensive dental services that 
                  prioritize patient comfort and long-term oral health.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Her philosophy is simple: every patient deserves honest, transparent care 
                  delivered with kindness and expertise. Whether you're here for a routine 
                  cleaning or a complex procedure, you'll receive the same exceptional attention.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    <Calendar className="w-5 h-5" />
                    Book Appointment with Dr. Priyanka
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={dentistPortrait}
                  alt="Dr. Priyanka Kaushal - Lead Dentist"
                  className="rounded-3xl shadow-xl w-full object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">20+ Years</p>
                      <p className="text-sm text-muted-foreground">of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Qualifications & Certifications
                </h2>
                <p className="text-muted-foreground">
                  Dr. Priyanka's extensive training ensures you receive the highest standard of care.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card">
                <ul className="space-y-4">
                  {credentials.map((credential) => (
                    <li key={credential} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-dental-teal-light flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                These principles guide everything we do at Sambhav Dental Clinic.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-dental-teal-light flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Experience the Sambhav Difference?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Schedule your first appointment today and discover why thousands of patients 
              trust Dr. Priyanka Kaushal with their smiles.
            </p>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Book Your Appointment
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

export default AboutPage;
