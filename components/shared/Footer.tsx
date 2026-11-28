
import { Globe, MessageCircle, Briefcase, Music2 } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1c1c1c] px-5 py-3">
      <div className="mx-auto flex min-h-53.75 w-full max-w-350 flex-col items-center justify-center bg-[#151515] px-5 py-10 text-center">

        {/* Logo */}
        <h2 className="mb-2 text-xl font-bold text-white">
          Pro Edu
        </h2>

        {/* Address */}
        <p className="text-[11px] leading-4.5 text-gray-400">
          Office 41, Zawaya Building, Ghala Muscat,
          <br />
          Sultanate of Oman
        </p>

        {/* Footer Links */}
        <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-400">
          <Link
            to="/privacy-policy"
            className="transition hover:text-white"
          >
            Privacy Policy
          </Link>

          <span>|</span>

          <Link
            to="/terms"
            className="transition hover:text-white"
          >
            Terms of use
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-3 flex items-center gap-2">
          <a
            href="www.facebook.com"
            aria-label="Facebook"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#252525] text-white transition hover:bg-blue-600"
          >
            <Globe size={14} />
          </a>

          <a
            href="www.facebook.com"
            aria-label="Twitter"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#252525] text-white transition hover:bg-sky-500"
          >
            <MessageCircle size={14} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#252525] text-white transition hover:bg-blue-700"
          >
            <Briefcase size={14} />
          </a>

          <a
            href="#"
            aria-label="TikTok"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#252525] text-white transition hover:bg-gray-600"
          >
            <Music2 size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
