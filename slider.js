class Slider{
    slid = `
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="./img/img1.jpg" class="d-block w-100" alt="...">
        <div class="rtr">
    <h1>عيش تجربة المغامره معنا</h1>
    <p>نحن شركه متخصصه في قطاع السياحه هدفها الاساسي الترويج للسياحه الداخليه والتعريف بيها من خلال تنظيم الرحلات<p>
    <button type="button" class="btn btn-info">اكتشف المزيد</button>
    </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="./img/img2.jpg" class="d-block w-100" alt="...">
        <div class="rtr">
    <h1>عيش تجربة المغامره معنا</h1>
    <p>نحن شركه متخصصه في قطاع السياحه هدفها الاساسي الترويج للسياحه الداخليه والتعريف بيها من خلال تنظيم الرحلات<p>
    <button type="button" class="btn btn-info">اكتشف المزيد</button>
    </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container fd_con m_top">
        <h3>نحن نبذل <span style="color: #ff7675;">قصارى جهدنا</span> لارضاء عملائنا</h3>
        <p>نحن شركه متخصصه في قطاع السياحه هدفها الاساسي الترويج للسياحه الداخليه والتعريف بيها من خلال تنظيم الرحلات<p>
        <div class="d-flex justify-content-center flex-wrap">
            <div class="card" style="width: 18rem;">
                <i class="fa-solid fa-comments-dollar"></i>
                <div class="card-body">
                    <p>باقة سفر مميزه وبميزانيه معقوله</p>
                  <p class="card-text">يجمع الموقع مجموعة كبيرة من العروض السياحية التي تتنوع من حيث الوجهة والسعر والنشاط لتلبية جميع المتطلبات.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <i class="fa-solid fa-tent-arrows-down"></i>
                <div class="card-body">
                    <p>خطط لراحتك</p>
                  <p class="card-text"> وسائل النقل ودليل للرحلات بالسيارة وغيرها من النصائح المفيدة لمساعدتك في تخطيط رحلة لا تُنسى </p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <i class="fa-solid fa-map-location-dot"></i>
                <div class="card-body">
                    <p>اكتشف السعوديه</p>
                  <p class="card-text">في هذا النوع من الرحلات ، سيستمتع عملاؤنا باكتشاف ومعرفة كمية كبيرة من المعلومات الثقافية والاجتماعية </p>
                </div>
              </div>
        </div>
    </div>
  `
}
let slid_cont = new Slider;