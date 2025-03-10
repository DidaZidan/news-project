function Navbar({setcategory}){
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark" >
  <div className="container-fluid">
    <a className=" navbar-brand " href="#"><h1><span className="badge bg-light text-dark">Newsmag</span></h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <div style={{cursor:"pointer"}} className="nav-link text-light" onClick={()=>{setcategory("technology")}}>Technology</div>
        </li>
        <li className="nav-item">
        <div style={{cursor:"pointer"}} className="nav-link text-light" onClick={()=>{setcategory("business")}}>Business</div>
        </li>
        <li className="nav-item">
        <div style={{cursor:"pointer"}} className="nav-link text-light" onClick={()=>{setcategory("health")}}>Health</div>
        </li>
        <li className="nav-item">
        <div style={{cursor:"pointer"}} className="nav-link text-light" onClick={()=>{setcategory("sports")}}>Sports</div>
        </li>
        <li className="nav-item">
        <div style={{cursor:"pointer"}} className="nav-link text-light" onClick={()=>{setcategory("entertainment")}}>Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
    )
}
export default Navbar