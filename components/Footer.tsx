import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; 

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-slate-900 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image
              src="/global/logo.jpg"
              alt="Icon"
              width={60}
              height={60}
              className="p-2 rounded-full"
            />
            <span className="ml-3 text-xl">HTML & CSS</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">This Blog About HTML & CSS</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">HTML</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/posts?category=html" className="text-gray-400 hover:text-white">All</Link>
              </li>
              <li>
                <Link href="/posts?type=article&category=html" className="text-gray-400 hover:text-white">Articles</Link>
              </li>
              <li>
                <Link href="/posts?category=html" className="text-gray-400 hover:text-white">Projects</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CSS</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/posts?category=css" className="text-gray-400 hover:text-white">All</Link>
              </li>
              <li>
                <Link href="/posts?type=article&category=css" className="text-gray-400 hover:text-white">Articles</Link>
              </li>
              <li>
                <Link href="/posts?type=project&category=html" className="text-gray-400 hover:text-white">Projects</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Projects</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/posts?type=projects" className="text-gray-400 hover:text-white">All Projects</Link>
              </li>
              <li>
                <Link href="/posts?type=project&category=html" className="text-gray-400 hover:text-white">HTML Projects</Link>
              </li>
              <li>
                <Link href="/posts?type=project&category=css" className="text-gray-400 hover:text-white">CSS Projects</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Social Media</h2>
            <div>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-400">
                  <Facebook className="w-5 h-5" /> 
                </a>
                <a className="ml-3 text-gray-400">
                  <Twitter className="w-5 h-5" /> 
                </a>
                <a className="ml-3 text-gray-400">
                  <Instagram className="w-5 h-5" /> 
                </a>
                <a className="ml-3 text-gray-400">
                  <Linkedin className="w-5 h-5" /> 
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-center">
          <p className="text-gray-400 text-sm text-center sm:text-left">© 2025</p>
        </div>
      </div>
    </footer>
  );
}