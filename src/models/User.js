export const UserSchema = {
    name: "User",
    properties:{
      name: {type:'string', indexed:true},
      isProgress:{type: "bool", default: false}
    }
  }
export default UserSchema