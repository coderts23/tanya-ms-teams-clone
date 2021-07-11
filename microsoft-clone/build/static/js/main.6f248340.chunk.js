(this["webpackJsonpmicrsoft-clone"]=this["webpackJsonpmicrsoft-clone"]||[]).push([[0],{118:function(A,t,e){},250:function(A,t,e){},251:function(A,t,e){},252:function(A,t,e){},253:function(A,t,e){"use strict";e.r(t);var n=e(1),c=e.n(n),a=e(27),i=e.n(a),o=(e(118),e(26)),r=e(5),s=e(2),u=e(10),l=e(9),d={SET_IS_ROOM_HOST:"SET_IS_ROOM_HOST",SET_IDENTITY:"SET_IDENTITY",SET_CONNECT_ONLY_WITH_AUDIO:"SET_CONNECT_ONLY_WITH_AUDIO",SET_ROOM_ID:"SET_ROOM_ID",SET_TWILIO_ACCCESS_TOKEN:"SET_TWILIO_ACCCESS_TOKEN",SET_SHOW_OVERLAY:"SET_SHOW_OVERLAY",SET_PARTICIPANTS:"SET_PARTICIPANTS",SET_MESSAGES:"SET_MESSAGES"},g=function(A){return{type:d.SET_IS_ROOM_HOST,isRoomHost:A}},j=function(A){return{type:d.SET_SHOW_OVERLAY,showOverlay:A}},C=function(A){return{type:d.SET_PARTICIPANTS,participants:A}},O=d,b=e(0),E=function(A){var t=A.isRoomHost?"Host Meeting":"Join meeting";return Object(b.jsx)("p",{className:"title",children:t})},m=e(16),h=e.n(m),f=e(22),p=function(A){var t=A.placeholder,e=A.value,n=A.changeHandler;return Object(b.jsx)("input",{value:e,onChange:n,className:"join_room_input",placeholder:t})},B=function(A){var t=A.nameValue,e=A.setNameValue,n=A.roomIdValue,c=A.setRoomIdValue,a=A.isRoomHost;return Object(b.jsxs)("div",{className:"inputs_container",children:[!a&&Object(b.jsx)(p,{placeholder:"Enter meeting ID",value:n,changeHandler:function(A){c(A.target.value)}}),Object(b.jsx)(p,{placeholder:"Enter your Name",value:t,changeHandler:function(A){e(A.target.value)}})]})},v=function(A){var t=A.connectOnlyWithAudio,e=A.setConnectOnlyWithAudio;return Object(b.jsxs)("div",{className:"checkbox_container",children:[Object(b.jsx)("div",{className:"checkbox_connection",onClick:function(){e(!t)},children:t&&Object(b.jsx)("img",{className:"checkbox_image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABiSURBVHgB7ZHBCQAgCEUdpREaoY0boREaoREawQw8hNShFLz04EOHz8MU4OMKIgZKpkTQwrJG6fMNGoRMN52fjMvltI/ryWaJy01Kn7+5k6p3JqTJ5ACLFE2uuUiriezjywAgdcf6AfL4kwAAAABJRU5ErkJggg==",alt:"checkbox"})}),Object(b.jsx)("p",{className:"checkbox_container_paragraph",children:"Only audio"})]})},I=function(A){var t=A.showRoomNotFoundMessage;return Object(b.jsx)("div",{className:"room_not_found_box",children:t&&Object(b.jsx)("p",{className:"room_not_found_text",children:"Room has not been found. Please try again."})})},_=function(A){var t=A.buttonText,e=A.cancelButton,n=A.onClickHandler,c=e?"cancel_button":"success_button";return Object(b.jsx)("button",{onClick:n,className:c,children:t})},x=function(A){var t=A.handleJoinToRoom,e=A.isRoomHost?"Host":"Join",n=Object(r.f)();return Object(b.jsxs)("div",{className:"buttons_container",children:[Object(b.jsx)(_,{buttonText:e,onClickHandler:t}),Object(b.jsx)(_,{buttonText:"Cancel",cancelButton:!0,onClickHandler:function(){n.push("/")}})]})},k=e(254),Q=e(21),S=e(58),y=e.n(S),N=e(112),T={identity:"",isRoomHost:!1,connectOnlyWithAudio:!1,roomId:null,twilioAccessToken:null,showOverlay:!0,participants:[],messages:[]},w=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.SET_IDENTITY:return Object(s.a)(Object(s.a)({},A),{},{identity:t.identity});case O.SET_IS_ROOM_HOST:return Object(s.a)(Object(s.a)({},A),{},{isRoomHost:t.isRoomHost});case O.SET_CONNECT_ONLY_WITH_AUDIO:return Object(s.a)(Object(s.a)({},A),{},{connectOnlyWithAudio:t.onlyWithAudio});case O.SET_ROOM_ID:return Object(s.a)(Object(s.a)({},A),{},{roomId:t.roomId});case O.SET_TWILIO_ACCCESS_TOKEN:return Object(s.a)(Object(s.a)({},A),{},{twilioAccessToken:t.token});case O.SET_SHOW_OVERLAY:return Object(s.a)(Object(s.a)({},A),{},{showOverlay:t.showOverlay});case O.SET_PARTICIPANTS:return Object(s.a)(Object(s.a)({},A),{},{participants:t.participants});case O.SET_MESSAGES:return Object(s.a)(Object(s.a)({},A),{},{messages:t.messages});default:return A}},J=Object(N.a)({reducer:w}),R=e(23),H={video:!1,audio:!0},M={audio:!0,video:{width:640,height:480}},P=null,D=function(){var A=Object(f.a)(h.a.mark((function A(t,e){var n,c,a;return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n=Object(k.a)(),console.log(e),A.next=4,y.a.get("/api/token-service?identity=".concat(n).concat(e));case 4:c=A.sent,(a=c.data).accessToken&&t(a.accessToken);case 7:case"end":return A.stop()}}),A)})));return function(t,e){return A.apply(this,arguments)}}(),W=function(){var A=Object(f.a)(h.a.mark((function A(t){var e,n,c,a,i=arguments;return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:e=i.length>1&&void 0!==i[1]?i[1]:"test-room",n=i.length>2?i[2]:void 0,c=J.getState().connectOnlyWithAudio,a=c?H:M,navigator.mediaDevices.getUserMedia(a).then(function(){var A=Object(f.a)(h.a.mark((function A(a){var i,o,r,s,u;return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return o=new R.LocalAudioTrack(a.getAudioTracks()[0]),r=new R.LocalDataTrack,P=r,c?i=[o,r]:(s=new R.LocalVideoTrack(a.getVideoTracks()[0]),i=[o,s,r]),A.next=6,Object(R.connect)(t,{name:e,tracks:i});case 6:u=A.sent,console.log("Successfully connected with Twilio room"),console.log(u),n(u),J.dispatch(j(!1));case 11:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()).catch((function(A){console.log("Error occured when trying to get an access to local devices"),console.log(A)}));case 5:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),z=function(){var A=Object(f.a)(h.a.mark((function A(t){var e;return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,y.a.get("/api/room-exists?roomId=".concat(t));case 2:return e=A.sent,A.abrupt("return",e.data.roomExists);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),L=function(A){var t=Object(Q.a)(J.getState().messages);t.push(A),J.dispatch(function(A){return{type:d.SET_MESSAGES,messages:A}}(t))},U=Object(l.b)((function(A){return Object(s.a)({},A)}),(function(A){return{setConnectOnlyWithAudioAction:function(t){return A(function(A){return{type:d.SET_CONNECT_ONLY_WITH_AUDIO,onlyWithAudio:A}}(t))},setIdentityAction:function(t){return A(function(A){return{type:d.SET_IDENTITY,identity:A}}(t))},setRoomIdAction:function(t){return A({type:d.SET_ROOM_ID,roomId:t})}}}))((function(A){var t=A.isRoomHost,e=A.setConnectOnlyWithAudioAction,c=A.connectOnlyWithAudio,a=A.setRoomIdAction,i=A.setIdentityAction,o=A.setShowLoadingOverlay,s=Object(n.useState)(""),l=Object(u.a)(s,2),d=l[0],g=l[1],j=Object(n.useState)(""),C=Object(u.a)(j,2),O=C[0],E=C[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),_=p[0],Q=p[1],S=Object(r.f)(),y=function(){var A=Object(f.a)(h.a.mark((function A(){var e;return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(i(O),t){A.next=10;break}return o(!0),A.next=5,z(d);case 5:e=A.sent,o(!1),e?(a(d),S.push("/room")):Q(!0),A.next=12;break;case 10:a(Object(k.a)()),S.push("/room");case 12:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(B,{roomIdValue:d,setRoomIdValue:g,nameValue:O,setNameValue:E,isRoomHost:t}),Object(b.jsx)(v,{setConnectOnlyWithAudio:e,connectOnlyWithAudio:c}),Object(b.jsx)(I,{showRoomNotFoundMessage:_}),Object(b.jsx)(x,{isRoomHost:t,handleJoinToRoom:y})]})})),V=function(){return Object(b.jsx)("div",{className:"overlay_container",children:Object(b.jsx)("div",{className:"overlay_loader"})})},Z=(e(250),Object(l.b)((function(A){return Object(s.a)({},A)}),(function(A){return{setIsRoomHostAction:function(t){return A(g(t))}}}))((function(A){var t=A.setIsRoomHostAction,e=A.isRoomHost,c=Object(r.g)().search;Object(n.useEffect)((function(){new URLSearchParams(c).get("host")&&t(!0)}),[]);var a=Object(n.useState)(!1),i=Object(u.a)(a,2),o=i[0],s=i[1];return Object(b.jsx)("div",{className:"join_room_container",children:Object(b.jsxs)("div",{className:"join_room_panel",children:[Object(b.jsx)(E,{isRoomHost:e}),Object(b.jsx)(U,{setShowLoadingOverlay:s}),o&&Object(b.jsx)(V,{})]})})}))),F=(e(251),function(A){var t=A.identity,e=A.lastItem;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"participants_list",children:function(A){return A.slice(36,A.length)}(t)}),!e&&Object(b.jsx)("span",{className:"participants_separator_line"})]})}),Y=Object(l.b)((function(A){return Object(s.a)({},A)}))((function(A){var t=A.participants;return Object(b.jsx)("div",{className:"participants_box",children:t.map((function(A,e){return Object(b.jsx)(F,{identity:A.identity,lastItem:t.length===e+1},A.identity)}))})})),K=function(){return Object(b.jsx)("div",{className:"participants_label_container",children:Object(b.jsx)("p",{className:"participants_label_paragraph",children:"PARTICIPANTS"})})},X=function(){return Object(b.jsxs)("div",{className:"participants_section_container",children:[Object(b.jsx)(K,{}),Object(b.jsx)(Y,{})]})},G=e.p+"static/media/mic.c9c9788e.svg",q=e.p+"static/media/micOff.3a72f682.svg",$=function(A){var t=A.room,e=Object(n.useState)(!1),c=Object(u.a)(e,2),a=c[0],i=c[1],o=function(){t.localParticipant.audioTracks.forEach((function(A){A.track.disable()}))},r=function(){t.localParticipant.audioTracks.forEach((function(A){A.track.enable()}))};return Object(b.jsx)("div",{className:"video_button_container",children:Object(b.jsx)("img",{src:a?q:G,onClick:function(){a?r():o(),i(!a)},className:"video_button_image",alt:"mute/unmute"})})},AA=function(A){var t=A.room;return Object(b.jsx)("div",{className:"video_button_container",children:Object(b.jsx)("button",{className:"video_button_end",onClick:function(){t.disconnect();var A=window.location.origin;window.location.href=A},children:"Leave Room"})})},tA=e.p+"static/media/camera.b50348a3.svg",eA=e.p+"static/media/cameraOff.a61d4a02.svg",nA=function(A){var t=A.room,e=Object(n.useState)(!1),c=Object(u.a)(e,2),a=c[0],i=c[1],o=function(){t.localParticipant.videoTracks.forEach((function(A){A.track.enable()}))},r=function(){t.localParticipant.videoTracks.forEach((function(A){A.track.disable()}))};return Object(b.jsx)("div",{className:"video_button_container",children:Object(b.jsx)("img",{src:a?eA:tA,className:"video_button_image",onClick:function(){a?o():r(),i(!a)},alt:"camera on/off"})})},cA=e.p+"static/media/switchToScreenSharing.900d9338.svg",aA=function(A){var t=A.stream,e=Object(n.useRef)();return Object(n.useEffect)((function(){var A=e.current;A.srcObject=t,A.onloadedmetadata=function(){A.play()}}),[t]),Object(b.jsx)("div",{className:"local_screen_share_preview",children:Object(b.jsx)("video",{muted:!0,autoPlay:!0,ref:e,children:" "})})},iA=function(A){var t=A.room,e=Object(n.useState)(!1),c=Object(u.a)(e,2),a=c[0],i=c[1],o=Object(n.useState)(null),r=Object(u.a)(o,2),s=r[0],l=r[1],d=Object(n.useState)(null),g=Object(u.a)(d,2),j=g[0],C=g[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"video_button_container",children:Object(b.jsx)("img",{src:cA,onClick:function(){a?(s.stop(),t.localParticipant.unpublishTrack(s),l(null),i(!1)):navigator.mediaDevices.getDisplayMedia().then((function(A){C(A),i(!0);var e=new R.LocalVideoTrack(A.getVideoTracks()[0],{name:"screen-share-track"});t.localParticipant.publishTrack(e),l(e),A.getVideoTracks()[0].onended=function(){t.localParticipant.unpublishTrack(e),l(!1),i(!1)}})).catch((function(A){console.error("Could not get an access to share screen",A)}))},className:"video_button_image",alt:"video button"})}),a&&Object(b.jsx)(aA,{stream:j})]})},oA=Object(l.b)((function(A){return Object(s.a)({},A)}))((function(A){var t=A.room,e=A.connectOnlyWithAudio;return Object(b.jsxs)("div",{className:"video_buttons_container",children:[Object(b.jsx)($,{room:t}),!e&&Object(b.jsx)(nA,{room:t}),Object(b.jsx)(AA,{room:t}),Object(b.jsx)(iA,{room:t})]})})),rA=function(A){var t=A.roomId;return Object(b.jsx)("div",{className:"room_label",children:Object(b.jsxs)("p",{className:"room_label_paragraph",children:["ID: ",t]})})},sA=e(29),uA=e(30),lA=e(32),dA=e(31),gA=function(A){var t=A.track,e=Object(n.useRef)();return Object(n.useEffect)((function(){var A=t.attach();e.current.classList.add(t.kind),e.current.appendChild(A)}),[]),Object(b.jsx)("div",{className:"track",ref:e})},jA=function(A){var t=A.track,e=A.participant,c=Object(n.useRef)();Object(n.useEffect)((function(){var A=t.attach();c.current.classList.add(t.kind),c.current.appendChild(A);var e=document.getElementById("videos_portal");e.classList.contains("videos_portal_styles")||e.classList.add("videos_portal_styles")}),[]);var a=Object(b.jsxs)("div",{className:"video_track_container",children:[Object(b.jsx)("div",{ref:c}),Object(b.jsx)("div",{className:"video_name",children:e.slice(36,e.length)})]});return i.a.createPortal(a,document.getElementById("videos_portal"))},CA=function(A){Object(lA.a)(e,A);var t=Object(dA.a)(e);function e(A){var n;Object(sA.a)(this,e),n=t.call(this,A);var c=Array.from(n.props.participant.tracks.values()).map((function(A){return A.track})).filter((function(A){return null!==A}));return n.state={tracks:c},n}return Object(uA.a)(e,[{key:"componentDidMount",value:function(){var A=this;this.props.localParticipant||(this.props.participant.on("trackSubscribed",(function(t){"data"===t.kind?t.on("message",(function(A){L(JSON.parse(A))})):A.addTrack(t)})),this.props.participant.on("trackUnpublished",(function(t){A.removeTrack(t)})))}},{key:"addTrack",value:function(A){A&&this.setState({tracks:[].concat(Object(Q.a)(this.state.tracks),[A])})}},{key:"removeTrack",value:function(A){if(A){var t=this.state.tracks.filter((function(t){return t.name!==A.trackName}));this.setState({tracks:t})}}},{key:"render",value:function(){var A=this;return Object(b.jsx)("div",{className:"participant",id:this.props.participant.identity,children:this.state.tracks.map((function(t){return"audio"===t.kind?Object(b.jsx)(gA,{track:t},t):"video"===t.kind?Object(b.jsx)(jA,{track:t,participant:A.props.participant.identity},t):void 0}))})}}]),e}(n.Component),OA=function(A){Object(lA.a)(e,A);var t=Object(dA.a)(e);function e(A){var n;Object(sA.a)(this,e),n=t.call(this,A);var c=Array.from(n.props.room.participants.values());return n.state={remoteParticipants:c},c.forEach((function(A){n.addParticipantToStore(A)})),n}return Object(uA.a)(e,[{key:"componentDidMount",value:function(){var A=this;this.props.room.on("participantConnected",(function(t){A.addParticipant(t)})),this.props.room.on("participantDisconnected",(function(t){A.removeParticipant(t)}))}},{key:"addParticipantToStore",value:function(A){var t=J.getState().participants;if(!t.find((function(t){return t.identity===A.identity}))){var e=Object(Q.a)(t);e.push({identity:A.identity}),J.dispatch(C(e))}}},{key:"addParticipant",value:function(A){console.log("".concat(A.identity.slice(36,A.identity.length)," has joined the room")),this.addParticipantToStore(A),this.setState({remoteParticipants:[].concat(Object(Q.a)(this.state.remoteParticipants),[A])})}},{key:"removeParticipantFromStore",value:function(A){var t=J.getState().participants.filter((function(t){return t.identity!==A.identity}));J.dispatch(C(t))}},{key:"removeParticipant",value:function(A){console.log("".concat(A.identity.slice(36,A.identity.length)," has left the room.")),this.removeParticipantFromStore(A),this.setState({remoteParticipants:this.state.remoteParticipants.filter((function(t){return t.identity!==A.identity}))})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"room",children:Object(b.jsxs)("div",{className:"participants",children:[Object(b.jsx)(CA,{localParticipant:!0,participant:this.props.room.localParticipant},this.props.room.localParticipant.identity),this.state.remoteParticipants.map((function(A){return Object(b.jsx)(CA,{participant:A},A.identity)}))]})})}}]),e}(n.Component),bA=Object(l.b)((function(A){return Object(s.a)({},A)}))((function(A){var t=A.room,e=A.setRoom,c=A.roomId,a=A.twilioAccessToken;return Object(n.useEffect)((function(){a&&W(a,c,e)}),[a]),Object(b.jsxs)("div",{className:"videos_container",children:[Object(b.jsx)(rA,{roomId:c}),t&&Object(b.jsx)(OA,{room:t})]})})),EA=function(){var A=Object(n.useState)(null),t=Object(u.a)(A,2),e=t[0],c=t[1];return Object(b.jsxs)("div",{className:"video_section_container",children:[Object(b.jsx)(bA,{room:e,setRoom:c}),Object(b.jsx)(oA,{room:e})]})},mA=function(){return Object(b.jsx)("div",{className:"chat_label_container",children:Object(b.jsx)("p",{className:"chat_label_paragraph",children:"CHAT"})})},hA=function(A){var t=A.author,e=A.content,n=A.sameAuthor,c=A.messageCreatedByMe,a=c?"message_align_right":"message_align_left",i=c?"You":t,o=c?"message_right_styles":"message_left_styles";return Object(b.jsxs)("div",{className:"message_container ".concat(a),children:[!n&&Object(b.jsx)("p",{className:"message_title",children:i}),Object(b.jsx)("p",{className:"message_content ".concat(o),children:e})]})},fA=Object(l.b)((function(A){return Object(s.a)({},A)}))((function(A){var t=A.messages;return Object(b.jsx)("div",{className:"messages_container",children:t.map((function(A,e){var n=e>0&&A.identity===t[e-1].identity;return Object(b.jsx)(hA,{author:A.identity,content:A.content,sameAuthor:n,messageCreatedByMe:A.messageCreatedByMe},e)}))})})),pA=e.p+"static/media/sendMessageButton.9add4f6d.svg",BA=function(){var A=Object(n.useState)(""),t=Object(u.a)(A,2),e=t[0],c=t[1],a=function(){!function(A){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=J.getState().identity;L({identity:e,content:A,messageCreatedByMe:t});var n={identity:e,content:A},c=JSON.stringify(n);P.send(c)}(e,!0),c("")};return Object(b.jsxs)("div",{className:"new_message_container",children:[Object(b.jsx)("input",{className:"new_message_input",value:e,onChange:function(A){c(A.target.value)},placeholder:"Type Your Message",type:"text",onKeyDown:function(A){"Enter"===A.key&&(A.preventDefault(),a())}}),Object(b.jsx)("img",{className:"new_message_button",src:pA,onClick:a,alt:"new message"})]})},vA=function(){return Object(b.jsxs)("div",{className:"chat_section_container",children:[Object(b.jsx)(mA,{}),Object(b.jsx)(fA,{}),Object(b.jsx)(BA,{})]})},IA=function(){return Object(b.jsx)("div",{className:"overlay_container",children:Object(b.jsx)("div",{className:"loader"})})},_A=Object(l.b)((function(A){return Object(s.a)({},A)}),(function(A){return{setTwilioAccessTokenAction:function(t){return A(function(A){return{type:d.SET_TWILIO_ACCCESS_TOKEN,token:A}}(t))}}}))((function(A){var t=A.identity,e=A.roomId,c=A.setTwilioAccessTokenAction,a=A.showOverlay,i=Object(r.f)();return Object(n.useEffect)((function(){t&&e?D(c,t):i.push("/")}),[]),Object(b.jsxs)("div",{className:"room_container",children:[Object(b.jsx)(X,{}),Object(b.jsx)(EA,{}),Object(b.jsx)(vA,{}),a&&Object(b.jsx)(IA,{})]})})),xA=e.p+"static/media/video-call.bff2379b.jpg",kA=function(A){var t=A.createRoomButton,e=void 0!==t&&t,n=A.buttonText,c=A.onClickHandler,a=e?"create_room_button":"join_room_button";return Object(b.jsx)("button",{className:a,onClick:c,children:n})},QA=function(){var A=Object(r.f)();return Object(b.jsxs)("div",{className:"connecting_buttons_container",children:[Object(b.jsx)(kA,{buttonText:"Join a meeting",onClickHandler:function(){A.push("/join-room")}}),Object(b.jsx)(kA,{buttonText:"Host a meeting",createRoomButton:!0,onClickHandler:function(){A.push("/join-room?host=true")}})]})},SA=(e(55),function(){return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("img",{className:"logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAsASURBVHic7d0xb1RnFoDh49FKoKzpY4mKjiJl5A5FiCqSBdT8ApfUG1GgbE3JL6DGCCnVCkXpUMoUdK6QnB6DTOUtxt4FAgQB9gje55GmuTNjn2q+d+7M3G/t8PBwPsTzK5tnZubyzFydmYszs3F0W/+gPwB8dv/8z+O1Vf7/rZ3rH/YCApyE/ZnZO7o9mZkHM/Po4bX7Lz/kyWt/FwDPr2xuzMytmbkxM+c+aVTgsxIAwBuezcy9mbn98Nr9vfc98J0B8PzK5tmZ+Wlmbs7MN597QuDTCQDgHV7MzJ2Z+fnhtfsHb3vA4m0Hn1/Z/HZmfp2Zf43FHwC+NN/Mcg3/dWvn+rdve8BfAuD5lc3vZub3mdk82dkAgBO2OTO/b+1c/+7NO14LgKN3/r/MzPlTGgwAOFnnZ+aXN88E/C8Ajj7z3xmLPwB8bc7PzM7WzvWzxwdePQPw0zjtDwBfq81ZrvUzcxQARz/1u7mqiQCAU3Fza+f6xsz/zwDcGt/2B4Cv3TezXPNncXSFvxurnQcAOCU3tnaun1nM8vK+rvAHAA3nZubyYpbX9gcAOq4uZrmxDwDQcXExyx39AICODQEAAD0bi5lZX/UUAMCpWn/rboAAwNdNAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIWjs8PFz1DADAKXMGAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAoH9cuLt/uOohgI+zu72+ttIBfjvr9QO+UM4AAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQtJiZ/VUPAQCcqv3FzOytegoA4FTtCQAA6NlbzMyTVU8BAJyqJ4uZebDqKQCAU/VgMTOPZubZqicBAE7Fs5l5tNjdXn85M/dWPQ0AcCruzaWDl8fXAbg9My9WOQ0AcOJezHLNX14IaHd7fW9m7qxyIgDgxN2ZSwd7M69fCfDnmXm8mnkAgBP2eJZr/cy8EgC72+sHM3NtZp6uYCgA4OQ8nZlrc+ng4PjAa3sB7G6v/zkzP44IAICvxdOZ+XEuHfz56sG/bAa0u73+x8x8Pz4OAIAv3eOZ+X4uHfzx5h1v3Q3w6EzADzPz7/HrAAD40ryY5Rr+w5vv/I+tHR4evvcvXLi7vzEzt2bmxsyc+9wTAh9vd3t9baUD/Hb2/S8gwGl7Nstr+9w+/rb/u/xtABy7cHf/zMxcnpmrM3NxZjaObuufNCrw0QQApO3PckO/vVnu6/NgZh7NpYOXH/Lk/wKQAq5eW3YI8AAAAABJRU5ErkJggg==",alt:"microsoft"}),Object(b.jsx)("div",{className:"nav_text",children:"MICROSOFT | TEAMS"})]})}),yA=e(41),NA=function(A){Object(lA.a)(e,A);var t=Object(dA.a)(e);function e(){var A;Object(sA.a)(this,e),A=t.call(this);var n=new Date;return A.state={day:n.getDay(),month:n.getMonth(),date:n.getDate(),time:n.toLocaleTimeString()},A.countingSecond=A.countingSecond.bind(Object(yA.a)(A)),A}return Object(uA.a)(e,[{key:"countingSecond",value:function(){var A=new Date;this.setState({day:A.getDay(),month:A.getMonth(),date:A.getDate(),time:A.toLocaleTimeString()})}},{key:"componentWillMount",value:function(){setInterval(this.countingSecond,1e3)}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("h4",{className:"timeclock_text",children:[this.state.time," ",["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"][this.state.day],", ",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][this.state.month]," ",this.state.date,"  "]})})}}]),e}(n.Component),TA=Object(l.b)(null,(function(A){return{setIsRoomHostAction:function(t){return A(g(t))}}}))((function(A){var t=A.setIsRoomHostAction;return Object(n.useEffect)((function(){t(!1)}),[]),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"introduction_page_box col-5",children:[Object(b.jsx)("div",{children:Object(b.jsx)(SA,{})}),Object(b.jsx)("div",{className:"main_line",children:"Making Video Conferences Easy"}),Object(b.jsx)("div",{className:"tag_line",children:"Meet, chat, call, and collaborate in just one place."}),Object(b.jsx)("div",{className:"introduction_page_buttons",children:Object(b.jsx)(QA,{})})]}),Object(b.jsxs)("div",{className:"join_room_box col-7",children:[Object(b.jsx)("div",{className:"date_time",children:Object(b.jsx)(NA,{})}),Object(b.jsx)("div",{className:"introduction_page_image",children:Object(b.jsx)("img",{src:xA,className:"video_call_image",alt:"logo"})})]})]})}));e(252);var wA=function(){return Object(b.jsx)(o.a,{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/join-room",children:Object(b.jsx)(Z,{})}),Object(b.jsx)(r.a,{path:"/room",children:Object(b.jsx)(_A,{})}),Object(b.jsx)(r.a,{path:"/",children:Object(b.jsx)(TA,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(l.a,{store:J,children:Object(b.jsx)(wA,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))},55:function(A,t,e){}},[[253,1,2]]]);
//# sourceMappingURL=main.6f248340.chunk.js.map