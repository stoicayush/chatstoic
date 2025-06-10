import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
    httpOnly: true,                 // protects from XSS
    sameSite: "None",              // allows cross-origin cookies (Vercel + Render)
    secure: true,                  // ensures cookie is only sent over HTTPS
  });

  return token;
};
