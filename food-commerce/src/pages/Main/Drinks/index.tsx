import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/Title";
import { useSnack } from "../../../hooks/useSnack";

export default function Drinks () {

   const { drinks } = useSnack()

   return <>
   <Head title="Botequim da Brava"/>
   <SnackTitle>Bebidas</SnackTitle>
   <Snacks snacks={drinks}></Snacks>
</>
}