import { useSelector } from "react-redux";
import { CreateClass, Dashboard, Navbar } from "./Components";
import Login from "./Components/Login";
import { Navigate, Route, Routes } from "react-router-dom";
const App = () => {
  const { isLoggedIn } = useSelector((store) => store.admin);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        ></Route>
        <Route path="/create-class" element={<CreateClass />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
