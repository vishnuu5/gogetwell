import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Shield, Zap } from "lucide-react";
import Image from "next/image";
import { TestimonialCard } from "@/components/testimonial-card";
import { FeatureCard } from "@/components/feature-card";
import { PricingCard } from "@/components/pricing-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-Powered Healthcare Solutions for Better Patient Outcomes
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Empower your healthcare practice with intelligent tools that
                  streamline workflows, enhance patient care, and improve
                  clinical outcomes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/home.gif?height=500&width=500"
                  alt="GoGetWell.ai Dashboard"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Healthcare Challenges, Solved
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Healthcare providers face overwhelming administrative burdens
                and struggle to deliver personalized care at scale.
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4 bg-gray-50 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold">The Problem</h3>
              <p className="text-gray-500">
                Healthcare providers are overwhelmed with documentation,
                administrative tasks, and increasing patient loads, leading to
                burnout and reduced quality of care.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 bg-teal-50 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full">
                <Zap className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold">Our Solution</h3>
              <p className="text-gray-500">
                GoGetWell.ai uses artificial intelligence to automate
                documentation, provide clinical decision support, and enable
                personalized patient care at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Key Features
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Powerful tools designed specifically for healthcare
                professionals
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-teal-500" />}
              title="AI-Powered Documentation"
              description="Automatically generate clinical notes, saving hours of documentation time."
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6 text-teal-500" />}
              title="Patient Monitoring"
              description="Track patient progress and receive alerts for concerning trends."
            />
            <FeatureCard
              icon={<CheckCircle className="h-6 w-6 text-teal-500" />}
              title="Clinical Decision Support"
              description="Get evidence-based recommendations tailored to each patient."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-teal-500" />}
              title="HIPAA Compliant"
              description="Enterprise-grade security to protect sensitive patient data."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-teal-500" />}
              title="Seamless Integration"
              description="Works with your existing EHR and practice management systems."
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6 text-teal-500" />}
              title="Personalized Care Plans"
              description="Generate customized care plans based on patient data and best practices."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Healthcare Professionals
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our users are saying about GoGetWell.ai
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <TestimonialCard
              quote="GoGetWell.ai has transformed our practice. We've reduced documentation time by 60% and improved patient satisfaction scores."
              author="Dr. Sarah Johnson"
              role="Family Medicine Physician"
            />
            <TestimonialCard
              quote="The clinical decision support has been invaluable for our team. It's like having a specialist consultant available 24/7."
              author="Dr. Michael Chen"
              role="Internal Medicine"
            />
            <TestimonialCard
              quote="Implementation was seamless and the ROI has been incredible. Our providers are less burned out and patients receive better care."
              author="Lisa Rodriguez"
              role="Practice Manager"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that's right for your practice
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <PricingCard
              title="Starter"
              price="$199"
              description="Perfect for small practices"
              features={[
                "AI documentation assistant",
                "Basic patient monitoring",
                "Email support",
                "1 provider license",
              ]}
              buttonText="Get Started"
              buttonLink="/signup"
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$399"
              description="Ideal for growing practices"
              features={[
                "Everything in Starter",
                "Advanced clinical decision support",
                "Custom care plan generation",
                "Priority support",
                "Up to 5 provider licenses",
              ]}
              buttonText="Get Started"
              buttonLink="/signup"
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For large healthcare organizations"
              features={[
                "Everything in Professional",
                "Custom integrations",
                "Advanced analytics",
                "Dedicated account manager",
                "Unlimited provider licenses",
              ]}
              buttonText="Contact Sales"
              buttonLink="/contact"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Practice?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of healthcare providers who are delivering better
                care with GoGetWell.ai
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">GoGetWell.ai</h3>
              <p className="text-sm text-gray-400">
                AI-powered healthcare solutions for better patient outcomes.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/resources/documentation"
                    className="hover:text-white"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/help-center"
                    className="hover:text-white"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/case-studies"
                    className="hover:text-white"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/resources/webinars" className="hover:text-white">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/legal/privacy-policy"
                    className="hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/terms-of-service"
                    className="hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/hipaa-compliance"
                    className="hover:text-white"
                  >
                    HIPAA Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/legal/security" className="hover:text-white">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2023 GoGetWell.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
