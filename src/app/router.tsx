import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobsPage } from "./pages/JobsPage";
import { CandidatePage } from "./pages/CandidatePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CandidatePage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
