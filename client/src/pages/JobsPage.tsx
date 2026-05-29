import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { jobRoles, salaryData } from "@/data/jobData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from "recharts";
import { ArrowLeft, Briefcase, DollarSign, Clock, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function JobsPage() {
  const [, navigate] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedJob, setSelectedJob] = useState(jobRoles[0]);

  const categories = ["all", "technical", "research", "leadership"];
  const filteredJobs = selectedCategory === "all" 
    ? jobRoles 
    : jobRoles.filter(job => job.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50 dark:to-slate-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold mb-4">Career Roles in AI Drug Discovery</h1>
          <p className="text-lg opacity-90">
            Explore diverse roles from wet lab validation to computational leadership
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Role List */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
              <div className="space-y-2 mb-8">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-4">Available Roles ({filteredJobs.length})</h3>
              <div className="space-y-2">
                {filteredJobs.map(job => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedJob.id === job.id
                        ? "bg-blue-100 dark:bg-blue-900 border-2 border-blue-600"
                        : "bg-slate-50 dark:bg-slate-800 border border-border hover:border-blue-400"
                    }`}
                  >
                    <div className="font-medium text-sm">{job.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{job.salaryRange}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Job Details */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-3xl mb-2">{selectedJob.title}</CardTitle>
                    <CardDescription className="text-base">{selectedJob.description}</CardDescription>
                  </div>
                  <Badge className="bg-blue-600 text-white capitalize">
                    {selectedJob.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Salary Info */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold">Salary Range</h4>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{selectedJob.salaryRange}</div>
                  <p className="text-sm text-muted-foreground">Average starting salary: ${selectedJob.salary.toLocaleString()}</p>
                </div>

                {/* Experience */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    <h4 className="font-semibold">Experience Level</h4>
                  </div>
                  <p className="text-muted-foreground">{selectedJob.experience}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold">Key Responsibilities</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground">
                        <span className="text-blue-600 font-semibold min-w-fit">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-semibold">Required Skills</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-slate-100 dark:bg-slate-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    Learn More About This Role
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Salary Comparison Chart */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Salary Comparison Across Roles</h2>
          <Card className="border-0 shadow-lg p-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="role" 
                  angle={-45} 
                  textAnchor="end" 
                  height={100}
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value) => `$${value.toLocaleString()}`}
                  contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "none", borderRadius: "8px", color: "white" }}
                />
                <Bar dataKey="salary" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Role Highlights */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Featured Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hybrid Scientist Highlight */}
            <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">Hybrid Scientist</CardTitle>
                <CardDescription>The Bridge Between Wet Lab and AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Hybrid scientists are increasingly critical in biotech, managing the iterative cycle between computational predictions and experimental validation.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>✓ Design AI-informed experiments</li>
                  <li>✓ Validate computational predictions in the lab</li>
                  <li>✓ Generate data to improve AI models</li>
                  <li>✓ Bridge computational and experimental teams</li>
                </ul>
              </CardContent>
            </Card>

            {/* Wet Lab Scientist Highlight */}
            <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950">
              <CardHeader>
                <CardTitle className="text-cyan-600 dark:text-cyan-400">Experimental Validation Scientist</CardTitle>
                <CardDescription>Essential for AI Model Improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Wet lab scientists generate the high-quality experimental data that makes AI models smarter and more reliable.
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>✓ Synthesize and test AI-predicted molecules</li>
                  <li>✓ Conduct biochemical and cell-based assays</li>
                  <li>✓ Identify reasons for AI prediction failures</li>
                  <li>✓ Provide crucial feedback to improve models</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
