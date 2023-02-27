import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/Title";

export default function IceCreams () {
   const data = [
      {
         id: 1,
         snack: 'ice-creams',
         name: 'Casquinha',
         description: 'A casquinha crocante e saborosa que nossos clientes amem.',
         price: 4.5,
         image: 'https://i.imgur.com/YGmeoCm.jpg'
      },
      {
         id: 2,
         snack: 'ice-creams',
         name: 'Chocolate com Granulado',
         description: 'Sorvete de chocolate com granulados em chocolate para você se deliciar.',
         price: 6,
         image: 'https://i.imgur.com/osAHOLe.jpg'
      },
      {
         id: 3,
         snack: 'ice-creams',
         name: 'Flocos',
         description: 'O tradicional flocos vem com cobertura de chocolate para adocicar seu dia',
         price: 7,
         image: 'https://i.imgur.com/qgnFLiy.jpg'
      },
   ]
   return <>
   <Head title="Cravo & Canela"/>
   <SnackTitle>Doces</SnackTitle>
   <Snacks snacks={data}></Snacks>
</>
}