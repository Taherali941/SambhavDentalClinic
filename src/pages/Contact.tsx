import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
} from "lucide-react";

const treatmentOptions = [
  "General Checkup",
  "Teeth Cleaning",
  "Cosmetic Dentistry",
  "Root Canal Treatment",
  "Dental Implants",
  "Orthodontics",
  "Other",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
                          placeholder="Your Name"
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
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                        />
                      </div>
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
                {/* Contact Cards */}
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-dental-teal-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                      <a href="tel:+918237100519" className="text-primary font-medium">
                        8237100519
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Sunday
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
                        Near Metrostation,<br />
                        Jambhulkar Complex,<br />
                        Shivaji Chowk, Hinjewadi,<br />
                        Pune - 57
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
                          <span className="text-muted-foreground">Morning</span>
                          <span className="text-foreground">11:00 AM - 2:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Evening</span>
                          <span className="text-foreground">6:00 PM - 9:00 PM</span>
                        </p>
                        <p className="text-primary font-medium">Monday - Sunday</p>
                      </div>
                    </div>
                  </div>
                </div>
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
