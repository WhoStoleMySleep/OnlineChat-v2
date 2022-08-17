import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import styles from './message.module.scss';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import readedIco from '../../assets/images/readed.png'
import noReadedIco from '../../assets/images/no-readed.png'

function Message(props:
  {
    avatar: string,
    user: {name: string, fullName: string},
    text: string,
    date: string,
    isMe?: boolean,
    isReaded?: boolean
  }): JSX.Element {
  const { avatar, text, date, user, isMe, isReaded } = props

  return (
    <div className={classNames(styles.message, {[styles['message_is-me']]: isMe})}>
      <div className={styles['message__content']}>
        {isMe && isReaded && (
          <img
            className={styles['message__icon-readed']}
            src={readedIco.src} alt="Checked icon"
          />
        )}
        <div className={styles['message__avatar']}>
          <img src={avatar} alt={`Avatar ${user.fullName}`} />
        </div>
        <div className={styles['message__info']}>
          <div className={styles['message__bubble']}>
            <p className={styles['message__text']}>{text}</p>
          </div>
          <span className={styles['message__date']}>
            {formatDistanceToNow(new Date(date), { addSuffix: true, locale: ruLocale })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Message;
