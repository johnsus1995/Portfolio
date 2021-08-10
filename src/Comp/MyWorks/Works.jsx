import React from 'react'
import './works.scss'
import {Link,withRouter} from "react-router-dom"
function Works() {
    return (
        <div className="main-container">
            <Link to="/todo" className="tile1">
                <h3>TODO APP</h3>
            </Link>
            <Link to="/weatherApp" className="tile2">
                <h3>WEATHER APP</h3>
            </Link>
            <Link to="/project2" className="tile3">
                Project 3
            </Link>
            <Link to="/project2" className="tile4">
                Project 4
            </Link>
        </div>
    )
}

export default withRouter(Works);