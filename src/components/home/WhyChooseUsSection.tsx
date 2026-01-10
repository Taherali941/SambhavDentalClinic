import { Shield, Heart, Sparkles, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Strict Hygiene Protocols",
    description: "State-of-the-art sterilization and sanitization practices for your safety.",
  },
  {
    icon: Heart,
    title: "Painless Treatments",
    description: "Advanced techniques and gentle care for a comfortable, anxiety-free experience.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "Highly qualified dentists with years of experience and specialized training.",
  },
  {
    icon: Sparkles,
    title: "Modern Equipment",
    description: "Latest dental technology for accurate diagnosis and effective treatments.",
  },
  {
    icon: Users,
    title: "Patient-First Approach",
    description: "Personalized care plans tailored to your unique dental needs and goals.",
  },
  {
    icon: Clock,
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden costs. Honest consultations always.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Comfort and Safety Are Our Top Priorities
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We combine expertise, modern technology, and compassionate care to deliver 
              dental experiences that exceed expectations. Every visit is designed to be 
              stress-free and comfortable.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-dental-teal-light flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-primary rounded-3xl p-10 text-primary-foreground">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-2xl bg-primary-foreground/10">
                  <p className="text-5xl font-bold mb-2">15+</p>
                  <p className="text-sm opacity-80">Years of Experience</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-primary-foreground/10">
                  <p className="text-5xl font-bold mb-2">10K+</p>
                  <p className="text-sm opacity-80">Happy Patients</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-primary-foreground/10">
                  <p className="text-5xl font-bold mb-2">4.9</p>
                  <p className="text-sm opacity-80">Google Rating</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-primary-foreground/10">
                  <p className="text-5xl font-bold mb-2">98%</p>
                  <p className="text-sm opacity-80">Success Rate</p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <blockquote className="text-lg italic opacity-90 mb-4">
                  "Gentle, painless, and reliable dental care that puts your comfort and smile first."
                </blockquote>
                <p className="font-semibold">— Our Promise to You</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-dental-sage-light rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-dental-mint rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
