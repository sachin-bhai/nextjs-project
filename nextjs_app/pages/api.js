export async function getNews(query,sortBy) {
  let random=query.split(" ").join("%20")
  console.log(random)
  // let a='https://newsapi.org/v2/everything?q=cyber%20security&sortBy=';
  let a='https://newsapi.org/v2/everything?q='
  let b=a.concat(random);
  let c='&sortBy='
  let d='&apiKey=2f28a53a00d44c9fa4ae7c1119bd1822';
  b=b.concat(c);
  b=b.concat(sortBy);
  b=b.concat(d)
  console.log(b);
  const response = await fetch(b);
  const data = await response.json();
  return data.articles;
}

