import React from "react";
import { useNavigate,Navigate, Route, Routes} from "react-router-dom";

const NestedRoutes = () => {
    const navigate=useNavigate()
    
    // const status = 404

    // if (status === 404) {
    //     return <Navigate to="/notfound" />
    // }




  const onClick = () => {
    console.log("clicked");
    navigate("/");
  };

  return (
    <div>
      <button onClick={onClick}>Home</button>
      <Routes>
        <Route path="firstComp" element={<div>firstComp</div>} />
      </Routes>
    </div>
  );
};

export default NestedRoutes;
