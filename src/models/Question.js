export const QuestionSchema = {
    name: "Question",
    properties:{
      prompt: {type:'string'},
      answer: {type:'string'},
      giphy_id: {type:'string'},
      info: {type:'string'},
      isAnswered: {type:'bool', default: false},
      isCorrect: {type:'bool', default: false},
      choices:{type: "list", objectType:'string'}
    }
  }
export default QuestionSchema