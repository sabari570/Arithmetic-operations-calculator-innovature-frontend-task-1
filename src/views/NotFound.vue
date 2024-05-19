<template>
    <div class="not-found-container">
      <div class="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <router-link to="/" class="home-button">Go to Homepage</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage',
  };
  </script>
  
  <style scoped>
  .not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .not-found-content {
    text-align: center;
  }
  
  h1 {
    font-size: 6rem;
    margin: 0;
    font-weight: bold;
  }
  
  h2 {
    font-size: 2rem;
    margin: 10px 0;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .home-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: white;
    color: #003366;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .home-button:hover {
    background-color: #003366;;
    color: white;
  }
  </style>
  