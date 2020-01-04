import React from 'react';
import './search.css';
import axios from 'axios';
import SearchItem from './search-item/searchItem';
export default class Search extends React.Component{
    constructor(){
        super();
        this.state ={
            results:[],
            query:{text:'',filters:[]},

        }
    }
    async componentDidMount(){
        const baseUrl = "https://jsonplaceholder.typicode.com/posts";
        const {query } = this.props.match.params;
        let url = baseUrl+`?userId=${query}`;
        const {data} = await axios.get(url);
        const queryObj = {text:query,filters:null,};
        this.setState({results:data,query:queryObj},()=>console.log(this.state));
    }
    componentDidUpdate(){
    }
    render(){
        return (<>
        <div className="row-search">
            <SearchItem results={this.state.results} />
        </div>
        
        </>)
    }
}