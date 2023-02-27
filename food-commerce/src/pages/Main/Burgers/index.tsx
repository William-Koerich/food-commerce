import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/Title"

export default function Burgers () {

   const data = [
      {
         id: 1,
         snack: 'burguer',
         name: 'Fraldinha',
         description: 'Pão tipo brioche, hambúrguer de fraldinha (180g), queijo mussarela, molho barbecue, cebola caramelizada, tomate, alface. Catchup e Maionese são acompanhados a parte.',
         price: 30,
         image: 'https://i.imgur.com/upjIUnG.jpg'
      },
      {
         id: 2,
         snack: 'burguer',
         name: 'Costela',
         description: 'Pão tipo brioche, hambúrguer de Costela (180g), queijo mussarela, molho barbecue, cebola caramelizada, tomate, alface. Catchup e Maionese são acompanhados a parte.',
         price: 35,
         image: 'https://i.imgur.com/B4J04AJ.jpg'
      },
   ]
   
   return <>
      <Head title="El Toro Hamburgueria"/>
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
   </>
   
}