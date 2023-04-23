import Card from '../components/Card.js';
import { useEffect, useState } from 'react';
import { getNews } from './api.js';
import SearchBar from '../components/Search.js';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [sortpara, setSortpara] = useState('');
  const [query,setQuery] =useState('cyber%20security')


  useEffect(() => {
    async function fetchData() {
      const data = await getNews(query,sortpara);
      setArticles(data);
      console.log(data);
    }
    fetchData();
  }, [query,sortpara]);

  return (
    <div style={{
      backgroundColor:'#030202',
      marginTop:'0px',
      marginLeft:'0px',
      // position:'absolute',
    }}>
      <div style={{
        textAlign:"center",
        marginTop:'10px',
      }}>
      <h1 style={{
        color:'blue',
      }}>LATEST NEWS ON CYBERSECURITY</h1></div>
      <div>
        <SearchBar query={query} onQueryChange={setQuery}/>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "100px",
          marginBottom: "100px",
          marginLeft:"15%",
        }}
      >
        <button
          style={{
            height: "40px",
            width: "300px",
            font: "message-box",
            fontSize:"30px",
            borderRadius: "10px",
            backgroundColor:"#0a63db",
            border:"5px solid #1b1b1b",
            fontFamily:'Times New Roman, Times, serif',
          }}
          onClick={() => setSortpara("relevancy")}
        >RELEVANCY</button>
        <button
          style={{
            height: "40px",
            width: "300px",
            fontSize:"30px",
            font: "message-box",
            borderRadius: "10px",
            backgroundColor:"#0a63db",
            border:"5px solid #1b1b1b",
            fontFamily:'Times New Roman, Times, serif',
          }}
          onClick={() => setSortpara("publishedAt")}
        >PUBLISHING </button>
        <button
          style={{
            height: "40px",
            width: "300px",
            font: "icon",
            fontSize:"30px",
            borderRadius: "10px",
            backgroundColor:"#0a63db",
            border:"5px solid #1b1b1b",
            fontFamily:'Times New Roman, Times, serif',
          }}
          onClick={() => setSortpara("popularity")}
        >POPULARITY</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "180px",
          maxWidth: "1200px",
          marginLeft: "100px",
        }}
      >
        {articles.map((article) => (
          <div className="row">
            <Card
              key={article.url}
              title={article.title}
              description={article.description}
              image={article.urlToImage}
              url={article.url}
              published={article.publishedAt}
              author={article.author}
              content={article.content}
              source={article.source.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}









