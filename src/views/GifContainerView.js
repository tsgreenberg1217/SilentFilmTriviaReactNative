import React, {useEffect, useState} from 'react'
import { Image } from 'react-native'
import { getGiph } from '../services/GiphyService.js'

const GifContainerView = ({giphyId}) => {
    [url, setUrl] = useState(null)

    useEffect(() => {
        if(!url){
            getGiph(giphyId).then( res =>{
                setUrl(res.data.data.images.downsized.url)
            }).catch(e =>{
                console.log("gif error", e) // default img
            })
        }
        
    })

    return <Image style={{height:330, width:330}} source={{uri: url}} />
}

export default GifContainerView

