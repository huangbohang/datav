import{g as y,r as J,w as S,n as O,b as $}from"./@vue-7a379fd5.js";const a=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const C=o=>typeof o<"u";a&&window.document;a&&window.navigator;a&&window.location;function E(o){return JSON.parse(JSON.stringify(o))}function G(o,t,x,V={}){var f,c,r;const{clone:s=!1,passive:N=!1,eventName:_,deep:m=!1,defaultValue:h,shouldEmit:v}=V,n=y(),p=x||(n==null?void 0:n.emit)||((f=n==null?void 0:n.$emit)==null?void 0:f.bind(n))||((r=(c=n==null?void 0:n.proxy)==null?void 0:c.$emit)==null?void 0:r.bind(n==null?void 0:n.proxy));let i=_;t||(t="modelValue"),i=i||`update:${t.toString()}`;const w=e=>s?typeof s=="function"?s(e):E(e):e,g=()=>C(o[t])?w(o[t]):h,b=e=>{v?v(e)&&p(i,e):p(i,e)};if(N){const e=g(),u=J(e);let l=!1;return S(()=>o[t],d=>{l||(l=!0,u.value=w(d),O(()=>l=!1))}),S(u,d=>{!l&&(d!==o[t]||m)&&b(d)},{deep:m}),u}else return $({get(){return g()},set(e){b(e)}})}export{G as u};
