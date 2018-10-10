// import {Table, Grid, Button, Form } from 'react-bootstrap';
import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import { Header } from './Section/Header'
import HomeSection from './Section/HomeSection'
import AboutSection from './Section/AboutSection'
import GetStarted from './Section/GetStarted'
import OfferSection from './Section/OfferSection'
import FeaturesSection from './Section/FeaturesSection'
import RoadMapSection from './Section/RoadMapSection'
import VideoSection from './Section/VideoSection'
import SafetySection from './Section/SafetySection'
import InfoSection from './Section/InfoSection'
import CounterSection from './Section/CounterSection'
import BlogSection from './Section/BlogSection'
import GetInTouchSection from './Section/GetInTouchSection'

class App extends Component {


   // onSubmit

  render () {
    return (
      <div className='App' data-spy="scroll" data-target=".header" data-offset="60">
        <Header/>
        <HomeSection/>
        <AboutSection/>
        <GetStarted/>
        <OfferSection/>
        {/*<FeaturesSection/>*/}
        <RoadMapSection/>
        <VideoSection/>
        <SafetySection/>
        <InfoSection/>
        <CounterSection/>
        <BlogSection/>
        <GetInTouchSection/>

      </div>
    )
  } // render
}

export default App
