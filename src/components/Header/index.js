import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
import Icon from "../Icon";
import Image from "../Image";

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Prezzi",
    url: "/pricing",
  },
  /*{
    title: "Crea il tuo piano",
    content: {
      menu: [
        {
          title: "Piano palestra",
          url: "/class01",
          image: "/images/menu-video.svg",
        },
        {
          title: "Piano nutrizionale",
          url: "/class02",
          image: "/images/menu-class.svg",
        },
      ],
      links: [
        {
          title: "Sweet and Tone",
          url: "/class01-details",
          image: "/images/content/header-pic-1.png",
          image2x: "/images/content/header-pic-1@2x.png",
          category: "black",
          categoryText: "featured class",
          avatar: "/images/content/avatar-1.png",
          trainer: "Zack Beier",
          content:
            "Sweet and Tone is a seven-day bodyweight training program designed to boost your strength and endurance over the course of a week.",
          level: "green",
          levelText: "beginner",
        },
        {
          title: "Sweet and Tone",
          url: "/class01-details",
          image: "/images/content/header-pic-2.png",
          image2x: "/images/content/header-pic-2@2x.png",
          category: "green",
          categoryText: "yoga",
          avatar: "/images/content/avatar-2.png",
          trainer: "Zack Beier",
        },
        {
          title: "Sweet and Tone",
          url: "/class01-details",
          image: "/images/content/header-pic-3.png",
          image2x: "/images/content/header-pic-3@2x.png",
          category: "purple",
          categoryText: "mindfulness",
          avatar: "/images/content/avatar-3.png",
          trainer: "Zack Beier",
        },
        {
          title: "Sweet and Tone",
          url: "/class01-details",
          image: "/images/content/header-pic-4.png",
          image2x: "/images/content/header-pic-4@2x.png",
          category: "red",
          categoryText: "fitness",
          avatar: "/images/content/avatar-4.png",
          trainer: "Zack Beier",
        },
      ],
      trainer: [
        {
          title: "Roberto De Luca",
          avatar: "/images/content/avatar-1.png",
          type: "Personal trainer",
        },
        {
          title: "Giovanni",
          avatar: "/images/content/avatar-2.png",
          type: "Personal nutritionist",
        },
      ],
    },
  },*/
  {
    title: "Blog",
    url: "/lifestyle",
  },
  {
    title: "Chi siamo",
    url: "/download",
  },
  {
    title: "Contattaci",
    url: "/lifestyle",
  },
];

const socials = [
  {
    title: "facebook",
    size: "16",
    url: "https://www.facebook.com/ui8.net/",
  },
  {
    title: "twitter",
    size: "18",
    url: "https://twitter.com/ui8",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com/ui8net/",
  },
];

const contact = [
  {
    title: "Montanachester",
    content: "06787 Block Estates",
  },
  {
    title: "Lake Gene",
    content: "167 Emard River",
  },
  {
    title: "North Hassiefort",
    content: "032 Leonora Spurs",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.pic}
            src="/images/logo-dark.svg"
            srcDark="/images/logo-light.svg"
            alt="Fitness Pro"
          />
        </Link>
        <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {navLinks.map((x, index) =>
              x.content ? (
                <DropdownMenu
                  className={styles.group}
                  item={x}
                  key={index}
                  setValue={setVisibleNav}
                />
              ) : (
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={x.url}
                  key={index}
                  onClick={() => setVisibleNav(false)}
                >
                  {x.title}
                </NavLink>
              )
            )}
          </nav>
          <div className={styles.details}>
            <div className={styles.contact}>
              {contact.map((x, index) => (
                <div className={styles.element} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              ))}
            </div>
            <div className={styles.socials}>
              {socials.map((x, index) => (
                <a
                  className={styles.social}
                  href={x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Icon name={x.title} size={x.size} />
                </a>
              ))}
            </div>
            <Link
              className={cn("button-stroke button-small", styles.button)}
              to="/"
            >
              Crea la tua scheda
            </Link>
          </div>
        </div>
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/"
        >
          Crea la tua scheda
        </Link>
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
