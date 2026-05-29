import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "wouter";
import { Briefcase, BookOpen, Zap, Users, TrendingUp, ArrowRight } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-slate-50 dark:to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AI Drug Discovery
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/jobs")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Explore Roles
            </button>
            <button
              onClick={() => navigate("/programs")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => navigate("/companies")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Companies
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Transform <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Lives</span> with AI
                </h2>
                <p className="text-xl text-muted-foreground">
                  Discover career opportunities at the intersection of artificial intelligence and drug discovery. Where wet lab meets intelligent computation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/jobs")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  Explore Careers <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/programs")}
                >
                  Find Programs
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663710967560/efWzfiwC6qvNJNdbXdA5Nt/hero_ai_drug_discovery-AU3RxsMsosFnijSNcVGx3W.webp"
                alt="AI Drug Discovery Hero"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">The Future of Drug Discovery</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI is revolutionizing pharmaceutical research, but success requires collaboration between computational and experimental scientists.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Diverse Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From wet lab validation to computational modeling, explore 10+ specialized career paths in AI drug discovery.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle>Competitive Salaries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Salaries range from $95K to $250K+, with strong growth potential as AI transforms the industry.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Top Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading universities like UCSF, UC Berkeley, and Queen Mary offer specialized Master's programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Career Pathways</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple routes to success in AI drug discovery, from pure computation to hybrid roles bridging wet lab and AI.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663710967560/efWzfiwC6qvNJNdbXdA5Nt/career_paths_illustration-goq34XDsr23cq5Ghif3y3p.webp"
              alt="Career Paths in AI Drug Discovery"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Validation Cycle Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">The AI-Experimental Validation Cycle</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Success in AI drug discovery depends on the continuous feedback loop between computational predictions and wet lab validation.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663710967560/efWzfiwC6qvNJNdbXdA5Nt/validation_cycle-eoa66XiYmwX7jSi7HiNEnE.webp"
              alt="AI Drug Discovery Validation Cycle"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-muted-foreground">Specialized Career Roles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">$95K-$250K+</div>
              <p className="text-muted-foreground">Salary Range</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <p className="text-muted-foreground">Top Academic Programs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">12+</div>
              <p className="text-muted-foreground">Leading Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Launch Your Career?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Explore job roles, academic programs, and leading companies in AI drug discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/jobs")}
            >
              Explore Roles
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate("/programs")}
            >
              Find Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate("/jobs")} className="hover:text-white transition-colors">Career Roles</button></li>
                <li><button onClick={() => navigate("/programs")} className="hover:text-white transition-colors">Academic Programs</button></li>
                <li><button onClick={() => navigate("/companies")} className="hover:text-white transition-colors">Companies</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Career Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skills Assessment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Salary Data</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Industry Trends</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technologies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Future of AI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2026 AI Drug Discovery Explorer. Empowering careers at the intersection of AI and pharmaceutical innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
