"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[882],{12882:(e,n,o)=>{o.r(n);var t=o(2568);function i(e,n){let o=new t.Z;e.domRoot.find("#jmpFirstInstr").click((function(){o.logBookEvent({event:"codelens",act:"first",div_id:n})})),e.domRoot.find("#jmpLastInstr").click((function(){o.logBookEvent({event:"codelens",act:"last",div_id:n})})),e.domRoot.find("#jmpStepBack").click((function(){o.logBookEvent({event:"codelens",act:"back",div_id:n})})),e.domRoot.find("#jmpStepFwd").click((function(){o.logBookEvent({event:"codelens",act:"fwd",div_id:n})})),e.domRoot.find("#executionSlider").bind("slide",(function(e,t){o.logBookEvent({event:"codelens",act:"slide",div_id:n})})),o.containerDiv=document.getElementById(n),o.indicate_component_ready()}function d(e){var n=$("#"+e);$(n).find("#jmpFirstInstr").addClass("btn btn-default"),$(n).find("#jmpStepBack").addClass("btn btn-danger"),$(n).find("#jmpStepFwd").addClass("btn btn-success"),$(n).find("#jmpLastInstr").addClass("btn btn-default")}o(71951),"undefined"==typeof allVsualizers&&(window.allVisualizers=[]),void 0===window.component_factory&&(window.component_factory={}),window.component_factory.codelens=function(e){let n=e.orig.querySelector(".pytutorVisualizer"),o=n.id,a=JSON.parse(n.dataset.params).lang;try{let e=addVisualizerToPage(allTraceData[o],o,{startingInstruction:0,editCodeBaseURL:null,hideCode:!1,lang:a});i(e,o),d(o),window.allVisualizers.push(e)}catch(e){console.log(`Error rendering CodeLens Problem ${o}`),console.log(e)}window.addEventListener("codelens:answer",(function(e){(new t.Z).logBookEvent({event:"codelens",div_id:e.detail.divid,act:`answer:${e.detail.answer}`,correct:e.detail.correct}),console.log(e)}))},$(document).on("runestone:login-complete",(function(){if("undefined"!=typeof allTraceData){for(let n in allTraceData){let o=document.getElementById(n),t=$(o).data("params").lang;try{if(n in window.allTraceData)var e=addVisualizerToPage(allTraceData[n],n,{startingInstruction:0,editCodeBaseURL:null,hideCode:!1,lang:t});else alert(`${n} is missing trace data.  This is probably a build error. Please report it on github.`);i(e,n),d(n),window.allVisualizers.push(e)}catch(e){console.log(`Error rendering CodeLens Problem ${n}`),console.log(e)}}window.addEventListener("codelens:answer",(function(e){(new t.Z).logBookEvent({event:"codelens",div_id:e.detail.divid,act:`answer:${e.detail.answer}`,correct:e.detail.correct}),console.log(e)}))}}))}}]);
//# sourceMappingURL=prefix-882.152ac289bd79d266.bundle.js.map