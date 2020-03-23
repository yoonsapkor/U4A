﻿sap.ui.define("u4a.m.SplitApp",["sap/m/SplitApp"],function(a){"use strict";return a.extend("u4a.m.SplitApp",{metadata:{library:"u4a.m",properties:{masterPageWidth:{type:"sap.ui.core.CSSSize",defaultValue:"330px"},masterPageExpand:{type:"boolean",defaultValue:!1},rightPageWidth:{type:"sap.ui.core.CSSSize",defaultValue:"330px"},rightPageExpand:{type:"boolean",defaultValue:!1}},aggregations:{rightPage:{type:"sap.m.Page",multiple:!1}}},renderer:function(t,e){sap.m.SplitAppRenderer.render(t,e),sap.ui.Device.system.phone||e.getRightPage()&&e._rightPageRender(t,e)},onAfterRendering:function(){if(a.prototype.onAfterRendering.apply(this,arguments),this.setMode(sap.m.SplitAppMode.HideMode),!sap.ui.Device.system.phone){var t=this._oShowMasterBtn;this.getMode()==sap.m.SplitAppMode.HideMode&&(t.detachPress(t.mEventRegistry.press[0].fFunction),t.attachPress(this._attachPressMasterBtnEvent.bind(this))),this.setMasterPageExpand(!1);var e=this.getDomRef();this._oRightPage=document.getElementById(this.getId()+"-RightPage"),null!=this._oRightPage&&(e.appendChild(this._oRightPage),this.setRightPageExpand(this.getRightPageExpand()))}},_attachPressMasterBtnEvent:function(){this._bMasterPageExpand=!this._bMasterPageExpand,this._setMasterPageExpand(this._bMasterPageExpand)},setMasterPageExpand:function(t){this.getMode()==sap.m.SplitAppMode.HideMode&&(this._bMasterPageExpand=t,this.getProperty("masterPageExpand",t,!0),this._setMasterPageExpand(this._bMasterPageExpand))},setMasterPageWidth:function(t){this._pageWidthValidCheck(t),this.setProperty("masterPageWidth",t)},_setMasterPageExpand:function(t){var e=this._oMasterNav.getDomRef();if(null!=e){var a=this.getMasterPageWidth();this._pageWidthValidCheck(a),this._setPageWidthAndExpandAnimation(e,a,t)}},setRightPageWidth:function(t){this._pageWidthValidCheck(t),this.setProperty("rightPageWidth",t)},setRightPageExpand:function(t){if(null!=this._oRightPage){var e=this.getRightPageWidth();this._setPageWidthAndExpandAnimation(this._oRightPage,e,t),this.setProperty("rightPageExpand",t,!0)}},_rightPageRender:function(t,e){var a=e.getRightPageWidth();parseInt(a);t.write("<div"),t.addStyle("height","100%"),t.addStyle("display","inline-block"),t.addStyle("position","absolute"),t.addStyle("z-index: 5"),t.addStyle("top","0"),t.addStyle("box-sizing","border-box"),t.addStyle("width",a),t.addStyle("float","left"),t.addStyle("right","0"),t.addStyle("border-left","#ebebeb"),t.addStyle("background-color","#ffffff"),t.writeAttribute("id",e.getId()+"-RightPage"),t.writeStyles(),t.write(">"),t.renderControl(e.getRightPage()),t.write("</div>")},_setPageWidthAndExpandAnimation:function(t,e,a){if(null!=t&&"boolean"==typeof a){this._pageWidthValidCheck(e);var i=parseInt(e),s=!1;jQuery.sap.endsWith(t.id,"Master")&&(i*=-1,s=!0);var d=i+"px";$(t).css("width",e),a?($(t).css("transform","translate3d(0,0,0)"),$(t).css("transition","all 300ms"),$(t).css("-webkit-transform","translate3d(0,0,0)"),$(t).css("-webkit-transition","all 300ms"),$(t).css("visibility","visible"),$(t).css("box-shadow","rgba(0, 0, 0, 0.15) 0px 0.625rem 1.875rem 0px, rgba(0, 0, 0, 0.15) 0px 0px 0px 1px")):((s&&this.getMode()!=sap.m.SplitAppMode.ShowHideMode||jQuery.sap.endsWith(t.id,"RightPage"))&&($(t).css("transform","translate3d("+d+",0,0)"),$(t).css("-webkit-transform","translate3d("+d+",0,0)")),$(t).css("transition","all 300ms"),$(t).css("-webkit-transition","all 300ms"),$(t).css("box-shadow",""))}},_pageWidthValidCheck:function(t){if(!jQuery.sap.endsWith(t,"px"))throw new Error("[U4AIDE] property Type Error 'rightPageWidth' : 'px' 단위만 입력 가능합니다.")},showMaster:function(){this.getMode()==sap.m.SplitAppMode.HideMode?this.setMasterPageExpand(!0):a.prototype.showMaster.apply(this,arguments)},hideMaster:function(){this.getMode()==sap.m.SplitAppMode.HideMode?this.setMasterPageExpand(!1):a.prototype.hideMaster.apply(this,arguments)}})});