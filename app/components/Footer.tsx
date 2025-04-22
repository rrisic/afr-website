import Link from "next/link";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">AFR</h3>
            <p className="text-gray-400 font-medium">
              Anteater Formula Racing - University of California, Irvine
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">Contact</h3>
            <ul className="space-y-2 text-gray-400 font-medium">
              <li>Email: anteaterracing@gmail.com</li>
              <li>Location: University of California, Irvine</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/anteaterformularacing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/uciafr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anteater Formula Racing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 