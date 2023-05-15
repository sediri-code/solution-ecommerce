import React, { useState } from 'react';

function App() {
  const [customerInfo, setCustomerInfo] = useState({});
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send customer info to your email here using your preferred method
    console.log(customerInfo);
  };

  const articles = [
    {
      id: 1,
      name: 'Article 1',
      price: 9.99,
      image: 'https://placeimg.com/640/480/animals'
    },
    {
      id: 2,
      name: 'Article 2',
      price: 14.99,
      image: 'https://placeimg.com/640/480/nature'
    },
    // Add 10 more articles here
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="App">
      <h1>Yasmina Shop</h1>
      <div className="article-container">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.name} />
            <div className="article-info">
              <h3>{article.name}</h3>
              <p>${article.price.toFixed(2)}</p>
              <button onClick={() => setSelectedArticle(article)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      {selectedArticle && (
        <form onSubmit={handleFormSubmit}>
          <h2>{selectedArticle.name}</h2>
          <img src={selectedArticle.image} alt={selectedArticle.name} />
          <p>${selectedArticle.price.toFixed(2)}</p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} />
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
