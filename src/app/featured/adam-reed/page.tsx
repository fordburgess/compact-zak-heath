"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import AdamReedProfile from '../../../assets/images/adam-reed-profile.webp';
import AdamReed2 from '../../../assets/images/adam-reed-2.jpeg';
import AdamReedHair1 from '../../../assets/images/adam-reed-hair-1.jpg';
import AdamReedHair2 from '../../../assets/images/adam-reed-hair-2.jpg';
import AdamReedHair3 from '../../../assets/images/adam-reed-hair-3.webp';
import AdamReedHair4 from '../../../assets/images/adam-reed-hair-4.webp';
import JulienDys from '../../../assets/images/julien-dys.webp';
import TrevorSorbie from '../../../assets/images/trevor-sorbie.jpg';
import CocaineNights from '../../../assets/images/cocaine-nights.jpg';
import LuigiMurenu from '../../../assets/images/luigi-murenu.jpg';
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
        start: 'top -100%',
        end: 'top -150%',
        scrub: true,
      }
    })

    gsap.to('#section-7', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-7',
        start: 'top -150%',
        end: 'top -200%',
        scrub: true,
      }
    })

    gsap.to('#section-8', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-8',
        start: 'top -200%',
        end: 'top -250%',
        scrub: true,
      }
    })

    gsap.to('#section-9', {
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-9',
        start: 'top -250%',
        end: 'top -300%',
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
      trigger: "#section-7",
      start: "top top",
      end: "+=50%",
      pin: true,
      scrub: true,
    });
