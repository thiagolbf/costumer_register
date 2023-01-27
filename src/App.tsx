import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Globalstyle } from "./style/global";

function App() {
  return (
    <>
      <Globalstyle />
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />

      <h1>hello</h1>
    </>
  );
}

export default App;
