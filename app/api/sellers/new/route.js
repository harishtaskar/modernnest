import { NextResponse } from "next/server";
import Seller from "../../../../modals/seller";
import { ConnectDB } from "../../../../utils/database";
import initMiddleware from "./../../../../utils/initMiddleware";

//Checking weather provided email already exists or not
const sellerExistsEmail = async (input) => {
  await ConnectDB();
  let userExists = false;
  const email = await Seller.findOne({ "business.email": input });
  console.log("---email" + email);
  if (email !== null) {
    userExists = true;
  }
  return userExists;
};

//Checking weather provided mobile Number already exists or not
const sellerExistsMobile = async (input) => {
  await ConnectDB();
  let userExists = false;
  const mobile = await Seller.findOne({ "business.contact": input });
  console.log("---mobile" + mobile);
  if (mobile !== null) {
    userExists = true;
  }
  return userExists;
};

//Register new user
export const POST = async (req, res) => {
  const { seller } = await req.json();
  if (await sellerExistsEmail(seller.business.email)) {
    return new Response(
      JSON.stringify({
        messege: "Email Alreary Exists",
      }),
      {
        status: 200,
      }
    );
  } else if (await sellerExistsMobile(seller.business.contact)) {
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
      const newSeller = new Seller(seller);
      await newSeller.save();
      return new Response(
        JSON.stringify({
          res: " 🔥 New Seller Registered Successfully",
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
