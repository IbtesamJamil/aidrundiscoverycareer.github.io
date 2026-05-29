import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { companies } from "@/data/jobData";
import { ArrowLeft, Building2, Zap, Award } from "lucide-react";
import { useLocation } from "wouter";

export default function CompaniesPage() {
  const [, navigate] = useLocation();
  const [selectedType, setSelectedType] = useState<"all" | "pharma" | "startup">("all");

  const filteredCompanies = selectedType === "all" 
    ? companies 
    : companies.filter(c => c.type === selectedType);

  const pharmaCompanies = companies.filter(c => c.type === "pharma");
  const startupCompanies = companies.filter(c => c.type === "startup");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50 dark:to-slate-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold mb-4">Leading Companies</h1>
          <p className="text-lg opacity-90">
            Discover where AI drug discovery is happening
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Tabs for Company Types */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all">All Companies</TabsTrigger>
            <TabsTrigger value="pharma">Big Pharma</TabsTrigger>
            <TabsTrigger value="startup">AI Startups</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="space-y-8">
              {/* Big Pharma Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-emerald-600" />
                  Major Pharmaceutical Companies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pharmaCompanies.map(company => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>
              </div>

              {/* AI Startups Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-amber-600" />
                  AI-First Biotech Startups
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {startupCompanies.map(company => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pharma" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pharmaCompanies.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="startup" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {startupCompanies.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Industry Insights */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Industry Landscape</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                  Big Pharma Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All top 10 pharmaceutical companies have partnered with AI-driven drug discovery startups since 2023.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>✓ Target identification acceleration</li>
                  <li>✓ Clinical trial optimization</li>
                  <li>✓ Predictive toxicology</li>
                  <li>✓ Data sharing consortia</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" />
                  Startup Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  AI-first biotech startups are pioneering novel approaches to drug discovery and development.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>✓ Generative AI for molecular design</li>
                  <li>✓ End-to-end AI platforms</li>
                  <li>✓ Rapid iteration cycles</li>
                  <li>✓ Novel target identification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Market Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The AI in pharmaceuticals market is growing at 27.01% annually through 2035.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>✓ $13.9B in recent funding</li>
                  <li>✓ Increasing partnerships</li>
                  <li>✓ Accelerated timelines</li>
                  <li>✓ New therapeutic areas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Career Opportunities Across Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-emerald-50 dark:bg-emerald-950">
              <CardHeader>
                <CardTitle className="text-emerald-600 dark:text-emerald-400">At Big Pharma</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Integrate AI into established R&D pipelines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Lead cross-functional AI teams</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Work on multiple therapeutic areas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Manage large-scale data initiatives</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Navigate regulatory frameworks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-amber-50 dark:bg-amber-950">
              <CardHeader>
                <CardTitle className="text-amber-600 dark:text-amber-400">At AI Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Build cutting-edge AI platforms</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Rapid innovation and iteration</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Work on novel technologies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Direct impact on drug discovery</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Entrepreneurial environment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyCard({ company }: { company: typeof companies[0] }) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div>
            <CardTitle className="text-xl">{company.name}</CardTitle>
            <CardDescription>
              {company.type === "pharma" ? "Pharmaceutical Company" : "AI Biotech Startup"}
            </CardDescription>
          </div>
          <Badge className={company.type === "pharma" ? "bg-emerald-600" : "bg-amber-600"}>
            {company.type === "pharma" ? "Big Pharma" : "Startup"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{company.description}</p>
        
        <div>
          <h4 className="font-semibold text-sm mb-2">Focus Areas</h4>
          <div className="flex flex-wrap gap-2">
            {company.focus.map(area => (
              <Badge key={area} variant="secondary" className="text-xs">
                {area}
              </Badge>
            ))}
          </div>
        </div>

        {company.notableAchievement && (
          <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border-l-4 border-blue-500">
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">Notable Achievement</p>
            <p className="text-sm text-muted-foreground">{company.notableAchievement}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
