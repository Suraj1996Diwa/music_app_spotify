import React, { useState, useEffect } from 'react'
import api from '../../API/api'
import { useParams } from 'react-router-dom'
import TrackItem from './TrackItem';

const URL= "https://api.spotify.com";

const myHeaders = new  Headers({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type"
});
myHeaders.append("Authorization",`${api.token}`);


const httpReq = {
    method:'GET',
    headers: myHeaders,
    redirect: "follow"
};

export default function Track(props) {
    const [track,setTrack] = useState([]);
    const [audio,setAudio] = useState(null);
    const [playing,setPlaying] = useState(false);
    const [preview,setPreview] = useState(null);

    /* icons */
    const printIcon = (url) => {
        if(!url)
            return <span className="text-danger">N/T</span>;
        if(playing && preview === url) 
            return <button className="btn btn-warning btn-sm">Pause</button>;
        return <button className="btn btn-sm btn-success">Play</button>;
    };

    /* player */
    const playAudio = (url) => {
        const myAudio = new Audio(url);
        if(!playing) {
            myAudio.play();
            setPlaying(true);
            setAudio(myAudio);
            setPreview(url);
        } else {
            audio.pause();
            if(preview === url) {
                setPlaying(false);
            } else {
                myAudio.play();
                setAudio(myAudio);
                setPreview(url);
            }
        }
    };
    const params = useParams(); // used to read the ref query from router path
    console.log('params =', params);

    useEffect(() => {
        fetch(`${URL}/v1/artists/${params.id}/top-tracks?market=IN`, httpReq)
        .then(out => out.json())
        .then(res => {
            console.log('track data=', res);
            setTrack(res.tracks)
        }).catch(err => console.log(err.message));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Tracks</h3>
                </div>
            </div>
            <div className="row">
                {
                    track.map((item,key) => {
                        return <TrackItem key={key} {...item} audioPlay={playAudio} icon={printIcon} />
                    })
                }
            </div>
        </div>
    )
}