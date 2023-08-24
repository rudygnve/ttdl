import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <main className="w-full max-w-5xl mx-auto px-3 text-slate-800">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - TTDL</title>
        <link rel="canonical" href="https://ttdl-six.vercel.app/about" />
      </Helmet>
      <Navbar />
      <div className="py-6 sm:py-10 w-full h-full min-h-screen">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
          About Us
        </h1>
        <article className="prose max-w-none w-full prose-slate">
          <p>
            Welcome to TTDL, your go-to destination for effortlessly downloading
            TikTok videos! Our mission is to provide you with a user-friendly
            and reliable tool to save and enjoy your favorite TikTok content
            anytime, anywhere.
          </p>
          <p>
            At TTDL, we understand the joy of discovering entertaining and
            inspiring videos on TikTok. That's why we've created a seamless
            platform that allows you to download these videos with just a few
            clicks. Whether it's a hilarious prank, a mesmerizing dance, or a
            heartwarming moment, TTDL empowers you to keep these memories at
            your fingertips.
          </p>
          <p>
            Our team is passionate about enhancing your TikTok experience. We
            value simplicity, speed, and security, ensuring that your video
            downloads are always smooth and worry-free. TTDL is designed for
            everyone, whether you're a casual viewer who wants to rewatch videos
            or a content creator looking for inspiration.
          </p>
          <p>
            Join us in this journey of preserving and sharing TikTok magic.
            Start using TTDL today and unlock a new level of convenience in
            enjoying your beloved TikTok videos. Thank you for choosing TTDL as
            your trusted TikTok Video Downloader.
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
