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
        justifyContent:"space-evenly",
        backgroundColor:"#0E0E0E"
    },

    buttonStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:30,
        marginHorizontal:60,
        borderWidth:1,
        borderColor:"white",
        height:60,
        padding:15
    },

    promptTextStyle:{
        marginTop:10,
        marginHorizontal:18,
        fontFamily: "cagliostro",
        color:"white",
        textAlign:"center",
        fontSize:32
    },
    buttonTextStyle:{
        fontFamily: "cagliostro",
        color:"white",
        fontSize:20,
        textAlign:"center"
    },

}

const AnswerStyle = {
    viewStyle:{
        flex: 1,
        justifyContent:"space-around",
        backgroundColor:"#0E0E0E"
    },

    buttonsViewStyle:{
        justifyContent:"flex-start",
        flex:1
    },
    buttonStyle:{
        justifyContent:"center",
        margin:30,
        marginHorizontal:60,
        marginBottom:20,
        borderWidth:1,
        borderColor:"white",
        height:60
    },
    buttonTextStyle:{
        fontFamily: "cagliostro",
        color:"white",
        fontSize:20,
        textAlign:"center"
    },
    infoStyle:{
        fontSize: 16,
        fontFamily: "cagliostro",
        color:"white",
        marginHorizontal:20,
        textAlign:"center"
    },
    imgView: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
}

export {HomeStyle, GameStyle, AnswerStyle}