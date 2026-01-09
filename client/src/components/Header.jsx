import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Jobs from '../pages/Jobs';

function Header() {
    return (
        <header className='myHeader'>
            <div className='logoDiv'>
                <Link to={'/'} className='logoURL'>JD</Link>
                <h1 style={{ fontSize: '1.7em' }}>JobDhundo</h1>
            </div>

            <nav className='myNav'>
                <Link className='myURLs' to='/jobs'>jobs</Link>
            </nav>
        </header>
    )
}

export default Header