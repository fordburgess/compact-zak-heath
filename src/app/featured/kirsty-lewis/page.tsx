"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import KirstyLewisProfile from '../../../assets/images/kirsty-lewis-profile.webp';
import KirstyLewis2 from '../../../assets/images/kirsty-lewis-2.webp';
import './styles.css'
import { useMediaQuery } from 'usehooks-ts';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const LisaEldridge = () => {
  const mobile = useMediaQuery('(max-width: 1000px)');
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      trigger: "#second-intro-container",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });

    gsap.fromTo("#caption-2",
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

    gsap.fromTo("#kirsty-lewis-2",
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

    gsap.fromTo(".second-intro-divider",
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

    gsap.to('#hide-container-1', {
      height: '300px',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#featured-trans-1',
        start: 'top center',
        end: `bottom ${mobile ? '90%' : '70%' }`,
        scrub: true
      }
    })

    gsap.to('#hide-container-2', {
      width: `${mobile ? '100%' : '600px'}`,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#featured-trans-2',
        start: 'top center',
        end: `bottom ${mobile ? '90%' : '70%' }`,
        scrub: true
      }
    })

    gsap.to('#hide-container-3', {
      width: mobile ? '100%' : '500px',
      height: '300px',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#featured-trans-3',
        start: 'top center',
        end: `bottom ${mobile ? '90%' : '70%' }`,
        scrub: true
      }
    })

    gsap.to('#hide-container-4', {
      width: mobile ? '100%' : '500px',
      height: '300px',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#featured-trans-4',
        start: 'top center',
        end: `bottom ${mobile ? '90%' : '70%' }`,
        scrub: true
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
          <div className='featured-title-section-2'>
            <Image src={KirstyLewisProfile} alt='pfp' className='featured-profile-image'/>
            <h1>In Conversation With Kirsty Lewis:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>On PR and Relationships In The Workplace</strong></h1>
          </div>
          <div className='image-section' id='second-intro-container'>
            <div className='interactive-image-caption' id='caption-2'>
              <h3 className='kirsty-lewis-second-intro-text'><span className='drop-cap'>Kirsty Lewis</span> is public relations professional known for her impactful work in the beauty industry. As the Senior International PR & Influencer Manager at Huda Beauty and Kayali, she has played a pivotal role in shaping the brand’s global presence. She launched Fenty Beauty and Marc Jacobs Beauty in the UK and in 2018, she co-founded SEEN Group, a creative agency specialising in brand strategy and communications.</h3>
            </div>
            <div className='second-intro-divider'></div>
            <Image src={KirstyLewis2} alt='mary-greenwell' id='kirsty-lewis-2' />
          </div>
          <div className='featured-article-text-section'>
            <p className='featured-article-subheader'>Who or what inspired you to pursue a career in beauty?</p>
            <p className='featured-article-paragraph'>Honestly, no one directly inspired me to get into makeup. It was more about the PR side of the industry. My mum never wore makeup, and I’ve always worn very little myself—a touch of mascara or a red lip, nothing heavy but I appreciate the value of makeup. I studied textile design at Chelsea College of Art, so I have always been creative. I had a few jobs before beauty PR including working at MTV as a temp but through process of elimination of doing jobs I didn’t actually enjoy, I ended up working in beauty PR at Estée Lauder. I think that shatters people’s illusions about getting a dream job but you have to try other jobs to really know what you want. In my experience, quite often, PR used to be, dare I say, if you came from quite a wealthy background, it happened to be something that people went into. And I don't think that there was a lot of respect for PR, certainly in the beauty field, so it was interesting to navigate. At first, I thought I always wanted to get into music because I’ve always been able to talk to people - whether you’re the queen or a cleaner, to me, you’re no different. You’re a person and I love talking to all kinds of people and this mindset of seeing celebrities as people wasn’t something that everybody could do, so when I realised music wasn’t for me, I turned to the beauty industry.</p>
            <p className='featured-article-subheader'>What was your first experience with makeup?</p>
            <p className='featured-article-paragraph'>Blue eyeliner! It was the 80s, so blue eyeliner was everything. I’d pick up affordable brands like Rimmel or No7. The combination of blue and my green eyes felt so glamorous at the time. Would I wear it now? Maybe! At Huda Beauty we even tried a blue mascara at one point as a limited edition - maybe it’s time to bring that back.</p>
            <p className='featured-article-subheader'>When you were 21, what were you doing? Did you have a vision for your career?</p>
            <p className='featured-article-paragraph'>I got into beauty PR in my late 20s, so I was quite late which is why I think sometimes people worry too much about what to do and I would encourage people to not get too stressed about that. There’s a lot of pressure, especially from social media but even feeling pigeon holed by parents and the expectations they place on us as children. Just be open to things which you may or may not do and find the things that you like from trying. At 21, I had just come back from traveling. My best friend and I had planned a three-month trip to Thailand and Hong Kong, but we ended up staying for 15 months. We worked odd jobs across Asia including Japan - waitressing, teaching - anything to fund our travels. By the time I returned, I felt the urge to use my brain again. That’s when I decided to pursue a foundation art degree at London College of Fashion before going to Chelsea. </p>
            <p className='featured-article-subheader'>Where did you go clubbing as a student?</p>
            <p className='featured-article-paragraph'>Oh, I wasn’t much of a student-clubber type. I’ve always been into hip-hop and rare groove. When I was younger, I’d go to places like the WAG Club, Carwash, and Limelight. Later, it was warehouse parties or spots like Subterania, Notting Hill, Camden, Milk and Honey. I even made my own outfits for nights out, often from vintage menswear waistcoats and trousers from charity shops. I’ve always loved suits, and I still wear them now. My friend used to wear floral print dresses and I’d wear ties.</p>
            <p className='featured-article-subheader'>What restaurants do you like in London?</p>
            <p className='featured-article-paragraph'>AI like a lot of the restaurants that are more local, that do really good food, like, back in the day, I would want to go to Nobu - all the big ones, I'll do that for work now, but otherwise, I want to go to local place where the food is amazing. The street food around Peckham, Chiswick - which is near me - is all really nice. Whenever I walk by places like Sexy Fish now, I never get inspired to go in.</p>
            <div className='featured-article-transition-container' id='featured-trans-1'>
              <div className='hide-container' id='hide-container-1'>
                <h1 className='featured-key-quote'>Through process of elimination of doing jobs I didn’t actually enjoy, I ended up working in beauty PR"</h1>
              </div>
            </div>
            <p className='featured-article-subheader'>What restaurants do you like in London?</p>
            <p className='featured-article-paragraph'>I like a lot of the restaurants that are more local, that do really good food, like, back in the day, I would want to go to Nobu - all the big ones, I'll do that for work now, but otherwise, I want to go to local place where the food is amazing. The street food around Peckham, Chiswick - which is near me - is all really nice. Whenever I walk by places like Sexy Fish now, I never get inspired to go in.</p>
            <p className='featured-article-subheader'>What would your 21-year-old self think of where you are now?</p>
            <p className='featured-article-paragraph'>She’d be proud and I think it’s ok to say that as people don’t really say that enough about themselves. At 21, I didn’t have a clear vision, but I always knew I loved connecting with people. I’ve built my career around that. I love introducing people, helping them, and bringing them together. It’s incredibly rewarding. When I worked at Origins my co-worker said “do you ever go home and be really horrible to Ian - who’s my partner - because you've had to be so nice all day”, and I laughed. I thought about it and said, that's a really good question, but no I don’t because that isn’t me.</p>
            <p className='featured-article-subheader'>Have you experienced setbacks or challenges in the industry?</p>
            <p className='featured-article-paragraph'>The facades people may have is just life and some people are realer than others - you just have to find your tribe of people who you can trust. The beauty industry all-in-all is very friendly but if somebody has spoken about me behind my back then it’s not to my knowledge. When I first started in PR, I’d make sure to meet up with the other PRs who were in the beauty industry and I got to be friends with them, so I’ve always surrounded myself with people who I like in the industry. Of course, there are other challenges. Early in my career, I had a boss who was incredibly difficult, especially when I got pregnant with my first child. It was a tough situation, and I ended up leaving the role. You’ll encounter difficult people in any industry, but it’s about finding your tribe and staying true to your values and kill the other people with kindness.</p>
            <p className='featured-article-subheader'>After working for so many different brands at once, what’s it like to look after the whole of the UK and Europe for Huda Beauty and Kayali?</p>
            <p className='featured-article-paragraph'>Simply amazing - I have been with them now for five years and at one point it was only me who was doing all of the brand’s PR. Although they are two different brands with different distributors, audiences and founders, because they are under the same umbrella, there are lots of crossovers. As brands they are like twins because you can’t treat them as the same things, they’re not. You can’t give them the same present to share at Christmas, but maybe that’s a silly analogy. They're both people who care very much about their community, they're very much involved in their brands. They listen to their community. They're also very different in terms of the direction of their brands and how they achieve it, especially since fragrance is completely different to makeup. If one launch is outperforming in a different part of Europe then I want to fix the problem as to how we can make the product perform better in other places too. As an agency we do work with the global team but we localise what we’re doing and we run it ourselves which gives us more creative freedom.</p>
            <div className='featured-article-transition-container' id='featured-trans-2'>
              <div className='hide-container' id='hide-container-2'>
                <h1 className='featured-key-quote'>"Absorb all you can, take advantage of things, be willing to listen"</h1>
              </div>
            </div>
            <p className='featured-article-subheader'>What’s your take on the beauty industry’s shift toward social media and influencers?</p>
            <p className='featured-article-paragraph'>The landscape has changed so much. When I started, traditional media like magazines were the cornerstone of PR as well as celebrity endorsements. Now, content creators are vital as many celebrities have their own cosmetic brands and they are therefore promoting them. Creators connect with audiences in ways traditional media can’t, helping businesses to thrive and grow. Although we invest less in traditional journalism, print media still holds credibility and authority, so I think the future lies in a balance between the two. Credibility and transparency are key, whether you’re a journalist or a creator because people want to educate themselves through honest resources. On the other hand, I don’t think people realise, but magazines are businesses too and kept alive through advertisements. In this consumer economy, educating yourself and looking at multiple resources is the most important thing because magazines will sometimes cater to the brand - like a social media advertisement.</p>
            <p className='featured-article-subheader'>What advice would you give your 21-year-old self?</p>
            <div className='featured-article-transition-container' id='featured-trans-3'>
              <div className='hide-container' id='hide-container-3'>
                <div className='corner-frame' id="corner-frame-1">
                  <h1 className='featured-key-quote'>"Find your tribe of people who you can trust"</h1>
                </div>
              </div>
            </div>
            <p className='featured-article-paragraph'>I’d tell her to stay open to new challenges and not stress too much about having everything figured out. Life will lead you where you’re meant to go, as long as you’re willing to put in the work. Don’t be afraid to ask for help or learn from others - there’s no weakness in seeking guidance, absorb all you can, take advantage of things, be willing to listen - something that I think youngsters don't do.</p>
            <p className='featured-article-subheader'>What has been your biggest pinch-me moment in your career?</p>
            <p className='featured-article-paragraph'>There have been so many, but one standout was working with John Galliano on the launch of his fragrance. Visiting his atelier in Paris was surreal. Only two PRs had ever been invited inside before. It was an incredible experience.</p>
            <p className='featured-article-subheader'>What’s your favourite fragrance?</p>
            <p className='featured-article-paragraph'>That’s tough! I love layering fragrances, especially Kayali’s Elixir and Citrus—though they’re sadly discontinued. Another favourite is Tobacco Oud by Kayali. Fragrance is such a personal thing, and I love experimenting to create my own scent - especially as I’m lucky enough to have access to so many fragrances.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LisaEldridge;
