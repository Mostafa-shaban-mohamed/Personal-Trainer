import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { NavMenu } from './components/NavMenu';
import { Schedule } from './components/Schedule';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    );
  }
}
