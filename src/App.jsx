import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/home";
import { Navigate } from "react-router-dom";
import UserRootLayout from "./Layout/UserRootLayout";
import SingleMovie from "./pages/user/SingleMovie";


function App() {


  return (
    <Routes>

      <Route path="/" element={<Navigate to="/user" />} />
      <Route path="/user" element={<UserRootLayout />}>
        <Route path="/user/" element={<HomePage />} />
        <Route path="/user/:category/:id" element={<SingleMovie />} />

      </Route>

    </Routes>
  );
}

export default App;
