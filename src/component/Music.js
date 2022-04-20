import React, {useEffect,useState} from 'react'
import api from '../API/api';
import Artist from './Screen/Artist'

const URL= "https://api.spotify.com";

const myHeaders = new  Headers({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type"
});
myHeaders.append("Authorization",`${api.token}`)


const httpReq = {
    method:'GET',
    headers: myHeaders,
    redirect: "follow"
};


export default function Music(props) {
    const [artist,setArtist] = useState([]);
    const [name,setName] = useState([]);

    useEffect(()=>{
        searchHandler("SPB");
    },[]);

    const searchHandler = (artistName)=>{
        fetch(`${URL}/v1/search?q=${artistName}&type=artist`, httpReq)
        .then(out=> out.json())
        .then(res =>{
            console.log(res)
            setArtist(res.artists.items)
        }).catch(err =>console.log(err.message))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`search name =`, name);
        searchHandler(name)
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-secondary">Music Player</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="search" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="enter artist name" required/>
                                            <button type="submit" className="btn btn-dark">Search</button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    artist.map((item,key) => {
                        return (
                            <Artist key={key} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}