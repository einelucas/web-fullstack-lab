import Link from "next/link";
import styles from "./Navegacao.module.css";

export default function Navegacao() {
  return (
    <nav className={styles.nav} aria-label="Navegação Principal">
      <Link href="/">Início</Link>
      {" | "}
      <Link href="/projetos">Projetos</Link>
      {" | "}
      <Link href="/projetos/novo">Novo projeto</Link>
    </nav>
  );
}
