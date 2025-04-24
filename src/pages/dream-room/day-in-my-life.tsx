import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import './article.css'
import AutumnExpanded from '../../assets/images/autumn-expanded.webp';
import Schedule from '../../assets/images/schedule.webp';

const DayInMyLife = () => {
  const verticalScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollUp = window.scrollY;
      const backgroundImage: HTMLElement | null = document.querySelector('.dream-room-bg');

      if (backgroundImage) {
        backgroundImage.style.transform = `translateY(-${scrollUp * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='dream-room-article-container'>
      <Image src={AutumnExpanded} className='dream-room-bg' id='day-in-my-life-bg' alt='dream-room-bg'/>

      <div className='dream-room-article-content' style={{ paddingBottom: '100px' }} ref={verticalScrollRef}>
        <div id="day-in-life-title-section">
          <h1 className='day-in-life-title'>Day In My Life</h1>
        </div>
        <div className='padding-enforcer'>
          <p className='dream-room-paragraph-text'>Since only just finishing uni and working all the way through it as an influencer, I’ve realised that everyday is most likely going to be different - and honestly, that’s something I really struggle with. Back when I was doing my A-Levels, I has such a set routine: I’d wake up at 6:45, read for an hour, make my porridge, go for a walk and then sit down for at least eight hours of work. This was also during the pandemic, during lockdown too. Now, some days I’m filming in my beauty room, other days I’m out and about capturing content or planning campaigns which I do find really fun! The downside - is being able to find time for me. Being self-employed means I can give myself breaks, I’m my own boss. But I have such an innate fear of failing that the hardest thing for me is to know when to stop. I have life boundaries but I need work boundaries too.</p>
          <p className='dream-room-paragraph-text'>I’m constantly thinking about the algorithm and how to stay on top of it and I plan out every single hour of my day the night before. It used to feel a bit much, but not doing it actually makes me more stressed. Having an agent has definitely helped. I try to eat well, I’ve actually become a bit of a gym person and I try to read more (emphasis on trying). Life is full-on but I’m happy, healthy </p>
          <div className='image-with-caption'>
            <Image src={Schedule} alt="daily-schedule"/>
            <p>A week-long look into my daily calendar! It’s colour coded and planned out to the hour!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayInMyLife
