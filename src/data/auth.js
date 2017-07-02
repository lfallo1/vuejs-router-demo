let _user = {};
const setUser = function(user){
  _user = user;
};
const getUser = function(){
  return _user;
};

export default { getUser, setUser };
