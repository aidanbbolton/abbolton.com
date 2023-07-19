
'use client';

import Link from "next/link";
import Header from "./Header";
import PortBody from "./PortBody"
import { Merriweather_Sans} from 'next/font/google'
import "./Portfolio.css"

const merri_sans = Merriweather_Sans({
  subsets: ['latin'],
  weight: '400'
})

export default function FirstPost() {
    return (
      < div className={merri_sans.className}>
        <Header/>
        <div id="top"></div>
        <PortBody/>
      </div>
    );
  }