import { Route, Routes } from "react-router-dom";
import { AuthReg } from "./components/general/auth/AuthReg";
import { AuthLogin } from "./components/general/auth/AuthLogin";
import { AuthAddDetails } from "./components/general/auth/AuthAddDetails";
import { AuthUploadPhoto } from "./components/general/auth/AuthUploadPhoto";
import { AuthSubmit } from "./components/general/auth/AuthSubmit";
import { Desk } from "./components/user/desk/Desk";
import { PreviewModel } from "./components/general/auth/PreviewModel";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/*" element={<AuthReg />} />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/add-details" element={<AuthAddDetails />} />
          <Route path="/add-photo" element={<AuthUploadPhoto />} />
          <Route path="/confirmation-code" element={<AuthSubmit />} />
          <Route path="/desk" element={<Desk />} />
          {/* <Route path="/model-preview" element={<PreviewModel />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
