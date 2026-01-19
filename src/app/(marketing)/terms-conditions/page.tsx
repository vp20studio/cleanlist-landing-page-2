"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { FileText, Envelope } from "@phosphor-icons/react";

export default function TermsConditionsPage() {
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
              <FileText weight="fill" className="w-4 h-4 text-[#3e8aff]" />
              <span className="text-sm font-medium text-[#3e8aff]">Legal Agreement</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Terms & Conditions
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
            className={`space-y-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            {/* Acceptance of Terms */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing www.cleanlist.ai, you agree to be bound by these Terms and Conditions and the Privacy Policy. Users must be of legal age to form binding contracts. Non-compliance requires cessation of site use.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Modifications to Terms and Website</h2>
              <p>
                CleanList reserves the right to revise terms immediately upon posting. Website content may be changed or terminated without notice at the company&apos;s discretion.
              </p>
            </section>

            {/* User Account Security */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>User Account Security</h2>
              <p className="mb-4">
                Users must maintain confidentiality of usernames, passwords, and security information. The company implements physical, electronic, and administrative security measures. Users bear responsibility for their internet access and ensuring compliance by all parties accessing through their connection.
              </p>
              <p className="mb-4">
                Internet transmission cannot be guaranteed secure. CleanList disclaims responsibility for circumvention of privacy settings or security measures.
              </p>
              <p>
                Registration information and submissions constitute consent to actions consistent with the Privacy Policy.
              </p>
            </section>

            {/* Account Responsibilities */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Account Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Treat login credentials as confidential</li>
                <li>Exercise caution on shared computers</li>
                <li>Logout after sessions</li>
                <li>Report unauthorized access immediately</li>
                <li>Accept responsibility for misuse or unauthorized access</li>
              </ul>
              <p>
                CleanList reserves termination rights for accounts at any time, for any reason.
              </p>
            </section>

            {/* Prohibited Activities */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Prohibited Activities</h2>
              <p className="mb-4">Users cannot:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Circumvent website security measures</li>
                <li>Access unauthorized content</li>
                <li>Breach authentication systems</li>
                <li>Disrupt network services</li>
                <li>Use automated tools for site access</li>
                <li>Introduce malicious code</li>
                <li>Conduct denial-of-service attacks</li>
                <li>Interfere with website operations</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Intellectual Property Rights</h2>
              <p className="mb-4">
                The website and all content are owned by CleanList or licensors, protected by copyright, trademark, patent, and trade secret laws.
              </p>
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Permitted uses include:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Temporary browser caching</li>
                <li>Reasonable personal use copies</li>
                <li>Single download for personal, non-commercial use</li>
              </ul>
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Prohibited uses include:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Reproduction, distribution, modification, public display, republication, or transmission without authorization</li>
                <li>Removal of proprietary notices</li>
                <li>Use of content for commercial purposes beyond legitimate CleanList service use as outlined in service agreements</li>
              </ul>
              <p className={`p-4 rounded-lg ${isDark ? "bg-red-500/10 border border-red-500/20" : "bg-red-50 border border-red-200"}`}>
                <strong>Warning:</strong> Violations result in immediate use termination.
              </p>
            </section>

            {/* Conditions of Use */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Conditions of Use and Content Standards</h2>
              <p className="mb-4">
                Users may only use the website lawfully and per these terms. All submissions must comply with applicable federal, provincial, local, and international laws and regulations.
              </p>
              <p className="mb-4">User submissions cannot:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate laws regarding exports, patents, trademarks, copyrights, or privacy rights</li>
                <li>Violate third-party website terms</li>
                <li>Contain exploitative, obscene, harmful, threatening, abusive, or discriminatory material</li>
                <li>Involve stalking, exploitation, or endangerment</li>
                <li>Contain false or misleading information</li>
                <li>Include spam, advertisements, or commercial solicitations</li>
                <li>Impersonate others</li>
                <li>Promote illegal activities</li>
                <li>Falsely suggest company endorsement</li>
              </ul>
            </section>

            {/* User Submissions License */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>User Submissions License</h2>
              <p className="mb-4">
                Users grant CleanList a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, perform, display, and distribute submissions. Users also grant sublicense and infringement action rights, limited to platform operation, promotion, and improvement.
              </p>
              <p>
                Submissions must be legal, non-infringing, and not subject to legal proceedings.
              </p>
            </section>

            {/* Monitoring and Enforcement */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Monitoring and Enforcement</h2>
              <p className="mb-4">CleanList may:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Remove or refuse User Submissions without notice</li>
                <li>Take necessary actions for violations</li>
                <li>Refer matters to law enforcement</li>
                <li>Terminate or suspend access for any reason</li>
              </ul>
              <p className={`p-4 rounded-lg ${isDark ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20" : "bg-blue-50 border border-blue-200"}`}>
                <strong>Important:</strong> YOU WAIVE AND HOLD HARMLESS THE COMPANY AND ITS AFFILIATES FROM CLAIMS RESULTING FROM ANY ACTION related to investigations or law enforcement cooperation.
              </p>
            </section>

            {/* Privacy */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Privacy</h2>
              <p className="mb-4">
                By submitting personal information, users consent to collection, use, hosting, transmission, and disclosure per the Privacy Policy.
              </p>
              <p>
                Users also consent to cookie usage for tracking requests and analyzing patterns. Browser settings allow cookie notifications and rejection, though some website areas may function inadequately.
              </p>
            </section>

            {/* Third-Party Websites */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Third-Party Websites</h2>
              <p className="mb-4">
                CleanList provides third-party links for convenience but makes no representations about external sites. Users access third-party content at their own risk.
              </p>
              <p>
                Linking to CleanList&apos;s homepage is permitted if fair, legal, and non-damaging to reputation. Website framing is prohibited. Links must comply with content standards. Unauthorized framing triggers withdrawal of linking permission.
              </p>
            </section>

            {/* Online Purchases */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Online Purchases</h2>
              <p>
                Purchase orders and transactions are subject to separate terms and conditions of sale, incorporated into these Terms.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Disclaimer of Warranties</h2>
              <p className={`p-4 rounded-lg mb-4 ${isDark ? "bg-yellow-500/10 border border-yellow-500/20" : "bg-yellow-50 border border-yellow-200"}`}>
                THE WEBSITE, ITS CONTENT, AND ANY SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; basis without warranties of merchantability, fitness for purpose, or non-infringement.
              </p>
              <p className="mb-4">
                CleanList makes no warranty regarding completeness, security, reliability, suitability, accuracy, currency, or availability. The site is not guaranteed accurate, reliable, error-free, or uninterrupted. Defects may not be corrected.
              </p>
              <p className="mb-4">
                The company cannot guarantee files are virus-free or harmless. Users assume sole responsibility for computer, internet, and data security.
              </p>
              <p>
                CleanList disclaims liability for denial-of-service attacks, flooding, malware, viruses, trojan horses, worms, or other harmful code affecting user equipment.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Limitation of Liability</h2>
              <p className={`p-4 rounded-lg mb-4 ${isDark ? "bg-red-500/10 border border-red-500/20" : "bg-red-50 border border-red-200"}`}>
                UNDER NO CIRCUMSTANCE WILL THE COMPANY BE LIABLE FOR NEGLIGENCE, GROSS NEGLIGENCE, OR DAMAGES OF ANY KIND including direct, indirect, special, incidental, consequential, or punitive damages for personal injury, lost revenue, lost profits, lost business, lost data, or breach of contract.
              </p>
              <p>
                This applies even if parties were advised of potential damages, arising from use, inability to use, or reliance on the website or linked sites.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Indemnification</h2>
              <p>
                To maximum extent permitted by law, users defend, indemnify, and hold harmless CleanList, its parent, subsidiaries, affiliates, and their directors, officers, employees, agents, service providers, contractors, licensors, suppliers, successors, and assigns from claims, liabilities, damages, losses, costs, and expenses arising from user breaches or improper use, including User Submissions and third-party site access.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Governing Law</h2>
              <p className="mb-4">
                These terms are governed by Ontario and Canadian federal law without effect to conflict-of-law principles, UN conventions, or international laws, regardless of user domicile.
              </p>
              <p>
                Any action arises in Ontario or Federal Court of Canada. Users submit to exclusive jurisdiction and waive venue objections.
              </p>
            </section>

            {/* Waiver */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Waiver</h2>
              <p>
                Failure to exercise rights does not constitute waiver. Single or partial exercise does not preclude further exercise.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Severability</h2>
              <p>
                Invalid or unenforceable provisions in any jurisdiction do not affect other terms or invalidate them elsewhere.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Entire Agreement</h2>
              <p>
                These Terms, the Privacy Policy, and applicable documents constitute the sole agreement superseding all prior understandings, whether written or oral.
              </p>
            </section>

            {/* Copyright Infringement */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Alleged Copyright Infringement</h2>
              <p className="mb-4">
                CleanList processes copyright claims promptly. Copyright owners or authorized representatives should report infringements to the Copyright Officer at contact@cleanlist.ai, providing:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Identification of copyrighted work(s)</li>
                <li>Identification of infringing material or URL</li>
                <li>Company affiliation, mailing address, telephone, and email</li>
                <li>Statements affirming good faith belief and truthfulness under penalty of perjury</li>
                <li>Full legal name and signature</li>
              </ul>
              <p>
                Upon receipt of complete notices, CleanList acts in its sole discretion, including content removal. Receipt does not constitute agreement or verification of claims.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Reporting and Contact</h2>
              <div className={`p-6 rounded-xl ${isDark ? "bg-white/[0.03] border border-white/[0.08]" : "bg-gray-50 border border-gray-200"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Envelope weight="fill" className="w-6 h-6 text-[#3e8aff]" />
                  <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Contact Information</span>
                </div>
                <p className="mb-2">
                  <strong>Address:</strong> 505 Richmond St, Toronto, ON
                </p>
                <p className="mb-4">
                  <strong>Email:</strong> <a href="mailto:contact@cleanlist.ai" className="text-[#3e8aff] hover:underline">contact@cleanlist.ai</a>
                </p>
                <p>
                  Report misuse including libelous or defamatory conduct to the email above. Direct all feedback, technical support requests, and website communications to contact@cleanlist.ai.
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
