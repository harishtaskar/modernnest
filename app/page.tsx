"use client";
import EndCredits from "@/components/Home/EndCredits";
import FeatureProducts from "@/components/Home/FeatureProducts";
import Footer from "@/components/shared/Footer";
import Background from "@/components/HOC/Background";
import Heading from "@/components/HOC/Heading";
import Hero from "@/components/Home/Hero";
import { activeModalState } from "@/state";
import { useMemo } from "react";
import { ToastContainer } from "react-toastify";
import { useRecoilValue } from "recoil";

export default function Home() {
  const activeModal = useRecoilValue(activeModalState);

  const renderHeading = useMemo(() => {
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
    <div
      className={"main"}
      style={
        activeModal !== "" ? { overflow: "hidden" } : { overflow: "scroll" }
      }
    >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Hero />
      <Background body={renderHeading} />
      <FeatureProducts />
      <Footer />
      <EndCredits text="Made With Love By Harishtaskar All Right Reserved " />
    </div>
  );
}
