import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Team
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Help us transform healthcare with AI
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Why Work With Us
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed max-w-[900px]">
                At GoGetWell.ai, we're on a mission to transform healthcare with
                artificial intelligence. We're looking for passionate
                individuals who want to make a real difference in the lives of
                healthcare providers and their patients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Meaningful Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our work directly improves healthcare delivery and patient
                    outcomes. Join us in creating technology that makes a real
                    difference.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Innovation-First Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We're at the cutting edge of AI and healthcare. You'll work
                    with the latest technologies and contribute to
                    groundbreaking solutions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth & Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We invest in our team's growth with continuous learning
                    opportunities, mentorship, and career advancement paths.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Open Positions
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Senior Machine Learning Engineer</CardTitle>
                    <CardDescription>Full-time • Remote</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      We're looking for an experienced ML engineer to help
                      develop and improve our AI models for healthcare
                      applications.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/ml-engineer">
                      <Button variant="outline">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frontend Developer</CardTitle>
                    <CardDescription>Full-time • Remote</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Join our frontend team to create intuitive, accessible
                      interfaces for healthcare professionals.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/frontend-developer">
                      <Button variant="outline">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Healthcare Solutions Consultant</CardTitle>
                    <CardDescription>Full-time • Hybrid</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Work with healthcare organizations to understand their
                      needs and help implement our AI solutions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/solutions-consultant">
                      <Button variant="outline">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter">
                Don't See a Position That Fits?
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed max-w-[900px] mx-auto">
                We're always looking for talented individuals to join our team.
                Send us your resume and let us know how you can contribute to
                our mission.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
