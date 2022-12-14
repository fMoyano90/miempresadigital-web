import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../views/home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};
