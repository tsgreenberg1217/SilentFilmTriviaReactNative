import { QuestionStubSchema } from './QuestionStub'


export const SessionSchema = {
  name: "Session",
  properties:{
    inProgress: "bool",
    questions: "QuestionStub[]"//{type: "list", objectType: QuestionStubSchema.name}
  }
}

export default SessionSchema