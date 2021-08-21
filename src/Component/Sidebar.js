import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
            {console.log(topic)}
        </div>
    );

    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1629487017643-e10b36ef4ae5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80%20934" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Vipin Kumar Yadav</h2>
                <h4>vipinyadav1305@hotmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewd you</p>
                    <p className="sidebar__statnumber">265</p>
                </div>
                <div className="sidebar__stat">
                    <p>View on post</p>
                    <p className="sidebar__statnumber">2665</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('React js')}
                {recentItem('Angular js')}
                {recentItem('Python')}
                {recentItem('mySQL')}
            </div>
        </div>
    )
}

export default Sidebar
