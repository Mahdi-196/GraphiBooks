import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
  _id: unknown;
  username: string;
  email: string;
}

export const authenticateToken = (req: any) => {
  const authHeader = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET_KEY || '';

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, secretKey) as JwtPayload;
      return { user: decoded };
    } catch {
      return { user: null };
    }
  }
  return { user: null };
};

export const signToken = (username: string, email: string, _id: unknown) => {
  const payload = { username, email, _id };
  const secretKey = process.env.JWT_SECRET_KEY || '';
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};
