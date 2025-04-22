import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="flex justify-center gap-4">
      <Link
        href="https://www.instagram.com/anteaterformularacing/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-full p-3"
        aria-label="Instagram"
      >
        <FaInstagram className="w-6 h-6 text-white" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/uciafr/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-full p-3"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
};

export default SocialButtons; 