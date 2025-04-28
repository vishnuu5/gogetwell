import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DocumentationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Documentation
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive guides to help you get the most out of
                GoGetWell.ai
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="sticky top-20 space-y-4">
                <h3 className="font-bold text-lg">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#getting-started"
                      className="text-teal-600 hover:underline"
                    >
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#user-guides"
                      className="text-teal-600 hover:underline"
                    >
                      User Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#api-reference"
                      className="text-teal-600 hover:underline"
                    >
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#integrations"
                      className="text-teal-600 hover:underline"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#troubleshooting"
                      className="text-teal-600 hover:underline"
                    >
                      Troubleshooting
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-3 space-y-12">
              <div id="getting-started" className="space-y-4">
                <h2 className="text-2xl font-bold">Getting Started</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Quick Start Guide</h3>
                    <p className="text-gray-500 mb-4">
                      Get up and running with GoGetWell.ai in minutes
                    </p>
                    <Link href="/resources/documentation/quick-start">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Account Setup</h3>
                    <p className="text-gray-500 mb-4">
                      Learn how to set up and configure your account
                    </p>
                    <Link href="/resources/documentation/account-setup">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">System Requirements</h3>
                    <p className="text-gray-500 mb-4">
                      Hardware and software requirements for optimal performance
                    </p>
                    <Link href="/resources/documentation/system-requirements">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">First-time User Guide</h3>
                    <p className="text-gray-500 mb-4">
                      A comprehensive guide for new users
                    </p>
                    <Link href="/resources/documentation/first-time-user">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div id="user-guides" className="space-y-4">
                <h2 className="text-2xl font-bold">User Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">
                      AI Documentation Assistant
                    </h3>
                    <p className="text-gray-500 mb-4">
                      How to use the AI to generate clinical notes
                    </p>
                    <Link href="/resources/documentation/ai-documentation">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Patient Monitoring</h3>
                    <p className="text-gray-500 mb-4">
                      Setting up and using patient monitoring features
                    </p>
                    <Link href="/resources/documentation/patient-monitoring">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">
                      Clinical Decision Support
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Leveraging AI for evidence-based recommendations
                    </p>
                    <Link href="/resources/documentation/clinical-decision-support">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Care Plan Generation</h3>
                    <p className="text-gray-500 mb-4">
                      Creating personalized care plans with AI
                    </p>
                    <Link href="/resources/documentation/care-plan-generation">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div id="api-reference" className="space-y-4">
                <h2 className="text-2xl font-bold">API Reference</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">API Overview</h3>
                    <p className="text-gray-500 mb-4">
                      Introduction to the GoGetWell.ai API
                    </p>
                    <Link href="/resources/documentation/api-overview">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Authentication</h3>
                    <p className="text-gray-500 mb-4">
                      How to authenticate with the API
                    </p>
                    <Link href="/resources/documentation/api-authentication">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Endpoints</h3>
                    <p className="text-gray-500 mb-4">
                      Detailed documentation of all API endpoints
                    </p>
                    <Link href="/resources/documentation/api-endpoints">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Code Examples</h3>
                    <p className="text-gray-500 mb-4">
                      Sample code in various languages
                    </p>
                    <Link href="/resources/documentation/api-examples">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div id="integrations" className="space-y-4">
                <h2 className="text-2xl font-bold">Integrations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">EHR Integrations</h3>
                    <p className="text-gray-500 mb-4">
                      Connecting with popular EHR systems
                    </p>
                    <Link href="/resources/documentation/ehr-integrations">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Practice Management</h3>
                    <p className="text-gray-500 mb-4">
                      Integrating with practice management software
                    </p>
                    <Link href="/resources/documentation/practice-management-integrations">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div id="troubleshooting" className="space-y-4">
                <h2 className="text-2xl font-bold">Troubleshooting</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Common Issues</h3>
                    <p className="text-gray-500 mb-4">
                      Solutions to frequently encountered problems
                    </p>
                    <Link href="/resources/documentation/common-issues">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-2">Error Messages</h3>
                    <p className="text-gray-500 mb-4">
                      Understanding and resolving error messages
                    </p>
                    <Link href="/resources/documentation/error-messages">
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
