"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/audio.css'
import ExpandedImage from '../../../assets/images/winter-expanded.webp';
import PatriciaBright from '../../../assets/images/patricia-bright-profile.webp';
import ZakHeath from '../../../assets/images/zak-heath-profile.webp';
import ShakeelMurtaza from '../../../assets/images/shakeel-murtaza-profile.png';
import Placeholder from '../../../assets/images/placeholder.webp';
import RaquellBouris from '../../../assets/images/raquell-bouris-profile.png';
import { Episode } from '@/types';

const episodes = [
  {
    index: 0,
    id: 'patricia-bright',
    title: 'Patricia Bright: From Finance to Fame',
    job: 'Content Creator and CEO',
    profileImage: PatriciaBright,
    description: 'In this episode, Zak is joined by the ICON Patricia Bright an entrepreneur and one of the UK’s first OG beauty influencers. From being excluded at school to landing a job in finance, she then pursued YouTube full-time despite criticism at work. She shares about launching her palette with a major cosmetics company to the challenges of constantly evolving her personal brand. If you’re interested in juggling finances, investing, property and how she has built long-term success beyond social media then here’s an honest conversation about these topics.'
  },
  {
    index: 1,
    id: 'yana-kafeli',
    title: 'Yana Kafeli: From Intern to Agent',
    job: 'Agent',
    profileImage: null,
    description: 'In this episode, Zak is joined by the ICON Yana Kafeli, who began her career in fashion at just 17 and now works as a leading agent across fashion, beauty, culture and music. She shares her journey through the industry, from managing top-tier talent and collaborating with some of the biggest global brands. Yana opens up about the importance of personal identity in a fast-paced creative world, the power of networking and what it really takes to support and elevate influencers behind the scenes.'
  },
  {
    index: 2,
    id: 'zak-heath',
    title: 'Zak Heath: How I Built A Career At 17',
    job: 'Influencer',
    profileImage: ZakHeath,
    description: 'This episode is a little different. I’m talking about the business of influencing from my perspective after this became my full-time job at the age of 17. From working with people who haven’t had my best interests, to juggling a career whilst studying at Central Saint martins it has been an intense journey. If you’re interested in brand deals with commercial and luxury brands, PR, content strategy, the equipment I use and building relationships then here’s an honest conversation about these topics.',
  },
  {
    index: 3,
    id: 'shakeel-murtaza',
    title: 'Shakeel Murtaza: From Criticism To Campaigns',
    job: 'Influencer',
    profileImage: ShakeelMurtaza,
    description: 'In this episode, Zak is joined by Shakeel Murtaza, a leading men’s beauty influencer known for his skincare routines and self-care content. Despite regularly receiving online hate, he has carved out an incredible niche for himself in the beauty world and worked with some of top brands. If you’re interested in how to navigate identity in a female-dominated space, growing a community, breaking down stereotypes, getting invited to events and how to maintain a successful career online then here’s an honest conversation about these topics.'
  },
  {
    index: 4,
    id: 'raquel-bouris',
    title: 'Raquel Bouris: Scent, Strategy And Creating A Startup',
    job: 'Fragrance Founder',
    profileImage: RaquellBouris,
    description: 'In this episode, Zak is joined by the ICON Raquel Bouris, founder of the Australian brand Who Is Elijah. After launching the brand in Sydney, she has now moved to London to expand internationally and she shares how she did it. If you’re interested in what it takes to build a business, the realities of running a team, creating new concepts, investments and issues she has encountered then here’s an honest conversation about these topics.'
  }
]

const Episodes = () => {
  const horizontalScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = horizontalScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const backgroundImage: HTMLElement | null = document.querySelector('.content-container-background');
      const chevrons: HTMLElement | null = document.querySelector('.audio-chevrons');

      if (backgroundImage) {
        backgroundImage.style.transform = `translateX(-${scrollLeft * 0.25}px)`;
      }

      if (chevrons) {
        const opacity = Math.max(0, 1 - scrollLeft / 500);
        chevrons.style.opacity = opacity.toString();

      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='content-container'>
      <Image priority src={ExpandedImage} className='content-container-background' id='audio-content-container-background' alt='expanded-image-winter'/>
      <div className='profile-scroll-container' ref={horizontalScrollRef}>
        {
          episodes.map((episode: Episode) => {
            return (
              <Link
                href={`/audio/${episode.id}`}
                key={episode.id}
              >
                <div className='profile-container'>
                  <Image className='profile-image' src={episode.profileImage ? episode.profileImage : Placeholder} alt='pfp'/>
                  <div id='podcast-index-info-container'>
                    <h3>{episode.title.split(':')[0]}</h3>
                    <p>{episode.job}</p>
                  </div>
                </div>
              </Link>
            )
          })
        }
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className='audio-chevrons'
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: 'absolute', top: '48%', right: '2%', transform: 'translate(2%, -48%)' }}
        >
          <polyline points="5 6 11 12 5 18" stroke="#fff" />
          <polyline points="11 6 17 12 11 18" stroke="#fff" />
          <polyline points="17 6 23 12 17 18" stroke="#fff" />
        </svg>
      </div>
    </div>
  )
}

export default Episodes
