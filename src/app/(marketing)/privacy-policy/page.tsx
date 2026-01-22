"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Shield, Envelope } from "@/components/icons";

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#030303]" : "bg-white"}`}>
      {/* Hero Section */}
      <section className={`relative pt-32 pb-16 ${isDark ? "bg-[#030303]" : "bg-gradient-to-b from-[#f8fafc] to-white"}`}>
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              isDark
                ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
                : "bg-[#3e8aff]/5 border border-[#3e8aff]/10"
            }`}>
              <Shield className="w-4 h-4 text-[#3e8aff]" />
              <span className="text-sm font-medium text-[#3e8aff]">Your Privacy Matters</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Privacy Policy
            </h1>
            <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Last Modified: May 10, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`prose prose-lg max-w-none ${isDark ? "prose-invert" : ""}`}
          >
            <div className={`space-y-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {/* Introduction */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Introduction</h2>
                <p className="mb-4">
                  CleanList AI respects privacy and commits to compliance with this Privacy Policy. The document describes how the company collects, uses, discloses, and protects personal information from customers and website users.
                </p>
                <p className="mb-4">Key scope points include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Information collection on www.cleanlist.ai</li>
                  <li>Email, text, and electronic message communications</li>
                  <li>Mobile and desktop applications</li>
                  <li>Third-party advertising and applications</li>
                </ul>
                <p className={`p-4 rounded-lg ${isDark ? "bg-yellow-500/10 border border-yellow-500/20" : "bg-yellow-50 border border-yellow-200"}`}>
                  <strong>Important limitation:</strong> This policy DOES NOT apply to information that we collect offline or through any other means, including on any other Company or third-party website.
                </p>
              </section>

              {/* Information Collection */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Information Collection</h2>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Types of Information Collected</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Personal Information:</strong> Names, IP addresses, usernames, account information, and contact identifiers.</li>
                  <li><strong>Business Information:</strong> Job titles, business addresses, business email addresses, and business telephone numbers.</li>
                  <li><strong>Non-Personal Information:</strong> Demographics, statistical data, and aggregated information that doesn&apos;t identify individuals.</li>
                  <li><strong>Technical Information:</strong> Browser type, operating system, internet connection details, login information, and platform specifics.</li>
                  <li><strong>Usage Details:</strong> URLs, clickstream data, page response times, download errors, visit duration, and interaction patterns.</li>
                </ul>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Collection Methods</h3>
                <p className="mb-4">CleanList gathers information through:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Direct user interactions (forms, calls, emails)</li>
                  <li>User contributions and public submissions</li>
                  <li>Product and service purchases</li>
                  <li>Account registration and third-party service connections</li>
                  <li>Automated technologies and cookies</li>
                  <li>Third-party licensing and partnerships</li>
                  <li>Publicly available sources</li>
                </ul>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>User-Provided Information</h3>
                <p className="mb-4">Information voluntarily submitted includes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Form submissions on the website</li>
                  <li>Correspondence records and email communications</li>
                  <li>Survey responses</li>
                  <li>Transaction details and fulfillment information</li>
                  <li>Financial information for orders</li>
                  <li>Search queries</li>
                </ul>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Automatic Data Collection</h3>
                <p className="mb-4">
                  <strong>Cookies:</strong> A cookie is a small file placed on the hard drive of your computer. Browser cookies store preferences and user information. Users can refuse cookies through browser settings, though this may restrict website access.
                </p>
                <p className="mb-4">
                  <strong>Flash Cookies:</strong> Local stored objects manage preferences and navigation history differently than browser cookies.
                </p>
                <p className="mb-6">
                  <strong>Web Beacons:</strong> Small electronic files track page visits and email openings for statistical purposes.
                </p>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Third-Party Tracking</h3>
                <p className="mb-4">
                  Third parties serving content or advertisements may use tracking technologies independent of CleanList&apos;s control. We do not control these third parties&apos; tracking technologies or how they are used.
                </p>
                <p>
                  Users can opt out through the Digital Advertising Alliance of Canada or Network Advertising Initiative tools.
                </p>
              </section>

              {/* Information Usage */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Information Usage</h2>
                <p className="mb-4">CleanList uses collected information for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website presentation and content delivery</li>
                  <li>Service provision, transaction processing, and related communications</li>
                  <li>Fulfilling stated collection purposes</li>
                  <li>Account notifications, including expiration and renewal notices</li>
                  <li>Contractual obligation fulfillment and legal compliance</li>
                  <li>Website change notifications</li>
                  <li>Website and service improvement</li>
                  <li>Business information verification, updating, and maintenance</li>
                  <li>Trend, usage, and activity monitoring</li>
                  <li>Technical notices, security alerts, and support communications</li>
                  <li>Comment and question responses</li>
                  <li>Account creation and user identification</li>
                  <li>Product, service, and promotional communications</li>
                  <li>Fraud detection and illegal activity prevention</li>
                  <li>Rights and property protection</li>
                  <li>Service personalization and improvement, including training LLMs or other Artificial Intelligence models</li>
                  <li>Policy change notifications</li>
                  <li>Contest and promotion facilitation</li>
                  <li>Employment consideration and communication</li>
                  <li>Data access, correction, and deletion requests</li>
                  <li>Aggregated, anonymized, or pseudonymized data creation</li>
                  <li>Contractual and legal obligation compliance</li>
                  <li>Additional purposes disclosed at collection time</li>
                  <li>Any purpose with user consent</li>
                </ul>
              </section>

              {/* Information Disclosure */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Information Disclosure</h2>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Authorized Disclosures</h3>
                <p className="mb-4">CleanList may disclose personal information to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Subsidiaries and affiliates</li>
                  <li>Buyers or successors in merger, restructuring, sale, or bankruptcy scenarios</li>
                  <li>Contractors and service providers contractually bound to confidentiality and proper use restrictions</li>
                  <li>Specified recipients for stated purposes</li>
                  <li>Recipients disclosed at information collection time</li>
                  <li>Parties with user consent</li>
                </ul>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Legal and Safety Disclosures</h3>
                <p className="mb-4">The company may disclose information when:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Required by court order, law, or legal process</li>
                  <li>Responding to government or regulatory requests</li>
                  <li>Enforcing terms of use and agreements</li>
                  <li>Protecting CleanList, customers, or others&apos; rights, property, or safety</li>
                  <li>Exchanging information with other companies for fraud and credit risk mitigation</li>
                </ul>
              </section>

              {/* Information Transfer */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Information Transfer</h2>
                <p className="mb-4">
                  Personal information may be transferred to contractors and service providers outside Canada with varying privacy protections. We may process, store, and transfer your personal information in and to a foreign country, with different privacy laws that may or may not be as comprehensive as Canadian law.
                </p>
                <p className="mb-4">
                  Service providers must adhere to CleanList&apos;s standards and applicable Canadian privacy legislation.
                </p>
                <p className={`p-4 rounded-lg ${isDark ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20" : "bg-blue-50 border border-blue-200"}`}>
                  <strong>User consent:</strong> By submitting your personal information or engaging with the Website, you consent to this transfer, storage, or processing.
                </p>
              </section>

              {/* User Choices and Control */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>User Choices and Control</h2>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Tracking and Cookies</h3>
                <p className="mb-6">
                  Users can configure browsers to refuse cookies or receive alerts when cookies are sent. Flash cookie settings are managed through Adobe&apos;s website. Cookie refusal may prevent website access to certain features.
                </p>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Marketing Communications</h3>
                <p className="mb-4">Users who opted in can unsubscribe by:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Checking relevant checkboxes on collection forms</li>
                  <li>Accessing account profile preferences</li>
                  <li>Clicking email unsubscribe links</li>
                  <li>Emailing contact@cleanlist.ai</li>
                </ul>
                <p className="mb-6">
                  This opt-out excludes product purchases, warranty registration, and transaction communications.
                </p>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Targeted Advertising</h3>
                <p className="mb-4">Users can opt out of targeted advertising through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Collection form checkboxes</li>
                  <li>Account profile preferences</li>
                  <li>Email request to contact@cleanlist.ai</li>
                </ul>
                <p className="mt-4">
                  Third-party opt-outs available through Digital Advertising Alliance of Canada and Network Advertising Initiative tools don&apos;t eliminate all advertising, only tailored targeting.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Data Security</h2>
                <p className="mb-4">
                  CleanList employs physical, electronic, and administrative measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                </p>
                <p className="mb-4">
                  Information is stored behind firewalls on our secure servers.
                </p>
                <p className="mb-4">
                  <strong>User responsibility:</strong> Passwords must be kept confidential; users shouldn&apos;t share access credentials.
                </p>
                <p className={`p-4 rounded-lg ${isDark ? "bg-yellow-500/10 border border-yellow-500/20" : "bg-yellow-50 border border-yellow-200"}`}>
                  <strong>Transmission limits:</strong> The transmission of information via the Internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Data Retention</h2>
                <p className="mb-4">
                  CleanList retains personal information only as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
                <p>
                  The company may anonymize information for later use without notice or consent: We reserve the right to use such anonymous and de-identified data for any legitimate business purpose without further notice to you or your consent.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Children&apos;s Privacy</h2>
                <p className="mb-4">
                  The website is not intended for users under 13 years old. CleanList prohibits children under 13 from providing information and does not knowingly collect personal information from children under 13.
                </p>
                <p>
                  If children&apos;s information is collected without parental consent verification, it will be deleted. Report suspected child information collection to contact@cleanlist.ai.
                </p>
              </section>

              {/* Accessing and Correcting Information */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Accessing and Correcting Information</h2>
                <p className="mb-4">
                  Users have legal rights to access and correct personal information held by CleanList.
                </p>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Review and Changes</h3>
                <p className="mb-4">Users can review and modify information by:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Logging into the website account profile</li>
                  <li>Emailing contact@cleanlist.ai to request access, correction, or deletion</li>
                </ul>
                <p className="mb-6">
                  <strong>Limitation:</strong> We cannot delete your business-related information except by also deleting your user account.
                </p>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Information Verification</h3>
                <p className="mb-4">
                  CleanList may request specific information confirming user identity and access rights. Some access may be refused under privacy legislation (e.g., lawyer-client privileged information, dispute resolution information, other individuals&apos; personal information, prohibitively expensive to provide).
                </p>

                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Appeal Process</h3>
                <p className="mb-4">
                  Concerned users can contact the Privacy Officer at contact@cleanlist.ai.
                </p>
                <p>
                  <strong>Cached copies:</strong> Deleted user contributions may remain in cached or archived pages or copies made by other users.
                </p>
              </section>

              {/* Consent Withdrawal */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Consent Withdrawal</h2>
                <p className="mb-4">
                  Users may withdraw consent for information collection, use, and transfer where legally permitted by contacting contact@cleanlist.ai.
                </p>
                <p>
                  <strong>Impact:</strong> Withdrawal may prevent certain product or service provision; the company will explain consequences before finalization.
                </p>
              </section>

              {/* Policy Changes */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Policy Changes</h2>
                <p className="mb-4">
                  CleanList posts privacy policy changes on this page. Material changes include website home page notifications requesting consent.
                </p>
                <p>
                  The modification date appears at the document&apos;s top. Users are responsible for maintaining current contact information and periodically reviewing the policy for updates.
                </p>
              </section>

              {/* Contact and Compliance */}
              <section>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Contact and Compliance</h2>
                <div className={`p-6 rounded-xl ${isDark ? "bg-white/[0.03] border border-white/[0.08]" : "bg-gray-50 border border-gray-200"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Envelope className="w-6 h-6 text-[#3e8aff]" />
                    <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Questions or Requests</span>
                  </div>
                  <p className="mb-2">
                    Email: <a href="mailto:contact@cleanlist.ai" className="text-[#3e8aff] hover:underline">contact@cleanlist.ai</a>
                  </p>
                  <p>
                    CleanList maintains complaint procedures addressing personal information handling questions, policy compliance, and applicable privacy law adherence.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
