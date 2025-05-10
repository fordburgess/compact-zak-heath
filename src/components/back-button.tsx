"use client"
import React from 'react';
import './styles/back-button.css'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    'adam-reed', 'alessandra-steinherr', 'carolyn-aronson', 'ingeborg-van-lotringen', 'kirsty-lewis', 'millie-kendall',
    'mona-kattan', 'nikki-lilly', 'tilly-sanders', 'diary-of-an-influencer', 'beauty-is-for-everyone'
  ]

  const handleBack = () => {
    if (document.referrer) {
      router.back();
    }
    else {
      router.push('/');
    }
  }

  if (routes.some(route => pathname.includes(route))) {
    return (
      <button className='article-back-button' onClick={() => handleBack()}><p>Back</p></button>
    )
  }

}

export default BackButton
