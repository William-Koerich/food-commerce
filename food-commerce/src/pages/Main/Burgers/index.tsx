import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/Title"
import { useSnack } from "../../../hooks/useSnack"

export default function Burgers () {
   const { burgers } = useSnack()
   
   return <>
      <Head title="El Toro Hamburgueria"/>
      <SnackTitle>Hamburgers</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
   </>
   
}