// PortfolioGallery.jsx
import React, { useState } from 'react';
import italian1 from './italian1.jpeg';
import italian2 from './italian2.jpeg';
import italian3 from './italian3.jpeg';
import american1 from './american1.jpeg';
import american2 from './american2.jpeg';
import american3 from './american3.jpeg';
import japan1 from './japan1.jpeg';
import japan2 from './japan2.jpeg';
import japan3 from './japan3.jpeg';
import mexican1 from './mexican1.jpeg';
import mexican2 from './mexican2.jpeg';
import mexican3 from './mexican3.jpeg';
import wine1 from './wine1.jpeg';
import wine2 from './wine2.jpeg';
import wine3 from './wine3.jpeg';
import './imagegallery.css';

const ImageGallery = () => {
  const [filter, setFilter] = useState('all');

  const images = [
    { category: 'Italian Cuisine', src: italian1, alt: 'Spaghetti', title: 'Spaghetti', description: 'Long, thin pasta strands made from wheat, typically served with various sauces, such as tomato or meat sauce, and often garnished with grated cheese.' },
    { category: 'Italian Cuisine', src: italian2, alt: 'Bread', title: 'Bread', description: 'Crusty Italian bread, airy inside, a versatile staple in Italian cuisine.' },
    { category: 'Italian Cuisine', src: italian3, alt: 'Meat Ball', title: 'Meat Ball', description: 'Italian meatballs: Savory, seasoned ground meat balls served with pasta and tomato sauce.' },
    { category: 'American Cuisine', src: american1, alt: 'Salad', title: 'Salad', description: 'Fresh mixed greens tossed with vibrant cherry tomatoes, crisp cucumber slices, and tangy vinaigrette.' },
    { category: 'American Cuisine', src: american2, alt: 'Rice', title: 'Rice', description: 'Rice is a vital, versatile grain, a global staple known for its rich carbohydrate content and widespread consumption.' },
    { category: 'American Cuisine', src: american3, alt: 'Dissert', title: 'Dissert', description: 'A dissertation is a detailed academic paper that explores and contributes new knowledge to a specific field, often required for a doctoral degree.' },
    { category: 'Asia Cuisine', src: japan1, alt: 'Sushi', title: 'Sushi', description: 'Delicate bites of vinegared rice adorned with fresh, expertly sliced raw fish and wrapped in seaweed, a culinary dance of flavors and textures.' },
    { category: 'Asia Cuisine', src: japan2, alt: 'Noodle', title: 'Noodle', description: 'Long, thin strands of unleavened dough, typically made from wheat flour, water, and eggs, commonly used in various cuisines worldwide.' },
    { category: 'Asia Cuisine', src: japan3, alt: 'Dumpling', title: 'Dumpling', description: 'Delicious, dough-wrapped bites with savory fillings.' },
    { category: 'Mexican Cuisine', src: mexican1, alt: 'Kabob', title: 'Kabob', description: 'Grilled skewers of seasoned meat and vegetables.' },
    { category: 'Mexican Cuisine', src: mexican2, alt: 'Meal', title: 'Meal', description: 'Spicy grilled Mexican delight, bursting with vibrant flavors in a warm tortilla wrap.' },
    { category: 'Mexican Cuisine', src: mexican3, alt: 'Taco', title: 'Taco', description: 'A Mexican taco is a folded or rolled tortilla filled with various ingredients such as seasoned meat, onions, cilantro, and salsa, creating a flavorful and portable delight.' },
    { category: 'Wine & Cocktail', src: wine1, alt: 'Duo', title: 'Duo', description: 'Colorful, social parrot.' },
    { category: 'Wine & Cocktail', src: wine2, alt: 'Smashe', title: 'Smashe', description: 'A vibrant blend of muddled fruits, spirits, and a hint of effervescence, delivering a refreshing burst of flavor in every sip.' },
    { category: 'Wine & Cocktail', src: wine3, alt: 'Red Wine', title: 'Red Wine', description: 'Rich, robust, and velvety red wine with notes of dark berries and a smooth finish.' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <div className="main">
      <h2>Menu</h2>
      <div id="myBtnContainer">
        <button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>
          Show all
        </button>
        <button className={`btn ${filter === 'Italian Cuisine' ? 'active' : ''}`} onClick={() => handleFilter('Italian Cuisine')}>
        Italian Cuisine
        </button>
        <button className={`btn ${filter === 'American Cuisine' ? 'active' : ''}`} onClick={() => handleFilter('American Cuisine')}>
        American Cuisine
        </button>
        <button className={`btn ${filter === 'Asia Cuisine' ? 'active' : ''}`} onClick={() => handleFilter('Asia Cuisine')}>
        Asia Cuisine
        </button>
        <button className={`btn ${filter === 'Mexican Cuisine' ? 'active' : ''}`} onClick={() => handleFilter('Mexican Cuisine')}>
        Mexican Cuisine
        </button>
        <button className={`btn ${filter === 'Wine & Cocktail' ? 'active' : ''}`} onClick={() => handleFilter('Wine & Cocktail')}>
        Wine & Cocktail
        </button>
      </div>

      <div className="row">
        {filteredImages.map((image, index) => (
          <div key={index} className={`column ${image.category} show`}>
            <div className="content">
              <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
              <h4>{image.title}</h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
