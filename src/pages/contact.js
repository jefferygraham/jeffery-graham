import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <p>
                Hit me up on Twitter at
                <a href="https:/twitter.com/jefferylgraham" target="_blank" rel="noopener noreferrer">
                    @jefferylgraham
                </a>
            </p>
            <Footer />
        </div>
    )
}

export default ContactPage;