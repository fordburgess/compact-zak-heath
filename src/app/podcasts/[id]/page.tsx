"use client"
import { useState, useEffect, useRef } from 'react';
import { useParams } from "next/navigation";
import { useMediaQuery } from 'usehooks-ts';
import Image from "next/image";
import Link from "next/link"
import ExpandedImage from '../../../assets/images/winter-expanded.webp'
import PatriciaBright from '../../../assets/images/patricia-bright-profile.webp';
import ZakHeath from '../../../assets/images/zak-heath-profile.webp';
import ShakeelMurtaza from '../../../assets/images/shakeel-murtaza-profile.png';
import RaquellBouris from '../../../assets/images/raquell-bouris-profile.png'
import Placeholder from '../../../assets/images/placeholder.webp';
import PlayButton from '../../../assets/images/play-button.png';
import PauseButton from '../../../assets/images/pause-button.png';
import SkipButton from '../../../assets/images/skip-button.png';
import YanaKafeli from '../../../assets/images/yana-kafeli.webp';
import { Episode } from '@/types';
import '../styles/episode.css'
import gsap from 'gsap';
import WaveSurfer from 'wavesurfer.js';

const episodes = [
  {
    index: 0,
    id: 'patricia-bright',
    title: 'Patricia Bright: From Finance to Fame',
    job: 'Content Creator and CEO',
    profileImage: PatriciaBright,
    description: 'In this episode, Zak is joined by the ICON Patricia Bright an entrepreneur and one of the UK’s first OG beauty influencers. From being excluded at school to landing a job in finance, she then pursued a career in YouTube despite criticism at work. Here, she talks about launching her first makeup collection with a major cosmetics company, as well as the challenges of constantly evolving her personal brand. If you’re interested in how she managed to juggle finance, investment, property and how she built long-term success beyond social media, then here’s an honest conversation.',
    comingSoon: false
  },
  {
    index: 1,
    id: 'yana-k-afeli',
    title: 'Yana K. Afeli: From Intern to Agent',
    job: 'Agent',
    profileImage: YanaKafeli,
    description: 'In this episode, Zak is joined by the ICON Yana K. Afeli, who began her career in fashion at just 17. She now works as a leading agent across fashion, beauty, culture and music. Yana shares her journey through the industry, from managing top-tier talent to collaborating with some of the biggest global brands. Whilst opening up about the importance of personal identity in a fast- paced creative world, Yana highlights the realities of networking and what it really takes to support and elevate influencers.',
    comingSoon: false
  },
  {
    index: 2,
    id: 'zak-heath',
    title: 'Zak Heath: How I Built a Career at 17 ',
    job: 'Influencer',
    profileImage: ZakHeath,
    description: 'This episode is a little different. I’m talking to myself about the business of influencing and how this became my full-time job at 17. Working with people who haven’t always had my best interests, to juggling a career whilst studying at Central Saint Martins, it has been an intense journey. If you’re interested in brand deals with commercial and luxury companies, PR, content strategy, building relationships, as well as the equipment I use, then this episode is for you.',
    comingSoon: false
  },
  {
    index: 3,
    id: 'shakeel-murtaza',
    title: 'Shakeel Murtaza: From Criticism to Campaigns ',
    job: 'Influencer',
    profileImage: ShakeelMurtaza,
    description: 'In this episode, Zak is joined by Shakeel Murtaza, a leading men’s beauty influencer known for his skincare routines and self-care content. Despite regularly receiving online hate, he has carved out an incredible niche for himself in the beauty world. If you’re interested in how to navigate identity in a female-dominated space, growing a community, breaking down stereotypes, getting invited to events and how to maintain a successful career online, then listen to this revealing conversation.',
    comingSoon: false
  },
  {
    index: 4,
    id: 'raquel-bouris',
    title: 'Raquel Bouris: Scent, Strategy and Creating a Startup',
    job: 'Fragrance Founder',
    profileImage: RaquellBouris,
    description: 'In this episode, Zak is joined by the ICON Raquel Bouris, founder of the Australian brand Who Is Elijah. After launching the brand in Sydney, Raquel moved to London to expand internationally. If you’re interested in what it takes to build a business, creating new concepts, the realities of running a team, managing investments, and other issues she has encountered, then this conversation will be dropping soon.',
    comingSoon: true
  }
]

