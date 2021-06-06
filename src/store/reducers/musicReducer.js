import { GET_MUSIC, RECIEVE_MUSIC, ERROR } from "../types/musicTypes";

const initialState = {
    loading: true,
    musicData: null
};
export const musicReducer = (music = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_MUSIC:
            return { ...music, loading: true };
        case RECIEVE_MUSIC:
            return { ...music, loading: false, musicData: payload };
        case ERROR:
            return { ...music, loading: false, musicData: [], error: payload };
        default:
            return music;
    }
};