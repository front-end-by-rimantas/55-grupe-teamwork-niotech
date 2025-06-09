export function testimonials() {
const HTML = `
    <section class="container bg-dark testimonials">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="section-tag">Testimonials</div>
                <h2 class="feat">Testimonials beloved clients.</h2>
                <p class="section-desc">We take pride in providing top-notch electricity services that exceed our customers' expectations.</p>
            </div>
        </div>
        <div class="next">
            <div class="row">
            <div class="col-12 col-lg-8">
                <p class="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam reprehenderit maiores eaque accusamus itaque officia iure pariatur animi, minus sequi quas vitae facilis sint! Error nisi ad similique? Aut!</p>
            <div class="col-12 col-lg-10 duo">
            <h class="name">Marvin McKinney</h>
            <img class="logoc" src="../img/logoc.png"></img>
            </div>
            </div>
            <div class="col-12 col-lg-4">
                <img class="dude" src="../img/person.jpg"></img>
            </div>
        </div>
    </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}