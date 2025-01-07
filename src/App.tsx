import { BrowserRouter, Route, Routes } from "react-router";
import pagesConfig from "./pages.config";
import { Layout } from "./layouts";
import { GamePage, MainPage, PrivacyPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={pagesConfig.MAIN_PAGE} element={<MainPage />} />
          <Route
            path={pagesConfig.PRIVACY_POLICY_PAGE}
            element={<PrivacyPage />}
          />
          <Route path={pagesConfig.GAME_PAGE} element={<GamePage />} />

          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
