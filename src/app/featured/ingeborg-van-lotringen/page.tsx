"use client"
import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import './styles.css';
import '../styles/article.css';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import IngeborgProfile from '../../../assets/images/ingeborg-profile.png';
import { useMediaQuery } from 'usehooks-ts';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const IngeborgVanLotringen = () => {
  const mobile = useMediaQuery('(max-width: 1000px)')

  useEffect(() => {
    gsap.to('.featured-article-bg', {
      y: -800,
      ease: 'none',
      scrollTrigger: {
        trigger: '.featured-article-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.title-image', {
      opacity: 1,
      ease: "power1.inOut"
    })

    gsap.to('.featured-title-quote', {
      opacity: 1,
      ease: "power1.inOut",
      delay: 0.15
    })

    gsap.to('.featured-subtitle', {
      opacity: 1,
      ease: "power1.inOut",
      delay: 0.25
    })

    gsap.to('.featured-blurb', {
      opacity: 1,
      ease: "power1.inOut",
      delay: 0.5
    })

    gsap.to('.featured-title-section', {
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
      <Image priority src={SpringExpanded} className='featured-article-bg' alt='featured-article-bg'/>
      <div className='featured-article-content'>
        <Link href='/featured/interviews' className='article-back-button'><p>Back</p></Link>
        <div className='featured-title-section-2'>
          <Image src={IngeborgProfile} alt='pfp' className='featured-profile-image'/>
          <h1>In Conversation with Ingeborg van Lotringen:<br/> <strong style={{ fontWeight: '300', fontSize: '2rem' }}>on Beauty’s Jet-Setting Years and Writing for Print in Today’s Digital World</strong></h1>
        </div>
        <div className='featured-article-text-section'>
          <p className='featured-article-paragraph'>Millie's story starts not with a business plan but with skipping school. She left school at 15, moved countries multiple times, and partied a lot, but has ended up leading the British Beauty Council. She holds both an MBE and OBE and is helping to shape the future of content creation through the Creator Collective, an initiative that merges beauty and education. In this COMPACT overview, Millie shares what launching a brand feels like and the advice she wishes she'd taken herself.</p>
          <p className='featured-article-subheader'>The Girl Who Said No To School But Yes To Parties</p>
          <p className='featured-article-paragraph'>"I was good at maths," Millie says when asked what she wanted to be as a child. "My mum used to give me the Yellow Pages and tell me to add the phone numbers up - I was great at it! I thought I'd be an accountant. Sad, right? But I liked numbers."</p>
          <p className='featured-article-paragraph'>She left school at 15 - not due to hardship, but because she was, in her own words, "manipulative." "I just didn't want to go. I'd been working in a hair salon since I was 13. I wasn't good at the hair part, but I loved the people, the energy, the clients, and most of all, the money. It was independence. Why would I sit in a classroom when I could be earning?"</p>
          <p className='featured-article-paragraph'>"People always assume I'm just creative. But I've always been analytical. That combination has been the foundation of my entire career."</p>
          <p className='featured-article-paragraph'>Millie was born in London but moved to Los Angeles with her parents when she was 11. "I never liked it," she admits. "You can't fault the weather, but the people felt backwards and not edgy at all. I didn't fit in."</p>
          <p className='featured-article-paragraph'>After leaving school at 15, she returned to London to live with her grandparents. She eventually fell in love with New York after visiting when she was 18 and moved there permanently at age 21.</p>
          <p className='featured-article-paragraph'>"New York felt like the best of both worlds. It was gritty like London but had the opportunity of America. I was a total club girl - I'd be out all night, then go straight to work in the morning. I absolutely loved it."</p>
          <div className='featured-article-transition-container' id='featured-trans-1'>
            <div className='hide-container' id='hide-container-1'>
              <h1 className='featured-key-quote'>"I was a total club girl — I'd be out all night, then go straight to work in the morning. I absolutely loved it."</h1>
            </div>
          </div>
          <p className='featured-article-paragraph'>"I used to go to Paradise Garage, a gay club where you had to prove you were gay to get in. My friend was bisexual, and we worked together at Bumble & Bumble. So we'd hold hands and pretend we were dating to get through the door! I'm straight, but back then, things were just more fluid. That word didn't even exist yet. You didn't need a label. If you were weird, punk, queer - whatever, you gravitated to people who also didn't fit the norm."</p>
          <p className='featured-article-paragraph'>She adds that people found each other through "work and clubs." There was no social media. You showed up, and that was enough.</p>
          <p className='featured-article-paragraph'>She laughs when asked what she wore back in her clubbing days. "The shortest denim shorts you've ever seen, Converse, a white T-shirt. I wasn't into fashion. I was into dancing and being comfortable!"</p>
          <p className='featured-article-subheader'>Building The Beauty Foundations</p>
          <p className='featured-article-paragraph'>Millie's first introduction to beauty was at her grandmother's dressing table. "She had a Corgi that drank tea out of a saucer. She'd put moisturiser on her face, then let the dog lick her fingers. The dog basically lived off Nivea!"</p>
          <p className='featured-article-paragraph'>She describes her grandmother applying mascara with a flat palette that required saliva to activate. "She'd spit on it and apply. That whole moment, the diamonds, the glamour, the spitting, was iconic. It made a huge impression on me."</p>
          <p className='featured-article-paragraph'>Despite being close, her family wasn't overly interested in her later success in the beauty industry. "My grandmother didn't really understand why I worked so much. She thought I should've stayed home and married. My mum never wore makeup. My dad, though, was a hairdresser - always very groomed. He was more into it than anyone."</p>
          <p className='featured-article-paragraph'>Although her roots were in salons and makeup, Millie never crossed into fashion. "It never appealed to me. I like the smells, the tactility, the packaging of beauty. Fashion didn't have that same intimacy. Beauty is housed in beautiful things; you open, close, and hold it. I love that experience."</p>
          <div className='featured-article-transition-container' id='featured-trans-2'>
            <div className='hide-container' id='hide-container-2'>
              <h1 className='featured-key-quote'>"Beauty is housed in beautiful things; you open, close, and hold it. I love that experience."</h1>
            </div>
          </div>
          <p className='featured-article-subheader'>Her First Venture: Ruby & Millie</p>
          <p className='featured-article-paragraph'>Millie was already working in PR when she met makeup artist Ruby Hammer. "I was her publicist, and she and her husband spent two years convincing me to form a brand with them. I liked my job, had my own business, was making loads of money - I wasn't interested in being the face of a brand."</p>
          <p className='featured-article-paragraph'>Eventually though, she agreed. Ruby & Millie launched in 1998 and became one of the UK's most recognisable beauty brands in the late 90s and early 2000s.</p>
          <p className='featured-article-paragraph'>"The moment it launched, I freaked out. My face was suddenly in hundreds of stores. People recognised me at bus stops. It was my worst nightmare. I actually moved to LA to get away from it. That's how much I hated being the front person."</p>
          <p className='featured-article-paragraph'>"Creating a brand is fun, developing it, the product, the packaging. But once it's on the shelf, the pressure is massive. You've got to sell. You have to pay your team. You're in retailers with gate fees and rules about shelf heights and signage. It's not as simple as looking pretty."</p>
          <div className='featured-article-transition-container' id='featured-trans-3'>
            <div className='hide-container' id='hide-container-3'>
              <div className='corner-frame' id="corner-frame-1">
                <h1 className='featured-key-quote'>"Creating a brand is fun. But once it's on the shelf, the pressure is massive. It's not as simple as looking pretty."</h1>
              </div>
            </div>
          </div>
          <p className='featured-article-subheader'>Her Role In The British Beauty Council And Starting The Creator Collective</p>
          <p className='featured-article-paragraph'>Millie is deeply engaged in the future of beauty. She founded the Creator Collective in 2021 to address a growing problem: misinformation in the content space.</p>
          <p className='featured-article-paragraph'>"It started when Gwyneth Paltrow posted that video smearing SPF only on the high points of her face. It was completely wrong. And I thought, if I had to get trained to sell skincare in a department store, why aren't creators and influencers getting trained?"</p>
          <p className='featured-article-paragraph'>The Creator Collective became a training ground for influencers to learn about skin health so they can speak with credibility and authenticity. It was built with the Boots and Walgreens Alliance, which owns several brands, including No7, Liz Earle Beauty Co, Botanics, Soap & Glory, and Sleek MakeUP. "It helps creators, helps brands, and helps the industry”, explains millie. The online course is now open to the public and covers various topics, including misinformation surrounding acne and the dangers of not using SPF.</p>
          <p className='featured-article-subheader'>Recognition For Her Work</p>
          <p className='featured-article-paragraph'>"I got the MBE just after having my daughter. A letter came, and I didn't realise I wasn't supposed to tell anyone, so of course, I told everyone! Then I read the letter properly and realised it wasn't official yet. You have to wait until the honours list is published to see if you're actually on it."</p>
          <p className='featured-article-paragraph'>The OBE came during the pandemic. "By then, I knew how it worked. It was less of a shock but still surreal. The Queen gave it to us. Weird, but amazing."</p>
          <p className='featured-article-subheader'>What's Next When You Have Already Done Everything?</p>
          <p className='featured-article-paragraph'>"I always have something brewing," she says. "Right now, I want to help brands more privately. I used to charge for strategy, but now people come to me through the British Beauty Council and get it for free. Eventually, I want to formalise that again."</p>
          <p className='featured-article-paragraph'>"I try to stay home more now. I've got a puppy! But I love being in the office."</p>
          <div className='featured-article-transition-container' id='featured-trans-4'>
            <div className='hide-container' id='hide-container-4'>
              <div className='corner-frame' id="corner-frame-2">
                <h1 className='featured-key-quote'>"Celebrate your successes more. I wish I'd done that more."</h1>
              </div>
            </div>
          </div>
          <p className='featured-article-subheader'>What Would 21-year-old Millie Think Of All Of This?</p>
          <p className='featured-article-paragraph'>"She'd be shocked," she laughs. "Because none of these jobs existed! I've always created roles for myself. I didn't plan them; they just emerged from what I loved doing.</p>
        </div>
      </div>
    </div>
  )
}

export default IngeborgVanLotringen
