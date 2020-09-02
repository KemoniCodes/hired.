import React from 'react'
import Nav from './Nav'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import '../css/App.css'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="Home">
                <Nav />
                <div className="hero">
                    <h1>Tech jobs made accessible to all!</h1>
                    <h3>A marketplace designed to make getting <i>hired</i> a straightforward process. </h3>

                    <div className="buttons">
                        <Link to='/register'>
                            <button className="btn-1">Sign Up</button>
                        </Link>
                        <Link to='/jobs'>
                            <button className="btn-2">View Jobs</button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home