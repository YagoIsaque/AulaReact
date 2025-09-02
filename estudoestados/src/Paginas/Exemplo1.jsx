export default function Exemplo1() {
  return (
    <div>
      <h1>Exemplo 1</h1>
      <div className="conteudo">
        <h3> Exemplo UseState</h3>

        <p>
          O objetivo aqui será receber dois numeros, soma - los e exibir o resultado.
        </p>

        <form>
          <p>
          Digite o primeiro numero <br />
          <input type="text" />
          </p>

          <p>
          Digite o segundo numero <br />
          <input type="text" />
          </p>

          <p>
            <input type="button" value="Calcular" />  
          </p>

        </form>

      </div>
      
    </div>
  );
}
