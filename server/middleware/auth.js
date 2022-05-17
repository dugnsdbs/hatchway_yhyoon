import jwt from 'jsonwebtoken';
// wants to like a post. -> click the like button => auth middleware (next) confirm? => then like controller.. 
// do something and move to "next" thing
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // more than 500? it is google auth
    const isCustomAuth = token.length < 500;

    let decodedData;
    //'test' secrete needs to be samething from contollers
    if(token && isCustomAuth) {
      decodedData = jwt.verify(token, 'test')

      req.userId = decodedData?.id; 
    }else{
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; 
      // sub is google auth id
    }
    next();
  } catch (error) {
    console.log(error);
  }
}

export default auth;