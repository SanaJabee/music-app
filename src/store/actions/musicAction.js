import { RECIEVE_MUSIC, GET_MUSIC, ERROR } from "../types/musicTypes";
import axios from 'axios';
const getMusic = (search_term) => async (dispatch) => {
    try {
        await axios.get('https://itunes.apple.com/search?term=nirvana').then(res => {
            dispatch({
                type: GET_MUSIC,
                payload: []
            });
            const music_data = res.data.results;
            // eslint-disable-next-line 
            const filterData = music_data.filter(item => {
                if (item.wrapperType === 'track') {
                    return Object.keys(item).some(key =>
                        item[key].toString().toLowerCase().includes(search_term.toLowerCase())
                    );
                }
            });
            if (filterData !== '') {
                filterData.sort((a, b) => parseFloat(a.trackPrice) - parseFloat(b.trackPrice));
                dispatch({
                    type: RECIEVE_MUSIC,
                    payload: filterData
                });
            }
        })
    } catch (err) {
        dispatch({
            type: ERROR,
            payload: err.response,
        });
    }

};

export default getMusic;