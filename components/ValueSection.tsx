import { ArrowRight, Activity, Network, User } from "lucide-react"; 

export default function ValueSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Everything You Need to Master HTML & CSS
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Learn the fundamentals, explore advanced tricks, and build better websites.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-slate-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-slate-700 mb-5 flex-shrink-0">
              <Activity className="w-10 h-10" /> 
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Project-Based Training</h2>
              <p className="leading-relaxed text-base">
                Learn by doing. Each project helps you turn HTML & CSS concepts into real, usable websites — one step at a time.
              </p>
              <a className="mt-3 text-slate-500 inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-slate-700 mb-5 flex-shrink-0">
              <Network className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Up-To-Date Content</h2>
              <p className="leading-relaxed text-base">
                We provide the latest information and trends to keep you informed and ahead in your field.
              </p>
              <a className="mt-3 text-slate-500 inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-slate-700 mb-5 flex-shrink-0">
              <User className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Beginner-Friendly</h2>
              <p className="leading-relaxed text-base">
                Our materials are designed to be easy to understand and perfect for those just starting out.
              </p>
              <a className="mt-3 text-slate-500 inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}