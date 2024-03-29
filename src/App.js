import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import React from 'react'
import { Navbar, Exchanges, Cryptocurrencies, News, CryptoDetails, Homepage } from './components';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path ="/" element={<Homepage />}></Route>
              <Route exact path ="/exchanges" element={<Exchanges />}></Route>
              <Route exact path ="/cryptocurrencies" element={<Cryptocurrencies />}></Route>
              <Route exact path ="/crypto/:coinId" element={<CryptoDetails />}></Route>
              <Route exact path ="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
      
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022 
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
