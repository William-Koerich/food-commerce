import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/Title";

export default function Pizzas () {
   const data = [
      {
         id: 1,
         snack: 'pizza',
         name: 'Calabresa',
         description: 'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
         price: 28,
         image: 'https://i.imgur.com/5rjJGkV.jpg'
      },
      {
         id: 2,
         snack: 'pizza',
         name: 'Portuguesa',
         description: 'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate, e molho de tomate, tendo uma borda recheada com catupiry.',
         price: 28.5,
         image: 'https://i.imgur.com/WCoyGoI.jpg'
      }
   ]

   return <>
      <Head title="Dona Floripa"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
   </>
}