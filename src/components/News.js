import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import loading from './loading.gif'
import Spinner from './Spinner'

export class News extends Component {

    constructor(){
        super();
        console.log("hello i am a comnstructor from news component");
        this.state={
            articles:[],
            loading:false,
            page:1

        }
    }
   async componentDidMount(){
 
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e7fbbce4d0ac459c84b4693b3d04ba0a&page=1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url); 
        let parsedData= await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles , totalResults: parsedData.totalResults})
    }
    handlePrevClick=async()=>{
        console.log("Previous")
        console.log("Next")
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e7fbbce4d0ac459c84b4693b3d04ba0a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});

      let data=await fetch(url); 
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        page:this.state.page -1,
        articles:parsedData.articles,
        loading:false

      })
    }
handleNextClick=async()=>{
      console.log("Next")
      if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e7fbbce4d0ac459c84b4693b3d04ba0a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url); 
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        page:this.state.page +1,
        articles:parsedData.articles,
        loading:false

      })
      }
}
  render() {
    console.log("render")
    return (
      
      <div className="container my-3 bg-dark setter" >
        <h2 className="white">Quick It : Top HeadLines!</h2>
        {/* <img src={loading} alt="loading"/> */}
       {this.state.loading&& <Spinner/>}
       <div className="row">
        {!this.state.loading&&this.state.articles.map((element)=>{
         return     <div className="col-md-3" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newstime={element.publishedAt?element.publishedAt.slice(0,10):""} neurl={element.url}/>
          </div>
        })}
      
        

       </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn my-2 mx-3 btn-light" onClick={this.handlePrevClick}>&larr; Previous</button>
       <p className="pg">Page {this.state.page}/{Math.ceil(this.state.totalResults/this.props.pageSize)}</p>
       <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn my-2 mx-3 btn-light" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
      

      </div>
    )
  }
}

export default News
