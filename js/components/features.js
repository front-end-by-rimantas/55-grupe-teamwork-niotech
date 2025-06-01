export function features() {    
 const HTML=
 `<div class="container">
        <div class="row">
        <img class="col-12 col-lg-6" src="../img/stats2.png">
        <div class="col-12 col-lg-5"> 
        <div class="section-tag">Our Features</div>
        <h1>We Provide The Best Quality</h1>
        <p>There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly</p>      
        <ul>
        <li>User -Friendly Interface : Easy to use, even for beginners.</li>
        <li>User Secure & Reliable : Your data safe with us.</li>
        <li>24/7 Support : We're here to help, anytime.</li>
        <li>User -Friendly Interface : Easy to use, even for beginners.</li>
        <li>Sealable for Teams : Designed to scale with your needs.</li>
        </ul>
        <a href="#" class="button">Learn more</a>
        </div>
        </div>
</div>`;
 
document
         .getElementById('app')
         .insertAdjacentHTML('beforeend', HTML);
}