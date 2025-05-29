export function features() { 
 const HTML=`<div class="container">
            <div class="row">
            <img class="col-6 fluid" src="../img/stats2.png">
            <div class="col-6"> 
            <h1>We provide the best quality</h1>
            <p>There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly</p>
            <ul>
            <img src="../img/round.png"><li>User -Friendly Interface : Easy to use, even for beginners.<li>
            <img src="../img/round.png"><li>User Secure & Reliable : Your data safe with us.<li>
            <img src="../img/round.png"><li>24/7 Support : We're here to help, anytime.<li>
            <img src="../img/round.png"><li>User -Friendly Interface : Easy to use, even for beginners.<li>
            <img src="../img/round.png"><li>Sealable for Teams : Designed to scale with your needs.<li>
            </ul>
            </div>
            </div>`
 
document
         .getElementById('app')
         .insertAdjacentHTML('beforeend', HTML)
}