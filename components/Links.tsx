import './Links.css'
import { BriefcaseFill, Github, Linkedin, CameraFill, FileEarmarkPersonFill } from "react-bootstrap-icons";
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Links() {


    const [windWidth, setWindWidth] = useState(false);
    const setName = () => {
        window.innerWidth > 900 ? setWindWidth(true) : setWindWidth(false);
    }

    useEffect(() => {

        setName()
        window.addEventListener("resize",setName)
    })

    return (
        <header className='link-section'>

            {/* from skills */}
            <div className='link-section-container'>

                {/* from about */}
                <div className='linkTitle'>Links</div>
                <div className='wrapper'>
                    <hr className='rounded rounded-alt'></hr>
                </div>
                <div className='link-container'>
                    <Link className='link-group' href='portfolio'>
                        <BriefcaseFill size={36} className='link-icon'/>
                        <div className='link-text-container'>
                            <div className='link-text'>{windWidth ? 'Portfolio': ''}</div>
                        </div>
                    </Link>
                    <a className='link-group' href='https://github.com/aidanbbolton'>
                        <Github size={36} className='link-icon'/>
                        <div className='link-text-container'>
                            <div className='link-text'>{windWidth ? 'Github': ''}</div>
                        </div>
                    </a>
                    <a className='link-group' href='/Resume.pdf'>
                        <FileEarmarkPersonFill size={36} className='link-icon'/>
                        <div className='link-text-container'>
                            <div className='link-text'>{windWidth ? 'Resume': ''}</div>
                        </div>
                    </a>
                    <a className='link-group' href='https://www.linkedin.com/in/aidanbbolton/'>
                        <Linkedin size={36} className='link-icon'/>
                        <div className='link-text-container'>
                            <div className='link-text'>{windWidth ? 'LinkedIn' : ''}</div>
                        </div>
                    </a>
                    <a className='link-group' href='photography'>
                        <CameraFill size={36} className='link-icon'/>
                        <div className='link-text-container'>
                            <div className='link-text'>{windWidth ? 'Photography' : ''}</div>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )




}