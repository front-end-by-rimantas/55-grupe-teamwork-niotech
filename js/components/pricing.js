import { pcardsData } from "../data/pcardsData.js";

export function pricing() {
    let cardsHTML='';

    for (const pcard of pcardsData) {
        cardsHTML+= `
    <div class="col-12 col-md-6 col-lg-4 pcard">
        <h class="plan">${pcard.plan}</h>
        <p class="pricepl">${pcard.price}</p>
        <p class="note">${pcard.text}</p>
            <ul class="stulp">
                <li>7 days free access</li>
                <li>Maximum of 5 collaborators</li>
                <li>Cloud backup 1GB</li>
                <li>Maximum 50 tasks per week</li>
                <li> 100+ HTML UI Elements</li>
                <li>Updates for 1 Year</li>
            </ul>
        <div class="pcard-bottom">
            <div class="pabaiga">${pcard.end}</div>
        </div> 
    </div>`
    }

    const HTML = `
        <section class="container price">
            <div class="row">
                <div class="middle-tag">
                    <div class="section-tag">Our pricing</div>
                    <div class="sign">Choose The Plans That Suits You!</div>
                    <div class="texts">There are many variations of passages of Lorem Ipsum available,</div>
                    <div class="texts">majority have suffered alteration in some form</div>
                    </div>
                </div>
            <div class="toggle">
                <div class="back">
                <div class="month bg">Monthly</div>
                <div class="year">Yearly</div>
                </div>
            </div>
            <div class="row">
            ${cardsHTML}
            </div>
        </section>`;

document
    .getElementById('app')
    .insertAdjacentHTML('beforeend', HTML);

const yearCl=document.querySelector('.year');
const monthCl=document.querySelector('.month');

yearCl.addEventListener('click', ()=>{
    yearCl.classList.add('bg');
    monthCl.classList.remove('bg');
});

monthCl.addEventListener('click', ()=>{
    yearCl.classList.remove('bg');
    monthCl.classList.add('bg');
});
}