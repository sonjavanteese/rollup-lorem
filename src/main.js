
import loremForm from "./_loremForm";
import { render, initListener } from "./app";

const init = () => {
   console.log("init")
   render(loremForm())
      .then(data => {
         console.log(data)
         initListener()
      })
      .then(() => {
         console.log("Init Ready !!!")
      })
      .catch((error) => {
         console.error(error)
      })
}

window.addEventListener("load", () => {
   console.log("Document Ready")
   init();
});