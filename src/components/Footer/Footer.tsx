const Footer = () => {
  return (
    <footer className="bg-cyan py-6 text-white">
      <div className="container mx-auto flex flex-col items-center gap-y-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} YumEats. All rights reserved.
        </p>
        <nav className="flex gap-x-4">
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
