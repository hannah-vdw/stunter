import Image from "next/image.js";

import logo from "../public/logo.svg";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="" height={45} width={45} />
      <h1>stunter</h1>
    </header>
  );
};

export default Header;
