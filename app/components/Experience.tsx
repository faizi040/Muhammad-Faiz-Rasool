"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Dzone Technologies",
      location: "Faisalabad, Pakistan",
      period: "July 2024 - Present",
      role: "MERN Stack Developer",
      responsibilities: [
        "Develop full-stack web applications using MongoDB, Express.js, React, and Node.js",
        "Designed and developed RESTful APIs with OAuth authentication for secure user access",
        "Integrated multiple third-party APIs to extend application functionality",
        "Implemented internationalization (i18n) for multi-language support",
        "Built reusable and responsive UI components using Next.js and Tailwind CSS",
        "Improved frontend performance using advanced Next.js rendering for faster load times and smoother UX",
        "Managed complex application state using Redux Toolkit for predictable and efficient state handling",
        "Ensured code quality and maintainability through modular architecture and clean coding practices"
      ],
    },
    {
      company: "Invictus Solutions",
      location: "Faisalabad, Pakistan",
      period: "Aug 2023 - January 2024",
      role: "BlokChain & Mern Developer Intern",
      responsibilities: [
        "Design, develop, and implement decentralized applications (dApps) on blockchain platforms",
        "Designed and implemented RESTful APIs",
        "Code, deploy, and manage smart contracts that run on blockchain platforms",
        "Develop user interfaces using React.js for building interactive and responsive web applications",
        "Design and implement server-side logic using Node.js and Express.js.",
        "Integrate deployed smart contracts instances with the existing front-ends to make reliable and efficient DAPPS"
      ],
    },
    {
      company: "Optimum Tech",
      location: "Faisalabad, Pakistan",
      period: "Feb 2023 - June 2023",
      role: "Web Developer Intern(Backend)",
      responsibilities: [
        "Develop server-side logic to handle requests from the frontend",
        "Design and manage databases, including creating and optimizing queries",
        "Use version control systems (e.g., Git) to manage and track changes in the codebase",
        "Participating in code reviews and providing constructive feedback to other developers",
      ],
    },
    // {
    //   company: "Micrologix",
    //   location: "Faisalabad, Pakistan",
    //   period: "July 2022 - Jan 2023",
    //   role: "Frontend Developer",
    //   responsibilities: [
    //     "Implement responsive and visually appealing user interfaces based on design mockups and wireframes",
    //     "Write HTML, CSS, and JavaScript code to create web pages and UI components",
    //     "Work closely with UI/UX designers to understand design requirements and implement design elements accurately",
    //     "Implement responsive design principles to ensure a consistent and optimal user experience on various devices, including desktops, tablets, and mobile phones",
    //   ],
    // },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

