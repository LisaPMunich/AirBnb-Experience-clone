import React from "react"


export default function Card(props) {
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText ="ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={"/images/"+ props.photo} className="card--photo"/>
            <div className="card--stats">
                <img src={props.star} className="card--star"/>
                <span className="card--rating">{props.rating} </span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
