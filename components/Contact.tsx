import './Contact.css'
import { Envelope, Phone } from "react-bootstrap-icons";


export default function Contact() {

    return (
        <header className='contact-section'>
            <div className='contact-container'>
                <div className='contactTitle'>Contact Me</div>
                <div className='wrapper'>
                    <hr className='rounded rounded-con'/>
                </div>

                <div className='contact-group'>
                    <Envelope size={36} className='link-icon'/>
                    <div className='contact-text'>abbolt36@gmail.com</div>
                </div>

                <div className='contact-group'>
                    <Phone size={36} className='link-icon'/> 
                    <div className='contact-text'>{'(940)-613-5039'}</div>
                </div>
            </div>
        </header>
    )
}