import React, { Component } from 'react';
//import FilterBar from './FilterBar';
// import FilterModal from './FilterModal';
// import PropertyCard from './PropertyCard';
// import NoProperty from './NoProperty';
import { base_path } from './utils.js';
import Pg from './Pg';
import Mess from './Mess';
class App extends Component {

    render() {
        return (
            <>
                {/* <Pg/> */}
                <Mess/>
            </>
        )
    }
}

export default App;
