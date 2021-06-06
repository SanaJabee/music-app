import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./musicPlayer.css";
import {
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    LinkedinIcon,
    WhatsappIcon,
} from "react-share";


const DetailPage = (props) => {

    var search_music = useSelector((state) => state.musicReducer.musicData);
    const musicPlayerIndex = props.location.trackIndex;
    const [currentTrack, setCurrentTrack] = useState(musicPlayerIndex);
    const [musicSource, setMusicSource] = useState();
    useEffect(() => {
        if (search_music[currentTrack] !== undefined) {
            setMusicSource(search_music[currentTrack].previewUrl);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.load();
                audioRef.current.play();
            }
        }
    }, [currentTrack, search_music])
    const audioRef = useRef();
    const updateSong = (value) => {
        if (value === 'prev') {
            setCurrentTrack(currentTrack - 1)
        }
        if (value === 'next') {
            setCurrentTrack(currentTrack + 1)
        }

    }
    return (
        <div className="audioPlayer">
            {currentTrack >= 0 && currentTrack < search_music.length ?
                <div className="track-info">
                    <img
                        className="artwork"
                        src={search_music[currentTrack].artworkUrl100}
                        alt={`track artwork`}
                    />
                    <h2 className="title">{search_music[currentTrack].trackName}</h2>
                    <h3 className="artist">{search_music[currentTrack].artistName}</h3>

                    <audio ref={audioRef} controls className="player" preload="false">
                        <source src={musicSource} />
                    </audio>
                    <a className="next" href={() => false} onClick={() => updateSong('next')}>&#10095;</a>
                    <a className="prev" href={() => false} onClick={() => updateSong('prev')}>&#10094;</a>
                    <div className="socialButtons">
                        <FacebookShareButton className="socialIcons" url={search_music[currentTrack].trackViewUrl}>
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        <LinkedinShareButton className="socialIcons" url={search_music[currentTrack].trackViewUrl}>
                            <LinkedinIcon size={32} round={true} />
                        </LinkedinShareButton>
                        <WhatsappShareButton className="socialIcons" url={search_music[currentTrack].trackViewUrl}>
                            <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                    </div>
                </div>
                : <Link to='/'>search More Songs!</Link>
            }
        </div>
    )
}

export default DetailPage;