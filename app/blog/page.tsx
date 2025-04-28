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

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Blog
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, updates, and thought leadership from GoGetWell.ai
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
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>
                  The Future of AI in Healthcare Documentation
                </CardTitle>
                <CardDescription>May 15, 2023 • 5 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Explore how artificial intelligence is transforming the way
                  healthcare providers document patient encounters and how it's
                  improving care delivery.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/ai-healthcare-documentation">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>
                  Reducing Physician Burnout with AI Assistants
                </CardTitle>
                <CardDescription>April 28, 2023 • 4 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Learn how AI assistants are helping reduce administrative
                  burden and combat physician burnout in healthcare settings.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/reducing-physician-burnout">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Case Study: Memorial Health System</CardTitle>
                <CardDescription>April 10, 2023 • 6 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  How Memorial Health System reduced documentation time by 45%
                  and improved patient satisfaction with GoGetWell.ai.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/memorial-health-case-study">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>
                  HIPAA Compliance and AI: What You Need to Know
                </CardTitle>
                <CardDescription>March 22, 2023 • 7 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A comprehensive guide to understanding HIPAA compliance when
                  implementing AI solutions in healthcare settings.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/hipaa-compliance-ai">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>
                  The Role of AI in Clinical Decision Support
                </CardTitle>
                <CardDescription>March 8, 2023 • 5 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  How artificial intelligence is enhancing clinical
                  decision-making and improving patient outcomes across
                  healthcare specialties.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/ai-clinical-decision-support">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>
                  Implementing AI in Your Practice: A Step-by-Step Guide
                </CardTitle>
                <CardDescription>
                  February 15, 2023 • 8 min read
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A practical guide for healthcare providers looking to
                  implement AI solutions in their practice, including best
                  practices and common pitfalls.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/implementing-ai-guide">
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
