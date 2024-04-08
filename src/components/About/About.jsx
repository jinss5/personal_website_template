import "./About.css"
import profile2 from "../../assets/profile2.jpeg"
import experienceImage from "../../assets/experience.png"
import educationImage from "../../assets/education.png"

function About() { 
    return (
        <section id="about">
          <p class="section__text__p1">Get To Know More</p>
          <h1 class="title">About Me</h1>
          <div class="section-container">
            <div class="section__pic-container">
              <img
                src={profile2}
                alt="profile image2"
                class="about-pic"
              />
            </div>
            <div class="about-details-container">
              <div class="about-containers">
                <div class="details-container">
                  <img
                    src={experienceImage}
                    alt="Experience icon"
                    class="icon"
                  />
                  <h3>Experience</h3>
                  <p>Stuff  <br />Professional Professional </p>
                </div>
                <div class="details-container">
                  <img
                    src={educationImage}
                    alt="Education icon"
                    class="icon"
                  />
                  <h3>Education</h3>
                  <p>B.Sc. Bachelors Degree<br />Professional Professional</p>
                </div>
              </div>
              <div class="text-container">
                <p>
                  Words words more words go here you can put a lot of words here Words words more words go here you can put a lot of words here
                  Words words more words go here you can put a lot of words hereWords words more words go here you can put a lot of words here
                  Words words more words go here you can put a lot of words hereWords words more words go here you can put a lot of words here
                </p>
              </div>
            </div>
          </div>
    </section>
    )
}

export default About;