export function header() {

    const HTML = `
    <header class="site-header">
  <div class="container">
    <a href="#" class="logo">Niotech</a>

    <nav class="nav">
      <ul class="nav-links">
        <a href="#">Home ▾</a>
          <ul class="dropdown-menu">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Cloud Services</a></li>
            <li><a href="#">AI Solutions</a></li>
          </ul>
        <li><a href="#">About Us</a></li>
        <li class="dropdown">
          <a href="#">Services ▾</a>
          <ul class="dropdown-menu">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Cloud Services</a></li>
            <li><a href="#">AI Solutions</a></li>
          </ul>
          <li><a href="#">Pricing</a></li>
          <a href="#">Pages ▾</a>
          <ul class="dropdown-menu">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Cloud Services</a></li>
            <li><a href="#">AI Solutions</a></li>
          </ul>
          <a href="#">Blogs ▾</a>
          <ul class="dropdown-menu">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Cloud Services</a></li>
            <li><a href="#">AI Solutions</a></li>
          </ul>
        </li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <form class="search-form">
        <input type="text" placeholder="Search..." />
      </form>

      <a href="#" class="btn-quote">Get Started</a>
    </nav>

    <div class="menu-toggle" id="mobile-menu">&#9776;</div>
  </div>
</header>`;

 document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);


  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
};
        