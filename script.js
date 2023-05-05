class Header {
    hed = `<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <i class="fa-solid fa-khanda" width="30"></i>
    logo
  </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center ww" id="navbarNavAltMarkup">
        <div class="navbar-nav justify-content-center">
          <a class="nav-link active acr" aria-current="page" href="#"><span>الصفحه الرئيسيه <i class="fa-solid fa-house"></i></span></a>
          <a class="nav-link active" href="#">حول العالم <i class="fa-solid fa-earth-africa"></i></a>
          <a class="nav-link active" href="#">داخل الوطن <i class="fa-solid fa-location-dot"></i></a>
          <a class="nav-link active" href="#">من نحن <i class="fa-solid fa-id-card-clip"></i></a>
          <a class="nav-link active" href="#">تواصل معنا <i class="fa-solid fa-square-envelope"></i></a>
        </div>
      </div>
    </div>
  </nav>`
}
let ap_hed = new Header;
document.write(ap_hed.hed)
document.write(slid_cont.slid)