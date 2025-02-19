import "./Experience.css";
import Container from "../helpers/Container";
import checkmark from "../../assets/checkmark.png"

function Experience() {
  return (
    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <Container>
        <div class="details-container">
          <h2 class="experience-sub-title">Frontend Development</h2>
          <div class="article-container">
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>SASS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>JavaScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>TypeScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>Material UI</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div class="details-container">
          <h2 class="experience-sub-title">Backend Development</h2>
          <div class="article-container">
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>PostgreSQL</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>Node JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>Express JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>Ruby on Rails</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
