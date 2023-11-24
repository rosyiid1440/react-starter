import Button from '../components/Button'

function Head() {
  return (
    <nav className="navbar navbar-light navbar-expand-md justify-content-center">
        <div className="container">
            <a href="/" className="navbar-brand d-flex w-50 me-auto">
              <img src="./images/logo.png" className="d-inline-block align-top" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="navbar-nav w-100 justify-content-center">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="//codeply.com">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><p className='position-relative'>Promotions<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            HOT
                        </span></p></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color:'black' }}>Masuk</a>
                    </li>
                    <li className="nav-item ms-4">
                        <a href="#"><Button title="Daftar Sekarang" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Head;