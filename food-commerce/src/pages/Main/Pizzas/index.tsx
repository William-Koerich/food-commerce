import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/Title";
import { SnackData } from "../../../interfaces/SnackData";
import { getPizzas } from "../../../services/api";

export default function Pizzas () {

   const [pizzas, setPizzas] = useState<SnackData[]>([])

   useEffect((() => {
      (async () => {
         const pizzasRequest = await getPizzas()

         setPizzas(pizzasRequest.data)
      })()
   }),[])

   return <>
      <Head title="Dona Floripa"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
   </>
}