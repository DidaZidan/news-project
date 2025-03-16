import img from'../assets/download.png'

function Newsitem({title,description,src,url}){
    return(
    <>
    <div className="bg-dark text-light card d-inline-block my-3 mx-3 py-3 px-3 mb-3 p-3 styles" style={{maxWidth:'345px'}}>
        <img  src={src?src:img} className="card-img-top " alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target="_blank" className="btn btn-light targetbtn">Read more</a>
        </div>
    </div>
    </>
    )
}
export default Newsitem