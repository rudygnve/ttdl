import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";

const terms = () => {
  return (
    <main className="w-full max-w-5xl mx-auto px-3 text-slate-800">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms & Conditions - TTDL</title>
        <link rel="canonical" href="https://ttdl-six.vercel.app/terms" />
      </Helmet>
      <Navbar />
      <div className="py-6 sm:py-10 w-full h-full min-h-screen">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
          Terms & Conditions
        </h1>
        <article className="prose max-w-none w-full prose-slate prose-li:list-disc">
          <p>
            Welcome to TTDL - TikTok Video Downloader Without Watermark ("TTDL",
            "we", "our", or "us"). Please read these Terms and Conditions
            carefully before using our web tool. By using TTDL, you agree to be
            bound by the following terms and conditions:
          </p>
          <h3>1. Acceptance of Terms</h3>

          <p>
            By using TTDL, you acknowledge that you have read, understood, and
            agree to comply with these Terms and Conditions, as well as any
            applicable laws and regulations. If you do not agree with these
            terms, please do not use TTDL.
          </p>

          <h3>2. Usage Restrictions</h3>

          <p>
            You may use TTDL solely for personal and non-commercial purposes.
            You must not use TTDL for any illegal or unauthorized purposes,
            including but not limited to downloading copyrighted content without
            proper authorization.
          </p>

          <h3>3. Intellectual Property</h3>

          <p>
            TTDL and its contents, including but not limited to text, graphics,
            images, videos, software, and trademarks, are the property of TTDL
            or its licensors and are protected by intellectual property laws.
            You may not reproduce, distribute, modify, create derivative works
            of, publicly display, or perform any of the content available on
            TTDL without explicit permission.
          </p>

          <h3>4. Content Responsibility</h3>

          <p>
            TTDL does not host any of the videos or content you download. You
            are solely responsible for the content you download using TTDL.
            Ensure you have the necessary rights and permissions to download and
            use the content.
          </p>

          <h3>5. Privacy Policy</h3>

          <p>
            Your use of TTDL is subject to our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>, which explains
            how we collect, use, and protect your personal information. By using
            TTDL, you consent to the collection and use of your information as
            outlined in the <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>

          <h3>6. Disclaimer of Warranties</h3>

          <p>
            TTDL is provided "as is" and without any warranties or
            representations, whether express or implied. We do not guarantee the
            accuracy, reliability, or availability of TTDL. You use TTDL at your
            own risk.
          </p>

          <h3>7. Limitation of Liability</h3>

          <p>
            TTDL and its affiliates, officers, employees, and agents shall not
            be liable for any direct, indirect, incidental, consequential, or
            special damages arising out of or in any way connected with your use
            of TTDL, even if we have been advised of the possibility of such
            damages.
          </p>

          <h3>8. Indemnification</h3>

          <p>
            You agree to indemnify and hold TTDL and its affiliates, officers,
            employees, and agents harmless from any claims, damages, losses,
            liabilities, and expenses (including attorneys' fees) arising out of
            or related to your use of TTDL, violation of these Terms and
            Conditions, or infringement of any rights of a third party.
          </p>

          <h3>9. Modification and Termination</h3>

          <p>
            We reserve the right to modify, suspend, or discontinue TTDL at any
            time without prior notice. We may also update these Terms and
            Conditions from time to time. Your continued use of TTDL after any
            changes to the Terms and Conditions will constitute your acceptance
            of such changes.
          </p>

          {/* <h3>
          10. Governing Law and Jurisdiction
        </h3>

        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of [Your Jurisdiction]. Any disputes arising
          from or related to these Terms and Conditions shall be subject to the
          exclusive jurisdiction of the courts in [Your Jurisdiction].
        </p> */}

          <p>
            By using TTDL, you agree to abide by these Terms and Conditions. If
            you have any questions or concerns, please{" "}
            <Link href="/contact">contact us</Link>
          </p>

          <p>
            <span>Last updated:</span>
            {"  "}
            18th August 2023
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default terms;
