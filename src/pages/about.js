import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Bio goes here...</p>
            <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
        </div>
    )
}

export default AboutPage;