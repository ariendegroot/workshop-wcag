/**
 *
 * hello-world.js
 * Say Hello
 *
 **/

export default class HelloWorld {
    constructor(elem) {
        this.elem = elem;
        this.bindListeners();
    }

    bindListeners() {
        this.elem.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Hello world!");
        });
    }

    static getSelector() {
        return "[data-hello-world]";
    }
}
