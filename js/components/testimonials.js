export function testimonials() {
    const HTML = `
        <section class="container bg-dark testimonials">
            <div class="row">
                <div class="col-12 col-lg-5">
                    <div class="section-tag">Testimonials</div>
                    <h2 class="feat">Testimonials beloved clients.</h2>
                    <p class="section-desc">We take pride in providing top-notch electricity services that exceed our customers' expectations.</p>
                </div>
                <div class="col-12 col-lg-7">
                    TESTIMONIALS CONTENT
                </div>
            </div>
        </section>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}