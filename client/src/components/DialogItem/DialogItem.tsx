import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import React from 'react';
import ReadedIcon from '../ReadedIcon/ReadedIcon';
import Time from '../Time/Time';
import styles from './DialogItem.module.scss';

function DialogsItem(
  props: {
    user: {
      avatar?: string | null;
      fullname: string;
      isOnline?: boolean;
    },
    message: {
      text: string
      isReaded: boolean
      created_at: string
      unreaded: number
    },
    isMe: boolean
  } 
) {
  const { user, message, isMe } = props

  const getMessageTime = (created_at: string) => {
    if (isToday(new Date(created_at))) {
      return format(
        new Date(created_at),
        'HH:mm'
      )
    } else {
      return format(
        new Date(created_at),
        'dd.MM.yyyy'
      )
    }
  }

  return (
    <div className={classNames(styles['dialogs-item'], {
      [styles['dialogs-item_online']]: user.isOnline
    })}>
      <div className={classNames(styles['dialogs-item__avatar-container'], {
        [styles['dialogs-item__avatar-container_no-img']]: !user.avatar
      })}>
        {user.avatar ? (
          <img src={user.avatar} alt={`${user.fullname} avatar`} className={styles['dialogs-item__avatar']} />
        ) : (
          <p>{user.fullname[0]}</p>
        )}
      </div>
      <div className={styles['dialogs-item__info']}>
        <div className={styles['dialogs-item__top']}>
          <b className={styles['dialogs-item__name']}>
            {user.fullname}
          </b>
          <span className={styles['dialogs-item__date']}>
            {getMessageTime(message.created_at)}
          </span>
        </div>
        <div className={styles['dialogs-item__bottom']}>
          <p className={styles['dialogs-item__text']}>{message.text}</p>
          {isMe && (
            <ReadedIcon
              isMe={true}
              isReaded={message.isReaded}
              className={
                classNames({
                  [styles['dialogs-item__readed']]: message.isReaded,
                  [styles['dialogs-item__readed_no']]: !message.isReaded,
                })
              }
            />
          )}
          {!!message.unreaded && (
            <div
              className={
                classNames(
                  styles['dialogs-item__count'],
                  {
                    [styles['dialogs-item__count_infinite']]: message.unreaded > 99
                  }
                )
              }
            >
              {message.unreaded > 99 ? '∞' : message.unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DialogsItem;
