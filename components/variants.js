import { delay } from "framer-motion";
import direction from "tailwindcss-animated/src/utilities/direction";

export const fadeIn = (direction , delay) => {
    return {
        hidden: {
            y:direction === 'up' ? 80 : direction
        }
    }
}