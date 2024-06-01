
import { format } from "date-fns";

/**Fecha actual en formato: 
 * yyyy-MM-dd
 */
const getDate = format(new Date(), "yyyy-MM-dd")

export default getDate