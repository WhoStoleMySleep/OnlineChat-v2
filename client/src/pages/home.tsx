// import './Index.scss';
import Message from '../components/Message/Message';

function Home() {
  return (
    <section className='home'>
      <Message
        avatar="https://ru-static.z-dn.net/files/d3b/f593eaec9976bb45317692d04609f94f.jpg"
        user={{ name: 'Степан', fullName: 'Степаныч' }}
        text="Hello Hello Hello"
        date="Mon Aug 15 2022 17:47:01"
      />
      <Message
        avatar="https://ru-static.z-dn.net/files/d5d/f71519847c439d7a1f96f9f9908ccaab.jpg"
        user={{ name: 'Владимир', fullName: 'Владимирович' }}
        text="Hello Hello Hello"
        date="Mon Aug 15 2022 17:50:01"
        isMe={true}
        isReaded={true}
      />
    </section>
  );
}

export default Home;
