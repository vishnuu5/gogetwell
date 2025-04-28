export default function HipaaCompliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                HIPAA Compliance
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our commitment to protecting patient health information
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-none">
            <h2>Our Commitment to HIPAA Compliance</h2>
            <p>
              At GoGetWell.ai, we understand the critical importance of
              protecting patient health information. As a provider of healthcare
              technology solutions, we are committed to maintaining the highest
              standards of privacy and security in compliance with the Health
              Insurance Portability and Accountability Act (HIPAA).
            </p>
            <p>
              This page outlines our approach to HIPAA compliance and the
              measures we take to ensure the protection of Protected Health
              Information (PHI).
            </p>

            <h2>Business Associate Agreement</h2>
            <p>
              As a Business Associate to covered entities under HIPAA,
              GoGetWell.ai enters into a Business Associate Agreement (BAA) with
              healthcare providers who use our services. This agreement
              establishes the permitted and required uses and disclosures of
              PHI, provides that we will not use or disclose the information
              other than as permitted or required by the contract or as required
              by law, and requires us to implement appropriate safeguards to
              prevent unauthorized use or disclosure of the information.
            </p>

            <h2>Security Measures</h2>
            <p>
              We implement comprehensive administrative, physical, and technical
              safeguards to protect the confidentiality, integrity, and
              availability of PHI:
            </p>

            <h3>Administrative Safeguards</h3>
            <ul>
              <li>
                Security Management Process: Risk analysis and risk management
                procedures
              </li>
              <li>
                Security Personnel: Designated security official responsible for
                policies and procedures
              </li>
              <li>
                Information Access Management: Policies and procedures for
                authorizing access to PHI
              </li>
              <li>
                Workforce Training: Regular security awareness and training
                programs
              </li>
              <li>
                Evaluation: Regular assessments of security policies and
                procedures
              </li>
            </ul>

            <h3>Physical Safeguards</h3>
            <ul>
              <li>
                Facility Access Controls: Procedures to limit physical access to
                facilities
              </li>
              <li>
                Workstation Security: Policies governing the proper use and
                access of workstations
              </li>
              <li>
                Device and Media Controls: Procedures for the receipt and
                removal of hardware and electronic media
              </li>
            </ul>

            <h3>Technical Safeguards</h3>
            <ul>
              <li>
                Access Controls: Technical policies and procedures to allow only
                authorized persons to access PHI
              </li>
              <li>
                Audit Controls: Hardware, software, and procedural mechanisms to
                record and examine activity
              </li>
              <li>
                Integrity Controls: Measures to ensure that PHI is not
                improperly altered or destroyed
              </li>
              <li>
                Transmission Security: Technical security measures to guard
                against unauthorized access to PHI being transmitted over a
                network
              </li>
            </ul>

            <h2>Data Encryption</h2>
            <p>
              All PHI is encrypted both at rest and in transit using
              industry-standard encryption protocols:
            </p>
            <ul>
              <li>Data at Rest: AES-256 encryption for all stored PHI</li>
              <li>
                Data in Transit: TLS 1.2+ for all data transmitted over networks
              </li>
            </ul>

            <h2>Access Controls</h2>
            <p>
              We implement strict access controls to ensure that PHI is only
              accessible to authorized individuals:
            </p>
            <ul>
              <li>
                Role-Based Access: Access to PHI is limited based on job
                responsibilities
              </li>
              <li>
                Multi-Factor Authentication: Required for all access to systems
                containing PHI
              </li>
              <li>Audit Logging: Comprehensive logging of all access to PHI</li>
              <li>
                Automatic Timeout: Automatic session termination after periods
                of inactivity
              </li>
            </ul>

            <h2>Breach Notification</h2>
            <p>
              In the unlikely event of a breach of unsecured PHI, GoGetWell.ai
              has established procedures to:
            </p>
            <ul>
              <li>
                Promptly identify and respond to suspected or known security
                incidents
              </li>
              <li>
                Mitigate harmful effects of security incidents that are known to
                us
              </li>
              <li>Document security incidents and their outcomes</li>
              <li>
                Notify affected individuals, covered entities, and regulatory
                authorities as required by law
              </li>
            </ul>

            <h2>Employee Training</h2>
            <p>
              All GoGetWell.ai employees receive comprehensive training on HIPAA
              requirements and our security policies and procedures:
            </p>
            <ul>
              <li>
                Initial Training: All employees receive HIPAA training upon
                hiring
              </li>
              <li>
                Ongoing Education: Regular refresher training and updates on new
                threats and regulations
              </li>
              <li>
                Awareness Programs: Continuous security awareness initiatives
              </li>
            </ul>

            <h2>Third-Party Assessments</h2>
            <p>
              We regularly engage independent third parties to assess our HIPAA
              compliance:
            </p>
            <ul>
              <li>
                Annual Security Assessments: Comprehensive evaluation of our
                security controls
              </li>
              <li>
                Penetration Testing: Regular testing to identify and address
                vulnerabilities
              </li>
              <li>
                Compliance Audits: Periodic audits to ensure ongoing compliance
                with HIPAA requirements
              </li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our HIPAA compliance program or
              would like to request a BAA, please contact our Privacy Officer:
            </p>
            <p>
              Email: privacy@gogetwell.ai
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
