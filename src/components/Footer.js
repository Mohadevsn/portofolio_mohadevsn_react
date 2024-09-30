import React from "react";
import '../styles/footer.css'

export default function Footer(){

    const date = new Date()

    let year = date.getFullYear()
    return (
        <div className="footer">
            <p> © {year} - Made by Mohadevsn </p>
        </div>
    )
}