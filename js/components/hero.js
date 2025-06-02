export function hero() {

    const HTML = `
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3">
                <div>
                    <img src="./img/person.jpg/">
                    </div>
                    <section class="hero">
  <div class="hero-overlay">
    <div class="hero-content">
      <h1>Applications, and Brands.</h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,.</p>
      <a href="#contact" class="btn-primary">Get Started</a>
      <a href="#contact" class="btn-primary">Learn More</a>
      
    </div>
  </div>
</section>
                
        `;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}