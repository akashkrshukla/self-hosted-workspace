(self.webpackChunktalk=self.webpackChunktalk||[]).push([["src_views_RoomSelector_vue"],{81415:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var o=e(28017),i=e.n(o),a=e(58061);const s={name:"ConversationIcon",components:{Avatar:i()},props:{hideFavorite:{type:Boolean,default:!0},hideCall:{type:Boolean,default:!0},disableMenu:{type:Boolean,default:!1},item:{type:Object,default:()=>({objectType:"",type:0,displayName:"",isFavorite:!1})}},computed:{showCall(){return!this.hideCall&&this.item.hasCall},showFavorite(){return!this.hideFavorite&&this.item.isFavorite},iconClass(){return"file"===this.item.objectType?"icon-file":"share:password"===this.item.objectType?"icon-password":"emails"===this.item.objectType?"icon-mail":this.item.type===a.Sl.TYPE.CHANGELOG?"icon-changelog":this.item.type===a.Sl.TYPE.GROUP?"icon-contacts":this.item.type===a.Sl.TYPE.PUBLIC?"icon-public":""},preloadedUserStatus(){if(Object.prototype.hasOwnProperty.call(this.item,"statusMessage"))return{status:this.item.status||null,message:this.item.statusMessage||null,icon:this.item.statusIcon||null}},menuContainer(){if(this.$store)return this.$store.getters.getMainContainerSelector()}}}},96639:(n,e,o)=>{"use strict";o.d(e,{Z:()=>c});var i=o(47450),a=o.n(i),s=o(4820),r=o(79753),l=o(58061);const c={name:"RoomSelector",components:{ConversationIcon:o(41673).Z,Modal:a()},props:{container:{type:String,default:void 0},dialogTitle:{type:String,default:t("spreed","Link to a conversation")},dialogSubtitle:{type:String,default:""},showPostableOnly:{type:Boolean,default:!1}},data:()=>({rooms:[],selectedRoom:null,currentRoom:null,loading:!0}),computed:{availableRooms(){return this.rooms.filter((n=>!(n.type===l.Sl.TYPE.CHANGELOG||this.currentRoom&&this.currentRoom===n.token||this.showPostableOnly&&n.readOnly!==l.Sl.STATE.READ_WRITE||"file"===n.objectType||"share:password"===n.objectType)))}},beforeMount(){var n,t;this.fetchRooms();const e=null===(n=OCA.Talk)||void 0===n||null===(t=n.instance)||void 0===t?void 0:t.$store;e&&(this.currentRoom=e.getters.getToken())},methods:{fetchRooms(){s.default.get((0,r.generateOcsUrl)("/apps/spreed/api/v4/room")).then((n=>{this.rooms=n.data.ocs.data.sort(this.sortConversations),this.loading=!1}))},sortConversations:(n,t)=>n.isFavorite!==t.isFavorite?n.isFavorite?-1:1:t.lastActivity-n.lastActivity,close(){this.$root.$emit("close"),this.$emit("close")},select(){this.$root.$emit("select",this.selectedRoom),this.$emit("select",this.selectedRoom)}}}},58061:(n,t,e)=>{"use strict";e.d(t,{Sl:()=>o});const o={START_CALL:{EVERYONE:0,USERS:1,MODERATORS:2},STATE:{READ_WRITE:0,READ_ONLY:1},LISTABLE:{NONE:0,USERS:1,ALL:2},TYPE:{ONE_TO_ONE:1,GROUP:2,PUBLIC:3,CHANGELOG:4}}},17116:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});var o=e(87537),i=e.n(o),a=e(23645),s=e.n(a)()(i());s.push([n.id,".conversation-icon[data-v-48a240d5]{width:44px;height:44px;position:relative}.conversation-icon .avatar.icon[data-v-48a240d5]{width:44px;height:44px;line-height:44px;font-size:22px;background-color:var(--color-background-darker)}.conversation-icon .avatar.icon.icon-changelog[data-v-48a240d5]{background-size:44px}.conversation-icon .avatar.icon.icon-public[data-v-48a240d5],.conversation-icon .avatar.icon.icon-contacts[data-v-48a240d5],.conversation-icon .avatar.icon.icon-password[data-v-48a240d5],.conversation-icon .avatar.icon.icon-file[data-v-48a240d5],.conversation-icon .avatar.icon.icon-mail[data-v-48a240d5]{background-size:22px}.conversation-icon .overlap-icon[data-v-48a240d5]{position:absolute;top:0;left:calc(44px - 12px);line-height:100%}.conversation-icon .overlap-icon .icon-favorite[data-v-48a240d5]{display:inline-block;vertical-align:middle;background-image:var(--icon-star-dark-FC0)}.conversation-icon .overlap-icon .icon-active-call[data-v-48a240d5]{display:inline-block;vertical-align:middle;background-image:var(--icon-video-E9322D)}","",{version:3,sources:["webpack://./src/components/ConversationIcon.vue"],names:[],mappings:"AA0IA,oCACC,UAHW,CAIX,WAJW,CAKX,iBAAA,CAEA,iDACC,UARU,CASV,WATU,CAUV,gBAVU,CAWV,cAAA,CACA,+CAAA,CAEA,gEACC,oBAfS,CAkBV,iTAKC,oBAAA,CAIF,kDACC,iBAAA,CACA,KAAA,CACA,sBAAA,CACA,gBAAA,CAEA,iEACC,oBAAA,CACA,qBAAA,CACA,0CAAA,CAGD,oEACC,oBAAA,CACA,qBAAA,CACA,yCAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@use 'sass:math';\n$icon-size: 44px;\n\n.conversation-icon {\n\twidth: $icon-size;\n\theight: $icon-size;\n\tposition: relative;\n\n\t.avatar.icon {\n\t\twidth: $icon-size;\n\t\theight: $icon-size;\n\t\tline-height: $icon-size;\n\t\tfont-size: math.div($icon-size, 2);\n\t\tbackground-color: var(--color-background-darker);\n\n\t\t&.icon-changelog {\n\t\t\tbackground-size: $icon-size;\n\t\t}\n\n\t\t&.icon-public,\n\t\t&.icon-contacts,\n\t\t&.icon-password,\n\t\t&.icon-file,\n\t\t&.icon-mail {\n\t\t\tbackground-size: math.div($icon-size, 2);\n\t\t}\n\t}\n\n\t.overlap-icon {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: calc(#{$icon-size} - 12px);\n\t\tline-height: 100%;\n\n\t\t.icon-favorite {\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t\tbackground-image: var(--icon-star-dark-FC0);\n\t\t}\n\n\t\t.icon-active-call {\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t\tbackground-image: var(--icon-video-E9322D);\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const r=s},37324:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});var o=e(87537),i=e.n(o),a=e(23645),s=e.n(a)()(i());s.push([n.id,"#modal-inner[data-v-45ce8265]{width:90vw;max-width:400px;height:50vh;position:relative}#modal-inner h2[data-v-45ce8265]{margin-bottom:4px}#modal-content[data-v-45ce8265]{position:absolute;width:calc(100% - 40px);height:calc(100% - 40px);display:flex;flex-direction:column;padding:20px}#room-list[data-v-45ce8265]{overflow-y:auto;flex:0 1 auto;height:100%}li[data-v-45ce8265]{padding:6px;border:1px solid transparent;display:flex}li[data-v-45ce8265]:hover,li[data-v-45ce8265]:focus{background-color:var(--color-background-dark);border-radius:var(--border-radius-pill)}li.selected[data-v-45ce8265]{background-color:var(--color-primary-light);border-radius:var(--border-radius-pill)}li>span[data-v-45ce8265]{padding:5px 5px 5px 10px;vertical-align:middle;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#modal-buttons[data-v-45ce8265]{overflow:hidden;flex-shrink:0}#modal-buttons button[data-v-45ce8265]{height:44px;margin:0}#modal-buttons .primary[data-v-45ce8265]{float:right}.subtitle[data-v-45ce8265]{color:var(--color-text-maxcontrast);margin-bottom:8px}","",{version:3,sources:["webpack://./src/views/RoomSelector.vue"],names:[],mappings:"AA8JA,8BACC,UAAA,CACA,eAAA,CACA,WAAA,CACA,iBAAA,CAEA,iCACC,iBAAA,CAIF,gCACC,iBAAA,CACA,uBAAA,CACA,wBAAA,CACA,YAAA,CACA,qBAAA,CACA,YAAA,CAGD,4BACC,eAAA,CACA,aAAA,CACA,WAAA,CAGD,oBACC,WAAA,CACA,4BAAA,CACA,YAAA,CAEA,oDAEC,6CAAA,CACA,uCAAA,CAGD,6BACC,2CAAA,CACA,uCAAA,CAGD,yBACC,wBAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAIF,gCACC,eAAA,CACA,aAAA,CACA,uCACC,WAAA,CACA,QAAA,CAGD,yCACC,WAAA,CAIF,2BACC,mCAAA,CACA,iBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#modal-inner {\n\twidth: 90vw;\n\tmax-width: 400px;\n\theight: 50vh;\n\tposition: relative;\n\n\th2 {\n\t\tmargin-bottom: 4px;\n\t}\n}\n\n#modal-content {\n\tposition: absolute;\n\twidth: calc(100% - 40px);\n\theight: calc(100% - 40px);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 20px;\n}\n\n#room-list {\n\toverflow-y: auto;\n\tflex: 0 1 auto;\n\theight: 100%;\n}\n\nli {\n\tpadding: 6px;\n\tborder: 1px solid transparent;\n\tdisplay: flex;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-dark);\n\t\tborder-radius: var(--border-radius-pill);\n\t}\n\n\t&.selected {\n\t\tbackground-color: var(--color-primary-light);\n\t\tborder-radius: var(--border-radius-pill);\n\t}\n\n\t& > span {\n\t\tpadding: 5px 5px 5px 10px;\n\t\tvertical-align: middle;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t}\n}\n\n#modal-buttons {\n\toverflow: hidden;\n\tflex-shrink: 0;\n\tbutton {\n\t\theight: 44px;\n\t\tmargin: 0;\n\t}\n\n\t.primary {\n\t\tfloat: right;\n\t}\n}\n\n.subtitle {\n\tcolor: var(--color-text-maxcontrast);\n\tmargin-bottom: 8px;\n}\n\n"],sourceRoot:""}]);const r=s},54088:(n,t,e)=>{"use strict";var o=e(93379),i=e.n(o),a=e(7795),s=e.n(a),r=e(90569),l=e.n(r),c=e(3565),A=e.n(c),d=e(19216),v=e.n(d),C=e(44589),p=e.n(C),u=e(17116),h={};h.styleTagTransform=p(),h.setAttributes=A(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=v();i()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals},77181:(n,t,e)=>{"use strict";var o=e(93379),i=e.n(o),a=e(7795),s=e.n(a),r=e(90569),l=e.n(r),c=e(3565),A=e.n(c),d=e(19216),v=e.n(d),C=e(44589),p=e.n(C),u=e(37324),h={};h.styleTagTransform=p(),h.setAttributes=A(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=v();i()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals},41673:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var o=e(53523),i=e(56429);e(94016);const a=(0,e(51900).Z)(i.Z,o.s,o.x,!1,null,"48a240d5",null).exports},35504:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>a});var o=e(9877),i=e(71082);e(89311);const a=(0,e(51900).Z)(i.Z,o.s,o.x,!1,null,"45ce8265",null).exports},56429:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o=e(81415).Z},71082:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o=e(96639).Z},94016:(n,t,e)=>{"use strict";e(54088)},89311:(n,t,e)=>{"use strict";e(77181)},53523:(n,t,e)=>{"use strict";e.d(t,{s:()=>o,x:()=>i});var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"conversation-icon"},[n.iconClass?e("div",{staticClass:"avatar icon",class:n.iconClass}):e("Avatar",{staticClass:"conversation-icon__avatar",attrs:{size:44,user:n.item.name,"disable-menu":n.disableMenu,"display-name":n.item.displayName,"preloaded-user-status":n.preloadedUserStatus,"show-user-status-compact":n.disableMenu,"menu-container":n.menuContainer,"menu-position":"left"}}),n._v(" "),n.showCall?e("div",{staticClass:"overlap-icon"},[e("span",{staticClass:"icon icon-active-call"}),n._v(" "),e("span",{staticClass:"hidden-visually"},[n._v(n._s(n.t("spreed","Call in progress")))])]):n.showFavorite?e("div",{staticClass:"overlap-icon"},[e("span",{staticClass:"icon icon-favorite"}),n._v(" "),e("span",{staticClass:"hidden-visually"},[n._v(n._s(n.t("spreed","Favorite")))])]):n._e()],1)},i=[]},9877:(n,t,e)=>{"use strict";e.d(t,{s:()=>o,x:()=>i});var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("Modal",{attrs:{container:n.container},on:{close:n.close}},[e("div",{staticClass:"talk-modal",class:{"icon-loading":n.loading},attrs:{id:"modal-inner"}},[e("div",{attrs:{id:"modal-content"}},[e("h2",[n._v("\n\t\t\t\t"+n._s(n.dialogTitle)+"\n\t\t\t")]),n._v(" "),n.dialogSubtitle?e("p",{staticClass:"subtitle"},[n._v("\n\t\t\t\t"+n._s(n.dialogSubtitle)+"\n\t\t\t")]):n._e(),n._v(" "),e("div",{attrs:{id:"room-list"}},[!n.loading&&n.availableRooms.length>0?e("ul",n._l(n.availableRooms,(function(t){return e("li",{key:t.token,class:{selected:n.selectedRoom===t.token},on:{click:function(e){n.selectedRoom=t.token}}},[e("ConversationIcon",{attrs:{item:t,"hide-call":!0,"hide-favorite":!1,"disable-menu":!0}}),n._v(" "),e("span",[n._v(n._s(t.displayName))])],1)})),0):n.loading?n._e():e("div",[n._v("\n\t\t\t\t\t"+n._s(n.t("spreed","No conversations found"))+"\n\t\t\t\t")])]),n._v(" "),e("div",{attrs:{id:"modal-buttons"}},[!n.loading&&n.availableRooms.length>0?e("button",{staticClass:"primary",attrs:{disabled:!n.selectedRoom},on:{click:n.select}},[n._v("\n\t\t\t\t\t"+n._s(n.t("spreed","Select conversation"))+"\n\t\t\t\t")]):n._e()])])])])},i=[]}}]);
//# sourceMappingURL=talk-src_views_RoomSelector_vue.js.map?v=37c418f4b32f6ee37efc