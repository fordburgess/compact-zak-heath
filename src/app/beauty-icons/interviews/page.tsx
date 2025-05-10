"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import '../styles/interviews.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ExpandedImage from '../../../assets/images/field-expanded.jpg';
import LisaEldridge from '../../../assets/images/lisa-eldridge-profile.webp';
import MillieKendall from '../../../assets/images/millie-kendall-profile.webp';
import KirstyLewis from '../../../assets/images/kirsty-lewis-profile.jpeg';
import AdamReed from '../../../assets/images/adam-reed-profile.webp';
import AlessandraSteinherr from '../../../assets/images/alessandra-steinherr.webp';
import MonaKattan from '../../../assets/images/mona-kattan.webp';
import PatriciaBright from '../../../assets/images/patricia-bright-profile.webp';
import ShakeelMurtaza from '../../../assets/images/shakeel-murtaza-profile.png';
import ZakHeath from '../../../assets/images/zak-heath-profile.webp';
import TillySanders from '../../../assets/images/tilly-sanders-profile.webp';
import Placeholder from '../../../assets/images/placeholder.webp';
import CarolynAronson from '../../../assets/images/carolyn-aronson-profile.webp';
import Ingeborg from '../../../assets/images/ingeborg-profile.png';
import { useMediaQuery } from 'usehooks-ts';

const interviews = [
  {
    pfp: MillieKendall,
    name: 'Millie Kendall',
    job: 'Beauty CEO',
    href: '/articles/millie-kendall'
  },
  {
    pfp: LisaEldridge,
    name: 'Lisa Eldridge',
    job: 'Celebrity Makeup Artist',
    href: '/articles/lisa-eldridge'
  },
  {
    pfp: AlessandraSteinherr,
    name: 'Alessandra Steinherr',
    job: 'Beauty Editor + Influencer',
    href: '/articles/alessandra-steinherr'
  },
  {
    pfp: PatriciaBright,
    name: 'Patricia Bright',
    job: 'Content Creator & CEO',
    href: '/audio/patricia-bright'
  },
  {
    pfp: AdamReed,
    name: 'Adam Reed',
    job: 'Hairstylist',
    href: '/articles/adam-reed'
  },
  {
    pfp: MonaKattan,
    name: 'Mona Kattan',
    job: 'Fragrance CEO',
    href: '/articles/mona-kattan'
  },
  {
    pfp: ShakeelMurtaza,
    name: 'Shakeel Murtaza',
    job: "Men's Beauty Influencer",
    href: '/audio/shakeel-murtaza'
  },
  {
    pfp: KirstyLewis,
    name: 'Kirsty Lewis',
    job: 'Head of Beauty PR',
    href: '/articles/kirsty-lewis'
  },
  {
    pfp: Ingeborg,
    name: 'Ingeborg Van Lotringen',
    job: 'Beauty Journalist',
    href: '/audio/ingeborg-van-lotringen'
  },
  {
    pfp: CarolynAronson,
    name: 'Carolyn Aronson',
    job: 'Brand Founder',
    href: '/articles/carolyn-aronson'
  },
  {
    pfp: Placeholder,
    name: 'Yana Kafeli',
    job: 'Agent',
    href: '/audio/yana-kafeli'
  },
  {
    pfp: TillySanders,
    name: 'Tilly Sanders',
    job: 'Beauty PR',
    href: '/articles/tilly-sanders'
  },
  {
    pfp: ZakHeath,
    name: 'Zak Heath',
    job: 'Influencer',
    href: '/dream-room'
  },
  {
    pfp: Placeholder,
    name: 'Raquel Bouris',
    job: 'Fragrance Founder',
    href: '/audio/raquel-bouris'
  },
]

const chunkArray = (array: Array<any>, size: number) =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
);


const BeautyIconsInterviews = () => {
  const mobile = useMediaQuery('(max-width: 1000px)');
  const chunked = chunkArray(interviews, 6);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const backgroundImage: HTMLElement | null = document.querySelector('.beauty-icons-bg');

      if (backgroundImage) {
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

    let shifted = chunked.shift();
    if (shifted && !mobile) {
      shifted.map((item: any, index) => {
        gsap.fromTo(`#icons-pfp-${index + 1}`,
          { opacity: 0, scale: 1 },
          {
            opacity: 1,
            scale: 1.11,
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

      gsap.to('#icons-pfp-0', {
        opacity: 1,
        y: -10,
        duration: 0.5,
      })

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
    }
  }, [])

  return (
    <div className='body-replacement'>
      <div className='beauty-icons-interviews-container'>
        <Image priority src={ExpandedImage} alt='beauty-icons-bg' className='beauty-icons-bg'/>
        <div className='beauty-icons-content-container'>
          <div className='beauty-icons-title-section'>
            <div>
              <p style={{ fontStyle: 'italic' }}>the</p>
              <h1 className='beauty-icons-index-title'>ICONS</h1>
            </div>
          </div>
          {
            chunked.map((chunk: any, index: number) => {
              return (
                <div className='featured-interviews-section' id={`section-${index}`} key={index}>
                  {
                    chunk.map((interview: any, i: number) => {
                      return (
                        <div className='beauty-icons-item' key={interview.href}>
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
    </div>
  )
}

export default BeautyIconsInterviews
