import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-center items-center text-sm text-gray-500">
        {currentYear} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;