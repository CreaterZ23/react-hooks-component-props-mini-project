import React from "react";
import Article from "../components/Article";

function ArticleList ({posts}){
    console.log(posts)
    const articles = posts.map((post)=>(
        <Article
        key={post.id} 
        title={post.title} 
        date={post.date} 
        preview={post.preview}
        minutes={post.minutes}
        />

    ))
    return(
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;