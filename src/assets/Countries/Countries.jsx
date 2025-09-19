import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countryPromise}) => {
    const countriesData =use(countryPromise)
    const countries = countriesData.countries
    return (
        <div>
            <h1>All Country Details</h1>
            <p>Total Country:{countries.length}</p>
            <div className='countries'>
                {
                    countries.map(country=><Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;