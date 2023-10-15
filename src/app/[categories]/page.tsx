import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { cache } from 'react'
import { Search } from '../../components/Search';
import Card from '@/components/card';
import { RecoilRoot } from 'recoil';

const getNews = async (param: string) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${param}&apikey=${process.env.API_KEY}`, {next: {revalidate: 3600}})
    const news = await res.json();
    console.log(news);
    return news.articles;
  } 

const page = async ({params}: {params: {categories: string}}) => {

  const param: string = decodeURI(params.categories);

  // all the different sub categories for user's chosen category 
    const Sports: string[] = [
    "Football",
    "Cricket",
    "F1",
    "Kabaddi",
    "Basketball",
    "Volleyball"
  ]

  const Tech: string[] = [
    "Artificial Intelligence",
    "Internet",
    "Culture",
    "Space",
    "Tech",
  ];
  const World: string[] = [
    "War in Ukraine",
    "Africa",
    "India",
    "Americas",
    "Australia",
    "Europe",
    "Middle East", 
  ];

  const Politics: string[] = [
    "Elections",
    "Democrcy",
    "Lok Sabha",
    "Supreme Court",
    "Modi Administration",
  ];

  const Business: string[] = [
    "Ambani & Adani",
    "Market",
    "New Policies",
    "Real Estate",
    "Finance",
    "Energy",
    "Retail",
  ];

  const Science: string[] = [
    "Space",
    "Health",
    "Climate",
    "Covid",
    "Computers",
    "New Research",
    "Chemistry",
    "Mind",
    "Nature"
  ];

  const Art: string[] = [
    "Dance",
    "Music",
    "Movie",
    "Theater",
  ];

  const Travel: string[] = [
    "Places to Visit",
    "Ships",
    "Planes",
  ];

  const Games: string[] = [
    "New Releases",
    "MMO",
    "Moba World",
    "FPS",
    "AAA",
    "GPU"
  ];

  const news = await getNews(param);

  // the final category to be rendered
  let renderCategory: string[] = [];

  if (param === "Sports") {
    renderCategory = Sports;
  } else if (param === "Tech") {
    renderCategory = Tech;
  } else if (param === "World") {
    renderCategory = World;
  } else if (param === "Politics") {
    renderCategory = Politics;
  } else if (param === "Business") {
    renderCategory = Business;
  } else if (param === "Science") {
    renderCategory = Science;
  } else if (param === "Art") {
    renderCategory = Art;
  } else if (param === "Travel") {
    renderCategory = Travel;
  } else if (param === "Games") {
    renderCategory = Games;
  }

  
  
  return (
    <div className="p-4">
      {/* Home Page */}
      <Link
        href="/"
        className="w-full flex flex-row justify-center text-center"
      >
        <h2 className="font-bold text-2xl font-nitin">The Ni3 Times</h2>
      </Link>
      {/* Heading */}
      <div>
        <Heading heading={param} />
      </div>
      {/* Navbar categories */}
      <div>
        <Navbar categories={renderCategory} />
      </div>
      {/* Search */}
      <div className="w-full flex justify-center p-6">
        <Search />
      </div>
      {/* the news */}
      <div className='flex flex-row flex-wrap w-full justify-center gap-4'>
        {news.map((article: any, b: any) => article.urlToImage === null ? "" : <Card key={b} img={article.urlToImage} title={article.title} desc={article.Description} link={article.url} />)}
      </div>
    </div>
  );
}

export default page