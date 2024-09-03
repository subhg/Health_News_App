import React from 'react';

const BookmarkedArticles = ({ bookmarks }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Bookmarked Articles</h2>
            {bookmarks.length === 0 ? (
                <p className="text-gray-500">No bookmarks yet.</p>
            ) : (
                bookmarks.map((article, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-4">
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
                    </div>
                ))
            )}
        </div>
    );
};

export default BookmarkedArticles;
