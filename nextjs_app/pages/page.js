import MorePage from '../components/More';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { moreNews } from './readmoreapi';
import { Cards } from '../components/Card';
export default function Page(){
    const router = useRouter();
    const source= router.query.source;
    console.log('ye hai ',source);


    const [articles, setArticles] = useState([]);


    useEffect(() => {
        async function fetchData() {
        const data = await moreNews(source);
        setArticles(data);
        console.log(data);
        }
        fetchData();
    }, [source]);

    return (
        <div style={{
        backgroundColor:'#030202',
        marginTop:'0px',
        marginLeft:'0px',
        // position:'absolute',
        }}>
        <div>
            <MorePage/>
        </div>

        <div style={{
            color:'white',
            marginLeft:'30%',
            fontFamily:'sans-serif',
            fontSize:'60px'
        }}>Related news from {source}</div>
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
                <Cards
                key={article.url}
                title={article.title}
                description={article.description}
                image={article.urlToImage}
                url={article.url}
                published={article.publishedAt}
                author={article.author}
                content={article.content}
                source={article.source.id}
                />
            </div>
            ))}
        </div>
        </div>
    );
}

