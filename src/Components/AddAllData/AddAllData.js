import React from 'react';
import fakeData from '../../fakeData';

const AddAllData = () => {
    const handleAddAllData = () => {
        fetch('https://afternoon-taiga-18570.herokuapp.com/addAllData', {
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