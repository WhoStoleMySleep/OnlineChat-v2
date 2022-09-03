import classNames from 'classnames';
import React, {useRef, useState} from 'react';
import ReadedIcon from '../ReadedIcon/ReadedIcon';
import Time from '../Time/Time';
import styles from './message.module.scss';
import wave from '../../assets/images/wave.png'
import play from '../../assets/images/play.png'
import pause from '../../assets/images/pause.png'

function Message(props: {
  avatar: string;
  text?: string;
  date?: string;
  isMe?: boolean;
  isReaded?: boolean;
  attachments?: { filename: string; url: string }[];
  isTyping?: boolean;
  audio?: string;
}): JSX.Element {
  const {
    avatar, text, date,
    isMe, isReaded, attachments,
    isTyping, audio
  } = props;
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [lineInterval, setLineInterval] = useState<any>();
  const audioElement = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const findAll =
      !!audioElement.current
      && !!audioElement.current.pause
      && !!audioElement.current.volume
      && !!audioElement.current.play
    
    if (findAll) {
      setIsPlaying(prev => !prev)
  
      if (isPlaying) {
        audioElement.current.pause()
      } else {
        audioElement.current.volume = 0.35
        audioElement.current?.play()
      }
    }
  }

  const onPlay = (event: any) => {
    const duration = event.target.duration;

    const interval = setInterval(() => {
      const currentTime = event.target.currentTime;
      const calcPercentage = (currentTime / duration) * 100
      const progress: HTMLDivElement | null = document.querySelector(`.${styles['message__audio-progress']}`)
      const durationElement: HTMLDivElement | null = document.querySelector(`.${styles['message__audio-duration']}`)

      const time = (seconds: number) => {
        const minute = `${Math.floor(seconds / 60)}`
        const second = `${Math.floor(seconds - +minute * 60)}`

        const minutesAndSeconds = [
          minute.length > 1 ? minute : `0${minute}`,
          second.length > 1 ? second : `0${second}`,
        ]

        return minutesAndSeconds.join(':')
      }

      if (progress && durationElement) {
        progress.style.width = `${calcPercentage}%`
        durationElement.innerHTML = `${time(currentTime)}`
      }
    }, 500);

    setLineInterval(interval)
  }

  const onPause = () => {
    setIsPlaying(false)
    clearInterval(lineInterval)
  }

  const onEnded = () => {
    setIsPlaying(false)
    clearInterval(lineInterval)
  } 

  return (
    <div
      className={classNames(styles.message, {
        [styles['message_is-me']]: isMe,
        [styles['message_is-typing']]: isTyping,
        [styles['message_single-image']]: attachments?.length === 1,
        [styles['message_audio']]: audio,
      })}
    >
      <div className={styles['message__content']}>
        <div className={styles['message__avatar']}>
          <img src={avatar} alt="Avatar" />
        </div>
        <div className={styles['message__info']}>
          {attachments && (
            <div className={styles['message__attachments']}>
              {attachments.map((item) => (
                <div className={styles['message__attachments-item']}>
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}
          <div>
            {(text || isTyping || audio) && (
              <div className={styles['message__bubble']}>
                {text && <p className={styles['message__text']}>{text}</p>}
                {isTyping && (
                  <div className={styles['message__typing']}>
                    <span />
                    <span />
                    <span />
                  </div>
                )}
                {audio && (
                  <div className={styles['message__audio']}>
                    <audio ref={audioElement} onPlay={onPlay} onPause={onPause} onEnded={onEnded} src={audio} />
                    <div className={styles['message__audio-progress']} />
                    <div className={styles['message__audio-info']}>
                      <div className={styles['message__audio-button']}>
                        <button onClick={togglePlay}>
                          <img src={isPlaying ? pause.src : play.src} alt={isPlaying ? 'Pause' : 'Play'} />
                        </button>
                      </div>
                      <div className={styles['message__audio-wave']}>
                        <img src={wave.src} alt="Wave" />
                        <img src={wave.src} alt="Wave" />
                      </div>
                      <span className={styles['message__audio-duration']}>
                        00:19
                      </span>
                    </div>
                  </div>
                )}
                <ReadedIcon
                  isMe={isMe}
                  isReaded={isReaded}
                  className={classNames({
                    [styles['message__readed']]: isReaded,
                    [styles['message__readed_no']]: !isReaded,
                  })}
                />
              </div>
            )}
            {date && (
              <span className={styles['message__date']}>
                <Time date={date} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
