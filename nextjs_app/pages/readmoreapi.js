export async function moreNews({domain}) {
    // let domain='techcrunch.com'
    console.log(domain)
    let a='https://newsapi.org/v2/everything?domains=techcrunch.com';
    let b='&apiKey=2f28a53a00d44c9fa4ae7c1119bd1822';
    a=a.concat(b);
    console.log(a);
    const response=await fetch(a);
    const data =await response.json();
    return data.articles;
}
  