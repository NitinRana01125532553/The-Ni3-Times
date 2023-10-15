import Image from 'next/image'
import Link from 'next/link'
import { Search } from '../components/Search';
import { useEffect, useState } from 'react';
import Card from '@/components/card';
import {cache} from 'react';
import { redirect } from 'next/navigation';
import NavLink from '@/components/NavLink';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
const axios = require('axios');
const apiKey = process.env.API_KEY


const getHeadlines = cache(async () => {
  const res = await axios.get(`https://newsapi.org/v2/everything?q=everything&apiKey=${apiKey}`)
  return res.data.articles;
})

const Home = async() => {

  const articles = await getHeadlines();

  const categories: string[] = [
    "World",
    "Games",
    "Politics",
    "Sports",
    "Business",
    "Science",
    "Tech",
    "Art",
    "Travel",
  ];

    return (
    <div>
      {/* Heading */}
      <Heading heading='The Ni3 Times' />
      {/* navbar */}
        <Navbar categories={categories} />
      {/* Search */}
        <div className='w-full flex justify-center p-6'>
          <Search />
        </div>
      {/* Fancy grid */}
      <div></div>
      {/* All the articles rendered */}
      <div className='flex flex-row flex-wrap w-full justify-center gap-4'>
        {articles.map(article => article.urlToImage === null ? "" : <Card img={article.urlToImage} title={article.title} desc={article.Description} link={article.url}/>)}
      </div>
    </div>
  );
}

export default Home;