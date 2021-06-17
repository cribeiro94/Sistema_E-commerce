import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id, 
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, 
    process.env.JwT_SECRET || 'somethingsecret', 
    {
      expiresIn: '30d',
    } 
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // O portador do token XXXXXX
    jwt.verify(
      token, 
      process.env.JwT_SECRET || 'somethingsecret', 
      (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token Inválido' });
       } else {
        req.user = decode;
        next();
       }
     }
   );
  } else {
    res.status(401).send({ message: 'Token Não Encontrado' });
  }
};