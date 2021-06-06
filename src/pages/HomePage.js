import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import debounce from "lodash.debounce";
import "./styles.css";
import getMusic from "../store/actions/musicAction";
import Loader from "react-loader-spinner";
const HomePage = () => {
    const dispatch = useDispatch();
    var search_music = useSelector((state) => state.musicReducer.musicData);
    var loading = useSelector((state) => state.musicReducer.loading);
    const handleChange = (event) => {
        const value = event;
        dispatch(getMusic(value));
    };
    // eslint-disable-next-line 
    const debounceOnChange = React.useCallback(debounce(handleChange, 400), []);
    return (
        <div className="container">
            <div className="searchDiv">
                <p className="search">Search Your Favourite Music!</p>
                <input
                    className="searchBar"
                    key="random1"
                    placeholder={"search....."}
                    onChange={(e) => debounceOnChange(e.target.value)}
                />
            </div>

            <div className="mainContainer">
                {loading ?
                    <Loader
                        type="Bars"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        className="loaderStyle"
                    /> :

                    <div className="itemContainer">
                        {search_music.map((record, index) => (
                            <Link key={record.trackId} to={
                                {
                                    pathname: "/detailPage",
                                    trackIndex: index
                                }
                            }>
                                <div className="musicItem" key={record.trackId}>
                                    <div className="thumbnail">
                                        <img src={record.artworkUrl100} alt="track artwork" />
                                    </div>
                                    <div className="musicInfo">
                                        <p className="genereStyle">{record.primaryGenreName}</p>
                                        <p>{record.trackName}</p>
                                        <p>{record.artistName}</p>
                                        <p>{record.collectionName}</p>
                                        <p>{record.releaseData}</p>
                                        <p>{record.trackPrice}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default HomePage;