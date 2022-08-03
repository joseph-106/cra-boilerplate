import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "components/common";

const Main = lazy(() => import("pages/Main"));
const Demo = lazy(() => import("pages/Demo"));
// const NotFound = lazy(() => import("pages/NotFound"));

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* 404 */}
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/demo" element={<Demo />} />
            {/* Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
