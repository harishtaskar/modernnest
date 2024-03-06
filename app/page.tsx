"use client";
import FeatureProducts from "@/components/Home/FeatureProducts";
import Background from "@/components/HOC/Background";
import Heading from "@/components/HOC/Heading";
import Hero from "@/components/Home/Hero";
import { useMemo } from "react";
import { ToastContainer, Slide } from "react-toastify";
import "../firebase.js";

export default function Home() {
  const renderHeading = useMemo(() => {
    ``;
    return (
      <Heading
        mainHeading="Featured Products"
        subHeading1="Featured Products"
        subHeading2="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: 
            Newtonian mechanics "
      />
    );
  }, []);

  return (
    <div className={"main"}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Hero />
      <Background body={renderHeading} />
      <FeatureProducts />
    </div>
  );
}
