import { Inter } from "next/font/google";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduSphere",
  description: "Eductional Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <ClerkProvider>
        <body className={inter.className}>
          <div>
            <div className="mx-14 my-8 ">
              <div className="flex justify-between ">
                <div className="flex flex-col gap-0 leading-none ">
                  <h1 className="text-[35px] uppercase font-extrabold text-slate-400">
                    EduSphere
                  </h1>
                  <h4 className="uppercase text-sm font-semibold">
                    Online Education and Learning
                  </h4>
                </div>

                <div className="flex flex-row gap-2">
                  <div>
                    <LuPhone className="size-10" />
                  </div>
                  <div className="font-semibold leading-5 text-lg">
                    <p>Call Us:</p>
                    <p>+123-456789</p>
                  </div>
                </div>

                <div className="flex flex-row gap-3">
                  <FaFacebookF className=" rounded-full w-9 h-9 p-2 bg-slate-200 hover:bg-slate-500 " />
                  <FaInstagram className=" rounded-full w-9 h-9 p-2 bg-slate-200 hover:bg-slate-500 " />
                  <FaTwitter className=" rounded-full w-9 h-9 p-2 bg-slate-200 hover:bg-slate-500 " />
                </div>
              </div>
              <Navbar />
            </div>
            {children}
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
