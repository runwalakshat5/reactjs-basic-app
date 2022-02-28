import React from 'react'
import './styles.css'

function StyleSheetOne(props) {
    console.log(props)
    let className = props.primary? 'primary' : 'enlarge-text'
    return (
        <div>
            <h2 className={className}>Applied CSS using ternary</h2>
        </div>
    )
}

export default StyleSheetOne