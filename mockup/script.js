import DialogHandler from "./dialogHandler.js";
import ItemHandler from "./itemHandler.js";
import AccordionHandler from "./accordionHandler.js";

let app = (() => {
	
	return {
		init() {
			let itemHandler = new ItemHandler();
			let dialogHandler = new DialogHandler();
			let accordionHandler = new AccordionHandler();
		}
	}
})();

app.init();