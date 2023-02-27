import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/Title";

export default function Drinks () {

   const data = [
      {
         id: 1,
         snack: 'drink',
         name: 'Coca-Cola 2L',
         description: 'A tradicional Coca-Cola que a família brasileira adora.',
         price: 12,
         image: 'https://i.imgur.com/Lg3aKhF.jpg'
      },
      {
         id: 2,
         snack: 'drink',
         name: 'Guaraná Antartica',
         description: 'O irresistível e saboroso Guaraná Antartica em versão de latinnha.',
         price: 6.5,
         image: 'https://i.imgur.com/hOBrOIm.jpg'
      },
      {
         id: 3,
         snack: 'drink',
         name: 'Suco de Abacaxi',
         description: 'Suco natural de acabaxi',
         price: 8,
         image: 'https://i.imgur.com/VV9qTMh.jpg'
      },
   ]

   return <>
   <Head title="Botequim da Brava"/>
   <SnackTitle>Bebidas</SnackTitle>
   <Snacks snacks={data}></Snacks>
</>
}