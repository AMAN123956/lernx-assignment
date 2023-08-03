import React from "react";
// import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Body from "./components/body";
import './App.css'
export default function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Body />
    </div>
  );
}
