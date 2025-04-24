import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './audio.css'
import WideImage from '../../assets/images/winter-far.webp';
import WideImageMobile from '../../assets/images/winter-far-mobile.webp';
import OverheadImage from '../../assets/images/winter-aerial.webp';
import ExpandedImage from '../../assets/images/winter-expanded.webp';
import PatriciaBright from '../../assets/images/patricia-bright-profile.webp';
import ZakHeath from '../../assets/images/zak-heath-profile.webp';
import ShakeelMurtaza from '../../assets/images/shakeel-murtaza-profile.webp';
import BenFrank from '../../assets/images/ben-frank.webp';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Episode } from '@/types';

const episodes = [
  {
    id: 'patricia-bright',
    title: 'Patricia Bright: From Finance to Fame',
    job: 'Content Creator and CEO',
    profileImage: PatriciaBright,
    description: 'In this episode, Zak is joined by the ICON Patricia Bright an entrepreneur and one of the UK’s first OG beauty influencers. From being excluded at school to landing a job in finance, she then pursued YouTube full-time despite criticism at work. She shares about launching her palette with a major cosmetics company to the challenges of constantly evolving her personal brand. If you’re interested in juggling finances, investing, property and how she has built long-term success beyond social media then here’s an honest conversation about these topics.'
  },
  {
    id: 'yana-kafeli',
    title: 'Yana Kafeli: From Intern to Agent',
    job: 'Agent',
    profileImage: null,
    description: 'In this episode, Zak is joined by the ICON Yana Kafeli, who began her career in fashion at just 17 and now works as a leading agent across fashion, beauty, culture and music. She shares her journey through the industry, from managing top-tier talent and collaborating with some of the biggest global brands. Yana opens up about the importance of personal identity in a fast-paced creative world, the power of networking and what it really takes to support and elevate influencers behind the scenes.'
  },
  {
    id: 'zak-heath',
    title: 'Zak Heath: How I Built A Career At 17',
    job: 'Influencer',
    profileImage: ZakHeath,
    description: 'This episode is a little different. I’m talking about the business of influencing from my perspective after this became my full-time job at the age of 17. From working with people who haven’t had my best interests, to juggling a career whilst studying at Central Saint martins it has been an intense journey. If you’re interested in brand deals with commercial and luxury brands, PR, content strategy, the equipment I use and building relationships then here’s an honest conversation about these topics.',
  },
  {
    id: 'shakeel-murtaza',
    title: 'Shakeel Murtaza: From Criticism To Campaigns',
    job: 'Influencer',
    profileImage: ShakeelMurtaza,
    description: 'In this episode, Zak is joined by Shakeel Murtaza, a leading men’s beauty influencer known for his skincare routines and self-care content. Despite regularly receiving online hate, he has carved out an incredible niche for himself in the beauty world and worked with some of top brands. If you’re interested in how to navigate identity in a female-dominated space, growing a community, breaking down stereotypes, getting invited to events and how to maintain a successful career online then here’s an honest conversation about these topics.'
  },
  {
    id: 'raquell-bouris',
    title: 'Raquell Bouris: Scent, Strategy And Creating A Startup',
    job: 'Fragrance Founder',
    profileImage: null,
    description: 'In this episode, Zak is joined by the ICON Raquell Bouris, founder of the Australian brand Who Is Elijah. After launching the brand in Sydney, she has now moved to London to expand internationally and she shares how she did it. If you’re interested in what it takes to build a business, the realities of running a team, creating new concepts, investments and issues she has encountered then here’s an honest conversation about these topics.'
  }
]

