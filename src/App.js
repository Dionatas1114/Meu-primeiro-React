import React from 'react';
import Welcome from './components/welcome/welcome';
import Card from './components/card/card';
import Table from './components/table/table';


export default function App() {
    return(
        <div>
            <Welcome />
            <Card />
            <Table />
        </div>
    ) ;
}