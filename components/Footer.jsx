import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-4">
        <li>
          <Link
            href="/"
            className="text-slate-700 font-medium hover:text-slate-800"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-slate-700 font-medium hover:text-slate-800"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/terms"
            className="text-slate-700 font-medium hover:text-slate-800"
          >
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link
            href="/privacy-policy"
            className="text-slate-700 font-medium hover:text-slate-800"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-slate-700 font-medium hover:text-slate-800"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="w-full py-3 flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-between border-[1px] border-solid border-gray-300 border-x-0 border-b-0">
        <Logo />
        <span className="text-gray-600">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="text-slate-800 font-medium">
            TTDL
          </Link>{" "}
          | All Rights Reversed
        </span>
      </div>
    </footer>
  );
};

export default Footer;
