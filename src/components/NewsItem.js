import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description, imageUrl,newstime,neurl}=this.props;
    return (
      <div className="my-3 mx-2">
        <div className="card img" style={{width:"18rem"}}>
         <img src={imageUrl?imageUrl:"https:th.bing.com/th/id/OIP.81UeEFmMJ2id3svgyutWFwAAAA?rs=1&pid=ImgDetMain"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><strong>Publish Date:</strong>{newstime}</p>

                <a href={neurl} target="_blank" rel="noreferrer" className="btn btn-sm  btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
} 
export default NewsItem
