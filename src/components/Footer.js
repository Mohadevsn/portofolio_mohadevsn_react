import React from "react";
import '../styles/footer.css'

export default function Footer(props){

    const date = new Date()

    let year = date.getFullYear()
    return (
        <div className={props.darkMode ? "footer dark" : "footer"}>
            <p> © {year} - Made by Mohadevsn </p>
        </div>
    )
}