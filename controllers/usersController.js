const UserModel = require("../models/User")

exports.getUsers = async(req, res, next) => {
try{
  const userList = await UserModel.findAll()
  console.log("userlist", userList)
  res.render('users', {userList});
}
catch(err) {
  res.send("an error occured")
}

};
//on get request
exports.show_add_user_form = (req, res)=>{
  res.render("addUser")
}  

// on post request
exports.add_user = async(req,res)=>{
  //add to db
  try{
    const newUser = await UserModel.create({
      fistName: "Test1",
      lastName:"test2"
    })
    res.send({user: newUser})
  }
  catch(err){

  }
}