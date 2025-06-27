"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, LineChart } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Enterprise Digital Transformation",
      client: "Global Manufacturing Corp",
      description: "Modernized legacy systems and implemented cloud infrastructure, resulting in 40% improved operational efficiency.",
      icon: Building2
    },
    {
      title: "Customer Experience Enhancement",
      client: "Retail Solutions Inc",
      description: "Developed an omnichannel platform that increased customer engagement by 65% and sales conversion by 25%.",
      icon: Users
    },
    {
      title: "Data Analytics Implementation",
      client: "FinTech Innovations",
      description: "Deployed advanced analytics solutions that improved decision-making accuracy by 85% and reduced processing time by 60%.",
      icon: LineChart
    }
  ];

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore how we've helped organizations achieve their digital transformation goals through innovative solutions and strategic implementations.
        </p>
        
        <div className="grid gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        {study.client}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{study.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}