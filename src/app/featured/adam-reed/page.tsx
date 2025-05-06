"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import LisaEldrigdeProfile from '../../../assets/images/lisa-eldridge-profile.webp';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import AdamReedProfile from '../../../assets/images/adam-reed-profile.webp';
import AdamReed2 from '../../../assets/images/adam-reed-2.jpeg';
import AdamReedHair1 from '../../../assets/images/adam-reed-hair-1.jpg';
import AdamReedHair2 from '../../../assets/images/adam-reed-hair-2.jpg';
import AdamReedHair3 from '../../../assets/images/adam-reed-hair-3.webp';
import AdamReedHair4 from '../../../assets/images/adam-reed-hair-4.webp';
import JulienDys from '../../../assets/images/julien-dys.webp';
import TrevorSorbie from '../../../assets/images/trevor-sorbie.jpg';
import './styles.css'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AdamReed = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mags = document.querySelector(".mag-covers")!;

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
      end: () => `+=${getScrollAmount() * -1 + 150}`,
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

    ScrollTrigger.create({
      trigger: "#section-2",
      start: "top 10%",
      end: "bottom top",
      pin: ".pin-container",
      pinSpacing: false,
      scrub: true,
    });

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

  }, [])

  return (
    <>
      <Image priority src={SpringExpanded} id='spring-container-background' alt='test'/>
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', backdropFilter: 'blur(3px) brightness(80%)', zIndex: 5 }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10, color: '#fff' }}>
        <div style={{ zIndex: 10 }}>
          <div className='featured-title-section'>
            <Image src={AdamReedProfile} alt='pfp' className='featured-profile-image'/>
            <h1>In Conversation With Adam Reed:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>On Becoming A World Class Hairstylist</strong></h1>
          </div>
          <div className="mag-wrapper">
            <div className="mag-covers">
              <h3><span className='drop-cap'>Adam Reed</span> is one of the UK’s most celebrated hair stylists, known for working with fashion magazines like Vogue, Elle and Harper’s Bazaar. Adam has styled an array of celebrities including Madonna and Lady Gaga, earning him the reputation for effortlessly cool, wearable hair. He is the founder of Arkive Headache and the Adam Reed London hair salon. He is an ambassador for L’Oréal Pro and in 2022, the British Beauty Council appointed him as an ambassador for his recognised contribution and advocacy for mental wellbeing in the beauty industry.</h3>
              <div className='grow-line-1'></div>
              <Image src={AdamReedHair1} alt='adam-reed-hair-1' />
              <Image src={AdamReedHair2} alt='adam-reed-hair-2' />
              <Image src={AdamReedHair3} alt='adam-reed-hair-3' />
              <Image src={AdamReedHair4} alt='adam-reed-hair-4' />
              <p className='interactive-image-caption'>All Images from <a href='https://arkivebyadamreed.com/' target="_blank">arkivebyadamreed.com/</a></p>
            </div>
          </div>
          <div className='text-section' id='section-2'>
            <div className='pin-container'>
              <div className='section-2-text' style={{ width: '55%' }}>
                <h1 className='text-section-title'>When you were 21, who did you look up to in the beauty industry?</h1>
                <p className='featured-paragraph-text' style={{ marginBottom: '10px' }}>Julien d’Ys, the French hairdresser. He has always been my ultimate icon. And Estée Lauder, I was obsessed with her brand. My grandmother used Estée Lauder and the heritage of the brand and what they did back then captivated me because it was’t as consumer facing. I also admired François Nars. Meeting Julien d’Ys was surreal; I completely fan-girled and went quiet, which isn’t like me at all! I stood quite in awe of the fact I got to meet him, and as it was early on in my career, I just thought he was amazing!</p>
                <p className='featured-paragraph-text'>Later, I met hairstylist Guido Palau and makeup artist Dick Page, and every time I was just amazed to be in their presence. There was also Trevor Sorbie, who recently passed, was another one of my idols and he became a really good friend of mine.</p>
              </div>
              <Image src={JulienDys} alt='lisa-eldridge-2' id='image-1' />
              <div className='interactive-image-caption' id='caption-1'>
                <p>Julien d’Ys is a renowned French hairstylist and artist, celebrated for his avant-garde approach resulting in his work being featured in Vogue and Harper’s Bazaar. He has partnered with legendary photographers insulting Steven Meisel and Annie Leibovitz but notably he has maintained a decades-long collaboration with Comme des Garçons designer Rei Kawakubo, contributing to some of the brand’s iconic runway looks. He has also created multiple sculptures which have been featured in various exhibitions (Image credit: Peter Lindbergh/ 2b Management)</p>
              </div>
            </div>
          </div>
          <div className='lisa-scroll-test'></div>
          <div className='text-section' id='section-3'>
            <h1 className='text-section-title'>What was your first interaction with hair?</h1>
            <p className='featured-paragraph-text' style={{ marginBottom: '10px'}}>It started with my Nan. As a boy, I’d go with her to this tiny salon in a tiny village in Somerset called Jenny’s Cut & Shape. It was full of old ladies getting shampoos and cut and I felt at home, me in a salon I did. I used to cut my sister’s and best friends hair from a young age and I guess that is why I have always worked in a salon and not been just a session stylist because I love that sense of community. I was only four, but they had me cleaning rollers, sweeping the floor, and making coffee. That salon gave me a sense of belonging that school never did, because I felt like I wasn’t very good at school, but in a salon I thrived, and I loved it.</p>
          </div>
          <div className='image-section' id='image-section-1'>
            <Image src={TrevorSorbie} alt='mary-greenwell' id='mary-greenwell-image' />
            <div className='mary-greenwell-line'></div>
            <div className='interactive-image-caption' id='caption-2'>
              <p style={{ marginBottom: '10px' }}>Trevor Sorbie was a Scottish Hairdresser who died in 2024 after a long history of working in the beauty industry and renowned for his innovative techniques and transformative hairstyles. His signature “Scrunch” hairstyle (the style in this image) became a hallmark of the late 1970s fashion scenes and were featured regularly in publications like Vogue. Trevor founded the charity My New Hair, providing support and wig customisation for individuals experiencing hair loss. (Image credit: Hairdressers Journal)</p>
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
                {/* <Image src={LisaEldridge8} alt='lisa-eldridge-at-work' className='image-column-child' id='image-column-1'/> */}
                <div className='interactive-image-caption' id='caption-3'>
                  <p>Lisa at work - From <a style={{ textDecoration: 'underline'}} href='https://lisaeldridge.com' rel="noopener noreferrer" target="_blank">lisaeldridge.com</a></p>
                </div>
              </div>
              <div id='image-item-2'>
                {/* <Image src={LisaMBE} alt='lisa-eldridge-at-work' className='image-column-child' id='image-column-1'/> */}
                <div className='interactive-image-caption' id='caption-3'>
                  <p>Lisa is awarded an MBE</p>
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

export default AdamReed
