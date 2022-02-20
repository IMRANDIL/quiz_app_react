import React from 'react'

import './Footer.css'


const Footer = () => {
    return (
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
            Made with Love <span role='img' aria-label='love'>💝</span> by <a href='https://github.com/IMRANDIL' style={{ cursor: 'pointer', color: 'firebrick' }} target='_blank' rel="noopener noreferrer">IMRANDIL</a>
        </div>
    )
}

export default Footer