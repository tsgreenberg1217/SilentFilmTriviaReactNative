import Realm from 'realm'
import {UserSchema} from './models/User'
import {SessionSchema, DEFAULT_SESSION} from './models/Session'
import {QuestionSchema} from './models/Question'


const databaseOptions = {
  path: "silent_film_trivia_rn_db.realm",
  schema: [UserSchema, SessionSchema, QuestionSchema],
  schemaVersion: 3
}

export const createUser = (user) => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=>{
      realm.create(UserSchema.name, user)
      resolve(user)
    })
    realm.close
  }).catch(e => reject(e))
})


export const deleteAllUsers = () => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=>{
      const allUsers = realm.objects(UserSchema.name)
      realm.delete(allUsers)
      resolve()
    })
    realm.close
  }).catch(e => reject(e))
})

export const queryAllUsers = () => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm => {
    const allUsers = realm.objects(UserSchema.name)
    resolve(allUsers[0])
    realm.close
  }).catch(e => reject(e))
})


export const initSessionData = () => new Promise((resolve, reject) =>{
  console.log('calling init session')
  Realm.open(databaseOptions).then( realm => {
    const data = realm.objects(SessionSchema.name)
    const session = data[0]

    // if no session exisits (first time), create default session
    if (!session){
      console.log('creating new session')
      realm.write(() => {
        realm.create(SessionSchema.name, DEFAULT_SESSION)
      })
    }else{
      console.log("session found")
    }
    resolve(session)
    realm.close()
  }).catch(e =>{
    reject(e)
  })
})

