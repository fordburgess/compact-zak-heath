// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { Noise } from 'noisejs';
// import './interview.css'
// import Image1 from '../../assets/images/lisa-eldridge-1.webp';
// import Image2 from '../../assets/images/lisa-eldridge-2.webp';
// import Image4 from '../../assets/images/lisa-eldridge-4.webp';
// import SpringExpanded from '../../assets/images/spring-expanded.jpg';
// import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import { useMediaQuery } from 'usehooks-ts';
//
// const LisaEldridge = () => {
//   const mobile = useMediaQuery('(max-width: 800px)');
//   const windowWidth = 2000;
//   const CANVAS_WIDTH = 2000;
//   const NOISE_AMOUNT = 4;
//   const NOISE_SPEED = 0.006;
//   const SCROLL_SPEED = 0.75;
//   const noise = new Noise();
//
//   const article = [
//     {
//       id: 0,
//       question: 'What name would you have chosen, if you could have been called anything else?',
//       answer: 'Oh, my God, well, my mum was actually going to call me Nina. And then, last minute, she changed it to Lisa. At one point, I thought I would have preferred Nina—I like it better. Honestly, I don’t like Lisa.',
//       x: CANVAS_WIDTH / 1,
//       y: 320,
//       s: 1,
//       size: '300px',
//     },
//     {
//       id: 1,
//       question: 'What were your first experiences with makeup?',
//       answer: 'It started when I found my mum’s old makeup after we moved back to England from New Zealand. She had this box with little drawers, filled with 1960s makeup like Biba and Mary Quant that was really playful and colourful. Makeup from that era was designed for teenagers, so it had this childlike, crayon-like quality that I loved because of the objects and textures and for me, that was the turning point. I was also really inspired by the “vintageness”, because I knew it was old makeup and that was more interesting than modern makeup. I also used to draw on paper with it because it was more interesting than using regular crayons and art supplies. For my 13th birthday, I got a book on stage and theatrical makeup, and it blew my mind. The transformations, the way you could create light and shade, it was like art. I knew that’s what I wanted to do.',
//       x: CANVAS_WIDTH / 2,
//       y: 200,
//       s: 1,
//       image: Image2,
//       size: '250px',
//       expandedSize: '100vh'
//     },
//     {
//       id: 2,
//       question: 'When you were 21, who did you look up to in the beauty industry?',
//       answer: 'Probably Mary Greenwell. She was the makeup artist doing all the Vogue covers at the time. When I was a teenager, I’d use my pocket money to buy Vogue magazines and dream about having a career like hers. She was doing the makeup for literally every major cover. And then, two years later, I was working with her. It was a dream come true.',
//       x: CANVAS_WIDTH / 3,
//       y: 400,
//       s: 1,
//       size: '320px'
//     },
//     {
//       id: 7,
//       questionId: 1,
//       src: Image2,
//       x: 600,
//       y: 400,
//       s: 1.1
//     },
//     {
//       id: 8,
//       questionId: 4,
//       src: Image4,
//       x: 300,
//       y: 200,
//     },
//     {
//       id: 3,
//       question: 'Did you face any setbacks when you entered the industry?',
//       answer: 'Oh, absolutely. I didn’t know anyone in the industry, and there wasn’t any internet back then to guide me, so it was tricky to figure out, especially wanting to go into the fashion industry. I’d buy magazines to study credits like "Mary Greenwell for Debbie Walters" and figure out which agency to call and who was repping each other. Networking was painstaking, you had to meet people at clubs or get in touch with agencies directly and say, “I would love to assist, or something”. I did a lot of unpaid work to build my portfolio, working with new models like Kate Moss who were just coming into the industry. At one point, I heard someone say they got a magazine cover because their boyfriend was the editor, and I remember thinking, oh my god, I hope it’s literally not going to come down to who you know. But in the end, hard work and perseverance paid off. By the time I was 23, I was signed by an agency alongside legends like Sam McKnight, Mary Greenwell and major major people - I was kind of the baby. That was huge. At first, I was asked why I wanted to assist, but I had only worked with up-and-coming models and I didn’t know how to react when a big supermodel or celebrity walked into the room; however, I quickly learnt that you just treat everybody the same.',
//       x: CANVAS_WIDTH / 4,
//       y: 250,
//       s: 1,
//       size: '275px'
//     },
//     {
//       id: 4,
//       question: 'What was your favourite club when you were 21?',
//       answer: 'The WAG Club was the place to be. So many cool people in fashion and creative industries hung out there. Clubs like that were great for meeting people and building connections. I’d speak to the people from Models One and ask whether they had any new models and that’s how I got my portfolio together.',
//       x: CANVAS_WIDTH / 5,
//       y: 500,
//       s: 0.8,
//       size: '275px'
//     },
//     {
//       id: 5,
//       question: 'What was the first big show you worked on?',
//       answer: 'It was with Mary, assisting at shows like Rifat Ozbek in London and Romeo Gigli in Paris. I remember rushing through makeup at my first big show, and Mary told me to slow down and take my time. I was like, oh my god, okay!',
//       x: CANVAS_WIDTH / 6,
//       y: 250,
//       s: 1,
//       size: '250px'
//     },
//     {
//       id: 6,
//       question: 'What advice would you give your 21-year-old self?',
//       answer: 'I’d tell her to stay confident and not compare herself to others but explore the ideas she had and wanted to share. In a creative industry, it’s fuelled by ideas, there’s no such thing as a bad one. I wish I’d spoken up more on shoots when I had ideas. Now, I’m much more comfortable experimenting. For instance, I recently tried a bold blue eyeshadow look during a Claudia Schiffer shoot for Pop Magazine. It didn’t work, and we took it off, but that’s okay! It’s all part of the creative process. Don’t think you’re silly or something and don’t be afraid to explore, speak your mind, and trust your instincts. There’s good ideas, bad ideas, but actually they’re all good.',
//       x: CANVAS_WIDTH / 7,
//       y: 300,
//       s: 1,
//       size: '275px'
//     },
//     // associated images beyond this point
//   ]
//
//   const interval = CANVAS_WIDTH / article.length + 100;
//   const articleRef = useRef(
//     article.map((question, i) => {
//
//       const extraBuffer = i >= 13 ? 100 : 0;
//
//       return {
//         ...question,
//         x: i * interval + extraBuffer,
//         noiseSeedX: Math.floor(Math.random() * 64000),
//         noiseSeedY: Math.floor(Math.random() * 64000),
//         xWithNoise: question.x,
//       }
//     })
//   )
//
//   const [newArticle, setNewArticle] = useState([])
//
//   useEffect(() => {
//     if (windowWidth) {
//       const interval = windowWidth / article.length + 50
//
//       const testArticle = article.map((image, i) => {
//         const extraBuffer = i >= 13 ? 100 : 0
//
//         return { ...image, x: i * interval + extraBuffer }
//       })
//
//       setNewArticle(testArticle)
//     }
//   }, [windowWidth])
//
//   const animationRef = useRef<number>();
//
//   useEffect(() => {
//     // setTimeout(() => {
//     //   setReady(true)
//     // }, 400)
//
//     animationRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     }
//   }, [])
//
//   const positionsRef = useRef<{ left: number; top: number }[]>([]);
//   function animate() {
//     articleRef.current = articleRef.current.map((item, index)=> {
//       const newNoiseSeedX = item.noiseSeedX + NOISE_SPEED;
//       const newNoiseSeedY = item.noiseSeedY + NOISE_SPEED;
//
//       const randomX = noise.simplex2(newNoiseSeedX, 0);
//       const randomY = noise.simplex2(newNoiseSeedY, 0);
//
//       const newX = item.x - SCROLL_SPEED + 0.05;
//       const newY = item.y - SCROLL_SPEED + 0.05;
//
//       const newXWithNoise = newX + randomX * NOISE_AMOUNT;
//       const newYWithNoise = newY + randomY * NOISE_AMOUNT;
//
//       const idString = item.question ? `item-${item.id}` : `associated-image ${item.questionId}`
//       const element = document.getElementById(idString);
//
//       if (element) {
//         if (!positionsRef.current[index]) {
//           positionsRef.current[index] = { newXWithNoise, newYWithNoise };
//         }
//
//         if (newXWithNoise < -450) {
//           element.style.opacity = '0';
//         }
//
//         if (newXWithNoise < 2500 && newXWithNoise > 2000) {
//           element.style.opacity = '1';
//         }
//
//         element.style.left = `${newXWithNoise}px`;
//         element.style.top = `${newYWithNoise}px`;
//         element.style.transform = `scale(${item.s})`;
//       }
//
//       return {
//         ...item,
//         noiseSeedX: newNoiseSeedX,
//         noiseSeedY: newNoiseSeedY,
//         x: newX < -500 ? CANVAS_WIDTH + 600: newX,
//         xWithNoise: newXWithNoise,
//         yWithNoise: newYWithNoise,
//       }
//     });
//
//     animationRef.current = requestAnimationFrame(animate);
//   }
//
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [bubblePositions, setBubblePositions] = useState([]);
//
//   const handleClick = (id: number) => {
//     if (activeIndex == null) {
//       setActiveIndex(id);
//
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//
//       // let contentOverlay = document.querySelector('.content-overlay');
//
//       // if (contentOverlay) {
//       //   contentOverlay.style.visibility = 'visible';
//       //   contentOverlay.style.opacity = 1;
//       // }
//
//       const bubbles = document.querySelectorAll('.bubble');
//       const images = document.querySelectorAll('.image-bubble');
//
//       images.forEach((image) => {
//         if (image.id.split(" ")[1] == id) {
//           gsap.to(image, {
//             top: '10%',
//             left: '80%',
//             transform: 'translate(-80%, -10%)',
//             duration: 0.75,
//             ease: "power1.inOut"
//           })
//         }
//         else {
//           const randomX = Math.random() < 0.5 ? -Math.abs(Math.random() * (2000 - 1000) + 1000) : Math.abs(Math.random() * (2000 - 1000) + 1000);
//           const randomY = Math.random() < 0.5 ? -Math.abs(Math.random() * (2000 - 1000) + 1000) : Math.abs(Math.random() * (2000 - 1000) + 1000);
//
//           gsap.to(image, {
//             left: `${randomX}px`,
//             top: `${randomY}px`,
//             ease: "power1.inOut",
//             duration: 1
//           })
//         }
//       })
//
//       bubbles.forEach((bubble: HTMLDivElement, i: number) => {
//         if (bubble.dataset.id == id) {
//           const textContainer = document.getElementById(`text-container-${id}`);
//           const itemTitle = document.getElementById(`item-title-${id}`);
//           const itemText = document.getElementById(`item-text-${id}`);
//           const associatedImage = document.getElementById(`associated-image ${id}`);
//
//           // textContainer.style.opacity = 0;
//           // textContainer.style.height = '80%';
//           // textContainer.style.width = '80%';
//
//           if (mobile) {
//             gsap.to(itemTitle, {
//               opacity: 0,
//               duration: 0.1,
//             })
//
//             gsap.to(bubble, {
//               borderRadius: '20px',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               height: '100dvh',
//               width: '100dvw',
//               padding: '20px',
//               textAlign: 'left',
//               ease: 'power1.inOut',
//               duration: 0.2,
//               delay: 0.1,
//             })
//
//             gsap.to(`#item-title-${bubble.id.split('-')[1]}`, {
//               fontSize: '1.8rem',
//               marginBottom: '10px',
//               opacity: 1,
//               delay: 0.3,
//             })
//
//             gsap.to(`#item-text-${bubble.id.split('-')[1]}`, {
//               display: 'block',
//               delay: 0.35,
//             })
//
//             gsap.to(`#item-text-${bubble.id.split('-')[1]}`, {
//               opacity: 1,
//               delay: 0.3,
//             })
//           }
//           else {
//             gsap.to(`#item-title-${bubble.id.split('-')[1]}`, {
//               opacity: 0,
//               duration: 0.1,
//             })
//
//             gsap.to(`#${bubble.id}`, {
//               height: '110dvh',
//               width: '110dvh',
//               duration: 0.2,
//               delay: 0.1,
//             })
//
//             gsap.to(`#${bubble.id}`, {
//               top: '0%',
//               left: '10%',
//               // transform: 'translate(-10%, -50%)',
//               padding: '0 100px',
//               textAlign: 'left',
//               ease: 'power1.inOut',
//               duration: 0.2,
//               delay: 0.3,
//             })
//
//             gsap.to(`#item-title-${bubble.id.split('-')[1]}`, {
//               fontSize: '1.8rem',
//               marginBottom: '10px',
//               opacity: 1,
//               delay: 1,
//             })
//
//             gsap.to(`#item-text-${bubble.id.split('-')[1]}`, {
//               display: 'block',
//               delay: 0.4,
//             })
//
//             gsap.to(`#item-text-${bubble.id.split('-')[1]}`, {
//               opacity: 1,
//               duration: 0.3,
//               delay: 1,
//             })
//           }
//           setTimeout(() => {
//             // textContainer.style.opacity = 1;
//             // textContainer.style.textAlign = 'right';
//             // textContainer.style.padding = '20px';
//             // itemTitle.style.marginBottom = '10px';
//             // itemTitle.style.fontSize = '1.8rem';
//             // itemText.style.display = 'block'
//             // itemText.style.opacity = '1';
//             // itemText.style.fontSize = '1.25rem';
//           }, 1500);
//         }
//         else {
//           const randomX = Math.random() < 0.5 ? -Math.abs(Math.random() * (2000 - 1000) + 1000) : Math.abs(Math.random() * (2000 - 1000) + 1000);
//           const randomY = Math.random() < 0.5 ? -Math.abs(Math.random() * (2000 - 1000) + 1000) : Math.abs(Math.random() * (2000 - 1000) + 1000);
//
//           gsap.to(bubble, {
//             left: `${randomX}px`,
//             top: `${randomY}px`,
//             ease: "power1.inOut",
//             duration: 1
//           })
//         }
//       })
//     }
//   }
//
//   const handleContainerClick = () => {
//     if (activeIndex !== null) {
//       let currentIndex = activeIndex;
//       console.log(currentIndex);
//       setActiveIndex(null);
//
//       const bubbles = document.querySelectorAll('.bubble');
//       const contentOverlay = document.querySelector('.content-overlay');
//
//       bubbles.forEach((bubble: HTMLDivElement, i: number) => {
//         const pos = positionsRef.current[i];
//         if (!pos) return;
//
//         if (bubble.id.includes(currentIndex.toString())) {
//
//           if (mobile) {
//             gsap.to(`#item-text-${currentIndex}`, {
//               opacity: 0,
//               duration: 0.1
//             })
//
//             gsap.to(`#item-text-${currentIndex}`, {
//               display: 'none',
//               duration: 0.2
//             })
//
//             gsap.to(`#item-title-${currentIndex}`, {
//               opacity: 0,
//               fontSize: '1.25rem',
//               duration: 0.1,
//             })
//
//             gsap.to(`#${bubble.id}`, {
//               borderRadius: '50%',
//               top: `${pos.top}px`,
//               left: `${pos.left}px`,
//               transform: 'translate(-50%, -50%)',
//               height: '250px',
//               width: '250px',
//               padding: '10px',
//               textAlign: 'center',
//               ease: 'power1.inOut',
//               duration: 0.2,
//               delay: 0.1,
//             })
//
//             gsap.to(`#item-title-${currentIndex}`, {
//               opacity: 1,
//               duration: 0.1,
//               delay: 0.5
//             })
//           }
//           else {
//             gsap.to(`#item-title-${currentIndex}`, {
//               opacity: 0,
//               duration: 0.1
//             })
//
//             gsap.to(`#item-text-${currentIndex}`, {
//               opacity: 0,
//               duration: 0.1
//             })
//
//             gsap.to(`#item-text-${currentIndex}`, {
//               display: 'none',
//               duration: 0.2
//             })
//
//             gsap.to(`#item-title-${currentIndex}`, {
//               opacity: 0,
//               fontSize: '1.25rem',
//               duration: 0.1,
//             })
//
//             gsap.to(`#${bubble.id}`, {
//               borderRadius: '50%',
//               top: `${pos.top}px`,
//               left: `${pos.left}px`,
//               transform: `translate(-${pos.left}px, -${pos.top}px)`,
//               height: '250px',
//               width: '250px',
//               padding: '10px',
//               textAlign: 'center',
//               ease: 'power1.inOut',
//               duration: 0.2,
//               delay: 0.1,
//             })
//
//             gsap.to(`#item-title-${currentIndex}`, {
//               opacity: 1,
//               duration: 0.1,
//               delay: 0.65
//             })
//           }
//         }
//
//         bubble.style.transition = `
//           height 1s,
//           width 1s,
//           top 2s cubic-bezier(0.25, 0.8, 0.25, 1),
//           left 2s cubic-bezier(0.25, 0.8, 0.25, 1),
//           transform 0.5s ease
//         `
//         bubble.style.left = `${pos.left}px`;
//         bubble.style.top = `${pos.top}px`;
//         bubble.style.height = '250px';
//         bubble.style.width = '250px';
//         bubble.classList.remove('active');
//
//         // setTimeout(() => {
//         //   bubble.style.transition = '';
//         // }, 4000);
//       });
//
//       animationRef.current = requestAnimationFrame(animate); // Resume animation if needed
//       return;
//     }
//   }
//
//   return (
//     <div className='interview-container' onClick={() => handleContainerClick()}>
//       <div className='interview-header' style={{ opacity: activeIndex !== null ? 0 : 1 }}>
//         <h1 className='interview-title'>In Conversation With Lisa Eldridge:</h1>
//         <h2 className='interview-subtitle'>Becoming A World Class Makeup Artist</h2>
//       </div>
//       {
//         article.map((item: any, index: number) => {
//
//           return (
//             <div
//               data-id={item.id}
//               className={item.question ? 'bubble' : 'image-bubble'}
//               id={item.question ? `item-${item.id}` : `associated-image ${item.questionId}`}
//               onClick={() => handleClick(item.id)}
//               style={{
//                 padding: item.src ? '0' : `${mobile ? '10px' : '20px'}`,
//                 overflow: 'hidden',
//               }}
//             >
//               {
//                 item.question ? (
//                   <>
//                     <h3 className='item-title' id={`item-title-${item.id}`}>{item.question}</h3>
//                     <p className='item-text' id={`item-text-${item.id}`}>{item.answer}</p>
//                   </>
//                 ) : (
//                   <Image
//                     src={item.src}
//                     alt={`image-${item.id}`}
//                   />
//                 )
//               }
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }
//
// export default LisaEldridge;
