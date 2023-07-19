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
// import Comp from '@/components/Matter'

const merri_sans = Merriweather_Sans({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton', 'List 1', 'List 2', '3', '4', '5'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (

    <div className={merri_sans.className + " scroll-smooth"}>
      
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
      
      
    </div>
  );
}
