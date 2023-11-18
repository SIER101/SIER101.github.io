import{r,a as T}from"./react-RkdSbUvv.js";import"./react-dom-q8JQoXo5.js";import{R as F}from"./react-router--pnV5lcL.js";import{c as R}from"./@remix-run-rzwg5L8z.js";/**
 * React Router DOM v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const w="startTransition",l=T[w];function d(t){let{basename:h,children:S,future:f,window:p}=t,s=r.useRef();s.current==null&&(s.current=R({window:p,v5Compat:!0}));let e=s.current,[n,i]=r.useState({action:e.action,location:e.location}),{v7_startTransition:o}=f||{},a=r.useCallback(c=>{o&&l?l(()=>i(c)):i(c)},[i,o]);return r.useLayoutEffect(()=>e.listen(a),[e,a]),r.createElement(F,{basename:h,children:S,location:n.location,navigationType:n.action,navigator:e})}var u;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(u||(u={}));var m;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{d as H};
