// app/project-video/page.tsx
"use client";

import { Header } from "../dashboard/_components/Header";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectVideoPage() {
  return (
    <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Background Grid Image */}
      <Image
        src="/grid.svg"
        alt="Grid background"
        width={1200}
        height={300}
        className="absolute top-0 left-0 z-[-10] w-full opacity-30"
      />

      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-20 text-center"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Explore Our Project
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Dive into our AI-powered Interview Platform – Interviewello. Here's a
          complete walkthrough video.
        </p>

        {/* Responsive Video Embed */}
<div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-4xl mx-auto w-full">
  <iframe
    className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] rounded-2xl"
    src="https://www.youtube.com/embed/dKhMOvBeRRY?si=qPfxKhxwLBpX9xjq"
    title="Interviewello Project Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white dark:bg-gray-900 py-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Like what you see?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Try the platform or connect with us to learn more.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/dashboard"
            className="px-6 py-3 text-white bg-primary hover:bg-primary-dark rounded-lg font-medium shadow-md transition"
          >
            Try Interviewello
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-primary border border-primary rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Contact Us
          </a>
        </div>
      </motion.section>
    </div>
  );
}
