import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const Homepage = () => {
    const [newsByCategory, setNewsByCategory] = useState({ latest: [], technology: [], sports: [], entertainment: [] });
    const apiurl = "https://newsapi.org/v2/top-headlines?apiKey=d509f30fd8304210b20ffc40e5464b21&country=in";

    const fetchNewsByCategory = (category) => {
        axios.get(apiurl + (category != "latest" ? `&category=${category}` : ''))
            .then(response => {
                setNewsByCategory(prevState => ({
                    ...prevState,
                    [category]: response.data.articles
                }));
            }).catch(error => {
                console.error('Error fetching news:', error);
            });
    };

    useEffect(() => {
        fetchNewsByCategory('latest');
        fetchNewsByCategory('technology');
        fetchNewsByCategory('sports');
        fetchNewsByCategory('entertainment');
    }, []);

    const categories = [
        { title: newsByCategory.latest, slug: "latest-news" },
        { title: newsByCategory.technology, slug: "technology-news" },
        { title: newsByCategory.sports, slug: "sports-news" },
        { title: newsByCategory.entertainment, slug: "entertainment-news" },
    ];

    return (
        <div className="container mx-auto px-3 sm:px-0 mb-10 mt-[90px]">
            {categories.map((category, index) => (
                <section className={`${category.slug} mb-20`} key={index}>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-medium">{category.slug.split('-')[0].toUpperCase()} NEWS</h1>
                        <Link className="text-blue-400" to={category.slug}>Read More <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-2">
                        {category.title.slice(0, 8).filter(list => list.title !== "[Removed]").map((list, key) => (
                            <a className="flex flex-col bg-white cursor-pointer rounded-lg shadow-xl" href={list.url} target='_blank' key={key}>
                                <img className="h-[200px] w-full object-cover object-center" src={list.urlToImage || "https://st.depositphotos.com/1031343/59343/v/450/depositphotos_593439526-stock-illustration-breaking-news-banner-blue-background.jpg"} alt="news" />
                                <div className="flex-1 px-3">
                                    <div className="h-full flex flex-col">
                                        <p className="text-sm text-gray-400 py-3"><i className="fa-solid fa-user-pen mr-2"></i> {list.author || "Unknown Author"}</p>
                                        <p className="font-medium pb-3">{list.title}</p>
                                        <p className="text-sm text-gray-400 pb-4 mt-auto"><i className="fa-regular fa-calendar-days mr-2"></i> {moment(list.publishedAt).format('llll')}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Homepage