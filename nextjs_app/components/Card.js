import React from 'react'
import styles from './Card.module.css'
import Link from 'next/link'

export default function Card({ title, description, image, url, author, published ,content,source}) {
  return (
    <div className={styles.card}>
    <Link href={`./page?title=${title}&image=${image}&content=${content}&author=${author}&published=${published}&url=${url}&source=${source}`}>
      <div>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p className='author'>{author}</p>
        <p className='date'>{published}</p>
        <p>{description}</p>
        <p>{source}</p>
        </div>
      </Link>
      <Share url={url} />
    </div>
  )
}

function Share({ url }) {
  return (
    <button className={styles.share} onClick={() => { navigator.clipboard.writeText(url); }}>➦</button>
  )
}

export function Cards({ title, description, image, url, author, published,source}) {
  return (
    <div className={styles.card} onClick={() => {window.open(url)}}>

        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p className='author'>{author}</p>
        <p className='date'>{published}</p>
        <p>{description}</p>
    </div>
  )
}