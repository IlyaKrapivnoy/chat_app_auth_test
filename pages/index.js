import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
    const { username, secret, setUsername, setSecret } = useContext(Context);

    const router = useRouter();

    function onSubmit(e) {
        e.preventDefaul()

        if(username.length === 0 || secret.length === 0) return

        axios.put(
            'https://api.chatengine.io/users/',
            {username, secret},
            {header: {"Private-key": "c682b18a-5ea4-48ca-b28b-bf333e1f3062"}}
        )
            .then(r => router.push('/chats'))
    }


  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Password"
              type="password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
