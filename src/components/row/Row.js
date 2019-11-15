import React from 'react'

const Row = (props) => {
    const { title, director, producer, release_date, rt_score } = props

    return (
        <tr>
            <td>{title}</td>
            <td>{director}</td>
            <td>{producer}</td>
            <td>{release_date}</td>
            <td>{rt_score}</td>
        </tr>
    )
}

export default Row