import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Allenamento, nutrizione, benessere
          </div>
          <h1 className={cn("h1", styles.title)}>
            Crea la tua scheda palestra e nutrizionale
          </h1>
          <div className={styles.text}>
            Con pochi passaggi avrai le schede su misure per te, supportato dai
            migliori personal.
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/download">
              Piano palestra
            </Link>
            <Link
              className={cn("button-stroke", styles.button)}
              to="/class02-details"
            >
              Piano nutrizionale
            </Link>
          </div>
        </ScrollParallax>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <Image
              srcSet="/images/content/watch@2x.png 2x"
              srcSetDark="/images/content/watch-dark@2x.png 2x"
              src="/images/content/watch.png"
              srcDark="/images/content/watch-dark.png"
              alt="Watch"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={900}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/bottle@2x.png 2x"
              src="/images/content/bottle.png"
              alt="Bottle"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={1200}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Ball black"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
