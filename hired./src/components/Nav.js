import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <div className="Nav">
                <ul>
                    <li>
                        <h2>HIRED.</h2>
                    </li>
                    <span className="right">
                        <li>Jobs</li>
                        <li>Register</li>
                        <li>Sign In</li>
                    </span>
                </ul>
            </div>
        )
    }
}

export default Nav