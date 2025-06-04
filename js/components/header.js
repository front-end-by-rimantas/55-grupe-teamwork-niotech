export function header() {
    const HTML = `
        <header class="container">
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
                    <a href="second" class="btnheader">Get Started  <i class="fa fa-long-arrow-right"></i></a>
                    </div>
                 <i class="far fa-search fa-2x</i>
                 <div class="button right">Get Started</div>
                </div>
            </div>
        </header>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}