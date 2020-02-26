﻿sap.ui.define("u4a.charts.am.AngularGauge",["sap/ui/core/Control"],function(e){"use strict";return e.extend("u4a.charts.am.AngularGauge",{metadata:{library:"u4a.charts.am",properties:{width:{type:"sap.ui.core.CSSSize",defaultValue:"100%"},height:{type:"sap.ui.core.CSSSize",defaultValue:"100%"},startValue:{type:"int",defaultValue:0},endValue:{type:"int",defaultValue:100},startAngle:{type:"int",defaultValue:-90},endAngle:{type:"int",defaultValue:90},fontSize:{type:"int",defaultValue:10},valueInterval:{type:"int",defaultValue:10},tickThickness:{type:"int",defaultValue:1},outlineThickness:{type:"int",defaultValue:2},unit:{type:"string",defaultValue:null},centerX:{type:"sap.ui.core.CSSSize",defaultValue:"0%"},centerY:{type:"sap.ui.core.CSSSize",defaultValue:"0%"},headerTitle:{type:"string",defaultValue:null},headerTitleSize:{type:"int",defaultValue:20},headerTitleColor:{type:"sap.ui.core.CSSColor",defaultValue:"#000000"},headerTitleBold:{type:"boolean",defaultValue:!0},innerTitle:{type:"string",defaultValue:null},innerTitleSize:{type:"int",defaultValue:20},innerTitleColor:{type:"sap.ui.core.CSSColor",defaultValue:"#000000"},innerTitleBold:{type:"boolean",defaultValue:!0},bottomText:{type:"string",defaultValue:null},bottomTextColor:{type:"sap.ui.core.CSSColor",defaultValue:"#000000"},bottomTextSize:{type:"int",defaultValue:20},bottomTextBold:{type:"boolean",defaultValue:!0},arrowValue:{type:"float",defaultValue:0},arrowRadius:{type:"sap.ui.core.CSSSize",defaultValue:"100%"}},defaultAggregation:"gaugeBand",aggregations:{gaugeBands:{type:"u4a.charts.am.AngularGaugeBand",multiple:!0,singularName:"gaugeBand"}},events:{gaugeClick:{}}},init:function(){try{void 0===AmCharts.AmAngularGauge&&jQuery.u4aJSloadAsync("/zu4a_imp/tools/amchart/v343/amcharts/gauge.js",function(){})}catch(e){jQuery.u4aJSloadAsync("/zu4a_imp/tools/amchart/v343/amcharts/amcharts.js",function(){}),jQuery.u4aJSloadAsync("/zu4a_imp/tools/amchart/v343/amcharts/gauge.js",function(){})}},renderer:function(e,t){e.write("<div"),e.writeControlData(t),e.addStyle("width",t.getWidth()),e.addStyle("height",t.getHeight()),e.writeStyles(),e.write(">"),e.write("</div>")},setArrowValue:function(e){if(this.setProperty("arrowValue",e,!0),void 0!==this._gaugeArrow){var t=this.getStartValue(),a=this.getEndValue();e<t&&(console.warn("Warning! : ArrowValue가 StartValue보다 작습니다. 차트의 표현이 정확하지 않을 수 있습니다."),e=t),a<e&&(console.warn("Warning! : ArrowValue가 EndValue보다 큽니다. 차트의 표현이 정확하지 않을 수 있습니다."),e=a),this._gaugeArrow.setValue(e)}},setBottomText:function(e){this.setProperty("bottomText",e,!0),void 0!==this._gaugeAxis&&(this._gaugeAxis.setBottomText(this.getBottomText()),this._gaugeChart.validateNow())},setInnerTitle:function(e){this.setProperty("innerTitle",e,!0),void 0!==this._gaugeAxis&&this._gaugeAxis.setTopText(e)},onAfterRendering:function(){this._createChart(),this._attachGaugeEvent()},_attachGaugeEvent:function(){var t=this,e=document.getElementById(this.getId());null!=e&&(e.onclick=function(e){t.fireGaugeClick()})},_createChart:function(){var l=this,e=this.getStartValue(),t=this.getEndValue();if(!(t<=e)){var a=this.getValueInterval();if(a<=0&&(console.error("error: property 'valueInterval',  1 이상의 값만 입력할 수 있습니다."),a=10),(e+t)%a==0){var i=new AmCharts.AmAngularGauge,r=new AmCharts.GaugeAxis;this._gaugeChart=i,this._gaugeAxis=r,i.addTitle(this.getHeaderTitle(),this.getHeaderTitleSize(),this.getHeaderTitleColor(),1,this.getHeaderTitleBold()),r.centerX=this.getCenterX(),r.centerY=this.getCenterY(),i.fontSize=this.getFontSize(),r.startAngle=this.getStartAngle(),r.endAngle=this.getEndAngle(),r.unit=this.getUnit(),r.axisThickness=this.getOutlineThickness(),r.radius="80%",r.startValue=e,r.endValue=t,r.valueInterval=a,r.topText=this.getInnerTitle(),r.topTextColor=this.getInnerTitleColor(),r.topTextBold=this.getInnerTitleBold(),r.topTextFontSize=this.getInnerTitleSize(),r.tickThickness=this.getTickThickness(),r.bottomTextYOffset=-20,r.setBottomText(this.getBottomText()),r.bottomTextFontSize=this.getBottomTextSize(),r.bottomTextColor=this.getBottomTextColor(),r.bottomTextBold=this.getBottomTextBold(),r.addListener("clickBand",function(e){event.stopPropagation();for(var t=e.dataItem.properties,a=l.getGaugeBands(),i=a.length,r=0;r<i;r++){var n=a[r];if(n.getId()==t.id){n.fireBandClick();break}}}),this._setGaugeBand(r),i.addAxis(r);var n=new AmCharts.GaugeArrow,u=this.getArrowValue();this._gaugeArrow=n,u<e&&(console.warn("Warning! : ArrowValue가 StartValue보다 작습니다. 차트의 표현이 정확하지 않을 수 있습니다."),u=e),t<u&&(console.warn("Warning! : ArrowValue가 EndValue보다 큽니다. 차트의 표현이 정확하지 않을 수 있습니다."),u=t),n.setValue(u),n.radius=this.getArrowRadius(),i.addArrow(n),i.write(this.getId()),this._gaugeChart.validateNow();var o=this.aCustomStyleClasses;if(null!=o){var s=o.join(" ");jQuery(this.getDomRef()).addClass(s)}}else console.error("error: startValue, EndValue의 합을 Interval값으로 나눈 값이 0이 되어야 합니다.")}},_setGaugeBand:function(e){var t=[],a=this.getGaugeBands(),i=a.length;if(0!=i){for(var r=0;r<i;r++){var n=a[r],l=new AmCharts.GaugeBand,u=n.getStartValue(),o=n.getEndValue(),s=this.getStartValue(),g=this.getEndValue();u<s&&(console.warn("Warning! : Band의 StartValue가 Gauge의 StartValue보다 작습니다. 차트의 표현이 정확하지 않을 수 있습니다."),u=s),g<o&&(console.warn("Warning! : Band의 EndValue가 Gauge의 EndValue보다 큽니다. 차트의 표현이 정확하지 않을 수 있습니다."),o=g),l.properties=n.mProperties,l.properties.id=n.getId(),l.startValue=u,l.endValue=o,l.color=n.getBandColor(),l.innerRadius=n.getInnerRadius(),l.radius=n.getRadius(),1==n.getGradient()&&(l.gradientRatio=[.5,0,-.5]),n._gaugeBand=l,t.push(l),l=null}e.bands=t}}})});