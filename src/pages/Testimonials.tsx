import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { StickyBookingButton } from "@/components/StickyBookingButton";
import { Link } from "react-router-dom";
import { Star, Quote, Calendar } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Cosmetic Dentistry Patient",
    rating: 5,
    content: "Very gentle treatment, explained everything clearly. The staff made me feel so comfortable. I was nervous about getting veneers, but Dr. Chen made the whole process smooth and painless. Highly recommended for anyone with dental anxiety!",
    avatar: "SM",
    treatment: "Veneers & Smile Design",
    date: "December 2024",
  },
  {
    name: "James Wilson",
    role: "Root Canal Patient",
    rating: 5,
    content: "Clean clinic, painless root canal, friendly staff. I was dreading the procedure but Dr. Chen made it completely stress-free. The modern equipment really makes a difference. Best dental experience ever.",
    avatar: "JW",
    treatment: "Root Canal Treatment",
    date: "November 2024",
  },
  {
    name: "Emily Rodriguez",
    role: "Family Patient",
    rating: 5,
    content: "The whole family comes here now. Kids love the gentle approach, and we love the transparent pricing. No surprises, just great care. Dr. Chen takes time to explain everything to the children too.",
    avatar: "ER",
    treatment: "General Dentistry",
    date: "October 2024",
  },
  {
    name: "Michael Chen",
    role: "Implant Patient",
    rating: 5,
    content: "I had lost a tooth years ago and was finally ready to get an implant. Dr. Chen walked me through every step and the result is amazing. It looks and feels just like a natural tooth. Couldn't be happier!",
    avatar: "MC",
    treatment: "Dental Implants",
    date: "September 2024",
  },
  {
    name: "Amanda Foster",
    role: "Orthodontics Patient",
    rating: 5,
    content: "As an adult getting braces, I was a bit embarrassed at first. The team here was so supportive and professional. The clear aligners are practically invisible and my teeth are straighter already!",
    avatar: "AF",
    treatment: "Clear Aligners",
    date: "August 2024",
  },
  {
    name: "Robert Thompson",
    role: "Emergency Patient",
    rating: 5,
    content: "Had a dental emergency on a Saturday and they fit me in the same day. The pain was unbearable but they handled it quickly and professionally. So grateful for their emergency services.",
    avatar: "RT",
    treatment: "Emergency Care",
    date: "July 2024",
  },
  {
    name: "Lisa Patel",
    role: "Teeth Whitening Patient",
    rating: 5,
    content: "My teeth whitening results exceeded expectations! The staff was professional and the procedure was completely comfortable. I've been getting compliments on my smile ever since.",
    avatar: "LP",
    treatment: "Teeth Whitening",
    date: "June 2024",
  },
  {
    name: "David Kim",
    role: "Regular Patient",
    rating: 5,
    content: "I've been coming here for 3 years now for regular checkups. The consistency in care and the friendly atmosphere keep me coming back. They really do care about preventive care.",
    avatar: "DK",
    treatment: "Routine Checkups",
    date: "May 2024",
  },
];

const TestimonialsPage = () => {
  // Review Schema for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sambhav Dental Clinic",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
    review: testimonials.slice(0, 5).map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
      reviewBody: t.content,
    })),
  };

  return (
    <>
      <SEO
        title="Patient Reviews & Testimonials | Sambhav Dental Clinic"
        description="Read 500+ patient reviews of Sambhav Dental Clinic, Hinjewadi. 4.9★ Google rating. Real experiences from patients about root canal, implants, teeth whitening, and more."
        keywords="sambhav dental reviews, dentist reviews pune, dental clinic testimonials, patient feedback hinjewadi, best rated dentist pune"
        canonical="/testimonials"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dental-cream via-background to-dental-teal-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Patient Reviews
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What Our Patients Say About Us
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Real experiences from real patients. See why thousands of families 
                trust Sambhav Dental Clinic with their smiles.
              </p>

              {/* Google Rating Badge */}
              <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 shadow-card">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-left">
                  <p className="font-bold text-foreground text-xl">4.9</p>
                  <p className="text-sm text-muted-foreground">Based on 500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`bg-card rounded-2xl p-8 shadow-card relative ${
                    index === 0 || index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-dental-teal-light" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Treatment Badge */}
                  <span className="inline-block text-xs font-medium text-primary bg-dental-teal-light rounded-full px-3 py-1 mb-4">
                    {testimonial.treatment}
                  </span>

                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
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
              Ready to Join Our Happy Patients?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience the same gentle, professional care that our patients rave about. 
              Book your appointment today!
            </p>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Calendar className="w-5 h-5" />
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </section>
        </main>
        <Footer />
        <StickyBookingButton />
      </div>
    </>
  );
};

export default TestimonialsPage;
