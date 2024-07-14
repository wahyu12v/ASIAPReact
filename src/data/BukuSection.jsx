
export const bukuSection = {
    content: `
          <section id="buku" class="portfolio">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Buku Kami</h2>
      <p>Kami memiliki koleksi buku yang menampilkan keahlian dan pengetahuan kami. Jelajahi portofolio kami di bawah ini:</p>
    </div>

    <ul id="portfolio-flters" class="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
      <li data-filter="*" class="filter-active">Semua</li>
      <li data-filter=".filter-novel">Novel</li>
      <li data-filter=".filter-sejarah">Sejarah</li>
      <li data-filter=".filter-pelajaran">Pelajaran</li>
    </ul>

    <style>
      #portfolio-flters {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    #portfolio-flters li {
      margin: 5px 10px;
      padding: 10px 20px;
      background: #f8f8f8;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }

    #portfolio-flters li:hover {
      background: #ddd;
    }

    #portfolio-flters .filter-active {
      background: #007bff;
      color: white;
    }

    @media (max-width: 600px) {
      #portfolio-flters li {
        flex: 1 1 100%;
        text-align: center;
      }
    }

    </style>
    
    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        
      <div class="col-lg-4 col-md-6 portfolio-item filter-novel">
        <div class="portfolio-img"><img src="/src/assets/img/novel1.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Novel 1</h4>
          <a href="/src/assets/img/novel1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="NovLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.el 1"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-pelajaran">
        <div class="portfolio-img"><img src="/src/assets/img/sejarah1.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Sejarah 1</h4>
          <a href="/src/assets/img/sejarah1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="SejLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.arah 1"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-novel">
        <div class="portfolio-img"><img src="/src/assets/img/novel2.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Novel 2</h4>
          <a href="/src/assets/img/novel2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="NovLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.el 2"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-sejarah">
        <div class="portfolio-img"><img src="/src/assets/img/sejarah2.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Sejarah 2</h4>
          <a href="/src/assets/img/sejarah2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="SejLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.arah 2"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-pelajaran">
        <div class="portfolio-img"><img src="/src/assets/img/pelajaran2.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Pelajaran 2</h4>
          <a href="/src/assets/img/pelajaran2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="PelLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ajaran 2"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-novel">
        <div class="portfolio-img"><img src="/src/assets/img/novel3.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Novel 3</h4>
          <a href="/src/assets/img/novel3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="NovLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.el 3"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-sejarah">
        <div class="portfolio-img"><img src="/src/assets/img/sejarah1.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Sejarah 1</h4>
          <a href="/src/assets/img/sejarah1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="SejLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.arah 1"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-sejarah">
        <div class="portfolio-img"><img src="/src/assets/img/sejarah3.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Sejarah 3</h4>
          <a href="/src/assets/img/sejarah3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="SejLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.arah 3"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-pelajaran">
        <div class="portfolio-img"><img src="/src/assets/img/pelajaran3.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Pelajaran 3</h4>
          <a href="/src/assets/img/pelajaran3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="PelLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ajaran 3"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-novel">
        <div class="portfolio-img"><img src="/src/assets/img/novel1.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Novel 1</h4>
          <a href="/src/assets/img/novel1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="NovLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.el 1"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-pelajaran">
        <div class="portfolio-img"><img src="/src/assets/img/sejarah1.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Sejarah 1</h4>
          <a href="/src/assets/img/sejarah1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="SejLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.arah 1"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-novel">
        <div class="portfolio-img"><img src="/src/assets/img/novel2.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Novel 2</h4>
          <a href="/src/assets/img/novel2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="NovLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.el 2"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-sejarah">
        <div class="portfolio-img"><img src="/src/assets/img/sejarah2.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Sejarah 2</h4>
          <a href="/src/assets/img/sejarah2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="SejLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.arah 2"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-novel">
        <div class="portfolio-img"><img src="/src/assets/img/novel2.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Novel 2</h4>
          <a href="/src/assets/img/novel2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="NovLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.el 2"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-pelajaran">
        <div class="portfolio-img"><img src="/src/assets/img/sejarah1.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Sejarah 1</h4>
          <a href="/src/assets/img/sejarah1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="SejLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.arah 1"><i class="bx bx-plus"></i></a>
          <a href="detail.html" class="details-link" title="detail"><i class="bx bx-link"></i></a>
        </div>
      </div>

    </div>

    <div class="col-lg-3 btn-container text-center" data-aos="fade-up" data-aos-delay="200">
      <a class="button-70" href="#">Selengkapnya</a>
    </div>
  </div>



</section>`
    }