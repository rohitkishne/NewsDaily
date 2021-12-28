// import React, { Component } from 'react' // component is write here only in the case of class based component
import React from 'react'

// export class NewsItems extends Component {
const NewsItems = (props) =>{
   
    // render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card">
                <span className="position-absolute top-100 right-100 translate-middle badge rounded-pill bg-success" style={{left: '84%', zIndex: '1'}}>{source}</span>
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/12/samsung-galaxy-s22-ultra-note-geekbench/-952x498w6/gsmarena_001.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">News Details</a>
                    </div>
                </div>
            </div>
        )
    // }
}

export default NewsItems
