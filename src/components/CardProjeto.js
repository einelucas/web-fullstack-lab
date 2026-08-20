export default function CardProjeto({ nome, descricao, tecnologia }) {
  return (
    <article>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p>Tecnologia: {tecnologia}</p>
    </article>
  );
}
