import Image from 'next/image'


export default function Mission(){

    return(
        <section>
            <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">

                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="rounded-xl shadow-lg overflow-hidden w-full max-w-md">
                        <Image
                            src="/global/mission.png" 
                            alt="Coding in progress"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                        Our Mission
                    </h2>
                    <p className="text-slate-600 mb-8 text-lg text-justify">
                        Our mission is to demystify HTML and CSS, making web development accessible and enjoyable for everyone, from absolute beginners taking their first steps to experienced developers looking to refine their skills. We believe that learning to build for the web shouldn't be complicated. Our blog provides clear, concise, and practical tutorials, breaking down complex concepts into easy-to-understand language. Through hands-on projects and relevant examples, we empower our readers to not only grasp the fundamentals but also to master advanced techniques, fostering a community where learning is intuitive and progress is tangible.
                    </p>
                </div>
            </div>

        </section>
    )
}