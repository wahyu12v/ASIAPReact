
function Navbar() {
    return (
        <header id="header" className="fixed-top" style={{ backgroundColor: 'white' }}>
            <div className="container d-flex align-items-center">
                <a href="index.html" className="logo me-auto">
                    <img src="/src/assets/img/asiap2.png" alt="" className="img-fluid" />
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active text-dark" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto active text-dark" href="#about">Penjelasan</a></li>
                        <li><a className="nav-link scrollto active text-dark" href="#services">Layanan</a></li>
                        <li><a className="nav-link scrollto active text-dark" href="#buku">Buku</a></li>
                        <li><a className="nav-link scrollto active text-dark" href="#pemesanan">Pemesanan</a></li>
                        <li><a className="nav-link scrollto active text-dark" href="#harga">Harga</a></li>
                        <li><a className="nav-link scrollto active text-dark" href="#faq">Pertanyaan</a></li>
                        <li><a className="nav-link scrollto active text-dark" href="#contact-us">Kontak</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" style={{ color: 'black' }}></i>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
