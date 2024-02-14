import { ConnectDB } from "../../../../utils/database";
import Users from "../../../../modals/users";

//Checking weather provided email already exists or not
const userExistsEmail = async (input) => {
  await ConnectDB();
  let userExists = false;
  const email = await Users.findOne({ email: input });
  if (email !== null) {
    console.log("user is" + email);
    userExists = true;
  }
  return userExists;
};

//Checking weather provided mobile Number already exists or not
const userExistsMobile = async (input) => {
  await ConnectDB();
  let userExists = false;
  const mobile = await Users.findOne({ mobile: input });
  if (mobile !== null) {
    console.log("user is" + mobile);
    userExists = true;
  }
  return userExists;
};

//Register new user
export const POST = async (req) => {
  const { user } = await req.json();
  if (await userExistsEmail(user.email)) {
    return new Response(
      JSON.stringify({
        messege: "Email Alreary Exists",
      }),
      {
        status: 200,
      }
    );
  } else if (await userExistsMobile(user.mobile)) {
    return new Response(
      JSON.stringify({
        messege: "Mobile Alreary Registered",
      }),
      {
        status: 200,
      }
    );
  } else {
    try {
      await ConnectDB();
      const newUser = new Users(user);
      newUser.save();
      return new Response(
        JSON.stringify({
          res: " 🔥 User Registered Successfully",
          messege: "ok",
        }),
        { status: 200 }
      );
    } catch (error) {
      return new Response(JSON.stringify({ messege: "Something went wrong" }), {
        status: 500,
      });
    }
  }
};
