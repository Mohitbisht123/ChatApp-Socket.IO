import jwt from "jsonwebtoken";

const createTokenAndSaveCookies = (userId, res) => {
  const token = jwt.sign(
    { userId },
    process.env.JWT_TOKEN,
    {
      expiresIn: "10d",
    }
  );

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 10 * 24 * 60 * 60 * 1000,
    path: "/",
  });
};

export default createTokenAndSaveCookies;