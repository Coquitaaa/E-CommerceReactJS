import React from 'react'
import Cart from './Cart'

function NavBar() {
    return (
        <>

        <h1 style={ { padding:"0 1rem" } }>
                <img src="/images/logo/pululosHomeLogo.png" alt="pululos logo" style={ { height:"2.5rem"} }/>
        </h1>

        <nav style={ { display:"flex", justifyContent:"center" } }>

            <ul style={ { padding:"0", display:"flex", flexDirection:"row", gap:"2.5rem", listStyle:"none" } }>
                <li style={{ alignSelf:"center" }}>
                    <a href="#" style={ { color:"white", textDecoration:"none" } }>Home</a>
                </li>

                <li style={{ alignSelf:"center" }}>
                    <a href="#" style={ { color:"white" , textDecoration:"none" } }>Explore</a>
                </li>

                <li style={{ alignSelf:"center" }}>
                    <a href="#" style={ { color:"white" , textDecoration:"none" } }>About us</a>
                </li>

            </ul>

        </nav>

        
        <Cart/>
        

        </>
    )
}

export default NavBar