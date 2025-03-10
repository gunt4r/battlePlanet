import { useRef, useState} from 'react'
import ReactPlayer from 'react-player'
import { FaPlay, FaPause } from 'react-icons/fa'
import styles from './styleVideoCard.module.scss'

export default function VideoCard() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [played, setPlayed] = useState(0)
  const playerRef = useRef(null)
  const handleProgress = (state) => {
    if(state.played == 1) {
      playerRef.playedSeconds = 0
      playerRef.played == 0
    }
    setPlayed(state.played)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={styles.videoCard}>
      <ReactPlayer
        ref={playerRef}
        url="https://www.w3schools.com/html/mov_bbb.mp4"
        playing={isPlaying}
        onProgress={handleProgress}
        controls={false}
        width="100%"
        height="100%"
        
      />
      <button className={styles.centerButton} onClick={togglePlayPause}>
        {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
      </button>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${played * 100}%` }} />
      </div>
    </div>
  )
}