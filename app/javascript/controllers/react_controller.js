import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "../components/App.jsx"

export default class extends Controller {
  connect() {
    const app = document.getElementById('app')
    if (app) {
      const root = createRoot(app);
      root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    }
  }
}
