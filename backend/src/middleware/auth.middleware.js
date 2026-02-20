import User from "../modals/User";
import { jws } from "jsonwebtoken";
import { ENV } from "../lib/env";

export const protectRout = async (req, res, next) => {
  try {
    const token = req.cookies.jws;
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Is Provided" });

    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User Not Found" });

    req.user = user;
    next();
  } catch (error) {}
};
