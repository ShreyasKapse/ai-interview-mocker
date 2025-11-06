import { Users, Rocket, Globe, Heart } from "lucide-react";
import Image from "next/image";
import { Header } from "../dashboard/_components/Header";

export default function AboutUs() {
  return (
    <div>
      <Image 
        src={'/grid.svg'} 
        className="absolute z-[-10] w-full" 
        width={1200} 
        height={300} 
        alt="Background grid"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-50">
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Revolutionizing Interview Preparation
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Our mission is to empower job seekers with AI-powered tools that build confidence and competence
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide text-primary uppercase">
              Our Story
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From frustration to innovation
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Founded in 2023 by a team of engineers and hiring managers, we saw firsthand how stressful and 
              unpredictable technical interviews could be. We built this platform to give every candidate 
              the preparation tools they deserve.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-lg font-medium text-gray-900">
                  Our Values
                </span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">User-Centric</h3>
                <p className="mt-2 text-base text-gray-500">
                  Every feature is designed with real candidate needs in mind.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Innovation</h3>
                <p className="mt-2 text-base text-gray-500">
                  We constantly push the boundaries of interview preparation tech.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Accessibility</h3>
                <p className="mt-2 text-base text-gray-500">
                  Making high-quality prep available to everyone, everywhere.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Passion</h3>
                <p className="mt-2 text-base text-gray-500">
                  We genuinely care about helping candidates succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-primary uppercase">
              Our Team
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The people behind the magic
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-56 w-56 mx-auto">
                  <Image
                    className="rounded-full"
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <p className="mt-2 text-base text-gray-500">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ready to transform your interview skills?
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const teamMembers = [
  {
    name: "Rushikesh Jadhav",
    role: "UI Designer",
    bio: "Design and develop the user interface.",
    image: "/rj.png"
  },
  {
    name: "Shreyas Kapse",
    role: "Fullstack Developer",
    bio: "Developed and Maintain the Webapp.",
    image: "/sk.png"
  },
  {
    name: "Sahil Mane",
    role: "Backend Developer",
    bio: "Design and maintain the database.",
    image: "/sm.png"
  },
  {
    name: "Niraj Bhagwat",
    role: "Testing Head",
    bio: "Handle model training, testing, and API deployment.",
    image: "/nb.png"
  }
];
