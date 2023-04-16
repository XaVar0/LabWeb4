function Header(){
    
    return (
    <div> 
        <div className="row backColor">
            <div className="col-3 marge">
                <img height='100px' src="/picture/logo.png"/>
                <h4>Barzoo</h4>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary col marge" >
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse marge" id="navbarScroll">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active mx-3">
                    <a className="nav-link" href="/"><h1>Ak-Euille</h1></a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link" href="#"><h1>Panier</h1></a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link" href="#"><h1>Achat</h1></a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link" href="#"><h1>Vente</h1></a>
                    </li>
                    <li className="nav-item mx-3 d-none d-sm-block">
                        <a className="nav-link" href="#"><img height='100px' src="/picture/ingAccount.png"/>
                        </a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
         
    </div>)
}
export default Header;