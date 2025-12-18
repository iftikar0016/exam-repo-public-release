import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";

export default function ({ user, weight }) {
    const correct = "42";
    return {
        id: "q-sample-1",
        weight,
        html: html`
      <div>
        <h3>Sample Question</h3>
        <p>What is the answer to life, the universe, and everything?</p>
        <input type="text" name="answer" placeholder="Enter number..." />
      </div>
    `,
        check: (answer) => answer.trim() === correct,
    };
}
