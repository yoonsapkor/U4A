﻿sap.ui.define("u4a.m.SplitApp",["sap/m/SplitApp","sap/ui/thirdparty/jquery","sap/ui/Device","sap/ui/dom/containsOrEquals"],function(a,b,c){"use strict";var d=a.extend("u4a.m.SplitApp",{metadata:{library:"u4a.m",properties:{masterPageFixed:{type:"boolean",defaultValue:!1},masterPageWidth:{type:"sap.ui.core.CSSSize",defaultValue:"330px"},masterPageExpand:{type:"boolean",defaultValue:!1},rightPageWidth:{type:"sap.ui.core.CSSSize",defaultValue:"330px"},rightPageExpand:{type:"boolean",defaultValue:!1},rightPageAutoHide:{type:"boolean",defaultValue:!0}},aggregations:{rightPage:{type:"sap.m.Page",multiple:!1}}},renderer:function(a,b){sap.m.SplitAppRenderer.render(a,b),b.getRightPage()&&b._rightPageRender(a,b)},onAfterRendering:function(){a.prototype.onAfterRendering.apply(this,arguments),this.setMasterPageFixed(this.getMasterPageFixed());var b=this._oShowMasterBtn;if(null!=b&&null!=b.mEventRegistry.press&&(b.detachPress(b.mEventRegistry.press[0].fFunction),b.attachPress(this._attachPressMasterBtnEvent.bind(this))),this._oRightPage=document.getElementById(this.getId()+"-RightPage"),null!=this._oRightPage){var d=this.getDomRef();if(c.system.phone){var e=this.getAggregation("_navMaster"),f=e.getDomRef();this._oRightPage.style.visibility="hidden",f.appendChild(this._oRightPage)}else d.appendChild(this._oRightPage);this.setRightPageExpand(this.getRightPageExpand())}},_getComputedWidth:function(a,c){if(null!=a){this._pageWidthValidCheck(c);var d,e,f=!1;return b.sap.endsWith(c,"px")?(d=parseInt(c),b.sap.endsWith(a.sId,"Master")&&(d*=-1,f=!0),e=d+"px"):(e="100%",b.sap.endsWith(a.sId,"Master")&&(f=!0,d=parseInt(e),d*=-1,e=d+"%")),e}},_getMasterStyleDomId:function(){return this.getId()+"-u4aMSplitApp_masterStyle"},_getRightStyleDomId:function(){return this.getId()+"-u4aMSplitApp_rightStyle"},_setMasterAnimation:function(){var a=this._oMasterNav,b=this.getMasterPageWidth(),c=this._getComputedWidth(a,b);if(null!=a){var d=document.getElementById(this._getMasterStyleDomId());null!=d&&$(d).remove();var e=document.createElement("style");e.id=this._getMasterStyleDomId();var f=this.getId(),g=".u4aMSplitAppMaster"+f+"{";g+="width : "+b,g+="}",g+=".u4aMSplitAppMasterShow"+f+"{",g+="transform: translate3d(0px, 0px, 0px) !important;",g+="transition: all 300ms ease 0s !important;",g+="box-shadow: rgba(0, 0, 0, 0.15) 0px 0.625rem 1.875rem 0px, rgba(0, 0, 0, 0.15) 0px 0px 0px 1px !important;",g+="visibility: visible !important;",g+="}",g+=".u4aMSplitAppMasterHide"+f+"{",g+="transform: translate3d("+c+",0,0) !important;",g+="-webkit-transform: translate3d("+c+",0,0) !important;",g+="transition: all 300ms !important;",g+="-webkit-transition: all 300ms !important;",g+="box-shadow: rgba(255, 255, 255, 0) 0px 0rem 0rem 0px, rgba(255, 255, 255, 0) 0px 0px 0px 0px !important;",g+="}",e.innerText=g,document.head.appendChild(e),a.removeStyleClass("u4aMSplitAppMaster"+f),a.removeStyleClass("u4aMSplitAppMasterShow"+f),a.removeStyleClass("u4aMSplitAppMasterHide"+f),a.addStyleClass("u4aMSplitAppMaster"+f),this.getMasterPageExpand()?a.addStyleClass("u4aMSplitAppMasterShow"+f):a.addStyleClass("u4aMSplitAppMasterHide"+f)}},_setRightAnimation:function(){var a=this._oRightPage,b=this.getRightPage();if(null!=a){var c=this.getRightPageWidth(),d=this._getComputedWidth(b,c),e=document.getElementById(this._getRightStyleDomId());null!=e&&$(e).remove();var f=document.createElement("style");f.id=this._getRightStyleDomId();var g=this.getId(),h=".u4aMSplitAppRightPage"+g+"{";h+="height: 100%;",h+="display: inline-block;",h+="position: absolute;",h+="z-index: 4;",h+="top: 0;",h+="box-sizing: border-box;",h+="width: "+c+";",h+="right: 0;",h+="border-left: #ebebeb;",h+="background-color: #ffffff;",h+="}",h+=".u4aMSplitAppRightShow"+g+"{",h+="transform: translate3d(0px, 0px, 0px) !important;",h+="transition: all 300ms ease 0s !important;",h+="box-shadow: rgba(0, 0, 0, 0.15) 0px 0.625rem 1.875rem 0px, rgba(0, 0, 0, 0.15) 0px 0px 0px 1px !important;",h+="visibility: visible !important;",h+="}",h+=".u4aMSplitAppRightHide"+g+"{",h+="transform: translate3d("+d+",0,0) !important;",h+="-webkit-transform: translate3d("+d+",0,0) !important;",h+="transition: all 300ms !important;",h+="-webkit-transition: all 300ms !important;",h+="box-shadow: rgba(255, 255, 255, 0) 0px 0rem 0rem 0px, rgba(255, 255, 255, 0) 0px 0px 0px 0px !important;",h+="visibility: hidden;",h+="}",f.innerText=h,document.head.appendChild(f);var i=$(a);i.removeClass("u4aMSplitAppRightPage"+g),i.removeClass("u4aMSplitAppRightShow"+g),i.removeClass("u4aMSplitAppRightHide"+g),i.addClass("u4aMSplitAppRightPage"+g),this.getRightPageExpand()?i.addClass("u4aMSplitAppRightShow"+g):i.addClass("u4aMSplitAppRightHide"+g)}},_attachPressMasterBtnEvent:function(){this._bMasterPageExpand=!this._bMasterPageExpand,this.setMasterPageExpand(this._bMasterPageExpand)},setMasterPageFixed:function(a){this.setProperty("masterPageFixed",a,!0),a?(this.setMode(sap.m.SplitAppMode.StretchCompressMode),this.setMasterPageExpand(a)):this.setMode(sap.m.SplitAppMode.HideMode)},setMasterPageExpand:function(a){this.getMode()==sap.m.SplitAppMode.StretchCompressMode&&(a=!0),this.setProperty("masterPageExpand",a,!0),this._bMasterPageExpand=a,this._setMasterAnimation()},setMasterPageWidth:function(a){this._pageWidthValidCheck(a),this.setProperty("masterPageWidth",a,!0),this.setMasterPageExpand(this.getMasterPageExpand())},setRightPageWidth:function(a){this._pageWidthValidCheck(a),this.setProperty("rightPageWidth",a,!0),this.setRightPageExpand(this.getRightPageExpand())},setRightPageExpand:function(a){this.setProperty("rightPageExpand",a,!0);null==this._oRightPage||this._setRightAnimation()},setRightPageAutoHide:function(a){this.setProperty("rightPageAutoHide",a,!0)},_rightPageRender:function(a,b){var c=b.getId();a.write("<div"),a.addClass("u4aMSplitAppRightPage"+c),a.writeAttribute("id",c+"-RightPage"),a.writeClasses(),a.write(">"),a.renderControl(b.getRightPage()),a.write("</div>")},_pageWidthValidCheck:function(a){if(!b.sap.endsWith(a,"px")&&!b.sap.endsWith(a,"%"))throw new Error("[U4AIDE] property Type Error 'rightPageWidth' : 'px' \uB610\uB294 % \uB2E8\uC704\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")},showMaster:function(){a.prototype.showMaster.apply(this,arguments),this.setMasterPageExpand(!0)},hideMaster:function(){a.prototype.hideMaster.apply(this,arguments),this.setMasterPageExpand(!1)},ontap:function(a){if(!c.system.phone){var d=!0,e=!1,f=!1,g=!1,h=this.getId(),i=b(a.target).closest(".sapMSplitContainerDetail, .sapMSplitContainerMaster, .u4aMSplitAppRightPage"+h),j=b(a.target).closest(".sapMPageHeader"),k=a.srcControl.getMetadata();0<i.length&&i.hasClass("sapMSplitContainerMaster")&&(e=!0),0<i.length&&i.hasClass("sapMSplitContainerDetail")&&(f=!0),0<i.length&&i.hasClass("u4aMSplitAppRightPage"+h)&&(g=!0);var l=!1;f&&0<j.length&&j.hasClass("sapMPageHeader")&&(l=!0,d=!1),l&&"sap.m.Button"!=k._sClassName&&(d=!0),l&&k==sap.ui.core.Icon.getMetadata()&&a.srcControl.getParent()instanceof sap.m.Button&&(d=!1),(e||g)&&(d=!1),l&&k==sap.ui.core.Icon.getMetadata()&&!1==a.srcControl.getParent()instanceof sap.m.Button&&(d=!0),this.getMode()==sap.m.SplitAppMode.StretchCompressMode&&e&&!k.getEvent("press")&&(d=!0),d&&(this.hideMaster(),this.getRightPageAutoHide()&&this.setRightPageExpand(!1))}}});return d});