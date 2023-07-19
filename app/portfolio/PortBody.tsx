import './PortBody.css'
import { Merriweather } from 'next/font/google'
import Image from 'next/image'

const merri = Merriweather({
    subsets: ['latin'],
    weight: '400'
})

type project = {
    name: string;
    path: string;
    reverse: boolean;
}

type Props = {}

function Project(props: project) {
    const altText = `${props.name} logo`
    return(
        <div className={props.reverse ? 'reverse project' : 'project'}>
            <Image 
                src={props.path}
                alt={altText}
                width={500}
                height={500}
            />
            <div className='project-spacer'/>
            <h3 className='project-text'>
                {props.name}
            </h3>
        </div> 
    )
}


export default function PortBody() {

    return (

        <header className='portbody-section'>
            <div className='project-section'>
                {/* <Project path='./thumbnails/mitm.jpg' name='test project' reverse={true}/>a */}
                <Project path='./thumbnails/mitm.svg' name='I am a <b>Data Scientist</b> looking to apply my knowledge of ML Models. I specialize in working with <b>Large Language Models</b>, <b>Fullstack Development</b>,
                            and <b>Data Exploration</b>. I am passionate about finding inovative solutions to problems. My hobbies include <b>Reading</b>, <b>Photography</b>, and <b>Game Design</b>.' reverse={true}/>
                <div className='project-section-spacer'/>
                <Project path='./thumbnails/mitm.svg' name='test project' reverse={false}/>
                <div className='project-section-spacer'/>
                <Project path='./thumbnails/augmented.svg' name='test project' reverse={true}/>
            </div>
        </header>

    )
}