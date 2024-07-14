
function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-dark mb-3">Selamat Datang di Sistem ASIAP Apps</h1>
            <h4 className="text-muted" style={{ fontSize: '20px' }}>
              Sistem ASIAP Apps adalah integrasi antara teknologi IoT dan website perpustakaan untuk memberikan pengalaman pengguna yang terhubung dan terintegrasi dalam mengelola informasi perpustakaan secara efisien dan inovatif.
            </h4>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src="/src/assets/img/hero.png" className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
