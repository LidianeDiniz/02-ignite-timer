import { FormContainer, MinutesAmountInput, TaskInput } from "../../styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newCycleFormValidationsSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O ciclo deve ser de no minímo 5 minutos")
    .max(60, "O ciclo deve ser de no minímo 60 minutos"),
});

/*
O register recebe o nome do input e retorna alguns métodos que utilizamos para trabalhar com inputs. 
Exemplo:

function register(name: string){
  return{
    onChange: () => void;
    onBlur: () => void;
    onFocus: () => void;
    e muitos outros
  }

  }
*/

const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
  resolver: zodResolver(newCycleFormValidationsSchema),
  defaultValues: {
    task: "",
    minutesAmount: 0,
  },
});

// interface NewCycleFormData {
// task: string;
// minutesAmount: number;
// }

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>
      <TaskInput
        id="task"
        list="task-sugestions"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-sugestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}

        /* {valueAsNumber: true}  é um objeto de configurações ele vai transformar este input em number passa a aceitar somente números */
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
