"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AlessandraSteinherrProfile from '../../../assets/images/alessandra-steinherr.webp';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import AlessandraPrimark from '../../../assets/images/alessandra-primark.png';
import { useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import GlamourMag from '../../../assets/images/glamour-mag.webp';
import Lipstick from '@/components/lipstick';
import './style.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from 'usehooks-ts';

const AlessandraSteinherr = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const mobile = useMediaQuery('(max-width: 1000px)');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const trigger = ScrollTrigger.create({
    //   trigger: '.alessandra-intro',
    //   start: 'top top',
    //   end: 'bottom bottom',
    //   scrub: true,
    //   onUpdate: (self) => {
    //     setScrollProgress(self.progress); // value from 0 to 1
    //   }
    // });

    if (!mobile) {
      ScrollTrigger.create({
        trigger: ".alessandra-intro",
        start: "top top",
        end: "+=300%",
        pin: ".alessandra-intro",
        pinSpacing: false,
        scrub: true,
      });

      gsap.to('.lipstick-container', {
        y: '-10%',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.alessandra-intro',
          start: 'top 20%',
          end: 'top top',
          scrub: true,
        }
      })

      ScrollTrigger.create({
        trigger: ".lipstick-container",
        start: "top 10%",
        end: "+=7000",
        pin: ".lipstick-container",
        pinSpacing: false,
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: ".second-image-container",
        start: "top top",
        end: "+=4400",
        pin: ".second-image-container",
        pinSpacing: false,
        scrub: true,
      });

      gsap.to('.alessandra-intro-text', {
        opacity: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.alex-scroll-test',
          start: 'center 80%',
          end: 'center top',
          scrub: true
        }
      })

      gsap.to('.lipstick-container', {
        x: -900,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.alex-scroll-test',
          start: 'center 85%',
          end: 'center top',
          scrub: true
        }
      })

      gsap.to('.canvas-pointer-line', {
        height: '50px',
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: '#section-1',
          start: 'top 150%',
          end: 'top bottom',
          scrub: true
        }
      })

      gsap.to('.model-caption', {
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: '#section-1',
          start: 'top 150%',
          end: 'top bottom',
          scrub: true
        }
      })


      const textSections = document.querySelectorAll('.text-section')!;
      textSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `#${section.id}`,
          start: "top top",
          end: "+=100%",
          pin: `#${section.id}`,
          pinSpacing: false,
          scrub: true,
        });
      })

      ScrollTrigger.create({
        trigger: ".glamour-mag-section",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      });

      gsap.fromTo(".glamour-mag-image",
        { x: "-100%", opacity: 0 },
        {
          x: "5%",
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".glamour-mag-section",
            start: "top top",
            end: "+=100%",
            scrub: true,
          }
        }
      );

      gsap.fromTo(".glamour-caption",
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".glamour-mag-section",
            start: "top top",
            end: "+=100%",
            scrub: true,
          }
        }
      );

      gsap.fromTo(".glamour-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".glamour-mag-section",
            start: "top top+=10%",
            end: "+=80%",
            scrub: true,
          }
        }
      );
    }
  }, []);

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
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10, color: '#fff', overflowX: 'hidden', boxSizing: 'border-box' }}>
        <div style={{ zIndex: 10 }}>
          <div className='featured-title-section'>
            <Image src={AlessandraSteinherrProfile} alt='pfp' className='featured-profile-image'/>
            <div id='title-box'>
              <h1 className='strong-title'>In Conversation with Alessandra Steinherr:</h1>
              <h1 className='title-subline'>From Print Journalism to Digital Content</h1>
            </div>
          </div>
        </div>
        <div className='alessandra-intro'>
          <div className='pin-container'>
            <div className='alessandra-intro-text'>
              <h2>Alessandra reflects on her journey as <span style={{ fontStyle: 'italic' }}>Glamour</span>'s youngest beauty director at 26, to becoming an influencer in this constantly changing beauty landscape.</h2>
              <p>Alessandra Steinherr is a beauty journalist with over two decades of experience serving as Beauty Director at Cosmopolitan for six years and at <span style={{ fontStyle: 'italic' }}>Glamour</span> magazine for eleven years before concentrating more on socials and becoming an influencer. What sets her apart, in this saturated digital landscape, is that she combines her online career, with her role as the Beauty Director at <span style={{ fontStyle: 'italic' }}>The Glossary</span> magazine whilst having a consultancy business too.</p>
            </div>
          </div>
        </div>
        <div className='lipstick-container'>
          <Canvas className='lipstick-canvas' style={{ width: '500px', height: '80vh' }}>
            <Environment preset='studio' />
              <Lipstick scrollProgress={scrollProgress} />
          </Canvas>
          <div className='canvas-pointer-line'></div>
          <p className='model-caption'>The MACxAlessandra lipstick from MAC Cosmetic’s collaboration with 10 leading influencers around the world in 2017 (Image credit: <span style={{ fontStyle: 'italic' }}>Pop Sugar</span>)</p>
        </div>
        <div className='alex-scroll-test'></div>
        <div className='text-section' id='section-1'>
          <div>
            <h1 className='text-section-title'>What was your first interaction with magazines and beauty?</h1>
            <p className='featured-paragraph-text'>I was reading magazines from such a young age. My grandmother was a dressmaker and had <span style={{ fontStyle: 'italic' }}>Italian Vogue</span>, <span style={{ fontStyle: 'italic' }}>Periscope</span>, and other fashion magazines. I wasn’t a skinny girl, so I didn’t connect with fashion models because I couldn’t fit into those bikinis, but I loved the beauty sections—the faces, skin, and hair. <span style={{ fontStyle: 'italic' }}>Allure</span> was American; it was my bible, but it wasn’t easily available where I lived in Austria, so I found an English-speaking bookshop, which always had one, and I’d run to buy it. I was obsessed. It’s not like today, where you can go on your phone and find new information. It was always my dream to become a beauty editor.</p>
          </div>
        </div>
        <div className='text-section' id='section-2'>
          <div>
            <h1 className='text-section-title'>Did you study journalism or something completely different?</h1>
            <p className='featured-paragraph-text'>I studied business and economics in America and Belgium, but my heart was always set on beauty journalism. My dad insisted I get a degree first because then I could do whatever I wanted, and to be honest, I don’t think you need to study journalism to be a beauty journalist because in any course you study, you learn how to write and how to compose and structure sentences. But to be a beauty journalist, yes, you need to have an idea about the business of beauty. Looking back, my studies helped me understand the industry from a commercial perspective.</p>
          </div>
        </div>
        <div className='text-section' id='section-3'>
          <div>
            <h1 className='text-section-title'>What was your first job?</h1>
            <p className='featured-paragraph-text'>My first paid 'official' job in journalism was as a beauty assistant at a magazine called <span style={{ fontStyle: 'italic' }}>Shine</span>, which doesn’t exist anymore. My salary was £13,000 a year - not much, but I was thrilled to be there, and I think I must have been 23 or 24. Before that, I had work experience, but it was unpaid back then. Nowadays, that’s not allowed, thank God; now you have to be paid!</p>
          </div>
        </div>
        <div className='text-section' id='section-4'>
          <div>
            <h1 className='text-section-title'>How did you navigate unpaid work in the industry?</h1>
            <p className='featured-paragraph-text'>I had a completely unpaid internship at <span style={{ fontStyle: 'italic' }}>Marie Claire</span>, so I basically paid to work. It was worth it, so I don’t regret it, and I was grateful even to be there. Since I’m not from London, I couldn’t live at home, so, before moving, I worked at a law office in Austria, doing translations and assistant work to save money for a few months until I had enough to afford the rent for a room in Lancaster Gate.</p>
          </div>
        </div>
        <div className='text-section' id='section-5'>
          <div>
            <h1 className='text-section-title'>What were your early career struggles?</h1>
            <p className='featured-paragraph-text'>Firstly, I had no contacts in the industry, so when I got a job at <span style={{ fontStyle: 'italic' }}>Marie Claire</span>, I wanted to be in the beauty department, but due to a mix-up, I was placed in reception. It should’ve been a paid role, but I said, ‘I’m going to make this work’. I made myself useful and volunteered for everything—photocopies, organising beauty cupboards and whatever was needed. It was a Devil Wears Prada kind of environment, very hierarchical. Interns didn’t talk to editors directly; interns talked to assistants.</p>
          </div>
        </div>
        <div className='second-image-container'>
          <Image src={AlessandraPrimark} alt='alessandra-primark' />
          <p>Alessandra Steinherr x Primark. The collection focused on affordable but effective products (Image credit: Pop Sugar)</p>
        </div>
        <div className='buffer-div'></div>
        <div className='text-section' id='section-6'>
          <div>
            <h1 className='text-section-title'>How did you manifest your entry into journalism?</h1>
            <p className='featured-paragraph-text'>My dream has always been to be a beauty editor. Every day, on my way to work, sitting on the bus from Lancaster Gate, I looked out at the Thames and told myself, <span style={{ fontStyle: 'italic' }}>'One day, I'll be the beauty director of the biggest magazine in the UK'</span>. I didn’t know which one; I just knew it would happen. And it did; when I joined <span style={{ fontStyle: 'italic' }}>Glamour</span>, it was the best-selling magazine at the time in terms of sales and most popular for beauty at the time.</p>
          </div>
        </div>
        <div className='text-section' id='section-7'>
          <div>
            <h1 className='text-section-title'>You became the youngest beauty director at <span style={{ fontStyle: 'italic' }}>Glamour</span> at 26. What was that like?</h1>
            <p className='featured-paragraph-text'>It was intense. I wanted the role, and I worked hard for it, but I wasn’t fully prepared for the pressure. It was isolating because I didn’t want to show any signs of struggle. Other directors questioned why I was there at such a young age. Looking back, I could have benefitted from one more time learning the ropes, but I don’t regret it - it shaped me. I worked nonstop, even on Christmas, just to prove myself.</p>
          </div>
        </div>
        <div className='text-section' id='section-8'>
          <div>
            <h1 className='text-section-title'>How did you find your USP as a beauty director?</h1>
            <p className='featured-paragraph-text'>Unlike most beauty writers, I was also involved in styling and creative direction, and we did many beauty shoots because I loved directing beauty and the creative process. I worked with makeup artists like Lisa Eldridge MBE and Charlotte Tilbury MBE, creating concepts, selecting photographers, and directing shoots. My favourite part of these shoots was watching everyone come together, and seeing how the model was transformed with their makeup, hairstyling and manicures. <span style={{ fontStyle: 'italic' }}>Glamour</span> was like <span style={{ fontStyle: 'italic' }}>Vogue's</span> little sister, so we got the up-and-coming models before they exploded into the scene, for example: Bella Hadid. Gigi was already famous, but Bella was just beginning her journey; she was so lovely and gorgeous, and it was exciting to be part of her first shoots. Another memorable shoot was with Rosie Huntington-Whiteley, who I shot with a lot because she’s obsessed with beauty. She wasn’t just the model, but she’d sit there and go through the products. She was such a strong person to work with! These shoots were expensive, and we’d fly to New York or photograph on location; however, now because of budgets, these don’t happen as much.</p>
          </div>
        </div>
        <div className='buffer-div-2'></div>
        <div className='glamour-mag-section'>
          <Image src={GlamourMag} className='glamour-mag-image' alt='glamour-mag-cover' />
          <div className='glamour-line'></div>
          <div className='glamour-caption'>
            <p>Rosie Huntington-Whiteley on the cover of <span style={{ fontStyle: 'italic' }}>Glamour</span> UK's June 2017 issue. She was styled for the shoot by Alessandra Steinherr.</p>
          </div>
        </div>
        <div className='buffer-div-3'></div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>You've been on some incredible brand trips. What's the most memorable one?</h1>
            <p className='featured-paragraph-text'>The trips were amazing. Back then, the difference was that you were there to just learn about the products. Now there’s a focus on creating beautiful content and whilst there are still educational moments, there aren’t as many. Over lunch, we’d learn the ins and outs of the product formulations; but it also felt like a holiday because we were enjoying our free time and not having to make content. One year, we were flown to Florence to visit the Basilica Santa Maria Del Fiore at night, but nobody was there. They opened this incredible cathedral just for us, and it was breathtaking - a moment you couldn’t pay for.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>When did print media start to change?</h1>
            <p className='featured-paragraph-text'>When Instagram emerged, no brands were yet on it. Around 2015, I started posting, inspired by Eva Chen from <span style={{ fontStyle: 'italic' }}>Teen Vogue</span> in America, who was already active on social. I loved the direct connection with readers, so I believe I was the first beauty director in the UK to start using it. As <span style={{ fontStyle: 'italic' }}>Glamour</span> was a monthly magazine, I didn't have any direct conversations with readers, so I started this thing called 'Ask Alex' for beauty questions, which I still have, and the 'Sunday Facial Series'. Every Sunday, I’d put together a facial and talk through the products; however, for the rest of the week, there was no strategy, and this was back when all you could post on Instagram were photos and captions. I think my first post was a bouquet of roses on my desk with a weird blue-tinted filter over the top.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>What was it like leaving <span style={{ fontStyle: 'italic' }}>Glamour</span> to focus on something which was still very new?</h1>
            <p className='featured-paragraph-text'>By 2017, I understood that things were shifting. Blogging and Instagram were growing, and influencers were being invited to events. I left <span style={{ fontStyle: 'italic' }}>Glamour</span> in 2018, and people thought I was mad. But I wanted to explore social media entirely, without being tied to a magazine. I still remember taking pictures at events and colleagues looking at me, like, why are you doing this? You can mock me as much as you want, but I go with my instincts, and I told other writers, ‘guys, get onto it’. One of the best skills to have in life is to know when to pivot and not to overstay your welcome. I was at <span style={{ fontStyle: 'italic' }}>Glamour</span> for eleven years and previously at <span style={{ fontStyle: 'italic' }}>Cosmopolitan</span> for five, so I had been a director for a long time, but I felt an energy to hop onto Instagram. It was exciting, and I found it much more modern because I could be myself, and I wasn’t representing a magazine. <span style={{ fontStyle: 'italic' }}>Glamour</span> was the best time of my life, and I was so grateful to work with the people on my team, but being a director now isn’t what it once was. My one regret with socials is that I didn’t jump onto TikTok quickly enough, and I said too many times will it take off? In 2020, TikTok was still about dancing, and there wasn’t much beauty content on the app, so I genuinely didn’t see it. I’m not ashamed to admit that I couldn’t see myself on the app either, but now that I do it, I enjoy it. If I had gotten on it sooner, like I did on Instagram, that would have been beneficial.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>From being <span style={{ fontStyle: 'italic' }}>Glamour's</span> beauty director to having successful makeup collaborations, what was that like?</h1>
            <p className='featured-paragraph-text'>The same year I left Glamour, I became the first beauty editor to collaborate with MAC in 2017. We created a lipstick called Alessandra, a pale colour similar to my lips. I also launched a skincare line with Primark in 2018, which people discovered me through. It was a collection that I loved. It was just such an exciting and dynamic time.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>The Future of Beauty Journalism</h1>
            <p className='featured-paragraph-text'>You and I are from different generations, but I like talking to you because I feel, in a way, that you’re an old soul because you understand magazines. You know that magazines were the medium of the time before TikTok, but you also realise that an even newer medium will arise, and it’s about being a step ahead. Magazines were the source of information - Glamour had 800,000 readers per month - however, people wanted to learn things quickly, so social media overtook print. However, I will always love magazines for one important reason, and that is fact-checking. You’d have a sub-editor who would fact- check everything you write. So, although SubStack (a social media platform made for writers) has quality writers, it isn’t fact-checked - I can write whatever I want. Obviously, I’ll write to the best of my ability, but the main difference between magazines and socials is that print was always backed by facts and expertise. I don’t think print will ever recover unless social media disappears, but I also hope magazines won’t disappear.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>What advice would you give to aspiring beauty editors and directors?</h1>
            <p className='featured-paragraph-text'>The industry has changed. Journalists now have to write much faster and for multiple platforms. My advice: always research thoroughly and do real interviews instead of just emailing for responses; you get so much more in-depth information that way too. Also, don’t enter the field for the perks. If you’re only in it for free products or glamorous events, you’ll never be satisfied. Passion is what will sustain you. I still get excited about beauty today, just like when I was young.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>Do you think ageism exists within the beauty industry?</h1>
            <p className='featured-paragraph-text'>I joke with you about being old enough to be your parent, but I genuinely love my age. I never feel out of place in this industry. I sometimes wonder, ‘is this the right thing for me to do?’ But not in a way that makes me feel outdated. Ageism within the industry is getting better, but brands need to make more of an effort to represent all. Diversity in advertising should include different skin tones, genders, and ages, and it’s something I want to advocate for.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>Fashion is such a big part of your life. Do you have any shopping regrets?</h1>
            <p className='featured-paragraph-text'>Oh my God, definitely! My biggest regret has to be expensive high heels. I can’t walk in them, yet I keep buying them, and sometimes I still buy dresses I’ll never wear.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>The Future of Beauty Journalism</h1>
            <p className='featured-paragraph-text'>You and I are from different generations, but I like talking to you because I feel, in a way, that you’re an old soul because you understand magazines. You know that magazines were the medium of the time before TikTok, but you also realise that an even newer medium will arise, and it’s about being a step ahead. Magazines were the source of information - <span style={{ fontStyle: 'italic' }}>Glamour</span> had 800,000 readers per month - however, people wanted to learn things quickly, so social media overtook print. However, I will always love magazines for one important reason, and that is fact-checking. You’d have a sub-editor who would fact- check everything you write. So, although SubStack (a social media platform made for writers) has quality writers, it isn’t fact-checked - I can write whatever I want. Obviously, I’ll write to the best of my ability, but the main difference between magazines and socials is that print was always backed by facts and expertise. I don’t think print will ever recover unless social media disappears, but I also hope magazines won’t disappear.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>What fragrance takes you back to being 21?</h1>
            <p className='featured-paragraph-text'>Oh, definitely Sun by Jill Sander. I still swear by it.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>Where did you go clubbing when you were 21, and how did you make friends?</h1>
            <p className='featured-paragraph-text'>For me, the Met Bar was the place to be, but it wasn’t clubbing. I also used to go to this place called Momos, which was off Regent Street. Tramp was ok too.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>What is your favourite London restaurant?</h1>
            <p className='featured-paragraph-text'>My favourite is Scotts. They have this honeycomb and chocolate dessert I’m obsessed with. It comes in a cold container, and when you pour the hot chocolate over it, it melts just right and sort of settles. It’s amazing.</p>
          </div>
        </div>
        <div className='later-text'>
          <div>
            <h1 className='text-section-title'>What’s next for you?</h1>
            <p className='featured-paragraph-text'>Exciting things are coming in 2025, but I mainly want to be an advocate for mature beauty. Just like you are pushing for more male representation within the industry, I want to ensure that older individuals - both men and women - are included in beauty campaigns. Representation matters at every age.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlessandraSteinherr
