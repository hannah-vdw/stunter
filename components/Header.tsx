import Image from "next/image.js";

import logo from "../public/logo.svg";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>stunter</h1>
      <Image src={logo} alt="" height={45} width={45} />
    </header>
  );
};

export default Header;
