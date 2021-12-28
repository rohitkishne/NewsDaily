// import React, { Component } from 'react'// component is write here only in the case of class based component
import React, {useEffect, useState} from 'react'

import NewsItems from './NewsItems'
import Spinner  from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `NewsDaily - ${this.capitalizeFirstLetter(this.props.category)}` // Note: this way is only used in class based component
   

    // static defaultProps = {
    //     country: 'in',
    //     pageSize: 6,                    { // both defaultProps and PropTypes used at the top under class based component
    //     category: 'general',             // both defaultProps and PropTypes used at the bottom after end of function based component in 
    // }                                        function based component }

    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string
    // }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    // Note: Constructor is only used in class based components
    // constructor(props) {
    //     super(props);
    //     // console.log("Hello, i am a constructor from News Component");
    //     this.state = {
    //         articles: [],
    //         loading: false,
    //         page: 1,
    //         totalResults: 0
    //     }
    // }

    // Note: class based components
    // async updateNews() {
    //     this.props.setProgress(10);
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15a40938c6ae4e48933bdf80a7e6c5b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     this.props.setProgress(40);
    //     let parsedData = await data.json()
    //     this.props.setProgress(70);
    //     // console.log(parsedData);
    //     this.setState({
    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false,
    //     })
    //     this.props.setProgress(100);
    // }


    // Note: Function based components
    const updateNews = async() => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15a40938c6ae4e48933bdf80a7e6c5b6&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        props.setProgress(70);
        // console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

     // Note: class based components
    // async componentDidMount() {
    //     // console.log("cdm");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15a40938c6ae4e48933bdf80a7e6c5b6&page=1&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading: true});
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
    //     // // console.log(parsedData);
    //     // this.setState({articles: parsedData.articles,
    //     //     totalResults: parsedData.totalResults,
    //     //     loading: false
    //     // })

    //     this.updateNews()
    // }

     // Note: Function based components
    useEffect(() => {
        document.title = `NewsDaily - ${capitalizeFirstLetter(props.category)}`
        updateNews();
        // eslint-disable-next-line
    }, [])


    // handlePreviousClick = async () => {
    //     console.log("Clicked on Previous link");

    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15a40938c6ae4e48933bdf80a7e6c5b6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading: true});
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
    //     // console.log(parsedData);

    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })   

    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews()

    // }

    // handleNextClick = async () => {
    //     console.log("Clicked on Next link");

    //     // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //     //       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15a40938c6ae4e48933bdf80a7e6c5b6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     //       this.setState({loading: true});
    //     //         let data = await fetch(url);
    //     //         let parsedData = await data.json()
    //     //         console.log(parsedData);

    //     //         this.setState({
    //     //             page: this.state.page + 1,
    //     //             articles: parsedData.articles,
    //     //             loading: false
    //     //         }) 
    //     // }

    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews()
    // }

    // Note: class based components
    // fetchMoreData = async () => {
    //  this.setState({page: this.state.page + 1});
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15a40938c6ae4e48933bdf80a7e6c5b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // //  this.setState({ loading: true });
    //  let data = await fetch(url);
    //  let parsedData = await data.json()
    //  // console.log(parsedData);
    //  this.setState({
    //      articles: this.state.articles.concat(parsedData.articles),
    //      totalResults: parsedData.totalResults
    //     //  loading: false,
    //  })
    //   };
   

    // Note: Function based components
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15a40938c6ae4e48933bdf80a7e6c5b6&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
    //  this.setState({ loading: true });
     let data = await fetch(url);
     let parsedData = await data.json()
     // console.log(parsedData);
     setArticles(articles.concat(parsedData.articles))
     setTotalResults(parsedData.totalResults)
    };






    // render() {
        // console.log("render")


        // Note: class based components
        // return (
        //     <div className='container py-3 my-2 bg-success'>
        //         <h1 className='text-center text-white mb-5'>Today's News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        //         {this.state.loading && <Spinner/>}
        //         <InfiniteScroll
        //             dataLength={this.state.articles.length}
        //             next={this.fetchMoreData}
        //             hasMore={this.state.articles.length !== this.state.totalResults}
        //             loader={<Spinner/>}
        //         >
        //             <div className="container">
        //                <div className="row">
        //                 {this.state.articles.map((element) => {
        //                     return <div className="col-md-4" key={element.url}>
        //                         <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} />
        //                     </div>
        //                 })}
        //             </div>  
        //             </div>
                   
        //         </InfiniteScroll>
        //         {/* <div className="container d-flex justify-content-between">
        //             <button disabled={this.state.page <= 1} type="button" className="btn btn-link btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        //             <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-link btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        //         </div> */}
        //     </div>
        // )

        
        // Note: Function based components
        return (
            <div className='container my-2 bg-success' >
                <h1 className='text-center text-white py-4 mb-3' style={{margin: "65px 0px"}}>Today's News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container-fluid">
                       <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                        </div>  
                    </div>
                   
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-link btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-link btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    // }
}

News.defaultProps = {
        country: 'in',
        pageSize: 6,                    
        category: 'general',         
    }                                        

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
