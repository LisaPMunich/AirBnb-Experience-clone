import React from "react"
import ImageGrid from "../images/photo-grid.png"

export default function Hero (){
    return(
        <main className="main--container">
            <img src={ImageGrid} alt="image grid" className="Hero--image-grid"/>
            <h1 className="Hero--title">Online Experiences</h1>
            <p className="Hero--text">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home</p>
        </main>
    )
}