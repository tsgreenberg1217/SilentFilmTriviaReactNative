import React, {useEffect, useState} from 'react'
import { Image, View } from 'react-native'
import { getGiph } from '../services/GiphyService.js'

const GifContainerView = ({giphyId}) => {
    [url, setUrl] = useState("")

    const noUrl = Object.keys(url).length == 0

    useEffect(() => {
        if(noUrl){
            getGiph(giphyId).then( res =>{
                setUrl(res.data.data.images.downsized.url)
            }).catch(e =>{
                console.log("gif error", e) // default img
            })
        }
        
    })

    return url ? <Image style={{height:330, width:330}} source={{uri: url }} /> : <View/>
}

export default GifContainerView

