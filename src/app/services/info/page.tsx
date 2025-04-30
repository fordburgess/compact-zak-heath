"use client"
import { useEffect, useRef } from 'react';
// import './index.css';
import { sendMail } from '../../../../lib/send-mail';
import '../styles/info.css';
import Image from 'next/image';
import ExpandedImage from '../../../assets/images/desert-expanded.webp';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from 'framer-motion';
import Instagram from '../../../assets/images/instagram.png';
import Snapchat from '../../../assets/images/snapchat.png';
import Youtube from '../../../assets/images/youtube.png';
import TikTok from '../../../assets/images/tik-tok.png';


const ServicesInfo = () => {
  const verticalScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log(scrollTop)
      const backgroundImage: HTMLElement | null = document.getElementById('services-content-container-background');

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

    gsap.to('#services-info-title', {
      opacity: 1,
      y: '0%',
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5
    })

    gsap.to('#services-info-subtitle', {
      opacity: 1,
      y: '0%',
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5
    })

    gsap.to('#animate-line-1', {
      width: '100%',
      x: '0%',
      ease: "power1.inOut",
      duration: 1
    })

    gsap.to('.body-1-title', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      duration: 1,
    })

    gsap.to('.body-1-text', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      duration: 1,
      delay: 0.5
    })

    gsap.to('.body-2-title', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 0.75
    })

    gsap.to('.body-2-text', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 0.75
    })

    gsap.to('.body-3-title', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#body-3',
        start: 'top 80%',
        end: 'center 40%',
        scrub: true,
      }
    })

    gsap.to('.body-3-text', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#body-3',
        start: 'top 80%',
        end: 'center 40%',
        scrub: true,
      }
    })

    gsap.to('.body-4-title', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#body-4',
        start: 'top center',
        end: 'center 40%',
        scrub: true,
      }
    })

    gsap.to('.body-4-text', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#body-4',
        start: 'top center',
        end: 'center 40%',
        scrub: true,
      }
    })

    gsap.to('.body-5-title', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#body-5',
        start: 'top center',
        end: 'center 40%',
        scrub: true,
      }
    })

    gsap.to('.contact-form', {
      y: -50,
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#body-5',
        start: 'top center',
        end: 'center 60%',
        scrub: true,
      }
    })
  }, [])

  const sendMessage = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const res = await sendMail(data.name, data.email, data.message);

    if (res?.messageId) {
      alert('Application Submitted Successfully.');
    } else {
      alert('Failed To send application.');
    }

  }

  return (
    <div className='services-info-container'>
      <Image src={ExpandedImage} priority id='services-content-container-background' alt='content-container-bg'/>
      <div className='services-info-content' ref={verticalScrollRef}>
        <div className='services-title-section'>
          <h1 id="services-info-title">My Services</h1>
          <div className='services-animate-line' id="animate-line-1"></div>
          <h3 id="services-info-subtitle">Lorem Ipsum Sit Dolor Amet Consamatum Est Julia</h3>
        </div>
        <div className='services-info-body' id="body-1">
          <h3 className='body-1-title'>Socials</h3>
          <div className='body-1-text' style={{ opacity: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a target="_blank" href='https://www.instagram.com/zak.heath/?hl=en'>
              <Image src={Instagram} alt='instagram' />
            </a>
            <a target="_blank" href='https://www.tiktok.com/@zakheath?lang=en'>
              <Image src={TikTok} alt='tik-tok' />
            </a>
            <a target="_blank" href='https://www.youtube.com/@zakheathx'>
              <Image src={Youtube} alt='youtube' />
            </a>
            <a target="_blank" href='https://www.snapchat.com/add/Zakheathx'>
              <Image src={Snapchat} alt='snapchat' />
            </a>
          </div>
        </div>
        <div className='services-info-body' id="body-2">
          <h3 className='body-2-title'>Consulting & Brand Collaboration Inquiries</h3>
          <p className='body-2-text' style={{ marginBottom: '10px' }}>As a young voice in the beauty industry with firsthand experience navigating content creation, brand partnerships, and beauty business strategy, I offer consulting services for brands and individuals looking to connect with today’s beauty audience. I can give insight into Gen Z consumer behaviour, influencer marketing and digital storytelling through a beauty and fashion lens.</p>
          <p className='body-2-text'>For consulting opportunities, public speaking, or collaborations, please reach out to me directly at zakheath163@gmail.com</p>
        </div>
        <div className='services-info-body' id="body-3">
          <h3 className='body-3-title'>Consulting & Brand Collaboration Inquiries</h3>
          <p className='body-3-text'>As a young voice in the beauty industry with firsthand experience navigating content creation, brand partnerships, and beauty business strategy, I offer consulting services for brands and individuals looking to connect with today’s beauty audience. I can give insight into Gen Z consumer behaviour, influencer marketing and digital storytelling through a beauty and fashion lens</p>
          <p className='body-3-text'>For consulting opportunities, public speaking, or collaborations, please reach out to me directly at zakheath163@gmail.com</p>
        </div>
        <div className='services-info-body' id="body-4">
          <h3 className='body-4-title'>Brand Partnerships & Representation</h3>
          <p className='body-4-text'>For all brand partnerships please get in touch with my agent via zak@thebreakco.com.</p>
        </div>
        <div className='services-info-body' id="body-5">
          <h3 className='body-5-title'>Contact Me</h3>
          <form className='contact-form' onSubmit={sendMessage}>
            <div>
              <label>Name</label>
              <input name='name' type="text" />
            </div>
            <div>
              <label>Email</label>
              <input name='email' type="text" />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Message</label>
              <textarea name='message'/>
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ServicesInfo
