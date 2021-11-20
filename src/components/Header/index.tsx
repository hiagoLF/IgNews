import SignInButton from "../SignInButton";
import styles from "./styles.module.scss";
import { useRouter } from "next/dist/client/router";
import ActiveLink from "../ActiveLink";

const Header: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="" />

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
