import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About GoGetWell.ai
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to transform healthcare with AI-powered solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Story
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  GoGetWell.ai was founded in 2020 by a team of healthcare
                  professionals and AI experts who recognized the potential for
                  artificial intelligence to transform healthcare delivery.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed">
                  After witnessing firsthand the administrative burden faced by
                  healthcare providers and the impact on patient care, our
                  founders set out to create a solution that would allow
                  clinicians to focus on what matters most: their patients.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Today, GoGetWell.ai serves thousands of healthcare providers
                  across the country, helping them deliver better care with less
                  administrative burden.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/about.gif?height=550&width=500"
                  alt="GoGetWell.ai Team"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Patient-Centered</h3>
                <p className="text-gray-500">
                  We believe that technology should enhance the patient-provider
                  relationship, not replace it.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-500">
                  We continuously push the boundaries of what's possible with AI
                  in healthcare.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-500">
                  We maintain the highest standards of data privacy, security,
                  and ethical AI use.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed max-w-[900px] mx-auto mb-8">
              We're always looking for talented individuals who are passionate
              about transforming healthcare with AI.
            </p>
            <Link href="/careers">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                View Open Positions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
