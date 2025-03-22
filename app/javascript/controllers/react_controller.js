import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from "react-dom/client"

export default class extends Controller {
  connect() {
    const app = document.getElementById('app')
    if (app) {
      const root = createRoot(app)
      root.render(<h1>Hello, React!</h1>)
    }
  }
}
