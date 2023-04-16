import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Valorant from "./components/event_forms/valorant";
import Fifa from "./components/event_forms/fifa";
import Bgmi from "./components/event_forms/bgmi";
// import Home from "./components/home";
import SuccussPage from "./components/event_forms/sucess";
import EventPage from "./components/event_forms/eventpage";
import App from "./App";
import Rendezvous from "./components/event_forms/rendezvous";
import Hackathon from "./components/event_forms/hackathon";
// import gaming_arena from "dance_gif.gif"

function Routee() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/valorant-registration" exact element={<Valorant />} />
          <Route path="/fifa-registration" exact element={<Fifa />} />
          <Route path="/bgmi-registration" exact element={<Bgmi />} />
          <Route path="/succuss" exact element={<SuccussPage />} />
          <Route
            path="/valorant"
            exact
            element={
              <EventPage
                eventName="Valorant"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
                reference="/valorant-registration"
                // imgLink={gaming_arena}
              />
            }
          />
          <Route
            path="/fifa"
            exact
            element={
              <EventPage
                eventName="Fifa"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
                reference="/fifa-registration"
              />
            }
          />
          <Route
            path="/pubg"
            exact
            element={
              <EventPage
                eventName="BGMI"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
                reference="/bgmi-registration"
              />
            }
          />
          <Route
            path="/hackathon"
            exact
            element={
              <EventPage
                eventName="Hackathon"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
                reference="/hackathon-registration"
              />
            }
          />
          <Route
            path="/rendezvous"
            exact
            element={
              <EventPage
                eventName="Rendezvous"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
                reference="/rendezvous-registration"
              />
            }
          />
          <Route
            path="/gaming-arena"
            exact
            element={
              <EventPage
                eventName="Gaming Arena"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            }
          />
          <Route
            path="/hallucinate"
            exact
            element={
              <EventPage
                eventName="Hallucinate"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            }
          />
          <Route
            path="/laser-maze"
            exact
            element={
              <EventPage
                eventName="Lazer Maze"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            }
          />
          <Route
            path="/flash"
            exact
            element={
              <EventPage
                eventName="Flash"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            }
          />
          <Route
            path="/rendezvous-registration"
            exact
            element={<Rendezvous />}
          />
          <Route path="/hackathon-registration" exact element={<Hackathon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routee;
