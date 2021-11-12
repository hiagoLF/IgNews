import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

const SignInButton: React.FC = () => {
  const isUserLogedIn = true;

  return isUserLogedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04b361" />
      Hiago Leão
      <FiX className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      SignIn with GitHub
    </button>
  );
};

export default SignInButton;
