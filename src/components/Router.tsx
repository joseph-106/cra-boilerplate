import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Demo } from "pages";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="demo" element={<Demo />} />
          {/* Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
