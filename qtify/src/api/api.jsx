import axios from 'axios';

export const Backend_Endpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async ()=>{
    try{
        const response = await axios.get(`${Backend_Endpoint}/albums/top`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }
};

export const fetchNewAlbums = async ()=>{
    try{
        const response = await axios.get(`${Backend_Endpoint}/albums/new`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }

};

export const fetchSongs = async ()=>{
    try{
        const response = await axios.get(`${Backend_Endpoint}/songs`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }
};

export const fetchFilters = async() => {
    try{
        const response = await axios.get(`${Backend_Endpoint}/genres`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }
} ;


export const  fetchQuetion = async () => {
    try{
        const response = await axios.get(`${Backend_Endpoint}/faq`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }
};


export const fetchAlbum = async (slug) => {
    try{
        const response = await axios.get(`${Backend_Endpoint}/album/${slug}`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }
}