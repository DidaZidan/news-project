import { useEffect, useState } from "react"
import Newsitem from "./newsitem"
function Newboard(){
    let[articles,setarticles]=useState([])
    useEffect(()=>{
        const apikey=import.meta.env.VITE_API_KEY
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;

        fetch(url).then(response=> response.json()).then(data=>setarticles(data.articles));

    },[])
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