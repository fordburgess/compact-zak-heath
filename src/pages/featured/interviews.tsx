import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './interviews.css';
import ExpandedImage from '../../assets/images/spring-expanded.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LisaEldridge from '../../assets/images/lisa-eldridge-profile.webp';
import KirstyLewis from '../../assets/images/kirsty-lewis-profile.webp';
import MillieKendall from '../../assets/images/millie-kendall-profile.webp';
import AdamReed from '../../assets/images/adam-reed-profile.webp';
import AlessandraSteinherr from '../../assets/images/alessandra-steinherr.webp';
import MonaKattan from '../../assets/images/mona-kattan.webp';
import CarolynAronson from '../../assets/images/carolyn-aronson-profile.webp';
import TillySanders from '../../assets/images/tilly-sanders-profile.webp';
import ShakeelMurtaza from '../../assets/images/shakeel-murtaza-profile.webp';
import ZakHeath from '../../assets/images/zak-heath-profile.webp';
import Placeholder from '../../assets/images/placeholder.webp';

const interviews = [
  {
    pfp: AdamReed,
    name: 'Adam Reed',
    job: 'Hairstylist',
    href: '/featured/adam-reed'
  },
  {
    pfp: CarolynAronson,
    name: 'Carolyn Aronson',
    job: 'Beauty Entrepreneur',
    href: '/featured/carolyn-aronson'
  },
  {
    pfp: MonaKattan,
    name: 'Mona Kattan',
    job: 'Fragrance CEO',
    href: '/featured/mona-kattan'
  },
  {
    pfp: TillySanders,
    name: 'Tilly Sanders',
    job: 'Beauty PR',
    href: '/featured/tilly-sanders'
  },
  {
    pfp: AlessandraSteinherr,
    name: 'Alessandra Steinherr',
    job: 'Beauty Editor + Influencer',
    href: '/featured/alessandra-steinherr'
  },
  {
    pfp: MillieKendall,
    name: 'Millie Kendall',
    job: 'Beauty CEO',
    href: '/featured/millie-kendall'
  },
  {
    pfp: ZakHeath,
    name: 'Zak Heath',
    job: 'My Journey',
    href: '/dream-room'
  },
  {
    pfp: LisaEldridge,
    name: 'Lisa Eldridge',
    job: 'Celebrity Makeup Artist',
    href: '/featured/lisa-eldridge'
  },
]

const chunkArray = (array: Array<any>, size: number) =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
);

const chunked = chunkArray(interviews, 6);

const FeaturedInterviews = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const backgroundImage: HTMLElement | null = document.querySelector('.beauty-icons-bg');

      if (backgroundImage) {
        console.log(scrollTop)
        backgroundImage.style.transform = `translateY(-${scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#icons-pfp-0', {
      opacity: 1,
      y: -10,
      duration: 1,
      delay: 1,
    })

    let shifted = chunked.shift();
    if (shifted) {
      shifted.map((item: any, index) => {
        console.log(index);
        gsap.fromTo(`#icons-pfp-${index + 1}`,
          { opacity: 0, scale: 1 },
          {
            opacity: 1,
            scale: 1.25,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: `#section-${index + 1}`,
              start: 'top 80%',
              end: 'top center',
              scrub: true,
            }
          }
        )
      })
    }

    gsap.to('.beauty-icons-title-section', {
      y: -100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: 'beauty-icons-content-container',
        start: 'top top',
        end: 'top -20%',
        scrub: true
      }
    })
  }, [])

  return (
    <div className='beauty-icons-interviews-container'>
      <Image priority src={ExpandedImage} alt='beauty-icons-bg' className='beauty-icons-bg'/>
      <div className='beauty-icons-content-container'>
        <div className='beauty-icons-title-section'>
          <div>
            {/* <p style={{ fontStyle: 'italic' }}>the</p> */}
            <h1 className='beauty-icons-index-title'>FEATURED</h1>
          </div>
        </div>
        {
          chunked.map((chunk: any, index: number) => {
            return (
              <div className='featured-interviews-section' id={`section-${index}`}>
                {
                  chunk.map((interview: any, i: number) => {
                    return (
                      <div className='beauty-icons-item'>
                        <Link href={interview.href}>
                          <Image
                            src={interview.pfp}
                            alt={`icon-${index}`}
                            className='beauty-icons-pfp'
                            id={`icons-pfp-${index}`}
                            style={{ objectPosition: interview.name == 'Millie Kendall' || 'Carolyn Aronson' ? 'top' : 'center' }}
                          />
                          <div className='name-container'>
                            <h3>{interview.name}</h3>
                            <p>{interview.job}</p>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FeaturedInterviews;
