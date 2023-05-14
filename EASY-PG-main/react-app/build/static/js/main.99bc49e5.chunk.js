(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{17:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),c=s(11),a=s.n(c),i=s(2),o=s(3),l=s(5),d=s(4),j=".",m=s(6),u=s(0),b=function(e){return Object(u.jsxs)("div",{className:"filter-bar row justify-content-around",children:[Object(u.jsxs)("div",{className:"col-auto"+("none"!==e.currentFilter.gender?" sort-active":""),"data-toggle":"modal","data-target":"#filter-modal",children:[Object(u.jsx)("img",{src:"./img/filter.png",alt:"filter"}),Object(u.jsx)("span",{children:"Filter"})]}),Object(u.jsxs)("div",{className:"col-auto"+("desc"===e.currentSort?" sort-active":""),onClick:function(){return e.updateSort("desc")},children:[Object(u.jsx)("img",{src:"./img/desc.png",alt:"sort-desc"}),Object(u.jsx)("span",{children:"Highest rent first"})]}),Object(u.jsxs)("div",{className:"col-auto"+("asc"===e.currentSort?" sort-active":""),onClick:function(){return e.updateSort("asc")},children:[Object(u.jsx)("img",{src:"./img/asc.png",alt:"sort-asc"}),Object(u.jsx)("span",{children:"Lowest rent first"})]})]})},h=function(e){return Object(u.jsx)("div",{className:"modal fade",id:"filter-modal",tabIndex:"-1",role:"dialog","aria-labelledby":"filter-heading","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h3",{className:"modal-title",id:"filter-heading",children:"Filters"}),Object(u.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsx)("h5",{children:"Gender"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-outline-dark"+("none"===e.currentFilter.gender?" btn-active":""),onClick:function(){return e.updateFilter("none")},children:"No Filter"}),Object(u.jsxs)("button",{className:"btn btn-outline-dark"+("unisex"===e.currentFilter.gender?" btn-active":""),onClick:function(){return e.updateFilter("unisex")},children:[Object(u.jsx)("i",{className:"fas fa-venus-mars"}),"Unisex"]}),Object(u.jsxs)("button",{className:"btn btn-outline-dark"+("male"===e.currentFilter.gender?" btn-active":""),onClick:function(){return e.updateFilter("male")},children:[Object(u.jsx)("i",{className:"fas fa-mars"}),"Male"]}),Object(u.jsxs)("button",{className:"btn btn-outline-dark"+("female"===e.currentFilter.gender?" btn-active":""),onClick:function(){return e.updateFilter("female")},children:[Object(u.jsx)("i",{className:"fas fa-venus"}),"Female"]})]})]}),Object(u.jsx)("div",{className:"modal-footer",children:Object(u.jsx)("button",{"data-dismiss":"modal",className:"btn btn-success",children:"Okay"})})]})})})},g=function(e){for(var t,s=[],n=0;n<5;n++)t=e.rating>=n+.8?Object(u.jsx)("i",{className:"fas fa-star"},n):e.rating>=n+.3?Object(u.jsx)("i",{className:"fas fa-star-half-alt"},n):Object(u.jsx)("i",{className:"far fa-star"},n),s.push(t);return Object(u.jsx)("div",{className:"star-container",title:e.rating,children:s})},O=function(e){var t;return t=e.is_interested?"fas":"far",Object(u.jsxs)("div",{className:"interested-container",children:[Object(u.jsx)("i",{className:"is-interested-image ".concat(t," fa-heart"),onClick:function(){return e.toggleInterested()}}),Object(u.jsxs)("div",{className:"interested-text",children:[Object(u.jsx)("span",{className:"interested-user-count",children:e.user_count})," interested"]})]})},p=function(e){var t=0;0!==e.property.rating_clean&&t++,0!==e.property.rating_food&&t++,0!==e.property.rating_safety&&t++,0!==e.property.rating_service&&t++,0===t&&t++;var s,n=(parseFloat(e.property.rating_clean)+parseFloat(e.property.rating_food)+parseFloat(e.property.rating_safety))/t;n=(n=Math.round(10*n)/10).toFixed(1),s="male"===e.property.gender?Object(u.jsx)("img",{src:"./img/male.png",alt:"male"}):"female"===e.property.gender?Object(u.jsx)("img",{src:"./img/female.png",alt:"female"}):Object(u.jsx)("img",{src:"./img/unisex.png",alt:"unisex"});var r=(new Intl.NumberFormat).format(e.property.rent);return Object(u.jsxs)("div",{className:"property-card property-id-".concat(e.property.id," row"),children:[Object(u.jsx)("div",{className:"image-container col-md-4",children:Object(u.jsx)("img",{src:"./"+e.property.image,alt:"property"})}),Object(u.jsxs)("div",{className:"content-container col-md-8",children:[Object(u.jsxs)("div",{className:"row no-gutters justify-content-between",children:[Object(u.jsx)(g,{rating:n}),Object(u.jsx)(O,{is_interested:e.property.is_interested,toggleInterested:e.toggleInterested,user_count:e.property.interested_users_count})]}),Object(u.jsxs)("div",{className:"detail-container",children:[Object(u.jsx)("div",{className:"property-name",children:e.property.name}),Object(u.jsx)("div",{className:"property-address",children:e.property.address}),Object(u.jsx)("div",{className:"property-gender",children:s})]}),Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsxs)("div",{className:"rent-container col-6",children:[Object(u.jsxs)("div",{className:"rent",children:["\u20b9 ",r,"/-"]}),Object(u.jsx)("div",{className:"rent-unit",children:"per month"})]}),Object(u.jsx)("div",{className:"button-container col-6",children:Object(u.jsx)("a",{href:"property_detail.php?property_id="+e.property.id,className:"btn btn-primary",children:"View"})})]})]})]})},x=function(){return Object(u.jsx)("div",{className:"no-property-container",children:Object(u.jsx)("p",{children:"No PG to list"})})},f=(n.Component,s(9)),v=function(e){var t=Object(n.useState)(e.mess.menu),s=Object(f.a)(t,2),r=s[0],c=s[1],a=(parseFloat(e.mess.rating_food)+parseFloat(e.mess.rating_service))/2;a=(a=Math.round(10*a)/10).toFixed(1);var i=(new Intl.NumberFormat).format(e.mess.charge),o=(new Intl.NumberFormat).format(e.mess.charge_breakfast),l=(new Intl.NumberFormat).format(e.mess.charge_monthly);return Object(u.jsxs)("div",{className:"mess-card mess-id-".concat(e.mess.id," row"),children:[Object(u.jsx)("div",{className:"image-container col-md-4",children:Object(u.jsx)("img",{src:"./"+e.mess.image,alt:"mess"})}),Object(u.jsxs)("div",{className:"content-container col-md-8",children:[Object(u.jsxs)("div",{className:"row no-gutters justify-content-between",children:[Object(u.jsx)(g,{rating:a}),Object(u.jsx)(O,{is_interested:e.mess.is_interested,toggleInterested:e.toggleInterested,user_count:e.mess.interested_users_count})]}),Object(u.jsxs)("div",{className:"detail-container",children:[Object(u.jsx)("div",{className:"mess-name",children:e.mess.name}),Object(u.jsx)("div",{className:"mess-address",children:e.mess.address})]}),Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"charge-container col-6",children:Object(u.jsxs)("div",{className:"charge",children:["Monthly : \u20b9 ",l,"/-"]})}),Object(u.jsx)("div",{className:"charge-container col-6",children:Object(u.jsxs)("div",{className:"charge",children:["Lunch/Dinner : \u20b9 ",i,"/-"]})}),Object(u.jsx)("div",{className:"charge-container col-6",children:Object(u.jsxs)("div",{className:"charge",children:["Breakfast : \u20b9 ",o,"/-"]})}),Object(u.jsx)("div",{className:"charge-container col-6",children:Object(u.jsxs)("div",{className:"charge",children:["Menu",Object(u.jsx)("input",{class:"form-control form-control-sm",type:"text",value:r,onChange:function(t){c(t.target.value),fetch("".concat(j,"/api/update_menu.php?mess_id=").concat(e.mess.id,"&menu=").concat(r)).then((function(e){return e.json()})).then((function(e){e.success?console.log("Success"):console.log(e.message)})).catch((function(e){console.log("Error fetching and parsing data",e)}))}})]})}),Object(u.jsx)("div",{className:"button-container col-6",children:Object(u.jsx)("a",{href:"#",className:"btn btn-primary",children:"Order"})})]})]})]})},N=function(e){var t=Object(n.useState)(e.mess.menu),s=Object(f.a)(t,2),r=(s[0],s[1],(parseFloat(e.mess.rating_food)+parseFloat(e.mess.rating_service))/2);r=(r=Math.round(10*r)/10).toFixed(1);var c=(new Intl.NumberFormat).format(e.mess.charge),a=(new Intl.NumberFormat).format(e.mess.charge_breakfast),i=(new Intl.NumberFormat).format(e.mess.charge_monthly);return Object(u.jsxs)("div",{className:"mess-card mess-id-".concat(e.mess.id," row"),children:[Object(u.jsx)("div",{className:"image-container col-md-4",children:Object(u.jsx)("img",{src:"./"+e.mess.image,alt:"mess"})}),Object(u.jsxs)("div",{className:"content-container col-md-8",children:[Object(u.jsxs)("div",{className:"row no-gutters justify-content-between",children:[Object(u.jsx)(g,{rating:r}),Object(u.jsx)(O,{is_interested:e.mess.is_interested,toggleInterested:e.toggleInterested,user_count:e.mess.interested_users_count})]}),Object(u.jsxs)("div",{className:"detail-container",children:[Object(u.jsx)("div",{className:"mess-name",children:e.mess.name}),Object(u.jsx)("div",{className:"mess-address",children:e.mess.address})]}),Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"charge-container col-6",children:Object(u.jsxs)("div",{className:"charge",children:["Monthly : \u20b9 ",i,"/-"]})}),Object(u.jsx)("div",{className:"charge-container col-6",children:Object(u.jsxs)("div",{className:"charge",children:["Lunch/Dinner : \u20b9 ",c,"/-"]})}),Object(u.jsx)("div",{className:"charge-container col-6",children:Object(u.jsxs)("div",{className:"charge",children:["Breakfast : \u20b9 ",a,"/-"]})}),Object(u.jsx)("div",{className:"charge-container col-6",children:Object(u.jsxs)("div",{className:"charge",children:["Menu",Object(u.jsx)("input",{class:"form-control form-control-sm",type:"text",placeholder:e.mess.menu,readOnly:!0})]})}),Object(u.jsx)("div",{className:"button-container col-6",children:Object(u.jsx)("a",{href:"#",className:"btn btn-primary",children:"Order"})})]})]})]})},y=function(){return Object(u.jsx)("div",{className:"no-property-container",children:Object(u.jsx)("p",{children:"No MESS to list"})})},_=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={messes:[],sort:"none",filter:{gender:"none"}},e.toggleInterested=function(t){fetch("".concat(j,"/api/toggle_interested_mess.php?mess_id=").concat(t)).then((function(e){return e.json()})).then((function(s){s.success?(console.log("Success"),e.updateInterested(t)):s.success||s.is_logged_in||(console.log("Not logged in!"),window.$("#login-modal").modal("show"))})).catch((function(e){console.log("Error fetching and parsing data",e)}))},e.updateInterested=function(t){var s=Object(m.a)(e.state.messes);s.forEach((function(e){e.id===t&&(e.is_interested=!e.is_interested,e.is_interested?e.interested_users_count++:e.interested_users_count--)})),e.setState({messes:s})},e.updateSort=function(t){e.setState({sort:t})},e.updateFilter=function(t){e.setState({filter:{gender:t}})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=window.location.search,s=new URLSearchParams(t).get("city");fetch("".concat(j,"/api/get_messes_by_city.php?city=").concat(s)).then((function(e){return e.json()})).then((function(t){e.setState({messes:t})})).catch((function(e){console.log("Error fetching and parsing data",e)}))}},{key:"render",value:function(){var e,t,s=this,n=Object(m.a)(this.state.messes);return"none"!==this.state.sort&&("desc"===this.state.sort?n.sort((function(e,t){return t.rent-e.rent})):n.sort((function(e,t){return e.rent-t.rent}))),"none"!==this.state.filter.gender&&(n=n.filter((function(e){return e.gender===s.state.filter.gender}))),n.length>0?(e=n.filter((function(e){return e.is_owner})).map((function(e){return Object(u.jsx)(v,{mess:e,toggleInterested:function(){return s.toggleInterested(e.id)}},e.id)})),t=n.filter((function(e){return 0==e.is_owner})).map((function(e){return Object(u.jsx)(N,{mess:e,toggleInterested:function(){return s.toggleInterested(e.id)}},e.id)}))):e=Object(u.jsx)(y,{}),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"page-container",children:[e,t]})})}}]),s}(n.Component),w=_,F=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(w,{})})}}]),s}(n.Component),I=F;a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root1"))}},[[17,1,2]]]);
//# sourceMappingURL=main.99bc49e5.chunk.js.map