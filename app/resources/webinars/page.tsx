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
import Image from "next/image";

export default function WebinarsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Webinars
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Educational webinars and training sessions to help you get the
                most out of GoGetWell.ai
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/webinars.jpg?height=200&width=400"
                  alt="Webinar thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Getting Started with GoGetWell.ai</CardTitle>
                <CardDescription>Recorded • 45 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A comprehensive introduction to GoGetWell.ai for new users.
                  Learn how to set up your account, navigate the platform, and
                  start using key features.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/webinars/getting-started">
                  <Button variant="outline">Watch Webinar</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/webinars.jpg?height=200&width=400"
                  alt="Webinar thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Advanced Documentation Techniques</CardTitle>
                <CardDescription>Recorded • 60 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Take your documentation skills to the next level. Learn
                  advanced techniques for using the AI documentation assistant
                  to maximize efficiency.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/webinars/advanced-documentation">
                  <Button variant="outline">Watch Webinar</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/webinars.jpg?height=200&width=400"
                  alt="Webinar thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Clinical Decision Support Best Practices</CardTitle>
                <CardDescription>Recorded • 55 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Learn how to effectively use the clinical decision support
                  features to improve patient outcomes and streamline your
                  clinical workflow.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/webinars/clinical-decision-support">
                  <Button variant="outline">Watch Webinar</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/webinars.jpg?height=200&width=400"
                  alt="Webinar thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>EHR Integration Workshop</CardTitle>
                <CardDescription>Recorded • 70 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A technical workshop on integrating GoGetWell.ai with popular
                  EHR systems. Includes step-by-step instructions and
                  troubleshooting tips.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/webinars/ehr-integration">
                  <Button variant="outline">Watch Webinar</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/webinars.jpg?height=200&width=400"
                  alt="Webinar thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Maximizing ROI with GoGetWell.ai</CardTitle>
                <CardDescription>Recorded • 50 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  For practice administrators and healthcare executives. Learn
                  how to measure and maximize the return on investment from your
                  GoGetWell.ai implementation.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/webinars/maximizing-roi">
                  <Button variant="outline">Watch Webinar</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/webinars.jpg?height=200&width=400"
                  alt="Webinar thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>HIPAA Compliance and Security</CardTitle>
                <CardDescription>Recorded • 65 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  An in-depth look at how GoGetWell.ai ensures HIPAA compliance
                  and maintains the highest standards of data security and
                  privacy.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/webinars/hipaa-compliance">
                  <Button variant="outline">Watch Webinar</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Upcoming Live Webinars</h2>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>What's New in GoGetWell.ai 2.0</CardTitle>
                  <CardDescription>
                    Live • June 15, 2023 • 2:00 PM EST
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Join our product team for a live demonstration of the new
                    features and improvements in GoGetWell.ai version 2.0. Learn
                    how these updates can enhance your practice workflow and
                    patient care.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/resources/webinars/register/whats-new">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Register Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    AI in Specialty Care: Focus on Cardiology
                  </CardTitle>
                  <CardDescription>
                    Live • June 22, 2023 • 1:00 PM EST
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    A specialized webinar for cardiologists and cardiology
                    practices. Learn how GoGetWell.ai's features can be tailored
                    to cardiology workflows and improve cardiac patient care.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/resources/webinars/register/cardiology">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Register Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
