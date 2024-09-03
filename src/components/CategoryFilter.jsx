import React from 'react';

const categories = ['All', 'Nutrition', 'Fitness', 'Mental Health', 'Medicine'];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
    return (
        <div className="flex justify-center space-x-4 p-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`py-2 px-4 rounded ${
                        selectedCategory === category
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-300'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
