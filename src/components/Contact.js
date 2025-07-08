import React from "react";
import '../styles/contact.css'

export default function Contact(props){

    return (
        <main className={props.darkMode ? "section dark" : "section"}>
            <h1 className={props.darkMode ?"title dark": "title"}>📭 -Let's Connect!</h1>
                <div id="contact">
                    <div className="card">
                            <p className="description">
                                I look forward to hearing from you!
                                If you'd like to get in touch, you can reach me on <br/>
                                <b>mohawade23@gmail.com</b>
                            </p>
                            <div className="contact-icons-row">
                                <a href="https://www.linkedin.com/in/mohamed-wade-5998992a0/" className={props.darkMode ? "contact-icon linkedin dark" : "contact-icon linkedin"} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <img src="/linkedin-48.png" alt="LinkedIn logo" />
                                </a>
                                <a href="https://github.com/Mohadevsn" className={props.darkMode ? "contact-icon github dark" : "contact-icon github"} target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <img src="/github-30.png" alt="GitHub logo" />
                                </a>
                            </div>
                    </div>
                </div>
        </main>
    )
}