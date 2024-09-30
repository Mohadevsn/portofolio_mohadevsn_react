import React from "react";
import '../styles/contact.css'

export default function Contact(props){

    return (
        <main className={props.darkMode ? "contact dark" : "contact"}>
            <h1 className={props.darkMode ?"title dark": "title"}>📭 -Let’s Connect!</h1>
                <div id="contact">
                    <div className="element">
                            <p className="description">
                                I look forward to hearing from you!
                                If you’d like to get in touch, you can reach me on <br/>
                                <a href="https://www.linkedin.com/in/mohamed-wade-5998992a0/" className="linkdinLink" target="_blank" rel="noreferrer">
                                    <span className={props.darkMode?"contactSection dark": "contactSection"}>
                                    LinkedIn <img src="/linkedin-48.png" alt="github logo" width="18px"/>
                                    </span>
                                </a>
                                , send me an email at <b>mohawade23@gmail.com</b> , 
                                or explore my work on 
                                <a href="https://github.com/Mohadevsn" className="githubLink" target="_blank" rel="noreferrer">
                                    <span className={props.darkMode?"contactSection dark": "contactSection"}>GitHub
                                        <img src="/github-30.png" alt="github logo" width="17px"/>
                                    </span>
                                </a>. 
                                {/* You can also view my full CV by clicking here.  */}
                            </p>
                        </div>
                </div>
        </main>
    )
}