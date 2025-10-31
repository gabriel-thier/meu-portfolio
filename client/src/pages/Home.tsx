import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";
import { Link } from "wouter";
import { Download, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if form was successfully submitted
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleFormSubmit = () => {
    setIsSubmitting(true);
  };

  const handleDownloadResume = () => {
    // User should replace this with their actual resume file
    toast.info('Please add your resume file to /public folder and update the link');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Digital Product Designer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Creating meaningful experiences through thoughtful design and user-centered solutions.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="container py-20 md:py-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Link key={caseStudy.id} href={`/case/${caseStudy.id}`}>
                <div className="group block cursor-pointer overflow-visible transition-transform duration-300 ease-out group-hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden rounded-md mb-4 transition-all duration-300 ease-out group-hover:shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground transition-opacity duration-300 group-hover:opacity-80">
                      {caseStudy.coverImage}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 transition-colors duration-300">{caseStudy.subtitle}</p>
                    <h3 className="text-xl font-bold mb-3 transition-opacity duration-300 group-hover:opacity-70">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {caseStudy.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-border">
          <div className="container py-20 md:py-32">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-48 flex-shrink-0 bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground text-sm text-center px-4">Your photo here</p>
                </div>
                
                <div className="flex-1">
                  <div className="space-y-4 text-muted-foreground mb-8">
                    <p>
                      I'm a digital product designer with a passion for creating intuitive and 
                      impactful user experiences. With expertise in user research, interface design, 
                      and prototyping, I help teams build products that users love.
                    </p>
                    <p>
                      My approach combines strategic thinking with attention to detail, ensuring 
                      that every design decision is grounded in user needs and business goals.
                    </p>
                    <p>
                      I've worked with startups and established companies across various industries, 
                      delivering solutions that drive engagement and growth.
                    </p>
                  </div>
                  
                  <Button 
                    onClick={handleDownloadResume}
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-border">
          <div className="container py-20 md:py-32">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
              <p className="text-muted-foreground text-center mb-12">
                Have a project in mind? Let's talk about how we can work together.
              </p>
              
              <form 
                action="https://formsubmit.co/gabriel.thier@gmail.com" 
                method="POST"
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href + "?success=true"} />
                
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
