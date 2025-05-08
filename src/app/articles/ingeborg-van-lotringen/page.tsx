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
    gsap.registerPlugin(ScrollTrigger);

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
          <p className='featured-article-paragraph'>Ingeborg van Lotringen has spent more than two decades in beauty journalism and has seen it all. From lavish press trips to witnessing the decline of print magazines with the rise of influencers in this digital landscape. Now working as a Daily Mail columnist, testing the latest facials and clinical treatments, she was Cosmopolitan's award-winning beauty director from 2007 to 2019. In this COMPACT conversation, she reflects on her career highlights, industry shifts and why good writing still matters.</p>
          <p className='featured-article-subheader'>The early days</p>
          <p className='featured-article-paragraph'>Ingeborg's path into beauty journalism wasn't exactly traditional. "I came to London to work in television - I was a researcher on Davina McCall's MTV show Most Wanted, but after a year, they made redundancies, and I had to do something else. Beauty journalism wasn't a job I'd even heard of - I'm Dutch, and it wasn't exactly a known job back home. But I wanted to write, and beauty was a subject I could write about".</p>
          <p className='featured-article-paragraph'>She started out interning at Hello! before landing her first full-time role at the now- defunct Minx Magazine. From there, she bounced across glossy magazines— Looks, Shape, Eve, Psychologies—before joining Cosmopolitan, where she eventually became beauty director.</p>
          <p className='featured-article-subheader'>First-class perks: the golden era of brand trips</p>
          <p className='featured-article-paragraph'>Although beauty journalism wasn't her first choice, Ingeborg entered the industry in the peak magazine trip era - a time of glamour, money-can't-buy experiences and unforgettable experiences. "My first trip was in '98 with L'Occitane, and all the beauty directors from other publications were invited. I wasn't even supposed to go - I was the intern. But I asked my boss if she needed help and went instead".</p>
          <div className='featured-article-transition-container' id='featured-trans-1'>
            <div className='hide-container' id='hide-container-1'>
              <h1 className='featured-key-quote'>"It's almost impossible to name all the brands now... I once had a list of 28 brands... now, there are hundreds."</h1>
            </div>
          </div>
          <p className='featured-article-subheader'>Your most memorable trip?</p>
          <p className='featured-article-paragraph'>"Mustique," she says without hesitation. "It's a private Caribbean island - you can't go unless invited. We were there for a John Freida launch. We stayed in private houses - I was in the one William and Kate had just stayed in. The other beauty directors and I looked around, thinking, what the hell?"</p>
          <p className='featured-article-subheader'>The constant churn of products</p>
          <p className='featured-article-paragraph'>With decades of testing the latest beauty launches, Ingeborg has seen, tried, or discarded thousands of products. "It's almost impossible to name all the brands now. I once had a list of 28 brands I used to request new products, like lipstick or moisturiser. Now, there are hundreds of brands. I do still have a few favourites, including Crème de la Mer, Gallinée, The Ordinary, and Medik8. Most of my all-time favourites have been discontinued.</p>
          <p className='featured-article-subheader'>Beauty journalism: then vs now</p>
          <p className='featured-article-paragraph'>"The main difference is editorial independence," says Ingeborg. "We had no commercial pressure. The sales team dealt with the ads, and we just reported honestly. If I went on a trip and I didn't like the product, I'd still mention it somewhere, but not in a glowing feature. If I loved it, I'd give it a big write-up".</p>
          <p className='featured-article-subheader'>This honesty has changed dramatically.</p>
          <p className='featured-article-paragraph'>"These days, journalists are expected to act like influencers. Trips come with expectations - whether that be to write as many pieces - and there's a transactional feel that wasn't there before."</p>
          <p className='featured-article-paragraph'>"I've stopped reading magazines because I don't believe half of what's in them anymore. It used to be that you could trust the journalist's voice. Now it's all marketing copy."</p>
          <p className='featured-article-subheader'>The rise of influencers</p>
          <p className='featured-article-paragraph'>When the conversation that social media could overtake journalism, many journalists didn't take it seriously.</p>
          <div className='featured-article-transition-container' id='featured-trans-2'>
            <div className='hide-container' id='hide-container-2'>
              <h1 className='featured-key-quote'>“I've stopped reading magazines because I don't believe half of what's in them anymore.”</h1>
            </div>
          </div>
          <p className='featured-article-paragraph'>"We all thought, oh whatever, this won't last. Some colleagues pivoted, and some didn't. I stuck to what I love - writing. But I didn't see the shift coming. Around 2015, the tables turned, and we were suddenly asked to act like marketers."</p>
          <p className='featured-article-paragraph'>She notes that magazines began emulating influencer content, "and that's when everything changed."</p>
          <p className='featured-article-subheader'>Advice for aspiring writers</p>
          <p className='featured-article-paragraph'>"Get out of the house. Meet people. Journalism is about talking to others and being present in the world. Too many people think they can do it all online - that's not journalism. Don't say, 'I love makeup, or I want free things' as your reason for wanting the job; that's not enough. You have to love writing. Be willing to do anything, learn anything and start from the bottom. That's how you grow."</p>
          <p className='featured-article-paragraph'>Looking back, she says: "I sometimes wish I'd started earlier. University was great - I studied Cultural Studies in Amsterdam - but journalism is about experience. You learn by doing. That's what really counts."</p>
          <div className='featured-article-transition-container' id='featured-trans-3'>
            <div className='hide-container' id='hide-container-3'>
              <div className='corner-frame' id="corner-frame-1">
                <h1 className='featured-key-quote'>"Magazines began emulating influencer content – and that's when everything changed."</h1>
              </div>
            </div>
          </div>
          <p className='featured-article-subheader'>Her daily routine</p>
          <p className='featured-article-paragraph'>As a freelance journalist, Ingeborg's routine is confessed chaos.</p>
          <p className='featured-article-paragraph'>"I get up late, procrastinate all morning, then work non-stop from 1 pm to 10 pm. I live in a basement - I call it my bunker - and I rarely leave because I always have deadlines."</p>
          <p className='featured-article-paragraph'>Despite that, she still finds joy in simple pleasures, such as The Wolseley on Piccadilly, her favourite restaurant in London.</p>
          <p className='featured-article-paragraph'>"Creating a brand is fun, developing it, the product, the packaging. But once it's on the shelf, the pressure is massive. You've got to sell. You have to pay your team. You're in retailers with gate fees and rules about shelf heights and signage. It's not as simple as looking pretty."</p>
          <p className='featured-article-subheader'>Final thoughts</p>
          <p className='featured-article-paragraph'>"I may not have predicted all the changes, but I do know this: writing with honesty will always matter".</p>
        </div>
      </div>
    </div>
  )
}

export default IngeborgVanLotringen
