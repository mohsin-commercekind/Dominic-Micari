import React from "react";
import "./index.css";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <RouterProvider router={router} />
    </div>
  );
}
