import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description, imageUrl,newstime,neurl,source}=this.props;
    return (
      <div className="my-3 mx-2">
        <div className="card img" style={{width:"18rem"}}>
        <span className={`position-absolute top-0  translate-middle badge rounded-pill bg-danger ${source.length>=15?'indx':'indxx'}`}  >{source}</span>
         <img src={imageUrl?imageUrl:"https:th.bing.com/th/id/OIP.81UeEFmMJ2id3svgyutWFwAAAA?rs=1&pid=ImgDetMain"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><strong>Publish Date:</strong>{new Date(newstime).toGMTString().slice(0,17)}</p>

                <a href={neurl} target="_blank" rel="noreferrer" className="btn bm btn-sm  btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
} 
export default NewsItem
