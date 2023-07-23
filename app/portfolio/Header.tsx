
import './Header.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { BriefcaseFill} from "react-bootstrap-icons";

export default function Header() {

    const [navBg, setNavBg] = useState(false);
    const [windWidth, setWindWidth] = useState(false);

    const changeNavBg = () => {
        window.scrollY != 0 ? setNavBg(true) : setNavBg(false);
    }

    const setName = () => {
        window.innerWidth > 300 ? setWindWidth(true) : setWindWidth(false);
    }

    useEffect(() => {
        changeNavBg()
        window.addEventListener("scroll", changeNavBg)

        setName()
        window.addEventListener("resize",setName)
    })

    return (
        <div onScroll={changeNavBg}>
                <div className={navBg ? 'NavContainer bg-white text-black' : 'NavContainer bg-white text-black' }>
                    <div className= 'NavBarSym'>
                        <ScrollLink to='top' smooth={true}>
                            {windWidth ?<div className='NavItem'>Portfolio</div>: <BriefcaseFill className='NavItem'/>}
                        </ScrollLink>
                    </div>
                    <div className= 'NavBarEnd'>
                        
                        <Link href='/'>
                            <div className='NavItem'>Home</div>
                        </Link>

                    </div>
                </div>
        </div>
    )


}