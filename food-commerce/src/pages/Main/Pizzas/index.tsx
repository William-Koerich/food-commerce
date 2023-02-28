import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/Title";
import { getPizzas } from "../../../services/api";

export default function Pizzas () {

   const [pizzas, setPizzas] = useState([])

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