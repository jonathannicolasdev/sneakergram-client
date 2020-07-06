import React from "react";

export default function RegisterLogin() {
  return (
    <div>
      <div>
        <img src="/assets/featured-image.jpg" alt="featured" />
      </div>
      <div>
        <h1>Sneakergram</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Register" />
        </form>
        <div>
          <p>
            Have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
