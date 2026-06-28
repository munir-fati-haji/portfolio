import {U as Uy,J as Jd,E,a as Ur$1,p as ps,R as Rs,I as Is,x as xo$1,Y as Yv,P as Pa$1,f as fv,n as nf,j as jv,b as pm,c as ja$1,d as pv,K as Kd,e as Yd,h as hf,W as Wy,O as Oc,k as kr$1,B as Bn$1,C as Cn$1,T as Tv,g as Cv,l as lf,o as of,_ as _v,M as Mv,G as Gd,X as Xd,L as La$1,F as Fa$1,i as lv,u as uv,m as Ie,$ as $n$1,v as ve$1,q as $o$1,r as Xm,s as x,t as ue,D as Dp,w as r$1,y as Ug,Q as Qy,z as gO,A as hO,H as dv,N as Dv,S as th,V as lr$1,Z as Hn$1,a0 as IO,a1 as kn$1,a2 as es,a3 as Ml,a4 as Qf,a5 as rh,a6 as yO,a7 as rf,a8 as sf,a9 as Pn$1,aa as _,ab as lp,ac as Ot$1,ad as Uo$1,ae as cr,af as nh,ag as te,ah as vv,ai as gf,aj as Bs,ak as EO,al as cn,am as Ip,an as fp,ao as H,ap as s,aq as en$1,ar as wO,as as oI,at as ip,au as Sr$1,av as dp,aw as li$1,ax as Be$1,ay as Ep,az as al,aA as cl,aB as bg}from'./main-DWVRJUJ5.js';function We(i){return i.buttons===0||i.detail===0}function Ye(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return !!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var gn;function no(){if(gn==null){let i=typeof document<"u"?document.head:null;gn=!!(i&&(i.createShadowRoot||i.attachShadow));}return gn}function _n(i){if(no()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function ee(i){if(i.composedPath)try{return i.composedPath()[0]}catch{}return i.target}var vn;try{vn=typeof Intl<"u"&&Intl.v8BreakIterator;}catch{vn=false;}var R=(()=>{class i{_platformId=E(th);isBrowser=this._platformId?lr$1(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||vn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();var Ge;function io(){if(Ge==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ge=!0}));}finally{Ge=Ge||false;}return Ge}function Me(i){return io()?i:!!i.capture}function Xe(i,n=0){return oo(i)?Number(i):arguments.length===2?n:0}function oo(i){return !isNaN(parseFloat(i))&&!isNaN(Number(i))}function le(i){return i instanceof Bn$1?i.nativeElement:i}var ao=new x("cdk-input-modality-detector-options"),so={ignoreKeys:[18,17,224,91,16]},lo=650,yn={passive:true,capture:true},co=(()=>{class i{_platform=E(R);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new cn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ee(e));};_onMousedown=e=>{Date.now()-this._lastTouchMs<lo||(this._modality.next(We(e)?"keyboard":"mouse"),this._mostRecentTarget=ee(e));};_onTouchstart=e=>{if(Ye(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ee(e);};constructor(){let e=E(Ie),t=E(Cn$1),o=E(ao,{optional:true});if(this._options=r$1(r$1({},so),o),this.modalityDetected=this._modality.pipe(Ip(1)),this.modalityChanged=this.modalityDetected.pipe(fp()),this._platform.isBrowser){let r=E(Pn$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,yn),r.listen(t,"mousedown",this._onMousedown,yn),r.listen(t,"touchstart",this._onTouchstart,yn)]);}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e());}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})(),Ke=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Ke||{}),mo=new x("cdk-focus-monitor-default-options"),ut=Me({passive:true,capture:true}),$e=(()=>{class i{_ngZone=E(Ie);_platform=E(R);_inputModalityDetector=E(co);_origin=null;_lastFocusOrigin=null;_windowFocused=false;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=false;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=true,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=false);};_document=E(Cn$1);_stopInputModalityDetector=new ue;constructor(){let e=E(mo,{optional:true});this._detectionMode=e?.detectionMode||Ke.IMMEDIATE;}_rootNodeFocusAndBlurListener=e=>{let t=ee(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o);};monitor(e,t=false){let o=le(e);if(!this._platform.isBrowser||o.nodeType!==1)return Qf();let r=_n(o)||this._document,d=this._elementInfo.get(o);if(d)return t&&(d.checkChildren=true),d.subject;let u={checkChildren:t,subject:new ue,rootNode:r};return this._elementInfo.set(o,u),this._registerGlobalListeners(u),u.subject}stopMonitoring(e){let t=le(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o));}focusVia(e,t,o){let r=le(e),d=this._document.activeElement;r===d?this._getClosestElementsInfo(r).forEach(([u,g])=>this._originChanged(u,t,g)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(o));}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t));}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ke.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program");}_setOrigin(e,t=false){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Ke.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?lo:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o);}});}_onFocus(e,t){let o=this._elementInfo.get(t),r=ee(e);!o||!o.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),o);}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null));}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t));}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,ut),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,ut);}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener);}),this._inputModalityDetector.modalityDetected.pipe(Dp(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,true);}));}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ut),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ut),this._rootNodeFocusListenerCount.delete(t));}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId));}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t;}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&t.push([r,o]);}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return  false;let r=e.labels;if(r){for(let d=0;d<r.length;d++)if(r[d].contains(t))return  true}return  false}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();function Ae(i){return Array.isArray(i)?i:[i]}var po=new Set,Ee,Pe=(()=>{class i{_platform=E(R);_nonce=E(rh,{optional:true});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):pr;}matchMedia(e){return (this._platform.WEBKIT||this._platform.BLINK)&&mr(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();function mr(i,n){if(!po.has(i))try{Ee||(Ee=document.createElement("style"),n&&Ee.setAttribute("nonce",n),Ee.setAttribute("type","text/css"),document.head.appendChild(Ee)),Ee.sheet&&(Ee.sheet.insertRule(`@media ${i.replace(/[{}]/g,"")} {body{ }}`,0),po.add(i));}catch(e){console.error(e);}}function pr(i){return {matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var xn=(()=>{class i{_mediaMatcher=E(Pe);_zone=E(Ie);_queries=new Map;_destroySubject=new ue;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete();}isMatched(e){return uo(Ae(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=uo(Ae(e)).map(d=>this._registerQuery(d).observable),r=ip(o);return r=Sr$1(r.pipe(li$1(1)),r.pipe(Ip(1),dp(0))),r.pipe(Be$1(d=>{let u={matches:false,breakpoints:{}};return d.forEach(({matches:g,query:S})=>{u.matches=u.matches||g,u.breakpoints[S]=g;}),u}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new _(d=>{let u=g=>this._zone.run(()=>d.next(g));return t.addListener(u),()=>{t.removeListener(u);}}).pipe(Ep(t),Be$1(({matches:d})=>({query:e,matches:d})),Dp(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();function uo(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var ur=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();var ho=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({providers:[ur]})}return i})();var ve=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(ve||{}),fo="cdk-high-contrast-black-on-white",bo="cdk-high-contrast-white-on-black",wn="cdk-high-contrast-active",_o=(()=>{class i{_platform=E(R);_hasCheckedHighContrastMode=false;_document=E(Cn$1);_breakpointSubscription;constructor(){this._breakpointSubscription=E(xn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=false,this._applyBodyHighContrastModeCssClasses());});}getHighContrastMode(){if(!this._platform.isBrowser)return ve.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case "rgb(0,0,0)":case "rgb(45,50,54)":case "rgb(32,32,32)":return ve.WHITE_ON_BLACK;case "rgb(255,255,255)":case "rgb(255,250,239)":return ve.BLACK_ON_WHITE}return ve.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe();}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(wn,fo,bo),this._hasCheckedHighContrastMode=true;let t=this.getHighContrastMode();t===ve.BLACK_ON_WHITE?e.add(wn,fo):t===ve.WHITE_ON_BLACK&&e.add(wn,bo);}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})(),En=(()=>{class i{constructor(){E(_o)._applyBodyHighContrastModeCssClasses();}static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({imports:[ho]})}return i})();function vo(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var yo=new Map,ht=class i{_appId=E(Ml);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=false){this._appId!=="ng"&&(n+=this._appId);let t=yo.get(n);return t===void 0?t=0:t++,yo.set(n,t),`${n}${e?i._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})};var wo=" ";function hr(i,n,e){let t=bt(i,n);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(wo)));}function fr(i,n,e){let t=bt(i,n);e=e.trim();let o=t.filter(r=>r!==e);o.length?i.setAttribute(n,o.join(wo)):i.removeAttribute(n);}function bt(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var Eo="cdk-describedby-message",ft="cdk-describedby-host",Cn=0,So=(()=>{class i{_platform=E(R);_document=E(Cn$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${Cn++}`;constructor(){E(kn$1).load(es),this._id=E(Ml)+"-"+Cn++;}describe(e,t,o){if(!this._canBeDescribed(e,t))return;let r=Sn(t,o);typeof t!="string"?(xo(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,o),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r);}removeDescription(e,t,o){if(!t||!this._isElementNode(e))return;let r=Sn(t,o);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let d=this._messageRegistry.get(r);d&&d.referenceCount===0&&this._deleteMessageElement(r);}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null);}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ft}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ft);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear();}_createMessageElement(e,t){let o=this._document.createElement("div");xo(o,this._id),o.textContent=e,t&&o.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Sn(e,t),{messageElement:o,referenceCount:0});}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e);}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(e),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o;}_removeCdkDescribedByReferenceIds(e){let t=bt(e,"aria-describedby").filter(o=>o.indexOf(Eo)!=0);e.setAttribute("aria-describedby",t.join(" "));}_addMessageReference(e,t){let o=this._messageRegistry.get(t);hr(e,"aria-describedby",o.messageElement.id),e.setAttribute(ft,this._id),o.referenceCount++;}_removeMessageReference(e,t){let o=this._messageRegistry.get(t);o.referenceCount--,fr(e,"aria-describedby",o.messageElement.id),e.removeAttribute(ft);}_isElementDescribedByMessage(e,t){let o=bt(e,"aria-describedby"),r=this._messageRegistry.get(t),d=r&&r.messageElement.id;return !!d&&o.indexOf(d)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return  false;if(t&&typeof t=="object")return  true;let o=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return o?!r||r.trim()!==o:false}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();function Sn(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function xo(i,n){i.id||(i.id=`${Eo}-${n}-${Cn++}`);}var Se;function Co(){if(Se==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Se=false,Se;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Se=true;else {let i=Element.prototype.scrollTo;i?Se=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Se=false;}}return Se}function kn(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var br=new x("MATERIAL_ANIMATIONS"),ko=null;function gr(){return E(br,{optional:true})?.animationsDisabled||E(nh,{optional:true})==="NoopAnimations"?"di-disabled":(ko??=E(Pe).matchMedia("(prefers-reduced-motion)").matches,ko?"reduced-motion":"enabled")}function Ce(){return gr()!=="enabled"}function N(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Tn(i){return i!=null&&`${i}`!="false"}var oe=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(oe||{}),Dn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=oe.HIDDEN;constructor(n,e,t,o=false){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o;}fadeOut(){this._renderer.fadeOutRipple(this);}},To=Me({passive:true,capture:true}),In=class{_events=new Map;addHandler(n,e,t,o){let r=this._events.get(e);if(r){let d=r.get(t);d?d.add(o):r.set(t,new Set([o]));}else this._events.set(e,new Map([[t,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,To);});}removeHandler(n,e,t){let o=this._events.get(n);if(!o)return;let r=o.get(e);r&&(r.delete(t),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,To)));}_delegateEventHandler=n=>{let e=ee(n);e&&this._events.get(n.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(r=>r.handleEvent(n));});}},Ze={enterDuration:225,exitDuration:150},_r=800,Do=Me({passive:true,capture:true}),Io=["mousedown","touchstart"],Oo=["mouseup","mouseleave","touchend","touchcancel"],vr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Uy({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})(),gt=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=false;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=false;_containerRect=null;static _eventManager=new In;constructor(n,e,t,o,r){this._target=n,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=le(t)),r&&r.get(kn$1).load(vr);}fadeInRipple(n,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=r$1(r$1({},Ze),t.animation);t.centered&&(n=o.left+o.width/2,e=o.top+o.height/2);let d=t.radius||yr(n,e,o),u=n-o.left,g=e-o.top,S=r.enterDuration,b=document.createElement("div");b.classList.add("mat-ripple-element"),b.style.left=`${u-d}px`,b.style.top=`${g-d}px`,b.style.height=`${d*2}px`,b.style.width=`${d*2}px`,t.color!=null&&(b.style.backgroundColor=t.color),b.style.transitionDuration=`${S}ms`,this._containerElement.appendChild(b);let T=window.getComputedStyle(b),K=T.transitionProperty,Z=T.transitionDuration,U=K==="none"||Z==="0s"||Z==="0s, 0s"||o.width===0&&o.height===0,z=new Dn(this,b,t,U);b.style.transform="scale3d(1, 1, 1)",z.state=oe.FADING_IN,t.persistent||(this._mostRecentTransientRipple=z);let xe=null;return !U&&(S||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Fi=()=>{xe&&(xe.fallbackTimer=null),clearTimeout(Bi),this._finishRippleTransition(z);},ln=()=>this._destroyRipple(z),Bi=setTimeout(ln,S+100);b.addEventListener("transitionend",Fi),b.addEventListener("transitioncancel",ln),xe={onTransitionEnd:Fi,onTransitionCancel:ln,fallbackTimer:Bi};}),this._activeRipples.set(z,xe),(U||!S)&&this._finishRippleTransition(z),z}fadeOutRipple(n){if(n.state===oe.FADING_OUT||n.state===oe.HIDDEN)return;let e=n.element,t=r$1(r$1({},Ze),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=oe.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n);}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut());}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut();});}setupTriggerEvents(n){let e=le(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Io.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this);}));}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Oo.forEach(e=>{this._triggerElement.addEventListener(e,this,Do);});}),this._pointerUpEventsRegistered=true);}_finishRippleTransition(n){n.state===oe.FADING_IN?this._startFadeOutTransition(n):n.state===oe.FADING_OUT&&this._destroyRipple(n);}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=oe.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut();}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=oe.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove();}_onMousedown(n){let e=We(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+_r;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=true,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig));}_onTouchStart(n){if(!this._target.rippleDisabled&&!Ye(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=true;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig);}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=false,this._getActiveRipples().forEach(n=>{let e=n.state===oe.VISIBLE||n.config.terminateOnPointerUp&&n.state===oe.FADING_IN;!n.config.persistent&&e&&n.fadeOut();}));}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Io.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Oo.forEach(e=>n.removeEventListener(e,this,Do)),this._pointerUpEventsRegistered=false));}};function yr(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),o=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+o*o)}var Ro=new x("mat-ripple-global-options");var xr={capture:true},wr=["focus","mousedown","mouseenter","touchstart"],On="mat-ripple-loader-uninitialized",Rn="mat-ripple-loader-class-name",Mo="mat-ripple-loader-centered",_t="mat-ripple-loader-disabled",Ao=(()=>{class i{_document=E(Cn$1);_animationsDisabled=Ce();_globalRippleOptions=E(Ro,{optional:true});_platform=E(R);_ngZone=E(Ie);_injector=E(ve$1);_eventCleanups;_hosts=new Map;constructor(){let e=E(Pn$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>wr.map(t=>e.listen(this._document,t,this._onInteraction,xr)));}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t());}configureRipple(e,t){e.setAttribute(On,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Rn))&&e.setAttribute(Rn,t.className||""),t.centered&&e.setAttribute(Mo,""),t.disabled&&e.setAttribute(_t,"");}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=true,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(_t,""):e.removeAttribute(_t);}_onInteraction=e=>{let t=ee(e);if(t instanceof HTMLElement){let o=t.closest(`[${On}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o);}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Rn)),e.append(t);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Ze.enterDuration,d=this._animationsDisabled?0:o?.animation?.exitDuration??Ze.exitDuration,u={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(_t),rippleConfig:{centered:e.hasAttribute(Mo),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:d}}},g=new gt(u,this._ngZone,t,this._platform,this._injector),S=!u.rippleDisabled;S&&g.setupTriggerEvents(e),this._hosts.set(e,{target:u,renderer:g,hasSetUpEvents:S}),e.removeAttribute(On);}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e));}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();var Po=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Uy({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2})}return i})();var Er=["*",[["","progressIndicator",""]]],Sr=["*","[progressIndicator]"];function Cr(i,n){i&1&&(La$1(0,"div",1),Cv(1,1),Fa$1());}var kr=new x("MAT_BUTTON_CONFIG");function No(i){return i==null?void 0:EO(i)}var Mn=(()=>{class i{_elementRef=E(Bn$1);_ngZone=E(Ie);_animationsDisabled=Ce();_config=E(kr,{optional:true});_focusMonitor=E($e);_cleanupClick;_renderer=E(Xm);_rippleLoader=E(Ao);_isAnchor;_isFab=false;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled();}_disableRipple=false;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled();}_disabled=false;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e;}showProgress=gO(false,{transform:IO});constructor(){E(kn$1).load(Po);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??false,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"});}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true),this._isAnchor&&this._setupAsAnchor();}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t);}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?true:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:true}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled);}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation());}));}static \u0275fac=function(t){return new(t||i)};static \u0275dir=Qy({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,o){t&2&&(Yd("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),jv(o.color?"mat-"+o.color:""),lf("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled));},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",IO],disabled:[2,"disabled","disabled",IO],ariaDisabled:[2,"aria-disabled","ariaDisabled",IO],disabledInteractive:[2,"disabledInteractive","disabledInteractive",IO],tabIndex:[2,"tabIndex","tabIndex",No],_tabindex:[2,"tabindex","_tabindex",No],showProgress:[1,"showProgress"]}})}return i})(),qe=(()=>{class i extends Mn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:true});}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Uy({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Gd],ngContentSelectors:Sr,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(Tv(Er),Xd(0,"span",0),Cv(1),lv(2,Cr,2,0,"div",1),Xd(3,"span",2)(4,"span",3)),t&2&&(pm(2),uv(o.showProgress()?2:-1));},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();var Lo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({imports:[kr$1]})}return i})();var Tr=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Dr=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function Ir(i,n){i&1&&(La$1(0,"div",2),Cv(1,3),Fa$1());}var Fo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ne=(()=>{class i extends Mn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text");}_appearance=null;constructor(){super();let e=Or(this._elementRef.nativeElement);e&&this.setAppearance(e);}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?Fo.get(this._appearance):null,r=Fo.get(e);o&&t.remove(...o),t.add(...r),this._appearance=e;}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Uy({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Gd],ngContentSelectors:Dr,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(Tv(Tr),Xd(0,"span",0),Cv(1),La$1(2,"span",1),Cv(3,1),Fa$1(),Cv(4,2),lv(5,Ir,2,0,"div",2),Xd(6,"span",3)(7,"span",4)),t&2&&(lf("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),pm(5),uv(o.showProgress()?5:-1));},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return i})();function Or(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var ye=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({imports:[Lo,kr$1]})}return i})();var Mr=20,Le=(()=>{class i{_ngZone=E(Ie);_platform=E(R);_renderer=E(Pn$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ue;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)));}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e));}scrolled(e=Mr){return this._platform.isBrowser?new _(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(lp(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0);}}):Qf()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete();}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ot$1(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,e)&&t.push(r);}),t}_targetContainsElement(e,t){let o=le(t),r=e.getElementRef().nativeElement;do if(o==r)return  true;while(o=o.parentElement);return  false}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();var Ar=20,Fe=(()=>{class i{_platform=E(R);_listeners;_viewportSize=null;_change=new ue;_document=E(Cn$1);constructor(){let e=E(Ie),t=E(Pn$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)];}this.change().subscribe(()=>this._viewportSize=null);});}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete();}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return {top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return {top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),d=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,u=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return {top:d,left:u}}change(e=Ar){return e>0?this._change.pipe(lp(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0};}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();var Je=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({})}return i})(),Pn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({imports:[kr$1,Je,kr$1,Je]})}return i})();var Qe=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach());}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n;}},et=class extends Qe{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,o,r,d){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null,this.directives=d||null;}},vt=class extends Qe{templateRef;viewContainerRef;context;injector;constructor(n,e,t,o){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=o;}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Nn=class extends Qe{element;constructor(n){super(),this.element=n instanceof Bn$1?n.nativeElement:n;}},Ln=class{_attachedPortal=null;_disposeFn=null;_isDisposed=false;hasAttached(){return !!this._attachedPortal}attach(n){if(n instanceof et)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof vt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Nn)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn();}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=true;}setDisposeFn(n){this._disposeFn=n;}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null);}},yt=class extends Ln{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t;}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,o=t.get(en$1,null,{optional:true})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy());}else {let t=this._appRef,o=n.injector||this._defaultInjector||ve$1.NULL,r=o.get(te,t.injector);e=wO(n.component,{elementInjector:o,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy();});}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o);}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t);});};dispose(){super.dispose(),this.outletElement.remove();}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Vo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({})}return i})();var jo=Co();function Xo(i){return new xt(i.get(Fe),i.get(Cn$1))}var xt=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=false;_document;constructor(n,e){this._viewportRuler=n,this._document=e;}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=N(-this._previousScrollPosition.left),n.style.top=N(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=true;}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,o=e.style,r=t.scrollBehavior||"",d=o.scrollBehavior||"";this._isEnabled=false,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),jo&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),jo&&(t.scrollBehavior=r,o.scrollBehavior=d);}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return  false;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Ko(i,n){return new wt(i.get(Le),i.get(Ie),i.get(Fe),n)}var wt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,o){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=o;}attach(n){this._overlayRef,this._overlayRef=n;}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ot$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition();})):this._scrollSubscription=n.subscribe(this._detach);}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach());}};var tt=class{enable(){}disable(){}attach(){}};function Fn(i,n){return n.some(e=>{let t=i.bottom<e.top,o=i.top>e.bottom,r=i.right<e.left,d=i.left>e.right;return t||o||r||d})}function zo(i,n){return n.some(e=>{let t=i.top<e.top,o=i.bottom>e.bottom,r=i.left<e.left,d=i.right>e.right;return t||o||r||d})}function It(i,n){return new Et(i.get(Le),i.get(Fe),i.get(Ie),n)}var Et=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,o){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=o;}attach(n){this._overlayRef,this._overlayRef=n;}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();Fn(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()));}});}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}},$o=(()=>{class i{_injector=E(ve$1);noop=()=>new tt;close=e=>Ko(this._injector,e);block=()=>Xo(this._injector);reposition=e=>It(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})(),St=class{positionStrategy;scrollStrategy=new tt;panelClass="";hasBackdrop=false;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=false;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t]);}}};var Ct=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e;}};var Zo=(()=>{class i{_attachedOverlays=[];_document=E(Cn$1);_isAttached=false;ngOnDestroy(){this.detach();}add(e){this.remove(e),this._attachedOverlays.push(e);}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach();}canReceiveEvent(e,t,o){return o.observers.length<1?false:e.eventPredicate?e.eventPredicate(t):true}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})(),qo=(()=>{class i extends Zo{_ngZone=E(Ie);_renderer=E(Pn$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener);}),this._isAttached=true);}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=false);}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})(),Jo=(()=>{class i extends Zo{_platform=E(R);_ngZone=E(Ie);_renderer=E(Pn$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=false;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:true},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=true),this._isAttached=true;}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=false),this._isAttached=false);}_pointerDownListener=e=>{this._pointerDownEventTarget=ee(e);};_clickListener=e=>{let t=ee(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let d=r.length-1;d>-1;d--){let u=r[d],g=u._outsidePointerEvents;if(!(!u.hasAttached()||!this.canReceiveEvent(u,e,g))){if(Ho(u.overlayElement,t)||Ho(u.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>g.next(e)):g.next(e);}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();function Ho(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return  true;t=e&&t instanceof ShadowRoot?t.host:t.parentNode;}return  false}var Qo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Uy({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})(),er=(()=>{class i{_platform=E(R);_containerElement;_document=E(Cn$1);_styleLoader=E(kn$1);ngOnDestroy(){this._containerElement?.remove();}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||kn()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove();}let t=this._document.createElement("div");t.classList.add(e),kn()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t;}_loadStyles(){this._styleLoader.load(Qo);}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})(),Bn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,o){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o);}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing");});}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove();}};function Vn(i){return i&&i.nodeType===1}var kt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ue;_attachments=new ue;_detachments=new ue;_positionStrategy;_scrollStrategy;_locationChanges=H.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=false;_previousHostParent;_keydownEvents=new ue;_outsidePointerEvents=new ue;_afterNextRenderRef;constructor(n,e,t,o,r,d,u,g,S,b=false,T,K){this._portalOutlet=n,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=d,this._document=u,this._location=g,this._outsideClickDispatcher=S,this._animationsDisabled=b,this._injector=T,this._renderer=K,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy;}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ug(()=>{this.hasAttached()&&this.updatePosition();},{injector:this._injector}),this._togglePointerEvents(true),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,true),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()));}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(false),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=true;}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply();}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()));}updateSize(n){this._config=r$1(r$1({},this._config),n),this._updateElementSize();}setDirection(n){this._config=s(r$1({},this._config),{direction:n}),this._updateElementDirection();}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,true);}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,false);}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()));}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection());}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=N(this._config.width),n.height=N(this._config.height),n.minWidth=N(this._config.minWidth),n.minHeight=N(this._config.minHeight),n.maxWidth=N(this._config.maxWidth),n.maxHeight=N(this._config.maxHeight);}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none";}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Vn(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host);}if(this._config.usePopover)try{this._host.showPopover();}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Bn(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e);}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,true),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n));}):this._backdropRef.element.classList.add(n);}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host);}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach();}_toggleClasses(n,e,t){let o=Ae(e||[]).filter(r=>!!r);o.length&&(t?n.classList.add(...o):n.classList.remove(...o));}_detachContentWhenEmpty(){let n=false;try{this._detachContentAfterRenderRef=Ug(()=>{n=!0,this._detachContent();},{injector:this._injector});}catch(e){if(n)throw e;this._detachContent();}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent();}),this._detachContentMutationObserver.observe(this._pane,{childList:true}));}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,false),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent());}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect();}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.();}},Uo="cdk-overlay-connected-position-bounding-box",Pr=/([A-Za-z%]+)$/;function Ot(i,n){return new Tt(n,i.get(Fe),i.get(Cn$1),i.get(R),i.get(er))}var Tt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=false;_lastBoundingBoxSize={width:0,height:0};_isPushed=false;_canPush=true;_growAfterOpen=false;_hasFlexibleDimensions=true;_positionLocked=false;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=false;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ue;_resizeSubscription=H.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(n);}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Uo),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=false,this._isInitialRender=true,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=true,this.apply();});}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],d;for(let u of this._preferredPositions){let g=this._getOriginPoint(n,o,u),S=this._getOverlayPoint(g,e,u),b=this._getOverlayFit(S,e,t,u);if(b.isCompletelyWithinViewport){this._isPushed=false,this._applyPosition(u,g);return}if(this._canFitWithFlexibleDimensions(b,S,t)){r.push({position:u,origin:g,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(g,u)});continue}(!d||d.overlayFit.visibleArea<b.visibleArea)&&(d={overlayFit:b,overlayPoint:S,originPoint:g,position:u,overlayRect:e});}if(r.length){let u=null,g=-1;for(let S of r){let b=S.boundingBoxRect.width*S.boundingBoxRect.height*(S.position.weight||1);b>g&&(g=b,u=S);}this._isPushed=false,this._applyPosition(u.position,u.origin);return}if(this._canPush){this._isPushed=true,this._applyPosition(d.position,d.originPoint);return}this._applyPosition(d.position,d.originPoint);}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe();}dispose(){this._isDisposed||(this._boundingBox&&ke(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Uo),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=true);}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply();}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=true){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=true){return this._growAfterOpen=n,this}withPush(n=true){return this._canPush=n,this}withLockedPosition(n=true){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof Bn$1?this._origin.nativeElement:Vn(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let o;if(t.originX=="center")o=n.left+n.width/2;else {let d=this._isRtl()?n.right:n.left,u=this._isRtl()?n.left:n.right;o=t.originX=="start"?d:u;}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=n.top+n.height/2:r=t.originY=="top"?n.top:n.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(n,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:n.x+o,y:n.y+r}}_getOverlayFit(n,e,t,o){let r=Yo(e),{x:d,y:u}=n,g=this._getOffset(o,"x"),S=this._getOffset(o,"y");g&&(d+=g),S&&(u+=S);let b=0-d,T=d+r.width-t.width,K=0-u,Z=u+r.height-t.height,U=this._subtractOverflows(r.width,b,T),z=this._subtractOverflows(r.height,K,Z),xe=U*z;return {visibleArea:xe,isCompletelyWithinViewport:r.width*r.height===xe,fitsInViewportVertically:z===r.height,fitsInViewportHorizontally:U==r.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,d=Wo(this._overlayRef.getConfig().minHeight),u=Wo(this._overlayRef.getConfig().minWidth),g=n.fitsInViewportVertically||d!=null&&d<=o,S=n.fitsInViewportHorizontally||u!=null&&u<=r;return g&&S}return  false}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return {x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=Yo(e),r=this._viewportRect,d=Math.max(n.x+o.width-r.width,0),u=Math.max(n.y+o.height-r.height,0),g=Math.max(r.top-t.top-n.y,0),S=Math.max(r.left-t.left-n.x,0),b=0,T=0;return o.width<=r.width?b=S||-d:b=n.x<this._getViewportMarginStart()?r.left-t.left-n.x:0,o.height<=r.height?T=g||-u:T=n.y<this._getViewportMarginTop()?r.top-t.top-n.y:0,this._previousPushAmount={x:b,y:T},{x:n.x+b,y:n.y+T}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Nr(this._lastScrollVisibility,t)){let o=new Ct(n,t);this._positionChanges.next(o);}this._lastScrollVisibility=t;}this._lastPosition=n,this._isInitialRender=false;}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`;}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,o=this._isRtl(),r,d,u;if(e.overlayY==="top")d=n.y,r=t.height-d+this._getViewportMarginBottom();else if(e.overlayY==="bottom")u=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-u+this._getViewportMarginTop();else {let Z=Math.min(t.bottom-n.y+t.top,n.y),U=this._lastBoundingBoxSize.height;r=Z*2,d=n.y-Z,r>U&&!this._isInitialRender&&!this._growAfterOpen&&(d=n.y-U/2);}let g=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,S=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,b,T,K;if(S)K=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),b=n.x-this._getViewportMarginStart();else if(g)T=n.x,b=t.right-n.x-this._getViewportMarginEnd();else {let Z=Math.min(t.right-n.x+t.left,n.x),U=this._lastBoundingBoxSize.width;b=Z*2,T=n.x-Z,b>U&&!this._isInitialRender&&!this._growAfterOpen&&(T=n.x-U/2);}return {top:d,left:T,bottom:u,right:K,width:b,height:r}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else {let r=this._overlayRef.getConfig().maxHeight,d=this._overlayRef.getConfig().maxWidth;o.width=N(t.width),o.height=N(t.height),o.top=N(t.top)||"auto",o.bottom=N(t.bottom)||"auto",o.left=N(t.left)||"auto",o.right=N(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=N(r)),d&&(o.maxWidth=N(d));}this._lastBoundingBoxSize=t,ke(this._boundingBox.style,o);}_resetBoundingBoxStyles(){ke(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""});}_resetOverlayElementStyles(){ke(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""});}_setOverlayElementStyles(n,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,d=this._overlayRef.getConfig();if(o){let b=this._viewportRuler.getViewportScrollPosition();ke(t,this._getExactOverlayY(e,n,b)),ke(t,this._getExactOverlayX(e,n,b));}else t.position="static";let u="",g=this._getOffset(e,"x"),S=this._getOffset(e,"y");g&&(u+=`translateX(${g}px) `),S&&(u+=`translateY(${S}px)`),t.transform=u.trim(),d.maxHeight&&(o?t.maxHeight=N(d.maxHeight):r&&(t.maxHeight="")),d.maxWidth&&(o?t.maxWidth=N(d.maxWidth):r&&(t.maxWidth="")),ke(this._pane.style,t);}_getExactOverlayY(n,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),n.overlayY==="bottom"){let d=this._document.documentElement.clientHeight;o.bottom=`${d-(r.y+this._overlayRect.height)}px`;}else o.top=N(r.y);return o}_getExactOverlayX(n,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let d;if(this._isRtl()?d=n.overlayX==="end"?"left":"right":d=n.overlayX==="end"?"right":"left",d==="right"){let u=this._document.documentElement.clientWidth;o.right=`${u-(r.x+this._overlayRect.width)}px`;}else o.left=N(r.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return {isOriginClipped:zo(n,t),isOriginOutsideView:Fn(n,t),isOverlayClipped:zo(e,t),isOverlayOutsideView:Fn(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,o)=>t-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return {top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return !this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Ae(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e));});}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n);}),this._appliedPanelClasses=[]);}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof Bn$1)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return {top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function ke(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function Wo(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(Pr);return !e||e==="px"?parseFloat(n):null}return i||null}function Yo(i){return {top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Nr(i,n){return i===n?true:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Go="cdk-global-overlay-wrapper";function tr(i){return new Dt}var Dt=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=false;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Go),this._isDisposed=false;}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:d,maxHeight:u}=t,g=(o==="100%"||o==="100vw")&&(!d||d==="100%"||d==="100vw"),S=(r==="100%"||r==="100vh")&&(!u||u==="100%"||u==="100vh"),b=this._xPosition,T=this._xOffset,K=this._overlayRef.getConfig().direction==="rtl",Z="",U="",z="";g?z="flex-start":b==="center"?(z="center",K?U=T:Z=T):K?b==="left"||b==="end"?(z="flex-end",Z=T):(b==="right"||b==="start")&&(z="flex-start",U=T):b==="left"||b==="start"?(z="flex-start",Z=T):(b==="right"||b==="end")&&(z="flex-end",U=T),n.position=this._cssPosition,n.marginLeft=g?"0":Z,n.marginTop=S?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=g?"0":U,e.justifyContent=z,e.alignItems=S?"flex-start":this._alignItems;}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Go),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=true;}},nr=(()=>{class i{_injector=E(ve$1);global(){return tr()}flexibleConnectedTo(e){return Ot(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})(),ir=new x("OVERLAY_DEFAULT_CONFIG");function Rt(i,n){i.get(kn$1).load(Qo);let e=i.get(er),t=i.get(Cn$1),o=i.get(ht),r=i.get(Uo$1),d=i.get($n$1),u=i.get(Xm,null,{optional:true})||i.get(Pn$1).createRenderer(null,null),g=new St(n),S=i.get(ir,null,{optional:true})?.usePopover??true;g.direction=g.direction||d.value,"showPopover"in t.body?g.usePopover=n?.usePopover??S:g.usePopover=false;let b=t.createElement("div"),T=t.createElement("div");b.id=o.getId("cdk-overlay-"),b.classList.add("cdk-overlay-pane"),T.appendChild(b),g.usePopover&&(T.setAttribute("popover","manual"),T.classList.add("cdk-overlay-popover"));let K=g.usePopover?g.positionStrategy?.getPopoverInsertionPoint?.():null;return Vn(K)?K.after(T):K?.type==="parent"?K.element.appendChild(T):e.getContainerElement().appendChild(T),new kt(new yt(b,r,i),T,b,g,i.get(Ie),i.get(qo),t,i.get(cr),i.get(Jo),n?.disableAnimations??i.get(nh,null,{optional:true})==="NoopAnimations",i.get(te),u)}var or=(()=>{class i{scrollStrategies=E($o);_positionBuilder=E(nr);_injector=E(ve$1);create(e){return Rt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Hn$1({token:i,factory:i.\u0275fac})}return i})();var jn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({providers:[or],imports:[kr$1,Vo,Pn,Pn]})}return i})();var Fr=["tooltip"],Br=20;var Vr=new x("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=E(ve$1);return ()=>It(i,{scrollThrottle:Br})}}),jr=new x("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var rr="tooltip-panel",zr={passive:true},Hr=8,Ur=8,Wr=24,Yr=200,Te=(()=>{class i{_elementRef=E(Bn$1);_ngZone=E(Ie);_platform=E(R);_ariaDescriber=E(So);_focusMonitor=E($e);_dir=E($n$1);_injector=E(ve$1);_viewContainerRef=E($o$1);_mediaMatcher=E(Pe);_document=E(Cn$1);_renderer=E(Xm);_animationsDisabled=Ce();_defaultOptions=E(jr,{optional:true});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=false;_disabled=false;_tooltipClass;_viewInitialized=false;_pointerExitEventsInitialized=false;_tooltipComponent=ar;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=false;_dirSubscribed=false;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()));}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Tn(e),this._detach(),this._overlayRef=null;}get disabled(){return this._disabled}set disabled(e){let t=Tn(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message));}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Xe(e);}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Xe(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay);}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t);}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass);}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ue;_isDestroyed=false;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Hr;}ngAfterViewInit(){this._viewInitialized=true,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Dp(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0));});}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=true,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e);}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(t);this._detach(),this._portal=this._portal||new et(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(Dp(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e);}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()));}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e);}_isTooltipVisible(){return !!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let d=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&d._origin instanceof Bn$1)return this._overlayRef;this._detach();}let t=this._injector.get(Le).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${rr}`,r=Ot(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(Dp(this._destroyed)).subscribe(d=>{this._updateCurrentPositionClass(d.connectionPair),this._tooltipInstance&&d.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0));}),this._overlayRef=Rt(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(Vr)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Dp(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Dp(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Dp(this._destroyed)).subscribe(d=>{d.preventDefault(),d.stopPropagation(),this._ngZone.run(()=>this.hide(0));}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=true,this._dir.change.pipe(Dp(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef);})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null;}_updatePosition(e){let t=e.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(r$1(r$1({},o.main),r.main)),this._addOffset(r$1(r$1({},o.fallback),r.fallback))]);}_addOffset(e){let t=Ur,o=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=o?-t:t:e.originX==="end"&&(e.offsetX=o?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"||t=="below"?o={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={originX:"end",originY:"center"});let{x:r,y:d}=this._invertPosition(o.originX,o.originY);return {main:o,fallback:{originX:r,originY:d}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"?o={overlayX:"center",overlayY:"bottom"}:t=="below"?o={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={overlayX:"start",overlayY:"center"});let{x:r,y:d}=this._invertPosition(o.overlayX,o.overlayY);return {main:o,fallback:{overlayX:r,overlayY:d}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ug(()=>{this._tooltipInstance&&this._overlayRef.updatePosition();},{injector:this._injector}));}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck());}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:o,originY:r}=e,d;if(t==="center"?this._dir&&this._dir.value==="rtl"?d=o==="end"?"left":"right":d=o==="start"?"left":"right":d=t==="bottom"&&r==="top"?"above":"below",d!==this._currentPosition){let u=this._overlayRef;if(u){let g=`${this._cssClassPrefix}-${rr}-`;u.removePanelClass(g+this._currentPosition),u.addPanelClass(g+d);}this._currentPosition=d;}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],o=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o);},this._defaultOptions?.touchLongPressShowDelay??r);})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t);}));}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=true,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide();}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;t!==o&&!o.contains(t)&&this.hide();}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay);};this._addListener("touchend",e),this._addListener("touchcancel",e);}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,zr));}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?true:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:false}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,o=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(e==="on"||!t.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent";}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=true,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ug({write:()=>{this._ariaDescriptionPending=false,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip");}},{injector:this._injector}));}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!vo(e):true;static \u0275fac=function(t){return new(t||i)};static \u0275dir=Qy({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,o){t&2&&lf("mat-mdc-tooltip-disabled",o.disabled);},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),ar=(()=>{class i{_changeDetectorRef=E(yO);_elementRef=E(Bn$1);_isMultiline=false;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ce();_tooltip;_closeOnInteraction=false;_isVisible=false;_onHide=new ue;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(true),this._showTimeoutId=void 0;},e);}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(false),this._hideTimeoutId=void 0;},e);}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null;}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0);}_markForCheck(){this._changeDetectorRef.markForCheck();}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(false));}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck();}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Wr&&e.width>=Yr}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation);}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0;}_finalizeAnimation(e){e?this._closeOnInteraction=true:this.isVisible()||this._onHide.next();}_toggleVisibility(e){let t=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:o),t.classList.add(e?o:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let d=getComputedStyle(t);(d.getPropertyValue("animation-duration")==="0s"||d.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=true);}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e));}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Uy({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,o){if(t&1&&sf(Fr,7),t&2){let r;_v(r=Mv())&&(o._tooltip=r.first);}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,o){t&1&&nf("mouseleave",function(d){return o._handleMouseLeave(d)});},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,o){t&1&&(La$1(0,"div",1,0),rf("animationend",function(d){return o._handleAnimationEnd(d)}),La$1(2,"div",2),Yv(3),Fa$1()()),t&2&&(jv(o.tooltipClass),lf("mdc-tooltip--multiline",o._isMultiline),pm(3),hf(o.message));},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return i})();var Be=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({imports:[En,jn,kr$1,Je]})}return i})();var Gr=["*",[["mat-toolbar-row"]]],Xr=["*","mat-toolbar-row"],Kr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=Qy({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Mt=(()=>{class i{_elementRef=E(Bn$1);_platform=E(R);_document=E(Cn$1);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()));}_checkToolbarMixedModes(){this._toolbarRows.length;}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Uy({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,o,r){if(t&1&&of(r,Kr,5),t&2){let d;_v(d=Mv())&&(o._toolbarRows=d);}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,o){t&2&&(jv(o.color?"mat-"+o.color:""),lf("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0));},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Xr,decls:2,vars:0,template:function(t,o){t&1&&(Tv(Gr),Cv(0),Cv(1,1));},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return i})();var At=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Wy({type:i});static \u0275inj=Oc({imports:[kr$1]})}return i})();var Hn="\xA9 2026 Munir. All rights reserved.";var nt=[{label:"Email",icon:"gmail",href:"mailto:munir.fati.haji@gmail.com"},{label:"GitHub",icon:"github",href:"https://github.com/munir-fati-haji",external:true},{label:"GitLab",icon:"gitlab",href:"https://gitlab.com/munir-fati-haji",external:true},{label:"LinkedIn",icon:"linkedin",href:"https://www.linkedin.com/in/munir-fati-haji",external:true}];var lr=(i,n)=>n.label;function $r(i,n){if(i&1){let e=vv();xo$1(0,"a",16),nf("click",function(){al(e);let o=Dv(2);return cl(o.close())}),xo$1(1,"mat-icon",17),Yv(2),Pa$1(),Yv(3),Pa$1();}if(i&2){let e=n.$implicit,t=Dv(2);jv(t.themeService.isDark()?"border-white/10! bg-white/[0.045]! text-slate-200! hover:border-cyan-300/20! hover:bg-cyan-300/10! hover:text-cyan-100!":"border-slate-200! bg-white/80! text-slate-700! hover:border-cyan-500/30! hover:bg-cyan-50! hover:text-cyan-700!"),Kd("href",e.href,bg),pm(2),hf(e.icon),pm(),ja$1(" ",e.label," ");}}function Zr(i,n){if(i&1){let e=vv();xo$1(0,"a",18),nf("click",function(){al(e);let o=Dv(2);return cl(o.close())}),Jd(1,"mat-icon",19),Pa$1();}if(i&2){let e=n.$implicit,t=Dv(2);jv(t.themeService.isDark()?"border-white/15 bg-white/10 text-cyan-100 shadow-cyan-950/25 hover:border-cyan-300/35 hover:bg-cyan-300/15 hover:text-white":"border-slate-200 bg-white text-cyan-700 shadow-slate-300/40 hover:border-cyan-500/30 hover:bg-cyan-50 hover:text-cyan-800"),Kd("href",e.href,bg),Yd("aria-label",e.label)("target",e.external?"_blank":null)("rel",e.external?"noreferrer":null),pm(),Kd("svgIcon",e.icon);}}function qr(i,n){if(i&1){let e=vv();xo$1(0,"div",0)(1,"button",1),nf("click",function(){al(e);let o=Dv();return cl(o.close())}),Pa$1(),xo$1(2,"aside",2),Jd(3,"div",3)(4,"div",4),xo$1(5,"div",5)(6,"a",6),nf("click",function(){al(e);let o=Dv();return cl(o.close())}),Yv(7),Pa$1(),xo$1(8,"button",7),nf("click",function(){al(e);let o=Dv();return cl(o.close())}),xo$1(9,"mat-icon"),Yv(10,"close"),Pa$1()()(),xo$1(11,"nav",8),fv(12,$r,4,5,"a",9,lr),Pa$1(),xo$1(14,"div",10)(15,"button",11),nf("click",function(){al(e);let o=Dv();return cl(o.toggleTheme())}),xo$1(16,"span"),Yv(17),Pa$1(),xo$1(18,"mat-icon",12),Yv(19),Pa$1()(),xo$1(20,"p",13),Yv(21,"Connect"),Pa$1(),xo$1(22,"nav",14),fv(23,Zr,2,7,"a",15,lr),Pa$1()()()();}if(i&2){let e=Dv();pm(2),jv(e.themeService.isDark()?"border-white/10 bg-[#070b1a]/90 text-white shadow-black/40":"border-slate-200 bg-slate-50/95 text-slate-950 shadow-slate-400/30"),pm(4),jv(e.themeService.isDark()?"text-white hover:text-cyan-200":"text-slate-950 hover:text-cyan-700"),pm(),ja$1(" ",e.brand()," "),pm(),jv(e.themeService.isDark()?"border-cyan-300/20! bg-cyan-300/10! text-cyan-200! hover:bg-cyan-300/15!":"border-cyan-600/20! bg-cyan-50! text-cyan-700! hover:bg-cyan-100!"),pm(4),pv(e.links()),pm(3),jv(e.themeService.isDark()?"border-white/20 bg-white/90 text-slate-950 hover:bg-white":"border-slate-950/15 bg-slate-950 text-white hover:bg-slate-800"),Yd("aria-label",e.themeService.toggleLabel()),pm(2),hf(e.themeService.toggleLabel()),pm(2),hf(e.themeService.toggleIcon()),pm(4),pv(e.footerLinks);}}var Pt=class i{brand=gO.required();isOpen=gO.required();links=gO.required();closed=hO();themeService=E(Ur$1);footerLinks=nt;close(){this.closed.emit();}toggleTheme(){this.themeService.toggleTheme();}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-mobile-navbar"]],inputs:{brand:[1,"brand"],isOpen:[1,"isOpen"],links:[1,"links"]},outputs:{closed:"closed"},decls:1,vars:1,consts:[[1,"fixed","inset-0","z-50","overflow-hidden","xl:hidden"],["type","button","aria-label","Close navigation menu",1,"absolute","inset-0","bg-[#030712]/70","backdrop-blur-md",3,"click"],[1,"app-mobile-drawer","absolute","inset-y-0","right-0","flex","w-[calc(100vw-1.5rem)]","max-w-sm","flex-col","overflow-hidden","rounded-l-3xl","border-l","p-4","shadow-2xl","backdrop-blur-2xl"],[1,"pointer-events-none","absolute","-right-14","top-10","h-36","w-36","rounded-full","bg-cyan-300/15","blur-3xl"],[1,"pointer-events-none","absolute","-bottom-10","left-8","h-40","w-40","rounded-full","bg-blue-500/10","blur-3xl"],[1,"relative","flex","items-center","justify-between","gap-3"],["href","#hero",1,"app-brand","rounded-full","px-2","font-['Brush_Script_MT','Segoe_Script',cursive]","text-2xl","font-normal","no-underline","transition","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-4","focus-visible:outline-cyan-300",3,"click"],["mat-icon-button","","type","button","aria-label","Close navigation menu",1,"h-10!","w-10!","rounded-full!","border","transition",3,"click"],["aria-label","Mobile navigation",1,"relative","mt-8","flex","min-h-0","flex-1","flex-col","gap-2","overflow-y-auto","pb-4"],["mat-button","",1,"app-mobile-nav-link","h-12!","justify-start!","rounded-2xl!","border","px-4!","text-sm!","font-semibold!","transition","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-cyan-300",3,"class","href"],[1,"relative","mt-auto","border-t","border-white/10","pt-4"],["type","button",1,"app-mobile-theme-toggle","mb-4","flex","h-12","w-full","items-center","justify-between","rounded-2xl","border","px-4","text-left","text-sm","font-semibold","transition","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-cyan-300",3,"click"],["aria-hidden","true",1,"text-cyan-300!"],[1,"px-1","text-xs","font-semibold","uppercase","tracking-[0.28em]","text-cyan-300"],["aria-label","Mobile footer links",1,"mt-3","flex","flex-wrap","items-center","gap-2"],[1,"app-footer-icon","group","inline-flex","h-11","w-11","items-center","justify-center","rounded-full","border","shadow-lg","transition","hover:shadow-[0_0_22px_rgba(34,211,238,0.22)]","focus-visible:outline-none","focus-visible:ring-2","focus-visible:ring-cyan-300","focus-visible:ring-offset-2","focus-visible:ring-offset-[#070b1a]",3,"class","href"],["mat-button","",1,"app-mobile-nav-link","h-12!","justify-start!","rounded-2xl!","border","px-4!","text-sm!","font-semibold!","transition","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-cyan-300",3,"click","href"],["aria-hidden","true",1,"mr-3!","text-[1.25rem]!","text-cyan-300!"],[1,"app-footer-icon","group","inline-flex","h-11","w-11","items-center","justify-center","rounded-full","border","shadow-lg","transition","hover:shadow-[0_0_22px_rgba(34,211,238,0.22)]","focus-visible:outline-none","focus-visible:ring-2","focus-visible:ring-cyan-300","focus-visible:ring-offset-2","focus-visible:ring-offset-[#070b1a]",3,"click","href"],["aria-hidden","true",1,"size-[19px]!","text-current!","opacity-95","transition","group-hover:opacity-100","[&_*]:fill-current!",3,"svgIcon"]],template:function(e,t){e&1&&lv(0,qr,25,12,"div",0),e&2&&uv(t.isOpen()?0:-1);},dependencies:[ye,Ne,qe,Rs,Is],encapsulation:2})};var Un="Munir";var Wn=[{label:"Home",href:"#hero",icon:"home"},{label:"About",href:"#about",icon:"person"},{label:"Experience",href:"#experience",icon:"work"},{label:"Education",href:"#education",icon:"school"},{label:"Skills",href:"#skills",icon:"code"},{label:"Projects",href:"#projects",icon:"folder"},{label:"Working On",href:"#working-on",icon:"build"},{label:"Case Study",href:"#case-study",icon:"analytics"},{label:"Contact",href:"#contact",icon:"mail"}];var Jr=(i,n)=>n.label;function Qr(i,n){if(i&1&&(xo$1(0,"a",10),Yv(1),Pa$1()),i&2){let e=n.$implicit,t=Dv();jv(t.themeService.isDark()?"text-slate-300! hover:bg-cyan-300/10! hover:text-cyan-200!":"text-slate-700! hover:bg-cyan-100! hover:text-cyan-700!"),Kd("href",e.href,bg),pm(),ja$1(" ",e.label," ");}}var Nt=class i{themeService=E(Ur$1);isMobileMenuOpen=ps(false);brand=Un;links=Wn;closeMobileMenu(){this.isMobileMenuOpen.set(false);}openMobileMenu(){this.isMobileMenuOpen.set(true);}toggleTheme(){this.themeService.toggleTheme();}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-navbar"]],decls:16,vars:18,consts:[[1,"app-navbar","relative","z-40","h-16!","min-h-16!","overflow-hidden","border-b","px-3!","py-0!","shadow-[0_12px_36px_rgba(0,0,0,0.24)]","backdrop-blur-xl","sm:px-5!"],[1,"pointer-events-none","absolute","-left-16","top-1/2","h-28","w-28","-translate-y-1/2","rounded-full","bg-cyan-300/10","blur-3xl"],[1,"pointer-events-none","absolute","right-20","top-0","h-20","w-20","rounded-full","bg-blue-500/10","blur-3xl"],[1,"relative","mx-auto","flex","w-full","max-w-7xl","items-center","justify-between","gap-4"],["href","#hero",1,"app-brand","rounded-full","px-2","font-['Brush_Script_MT','Segoe_Script',cursive]","text-2xl","font-normal","tracking-normal","no-underline","transition","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-4","focus-visible:outline-cyan-300","sm:text-3xl"],["aria-label","Primary navigation",1,"app-nav-surface","hidden","items-center","gap-0.5","rounded-full","border","p-1","shadow-lg","shadow-black/10","backdrop-blur","xl:flex"],["mat-button","",1,"app-nav-link","h-9!","min-w-0!","rounded-full!","px-3!","text-xs!","font-semibold!","leading-none!","transition","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-cyan-300",3,"class","href"],["mat-icon-button","","type","button",1,"app-theme-toggle","hidden!","h-10!","w-10!","rounded-full!","border","shadow-lg","transition","xl:inline-flex!",3,"click","matTooltip"],["mat-icon-button","","type","button","aria-label","Open navigation menu",1,"app-menu-toggle","h-10!","w-10!","rounded-full!","border","shadow-lg","transition","xl:hidden!",3,"click"],[3,"closed","brand","links","isOpen"],["mat-button","",1,"app-nav-link","h-9!","min-w-0!","rounded-full!","px-3!","text-xs!","font-semibold!","leading-none!","transition","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-cyan-300",3,"href"]],template:function(e,t){e&1&&(xo$1(0,"mat-toolbar",0),Jd(1,"div",1)(2,"div",2),xo$1(3,"div",3)(4,"a",4),Yv(5),Pa$1(),xo$1(6,"nav",5),fv(7,Qr,2,4,"a",6,Jr),Pa$1(),xo$1(9,"button",7),nf("click",function(){return t.toggleTheme()}),xo$1(10,"mat-icon"),Yv(11),Pa$1()(),xo$1(12,"button",8),nf("click",function(){return t.openMobileMenu()}),xo$1(13,"mat-icon"),Yv(14,"menu"),Pa$1()()()(),xo$1(15,"app-mobile-navbar",9),nf("closed",function(){return t.closeMobileMenu()}),Pa$1()),e&2&&(jv(t.themeService.isDark()?"border-white/10 bg-[#070b1a]/80! text-white!":"border-slate-200/80 bg-slate-50/90! text-slate-950!"),pm(4),jv(t.themeService.isDark()?"text-white hover:text-cyan-200":"text-slate-950 hover:text-cyan-700"),pm(),ja$1(" ",t.brand," "),pm(),jv(t.themeService.isDark()?"border-white/10 bg-white/[0.045]":"border-slate-200 bg-white/80"),pm(),pv(t.links),pm(2),jv(t.themeService.isDark()?"border-white/20! bg-white/90! text-slate-950! shadow-black/30 hover:bg-white!":"border-slate-950/15! bg-slate-950! text-white! shadow-slate-300/40 hover:bg-slate-800!"),Kd("matTooltip",t.themeService.toggleLabel()),Yd("aria-label",t.themeService.toggleLabel()),pm(2),hf(t.themeService.toggleIcon()),pm(),jv(t.themeService.isDark()?"border-cyan-300/20! bg-cyan-300/10! text-cyan-200! shadow-cyan-950/30 hover:bg-cyan-300/15!":"border-cyan-600/20! bg-cyan-50! text-cyan-700! shadow-slate-300/40 hover:bg-cyan-100!"),Yd("aria-expanded",t.isMobileMenuOpen()),pm(3),Kd("brand",t.brand)("links",t.links)("isOpen",t.isMobileMenuOpen()));},dependencies:[At,Mt,ye,Ne,qe,Rs,Is,Be,Te,Pt],encapsulation:2})};var ea=(i,n)=>n.label;function ta(i,n){if(i&1&&(xo$1(0,"a",6),Jd(1,"mat-icon",7),Pa$1()),i&2){let e=n.$implicit,t=Dv();jv(t.themeService.isDark()?"border-white/10 bg-white/[0.08] text-cyan-100 hover:border-cyan-300/50 hover:bg-cyan-300/20 hover:text-white":"border-slate-200 bg-white text-cyan-700 hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-cyan-800"),Kd("href",e.href,bg)("matTooltip",e.label),Yd("aria-label",e.label)("target",e.external?"_blank":null)("rel",e.external?"noreferrer":null),pm(),Kd("svgIcon",e.icon);}}var Lt=class i{themeService=E(Ur$1);copyright=Hn;links=nt;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-footer"]],decls:8,vars:5,consts:[[1,"app-footer","relative","hidden!","h-auto!","min-h-0!","overflow-hidden","border-t","px-4!","py-3!","shadow-[0_-12px_36px_rgba(0,0,0,0.22)]","backdrop-blur-xl","xl:flex!"],[1,"pointer-events-none","absolute","left-1/2","top-0","h-16","w-44","-translate-x-1/2","-translate-y-1/2","rounded-full","bg-cyan-300/10","blur-3xl"],[1,"relative","mx-auto","flex","w-full","max-w-7xl","flex-col","items-center","justify-between","gap-3","text-center","text-xs","leading-normal","sm:flex-row","sm:text-left"],[1,"font-medium","text-slate-400"],["aria-label","Footer links",1,"app-footer-links","flex","items-center","justify-center","gap-1.5","rounded-full","border","p-1","shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_24px_rgba(0,0,0,0.22)]","backdrop-blur-xl"],[1,"app-footer-icon","group","inline-flex","h-9","w-9","items-center","justify-center","rounded-full","border","shadow-sm","transition","duration-200","hover:-translate-y-0.5","focus-visible:outline-none","focus-visible:ring-2","focus-visible:ring-cyan-300","focus-visible:ring-offset-2","focus-visible:ring-offset-[#070b1a]",3,"class","href","matTooltip"],[1,"app-footer-icon","group","inline-flex","h-9","w-9","items-center","justify-center","rounded-full","border","shadow-sm","transition","duration-200","hover:-translate-y-0.5","focus-visible:outline-none","focus-visible:ring-2","focus-visible:ring-cyan-300","focus-visible:ring-offset-2","focus-visible:ring-offset-[#070b1a]",3,"href","matTooltip"],["aria-hidden","true",1,"size-[18px]!","text-current!","opacity-95","transition","group-hover:opacity-100","[&_*]:fill-current!",3,"svgIcon"]],template:function(e,t){e&1&&(xo$1(0,"mat-toolbar",0),Jd(1,"div",1),xo$1(2,"div",2)(3,"span",3),Yv(4),Pa$1(),xo$1(5,"nav",4),fv(6,ta,2,8,"a",5,ea),Pa$1()()()),e&2&&(jv(t.themeService.isDark()?"border-white/10 bg-[#070b1a]! text-slate-400!":"border-slate-200/80 bg-slate-50/95! text-slate-600!"),pm(4),ja$1(" ",t.copyright," "),pm(),jv(t.themeService.isDark()?"border-white/10 bg-white/[0.06]":"border-slate-200 bg-white/80"),pm(),pv(t.links));},dependencies:[At,Mt,ye,Rs,Is,Be,Te],encapsulation:2})};var Ft=class i{eyebrow=gO.required();title=gO.required();description=gO.required();secondDescription=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-about-intro"]],inputs:{eyebrow:[1,"eyebrow"],title:[1,"title"],description:[1,"description"],secondDescription:[1,"secondDescription"]},decls:9,vars:4,consts:[[1,"mb-4","text-sm","font-semibold","uppercase","tracking-[0.35em]","text-cyan-300"],[1,"max-w-3xl","text-3xl","font-bold","tracking-tight","text-white","sm:text-4xl","lg:text-5xl"],[1,"mt-6","max-w-2xl","space-y-5","text-base","leading-8","text-slate-300","sm:text-lg"]],template:function(e,t){e&1&&(La$1(0,"p",0),Yv(1),Fa$1(),La$1(2,"h2",1),Yv(3),Fa$1(),La$1(4,"div",2)(5,"p"),Yv(6),Fa$1(),La$1(7,"p"),Yv(8),Fa$1()()),e&2&&(pm(),ja$1(" ",t.eyebrow(),`
`),pm(2),ja$1(" ",t.title(),`
`),pm(3),hf(t.description()),pm(2),hf(t.secondDescription()));},encapsulation:2})};function na(i,n){if(i&1&&(La$1(0,"span",1),Yv(1),Fa$1()),i&2){let e=n.$implicit;pm(),ja$1(" ",e," ");}}var Bt=class i{skills=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-about-skills"]],inputs:{skills:[1,"skills"]},decls:3,vars:0,consts:[[1,"mt-8","flex","flex-wrap","gap-3"],[1,"inline-flex","items-center","rounded-full","border","border-cyan-300/20","bg-cyan-300/10","px-4","py-2","text-sm","font-semibold","text-cyan-100","shadow-sm","shadow-cyan-950/30","backdrop-blur","transition","hover:border-cyan-300/40","hover:bg-cyan-300/15","hover:text-white"]],template:function(e,t){e&1&&(La$1(0,"div",0),fv(1,na,2,1,"span",1,dv),Fa$1()),e&2&&(pm(),pv(t.skills()));},encapsulation:2})};var Vt=class i{highlight=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-about-highlight-card"]],inputs:{highlight:[1,"highlight"]},decls:10,vars:3,consts:[[1,"group","rounded-2xl","border","border-white/10","bg-slate-900/70","p-5","text-white","transition","hover:border-cyan-300/40","hover:bg-slate-900/90"],[1,"flex","gap-4"],[1,"flex","h-12","w-12","shrink-0","items-center","justify-center","rounded-2xl","border","border-cyan-300/20","bg-cyan-300/10","text-cyan-300","shadow-lg","shadow-cyan-950/30","backdrop-blur","transition","group-hover:scale-105","group-hover:bg-cyan-300/15"],[1,"min-w-0"],[1,"font-semibold","text-white"],[1,"mt-2","text-sm","leading-6","text-slate-400"]],template:function(e,t){e&1&&(xo$1(0,"article",0)(1,"div",1)(2,"div",2)(3,"mat-icon"),Yv(4),Pa$1()(),xo$1(5,"div",3)(6,"h3",4),Yv(7),Pa$1(),xo$1(8,"p",5),Yv(9),Pa$1()()()()),e&2&&(pm(4),hf(t.highlight().icon),pm(3),ja$1(" ",t.highlight().title," "),pm(2),ja$1(" ",t.highlight().description," "));},dependencies:[Rs,Is],encapsulation:2})};var ia=(i,n)=>n.title;function oa(i,n){if(i&1&&Jd(0,"app-about-highlight-card",2),i&2){let e=n.$implicit;Kd("highlight",e);}}var jt=class i{highlights=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-about-highlights"]],inputs:{highlights:[1,"highlights"]},decls:4,vars:0,consts:[[1,"min-w-0","w-full","rounded-3xl","border","border-white/10","bg-white/5","p-3","shadow-2xl","backdrop-blur","sm:rounded-4xl","sm:p-5","xl:p-6"],[1,"grid","gap-4"],[3,"highlight"]],template:function(e,t){e&1&&(xo$1(0,"div",0)(1,"div",1),fv(2,oa,1,1,"app-about-highlight-card",2,ia),Pa$1()()),e&2&&(pm(2),pv(t.highlights()));},dependencies:[Vt],encapsulation:2})};var ra=["*"],Ve=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-section-container"]],ngContentSelectors:ra,decls:3,vars:0,consts:[[1,"flex","min-h-[calc(100svh-64px)]","overflow-x-hidden","bg-[#070b1a]","text-white"],[1,"mx-auto","grid","w-full","max-w-7xl","grid-cols-1","items-center","gap-10","px-4","py-10","sm:px-6","lg:grid-cols-[1.15fr_0.85fr]","lg:gap-12","lg:px-10","lg:py-12","xl:px-12"]],template:function(e,t){e&1&&(Tv(),La$1(0,"section",0)(1,"div",1),Cv(2),Fa$1()());},encapsulation:2})};var Yn="About Me",Gn="Frontend developer focused on clean, scalable user interfaces",Xn="I am an Angular Frontend Developer with experience building enterprise web applications using Angular, TypeScript, RxJS, and modern UI architecture. I enjoy creating reusable components, improving user experience, and turning complex enterprise workflows into clean, responsive interfaces.",Kn="My background in Robotics gives me a strong problem-solving mindset, and my frontend experience helps me build practical, maintainable applications that feel simple for users.";var $n=[{title:"Angular & TypeScript",description:"Building scalable frontend applications with reusable components.",icon:"code"},{title:"Enterprise UI",description:"Experience with dashboards, forms, workflows, tables, and business tools.",icon:"dashboard"},{title:"Clean Architecture",description:"Focused on maintainable structure, readable code, and component design.",icon:"account_tree"},{title:"Robotics Background",description:"MSc Robotics graduate with strong analytical and engineering thinking.",icon:"precision_manufacturing"}];var Zn=["Angular","TypeScript","RxJS","Angular Material","Tailwind CSS","AG Grid","Enterprise UI"];var zt=class i{eyebrow=Yn;title=Gn;description=Xn;secondDescription=Kn;skills=Zn;highlights=$n;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-about-me"]],decls:8,vars:6,consts:[[1,"min-w-0"],[3,"eyebrow","title","description","secondDescription"],[3,"skills"],[1,"mt-10"],["href","#projects",1,"inline-flex","items-center","justify-center","rounded-full","bg-cyan-300","px-6","py-3","text-sm","font-bold","text-slate-950","shadow-lg","shadow-cyan-300/20","transition","hover:bg-cyan-200"],[3,"highlights"]],template:function(e,t){e&1&&(xo$1(0,"app-section-container")(1,"div",0),Jd(2,"app-about-intro",1)(3,"app-about-skills",2),xo$1(4,"div",3)(5,"a",4),Yv(6," View My Work "),Pa$1()()(),Jd(7,"app-about-highlights",5),Pa$1()),e&2&&(pm(2),Kd("eyebrow",t.eyebrow)("title",t.title)("description",t.description)("secondDescription",t.secondDescription),pm(),Kd("skills",t.skills),pm(4),Kd("highlights",t.highlights));},dependencies:[Ft,Bt,jt,Ve],encapsulation:2})};var $=class i{eyebrow=gO.required();title=gO.required();description=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-section-header"]],hostAttrs:[1,"block"],inputs:{eyebrow:[1,"eyebrow"],title:[1,"title"],description:[1,"description"]},decls:7,vars:3,consts:[[1,"mb-4","text-sm","font-semibold","uppercase","tracking-[0.35em]","text-cyan-300"],[1,"max-w-4xl","text-3xl","font-bold","tracking-tight","text-white","sm:text-4xl","lg:text-5xl"],[1,"mt-6","max-w-2xl","text-base","leading-8","text-slate-300","sm:text-lg"]],template:function(e,t){e&1&&(La$1(0,"div")(1,"p",0),Yv(2),Fa$1(),La$1(3,"h2",1),Yv(4),Fa$1(),La$1(5,"p",2),Yv(6),Fa$1()()),e&2&&(pm(2),ja$1(" ",t.eyebrow()," "),pm(2),ja$1(" ",t.title()," "),pm(2),ja$1(" ",t.description()," "));},encapsulation:2})};var qn="Approach",Jn="How I turn unclear work into a system",Qn="Whether the task is replacing a spreadsheet workflow or tracking vehicles in video, I start by reducing ambiguity and making the data flow visible.";var ei=["Problem framing: understand the existing manual process or research challenge before choosing tools.","System design: define the data flow, core states, and user journey so implementation stays focused.","Implementation: build iteratively, validate behavior, and keep the interface clear for real users."];function aa(i,n){if(i&1&&(xo$1(0,"div",9)(1,"p",13),Yv(2),Pa$1(),xo$1(3,"p",14),Yv(4),Pa$1()()),i&2){let e=n.$implicit,t=n.$index;pm(2),ja$1("Step 0",t+1),pm(2),hf(e);}}var Ht=class i{eyebrow=qn;title=Jn;description=Qn;steps=ei;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-case-study"]],decls:17,vars:3,consts:[[1,"relative","overflow-hidden","bg-[#070b1a]","px-4","py-24","text-white","sm:px-6","lg:px-10","xl:px-12"],[1,"pointer-events-none","absolute","inset-0"],[1,"absolute","right-[-8rem]","top-20","h-[28rem]","w-[28rem]","rounded-full","bg-cyan-300/10","blur-3xl"],[1,"absolute","bottom-0","left-[-8rem]","h-[28rem]","w-[28rem]","rounded-full","bg-blue-600/10","blur-3xl"],[1,"relative","mx-auto","flex","min-h-[calc(100svh-64px)]","max-w-7xl","items-center"],[1,"grid","w-full","gap-8","lg:grid-cols-[1fr_1fr]","lg:items-center"],[3,"eyebrow","title","description"],[1,"rounded-3xl","border","border-white/10","bg-white/[0.045]","p-6","shadow-2xl","shadow-black/25","backdrop-blur","sm:p-8"],[1,"space-y-5"],[1,"rounded-2xl","border","border-white/10","bg-white/5","p-5"],[1,"mt-6","rounded-2xl","border","border-cyan-300/20","bg-cyan-300/10","p-5"],[1,"text-sm","font-semibold","text-cyan-100"],[1,"mt-2","text-sm","leading-6","text-slate-300"],[1,"text-xs","font-semibold","uppercase","tracking-[0.25em]","text-cyan-300"],[1,"mt-3","text-sm","leading-7","text-slate-300","sm:text-base"]],template:function(e,t){e&1&&(xo$1(0,"section",0)(1,"div",1),Jd(2,"div",2)(3,"div",3),Pa$1(),xo$1(4,"div",4)(5,"div",5)(6,"div"),Jd(7,"app-section-header",6),Pa$1(),xo$1(8,"div",7)(9,"div",8),fv(10,aa,5,2,"div",9,dv),Pa$1(),xo$1(12,"div",10)(13,"p",11),Yv(14,"Result"),Pa$1(),xo$1(15,"p",12),Yv(16," The goal is always the same: a maintainable solution that is easier to understand, operate, and improve than the process it replaces. "),Pa$1()()()()()()),e&2&&(pm(7),Kd("eyebrow",t.eyebrow)("title",t.title)("description",t.description),pm(3),pv(t.steps));},dependencies:[$],encapsulation:2})};var Ut=class i{link=gO.required();isCopied=gO.required();copyRequested=hO();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-contact-link-card"]],hostAttrs:[1,"block"],inputs:{link:[1,"link"],isCopied:[1,"isCopied"]},outputs:{copyRequested:"copyRequested"},decls:9,vars:7,consts:[[1,"group","flex","items-center","gap-3","rounded-2xl","border","border-white/10","bg-white/5","p-5","transition","hover:border-cyan-300/25","hover:bg-cyan-300/10"],[1,"min-w-0","flex-1","no-underline",3,"href"],[1,"text-xs","font-semibold","uppercase","tracking-[0.25em]","text-cyan-300"],[1,"mt-2","break-words","text-base","font-semibold","text-slate-100","transition","group-hover:text-cyan-100"],["type","button",1,"flex","h-11","w-11","shrink-0","items-center","justify-center","rounded-full","border","border-white/15","bg-white/10","text-cyan-100","shadow-lg","shadow-cyan-950/20","transition","hover:border-cyan-300/35","hover:bg-cyan-300/15","hover:text-white","focus-visible:outline-none","focus-visible:ring-2","focus-visible:ring-cyan-300","focus-visible:ring-offset-2","focus-visible:ring-offset-[#070b1a]",3,"click"],["aria-hidden","true",1,"text-[20px]!"]],template:function(e,t){e&1&&(xo$1(0,"div",0)(1,"a",1)(2,"p",2),Yv(3),Pa$1(),xo$1(4,"p",3),Yv(5),Pa$1()(),xo$1(6,"button",4),nf("click",function(){return t.copyRequested.emit(t.link())}),xo$1(7,"mat-icon",5),Yv(8),Pa$1()()()),e&2&&(pm(),Kd("href",t.link().href,bg),Yd("target",t.link().external?"_blank":null)("rel",t.link().external?"noreferrer":null),pm(2),hf(t.link().label),pm(2),ja$1(" ",t.link().value," "),pm(),Yd("aria-label","Copy "+t.link().label),pm(2),ja$1(" ",t.isCopied()?"check":"content_copy"," "));},dependencies:[Rs,Is],encapsulation:2})};var ti="Contact",ni="Let us build something useful",ii="I am open to frontend roles, Angular projects, and practical product work where clean interfaces and reliable implementation matter.";var oi=[{label:"Email",value:"munir.fati.haji@gmail.com",href:"mailto:munir.fati.haji@gmail.com",external:false},{label:"GitHub",value:"github.com/munir-fati-haji",href:"https://github.com/munir-fati-haji",external:true},{label:"LinkedIn",value:"linkedin.com/in/munir-fati-haji",href:"https://www.linkedin.com/in/munir-fati-haji",external:true}];var sa=(i,n)=>n.label;function la(i,n){if(i&1){let e=vv();xo$1(0,"app-contact-link-card",15),nf("copyRequested",function(o){al(e);let r=Dv();return cl(r.copyContactValue(o))}),Pa$1();}if(i&2){let e=n.$implicit,t=Dv();Kd("link",e)("isCopied",t.copiedLabel()===e.label);}}var Wt=class i{eyebrow=ti;title=ni;description=ii;contactLinks=oi;copiedLabel=ps(null);async copyContactValue(n){navigator.clipboard?await navigator.clipboard.writeText(n.value):this.copyWithFallback(n.value),this.copiedLabel.set(n.label),window.setTimeout(()=>{this.copiedLabel()===n.label&&this.copiedLabel.set(null);},1600);}copyWithFallback(n){let e=document.createElement("textarea");e.value=n,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e);}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-contact"]],decls:21,vars:3,consts:[[1,"relative","overflow-hidden","bg-[#070b1a]","px-4","py-24","text-white","sm:px-6","lg:px-10","xl:px-12"],[1,"pointer-events-none","absolute","inset-0"],[1,"absolute","right-[-12rem]","top-16","h-[32rem]","w-[32rem]","rounded-full","bg-cyan-300/10","blur-3xl"],[1,"absolute","bottom-0","left-[-8rem]","h-[26rem]","w-[26rem]","rounded-full","bg-blue-600/10","blur-3xl"],[1,"relative","mx-auto","grid","min-h-[calc(100svh-64px)]","max-w-7xl","items-center","gap-10","lg:grid-cols-[0.95fr_1.05fr]"],[3,"eyebrow","title","description"],[1,"mt-8","flex","flex-wrap","gap-3"],["href","mailto:munir.fati.haji@gmail.com",1,"inline-flex","items-center","justify-center","rounded-full","bg-cyan-300","px-6","py-3","text-sm","font-bold","text-slate-950","shadow-lg","shadow-cyan-300/20","transition","hover:bg-cyan-200"],["href","#projects",1,"inline-flex","items-center","justify-center","rounded-full","border","border-white/10","bg-white/5","px-6","py-3","text-sm","font-semibold","text-white","backdrop-blur","transition","hover:border-cyan-300/30","hover:bg-cyan-300/10","hover:text-cyan-100"],[1,"rounded-3xl","border","border-white/10","bg-white/[0.045]","p-6","shadow-2xl","shadow-black/25","backdrop-blur","sm:p-8"],[1,"grid","gap-4"],[3,"link","isCopied"],[1,"mt-6","rounded-2xl","border","border-cyan-300/20","bg-cyan-300/10","p-5"],[1,"text-sm","font-semibold","text-cyan-100"],[1,"mt-2","text-sm","leading-6","text-slate-300"],[3,"copyRequested","link","isCopied"]],template:function(e,t){e&1&&(xo$1(0,"section",0)(1,"div",1),Jd(2,"div",2)(3,"div",3),Pa$1(),xo$1(4,"div",4)(5,"div"),Jd(6,"app-section-header",5),xo$1(7,"div",6)(8,"a",7),Yv(9," Send Email "),Pa$1(),xo$1(10,"a",8),Yv(11," View Projects "),Pa$1()()(),xo$1(12,"div",9)(13,"div",10),fv(14,la,1,2,"app-contact-link-card",11,sa),Pa$1(),xo$1(16,"div",12)(17,"p",13),Yv(18,"Based in Poland, working internationally."),Pa$1(),xo$1(19,"p",14),Yv(20," Best way to reach me is email. Share the problem, expected outcome, and any existing constraints so I can respond with useful next steps. "),Pa$1()()()()()),e&2&&(pm(6),Kd("eyebrow",t.eyebrow)("title",t.title)("description",t.description),pm(8),pv(t.contactLinks));},dependencies:[Ut,$],encapsulation:2})};function ca(i,n){if(i&1&&(xo$1(0,"span",9),Yv(1),Pa$1()),i&2){let e=n.$implicit;pm(),ja$1(" ",e," ");}}var Yt=class i{certificate=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-certificate-card"]],hostAttrs:[1,"block"],inputs:{certificate:[1,"certificate"]},decls:16,vars:5,consts:[[1,"group","relative","overflow-hidden","rounded-[2rem]","border","border-white/10","bg-white/[0.035]","p-5","shadow-xl","shadow-black/20","backdrop-blur","transition","hover:border-cyan-300/30","hover:bg-white/[0.055]","sm:p-6"],[1,"absolute","inset-x-8","top-0","h-px","bg-gradient-to-r","from-transparent","via-cyan-300/40","to-transparent"],[1,"relative","z-10","flex","items-start","gap-4"],[1,"flex","h-12","w-12","shrink-0","items-center","justify-center","rounded-2xl","border","border-cyan-300/20","bg-cyan-300/10","text-cyan-300","shadow-lg","shadow-cyan-950/30","backdrop-blur"],[1,"min-w-0"],[1,"text-lg","font-bold","text-white"],[1,"mt-1","text-sm","leading-6","text-slate-300"],[1,"mt-1","text-sm","text-slate-500"],[1,"mt-4","flex","flex-wrap","gap-2"],[1,"rounded-full","border","border-white/10","bg-white/5","px-3","py-1","text-xs","font-semibold","text-slate-300"]],template:function(e,t){e&1&&(xo$1(0,"article",0),Jd(1,"div",1),xo$1(2,"div",2)(3,"div",3)(4,"mat-icon"),Yv(5),Pa$1()(),xo$1(6,"div",4)(7,"h3",5),Yv(8),Pa$1(),xo$1(9,"p",6),Yv(10),Pa$1(),xo$1(11,"p",7),Yv(12),Pa$1(),xo$1(13,"div",8),fv(14,ca,2,1,"span",9,dv),Pa$1()()()()),e&2&&(pm(5),hf(t.certificate().icon),pm(3),ja$1(" ",t.certificate().school," "),pm(2),ja$1(" ",t.certificate().title," "),pm(2),gf("",t.certificate().location," - ",t.certificate().period),pm(2),pv(t.certificate().skills));},dependencies:[Rs,Is],encapsulation:2})};var da=(i,n)=>n.name;function ma(i,n){if(i&1&&(xo$1(0,"span",14)(1,"mat-icon",17),Yv(2),Pa$1(),Yv(3),Pa$1()),i&2){let e=n.$implicit;pm(2),ja$1(" ",e.icon," "),pm(),ja$1(" ",e.name," ");}}function pa(i,n){if(i&1&&(xo$1(0,"li",16),Jd(1,"span",18),xo$1(2,"span"),Yv(3),Pa$1()()),i&2){let e=n.$implicit;pm(3),hf(e);}}var Gt=class i{education=gO.required();index=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-education-card"]],hostAttrs:[1,"block"],inputs:{education:[1,"education"],index:[1,"index"]},decls:28,vars:8,consts:[[1,"group","relative","overflow-hidden","rounded-[2rem]","border","border-white/10","bg-white/[0.045]","p-5","shadow-2xl","shadow-black/25","backdrop-blur","transition","hover:border-cyan-300/30","hover:bg-white/[0.065]","sm:p-7","lg:p-8"],[1,"absolute","inset-x-8","top-0","h-px","bg-gradient-to-r","from-transparent","via-cyan-300/40","to-transparent"],[1,"pointer-events-none","absolute","bottom-4","right-6","hidden","text-8xl","font-black","leading-none","text-white/[0.04]","sm:block","lg:bottom-6","lg:right-8"],[1,"relative","z-10","flex","flex-col","gap-6","lg:flex-row","lg:items-start","lg:justify-between"],[1,"min-w-0"],[1,"flex","items-start","gap-4"],[1,"flex","h-14","w-14","shrink-0","items-center","justify-center","rounded-2xl","border","border-cyan-300/20","bg-cyan-300/10","text-cyan-300","shadow-lg","shadow-cyan-950/30","backdrop-blur"],[1,"text-2xl","font-bold","tracking-tight","text-white","sm:text-3xl"],[1,"mt-2","text-sm","font-medium","text-slate-400"],[1,"flex","flex-wrap","gap-2","lg:justify-end"],[1,"rounded-full","border","border-cyan-300/20","bg-cyan-300/10","px-3","py-1","text-xs","font-bold","uppercase","tracking-[0.2em]","text-cyan-200"],[1,"rounded-full","border","border-white/10","bg-white/5","px-3","py-1","text-xs","font-semibold","text-slate-300"],[1,"relative","z-10","mt-7","max-w-5xl","text-sm","leading-7","text-slate-300","sm:text-base"],[1,"relative","z-10","mt-6","flex","max-w-5xl","flex-wrap","gap-2"],[1,"inline-flex","items-center","gap-2","rounded-full","border","border-cyan-300/20","bg-cyan-300/10","px-3","py-1.5","text-xs","font-semibold","text-cyan-100","shadow-sm","shadow-cyan-950/30","backdrop-blur","transition","hover:border-cyan-300/40","hover:bg-cyan-300/15","hover:text-white"],[1,"relative","z-10","mt-8","max-w-5xl","space-y-3"],[1,"flex","gap-3","text-sm","leading-6","text-slate-400"],[1,"!h-4","!w-4","!text-base"],[1,"mt-2","h-1.5","w-1.5","shrink-0","rounded-full","bg-cyan-300","shadow-[0_0_12px_rgba(103,232,249,0.8)]"]],template:function(e,t){e&1&&(xo$1(0,"article",0),Jd(1,"div",1),xo$1(2,"span",2),Yv(3),Pa$1(),xo$1(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"mat-icon"),Yv(9),Pa$1()(),xo$1(10,"div",4)(11,"h3",7),Yv(12),Pa$1(),xo$1(13,"p",8),Yv(14),Pa$1()()()(),xo$1(15,"div",9)(16,"span",10),Yv(17),Pa$1(),xo$1(18,"span",11),Yv(19),Pa$1()()(),xo$1(20,"p",12),Yv(21),Pa$1(),xo$1(22,"div",13),fv(23,ma,4,2,"span",14,da),Pa$1(),xo$1(25,"ul",15),fv(26,pa,4,1,"li",16,dv),Pa$1()()),e&2&&(pm(3),ja$1(" 0",t.index()+1," "),pm(6),hf(t.education().icon),pm(3),ja$1(" ",t.education().degree," "),pm(2),gf("",t.education().school," - ",t.education().location),pm(3),ja$1(" ",t.education().grade," "),pm(2),ja$1(" ",t.education().period," "),pm(2),ja$1(" ",t.education().description," "),pm(2),pv(t.education().skills),pm(3),pv(t.education().highlights));},dependencies:[Rs,Is],encapsulation:2})};var ri=[{school:"University of Silesia in Katowice",title:"Certificate, Polish Language Preparatory Course - A2",location:"Katowice, Poland",period:"February 2021 - June 2021",icon:"translate",skills:["Polish A2","Teamwork"]},{school:"Cracow University of Technology",title:"Certificate, Polish Language Preparatory Course - A1",location:"Cracow, Poland",period:"October 2020 - February 2021",icon:"language",skills:["Polish A1","Teamwork"]}];var ai="Education",si="Academic background",li="My education combines robotics, automatic control, mechanical engineering, and software-focused problem solving. This technical foundation helps me approach frontend development with structure, logic, and system-level thinking.";var ci=[{degree:"M.Sc. Robotics and Automatic Control",school:"Warsaw University of Technology",location:"Warsaw, Poland",period:"October 2021 - June 2023",grade:"GPA 4.69 / 5",icon:"precision_manufacturing",description:"Studied robotics, automation, control systems, and intelligent systems, with a strong focus on engineering problem solving and applied software development.",highlights:["Completed a master degree in Robotics and Automatic Control.","Worked on computer vision and vehicle tracking for autonomous systems.","Built a strong foundation in algorithms, control, automation, and engineering analysis.","Developed practical research, experimentation, and technical documentation skills."],skills:[{name:"Robotics",icon:"precision_manufacturing"},{name:"Control Systems",icon:"settings_input_component"},{name:"Computer Vision",icon:"visibility"},{name:"Python",icon:"terminal"},{name:"Research",icon:"science"}]},{degree:"B.Sc. Mechanical Engineering",school:"Debre Berhan University",location:"Debre Berhan, Ethiopia",period:"October 2015 - January 2021",grade:"GPA 3.81 / 4",icon:"engineering",description:"Built a strong engineering foundation through mechanical systems, design, analysis, mathematics, manufacturing, and practical problem solving.",highlights:["Completed a bachelor degree in Mechanical Engineering.","Developed strong analytical, mathematical, and engineering design skills.","Gained a foundation in mechanical systems, manufacturing, and technical problem solving.","Built the engineering mindset that later supported my transition into software development."],skills:[{name:"Engineering",icon:"engineering"},{name:"Mechanical Design",icon:"architecture"},{name:"Problem Solving",icon:"psychology"},{name:"Mathematics",icon:"functions"}]}];var ua=(i,n)=>n.degree,ha=(i,n)=>n.school;function fa(i,n){if(i&1&&Jd(0,"app-education-card",13),i&2){let e=n.$implicit,t=n.$index;Kd("education",e)("index",t);}}function ba(i,n){if(i&1&&Jd(0,"app-certificate-card",20),i&2){let e=n.$implicit;Kd("certificate",e);}}var Xt=class i{eyebrow=ai;title=si;description=li;educationItems=ci;certificates=ri;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-education"]],decls:31,vars:3,consts:[["id","education",1,"relative","overflow-hidden","bg-[#070b1a]","px-4","py-24","text-white","sm:px-6","lg:px-10","xl:px-12"],[1,"pointer-events-none","absolute","inset-0"],[1,"absolute","left-[-10rem]","top-24","h-96","w-96","rounded-full","bg-cyan-300/10","blur-3xl"],[1,"absolute","right-[-12rem]","bottom-10","h-[30rem]","w-[30rem]","rounded-full","bg-blue-600/10","blur-3xl"],[1,"absolute","bottom-0","left-1/2","h-80","w-80","-translate-x-1/2","rounded-full","bg-cyan-300/5","blur-3xl"],[1,"relative","mx-auto","max-w-7xl"],[1,"grid","gap-10","lg:grid-cols-[1fr_0.9fr]","lg:items-end"],[3,"eyebrow","title","description"],[1,"grid","gap-5","sm:grid-cols-2"],[1,"border-l","border-cyan-300/30","pl-4"],[1,"text-3xl","font-black","tracking-tight","text-cyan-300"],[1,"mt-1","text-sm","leading-6","text-slate-400"],[1,"mt-16","space-y-8"],[3,"education","index"],[1,"mt-20"],[1,"mb-8","flex","items-center","gap-4"],[1,"h-px","flex-1","bg-gradient-to-r","from-cyan-300/40","to-transparent"],[1,"shrink-0","text-sm","font-semibold","uppercase","tracking-[0.3em]","text-cyan-300"],[1,"h-px","flex-1","bg-gradient-to-l","from-cyan-300/40","to-transparent"],[1,"grid","gap-5","lg:grid-cols-2"],[3,"certificate"]],template:function(e,t){e&1&&(xo$1(0,"section",0)(1,"div",1),Jd(2,"div",2)(3,"div",3)(4,"div",4),Pa$1(),xo$1(5,"div",5)(6,"div",6),Jd(7,"app-section-header",7),xo$1(8,"div",8)(9,"div",9)(10,"p",10),Yv(11,"2"),Pa$1(),xo$1(12,"p",11),Yv(13,"Academic degrees completed"),Pa$1()(),xo$1(14,"div",9)(15,"p",10),Yv(16,"2"),Pa$1(),xo$1(17,"p",11),Yv(18,"Language preparation certificates"),Pa$1()()()(),xo$1(19,"div",12),fv(20,fa,1,2,"app-education-card",13,ua),Pa$1(),xo$1(22,"div",14)(23,"div",15),Jd(24,"div",16),xo$1(25,"p",17),Yv(26,"Language Certificates"),Pa$1(),Jd(27,"div",18),Pa$1(),xo$1(28,"div",19),fv(29,ba,1,1,"app-certificate-card",20,ha),Pa$1()()()()),e&2&&(pm(7),Kd("eyebrow",t.eyebrow)("title",t.title)("description",t.description),pm(13),pv(t.educationItems),pm(9),pv(t.certificates));},dependencies:[Yt,Gt,$],encapsulation:2})};var ga=(i,n)=>n.name;function _a(i,n){if(i&1&&(xo$1(0,"span",14)(1,"mat-icon",17),Yv(2),Pa$1(),Yv(3),Pa$1()),i&2){let e=n.$implicit;pm(2),ja$1(" ",e.icon," "),pm(),ja$1(" ",e.name," ");}}function va(i,n){if(i&1&&(xo$1(0,"li",16),Jd(1,"span",18),xo$1(2,"span"),Yv(3),Pa$1()()),i&2){let e=n.$implicit;pm(3),hf(e);}}var Kt=class i{experience=gO.required();index=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-experience-card"]],hostAttrs:[1,"block"],inputs:{experience:[1,"experience"],index:[1,"index"]},decls:28,vars:8,consts:[[1,"group","relative","overflow-hidden","rounded-[2rem]","border","border-white/10","bg-white/[0.045]","p-5","shadow-2xl","shadow-black/25","backdrop-blur","transition","hover:border-cyan-300/30","hover:bg-white/[0.065]","sm:p-7","lg:p-8"],[1,"absolute","inset-x-8","top-0","h-px","bg-gradient-to-r","from-transparent","via-cyan-300/40","to-transparent"],[1,"pointer-events-none","absolute","bottom-4","right-6","hidden","text-8xl","font-black","leading-none","text-white/[0.04]","sm:block","lg:bottom-6","lg:right-8"],[1,"relative","z-10","flex","flex-col","gap-6","lg:flex-row","lg:items-start","lg:justify-between"],[1,"min-w-0"],[1,"flex","items-start","gap-4"],[1,"flex","h-14","w-14","shrink-0","items-center","justify-center","rounded-2xl","border","border-cyan-300/20","bg-cyan-300/10","text-cyan-300","shadow-lg","shadow-cyan-950/30","backdrop-blur"],[1,"text-2xl","font-bold","tracking-tight","text-white","sm:text-3xl"],[1,"mt-2","text-sm","font-medium","text-slate-400"],[1,"flex","flex-wrap","gap-2","lg:justify-end"],[1,"rounded-full","border","border-cyan-300/20","bg-cyan-300/10","px-3","py-1","text-xs","font-bold","uppercase","tracking-[0.2em]","text-cyan-200"],[1,"rounded-full","border","border-white/10","bg-white/5","px-3","py-1","text-xs","font-semibold","text-slate-300"],[1,"relative","z-10","mt-7","max-w-5xl","text-sm","leading-7","text-slate-300","sm:text-base"],[1,"relative","z-10","mt-6","flex","max-w-5xl","flex-wrap","gap-2"],[1,"inline-flex","items-center","gap-2","rounded-full","border","border-cyan-300/20","bg-cyan-300/10","px-3","py-1.5","text-xs","font-semibold","text-cyan-100","shadow-sm","shadow-cyan-950/30","backdrop-blur","transition","hover:border-cyan-300/40","hover:bg-cyan-300/15","hover:text-white"],[1,"relative","z-10","mt-8","max-w-5xl","space-y-3"],[1,"flex","gap-3","text-sm","leading-6","text-slate-400"],[1,"!h-4","!w-4","!text-base"],[1,"mt-2","h-1.5","w-1.5","shrink-0","rounded-full","bg-cyan-300","shadow-[0_0_12px_rgba(103,232,249,0.8)]"]],template:function(e,t){e&1&&(xo$1(0,"article",0),Jd(1,"div",1),xo$1(2,"span",2),Yv(3),Pa$1(),xo$1(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"mat-icon"),Yv(9),Pa$1()(),xo$1(10,"div",4)(11,"h3",7),Yv(12),Pa$1(),xo$1(13,"p",8),Yv(14),Pa$1()()()(),xo$1(15,"div",9)(16,"span",10),Yv(17),Pa$1(),xo$1(18,"span",11),Yv(19),Pa$1()()(),xo$1(20,"p",12),Yv(21),Pa$1(),xo$1(22,"div",13),fv(23,_a,4,2,"span",14,ga),Pa$1(),xo$1(25,"ul",15),fv(26,va,4,1,"li",16,dv),Pa$1()()),e&2&&(pm(3),ja$1(" 0",t.index()+1," "),pm(6),hf(t.experience().icon),pm(3),ja$1(" ",t.experience().role," "),pm(2),gf(" ",t.experience().company," - ",t.experience().location," "),pm(3),ja$1(" ",t.experience().type," "),pm(2),ja$1(" ",t.experience().period," "),pm(2),ja$1(" ",t.experience().summary," "),pm(2),pv(t.experience().skills),pm(3),pv(t.experience().highlights));},dependencies:[Rs,Is],encapsulation:2})};var di="Experience",mi="Where I have built real-world software",pi="A focused timeline of my frontend work across enterprise Angular applications, modernization, reusable UI systems, real-time communication, testing, and API-driven products.";var ui=[{company:"Hyland",location:"Wroclaw, Poland",role:"Frontend Angular Software Developer",period:"May 2026 - Current",type:"Current Role",icon:"work",summary:"Developing and maintaining enterprise-grade Angular applications while collaborating with developers, QA, and business stakeholders.",highlights:["Develop and maintain enterprise Angular applications.","Deliver new features and resolve defects with cross-functional teams.","Investigate production and development issues to improve stability and user experience.","Build reusable UI components, services, and frontend utilities.","Refactor existing code to improve maintainability, readability, and scalability."],skills:[{name:"Angular",icon:"code"},{name:"TypeScript",icon:"data_object"},{name:"RxJS",icon:"sync_alt"},{name:"Enterprise UI",icon:"dashboard"}]},{company:"BNY",location:"Wroclaw, Poland",role:"Specialist Frontend Engineer II, React",period:"February 2026 - May 2026",type:"React Platform",icon:"web",summary:"Worked on frontend features using React and Java while contributing to state management, backend data processing, and API-driven application flows.",highlights:["Developed frontend features using React and Java.","Used Redux for state management in existing applications.","Integrated frontend components with Java backend services through REST APIs.","Worked with Apache Kafka consumers as part of backend data processing.","Created and maintained dynamic forms using Forms.io."],skills:[{name:"React",icon:"code"},{name:"Redux",icon:"sync_alt"},{name:"Java",icon:"terminal"},{name:"REST API",icon:"api"},{name:"Kafka",icon:"hub"},{name:"Forms.io",icon:"dynamic_form"}]},{company:"BNY",location:"Wroclaw, Poland",role:"Associate Frontend Engineer II, Angular",period:"March 2025 - February 2026",type:"Angular Modernization",icon:"rocket_launch",summary:"Led Angular modernization work on a large enterprise application, improving architecture, performance, real-time communication, and developer experience.",highlights:["Led a solo migration of a large Angular application from v13 to v21.","Migrated the application to standalone components, Signals, signal-based inputs/outputs, modern control flow, and inject().","Implemented WebSocket communication to replace 10-second polling and improve real-time responsiveness.","Improved application performance with build optimization and lazy-loaded components.","Built and maintained admin dashboards, personal dashboards, and workflow viewer features.","Used AG Grid heavily for enterprise tables, reporting flows, filtering, and data-heavy user interfaces.","Created custom ESLint rules and improved shared frontend utilities.","Built and maintained REST APIs using Java, Spring Boot, and Oracle DB."],skills:[{name:"Angular",icon:"code"},{name:"Signals",icon:"bolt"},{name:"TypeScript",icon:"data_object"},{name:"WebSockets",icon:"hub"},{name:"Lazy Loading",icon:"speed"},{name:"Build Optimization",icon:"construction"},{name:"AG Grid Enterprise",icon:"table_chart"},{name:"ESLint",icon:"fact_check"},{name:"Spring Boot",icon:"eco"},{name:"Oracle DB",icon:"storage"}]},{company:"BNY",location:"Wroclaw, Poland",role:"Graduate Frontend Developer, Angular",period:"August 2023 - March 2025",type:"Enterprise UI",icon:"dashboard",summary:"Built enterprise Angular features for risk assessment workflows, dashboards, reporting, forms, and data-heavy business applications.",highlights:["Developed and maintained Angular frontend solutions for enterprise risk assessment platforms.","Built user-friendly form workflows that were later used for reports and Excel exports.","Created dashboards for administration and personal user views.","Built workflow viewer features to make complex business processes easier to understand.","Used AG Grid Enterprise for reporting, Excel exports, filtering, and large data presentation.","Worked with Angular Material, reactive forms, services, and reusable UI components.","Partnered with UI/UX designers and business stakeholders to improve usability.","Wrote and maintained unit tests using Jasmine and Karma."],skills:[{name:"Angular",icon:"code"},{name:"TypeScript",icon:"data_object"},{name:"Angular Material",icon:"widgets"},{name:"Reactive Forms",icon:"fact_check"},{name:"AG Grid Enterprise",icon:"table_chart"},{name:"Excel Export",icon:"file_download"},{name:"Dashboards",icon:"dashboard"},{name:"Jasmine",icon:"science"},{name:"Karma",icon:"bug_report"}]},{company:"Freelance",location:"Wroclaw, Poland",role:"Angular Developer",period:"January 2023 - August 2023",type:"Foundation",icon:"code",summary:"Built and maintained a request management web application with scalable UI features, API integrations, authentication, and workflow automation.",highlights:["Built scalable and maintainable Angular UI features.","Integrated 50+ REST APIs.","Developed bulk Excel upload and AG Grid CSV export.","Automated workflows to reduce operational errors.","Configured GitHub CI pipelines and Husky pre-commit hooks.","Implemented secure JWT authentication and role-based access control."],skills:[{name:"Angular",icon:"code"},{name:"REST API",icon:"api"},{name:"AG Grid",icon:"table_chart"},{name:"Excel Upload",icon:"upload_file"},{name:"JWT",icon:"vpn_key"},{name:"RBAC",icon:"admin_panel_settings"},{name:"CI/CD",icon:"account_tree"},{name:"Husky",icon:"verified"}]}];var hi=[{value:"3+",label:"Years frontend experience"},{value:"v13 -> v21",label:"Angular migration ownership"},{value:"50+",label:"REST APIs integrated"},{value:"100%",label:"Backend downtime removed"}];var ya=(i,n)=>n.label,xa=(i,n)=>n.company;function wa(i,n){if(i&1&&(xo$1(0,"div",9)(1,"p",12),Yv(2),Pa$1(),xo$1(3,"p",13),Yv(4),Pa$1()()),i&2){let e=n.$implicit;pm(2),ja$1(" ",e.value," "),pm(2),ja$1(" ",e.label," ");}}function Ea(i,n){if(i&1&&Jd(0,"app-experience-card",11),i&2){let e=n.$implicit,t=n.$index;Kd("experience",e)("index",t);}}var $t=class i{eyebrow=di;title=mi;description=pi;metrics=hi;experiences=ui;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-experience"]],decls:14,vars:3,consts:[["id","experience",1,"relative","overflow-hidden","bg-[#070b1a]","px-4","py-24","text-white","sm:px-6","lg:px-10","xl:px-12"],[1,"pointer-events-none","absolute","inset-0"],[1,"absolute","left-[-10rem]","top-20","h-96","w-96","rounded-full","bg-cyan-300/10","blur-3xl"],[1,"absolute","right-[-12rem]","top-1/3","h-[32rem]","w-[32rem]","rounded-full","bg-blue-600/10","blur-3xl"],[1,"absolute","bottom-0","left-1/2","h-80","w-80","-translate-x-1/2","rounded-full","bg-cyan-300/5","blur-3xl"],[1,"relative","mx-auto","max-w-7xl"],[1,"grid","gap-10","lg:grid-cols-[1fr_0.9fr]","lg:items-end"],[3,"eyebrow","title","description"],[1,"grid","gap-5","sm:grid-cols-2"],[1,"border-l","border-cyan-300/30","pl-4"],[1,"mt-16","space-y-8"],[3,"experience","index"],[1,"text-3xl","font-black","tracking-tight","text-cyan-300"],[1,"mt-1","text-sm","leading-6","text-slate-400"]],template:function(e,t){e&1&&(xo$1(0,"section",0)(1,"div",1),Jd(2,"div",2)(3,"div",3)(4,"div",4),Pa$1(),xo$1(5,"div",5)(6,"div",6),Jd(7,"app-section-header",7),xo$1(8,"div",8),fv(9,wa,5,2,"div",9,ya),Pa$1()(),xo$1(11,"div",10),fv(12,Ea,1,2,"app-experience-card",11,xa),Pa$1()()()),e&2&&(pm(7),Kd("eyebrow",t.eyebrow)("title",t.title)("description",t.description),pm(2),pv(t.metrics),pm(3),pv(t.experiences));},dependencies:[Kt,$],encapsulation:2})};var Sa=(i,n)=>n.title,Ca=(i,n)=>n.label;function ka(i,n){if(i&1&&(xo$1(0,"button",3),Jd(1,"mat-icon",4),Pa$1()),i&2){let e=n.$implicit;Kd("matTooltip",e.label),Yd("aria-label",e.label),pm(),Kd("svgIcon",e.icon);}}function Ta(i,n){if(i&1&&(xo$1(0,"div")(1,"p",1),Yv(2),Pa$1(),xo$1(3,"div",2),fv(4,ka,2,3,"button",3,Ca),Pa$1()()),i&2){let e=n.$implicit;pm(2),ja$1(" ",e.title," "),pm(2),pv(e.skills);}}var Zt=class i{groups=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-hero-skills"]],inputs:{groups:[1,"groups"]},decls:3,vars:0,consts:[[1,"mt-8","space-y-4"],[1,"mb-2","text-xs","font-bold","uppercase","tracking-[0.25em]","text-slate-500"],[1,"flex","flex-wrap","gap-2.5"],["type","button","matTooltipPosition","above",1,"group","inline-flex","size-11","items-center","justify-center","rounded-2xl","border","border-white/15","bg-white/10","shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_30px_rgba(0,0,0,0.25)]","backdrop-blur-md","transition","duration-200","hover:-translate-y-1","hover:border-cyan-300/40","hover:bg-white/15","hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_16px_40px_rgba(34,211,238,0.16)]","focus:outline-none","focus:ring-2","focus:ring-cyan-400/50","sm:size-12",3,"matTooltip"],["aria-hidden","true",1,"size-6!","drop-shadow-[0_2px_8px_rgba(255,255,255,0.18)]","transition","duration-200","group-hover:scale-110",3,"svgIcon"]],template:function(e,t){e&1&&(xo$1(0,"div",0),fv(1,Ta,6,1,"div",null,Sa),Pa$1()),e&2&&(pm(),pv(t.groups()));},dependencies:[Rs,Is,Be,Te],encapsulation:2})};var qt=class i{name=gO.required();role=gO.required();description=gO.required();skills=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-hero-intro"]],inputs:{name:[1,"name"],role:[1,"role"],description:[1,"description"],skills:[1,"skills"]},decls:17,vars:4,consts:[[1,"max-w-2xl"],[1,"mb-5","text-sm","font-bold","uppercase","tracking-[0.35em]","text-cyan-400"],[1,"text-5xl","font-extrabold","leading-tight","tracking-tight","sm:text-6xl","lg:text-7xl"],[1,"text-cyan-400"],[1,"mt-5","text-2xl","font-extrabold","text-white","sm:text-3xl"],[1,"mt-8","max-w-xl","text-lg","leading-8","text-slate-100"],[3,"groups"],[1,"mt-10","flex","flex-wrap","gap-4"],["mat-flat-button","","href","#projects",1,"h-12!","rounded-full!","bg-cyan-400!","px-7!","text-sm!","font-bold!","text-slate-950!"],["mat-stroked-button","","href","#contact",1,"app-secondary-action","h-12!","rounded-full!","border-white/20!","px-7!","text-sm!","font-bold!","text-white!"]],template:function(e,t){e&1&&(xo$1(0,"div",0)(1,"p",1),Yv(2,"Portfolio"),Pa$1(),xo$1(3,"h1",2),Yv(4," Hi, I'm "),xo$1(5,"span",3),Yv(6),Pa$1()(),xo$1(7,"h2",4),Yv(8),Pa$1(),xo$1(9,"p",5),Yv(10),Pa$1(),Jd(11,"app-hero-skills",6),xo$1(12,"div",7)(13,"a",8),Yv(14," View Projects "),Pa$1(),xo$1(15,"a",9),Yv(16," Contact Me "),Pa$1()()()),e&2&&(pm(6),ja$1(" ",t.name()," "),pm(2),ja$1(" ",t.role()," "),pm(2),ja$1(" ",t.description()," "),pm(),Kd("groups",t.skills()));},dependencies:[ye,Ne,Rs,Zt],encapsulation:2})};var fi=[{label:"Close",className:"bg-red-400"},{label:"Minimize",className:"bg-yellow-400"},{label:"Maximize",className:"bg-green-400"}];var Da=(i,n)=>n.label;function Ia(i,n){if(i&1&&Jd(0,"span",6),i&2){let e=n.$implicit;jv(e.className),Yd("aria-label",e.label);}}var Jt=class i{code=gO.required();windowActions=fi;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-hero-code-card"]],inputs:{code:[1,"code"]},decls:7,vars:1,consts:[[1,"app-code-card","min-w-0","overflow-hidden","rounded-2xl","border","border-white/10","bg-[#10172a]","shadow-xl"],[1,"app-code-card-header","flex","items-center","gap-3","border-b","border-white/10","bg-white/3","px-4","py-3","sm:px-6"],[1,"h-3","w-3","rounded-full",3,"class"],[1,"p-4","sm:p-6"],[1,"app-code-block","max-w-full","overflow-x-auto","rounded-xl","text-xs","leading-6","sm:text-sm","sm:leading-7"],["language","typescript",3,"highlight"],[1,"h-3","w-3","rounded-full"]],template:function(e,t){e&1&&(xo$1(0,"div",0)(1,"div",1),fv(2,Ia,1,3,"span",2,Da),Pa$1(),xo$1(4,"div",3)(5,"pre",4),Jd(6,"code",5),Pa$1()()()),e&2&&(pm(2),pv(t.windowActions),pm(4),Kd("highlight",t.code()));},dependencies:[Bs],encapsulation:2})};var Oa=(i,n)=>n.label;function Ra(i,n){if(i&1&&(La$1(0,"div",1)(1,"p",2),Yv(2),Fa$1(),La$1(3,"p",3),Yv(4),Fa$1()()),i&2){let e=n.$implicit;pm(2),ja$1(" ",e.value," "),pm(2),ja$1(" ",e.label," ");}}var Qt=class i{stats=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-hero-stats"]],inputs:{stats:[1,"stats"]},decls:3,vars:0,consts:[[1,"mt-6","grid","grid-cols-1","gap-4","sm:grid-cols-3"],[1,"rounded-2xl","bg-white/5","px-5","py-6","text-center"],[1,"text-3xl","font-extrabold","text-cyan-400"],[1,"mt-2","text-xs","font-medium","text-slate-400"]],template:function(e,t){e&1&&(La$1(0,"div",0),fv(1,Ra,5,2,"div",1,Oa),Fa$1()),e&2&&(pm(),pv(t.stats()));},encapsulation:2})};var bi=[{label:"Java",icon:"java"},{label:"Spring Boot",icon:"spring-boot"},{label:"Oracle",icon:"oracle"},{label:"Swagger",icon:"swagger"}];var gi=[{label:"Angular",icon:"angular"},{label:"Angular Material",icon:"angularmaterial"},{label:"TypeScript",icon:"typescript"},{label:"RxJS",icon:"rxjs"},{label:"Tailwind CSS",icon:"tailwind-css"},{label:"Bootstrap",icon:"bootstrap"},{label:"CSS",icon:"css"},{label:"React",icon:"react"},{label:"Redux",icon:"redux"},{label:"MUI",icon:"mui"}];var _i=[{label:"Git",icon:"git"},{label:"GitHub",icon:"github"},{label:"GitLab",icon:"gitlab"},{label:"GitHub Copilot",icon:"github-copilot"},{label:"ESLint",icon:"eslint"},{label:"Visual Studio Code",icon:"visual-studio-code"},{label:"IntelliJ IDEA",icon:"intellij-idea"},{label:"Jira",icon:"jira"},{label:"Confluence",icon:"confluence"}];var vi=[{title:"Frontend",skills:gi},{title:"Tools",skills:_i},{title:"Backend",skills:bi}];var yi=`const developer: Developer = {
  name: 'Munir Fati',
  role: 'Angular Frontend Developer',
  focus: [
    'Clean UI',
    'Reusable components',
    'Scalable architecture',
  ],
  currentlyBuilding: 'Portfolio'
};`;var xi="Munir",wi="Angular Frontend Developer",Ei="I build modern, responsive, and maintainable web applications using Angular, TypeScript, RxJS, and clean UI architecture. I enjoy turning complex enterprise workflows into simple, elegant user experiences.";var Si=[{value:"3+",label:"Years Experience"},{value:"5+",label:"Enterprise Projects Delivered"},{value:"MSc",label:"Robotics Graduate"}];var en=class i{name=xi;role=wi;description=Ei;skills=vi;stats=Si;codeSnippet=yi;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-hero"]],decls:5,vars:6,consts:[[1,"min-w-0",3,"name","role","description","skills"],[1,"min-w-0","w-full","rounded-3xl","border","border-white/10","bg-white/5","p-3","shadow-2xl","backdrop-blur","sm:rounded-4xl","sm:p-5","xl:p-6"],[3,"code"],[3,"stats"]],template:function(e,t){e&1&&(xo$1(0,"app-section-container"),Jd(1,"app-hero-intro",0),xo$1(2,"div",1),Jd(3,"app-hero-code-card",2)(4,"app-hero-stats",3),Pa$1()()),e&2&&(pm(),Kd("name",t.name)("role",t.role)("description",t.description)("skills",t.skills),pm(2),Kd("code",t.codeSnippet),pm(),Kd("stats",t.stats));},dependencies:[qt,Jt,Qt,Ve],encapsulation:2})};var Ci=[{title:"Automotive Request System Modernization",type:"Freelance project",description:"Replaced a VBA and Excel-driven internal workflow with a cleaner request management system for an automotive company.",impact:["Improved how teams submit, review, and track operational requests.","Reduced manual spreadsheet handling and made request status easier to follow.","Focused on a practical migration path from existing Excel habits to a structured application workflow."],stack:["Angular","TypeScript","Workflow design","Legacy VBA replacement"]},{title:"Multiple Object Tracking for Vehicles",type:"Thesis project",description:"Built a video-based vehicle detection and tracking pipeline using YOLOv8 with ByteTrack for multi-object tracking.",impact:["Detected cars frame by frame with YOLOv8, a state-of-the-art model at the time of the research.","Associated detections across frames with ByteTrack to preserve vehicle identities over time.","Explored practical computer vision tradeoffs around accuracy, tracking stability, and video conditions."],stack:["YOLOv8","ByteTrack","Computer vision","Python","MOT"]}];var ki="Selected work",Ti="Projects built around real workflows",Di="A mix of practical software delivery and research-driven computer vision, focused on replacing fragile manual processes with clearer systems.";function Ma(i,n){if(i&1&&(La$1(0,"li",8),Xd(1,"span",11),La$1(2,"span"),Yv(3),Fa$1()()),i&2){let e=n.$implicit;pm(3),hf(e);}}function Aa(i,n){if(i&1&&(La$1(0,"span",10),Yv(1),Fa$1()),i&2){let e=n.$implicit;pm(),ja$1(" ",e," ");}}var tn=class i{project=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-project-card"]],hostAttrs:[1,"block"],inputs:{project:[1,"project"]},decls:18,vars:3,consts:[[1,"group","relative","overflow-hidden","rounded-3xl","border","border-white/10","bg-white/[0.045]","p-6","shadow-2xl","shadow-black/25","backdrop-blur","transition","hover:border-cyan-300/25","hover:bg-white/[0.065]","sm:p-8"],[1,"absolute","inset-x-8","top-0","h-px","bg-gradient-to-r","from-transparent","via-cyan-300/40","to-transparent"],[1,"flex","flex-wrap","items-start","justify-between","gap-4"],[1,"text-xs","font-semibold","uppercase","tracking-[0.28em]","text-cyan-300"],[1,"mt-3","text-2xl","font-bold","text-white"],[1,"rounded-full","border","border-cyan-300/20","bg-cyan-300/10","px-3","py-1","text-xs","font-semibold","text-cyan-200"],[1,"mt-5","text-sm","leading-7","text-slate-300","sm:text-base"],[1,"mt-6","space-y-3"],[1,"flex","gap-3","text-sm","leading-6","text-slate-300"],[1,"mt-7","flex","flex-wrap","gap-2"],[1,"rounded-full","border","border-white/10","bg-white/5","px-3","py-1","text-xs","font-medium","text-slate-300"],[1,"mt-2","h-1.5","w-1.5","shrink-0","rounded-full","bg-cyan-300","shadow-[0_0_16px_rgba(103,232,249,0.65)]"]],template:function(e,t){e&1&&(La$1(0,"article",0),Xd(1,"div",1),La$1(2,"div",2)(3,"div")(4,"p",3),Yv(5),Fa$1(),La$1(6,"h3",4),Yv(7),Fa$1()(),La$1(8,"span",5),Yv(9," Featured "),Fa$1()(),La$1(10,"p",6),Yv(11),Fa$1(),La$1(12,"ul",7),fv(13,Ma,4,1,"li",8,dv),Fa$1(),La$1(15,"div",9),fv(16,Aa,2,1,"span",10,dv),Fa$1()()),e&2&&(pm(5),hf(t.project().type),pm(2),hf(t.project().title),pm(4),hf(t.project().description),pm(2),pv(t.project().impact),pm(3),pv(t.project().stack));},encapsulation:2})};var Pa=(i,n)=>n.title;function Na(i,n){if(i&1&&Jd(0,"app-project-card",8),i&2){let e=n.$implicit;Kd("project",e);}}var nn=class i{eyebrow=ki;title=Ti;description=Di;projects=Ci;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-projects"]],decls:10,vars:3,consts:[[1,"relative","overflow-hidden","bg-[#070b1a]","px-4","py-24","text-white","sm:px-6","lg:px-10","xl:px-12"],[1,"pointer-events-none","absolute","inset-0"],[1,"absolute","left-[-10rem]","top-20","h-[28rem]","w-[28rem]","rounded-full","bg-cyan-300/10","blur-3xl"],[1,"absolute","bottom-0","right-[-8rem]","h-[30rem]","w-[30rem]","rounded-full","bg-blue-600/10","blur-3xl"],[1,"relative","mx-auto","flex","min-h-[calc(100svh-64px)]","max-w-7xl","flex-col","justify-center"],[1,"max-w-3xl"],[3,"eyebrow","title","description"],[1,"mt-12","grid","gap-6","lg:grid-cols-2"],[3,"project"]],template:function(e,t){e&1&&(xo$1(0,"section",0)(1,"div",1),Jd(2,"div",2)(3,"div",3),Pa$1(),xo$1(4,"div",4)(5,"div",5),Jd(6,"app-section-header",6),Pa$1(),xo$1(7,"div",7),fv(8,Na,1,1,"app-project-card",8,Pa),Pa$1()()()),e&2&&(pm(6),Kd("eyebrow",t.eyebrow)("title",t.title)("description",t.description),pm(2),pv(t.projects));},dependencies:[tn,$],encapsulation:2})};var La=(i,n,e,t)=>({"border-cyan-300/30 bg-cyan-300/15 text-cyan-100 shadow-cyan-950/30 hover:border-cyan-300/50 hover:bg-cyan-300/20":i,"border-emerald-300/25 bg-emerald-300/10 text-emerald-100 shadow-emerald-950/30 hover:border-emerald-300/40 hover:bg-emerald-300/15":n,"border-amber-300/30 bg-amber-300/10 text-amber-100 shadow-amber-950/30 hover:border-amber-300/45 hover:bg-amber-300/15":e,"border-slate-300/15 bg-white/5 text-slate-300 shadow-black/20 hover:border-slate-300/25 hover:bg-white/10":t}),Fa=(i,n,e,t)=>({"bg-cyan-300/15 text-cyan-100":i,"bg-emerald-300/15 text-emerald-100":n,"bg-amber-300/15 text-amber-100":e,"bg-white/10 text-slate-300":t}),Ba=(i,n)=>n.name;function Va(i,n){if(i&1&&(xo$1(0,"span",13),Yv(1),Pa$1()),i&2){let e=Dv().$implicit;pm(),ja$1(" ",e.experience," ");}}function ja(i,n){if(i&1&&(xo$1(0,"span",10)(1,"mat-icon",11),Yv(2),Pa$1(),Yv(3),xo$1(4,"span",12),Yv(5),Pa$1(),lv(6,Va,2,1,"span",13),Pa$1()),i&2){let e=n.$implicit;jv(oI(8,La,e.level==="Advanced",e.level==="Strong",e.level==="Practical",e.level==="Basic")),pm(2),ja$1(" ",e.icon," "),pm(),ja$1(" ",e.name," "),pm(),jv(oI(13,Fa,e.level==="Advanced",e.level==="Strong",e.level==="Practical",e.level==="Basic")),pm(),ja$1(" ",e.level," "),pm(),uv(e.experience?6:-1);}}var on=class i{category=gO.required();index=gO.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-skill-category-card"]],hostAttrs:[1,"block"],inputs:{category:[1,"category"],index:[1,"index"]},decls:16,vars:4,consts:[[1,"group","relative","overflow-hidden","rounded-[2rem]","border","border-white/10","bg-white/[0.045]","p-5","shadow-2xl","shadow-black/25","backdrop-blur","transition","hover:border-cyan-300/30","hover:bg-white/[0.065]","sm:p-7"],[1,"absolute","inset-x-8","top-0","h-px","bg-gradient-to-r","from-transparent","via-cyan-300/40","to-transparent"],[1,"pointer-events-none","absolute","bottom-4","right-6","hidden","text-7xl","font-black","leading-none","text-white/[0.04]","sm:block"],[1,"relative","z-10","flex","items-start","gap-4"],[1,"flex","h-14","w-14","shrink-0","items-center","justify-center","rounded-2xl","border","border-cyan-300/20","bg-cyan-300/10","text-cyan-300","shadow-lg","shadow-cyan-950/30","backdrop-blur"],[1,"min-w-0"],[1,"text-2xl","font-bold","tracking-tight","text-white"],[1,"mt-2","text-sm","leading-6","text-slate-400"],[1,"relative","z-10","mt-7","flex","flex-wrap","gap-2"],[1,"inline-flex","items-center","gap-2","rounded-full","border","px-3","py-1.5","text-xs","font-semibold","shadow-sm","backdrop-blur","transition","hover:text-white",3,"class"],[1,"inline-flex","items-center","gap-2","rounded-full","border","px-3","py-1.5","text-xs","font-semibold","shadow-sm","backdrop-blur","transition","hover:text-white"],[1,"!h-4","!w-4","!text-base"],[1,"ml-1","rounded-full","px-2","py-0.5","text-[10px]","font-bold","uppercase","tracking-[0.15em]"],[1,"text-[10px]","font-semibold","text-white/50"]],template:function(e,t){e&1&&(xo$1(0,"article",0),Jd(1,"div",1),xo$1(2,"span",2),Yv(3),Pa$1(),xo$1(4,"div",3)(5,"div",4)(6,"mat-icon"),Yv(7),Pa$1()(),xo$1(8,"div",5)(9,"h3",6),Yv(10),Pa$1(),xo$1(11,"p",7),Yv(12),Pa$1()()(),xo$1(13,"div",8),fv(14,ja,7,18,"span",9,Ba),Pa$1()()),e&2&&(pm(3),ja$1(" 0",t.index()+1," "),pm(4),hf(t.category().icon),pm(3),ja$1(" ",t.category().title," "),pm(2),ja$1(" ",t.category().description," "),pm(2),pv(t.category().skills));},dependencies:[Rs,Is],encapsulation:2})};var Ii=[{title:"Frontend Development",icon:"code",description:"Core technologies I use to build responsive, maintainable, and scalable user interfaces.",skills:[{name:"Angular",icon:"code",level:"Advanced",experience:"3+ years"},{name:"TypeScript",icon:"data_object",level:"Advanced",experience:"3+ years"},{name:"React",icon:"view_quilt",level:"Practical",experience:"3-4 months"},{name:"Redux",icon:"sync_alt",level:"Practical",experience:"3-4 months"},{name:"JavaScript",icon:"javascript",level:"Strong"},{name:"RxJS",icon:"sync_alt",level:"Strong"},{name:"HTML",icon:"html",level:"Strong"},{name:"CSS",icon:"css",level:"Strong"},{name:"Tailwind CSS",icon:"palette",level:"Strong"},{name:"Angular Material",icon:"widgets",level:"Strong"}]},{title:"Enterprise UI",icon:"dashboard",description:"Experience building complex business interfaces, dashboards, workflows, forms, and reporting tools.",skills:[{name:"AG Grid Enterprise",icon:"table_chart",level:"Advanced"},{name:"Dashboards",icon:"space_dashboard",level:"Strong"},{name:"Workflow Viewers",icon:"account_tree",level:"Strong"},{name:"Reactive Forms",icon:"fact_check",level:"Strong"},{name:"Forms.io",icon:"dynamic_form",level:"Practical"},{name:"Excel Export",icon:"file_download",level:"Strong"},{name:"Reusable Components",icon:"extension",level:"Strong"}]},{title:"Architecture & Quality",icon:"architecture",description:"Practices and tools I use to improve maintainability, performance, and long-term code quality.",skills:[{name:"Signals",icon:"bolt",level:"Strong"},{name:"Standalone Components",icon:"view_module",level:"Strong"},{name:"Lazy Loading",icon:"speed",level:"Strong"},{name:"Build Optimization",icon:"construction",level:"Practical"},{name:"ESLint",icon:"rule",level:"Strong"},{name:"Unit Testing",icon:"science",level:"Strong"},{name:"Jasmine / Karma",icon:"bug_report",level:"Strong"}]},{title:"Backend & Integration",icon:"hub",description:"Backend and integration skills used to connect frontend applications with reliable services and data flows.",skills:[{name:"REST API",icon:"api",level:"Strong"},{name:"WebSockets",icon:"hub",level:"Strong"},{name:"Java",icon:"terminal",level:"Practical"},{name:"Spring Boot",icon:"eco",level:"Practical"},{name:"Oracle DB",icon:"storage",level:"Practical"},{name:"PostgreSQL",icon:"database",level:"Basic"},{name:"Kafka",icon:"lan",level:"Practical"}]},{title:"Tools & Workflow",icon:"settings",description:"Development tools and workflows I use for collaboration, delivery, debugging, and documentation.",skills:[{name:"Git",icon:"commit",level:"Strong"},{name:"GitLab CI",icon:"account_tree",level:"Practical"},{name:"GitHub Actions",icon:"automation",level:"Practical"},{name:"Jira",icon:"task_alt",level:"Strong"},{name:"Confluence",icon:"article",level:"Strong"},{name:"Postman",icon:"send",level:"Strong"},{name:"IntelliJ",icon:"terminal",level:"Strong"}]}];var Oi=[{value:"Angular",label:"Primary frontend framework"},{value:"React",label:"Practical experience, 3-4 months"},{value:"AG Grid",label:"Enterprise data-heavy UI"},{value:"Java",label:"Backend contribution"}];var Ri="Skills",Mi="Technical skills",Ai="A focused overview of the technologies I use to build scalable frontend applications, enterprise dashboards, API-driven products, and maintainable user interfaces.";var za=(i,n)=>n.label,Ha=(i,n)=>n.title;function Ua(i,n){if(i&1&&(xo$1(0,"div",9)(1,"p",21),Yv(2),Pa$1(),xo$1(3,"p",22),Yv(4),Pa$1()()),i&2){let e=n.$implicit;pm(2),ja$1(" ",e.value," "),pm(2),ja$1(" ",e.label," ");}}function Wa(i,n){if(i&1&&Jd(0,"app-skill-category-card",20),i&2){let e=n.$implicit,t=n.$index;Kd("category",e)("index",t);}}var rn=class i{eyebrow=Ri;title=Mi;description=Ai;stats=Oi;categories=Ii;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-skills"]],decls:27,vars:3,consts:[["id","skills",1,"relative","overflow-hidden","bg-[#070b1a]","px-4","py-24","text-white","sm:px-6","lg:px-10","xl:px-12"],[1,"pointer-events-none","absolute","inset-0"],[1,"absolute","left-[-10rem]","top-20","h-96","w-96","rounded-full","bg-cyan-300/10","blur-3xl"],[1,"absolute","right-[-12rem]","top-1/3","h-[32rem]","w-[32rem]","rounded-full","bg-blue-600/10","blur-3xl"],[1,"absolute","bottom-0","left-1/2","h-80","w-80","-translate-x-1/2","rounded-full","bg-cyan-300/5","blur-3xl"],[1,"relative","mx-auto","max-w-7xl"],[1,"grid","gap-10","lg:grid-cols-[1fr_0.9fr]","lg:items-end"],[3,"eyebrow","title","description"],[1,"grid","gap-5","sm:grid-cols-2"],[1,"border-l","border-cyan-300/30","pl-4"],[1,"mt-12","flex","flex-wrap","gap-3"],[1,"inline-flex","items-center","gap-2","rounded-full","border","border-cyan-300/30","bg-cyan-300/15","px-3","py-1.5","text-xs","font-semibold","text-cyan-100"],[1,"h-2","w-2","rounded-full","bg-cyan-300"],[1,"inline-flex","items-center","gap-2","rounded-full","border","border-emerald-300/25","bg-emerald-300/10","px-3","py-1.5","text-xs","font-semibold","text-emerald-100"],[1,"h-2","w-2","rounded-full","bg-emerald-300"],[1,"inline-flex","items-center","gap-2","rounded-full","border","border-amber-300/30","bg-amber-300/10","px-3","py-1.5","text-xs","font-semibold","text-amber-100"],[1,"h-2","w-2","rounded-full","bg-amber-300"],[1,"inline-flex","items-center","gap-2","rounded-full","border","border-slate-300/15","bg-white/5","px-3","py-1.5","text-xs","font-semibold","text-slate-300"],[1,"h-2","w-2","rounded-full","bg-slate-300"],[1,"mt-10","grid","gap-8","lg:grid-cols-2"],[3,"category","index"],[1,"text-2xl","font-black","tracking-tight","text-cyan-300","sm:text-3xl"],[1,"mt-1","text-sm","leading-6","text-slate-400"]],template:function(e,t){e&1&&(xo$1(0,"section",0)(1,"div",1),Jd(2,"div",2)(3,"div",3)(4,"div",4),Pa$1(),xo$1(5,"div",5)(6,"div",6),Jd(7,"app-section-header",7),xo$1(8,"div",8),fv(9,Ua,5,2,"div",9,za),Pa$1()(),xo$1(11,"div",10)(12,"span",11),Jd(13,"span",12),Yv(14," Advanced "),Pa$1(),xo$1(15,"span",13),Jd(16,"span",14),Yv(17," Strong "),Pa$1(),xo$1(18,"span",15),Jd(19,"span",16),Yv(20," Practical "),Pa$1(),xo$1(21,"span",17),Jd(22,"span",18),Yv(23," Basic "),Pa$1()(),xo$1(24,"div",19),fv(25,Wa,1,2,"app-skill-category-card",20,Ha),Pa$1()()()),e&2&&(pm(7),Kd("eyebrow",t.eyebrow)("title",t.title)("description",t.description),pm(2),pv(t.stats),pm(16),pv(t.categories));},dependencies:[$,on],encapsulation:2})};var Pi=["Polishing this portfolio into a complete product-like experience.","Improving Angular architecture, component composition, and reusable UI patterns.","Strengthening full-stack project workflows from idea to deployed application."];var Ni="What I am improving next",Li="This section keeps the portfolio current without turning it into a placeholder. It shows the direction of my practice and the kind of engineering habits I am sharpening.";function Ya(i,n){if(i&1&&(xo$1(0,"div",7)(1,"div",8)(2,"span",9),Yv(3),Pa$1(),xo$1(4,"p",10),Yv(5),Pa$1()()()),i&2){let e=n.$implicit,t=n.$index;pm(3),ja$1(" 0",t+1," "),pm(2),hf(e);}}var an=class i{eyebrow="Now";title=Ni;description=Li;focusAreas=Pi;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-working-on"]],decls:10,vars:3,consts:[[1,"relative","overflow-hidden","bg-[#070b1a]","px-4","py-24","text-white","sm:px-6","lg:px-10","xl:px-12"],[1,"pointer-events-none","absolute","inset-0"],[1,"absolute","left-1/2","top-12","h-96","w-96","-translate-x-1/2","rounded-full","bg-cyan-300/10","blur-3xl"],[1,"relative","mx-auto","flex","min-h-[calc(100svh-64px)]","max-w-6xl","items-center"],[1,"grid","w-full","gap-8","lg:grid-cols-[0.9fr_1.1fr]","lg:items-center"],[3,"eyebrow","title","description"],[1,"space-y-4"],[1,"rounded-3xl","border","border-white/10","bg-white/[0.045]","p-5","shadow-xl","shadow-black/20","backdrop-blur"],[1,"flex","gap-4"],[1,"flex","h-9","w-9","shrink-0","items-center","justify-center","rounded-full","border","border-cyan-300/20","bg-cyan-300/10","text-sm","font-bold","text-cyan-200"],[1,"text-sm","leading-7","text-slate-300","sm:text-base"]],template:function(e,t){e&1&&(xo$1(0,"section",0)(1,"div",1),Jd(2,"div",2),Pa$1(),xo$1(3,"div",3)(4,"div",4)(5,"div"),Jd(6,"app-section-header",5),Pa$1(),xo$1(7,"div",6),fv(8,Ya,6,2,"div",7,dv),Pa$1()()()()),e&2&&(pm(6),Kd("eyebrow",t.eyebrow)("title",t.title)("description",t.description),pm(2),pv(t.focusAreas));},dependencies:[$],encapsulation:2})};var sn=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-content"]],decls:9,vars:0,consts:[["id","hero"],["id","about"],["id","experience"],["id","education"],["id","skills"],["id","projects"],["id","working-on"],["id","case-study"],["id","contact"]],template:function(e,t){e&1&&Jd(0,"app-hero",0)(1,"app-about-me",1)(2,"app-experience",2)(3,"app-education",3)(4,"app-skills",4)(5,"app-projects",5)(6,"app-working-on",6)(7,"app-case-study",7)(8,"app-contact",8);},dependencies:[zt,Ht,Wt,Xt,$t,en,nn,rn,an],encapsulation:2})};var dr=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=Uy({type:i,selectors:[["app-portfolio"]],hostAttrs:[1,"flex","h-dvh","flex-col","overflow-hidden","max-sm:h-svh"],decls:3,vars:0,consts:[[1,"shrink-0"],[1,"min-h-0","flex-1","overflow-y-auto"]],template:function(e,t){e&1&&Jd(0,"app-navbar",0)(1,"app-content",1)(2,"app-footer",0);},dependencies:[Nt,Lt,sn],encapsulation:2})};export{dr as Portfolio};