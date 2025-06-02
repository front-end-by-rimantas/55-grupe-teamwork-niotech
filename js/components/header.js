export function header() {
    const HTML = `
        <header class="container header">
            <div class="row">
                <div class="col-12 header">
                    <img class="logo" src="./img/logo.png">
                    <div class="header-middle">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Sevices</div>
                    <div>Pricing</div>
                    <div>Pages</div>
                    <div>Blogs</div>
                    <div>Contact Us</div>
                    </div>
                    <i class="fa fa-search"></i>
                    <div class="btnheader">Get Started  <i class="fa fa-long-arrow-right"></i></div>
                    </div>
                </div>
            </div>
        </header>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}