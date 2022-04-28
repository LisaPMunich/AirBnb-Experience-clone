import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import Star from "./assets/star.png"

export default function App() {
        const dataItems = data.map(item =>{
            return <Card
                key={item.id}
                item={item}
            />
            })
        return(
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {dataItems}
            </section>
        </div>
    )
}

// {
//     id: 1,
//         title: "Life Lessons with Katie Zaferes",
//     description: "",
//     price: 136,
//     coverImg: "katie-zaferes.png",
//     stats: {
//          rating: 5.0,
//         reviewCount: 6
// },
//     location: "Online",
//         openSpots: 0,
// },