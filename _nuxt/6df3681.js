(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5],{376:function(t,e,n){t.exports=n.p+"img/Gerb.a5fa961.webp"},377:function(t,e,n){t.exports=n.p+"img/mainlogo.fadb36e.png"},378:function(t,e,n){"use strict";n.r(e);n(2),n(1);var l={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nav",{staticClass:"navbar_main_f"},[l("div",{staticClass:"navbar_bottom"},[l("div",{staticClass:"container"},[l("div",{staticClass:"navbar_bottom_f"},[l("div",{staticClass:"navbar_main"},[l("div",[l("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[l("img",{staticStyle:{width:"70px","border-radius":"50%"},attrs:{src:n(376),alt:""}}),t._v(" "),l("div",[t._v(" "+t._s(t.$t("title")))])])],1)]),t._v(" "),l("ul",{staticClass:"navbar_nav"},t._l(t.menus,(function(e,n){return l("li",{key:n,staticClass:"nav-item"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+e.link)}},[t._v(t._s(e.title))])],1)})),0),t._v(" "),l("ul",{staticClass:"navbar_nav"},[l("li",{staticClass:"nav-item lang"},[l("div",[l("div",{staticClass:"main_language"},[l("button",{on:{click:function(e){t.isActive=!t.isActive}}},[l("svg",{attrs:{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.25225 13.75C11.2549 13.75 14.4996 10.7279 14.4996 7C14.4996 3.27208 11.2549 0.25 7.25225 0.25C3.24964 0.25 0.00488281 3.27208 0.00488281 7C0.00488281 10.7279 3.24964 13.75 7.25225 13.75ZM9.51142 11.8114C11.3774 11.0502 12.7158 9.37499 12.8735 7.39374C12.2108 7.73038 11.3752 8.00636 10.4227 8.19847C10.3028 9.60074 9.97622 10.8528 9.51142 11.8114ZM4.99308 2.18865C3.42503 2.82824 2.22962 4.1133 1.79424 5.68301C1.98076 5.84783 2.29838 6.05054 2.78169 6.25061C3.14311 6.40021 3.56457 6.53483 4.03552 6.64731C4.07833 4.90436 4.43664 3.33617 4.99308 2.18865ZM5.72273 8.43307C5.84893 9.52562 6.11295 10.4651 6.44634 11.1638C6.68312 11.66 6.92335 11.9686 7.10875 12.133C7.17468 12.1914 7.22241 12.2226 7.25225 12.2386C7.28209 12.2226 7.32982 12.1914 7.39576 12.133C7.58116 11.9686 7.82138 11.66 8.05816 11.1638C8.39155 10.4651 8.65558 9.52562 8.78177 8.43307C8.28869 8.47692 7.77699 8.5 7.25226 8.5C6.72752 8.5 6.21581 8.47692 5.72273 8.43307ZM4.08182 8.19847C4.20172 9.60073 4.52828 10.8528 4.99309 11.8114C3.12705 11.0502 1.78874 9.37499 1.63102 7.39373C2.29369 7.73037 3.12931 8.00636 4.08182 8.19847ZM8.86251 6.9172C8.35469 6.97065 7.81534 7 7.25226 7C6.68917 7 6.14982 6.97065 5.64199 6.9172C5.65257 5.24806 5.98225 3.80878 6.44634 2.83624C6.68312 2.34005 6.92335 2.03137 7.10875 1.86704C7.17469 1.80859 7.22241 1.77744 7.25225 1.76137C7.28209 1.77744 7.32982 1.80859 7.39576 1.86704C7.58116 2.03137 7.82138 2.34005 8.05816 2.83624C8.52225 3.80878 8.85193 5.24806 8.86251 6.9172ZM10.469 6.64731C10.4262 4.90437 10.0679 3.33617 9.51142 2.18865C11.0795 2.82824 12.2749 4.1133 12.7103 5.68301C12.5237 5.84784 12.2061 6.05055 11.7228 6.25061C11.3614 6.40022 10.9399 6.53483 10.469 6.64731Z",fill:"white"}})]),t._v(" "),"uz"==t.$i18n.locale?l("span",[t._v("Uz")]):t._e(),t._v(" "),"ru"==t.$i18n.locale?l("span",[t._v("Ру")]):t._e(),t._v(" "),"en"==t.$i18n.locale?l("span",[t._v("Eng")]):t._e()]),t._v(" "),t.isActive?l("div",[l("div",{staticClass:"lang_menu"},[l("div",{staticClass:"list_lang"},t._l(t.availableLocales,(function(e){return l("div",{key:e.code},[l("NuxtLink",{attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)])]):t._e()])])]),t._v(" "),l("li",{staticClass:"nav_item order_tike "},[l("NuxtLink",{attrs:{to:"/visit"}},[t._v(t._s(t.$t("visits")))])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,n){"use strict";n.r(e);n(2),n(1);var l={data:function(){return{isActive:!1,menus:[],change_bg:{left:"7px",transition:".3s"}}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",[l("div",{staticClass:"phone_menu",class:{show_menu:t.isActive}},[l("div",{staticClass:"container"},[l("div",{staticClass:"mobi_menu"},[l("div",{staticClass:"navbar_logo"}),t._v(" "),l("div",{staticClass:"navbar_menu"},[l("div",{staticClass:"hamburger"},[l("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(e){t.isActive=!t.isActive}}},[l("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),l("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),l("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])]),t._v(" "),l("div",{staticClass:"lang_group_f"},[l("div",{staticClass:"lang_groups"},[l("NuxtLink",{staticClass:"ml-3",attrs:{to:t.switchLocalePath("uz")}},[t._v("O’zbekcha")]),t._v(" "),l("NuxtLink",{attrs:{to:t.switchLocalePath("ru")}},[t._v("Русский")]),t._v(" "),l("NuxtLink",{staticClass:"mr-3",attrs:{to:t.switchLocalePath("en")}},[t._v("English")])],1)]),t._v(" "),t._l(t.menus,(function(e,n){return l("div",{key:n,staticClass:"main_links"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+e.link)}},[t._v(t._s(e.title))])],1)})),t._v(" "),l("div",{staticClass:"nav_item order_tike mt-4"},[l("NuxtLink",{attrs:{to:"/visit"}},[t._v(t._s(t.$t("visits")))])],1)],2)]),t._v(" "),l("div",{staticClass:"mobi_menu"},[l("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[l("img",{staticStyle:{width:"80px","border-radius":"50%"},attrs:{src:n(376),alt:""}}),t._v(" "),l("div",[t._v(" "+t._s(t.$t("title")))])]),t._v(" "),l("div",{staticClass:"navbar_menu"},[l("div",{staticClass:"hamburger"},[l("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(e){t.isActive=!t.isActive}}},[l("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),l("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),l("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])],1)])}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){"use strict";n.r(e);n(2),n(1);var l={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"phone_footer"},[l("div",{staticClass:"container"},[l("div",{staticClass:"logo_phonefooter"},[l("img",{attrs:{src:n(377),alt:""}}),t._v(" "),l("div",[t._v(t._s(t.$t("title")))])])])])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,n){"use strict";n.r(e);n(2),n(1);var l={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"desktop_footer"},[l("div",{staticClass:"container"},[l("div",{staticClass:"footer_desktop"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-3"},[l("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[l("img",{staticStyle:{width:"70px","border-radius":"50%"},attrs:{src:n(376),alt:""}}),t._v(" "),l("div",[t._v(" "+t._s(t.$t("title")))])])],1),t._v(" "),t._l(t.menus,(function(e,n){return l("div",{key:n,staticClass:"col-xl-1.5 ml-5"},[l("div",{staticClass:"footer_name"},[t._v("\n           "+t._s(e.title)+"\n         ")]),t._v(" "),l("div",{staticClass:"footer_link"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+e.link)}},[t._v(t._s(e.title))])],1)])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){t.exports=n.p+"img/event1.0fd1be0.jpg"},408:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:n(386),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subscribe_description"},[n("div",[t._v(" Введите свой адрес электронной почты, и мы будем держать вас в курсе наших последних новостей")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form_button"},[n("button",[t._v("Подписатсия")])])}],c=n(378),o=n(379),r=n(380),v={components:{Footer:n(381).default,PhoneFooter:r.default,PhoneMenu:o.default,Navbar:c.default}},d=n(78),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("div",{staticClass:"container"},[n("PhoneMenu")],1),t._v(" "),n("section",{staticClass:"management"},[n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.$t("events")))]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-3"},[n("div",{staticClass:"news_card"},[t._m(0),t._v(" "),n("div",{staticClass:"news_title"},[t._v("\n              "+t._s(t.$t("events_title"))+"\n            ")]),t._v(" "),n("div",{staticClass:"news_description"},[t._v("\n              "+t._s(t.$t("event_desc"))+"\n            ")]),t._v(" "),n("div",{staticClass:"news_link"},[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n               "+t._s(t.$t("more"))+"\n\n                "),n("svg",{attrs:{width:"22",height:"14",viewBox:"0 0 22 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.499636 6.99997C0.499636 6.80106 0.578653 6.61029 0.719305 6.46964C0.859959 6.32899 1.05072 6.24997 1.24964 6.24997H18.9391L14.2186 1.53097C14.1489 1.46124 14.0936 1.37846 14.0559 1.28735C14.0181 1.19624 13.9987 1.09859 13.9987 0.999971C13.9987 0.901355 14.0181 0.803705 14.0559 0.712596C14.0936 0.621487 14.1489 0.538703 14.2186 0.468971C14.2884 0.399239 14.3712 0.343925 14.4623 0.306186C14.5534 0.268447 14.651 0.249023 14.7496 0.249023C14.8483 0.249023 14.9459 0.268447 15.037 0.306186C15.1281 0.343925 15.2109 0.399239 15.2806 0.468971L21.2806 6.46897C21.3505 6.53864 21.4059 6.6214 21.4437 6.71252C21.4815 6.80364 21.501 6.90132 21.501 6.99997C21.501 7.09862 21.4815 7.1963 21.4437 7.28742C21.4059 7.37854 21.3505 7.4613 21.2806 7.53097L15.2806 13.531C15.2109 13.6007 15.1281 13.656 15.037 13.6938C14.9459 13.7315 14.8483 13.7509 14.7496 13.7509C14.651 13.7509 14.5534 13.7315 14.4623 13.6938C14.3712 13.656 14.2884 13.6007 14.2186 13.531C14.1489 13.4612 14.0936 13.3785 14.0559 13.2873C14.0181 13.1962 13.9987 13.0986 13.9987 13C13.9987 12.9014 14.0181 12.8037 14.0559 12.7126C14.0936 12.6215 14.1489 12.5387 14.2186 12.469L18.9391 7.74997H1.24964C1.05072 7.74997 0.859959 7.67095 0.719305 7.5303C0.578653 7.38965 0.499636 7.19888 0.499636 6.99997Z",fill:"#0034B9"}})])])],1)])])])])]),t._v(" "),n("section",{staticClass:"subscribe"},[n("div",{staticClass:"container"},[n("div",{staticClass:"subscribe_title"},[t._v("\n        Подпишитесь на нас\n      ")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"subscribe_form"},[n("div",[n("form",[n("div",{staticClass:"input_form"},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M14.1665 17.0837H5.83317C3.33317 17.0837 1.6665 15.8337 1.6665 12.917V7.08366C1.6665 4.16699 3.33317 2.91699 5.83317 2.91699H14.1665C16.6665 2.91699 18.3332 4.16699 18.3332 7.08366V12.917C18.3332 15.8337 16.6665 17.0837 14.1665 17.0837Z",stroke:"#9A9EA6","stroke-width":"1.2","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M14.1668 7.5L11.5585 9.58333C10.7002 10.2667 9.29183 10.2667 8.43349 9.58333L5.8335 7.5",stroke:"#9A9EA6","stroke-width":"1.2","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),n("input",{attrs:{type:"text",placeholder:"Ввидите почта"}})]),t._v(" "),t._m(2)])])])])]),t._v(" "),n("PhoneFooter"),t._v(" "),n("Footer")],1)}),l,!1,null,null,null);e.default=component.exports}}]);