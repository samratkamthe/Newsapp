//////////////////////////////////////////////////////////     INFINATE SCROLL       /////////////////////////////////////////////////////////

import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import loading from './loading.gif'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:8,
    category: "general"
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capt=(stri)=>{
    let a= stri.toLowerCase();
    let c=a.charAt(0).toUpperCase()+a.slice(1);
    // console.log(c);
    return c;
  }
    constructor(props){
        super(props);
        // console.log("hello i am a comnstructor from news component");
        this.state={
            articles:[],
            loading:true,
            page:1,
            totalResults:0
        }
        document.title=`Quick it- ${this.capt(this.props.category)}`;
    }
    async updateNews(){
      this.props.setProgress(10)
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
        let data=await fetch(url); 
        this.props.setProgress(50)
        let parsedData= await data.json();  
        this.props.setProgress(80)   
        this.setState({
          // page:this.state.page,
          articles:parsedData.articles, 
          totalResults: parsedData.totalResults,
          loading:false
        })
      this.props.setProgress(100)


    }

   async componentDidMount(){ 
    this.updateNews();
        
    }

fetchMoreData=async()=>{
  this.setState({page: this.state.page+1})
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({page: this.state.page+1})
      // this.setState({loading:true});
        let data=await fetch(url); 
        let parsedData= await data.json();
        // console.log(parsedData);
        this.setState({
          articles:this.state.articles.concat(parsedData.articles) , 
          totalResults: parsedData.totalResults
          // loading:false
        })
}


  render() {                
    // console.log("render")
    return (
      <>
      
        <h2 className="white text-center ">Quick It : Top "{this.capt(this.props.category)}" HeadLines!</h2>
        {this.state.loading&&<Spinner/>}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
       <div className="row">
        {this.state.articles.map((element, index)=>{
         return     <div className="col-md-3" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newstime={element.publishedAt?element.publishedAt.slice(0,10):""} neurl={element.url} source={element.source.name}/>
          </div>
        })}
      
       </div>
       </div>
       </InfiniteScroll>
       </>
    

      
    
    )
  }
}

export default News