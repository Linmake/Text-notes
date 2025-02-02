import { format } from "date-fns";

/**Fecha actual en formato: 
 * yyyy-MM-dd
 */
export const getDate = format(new Date(), "yyyy-MM-dd")