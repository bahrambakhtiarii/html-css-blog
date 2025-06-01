import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from 'next/link';



export default function About(){
    return(
        <main>
        <section className="body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center">
                    About Us: Our Journey Through the World of HTML & CSS
                </h1>

                <div className="text-center lg:w-2/3 w-full">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <p className="leading-relaxed prose prose-lg max-w-none text-justify">
                            Welcome to our blog! On this exciting journey of learning and discovery, we're a team of web developers and enthusiasts who've come together with immense passion to share our knowledge and experience in HTML and CSS with you. Our story began with a shared love for structuring content and beautifying web pages—much like how HTML builds the skeleton of a structure and CSS adds its vibrant colors and finishes.
                            Here on this blog, our main goal is to create a comprehensive yet practical resource for anyone looking to get started with HTML and CSS from scratch, or to deepen their existing knowledge in these fields. We believe that the web world is evolving at lightning speed, and to keep up, access to updated and reliable educational resources is essential. That's why our team is constantly striving to provide you with the latest trends, best practices, and practical tips through articles, tutorials, and hands-on code examples.
                        </p>

                        <Image 
                            className="w-full object-cover object-center rounded" 
                            alt="hero" 
                            src="/global/about.jpg" 
                            width={800} 
                            height={600} 
                        />
                    </div>

                    <p className="leading-relaxed mt-8 prose prose-lg max-w-none text-justify">    
                        We aim to simplify the complexities of coding and transform learning into an enjoyable and accessible experience for everyone, whether you're a complete beginner just entering the web world or an experienced developer seeking new tricks and ways to refine your skills. Every article and tutorial published here is the result of hours of thorough research, coding, and meticulous review to ensure you receive the best and most practical information.

                        On this journey, your companionship and feedback are incredibly valuable to us. We're here to answer your questions, help you overcome challenges, and assist you in achieving your goals in the fascinating world of web development. Join us, and together, let's build beautiful, efficient, and impressive websites!
                    </p>

                    <div className="flex flex-col items-center mt-10 space-y-6">
                        <Link href='/'>
                            <Button className='bg-slate-700 hover:bg-slate-500'>Back To Home</Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    </main>

    )
}