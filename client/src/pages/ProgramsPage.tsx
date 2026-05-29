import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { academicPrograms } from "@/data/jobData";
import { ArrowLeft, MapPin, Clock, BookOpen, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function ProgramsPage() {
  const [, navigate] = useLocation();
  const [selectedProgram, setSelectedProgram] = useState(academicPrograms[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50 dark:to-slate-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-lg opacity-90">
            Top Master's programs specializing in AI for drug discovery
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Program List */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <h3 className="text-lg font-semibold mb-4">Programs ({academicPrograms.length})</h3>
              <div className="space-y-2">
                {academicPrograms.map(program => (
                  <button
                    key={program.id}
                    onClick={() => setSelectedProgram(program)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedProgram.id === program.id
                        ? "bg-purple-100 dark:bg-purple-900 border-2 border-purple-600"
                        : "bg-slate-50 dark:bg-slate-800 border border-border hover:border-purple-400"
                    }`}
                  >
                    <div className="font-medium text-sm">{program.university}</div>
                    <div className="text-xs text-muted-foreground mt-1">{program.duration}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4">
                  <Badge className="bg-purple-600 text-white mb-3">{selectedProgram.format}</Badge>
                  <CardTitle className="text-3xl mb-2">{selectedProgram.name}</CardTitle>
                  <CardDescription className="text-base">{selectedProgram.university}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold">Location</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedProgram.location}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold">Duration</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedProgram.duration}</p>
                  </div>
                </div>

                {/* Focus Areas */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold">Program Focus</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.focus.map(area => (
                      <Badge key={area} variant="secondary" className="bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Career Outcomes */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-pink-600" />
                    <h4 className="font-semibold">Career Outcomes</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedProgram.careerOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground">
                        <span className="text-pink-600 font-semibold">→</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => window.open(selectedProgram.url, '_blank')}
                  >
                    Learn More
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Visit the official program website for applications and requirements
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Program Comparison */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Program Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-semibold">University</th>
                  <th className="text-left py-4 px-4 font-semibold">Format</th>
                  <th className="text-left py-4 px-4 font-semibold">Duration</th>
                  <th className="text-left py-4 px-4 font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                {academicPrograms.map(program => (
                  <tr key={program.id} className="border-b border-border hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="py-4 px-4 font-medium">{program.university}</td>
                    <td className="py-4 px-4">
                      <Badge variant="outline">{program.format}</Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{program.duration}</td>
                    <td className="py-4 px-4 text-muted-foreground">{program.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why These Programs */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Why These Programs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Specialized Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Programs integrate AI/ML with pharmaceutical sciences, providing comprehensive training in both computational and domain knowledge.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Industry Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many programs include capstone projects with leading pharma companies and biotech startups, providing real-world experience.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Career Placement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Graduates are highly sought after by pharmaceutical companies, biotech firms, and research institutions worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
