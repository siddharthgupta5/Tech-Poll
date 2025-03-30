import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import TeacherProfile from "./pages/teachersProfile/TeacherProfile";
import StudentProfile from "./pages/studentsProfile/StudentProfile";
import StudentPoll from "./pages/studentsPoll/StudentPoll";
import TeacherPoll from "./pages/teachersPoll/TeacherPoll";
import PollHistory from "./pages/pollsHistory/PollHistory";
import TeacherProtectedRoute from "./components/protectRoute/TeacherProtect";
import StudentProtectedRoute from "./components/protectRoute/StudentProtect";
import TeacherLogin from "./pages/teachersProfile/TeacherLogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route
          path="/teacher-home-page"
          element={
            <TeacherProtectedRoute>
              <TeacherProfile />
            </TeacherProtectedRoute>
          }
        />
        <Route path="/student-home-page" element={<StudentProfile />} />

        <Route
          path="/poll-question"
          element={
            <StudentProtectedRoute>
              <StudentPoll />
            </StudentProtectedRoute>
          }
        />
        <Route
          path="/teacher-poll"
          element={
            <TeacherProtectedRoute>
              <TeacherPoll />
            </TeacherProtectedRoute>
          }
        />
        <Route
          path="/teacher-poll-history"
          element={
            <TeacherProtectedRoute>
              <PollHistory />
            </TeacherProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
