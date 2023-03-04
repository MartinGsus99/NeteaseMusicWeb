import React, { Component } from 'react';
import './index.css';

class Filter extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div class='filter-wrapper'>
                <div class="container">
                    <input placeholder="歌手或者歌曲名" required="" class="input" name="text" type="text"></input>
                    <div class="icon">
                        <svg viewBox="0 0 512 512" class="ionicon" xmlns="http://www.w3.org/2000/svg">
                            <title>Search</title>
                            <path stroke-width="32" stroke-miterlimit="10" stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                            <path d="M338.29 338.29L448 448" stroke-width="32" stroke-miterlimit="10" stroke-linecap="round" stroke="currentColor" fill="none"></path>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;