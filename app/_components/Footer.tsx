import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary-light py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
            <div className="mb-10 lg:mb-0">
              <Image
                src="assets/image/footer-logo.svg"
                alt="Image"
                className="mb-5 mx-auto lg:mx-0"
                width={50}
                height={50}
              />

              <p className="font-normal text-gray-400 text-md">
                Excepteur sint occaecat cupidatat non <br /> proident, sunt in
                culpa qui officia deserunt <br /> mollit anim id est laborum.
              </p>
            </div>

            <div className="space-y-4 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-700 text-lg mb-6">
                Our Company
              </h4>

              <Link
                href="#"
                className="block font-normal text-md text-gray-700 hover:underline transition ease-in-out duration-300"
              >
                Reporting
              </Link>

              <Link
                href="#"
                className="block font-normal text-md text-gray-700 hover:underline transition ease-in-out duration-300"
              >
                Get in Touch
              </Link>

              <Link
                href="#"
                className="block font-normal text-md text-gray-700 hover:underline transition ease-in-out duration-300"
              >
                Management
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-4">
        <p className="font-normal text-gray-400 text-md text-center mt-5">
          &copy; 2023 Manus maris. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
