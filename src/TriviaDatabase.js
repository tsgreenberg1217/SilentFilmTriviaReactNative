import Realm from 'realm'
import { SessionSchema } from './models/Session'
import { QuestionSchema } from './models/Question'
import { QuestionStubSchema } from './models/QuestionStub.js'
import { QUESTIONS } from './models/QuestionsList.js'



const databaseOptions = {
  path: "silent_film_trivia_rn_db.realm",
  schema: [SessionSchema, QuestionSchema, QuestionStubSchema],
  schemaVersion: 5
}

const runDBProc = callback => {
  Realm.open(databaseOptions).then(realm =>{
    callback(realm)
    console.log('closing db')
    realm.close()
  })
}

export const initGameData = () => new Promise((resolve, reject) => {
  runDBProc(realm =>{
    const questions = realm.objects(QuestionSchema.name)[0]
    // if no questions exisits (first time), create questions
    if (!questions){
      console.log('creating questions')
      realm.write(() => {
        QUESTIONS.forEach(q => {
          realm.create(QuestionSchema.name, q)  
        });
      })
      resolve()
    }else{
      // reconcile with server here
      console.log('questions already exisit')
      resolve()
    }
  })

})

export const createSession = progress => new Promise((resolve, reject) => {
  runDBProc(realm => {

    const questionsData = realm.objects(QuestionSchema.name)

    const questions = []

    Object.keys(questionsData).forEach(k => questions.push(questionsData[k]))
    
    // shuffle questions
    for(let i = questions.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = questions[i]
      questions[i] = questions[j]
      questions[j] = temp
    }

    // map questions into stubs
    const stubs = questions.slice(0,9).map(q => ({id: q._id, isCorrect: false, isAnswered: false}))

    const newSession = { inProgress: true, questions: stubs }

    realm.write(() => {
      console.log('creating new session')
      realm.create(SessionSchema.name, newSession)
      
    })
    resolve(newSession)
  })
})

export const getSessionData = () => new Promise((resolve, reject) => {

  runDBProc(realm => {
    const data = realm.objects(SessionSchema.name)[0]
    if(!data){
      resolve(null)
    }else{
      const session = {inProgress: data.inProgress, questions: data.questions.slice(0,9)}
      const sessionJson = JSON.stringify(session)
      resolve(sessionJson)
    }
    
  })
})

export const getQuestion = id => new Promise((resolve, reject) => {
  runDBProc(realm => {
    const question = realm.objects("Question").filtered("_id == $0", id)
    const json = JSON.stringify(question[0])
    resolve(json)
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