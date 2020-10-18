import React from 'react'

const List = props => {
    const items = props.characterData.map((row, index) => {
        return (
        <li key={index}>{row.name} {row.job}</li>
        )
    })
return <ul>{items}</ul>
}

export default List
