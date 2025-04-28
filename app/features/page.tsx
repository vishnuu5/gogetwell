import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Shield, Zap } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Healthcare Professionals
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how GoGetWell.ai can transform your healthcare practice
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-teal-500" />}
              title="AI-Powered Documentation"
              description="Automatically generate clinical notes, saving hours of documentation time. Our AI understands medical terminology and creates accurate, compliant notes."
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6 text-teal-500" />}
              title="Patient Monitoring"
              description="Track patient progress and receive alerts for concerning trends. Monitor vital signs, medication adherence, and treatment outcomes in real-time."
            />
            <FeatureCard
              icon={<CheckCircle className="h-6 w-6 text-teal-500" />}
              title="Clinical Decision Support"
              description="Get evidence-based recommendations tailored to each patient. Our AI analyzes patient data and provides suggestions based on the latest clinical guidelines."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-teal-500" />}
              title="HIPAA Compliant"
              description="Enterprise-grade security to protect sensitive patient data. All data is encrypted at rest and in transit, with regular security audits."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-teal-500" />}
              title="Seamless Integration"
              description="Works with your existing EHR and practice management systems. Easy integration with Epic, Cerner, Allscripts, and other major healthcare platforms."
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6 text-teal-500" />}
              title="Personalized Care Plans"
              description="Generate customized care plans based on patient data and best practices. Tailor treatment plans to individual patient needs and preferences."
            />
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/login">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
