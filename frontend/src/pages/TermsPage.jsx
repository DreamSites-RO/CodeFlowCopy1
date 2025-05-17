import React from "react";

import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/Navbar";

const TermsPage = () => {
  return (
    <>
      <NavBar />

      <div className="w-full max-w-[800px] mx-auto my-10 px-4">
        <div className="hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray p-6">
          <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-2 font-['Press_Start_2P']">
            🧾 Terms of Service
          </h1>

          <section className="space-y-8 text-sm text-text-gray leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🚀 Welcome to CodeFlow
              </h2>
              <p>
                Welcome to CodeFlow, a service provided by Niteowl, Inc. By
                signing up with CodeFlow and/or using our services, you are
                agreeing to these Terms of Service, our Privacy Policy, and all
                applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🌐 Supported Platforms
              </h2>
              <p>
                CodeFlow is supported across all major platforms and modern web
                browsers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🧠 Your Responsibilities
              </h2>
              <p>
                This page explains the terms by which you may use our online
                and/or mobile services, website, and software provided on or in
                connection with the Service (collectively the “Service”). By
                accessing or using the Service, you signify that you have read,
                understood, and agree to be bound by this Terms of Service
                Agreement (“Agreement”) and to the collection and use of your
                information as set forth in the Privacy Policy, whether or not
                you are a registered user of our Service. This Agreement applies
                to all visitors, users, and others who access the Service
                (“Users”).
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Copy, distribute, or disclose any part of the Service in any
                  medium, including without limitation by any automated or
                  non-automated "scraping."
                </li>
                <li>
                  Make excessive automated requests to our backend services, or
                  circumvent our security measures. Excessive requests or
                  attempts to disrupt the Service may result in a temporary ban
                  or account termination.
                </li>
                <li>Use CodeFlow content to cause harm to others.</li>
                <li>
                  Abuse or misuse the Service in a way that disrupts CodeFlow or
                  harms other users.
                </li>
                <li>
                  Collect or harvest any personally identifiable information,
                  including account names, from the Service.
                </li>
              </ul>
              <p className="mt-2">
                We may, without prior notice, modify or discontinue the Service,
                or create usage limits for the Service. We may permanently or
                temporarily suspend or terminate your access to the Service
                without notice and liability, for any reason or for no reason,
                including if we determine that you have violated any part of
                this Agreement. Upon termination, you remain bound by this
                Agreement.
              </p>
              <p className="mt-2">
                You are solely responsible for your interactions with other
                CodeFlow Users. We reserve the right, but are not obligated, to
                monitor disputes between you and other Users. CodeFlow assumes
                no liability for your interactions with other Users.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🏫 School Accounts
              </h2>
              <p>
                The Children’s Online Privacy and Protection Act (“COPPA”)
                requires that online service providers obtain clear and
                verifiable parental consent before collecting personal
                information from children under 13. Because CodeFlow provides
                its Service to Schools to support educational programs, CodeFlow
                relies on Schools to obtain and provide appropriate consent, if
                necessary, for collecting student information.
              </p>
              <p className="mt-2">
                Schools represent and warrant that they have obtained all
                required consents before allowing students under 13 to access
                the Service and have provided appropriate disclosures to parents
                and guardians. We recommend Schools provide a copy of our
                Privacy Policy to parents and guardians. Please email
                help@codeflow.io for more information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🔒 Privacy
              </h2>
              <p>
                We care about the privacy of our Users. By using the Service,
                you consent to the collection, use, and disclosure of your
                personally identifiable information and aggregate data as
                described in our Privacy Policy, and you consent to the transfer
                and processing of your information in the United States.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🛡️ Security
              </h2>
              <p>
                CodeFlow is committed to maintaining the security and integrity
                of your information. However, we cannot guarantee that
                unauthorized third parties will never be able to defeat our
                security measures. You acknowledge that you provide your
                personal information at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🔗 Third-Party Links
              </h2>
              <p>
                The Service may contain links to third-party websites, services,
                or offers that are not owned or controlled by CodeFlow. CodeFlow
                does not endorse or assume any responsibility for any
                third-party sites, materials, products, or services. Accessing
                any third-party service is at your own risk, and this Agreement
                and our Privacy Policy do not apply to your use of those sites.
                You agree that CodeFlow is not responsible for any loss or
                damage related to your dealings with third-party services.
              </p>
            </div>
          </section>

          <p className="text-xs text-center text-gray-500 mt-10">
            Last modified on 4/26/2025
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;
