const jwt = require("jsonwebtoken");
const CustomErrorHandler = require("../error/custom-error-handler");

module.exports = function (req, res, next) {
  try {
    // ✅ Tokenni cookie dan olish
    const access_token = req.cookies?.AccessToken;
    
    // ✅ Token yo‘q bo‘lsa — xatolik
    if (!access_token) {
      throw CustomErrorHandler.UnAuthorized("Token topilmadi!");
    }

    // ✅ Tokenni tekshirish
    jwt.verify(access_token, process.env.ACCESS_SECRET_KEY, (err, decoded) => {
      if (err) {
        throw CustomErrorHandler.Forbidden("Yaroqsiz token!");
      }

      // ✅ Token ichidagi user ma’lumotini saqlaymiz
      req.user = decoded;
      next(); // <-- shu yerda qo‘yiladi, verify ichida
    });
  } catch (error) {
    next(error);
  }
};
