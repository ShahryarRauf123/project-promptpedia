'use client'

import '@styles/globals.css'

import Nav from '@components/Nav'
import {SessionProvider} from 'next-auth/react'


export const metadata = {
    title: "Promptpedia",
    description: 'Discover & share AI Prompts'
}
const RootLayout = ({ children }) => {
    return (
        <SessionProvider>
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient">

                    </div>
                </div>
                <main className="app">
                    <Nav />

                    {children}
                </main>
            </body>
        </html>
        </SessionProvider>
    )
}

export default RootLayout