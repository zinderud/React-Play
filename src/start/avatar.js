import React from 'react';
import { render } from 'react-dom';


export const yorum = {
   /* date: new date(),*/
    text: "react giriş denemeleri",
    author: {
        name: "kerim",
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
}

 export class Avatar extends React.Component{
       constructor(props){ super(props); }
        
     formatDate(date) {
        return date.toLocaleDateString();
    }
   Yorum(props) {
        return
        <div className="Yorum">
            <div className="UserInfo">
                <img className="avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name} />
                <div className="User-name">
                    {props.author.name}
                </div>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>

    }


   render()
   { return  <div > {this.Yorum(yorum)} </div>
 
 }

}
 render(<Avatar/>,document.getElementById("app"))