import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/Title";
import { getDrinks } from "../../../services/api";

export default function Drinks () {

   const [drinks, setDrinks] = useState([])

   useEffect((() => {
      (async () => {
         const drinkRequest = await getDrinks()

         setDrinks(drinkRequest.data)
      })()
   }),[])

   return <>
   <Head title="Botequim da Brava"/>
   <SnackTitle>Bebidas</SnackTitle>
   <Snacks snacks={drinks}></Snacks>
</>
}