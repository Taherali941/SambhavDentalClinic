import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  AlertCircle,
} from "lucide-react";

const treatmentOptions = [
  "General Checkup",
  "Teeth Cleaning",
  "Cosmetic Dentistry",
  "Root Canal Treatment",
  "Dental Implants",
  "Orthodontics",
  "Emergency Care",
  "Other",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    treatment: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.treatment) {
      toast({
        title: "Please fill in required fields",
        description: "Name, phone, and treatment type are required.",
        variant: "destructive",
      });
      return;
    }

    // Success toast
    toast({
      title: "Appointment Request Sent!",
      description: "We'll call you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      treatment: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dental-teal-light via-background to-dental-mint">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Book Appointment
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Schedule Your Dental Visit Today
              </h1>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will contact you within 24 hours 
                to confirm your appointment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Request an Appointment
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill in your details and preferred time. We'll confirm your booking shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Date
                        </label>
                        <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Treatment Type *
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a treatment</option>
                        {treatmentOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Message
                      </label>
                      <Textarea
                        placeholder="Tell us more about your dental concerns..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="xl" className="w-full">
                      <Calendar className="w-5 h-5" />
                      Request Appointment
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Emergency Notice */}
                <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Dental Emergency?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        For urgent dental issues, call our emergency line immediately.
                      </p>
                      <a href="tel:+1234567899">
                        <Button variant="destructive" size="sm">
                          <Phone className="w-4 h-4" />
                          (123) 456-7899
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-dental-teal-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                      <a href="tel:+1234567890" className="text-primary font-medium">
                        (123) 456-7890
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mon-Sat, 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-dental-teal-light flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                      <a href="mailto:hello@smilecare.com" className="text-primary font-medium">
                        hello@smilecare.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-dental-teal-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                      <p className="text-foreground">
                        123 Dental Avenue<br />
                        Healthcare District<br />
                        City - 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-dental-teal-light flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
                      <div className="text-sm space-y-1">
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Monday - Friday</span>
                          <span className="text-foreground">9:00 AM - 7:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="text-foreground">9:00 AM - 5:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="text-foreground">Closed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-10 pb-20">
          <div className="container">
            <div className="bg-dental-teal-light rounded-3xl h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">
                  123 Dental Avenue, Healthcare District, City - 12345
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline mt-2 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
