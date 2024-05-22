import "../Style/Contact.css"

const Contact = () => {
  

    return (
      <>
<section class="contact section bd-container" id="contact">
  <span class="section-subtitle">For projects</span>
  <h2 class="section-title">Contact Me</h2>

  <div class="contact__container bd-grid">
    <div class="contact__content bd-grid">
      <div class="contact__box">
        <i class="bx bx-home contact__icon"></i>
        <h3 class="contact__title">Location</h3>
        <span class="contact__description">Kathmandu, Nepal</span>
      </div>

      <div class="contact__box">
        <i class="bx bx-phone contact__icon"></i>
        <h3 class="contact__title">Phone</h3>
        <span class="contact__description">+977-9851210676</span>
      </div>

      <div class="contact__box">
        <i class="bx bx-envelope contact__icon"></i>
        <h3 class="contact__title">Gmail</h3>
        <span class="contact__description2">kalikashineservice@gmail.com</span>
      </div>

      <div class="contact__box">
        <i class="bx bx-chat contact__icon"></i>
        <h3 class="contact__title">Chat</h3>
        <div>
          <a href="#" class="contact__social"><i class="bx bxl-whatsapp-square"></i></a>
          <a href="#" class="contact__social"><i class="bx bxl-telegram"></i></a>
          <a href="#" class="contact__social"><i class="bx bxl-messenger"></i></a>
        </div>
      </div>
    </div>

    <form action="" class="contact__form">
      <div class="contact__inputs">
        <input type="text" placeholder="Name" class="contact__input"></input>
        <input type="email" placeholder="Email" class="contact__input"></input>
      </div>

      <div class="contact__inputs">
        <input type="text" placeholder="Project" class="contact__input"></input>
        <input type="number" placeholder="Number" class="contact__input"></input>
      </div>

      <textarea name="" id="" cols="0" rows="7" placeholder="Message" class="contact__input"></textarea>

      <input type="submit" value="Send Message" class="button contact__button"></input>
    </form>
  </div>
</section>
      </>
    )}


    
export default Contact;