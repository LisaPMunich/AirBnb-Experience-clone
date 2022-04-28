import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


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