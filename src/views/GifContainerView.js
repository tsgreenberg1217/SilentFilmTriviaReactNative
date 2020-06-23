import React, {useEffect, useState} from 'react'
import { Image } from 'react-native'
import { getGiph } from '../services/GiphyService.js'

export default GifContainerView = ({giphyId}) => {
    [url, setUrl] = useState(null)
    useEffect(() => {
        if(!url){
            getGiph(giphyId).then( res =>{
                console.log("giphy success, updating img state")
                setUrl(res.data.data.images.downsized.url)
            }).catch(e =>{
                console.log("axios error", e)
            })
        }
        
    })
    return <Image style={{height:330, width:330}} source={{uri: url}} />
}

