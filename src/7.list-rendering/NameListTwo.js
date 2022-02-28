import React from 'react';

function NameListTwo() {
    const names = ["Scott", "Adam", "Tuan", "Uma"]
    const nameList = names.map((name, index) =><h2 key={index}>{name}</h2>)
    return (
        // <React.Fragment>
        //     <h2></h2>
        //     <div>{nameList}</div> 
        // </React.Fragment>

        <>
        <h2></h2>
            <div>{nameList}</div> 
        </>
    )
}
// React.Fragment or <> acts like a parent alias
export default NameListTwo;