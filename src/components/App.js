import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import ContentArea from "./ContentArea/ContentArea";
import {InfiniteScroll} from "react-infinite-scroll-component";

{/*<InfiniteScroll*/}
    {/*next={this.generateDivs}*/}
    {/*hasMore={true}*/}
    {/*height={300}*/}
    {/*loader={<h4>Loading...</h4>}>*/}
    {/*{this.state.divs}*/}
{/*</InfiniteScroll>*/}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <ContentArea />
            </div>
        );
    }
}

export default App;
