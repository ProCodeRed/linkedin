import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../firebase/firebase';
import firebase from 'firebase';

function Feed() {

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ));
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection("posts").add({
            name: 'Vipin Kumar Yadav',
            description: 'This is a test message',
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#70B5F9" />
                </div>
            </div>
            {/* posts rendering */}
            {posts.map(({id, data: { name, description, message, photoUrl }}) => (
                <Post 
                    key={id} 
                    message={message} 
                    description={description} 
                    photoUrl={photoUrl} 
                />
                ))}
            {/* <Post name="Vipin Yadav" description="This is a test feed" message="Hello there it is seems like working"/> */}
        </div>
    )
}

export default Feed
