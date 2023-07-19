import './About.css'
import { Merriweather } from 'next/font/google'

const merri = Merriweather({
    subsets: ['latin'],
    weight: '400'
  })


export default function About() {

    return (

        <header className='page-section'>
            <div className='about-section'>
                <div className='aboutTitle'>About Me</div>
                <div className='wrapper'>
                    <hr className='rounded'/>
                </div>
                <div className={merri.className + " aboutMessage"}>I am a <b>Data Scientist</b> looking to apply my knowledge of ML Models. I specialize in working with <b>Large Language Models</b>, <b>Fullstack Development</b>,
                            and <b>Data Exploration</b>. I am passionate about finding inovative solutions to problems. My hobbies include <b>Reading</b>, <b>Photography</b>, and <b>Game Design</b>.</div>
            </div>
        </header>

    )
}