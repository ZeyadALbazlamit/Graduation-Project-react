import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './comment.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Pusher from 'pusher-js';
import { Link } from "react-router-dom";

//import { TextEditor } from './textEditor';
const Comment = (Props) => {
    const [comment, setComment] = useState('');//value of text area 
    const [comments, setComments] = useState([{}]);
    function addComment() {//add Comment and make comment() event

        if (comment) {
            console.log('comment' + comment)
            const userId = localStorage.getItem("user_id");
            setComments([...comments, {
                "post_id": Props.post_id,
                "body": comment,
                "user_id": userId
            }]);
            axios.post(`http://127.0.0.1:8000/api/Message`, { "data": comment }).then(res => { console.log(res); })// pusher event
        }
    }
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/Comment/` + Props.post_id)
            .then(res => {
                console.log(res);
                setComments(() => [...res.data]);
                console.log("post id->" + Props.post_id);
            })

    }, []);

    var pusher = new Pusher('8626767e4a961d9424bb',
        { cluster: 'ap2', forceTLS: false });
    var channel = pusher.subscribe('puplic-channel');
    useEffect(() => {
        //  Pusher.logToConsole = true;
        const user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : "0";

        channel.bind('comment', function (data) {
            axios.post(`http://127.0.0.1:8000/api/Comment`, { //store in data base 
                "post_id": Props.post_id,
                "body": data.comment,
                "user_id": user_id
            })
                .then(res => {
                    console.log(res);

                    if (comments[comments.length - 1].hasOwnProperty('created_at')) {
                        setComments((comments) => [...comments, res.data]);
                    } else {
                        setComments((comments) => [...comments.filter((el) => el != comments[comments.length - 1]), res.data]);
                    }
                })
        });
    }, []);
    return (
        <div className="comment-component">
            <div className="color-comment">
                {comments.map((text, index) =>
                    <div>
                        <div className="main-comment-div"
                            key={text.id} >
                            <Link to={{pathname:"/UserProfile",id:text.user_id}}><img src={text.img ? text.img : localStorage.getItem("user_img")} className="avatar" /></Link>
                            <div className="comment comment_bubble">
                                <p className="mt-2 user_name">{text.name ? text.name : localStorage.getItem("user_name")}</p>
                                <p>{ReactHtmlParser(text.body)}</p>
                            </div>
                        </div>
                        <p className=" timeBorder">
                            {text.created_at ?
                                text.created_at.slice(11, 16) : ' '
                            }
                        </p>
                    </div>
                )}
                <div class="input-group">
                    <span class="input-group-text" className="btn btn-warning"  onClick={addComment}> Comment..</span>
                    <textarea class="form-control " disabled= { Props.isLoged ? "":"disabled"} aria-label="With textarea" onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
            </div>
        </div>
    );
}
export default Comment;
if (document.getElementById('comment')) {
    ReactDOM.render(<Comment />, document.getElementById('comment'));
}
