import "./Contact.css"
import emailImage from "../../assets/email.png"
import linkedinImage from "../../assets/linkedin.png"

function Contact() {
    return (
        <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={emailImage}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedinImage}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>
    )
}

export default Contact