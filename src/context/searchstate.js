import React from "react";
import SearchContext from "./searchcontext";
import { useState } from "react";
const SearchState = (props) => {
    
    const [searchterm, setSearchTerm] = useState('');
    const updatesearchterm = (term) => {
        setSearchTerm(term);
    }
    return(
        <SearchContext.Provider value={{searchterm , updatesearchterm }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState;