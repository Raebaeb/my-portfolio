import { useMediaQuery } from "react-responsive";
import selfie1 from "../assets/selfie1.jpg";
import selfie2 from "../assets/selfie2.jpg";
import selfie3 from "../assets/selfie3.jpg";
import ImgCrossfade from "../components/ImgCrossfade";

const About = () => {
  const isMobile = useMediaQuery({ query: `max-width: 760px` });

  const images = [
    { src: selfie1, alt: "Selfie with friends" },
    { src: selfie2, alt: "Me and my dog Bisco" },
    { src: selfie3, alt: "A selfie" },
  ];

  return (
    <section id="about-me">
      <article id="links">
        <a href="https://docs.google.com/document/d/1mn-fYNqH5efHmiFD70pKr9cOXvFJt3f3QQwTMHMwVIA/edit?usp=sharing">
          <span>My Resume</span>
        </a>
        <a href="mailto:rachel@rachelperez.dev">
          <span>Email me</span>
        </a>
      </article>
      <h2>About Me</h2>
      {isMobile ? (
        <ImgCrossfade imgList={images}/>
      ) : (
        <div id="lrg-img-container">
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={img.altTxt} />
          ))}
        </div>
      )}
      <article id="about-text">
        <p>
          When I'm not at my computer I like to spend my time baking, painting,
          and hanging out with my four dogs. (Three Mini Doxies and a Queensland
          Heeler mix, if you're curious!) It's always a party with loud-mouthed
          weenie dogs in the house.
        </p>
        <p>
          I've done tons of odd jobs throughout the last decade of my adulthood-
          window screen installment, dog training, and house renovation to name
          a few. I love using my hands and being creative in my day to day,
          really taking advantage of my background in fine arts to create
          functional but beautiful things.{" "}
        </p>
        <p>
          Whether its a handmade wooden shelf, a digitally painted portrait, or
          a website that captures the essence of a small business, I love what I
          do!
        </p>
        <p>My current extracurricular venture: learning how to rollerskate.</p>
      </article>
    </section>
  );
};

export default About;
