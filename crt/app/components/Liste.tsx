import React from 'react'

function Liste() {

    const fruits=["apple","orange","banana"];
 
    const items=fruits.map(f => <li>{ f.toUpperCase()}</li>);
  return (
    <div>liste

      <ol>
        {items}
      </ol>
    </div>
  )
}

export default Liste