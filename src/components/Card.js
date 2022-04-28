import React from "react"
import Star from "../assets/star.png"

export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText ="ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={"/images/"+ props.item.coverImg} className="card--photo"/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span className="card--rating">{props.item.stats.rating} </span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}
