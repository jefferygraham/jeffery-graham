import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>
                Hit me up on Twitter at
                <a href="https:/twitter.com/jefferylgraham" target="_blank" rel="noopener noreferrer">
                    @jefferylgraham
                </a>
            </p>
        </Layout>
    )
}

export default ContactPage;