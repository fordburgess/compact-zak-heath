import Link from 'next/link';

const Audio = () => {
  return (
    <div>
      Audio Page
      <div>
        <Link href='/audio/patricia-bright'>
          Patricia Bright
        </Link>
        <Link href='/audio/shakeel-murtazza'>
          Shakeel Murtazza
        </Link>
      </div>
    </div>
  )
}

export default Audio;
