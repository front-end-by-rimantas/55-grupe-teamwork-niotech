export function features() { 
 const HTML=
 `<div class="container">
        <div class="row">
        <img class="col-12 col-lg-6" src="../img/stats2.png">
        <div class="col-12 col-lg-5"> 
        <div class="top-text">Our features</div>
        <h1>We Provide The Best Quality</h1>
        <p>There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly</p>
        <p><img class="circle" src="../img/round.png">User -Friendly Interface : Easy to use, even for beginners.</p>
        <p><img class="circle" src="../img/round.png">User Secure & Reliable : Your data safe with us.</p>
        <p><img class="circle" src="../img/round.png">24/7 Support : We're here to help, anytime.</p>
        <p><img class="circle" src="../img/round.png">User -Friendly Interface : Easy to use, even for beginners.</p>
        <p><img class="circle" src="../img/round.png">Sealable for Teams : Designed to scale with your needs.</p>
        </div>
        </div>
</div>`
 
document
         .getElementById('app')
         .insertAdjacentHTML('beforeend', HTML)
}