import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className="Nav">
                <ul>
                    <Link to='/'>
                        <li>
                            <h2>HIRED.</h2>
                        </li>
                    </Link>
                    <span className="right">
                        <Link to='/jobs'>
                            <li>Jobs</li>
                        </Link>
                        <Link to='/register'>
                            <li>Register</li>
                        </Link>
                        <Link to='/login'>
                            <li>Sign In</li>
                        </Link>
                    </span>
                </ul>
            </div>
        )
    }
}

export default Nav