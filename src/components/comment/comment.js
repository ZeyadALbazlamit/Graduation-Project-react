import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './comment.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Pusher from 'pusher-js';

import { TextEditor } from './textEditor';
const Comment = (Props) => {
    const [comments, setComments] = useState([{}]);
    function addComment(e) {//add Comment and make comment() event
        if (e){
        const data = e;
        const userId= localStorage.getItem("user_id"); 
        setComments([...comments, {
            "post_id": Props.post_id,
            "body": data,
            "user_id":userId
        }]);
        axios.post(`http://127.0.0.1:8000/api/Message`, { "data":data }).then(res => { console.log(res);})// pusher event
    }
    }
    useEffect(() => {
        
        axios.get(`http://127.0.0.1:8000/api/Comment/`+ Props.post_id)
            .then(res => {
                setComments(() => [res.data]);
                console.log(res);
                console.log("post id->"+ Props.post_id);
            })
        
    }, []);

    var pusher = new Pusher('8626767e4a961d9424bb',
        { cluster: 'ap2', forceTLS: false });
    var channel = pusher.subscribe('puplic-channel');
    useEffect(() => {
        //  Pusher.logToConsole = true;
        const user_id=localStorage.getItem("user_id")? localStorage.getItem("user_id"):"0";
        
        channel.bind('comment', function (data) {
            axios.post(`http://127.0.0.1:8000/api/Comment`, { //store in data base 
                "post_id": Props.post_id,
                "body": data.comment,
                "user_id": user_id
            })
                .then(res => {
                    if (comments[comments.length - 1].hasOwnProperty('created_at')) {
                        setComments((comments) => [...comments, res.data]);
                    } else {
                        setComments((comments) => [...comments.filter((el) => el != comments[comments.length - 1]), res.data]);
                    }
                    console.log(res.data);
                })
        });
    }, []);
    const img = [
        "https://www.flaticon.com/premium-icon/icons/svg/2202/2202112.svg",
        "https://www.flaticon.com/svg/static/icons/svg/3658/3658958.svg",
        "https://www.flaticon.com/svg/static/icons/svg/3532/3532381.svg"
    ]
    return (
        <div className="comment-component">

            <div className="color-comment">
                {comments.map((text, index) =>
                    <div className="main-comment-div"
                        key={text.id} >
                        <a  ><img src={text.id % 2 == 0 ? img[0] : text.id % 3 == 0 ? img[1] : img[2]} className="avatar" /></a>
                        <div className="comment comment_bubble">
                            <p className="mt-3">{text.id}{text.UserName}</p>
                            <p>{ReactHtmlParser(text.body)}</p>
                            <p className=" timeBorder">
                                {text.created_at}
                            </p>
                        </div>
                    </div>
                )}
                <TextEditor
                    addComment={(count) => addComment(count)}
                />
            </div>
        </div>
    );
}
export default Comment;
if (document.getElementById('comment')) {
    ReactDOM.render(<Comment />, document.getElementById('comment'));
}
