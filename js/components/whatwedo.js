export function whatwedo() {
 const HTML=
 `<div class="container">
    <div class="row">
        <img class="col-12 col-lg-6" src="../img/what-do.png">
        <div class="col-12 col-lg-5 "colm">
            <div class="section-tag">What We Do</div>
            <h1 class="feat">We Offer A One-Stop Shop For All It Solutions</h1>
            <p class="text">There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form</p>     
            <h2 class="let"><i class="fa fa-cog"></i>Highly Expert Team Members<h2>
            <p class="tsmall">There are many variations of passages of Lorem Ipsum available, 
            but the</p>
            <h2 class="let"><i class="fa fa-cog"></i>Highly Expert Team Members<h2>
            <p class="tsmall">There are many variations of passages of Lorem Ipsum available, 
            but the majority</p>
        </div>
    </div>
  </div>`
document
         .getElementById('app')
         .insertAdjacentHTML('beforeend', HTML);

}
