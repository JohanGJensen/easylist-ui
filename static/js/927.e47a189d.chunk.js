"use strict";(self.webpackChunkeasylist_react_pwa=self.webpackChunkeasylist_react_pwa||[]).push([[927],{9708:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var r=t(675),i=t(184),a=function(e){var n=e.position,t=void 0===n?"right":n,a=e.leftContent,o=e.rightContent;return(0,i.jsx)("header",{className:"header-bar",children:(0,i.jsxs)(r.Z,{position:t,style:{width:"98%",padding:"6px 0px"},children:[a&&(0,i.jsx)(r.Z,{spacing:"xs",children:a}),o&&(0,i.jsx)(r.Z,{spacing:"xs",children:o})]})})}},7927:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var r=t(2791),i=t(3275),a=t(7689),o=t(9708),s=t(8296),l=t(3706),c=["size","color"];function u(e){var n=e.size,t=void 0===n?24:n,i=e.color,a=void 0===i?"currentColor":i,o=(0,l.Kd)(e,c);return r.createElement("svg",(0,l.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-back",width:t,height:t,viewBox:"0 0 24 24",stroke:a,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"}))}var f=t(184),h=function(){var e=(0,a.s0)();return(0,f.jsx)(o.Z,{position:"left",leftContent:(0,f.jsx)(s.z,{onClick:function(){return e(-1)},color:"gray",children:(0,f.jsx)(u,{})})})},d=t(1580),g=t(7762),p=t(7247),x=t(7581),v=Object.defineProperty,y=Object.defineProperties,b=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,O=function(e,n,t){return n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},z=function(e,n){for(var t in n||(n={}))j.call(n,t)&&O(e,t,n[t]);if(m){var r,i=(0,g.Z)(m(n));try{for(i.s();!(r=i.n()).done;){t=r.value;w.call(n,t)&&O(e,t,n[t])}}catch(a){i.e(a)}finally{i.f()}}return e};function k(e,n,t){return"undefined"!==typeof e?e in t.headings.sizes?t.headings.sizes[e].fontSize:e:t.headings.sizes[n].fontSize}function C(e,n,t){return"undefined"!==typeof e&&e in t.headings.sizes?t.headings.sizes[e].lineHeight:t.headings.sizes[n].lineHeight}var P=(0,x.k)((function(e,n){var t,r,i=n.element,a=n.weight,o=n.size,s=n.inline;return{root:(t=z({},e.fn.fontStyles()),r={fontFamily:e.headings.fontFamily,fontWeight:a||e.headings.sizes[i].fontWeight||e.headings.fontWeight,fontSize:k(o,i,e),lineHeight:s?1:C(o,i,e),margin:0},y(t,b(r)))}})),S=t(9982),Z=Object.defineProperty,E=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,_=function(e,n,t){return n in e?Z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},W={order:1},F=(0,r.forwardRef)((function(e,n){var t=(0,p.N4)("Title",W,e),i=t.className,a=t.order,o=t.children,s=t.unstyled,l=t.size,c=t.weight,u=t.inline,f=function(e,n){var t={};for(var r in e)N.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&E){var i,a=(0,g.Z)(E(e));try{for(a.s();!(i=a.n()).done;)r=i.value,n.indexOf(r)<0&&L.call(e,r)&&(t[r]=e[r])}catch(o){a.e(o)}finally{a.f()}}return t}(t,["className","order","children","unstyled","size","weight","inline"]),h=P({element:"h".concat(a),weight:c,size:l,inline:u},{name:"Title",unstyled:s}),d=h.classes,x=h.cx;return[1,2,3,4,5,6].includes(a)?r.createElement(S.x,function(e,n){for(var t in n||(n={}))N.call(n,t)&&_(e,t,n[t]);if(E){var r,i=(0,g.Z)(E(n));try{for(i.s();!(r=i.n()).done;)t=r.value,L.call(n,t)&&_(e,t,n[t])}catch(a){i.e(a)}finally{i.f()}}return e}({component:"h".concat(a),ref:n,className:x(d.root,i)},f),o):null}));F.displayName="@mantine/core/Title";var H=t(2982),T=t(5764),R=t(2009),D=Object.defineProperty,I=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,K=function(e,n,t){return n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},M={w:0,h:0},U=(0,r.forwardRef)((function(e,n){var t=(0,p.N4)("Space",M,e),i=t.w,a=t.h,o=t.sx,s=function(e,n){var t={};for(var r in e)J.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&I){var i,a=(0,g.Z)(I(e));try{for(a.s();!(i=a.n()).done;)r=i.value,n.indexOf(r)<0&&B.call(e,r)&&(t[r]=e[r])}catch(o){a.e(o)}finally{a.f()}}return t}(t,["w","h","sx"]);return r.createElement(R.x,function(e,n){for(var t in n||(n={}))J.call(n,t)&&K(e,t,n[t]);if(I){var r,i=(0,g.Z)(I(n));try{for(i.s();!(r=i.n()).done;)t=r.value,B.call(n,t)&&K(e,t,n[t])}catch(a){i.e(a)}finally{i.f()}}return e}({ref:n,sx:[function(e){var n=e.fn.size({size:i,sizes:e.spacing}),t=e.fn.size({size:a,sizes:e.spacing});return{width:n,height:t,minWidth:n,minHeight:t}}].concat((0,H.Z)((0,T.R)(o)))},s))}));U.displayName="@mantine/core/Space";var Y=t(477),q=function(e){var n=e.content;return(0,f.jsx)(Y.Z,{withBorder:!0,children:n})},A=t(1684),G=function(){var e=r.useContext(i.J),n=e.handleCheckboxPos,t=e.checkboxPos,a=e.lang;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(S.x,{size:"md",children:a.settingsCheckboxText}),(0,f.jsx)(A.Ph,{data:[{value:"right",label:a.settingsCheckboxOptionRight},{value:"left",label:a.settingsCheckboxOptionLeft}],value:t,onChange:n})]})},Q=function(){var e=r.useContext(i.J),n=e.handleLanguage,t=e.langCode,a=e.lang;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(S.x,{size:"md",children:a.settingsLanguageText}),(0,f.jsx)(A.Ph,{data:[{value:"en_US",label:a.settingsLanguageOptionEnglish},{value:"da_DK",label:a.settingsLanguageOptionDanish},{value:"es_ES",label:a.settingsLanguageOptionSpanish}],value:t,onChange:n})]})},V=function(){var e=r.useContext(i.J).lang;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{}),(0,f.jsxs)(d.W,{children:[(0,f.jsx)(F,{order:3,children:e.settings}),(0,f.jsx)(U,{h:"xs"}),(0,f.jsx)(q,{content:(0,f.jsx)(G,{})}),(0,f.jsx)(q,{content:(0,f.jsx)(Q,{})})]})]})}}}]);
//# sourceMappingURL=927.e47a189d.chunk.js.map