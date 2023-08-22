function getSum(a, b)
{
    //console.log(a+b);
}
// get API
function getUsers(req, res){
    console.log("get api is called..")
    console.log(req.param);
    console.log(req.body);
    res.status(200).send("Get User information");
}

//get by UserID (by paras)
function getUserByIdByParams(req, res)
{
    console.log("Get User By ID API is called.")
    console.log(req.params);
    res.status(200).send("User exists ::"+req.params.ID);
}

//get by UserID (by paras)
function getUserByIdByQuery(req, res)
{
    console.log("Get User By ID API is called through Query parameters.")
    console.log(req.query.ID);
    res.status(200).send("User exists ::"+req.query.ID);
}
module.exports = { getSum, getUsers, getUserByIdByParams, getUserByIdByQuery }