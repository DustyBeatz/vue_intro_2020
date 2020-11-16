// this is a variation on our module theme
(() => {
	let vue_vm = new Vue({
		//link view to an element in our html
		// el: "#app", 
		data: {
			message: "hello from vue!",
			anadaMessage: "little pp activated",

			collection: [
				
			]
		}

	}).$mount("#app"); //here also connects your app to the view library
})();
