import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Notes from "./components/Notes";
import NotesView from "./components/NotesView";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-w-[100%]">
        <NavBar />
        <HomePage />
      </div>
    ),
  },
  {
    path: "/notes",
    element: (
      <div className="min-w-[80vw]">
        <NavBar />
        <Notes />
      </div>
    ),
  },
  {
    path: "/notes/:id",
    element: (
      <div className="min-w-[80vw]">
        <NavBar />
        <NotesView />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
