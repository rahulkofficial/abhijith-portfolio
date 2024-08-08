import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhijith T V | Civil Engineer",
  description: "Abhijith t v|Civil Engineer, Interior designer, 3D Visualizer",
  icons:{
    icon:"/assets/images/artso.jpg",
    apple:"/assets/images/artso.jpg"
  }
};

export default function RootLayout({
  children,
  Header,
  Works,
  Contact,
  Footer
}: Readonly<{
  children: React.ReactNode;
  Header: React.ReactNode;
  Works: React.ReactNode;
  Contact: React.ReactNode;
  Footer:React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        {Header}
        <div className="  text-center  text-white bg-gradient-to-r from-black via-violet-600 to-black mt-24 sm:mt-16 pb-8">
          {/* Home */}
          {children}
          <hr />
          {/* Works */}
          {Works}
          <hr />
          {/* Contact */}
          {Contact}
        </div>
        {/* Footer */}
        {Footer}
      </body>
    </html>
  );
}
