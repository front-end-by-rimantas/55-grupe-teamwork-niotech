export function pricing() {
    
    const HTML = `
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3">
                    <div>Our Service</div>
                    <h2>Electricity Service Offerings</h2>
                    <p>From residential households to commercial enterprises, we provide reliable, efficient, and sustainable energy solutions.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">CARD</div>
                <div class="col-12 col-md-6 col-lg-4">CARD</div>
                <div class="col-12 col-md-6 col-lg-4">CARD</div>
            </div>
        </div>
        `;
    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}