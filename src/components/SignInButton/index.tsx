import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";

const SignInButton: React.FC = () => {
  const [session] = useSession();

  return session ? (
    <button
      onClick={() => signOut()}
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04b361" />
      {session.user.name}
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      SignIn with GitHub
    </button>
  );
};

export default SignInButton;
