import getURL from "./utils";
import { ADDRESS, PATH, PORT, REGION } from "./constant";

const url = getURL(ADDRESS, PATH, PORT);
const region = REGION;

export { url, region };
