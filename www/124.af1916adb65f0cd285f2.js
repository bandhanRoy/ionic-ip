(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{FmI2:function(t,e,i){"use strict";i.r(e),i.d(e,"IonVirtualScroll",function(){return a});var r=i("B5Ai"),n=i("cBjU"),o=2;function s(t,e){var i=function(t,e){switch(e){case 0:return t.querySelector("template:not([name])");case 1:return t.querySelector("template[name=header]");case 2:return t.querySelector("template[name=footer]")}}(t,e);return i?t.ownerDocument.importNode(i.content,!0).children[0]:null}function l(t,e,i,r,n,s,l,a,h,c){for(var u=[],d=c+h,p=h;p<d;p++){var f,g=t[p];i&&null!=(f=i(g,p,t))&&u.push({i:a++,type:1,value:f,index:p,height:n,reads:o,visible:!1}),u.push({i:a++,type:0,value:g,index:p,height:e?e(g,p):l,reads:e?0:o,visible:!!e}),r&&null!=(f=r(g,p,t))&&u.push({i:a++,type:2,value:f,index:p,height:s,reads:2,visible:!1})}return u}var a=function(){function t(){this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=40,this.approxFooterHeight=40}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.componentDidLoad=function(){return r.a(this,void 0,void 0,function(){var t,e;return r.c(this,function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:(console.error("virtual-scroll must be used inside ion-content"),[2]);case 1:return i.sent(),this.contentEl=t,e=this,[4,t.getScrollElement()];case 2:return e.scrollEl=i.sent(),this.calcCells(),this.updateState(),[2]}})})},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onScroll=function(){this.updateVirtualScroll()},t.prototype.onResize=function(){this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function(t,e,i){var r=e.find(function(e){return 0===e.type&&e.index===t});return r?i[r.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.markDirty=function(t,e){if(void 0===e&&(e=-1),this.items){var i=-1===e?this.items.length-t:e,r=this.lastItemLen,n=0;if(t>0&&t<r)n=function(t,e){return 0===e?0:t.findIndex(function(t){return t.index===e})}(this.cells,t);else if(0===t)n=0;else{if(t!==r)return void console.warn("bad values for markDirty");n=this.cells.length}var o=l(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,n,t,i);console.debug("[virtual] cells recalculated",o.length),this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var r=0;r<e.length;r++)t[r+i]=e[r];return t}(this.cells,o,t),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}},t.prototype.markDirtyTail=function(){if(this.items){var t=this.lastItemLen;this.markDirty(t,this.items.length-t)}},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),this.queue.read(this.readVS.bind(this)),this.queue.write(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,i=0,r=this.el;r&&r!==t;)i+=r.offsetTop,r=r.parentElement;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=function(t,e,i){return{top:Math.max(t-100,0),bottom:t+e+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),r=function(t,e,i){for(var r=e.top,n=e.bottom,o=0;o<t.length&&!(t[o]>r);o++);for(var s=Math.max(o-2-1,0);o<t.length&&!(t[o]>=n);o++);return{offset:s,length:Math.min(o+2,t.length)-s}}(i,e);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,r)&&(this.range=r,function(t,e,i,r){for(var n=0,o=t;n<o.length;n++){var s=o[n];s.change=0,s.d=!0}for(var l=[],a=r.offset+r.length,h=function(r){var n=i[r],o=t.find(function(t){return t.d&&t.cell===n});if(o){var s=e[r];s!==o.top&&(o.top=s,o.change=1),o.d=!1}else l.push(n)},c=r.offset;c<a;c++)h(c);for(var u=t.filter(function(t){return t.d}),d=function(i){var r=u.find(function(t){return t.d&&t.cell.type===i.type}),n=i.index;r?(r.d=!1,r.change=2,r.cell=i,r.top=e[n]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[n]})},p=0,f=l;p<f.length;p++)d(f[p]);t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}(this.virtualDom,i,this.cells,r),this.nodeRender?function(t,e,i,r){for(var n,o=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),l=o.length,a=0;a<i.length;a++){var h=i[a],c=h.cell;if(2===h.change){if(a<l)e(n=o[a],c,a);else{var u=s(t,c.type);(n=e(u,c,a)||u).classList.add("virtual-item"),t.appendChild(n)}n.$ionCell=c}else n=o[a];0!==h.change&&(n.style.transform="translate3d(0,"+h.top+"px,0)");var d=c.visible;h.visible!==d&&(d?n.classList.remove("virtual-loading"):n.classList.add("virtual-loading"),h.visible=d),c.reads>0&&(r(c,n),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},t.prototype.updateCellHeight=function(t,e){var i=this,r=function(){if(e.$ionCell===t){var r=i.win.getComputedStyle(e),n=e.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));i.setCellHeight(t,n)}};e&&e.componentOnReady?e.componentOnReady().then(r):r()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.visible=!0,t.height!==e&&(console.debug("[virtual] cell height changed "+t.height+"px -> "+e+"px"),t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=l(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),console.debug("[virtual] cells recalculated",this.cells.length),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var r=t[i],n=i;n<t.length;n++)t[n]=r,r+=e[n].height;return r}(this.heightIndex,this.cells,t),console.debug("[virtual] height index recalculated",this.heightIndex.length-t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.value,r=e.index;switch(e.type){case 0:return this.renderItem(i,r);case 1:return this.renderHeader(i,r);case 2:return this.renderFooter(i,r)}},t.prototype.hostData=function(){return{style:{height:this.totalHeight+"px"}}},t.prototype.render=function(){var t=this;if(this.renderItem)return Object(n.b)(h,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)}))},Object.defineProperty(t,"is",{get:function(){return"ion-virtual-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},markDirty:{method:!0},markDirtyTail:{method:!0},nodeRender:{type:"Any",attr:"node-render"},positionForItem:{method:!0},queue:{context:"queue"},renderFooter:{type:"Any",attr:"render-footer"},renderHeader:{type:"Any",attr:"render-header"},renderItem:{type:"Any",attr:"render-item"},totalHeight:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0},{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0s;transition-duration:0s;will-change:transform}"},enumerable:!0,configurable:!0}),t}(),h=function(t,e,i){var r=t.dom;return i.map(e,function(t,e){var i=r[e],n=t.vattrs||{},o=n.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign({},t,{vattrs:Object.assign({},n,{class:o,style:Object.assign({},n.style,{transform:"translate3d(0,"+i.top+"px,0)"})})})})}}}]);