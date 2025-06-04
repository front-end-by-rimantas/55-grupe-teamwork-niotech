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
                    <a href="second" class="btnheader">Get Started<i class="fa fa-long-arrow-right"></i></a>                
                    <a href="#" class="col-12 m-11 col-md-6 col-lg-4 buttonup"><i class="fa fa-chevron-up"></i></a>
                </div>
                </div>
            </div>
        </header>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}
