"use client"
import { useState, useEffect, useRef } from 'react';
import { useParams } from "next/navigation";
import { useMediaQuery } from 'usehooks-ts';
import Image from "next/image";
import Link from "next/link"
import ExpandedImage from '../../../assets/images/winter-expanded.webp'
import PatriciaBright from '../../../assets/images/patricia-bright-profile.webp';
import ZakHeath from '../../../assets/images/zak-heath-profile.webp';
import ShakeelMurtaza from '../../../assets/images/shakeel-murtaza-profile.webp';
import RaquellBouris from '../../../assets/images/raquell-bouris-profile.png'
import Placeholder from '../../../assets/images/placeholder.webp';
import PlayButton from '../../../assets/images/play-button.png';
import PauseButton from '../../../assets/images/pause-button.png';
import SkipButton from '../../../assets/images/skip-button.png';
import { Episode } from '@/types';
import '../styles/episode.css'
import gsap from 'gsap';
import WavesurferPlayer from '@wavesurfer/react'

const episodes = [
  {
    index: 0,
    id: 'patricia-bright',
    title: 'Patricia Bright: From Finance to Fame',
    job: 'Content Creator and CEO',
    profileImage: PatriciaBright,
    description: 'In this episode, Zak is joined by the ICON Patricia Bright an entrepreneur and one of the UK’s first OG beauty influencers. From being excluded at school to landing a job in finance, she then pursued a career in YouTube despite criticism at work. Here, she talks about launching her first makeup collection with a major cosmetics company, as well as the challenges of constantly evolving her personal brand. If you’re interested in how she managed to juggle finance, investment, property and how she built long-term success beyond social media, then here’s an honest conversation.'
  },
  {
    index: 1,
    id: 'yana-kafeli',
    title: 'Yana Kafeli: From Intern to Agent',
    job: 'Agent',
    profileImage: null,
    description: 'In this episode, Zak is joined by the ICON Yana Kafeli, who began her career in fashion at just 17. She now works as a leading agent across fashion, beauty, culture and music. Yana shares her journey through the industry, from managing top-tier talent to collaborating with some of the biggest global brands. Whilst opening up about the importance of personal identity in a fast- paced creative world, Yana highlights the realities of networking and what it really takes to support and elevate influencers.'
  },
  {
    index: 2,
    id: 'zak-heath',
    title: 'Zak Heath: How I Built A Career At 17',
    job: 'Influencer',
    profileImage: ZakHeath,
    description: 'This episode is a little different. I’m talking to myself about the business of influencing and how this became my full-time job at 17. Working with people who haven’t always had my best interests, to juggling a career whilst studying at Central Saint Martins, it has been an intense journey. If you’re interested in brand deals with commercial and luxury companies, PR, content strategy, building relationships, as well as the equipment I use, then this episode is for you.',
  },
  {
    index: 3,
    id: 'shakeel-murtaza',
    title: 'Shakeel Murtaza: From Criticism To Campaigns',
    job: 'Influencer',
    profileImage: ShakeelMurtaza,
    description: 'In this episode, Zak is joined by Shakeel Murtaza, a leading men’s beauty influencer known for his skincare routines and self-care content. Despite regularly receiving online hate, he has carved out an incredible niche for himself in the beauty world. If you’re interested in how to navigate identity in a female-dominated space, growing a community, breaking down stereotypes, getting invited to events and how to maintain a successful career online, then listen to this revealing conversation.'
  },
  {
    index: 4,
    id: 'raquell-bouris',
    title: 'Raquell Bouris: Scent, Strategy And Creating A Startup',
    job: 'Fragrance Founder',
    profileImage: RaquellBouris,
    description: 'In this episode, Zak is joined by the ICON Raquell Bouris, founder of the Australian brand Who Is Elijah. After launching the brand in Sydney, Raquell moved to London to expand internationally. If you’re interested in what it takes to build a business, creating new concepts, the realities of running a team, managing investments, and other issues she has encountered, then this conversation will be dropping soon.'
  }
]

