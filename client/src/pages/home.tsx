import styles from './styles/home.module.scss';
import DialogsList from '../components/DialogsList/DialogsList';
import Message from '../components/Message/Message';

function Home() {
  return (
    <section className={styles['home']}>
      <DialogsList
        items={[
          {
            user: {
              avatar:
                'https://ru-static.z-dn.net/files/d3b/f593eaec9976bb45317692d04609f94f.jpg',
              fullname: 'Фёдор Достоевский',
              _id: Math.random(),
            },
            message: {
              text: 'Мы все свидетильствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
              created_at: 'Tue Aug 21 2022 16:04:27',
              unreaded: 0,
            },
            userId: 1,
          },
          {
            user: {
              avatar: null,
              fullname: 'Фёдор Достоевский',
              _id: Math.random(),
            },
            message: {
              text: 'Мы все свидетильствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
              created_at: 'Tue Aug 21 2022 16:04:27',
              unreaded: 0,
            },
            userId: 1,
          },
        ]}
      />

      <Message
        avatar='https://ru-static.z-dn.net/files/d5d/f71519847c439d7a1f96f9f9908ccaab.jpg'
        date='Mon Aug 15 2022 17:50:01'
        audio='https://srv5.y2mate.is/download?file=533a6a999482b3b61cc276dd96f710a5139003&token=7h8aJrHrSdboOLrRhp4Rxw&expires=1659919800388&s=ctEEemZnEIVbxJkIgT2_xQ'
      />

      {/* <Message
        avatar='https://ru-static.z-dn.net/files/d3b/f593eaec9976bb45317692d04609f94f.jpg'
        text='Hello Hello Hello'
        date='Mon Aug 15 2022 17:47:01'
      />
      <Message
        avatar='https://ru-static.z-dn.net/files/d5d/f71519847c439d7a1f96f9f9908ccaab.jpg'
        text='Hello Hello Hello'
        date='Mon Aug 15 2022 17:50:01'
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/random/100x100/?random=1?nature,water'
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/random/100x100/?random=2?nature,water'
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/random/100x100/?random=3?nature,water'
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/random/100x100/?random=4?nature,water'
          }
        ]}
        isMe={true}
        isReaded={true}
      />
      <Message
        avatar='https://ru-static.z-dn.net/files/d3b/f593eaec9976bb45317692d04609f94f.jpg'
        date='Mon Aug 15 2022 17:50:01'
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/random/100x100/?random=4?nature,water'
          }
        ]}
      />
      <Message
        avatar='https://ru-static.z-dn.net/files/d3b/f593eaec9976bb45317692d04609f94f.jpg'
        isTyping
      /> */}
    </section>
  );
}

export default Home;
