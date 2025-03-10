import { useSelector } from "react-redux";
import { CreateClass, Dashboard, Navbar, Login } from "./Components";
import { Navigate, Route, Routes } from "react-router-dom";
import { ClassFeedbackForm } from "./Containers";
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
        <Route
          path="/feedback/:classId"
          element={
            isLoggedIn ? <ClassFeedbackForm /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </>
  );
};

export default App;