const AudioEpisode = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [drawer2Open, setDrawer2Open] = useState<boolean>(false);
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const params = useParams();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const episodeId = params?.id as string;
  const wavesurferRef = useRef<any>(null);
  const waveformRef = useRef<any>(null);

  const fadeIn = () => {
    gsap.to('.waveform-ref', {
      opacity: 1,
      ease: "power1.inOut",
      duration: 0.25
    })

    gsap.to('.control-buttons', {
      opacity: 0.85,
      ease: "power1.inOut",
      duration: 0.25
    })
  }

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'rgba(255, 255, 255, 0.8)',
      progressColor: '#c6e8fa',
      backend: 'MediaElement',
      height: 150,
      cursorColor: 'transparent'
    });

    const wavesurfer = wavesurferRef.current;

    wavesurfer.on('loading',() => setLoading(true));
    wavesurfer.on('ready',() => {
      fadeIn();
      setLoading(false);
      setIsReady(true);
    });
    wavesurfer.load(`/audio/${episodeId}-audio.mp3`);


    return () => {
      wavesurfer.unAll();
      wavesurfer.destroy();
    };

  }, [episodeId])

  useEffect(() => {
    const ws = wavesurferRef.current;

    const updateTimes = () => {
      const currentTime = ws.getCurrentTime(); // Get current time
      const duration = ws.getDuration();       // Get total duration of the audio
      setTimeElapsed(currentTime);             // Set elapsed time
      setTimeRemaining(duration - currentTime); // Calculate remaining time
    };

    if (ws) {
      ws.on('audioprocess', updateTimes);
    }

    return () => {
      if (ws) {
        ws.un('audioprocess', updateTimes); // Clean up the event listener on unmount
      }
    };
  }, [wavesurferRef.current])

  useEffect(() => {
    if (params && params.id) {
      let currentEpisode = episodes.find((episode: Episode) => episode.id == params.id);
      if (currentEpisode) {
        setEpisode(currentEpisode)
      }
      else {
        setEpisode(null)
      }
    }
  }, [params])

  useEffect(() => {

    const checkOverflow = () => {
      if (titleContainerRef.current && titleRef.current) {
        const containerWidth = titleContainerRef.current.offsetWidth; // Get width of parent
        const textWidth = titleRef.current.scrollWidth; // Get width of text

        if (textWidth > containerWidth) {
          const distance = textWidth - containerWidth;
          gsap.to('.inner-title-container', {
            x: `-${distance + 5}px`,
            duration: 5,
            repeat: -1,
            yoyo: true,
            delay: 2,
            ease: 'linear',
            repeatDelay: 2,
          })
        }
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow); // Clean up listener
    };
  }, [episode])

  const handleDrawers = (location: string) => {
    const moreEpisodesDrawer: HTMLDivElement | null = document.querySelector('.more-episodes-drawer');
    const infoDrawer: HTMLDivElement | null = document.querySelector('.info-drawer');

    if (location == 'container') {
      if (drawerOpen && infoDrawer) {
        infoDrawer.classList.remove('active');

        setTimeout(() => {
          setDrawerOpen(false);
          infoDrawer.style.display = 'none';
        }, 100);
      }

      if (drawer2Open && moreEpisodesDrawer) {
        moreEpisodesDrawer.classList.remove('open');
        setDrawer2Open(false);
      }
    }

    if (location == 'drawer-button') {
      if (infoDrawer && !drawerOpen) {
        infoDrawer.style.display = 'block';

        setTimeout(() => {
          infoDrawer.classList.add('active');
          setDrawerOpen(true);
        }, 100);
      }
    }

    if (location == 'clickable-tab' || location == 'more-button') {
      if (moreEpisodesDrawer && !drawer2Open) {
        moreEpisodesDrawer.classList.add('open');
        setDrawer2Open(true);
      }
      if (moreEpisodesDrawer && drawer2Open) {
        moreEpisodesDrawer.classList.remove('open');
        setDrawer2Open(false);
      }
    }
  }

  const onPlayPause = () => {
    const ws = wavesurferRef.current;

    if (ws && isReady) {
      ws.playPause();
      setIsPlaying(ws.isPlaying())
    }
  }

  const onSkip = (direction: number) => {
    const ws = wavesurferRef.current;

    if (ws && isReady) {
      const media = ws.getMediaElement();
      media.currentTime = direction == 1 ? media.currentTime + 5 : media.currentTime - 5;
    }
  }

  return (
    <div className='audio-body-replacement'>
      <div className='episode-container' onClick={() => handleDrawers('container')}>
        <Image priority src={ExpandedImage} className='episode-bg' alt='background'/>
        {
          episode && episode.index > 0 && (
            <Link href={`/podcasts/${episodes[episode.index - 1].id}`}>
              <div className='prev-episode'>
                <Image className='nav-image' src={episodes[episode.index - 1].profileImage || Placeholder} alt='prev-episode'/>
                <p>Prev</p>
              </div>
            </Link>
          )
        }
        <div className='episode-layout-container'>
          <div className='episode-title-and-photo-desktop'>
            {
              episode && (
                <Image src={episode.profileImage ? episode.profileImage : Placeholder} className='episode-pfp-desktop' alt='pfp'/>
              )
            }
            <div className='info-container-desktop'>
              <h1>{episode ? episode.title.split(':')[1] : 'Title Not Found'}</h1>
              <h3>{episode ? episode.title.split(':')[0] : 'Person Not Found'}</h3>
              <p>{episode ? episode.description : 'Description Not Found'}</p>
            </div>
          </div>
          <div className='episode-title-and-photo-mobile'>
            {
              episode && (
                <Image src={episode.profileImage ? episode.profileImage : Placeholder} alt='pfp' className='episode-profile-image' />
              )
            }
            <div ref={titleContainerRef} className='episode-title-container'>
              <div className='inner-title-container' ref={titleRef}>
                <h1 className='episode-title'>{episode ? episode.title.split(':')[1] : 'Title Not Found'}</h1>
              </div>
              <p className='episode-subtitle'>{episode ? episode.title.split(':')[0] : 'Person Not Found'}</p>
              <p>{episode ? episode.description : 'Description Not Found'}</p>
            </div>
          </div>
          {
            loading && (
              <div className='loading-div'>
                <span className="audio-loader"></span>
                <p>Loading</p>
              </div>
            )
          }
          <div className='time-info'>
            <p>{Math.floor(timeElapsed / 60)}:{Math.floor(timeElapsed % 60) < 10 ? `0${Math.floor(timeElapsed % 60)}` : Math.floor(timeElapsed % 60)}</p>
            <p>{Math.floor(timeRemaining / 60)}:{Math.floor(timeRemaining % 60) < 10 ? `0${Math.floor(timeRemaining % 60)}` : Math.floor(timeRemaining % 60)}</p>
          </div>
          <div className='waveform-ref' ref={waveformRef}></div>
          <div className='control-panel'>
            <div className='control-buttons'>
              {
                !loading && (
                  <Image
                    src={SkipButton}
                    id="skip-back"
                    alt="rewind"
                    onClick={() => onSkip(0)}
                  />
                )
              }
              <Image
                src={isPlaying ? PauseButton : PlayButton}
                id="play-pause"
                alt="play-pause"
                onClick={() => onPlayPause()}
              />
              {
                !loading && (
                  <Image
                    src={SkipButton}
                    id="skip-forward"
                    alt="forward"
                    onClick={() => onSkip(1)}
                  />
                )
              }
            </div>
          </div>
        </div>
        {
          episode && episode.index < episodes.length - 1 && (
            episodes[episode.index + 1].comingSoon ? (
              <div className='next-episode'>
                <Image className='nav-image' src={episodes[episode.index + 1].profileImage || Placeholder} alt='next-episode'/>
                <p>Coming Soon</p>
              </div>
            ) : (
              <Link href={`/podcasts/${episodes[episode.index + 1].id}`}>
                <div className='next-episode'>
                  <Image className='nav-image' src={episodes[episode.index + 1].profileImage || Placeholder} alt='next-episode'/>
                  <p>Next</p>
                </div>
              </Link>
            )
          )
        }
        <div className='info-drawer'>
          <div className='drawer-title-section'>
            <h1 className='episode-title'>{episode ? episode.title.split(':')[1] : 'Title Not Found'}</h1>
            <p className='episode-subtitle'>{episode ? episode.title.split(':')[0] : 'Person Not Found'}</p>
          </div>
          <p className='drawer-description'>{episode ? episode.description : 'Description Not Found'}</p>
          <p className='drawer-sub-info'><strong style={{ marginRight: '10px' }}>Date:</strong> Jan 2025</p>
          <p className='drawer-sub-info'>
            <strong style={{ marginRight: '10px' }}>Duration:</strong>
            {audioRef.current ? `${Math.round(audioRef.current.duration / 60)} minutes` : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AudioEpisode;
