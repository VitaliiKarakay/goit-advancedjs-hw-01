import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),l="feedback-form-state";console.log("form");let e={email:"",message:""};const s=localStorage.getItem(l);s&&(e=JSON.parse(s),t.elements.email.value=e.email,t.elements.message.value=e.message);t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(l,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),t.reset(),e={email:"",message:""}});
//# sourceMappingURL=2-form.js.map
