const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);

  return (
    <div className="contaienr">
      <h1 className={contador < 0 ? "menor" : "mayor"}>
        Contadorrr {contador}
      </h1>
      <div className="btns">
        <button onClick={disminuir}>disminuir</button>
        <button onClick={aumentar}>aumentar</button>
      </div>
    </div>
  );
};
