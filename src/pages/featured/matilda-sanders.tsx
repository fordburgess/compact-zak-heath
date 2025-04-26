import React from 'react';
import Image from 'next/image';
import SpringExpanded from '../../assets/images/spring-expanded.jpg';
import MillieKendallProfile from '../../assets/images/millie-kendall-profile.webp';
import './article.css';

const MatildaSanders = () => {
  return (
    <div className='featured-article-container'>
      <Image src={SpringExpanded} className='featured-article-bg' alt='featured-article-bg'/>
      <div className='featured-article-content'>
        <div className='featured-title-section'>
          <Image src={MillieKendallProfile} className='title-image' alt='kirsty-lewis-profile' />
          <h1 className='featured-title-quote'>"It Looks Glamorous, But It's Hard Work"</h1>
          <div className='title-divider'></div>
          <h2 className='featured-subtitle'>Matilda Sanders: Beauty PR</h2>
          <p className='featured-blurb'>Matilda Sanders is one of the youngest beauty PRs, having started at 20. Now 23, she has mastered what it takes to create successful brand activations and global influencer trips. Still, in this COMPACT conversation, she opens up about what it really means to balance adulthood and building a career.</p>
        </div>
        <div className='featured-article-text-section'>
          <p className='featured-article-paragraph'>When Matilda Sanders tells people her age, the reaction is almost always the same - surprise. At just 23 years old, she is known for creating some of the most exciting events and trips in the beauty industry, working at Space NK, one of the UK's leading beauty retailers. "People usually guess I'm older, like 28 or 29", she laughs. "I think I carry myself quite maturely". In an industry where most people get their start after university, Matilda's began in Hertfordshire, UK, working in Jack Wills, to landing a job at Space NK at 20. She has now helped to strategise activations for the largest beauty brands in the world like Selena Gomez' brand Rare Beauty.</p>
          <p className='featured-article-subheader'>A Beauty Girl From the Beginning</p>
          <p className='featured-article-paragraph'>I've always been around beauty. My aunt was a beautician, and my mum trained as one, too. They weren't necessarily glamorous by today's standards, but as a child, I idolised them and thought they were the most glamorous women in the world. I always played around with their makeup, but my first real product was Maybelline's Dream Matte Mousse. It had been in my mum's drawer for years, but it was my holy grail. I even remember wearing clear mascara to school just to feel like I had something on. I've always been a girly girl and couldn't wait to be old enough to put all the makeup on.</p>
          <p className='featured-article-subheader'>A Different Path</p>
          <p className='featured-article-paragraph'>School was fine - not amazing, not terrible. I didn't love the environment, and I couldn't wait to get out. Most of my friends went off to uni, but I knew that early on, it wasn't for me. I didn't want to spend three more years in another version of school, so I went to the Fashion Retail Academy (FRA) and studied everything from marketing to retail strategy. It was practical and fun, and I could earn money whilst learning and living at home. Everyone was going to Nottingham Trent or Manchester, but that felt like three years of being stuck somewhere I didn't want to be.</p>
          <p className='featured-article-subheader'>"I Started On The Shop Floor"</p>
          <p className='featured-article-paragraph'>I started at my local Space NK on the shop floor when I was 17 after being made redundant from a supervisor role at Jack Wills. I loved working in the store, and it completely deepened my love for beauty; this experience became a huge asset when I applied for a PR job at Space NK.</p>
          <p className='featured-article-paragraph'>I was 20, and there were over a thousand applicants on LinkedIn. I didn't think I'd stand a chance; however, I already knew about all of the beauty products from working on the shop floor. I told my boss, Ginny Sanassy (Head of PR at Space NK), that I'd never done a PR job like this before, but I wanted to learn, and Ginny could see that. I hadn't been moulded by other teams, and I could bring something fresh.</p>
          <p className='featured-article-subheader'>Inside Her Day Job: Brand Launches and Adele</p>
          <p className='featured-article-paragraph'>No two days are the same, especially looking after over 100 brands stocked in our stores. Whether I'm in the office or not, everything has a quick turnover, so we'll have a full day of meetings planned, and if only one thing changes, then the entire day is rewritten. We work across too many teams, not just PR. It's the product launches, brand strategies, events, influencer and press relationships. Some months, we'll plan six events at once, and we juggle a lot for a small team, but we're creating activations around huge global campaigns. My favourite was a trip to New York with Rare Beauty; however, seeing Adele live as a part of a brand trip to Las Vegas was insane. Truly wild. However, Ginny has an in with her PR team, so we planned the trip around her concert dates, and it was one of those once-in-a-lifetime moments.</p>
          <p className='featured-article-paragraph'>Trips are fun, but there's a reason behind them, whether that be education around the product launch or photo opportunities for the creators. Let's just say that I was shocked, though, when I first heard how much events and trips can cost. Just the flowers for the events alone can be thousands, but there are also production costs, venue costs, and gifting—it all adds up, but it's an investment for the brand.</p>
          <p className='featured-article-subheader'>What Really Goes On Behind The Events</p>
          <p className='featured-article-paragraph'>We're constantly shifting between the heritage brands and emerging indie brands. Luxury skincare brands often still work in very traditional ways - they're all about print and press, but this type of media coverage doesn't always translate to the consumer anymore.</p>
          <p className='featured-article-paragraph'>To navigate this, we suggest and create intimate dinners with a brand so influencers and journalists can attend. Sometimes, we turn these events around in a week, which isn't ideal. The ideal timeframe for an event is two months, but that never actually happens.</p>
          <p className='featured-article-paragraph'>When it comes to creators, I don't want them to feel forced to make content because that's where you lose authenticity, so if the experience that we create is good, then they'll organically post anyway. We usually invite 60 to 100 people for a large event; however, something more intimate is around 10-20 people.</p>
          <p className='featured-article-subheader'>Keeping Real</p>
          <p className='featured-article-paragraph'>It is hard, though, when your job becomes your whole identity. People assume I'm out for dinner every night, but the reality is long hours and pressure. Many friends, family, and even people I bump into want to talk about my job, which can feel too intense sometimes, especially when the workload is busy. It means it's all I can think about because I'm constantly trying to keep brands, internal teams, creators and myself happy. It's exhausting.</p>
          <p className='featured-article-paragraph'>I know how lucky I am to be in this position, so I'm grateful for this workload, but sometimes, I wish I could separate my work life from my personal life.</p>
          <p className='featured-article-subheader'>Being Young in PR</p>
          <p className='featured-article-paragraph'>I really had to prove myself at first, and I still do sometimes, but I didn't want people to think I was too young or incapable. I'm happy with my role, so I don't have a 5-year plan as I'm not somebody who maps everything out.</p>
          <p className='featured-article-paragraph'>I know I'll always be in beauty, but whether that's still PR or doing something completely different, we'll see. However, I'd love to create something for myself someday but I don't want to jinx it. I get really disappointed if something doesn't go my way, so I prefer to go into something blind and then just have the opportunities come to me. As long as you're open to it, these opportunities will come.</p>
          <p className='featured-article-subheader'>Where Beauty PR Is Going</p>
          <p className='featured-article-paragraph'>Beauty PR is definitely shifting, and I've seen a major shift over the past couple of years as creators and influencers play a much bigger role than traditional media. Our trips are now 90% focused on influencers, but I don't want to plan things that make me feel like I'm ticking a box.</p>
          <p className='featured-article-paragraph'>Events and partnerships need to feel authentic because when they don't, they lose their soul, and I want to create experiences which actually mean something. This is a people industry; if you're not building relationships - whether that's with creators, brands or your team, then nothing will align, and the activation won't work.</p>
          <p className='featured-article-paragraph'>The beauty industry is full of creative, lovely, and warm people and isn't stuffy compared to other industries. I think we're really lucky to have that.</p>
          <p className='featured-article-subheader'>Thoughts For Anyone Wanting To Break Into The Industry</p>
          <p className='featured-article-paragraph'>Use your age as an advantage. Bring new and fresh ideas, stay up to date in the industry, network with people who you can learn from and who can help you strategise, and just start, even if that means starting on the shop floor. It worked for me. Message the people who work for the company you want to work for, and if you're really determined to get into beauty, then you will do it.</p>
        </div>
      </div>
    </div>
  )
}

export default MatildaSanders
