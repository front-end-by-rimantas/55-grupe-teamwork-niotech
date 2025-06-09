export function second() {
    const HTML = `
        <header class="container header">
            <div class="row">
                <div class="col-12 header">
                    <img class="logo" src="../img/logo.png" alt="logtipas">
                    <div class="header-middle">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Sevices</div>
                    <div>Pricing</div>
                    <div>Pages</div>
                    <div>Blogs</div>
                    <div>Contact Us</div>
                    </div>
                    <a href="../" class="btnheader">Return<i class="fa fa-undo"></i></a>
                    </div>
                </div>
            </div>
        </header>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}