import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/Title";
import { useSnack } from "../../../hooks/useSnack";

export default function Pizzas () {

   const { pizzas } = useSnack()

   return <>
      <Head title="Dona Floripa"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
   </>
}