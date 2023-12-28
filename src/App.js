
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News  from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})

  }
  apiKey=process.env.REACT_APP_NEWS_API
  render() {

    return (
      <div>
        <Router>
       
       <NavBar/>

       <LoadingBar
       height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />
      
       {/* <News setProgress={this.setProgress} pageSize={4} country="in" category="entertainment"/> */}

       <Routes>
       
       <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={8} country="in" category="general"/>} />
       <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={8} country="in" category="business"/>} />
       <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={8} country="in" category="sports"/>} />
       <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={8} country="in" category="science"/>} />
       <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={8} country="in" category="entertainment"/>} />
       <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={8} country="in" category="technology"/>} />
       <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={8} country="in" category="health"/>} />


       </Routes>
       </Router>
      </div>
    )
  }
}
// e7fbbce4d0ac459c84b4693b3d04ba0a :apikey