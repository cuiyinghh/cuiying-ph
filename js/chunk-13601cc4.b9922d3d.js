(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-13601cc4"],{"06d2":function(t,e,n){"use strict";var a=n("8110");n.n(a).a},1005:function(t,e,n){"use strict";var a=n("a2c5");n.n(a).a},"7abe":function(t,e,n){"use strict";n.r(e);var a=n("5880"),i=(n("2cbd"),n("ab2c")),o=n("862d"),r=n.n(o);var s,c,l,u={name:"map",components:(s={},c=i.a.name,l=i.a,c in s?Object.defineProperty(s,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[c]=l,s),props:{},data:function(){return{showSheet:!1,sheetData:{title:"",content:"",currentMark:null},geo:{lat:0,lng:0},testTxt:""}},mounted:function(){this.loadMapPromise=this.initAMap()},watch:{},methods:{initAMap:function(){var t=this;return new Promise((function(e,n){r.a.load({key:"aaa4c7d4873757deb1f5ceff26e8bbb9",version:"2.0",plugins:["AMap.Geolocation","AMap.Walking","AMap.TileLayer"]}).then((function(n){t.map=new n.Map("container",{viewMode:"3D",zoom:15,center:[125.209476,43.849681]}),t.AMap=n,t.loopLocate(),t.map.on("click",(function(e){t.hideDlg(),t.hideWalking()})),e()})).catch((function(t){n(t)}))}))},loopLocate:function(){var t=this;this.map.plugin("AMap.Geolocation",(function(){var e=new t.AMap.Geolocation({enableHighAccuracy:!0,timeout:15e3,maximumAge:0,convert:!0,showButton:!1,position:"LB",offset:new t.AMap.Pixel(10,20),showMarker:!0,showCircle:!1,panToLocation:!1,zoomToAccuracy:!1,useNative:!0,noGeoLocation:3});t.map.addControl(e),t.testTxt="开始定位!!!",e.getCurrentPosition((function(e,n){t.testTxt="".concat(t.testTxt," ====== ").concat(JSON.stringify(n));var a=n&&n.position||{};!t.geo.lng&&"complete"==e&&a.lng&&(t.moveCenter(a),t.geo=a)})),t.intervalId=setInterval((function(){e.getCurrentPosition((function(e,n){t.testTxt="".concat(t.testTxt," ====== ").concat(JSON.stringify(n)),"complete"===e&&n&&n.position&&(t.geo=n.position)}))}),1e3)}))},moveCenter:function(t){this.map&&this.map.setCenter(t)},markPoints:function(t){var e=this;t&&t.length&&this.loadMapPromise.finally((function(){t.forEach((function(t){var n=new e.AMap.Marker({position:new e.AMap.LngLat(t.lng,t.lat),icon:new e.AMap.Icon({image:t.icon||"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",imageOffset:new e.AMap.Pixel(0,0)}),anchor:"bottom-center",label:{content:t.label||"",direction:"bottom",offset:new e.AMap.Pixel(0,5)}});n.rawData=t,e.map.add(n),n.on("click",(function(a){e.moveCenter([t.lng,t.lat]),t.des_title&&e.showDlg({title:t.des_title,content:t.des_detail||"",currentMark:n}),e.hideWalking()}),n)}))}))},showRoute:function(t){var e=this,n=this.sheetData.currentMark;if(n&&this.geo.lng&&n.rawData.lng){var a={map:this.map,panel:"panel",hideMarkers:!0,isOutline:!0,outlineColor:"#ffeeee",autoFitView:!0};this.walking=new this.AMap.Walking(a),this.walking.search([this.geo.lng,this.geo.lat],[n.rawData.lng,n.rawData.lat],(function(t,n){e.hideDlg()}))}},hideWalking:function(){this.walking&&this.walking.clear()},showDlg:function(t){this.sheetData=t,this.showSheet=!0},hideDlg:function(){this.showSheet=!1,this.sheetData={}}},beforeDestroy:function(){this.intervalId&&clearInterval(this.intervalId)}},p=(n("06d2"),n("2877"));function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"home",components:{Map:Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-wrap"},[n("div",{attrs:{id:"container"}}),n("div",{attrs:{id:"panel"}}),n("div",{staticClass:"testtxt"},[t._v(t._s(t.testTxt))]),n("van-action-sheet",{attrs:{overlay:!1,closeable:!1},model:{value:t.showSheet,callback:function(e){t.showSheet=e},expression:"showSheet"}},[n("div",{staticClass:"dlg-wrap"},[n("div",{staticClass:"title-line"},[n("div",{staticClass:"title"},[t._v(t._s(t.sheetData.title))]),n("div",{staticClass:"route-btn",on:{click:function(e){return t.showRoute()}}},[t._v("路线")])]),n("div",{staticClass:"content"},[t._v(t._s(t.sheetData.content))])])])],1)}),[],!1,null,"1fbafbe1",null).exports},data:function(){return{}},created:function(){var t=this;this.getBuldings().finally((function(){t.markPoints(t.buildingData)}))},computed:f(f({},Object(a.mapState)(["buildingData"])),Object(a.mapGetters)([])),methods:f(f(f({},Object(a.mapMutations)([])),Object(a.mapActions)(["getBuldings"])),{},{markPoints:function(t){this.$refs.map.markPoints(t)}})},g=(n("1005"),Object(p.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-wrap"},[e("div",{staticClass:"map-wrap"},[e("Map",{ref:"map"})],1)])}),[],!1,null,"bd32e084",null));e.default=g.exports},8110:function(t,e,n){},a2c5:function(t,e,n){}}]);