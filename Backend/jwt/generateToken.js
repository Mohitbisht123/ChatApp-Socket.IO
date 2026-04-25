import jwt from "jsonwebtoken";

const createTokenAndSaveCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10d"
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,        // ✅ FIXED
    sameSite: "lax"       // ✅ FIXED
  });
};

export default createTokenAndSaveCookies;