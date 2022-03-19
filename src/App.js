import "./App.scss";
import { UsersList } from "./components/usersList/UsersList";
import { UserProfile } from "./components/userProfile/UserProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<UsersList />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
