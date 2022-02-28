import React from 'react'
import './styles.css'

function StyleSheetTwo({primary}) {
    const className = primary ? 'primary' : ''
  return (
    <div>
        <h2 className={`${className} enlarge-text`}>Apply Color and Font</h2>
    </div>
  )
}

export default StyleSheetTwo