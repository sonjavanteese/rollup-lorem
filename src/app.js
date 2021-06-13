import loremdata from "./data";

const output = () => document.getElementById("out1");
const output2 = () => document.getElementById("out2");
const loform = () => document.getElementById("form1");
const actOpt = () => document.querySelectorAll("#form1 option[selected='selected']")

/* ---------------------------- Helper Functions ---------------------------- */

const serializeForm = function (form) {
   let obj = {};
   let formData = new FormData(form);
   for (let key of formData.keys()) {
      obj[key] = formData.get(key);
   }
   return obj;
}
const randomNumbers = (quant, max = 12) => {
   const set = new Set()
   while (set.size < quant) {
      set.add(Math.floor(Math.random() * max) + 1)
   }
   let arr = Array.from(set)
   return arr;
}

/* ------------------------ Copy Output to Clipboard ------------------------ */

const copyText = () => {
   let copyText = output();
   copyText.select();
   copyText.setSelectionRange(0, 99999)
   document.execCommand("copy");
   console.log("Copied the text: " + copyText.value);
}

/* ------------------------------ Lorem Render ------------------------------ */

const setOutput = (str, count) => {
   let out = output();
   out.value = str;
   out.setAttribute("rows", 5)
   let outstr = str.replace(' ' + /\s+/g, '');
   output2().innerHTML = `<details><summary class="p-2">Output</summary class="p-2"><div>${outstr}</div></details>`;
}
const createTempl = (obj) => {
   let outArr = randomNumbers(obj.c, 12)
   let outTemp = '';
   let c = 0;
   outArr.forEach(el => {
      if (obj.w) {
         outTemp += `<div class="lorem-w">\n`;
      }
      if (obj.h) {
         outTemp += `<${obj.h} class="lorem-h">${loremdata()[el].quote}</${obj.h}> \n`;
      } else {
         outTemp += `${loremdata()[el].quote} \n`;
      }
      if (obj.p) {
         outTemp += `<p class="lorem-p">${loremdata()[el].ref}</p> \n`;
      } else {
         outTemp += `${loremdata()[el].ref} \n`;
      }
      if (obj.img) {
         outTemp += `<img src="${loremdata()[el].file}" class="lorem-img" alt="Image">\n`;
      }
      if (obj.w) {
         outTemp += `</div>\n\n`;
      } else {
         outTemp += `\n\n`;
      }
   })
   setOutput(outTemp, c)
   console.log("Output rendered!")
}
const preRenderObj = (data) => {
   let obj = new Object({
      c: 1,
      h: null,
      p: false,
      img: false,
      w: false
   })
   if (data.wrap_tag) {
      obj.w = true;
   }

   if (data.p_count && data.p_count > 0 && data.p_count < 13) {
      obj.c = parseFloat(data.p_count);
   }

   if (data.h_tag && data.h_tag !== 'none') {
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(data.h_tag)) {
         obj.h = data.h_tag;
      }
   }
   if (data.p_tag) {
      obj.p = true;
   }
   if (data.img_tag) {
      obj.img = true;
   }
   console.log("preRenderObj created!", obj)
   createTempl(obj)
}
const getFormData = (event) => {
   let form = event.target.closest('#form1');
   if (form) {
      let f = loform();
      let data = serializeForm(f)
      preRenderObj(data)
   }
}
const render = (str) => new Promise((resolve, reject) => {
   let out = document.getElementById("main");
   out.innerHTML = str;
   if (out.innerHTML.length >= 4) {
      resolve("Form rendered!")
   } else {
      reject("Error! Form not rendered")
   }
})

/* ------------------------------- Reset Form ------------------------------- */

const reset = () => {
   loform().reset()
   output().value = ""
   output2().innerHTML = ""
   output().setAttribute("rows", 5)
   output().removeAttribute("data-content")
   if (actOpt()) {
      actOpt().forEach((el) => el.removeAttribute("selected"))
   }
   console.log("Form resetted!")
};

/* -------------------------------- Init Form ------------------------------- */

const togFunc = () => {
   let h = document.querySelector("#h_tag option[value='h4']");
   let t = document.getElementById("h_tag");
   if (t.value === 'none') {
      h.setAttribute("selected", "selected");
   }
}

const initListener = () => {
   let forEl = loform();
   let subBtn = document.querySelector("#form1 [type='submit']");
   let resBtn = document.querySelector("#form1 [type='reset']");
   let copyBtn = document.querySelector("#form1 .copy");
   let toggle1 = document.getElementById("p_tag");
   forEl.addEventListener('submit', (e) => e.preventDefault())
   subBtn.addEventListener('click', getFormData)
   resBtn.addEventListener('click', reset)
   copyBtn.addEventListener('click', copyText)
   toggle1.addEventListener('change', togFunc)
};

export {
   initListener,
   render
};


// const fetchXhr = url => {
//    return fetch(url).then(r => r.text());
// }
// const fetchJson = url => {
//    return fetch(url).then(r => r.json());
// }
// const render2 = (str) => {
//    document.getElementById("main").innerHTML = str;
//    console.log(document.getElementById("main").innerHTML.length)
// }
// const init = () => setTimeout(() => {
// fetchXhr("temp/form1.html").then(data => render(data)).then(initListener).then(() => console.log("Content Ready"))

// }, 3000)

// window.addEventListener("load", () => {
//    console.log("Document Ready")
//    init();
// });