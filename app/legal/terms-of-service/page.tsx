export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Terms of Service
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Last updated: May 1, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-none">
            <h2>Introduction</h2>
            <p>
              Welcome to GoGetWell.ai. These Terms of Service ("Terms") govern
              your access to and use of the GoGetWell.ai website and services
              (collectively, the "Services"). Please read these Terms carefully
              before using our Services.
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these
              Terms. If you do not agree to these Terms, you may not access or
              use the Services.
            </p>

            <h2>Eligibility</h2>
            <p>
              You must be at least 18 years old and have the legal authority to
              enter into these Terms to use our Services. If you are using the
              Services on behalf of an organization, you represent and warrant
              that you have the authority to bind that organization to these
              Terms.
            </p>

            <h2>Account Registration</h2>
            <p>
              To access certain features of the Services, you may need to
              register for an account. You agree to provide accurate, current,
              and complete information during the registration process and to
              update such information to keep it accurate, current, and
              complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and
              for all activities that occur under your account. You agree to
              notify us immediately of any unauthorized use of your account or
              any other breach of security.
            </p>

            <h2>Use of Services</h2>
            <h3>Permitted Use</h3>
            <p>
              You may use the Services only for lawful purposes and in
              accordance with these Terms. You agree not to use the Services:
            </p>
            <ul>
              <li>In any way that violates any applicable law or regulation</li>
              <li>
                To transmit any material that is harmful, threatening, abusive,
                or otherwise objectionable
              </li>
              <li>
                To impersonate or attempt to impersonate GoGetWell.ai, a
                GoGetWell.ai employee, or any other person or entity
              </li>
              <li>
                To engage in any conduct that restricts or inhibits anyone's use
                or enjoyment of the Services
              </li>
            </ul>

            <h3>Prohibited Activities</h3>
            <p>
              You agree not to engage in any of the following prohibited
              activities:
            </p>
            <ul>
              <li>
                Copying, distributing, or disclosing any part of the Services
              </li>
              <li>Using any automated system to access the Services</li>
              <li>
                Attempting to interfere with the proper working of the Services
              </li>
              <li>
                Circumventing, disabling, or otherwise interfering with
                security-related features of the Services
              </li>
            </ul>

            <h2>Intellectual Property Rights</h2>
            <p>
              The Services and their entire contents, features, and
              functionality (including but not limited to all information,
              software, text, displays, images, and the design, selection, and
              arrangement thereof) are owned by GoGetWell.ai, its licensors, or
              other providers of such material and are protected by copyright,
              trademark, patent, trade secret, and other intellectual property
              or proprietary rights laws.
            </p>
            <p>
              These Terms do not grant you any right, title, or interest in the
              Services or any content, features, or functionality of the
              Services.
            </p>

            <h2>User Content</h2>
            <p>
              The Services may allow you to submit, upload, publish, or
              otherwise make available content, including but not limited to
              text, photographs, videos, and other materials ("User Content").
              You retain all rights in, and are solely responsible for, the User
              Content you make available through the Services.
            </p>
            <p>
              By making any User Content available through the Services, you
              grant to GoGetWell.ai a non-exclusive, transferable,
              sublicensable, worldwide, royalty-free license to use, copy,
              modify, create derivative works based upon, distribute, publicly
              display, and publicly perform your User Content in connection with
              operating and providing the Services.
            </p>

            <h2>Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy,
              which explains how we collect, use, and disclose information about
              you in connection with your use of the Services.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to all or part of the
              Services, without notice, for any conduct that we, in our sole
              discretion, believe is in violation of these Terms or is harmful
              to other users of the Services, us, or third parties, or for any
              other reason.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT
              NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              IN NO EVENT WILL GOGETWELL.AI, ITS AFFILIATES, OR THEIR LICENSORS,
              SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE
              LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING
              OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE
              SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole
              discretion. All changes are effective immediately when we post
              them. Your continued use of the Services following the posting of
              revised Terms means that you accept and agree to the changes.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms and any dispute or claim arising out of or related to
              them, their subject matter, or their formation shall be governed
              by and construed in accordance with the laws of the State of
              California, without giving effect to any choice or conflict of law
              provisions.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@gogetwell.ai
              <br />
              Address: 123 Health Tech Blvd, San Francisco, CA 94107
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
