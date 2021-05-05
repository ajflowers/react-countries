import React, { useEffect } from 'react';
import axios from 'axios';

const AllCountries = () => {
    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    },[]);

    return (
        <div></div>
    )
}

export default AllCountries