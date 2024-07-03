import React from "react";
import Lottie from "lottie-react";
import Animation from "../../assets/loading.json";

export default function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <div style={{ width: 300, height: 300 }}>
        <Lottie animationData={Animation} />
      </div>
    </div>
  );
}
