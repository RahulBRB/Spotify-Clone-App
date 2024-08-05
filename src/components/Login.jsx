import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = async () => {
  const client_id = "844876e388a04954bac8fba5ed951770";
  const redirect_uri = encodeURIComponent("https://spotify-clone-rb.vercel.app/");
  const api_uri = "https://accounts.spotify.com/authorize";
  const scope = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
  ];
  const scopeString = encodeURIComponent(scope.join(" "));
  window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopeString}&response_type=token&show_dialog=true`;
};
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
