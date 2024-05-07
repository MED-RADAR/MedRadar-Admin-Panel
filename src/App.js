import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import ApprovedUsers from "./pages/ApprovedUsers/ApprovedUsers";
import BannedUsers from "./pages/BannedUsers/BannedUsers";
import View from "./pages/View/View";
import Hospitals from "./pages/Hospitals/Hospitals";
import Requests from "./pages/Requests/Requests";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./pages/Loader/Loader";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { loading } = useLoadingWithRefresh();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <Loader />
        ) : (
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route
                  path="/"
                  element={
                    <LoginProtectAuth>
                      <Dashboard />
                    </LoginProtectAuth>
                  }
                />
                {/* <Route
                path="/"
                element={
                  <LoginProtectAuth>
                    <Dashboard />
                  </LoginProtectAuth>
                }
              /> */}

                {/* <Route
                path="/login"
                element={
                  <LoginProtectAuth>
                    <Dashboard />
                  </LoginProtectAuth>
                }
              /> */}

                <Route
                  path="/approvedUsers"
                  element={
                    <LoginProtectAuth>
                      <ApprovedUsers />
                    </LoginProtectAuth>
                  }
                />

                {/* <Route path="/bannedUsers" element={<BannedUsers />} /> */}
                {/* <Route path="/complaint" element={<Complaint  />}/> */}
                <Route path="/view" element={<View />} />

                <Route
                  path="/hospitals"
                  element={
                    <LoginProtectAuth>
                      <Hospitals />
                    </LoginProtectAuth>
                  }
                />
                <Route
                  path="/requests"
                  element={
                    <LoginProtectAuth>
                      <Requests />
                    </LoginProtectAuth>
                  }
                />
                <Route path="/detailsPage" element={<DetailsPage />} />
                <Route
                  path="/login"
                  element={
                    <LogedinProtectAuth>
                      <Login />
                    </LogedinProtectAuth>
                  }
                />
              </Routes>
            </main>
          </div>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const LoginProtectAuth = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useSelector((state) => state.auth);
  // if (isAuth) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
const LogedinProtectAuth = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useSelector((state) => state.auth);
  if (isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default App;
