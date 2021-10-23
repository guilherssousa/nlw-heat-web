import { useContext } from "react";
import { ToastContainer } from "react-toastify";

import { AuthContext } from "./contexts/auth";

import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";
import { LoginBox } from "./components/LoginBox";

import styles from "./App.module.scss";

import "react-toastify/dist/ReactToastify.css";

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main
      className={`${styles.contentWrapper} ${
        !!user ? styles.contentSigned : ""
      }`}
    >
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
      <ToastContainer />
    </main>
  );
}
