import { useRoute, Link } from "wouter";
import { caseStudies } from "@/data/caseStudies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Streamdown } from "streamdown";
import { useEffect } from "react";

export default function CaseStudy() {
  const [, params] = useRoute("/case/:id");
  const caseStudy = caseStudies.find(cs => cs.id === params?.id);

  // Reset scroll position to top when component mounts or case study changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-24 container py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Back Button */}
        <div className="container py-8">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Button>
          </Link>
        </div>

        {/* Hero */}
        <div className="container pb-12">
          <p className="text-sm text-muted-foreground mb-4">{caseStudy.subtitle}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{caseStudy.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{caseStudy.description}</p>
        </div>

        {/* Cover Image */}
        <div className="container pb-20">
          <div className="aspect-video bg-muted flex items-center justify-center rounded-md">
            <p className="text-muted-foreground">{caseStudy.coverImage}</p>
          </div>
        </div>

        {/* Content */}
        <div className="container pb-20">
          <div className="max-w-3xl mx-auto space-y-16">
            {caseStudy.content.map((block, index) => {
              if (block.type === 'text') {
                return (
                  <div key={index} className="prose prose-lg max-w-none">
                    <Streamdown>{block.content}</Streamdown>
                  </div>
                );
              }
              
              if (block.type === 'image') {
                return (
                  <figure key={index} className="space-y-4">
                    <div className="aspect-video bg-muted flex items-center justify-center rounded-md">
                      <p className="text-muted-foreground">{block.content}</p>
                    </div>
                    {block.caption && (
                      <figcaption className="text-sm text-muted-foreground text-center">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              
              if (block.type === 'video') {
                return (
                  <figure key={index} className="space-y-4">
                    <div className="aspect-video rounded-md overflow-hidden">
                      <iframe
                        src={block.content}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="text-sm text-muted-foreground text-center">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              
              return null;
            })}
          </div>
        </div>

        {/* Navigation to other cases */}
        <div className="border-t border-border">
          <div className="container py-20">
            <h3 className="text-2xl font-bold mb-8">More Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies
                .filter(cs => cs.id !== caseStudy.id)
                .slice(0, 2)
                .map((cs) => (
                  <Link key={cs.id} href={`/case/${cs.id}`}>
                    <div className="group block cursor-pointer">
                      <div className="aspect-video bg-muted flex items-center justify-center rounded-md group-hover:opacity-90 transition-opacity mb-4">
                        <p className="text-muted-foreground">{cs.coverImage}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{cs.subtitle}</p>
                      <h4 className="text-xl font-bold group-hover:opacity-70 transition-opacity">
                        {cs.title}
                      </h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
