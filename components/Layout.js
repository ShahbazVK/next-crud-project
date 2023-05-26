import React from 'react'
import Header from './Header'
import Head from 'next/head'

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout