import React from 'react';
import './search.css';
import axios from 'axios';
import SearchItem from './search-item/searchItem';


export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            results: [],
            query: { text: '', filters: [] },
            loadMore: false,

        }
    }

    async FetchData(page) {
        const baseUrl = "https://jsonplaceholder.typicode.com/posts";
        const { query } = this.props.match.params;

        let url = baseUrl + `?userId=${query}`;
        const { data } = await axios.get(url);

        return data;
    }
    async componentDidMount() {

        const data = await this.FetchData();
        let text = this.props.match.params;
        const queryObj = { text: text, filters: null, };
        this.setState({ results: data, query: queryObj }, () => console.log(this.state));
    }
    componentDidUpdate() {

    }
    render() {
        return (<>
            <div className="row-search">
                <div className='item-12 sgn_log bottom_line' >
                    <span className='sgnup_log'>
                        <button className='sgn_log_btn'>Sign up</button>
                        <p>or</p>
                        <button className='sgn_log_btn'>Login</button>
                        {" "}for a search results tailor for you
                    </span>

                    <select className='search_filter_video'>
                        <option>Most Recent Upload</option>
                        <option>View Count</option>
                        <option>Ratings</option>
                    </select>
                </div>
                <SearchItem results={this.state.results} />
            </div>

        </>)
    }
}