import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/Title";
import { useSnack } from "../../../hooks/useSnack";

export default function IceCreams () {

   const { iceCreams } = useSnack()
   
   return <>
   <Head title="Cravo & Canela"/>
   <SnackTitle>Doces</SnackTitle>
   <Snacks snacks={iceCreams}></Snacks>
</>
}