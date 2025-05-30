export function header() {
    const HTML = `
        <header class="container header">
            <div class="row">
                <div class="col-12 header">
                    <img src="./img/niotech logo.png">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Sevices</div>
                    <div>Pricing</div>
                    <div>Pages</div>
                    <div>Blogs</div>
                    <div>Contact Us</div>
                    <div class="button">Get Started</div>
                    </div>
                </div>
            </div>
        </header>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}