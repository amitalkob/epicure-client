import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Homepage from "../pages/Homepage";
import RestaurantsPage from "../pages/RestaurantsPage";
import RestaurantPage from "../pages/RestaurantPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import GuardedRoute from "./GuardedRoute";
import UserPage from "../pages/UserPage/UserPage";
import Admin from "../pages/Admin";
import AddEditRest from "./AddEdit/AddEditRest";
import AddEditDish from "./AddEdit/AddEditDish";
import AddEditChef from "./AddEdit/AddEditChef";

const Navigation = () => {
  return (
    <Router>
      <Header />
      <section>
        <Routes>
          <Route
            path="/"
            element={
              <GuardedRoute>
                <Homepage />
              </GuardedRoute>
            }
          />
          <Route
            path="restaurants"
            element={
              <GuardedRoute>
                <RestaurantsPage />
              </GuardedRoute>
            }
          />
          <Route
            path="/restaurants/:id"
            element={
              <GuardedRoute>
                <RestaurantPage />
              </GuardedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <GuardedRoute>
                <UserPage />
              </GuardedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <GuardedRoute>
                <Admin />
              </GuardedRoute>
            }
          />
          <Route
            path="/admin/add-rest"
            element={
              <GuardedRoute>
                <AddEditRest />
              </GuardedRoute>
            }
          />
          <Route
            path="/admin/edit-rest/:id"
            element={
              <GuardedRoute>
                <AddEditRest />
              </GuardedRoute>
            }
          />
          <Route
            path="/admin/add-dish"
            element={
              <GuardedRoute>
                <AddEditDish />
              </GuardedRoute>
            }
          />
          <Route
            path="/admin/edit-dish/:id"
            element={
              <GuardedRoute>
                <AddEditDish />
              </GuardedRoute>
            }
          />
          <Route
            path="/admin/add-chef"
            element={
              <GuardedRoute>
                <AddEditChef />
              </GuardedRoute>
            }
          />
          <Route
            path="/admin/edit-chef/:id"
            element={
              <GuardedRoute>
                <AddEditChef />
              </GuardedRoute>
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  );
};

export default Navigation;
