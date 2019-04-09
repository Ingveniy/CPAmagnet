import jwt from 'jsonwebtoken';
import config from 'config';

module.exports = () => {
  return (req, res, next) => {
    console.log('req', req.path);
    const publicPaths = [
      '/api/v1/login',
      'storage/images',
    ];
    const allowNotSignedRequests = publicPaths.some(p =>
      new RegExp(p).test(req.path)
    );
    if (allowNotSignedRequests) {
      next();
      return;
    }

    //return res.status(401).json({ message: 'Token verification failed' });
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, config.get('jwt.secretKey'), (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Token verification failed' });
        }
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(401).json({ message: 'Token verification failed' });
    }
  };
};

