"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import MonaKattanProfile from '../../../assets/images/mona-kattan.webp';
import MonaKattan2 from '../../../assets/images/mona-kattan-2.webp';
import MonaKattan3 from '../../../assets/images/mona-kattan-3.webp';
import MonaKattan4 from '../../../assets/images/mona-kattan-4.webp';
import './styles.css'
import { useMediaQuery } from 'usehooks-ts';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const MonaKattan = () => {
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

    const line2Props: any = {
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#first-image-trans',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      }
    };
    const scaleAxis = mobile ? 'scaleY' : 'scaleX';
    const opacity = 1;
    line2Props[scaleAxis] = mobile ? 8 : 10;
    line2Props[opacity];
    gsap.to('.fctc-line-2', line2Props);

    const caption2props: any = {
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#first-image-trans',
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: true,
      }
    }
    const transitionDirection = mobile ? 'y' : 'x';
    caption2props[transitionDirection] = mobile ? -50 : -1;
    gsap.to('#first-trans-caption', caption2props);

    const line4Props: any = {
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#second-image-trans',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      }
    };
    const scaleAxisLine4 = mobile ? 'scaleY' : 'scaleX';
    line4Props[scaleAxisLine4] = 7
    gsap.to('.fctc-line-4', line4Props);


    const caption4props: any = {
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '#second-image-trans',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      }
    }
    const transitionDirectionCaption4 = mobile ? 'y' : 'x';
    caption4props[transitionDirectionCaption4] = mobile ? 50 : '10px';
    gsap.to('#second-trans-caption', caption4props);
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
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10, color: '#fff', paddingBottom: '100px' }}>
        <div style={{ zIndex: 10 }}>
          <div className='featured-title-section-2'>
            <Image src={MonaKattanProfile} alt='pfp' className='featured-profile-image'/>
            <h1><span className='strong-title'>In Conversation With Mona Kattan:</span><br/> <span className='title-subline'>Being a fragrance CEO</span></h1>
          </div>
          {/* <div className='image-section' id='second-intro-container'>
            <div className='interactive-image-caption' id='caption-2'>
              <h3 className='kirsty-lewis-second-intro-text'><span className='drop-cap'>Mona Kattan</span> is a beauty entrepreneur, fragrance connoisseur and co-founder of Huda Beauty. With a background in finance and PR, Mona created Kayali to share her love of storytelling through scent and she continues to shape the fragrance space with innovative notes and regular launches.</h3>
            </div>
            <div className='second-intro-divider'></div>
            <Image src={MonaKattan2} alt='mary-greenwell' id='kirsty-lewis-2' />
          </div> */}
          <div className='featured-article-text-section'>
            <p className='featured-article-subheader'>Who or what inspired you to fall in love with fragrance?</p>
            <p className='featured-article-paragraph'>I've been obsessed with fragrances my whole life. But when I moved to the UAE from America, something shifted. The fragrance culture here is on another level; there's so much richness, intention, and respect for scent. People here use perfume to express emotion, status, and identity - it's so layered. That was really what deepened my love for fragrance. It became more than just a beauty product. It became something sacred.</p>
            <p className='featured-article-subheader'>Do you remember your first experience with beauty?</p>
            <p className='featured-article-paragraph'>Oh, 100%! I was in beauty pageants from the age of four until I was about seven. Full glam was just normal for me as a kid. It felt like playing dress-up, which is something I never really grew out of. I've always loved expressing myself through beauty and fashion.</p>
            <p className='featured-article-subheader'>What were you doing when you were 21?</p>
            <p className='featured-article-paragraph'>I was studying finance at the American University of Sharjah in UAE. But outside of school, I was modelling and promoting brands at malls and events - any opportunity I could get my hands on. I've always loved working. Even before that, back in the US, I worked non-stop.</p>
            <p className='featured-article-subheader'>What was your very first job?</p>
            <p className='featured-article-paragraph'>My first full-time job was at a family-owned Greek restaurant when I was 14. I loved it - it was scrappy, real, and hands-on. I did everything from answering phones to running orders, and by the end of my three years there, I could do every job in the restaurant. I also worked in a bridal store, a clothing shop, a Texas Roadhouse, an ice cream shop - you name it. I just really loved to work, and I still do.</p>
            <p className='featured-article-subheader'>Did you always know you wanted to go into fragrance?</p>
            <p className='featured-article-paragraph'>Not at first. I didn't have that crystal-clear vision when I was younger. I actually wanted to be in business - entrepreneurship excited me. But by 25, I knew I wanted to launch my own fragrance brand. I started experimenting with making my samples at 26 and even met with a few investors, but nothing materialised. Kayali didn't launch until I was 33. So it took time - but every delay was a blessing. Trust the process.</p>
            <div className='featured-article-transition-container' id='featured-trans-1'>
              <div className='hide-container' id='hide-container-1'>
                <h1 className='featured-key-quote'>"Full glam was just normal for me as a kid"</h1>
              </div>
            </div>
            <p className='featured-article-subheader'>What happened between those years? What were your career steps?</p>
            <p className='featured-article-paragraph'>After college, I interned in Accounts Payable at Johnson & Johnson, then moved into corporate and investment banking with the Development Bank of Singapore. I lasted a year there before resigning to start my entrepreneurial journey. I went into PR without experience, and just started hustling - begging people to let me work with them, sometimes unpaid, sometimes just for product. I also co-founded a PR events business with a friend. We'd host brand launches and promote companies to all our friends, which was really interesting. Around that time, I opened my own beauty salon. It was my first big business venture and involved trade licenses, CapEx, and hiring teams - which I ran for seven years. Then came Huda Beauty with my sisters, and finally Kayali. That’s now my focus, but I also invest in and incubate brands. I dabbled in reality TV when I went onto the Netflix show Dubai Bling, too.</p>
            <p className='featured-article-subheader'>What were your nights out like when you were 21?</p>
            <p className='featured-article-paragraph'>Honestly? I didn't go out that much. I was obsessed with the gym. I spent most of my free time working out or hanging out with my best friend. But when I did go out, I wore cowboy-inspired looks and super funky outfits. I grew up in Tennessee, so cowboy style has always had a place in my heart. I thought I looked amazing back then, but looking back at those photos... let's just say I was very extra - some say it's the Arab blood. There were no filters back then!</p>
            <p className='featured-article-subheader'>How did PR lead to fragrance?</p>
            <p className='featured-article-paragraph'>Working in PR back then was very different from now. Social media was just taking off - Instagram was tiny, and influence mainly came from blogs. I had my own blog, and I reviewed perfumes. The rise of beauty blogging happened around 2013, and I was one of the few talking about fragrance at the time. It was mostly about fashion and lifestyle. That helped me build a small but engaged audience, and brands started sending me perfume. I have worn so many hats - PR, blogger, entrepreneur - they all definitely helped shape the path to fragrance and Kayali.</p>
            <div className='featured-transition-container' id='first-image-trans'>
              <div className='image-with-caption' style={{ zIndex: -1, }}>
                <Image src={MonaKattan3} alt='mona-kattan-3'/>
              </div>
              <div className='fctc-line-2'></div>
              <p className='image-caption' id='first-trans-caption'>Inside Mona Kattan’s fragrance library<br/>which has nearly 4000 individual fragrances.<br/>Her goal is to have the largest amount of<br/>fragrances in the world.</p>
            </div>
            <p className='featured-article-subheader'>What's been your biggest "pinch me" moment in your career?</p>
            <p className='featured-article-paragraph'>It might sound random, but it was when we were finally able to offer good healthcare to our employees. That moment hit me hard. Like - wow - we're creating real jobs that support real lives. That, to me, is more rewarding than any paycheque or accolade. Knowing people want to work for us, not because we begged them but because we built something meaningful... that's everything.</p>
            <p className='featured-article-subheader'>Is there a dream fragrance you haven't created yet?</p>
            <p className='featured-article-paragraph'>Yes. I want to create the scent of peace. The world has been through so much in recent years. If I could bottle a fragrance that made people feel calm, hopeful, and inspired to spread peace - that would be a dream come true. I'm still working on how to do it, but that's what my soul craves to share.</p>
            <div className='featured-article-transition-container' id='featured-trans-2'>
              <div className='hide-container' id='hide-container-2'>
                <h1 className='featured-key-quote'>"I was one of the few talking about fragrance"</h1>
              </div>
            </div>
            <p className='featured-article-subheader'>If you could talk to your 21-year-old self, what would you say?</p>
            <p className='featured-article-paragraph'>I'd tell her to start therapy earlier. Learn to communicate your needs, create boundaries, and get to know yourself deeply. I didn't respect my energy. I gave so much to people who didn't give anything back. Now, I only give to givers. You have to protect your peace and love yourself just as hard as you love others.</p>
            <div className='featured-article-transition-container' id='featured-trans-3'>
              <div className='hide-container' id='hide-container-3'>
                <div className='corner-frame' id="corner-frame-1">
                  <h1 className='featured-key-quote'>"Every experience matters, and doing something creates an energetic movement"</h1>
                </div>
              </div>
            </div>
            <p className='featured-article-subheader'>What would you include if you were to make a fragrance inspired by me?</p>
            <p className='featured-article-paragraph'>Oh my God, you are literally sunshine in human form! I'd definitely start with solar notes for that radiant, happy energy. I'd add vanilla because I'm a Kayali girl through and through. Then I'd layer in your favourite fruits, maybe a soft spice, and we'd have to figure it out together for the dry down. But it would be joyful, bright and warm.</p>
            <div className='dream-room-transition-container' id='second-image-trans'>
              <p className='image-caption' id="second-trans-caption">Mona Kattan and I in 2023 inside<br/>of her fragrance wardrobe in Dubai!</p>
              <div className='fctc-line-4'></div>
              <Image src={MonaKattan4} id='zak-and-lisa' alt='zak-and-lisa'/>
            </div>
            <p className='featured-article-subheader'>And what advice would you give to a 21-year-old who wants to get into fragrance today?</p>
            <p className='featured-article-paragraph'>I'd tell them ‘al haraka baraka’—with movement comes blessing. If you're unsure where to start, move. Intern, shadow someone, start making your own blends by getting a fragrance-making kit and take courses - anything. Get your hands dirty. Every experience matters, and doing something creates an energetic movement. Don't wait for perfection. Just keep trying, and everything will eventually fall into place. Looking back on my entire journey, I experimented a lot; however, everything links up. For example, if I didn't have my salon, I wouldn't have had the door in with Sephora because, at the salon, I learnt how to create a business and how to sell. Always make vision boards for what you want, but most importantly, keep creating.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MonaKattan;
