import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/pricing-card";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that's right for your practice
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
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

          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
              We offer tailored solutions for healthcare organizations with
              specific requirements. Contact our sales team to discuss your
              needs.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
