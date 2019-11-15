import React from 'react'
import Row from '../row'
import { connect } from 'react-redux'
// import getData from '../../actions/PageActions'

const Table = (props) => {

    const arr = props.data.map((elem) => {
        return (
            <Row
                {...elem}
                key={elem.name}
            />
        )
    })

    return (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">title</th>
                    <th scope="col">director</th>
                    <th scope="col">producer</th>
                    <th scope="col">release_date</th>
                    <th scope="col">rt_score</th>
                </tr>
            </thead>
            <tbody>
                {arr}
            </tbody>
        </table>
    )
}

const mapStateToProps = (store) => {
    return {
        data: store.data
    }
}

export default connect(mapStateToProps)(Table)