import { LightningElement } from "lwc";

export default class ExampleLwc extends LightningElement {
  renderedCallback() {
    console.log("eslint violation!");
  }
}
