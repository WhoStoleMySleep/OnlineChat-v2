import classNames from 'classnames';
import React from 'react';
import ReadedIcon from '../ReadedIcon/ReadedIcon';
import Time from '../Time/Time';
import styles from './message.module.scss';

function Message(props:
  {
    avatar: string,
    text?: string,
    date?: string,
    isMe?: boolean,
    isReaded?: boolean,
    attachments?: { filename: string; url: string; }[],
    isTyping?: boolean
  }): JSX.Element {
  const {
    avatar,
    text,
    date,
    isMe,
    isReaded,
    attachments,
    isTyping
  } = props

  return (
    <div className={
      classNames(
        styles.message,
        {
          [styles['message_is-me']]: isMe,
          [styles['message_is-typing']]: isTyping,
          [styles['message_single-image']]: attachments?.length === 1
        })
    }>
      <div className={styles['message__content']}>
        <div className={styles['message__avatar']}>
          <img src={avatar} alt='Avatar' />
        </div>
        <div className={styles['message__info']}>
          {attachments && 
            <div className={styles['message__attachments']}>
              {
                attachments.map(item => (
                  <div className={styles['message__attachments-item']}>
                    <img src={item.url} alt={item.filename} />
                  </div>
                ))
              }
            </div>
          }
          <div>
            {(text || isTyping) &&
              <div className={styles['message__bubble']}>
                {text && 
                  <p className={styles['message__text']}>{text}</p>
                }
                {isTyping && 
                  <div className={styles['message__typing']}>
                    <span />
                    <span />
                    <span />
                  </div>
                }
                <ReadedIcon
                  isMe={isMe}
                  isReaded={isReaded}
                  className={
                    classNames({
                      [styles['message__readed']]: isReaded,
                      [styles['message__readed_no']]: !isReaded,
                    })
                  }
                />
              </div>
            }
            {date &&
              <span className={styles['message__date']}>
                <Time date={date} />
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;
