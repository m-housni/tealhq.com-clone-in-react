import React from "react"

const Nav = () => { 
  return (
    <div className="nav">
      <div>
        <div>
          <a href="/#">
            <img className="logo" src="https://assets-global.website-files.com/62775a91cc3db44c787149de/62775d8abf9f57629c567a0a_Group%201148.svg" alt="Tealhq Logo" />
          </a>
        </div>
        <div className="nav-links">
          <a href="/#" title="Resume Builder">Resume Builder</a>
          <a href="/#" title="Job Tracker">Job Tracker</a>
          <a href="/#" title="How It Works">How It Works</a>
          <a href="/#" title="Career Hub">Career Hub</a>
        </div>
      </div>
      <div className="nav-buttons">
        <a className="btn btn-signup" href="/#">Sign Up</a>
        <a className="btn btn-login" href="/#">Log In</a>
      </div>
    </div>
  )
}

export default Nav