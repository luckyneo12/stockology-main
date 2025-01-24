/** @format */

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/Auth/ForgetPassword";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ResetPassword from "./components/Auth/ResetPassword";
import Contact_page from "./components/contact/Contact";
import Courses from "./components/Courses/Courses";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Request from "./components/Request/Request";
import About from "./components/About/About";
import Subscribe from "./components/Payments/Subscribe";
import PaymentFail from "./components/Payments/PaymentFail";
import PaymentSuccess from "./components/Payments/PaymentSuccess";
import NotFound from "./components/Layout/NotFound/NotFound";
import CoursePage from "./components/CoursePage/CoursePage";
import Profile from "./components/Profile/Profile";
import ChangePassword from "./components/Profile/ChangePassword";
import UpdateProfile from "./components/Profile/UpdateProfile";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import CreateCourse from "./components/Admin/CreateCourse/CreateCourse";
import AdminCourses from "./components/Admin/AdminCourses/AdminCourses";
import Users from "./components/Admin/Users/Users";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/actions/user";
import { ProtectedRoute } from "protected-route-react";
// import Loader from "./components/Layout/Loader/Loader";
import TermAndCondition from "./components/Term/TermAndCondition";
// import Charts from "./components/Charts/Charts";
// import WebinarPopup from "./components/popup/WebinarPopup";
// import News from "./components/News.jsx/News";
import LandingPage from "./components/webinar/LandingPage";
import Webinar from "./components/Admin/webinar/Webinar";
import Contacts from "./components/Admin/Contacts/Contacts";
import CreateNotification from "./components/Admin/createnotification/CreateNotification";
import AllNotifications from "./components/Admin/createnotification/AllNotification";
import PrivacyPolicy from "./components/Term/PrivacyPolicy";
import Partners from "./components/Partners/Partners";
import AllPartners from "./components/Admin/partners/Partners";
import PartnersForm from "./components/Partners/PartnersForm";
import PartnersThanks from "./components/Partners/PartnersThanks";
import WebinarPopup from "./components/popup/WebinarPopup";
import Test from "./components/test/Test";
import Online_page from "./components/Online_Courses/Online_page";
import Offline_Courses from "./components/Offline_Courses/Offline_Courses";
import RefundPolicy from "./components/Term/RefundPolicy";
import Event from "./components/Events/Event";
import Screener from "./components/Screener/Screener";
import StrategyBuilder from "./components/StrategyBuilder/StrategyBuilder";
import Portfolio from "./components/Porfolio/Portfolio";

function App() {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  const { isAuthenticated, user, message, error } = useSelector(
    (state) => state.user
  );

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(webinar(name, email, phone, message));
  //   closeHandler();
  // // };
  const [visible, setVisible] = useState(true);

  const closeHandler = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <>
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          closeHandler={closeHandler}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home isAuthenticated={isAuthenticated} user={user}>
                {!isAuthenticated && (
                  <WebinarPopup closeHandler={closeHandler} />
                )}
              </Home>
            }
          />

          <Route path="/strategy-builder" element={<StrategyBuilder />} />
          <Route path="/strategy-builder/portfolio" element={<Portfolio />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/offline-courses" element={<Offline_Courses />} />
          <Route path="/online-courses" element={<Online_page />} />

          <Route path="/test" element={<Test />} />
          <Route path="/partnersregister" element={<PartnersForm />} />
          <Route
            path="/partnersregister"
            element={
              <ProtectedRoute redirect="/thank-you">
                <PartnersForm />
              </ProtectedRoute>
            }
          />
          <Route path="/webinar" element={<LandingPage />} />
          <Route path="/thank-you" element={<PartnersThanks />} />
          <Route
            path="/course/:id"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CoursePage user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contact_page />} />
          <Route path="/screener" element={<Screener />} />

          <Route path="/termandcondition" element={<TermAndCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/request" element={<Request />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Event />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/changepassword"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ChangePassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/updateprofile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UpdateProfile user={user} />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/news"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <News />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forgetpassword"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
                <ForgetPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resetpassword/:token"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <ResetPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subscribe"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Subscribe user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfail" element={<PaymentFail />} />
          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/createcourse"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
              >
                <CreateCourse />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/createnotification"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
              >
                <CreateNotification />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/courses"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
              >
                <AdminCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
              >
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/contacts"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
              >
                <Contacts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/webinar"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
              >
                <Webinar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/allnotification"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
              >
                <AllPartners />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/Partners"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === "admin"}
              >
                <AllNotifications />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster position="top-right" />

        <Footer />
      </>
    </Router>
  );
}

export default App;

// Admin admincourses
