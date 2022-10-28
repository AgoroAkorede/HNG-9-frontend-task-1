import React from 'react'
import Github from "../../assets/github-icon.svg"
import Slack from "../../assets/slack-icon.svg"
import "./socials.scss"

function Socials() {
  return (
    <div className="socails">
        <img src={Github} alt="github" className="icon" />
        <img src={Slack} alt="slack" className="icon" />
    </div>
  )
}

export default Socials