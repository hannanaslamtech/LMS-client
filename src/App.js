import './App.css';
import { Route, Routes} from "react-router-dom";
import Signup from "./pages/components/Signup";
import Faculty from './pages/FacultyDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import Login from "./pages/components/Login";
import privateRoutes from './Private_Route/privateRoute'
// import Protected from "./pages/Protected";


function App() {
	// const user = localStorage.getItem("token");

	return (
		<Routes>
			
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/" exact element={<Login />} />
			{/* <Route path="/EmployeeDashboard" element={<Navigate replace to="/login" />} /> */}
			
      <Route
        path="/Faculty"
        element={
          <privateRoutes requiredRole={"faculty"}>
            <Faculty />
          </privateRoutes>
        } />
      <Route
        path="/EmployeeDashboard"
        element={
          <privateRoutes requiredRole={"student"}>
            <EmployeeDashboard />
          </privateRoutes>
        }
      />
			<Route path="*" exact element={<div>Page Not Found!</div>} />
			
		</Routes>
	);
}

export default App;