import Realm from 'realm'
import {UserSchema} from './models/User'
import {SessionSchema, DEFAULT_SESSION} from './models/Session'
import {QuestionSchema} from './models/Question'


const databaseOptions = {
  path: "silent_film_trivia_rn_db.realm",
  schema: [UserSchema, SessionSchema, QuestionSchema],
  schemaVersion: 3
}

const getSession = (realm) => {
  const data = realm.objects(SessionSchema.name)
  return data[0]
}

const runDBProc = proc => {
  Realm.open(databaseOptions).then(realm =>{
    proc(realm)
    realm.close
  }).catch(e =>{
    reject(e)
  })
}

export const initSessionData = () => new Promise((resolve, reject) => {
  runDBProc(realm =>{
    const session = getSession(realm)

    // if no session exisits (first time), create default session
    if (!session){
      console.log('creating new session')
      realm.write(() => {
        realm.create(SessionSchema.name, DEFAULT_SESSION)
      })
    }else{
      console.log("session found")
    }
    const json = JSON.stringify(session)
    resolve(json)
  })
})

export const toggleSession = progress => new Promise((resolve, reject) => {
  runDBProc(realm => {
    const session = getSession(realm)
    realm.write(() => {
      session.inProgress = progress
      resolve
    })

  })
})


export const startSession = () => new Promise((resolve, reject) => {
  runDBProc(realm => {
    const session = getSession(realm)
    realm.write(() => {
      session.inProgress = progress
      resolve
    })
  })
})


export const resetSession = () => new Promise((resolve, reject) => {
  runDBProc(realm => {
    const session = getSession(realm)
    realm.write(() => {
      session.inProgress = false
      session.questions.map(q => {
        q.isCorrect = false
        q.isAnswered = false
      })
      resolve()
    })
  })
})



function getRandomQuestions(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more questions queried than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}