export function features() {    
 const HTML=
 `<div class="container">
        <div class="row">
        <img class="col-12 col-lg-6" src="../img/stats2.png">
        <div class="col-12 col-lg-5">
        <div class="section-tag">Our Features</div>
        <h1 class="feat">We Provide The Best Quality</h1>
        <p class="text">There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly</p>      
        <ul>
        <li>User -Friendly Interface : Easy to use, even for beginners.</li>
        <li>User Secure & Reliable : Your data safe with us.</li>
        <li>24/7 Support : We're here to help, anytime.</li>
        <li>User -Friendly Interface : Easy to use, even for beginners.</li>
        <li>Sealable for Teams : Designed to scale with your needs.</li>
        </ul>
        <div class="side">
        <a href="#" class="button">Learn more</a>
        <a href="#" class="back"></a> 
        </div>
        </div>
     </div>
</div>
<div class="container trio">
        <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
        <div class="inline">
        <img class="icons" src="../img/icon1.png">
        <h class="up">Create</h>
        </div>
        <i class="tunder">There are many vriations of passages f</i>
        <i class="tunder">Lorem Ipsum but the majority have</i>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
        <div class="inline">
        <img class="icons" src="../img/icon2.png">
        <h class="up">Customize</h>
        </div>
        <i class="tunder">There are many vriations of passages f</i>
        <i class="tunder">Lorem Ipsum but the majority have</i>
        </div> 
        <div class="col-12 col-md-6 col-lg-4">
        <div class="inline">
        <img class="icons" src="../img/icon3.png">
        <h class="up">Say on top</h>
        </div>
        <i class="tunder">There are many vriations of passages f</i>
        <i class="tunder">Lorem Ipsum but the majority have</i>
        </div>                                            
</div>
</div>` 


document
         .getElementById('app')
         .insertAdjacentHTML('beforeend', HTML);
}