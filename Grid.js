import React from 'react'

export default function Grid(props) {
  return (
      <div>
    <button onClick={props.toggleDarkMode} className="txt--button">{props.darkMode ? "Dark Mode" : "Light Mode"}</button>
    <div className='gg--grid'>
        <div className={props.darkMode ? "grid item1--dark" : "grid item1"}>
            <h4>Join our community</h4>
            <p className="p1">30-day, hassle-free money back guarantee</p>
            <p className={props.darkMode ? "p2--dark":"p2"}>Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className="grid item2">
            <h5 className={props.darkMode ? "dark" : ""}>Monthly Subscription</h5>
            <div>
                <span className={props.darkMode ? "price dark" : "price"} >$29</span>
                <span className={props.darkMode ? "permonth dark" : "permonth"}>per month</span>
            </div>
            <span className={props.darkMode ? "access dark" : "access"}>Full access for less than 11 a day</span>
            <button className={props.darkMode ? "dark":""}>Sign up</button>
        </div>
        <div className="grid item3">
            <h5 className={props.darkMode ? "dark" : ""}>Why us?</h5>
            <div className="para">
                <p className={props.darkMode ? "pp dark" : "pp"}>Tutorials by industry experts</p>
                <p className={props.darkMode ? "pp dark" : "pp"}>Peer & expert code reviews</p>
                <p className={props.darkMode ? "pp dark" : "pp"}>Coding exercises</p>
                <p className={props.darkMode ? "pp dark" : "pp"}>Access to our GitHub repos</p>
                <p className={props.darkMode ? "pp dark" : "pp"}>New videos every week</p>
                <p className={props.darkMode ? "pp dark" : "pp"}>Community forum</p>
                <p className={props.darkMode ? "pp dark" : "pp"}>Flashcard decks</p>
            </div>
        </div>  
    </div>
    </div>
    )
}