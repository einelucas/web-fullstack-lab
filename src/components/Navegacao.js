import Link from "next/link";

export default function Navegacao() {
  return (
    <nav aria-label="Navegação Principal">
      <Link href="/">Inicio</Link>
      {" | "}
      <Link href="/projetos">Projetos</Link>
      {" | "}
      <Link href="/projetos">Novo Projeto</Link>
    </nav>
  );
}
