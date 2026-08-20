"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [iniciado, setIniciado] = useState(false);

  function iniciarSessao() {
    setIniciado((valorAtual) => !valorAtual);
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>Web Full-Stack Lab</h1>

        <p className={styles.text}>
          {iniciado
            ? "Sessão iniciada com sucesso!"
            : "Meu primeiro projeto feito com Next.js."}
        </p>

        <button className={styles.button} onClick={iniciarSessao}>
          {iniciado ? "Reiniciar!" : "Começar"}
        </button>
      </section>
    </main>
  );
}
