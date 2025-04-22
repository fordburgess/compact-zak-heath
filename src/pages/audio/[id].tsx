import { useRouter } from "next/router";


const AudioEpisode = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Audio Episode
      <p>{id}</p>
    </div>
  )
}

export default AudioEpisode;
