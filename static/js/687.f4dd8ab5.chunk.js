"use strict";(self.webpackChunkreact_app_1=self.webpackChunkreact_app_1||[]).push([[687],{9687:function(e,a,s){s.r(a),s.d(a,{default:function(){return I}});s(2791);var i=s(2906),n={dialogsContainer:"Dialogs_dialogsContainer__8cx4-"},l={dialog:"DialogItem_dialog__gU34-",dialogLink:"DialogItem_dialogLink__5eNDH",dialogLinkActive:"DialogItem_dialogLinkActive__EzwnQ",itemData:"DialogItem_itemData__leS7c",avatarImgContainer:"DialogItem_avatarImgContainer__dEQ0N",avatarImg:"DialogItem_avatarImg__KiUO9",fullNameContainer:"DialogItem_fullNameContainer__1Byav",lastMessageContainer:"DialogItem_lastMessageContainer__Up6rY",lastMessage:"DialogItem_lastMessage__W1IgM",dateTime:"DialogItem_dateTime__2uTGz"},t=s(3504),r=s(7712),o=s(184),d=function(e){var a="/dialogs/"+e.user.id;return(0,o.jsx)("div",{className:l.dialog,children:(0,o.jsxs)("div",{className:l.itemData,children:[(0,o.jsx)("div",{className:l.avatarImgContainer,children:(0,o.jsx)(t.OL,{to:a,className:function(e){var a=e.isActive;return"".concat(l.dialogLink," ").concat(a?l.dialogLinkActive:"")},children:(0,o.jsx)("img",{className:l.avatarImg,src:null!=e.user.photos.small?e.user.photos.small:r})})}),(0,o.jsx)("div",{className:l.fullNameContainer,children:(0,o.jsx)("span",{className:l.fullName,children:e.user.name})}),(0,o.jsxs)("div",{className:l.lastMessageContainer,children:[(0,o.jsx)("span",{className:l.lastMessage,children:"Last message from friend..."}),(0,o.jsx)("span",{className:l.dateTime,children:"11:30 AM"})]})]})})},g="Message_message__rjHQQ",m=function(e){return(0,o.jsx)("div",{className:g,children:e.message})},c=s(6139),u=s(704),_=s(2031),v=s(5304),h=(0,v.D)(15),j=(0,u.Z)({form:"dialogAddMessageForm"})((function(e){return(0,o.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,o.jsx)("div",{children:(0,o.jsx)(c.Z,{component:_.gx,name:"newMessageBody",value:e.newMessageBody,placeholder:"Enter your message",validate:[v.C,h]})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{children:"Send"})})]})})),x=function(e){var a=e.dialogs.map((function(e){return(0,o.jsx)(d,{user:e},e.id)})),s=e.messages.map((function(e){return(0,o.jsx)(m,{id:e.id,message:e.message},e.id)}));return(0,o.jsxs)("div",{className:n.dialogsContainer,children:[(0,o.jsx)("div",{className:n.dialogs,children:a}),(0,o.jsxs)("div",{className:n.messages,children:[(0,o.jsx)("div",{children:s}),(0,o.jsx)("div",{children:(0,o.jsx)(j,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})})]})]})},f=s(8687),N=s(7781),p=s(1548),I=(0,N.qC)((0,f.$j)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageBody:e.dialogsPage.newMessageBody}}),(function(e){return{sendMessage:function(a){e((0,i.X)(a))}}})),p.Z)(x)}}]);
//# sourceMappingURL=687.f4dd8ab5.chunk.js.map