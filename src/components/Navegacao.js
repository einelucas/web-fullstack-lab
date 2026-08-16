import Link from "next/link";

export default function Navegacao() {
  return (
    <nav aria-label="Navegação principal">
      <Link href="/">Início</Link>
      {" | "}
      <Link href="/projetos">Projetos</Link>
      {" | "}
      <Link href="/projetos/novo">Novo projeto</Link>
    </nav>
  );
}
