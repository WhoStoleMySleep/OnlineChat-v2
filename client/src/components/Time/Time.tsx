import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

function Time(props: {
    date: string
  }) {
  const { date } = props

  return <>{formatDistanceToNow(new Date(date), { addSuffix: true, locale: ruLocale })}</>
}

export default Time;