//
//     ScrollTrigger.create({
//       trigger: "#section-8",
//       start: "top top",
//       end: "+=50%",
//       pin: true,
//       scrub: true,
//     });

    ScrollTrigger.create({
      trigger: ".image-column",
      start: "top 10%",
      end: "+=800%",
      pin: true,
      scrub: true,
    });

    gsap.to('#image-item-1', {
      opacity: 0,
      y: -100,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-5',
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
        trigger: '#section-6',
        start: 'top center',
        end: 'top top',
        scrub: true,
      }
    })

    gsap.to('#image-item-2', {
      opacity: 0,
      // y: -100,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#section-7',
        start: 'top -10%',
        end: 'top -20%',
        scrub: true,
      }
    })
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
                <p>Julien d’Ys is a renowned French hairstylist and artist, celebrated for his avant-garde approach resulting in his work being featured in Vogue and Harper’s Bazaar. He has partnered with legendary photographers including Steven Meisel and Annie Leibovitz but notably he has maintained a decades-long collaboration with Comme des Garçons designer Rei Kawakubo, contributing to some of the brand’s iconic runway looks. He has also created multiple sculptures which have been featured in various exhibitions (Image credit: Peter Lindbergh/ 2b Management)</p>
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
              {/* <div style={{ height: '50vh', width: '50vw', backgroundColor: 'red',  }}></div> */}
              {/* <div style={{ height: '50vh', width: '50vw', backgroundColor: 'green',  }}></div> */}
              {/* <div style={{ height: '50vh', width: '50vw', backgroundColor: 'blue',  }}></div> */}
              {/* <div style={{ height: '50vh', width: '50vw', backgroundColor: 'red', opacity: 0 }}></div>
              <div style={{ height: '50vh', width: '50vw', backgroundColor: 'red', opacity: 0 }}></div>
              <div style={{ height: '50vh', width: '50vw', backgroundColor: 'red', opacity: 0 }}></div> */}
              <div className='text-section' id='section-4'>
                <h1 className='text-section-title'>Where did you go clubbing in London at 21?</h1>
                <p className='featured-paragraph-text'>I went to Heaven, Velvet Underground, and a bar in Soho called Ricky Ticks, a hub for fashion people. Moving to London at 22, I immersed myself in these places to network and meet people, so I went three to four times a week, I loved it and I felt like I was with my people. I even met Jean Paul Gaultier at Heaven! I was wearing a Jean Paul Gaultier kilt, and so was he. I walked right up to him. Networking then was all face-to-face, and I loved it, so I made sure I was in the right places to meet the right people and you’d meet the most amazing people in Heaven.</p>
              </div>
              <div className='text-section' id='section-5'>
                <h1>How did you approach networking when you didn’t know anyone?</h1>
                <p className='featured-paragraph-text'>I’d go up to people, compliment their work, and start conversations. My strategy was also to meet PRs face-to-face who could get me into events and who looked after these big names. The party scene was much bigger back then because social media wasn’t around to let people know what was happening, it was more exclusive, so having the PR’s numbers was a better way. Once there, my motto was kill people with kindness, so I avoided being obnoxious and focused on being helpful and approachable because that is what stood out.</p>
              </div>
              <div className='text-section' id='section-6'>
                <h1>Did you face any setbacks in the industry?</h1>
                <p className='featured-paragraph-text'>Yes. I now understand that some of my struggles were tied to neurodiversity. I’ve always been sensitive to negativity and could feel overwhelmed in certain situations. Another challenge was proving that I wasn’t just a salon hairdresser and that I could do creative work and could manage a team behind the scenes at Fashion Week, and I had to battle with this. I persevered and assisted Luigi Murenu, an Italian hairstylist early on in my career, which helped me break through those barriers by supporting everything I wanted to do. They were amazing.</p>
                <p className='featured-paragraph-text'>Don’t think you’re silly or something and don’t be afraid to explore, speak your mind, and trust your instincts. There’s good ideas, bad ideas, but actually they’re all good.</p>
              </div>
              <div className='text-section' id='section-7'>
                <h1>What was your very first show?</h1>
                <p className='featured-paragraph-text'>It was for Red or Dead in 1996. They were a revolutionary streetwear brand who had a shop in Covent Garden, and I was obsessed with their clothes. It felt like a full-circle moment that they were my first London Fashion Week show since I loved their clothes and this made me massively believe in manifestation and putting things into the universe . From there, I worked with other amazing designers, including Andrew Groves, who was McQueen’s boyfriend at the time and whose shows really pushed boundaries - for example, one of his shows was called Cociane Nights and down the runway was a line of “coke”. I then started doing Julian McDonald, Matthew Williamson and then both the commercial and high-end fashion. I was really lucky that my trajectory took me to do all of that.</p>
              </div>
              {/* <div className='text-section' id='section-8'>
                <h1>What’s been your biggest “pinch me” moment so far?</h1>
                <p className='featured-paragraph-text'>You know what, it was doing Madonna’s hair for her Me Against the Music video with Britney Spears. I’ve always been a huge Madonna fan, so stepping into that role was surreal.</p>
                <p className='featured-paragraph-text'>For £60 in 2002, I bought some black heels from a charity auction on the Old Icon Madonna fan club as I am the biggest Madonna fan. Luigi Murenu used to do her hair but he was in Paris to do the Victor and Rolf show, so he asked me to go instead to Silver Cup Studios in New York. That was insane. Whilst doing her hair, Like A Prayer was being played on the radio, it felt like a everything had come full circle.</p>
              </div>
              <div className='text-section' id='section-9'>
                <h1>Did you attend beauty school?</h1>
                <p className='featured-paragraph-text'>Yes, I worked in a salon and attended beauty school once a week to get my City & Guilds qualification and the school was called SCAT, Somerset College of Arts. Then it was very in- depth, we even learned how to make shampoo and perm solutions from scratch. When I moved to London at the age of twenty-two, I started at Charles Worthington.</p>
                <p className='featured-paragraph-text'>Don’t think you’re silly or something and don’t be afraid to explore, speak your mind, and trust your instincts. There’s good ideas, bad ideas, but actually they’re all good.</p>
              </div> */}
            </div>
            <div className='image-column'>
              <div id='image-item-1'>
                <Image src={LuigiMurenu} alt='lisa-eldridge-at-work' className='image-column-child' id='image-column-1'/>
                <div className='interactive-image-caption' id='caption-3'>
                  <p>Italian Luigi Murenu moved to Paris in 1983 to begin his career as a hairstylist and has since worked with leading fashion publications including Vogue Italia, Vogue UK and Vogue US
                  collaborating with photographers like Steven Meisel and Marcus Piggott. His looks have coveted red carpets and in 2005, he was appointed as Kérastase’s Creative Artistic Consultant. He is known for his signature blown out hairstyles like in this image (Image credit: Taken by Luigi for Models.com)</p>
                </div>
              </div>
              <div id='image-item-2'>
                <Image src={CocaineNights} alt='cocaine-nights' className='image-column-child' id='image-column-1'/>
                <div className='interactive-image-caption' id='caption-3'>
                  <p>Andrew Goves’ 1998 Cocaine Nights fashion show was extremely controversial but memorable. A dress was constructed entirely from razor blades and the runway itself was made out of a white powdery substance symbolising cocaine. Adam was the hair stylist for this show (Image credit: Pinterest)</p>
                </div>
              </div>
              {/* <div id='image-item-3'>
                <Image src={AdamReed2} alt='lisa-eldridge-at-work' className='image-column-child' id='image-column-1'/>
                <div className='interactive-image-caption' id='caption-3'>
                  <p>Adam Reed in 2023</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default AdamReed
