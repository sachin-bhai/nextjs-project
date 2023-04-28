import { useState } from "react";

export async function moreNews(domain) {
    // let domain='techcrunch.com'
    console.log("bruh",domain)
    domain=domain.toLowerCase();
    if(domain.includes('.com')==true){
        domain=domain;
    }else{
        domain=domain.concat('.com');
    }
    let a='https://newsapi.org/v2/everything?domains=';
    a=a.concat(domain);
    let b='&apiKey=2f28a53a00d44c9fa4ae7c1119bd1822';
    a=a.concat(b);
    console.log(a);
    const response=await fetch(a);
    const data =await response.json();
    return data.articles;
}
  