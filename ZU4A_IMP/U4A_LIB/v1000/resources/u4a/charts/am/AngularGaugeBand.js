﻿sap.ui.define("u4a.charts.am.AngularGaugeBand",["sap/ui/core/Element"],function(e){"use strict";return e.extend("u4a.charts.am.AngularGaugeBand",{metadata:{library:"u4a.charts.am",properties:{startValue:{type:"int",defaultValue:0},endValue:{type:"int",defaultValue:0},bandColor:{type:"sap.ui.core.CSSColor",defaultValue:"#000000"},radius:{type:"sap.ui.core.CSSSize",defaultValue:"100%"},innerRadius:{type:"sap.ui.core.CSSSize",defaultValue:"98%"},gradient:{type:"boolean",defaultValue:!1}},events:{bandClick:{}}},setStartValue:function(e){this.setProperty("startValue",e,!0),void 0!==this._gaugeBand&&this._gaugeBand.setStartValue(e)},setEndValue:function(e){this.setProperty("endValue",e,!0),void 0!==this._gaugeBand&&this._gaugeBand.setEndValue(e)}})});