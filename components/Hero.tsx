'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="bg-white text-slate-800 py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Learn HTML & CSS the Right Way
          </h1>
          <p className="text-slate-600 mb-8 text-lg">
            A modern blog for web developers. Hands-on articles, clean code examples, and up-to-date best practices.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link href="/posts/all">
              <Button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-6 rounded-lg text-base font-medium">
                Explore Posts
              </Button>
            </Link>
            <Link href="/about">
              <Button className="border border-slate-700 bg-white text-slate-700 hover:bg-slate-100 px-6 py-6 rounded-lg text-base font-medium">
                About Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl shadow-lg overflow-hidden w-full max-w-md">
            <Image
              src="/global/coding.jpg" 
              alt="Coding in progress"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
