import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='myFooter'>
            <div className='footerSubDiv1' >
                <div className='logoDiv'>
                    <Link to={'/'} className='logoURL'>JD</Link>
                    <h1 style={{fontSize:'1.5em'}}>JobDhundo</h1>
                </div>


                <p style={{ lineHeight: '1.6em' }}>
                    This system is a real-world, <b>production-grade full-stack web application</b> designed to dynamically generate job pages, integrate with content platforms like YouTube, and scale over time.

                    The architecture prioritizes simplicity, speed, and maintainability while enabling real monetization and portfolio value.
                </p>
            </div>

            <div className='footerSubDiv2'>
                <h1 style={{ fontSize: '1.3em' }}>Connect us on</h1>

                <nav className='footerNav'>
                    <a href="https://web.whatsapp.com/" className='myURLs' title='join our whatsapp group to get notified about new jobs & internships' target='_blank'>
                        <img className='icons' src="public/whatsapp.png" alt="whatsapp" />
                    </a>

                    <a href="https://www.youtube.com/@Nishantvats." className='myURLs' title='subscribe us on youtube to get latest jobs recommendations' target='_blank'>
                        <img className='icons' src="public/youtube.png" alt="youtube" />
                    </a>

                    <a href="https://www.linkedin.com/in/nishantvats30/" className='myURLs' title='follow me on linkedin to connect me directly' target='_blank'>
                        <img className='icons' src="public/linkedin.png" alt="linkedin" />
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer