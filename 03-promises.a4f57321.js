const e=document.querySelector(".form"),t=(e.elements.delay.value,e.elements.step.value,e.elements.amount.value);function o(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(let e=1;e<=t;e+=1){o(e,furtherDelayDelay).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.a4f57321.js.map
