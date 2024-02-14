import { ConnectDB } from "../../../../utils/database";
import Users from "../../../../modals/users";

const jwt = require("jsonwebtoken");
const jwtpassword = process.env.JWT_PASSWORD;

//Login user and sending login token if user exists
export const GET = async (req) => {
  const email = req.headers.get("email");
  const password = req.headers.get("password");

  try {
    await ConnectDB();
    const user = await Users.findOne({ email: email });
    if (user && user.password === password) {
      const token = jwt.sign(user.email, jwtpassword);
      return new Response(JSON.stringify({ token: token, messege: "ok" }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ messege: "Invalid Credentials" }), {
        status: 200,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ messege: "Something went wrong" }), {
      status: 500,
    });
  }
};
