import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { TroncCommun } from "./pages/TroncCommun";
import { PremiereBac } from "./pages/PremiereBac";
import { DeuxiemeBac } from "./pages/DeuxiemeBac";
import { Courses } from "./pages/Courses";
import Quizzes from "./pages/Quizzes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/niveau/tronc-commun" element={<TroncCommun />} />
        <Route path="/niveau/1ere-bac" element={<PremiereBac />} />
        <Route path="/niveau/2eme-bac" element={<DeuxiemeBac />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
