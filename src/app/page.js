"use client";

import Navegacao from "@/components/Navegacao";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [iniciado, setIniciado] = useState(false);

  function iniciarSessao() {
    setIniciado(!iniciado);
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.tittle}>Web Full-Stack Lab</h1>

        <p className={styles.text}>
          {iniciado
            ? "Sessão iniciada com sucesso!"
            : "Meu primeiro Projeto feito com Next.js."}
        </p>

        <button className={styles.button} onClick={iniciarSessao}>
          {iniciado ? "Reiniciar!" : "começar"}
        </button>
        <Navegacao />
      </section>
    </main>
  );
}
