(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{cEGZ:function(t,e,i){"use strict";i.r(e),i.d(e,"IonItem",function(){return l}),i.d(e,"IonItemDivider",function(){return a}),i.d(e,"IonItemGroup",function(){return s}),i.d(e,"IonLabel",function(){return d}),i.d(e,"IonList",function(){return c}),i.d(e,"IonListHeader",function(){return b}),i.d(e,"IonNote",function(){return p}),i.d(e,"IonSkeletonText",function(){return m});var o=i("B5Ai"),n=i("cBjU"),r=i("HHlg"),l=function(){function t(){this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.type="button"}return t.prototype.itemStyle=function(t){t.stopPropagation();for(var e=t.target.tagName,i=t.detail,o=Object.keys(t.detail),n={},r=this.itemStyles.get(e)||{},l=!1,a=0,s=o;a<s.length;a++){var d=s[a],c="item-"+d,b=i[d];b!==r[c]&&(l=!0),n[c]=b}l&&(this.itemStyles.set(e,n),this.el.forceUpdate())},t.prototype.componentDidLoad=function(){Array.from(this.el.querySelectorAll("ion-button")).forEach(function(t){t.size||(t.size="small")});var t=this.el.querySelectorAll("ion-select, ion-datetime");this.multipleInputs=t.length>1},t.prototype.isClickable=function(){return void 0!==this.href||this.button},t.prototype.hostData=function(){var t,e={};return this.itemStyles.forEach(function(t){Object.assign(e,t)}),{"ion-activatable":this.isClickable(),class:Object.assign({},e,Object(r.h)(this.color),(t={},t["item-lines-"+this.lines]=!!this.lines,t["item-disabled"]=this.disabled,t["in-list"]=Object(r.j)("ion-list",this.el),t.item=!0,t["item-multiple-inputs"]=this.multipleInputs,t))}},t.prototype.render=function(){var t=this,e=t.href,i=t.detail,o=t.mode,l=t.win,a=t.state,s=t.detailIcon,d=t.routerDirection,c=t.type,b=this.isClickable(),p=b?void 0===e?"button":"a":"div",m="button"===p?{type:c}:{href:e},f=void 0!==i?i:"ios"===o&&b;return Object(n.b)(p,Object.assign({},m,{class:"item-native",onClick:function(t){return Object(r.i)(l,e,t,d)}}),Object(n.b)("slot",{name:"start"}),Object(n.b)("div",{class:"item-inner"},Object(n.b)("div",{class:"input-wrapper"},Object(n.b)("slot",null)),Object(n.b)("slot",{name:"end"}),f&&Object(n.b)("ion-icon",{icon:s,lazy:!1,class:"item-detail-icon"})),a&&Object(n.b)("div",{class:"item-state"}),b&&"md"===o&&Object(n.b)("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-item"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},multipleInputs:{state:!0},routerDirection:{type:String,attr:"router-direction"},state:{type:String,attr:"state"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionStyle",method:"itemStyle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--min-height:44px;--background:var(--ion-color-base);--background-activated:var(--ion-color-tint);--color:var(--ion-color-contrast);--detail-icon-color:var(--ion-color-shade);--border-radius:0px;--border-width:0px;--border-style:solid;--border-color:var(--ion-color-shade);--inner-border-width:0px;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--box-shadow:none;--inner-box-shadow:none;--highlight-color-focus:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #10dc60);--highlight-color-invalid:var(--ion-color-danger, #f04141);--highlight-height:2px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.activated) .item-native{background:var(--background-activated)}:host(.item-disabled){cursor:default;opacity:.3;pointer-events:none}.item-native{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left,0px));border-radius:var(--border-radius);margin:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-state{left:0;right:0;bottom:0;position:absolute;height:var(--highlight-height)}.item-inner{margin:0;padding:var(--inner-padding-top) calc(var(--ion-safe-area-right,0px) + var(--inner-padding-end)) var(--inner-padding-bottom) var(--inner-padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.input-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-input),:host([vertical-align-top]){-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-label-floating) ::slotted(ion-datetime),:host(.item-label-stacked) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}:host{--transition:background-color 300ms cubic-bezier(.4, 0, .2, 1);--padding-start:16px;--inner-padding-end:8px;--padding-start:16px;font-size:16px;font-weight:400;text-transform:none}:host(:not(.ion-color)){--background:var(--ion-item-background-color, transparent);--background-activated:var(--ion-item-background-color-active, #f1f1f1);--border-color:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--color:var(--ion-item-text-color, var(--ion-text-color, #000));--detail-icon-color:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13)}:host(.item-interactive){--border-width:0 0 1px 0}:host(.item-lines-full){--border-width:0 0 1px 0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0}.item-detail-icon{color:var(--detail-icon-color);font-size:20px}::slotted(:not(.interactive)[slot=end]),::slotted(:not(.interactive)[slot=start]){margin:2px 8px 2px 0}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:3px;margin-bottom:2px}::slotted(ion-icon[slot=start])+.item-inner,::slotted(ion-icon[slot=start])+.item-interactive{margin-left:24px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin:8px 16px 8px 0}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin:8px}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small-md){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;--height:25px;font-size:12px}::slotted(.button-small-md) ion-icon[slot=icon-only]{padding:0}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:80px;height:80px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}:host(.item-label-floating) ::slotted(ion-input),:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-textarea),:host(.item-label-stacked) ::slotted(ion-input),:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-textarea){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(:not(.item-label)) ::slotted(ion-input),:host(:not(.item-label)) ::slotted(ion-textarea){--padding-start:0}:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked){color:var(--ion-color-primary,#3880ff)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){}return t.prototype.componentDidLoad=function(){Array.from(this.el.querySelectorAll("ion-button")).forEach(function(t){t.size||(t.size="small")})},t.prototype.hostData=function(){return{class:Object(r.h)(this.color)}},t.prototype.render=function(){return[Object(n.b)("slot",{name:"start"}),Object(n.b)("div",{class:"item-divider-inner"},Object(n.b)("div",{class:"item-divider-wrapper"},Object(n.b)("slot",null)),Object(n.b)("slot",{name:"end"}))]},Object.defineProperty(t,"is",{get:function(){return"ion-item-divider"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--padding-start:0px;--padding-end:0px;--padding-top:0px;--padding-bottom:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:var(--padding-top) calc(var(--padding-end) + var(--ion-safe-area-right,0px)) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left,0px));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host([sticky]){position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin:0;padding:0 8px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}.item-divider-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}:host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color-step-600, #999999);--padding-start:16px;border-bottom:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);font-size:14px}:host([slot=end]),:host([slot=start]){margin:2px 8px 2px 0}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:3px;margin-bottom:2px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin:8px 16px 8px 0}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin:8px}::slotted(h1){margin:0 0 2px;font-size:24px;font-weight:400}::slotted(h2){margin:2px 0;font-size:16px;font-weight:400}::slotted(h3,h4,h5,h6){margin:2px 0;font-size:14px;font-weight:400;line-height:normal}::slotted(p){margin:0 0 2px;color:var(--ion-text-color-step-400,#666);font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){}return t.prototype.hostData=function(){return{class:Object(r.k)(this.mode,"item-group")}},Object.defineProperty(t,"is",{get:function(){return"ion-item-group"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-group{display:block}.item-group-md ion-item-sliding:last-child ion-item,.item-group-md ion-item:last-child{--border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),d=function(){function t(){}return t.prototype.componentDidLoad=function(){this.positionChanged()},t.prototype.positionChanged=function(){var t,e=this.position;this.ionStyle.emit(((t={label:!0})["label-"+e]=!!e,t))},t.prototype.hostData=function(){var t,e=this.position;return{class:Object.assign({},Object(r.h)(this.color),(t={},t["label-"+e]=!!e,t))}},Object.defineProperty(t,"is",{get:function(){return"ion-label"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-label-md-h{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;margin:11px 8px 11px 0}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}[text-wrap].sc-ion-label-md-h{white-space:normal;font-size:14px;line-height:1.5}.item-interactive-disabled.sc-ion-label-md-h, .item-interactive-disabled   .sc-ion-label-md-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-md-h, .item-input   .sc-ion-label-md-h{-webkit-box-flex:initial;-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.label-fixed.sc-ion-label-md-h{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%;margin-left:0;margin-bottom:0}.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus   .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value   .label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,0,0) scale(.8);transform:translate3d(0,0,0) scale(.8)}.label-stacked.sc-ion-label-md-h{font-size:12px}.label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out,-webkit-transform 150ms ease-in-out}.sc-ion-label-md-s  h1 {margin:0 0 2px;font-size:24px;font-weight:400}.sc-ion-label-md-s  h2 {margin:2px 0;font-size:16px;font-weight:400}.sc-ion-label-md-s  h3 , .sc-ion-label-md-s  h4 , .sc-ion-label-md-s  h5 , .sc-ion-label-md-s  h6 {margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-md-s  p {margin:0 0 2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s > p{color:var(--ion-text-color-step-400,#666)}.sc-ion-label-md-h.ion-color.sc-ion-label-md-s > p, .ion-color .sc-ion-label-md-h.sc-ion-label-md-s > p{color:inherit}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.inset=!1}return t.prototype.closeSlidingItems=function(){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(e){return(t=this.el.querySelector("ion-item-sliding"))&&t.closeOpened?[2,t.closeOpened()]:[2,!1]})})},t.prototype.hostData=function(){var t;return{class:Object.assign({},Object(r.k)(this.mode,"list"),(t={},t["list-lines-"+this.lines]=!!this.lines,t["list-inset"]=this.inset,t["list-"+this.mode+"-lines-"+this.lines]=!!this.lines,t))}},Object.defineProperty(t,"is",{get:function(){return"ion-list"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{closeSlidingItems:{method:!0},el:{elementRef:!0},inset:{type:Boolean,attr:"inset"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-list{margin:0;padding:0;display:block;background:var(--ion-item-background-color,var(--ion-background-color,#fff));contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin:-1px 0 16px}.list-md>.input:last-child::after{left:0}.list-md.list-inset{margin:16px;border-radius:2px}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0;--border-width:0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px,2px;--border-width:0}.list-md.list-inset .item-interactive{--padding-start:0;--padding-end:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item{--border-width:0;--inner-border-width:0}.list-md .item-lines-full,.list-md-lines-full .item{--border-width:0 0 1px 0}.list-md .item-lines-inset,.list-md-lines-inset .item{--inner-border-width:0 0 1px 0}.list-md .item-lines-full{--inner-border-width:0}.list-md .item-lines-inset{--border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),b=function(){function t(){}return t.prototype.hostData=function(){return{class:Object(r.h)(this.color)}},t.prototype.render=function(){return Object(n.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-list-header"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0 0 13px;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden;--background:transparent;--color:var(--ion-text-color-step-400, #666666);padding-left:calc(var(--ion-safe-area-left,0px) + 16px);min-height:45px;font-size:14px}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(){}return t.prototype.hostData=function(){return{class:Object(r.h)(this.color)}},t.prototype.render=function(){return Object(n.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-note"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{color:var(--color);font-family:var(--ion-font-family,inherit);--color:var(--ion-text-color-step-800, #cccccc)}:host(.ion-color){color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),m=function(){function t(){this.width="100%"}return t.prototype.render=function(){return Object(n.b)("span",{style:{width:this.width}},"\xa0")},Object.defineProperty(t,"is",{get:function(){return"ion-skeleton-text"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{width:{type:String,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:inline-block;width:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--background:var(--ion-text-color, #000)}span{display:inline-block;font-size:8px;background:var(--background);opacity:.1}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}()}}]);