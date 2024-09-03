import React, { useState, useEffect } from 'react';
import { fetchHealthNews } from '../services/newsService';

const NewsList = ({ selectedCategory, onBookmark }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            const news = await fetchHealthNews(selectedCategory === 'All' ? '' : selectedCategory);
            setArticles(news);
        };
        loadNews();
    }, [selectedCategory]);

    return (
        <div className="p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                    <p className="text-gray-700 mb-4">{article.description}</p>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Read more
                    </a>
                    <button
                        onClick={() => onBookmark(article)}
                        className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Bookmark
                    </button>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
