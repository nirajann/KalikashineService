import "../Style/Header.css"

const Header = () => {
  

    return (
      <>
 <nav class="navbar navbar-expand-lg fixed-top shadow-sm">
  <div class="container-lg">
    <a class="navbar-brand fw-bold" href="#">Kalika Shine Service</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#hero">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
     <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
     
      </ul>
      <a class="btn btn-outline-dark d-none d-lg-block" href="#contact">Let's Talk</a>
      
    </div>
  </div>
</nav>
      </>
    )}


    
export default Header;