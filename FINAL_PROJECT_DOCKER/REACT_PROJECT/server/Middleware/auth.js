import jwt from 'jsonwebtoken'

function verifyToken(req, res, next) {
  const token = req.cookies.AuthToken;
  console.log(token);
  
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, "your-secret-key");
    req.UserType = decoded.UserType;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
export {verifyToken}