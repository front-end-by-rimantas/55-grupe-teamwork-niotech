export function hero() {

    const HTML = `
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3">
                    <div>Streaming your Workflow</div>
                    <h1>Organize, Track, and Complete Task Efficiently</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4"><button>Get Started Now</button></div>
                <div class="col-12 col-md-6 col-lg-4"><button>Download App</button></div>
            </div>
        </div>
        `;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}