const AudioEpisode = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [drawer2Open, setDrawer2Open] = useState<boolean>(false);
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [wavesurfer, setWavesurfer] = useState<any>(null);
  const params = useParams();
  const mobile = useMediaQuery('(max-width: 1000px)');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const episodeId = params?.id as string;

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


  const handlePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)

      const progressBar: HTMLElement | null = document.querySelector('.progress-bar');

      if (progressBar) {
        const width = Math.round((currentTime / audioRef.current.duration * 100) * 100) / 100;

        progressBar.style.width = `${width}%`;
      }

    }
  }

  const handleSkip = (direction: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = direction == 1 ? audioRef.current.currentTime + 10 : audioRef.current.currentTime - 10
    }
  }

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

  const onReady = (ws: any) => {
    setWavesurfer(ws)
    setIsPlaying(false)
  }

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause()
  }

  return (
    <div className='audio-body-replacement'>
      <div className='episode-container' onClick={() => handleDrawers('container')}>
        <Image priority src={ExpandedImage} className='episode-bg' alt='background'/>
        {
          episode && episode.index > 0 && (
            <Link href={`/audio/${episodes[episode.index - 1].id}`}>
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
            </div>
          </div>
          <WavesurferPlayer
            height={mobile ? 125 : 150}
            waveColor="rgba(255, 255, 255, 0.85)"
            mediaControls={false}
            progressColor="#c2d6ff"
            cursorColor='transparent'
            url={`/audio/${episodeId}-audio.mp3`}
            onReady={onReady}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className='control-panel'>
            <div className='control-buttons'>
              {
                wavesurfer && (
                  <Image
                    src={SkipButton}
                    id="skip-back"
                    alt="rewind"
                    onClick={() => wavesurfer.skip(-5)}
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
                wavesurfer && (
                  <Image
                    src={SkipButton}
                    id="skip-forward"
                    alt="forward"
                    onClick={() => wavesurfer.skip(5)}
                  />
                )
              }
            </div>
          </div>
          <div className='bottom-controls'>
            {/* {
              episode && episode.index > 0 && (
                <Link href={`/audio/${episodes[episode.index - 1].id}`}>
                  <div className=''>
                    <Image className='nav-image' src={episodes[episode.index - 1].profileImage || Placeholder} alt='prev-episode'/>
                    <p>Prev</p>
                  </div>
                </Link>
              )
            }
            {
              episode && episode.index < episodes.length - 1 && (
                <Link href={`/audio/${episodes[episode.index + 1].id}`}>
                  <div className=''>
                    <Image className='nav-image' src={episodes[episode.index + 1].profileImage || Placeholder} alt='next-episode'/>
                    <p>Next</p>
                  </div>
                </Link>
              )
            } */}
          </div>
        </div>
        {
          episode && episode.index < episodes.length - 1 && (
            <Link href={`/audio/${episodes[episode.index + 1].id}`}>
              <div className='next-episode'>
                <Image className='nav-image' src={episodes[episode.index + 1].profileImage || Placeholder} alt='next-episode'/>
                <p>Next</p>
              </div>
            </Link>
          )
        }
        {/* <div className='more-episodes-drawer'>
          <div className='episode-drawer-content'>
            <div style={{ padding: '20px' }}>
              <h1>More Episodes</h1>
            </div>
            <div className='more-episodes-column'>
              {
                episodes && episode && episodes.map((item: Episode) => {
                  if (item.id !== episode.id) {
                    return (
                      <Link href={`/audio/${item.id}`} key={item.id}>
                        <div className='more-episodes-item'>
                          <Image src={item.profileImage ? item.profileImage : Placeholder} alt='pfp'/>
                          <h3>{item.title.split(':')[1]}</h3>
                          <p>{item.title.split(':')[0]}</p>
                        </div>
                      </Link>
                    )
                  }
                })
              }
            </div>
          </div>
          <div className='clickable-tab' onClick={() => handleDrawers('clickable-tab')}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> */}
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
