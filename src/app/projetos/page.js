import CardProjeto from "@/components/CardProjeto";

export default function ProjetosPage() {
  return (
    <main>
      <h1>Meus Projetos</h1>
      <p>Aqui ficarão os projetos cadastrados.</p>

      <CardProjeto
        nome="Web Full-Stack Lab"
        descricao="Projeto utilizado para estudar desenvolvimento full-stack."
        tecnologia="Next.js"
      />

      <CardProjeto
        nome="SmartPlate"
        descricao="Aplicação de planejamento alimentar com inteligência artificial."
        tecnologia="Next.js + OpenAI"
      />
    </main>
  );
}
