'use client'
import { useState } from 'react';
import { Merriweather_Sans} from 'next/font/google'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Links from '@/components/Links'
import Contact from '@/components/Contact'
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

const merri_sans = Merriweather_Sans({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {

  return (

    <div className={merri_sans.className + " scroll-smooth text-white"}>
      
      <Head>
        <title>abbolton</title>
      </Head>

      <section id='header' className='snap-start'>
        <Header/>
      </section>

      {/* <div className='comp-wrapper'>
        <Comp/>
      </div> */}
      
      <section id='welcome' className='snap-start'>
      <Welcome/>
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>

      <div className='spacer about-skills'/>

      <section id='skills' className='snap-center'>
        <Skills/>
      </section>

      <div className='spacer skills-links'/>

      <section id='links' className='snap-center'>
        <Links/>
      </section>

      <section id='contact' className='snap-end'>
        <Contact/>
      </section>

      <Analytics/>
      
      
    </div>
  );
}
