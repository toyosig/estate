import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) =>{
    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '56bb77d0f7mshc065db01c16f143p1edba7jsne58da4ace85b'
        }

    });
    return data
}