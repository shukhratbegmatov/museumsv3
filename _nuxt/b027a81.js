(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4,5,6],{376:function(t,e,n){t.exports=n.p+"img/Gerb.a5fa961.webp"},377:function(t,e,n){t.exports=n.p+"img/mainlogo.fadb36e.png"},378:function(t,e,n){"use strict";n.r(e);n(2),n(1);var l={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nav",{staticClass:"navbar_main_f"},[l("div",{staticClass:"navbar_bottom"},[l("div",{staticClass:"container"},[l("div",{staticClass:"navbar_bottom_f"},[l("div",{staticClass:"navbar_main"},[l("div",[l("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[l("img",{staticStyle:{width:"70px","border-radius":"50%"},attrs:{src:n(376),alt:""}}),t._v(" "),l("div",[t._v(" "+t._s(t.$t("title")))])])],1)]),t._v(" "),l("ul",{staticClass:"navbar_nav"},t._l(t.menus,(function(e,n){return l("li",{key:n,staticClass:"nav-item"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+e.link)}},[t._v(t._s(e.title))])],1)})),0),t._v(" "),l("ul",{staticClass:"navbar_nav"},[l("li",{staticClass:"nav-item lang"},[l("div",[l("div",{staticClass:"main_language"},[l("button",{on:{click:function(e){t.isActive=!t.isActive}}},[l("svg",{attrs:{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.25225 13.75C11.2549 13.75 14.4996 10.7279 14.4996 7C14.4996 3.27208 11.2549 0.25 7.25225 0.25C3.24964 0.25 0.00488281 3.27208 0.00488281 7C0.00488281 10.7279 3.24964 13.75 7.25225 13.75ZM9.51142 11.8114C11.3774 11.0502 12.7158 9.37499 12.8735 7.39374C12.2108 7.73038 11.3752 8.00636 10.4227 8.19847C10.3028 9.60074 9.97622 10.8528 9.51142 11.8114ZM4.99308 2.18865C3.42503 2.82824 2.22962 4.1133 1.79424 5.68301C1.98076 5.84783 2.29838 6.05054 2.78169 6.25061C3.14311 6.40021 3.56457 6.53483 4.03552 6.64731C4.07833 4.90436 4.43664 3.33617 4.99308 2.18865ZM5.72273 8.43307C5.84893 9.52562 6.11295 10.4651 6.44634 11.1638C6.68312 11.66 6.92335 11.9686 7.10875 12.133C7.17468 12.1914 7.22241 12.2226 7.25225 12.2386C7.28209 12.2226 7.32982 12.1914 7.39576 12.133C7.58116 11.9686 7.82138 11.66 8.05816 11.1638C8.39155 10.4651 8.65558 9.52562 8.78177 8.43307C8.28869 8.47692 7.77699 8.5 7.25226 8.5C6.72752 8.5 6.21581 8.47692 5.72273 8.43307ZM4.08182 8.19847C4.20172 9.60073 4.52828 10.8528 4.99309 11.8114C3.12705 11.0502 1.78874 9.37499 1.63102 7.39373C2.29369 7.73037 3.12931 8.00636 4.08182 8.19847ZM8.86251 6.9172C8.35469 6.97065 7.81534 7 7.25226 7C6.68917 7 6.14982 6.97065 5.64199 6.9172C5.65257 5.24806 5.98225 3.80878 6.44634 2.83624C6.68312 2.34005 6.92335 2.03137 7.10875 1.86704C7.17469 1.80859 7.22241 1.77744 7.25225 1.76137C7.28209 1.77744 7.32982 1.80859 7.39576 1.86704C7.58116 2.03137 7.82138 2.34005 8.05816 2.83624C8.52225 3.80878 8.85193 5.24806 8.86251 6.9172ZM10.469 6.64731C10.4262 4.90437 10.0679 3.33617 9.51142 2.18865C11.0795 2.82824 12.2749 4.1133 12.7103 5.68301C12.5237 5.84784 12.2061 6.05055 11.7228 6.25061C11.3614 6.40022 10.9399 6.53483 10.469 6.64731Z",fill:"white"}})]),t._v(" "),"uz"==t.$i18n.locale?l("span",[t._v("Uz")]):t._e(),t._v(" "),"ru"==t.$i18n.locale?l("span",[t._v("Ру")]):t._e(),t._v(" "),"en"==t.$i18n.locale?l("span",[t._v("Eng")]):t._e()]),t._v(" "),t.isActive?l("div",[l("div",{staticClass:"lang_menu"},[l("div",{staticClass:"list_lang"},t._l(t.availableLocales,(function(e){return l("div",{key:e.code},[l("NuxtLink",{attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)])]):t._e()])])]),t._v(" "),l("li",{staticClass:"nav_item order_tike "},[l("NuxtLink",{attrs:{to:"/visit"}},[t._v(t._s(t.$t("visits")))])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,n){"use strict";n.r(e);n(2),n(1);var l={data:function(){return{isActive:!1,menus:[],change_bg:{left:"7px",transition:".3s"}}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",[l("div",{staticClass:"phone_menu",class:{show_menu:t.isActive}},[l("div",{staticClass:"container"},[l("div",{staticClass:"mobi_menu"},[l("div",{staticClass:"navbar_logo"}),t._v(" "),l("div",{staticClass:"navbar_menu"},[l("div",{staticClass:"hamburger"},[l("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(e){t.isActive=!t.isActive}}},[l("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),l("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),l("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])]),t._v(" "),l("div",{staticClass:"lang_group_f"},[l("div",{staticClass:"lang_groups"},[l("NuxtLink",{staticClass:"ml-3",attrs:{to:t.switchLocalePath("uz")}},[t._v("O’zbekcha")]),t._v(" "),l("NuxtLink",{attrs:{to:t.switchLocalePath("ru")}},[t._v("Русский")]),t._v(" "),l("NuxtLink",{staticClass:"mr-3",attrs:{to:t.switchLocalePath("en")}},[t._v("English")])],1)]),t._v(" "),t._l(t.menus,(function(e,n){return l("div",{key:n,staticClass:"main_links"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+e.link)}},[t._v(t._s(e.title))])],1)})),t._v(" "),l("div",{staticClass:"nav_item order_tike mt-4"},[l("NuxtLink",{attrs:{to:"/visit"}},[t._v(t._s(t.$t("visits")))])],1)],2)]),t._v(" "),l("div",{staticClass:"mobi_menu"},[l("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[l("img",{staticStyle:{width:"80px","border-radius":"50%"},attrs:{src:n(376),alt:""}}),t._v(" "),l("div",[t._v(" "+t._s(t.$t("title")))])]),t._v(" "),l("div",{staticClass:"navbar_menu"},[l("div",{staticClass:"hamburger"},[l("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(e){t.isActive=!t.isActive}}},[l("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),l("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),l("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])],1)])}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){"use strict";n.r(e);n(2),n(1);var l={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"phone_footer"},[l("div",{staticClass:"container"},[l("div",{staticClass:"logo_phonefooter"},[l("img",{attrs:{src:n(377),alt:""}}),t._v(" "),l("div",[t._v(t._s(t.$t("title")))])])])])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,n){"use strict";n.r(e);n(2),n(1);var l={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"desktop_footer"},[l("div",{staticClass:"container"},[l("div",{staticClass:"footer_desktop"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-3"},[l("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[l("img",{staticStyle:{width:"70px","border-radius":"50%"},attrs:{src:n(376),alt:""}}),t._v(" "),l("div",[t._v(" "+t._s(t.$t("title")))])])],1),t._v(" "),t._l(t.menus,(function(e,n){return l("div",{key:n,staticClass:"col-xl-1.5 ml-5"},[l("div",{staticClass:"footer_name"},[t._v("\n           "+t._s(e.title)+"\n         ")]),t._v(" "),l("div",{staticClass:"footer_link"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+e.link)}},[t._v(t._s(e.title))])],1)])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){t.exports=n.p+"img/event1.0fd1be0.jpg"},387:function(t,e,n){t.exports=n.p+"videos/videos.69b2c05.mp4"},388:function(t,e,n){t.exports=n.p+"img/phones_prev_ui.94817da.png"},389:function(t,e,n){t.exports=n.p+"img/playmarket.d849ca4.png"},390:function(t,e,n){t.exports=n.p+"img/360_black.3acb863.png"},391:function(t,e,n){t.exports=n.p+"img/123.8801237.png"},392:function(t,e,n){t.exports=n.p+"img/applestore.897fdae.png"},407:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"head_texts"},[n("h1",[t._v("Xush kelibsiz!")]),t._v(" "),n("p",[t._v("Davlat muzeylariga sayohat")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"videos_img_3d"},[l("div",{staticClass:"videos_logo"},[l("img",{attrs:{src:n(390),alt:""}})]),t._v(" "),l("div",{staticClass:"image35"},[l("img",{attrs:{src:n(391),alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video_main"},[n("iframe",{attrs:{width:"100%",height:"500px",src:"https://www.youtube.com/embed/aWo-LFuNS5E?si=hgKN-obW1-LTxYqE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""}}),t._v(" "),n("div",{staticClass:"video_text"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:n(386),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://apps.apple.com/app/museums-uz/id6471949069",target:"_blank"}},[e("img",{staticClass:"mr-3",attrs:{src:n(392)}})])}],c=n(393),o=n.n(c),r=(n(394),n(396),n(398)),v=n(379),_=n(380),d=n(378),m={name:"IndexPage",components:{Footer:n(381).default,Navbar:d.default,PhoneFooter:_.default,PhoneMenu:v.default,Carousel3d:r.Carousel3d,Slide:r.Slide,VueSlickCarousel:o.a},data:function(){return{is_ass:!1,isHighContrast:!1,isLargeFont:!1,slides:7,museum:[],museum_name:"",email:"",tur_type:"",firs_name:"",last_name:"",count:"",lang:"",country:"",visit_date:"",phone:"",settings:{dots:!1,dotsClass:"slick-dots custom-dot-class",edgeFriction:.35,infinite:!0,speed:500,slidesToShow:8,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}}},methods:{toggleContrast:function(){this.isHighContrast=!this.isHighContrast},toggleFontSize:function(){this.isLargeFont=!this.isLargeFont},speakText:function(){if("speechSynthesis"in window){var text=document.body.innerText,t=new SpeechSynthesisUtterance(text);t.lang="uz-UZ",speechSynthesis.speak(t)}else alert("Sizning brauzeringiz ovoz chiqarib o‘qishni qo‘llab-quvvatlamaydi.")},showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()},showNext1:function(){this.$refs.carusel_3d.goNext()},showPrev1:function(){this.$refs.carusel_3d.goPrev()}},mounted:function(){var t=this;this.$axios.get("museum",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.museum=e.data}))}},C=n(78),component=Object(C.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{class:{"high-contrast":t.isHighContrast,"large-font":t.isLargeFont}},[l("div",[l("div",{staticClass:"Accessibility_button__3-w85",staticStyle:{position:"absolute",top:"30px",right:"30px",cursor:"pointer"},on:{click:function(e){t.is_ass=!t.is_ass}}},[l("svg",{attrs:{width:"30px",fill:"none",viewBox:"0 0 24 24"}},[l("path",{attrs:{fill:"currentColor",d:"M12 3a11 11 0 0110.82 9 11 11 0 01-21.64 0A11 11 0 0112 3zm0 16a9 9 0 008.78-7 9 9 0 00-17.56 0A9 9 0 0012 19z"}}),t._v(" "),l("path",{attrs:{fill:"#34CEFF","fill-rule":"evenodd",d:"M12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.77-2.73a2.5 2.5 0 11-3.54-3.54 2.5 2.5 0 013.54 3.54z","clip-rule":"evenodd"}})])]),t._v(" "),t.is_ass?l("div",[l("div",{staticClass:"accessibility-controls"},[l("button",{staticClass:"btn contrast-btn",on:{click:t.toggleContrast}},[t._v("\n          Kontrastni oshirish\n        ")]),t._v(" "),l("button",{staticClass:"btn font-btn",on:{click:t.toggleFontSize}},[t._v("\n          Shriftni kattalashtirish\n        ")]),t._v(" "),l("button",{staticClass:"btn voice-btn",on:{click:t.speakText}},[t._v("\n          Ovoz chiqarib o‘qish\n        ")])]),t._v(" "),t._t("default")],2):t._e()]),t._v(" "),l("Navbar"),t._v(" "),l("div",{staticClass:"container"},[l("PhoneMenu"),t._v(" "),l("div",{staticClass:"main_vide"},[l("div",{staticClass:"video-background"},[l("video",{attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[l("source",{attrs:{src:n(387),type:"video/mp4"}}),t._v("\n          Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.\n        ")]),t._v(" "),t._m(0)])]),t._v(" "),l("div",{staticClass:"videos_3d"},[l("div",[l("div",{staticClass:"title_3d"},[t._v(t._s(t.$t("virtual")))]),t._v(" "),l("div",{staticClass:"description_3d"},[t._v("\n          "+t._s(t.$t("ver_desc"))+"\n        ")]),t._v(" "),l("div",{staticClass:"link_3d"},[l("a",{attrs:{target:"_blank",href:"https://360.madaniymeros.uz"}},[t._v("\n            "+t._s(t.$t("all_museums")))])])]),t._v(" "),t._m(1)]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-12 col-xl-6"},[l("div",{staticClass:"main_museum_f"},[l("div",{staticClass:"main_museum_bg"}),t._v(" "),l("div",{staticClass:"main_museum_img"},[t.museum[0]?l("img",{attrs:{src:t.museum[0].images,alt:""}}):t._e()])])]),t._v(" "),l("div",{staticClass:"col-12 col-xl-6"},[l("div",{staticClass:"main_museum_text"},[t.museum[0]?l("div",{staticClass:"main_museum_title"},[t._v(t._s(t.museum[0].name))]):t._e(),t._v(" "),t.museum[0]?l("div",{staticClass:"main_museum_description"},[t._v(t._s(t.museum[0].description)+"\n          ")]):t._e(),t._v(" "),l("div",{staticClass:"main_museum_link"},[l("NuxtLink",{attrs:{to:t.localePath("/museum_mains")}},[t._v(" "+t._s(t.$t("all_museums")))])],1)])])])],1),t._v(" "),l("section",{staticClass:"section_museum"},[l("div",{staticClass:"container"},[l("div",{staticClass:"all_images"},[l("div",[l("NuxtLink",{attrs:{to:t.localePath("/museum_mains")}},[t._v("\n            "+t._s(t.$t("all_museums"))+"\n\n            "),l("svg",{attrs:{width:"22",height:"14",viewBox:"0 0 22 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.500124 7.00095C0.500124 6.80203 0.579142 6.61127 0.719793 6.47062C0.860447 6.32997 1.05121 6.25095 1.25012 6.25095H18.9396L14.2191 1.53195C14.1494 1.46222 14.0941 1.37943 14.0563 1.28832C14.0186 1.19721 13.9992 1.09956 13.9992 1.00095C13.9992 0.902332 14.0186 0.804681 14.0563 0.713572C14.0941 0.622463 14.1494 0.539679 14.2191 0.469947C14.2889 0.400215 14.3716 0.344901 14.4627 0.307163C14.5539 0.269424 14.6515 0.25 14.7501 0.25C14.8487 0.25 14.9464 0.269424 15.0375 0.307163C15.1286 0.344901 15.2114 0.400215 15.2811 0.469947L21.2811 6.46995C21.351 6.53962 21.4064 6.62238 21.4442 6.7135C21.482 6.80462 21.5015 6.9023 21.5015 7.00095C21.5015 7.0996 21.482 7.19728 21.4442 7.2884C21.4064 7.37951 21.351 7.46228 21.2811 7.53195L15.2811 13.5319C15.2114 13.6017 15.1286 13.657 15.0375 13.6947C14.9464 13.7325 14.8487 13.7519 14.7501 13.7519C14.6515 13.7519 14.5539 13.7325 14.4627 13.6947C14.3716 13.657 14.2889 13.6017 14.2191 13.5319C14.1494 13.4622 14.0941 13.3794 14.0563 13.2883C14.0186 13.1972 13.9992 13.0996 13.9992 13.0009C13.9992 12.9023 14.0186 12.8047 14.0563 12.7136C14.0941 12.6225 14.1494 12.5397 14.2191 12.4699L18.9396 7.75095H1.25012C1.05121 7.75095 0.860447 7.67193 0.719793 7.53128C0.579142 7.39063 0.500124 7.19986 0.500124 7.00095Z",fill:"#fff"}})])])],1),t._v(" "),l("div",{staticClass:"control_slider"},[l("button",{on:{click:function(e){return t.showPrev()}}},[l("svg",{attrs:{width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M6.0332 0.719784L1.33317 5.99984L6.0332 11.2798",stroke:"#222222","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),l("button",{on:{click:function(e){return t.showNext()}}},[l("svg",{attrs:{width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M0.966796 0.719784L5.66683 5.99984L0.966797 11.2798",stroke:"#222222","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])]),t._v(" "),t.museum.length>0?l("VueSlickCarousel",t._b({ref:"carousel"},"VueSlickCarousel",t.settings,!1),t._l(t.museum,(function(e,n){return l("div",{key:n},[l("NuxtLink",{attrs:{to:t.localePath("/museums/"+e.id)}},[l("div",{staticClass:"museums_card_mains"},[l("div",{staticClass:"over_museums"},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),l("img",{attrs:{width:"100%",height:"100%",src:e.images,alt:""}})])])],1)})),0):t._e()],1),t._v(" "),l("section",{staticClass:"section_images"},[l("div",{staticClass:"container"},[l("div",{staticClass:"section_museum_title"},[l("h3",[t._v(" "+t._s(t.$t("top_museum")))])]),t._v(" "),l("div",{staticClass:"row"},t._l(t.museum,(function(e,n){return 1==e.status?l("div",{key:n,staticClass:"col-12 col-xl-2"},[l("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:t.localePath("/museums/"+e.id)}},[l("div",{staticClass:"section_museum_card"},[l("div",[l("img",{attrs:{src:e.images,alt:""}})]),t._v(" "),l("div",{staticClass:"section_museum_name"},[t._v(t._s(e.name))])])])],1):t._e()})),0)])]),t._v(" "),l("section",{staticClass:"video_container"},[l("div",{staticClass:"container"},[l("div",{staticClass:"section_museum_title"},[l("h3",[t._v(t._s(t.$t("museum_main")))])]),t._v(" "),t._m(2)])]),t._v(" "),l("section",{staticClass:"video_container"},[l("div",{staticClass:"container"},[l("div",{staticClass:"section_museum_title"},[l("h3",[t._v(t._s(t.$t("events")))])]),t._v(" "),l("div",{staticClass:"news"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-3"},[l("div",{staticClass:"news_card"},[t._m(3),t._v(" "),l("div",{staticClass:"news_title"},[t._v("\n                "+t._s(t.$t("events_title"))+"\n              ")]),t._v(" "),l("div",{staticClass:"news_description"},[t._v("\n                "+t._s(t.$t("event_desc"))+"\n              ")]),t._v(" "),l("div",{staticClass:"news_link"},[l("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:"/"}},[t._v("\n                  "+t._s(t.$t("more"))+"\n\n                  "),l("svg",{attrs:{width:"22",height:"14",viewBox:"0 0 22 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.499636 6.99997C0.499636 6.80106 0.578653 6.61029 0.719305 6.46964C0.859959 6.32899 1.05072 6.24997 1.24964 6.24997H18.9391L14.2186 1.53097C14.1489 1.46124 14.0936 1.37846 14.0559 1.28735C14.0181 1.19624 13.9987 1.09859 13.9987 0.999971C13.9987 0.901355 14.0181 0.803705 14.0559 0.712596C14.0936 0.621487 14.1489 0.538703 14.2186 0.468971C14.2884 0.399239 14.3712 0.343925 14.4623 0.306186C14.5534 0.268447 14.651 0.249023 14.7496 0.249023C14.8483 0.249023 14.9459 0.268447 15.037 0.306186C15.1281 0.343925 15.2109 0.399239 15.2806 0.468971L21.2806 6.46897C21.3505 6.53864 21.4059 6.6214 21.4437 6.71252C21.4815 6.80364 21.501 6.90132 21.501 6.99997C21.501 7.09862 21.4815 7.1963 21.4437 7.28742C21.4059 7.37854 21.3505 7.4613 21.2806 7.53097L15.2806 13.531C15.2109 13.6007 15.1281 13.656 15.037 13.6938C14.9459 13.7315 14.8483 13.7509 14.7496 13.7509C14.651 13.7509 14.5534 13.7315 14.4623 13.6938C14.3712 13.656 14.2884 13.6007 14.2186 13.531C14.1489 13.4612 14.0936 13.3785 14.0559 13.2873C14.0181 13.1962 13.9987 13.0986 13.9987 13C13.9987 12.9014 14.0181 12.8037 14.0559 12.7126C14.0936 12.6215 14.1489 12.5387 14.2186 12.469L18.9391 7.74997H1.24964C1.05072 7.74997 0.859959 7.67095 0.719305 7.5303C0.578653 7.38965 0.499636 7.19888 0.499636 6.99997Z",fill:"#fff"}})])])],1)])])])])])]),t._v(" "),l("section",{staticClass:"video_container"},[l("div",{staticClass:"container"},[l("div",{staticClass:"section_museum_title"},[l("h3",[t._v(t._s(t.$t("stats")))]),t._v(" "),l("div",{staticClass:"row statistic"},[l("div",{staticClass:"col-12 col-xl-3"},[l("div",{staticClass:"statistic_card"},[l("div",{staticClass:"statistic_title"},[t._v("\n                "+t._s(t.$t("all_museums"))+"\n              ")]),t._v(" "),l("div",{staticClass:"statistic_count"},[t._v("\n                36\n              ")])])]),t._v(" "),l("div",{staticClass:"col-12 col-xl-3"},[l("div",{staticClass:"statistic_card"},[l("div",{staticClass:"statistic_title"},[t._v("\n                "+t._s(t.$t("archaeological"))+"\n              ")]),t._v(" "),l("div",{staticClass:"statistic_count"},[t._v("\n                16\n              ")])])]),t._v(" "),l("div",{staticClass:"col-12 col-xl-3"},[l("div",{staticClass:"statistic_card"},[l("div",{staticClass:"statistic_title"},[t._v("\n                "+t._s(t.$t("historical"))+"\n              ")]),t._v(" "),l("div",{staticClass:"statistic_count"},[t._v("\n                14\n              ")])])]),t._v(" "),l("div",{staticClass:"col-12 col-xl-3"},[l("div",{staticClass:"statistic_card"},[l("div",{staticClass:"statistic_title"},[t._v("\n                "+t._s(t.$t("art"))+"\n              ")]),t._v(" "),l("div",{staticClass:"statistic_count"},[t._v("\n                6\n              ")])])])])])])]),t._v(" "),l("section",{staticClass:"mobile_apps"},[l("div",{staticClass:"col-md-8"},[l("div",{staticClass:"d-flex justify-content-center"},[l("div",{staticClass:"d-flex flex-wrap"},[l("img",{staticStyle:{"margin-top":"30px"},attrs:{src:n(388),width:"auto"}}),t._v(" "),l("div",{staticClass:"d-flex flex-column justify-content-center"},[l("h1",{staticClass:"home-mobile-title"},[t._v(t._s(t.$t("mobile")))]),t._v(" "),l("div",{staticClass:"d-flex flex-wrap"},[t._m(4),t._v(" "),l("a",{attrs:{href:"http://media.museums.uz/museums.apk",download:""}},[l("img",{attrs:{src:n(389)}})])])])])])])]),t._v(" "),l("PhoneFooter"),t._v(" "),l("Footer")],1)}),l,!1,null,null,null);e.default=component.exports}}]);