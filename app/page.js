"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { value: 125, label: "Increase in engagement" },
  { value: 85, label: "Faster page interactions" },
  { value: 90, label: "Customer satisfaction" },
  { value: 40, label: "Lower bounce rate" },
];

const benefits = [
  {
    number: "01",
    title: "Less waiting.",
    copy: "Clearer routes and quicker decisions keep every trip moving.",
    detail: "BUILT FOR REAL LIFE",
  },
  {
    number: "02",
    title: "More arriving.",
    copy: "A smoother experience gives people more time for what matters.",
    detail: "MADE AROUND YOU",
  },
  {
    number: "03",
    title: "Better together.",
    copy: "Small thoughtful moments add up to a better way forward.",
    detail: "ALWAYS IN MOTION",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Choose your stop",
    copy: "Pick the pickup point that fits your plans. Clear options make a good start.",
    tag: "YOUR ROUTE, YOUR CALL",
  },
  {
    number: "02",
    title: "Follow the flow",
    copy: "Stay in the loop with helpful updates, so you know what is happening next.",
    tag: "NO GUESSWORK",
  },
  {
    number: "03",
    title: "Get on your way",
    copy: "A simple hand-off gets you moving again, with more day left to enjoy.",
    tag: "OFF YOU GO",
  },
];

const headline = "WELCOME ITZ FIZZ";

