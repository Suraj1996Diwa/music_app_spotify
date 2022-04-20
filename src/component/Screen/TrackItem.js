import React, { useState } from 'react'

export default function TrackItem(props) {
    const {name,album,preview_url, icon, audioPlay} = props;
   

    return (
        <div className="col-md-3 mt-2 mb-2">
            <div className="card" onClick={() => audioPlay(preview_url)} >
                <img src={album.images[1].url} alt={name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="text-secondary"> {name} </h5>
                </div>
                <div className="card-footer">
                        { icon(preview_url)}
                </div>
            </div>
        </div>
    )
}