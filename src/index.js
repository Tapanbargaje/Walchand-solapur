import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import AcadPage from './Pages/AcadPage';
import AdmissionsPage from './Pages/AdmissionsPage';
import ProgramPage from './Pages/ProgramPage';
import MenuPage from './Pages/MenuPage';
import AccPage from './Pages/AccPage';
import ElearnPage from './Pages/E-learnPage';
import PlacePage from './Pages/PlacePage';
import CareerPage from './Pages/CareerPage';
import ClubsPage from './Pages/ClubsPage';
import CivilPage from './Pages/CivilPage';
import CsPage from './Pages/CsPage';
import EcsPage from './Pages/EcsPage';
import EntcPage from './Pages/EntcPage';
import ItPage from './Pages/ItPage';
import MechPage from './Pages/MechPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Contact",
    element: <ContactPage />,
  },
  {
    path: "About",
    element: <AboutPage />,
  },
  {
    path: "Admissions",
    element: <AdmissionsPage />,
  },
  {
    path: "Acad",
    element: <AcadPage />,
  },
  {
    path: "Program",
    element: <ProgramPage />,
  },
  {
    path: "menu",
    element: <MenuPage />,
  },
  {
    path: "accreditation",
    element: <AccPage />,
  },

  {
    path: "E-learning",
    element: <ElearnPage />,
  },
  {
    path: "placements",
    element: <PlacePage />,
  },
  {
    path: "career",
    element: <CareerPage />,
  },
  {
    path: "club",
    element: <ClubsPage />,
  },
  {
    path: "civil_pg",
    element: <CivilPage />,
  },
  {
    path: "cs_pg",
    element: <CsPage />,
  },  
  {
    path: "ecs_pg",
    element: <EcsPage />,
  }, 
  {
    path: "entc_pg",
    element: <EntcPage />,
  }, 
  {
    path: "it_pg",
    element: <ItPage />,
  }, 
  {
    path: "mech_pg",
    element: <MechPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
