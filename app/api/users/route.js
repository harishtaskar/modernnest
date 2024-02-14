import { ConnectDB } from "../../../utils/database";
import Users from "../../../modals/users";

const jwt = require("jsonwebtoken");
const jwtpassword = process.env.JWT_PASSWORD;

//Sending user details to provided token
export const GET = async (req) => {
  const token = req.headers.get("Authorization");
  try {
    const verifiedEmail = jwt.verify(token, jwtpassword);
    await ConnectDB();
    const user = await Users.findOne({ email: verifiedEmail });
    if (user !== null) {
      return new Response(JSON.stringify({ user: user, messege: "ok" }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ messege: "User Not Exists" }), {
        status: 200,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ messege: "Something went wrong" }), {
      status: 500,
    });
  }
};
