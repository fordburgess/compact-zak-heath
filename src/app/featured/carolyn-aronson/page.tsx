"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import CarolynAronsonProfile from '../../../assets/images/carolyn-aronson-profile.webp';
import '../styles/article.css';
import { useMediaQuery } from 'usehooks-ts';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CarolynAronson = () => {
  const mobile = useMediaQuery('(max-width: 800px)');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (mobile) {

    }
    else { // desktop transitions
      gsap.to('.title-image', {
        y: -100,
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: '.featured-title-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      gsap.to('.featured-title-text', {
        y: 100,
        opacity: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.featured-title-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    }

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

  return (
    <div className='featured-article-container'>
      <Image src={SpringExpanded} className='featured-article-bg' alt='featured-article-bg'/>
      <div className='featured-article-content'>
        <div className='featured-title-section'>
          <Image src={CarolynAronsonProfile} className='title-image' alt='carolyn-aronson-profile' />
          <div className='featured-title-text'>
            <h1 className='featured-title-quote'>"If you can change your hair, change your life"</h1>
            <div className='title-divider'></div>
            <h2 className='featured-subtitle'>Carolyn Aronson: Brand Founder</h2>
            <p className='featured-blurb'>Carolyn Aronson is a trailblazing entrepreneur, CEO, and sole owner of the international haircare brand It's A 10. With over four decades of experience in the beauty industry and a growing portfolio of different businesses, here’s a COMPACT overview of her journey from hairdresser to multi-business powerhouse.</p>
          </div>
        </div>
        <div className='featured-article-text-section'>
          <p className='featured-article-paragraph'>When I first met Carolyn Aronson, I was in my first year of university. I remember being in awe of her as she walked into the room. However, after hearing about her journey as a businesswoman, building a globally recognised brand, and creating a portfolio that includes real estate, jets, and lifestyle brands, I truly admired her. As a proud Latina woman, she's deeply passionate about giving back to her community and has created educational spaces across America to help the next generation break into beauty. She understands the importance of accessible education and hands- on learning, so I knew I had to speak to her again, for a COMPACT overview of how she built her empire.</p>
          <p className='featured-article-subheader'>Childhood Dreams</p>
          <p className='featured-article-paragraph'>I grew up in a house full of boys. I was the only girl and the youngest. My mum wasn't someone who was particularly into beauty or fashion. Sure, she took care of herself, but it wasn't her passion. I wasn't surrounded by glamour or makeup tutorials, but I have always been drawn to change and transforming myself. I remember being six years old and picking up my dad's black comb - the kind they give in men's shaving kits - and parting my hair to the side. I remember this moment so vividly because it was the first time I had control over how I presented myself. I loved it.</p>
          <p className='featured-article-paragraph'>I became obsessed with hair, and I told everybody that I was going to become a hairdresser. I meant it. At sixteen, I enrolled in a vocational beauty school through my high school, and 42 years later, I still work with hair.</p>
          <p className='featured-article-subheader'>A Chair, a Comb and a Plan</p>
          <p className='featured-article-paragraph'>I wasn't one of those stylists who could touch a head and instinctively create "art". Some stylists have that innate artistry - they're painters with scissors. I had to learn, so I trained hard. I studied constantly and attended additional programmes, like Vidal Sassoon’s Academy. I went to hair shows, studied techniques, and took classes. I wanted to understand every aspect of hair.</p>
          <p className='featured-article-paragraph'>I also loved the business side. As a young stylist, I was what we called an independent contractor. I rented a four-foot square in a salon and that tiny space was my first business. I had to pay my own insurance, manage my own taxes, and plan for retirement. Thankfully, my dad was an incredible influence in that area. He taught me how to manage my money.</p>
          <p className='featured-article-paragraph'>My dad introduced me to tools like Quickbooks and Quicken and explained what it meant to "pay yourself first"—not buying the latest shoes but saving, investing, and building towards long-term goals. I opened a Roth IRA in my twenties, and it was this financial literacy that I carried through with everything that followed.</p>
          <div className='featured-article-transition-container' id='featured-trans-4'>
            <div className='hide-container' id='hide-container-4'>
              <div className='corner-frame' id="corner-frame-2">
                <h1 className='featured-key-quote'>"If you love what you do, the rest will follow."</h1>
              </div>
            </div>
          </div>
          <p className='featured-article-subheader'>First Beauty Obsession?</p>
          <p className='featured-article-paragraph'>Mascara. Big lashes to me were everything.</p>
          <p className='featured-article-subheader'>Building More Than Hair</p>
          <p className='featured-article-paragraph'>My entrepreneurial journey didn't begin with It's A 10. Before that came real estate. I bought my first condo, renovated it, sold it and did it again. I enjoyed using properties as vehicles to create wealth; eventually, I went from condos to million-dollar homes, and now I'm involved with commercial real estate, too. I just love the process of redesigning, rebuilding and transforming, whether that's homes or hair..</p>
          <p className='featured-article-subheader'>Favourite fragrance?</p>
          <p className='featured-article-paragraph'>Creed's Queen of Silk and Louis Vuitton's newer perfumes.</p>
          <p className='featured-article-subheader'>It's A 10: From Divorce to Global Phenomenon</p>
          <p className='featured-article-paragraph'>During a really turbulent chapter of my life, I started It'sA 10. I had just sold my condo, closed my salon, married, and moved to California. My ex-husband was in sales for Big Sexy Hair, and when he lost his job, we had this moment where we looked at each other and said, "should we start our own brand?"</p>
          <div className='featured-article-transition-container' id='featured-trans-1'>
            <div className='hide-container' id='hide-container-1'>
              <h1 className='featured-key-quote'>"We had $80,000 and one product... now we sell over 11 million bottles a year."</h1>
            </div>
          </div>
          <p className='featured-article-paragraph'>So we did. I created the formulas and branding; he handled sales. Our first brand completely failed. We lost everything—and we got divorced. But we still believed in what we were trying to do. So it was quite unconventional, but with our last $80,000 from the divorce settlement—$40k each—we launched It's A 10.</p>
          <p className='featured-article-paragraph'>We could only afford one product at the time: The Miracle Leave, which changed everything for us. That product now sells over 11 million bottles a year. We worked together for 10 years; however, in 2017, I bought him out, and since then, I've been the sole owner and doubled the company.</p>
          <p className='featured-article-subheader'>Where did you go clubbing when you were 21?</p>
          <p className='featured-article-paragraph'>I went out six nights a week. Everything from alternative clubs to gay bars to Detroit ballroom hip-hop.</p>
          <p className='featured-article-subheader'>The Empire Expands</p>
          <p className='featured-article-paragraph'>It's A 10 is sold in over 125 countries, and global growth has opened even more doors for me. I now own 15 companies - including a makeup brand (Be A 10), lifestyle and body care brands, a private jet charter company and even a boat charter company.</p>
          <p className='featured-article-paragraph'>These more "random" ones came from necessity. I travel so much that I needed a more efficient way to fly, so I bought a jet - then turned it into a business too. I don't like sitting still; instead, I create and solve problems with a purpose.</p>
          <p className='featured-article-subheader'>Favourite food?</p>
          <p className='featured-article-paragraph'>"I'm a buffet girl - give me sushi, Indian and Chinese all on one plate".</p>
          <p className='featured-article-subheader'>For The Next Generation</p>
          <p className='featured-article-paragraph'>I love to give back. I've donated to scholarships for beauty students, and I work with organisations like Latina's in Power to help more women of colour reach CEO-level positions across industries.</p>
          <div className='featured-article-transition-container' id='featured-trans-2'>
            <div className='hide-container' id='hide-container-2'>
              <h1 className='featured-key-quote'>"I don't like sitting still. I solve problems and build things with purpose."</h1>
            </div>
          </div>
          <p className='featured-article-paragraph'>I also founded and built the first-ever Beauty Centre at a junior achievement facility in Florida. Over 70,000 students pass through that centre every year. It's fully interactive: barber chairs, shampoo stations, mannequins and actual lesson plans. The goal is to help young people envision their careers in beauty - especially those who might not have considered it otherwise.</p>
          <p className='featured-article-paragraph'>The beauty industry needs new energy and perspective, and there's room for everyone.</p>
          <p className='featured-article-subheader'>Movie of choice?</p>
          <p className='featured-article-paragraph'>"Mrs Doubtfire. Anything with Robin Williams".</p>
          <div className='featured-article-transition-container' id='featured-trans-3'>
            <div className='hide-container' id='hide-container-3'>
              <div className='corner-frame' id="corner-frame-1">
                <h1 className='featured-key-quote'>"Over 70,000 students pass through our beauty centre every year. It's a space for them to imagine their future in beauty."</h1>
              </div>
            </div>
          </div>
          <p className='featured-article-subheader'>Entrepreneurship Isn't Easy, But It's Worth It</p>
          <p className='featured-article-paragraph'>There have been more hurdles than I can count. That's the nature of being an entrepreneur. Things can constantly go wrong, whether it's ingredient delays, vendor issues, lawsuits or something else entirely, but you learn to navigate.</p>
          <p className='featured-article-paragraph'>My advice is don't let fear free you. Don't give up because things get tough. Pivot. Plan. Always have a strong network: your lawyers, accountants, and team matter.</p>
          <p className='featured-article-subheader'>What's Next?</p>
          <p className='featured-article-paragraph'>Right now, I'm launching a new hair collection that has taken three years to develop. Like water, the products are entirely transparent in colour and meet clean beauty standards across the board.</p>
          <p className='featured-article-subheader'>If She Could Talk to Her 21-Year-Old Self</p>
          <p className='featured-article-paragraph'>The most important thing is to figure out what lights you up; however, if I could speak to my 21-year-old self, I'd say block out the noise and trust your instincts. If you love what you do, the rest will follow. It won't be easy, and it won't happen overnight. But you will reach the top, and you should be proud of yourself.</p>
        </div>
      </div>
    </div>
  )
}

export default CarolynAronson
