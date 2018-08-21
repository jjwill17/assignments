import React from 'react'

const Navbar = () => {
    const pages = ['Home', 'About', 'Contact'] //pages connected to navbar

    const displayPages = pages.map((page, i)=>{
        return <li key={page+i}>{page}</li> // displaying each item in array in an li tag
    })
    return (
        <nav>
            <ul>
                {displayPages} 
            </ul>
        </nav>
    )
}


export default Navbar;