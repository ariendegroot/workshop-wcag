import HelloWorld from "./js/hello-world";
import Slider from "./js/slider";
import styles from "./index.scss";

const componentsArr = [HelloWorld, Slider];

for (let j = 0; j < componentsArr.length; j = j + 1) {
    const componentsList = document.querySelectorAll(
        componentsArr[j].getSelector()
    );
    if (componentsList.length) {
        for (const component of componentsList) {
            new componentsArr[j](component);
        }
    }
}
