import Realm from 'realm'
export const USER_SCHEMA = "User"

export const UserSchema = {
  name: USER_SCHEMA,
  properties:{
    name: {type:'string', indexed:true},
    isProgress:{type: "bool", default: false}
  }
}

const databaseOptions = {
  path: "silent_film_trivia_rn_db.realm",
  schema: [UserSchema],
  schemaVersion: 1
}

export const createUser = (user) => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm =>{
    realm.write(()=>{
      realm.create(USER_SCHEMA, user)
      resolve(user)
    })
    realm.close
  }).catch(e => reject(e))
})


export const deleteAllUsers = () => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm =>{
    realm.write(()=>{
      const allUsers = realm.objects(USER_SCHEMA)
      realm.delete(allUsers)
      resolve()
    })
    realm.close
  }).catch(e => reject(e))
})

export const queryAllUsers = () => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm =>{
    const allUsers = realm.objects(USER_SCHEMA)
    resolve(allUsers[0])
    realm.close
  }).catch(e => reject(e))
})

