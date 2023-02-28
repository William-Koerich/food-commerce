import { useState, useEffect } from "react"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/Title"
import { getBurgers } from "../../../services/api"

export default function Burgers () {

   const [burgers, setBurgers] = useState([])

   useEffect((() => {
      (async () => {
         const burgerRequest = await getBurgers()

         setBurgers(burgerRequest.data)
      })()
   }),[])
   
   return <>
      <Head title="El Toro Hamburgueria"/>
      <SnackTitle>Hamburgers</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
   </>
   
}