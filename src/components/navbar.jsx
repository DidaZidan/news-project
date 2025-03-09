function Navbar(){
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
          <a className="text-light nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="text-light nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="text-light nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
    )
}
export default Navbar