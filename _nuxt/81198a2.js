(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5],{376:function(t,e,n){t.exports=n.p+"img/Gerb.a5fa961.webp"},377:function(t,e,n){t.exports=n.p+"img/mainlogo.fadb36e.png"},378:function(t,e,n){"use strict";n.r(e);n(2),n(1);var c={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},l=n(78),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("nav",{staticClass:"navbar_main_f"},[c("div",{staticClass:"navbar_bottom"},[c("div",{staticClass:"container"},[c("div",{staticClass:"navbar_bottom_f"},[c("div",{staticClass:"navbar_main"},[c("div",[c("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[c("img",{staticStyle:{width:"70px","border-radius":"50%"},attrs:{src:n(376),alt:""}}),t._v(" "),c("div",[t._v(" "+t._s(t.$t("title")))])])],1)]),t._v(" "),c("ul",{staticClass:"navbar_nav"},t._l(t.menus,(function(e,n){return c("li",{key:n,staticClass:"nav-item"},[c("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+e.link)}},[t._v(t._s(e.title))])],1)})),0),t._v(" "),c("ul",{staticClass:"navbar_nav"},[c("li",{staticClass:"nav-item lang"},[c("div",[c("div",{staticClass:"main_language"},[c("button",{on:{click:function(e){t.isActive=!t.isActive}}},[c("svg",{attrs:{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.25225 13.75C11.2549 13.75 14.4996 10.7279 14.4996 7C14.4996 3.27208 11.2549 0.25 7.25225 0.25C3.24964 0.25 0.00488281 3.27208 0.00488281 7C0.00488281 10.7279 3.24964 13.75 7.25225 13.75ZM9.51142 11.8114C11.3774 11.0502 12.7158 9.37499 12.8735 7.39374C12.2108 7.73038 11.3752 8.00636 10.4227 8.19847C10.3028 9.60074 9.97622 10.8528 9.51142 11.8114ZM4.99308 2.18865C3.42503 2.82824 2.22962 4.1133 1.79424 5.68301C1.98076 5.84783 2.29838 6.05054 2.78169 6.25061C3.14311 6.40021 3.56457 6.53483 4.03552 6.64731C4.07833 4.90436 4.43664 3.33617 4.99308 2.18865ZM5.72273 8.43307C5.84893 9.52562 6.11295 10.4651 6.44634 11.1638C6.68312 11.66 6.92335 11.9686 7.10875 12.133C7.17468 12.1914 7.22241 12.2226 7.25225 12.2386C7.28209 12.2226 7.32982 12.1914 7.39576 12.133C7.58116 11.9686 7.82138 11.66 8.05816 11.1638C8.39155 10.4651 8.65558 9.52562 8.78177 8.43307C8.28869 8.47692 7.77699 8.5 7.25226 8.5C6.72752 8.5 6.21581 8.47692 5.72273 8.43307ZM4.08182 8.19847C4.20172 9.60073 4.52828 10.8528 4.99309 11.8114C3.12705 11.0502 1.78874 9.37499 1.63102 7.39373C2.29369 7.73037 3.12931 8.00636 4.08182 8.19847ZM8.86251 6.9172C8.35469 6.97065 7.81534 7 7.25226 7C6.68917 7 6.14982 6.97065 5.64199 6.9172C5.65257 5.24806 5.98225 3.80878 6.44634 2.83624C6.68312 2.34005 6.92335 2.03137 7.10875 1.86704C7.17469 1.80859 7.22241 1.77744 7.25225 1.76137C7.28209 1.77744 7.32982 1.80859 7.39576 1.86704C7.58116 2.03137 7.82138 2.34005 8.05816 2.83624C8.52225 3.80878 8.85193 5.24806 8.86251 6.9172ZM10.469 6.64731C10.4262 4.90437 10.0679 3.33617 9.51142 2.18865C11.0795 2.82824 12.2749 4.1133 12.7103 5.68301C12.5237 5.84784 12.2061 6.05055 11.7228 6.25061C11.3614 6.40022 10.9399 6.53483 10.469 6.64731Z",fill:"white"}})]),t._v(" "),"uz"==t.$i18n.locale?c("span",[t._v("Uz")]):t._e(),t._v(" "),"ru"==t.$i18n.locale?c("span",[t._v("Ру")]):t._e(),t._v(" "),"en"==t.$i18n.locale?c("span",[t._v("Eng")]):t._e()]),t._v(" "),t.isActive?c("div",[c("div",{staticClass:"lang_menu"},[c("div",{staticClass:"list_lang"},t._l(t.availableLocales,(function(e){return c("div",{key:e.code},[c("NuxtLink",{attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)])]):t._e()])])]),t._v(" "),c("li",{staticClass:"nav_item order_tike "},[c("NuxtLink",{attrs:{to:"/visit"}},[t._v(t._s(t.$t("visits")))])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,n){"use strict";n.r(e);n(2),n(1);var c={data:function(){return{isActive:!1,menus:[],change_bg:{left:"7px",transition:".3s"}}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},l=n(78),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("header",[c("div",{staticClass:"phone_menu",class:{show_menu:t.isActive}},[c("div",{staticClass:"container"},[c("div",{staticClass:"mobi_menu"},[c("div",{staticClass:"navbar_logo"}),t._v(" "),c("div",{staticClass:"navbar_menu"},[c("div",{staticClass:"hamburger"},[c("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(e){t.isActive=!t.isActive}}},[c("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),c("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),c("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])]),t._v(" "),c("div",{staticClass:"lang_group_f"},[c("div",{staticClass:"lang_groups"},[c("NuxtLink",{staticClass:"ml-3",attrs:{to:t.switchLocalePath("uz")}},[t._v("O’zbekcha")]),t._v(" "),c("NuxtLink",{attrs:{to:t.switchLocalePath("ru")}},[t._v("Русский")]),t._v(" "),c("NuxtLink",{staticClass:"mr-3",attrs:{to:t.switchLocalePath("en")}},[t._v("English")])],1)]),t._v(" "),t._l(t.menus,(function(e,n){return c("div",{key:n,staticClass:"main_links"},[c("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+e.link)}},[t._v(t._s(e.title))])],1)})),t._v(" "),c("div",{staticClass:"nav_item order_tike mt-4"},[c("NuxtLink",{attrs:{to:"/visit"}},[t._v(t._s(t.$t("visits")))])],1)],2)]),t._v(" "),c("div",{staticClass:"mobi_menu"},[c("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[c("img",{staticStyle:{width:"80px","border-radius":"50%"},attrs:{src:n(376),alt:""}}),t._v(" "),c("div",[t._v(" "+t._s(t.$t("title")))])]),t._v(" "),c("div",{staticClass:"navbar_menu"},[c("div",{staticClass:"hamburger"},[c("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(e){t.isActive=!t.isActive}}},[c("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),c("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),c("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])],1)])}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){"use strict";n.r(e);n(2),n(1);var c={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},l=n(78),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("footer",{staticClass:"phone_footer"},[c("div",{staticClass:"container"},[c("div",{staticClass:"logo_phonefooter"},[c("img",{attrs:{src:n(377),alt:""}}),t._v(" "),c("div",[t._v(t._s(t.$t("title")))])])])])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,n){"use strict";n.r(e);n(2),n(1);var c={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},l=n(78),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("footer",{staticClass:"desktop_footer"},[c("div",{staticClass:"container"},[c("div",{staticClass:"footer_desktop"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-xl-3"},[c("NuxtLink",{staticClass:"navbar_brand",attrs:{to:t.localePath("/")}},[c("img",{staticStyle:{width:"70px","border-radius":"50%"},attrs:{src:n(376),alt:""}}),t._v(" "),c("div",[t._v(" "+t._s(t.$t("title")))])])],1),t._v(" "),t._l(t.menus,(function(e,n){return c("div",{key:n,staticClass:"col-xl-1.5 ml-5"},[c("div",{staticClass:"footer_name"},[t._v("\n           "+t._s(e.title)+"\n         ")]),t._v(" "),c("div",{staticClass:"footer_link"},[c("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+e.link)}},[t._v(t._s(e.title))])],1)])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,n){t.exports=n.p+"img/marker-icon-2x.680f69f.png"},385:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"},405:function(t,e,n){"use strict";n.r(e);var c=n(378),l=n(379),o=n(380),r=n(381),v=(n(245),n(36));n(246);delete v.Icon.Default.prototype._getIconUrl,v.Icon.Default.mergeOptions({iconRetinaUrl:n(384),iconUrl:n(247),shadowUrl:n(385)});var d={components:{Footer:r.default,PhoneFooter:o.default,PhoneMenu:l.default,Navbar:c.default},data:function(){return{icon:L.icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",iconSize:[30,40]})}}},C=n(78),component=Object(C.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("div",{staticClass:"container"},[n("PhoneMenu")],1),t._v(" "),n("section",{staticClass:"management"},[n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.$t("contact")))]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-6"},[n("div",{staticClass:"contact_card"},[n("div",{staticClass:"contact_card_f"},[n("div",{staticClass:"contact_text"},[n("svg",{attrs:{width:"18",height:"22",viewBox:"0 0 18 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M8.99837 20.332C8.99837 20.332 1.23438 15.667 1.23438 9.44402C1.23438 5.14802 4.71637 1.66602 9.01237 1.66602C13.3084 1.66602 16.7904 5.14802 16.7904 9.44402C16.7904 15.667 8.99837 20.332 8.99837 20.332Z",stroke:"#05057D","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M9.01237 12.556C10.7305 12.556 12.1234 11.1632 12.1234 9.44502C12.1234 7.72686 10.7305 6.33402 9.01237 6.33402C7.29422 6.33402 5.90137 7.72686 5.90137 9.44502C5.90137 11.1632 7.29422 12.556 9.01237 12.556Z",stroke:"#05057D","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),n("div",{staticClass:"contact_description"},[t._v(" Toshkent shahar, Mirobod tumani, Taras Shevchenko ko'chasi, 1-uy")])]),t._v(" "),n("div",{staticClass:"contact_card_f"},[n("div",{staticClass:"contact_text"},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M16.959 14.068V15.066M7.04101 14.959V14.068M4.00001 11.528H20M1.33301 5.83398V8.48898M22.667 5.83398V8.48898M8.11301 17.821V19.397C8.11301 20.196 7.46501 20.843 6.66701 20.843C5.86801 20.843 5.22101 20.195 5.22101 19.397V17.045M15.887 17.821V19.397C15.887 20.196 16.535 20.843 17.333 20.843C18.132 20.843 18.779 20.195 18.779 19.397V17.045M14.367 14.959H9.63301M17 17.634H7.00001C5.34301 17.634 4.00001 16.291 4.00001 14.634V6.15698C4.00001 4.49998 5.34301 3.15698 7.00001 3.15698H17C18.657 3.15698 20 4.49998 20 6.15698V14.634C20 16.291 18.657 17.634 17 17.634Z",stroke:"#05057D","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),n("div",{staticClass:"contact_description"},[t._v(" 1 85 19 51 21 67")])]),t._v(" "),n("div",{staticClass:"contact_card_f"},[n("div",{staticClass:"contact_text"},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M5.33316 21.332L6.66716 18.665M17.3332 18.665L18.6672 21.332M8.00016 14.667V13.775M16.0002 14.667V13.775M4.80016 8.48897H19.2002M12.0002 8.48897V2.66797M4.39616 6.62597C4.18416 4.50697 5.84816 2.66797 7.97816 2.66797H16.0222C18.1522 2.66797 19.8162 4.50697 19.6042 6.62597V14.707C19.8162 16.826 18.1522 18.665 16.0222 18.665H7.97816C5.84816 18.665 4.18416 16.826 4.39616 14.707V6.62597Z",stroke:"#05057D","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),n("div",{staticClass:"contact_description"},[t._v("Oybek")])]),t._v(" "),n("div",{staticClass:"contact_card_f"},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M21.334 12.001C21.334 17.1554 17.1554 21.334 12.001 21.334M21.334 12.001C21.334 6.8465 17.1554 2.66797 12.001 2.66797M21.334 12.001H18.666M12.001 21.334C6.8465 21.334 2.66797 17.1554 2.66797 12.001M12.001 21.334V18.667M2.66797 12.001C2.66797 6.8465 6.8465 2.66797 12.001 2.66797M2.66797 12.001H5.33597M12.001 2.66797V5.33597M12 12.0039L12.0018 12.001",stroke:"#05057D","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),n("div",{staticClass:"contact_description"},[t._v(" Markaziy bank")])])]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"col-xl-6"},[n("div",{staticClass:"maps"},[n("div",{staticStyle:{height:"500px"},attrs:{id:"map-wrap"}},[n("client-only",[n("l-map",{attrs:{zoom:14,center:[41.3069418,69.2753684]}},[n("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),n("l-marker",{attrs:{"lat-lng":[41.3069418,69.2753684],icon:t.icon}})],1)],1)],1)])])])])]),t._v(" "),n("PhoneFooter"),t._v(" "),n("Footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact_card"},[n("div",{staticClass:"contact_card_f"},[n("div",{staticClass:"contact_text"}),t._v(" "),n("div",{staticClass:"contact_description"},[t._v(" Ish grafigi")])]),t._v(" "),n("div",{staticClass:"contact_card_f"},[n("div",{staticClass:"contact_text"}),t._v(" "),n("div",{staticClass:"contact_description"},[t._v(" Dushanbadan-Jumagacha: 09:00 -18:00")])]),t._v(" "),n("div",{staticClass:"contact_card_f"},[n("div",{staticClass:"contact_text"}),t._v(" "),n("div",{staticClass:"contact_description"},[t._v("Tushlik soat: 13:00-14:00")])]),t._v(" "),n("div",{staticClass:"contact_card_f"},[n("div",{staticClass:"contact_description"},[t._v("Dam olish kunlari: Shanba Yakshanba")])])])}],!1,null,null,null);e.default=component.exports}}]);