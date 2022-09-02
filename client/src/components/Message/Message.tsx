import classNames from 'classnames';
import React, {useEffect, useRef, useState} from 'react';
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
  const audioElement = useRef({
      play: () => { },
      pause: () => { },
      volume: ''
  });

  const togglePlay = () => {
    setIsPlaying(prev => !prev)

    if (isPlaying) {
      audioElement.current.pause()
    } else {
      audioElement.current.volume = '0.35'
      audioElement.current.play()
    }
  }

  const handlePlay = () => {
    
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
                    <audio onPlay={handlePlay} ref={audioElement} src={audio} />
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
