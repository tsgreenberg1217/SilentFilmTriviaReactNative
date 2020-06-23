export const QuestionSchema = {
    name: "Question",
    primaryKey: '_id',
    properties:{
      _id: 'string',
      prompt: 'string',
      answer: 'string',
      giphy_id: 'string',
      info: 'string',
      choices: 'string[]' //{type: "list", objectType:'string'}
    }
  }
export default QuestionSchema