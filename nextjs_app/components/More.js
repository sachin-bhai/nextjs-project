import { useRouter } from 'next/router';
import styles from './More.module.css';


export default function MorePage() {
  const router = useRouter();

  const title = router.query.title;
  const image = router.query.image;
  const content = router.query.content;
  const author = router.query.author;
  const published = router.query.published;
  const url =router.query.url;
  console.log(url);
  return (
    <div className={styles.more}>
      <h1 style={{
        fontFamily:'sans-serif',
        fontSize:'50px',
      }}>{title}</h1>
      <img src={image}></img>
      <p>{author}</p>
      <article style={{
        fontFamily:'sans-serif',
        fontSize:'30px'
      }}>{content}</article>
    <button style={{
      backgroundColor:'black',
      marginTop:'5px',
      color:'white',
    }} onClick={() => {window.open(url)}}>Read More</button>
    </div>
  )
}
