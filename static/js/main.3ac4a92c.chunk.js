(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(t,e,a){t.exports={container:"ParticipantContainer_container__1Uj4x",inputContainer:"ParticipantContainer_inputContainer___t9Ah",input:"ParticipantContainer_input__1EXYY",inputHolder:"ParticipantContainer_inputHolder__2rPku","inputHolder--dragging":"ParticipantContainer_inputHolder--dragging__33DtJ","inputHolder--active":"ParticipantContainer_inputHolder--active__25ptU",shuffleButton:"ParticipantContainer_shuffleButton__gLf8s",delete:"ParticipantContainer_delete__ogjgL"}},function(t,e,a){t.exports={container:"TimerContainer_container__1RFTZ",title:"TimerContainer_title__2uVOZ",timer:"TimerContainer_timer__8bVsT",timerDivider:"TimerContainer_timerDivider__lfwPa",buttonContainer:"TimerContainer_buttonContainer__axSt7",stop:"TimerContainer_stop__3-Q6r","stop--active":"TimerContainer_stop--active__1ZN7p"}},function(t,e,a){t.exports={container:"Timer_container__2Z93T",timer:"Timer_timer__18nxm",top:"Timer_top__29Skv",bottom:"Timer_bottom__1P5-m",content:"Timer_content__1Xqcj"}},function(t,e,a){t.exports={playPauseButton:"PlayButton_playPauseButton__26eVj","playPauseButton--active":"PlayButton_playPauseButton--active__1IxNq","playPauseButton--enabled":"PlayButton_playPauseButton--enabled__3jIqH"}},function(t,e,a){t.exports={addInputContainer:"ParticipantForm_addInputContainer__1UgFt",addInput:"ParticipantForm_addInput__120XR"}},,,function(t,e,a){t.exports={input:"TimerInput_input__3X8hm"}},,function(t,e,a){t.exports=a(19)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),o=(a(16),a(17),a(10)),u=a(1),l=(a(18),a(3)),m=a.n(l),s=a(4),p=a.n(s),d=function(t){var e=t.time,a=t.label;return i.a.createElement("div",{className:p.a.container},i.a.createElement("div",{className:p.a.timer},i.a.createElement("div",{className:p.a.top}),i.a.createElement("span",{className:p.a.content},function(){var t;switch(a){case"MINUTES":t=function(){var t=Math.floor(e/60);return t<10?"0".concat(t):t}();break;case"SECONDS":t=function(){var t=e%60;return t<10?"0".concat(t):t}()}return t}()),i.a.createElement("div",{className:p.a.bottom})),i.a.createElement("span",{className:p.a.label},a))},_=a(5),f=a.n(_),v=function(t){var e=t.activeParticipant,a=t.onClick,n=t.isActive,r=[f.a.playPauseButton,n?f.a["playPauseButton--active"]:"",e?f.a["playPauseButton--enabled"]:""].join(" ");return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:a,className:r}))},h=function(t){var e=t.activeParticipant,a=t.startTime,r=t.currentTime,c=t.handleNextActiveParticipant,o=t.handleSetCurrentTime,l="MINUTES",s="SECONDS",p=Object(n.useState)(!1),_=Object(u.a)(p,2),f=_[0],h=_[1];function g(){o(a),h(!1)}return Object(n.useEffect)((function(){var t=null;return f&&r>0?t=setInterval((function(){o((function(t){return t-1}))}),1e3):f&&r<=0&&(clearInterval(t),g(),c()),function(){return clearInterval(t)}}),[f,r]),i.a.createElement("section",{className:m.a.container},i.a.createElement("h3",{className:m.a.title},e?"".concat(e.name,"s turn"):"Add a participant!"),i.a.createElement("div",{className:m.a.timer},i.a.createElement(d,{time:r,label:l}),i.a.createElement(d,{time:r,label:s})),i.a.createElement("div",{className:m.a.buttonContainer},i.a.createElement(v,{activeParticipant:e,isActive:f,onClick:function(){h(!f)}}),i.a.createElement("p",{onClick:g,className:[m.a.stop,f||r<a?m.a["stop--active"]:""].join(" ")},"Reset")))},g=a(2),b=a.n(g),E=a(9),P=a.n(E),C=function(t){var e=t.startTime,a=t.handleSetStartTime,n=t.handleSetCurrentTime;return i.a.createElement("input",{className:P.a.input,type:"number",placeholder:"",step:"1",min:"0",max:"99",autoFocus:!0,onChange:function(t){var e=Number(t.target.value);e>99?t.target.value=e=99:e<0&&(t.target.value=e=0),a(60*e),n(60*e)},defaultValue:e/60})},S=a(6),T=a.n(S),N=function(t){var e=t.addInputValue,a=t.handleAddParticipant,n=t.handleSetaddInputValue;return i.a.createElement("form",{className:T.a.addInputContainer,onSubmit:function(t){return a(t)}},i.a.createElement("input",{className:T.a.addInput,type:"text",placeholder:"Add a friend",value:e,onChange:function(t){return n(t.target.value)}}),i.a.createElement("button",{type:"submit",value:"Submit"},"ADD"))},j=function(t){var e=t.activeParticipant,a=t.participants,r=t.startTime,c=t.handleUpdateParticipants,o=t.handleNextActiveParticipant,l=t.handleSpecificActiveParticipant,m=t.handleSetStartTime,s=t.handleSetCurrentTime,p=Object(n.useState)(),d=Object(u.a)(p,2),_=d[0],f=d[1],v=Object(n.useState)(""),h=Object(u.a)(v,2),g=h[0],E=h[1],P=function(t,e){_.isDragging=!1,f()},S=a.map((function(t,n){var r=[b.a.inputHolder,t.isDragging?b.a["inputHolder--dragging"]:"",t===e?b.a["inputHolder--active"]:""].join(" ");return i.a.createElement("div",{draggable:!0,onDragStart:function(t){return function(t,e){var n=a[e];n.isDragging=!0,f(n)}(0,n)},onDragEnd:P,onDragOver:function(t){return function(t,e){if(a[e]!==_){var n=a.filter((function(t){return t!==_}));n.splice(e,0,_),c(n)}}(0,n)},key:t.uuid,className:r},i.a.createElement("div",{className:b.a.input},t.name),i.a.createElement("span",{className:b.a.delete,onClick:function(){return function(t){1===a.length?l():e.uuid===t&&o();var n=a.filter((function(e){return e.uuid!==t}));c(n)}(t.uuid)}},"\u2716"))}));return i.a.createElement("section",{className:b.a.container},i.a.createElement(C,{startTime:r,handleSetStartTime:m,handleSetCurrentTime:s}),i.a.createElement(N,{addInputValue:g,handleSetaddInputValue:E,handleAddParticipant:function(t){if(t.preventDefault(),g){var n={name:g,isDragging:!1,uuid:Date.now()};a.push(n),E(""),c(a),e||l(n)}}}),i.a.createElement("div",{className:b.a.inputContainer},S,a.length>1&&i.a.createElement("button",{className:b.a.shuffleButton,onClick:function(){for(var t=a.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),n=[a[e],a[t]];a[t]=n[0],a[e]=n[1]}c(a),l(a[0])}},"SHUFFLE")))},y=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(),l=Object(u.a)(c,2),m=l[0],s=l[1],p=Object(n.useState)(3),d=Object(u.a)(p,2),_=d[0],f=d[1],v=Object(n.useState)(3),g=Object(u.a)(v,2),b=g[0],E=g[1],P=function(){var t,e=a.findIndex((function(t){return t.uuid===m.uuid}));t=e===a.length-1?a[0]:a[e+1],s(t)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{style:{display:"flex",height:"100%"}},i.a.createElement(h,{activeParticipant:m,startTime:_,currentTime:b,handleNextActiveParticipant:P,handleSetCurrentTime:E}),i.a.createElement(j,{activeParticipant:m,participants:a,startTime:_,handleUpdateParticipants:function(t){r(Object(o.a)(t))},handleNextActiveParticipant:P,handleSpecificActiveParticipant:function(t){s(t)},handleSetStartTime:f,handleSetCurrentTime:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.3ac4a92c.chunk.js.map