'use client'

import Image from 'next/image';
import { Merriweather_Sans} from 'next/font/google'
import Header from "./Header";

const merri_sans = Merriweather_Sans({
    subsets: ['latin'],
    weight: '400'
  })

export default function FirstPost() {
    return (
      < div className={merri_sans.className}>
        <Header/>
        <div id="top"></div>
        <Image src='/construction.png' alt='men at work' fill={true}/>
      </div>
    );
  }