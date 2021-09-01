import React from "react";

function readTimeEmoji (minutes){
    const emojiPicker = minutes<30? '☕️':'🍱'
    const interval = minutes <30?  5 : 10
    let emojis = ""
    for (let i=0; i<minutes; i+=interval){
        emojis+= emojiPicker
    }
    return emojis
}

function Article ({ title, date = "January 1, 1970", preview, minutes }){
    const newEmoji = readTimeEmoji(minutes)
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} • {newEmoji} {minutes}min read</small>
            <p>{preview}</p>
            
        </article>
    )
}

export default Article;