export default function Home() {
  const root = useRef(null);
  const hero = useRef(null);
  const car = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const counters = root.current.querySelectorAll(".stat-value");

      if (reduceMotion) {
        counters.forEach((counter) => {
          counter.textContent = `${counter.dataset.value}%`;
        });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".eyebrow", { y: 14, autoAlpha: 0, duration: 0.6 })
        .from(".headline-letter", {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.04,
        })
        .from(".hero-note", { y: 12, autoAlpha: 0, duration: 0.6 }, "-=0.45")
        .from(
          ".stat-card",
          { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.16 },
          "-=0.3",
        )
        .from(".car", { autoAlpha: 0, x: -60, duration: 1 }, "-=0.8");

      gsap.from(".benefit-card", {
        y: 36,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experience",
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".journey-step", {
        y: 28,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".how-it-works",
          start: "top 74%",
          once: true,
        },
      });

      gsap.fromTo(
        ".page-progress",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.25,
          },
        },
      );

      counters.forEach((element, index) => {
        const count = { value: 0 };
        intro.to(
          count,
          {
            value: Number(element.dataset.value),
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              element.textContent = `${Math.round(count.value)}%`;
            },
          },
          1 + index * 0.18,
        );
      });

      const scrollTimeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: hero.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTimeline
        .to(
          car.current,
          {
            x: () =>
              window.innerWidth * 0.98 -
              car.current.offsetWidth -
              window.innerWidth * 0.04,
            duration: 1,
          },
          0,
        )
        .to(".dashes", { x: () => -window.innerWidth * 1.2, duration: 1 }, 0)
        .to(
          ".headline",
          { y: -30, autoAlpha: 0.25, letterSpacing: "0.7em", duration: 1 },
          0,
        )
        .to(".stats", { y: -20, duration: 1 }, 0);

      root.current.querySelectorAll(".wheel").forEach((wheel) => {
        scrollTimeline.to(
          wheel,
          {
            rotation: -900,
            svgOrigin: `${wheel.dataset.x} 112`,
            duration: 1,
          },
          0,
        );
      });
    },
    { scope: root },
  );

  return (
    <main ref={root}>
      <div className="page-progress" aria-hidden="true" />
      <section ref={hero} className="hero" aria-label="Welcome to Itz Fizz" id="top">
        <header className="site-nav">
          <a className="brand" href="#top" aria-label="Itz Fizz home">
            <span className="brand-mark">f</span>
            <span>itz fizz<span className="brand-period">.</span></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#impact">Our impact</a>
            <a href="#experience">The experience</a>
            <a href="#how-it-works">How it works</a>
          </nav>
          <a className="nav-cta" href="#experience">
            Discover more <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A little more life in every journey</p>
          <h1 className="headline text-center" aria-label={headline}>
            {headline.split(" ").map((word, wordIndex) => (
              <span className="headline-word" key={`${word}-${wordIndex}`}>
                {Array.from(word).map((letter, letterIndex) => (
                  <span
                    aria-hidden="true"
                    className="headline-letter"
                    key={`${letter}-${letterIndex}`}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-note">Move through your day with a little more ease.</p>
          <a className="hero-link" href="#experience">See what moves us <span aria-hidden="true">↓</span></a>
        </div>

        <div className="stats flex flex-wrap justify-center" id="impact" aria-label="Impact statistics">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong className="stat-value" data-value={stat.value}>
                0%
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="scene" aria-label="A car traveling along a road">
          <div className="scene-note"><span>01</span><i /> Designed to move</div>
          <div className="road">
            <div className="dashes" />
          </div>
          <div className="car" ref={car}>
            <svg viewBox="0 0 400 150" aria-hidden="true">
              <path
                d="M20 105 L40 78 Q48 68 62 66 L120 60 L165 30 Q175 24 190 24 L255 24 Q270 24 280 34 L305 62 L360 70 Q382 76 384 100 L384 112 L20 112Z"
                fill="var(--accent)"
              />
              <path
                d="M132 58 L170 34 L192 34 L192 58Z M204 34 L252 34 L286 58 L204 58Z"
                fill="var(--window)"
              />
              <path
                d="M44 81 Q100 67 153 42 M212 39 L254 39 Q268 41 277 53"
                fill="none"
                stroke="rgba(255,255,255,.45)"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <path d="M24 91 L43 87 L39 98 L22 101Z" fill="#fff0cf" />
              <path d="M374 87 L382 91 L382 99 L375 98Z" fill="#9b291e" />
              <g className="wheel" data-x="100">
                <circle cx="100" cy="112" r="28" fill="#111" />
                <circle cx="100" cy="112" r="18" fill="none" stroke="#444" strokeWidth="2" />
                <circle cx="100" cy="112" r="13" fill="#c9cbd0" />
                <path d="M100 99V125M87 112H113M91 103L109 121M109 103L91 121" stroke="#727780" strokeWidth="2.5" />
                <circle cx="100" cy="112" r="3" fill="#454951" />
              </g>
              <g className="wheel" data-x="308">
                <circle cx="308" cy="112" r="28" fill="#111" />
                <circle cx="308" cy="112" r="18" fill="none" stroke="#444" strokeWidth="2" />
                <circle cx="308" cy="112" r="13" fill="#c9cbd0" />
                <path d="M308 99V125M295 112H321M299 103L317 121M317 103L299 121" stroke="#727780" strokeWidth="2.5" />
                <circle cx="308" cy="112" r="3" fill="#454951" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="experience-heading">
          <div>
            <p className="section-kicker"><span>02</span> / MADE FOR YOUR EVERYDAY</p>
            <h2 id="experience-title">Good journeys<br /><em>change everything.</em></h2>
          </div>
          <p className="experience-intro">Getting there should feel as good as being there. We make the in-between a little easier, so you can focus on what comes next.</p>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.number}>
              <div className="benefit-topline"><span>{benefit.number}</span><span aria-hidden="true">↗</span></div>
              <div className="benefit-orbit" aria-hidden="true"><span /></div>
              <p className="benefit-detail">{benefit.detail}</p>
              <h3>{benefit.title}</h3>
              <p className="benefit-copy">{benefit.copy}</p>
            </article>
          ))}
        </div>

        <section className="how-it-works" id="how-it-works" aria-labelledby="steps-title">
          <div className="steps-heading">
            <div>
              <p className="section-kicker"><span>03</span> / SIMPLE BY DESIGN</p>
              <h2 id="steps-title">Three steps.<br /><em>One smoother day.</em></h2>
            </div>
            <p>Thoughtful from the first tap to the final stop. Here is how we keep the little things feeling easy.</p>
          </div>
          <div className="journey-steps">
            <div className="steps-route" aria-hidden="true"><span /></div>
            {journeySteps.map((step) => (
              <article className="journey-step" key={step.number}>
                <div className="step-marker"><span>{step.number}</span><i /></div>
                <p className="step-tag">{step.tag}</p>
                <h3>{step.title}</h3>
                <p className="step-copy">{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="experience-cta">
            <div className="cta-orbit" aria-hidden="true"><span /></div>
            <div><p>YOUR NEXT GOOD JOURNEY STARTS HERE</p><h3>Make the everyday<br /><em>a little extraordinary.</em></h3></div>
            <a href="#top">Back to the top <span aria-hidden="true">↑</span></a>
          </div>
        </section>

        <footer className="closing-bar">
          <a className="brand" href="#top"><span className="brand-mark">f</span><span>itz fizz<span className="brand-period">.</span></span></a>
          <p>Make room for what moves you.</p>
          <a className="back-top" href="#top">Back to the beginning <span aria-hidden="true">↑</span></a>
        </footer>
      </section>
    </main>
  );
}
