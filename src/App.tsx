import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Briefcase, GraduationCap, Code, Database, Globe, Zap, Award } from 'lucide-react';
export function App() {
  const experiences = [{
    title: 'Full Stack Developer',
    company: 'HawkLogix Pakistan',
    period: 'Aug 2023 - Present (2 years 2 months)',
    description: 'Full stack developer, interacting with development of web sites and apps. Working with HTML5, CSS3, BOOTSTRAP5, Angular16+, MaterialUI, PrimeNg, Asp.Net Core, Web Api, RESTFUL API, SQL.'
  }, {
    title: 'Junior Web Developer',
    company: 'PRG Pakistan',
    period: 'May 2023 - Aug 2023 (4 months)',
    description: 'Multi-tasking role working with Business development and software development teams. B2B LinkedIn and Meta business suite handling, HTML5, CSS3, Bootstrap4, ES6, JavaScript.'
  }, {
    title: 'Junior Front-End Developer',
    company: 'The Bright Soft',
    period: 'Jan 2023 - May 2023 (5 months)',
    description: 'Worked on HTML5, JavaScript, JQuery, SEO on page, off page and technical, Google Analytics 4 and Google Search Console.'
  }, {
    title: 'Intern',
    company: 'Punjab Information Technology Board (PITB)',
    period: 'Aug 2022 - Jan 2023 (6 months)',
    description: 'Worked with emerging industry comprising latest technology and advance information.'
  }, {
    title: 'Junior Programmer',
    company: 'SomTom',
    period: 'Jun 2020 - Feb 2021 (9 months)',
    description: 'Worked on HTML, CSS and WORDPRESS development.'
  }];
  const skills = ['Software Development', 'Data Structures and Algorithms', 'Database Management System (DBMS)', 'Restful APIs', 'Media Marketing', 'Payment Gateway Integration', 'Backend Development', 'Responsive Web Design', 'Front-End Development', 'Strong Communication Skills'];
  const education = [{
    degree: 'Bachelor of Science - BS',
    field: 'Computer Engineering',
    institution: 'University of Engineering and Technology, Taxila',
    period: '2011 - 2016'
  }, {
    degree: 'Intermediate',
    field: 'Pre-Engineering',
    institution: 'Rashid Minhas Higher Secondary School Alipur (Muzaffargarh)',
    period: 'Sep 2009 - Jul 2011'
  }];
  return <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-30" animate={{
        background: ['radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)', 'radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)', 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)']
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear'
      }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                Muhammad Ismail
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Khan
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-6">
                Full Stack Developer
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="flex flex-wrap gap-4 justify-center items-center mb-8">
              <a href="mailto:ismailblouch@yahoo.com" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300">
                <Mail className="w-5 h-5" />
                <span>ismailblouch@yahoo.com</span>
              </a>
              <a href="https://linkedin.com/in/ismailkhanbaloch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full backdrop-blur-sm">
                <span>+923347194037</span>
              </div>
            </motion.div>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Full Stack Developer with 3+ years of experience specializing in
              Microsoft Technologies. Strong foundation in both front-end and
              back-end development with expertise in JavaScript, TypeScript, C#,
              Angular, ASP.NET Core, and SQL. Currently working on Stripe
              Payment Gateway and Apple InApp Purchase integration in
              medical-based applications.
            </motion.p>
          </motion.div>
        </div>
      </div>
      {/* Experience Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experience
            </h2>
          </div>
          <p className="text-gray-400 text-lg">Professional Journey</p>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 text-lg font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Skills
            </h2>
          </div>
          <p className="text-gray-400 text-lg">Technical Expertise</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.05
        }} whileHover={{
          scale: 1.05,
          transition: {
            duration: 0.2
          }
        }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:bg-white/10 transition-all duration-300">
                <p className="text-white font-medium text-center">{skill}</p>
              </div>
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Technical Stack
            </h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-purple-400 font-semibold">Languages:</span>{' '}
              JavaScript, TypeScript, HTML5, CSS3, C#
              <br />
              <span className="text-purple-400 font-semibold">
                Frameworks:
              </span>{' '}
              ASP.NET Core 4, 5, 6, 8, Entity Framework Core, Angular 12-19,
              MaterialUI, PrimeNG
              <br />
              <span className="text-purple-400 font-semibold">
                Database:
              </span>{' '}
              SQL Server
              <br />
              <span className="text-purple-400 font-semibold">Tools:</span> Git,
              GitHub, Bootstrap 3, 4, 5+
            </p>
          </div>
        </motion.div>
      </div>
      {/* Education Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Education
            </h2>
          </div>
          <p className="text-gray-400 text-lg">Academic Background</p>
        </motion.div>
        <div className="space-y-6">
          {education.map((edu, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 text-lg font-semibold mb-2">
                      {edu.field}
                    </p>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Certifications
            </h2>
          </div>
          <p className="text-gray-400 text-lg">Professional Credentials</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {[{
          name: 'Introduction to C#',
          provider: 'Sololearn',
          id: 'CC-ZUMNTOJR'
        }, {
          name: 'Angular',
          provider: 'Sololearn',
          id: 'CC-Q08UFHVJ'
        }, {
          name: 'C# Intermediate',
          provider: 'Sololearn',
          id: 'CC-LF9OEEJA'
        }, {
          name: 'SQL Intermediate',
          provider: 'Sololearn',
          id: 'CC-QNEERAFC'
        }].map((cert, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.1
        }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-purple-400 mb-1">{cert.provider}</p>
                <p className="text-gray-400 text-sm">{cert.id}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="relative bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 md:p-16 overflow-hidden">
          <motion.div className="absolute inset-0 opacity-30" animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }} style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Passionate about delivering high-quality, user-centered solutions.
              Always looking for ways to improve user experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:ismailblouch@yahoo.com" className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get In Touch
              </a>
              <a href="https://linkedin.com/in/ismailkhanbaloch" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white/20 text-white rounded-full font-bold text-lg hover:bg-white/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                View LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p>© Muhammad Ismail Khan. Full Stack Developer.</p>
        </div>
      </div>
    </div>;
}