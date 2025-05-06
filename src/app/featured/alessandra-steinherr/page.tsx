"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AlessandraSteinherrProfile from '../../../assets/images/alessandra-steinherr.webp';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import RihannaVogue from '../../../assets/images/rihanna-vogue.jpg';
import VogueParis from '../../../assets/images/vogue-paris.jpg';
import VogueJapan from '../../../assets/images/vogue-japan.webp';
import VogueTurkey from '../../../assets/images/vogue-turkey.jpg';
import HarpersBazaar from '../../../assets/images/harpers-bazaar.jpg';
import LisaEldridge2 from '../../../assets/images/lisa-eldridge-2.webp';
import LisaEldridge4 from '../../../assets/images/lisa-eldridge-4.webp';
import LisaEldridge8 from '../../../assets/images/lisa-eldridge-8.jpg';
import DuaLipa from '../../../assets/images/dua-lipa-lisa-eldridge.jpg';
import './style.css'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AlessandraSteinherr = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mags = document.querySelector(".mag-covers")!;

    // if (mags !== null) {
      function getScrollAmount() {
        let magsWidth = mags.scrollWidth;
        return -(magsWidth - window.innerWidth);
      }

      const tween = gsap.to(mags, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger:".mag-wrapper",
        start:"top 12%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin:true,
        animation: tween,
        scrub:1,
        invalidateOnRefresh: true,
      })


    gsap.to(['.text-section-title', '.featured-paragraph-text'],  {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.text-section',
        start: 'top 30%',
        end: 'bottom bottom',
        scrub: true
      }
    })

    gsap.to('#section-1', {
      y: -500,
      opacity: 0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-2',
        start: 'top 40%',
        end: 'top top',
        scrub: true
      }
    })

    gsap.to('.section-2-text', {
      x: -500,
      opacity: 0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.lisa-scroll-test',
        start: 'top 80%',
        end: 'top top',
        scrub: true,
      }
    })

    gsap.to('#image-1', {
      x: -700,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.lisa-scroll-test',
        start: 'top 80%',
        end: 'top top',
        scrub: true
      }
    })

    gsap.to('#caption-1', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.lisa-scroll-test',
        start: 'top 80%',
        end: 'top top',
        scrub: true
      }
    })

    ScrollTrigger.create({
      trigger: "#section-2",
      start: "top top",
      end: "bottom top",
      pin: ".pin-container",
      pinSpacing: false,
      scrub: true,
    });

    gsap.to('#section-3', {
      y: -200,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-3',
        start: 'top 110%',
        end: 'top center',
        scrub: true
      }
    })

    ScrollTrigger.create({
      trigger: "#image-section-1",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });

    gsap.fromTo("#mary-greenwell-image",
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#image-section-1",
          start: "top top",
          end: "+=100%",
          scrub: true,
        }
      }
    );

    gsap.fromTo("#caption-2",
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#image-section-1",
          start: "top top+=20%", // slight delay
          end: "+=100%",
          scrub: true,
        }
      }
    );

    gsap.fromTo(".mary-greenwell-line",
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#image-section-1",
          start: "top top+=10%",
          end: "+=80%",
          scrub: true,
        }
      }
    );

    gsap.to('#section-4', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-4',
        start: 'top center',
        end: 'top -100%',
        scrub: true,
      }
    })

    gsap.to('#section-5', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-5',
        start: 'top -50%',
        end: 'top -100%',
        scrub: true,
      }
    })

    gsap.to('#section-6', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-6',
        start: 'top -50%',
        end: 'top -100%',
        scrub: true,
      }
    })

    ScrollTrigger.create({
      trigger: "#section-4",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: "#section-5",
      start: "top top",
      end: "+=50%",
      pin: true,
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: "#section-6",
      start: "top top",
      end: "+=50%",
      pin: true,
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: ".image-column",
      start: "top 10%",
      end: "+=300%",
      pin: true,
      scrub: true,
    });

    gsap.to('#image-item-1', {
      opacity: 0,
      y: -100,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-4',
        start: 'top -20%',
        end: 'bottom top',
        scrub: true,
      }
    })

    gsap.to('#image-item-2', {
      opacity: 1,
      top: '0%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-5',
        start: 'top center',
        end: 'top top',
        scrub: true,
      }
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const backgroundImage: HTMLElement | null = document.getElementById('spring-container-background');

      if (backgroundImage) {
        backgroundImage.style.transform = `translateY(-${scrollTop * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Image priority src={SpringExpanded} id='spring-container-background' alt='test'/>
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', backdropFilter: 'blur(3px) brightness(80%)', zIndex: 5 }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10, color: '#fff' }}>
        <div style={{ zIndex: 10 }}>
          <div className='featured-title-section'>
            <Image src={AlessandraSteinherrProfile} alt='pfp' className='featured-profile-image'/>
            <h1>In Conversation with Alessandra Steinherr:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>From Print Journalism to Digital Content</strong></h1>
          </div>
          <div className="mag-wrapper">
            <div className="mag-covers">
              <div>
                <h3 style={{ marginBottom: '10px' }}><span className='drop-cap'>Alessandra Steinherr</span> reflects on her journey as Glamour’s youngest beauty director at 26, to becoming an influencer in this constantly changing beauty landscape.</h3>
                <h3>Alessandra Steinherr is a beauty journalist with over two decades of experience serving as Beauty Director at Cosmopolitan for six years and at Glamour magazine for eleven years before concentrating more on socials and becoming an influencer. What sets her apart, in this saturated digital landscape, is that she combines her online career, with her role as the Beauty Director at The Glossary magazine whilst having a consultancy business too.</h3>
              </div>
              <div className='grow-line-1'></div>
              <Image src={RihannaVogue} alt='rihanna' />
              <Image src={VogueJapan} alt='vogue-japan' />
              <Image src={VogueParis} alt='vogue-paris' />
              <Image src={VogueTurkey} alt='vogue-turkey' />
              <Image src={HarpersBazaar} alt='harpers-bazaar' />
            </div>
          </div>
          <div className='text-section' id='section-1'>
            <h1 className='text-section-title'>What name would you have chosen, if you could have been called anything else?</h1>
            <p className='featured-paragraph-text'>Oh, my God, well, my mum was actually going to call me Nina. And then, last minute, she changed it to Lisa. At one point, I thought I would have preferred Nina—I like it better. Honestly, I don’t like Lisa.</p>
          </div>
          <div className='text-section' id='section-2'>
            <div className='pin-container'>
              <div className='section-2-text' style={{ width: '55%' }}>
                <h1 className='text-section-title'>What were your first experiences with makeup?</h1>
                <p className='featured-paragraph-text'>It started when I found my mum’s old makeup after we moved back to England from New Zealand. She had this box with little drawers, filled with 1960s makeup like Biba and Mary Quant that was really playful and colourful. Makeup from that era was designed for teenagers, so it had this childlike, crayon-like quality that I loved because of the objects and textures and for me, that was the turning point. I was also really inspired by the “vintageness”, because I knew it was old makeup and that was more interesting than modern makeup. I also used to draw on paper with it because it was more interesting than using regular crayons and art supplies. For my 13th birthday, I got a book on stage and theatrical makeup, and it blew my mind. The transformations, the way you could create light and shade, it was like art. I knew that’s what I wanted to do.</p>
              </div>
              <Image src={LisaEldridge2} alt='lisa-eldridge-2' id='image-1' />
              <div className='interactive-image-caption' id='caption-1'>
                <p>Lisa Eldridge MBE and her mum. “Discovering my mum’s teenage makeup stash at my grandmothers sparked my intense interest/ obsession with makeup and it’s history” (Credit: Lisa Eldridge’s MBE Facebook).</p>
              </div>
            </div>
          </div>
          <div className='lisa-scroll-test'></div>
          <div className='text-section' id='section-3'>
            <h1 className='text-section-title'>When you were 21, who did you look up to in the beauty industry?</h1>
            <p className='featured-paragraph-text' style={{ marginBottom: '10px'}}>Oh, absolutely. I didn’t know anyone in the industry, and there wasn’t any internet back then to guide me, so it was tricky to figure out, especially wanting to go into the fashion industry. I’d buy magazines to study credits like "Mary Greenwell for Debbie Walters" and figure out which agency to call and who was repping each other. Networking was painstaking, you had to meet people at clubs or get in touch with agencies directly and say, “I would love to assist, or something”. I did a lot of unpaid work to build my portfolio, working with new models like Kate Moss who were just coming into the industry.</p>
            <p className='featured-paragraph-text'>At one point, I heard someone say they got a magazine cover because their boyfriend was the editor, and I remember thinking, oh my god, I hope it’s literally not going to come down to who you know. But in the end, hard work and perseverance paid off. By the time I was 23, I was signed by an agency alongside legends like Sam McKnight MBE, Mary Greenwell and major major people - I was kind of the baby. That was huge. At first, I was asked why I wanted to assist, but I had only worked with up-and-coming models and I didn’t know how to react when a big supermodel or celebrity walked into the room; however, I quickly learnt that you just treat everybody the same.</p>
          </div>
          <div className='image-section' id='image-section-1'>
            <Image src={LisaEldridge4} alt='mary-greenwell' id='mary-greenwell-image' />
            <div className='mary-greenwell-line'></div>
            <div className='interactive-image-caption' id='caption-2'>
              <p style={{ marginBottom: '10px' }}>Mary Greenwell is one of the world’s most sought-after makeup artists, known for setting beauty trends on the runway and earning numerous industry accolades. Her work has been shown in Vogue Italia, Vogue UK, and Vogue US, and she has collaborated with legendary photographers such as Patrick Demarchelier and Peter Lindbergh. Most notably, she helped redefine the image of Princess Diana, contributing to some of her most iconic photo shoots. In 2015, Mary was honored with the Lifetime Achievement Award from CEW and in 2023, she was appointed as an ambassador for the British Beauty Council.</p>
              <p style={{ marginBottom: '10px' }}>Sam McKnight MBE is one of the most iconic hair stylists in fashion history, renowned for collaborating on over 200 Vogue covers in campaigns for Fendi, Chanel and Balmain. He famously crafted Princess Diana’s signature short hairstyle and has worked with legends like Naomi Campbell and Lady Gaga. In 2023, he was awarded an MBE for his services in fashion and beauty and continues to influence the industry with his brand, Hair by Sam McKnight.</p>
              <p>Mary Greenwell and Princess Diana with Hairstylist Sam McKnight MBE (Image credit: Pinterest).</p>
            </div>
          </div>
          <div className='column-wrapper'>
            <div style={{ width: '70%' }}>
              <div className='text-section' id='section-4'>
                <h1 className='text-section-title'>What was your favourite club when you were 21?</h1>
                <p className='featured-paragraph-text'>The WAG Club was the place to be. So many cool people in fashion and creative industries hung out there. Clubs like that were great for meeting people and building connections. I’d speak to the people from Models One and ask whether they had any new models and that’s how I got my portfolio together.</p>
              </div>
              <div className='text-section' id='section-5'>
                <h1>What was the first big show you worked on?</h1>
                <p className='featured-paragraph-text'>It was with Mary, assisting at shows like Rifat Ozbek in London and Romeo Gigli in Paris. I remember rushing through makeup at my first big show, and Mary told me to slow down and take my time. I was like, oh my god, okay!</p>
              </div>
              <div className='text-section' id='section-6'>
                <h1>What advice would you give your 21-year-old self?</h1>
                <p className='featured-paragraph-text'>I’d tell her to stay confident and not compare herself to others but explore the ideas she had and wanted to share. In a creative industry, it’s fuelled by ideas, there’s no such thing as a bad one. I wish I’d spoken up more on shoots when I had ideas. Now, I’m much more comfortable experimenting. For instance, I recently tried a bold blue eyeshadow look during a Claudia Schiffer shoot for Pop Magazine. It didn’t work, and we took it off, but that’s okay! It’s all part of the creative process.</p>
                <p className='featured-paragraph-text'>Don’t think you’re silly or something and don’t be afraid to explore, speak your mind, and trust your instincts. There’s good ideas, bad ideas, but actually they’re all good.</p>
              </div>
            </div>
            <div className='image-column'>
              <div id='image-item-1'>
                <Image src={LisaEldridge8} alt='lisa-eldridge-at-work' className='image-column-child' id='image-column-1'/>
                <div className='interactive-image-caption' id='caption-3'>
                  <p>Lisa at work.</p>
                </div>
              </div>
              <div id='image-item-2'>
                <Image src={DuaLipa} alt='lisa-eldridge-at-work' className='image-column-child' id='image-column-1'/>
                <div className='interactive-image-caption' id='caption-3'>
                  <p>Test Test Test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default AlessandraSteinherr
