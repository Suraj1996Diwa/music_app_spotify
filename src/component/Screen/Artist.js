import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Artist(props) {
    const {id,name,images,genres,followers,popularity,type,href} = props;
    return (
        <div className="col-md-4 mt-2 mb-2">
            <div className="card">
                <div className="card-header">
                    <h5> {name} </h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Genres</strong>
                            <span className="float-end"> {genres.length > 0 ? genres.join(",") : 'nill'} </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Popularity</strong>
                            <span className="float-end"> {popularity} % </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Followers</strong>
                            <span className="float-end"> {followers.total} </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Type</strong>
                            <span className="float-end"> {type} </span>
                        </li>
                    </ul>
                </div>
                <div className="card-footer">
                    <NavLink to={`/track/${id}`} className="btn btn-success float-end">Load Tracks</NavLink>
                </div>
            </div>
        </div>
    )
};