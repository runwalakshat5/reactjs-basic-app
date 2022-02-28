import React from 'react'

const Hello = () =>{
    // return (
    //     <div id="divId" className="divHEader">
    //         <h1>This is using JSX</h1>
    //     </div>

    // ) // Usimg JSX

    return React.createElement('div', {id: 'divId', className:'divHeader'}, 
           React.createElement('h1', null, 'Without using JSX') // null b/c no class/id is mentioned
    )
    

}

export default Hello