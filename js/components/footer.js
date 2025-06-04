export function footer() {
    const HTML = `
        <footer class="container big">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <img src="./img/logo-footer.png" alt="Logo">
                    <p class="thai">It is a long established fact that from will be distracted by the readable from when looking.</p>
                    <div class="endbuttons">
                        <a class="one" href="#">App Store</a>                        
                        <a class="two" href="#">Play Store</a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="footer1">
                    <h class="on">Pages</h>
                    <span class="line"></span>
                    <p class="ref" href="#">Home</p>
                    <p class="ref" href="#">About Us</p>
                    <p class="ref" href="#">Integrations</p>
                    <p class="ref" href="#">Features</p>
                    <p class="ref" href="#">Pricing</p>
                    <p class="ref" href="#">Contact Us</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-2">
                    <div class="footer1">
                    <h class="on">Utility Pages</h>
                    <span class="line"></span>
                    <p class="ref" href="#">Project</p>
                    <p class="ref" href="#">Blog</p>
                    <p class="ref" href="#">Contact Us</p>
                    <p class="ref" href="#">Pricing</p>
                    <p class="ref" href="#">Project Details</p>
                    <p class="ref" href="#">Our Team</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="footer3">
                    <div class="for">
                    <p class="upp">Address<p>
                    <h class="main">Ready To Get Started?</h>
                    <p class="txt">It is a long established fact that a reader will be distracted layout.</p>
                    <div class="dice">
                    <i class="fa fa-envelope-o fa-2x"></i><p class="mail1">contact.tech@gmail.com</p>
                    </div>
                    <p class="mail2">info@niotech.com</p>
                    <div class="dice">
                    <i class="fa fa-phone fa-2x"></i><p class="mail1">+880 123 654 789 00</p>
                    </div>
                    <p class="mail2">+001 6520 698 00</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row end">
                <div class="col-12 col-md-6 col-lg-4">
                <p>&copy; Copyright 2024 - Current. All Right Reserved</p>
                </div>
                <div class="col-12 m-10 col-md-6 col-lg-4 last">
                <i href="#" class="fa fa-facebook last1"></i> 
                <i href="#" class="fa fa-twitter last2"></i> 
                <i href="#" class="fa fa-linkedin last3"></i> 
                <i href="#" class="fa fa-instagram last4"></i>
                </div> 
            </div>
        </footer>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}