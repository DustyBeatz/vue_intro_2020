import {fetchData} from "./modules/DataMiner.js";

(() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            removeAformat: true,
            showBioData: false,
            currentProfData: {},
            professors:[]

        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted! trying to fetch inital data");
            fetchData("./includes/index.php").then(data => this.professors = data).catch(err => console.error(err));

        },

        // run a method when we change our view (update the DOM with Vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            },

            removeProf(target) {
                // remove this prof from the professors array
                console.log('clicked to view profs data', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true;

                //make the selected profs data visible
                this.currentProfData = target;
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();