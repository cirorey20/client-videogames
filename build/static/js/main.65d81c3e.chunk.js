(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t),n.d(t,"LOGIN_USER",(function(){return i})),n.d(t,"REGISTER_USER",(function(){return l})),n.d(t,"GET_USER",(function(){return u})),n.d(t,"CLEAR_USERGAME",(function(){return j})),n.d(t,"auth",(function(){return d})),n.d(t,"register",(function(){return b})),n.d(t,"getUser",(function(){return p})),n.d(t,"destroyGame",(function(){return m})),n.d(t,"uploadGame",(function(){return O})),n.d(t,"clearData",(function(){return g}));var a=n(18),r=n(7),c=n.n(r),s=n(17),o=n.n(s),i="LOGIN_USER",l="REGISTER_USER",u="GET_USER",j="CLEAR_USERGAME";function d(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("https://fast-plateau-08546.herokuapp.com/auth/login",e);case 3:if(a=t.sent,r=a.data,console.log(r),"Unauthorized"!==r.message){t.next=10;break}return t.abrupt("return");case 10:return localStorage.setItem("token",r.token),localStorage.setItem("payload",r.payload.role),localStorage.setItem("id",r.payload.sub),t.abrupt("return",{type:i,log:r});case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}()}function b(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("https://fast-plateau-08546.herokuapp.com/users",e);case 3:return a=t.sent,r=a.data,console.log(r),localStorage.setItem("token",r.token),localStorage.setItem("payload",r.payload.role),localStorage.setItem("id",r.payload.sub),t.abrupt("return",{type:l,log:r});case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}function p(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("https://fast-plateau-08546.herokuapp.com/users/"+e);case 3:return a=t.sent,r=a.data,t.abrupt("return",n({type:u,payload:r}));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}function m(e,t){return function(){var n=Object(a.a)(c.a.mark((function n(a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.delete("https://fast-plateau-08546.herokuapp.com/videogames/"+e,{headers:{Authorization:"Bearer ".concat(t)}});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}()}function O(e,t,n){return function(){var r=Object(a.a)(c.a.mark((function a(r){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.patch("https://fast-plateau-08546.herokuapp.com/videogames/"+e,t,{headers:{Authorization:"Bearer ".concat(n)}});case 3:console.log("ACTUALIZADO"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return r.apply(this,arguments)}}()}function g(){return{type:j,payload:[]}}},30:function(e,t){e.exports={validationForm:function(e,t){var n={},a=new RegExp(/^[1-9][\.]\d{2}|\d{2}[\.,]\d{2}/),r=t.find((function(t){return t.name===e.name})),c=(new Date).toISOString().split("T")[0];return r?n.name='El nombre "'.concat(e.name,'" Ya existe en la db'):e.name?e.description?!e.released||e.released>c?n.name="Publication date required":(!a.test(e.rating)||e.rating>10||e.rating<0)&&(n.name="A value is required"):n.name="Description is required":n.name="Name is required",n}}},48:function(e,t,n){},49:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(25),s=n.n(c),o=(n(48),n(49),n(8)),i=n(6),l=n(5),u=n(0),j=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){setTimeout((function(){r(!0)}),3e3)}),[]),Object(u.jsx)(a.Fragment,{children:!1===n?Object(u.jsx)("div",{className:"landPre",children:Object(u.jsx)("div",{className:"preload"})}):Object(u.jsx)("div",{className:"containerLand",children:Object(u.jsxs)("div",{className:"landing",children:[Object(u.jsx)("h1",{children:"VideogamesApp"}),Object(u.jsx)(o.b,{to:"/home",children:Object(u.jsx)("button",{className:"btnLand",children:"Ingresar"})})]})})})},d=n(4),b=n(9),p=function(e){var t=e.current,n=Object(a.useState)("Login"),r=Object(l.a)(n,2),c=r[0],s=r[1],j=Object(i.f)();return Object(a.useEffect)((function(){var e=localStorage.getItem("payload");s(e?"Logout":"Login/Resgister")}),[j]),Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("div",{className:"fixed",children:Object(u.jsxs)("div",{className:"containerParentNav",children:[Object(u.jsx)("div",{className:"logoNav",children:Object(u.jsx)(o.b,{to:"/home",style:{textDecoration:"none"},children:Object(u.jsx)("h3",{children:"VideoGames"})})}),Object(u.jsx)("div",{className:"titleNav",children:Object(u.jsx)("h1",{children:t})}),Object(u.jsxs)("span",{className:"createdNav",children:[Object(u.jsx)("span",{children:Object(u.jsx)(o.b,{to:"",style:{textDecoration:"none"},children:Object(u.jsx)("h3",{onClick:function(e){e.preventDefault(),"Login/Resgister"===c?j.push("/login"):(localStorage.clear(),j.push("/home"))},children:c})})}),"Logout"===c?Object(u.jsx)("span",{children:Object(u.jsx)(o.b,{to:"/dashboard",style:{textDecoration:"none"},children:Object(u.jsx)("h3",{children:"Dashboard"})})}):Object(u.jsx)("span",{})]})]})})})},m=function(e){var t=e.setPaginaActual,n=Object(d.b)(),r=Object(a.useState)(""),c=Object(l.a)(r,2),s=c[0],o=c[1];return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("div",{className:"search",children:Object(u.jsx)("form",{action:"",onSubmit:function(e){return function(e){e.preventDefault(),n(Object(b.searchGame)(s)),console.log("clik button buscar"),o("")}(e)},children:Object(u.jsx)("input",{type:"text",value:s,placeholder:"Search",onChange:function(e){return function(e){e.preventDefault(),t(1),o(e.target.value),console.log(s)}(e)}})})})})},O=function(e){var t=e.allGenres,n=e.handleGenres,r=e.handleSortAlpha,c=e.handleCreated,s=e.handleFilterRating;function o(e){console.log(e.target.value),"asc"===e.target.value||"desc"===e.target.value?r(e):"menor"===e.target.value||"mayor"===e.target.value?s(e):"created"===e.target.value||"existing"===e.target.value?c(e):n(e)}return Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)("div",{className:"selectors",children:[Object(u.jsxs)("select",{defaultValue:"DEFAULT",onChange:function(e){return o(e)},children:[Object(u.jsx)("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:"OrderBy"}),Object(u.jsxs)("optgroup",{label:"Alphabetically",children:[Object(u.jsx)("option",{value:"asc",children:"A-Z"}),Object(u.jsx)("option",{value:"desc",children:"Z-A"})]}),Object(u.jsxs)("optgroup",{label:"Rating",children:[Object(u.jsx)("option",{value:"menor",children:"minor"}),Object(u.jsx)("option",{value:"mayor",children:"major"})]})]}),Object(u.jsxs)("select",{defaultValue:"DEFAULT",onChange:function(e){return o(e)},children:[Object(u.jsx)("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:" FilterBy"}),Object(u.jsxs)("optgroup",{label:"Created/Existing",children:[Object(u.jsx)("option",{value:"created",children:"Created"}),Object(u.jsx)("option",{value:"existing",children:"Existing"})]}),Object(u.jsxs)("optgroup",{label:"Genres",children:[Object(u.jsx)("option",{value:"All",children:"All"}),t?t.map((function(e,t){return Object(u.jsx)("option",{value:e.name,children:e.name},t)})):Object(u.jsx)("span",{})]})]})]})})},g=function(e){for(var t=e.gamesDePagina,n=e.allVideogames,r=e.paged,c=[],s=1;s<=Math.ceil(n/t);s++)c.push(s);return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("ul",{children:c?c.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#"+e,onClick:function(){return r(e)},children:e})},t)})):Object(u.jsx)("span",{})})})},h=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.videogameReducer.videogames})),n=Object(d.c)((function(e){return e.videogameReducer.genres})),r=Object(a.useState)(1),c=Object(l.a)(r,2),s=c[0],i=c[1],j=Object(a.useState)(15),h=Object(l.a)(j,1)[0],f=s*h,x=f-h,v=t.slice(x,f),A=Object(a.useState)(""),E=Object(l.a)(A,2),S=E[0],y=E[1];return Object(a.useEffect)((function(){e(Object(b.getVideogames)()),e(Object(b.getGenres)()),e(Object(b.clearData)())}),[e]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(p,{current:"Videogames - App"}),Object(u.jsxs)("div",{className:"searchFilterParent",children:[Object(u.jsx)(m,{setPaginaActual:i}),Object(u.jsx)("br",{}),Object(u.jsx)(O,{handleGenres:function(t){e(Object(b.filterGenres)(t.target.value)),i(1),y("Ordenado ".concat(t.target.value)),console.log(S)},handleSortAlpha:function(t){e(Object(b.orderName)(t.target.value)),i(1),y("Ordenado ".concat(t.target.value)),console.log(S)},handleCreated:function(t){e(Object(b.filterCreated)(t.target.value)),i(1),y("Ordenado ".concat(t.target.value)),console.log(S)},handleFilterRating:function(t){e(Object(b.orderRating)(t.target.value)),i(1),y("Ordenado ".concat(t.target.value)),console.log(t.target.value)},allGenres:n})]}),Object(u.jsx)("div",{className:"containerParentPaged",children:Object(u.jsx)(g,{gamesDePagina:h,allVideogames:t.length,paged:function(e){i(e)}})}),Object(u.jsx)("div",{className:"containerParentGames",children:t.length<=0?Object(u.jsx)("div",{className:"preload"}):v.map((function(e,t){var n;return Object(u.jsxs)("div",{className:"containerGame",children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)(o.b,{to:"/videogame/"+e.id,style:{textDecoration:"none"},children:Object(u.jsx)("img",{src:e.img,alt:"NOT-FOUND"})}),null===(n=e.genres)||void 0===n?void 0:n.map((function(e,t){return Object(u.jsx)("p",{children:Object(u.jsx)("em",{children:e})},t)})),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.rating?e.rating:null})})]},t)}))})]})},f=n(14),x=n(2),v=n(12),A=function(){var e=Object(d.c)((function(e){return e.userReducer.userAuth})),t=Object(d.b)(),n=Object(i.f)(),r=Object(a.useState)(!1),c=Object(l.a)(r,2),s=c[0],o=c[1],j=Object(u.jsx)("div",{className:"preload"}),b=Object(a.useState)({username:"",password:""}),m=Object(l.a)(b,2),O=m[0],g=m[1];function h(e){g(Object(x.a)(Object(x.a)({},O),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(a.useEffect)((function(){console.log("HOLA")}),[t,e]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(p,{current:"Login"}),s?j:Object(u.jsx)("div",{className:"contForm",children:Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(Object(v.auth)(O)),o(!0),setTimeout((function(){"user"===localStorage.getItem("payload")?n.push("/dashboard"):n.push("/register")}),1e3)}(e)},children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Email"}),Object(u.jsx)("input",{onChange:h,type:"email",name:"username"})]}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Password"}),Object(u.jsx)("input",{onChange:h,type:"password",name:"password"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:"Sing In"}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})]})})]})},E=function(e){var t=Object(d.b)(),n=Object(d.c)((function(e){return e.videogameReducer.game})),r=e.match.params.id,c=n?n.name:"Videogames - App";return Object(a.useEffect)((function(){t(Object(b.detailGame)(r))}),[t,r]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(p,{current:c}),n.length<=0?Object(u.jsx)("div",{className:"preloadDetails"}):Object(u.jsxs)("div",{className:"containerDetails",children:[Object(u.jsxs)("div",{className:"detailsData",children:[Object(u.jsx)("h1",{children:n.name}),Object(u.jsx)("div",{className:"description",children:n.description})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("strong",{children:"Released:"})," ",n.released]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("strong",{children:"Rating:"})," ",n.rating]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("strong",{children:"Platforms:"})," ",n.platforms]})]}),Object(u.jsx)("div",{className:"detailsImg",children:Object(u.jsx)("img",{src:n.img,alt:"NOT_FOUND"})})]})]})},S=n(31),y=function(e){var t=e.selectors,n=e.input,r=e.setInput;return Object(u.jsx)(a.Fragment,{children:t?t.map((function(e,t){return Object(u.jsx)("div",{className:"gen",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",value:e.name,name:"genres",onChange:function(e){return function(e){if(n.genres.includes(e.target.value)){var t=n.genres.filter((function(t){return t!==e.target.value}));console.log("Saco el ",e.target.value),r(Object(x.a)(Object(x.a)({},n),{},{genres:t}))}else r(Object(x.a)(Object(x.a)({},n),{},{genres:[].concat(Object(S.a)(n.genres),[e.target.value])}))}(e)}}),"  "+e.name]})},t)})):["Xbox One","Xbox Series S/X","Xbox 360","PlayStation 3","PlayStation 4","PlayStation 5","PS Vita","Nintendo Switch","PC","Linux","macOS","iOS","Android"].map((function(e,t){return Object(u.jsx)("div",{className:"plat",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",value:e,name:"platforms",onChange:function(e){return function(e){if(n.platforms.includes(e.target.value)){var t=n.platforms.filter((function(t){return t!==e.target.value}));console.log("Saco el ",e.target.value),r(Object(x.a)(Object(x.a)({},n),{},{platforms:t}))}else r(Object(x.a)(Object(x.a)({},n),{},{platforms:[].concat(Object(S.a)(n.platforms),[e.target.value])}))}(e)}}),"  "+e]})},t)}))})},N=function(e){var t=e.errors;return Object(u.jsx)(a.Fragment,{children:t?Object(u.jsx)("p",{className:"errorsValidation",children:t.name}):Object(u.jsx)("span",{})})},G=n(30),R=function(){var e=Object(d.c)((function(e){return e.videogameReducer.videogames})),t=Object(i.f)(),n=Object(d.b)(),r=Object(d.c)((function(e){return e.videogameReducer.genres})),c=localStorage.getItem("token"),s=Object(a.useState)({name:" "}),o=Object(l.a)(s,2),j=o[0],m=o[1],O=(new Date).toISOString().split("T")[0],g=Object(a.useState)({name:"",img:"https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",description:"",released:"",rating:0,platforms:[],genres:[],userId:localStorage.getItem("id")}),h=Object(l.a)(g,2),v=h[0],A=h[1];function E(t){A(Object(x.a)(Object(x.a)({},v),{},Object(f.a)({},t.target.name,t.target.value))),m(Object(G.validationForm)(Object(x.a)(Object(x.a)({},v),{},Object(f.a)({},t.target.name,t.target.value)),e)),console.log(v)}return Object(a.useEffect)((function(){"user"!==localStorage.getItem("payload")&&t.push("/login"),n(Object(b.getVideogames)()),n(Object(b.getGenres)())}),[n,t]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(p,{current:"New Game"}),Object(u.jsx)("div",{className:"formParent",children:Object(u.jsx)("div",{className:"contForm",children:Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log(j.name),j.name?(t.push("/created"),alert("Llene los campos correctamente")):(n(Object(b.newGame)(v,c)),alert("created videogame"),t.push("/home")),console.log("Enviar")}(e)},children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Name"}),Object(u.jsx)("input",{onChange:function(t){var n=t.target.value.charAt(0).toUpperCase()+t.target.value.slice(1);A(Object(x.a)(Object(x.a)({},v),{},Object(f.a)({},t.target.name,n))),m(Object(G.validationForm)(Object(x.a)(Object(x.a)({},v),{},Object(f.a)({},t.target.name,t.target.value)),e))},type:"text",name:"name"})]}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Description"}),Object(u.jsx)("textarea",{rows:"4",cols:"55",onChange:E,type:"text",name:"description"})]}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Released"}),Object(u.jsx)("input",{onChange:E,type:"date",name:"released",min:"1990-01-01",max:O})]}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Rating"}),Object(u.jsx)("input",{onChange:E,type:"text",name:"rating",placeholder:"1.00 - 10.00"})]}),Object(u.jsxs)("div",{className:"containerSelectors",children:[Object(u.jsxs)("div",{className:"selecGenrs",children:[Object(u.jsx)("p",{children:"Genrs"}),Object(u.jsx)(y,{selectors:r,input:v,setInput:A})]}),Object(u.jsxs)("div",{className:"selecPlat",children:[Object(u.jsx)("p",{children:"PLaforms"}),Object(u.jsx)(y,{input:v,setInput:A})]})]}),Object(u.jsx)("div",{className:"errors",children:Object(u.jsx)(N,{errors:j})}),Object(u.jsx)("button",{type:"submit",children:"Created Videogame"}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})]})})})]})},I=function(){var e=Object(d.b)(),t=Object(i.f)(),n=Object(d.c)((function(e){return e.userReducer.user})),r=Object(d.c)((function(e){return e.userReducer.gamesUser}));return Object(a.useEffect)((function(){var n=localStorage.getItem("payload"),a=localStorage.getItem("id");if("user"!==n)return t.push("/login");e(Object(v.getUser)(a)),setTimeout((function(){}),2e3)}),[e,t]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(p,{current:"Dashboard"}),Object(u.jsxs)("h2",{className:"titleDashboard",children:["Hello ",n.name||"user",", games you have are: ",r.length]}),Object(u.jsx)("div",{className:"createdDashboard",children:Object(u.jsx)(o.b,{to:"/created",style:{textDecoration:"none"},children:Object(u.jsx)("h3",{children:"Created"})})}),Object(u.jsx)("div",{className:"contentUserGame",children:null===r||void 0===r?void 0:r.map((function(n,a){return Object(u.jsxs)("div",{className:"containerGameDash",children:[Object(u.jsx)("p",{children:n.name}),Object(u.jsx)("img",{src:n.img,alt:"not-found"}),Object(u.jsxs)("div",{className:"buttonDash",children:[Object(u.jsx)("button",{onClick:function(){return function(t){var n=localStorage.getItem("id"),a=localStorage.getItem("token");e(Object(v.destroyGame)(t,a)),setTimeout((function(){e(Object(v.clearData)())}),500),setTimeout((function(){e(Object(v.getUser)(n))}),1e3)}(n.id)},children:"Deleted"}),Object(u.jsx)("button",{onClick:function(){return e=n.id,localStorage.setItem("idGame",e),void t.push("/edit");var e},children:"Edit"})]})]},a)}))})]})},D=function(){var e=Object(i.f)(),t=Object(d.b)(),n=Object(d.c)((function(e){return e.userReducer.gamesUser})),r=Object(a.useState)("nada"),c=Object(l.a)(r,2),s=c[0],o=c[1],j=Object(a.useState)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAAAXVBMVEUpMTRnjLEiJiNcfJxrkbgkKSgoLzEmLS5EWWxXdpM0QkxAVGUuOT9kiKslKytSbohPaYJggqM+UF8wO0I6SldIX3Q2RE9LY3oyP0crNDk+UWFWdJA7S1lPaH9jhacMRR/OAAADlElEQVR4nO3c7XKqMBSFYSi4CSCB8CGkKvd/mUfAVoNgHUiPdbuef51aprwDAQLiOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6NAbiySAT17jVYIZFNloUVZ1cjg2Wu1WJypxLUqUVn87LVaiLbKtxuj46vti+4wwvKmMUjEs9drkaBSv1HDdVX1isOHPA45fIuGHLV89rot8DH8861oIksa0Q6BP569bgucc3gbsmbjMchhb5HIYeCWo9/kly+SVQ4K9GlU3RXLT7M55dBNlXbXHfu6WrqBMMpBTfx1zq6KhT3Y5CAdeZcLmHa37LqDTY5tap5o74sli2ScY8nmwSVHUI0uw/wqWtCDTY56PPNRl/M5Zs9NuOSQ2aiGG4r5s4/oc2ZXYpMjHefw5ictxN7NDpM93jAH6dM6t+nklPn75aAy7H+fTu0vXHLcHFnmdgfKz2Nu0k4cetjkEKMavmimclBwmW0Ob2cGuOSgnWfmULvJv9nGV58pb3YnLjkcKcxpdTG5bezMZDeXemxyUCSSy5mYX01tHAGZI0ySCGn2YJPDISevPZWctF74OTmM5sfxbSpVlcYn+OQ4BZFadNM/x6aYOsaSbt0bbWh8lFMOx9GlOPkstlMf11O3MBOVX/fgleN0HD2ZPt8o5+5uX4+nzHLMIhnP1EhUeVnAu+TQ4Z1HH7LvJTDNMdpf6HNiFL0S7s5/wDMHRdr4udjfreG2mR56sMxBjrfPrzYQEd6v0e0vh/4AwzGHLivfVeXXBhLE9/eUgddfADPMQU3abQ3ZefvQdDMVMqmfHmGYQ59nkVXe/USifuwBsrR74odhju9L/bS7Exf8PG4wzkEkLvcms1LK+NFHLVnmOJinW573aA2OOUgezEmg5PEHT/nloObeqfi75SA5e9X6hjkoEt699X2vHNtov+p5fV45qBHrvr3AKseqUZRfDpmt/WYLrxyPXachB3IgB3Ighwk5DMhhMHOsPO/weeXIkpUyTjkcvV2pvw/BJoez9kuS/UL45LACOQwMcqhSB5boUr1wjuEQmWQitkRk55n3V8zx9UoCi+8kGJanjq/4SgLK10wV3+HlL/k+k039Ozlqi4Pz/xQcbh6cXS05Hl7xZSYdKoTVl5n0w4dY+p3kv6DIhVX5ou/f/hlEtk46Bmve7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj/wCGXEuzlUGJPAAAAABJRU5ErkJggg=="),b=Object(l.a)(j,2),m=b[0],O=b[1],g=Object(a.useState)({name:"",img:"",description:"",rating:"",userId:localStorage.getItem("id")}),h=Object(l.a)(g,2),A=h[0],E=h[1];function S(e){E(Object(x.a)(Object(x.a)({},A),{},Object(f.a)({},e.target.name,e.target.value))),console.log(A)}return Object(a.useEffect)((function(){var t=localStorage.getItem("payload"),a=localStorage.getItem("idGame");if("user"!==t&&!a)return e.push("/login");var r=localStorage.getItem("idGame"),c=n.filter((function(e){return e.id===r})).map((function(e){return{id:e.id,name:e.name,description:e.description,rating:e.rating,img:e.img}}));o(c[0])}),[t,e,n]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(p,{current:"New Game"}),Object(u.jsx)("div",{className:"formParent",children:Object(u.jsx)("div",{className:"contForm",children:Object(u.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault();var a=localStorage.getItem("token"),r=localStorage.getItem("idGame"),c=localStorage.getItem("id"),o=s?s.name:"cle",i=s?s.description:"cle",l=s?s.img:"cle",u=s?s.rating:"cle",j={name:""===A.name?o:A.name,description:""===A.description?i:A.description,img:""===A.img?l:A.img,rating:""===A.rating?u:A.rating};console.log(j),console.log("Enviar"),t(Object(v.uploadGame)(r,j,a)),setTimeout((function(){t(Object(v.clearData)()),localStorage.removeItem("idGame")}),200),setTimeout((function(){t(Object(v.getUser)(c))}),500),e.push("/dashboard")}(n)},children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Name"}),Object(u.jsx)("input",{onChange:S,type:"text",name:"name",placeholder:s?s.name:"name"})]}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Description"}),Object(u.jsx)("textarea",{rows:"4",cols:"55",onChange:S,type:"text",name:"description",placeholder:s?s.description:"description"})]}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Link-Img"}),Object(u.jsx)("input",{onChange:S,type:"text",name:"img",placeholder:s?s.img:"img"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),O(A.img),console.log("mostrare")},children:"Show"}),Object(u.jsx)("div",{className:"containerGame",children:Object(u.jsx)("img",{src:m,alt:""})})]}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Rating"}),Object(u.jsx)("input",{onChange:S,type:"text",name:"rating",placeholder:s?s.rating:"rating"})]}),Object(u.jsx)("button",{type:"submit",children:"Save"}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})]})})})]})},k=function(){var e=Object(d.b)(),t=Object(i.f)(),n=Object(a.useState)(!1),r=Object(l.a)(n,2),c=r[0],s=r[1],o=Object(u.jsx)("div",{className:"preload"}),j=Object(a.useState)({name:"",email:"",password:""}),b=Object(l.a)(j,2),m=b[0],O=b[1];function g(e){O(Object(x.a)(Object(x.a)({},m),{},Object(f.a)({},e.target.name,e.target.value))),console.log(m)}return Object(a.useEffect)((function(){console.log("HOLA")}),[e]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(p,{current:"Register"}),c?o:Object(u.jsx)("div",{className:"contForm",children:Object(u.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault(),e(Object(v.register)(m)),s(!0),setTimeout((function(){"user"===localStorage.getItem("payload")?t.push("/dashboard"):t.push("/login")}),3e3)}(n)},children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Name"}),Object(u.jsx)("input",{onChange:g,type:"text",name:"name"})]}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Email"}),Object(u.jsx)("input",{onChange:g,type:"email",name:"email"})]}),Object(u.jsxs)("div",{className:"containerInput",children:[Object(u.jsx)("p",{children:"Password"}),Object(u.jsx)("input",{onChange:g,type:"password",name:"password"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:"Register"}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})]})})]})};var L=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",component:j}),Object(u.jsx)(i.a,{path:"/home",component:h}),Object(u.jsx)(i.a,{path:"/login",component:A}),Object(u.jsx)(i.a,{path:"/register",component:k}),Object(u.jsx)(i.a,{path:"/videogame/:id",component:E}),Object(u.jsx)(i.a,{path:"/dashboard",component:I}),Object(u.jsx)(i.a,{path:"/created",component:R}),Object(u.jsx)(i.a,{path:"/edit",component:D})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},T=n(20),w=n(42),U=n(43),M=n(9),_=M.GET_VIDEOGAMES,F=M.SEARCH_GAME,P=M.FILTER_BY_GENRES,V=M.FILTER_BY_CREATED,B=M.ORDER_BY_NAME,H=M.ORDER_BY_RATING,Y=M.DETAILS_GAME,X=M.CREATED_GAME,Q=M.GENRES_GAMES,q=M.CLEAR_DATA,z={videogames:[],getGames:[],all:[],game:[],genres:[]};var K=n(12),W=K.LOGIN_USER,Z=K.GET_USER,J=K.CLEAR_USERGAME,$={userAuth:[],user:[],gamesUser:[],gameDeleted:[]};var ee=Object(T.combineReducers)({videogameReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;if(t.type===_)return Object(x.a)(Object(x.a)({},e),{},{videogames:t.payload,getGames:t.payload,all:t.payload});if(t.type===F)return Object(x.a)(Object(x.a)({},e),{},{videogames:t.payload,getGames:t.payload});if(t.type===P){var n=e.getGames,a="All"===t.payload?e.all:n.filter((function(e){return e.genres.find((function(e){return e===t.payload}))})),r=[{name:"There are no games with this genre",img:"https://png.pngtree.com/png-vector/20210706/ourlarge/pngtree-no-result-search-icon-png-image_3563805.jpg"}],c=0===a.length?r:a;return Object(x.a)(Object(x.a)({},e),{},{videogames:c})}if(t.type===V){var s=e.getGames,o=s.filter((function(e){return e.createdInDb})),i=[{name:"No games created",img:"https://png.pngtree.com/png-vector/20210706/ourlarge/pngtree-no-result-search-icon-png-image_3563805.jpg"}],l="created"===t.payload?0===o.length?i:o:s.filter((function(e){return!e.createdInDb}));return Object(x.a)(Object(x.a)({},e),{},{videogames:l})}if(t.type===B){var u="asc"===t.payload?e.videogames.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):e.videogames.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0}));return Object(x.a)(Object(x.a)({},e),{},{videogames:u})}if(t.type===H){var j="menor"===t.payload?e.videogames.sort((function(e,t){return e.rating>t.rating?1:t.rating>e.rating?-1:0})):e.videogames.sort((function(e,t){return e.rating>t.rating?-1:t.rating>e.rating?1:0}));return Object(x.a)(Object(x.a)({},e),{},{videogames:j})}return t.type===Y?Object(x.a)(Object(x.a)({},e),{},{game:t.payload}):t.type===X?Object(x.a)({},e):t.type===Q?Object(x.a)(Object(x.a)({},e),{},{genres:t.payload}):t.type===q?Object(x.a)(Object(x.a)({},e),{},{game:t.payload}):e},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t.type===W?{userAuth:t.payload}:t.type===Z?Object(x.a)(Object(x.a)({},e),{},{user:t.payload,gamesUser:t.payload.videogames.map((function(e){return{id:e.id,name:e.name,img:e.img,description:e.description,released:e.released,rating:e.rating}}))}):t.type===J?Object(x.a)(Object(x.a)({},e),{},{gamesUser:[]}):e}}),te=ee,ne=Object(T.createStore)(te,Object(w.composeWithDevTools)(Object(T.applyMiddleware)(U.a)));s.a.render(Object(u.jsxs)(d.a,{store:ne,children:[Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(L,{})}),","]}),document.getElementById("root")),C()},9:function(e,t,n){"use strict";n.r(t),n.d(t,"GET_VIDEOGAMES",(function(){return i})),n.d(t,"SEARCH_GAME",(function(){return l})),n.d(t,"FILTER_BY_GENRES",(function(){return u})),n.d(t,"FILTER_BY_CREATED",(function(){return j})),n.d(t,"ORDER_BY_NAME",(function(){return d})),n.d(t,"ORDER_BY_RATING",(function(){return b})),n.d(t,"DETAILS_GAME",(function(){return p})),n.d(t,"CREATED_GAME",(function(){return m})),n.d(t,"GENRES_GAMES",(function(){return O})),n.d(t,"CLEAR_DATA",(function(){return g})),n.d(t,"getVideogames",(function(){return h})),n.d(t,"searchGame",(function(){return f})),n.d(t,"filterGenres",(function(){return x})),n.d(t,"filterCreated",(function(){return v})),n.d(t,"orderName",(function(){return A})),n.d(t,"orderRating",(function(){return E})),n.d(t,"detailGame",(function(){return S})),n.d(t,"newGame",(function(){return y})),n.d(t,"getGenres",(function(){return N})),n.d(t,"clearData",(function(){return G}));var a=n(18),r=n(7),c=n.n(r),s=n(17),o=n.n(s),i="GET_VIDEOGAMES",l="SEARCH_GAME",u="FILTER_BY_GENRES",j="FILTER_BY_CREATED",d="ORDER_BY_NAME",b="ORDER_BY_RATING",p="DETAILS_GAME",m="CREATED_GAME",O="GENRES_GAMES",g="CLEAR_DATA";function h(){return function(e){o.a.get("https://fast-plateau-08546.herokuapp.com/videogames").then((function(t){return e({type:i,payload:t.data})}),(function(e){console.log(e)}))}}function f(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("https://fast-plateau-08546.herokuapp.com/videogames?name=".concat(e),{});case 3:return a=t.sent,t.abrupt("return",n({type:l,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function x(e){return{type:u,payload:e}}function v(e){return{type:j,payload:e}}function A(e){return{type:d,payload:e}}function E(e){return{type:b,payload:e}}function S(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("https://fast-plateau-08546.herokuapp.com/videogame/".concat(e),{});case 3:return a=t.sent,t.abrupt("return",n({type:p,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function y(e,t){return function(){var n=Object(a.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.post("https://fast-plateau-08546.herokuapp.com/videogame",e,{headers:{Authorization:"Bearer ".concat(t)}});case 3:return r=n.sent,console.log(r),n.abrupt("return",{type:m,res:r});case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}function N(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://fast-plateau-08546.herokuapp.com/genres",{});case 2:return n=e.sent,e.abrupt("return",t({type:O,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function G(){return{type:g,payload:[]}}}},[[79,1,2]]]);
//# sourceMappingURL=main.65d81c3e.chunk.js.map