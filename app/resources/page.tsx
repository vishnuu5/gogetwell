import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Video } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Resources
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Helpful guides, documentation, and resources to get the most out
                of GoGetWell.ai
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="inline-flex items-center justify-center p-2 bg-teal-50 rounded-full mb-4">
                  <BookOpen className="h-6 w-6 text-teal-500" />
                </div>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Comprehensive guides to using GoGetWell.ai
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Detailed documentation on how to set up and use all features
                  of GoGetWell.ai, including API references and integration
                  guides.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/documentation">
                  <Button variant="outline">
                    View Documentation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="inline-flex items-center justify-center p-2 bg-teal-50 rounded-full mb-4">
                  <FileText className="h-6 w-6 text-teal-500" />
                </div>
                <CardTitle>Case Studies</CardTitle>
                <CardDescription>
                  Success stories from healthcare providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Real-world examples of how healthcare providers have
                  implemented GoGetWell.ai to improve patient outcomes and
                  practice efficiency.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/case-studies">
                  <Button variant="outline">
                    Read Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="inline-flex items-center justify-center p-2 bg-teal-50 rounded-full mb-4">
                  <Video className="h-6 w-6 text-teal-500" />
                </div>
                <CardTitle>Webinars</CardTitle>
                <CardDescription>
                  Educational webinars and training videos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Watch on-demand webinars and training sessions to learn best
                  practices and get the most out of GoGetWell.ai.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources/webinars">
                  <Button variant="outline">
                    Watch Webinars <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Help Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Find answers to common questions about GoGetWell.ai
                    features, pricing, and implementation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/resources/help-center">
                    <Button variant="outline">View FAQs</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Need help with a technical issue? Our support team is
                    available to assist you.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button variant="outline">Contact Support</Button>
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
