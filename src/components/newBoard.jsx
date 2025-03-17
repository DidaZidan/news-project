import { useEffect, useState } from "react"
import Newsitem from "./newsitem"
function Newboard({category}){
    let[articles,setarticles]=useState([])
    useEffect(()=>{
        const apikey=import.meta.env.VITE_API_KEY
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}`;

        fetch(url,{   method: "GET",
            headers: { "User-Agent": "Mozilla/5.0" },}).then(response=> response.json()).then(data=>setarticles(data.articles));

    },[category])
    return(
    <>
        <h2 className="text-center">Latest <span className="badge bg-danger">news</span></h2>
        <div className="container">
            {articles.map((news,index)=>{
                return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    
    </>
    )
}
export default Newboard