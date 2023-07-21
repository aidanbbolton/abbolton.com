
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
        window.innerWidth > 820 ? setWindWidth(true) : setWindWidth(false);
    }

    useEffect(() => {
        changeNavBg()
        window.addEventListener("scroll", changeNavBg)

        setName()
        window.addEventListener("resize",setName)
    })

    return (
        <div onScroll={changeNavBg}>
                <div className={navBg ? 'NavContainer space-x-[15px] md:py-2 md:px-10 bg-white text-black' : 'NavContainer space-x-[31px] md:py-2 md:px-10 bg-white text-black' }>
                    <div className= 'NavBarSym items-center space-x-[31px] 2xl:space-x-10 pr-3 2xl:pr-8 md:py-2 2xl:py-5 md:px-10'>
                        <ScrollLink to='top' smooth={true}>
                            {windWidth ?<div className='NavItem'>Photos</div>: <BriefcaseFill className='NavItem'/>}
                        </ScrollLink>
                    </div>
                    <div className= 'NavBarEnd items-center space-x-[31px] 2xl:space-x-10 pr-3 2xl:pr-8 md:py-2 2xl:py-5 md:px-10'>
                        
                        <Link href='/'>
                            <div className='NavItem'>Home</div>
                        </Link>

                    </div>
                </div>
        </div>
    )


}