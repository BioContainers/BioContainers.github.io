webpackJsonp([0],{0:function(t,e){},"6+jv":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={data:()=>({})},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Menu",{attrs:{mode:"horizontal","active-name":"1"}},[e("a",{staticClass:"logo"},[e("img",{attrs:{src:"static/logo/biocontainers-logo.png",width:"40",height:"40"}}),this._v("BioContainers Registry UI")]),this._v(" "),e("div",{staticClass:"menu"},[e("MenuItem",{attrs:{name:"1"}},[e("Icon",{attrs:{type:"ios-home-outline"}}),this._v("\n            BioContainers\n        ")],1),this._v(" "),e("MenuItem",{attrs:{name:"2"}},[e("Icon",{attrs:{type:"social-github"}}),this._v("\n            GitHub\n        ")],1)],1)])},staticRenderFns:[]};var o={name:"App",components:{defaultNav:i("VU/8")(a,n,!1,function(t){i("6+jv")},"data-v-6bf2ebd2",null).exports},mounted:function(){var t=sessionStorage.redirect;delete sessionStorage.redirect,t&&t!=location.href&&(console.log("location.origin",location.origin),this.$router.replace({path:t.replace(location.origin+this.$router.options.base,"/")}))}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("defaultNav"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")(o,r,!1,function(t){i("qJQj")},null,null).exports,d=i("/ocq"),c={name:"Index",data:()=>({keywords:"",resultsTableCol:[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],resutls:[{name:"John Brown",age:28,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:34,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]}),methods:{rowClick(){this.$router.push({name:"Containerdetails"})}},mounted(){}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index-container"},[t._m(0),t._v(" "),i("div",{staticClass:"search-wrapper"},[i("Input",{staticStyle:{width:"100%"},attrs:{icon:"ios-search",placeholder:"Search"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),t._v(" "),i("div",{staticClass:"results-wrapper"},[i("Table",{attrs:{stripe:"",columns:t.resultsTableCol,data:t.resutls},on:{"on-row-click":t.rowClick}})],1),t._v(" "),i("div",{staticClass:"update-statistics"},[i("Card",{staticClass:"update-statistics-card",staticStyle:{width:"100%"}},[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("Containers Update Statistics")])])],1),t._v(" "),i("div",{staticClass:"issue-statistics"},[i("Card",{staticClass:"issue-statistics-card",staticStyle:{width:"100%"}},[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("GitHub Issues Statistics")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"content-wrapper"},[e("h1",{staticClass:"title"},[this._v("Bio Containers")]),this._v(" "),e("p",{staticClass:"description"},[this._v("XXXXXXXXXXXXXX XXXXXXXXXXXX XXXXXXXXX XXXXXXX")])])])}]};var u=i("VU/8")(c,A,!1,function(t){i("sdoo"),i("qG0f")},"data-v-0c52f02a",null).exports,p={name:"Index",data:()=>({}),methods:{rowClick(t){console.log("row",t),this.$router.push({name:"Containerdetails",params:{id:t.ID}})},test(){this.$http.get("/api/get").then(function(t){console.log(t),console.log(123)},function(t){})}},mounted(){}},m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("div",{staticClass:"container"},[i("h1",[t._v("404")]),t._v(" "),i("p",[i("strong",[t._v("File not found")])]),t._v(" "),i("p",[t._v("\n          The site configured at this address does not\n          contain the requested file.\n        ")]),t._v(" "),i("p",[t._v("\n          If this is your site, make sure that the filename case matches the URL."),i("br"),t._v("\n          For root URLs (like "),i("code",[t._v("http://example.com/")]),t._v(") you must provide an\n          "),i("code",[t._v("index.html")]),t._v(" file.\n        ")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://help.github.com/pages/"}},[t._v("Read the full documentation")]),t._v("\n          for more information about using "),i("strong",[t._v("GitHub Pages")]),t._v(".\n        ")]),t._v(" "),i("div",{attrs:{id:"suggestions"}},[i("a",{attrs:{href:"https://status.github.com"}},[t._v("GitHub Status")]),t._v(" —\n          "),i("a",{attrs:{href:"https://twitter.com/githubstatus"}},[t._v("@githubstatus")])]),t._v(" "),i("a",{staticClass:"logo logo-img-1x",attrs:{href:"/"}},[i("img",{attrs:{width:"32",height:"32",title:"",alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMTZCRDY3REIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMTZCRDY3RUIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNkJENjdCQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxNkJENjdDQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SM9MCAAAA+5JREFUeNrEV11Ik1EY3s4+ddOp29Q5b0opCgKFsoKoi5Kg6CIhuwi6zLJLoYLopq4qsKKgi4i6CYIoU/q5iDAKs6syoS76IRWtyJ+p7cdt7sf1PGOD+e0c3dygAx/67ZzzPM95/877GYdHRg3ZjMXFxepQKNS6sLCwJxqNNuFpiMfjVs4ZjUa/pmmjeD6VlJS8NpvNT4QQ7mxwjSsJiEQim/1+/9lgMHgIr5ohuxG1WCw9Vqv1clFR0dCqBODElV6v90ogEDjGdYbVjXhpaendioqK07CIR7ZAqE49PT09BPL2PMgTByQGsYiZlQD4uMXtdr+JxWINhgINYhGT2MsKgMrm2dnZXgRXhaHAg5jEJodUAHxux4LudHJE9RdEdA+i3Juz7bGHe4mhE9FNrgwBCLirMFV9Okh5eflFh8PR5nK5nDabrR2BNJlKO0T35+Li4n4+/J+/JQCxhmu5h3uJoXNHPbmWZAHMshWB8l5/ipqammaAf0zPDDx1ONV3vurdidqwAQL+pEc8sLcAe1CCvQ3YHxIW8Pl85xSWNC1hADDIv0rIE/o4J0k3kww4xSlwIhcq3EFFOm7KN/hUGOQkt0CFa5WpNJlMvxBEz/IVQAxg/ZRZl9wiHA63yDYieM7DnLP5CiAGsC7I5sgtYKJGWe2A8seFqgFJrJjEPY1Cn3pJ8/9W1e5VWsFDTEmFrBcoDhZJEQkXuhICMyKpjhahqN21hRYATKfUOlDmkygrR4o4C0VOLGJKrOITKB4jijzdXygBKixyC5TDQdnk/Pz8qRw6oOWGlsTKGOQW6OH6FBWsyePxdOXLTgxiyebILZCjz+GLgMIKnXNzc49YMlcRdHXcSwxFVgTInQhC9G33UhNoJLuqq6t345p9y3eUy8OTk5PjAHuI9uo4b07FBaOhsu0A4Unc+T1TU1Nj3KsSSE5yJ65jqF2DDd8QqWYmAZrIM2VlZTdnZmb6AbpdV9V6ec9znf5Q7HjYumdRE0JOp3MjitO4SFa+cZz8Umqe3TCbSLvdfkR/kWDdNQl5InuTcysOcpFT35ZrbBxx4p3JAHlZVVW1D/634VRt+FvLBgK/v5LV9WS+10xMTEwtRw7XvqOL+e2Q8V3AYIOIAXQ26/heWVnZCVfcyKHg2CBgTpmPmjYM8l24GyaUHyaIh7XwfR9ErE8qHoDfn2LTNAVC0HX6MFcBIP8Bi+6F6cdW/DICkANRfx99fEYFQ7Nph5i/uQiA214gno7K+guhaiKg9gC62+M8eR7XsBsYJ4ilam60Fb7r7uAj8wFyuwM1oIOWgfmDy6RXEEQzJMPe23DXrVS7rtyD3Df8z/FPgAEAzWU5Ku59ZAUAAAAASUVORK5CYII="}})]),t._v(" "),i("a",{staticClass:"logo logo-img-2x",attrs:{href:"/"}},[i("img",{attrs:{width:"32",height:"32",title:"",alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQUM1QkUxRUI0MUMxMUUyQUQzREIxQzRENUFFNUM5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUM1QkUxRkI0MUMxMUUyQUQzREIxQzRENUFFNUM5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNkJENjdGQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxNkJENjgwQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hfPRaQAAB6lJREFUeNrsW2mM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"}})])])])}]};var h=i("VU/8")(p,m,!1,function(t){i("qGRp")},"data-v-029cf530",null).exports,g={name:"Containerdetails",data:()=>({keywords:"",resultsTableCol:[{title:"Container",key:"container"},{title:"Description",key:"description"},{title:"Real Name",key:"realname"},{title:"Last Modified",key:"lastmodified"},{title:"Starred/Starts",key:"starredstarts"},{title:"Popularity",key:"popularity"},{title:"Registry Link",key:"registrylink"}],resutls:[{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"}]}),methods:{rowClick(){},test(){this.$http.get("/api/get").then(function(t){console.log(t),console.log(123)},function(t){})}},mounted(){console.log("receive id",this.$route.params.id)}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-container"},[e("div",{staticClass:"results-wrapper"},[e("Table",{attrs:{stripe:"",columns:this.resultsTableCol,data:this.resutls},on:{"on-row-click":this.rowClick}})],1)])},staticRenderFns:[]};var N=i("VU/8")(g,k,!1,function(t){i("SWeJ"),i("YABt")},"data-v-74b21985",null).exports;s.default.use(d.a);var v=new d.a({mode:"history",base:location.hostname.match(/localhost/)?"":"/registry/",routes:[{path:"/",name:"Index",component:u},{path:"/containerdetails",name:"Containerdetails",component:N},{path:"*",name:"NotFound",component:h}]}),w=i("BTaQ"),b=i.n(w),y=(i("nJkO"),i("hyJX")),R=i.n(y),J=i("8+8L");s.default.config.productionTip=!1,s.default.use(b.a,{locale:R.a}),s.default.use(J.a),new s.default({el:"#app",router:v,components:{App:l},template:"<App/>"})},SWeJ:function(t,e){},YABt:function(t,e){},nJkO:function(t,e){},qG0f:function(t,e){},qGRp:function(t,e){},qJQj:function(t,e){},sdoo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.845f871104af6d371c1f.js.map