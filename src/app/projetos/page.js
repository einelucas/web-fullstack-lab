import CardProjeto from "@/components/CardProjeto";

const projetos = [
  {
    id: 1,
    nome: "SmartPlateAI",
    descricao:
      "Aplicação de planejamento alimentar com inteligência artificial.",
    tecnologia: "Next.js + OpenAI",
  },
  {
    id: 2,
    nome: "Web Full-Stack Lab",
    descricao: "Projeto utilizado para estudar desenvolvimento full-stack.",
    tecnologia: "Next.js",
  },
  {
    id: 3,
    nome: "Central de Indicadores",
    descricao: "Painel para acompanhamento de Indicadores Corporativos ",
    tecnologia: "Nuxt + FastAPI",
  },
];

export default function ProjetosPage() {
  return (
    <main>
      <h1>Meus Projetos</h1>
      <p>Aqui ficarão os projetos cadastrados.</p>

      {projetos.map((projeto) => (
        <CardProjeto
          key={projeto.id}
          nome={projeto.nome}
          descricao={projeto.descricao}
          tecnologia={projeto.tecnologia}
        />
      ))}
    </main>
  );
}
