import React from 'react'
import Nav from './Nav'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Nav />
                <div className="hero">
                    <h1>Tech jobs made accessible to all!</h1>
                    <h3>A marketplace designed to make getting <i>hired</i> a straightforward process. </h3>
                   
                    <div className="buttons">
                        <button className="btn-1">Sign Up</button>
                        <button className="btn-2">View Jobs</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home