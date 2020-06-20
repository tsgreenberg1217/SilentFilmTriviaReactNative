const HomeStyle = {
    viewStyle:{
        flex: 1,
        backgroundColor:"#0E0E0E"
    },

    animationViewStyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonsViewStyle:{
        justifyContent:"flex-start",
        flex:1
    },
    buttonStyle:{
        justifyContent:"center",
        margin:30,
        marginHorizontal:60,
        marginBottom:0,
        borderWidth:1,
        borderColor:"white",
        height:60
    },
    buttonTextStyle:{
        fontFamily: "cagliostro",
        color:"white",
        fontSize:20,
        textAlign:"center"
    }
}

const GameStyle = {
    viewStyle:{
        flex: 1,
        backgroundColor:"#0E0E0E"
    },

    animationViewStyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonsViewStyle:{
        justifyContent:"flex-start",
        flex:1
    },
    buttonStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        margin:30,
        marginHorizontal:60,
        marginBottom:0,
        borderWidth:1,
        borderColor:"white",
        height:60,
        padding:20
    },
    promptTextStyle:{
        fontFamily: "cagliostro",
        color:"white",
        fontSize:32
    },
    buttonTextStyle:{
        fontFamily: "cagliostro",
        color:"white",
        fontSize:20,
        textAlign:"center"
    }
}

export {HomeStyle, GameStyle}