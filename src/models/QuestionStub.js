export const QuestionStubSchema = {
    name: "QuestionStub",
    properties:{
      id: 'string',
      isCorrect: 'bool', //{type:'bool', default: false},
      isAnswered: {type:'bool', default: false}
    }
  }

export default QuestionStubSchema