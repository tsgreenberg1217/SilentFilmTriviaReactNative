import axios from "axios"
import giphyKey from '../../secrets.js'

export const getGiph = id => new Promise((resolve, reject) => {
    const res = axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=${giphyKey}`)
    resolve(res)
})
