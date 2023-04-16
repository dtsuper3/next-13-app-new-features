import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="logo">
                    <Link href="/">Home</Link>
                </div>
                <div className="links">
                    <Link href={"/about"}>About</Link>
                    <Link href={"/about/team"}>Ours Team</Link>
                    <Link href={"/code/repos"}>Code</Link>
                </div>
            </div>
        </header>
    )
}

export default Header