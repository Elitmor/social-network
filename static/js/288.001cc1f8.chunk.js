(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[288],{1747:function(e,n,t){"use strict";var r=t(3430),o=t(7462),i=t(3366),u=t(2791),l=t(4164),c=t(7563),a=t(7979),f=t(3981),s=t(5721),d=t(184),v=["onChange","maxRows","minRows","style","value"];function h(e){return parseInt(e,10)||0}var m={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function p(e){return void 0===e||null===e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}var g=u.forwardRef((function(e,n){var t=e.onChange,g=e.maxRows,w=e.minRows,S=void 0===w?1:w,Z=e.style,y=e.value,b=(0,i.Z)(e,v),x=u.useRef(null!=y).current,z=u.useRef(null),R=(0,c.Z)(n,z),C=u.useRef(null),M=u.useRef(0),k=u.useState({outerHeightStyle:0}),I=(0,r.Z)(k,2),N=I[0],E=I[1],_=u.useCallback((function(){var n=z.current,t=(0,a.Z)(n).getComputedStyle(n);if("0px"===t.width)return{outerHeightStyle:0};var r=C.current;r.style.width=t.width,r.value=n.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");var o=t.boxSizing,i=h(t.paddingBottom)+h(t.paddingTop),u=h(t.borderBottomWidth)+h(t.borderTopWidth),l=r.scrollHeight;r.value="x";var c=r.scrollHeight,f=l;return S&&(f=Math.max(Number(S)*c,f)),g&&(f=Math.min(Number(g)*c,f)),{outerHeightStyle:(f=Math.max(f,c))+("border-box"===o?i+u:0),overflow:Math.abs(f-l)<=1}}),[g,S,e.placeholder]),j=function(e,n){var t=n.outerHeightStyle,r=n.overflow;return M.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==r)?(M.current+=1,{overflow:r,outerHeightStyle:t}):e},H=u.useCallback((function(){var e=_();p(e)||E((function(n){return j(n,e)}))}),[_]);u.useEffect((function(){var e,n=(0,f.Z)((function(){M.current=0,z.current&&function(){var e=_();p(e)||l.flushSync((function(){E((function(n){return j(n,e)}))}))}()})),t=z.current,r=(0,a.Z)(t);return r.addEventListener("resize",n),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(n)).observe(t),function(){n.clear(),r.removeEventListener("resize",n),e&&e.disconnect()}})),(0,s.Z)((function(){H()})),u.useEffect((function(){M.current=0}),[y]);return(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)("textarea",(0,o.Z)({value:y,onChange:function(e){M.current=0,x||H(),t&&t(e)},ref:R,rows:S,style:(0,o.Z)({height:N.outerHeightStyle,overflow:N.overflow?"hidden":void 0},Z)},b)),(0,d.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:C,tabIndex:-1,style:(0,o.Z)({},m,Z,{padding:0})})]})}));n.Z=g},1686:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(184),u=(0,o.default)((0,i.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");n.Z=u},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(5284)},5284:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return b},debounce:function(){return x},deprecatedPropType:function(){return z},isMuiElement:function(){return R},ownerDocument:function(){return C},ownerWindow:function(){return M},requirePropFactory:function(){return k},setRef:function(){return I},unstable_ClassNameGenerator:function(){return F},unstable_useEnhancedEffect:function(){return N},unstable_useId:function(){return H},unsupportedProp:function(){return B},useControlled:function(){return T},useEventCallback:function(){return O.Z},useForkRef:function(){return P.Z},useIsFocusVisible:function(){return A.Z}});var r=t(5902),o=t(4036);var i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))},u=t(7462),l=t(2791),c=t.t(l,2),a=t(3366),f=t(8182),s=t(4419),d=t(1046),v=t(4923),h=t(5878),m=t(1217);function p(e){return(0,m.Z)("MuiSvgIcon",e)}(0,h.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var g=t(184),w=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],S=(0,v.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,o.Z)(t.color))],n["fontSize".concat((0,o.Z)(t.fontSize))]]}})((function(e){var n,t,r,o,i,u,l,c,a,f,s,d,v,h,m,p,g,w=e.theme,S=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=w.transitions)||null==(t=n.create)?void 0:t.call(n,"fill",{duration:null==(r=w.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=w.typography)||null==(u=i.pxToRem)?void 0:u.call(i,20))||"1.25rem",medium:(null==(l=w.typography)||null==(c=l.pxToRem)?void 0:c.call(l,24))||"1.5rem",large:(null==(a=w.typography)||null==(f=a.pxToRem)?void 0:f.call(a,35))||"2.1875rem"}[S.fontSize],color:null!=(s=null==(d=(w.vars||w).palette)||null==(v=d[S.color])?void 0:v.main)?s:{action:null==(h=(w.vars||w).palette)||null==(m=h.action)?void 0:m.active,disabled:null==(p=(w.vars||w).palette)||null==(g=p.action)?void 0:g.disabled,inherit:void 0}[S.color]}})),Z=l.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiSvgIcon"}),r=t.children,i=t.className,l=t.color,c=void 0===l?"inherit":l,v=t.component,h=void 0===v?"svg":v,m=t.fontSize,Z=void 0===m?"medium":m,y=t.htmlColor,b=t.inheritViewBox,x=void 0!==b&&b,z=t.titleAccess,R=t.viewBox,C=void 0===R?"0 0 24 24":R,M=(0,a.Z)(t,w),k=(0,u.Z)({},t,{color:c,component:h,fontSize:Z,instanceFontSize:e.fontSize,inheritViewBox:x,viewBox:C}),I={};x||(I.viewBox=C);var N=function(e){var n=e.color,t=e.fontSize,r=e.classes,i={root:["root","inherit"!==n&&"color".concat((0,o.Z)(n)),"fontSize".concat((0,o.Z)(t))]};return(0,s.Z)(i,p,r)}(k);return(0,g.jsxs)(S,(0,u.Z)({as:h,className:(0,f.Z)(N.root,i),focusable:"false",color:y,"aria-hidden":!z||void 0,role:z?"img":void 0,ref:n},I,M,{ownerState:k,children:[r,z?(0,g.jsx)("title",{children:z}):null]}))}));Z.muiName="SvgIcon";var y=Z;function b(e,n){function t(t,r){return(0,g.jsx)(y,(0,u.Z)({"data-testid":"".concat(n,"Icon"),ref:r},t,{children:e}))}return t.muiName=y.muiName,l.memo(l.forwardRef(t))}var x=t(3981).Z;var z=function(e,n){return function(){return null}};var R=function(e,n){return l.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)},C=t(9723).Z,M=t(7979).Z;t(8489);var k=function(e,n){return function(){return null}},I=t(2971).Z,N=t(5721).Z,E=t(3430),_=0;var j=c["useId".toString()];var H=function(e){if(void 0!==j){var n=j();return null!=e?e:n}return function(e){var n=l.useState(e),t=(0,E.Z)(n,2),r=t[0],o=t[1],i=e||r;return l.useEffect((function(){null==r&&o("mui-".concat(_+=1))}),[r]),i}(e)};var B=function(e,n,t,r,o){return null};var T=function(e){var n=e.controlled,t=e.default,r=(e.name,e.state,l.useRef(void 0!==n).current),o=l.useState(t),i=(0,E.Z)(o,2),u=i[0],c=i[1];return[r?n:u,l.useCallback((function(e){r||c(e)}),[])]},O=t(6868),P=t(2071),A=t(3031),F={configure:function(e){r.Z.configure(e)}}},3981:function(e,n,t){"use strict";function r(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];clearTimeout(n),n=setTimeout((function(){e.apply(r,i)}),t)}return r.clear=function(){clearTimeout(n)},r}t.d(n,{Z:function(){return r}})},9723:function(e,n,t){"use strict";function r(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return r}})},7979:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(9723);function o(e){return(0,r.Z)(e).defaultView||window}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=288.001cc1f8.chunk.js.map