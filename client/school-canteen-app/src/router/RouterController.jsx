import React from "react";

function RouteController() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export { RouteController };
