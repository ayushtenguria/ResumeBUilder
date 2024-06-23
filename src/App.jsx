import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import "./App.css";
import Header from "./components/custom/Header";

function App() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/auth/sign-in" />;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
