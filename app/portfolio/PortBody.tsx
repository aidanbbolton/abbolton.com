import './PortBody.css'
import { Merriweather_Sans } from 'next/font/google'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const merri = Merriweather_Sans({
    subsets: ['latin'],
    weight: '400'
})

type project = {
    title: string;
    body:string;
    path: string;
    hover_path: string;
    reverse: boolean;
    url: string;
}

type Props = {}

function Project(props: project) {

    const altText = `${props.title} logo`
    const [ hover, setHover ] = useState(false);

    const [windWidth, setWindWidth] = useState(false);

    const setName = () => {
        window.innerWidth > 800 ? setWindWidth(true) : setWindWidth(false);
    }

    useEffect(() => {
        setName()
        window.addEventListener("resize",setName)
    })

    return(
        <a className={props.reverse ? (windWidth ? 'reverse project outline' : 'skinny project outline') : (windWidth ? 'project outline' : 'skinny project outline')} 
           href={props.url} 
           onMouseEnter={() => {
            setHover(true);
          }} 
           onMouseLeave={() => {
            setHover(false);
          }}>
            {windWidth ?
            <>
                <Image 
                    src={ hover ? props.hover_path : props.path}
                    alt={altText}
                    width={500}
                    height={500}
                    className='image'
                />
                <div className='project-spacer'/>
                <h3 className='project-text'>
                    <div className='project-text-title'>{props.title}</div>
                    <div className='project-text-body'>{props.body}</div>
                </h3>
            </>
            :
            <>
                <h3 className='project-text'>
                    <div className='project-text-title'>{props.title}</div>
                    <div className='project-text-body'>{props.body}</div>
                </h3>
                <div className='project-spacer'/>
                <Image 
                    src={ hover ? props.hover_path : props.path}
                    alt={altText}
                    width={500}
                    height={500}
                    className='image'
                />
            </>}
        </a> 
    )
}




export default function PortBody() {

    const [windWidth, setWindWidth] = useState(false);

    const setName = () => {
        window.innerWidth > 800 ? setWindWidth(true) : setWindWidth(false);
    }

    useEffect(() => {

        setName()
        window.addEventListener("resize",setName)
    })

    return (

        <header className='portbody-section'>
            <div className='project-section'>

                <Project path='./thumbnails/mitm.svg' hover_path='./thumbnails/mitm_overlay.svg'
                         title='MITM Attack' body={windWidth ? "Demonstrates how a Man-in-the-Middle attack could be performed using ARP cache poisoning." : ""}
                         reverse={true} url='https://github.com/aidanbbolton/MITM-Attack'/>
                <div className='project-section-spacer'/>
                <Project path='/thumbnails/informed1.png' hover_path='/thumbnails/informed_overlay.png'
                         title='Informed Leaders 3-D Model' body={windWidth ? 'Model of effect informed leaders have on uninformed groups of individuals. Created with OpenGL.' : ""}
                         reverse={false} url='https://github.com/aidanbbolton/InformedLeaders'/>
                <div className='project-section-spacer'/>
                <Project path='./thumbnails/augmented.svg' hover_path='./thumbnails/augmented_overlay.svg'
                         title='AR Maintenance App' body={windWidth ? 'Full-stack application to record AR maintenance pins for inspection. Maintenace workers can sort and see active pins with automatic analysis provided.' : ""}
                         reverse={true} url='https://github.com/harinishritp1/augmented_sapiens'/>
            </div>
        </header>

    )
}