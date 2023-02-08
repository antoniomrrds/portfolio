import { NextPage } from 'next';
import Head from 'next/head';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory snap overflow-auto z-0'>
      <Head>
        <title>Marcos Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>
      {/* Skills */}
      {/* Project */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
