import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Whiten Teeth at Home: Safe & Effective Methods",
    slug: "how-to-whiten-teeth-at-home",
    excerpt: "Discover proven teeth whitening methods you can try at home, from natural remedies to professional-grade products recommended by dentists.",
    category: "Teeth Whitening",
    readTime: "5 min read",
    date: "Jan 8, 2025",
  },
  {
    id: 2,
    title: "Is Root Canal Painful? Everything You Need to Know",
    slug: "is-root-canal-painful",
    excerpt: "Learn the truth about root canal treatment, modern pain management techniques, and why this procedure is actually pain-relieving.",
    category: "Root Canal",
    readTime: "4 min read",
    date: "Jan 5, 2025",
  },
  {
    id: 3,
    title: "Best Toothpaste for Sensitive Teeth: Dentist Recommendations",
    slug: "best-toothpaste-for-sensitive-teeth",
    excerpt: "Our dental experts share their top picks for toothpaste that effectively treats tooth sensitivity and protects your enamel.",
    category: "Dental Care",
    readTime: "6 min read",
    date: "Jan 2, 2025",
  },
  {
    id: 4,
    title: "How Much Do Dental Implants Cost? A Complete Guide",
    slug: "dental-implants-cost-guide",
    excerpt: "Understand the factors affecting dental implant pricing, financing options, and why they're a worthwhile investment for your smile.",
    category: "Dental Implants",
    readTime: "7 min read",
    date: "Dec 28, 2024",
  },
  {
    id: 5,
    title: "Braces vs Invisalign: Which is Right for You?",
    slug: "braces-vs-invisalign",
    excerpt: "Compare traditional braces and Invisalign clear aligners to find the best orthodontic treatment for your lifestyle and budget.",
    category: "Orthodontics",
    readTime: "5 min read",
    date: "Dec 24, 2024",
  },
  {
    id: 6,
    title: "How Often Should You Visit the Dentist?",
    slug: "how-often-visit-dentist",
    excerpt: "Find out the recommended frequency for dental checkups and why regular visits are crucial for maintaining oral health.",
    category: "Dental Care",
    readTime: "4 min read",
    date: "Dec 20, 2024",
  },
];

export function BlogSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Dental Health Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expert Dental Tips & Advice
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay informed with our latest articles on dental care, treatments, and tips for a healthier smile.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <span className="inline-block text-xs font-semibold text-primary bg-dental-teal-light px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>

                {/* Read More Link */}
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all cursor-pointer">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
