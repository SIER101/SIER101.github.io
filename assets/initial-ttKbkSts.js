import{r as n,O as u,j as t}from"./index-4xWIjeSI.js";const x=e=>{const{setMainState:l}=n.useContext(u),s=n.useCallback(r=>{var i;const c=(i=r.target.files)==null?void 0:i[0];if(c){const a=new FileReader;a.readAsDataURL(c),a.onloadend=(function(){var o;(o=e.changed)==null||o.call(e,a.result)}).bind(void 0)}},[e]),d=n.useCallback(()=>{l("search")},[l]);return t.jsxs(t.Fragment,{children:[t.jsx("input",{accept:"image/*",id:"contained-button-file",type:"file",onChange:s,placeholder:e.placeholder}),t.jsx("button",{type:"button",onClick:d,children:"Search"})]})};export{x as default};
