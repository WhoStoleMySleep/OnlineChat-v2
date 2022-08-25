import classNames from 'classnames';
import noReadedIco from '../../assets/images/no-readed.png';
import readedIco from '../../assets/images/readed.png';
import styles from './ReadedIcon.module.scss'

function ReadedIcon(props: {
  isMe?: boolean
  isReaded?: boolean
  className?: string
  }) {
  const { isMe, isReaded, className } = props

  return <>
    {isMe && (isReaded ? (
      <img
        className={classNames(styles['icon-readed'], className)}
        src={readedIco.src} alt="Readed icon"
      />
    ) : (
      <img
        className={classNames(styles['icon-readed_no'], className)}
        src={noReadedIco.src} alt="No readed icon"
      />
    ))}
  </>
}

export default ReadedIcon;
