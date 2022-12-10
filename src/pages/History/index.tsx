import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryConatiner, HistoryList, Status } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryConatiner>
      <h1>Meu hitórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Hà 2 meses</td>
              <td>
                <Status statusColor={"green"}>Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Hà 2 meses</td>
              <td>
                <Status statusColor={"green"}>Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Hà 2 meses</td>
              <td>
                <Status statusColor={"green"}>Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Hà 2 meses</td>
              <td>
                <Status statusColor={"green"}>Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Hà 2 meses</td>
              <td>
                <Status statusColor={"yellow"}>Em andamento</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Hà 2 meses</td>
              <td>
                <Status statusColor={"red"}>Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryConatiner>
  );
}
