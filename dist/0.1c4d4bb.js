webpackJsonp([0],{102:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(121),s=a.n(r),i=a(110),n=a(28),o=n(s.a,i.a,!1,null,null,null);e.default=o.exports},104:function(t,e,a){function r(t){for(var e=0;e<t.length;e++){var a=t[e],r=d[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(i(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{for(var n=[],s=0;s<a.parts.length;s++)n.push(i(a.parts[s]));d[a.id]={id:a.id,refs:1,parts:n}}}}function s(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function i(t){var e,a,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(p){var i=v++;r=f||(f=s()),e=n.bind(null,r,i,!1),a=n.bind(null,r,i,!0)}else r=s(),e=o.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}function n(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,s);else{var i=document.createTextNode(s),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(i,n[e]):t.appendChild(i)}}function o(t,e){var a=e.css,r=e.media,s=e.sourceMap;if(r&&t.setAttribute("media",r),s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=a(105),d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,v=0,m=!1,h=function(){},p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,a){m=a;var s=l(t,e);return r(s),function(e){for(var a=[],i=0;i<s.length;i++){var n=s[i],o=d[n.id];o.refs--,a.push(o)}e?(s=l(t,e),r(s)):s=[];for(var i=0;i<a.length;i++){var o=a[i];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete d[o.id]}}}};var _=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},105:function(t,e){t.exports=function(t,e){for(var a=[],r={},s=0;s<e.length;s++){var i=e[s],n=i[0],o=i[1],c=i[2],l=i[3],d={id:t+":"+s,css:o,media:c,sourceMap:l};r[n]?r[n].parts.push(d):a.push(r[n]={id:n,parts:[d]})}return a}},106:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=a(10),i=r(s),n=a(29),o=r(n);for(var c in i.default.axios)t.exports[c]=o.default.axios.bind(void 0,i.default.axios[c]);for(var l in i.default.socket)t.exports[l]=o.default.socket.bind(void 0,i.default.socket[l])},107:function(t,e,a){"use strict";function r(t){a(117)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(119),i=a.n(s),n=a(113),o=a(28),c=r,l=o(i.a,n.a,!1,c,"data-v-402baba6",null);e.default=l.exports},108:function(t,e,a){"use strict";function r(t){a(116)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(120),i=a.n(s),n=a(112),o=a(28),c=r,l=o(i.a,n.a,!1,c,"data-v-176642f9",null);e.default=l.exports},109:function(t,e,a){"use strict";function r(t){a(115)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(122),i=a.n(s),n=a(111),o=a(28),c=r,l=o(i.a,n.a,!1,c,"data-v-08a16120",null);e.default=l.exports},110:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"layout-padding"},[a("com-resource"),t._v(" "),a("com-business"),t._v(" "),a("com-alert")],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},111:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("q-card",{attrs:{color:t.cpuColor}},[a("q-card-title",[t._v(" CPU\n        "),a("big",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.cpuRatio)+" %")])],1),t._v(" "),a("q-card-main",[a("chart",{ref:"cpu",attrs:{options:t.cpuOption,theme:"light","auto-resize":""}})],1),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-main",[t._v("\n        服务名称："+t._s(t.state.serverName)+"\n        "),a("br"),t._v("系统时间："+t._s(t.checkTime)+"\n        "),a("br"),t._v("线程数量："+t._s(t.state.totalThread)+"\n        ")])],1)],1),t._v(" "),a("div",{staticClass:"col-md-3"},[a("q-card",{attrs:{color:t.vRamColor}},[a("q-card-title",[t._v(" JVM 内存\n        "),a("big",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.vRamRatio)+" %")])],1),t._v(" "),a("q-card-main",[a("chart",{ref:"vRam",attrs:{options:t.vRamOption,theme:"light","auto-resize":""}})],1),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-main",[t._v("\n        最大可使用内存："+t._s(t.getStorageSize(t.state.jvmMaxMemory))+"\n        "),a("br"),t._v("已使用内存："+t._s(t.getStorageSize(t.state.jvmUseingMemory))+"\n        "),a("br"),t._v("剩余内存："+t._s(t.getStorageSize(t.state.jvmFreeMemory))+"\n      ")])],1)],1),t._v(" "),a("div",{staticClass:"col-md-3"},[a("q-card",{attrs:{color:t.ramColor}},[a("q-card-title",[t._v(" 物理内存\n        "),a("big",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.ramRatio)+" %")])],1),t._v(" "),a("q-card-main",[a("chart",{ref:"ram",attrs:{options:t.ramOption,theme:"light","auto-resize":""}})],1),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-main",[t._v("\n        总物理内存："+t._s(t.getStorageSize(t.state.totalPhysicalMemorySize))+"\n        "),a("br"),t._v("已使用物理内存："+t._s(t.getStorageSize(t.state.usedPhysicalMemorySize))+"\n        "),a("br"),t._v("剩余物理内存："+t._s(t.getStorageSize(t.state.freePhysicalMemorySize))+"\n      ")])],1)],1),t._v(" "),a("div",{staticClass:"col-md-3"},[a("q-card",{attrs:{color:t.diskColor}},[a("q-card-title",[t._v(" 物理磁盘\n        "),a("big",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.diskRatio)+" %")])],1),t._v(" "),a("q-card-main",[a("chart",{ref:"disk",attrs:{options:t.diskOption,theme:"light","auto-resize":""}})],1),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-main",[t._v("\n        总物理磁盘："+t._s(t.getStorageSize(t.state.totalDiskSize))+"\n        "),a("br"),t._v("已使用物理磁盘："+t._s(t.getStorageSize(t.state.usedDiskSize))+"\n        "),a("br"),t._v("剩余物理磁盘："+t._s(t.getStorageSize(t.state.freeDiskSize))+"\n      ")])],1)],1)])},s=[],i={render:r,staticRenderFns:s};e.a=i},112:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("q-card",{staticClass:"bg-white"},[a("q-card-title",[a("big",[t._v(t._s(this.businessInfo.submit))])],1),t._v(" "),a("q-card-main",[a("q-icon",{attrs:{name:"vertical_align_top",color:"blue-5"}}),t._v(" 今日递交\n      ")],1)],1)],1),t._v(" "),a("div",{staticClass:"col-md-2"},[a("q-card",{staticClass:"bg-white"},[a("q-card-title",[a("big",[t._v(t._s(this.businessInfo.processing))])],1),t._v(" "),a("q-card-main",[a("q-icon",{attrs:{name:"schedule",color:"orange-5"}}),t._v(" 正在处理\n      ")],1)],1)],1),t._v(" "),a("div",{staticClass:"col-md-2"},[a("q-card",{staticClass:"bg-white"},[a("q-card-title",[a("big",[t._v(t._s(this.businessInfo.qualified))])],1),t._v(" "),a("q-card-main",[a("q-icon",{attrs:{name:"check",color:"green-5"}}),t._v(" 今日合格\n      ")],1)],1)],1),t._v(" "),a("div",{staticClass:"col-md-2"},[a("q-card",{staticClass:"bg-white"},[a("q-card-title",[a("big",[t._v(t._s(this.businessInfo.unqualified))])],1),t._v(" "),a("q-card-main",[a("q-icon",{attrs:{name:"clear",color:"red-5"}}),t._v(" 今日不合格\n      ")],1)],1)],1),t._v(" "),a("div",{staticClass:"col-md-2"},[a("q-card",{staticClass:"bg-white"},[a("q-card-title",[a("big",[t._v(t._s(this.businessInfo.totalQualified))])],1),t._v(" "),a("q-card-main",[a("q-icon",{attrs:{name:"check_circle",color:"green-5"}}),t._v(" 合格总量\n      ")],1)],1)],1),t._v(" "),a("div",{staticClass:"col-md-2"},[a("q-card",{staticClass:"bg-white"},[a("q-card-title",[a("big",[t._v(t._s(this.businessInfo.totalUnqualified))])],1),t._v(" "),a("q-card-main",[a("q-icon",{attrs:{name:"cancel",color:"red-5"}}),t._v(" 不合格总量\n      ")],1)],1)],1)])},s=[],i={render:r,staticRenderFns:s};e.a=i},113:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-white"},[a("q-card-title",[t._v("异常告警")]),t._v(" "),a("audio",{ref:"audio",attrs:{src:t.alertSound}}),t._v(" "),a("q-list",{attrs:{link:"",separator:""}},t._l(t.alertList,function(e,r){return a("q-item",{key:r,on:{click:function(a){t.openModal(e)}}},[a("q-item-main",[a("q-icon",{attrs:{name:["info","warning","error"][e.warningLevel],color:["blue","orange","red"][e.warningLevel]}}),t._v("\n        "+t._s(e.serverName+(e.exceptionType?" 【"+e.exceptionType+"】":""))+"\n      ")],1),t._v(" "),a("q-item-side",[a("q-item-tile",[t._v(t._s(new Date(e.checkTime).format("YYYY-MM-DD hh:mm:ss")))])],1)],1)})),t._v(" "),a("q-modal",{ref:"alertModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[t.alertInfo?a("q-modal-layout",[a("q-toolbar",{attrs:{slot:"header"},slot:"header"},[a("q-btn",{attrs:{flat:""},on:{click:t.closeModal}},[a("q-icon",{attrs:{name:"keyboard_arrow_left"}})],1),t._v(" "),a("q-toolbar-title",[t._v("\n          "+t._s(t.alertInfo.serverName+(t.alertInfo.exceptionType?" 【"+t.alertInfo.exceptionType+"】":""))+"\n          "+t._s(new Date(t.alertInfo.checkTime).format("YYYY-MM-DD hh:mm:ss"))+"\n        ")])],1),t._v(" "),a("dl",{staticClass:"layout-padding"},[a("dt",{staticClass:"bg-light"},[t._v("方法")]),t._v(" "),a("dd",[a("pre",[t._v(t._s(t.alertInfo.functionName))])]),t._v(" "),a("dt",{staticClass:"bg-light"},[t._v("参数")]),t._v(" "),a("dd",[a("pre",[t._v(t._s(t.alertInfo.args))])]),t._v(" "),a("dt",{staticClass:"bg-light"},[t._v("日志")]),t._v(" "),a("dd",[a("pre",[t._v(t._s(t.alertInfo.errorLog))])])])],1):t._e()],1)],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},115:function(t,e,a){var r=a(123);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(104)("33eb68e5",r,!0)},116:function(t,e,a){var r=a(124);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(104)("c341f026",r,!0)},117:function(t,e,a){var r=a(125);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(104)("397680b6",r,!0)},119:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(106),s=a(127);e.default={data:function(){return{alertSound:s,alertList:[],alertInfo:null}},mounted:function(){this.socket=this.refreshData()},destroyed:function(){this.socket.close()},methods:{refreshData:function(){var t=this;return(0,r.getAlertList)(null,function(e){t.alertList.push(e.data),e.data.hasWarning&&t.$refs.audio.play()})},playSound:function(){},openModal:function(t){this.alertInfo=t,this.$refs.alertModal.open()},closeModal:function(t){this.$refs.alertModal.close()}}}},120:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(106);e.default={data:function(){return{businessInfo:{}}},mounted:function(){var t=this;this.socket=this.refreshData(),this.interval=window.setInterval(function(){t.socket.send(!0)},3e4)},destroyed:function(){this.socket.close(),window.clearInterval(this.interval)},methods:{refreshData:function(){var t=this;return(0,r.getBusinessList)(!0,function(e){t.businessInfo=e.data})}}}},121:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(109),i=r(s),n=a(107),o=r(n),c=a(108),l=r(c);e.default={components:{comResource:i.default,comAlert:o.default,comBusiness:l.default}}},122:function(t,e,a){"use strict";function r(){var t=Date.now();return new Array(50).fill(null).map(function(e,a){return new Date(t-1e3*(50-a)).format("YYYY/MM/DD hh:mm:ss")})}Object.defineProperty(e,"__esModule",{value:!0});var s=a(30),i=function(t){return t&&t.__esModule?t:{default:t}}(s),n=a(106);e.default={data:function(){var t={tooltip:{formatter:function(t){return"<small>"+t[0].axisValueLabel+"</small><br>"+t[0].value[1]+"%"},trigger:"axis",padding:[5,12],axisPointer:{lineStyle:{color:"rgba(255,255,255,0.3)"}}},grid:{left:0,top:0,right:0,bottom:0},xAxis:{type:"time",show:!1},yAxis:{type:"value",show:!1,max:100},series:{type:"line",showSymbol:!1,itemStyle:{color:"rgba(255,255,255,0.5)"},areaStyle:{}}};return{state:{},pieces:[{min:0,max:50,color:"green-5"},{min:50,max:80,color:"orange-5"},{min:80,max:100,color:"red-5"}],cpuData:r(),ramData:r(),vRamData:r(),diskData:r(),cpuOption:(0,i.default)({},t),ramOption:(0,i.default)({},t),vRamOption:(0,i.default)({},t),diskOption:(0,i.default)({},t)}},computed:{checkTime:function(){return new Date(this.state.checkTime||0).format("YYYY-MM-DD hh:mm:ss")},cpuRatio:function(){return~~this.state.cpuRatio},ramRatio:function(){return~~(this.state.usedPhysicalMemorySize/this.state.totalPhysicalMemorySize*100)},vRamRatio:function(){return~~(this.state.jvmUseingMemory/this.state.jvmMaxMemory*100)},diskRatio:function(){return~~(this.state.usedDiskSize/this.state.totalDiskSize*100)},cpuColor:function(){return this.getPieceColor(this.cpuRatio)},ramColor:function(){return this.getPieceColor(this.ramRatio)},vRamColor:function(){return this.getPieceColor(this.vRamRatio)},diskColor:function(){return this.getPieceColor(this.diskRatio)}},mounted:function(){this.socket=this.refreshData()},destroyed:function(){this.socket.close()},methods:{getPieceColor:function(t){var e=this.pieces,a=!0,r=!1,s=void 0;try{for(var i,n=e[Symbol.iterator]();!(a=(i=n.next()).done);a=!0){var o=i.value;if(t>o.min&&t<=o.max)return o.color}}catch(t){r=!0,s=t}finally{try{!a&&n.return&&n.return()}finally{if(r)throw s}}return"blue-3"},getStorageSize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 1073741824<=t?(t/1073741824).toFixed(1)+" TB":1048576<=t?(t/1048576).toFixed(1)+" GB":1024<=t?(t/1024).toFixed(1)+" MB":t+" KB"},refreshData:function(){var t=this;return(0,n.getResourceState)(null,function(e){t.state=e.data,t.cpuData.shift(),t.cpuData.push({name:t.checkTime,value:[t.checkTime,t.cpuRatio]}),t.$refs.cpu.mergeOptions({series:[{data:t.cpuData}]}),t.ramData.shift(),t.ramData.push({name:t.checkTime,value:[t.checkTime,t.ramRatio]}),t.$refs.ram.mergeOptions({series:[{data:t.ramData}]}),t.vRamData.shift(),t.vRamData.push({name:t.checkTime,value:[t.checkTime,t.vRamRatio]}),t.$refs.vRam.mergeOptions({series:[{data:t.vRamData}]}),t.diskData.shift(),t.diskData.push({name:t.checkTime,value:[t.checkTime,t.diskRatio]}),t.$refs.disk.mergeOptions({series:[{data:t.diskData}]})})}}}},123:function(t,e,a){e=t.exports=a(9)(),e.push([t.i,".echarts[data-v-08a16120]{width:auto;height:100px}.q-card-separator+.q-card-main[data-v-08a16120]{background-color:hsla(0,0%,100%,.1);color:hsla(0,0%,100%,.7)}",""])},124:function(t,e,a){e=t.exports=a(9)(),e.push([t.i,".q-card[data-v-176642f9]{text-align:center}.q-card-main[data-v-176642f9]{font-size:16px;text-indent:-5px}",""])},125:function(t,e,a){e=t.exports=a(9)(),e.push([t.i,"dd[data-v-402baba6],dt[data-v-402baba6]{padding:5px 10px}pre[data-v-402baba6]{font-family:inherit;white-space:pre-wrap;word-wrap:break-word}",""])},127:function(t,e,a){t.exports=a.p+"alert.531144d.mp3"}});