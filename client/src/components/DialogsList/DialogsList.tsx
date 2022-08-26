import React from 'react';
import DialogItem from '../DialogItem/DialogItem';
import styles from './DialogsList.module.scss';
import orderBy from 'lodash/orderBy'

function DialogsList(
  props: {
    items: any
  } 
) {
  const { items } = props

  return (
    <div className="dialogs">
      {orderBy(items, ['message.created_at'], ['desc']).map((item: any) => (
        <DialogItem
          key={item.user._id}
          user={item.user}
          message={item.message}
          isMe={item.user._id === item.userId}
        />
      ))}
    </div>
  )
}

export default DialogsList;
