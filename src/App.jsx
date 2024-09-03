import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsList from './components/NewsList';
import BookmarkedArticles from './components/BookmarkedArticles';
import CategoryFilter from './components/CategoryFilter';


const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [bookmarks, setBookmarks] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleBookmark = (article) => {
        setBookmarks((prevBookmarks) => [...prevBookmarks, article]);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
            <NewsList selectedCategory={selectedCategory} onBookmark={handleBookmark} />
            <BookmarkedArticles bookmarks={bookmarks} />
            <Footer />
        </div>
    );
};

export default App;
