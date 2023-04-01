import React from 'react';
import fakeData from '../../fakeData';

const AddAllData = () => {
    const handleAddAllData = () => {
        fetch('http://localhost:5000/addAllData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        }) 
    }
    return (
        <div>
            <button onClick= {handleAddAllData}>Add fake data</button>
        </div>
    );
};

export default AddAllData;