const Audio = () => {
  const horizontalScrollRef = useRef<HTMLDivElement | null>(null);

  const handleImageChange = (direction: number) => { // direction is the way the user is travelling
    const initialImageContainer: HTMLElement | null = document.querySelector('.initial-image-container');
    const initialImage: HTMLElement | null = document.querySelector('.initial-image');
    const svgOverlayContainer: HTMLElement | null = document.querySelector('.svg-overlay-container');

    if (initialImageContainer && svgOverlayContainer && initialImage) {

      if (direction == 0) {
        initialImageContainer.style.display = 'block';

        svgOverlayContainer.style.transition = 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out';
        initialImageContainer.style.transition = 'opacity 0.75s ease-in-out';
        initialImage.style.transition = 'transform 0.3s ease-in-out';

        requestAnimationFrame(() => {
          svgOverlayContainer.style.opacity = '0';
          initialImageContainer.style.opacity = '1';
          initialImage.style.transform = 'scale(1)';
        });

        setTimeout(() => {
          svgOverlayContainer.style.display = 'none';
        }, 1000);
      }
      else if (direction == 1) {
        initialImageContainer.style.transition = 'opacity 1.2s ease-in-out'
        initialImage.style.transition = 'transform 0.3s ease-in-out';
        svgOverlayContainer.style.transition = 'opacity 0.5s ease-in-out';
        svgOverlayContainer.style.display = 'block';

        initialImage.style.transform = 'scale(2)';
        initialImageContainer.style.opacity = '0';

        requestAnimationFrame(() => {
          svgOverlayContainer.style.opacity = '1';
        });

        setTimeout(() => {
          initialImageContainer.style.display = 'none';
        }, 1000);
      }
    }
  }

  const handleObjectClick = () => {
    const scrollContainer: HTMLElement | null = document.querySelector('.scroll-container');
    const contentContainer: HTMLElement | null = document.querySelector('.content-container');

    if (scrollContainer && contentContainer) {
      scrollContainer.style.transition = 'opacity 0.5s ease-in-out';
      contentContainer.style.transition = 'opacity 0.25s ease-in-out';

      contentContainer.style.display = 'block';
      scrollContainer.style.opacity = '0';

      requestAnimationFrame(() => {
        contentContainer.style.opacity = '1';
      });

      setTimeout(() => {
        scrollContainer.style.display = 'none';
      }, 1200);
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.initial-image-container', {
      scale: 2,
      ease: 'none',
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to('.title-container', {
      z: 1500,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.subtitle-container', {
      z: 800,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.svg-overlay-container', {
      scale: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "55% top",
        end: "bottom bottom",
        scrub: true
      }
    })

    gsap.to('.further-info-container', {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: '68% top',
        end: '85% top',
        scrub: true
      }
    })

    gsap.to('.test-circle', {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: '80% top',
        end: '90% top',
        scrub: true
      }
    })

    ScrollTrigger.create({
      trigger: ".scroll-container",
      start: "center top", // Adjust as needed
      // markers: true,
      onEnter: () => {
        handleImageChange(1);
      },
      onLeaveBack: () => {
        handleImageChange(0);
      }
    })
  }, [])

  return (
    <>
      <div className='scroll-container' style={{ }}>
        <div className='initial-image-container'>
          <div className='title-container'>
            <motion.h1
              className='page-title'
              id='audio-title'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              AUDIO
            </motion.h1>
          </div>
          <div className='subtitle-container'>
            <motion.p
              className='page-subtitle'
              id='audio-subtitle'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Scroll to continue...
            </motion.p>
          </div>
          <picture>
            <source media="(min-width: 800px)" srcSet={WideImage.src} />
            <source media="(min-width: 640px)" srcSet={WideImageMobile.src} />
            <Image priority src={WideImageMobile.src} className='initial-image' alt='initial-image' />
          </picture>
        </div>
        <div className='svg-overlay-container'>
          <Image src={OverheadImage} className='svg-overlay-test' alt='svg-overlay-winter'/>
          <div className='further-info-container'>
            <h2>HINT</h2>
            <p>YOU CAN READ BUT YOU CAN'T OPEN</p>
          </div>
          <Link href='/audio/episodes'>
            <div className='test-circle' onClick={() => handleObjectClick()}></div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Audio;
