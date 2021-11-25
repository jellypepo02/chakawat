/*! 
    :: mo · js :: motion graphics toolbelt for the web
    Oleg Solomka @LegoMushroom 2015 MIT
    0.288.1 
*/

!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : "object" == typeof exports
    ? (exports.mojs = e())
    : (t.mojs = e());
})(this, function () {
  return (function (t) {
    function e(i) {
      if (r[i]) return r[i].exports;
      var s = (r[i] = { exports: {}, id: i, loaded: !1 });
      return t[i].call(s.exports, s, s.exports, e), (s.loaded = !0), s.exports;
    }
    var r = {};
    return (e.m = t), (e.c = r), (e.p = "build/"), e(0);
  })([
    function (t, e, r) {
      t.exports = r(53);
    },
    function (t, e, r) {
      r(59), r(58), (t.exports = r(61)("iterator"));
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(28),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(24),
        u = i(p),
        l = r(25),
        h = i(l),
        c = r(16),
        f = i(c),
        d = r(12),
        _ = (i(d), r(13)),
        y = i(_),
        m = r(11),
        g = (i(m), r(8)),
        v = (i(g), r(9)),
        w = (i(v), r(19)),
        b = (r(26), r(20)),
        S = (function (t) {
          function e() {
            return (
              a["default"](this, e),
              u["default"](this, t.apply(this, arguments))
            );
          }
          return (
            h["default"](e, t),
            (e.prototype._declareDefaults = function () {
              this._defaults = {
                parent: document.body,
                className: "",
                shape: "circle",
                stroke: "transparent",
                strokeOpacity: 1,
                strokeLinecap: "",
                strokeWidth: 2,
                strokeDasharray: 0,
                strokeDashoffset: 0,
                fill: "deeppink",
                fillOpacity: 1,
                isSoftHide: !0,
                isForce3d: !1,
                left: "50%",
                top: "50%",
                x: 0,
                y: 0,
                angle: 0,
                scale: 1,
                scaleX: null,
                scaleY: null,
                origin: "50% 50%",
                opacity: 1,
                rx: 0,
                ry: 0,
                points: 3,
                radius: 50,
                radiusX: null,
                radiusY: null,
                isShowStart: !1,
                isShowEnd: !0,
                isRefreshState: !0,
                duration: 400,
                width: null,
                height: null,
                isWithShape: !0,
                callbacksContext: this,
              };
            }),
            (e.prototype.tune = function (e) {
              return (
                t.prototype.tune.call(this, e), this._getMaxSizeInChain(), this
              );
            }),
            (e.prototype.then = function (e) {
              return (
                t.prototype.then.call(this, e), this._getMaxSizeInChain(), this
              );
            }),
            (e.prototype._vars = function () {
              return (
                t.prototype._vars.call(this),
                (this._lastSet = {}),
                (this._prevChainModule = this._o.prevChainModule),
                (this.isForeign = !!this._o.ctx),
                (this.isForeignBit = !!this._o.shape)
              );
            }),
            (e.prototype._render = function () {
              return (
                this._isRendered || this._isChained
                  ? this._isChained &&
                    ((this.el = this._masterModule.el),
                    (this.shapeModule = this._masterModule.shapeModule))
                  : ((this.el = document.createElement("div")),
                    this.el.setAttribute("data-name", "mojs-shape"),
                    this.el.setAttribute("class", this._props.className),
                    this._createShape(),
                    this._props.parent.appendChild(this.el),
                    this._setElStyles(),
                    this._setProgress(0, 0),
                    this._props.isShowStart ? this._show() : this._hide(),
                    (this._isRendered = !0)),
                this
              );
            }),
            (e.prototype._setElStyles = function () {
              if (this.el) {
                var t = this._props,
                  e = this.el.style,
                  r = t.shapeWidth,
                  i = t.shapeHeight;
                if (
                  ((e.position = "absolute"),
                  this._setElSizeStyles(r, i),
                  t.isForce3d)
                ) {
                  var s = "backface-visibility";
                  (e["" + s] = "hidden"), (e["" + w.prefix.css + s] = "hidden");
                }
              }
            }),
            (e.prototype._setElSizeStyles = function (t, e) {
              var r = this.el.style;
              (r.width = t + "px"),
                (r.height = e + "px"),
                (r["margin-left"] = -t / 2 + "px"),
                (r["margin-top"] = -e / 2 + "px");
            }),
            (e.prototype._draw = function () {
              if (this.shapeModule) {
                var t = this._props,
                  e = this.shapeModule._props;
                (e.rx = t.rx),
                  (e.ry = t.ry),
                  (e.stroke = t.stroke),
                  (e["stroke-width"] = t.strokeWidth),
                  (e["stroke-opacity"] = t.strokeOpacity),
                  (e["stroke-dasharray"] = t.strokeDasharray),
                  (e["stroke-dashoffset"] = t.strokeDashoffset),
                  (e["stroke-linecap"] = t.strokeLinecap),
                  (e.fill = t.fill),
                  (e["fill-opacity"] = t.fillOpacity),
                  (e.radius = t.radius),
                  (e.radiusX = t.radiusX),
                  (e.radiusY = t.radiusY),
                  (e.points = t.points),
                  this.shapeModule._draw(),
                  this._drawEl();
              }
            }),
            (e.prototype._drawEl = function () {
              if (null == this.el) return !0;
              var t = this._props,
                e = this.el.style;
              if (
                (this._isPropChanged("opacity") && (e.opacity = t.opacity),
                !this.isForeign)
              ) {
                this._isPropChanged("left") && (e.left = t.left),
                  this._isPropChanged("top") && (e.top = t.top);
                var r = this._isPropChanged("x"),
                  i = this._isPropChanged("y"),
                  s = r || i,
                  n = this._isPropChanged("scaleX"),
                  o = this._isPropChanged("scaleY"),
                  a = this._isPropChanged("scale"),
                  a = a || n || o,
                  p = this._isPropChanged("angle");
                if (s || a || p) {
                  var u = this._fillTransform();
                  (e[w.prefix.css + "transform"] = u), (e.transform = u);
                }
                if (this._isPropChanged("origin") || this._deltas.origin) {
                  var l = this._fillOrigin();
                  (e[w.prefix.css + "transform-origin"] = l),
                    (e["transform-origin"] = l);
                }
              }
            }),
            (e.prototype._isPropChanged = function (t) {
              return (
                null == this._lastSet[t] && (this._lastSet[t] = {}),
                this._lastSet[t].value !== this._props[t]
                  ? ((this._lastSet[t].value = this._props[t]), !0)
                  : !1
              );
            }),
            (e.prototype._tuneNewOptions = function (e) {
              return (
                t.prototype._tuneNewOptions.call(this, e),
                null != e && n["default"](e).length
                  ? void this._setElStyles()
                  : 1
              );
            }),
            (e.prototype._getMaxRadius = function (t) {
              var e;
              return (
                (e = this._getRadiusSize("radius")), this._getRadiusSize(t, e)
              );
            }),
            (e.prototype._increaseSizeWithEasing = function () {
              var t = this._props,
                e = this._o.easing,
                r = e && "string" == typeof e;
              switch (r && e.toLowerCase()) {
                case "elastic.out":
                case "elastic.inout":
                  t.size *= 1.25;
                  break;
                case "back.out":
                case "back.inout":
                  t.size *= 1.1;
              }
            }),
            (e.prototype._getRadiusSize = function (t) {
              var e =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? 0
                    : arguments[1],
                r = this._deltas[t];
              return null != r
                ? Math.max(Math.abs(r.end), Math.abs(r.start))
                : null != this._props[t]
                ? parseFloat(this._props[t])
                : e;
            }),
            (e.prototype._getShapeSize = function () {
              var t = this._props,
                e = this._getMaxStroke();
              (t.shapeWidth =
                null != t.width
                  ? t.width
                  : 2 * this._getMaxRadius("radiusX") + e),
                (t.shapeHeight =
                  null != t.height
                    ? t.height
                    : 2 * this._getMaxRadius("radiusY") + e);
            }),
            (e.prototype._createShape = function () {
              if ((this._getShapeSize(), this._props.isWithShape)) {
                var t = this._props,
                  e = b.getShape(this._props.shape);
                this.shapeModule = new e({
                  width: t.shapeWidth,
                  height: t.shapeHeight,
                  parent: this.el,
                });
              }
            }),
            (e.prototype._getMaxSizeInChain = function () {
              for (
                var t = (this._props, 0), e = 0, r = 0;
                r < this._modules.length;
                r++
              )
                this._modules[r]._getShapeSize(),
                  (t = Math.max(t, this._modules[r]._props.shapeWidth)),
                  (e = Math.max(e, this._modules[r]._props.shapeHeight));
              this.shapeModule && this.shapeModule._setSize(t, e),
                this._setElSizeStyles(t, e);
            }),
            (e.prototype._getMaxStroke = function () {
              var t = this._props,
                e = this._deltas.strokeWidth;
              return null != e ? Math.max(e.start, e.end) : t.strokeWidth;
            }),
            (e.prototype._setProgress = function (t, e) {
              f["default"].prototype._setProgress.call(this, t, e),
                this._draw(t);
            }),
            (e.prototype._applyCallbackOverrides = function (t) {
              var e = this,
                r = this._props;
              t.callbackOverrides = {
                onUpdate: function (t, r) {
                  return e._setProgress(t, r);
                },
                onStart: function (t) {
                  e._isChained || (t ? e._show() : r.isShowStart || e._hide());
                },
                onComplete: function (t) {
                  e._isLastInChain() &&
                    (t ? r.isShowEnd || e._hide() : e._show());
                },
                onRefresh: function (t) {
                  r.isRefreshState && t && e._refreshBefore();
                },
              };
            }),
            (e.prototype._transformTweenOptions = function () {
              this._applyCallbackOverrides(this._o);
            }),
            (e.prototype._fillTransform = function () {
              var t = this._props,
                e = null != t.scaleX ? t.scaleX : t.scale,
                r = null != t.scaleY ? t.scaleY : t.scale,
                i = e + ", " + r;
              return (
                "translate(" +
                t.x +
                ", " +
                t.y +
                ") rotate(" +
                t.angle +
                "deg) scale(" +
                i +
                ")"
              );
            }),
            (e.prototype._fillOrigin = function () {
              for (var t = this._props, e = "", r = 0; r < t.origin.length; r++)
                e += t.origin[r].string + " ";
              return e;
            }),
            (e.prototype._refreshBefore = function () {
              this._setProgress(this.tween._props.easing(0), 0),
                this._props.isShowStart ? this._show() : this._hide();
            }),
            (e.prototype._showByTransform = function () {
              (this._lastSet.scale = null), this._drawEl();
            }),
            e
          );
        })(y["default"]);
      e["default"] = S;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(23),
        n = i(s),
        o = r(24),
        a = i(o),
        p = r(25),
        u = i(p),
        l = r(2),
        h = i(l),
        c = r(19),
        f = i(c),
        d = (function (t) {
          function e() {
            return (
              n["default"](this, e),
              a["default"](this, t.apply(this, arguments))
            );
          }
          return (
            u["default"](e, t),
            (e.prototype._declareDefaults = function () {
              t.prototype._declareDefaults.call(this),
                (this._defaults.isSwirl = !0),
                (this._defaults.swirlSize = 10),
                (this._defaults.swirlFrequency = 3),
                (this._defaults.pathScale = 1),
                (this._defaults.degreeShift = 0),
                (this._defaults.radius = 5),
                (this._defaults.x = 0),
                (this._defaults.y = 0),
                (this._defaults.scale = { 1: 0 }),
                (this._defaults.direction = 1);
            }),
            (e.prototype._extendDefaults = function () {
              t.prototype._extendDefaults.call(this), this._calcPosData();
            }),
            (e.prototype._tuneNewOptions = function (e) {
              null != e &&
                (t.prototype._tuneNewOptions.call(this, e),
                (null != e.x || null != e.y) && this._calcPosData());
            }),
            (e.prototype._calcPosData = function () {
              var t = this._getPosValue("x"),
                e = this._getPosValue("y"),
                r =
                  90 +
                  Math.atan(e.delta / t.delta || 0) * f["default"].RAD_TO_DEG;
              this._posData = {
                radius: Math.sqrt(t.delta * t.delta + e.delta * e.delta),
                angle: t.delta < 0 ? r + 180 : r,
                x: t,
                y: e,
              };
            }),
            (e.prototype._getPosValue = function (t) {
              var e = this._deltas[t];
              if (e)
                return (
                  delete this._deltas[t],
                  {
                    start: e.start.value,
                    end: e.end.value,
                    delta: e.delta,
                    units: e.end.unit,
                  }
                );
              var r = f["default"].parseUnit(this._props[t]);
              return { start: r.value, end: r.value, delta: 0, units: r.unit };
            }),
            (e.prototype._setProgress = function (t, e) {
              (this._progress = t),
                this._calcCurrentProps(t, e),
                this._calcSwirlXY(t),
                this._draw(t);
            }),
            (e.prototype._calcSwirlXY = function (t) {
              var e = this._props,
                r = this._posData.angle + e.degreeShift,
                i = f["default"].getRadialPoint({
                  angle: e.isSwirl ? r + this._getSwirl(t) : r,
                  radius: t * this._posData.radius * e.pathScale,
                  center: {
                    x: this._posData.x.start,
                    y: this._posData.y.start,
                  },
                }),
                s = i.x,
                n = i.y,
                o = 1e-6;
              s > 0 && o > s && (s = o),
                n > 0 && o > n && (n = o),
                0 > s && s > -o && (s = -o),
                0 > n && n > -o && (n = -o),
                (e.x = this._o.ctx ? s : "" + s + this._posData.x.units),
                (e.y = this._o.ctx ? n : "" + n + this._posData.y.units);
            }),
            (e.prototype._getSwirl = function (t) {
              var e = this._props;
              return e.direction * e.swirlSize * Math.sin(e.swirlFrequency * t);
            }),
            (e.prototype._draw = function () {
              var t = this._props.isWithShape ? "_draw" : "_drawEl";
              h["default"].prototype[t].call(this);
            }),
            e
          );
        })(h["default"]);
      e["default"] = d;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(28),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(24),
        u = i(p),
        l = r(25),
        h = i(l),
        c = r(9),
        f = i(c),
        d = r(3),
        _ = i(d),
        y = r(13),
        m = i(y),
        g = r(19),
        v = i(g),
        w = (function (t) {
          function e() {
            return (
              a["default"](this, e),
              u["default"](this, t.apply(this, arguments))
            );
          }
          return (
            h["default"](e, t),
            (e.prototype._declareDefaults = function () {
              this._defaults = {
                count: 5,
                degree: 360,
                radius: { 0: 50 },
                radiusX: null,
                radiusY: null,
                width: 0,
                height: 0,
              };
            }),
            (e.prototype.then = function (t) {
              this._removeTweenProperties(t);
              var e = this._masterThen(t),
                r = this._childThen(t);
              return (
                this._setSwirlDuration(e, this._calcPackTime(r)),
                this.timeline._recalcTotalDuration(),
                this
              );
            }),
            (e.prototype.tune = function (t) {
              return null == t
                ? this
                : (this._saveTimelineOptions(t),
                  this.timeline._setProp(this._timelineOptions),
                  this._removeTweenProperties(t),
                  this._tuneNewOptions(t),
                  this.masterSwirl.tune(t),
                  this._tuneSwirls(t),
                  this._recalcModulesTime(),
                  this);
            }),
            (e.prototype._extendDefaults = function () {
              this._removeTweenProperties(this._o),
                t.prototype._extendDefaults.call(this);
            }),
            (e.prototype._removeTweenProperties = function (t) {
              for (var e in v["default"].tweenOptionMap)
                null == this._defaults[e] && delete t[e];
            }),
            (e.prototype._recalcModulesTime = function () {
              for (
                var t = this.masterSwirl._modules,
                  e = this._swirls,
                  r = 0,
                  i = 0;
                i < t.length;
                i++
              ) {
                var s = t[i].tween,
                  n = this._calcPackTime(e[i]);
                s._setProp({ duration: n, shiftTime: r }), (r += n);
              }
              this.timeline._recalcTotalDuration();
            }),
            (e.prototype._tuneSwirls = function (t) {
              for (var e = this._swirls[0], r = 0; r < e.length; r++) {
                var i = e[r],
                  s = this._getChildOption(t || {}, r),
                  n = null != s.degreeShift;
                n || (s.degreeShift = this._swirls[0][r]._props.degreeShift),
                  this._addBurstProperties(s, r),
                  n || delete s.degreeShift,
                  i.tune(s),
                  this._refreshBurstOptions(i._modules, r);
              }
            }),
            (e.prototype._refreshBurstOptions = function (t, e) {
              for (var r = 1; r < t.length; r++) {
                var i = t[r],
                  s = {};
                this._addBurstProperties(s, e, r), i._tuneNewOptions(s);
              }
            }),
            (e.prototype._masterThen = function (t) {
              this.masterSwirl.then(t);
              var e = v["default"].getLastItem(this.masterSwirl._modules);
              return this._masterSwirls.push(e), e;
            }),
            (e.prototype._childThen = function (t) {
              for (var e = this._swirls[0], r = [], i = 0; i < e.length; i++) {
                {
                  var s = this._getChildOption(t, i),
                    n = e[i];
                  v["default"].getLastItem(n._modules);
                }
                (s.parent = this.el),
                  this._addBurstProperties(s, i, this._masterSwirls.length - 1),
                  n.then(s),
                  r.push(v["default"].getLastItem(n._modules));
              }
              return (this._swirls[this._masterSwirls.length - 1] = r), r;
            }),
            (e.prototype._vars = function () {
              t.prototype._vars.call(this),
                (this._bufferTimeline = new f["default"]());
            }),
            (e.prototype._render = function () {
              (this._o.isWithShape = !1),
                (this._o.isSwirl = this._props.isSwirl),
                (this._o.callbacksContext = this),
                this._saveTimelineOptions(this._o),
                (this.masterSwirl = new S(this._o)),
                (this._masterSwirls = [this.masterSwirl]),
                (this.el = this.masterSwirl.el),
                this._renderSwirls();
            }),
            (e.prototype._renderSwirls = function () {
              for (var t = this._props, e = [], r = 0; r < t.count; r++) {
                var i = this._getChildOption(this._o, r);
                e.push(new b(this._addOptionalProps(i, r)));
              }
              (this._swirls = { 0: e }),
                this._setSwirlDuration(this.masterSwirl, this._calcPackTime(e));
            }),
            (e.prototype._saveTimelineOptions = function (t) {
              (this._timelineOptions = t.timeline), delete t.timeline;
            }),
            (e.prototype._calcPackTime = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = t[r].tween,
                  s = i._props;
                e = Math.max(s.repeatTime / s.speed, e);
              }
              return e;
            }),
            (e.prototype._setSwirlDuration = function (t, e) {
              t.tween._setProp("duration", e);
              var r = t.timeline && t.timeline._recalcTotalDuration;
              r && t.timeline._recalcTotalDuration();
            }),
            (e.prototype._getChildOption = function (t, e) {
              var r = {};
              for (var i in t.children)
                r[i] = this._getPropByMod(i, e, t.children);
              return r;
            }),
            (e.prototype._getPropByMod = function (t, e) {
              var r =
                  arguments.length <= 2 || void 0 === arguments[2]
                    ? {}
                    : arguments[2],
                i = r[t];
              return v["default"].isArray(i) ? i[e % i.length] : i;
            }),
            (e.prototype._addOptionalProps = function (t, e) {
              return (
                (t.index = e),
                (t.parent = this.masterSwirl.el),
                this._addBurstProperties(t, e),
                t
              );
            }),
            (e.prototype._addBurstProperties = function (t, e, r) {
              var i = this._index;
              this._index = e;
              var s = this._parseProperty("degreeShift", t.degreeShift || 0);
              this._index = i;
              var n = this._props,
                o = n.degree % 360 === 0 ? n.count : n.count - 1 || 1,
                a = n.degree / o,
                p = this._getSidePoint("start", e * a + s, r),
                u = this._getSidePoint("end", e * a + s, r);
              (t.x = this._getDeltaFromPoints("x", p, u)),
                (t.y = this._getDeltaFromPoints("y", p, u)),
                (t.angle = this._getBitAngle(t.angle || 0, s, e));
            }),
            (e.prototype._getBitAngle = function () {
              var t =
                  arguments.length <= 0 || void 0 === arguments[0]
                    ? 0
                    : arguments[0],
                e =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? 0
                    : arguments[1],
                r = arguments[2],
                i = this._props,
                s = i.degree % 360 === 0 ? i.count : i.count - 1 || 1,
                o = i.degree / s,
                a = r * o + 90;
              if (((a += e), this._isDelta(t))) {
                var p = {},
                  u = n["default"](t),
                  l = u[0],
                  h = t[l];
                (l = v["default"].parseStringOption(l, r)),
                  (h = v["default"].parseStringOption(h, r)),
                  (p[parseFloat(l) + a] = parseFloat(h) + a),
                  (t = p);
              } else t += a;
              return t;
            }),
            (e.prototype._getSidePoint = function (t, e, r) {
              var i = (this._props, this._getSideRadius(t, r));
              return v["default"].getRadialPoint({
                radius: i.radius,
                radiusX: i.radiusX,
                radiusY: i.radiusY,
                angle: e,
                center: { x: 0, y: 0 },
              });
            }),
            (e.prototype._getSideRadius = function (t, e) {
              return {
                radius: this._getRadiusByKey("radius", t, e),
                radiusX: this._getRadiusByKey("radiusX", t, e),
                radiusY: this._getRadiusByKey("radiusY", t, e),
              };
            }),
            (e.prototype._getRadiusByKey = function (t, e) {
              var r =
                  arguments.length <= 2 || void 0 === arguments[2]
                    ? 0
                    : arguments[2],
                i = this._masterSwirls[r],
                s = i._deltas,
                n = i._props;
              return null != s[t] ? s[t][e] : null != n[t] ? n[t] : void 0;
            }),
            (e.prototype._getDeltaFromPoints = function (t, e, r) {
              var i = {};
              return e[t] === r[t] ? (i = e[t]) : (i[e[t]] = r[t]), i;
            }),
            (e.prototype._makeTimeline = function () {
              (this._o.timeline = this._timelineOptions),
                t.prototype._makeTimeline.call(this),
                this.timeline.add(this.masterSwirl, this._swirls[0]);
            }),
            (e.prototype._makeTween = function () {}),
            (e.prototype._hide = function () {}),
            (e.prototype._show = function () {}),
            e
          );
        })(m["default"]),
        b = (function (t) {
          function e() {
            return (
              a["default"](this, e),
              u["default"](this, t.apply(this, arguments))
            );
          }
          return (
            h["default"](e, t),
            (e.prototype._declareDefaults = function () {
              t.prototype._declareDefaults.call(this),
                (this._defaults.isSwirl = !1),
                (this._o.duration =
                  null != this._o.duration ? this._o.duration : 700);
            }),
            (e.prototype._calcSwirlXY = function (e) {
              var r = this._props.degreeShift;
              (this._props.degreeShift = 0),
                t.prototype._calcSwirlXY.call(this, e),
                (this._props.degreeShift = r);
            }),
            e
          );
        })(_["default"]),
        S = (function (t) {
          function e() {
            return (
              a["default"](this, e),
              u["default"](this, t.apply(this, arguments))
            );
          }
          return (
            h["default"](e, t),
            (e.prototype._declareDefaults = function () {
              t.prototype._declareDefaults.call(this),
                (this._defaults.scale = 1),
                (this._defaults.width = 0),
                (this._defaults.height = 0),
                (this._defaults.radius = { 25: 75 });
            }),
            e
          );
        })(b);
      (w.ChildSwirl = b), (w.MainSwirl = S), (e["default"] = w);
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(27),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(24),
        u = i(p),
        l = r(25),
        h = i(l),
        c = r(28),
        f = i(c),
        d = r(12),
        _ = i(d),
        y = r(8),
        m = i(y),
        g = r(15),
        v = i(g),
        w = r(19),
        b = {};
      m["default"].prototype._declareDefaults.call(b);
      for (var S = f["default"](b._defaults), P = 0; P < S.length; P++)
        b._defaults[S[P]] = 1;
      b._defaults.timeline = 1;
      var x = b._defaults,
        T = (function (t) {
          function e() {
            return (
              a["default"](this, e),
              u["default"](this, t.apply(this, arguments))
            );
          }
          return (
            h["default"](e, t),
            (e.prototype._declareDefaults = function () {
              (this._defaults = {
                x: 0,
                y: 0,
                z: 0,
                skewX: 0,
                skewY: 0,
                angleX: 0,
                angleY: 0,
                angleZ: 0,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                isSoftHide: !0,
                isShowStart: !0,
                isShowEnd: !0,
                isForce3d: !1,
                isRefreshState: !0,
              }),
                (this._drawExclude = { el: 1 }),
                (this._3dProperties = ["angleX", "angleY", "z"]),
                (this._arrayPropertyMap = {
                  transformOrigin: 1,
                  backgroundPosition: 1,
                }),
                (this._numberPropertyMap = {
                  opacity: 1,
                  scale: 1,
                  scaleX: 1,
                  scaleY: 1,
                  angleX: 1,
                  angleY: 1,
                  angleZ: 1,
                  skewX: 1,
                  skewY: 1,
                }),
                (this._prefixPropertyMap = {
                  transform: 1,
                  transformOrigin: 1,
                }),
                (this._prefix = w.prefix.css);
            }),
            (e.prototype.then = function (e) {
              if (null == e || !f["default"](e).length) return 1;
              var r = w.getLastItem(this._modules);
              return (
                r.deltas.refresh(!1),
                (this._history[this._history.length - 1] = r._o),
                t.prototype.then.call(this, e),
                r.deltas.restore(),
                this
              );
            }),
            (e.prototype._checkStartValue = function (t, e) {
              return null == e
                ? null != this._defaults[t]
                  ? this._defaults[t]
                  : null != this._customProps[t]
                  ? this._customProps[t]
                  : null != w.defaultStyles[t]
                  ? w.defaultStyles[t]
                  : 0
                : e;
            }),
            (e.prototype._draw = function () {
              for (
                var t = this._props, e = 0;
                e < this._drawProps.length;
                e++
              ) {
                var r = this._drawProps[e];
                this._setStyle(r, t[r]);
              }
              this._drawTransform(),
                this._customDraw &&
                  this._customDraw(this._props.el, this._props);
            }),
            (e.prototype._drawTransform = function () {
              var t = this._props,
                e = this._is3d
                  ? "translate3d(" +
                    t.x +
                    ", " +
                    t.y +
                    ", " +
                    t.z +
                    ")\n          rotateX(" +
                    t.angleX +
                    "deg)\n          rotateY(" +
                    t.angleY +
                    "deg)\n          rotateZ(" +
                    t.angleZ +
                    "deg)\n          skew(" +
                    t.skewX +
                    "deg, " +
                    t.skewY +
                    "deg)\n          scale(" +
                    t.scaleX +
                    ", " +
                    t.scaleY +
                    ")"
                  : "translate(" +
                    t.x +
                    ", " +
                    t.y +
                    ")\n          rotate(" +
                    t.angleZ +
                    "deg)\n          skew(" +
                    t.skewX +
                    "deg, " +
                    t.skewY +
                    "deg)\n          scale(" +
                    t.scaleX +
                    ", " +
                    t.scaleY +
                    ")";
              this._setStyle("transform", e);
            }),
            (e.prototype._render = function () {
              if (!this._o.prevChainModule) {
                for (
                  var t = this._props, e = 0;
                  e < this._renderProps.length;
                  e++
                ) {
                  var r = this._renderProps[e],
                    i = t[r];
                  (i = "number" == typeof i ? i + "px" : i),
                    this._setStyle(r, i);
                }
                this._draw(), t.isShowStart || this._hide();
              }
            }),
            (e.prototype._setStyle = function (t, e) {
              if (this._state[t] !== e) {
                var r = this._props.el.style;
                (r[t] = e),
                  this._prefixPropertyMap[t] && (r["" + this._prefix + t] = e),
                  (this._state[t] = e);
              }
            }),
            (e.prototype._extendDefaults = function () {
              (this._props = this._o.props || {}),
                (this._renderProps = []),
                (this._drawProps = []),
                this._saveCustomProperties(this._o);
              var t = n["default"]({}, this._o);
              t = this._addDefaults(t);
              for (var e = f["default"](t), r = 0; r < e.length; r++) {
                var i = e[r],
                  s =
                    !this._drawExclude[i] && null == this._defaults[i] && !x[i],
                  o = this._customProps[i];
                w.isDelta(t[i]) || x[i]
                  ? s && !o && this._drawProps.push(i)
                  : (this._parseOption(i, t[i]),
                    "el" === i &&
                      ((this._props.el = w.parseEl(t.el)),
                      (this.el = this._props.el)),
                    s && !o && this._renderProps.push(i));
              }
              this._createDeltas(t);
            }),
            (e.prototype._saveCustomProperties = function () {
              var t =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? {}
                  : arguments[0];
              (this._customProps = t.customProperties || {}),
                (this._customProps = n["default"]({}, this._customProps)),
                (this._customDraw = this._customProps.draw),
                delete this._customProps.draw,
                delete t.customProperties,
                this._copyDefaultCustomProps();
            }),
            (e.prototype._copyDefaultCustomProps = function () {
              for (var t in this._customProps)
                null == this._o[t] && (this._o[t] = this._customProps[t]);
            }),
            (e.prototype._resetMergedFlags = function (e) {
              return (
                t.prototype._resetMergedFlags.call(this, e),
                (e.props = this._props),
                (e.customProperties = this._customProps),
                e
              );
            }),
            (e.prototype._parseOption = function (e, r) {
              t.prototype._parseOption.call(this, e, r);
              var i = this._props[e];
              w.isArray(i) && (this._props[e] = this._arrToString(i));
            }),
            (e.prototype._arrToString = function (t) {
              for (var e = "", r = 0; r < t.length; r++) e += t[r].string + " ";
              return e;
            }),
            (e.prototype._addDefaults = function (t) {
              this._is3d = !1;
              for (var e in this._defaults)
                null == t[e]
                  ? (t[e] =
                      "scaleX" === e || "scaleY" === e
                        ? null != t.scale
                          ? t.scale
                          : this._defaults.scale
                        : this._defaults[e])
                  : -1 !== this._3dProperties.indexOf(e) && (this._is3d = !0);
              return this._o.isForce3d && (this._is3d = !0), t;
            }),
            (e.prototype._vars = function () {
              this.deltas.refresh(!1),
                t.prototype._vars.call(this),
                (this._state = {}),
                this.deltas.restore(!1);
            }),
            (e.prototype._createDeltas = function (t) {
              (this.deltas = new v["default"]({
                options: t,
                props: this._props,
                arrayPropertyMap: this._arrayPropertyMap,
                numberPropertyMap: this._numberPropertyMap,
                customProps: this._customProps,
                callbacksContext: t.callbacksContext || this,
                isChained: !!this._o.prevChainModule,
              })),
                this._o.prevChainModule &&
                  (this.timeline = this.deltas.timeline);
            }),
            (e.prototype._makeTween = function () {}),
            (e.prototype._makeTimeline = function () {
              this._o.prevChainModule ||
                ((this._o.timeline = this._o.timeline || {}),
                this._addCallbackOverrides(this._o.timeline),
                t.prototype._makeTimeline.call(this),
                this.timeline.add(this.deltas));
            }),
            (e.prototype._addCallbackOverrides = function (t) {
              var e = this,
                r = this._props;
              t.callbackOverrides = {
                onUpdate: this._draw,
                onRefresh: this._props.isRefreshState ? this._draw : void 0,
                onStart: function (t) {
                  e._isChained ||
                    (t && !r.isShowStart
                      ? e._show()
                      : r.isShowStart || e._hide());
                },
                onComplete: function (t) {
                  e._isChained ||
                    (t ? r.isShowEnd || e._hide() : r.isShowEnd || e._show());
                },
              };
            }),
            (e.prototype._showByTransform = function () {
              this._drawTransform();
            }),
            (e.prototype._mergeThenProperty = function (t, e, r) {
              var i = "boolean" == typeof r;
              if (w.isTweenProp(t) || this._nonMergeProps[t] || i) return r;
              var s = {};
              if (w.isObject(r) && null != r.to) {
                for (var o in r)
                  (x[o] || "curve" === o) && ((s[o] = r[o]), delete r[o]);
                r = r.to;
              }
              if (this._isDelta(r)) {
                var a = {};
                for (var p in r)
                  (x[p] || "curve" === p) && ((a[p] = r[p]), delete r[p]);
                var u = this._parseDeltaValues(t, r);
                return n["default"]({}, u, a);
              }
              var l = this._parsePreArrayProperty(t, r);
              if (this._isDelta(e)) {
                var h;
                return n["default"](
                  ((h = {}), (h[w.getDeltaEnd(e)] = l), h),
                  s
                );
              }
              var c;
              return n["default"](((c = {}), (c[e] = l), c), s);
            }),
            e
          );
        })(_["default"]);
      e["default"] = T;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var s = r(28),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(24),
        u = i(p),
        l = r(25),
        h = i(l),
        c = r(19),
        f = i(c),
        d = r(9),
        _ = i(d),
        y = r(13),
        m = i(y),
        g = (function (t) {
          function e(r, i) {
            var s;
            a["default"](this, e);
            var n = u["default"](this, t.call(this));
            return (s = n._init(r, i)), u["default"](n, s);
          }
          return (
            h["default"](e, t),
            (e.prototype.then = function (t) {
              if (null == t) return this;
              for (var e = 0; e < this._modules.length; e++)
                this._modules[e].then(this._getOptionByIndex(e, t));
              return this.timeline._recalcTotalDuration(), this;
            }),
            (e.prototype.tune = function (t) {
              if (null == t) return this;
              for (var e = 0; e < this._modules.length; e++)
                this._modules[e].tune(this._getOptionByIndex(e, t));
              return this.timeline._recalcTotalDuration(), this;
            }),
            (e.prototype.generate = function () {
              for (var t = 0; t < this._modules.length; t++)
                this._modules[t].generate();
              return this.timeline._recalcTotalDuration(), this;
            }),
            (e.prototype._getOptionByMod = function (t, e, r) {
              var i = r[t];
              (i + "" == "[object NodeList]" ||
                i + "" == "[object HTMLCollection]") &&
                (i = Array.prototype.slice.call(i, 0));
              var s = f["default"].isArray(i) ? i[e % i.length] : i;
              return f["default"].parseIfStagger(s, e);
            }),
            (e.prototype._getOptionByIndex = function (t, e) {
              var r = this,
                i = {};
              return (
                n["default"](e).forEach(function (s) {
                  return (i[s] = r._getOptionByMod(s, t, e));
                }),
                i
              );
            }),
            (e.prototype._getChildQuantity = function (t, e) {
              if ("number" == typeof t) return t;
              var r = e[t];
              return f["default"].isArray(r)
                ? r.length
                : r + "" == "[object NodeList]"
                ? r.length
                : r + "" == "[object HTMLCollection]"
                ? Array.prototype.slice.call(r, 0).length
                : r instanceof HTMLElement
                ? 1
                : "string" == typeof r
                ? 1
                : void 0;
            }),
            (e.prototype._init = function (t, e) {
              var r = this._getChildQuantity(t.quantifier || "el", t);
              this._createTimeline(t), (this._modules = []);
              for (var i = 0; r > i; i++) {
                var s = this._getOptionByIndex(i, t);
                (s.isRunLess = !0), (s.index = i);
                var n = new e(s);
                this._modules.push(n), this.timeline.add(n);
              }
              return this;
            }),
            (e.prototype._createTimeline = function () {
              var t =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? {}
                  : arguments[0];
              this.timeline = new _["default"](t.timeline);
            }),
            (e.prototype._makeTween = function () {}),
            (e.prototype._makeTimeline = function () {}),
            e
          );
        })(m["default"]);
      t.exports = function (t) {
        return function (e) {
          return new g(e, t);
        };
      };
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(23),
        n = i(s),
        o = r(19),
        a = i(o),
        p = r(8),
        u = i(p),
        l = r(9),
        h = i(l),
        c = (function () {
          function t() {
            var e =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0];
            return (
              n["default"](this, t),
              (this.o = e),
              this.o.el
                ? (this._vars(),
                  this._declareDefaults(),
                  this._extendDefaults(),
                  this._parseFrames(),
                  this._frames.length <= 2 &&
                    a["default"].warn(
                      "Spriter: only " + this._frames.length + " frames found"
                    ),
                  this._frames.length < 1 &&
                    a["default"].error(
                      "Spriter: there is no frames to animate, aborting"
                    ),
                  this._createTween(),
                  this)
                : a["default"].error('No "el" option specified, aborting')
            );
          }
          return (
            (t.prototype._declareDefaults = function () {
              this._defaults = {
                duration: 500,
                delay: 0,
                easing: "linear.none",
                repeat: 0,
                yoyo: !1,
                isRunLess: !1,
                isShowEnd: !1,
                onStart: null,
                onUpdate: null,
                onComplete: null,
              };
            }),
            (t.prototype._vars = function () {
              (this._props = a["default"].cloneObj(this.o)),
                (this.el = this.o.el),
                (this._frames = []);
            }),
            (t.prototype.run = function (t) {
              return this.timeline.play();
            }),
            (t.prototype._extendDefaults = function () {
              return a["default"].extend(this._props, this._defaults);
            }),
            (t.prototype._parseFrames = function () {
              (this._frames = Array.prototype.slice.call(this.el.children, 0)),
                this._frames.forEach(function (t, e) {
                  return (t.style.opacity = 0);
                }),
                (this._frameStep = 1 / this._frames.length);
            }),
            (t.prototype._createTween = function () {
              var t = this;
              (this._tween = new u["default"]({
                duration: this._props.duration,
                delay: this._props.delay,
                yoyo: this._props.yoyo,
                repeat: this._props.repeat,
                easing: this._props.easing,
                onStart: function () {
                  return t._props.onStart && t._props.onStart();
                },
                onComplete: function () {
                  return t._props.onComplete && t._props.onComplete();
                },
                onUpdate: function (e) {
                  return t._setProgress(e);
                },
              })),
                (this.timeline = new h["default"]()),
                this.timeline.add(this._tween),
                this._props.isRunLess || this._startTween();
            }),
            (t.prototype._startTween = function () {
              var t = this;
              setTimeout(function () {
                return t.timeline.play();
              }, 1);
            }),
            (t.prototype._setProgress = function (t) {
              var e = Math.floor(t / this._frameStep);
              if (this._prevFrame != this._frames[e]) {
                this._prevFrame && (this._prevFrame.style.opacity = 0);
                var r = 1 === t && this._props.isShowEnd ? e - 1 : e;
                this._frames[r] && (this._frames[r].style.opacity = 1),
                  (this._prevFrame = this._frames[e]);
              }
              this._props.onUpdate && this._props.onUpdate(t);
            }),
            t
          );
        })();
      e["default"] = c;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(23),
        n = i(s),
        o = r(24),
        a = i(o),
        p = r(25),
        u = i(p),
        l = r(19),
        h = (i(l), r(10)),
        c = i(h),
        f = r(22),
        d = i(f),
        _ = r(16),
        y = i(_),
        m = (function (t) {
          function e() {
            var r,
              i =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? {}
                  : arguments[0];
            n["default"](this, e);
            var s = a["default"](this, t.call(this, i));
            return (
              null == s._props.name && s._setSelfName(),
              (r = s),
              a["default"](s, r)
            );
          }
          return (
            u["default"](e, t),
            (e.prototype._declareDefaults = function () {
              this._defaults = {
                duration: 350,
                delay: 0,
                repeat: 0,
                speed: 1,
                isYoyo: !1,
                easing: "Sin.Out",
                backwardEasing: null,
                name: null,
                nameBase: "Tween",
                onProgress: null,
                onStart: null,
                onRefresh: null,
                onComplete: null,
                onRepeatStart: null,
                onRepeatComplete: null,
                onFirstUpdate: null,
                onUpdate: null,
                isChained: !1,
                onPlaybackStart: null,
                onPlaybackPause: null,
                onPlaybackStop: null,
                onPlaybackComplete: null,
                callbacksContext: null,
              };
            }),
            (e.prototype.play = function () {
              var t =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? 0
                  : arguments[0];
              return "play" === this._state && this._isRunning
                ? this
                : ((this._props.isReversed = !1),
                  this._subPlay(t, "play"),
                  this._setPlaybackState("play"),
                  this);
            }),
            (e.prototype.playBackward = function () {
              var t =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? 0
                  : arguments[0];
              return "reverse" === this._state && this._isRunning
                ? this
                : ((this._props.isReversed = !0),
                  this._subPlay(t, "reverse"),
                  this._setPlaybackState("reverse"),
                  this);
            }),
            (e.prototype.pause = function () {
              return "pause" === this._state || "stop" === this._state
                ? this
                : (this._removeFromTweener(),
                  this._setPlaybackState("pause"),
                  this);
            }),
            (e.prototype.stop = function (t) {
              if ("stop" === this._state) return this;
              this._wasUknownUpdate = void 0;
              var e = null != t ? t : "reverse" === this._state ? 1 : 0;
              return this.setProgress(e), this.reset(), this;
            }),
            (e.prototype.replay = function () {
              var t =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? 0
                  : arguments[0];
              return this.reset(), this.play(t), this;
            }),
            (e.prototype.replayBackward = function () {
              var t =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? 0
                  : arguments[0];
              return this.reset(), this.playBackward(t), this;
            }),
            (e.prototype.resume = function () {
              var t =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? 0
                  : arguments[0];
              if ("pause" !== this._state) return this;
              switch (this._prevState) {
                case "play":
                  this.play(t);
                  break;
                case "reverse":
                  this.playBackward(t);
              }
              return this;
            }),
            (e.prototype.setProgress = function (t) {
              var e = this._props;
              return (
                !e.startTime && this._setStartTime(),
                (this._playTime = null),
                0 > t && (t = 0),
                t > 1 && (t = 1),
                this._update(e.startTime - e.delay + t * e.repeatTime),
                this
              );
            }),
            (e.prototype.setSpeed = function (t) {
              return (
                (this._props.speed = t),
                ("play" === this._state || "reverse" === this._state) &&
                  this._setResumeTime(this._state),
                this
              );
            }),
            (e.prototype.reset = function () {
              return (
                this._removeFromTweener(),
                this._setPlaybackState("stop"),
                (this._progressTime = 0),
                (this._isCompleted = !1),
                (this._isStarted = !1),
                (this._isFirstUpdate = !1),
                (this._wasUknownUpdate = void 0),
                (this._prevTime = void 0),
                (this._prevYoyo = void 0),
                (this._props.isReversed = !1),
                this
              );
            }),
            (e.prototype._subPlay = function () {
              var t =
                  arguments.length <= 0 || void 0 === arguments[0]
                    ? 0
                    : arguments[0],
                e = arguments[1],
                r = this._props,
                i = this._state,
                s = this._prevState,
                n = "pause" === i,
                o = "play" === i || (n && "play" === s),
                a = "reverse" === i || (n && "reverse" === s),
                p = (o && "reverse" === e) || (a && "play" === e);
              return (
                (this._progressTime =
                  this._progressTime >= r.repeatTime ? 0 : this._progressTime),
                p && (this._progressTime = r.repeatTime - this._progressTime),
                this._setResumeTime(e, t),
                c["default"].add(this),
                this
              );
            }),
            (e.prototype._setResumeTime = function (t) {
              var e =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? 0
                  : arguments[1];
              this._resumeTime = performance.now();
              var r = this._resumeTime - Math.abs(e) - this._progressTime;
              this._setStartTime(r, !1),
                null != this._prevTime &&
                  (this._prevTime =
                    "play" === t
                      ? this._normPrevTimeForward()
                      : this._props.endTime - this._progressTime);
            }),
            (e.prototype._normPrevTimeForward = function () {
              var t = this._props;
              return t.startTime + this._progressTime - t.delay;
            }),
            (e.prototype._setSelfName = function () {
              var t = "_" + this._props.nameBase + "s";
              (c["default"][t] =
                null == c["default"][t] ? 1 : ++c["default"][t]),
                (this._props.name =
                  this._props.nameBase + " " + c["default"][t]);
            }),
            (e.prototype._setPlaybackState = function (t) {
              (this._prevState = this._state), (this._state = t);
              var e = "pause" === this._prevState,
                r = "stop" === this._prevState,
                i = "play" === this._prevState,
                s = "reverse" === this._prevState,
                n = i || s,
                o = r || e;
              ("play" !== t && "reverse" !== t) || !o || this._playbackStart(),
                "pause" === t && n && this._playbackPause(),
                "stop" === t && (n || e) && this._playbackStop();
            }),
            (e.prototype._vars = function () {
              return (
                (this.progress = 0),
                (this._prevTime = void 0),
                (this._progressTime = 0),
                (this._negativeShift = 0),
                (this._state = "stop"),
                this._props.delay < 0 &&
                  ((this._negativeShift = this._props.delay),
                  (this._props.delay = 0)),
                this._calcDimentions()
              );
            }),
            (e.prototype._calcDimentions = function () {
              (this._props.time = this._props.duration + this._props.delay),
                (this._props.repeatTime =
                  this._props.time * (this._props.repeat + 1));
            }),
            (e.prototype._extendDefaults = function () {
              (this._callbackOverrides = this._o.callbackOverrides || {}),
                delete this._o.callbackOverrides,
                t.prototype._extendDefaults.call(this);
              var e = this._props;
              (e.easing = d["default"].parseEasing(e.easing)),
                (e.easing._parent = this),
                null != e.backwardEasing &&
                  ((e.backwardEasing = d["default"].parseEasing(
                    e.backwardEasing
                  )),
                  (e.backwardEasing._parent = this));
            }),
            (e.prototype._setStartTime = function (t) {
              var e =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? !0
                    : arguments[1],
                r = this._props,
                i = r.shiftTime || 0;
              e &&
                ((this._isCompleted = !1),
                (this._isRepeatCompleted = !1),
                (this._isStarted = !1));
              var s = null == t ? performance.now() : t;
              return (
                (r.startTime = s + r.delay + this._negativeShift + i),
                (r.endTime = r.startTime + r.repeatTime - r.delay),
                (this._playTime =
                  null != this._resumeTime ? this._resumeTime : s + i),
                (this._resumeTime = null),
                this
              );
            }),
            (e.prototype._update = function (t, e, r, i) {
              var s = this._props;
              null == this._prevTime &&
                null != e &&
                (this._props.speed &&
                  this._playTime &&
                  (this._prevTime =
                    this._playTime + this._props.speed * (e - this._playTime)),
                (this._wasUknownUpdate = !0));
              var n = s.startTime - s.delay;
              if (
                (s.speed &&
                  this._playTime &&
                  (t = this._playTime + s.speed * (t - this._playTime)),
                Math.abs(s.endTime - t) < 1e-8 && (t = s.endTime),
                i && null != r)
              ) {
                var o = this._getPeriod(t),
                  a = !(!s.isYoyo || !this._props.repeat || o % 2 !== 1);
                if (this._timelines)
                  for (var p = 0; p < this._timelines.length; p++)
                    this._timelines[p]._update(t, e, r, i);
                1 === i
                  ? r
                    ? ((this._prevTime = t + 1),
                      this._repeatStart(t, a),
                      this._start(t, a))
                    : ((this._prevTime = t - 1),
                      this._repeatComplete(t, a),
                      this._complete(t, a))
                  : -1 === i &&
                    (r
                      ? ((this._prevTime = t - 1),
                        this._repeatComplete(t, a),
                        this._complete(t, a))
                      : this._prevTime >= s.startTime &&
                        this._prevTime <= s.endTime &&
                        ((this._prevTime = t + 1),
                        this._repeatStart(t, a),
                        this._start(t, a),
                        (this._isCompleted = !0))),
                  (this._prevTime = void 0);
              }
              return (
                t > n && t < s.endTime
                  ? (this._progressTime = t - n)
                  : n >= t
                  ? (this._progressTime = 0)
                  : t >= s.endTime &&
                    (this._progressTime = s.repeatTime + 1e-11),
                s.isReversed && (t = s.endTime - this._progressTime),
                null == this._prevTime
                  ? ((this._prevTime = t), (this._wasUknownUpdate = !0), !1)
                  : (t >= n &&
                      t <= s.endTime &&
                      this._progress((t - n) / s.repeatTime, t),
                    t >= s.startTime && t <= s.endTime
                      ? this._updateInActiveArea(t)
                      : this._isInActiveArea
                      ? this._updateInInactiveArea(t)
                      : this._isRefreshed ||
                        (t < s.startTime &&
                          0 !== this.progress &&
                          (this._refresh(!0), (this._isRefreshed = !0))),
                    (this._prevTime = t),
                    t >= s.endTime || n >= t)
              );
            }),
            (e.prototype._updateInInactiveArea = function (t) {
              if (this._isInActiveArea) {
                var e = this._props;
                if (t > e.endTime && !this._isCompleted) {
                  this._progress(1, t);
                  var r = this._getPeriod(e.endTime),
                    i = e.isYoyo && r % 2 === 0;
                  this._setProgress(i ? 0 : 1, t, i),
                    this._repeatComplete(t, i),
                    this._complete(t, i);
                }
                t < this._prevTime &&
                  t < e.startTime &&
                  !this._isStarted &&
                  !this._isCompleted &&
                  (this._progress(0, t, !1),
                  this._setProgress(0, t, !1),
                  (this._isRepeatStart = !1),
                  this._repeatStart(t, !1),
                  this._start(t, !1)),
                  (this._isInActiveArea = !1);
              }
            }),
            (e.prototype._updateInActiveArea = function (t) {
              var e = this._props,
                r = e.delay + e.duration,
                i = e.startTime - e.delay,
                s = (t - e.startTime + e.delay) % r,
                n = Math.round((e.endTime - e.startTime + e.delay) / r),
                o = this._getPeriod(t),
                a = this._delayT,
                p = this._getPeriod(this._prevTime),
                u = this._delayT,
                l = e.isYoyo && o % 2 === 1,
                h = e.isYoyo && p % 2 === 1,
                c = l ? 1 : 0;
              if (t === e.endTime) {
                this._wasUknownUpdate = !1;
                var l = e.isYoyo && (o - 1) % 2 === 1;
                return (
                  this._setProgress(l ? 0 : 1, t, l),
                  t > this._prevTime && (this._isRepeatCompleted = !1),
                  this._repeatComplete(t, l),
                  this._complete(t, l)
                );
              }
              if (
                ((this._isCompleted = !1),
                (this._isRefreshed = !1),
                i + s >= e.startTime)
              ) {
                (this._isInActiveArea = !0),
                  (this._isRepeatCompleted = !1),
                  (this._isRepeatStart = !1),
                  (this._isStarted = !1);
                var f = (t - e.startTime) % r,
                  d = f / e.duration,
                  _ = o > 0 && o > p,
                  y = p > o;
                if (
                  ((this._onEdge = 0),
                  _ && (this._onEdge = 1),
                  y && (this._onEdge = -1),
                  this._wasUknownUpdate &&
                    (t > this._prevTime &&
                      (this._start(t, l),
                      this._repeatStart(t, l),
                      this._firstUpdate(t, l)),
                    t < this._prevTime &&
                      (this._complete(t, l),
                      this._repeatComplete(t, l),
                      this._firstUpdate(t, l),
                      (this._isCompleted = !1))),
                  _)
                ) {
                  if (1 !== this.progress) {
                    var m = e.isYoyo && (o - 1) % 2 === 1;
                    this._repeatComplete(t, m);
                  }
                  p >= 0 && this._repeatStart(t, l);
                }
                t > this._prevTime &&
                  (!this._isStarted &&
                    this._prevTime <= e.startTime &&
                    (this._start(t, l),
                    this._repeatStart(t, l),
                    (this._isStarted = !1),
                    (this._isRepeatStart = !1)),
                  this._firstUpdate(t, l)),
                  y &&
                    (0 !== this.progress &&
                      1 !== this.progress &&
                      p != n &&
                      this._repeatStart(t, h),
                    p !== n ||
                      this._wasUknownUpdate ||
                      (this._complete(t, l),
                      this._repeatComplete(t, l),
                      this._firstUpdate(t, l),
                      (this._isCompleted = !1)),
                    this._repeatComplete(t, l)),
                  "delay" === p &&
                    (u > o && this._repeatComplete(t, l),
                    o === u && o > 0 && this._repeatStart(t, l)),
                  t > this._prevTime
                    ? (0 === d && this._repeatStart(t, l),
                      t !== e.endTime && this._setProgress(l ? 1 - d : d, t, l))
                    : (t !== e.endTime &&
                        this._setProgress(l ? 1 - d : d, t, l),
                      0 === d && this._repeatStart(t, l)),
                  t === e.startTime && this._start(t, l);
              } else if (this._isInActiveArea) {
                var g = "delay" === o ? a : o,
                  v = t > this._prevTime;
                v && g--,
                  (c = e.isYoyo && g % 2 === 1 ? 1 : 0),
                  t < this._prevTime &&
                    (this._setProgress(c, t, 1 === c),
                    this._repeatStart(t, 1 === c)),
                  this._setProgress(v ? 1 - c : c, t, 1 === c),
                  t > this._prevTime &&
                    (0 !== this.progress || 1 === c) &&
                    this._repeatComplete(t, 1 === c),
                  (this._isInActiveArea = !1);
              }
              this._wasUknownUpdate = !1;
            }),
            (e.prototype._removeFromTweener = function () {
              return c["default"].remove(this), this;
            }),
            (e.prototype._getPeriod = function (t) {
              var e = this._props,
                r = e.delay + e.duration,
                i = e.delay + t - e.startTime,
                s = i / r,
                n = t < e.endTime ? i % r : 0;
              return (
                (s = t >= e.endTime ? Math.round(s) : Math.floor(s)),
                t > e.endTime
                  ? (s = Math.round((e.endTime - e.startTime + e.delay) / r))
                  : n > 0 && n < e.delay && ((this._delayT = s), (s = "delay")),
                s
              );
            }),
            (e.prototype._setProgress = function (t, e, r) {
              var i = this._props,
                s = i.wasYoyo !== r,
                n = e > this._prevTime;
              if (((this.progress = t), (n && !r) || (!n && r)))
                this.easedProgress = i.easing(t);
              else if ((!n && !r) || (n && r)) {
                var o = null != i.backwardEasing ? i.backwardEasing : i.easing;
                this.easedProgress = o(t);
              }
              return (
                (i.prevEasedProgress !== this.easedProgress || s) &&
                  null != i.onUpdate &&
                  "function" == typeof i.onUpdate &&
                  i.onUpdate.call(
                    i.callbacksContext || this,
                    this.easedProgress,
                    this.progress,
                    n,
                    r
                  ),
                (i.prevEasedProgress = this.easedProgress),
                (i.wasYoyo = r),
                this
              );
            }),
            (e.prototype._start = function (t, e) {
              if (!this._isStarted) {
                var r = this._props;
                null != r.onStart &&
                  "function" == typeof r.onStart &&
                  r.onStart.call(
                    r.callbacksContext || this,
                    t > this._prevTime,
                    e
                  ),
                  (this._isCompleted = !1),
                  (this._isStarted = !0),
                  (this._isFirstUpdate = !1);
              }
            }),
            (e.prototype._playbackStart = function () {
              var t = this._props;
              null != t.onPlaybackStart &&
                "function" == typeof t.onPlaybackStart &&
                t.onPlaybackStart.call(t.callbacksContext || this);
            }),
            (e.prototype._playbackPause = function () {
              var t = this._props;
              null != t.onPlaybackPause &&
                "function" == typeof t.onPlaybackPause &&
                t.onPlaybackPause.call(t.callbacksContext || this);
            }),
            (e.prototype._playbackStop = function () {
              var t = this._props;
              null != t.onPlaybackStop &&
                "function" == typeof t.onPlaybackStop &&
                t.onPlaybackStop.call(t.callbacksContext || this);
            }),
            (e.prototype._playbackComplete = function () {
              var t = this._props;
              null != t.onPlaybackComplete &&
                "function" == typeof t.onPlaybackComplete &&
                t.onPlaybackComplete.call(t.callbacksContext || this);
            }),
            (e.prototype._complete = function (t, e) {
              if (!this._isCompleted) {
                var r = this._props;
                null != r.onComplete &&
                  "function" == typeof r.onComplete &&
                  r.onComplete.call(
                    r.callbacksContext || this,
                    t > this._prevTime,
                    e
                  ),
                  (this._isCompleted = !0),
                  (this._isStarted = !1),
                  (this._isFirstUpdate = !1),
                  (this._prevYoyo = void 0);
              }
            }),
            (e.prototype._firstUpdate = function (t, e) {
              if (!this._isFirstUpdate) {
                var r = this._props;
                null != r.onFirstUpdate &&
                  "function" == typeof r.onFirstUpdate &&
                  ((r.onFirstUpdate.tween = this),
                  r.onFirstUpdate.call(
                    r.callbacksContext || this,
                    t > this._prevTime,
                    e
                  )),
                  (this._isFirstUpdate = !0);
              }
            }),
            (e.prototype._repeatComplete = function (t, e) {
              if (!this._isRepeatCompleted) {
                var r = this._props;
                null != r.onRepeatComplete &&
                  "function" == typeof r.onRepeatComplete &&
                  r.onRepeatComplete.call(
                    r.callbacksContext || this,
                    t > this._prevTime,
                    e
                  ),
                  (this._isRepeatCompleted = !0);
              }
            }),
            (e.prototype._repeatStart = function (t, e) {
              if (!this._isRepeatStart) {
                var r = this._props;
                null != r.onRepeatStart &&
                  "function" == typeof r.onRepeatStart &&
                  r.onRepeatStart.call(
                    r.callbacksContext || this,
                    t > this._prevTime,
                    e
                  ),
                  (this._isRepeatStart = !0);
              }
            }),
            (e.prototype._progress = function (t, e) {
              var r = this._props;
              null != r.onProgress &&
                "function" == typeof r.onProgress &&
                r.onProgress.call(
                  r.callbacksContext || this,
                  t,
                  e > this._prevTime
                );
            }),
            (e.prototype._refresh = function (t) {
              var e = this._props;
              if (null != e.onRefresh) {
                var r = e.callbacksContext || this,
                  i = t ? 0 : 1;
                e.onRefresh.call(r, t, e.easing(i), i);
              }
            }),
            (e.prototype._onTweenerRemove = function () {}),
            (e.prototype._onTweenerFinish = function () {
              this._setPlaybackState("stop"), this._playbackComplete();
            }),
            (e.prototype._setProp = function (e, r) {
              t.prototype._setProp.call(this, e, r), this._calcDimentions();
            }),
            (e.prototype._assignProp = function (e, r) {
              null == r && (r = this._defaults[e]),
                "easing" === e &&
                  ((r = d["default"].parseEasing(r)), (r._parent = this));
              var i = this._callbackOverrides[e],
                s = !r || !r.isMojsCallbackOverride;
              i && s && (r = this._overrideCallback(r, i)),
                t.prototype._assignProp.call(this, e, r);
            }),
            (e.prototype._overrideCallback = function (t, e) {
              var r = t && "function" == typeof t,
                i = function () {
                  r && t.apply(this, arguments), e.apply(this, arguments);
                };
              return (i.isMojsCallbackOverride = !0), i;
            }),
            e
          );
        })(y["default"]);
      e["default"] = m;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(29),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(24),
        u = i(p),
        l = r(25),
        h = i(l),
        c = r(19),
        f = i(c),
        d = r(10),
        _ = (i(d), r(8)),
        y = i(_),
        m = (function (t) {
          function e() {
            var r =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0];
            return a["default"](this, e), u["default"](this, t.call(this, r));
          }
          return (
            h["default"](e, t),
            (e.prototype.add = function () {
              for (var t = arguments.length, e = Array(t), r = 0; t > r; r++)
                e[r] = arguments[r];
              return this._pushTimelineArray(e), this._calcDimentions(), this;
            }),
            (e.prototype.append = function () {
              for (var t = arguments.length, e = Array(t), r = 0; t > r; r++)
                e[r] = arguments[r];
              for (
                var i = e,
                  s = Array.isArray(i),
                  o = 0,
                  i = s ? i : n["default"](i);
                ;

              ) {
                var a;
                if (s) {
                  if (o >= i.length) break;
                  a = i[o++];
                } else {
                  if (((o = i.next()), o.done)) break;
                  a = o.value;
                }
                var p = a;
                f["default"].isArray(p)
                  ? this._appendTimelineArray(p)
                  : this._appendTimeline(p, this._timelines.length),
                  this._calcDimentions();
              }
              return this;
            }),
            (e.prototype.stop = function (e) {
              return (
                t.prototype.stop.call(this, e), this._stopChildren(e), this
              );
            }),
            (e.prototype.reset = function () {
              return t.prototype.reset.call(this), this._resetChildren(), this;
            }),
            (e.prototype._resetChildren = function () {
              for (var t = 0; t < this._timelines.length; t++)
                this._timelines[t].reset();
            }),
            (e.prototype._stopChildren = function (t) {
              for (var e = this._timelines.length - 1; e >= 0; e--)
                this._timelines[e].stop(t);
            }),
            (e.prototype._appendTimelineArray = function (t) {
              for (
                var e = t.length,
                  r = this._props.repeatTime - this._props.delay,
                  i = this._timelines.length;
                e--;

              )
                this._appendTimeline(t[e], i, r);
            }),
            (e.prototype._appendTimeline = function (t, r, i) {
              t.timeline instanceof e && (t = t.timeline),
                t.tween instanceof y["default"] && (t = t.tween);
              var s = null != i ? i : this._props.duration;
              (s += t._props.shiftTime || 0),
                (t.index = r),
                this._pushTimeline(t, s);
            }),
            (e.prototype._pushTimelineArray = function (t) {
              for (var e = 0; e < t.length; e++) {
                var r = t[e];
                f["default"].isArray(r)
                  ? this._pushTimelineArray(r)
                  : this._pushTimeline(r);
              }
            }),
            (e.prototype._pushTimeline = function (t, r) {
              t.timeline instanceof e && (t = t.timeline),
                t.tween instanceof y["default"] && (t = t.tween),
                null != r && t._setProp({ shiftTime: r }),
                this._timelines.push(t),
                this._recalcDuration(t);
            }),
            (e.prototype._setProgress = function (t, e, r) {
              this._updateChildren(t, e, r),
                y["default"].prototype._setProgress.call(this, t, e);
            }),
            (e.prototype._updateChildren = function (t, e, r) {
              var i = e > this._prevTime ? -1 : 1;
              this._props.isYoyo && r && (i *= -1);
              for (
                var s = this._props.startTime + t * this._props.duration,
                  n = s + i,
                  o = this._timelines.length,
                  a = 0;
                o > a;
                a++
              ) {
                var p = s > n ? a : o - 1 - a;
                this._timelines[p]._update(s, n, this._prevYoyo, this._onEdge);
              }
              this._prevYoyo = r;
            }),
            (e.prototype._recalcDuration = function (t) {
              var e = t._props,
                r =
                  e.repeatTime / e.speed +
                  (e.shiftTime || 0) +
                  t._negativeShift;
              this._props.duration = Math.max(r, this._props.duration);
            }),
            (e.prototype._recalcTotalDuration = function () {
              var t = this._timelines.length;
              for (this._props.duration = 0; t--; ) {
                var e = this._timelines[t];
                e._recalcTotalDuration && e._recalcTotalDuration(),
                  this._recalcDuration(e);
              }
              this._calcDimentions();
            }),
            (e.prototype._setStartTime = function (e) {
              var r =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? !0
                  : arguments[1];
              t.prototype._setStartTime.call(this, e),
                this._startTimelines(this._props.startTime, r);
            }),
            (e.prototype._startTimelines = function (t) {
              var e =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? !0
                    : arguments[1],
                r = (this._props, "stop" === this._state);
              null == t && (t = this._props.startTime);
              for (var i = 0; i < this._timelines.length; i++) {
                var s = this._timelines[i];
                s._setStartTime(t, e),
                  e ||
                    null == s._prevTime ||
                    r ||
                    (s._prevTime = s._normPrevTimeForward());
              }
            }),
            (e.prototype._refresh = function (e) {
              for (var r = this._timelines.length, i = 0; r > i; i++)
                this._timelines[i]._refresh(e);
              t.prototype._refresh.call(this, e);
            }),
            (e.prototype._declareDefaults = function () {
              null != this._o.duration &&
                (f["default"].error(
                  'Duration can not be declared on Timeline, but "' +
                    this._o.duration +
                    '" is. You probably want to use Tween instead.'
                ),
                (this._o.duration = 0)),
                t.prototype._declareDefaults.call(this),
                (this._defaults.duration = 0),
                (this._defaults.easing = "Linear.None"),
                (this._defaults.backwardEasing = "Linear.None"),
                (this._defaults.nameBase = "Timeline");
            }),
            (e.prototype._vars = function () {
              (this._timelines = []), t.prototype._vars.call(this);
            }),
            e
          );
        })(y["default"]);
      e["default"] = m;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(23),
        n = i(s);
      r(30), r(31);
      var o = r(19),
        a =
          (i(o),
          (function () {
            function t() {
              return (
                n["default"](this, t),
                this._vars(),
                this._listenVisibilityChange(),
                this
              );
            }
            return (
              (t.prototype._vars = function () {
                (this.tweens = []),
                  (this._loop = this._loop.bind(this)),
                  (this._onVisibilityChange =
                    this._onVisibilityChange.bind(this));
              }),
              (t.prototype._loop = function () {
                return this._isRunning
                  ? (this._update(window.performance.now()),
                    this.tweens.length
                      ? (requestAnimationFrame(this._loop), this)
                      : (this._isRunning = !1))
                  : !1;
              }),
              (t.prototype._startLoop = function () {
                this._isRunning ||
                  ((this._isRunning = !0), requestAnimationFrame(this._loop));
              }),
              (t.prototype._stopLoop = function () {
                this._isRunning = !1;
              }),
              (t.prototype._update = function (t) {
                for (var e = this.tweens.length; e--; ) {
                  var r = this.tweens[e];
                  r &&
                    r._update(t) === !0 &&
                    (this.remove(r),
                    r._onTweenerFinish(),
                    (r._prevTime = void 0));
                }
              }),
              (t.prototype.add = function (t) {
                t._isRunning ||
                  ((t._isRunning = !0), this.tweens.push(t), this._startLoop());
              }),
              (t.prototype.removeAll = function () {
                this.tweens.length = 0;
              }),
              (t.prototype.remove = function (t) {
                var e = "number" == typeof t ? t : this.tweens.indexOf(t);
                -1 !== e &&
                  ((t = this.tweens[e]),
                  t &&
                    ((t._isRunning = !1),
                    this.tweens.splice(e, 1),
                    t._onTweenerRemove()));
              }),
              (t.prototype._listenVisibilityChange = function () {
                "undefined" != typeof document.hidden
                  ? ((this._visibilityHidden = "hidden"),
                    (this._visibilityChange = "visibilitychange"))
                  : "undefined" != typeof document.mozHidden
                  ? ((this._visibilityHidden = "mozHidden"),
                    (this._visibilityChange = "mozvisibilitychange"))
                  : "undefined" != typeof document.msHidden
                  ? ((this._visibilityHidden = "msHidden"),
                    (this._visibilityChange = "msvisibilitychange"))
                  : "undefined" != typeof document.webkitHidden &&
                    ((this._visibilityHidden = "webkitHidden"),
                    (this._visibilityChange = "webkitvisibilitychange")),
                  document.addEventListener(
                    this._visibilityChange,
                    this._onVisibilityChange,
                    !1
                  );
              }),
              (t.prototype._onVisibilityChange = function () {
                document[this._visibilityHidden]
                  ? this._savePlayingTweens()
                  : this._restorePlayingTweens();
              }),
              (t.prototype._savePlayingTweens = function () {
                this._savedTweens = this.tweens.slice(0);
                for (var t = 0; t < this._savedTweens.length; t++)
                  this._savedTweens[t].pause();
              }),
              (t.prototype._restorePlayingTweens = function () {
                for (var t = 0; t < this._savedTweens.length; t++)
                  this._savedTweens[t].resume();
              }),
              t
            );
          })()),
        p = new a();
      e["default"] = p;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(23),
        n = i(s),
        o = r(24),
        a = i(o),
        p = r(25),
        u = i(p),
        l = r(8),
        h = i(l),
        c = r(9),
        f = i(c),
        d = r(16),
        _ = i(d),
        y = (function (t) {
          function e() {
            var r =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0];
            n["default"](this, e);
            var i = a["default"](this, t.call(this, r));
            return (
              i._transformTweenOptions(),
              !i._o.isTweenLess && i._makeTween(),
              !i._o.isTimelineLess && i._makeTimeline(),
              i
            );
          }
          return (
            u["default"](e, t),
            (e.prototype.play = function () {
              return this.timeline.play.apply(this.timeline, arguments), this;
            }),
            (e.prototype.playBackward = function () {
              return (
                this.timeline.playBackward.apply(this.timeline, arguments), this
              );
            }),
            (e.prototype.pause = function () {
              return this.timeline.pause.apply(this.timeline, arguments), this;
            }),
            (e.prototype.stop = function () {
              return this.timeline.stop.apply(this.timeline, arguments), this;
            }),
            (e.prototype.reset = function () {
              return this.timeline.reset.apply(this.timeline, arguments), this;
            }),
            (e.prototype.replay = function () {
              return this.timeline.replay.apply(this.timeline, arguments), this;
            }),
            (e.prototype.replayBackward = function () {
              return (
                this.timeline.replayBackward.apply(this.timeline, arguments),
                this
              );
            }),
            (e.prototype.resume = function () {
              arguments.length <= 0 || void 0 === arguments[0]
                ? 0
                : arguments[0];
              return this.timeline.resume.apply(this.timeline, arguments), this;
            }),
            (e.prototype.setProgress = function () {
              return (
                this.timeline.setProgress.apply(this.timeline, arguments), this
              );
            }),
            (e.prototype.setSpeed = function (t) {
              return (
                this.timeline.setSpeed.apply(this.timeline, arguments), this
              );
            }),
            (e.prototype._transformTweenOptions = function () {}),
            (e.prototype._makeTween = function () {
              (this._o.callbacksContext = this._o.callbacksContext || this),
                (this.tween = new h["default"](this._o)),
                this._o.isTimelineLess && (this.timeline = this.tween);
            }),
            (e.prototype._makeTimeline = function () {
              (this._o.timeline = this._o.timeline || {}),
                (this._o.timeline.callbacksContext =
                  this._o.callbacksContext || this),
                (this.timeline = new f["default"](this._o.timeline)),
                (this._isTimeline = !0),
                this.tween && this.timeline.add(this.tween);
            }),
            e
          );
        })(_["default"]);
      e["default"] = y;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(28),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(24),
        u = i(p),
        l = r(25),
        h = i(l),
        c = r(11),
        f = i(c),
        d = r(19),
        _ = i(d),
        y = (function (t) {
          function e() {
            return (
              a["default"](this, e),
              u["default"](this, t.apply(this, arguments))
            );
          }
          return (
            h["default"](e, t),
            (e.prototype.then = function (t) {
              if (null == t || !n["default"](t).length) return 1;
              var e = this._history[this._history.length - 1],
                r =
                  (this._modules[this._modules.length - 1],
                  this._mergeThenOptions(e, t));
              this._resetMergedFlags(r);
              var i = new this.constructor(r);
              return (
                (i._masterModule = this),
                this._modules.push(i),
                this.timeline.append(i),
                this
              );
            }),
            (e.prototype._resetMergedFlags = function (t) {
              return (
                (t.isTimelineLess = !0),
                (t.isShowStart = !1),
                (t.isRefreshState = !1),
                (t.callbacksContext = this._props.callbacksContext || this),
                (t.prevChainModule = _["default"].getLastItem(this._modules)),
                (t.masterModule = this),
                t
              );
            }),
            (e.prototype._vars = function () {
              t.prototype._vars.call(this),
                (this._masterModule = this._o.masterModule),
                (this._isChained = !!this._masterModule);
              var e = _["default"].cloneObj(this._props);
              for (var r in this._arrayPropertyMap)
                if (this._o[r]) {
                  var i = this._parsePreArrayProperty(r, this._o[r]);
                  e[r] = i;
                }
              (this._history = [e]),
                (this._modules = [this]),
                (this._nonMergeProps = { shape: 1 });
            }),
            (e.prototype._mergeThenOptions = function (t, e) {
              var r = {};
              return (
                this._mergeStartLoop(r, t),
                this._mergeEndLoop(r, t, e),
                this._history.push(r),
                r
              );
            }),
            (e.prototype._checkStartValue = function (t, e) {
              return e;
            }),
            (e.prototype._mergeStartLoop = function (t, e) {
              for (var r in e) {
                var i = e[r];
                null != e[r] &&
                  ((_["default"].isTweenProp(r) && "duration" !== r) ||
                    (t[r] = this._isDelta(i)
                      ? _["default"].getDeltaEnd(i)
                      : i));
              }
            }),
            (e.prototype._mergeEndLoop = function (t, e, r) {
              n["default"](r);
              for (var i in r)
                if ("parent" != i) {
                  var s = r[i],
                    o = null != e[i] ? e[i] : this._defaults[i];
                  if (((o = this._checkStartValue(i, o)), null != s)) {
                    var a = "radiusX" === i || "radiusY" === i;
                    a && null == o && (o = e.radius);
                    var a = "scaleX" === i || "scaleY" === i;
                    a && null == o && (o = e.scale),
                      (t[i] = this._mergeThenProperty(i, o, s));
                  }
                } else t[i] = r[i];
            }),
            (e.prototype._mergeThenProperty = function (t, e, r) {
              var i,
                s,
                n = "boolean" == typeof r;
              if (_["default"].isTweenProp(t) || this._nonMergeProps[t] || n)
                return r;
              if (
                (_["default"].isObject(r) &&
                  null != r.to &&
                  ((i = r.curve), (s = r.easing), (r = r.to)),
                this._isDelta(r))
              )
                return this._parseDeltaValues(t, r);
              var o = this._parsePreArrayProperty(t, r);
              if (this._isDelta(e)) {
                var a;
                return (
                  (a = {}),
                  (a[_["default"].getDeltaEnd(e)] = o),
                  (a.easing = s),
                  (a.curve = i),
                  a
                );
              }
              var p;
              return (p = {}), (p[e] = o), (p.easing = s), (p.curve = i), p;
            }),
            (e.prototype._getArrayLength = function (t) {
              return _["default"].isArray(t) ? t.length : -1;
            }),
            (e.prototype._isDelta = function (t) {
              var e = _["default"].isObject(t);
              return (
                (e = e && !t.unit),
                !(!e || _["default"].isArray(t) || _["default"].isDOM(t))
              );
            }),
            (e.prototype._isFirstInChain = function () {
              return !this._masterModule;
            }),
            (e.prototype._isLastInChain = function () {
              var t = this._masterModule;
              return t
                ? this === _["default"].getLastItem(t._modules)
                : 1 === this._modules.length;
            }),
            e
          );
        })(f["default"]);
      e["default"] = y;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(28),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(24),
        u = i(p),
        l = r(25),
        h = i(l),
        c = r(19),
        f = i(c),
        d = r(12),
        _ = i(d),
        y = (function (t) {
          function e() {
            return (
              a["default"](this, e),
              u["default"](this, t.apply(this, arguments))
            );
          }
          return (
            h["default"](e, t),
            (e.prototype.tune = function (t) {
              if (t && n["default"](t).length) {
                this._transformHistory(t),
                  this._tuneNewOptions(t),
                  (this._history[0] = f["default"].cloneObj(this._props));
                for (var e in this._arrayPropertyMap)
                  null != t[e] &&
                    (this._history[0][e] = this._preparsePropValue(e, t[e]));
                this._tuneSubModules(), this._resetTweens();
              }
              return this;
            }),
            (e.prototype.generate = function () {
              return this.tune(this._o);
            }),
            (e.prototype._transformHistory = function (t) {
              for (var e in t) {
                var r = t[e];
                this._transformHistoryFor(e, this._preparsePropValue(e, r));
              }
            }),
            (e.prototype._transformHistoryFor = function (t, e) {
              for (
                var r = 0;
                r < this._history.length &&
                (!(e = this._transformHistoryRecord(r, t, e)) || null != e);
                r++
              );
            }),
            (e.prototype._transformHistoryRecord = function (t, e, r, i, s) {
              if (null == r) return null;
              (i = null == i ? this._history[t] : i),
                (s = null == s ? this._history[t + 1] : s);
              var n = i[e],
                o = null == s ? null : s[e];
              if (0 === t) {
                if (
                  ((i[e] = r), f["default"].isTweenProp(e) && "duration" !== e)
                )
                  return null;
                var a = this._isRewriteNext(n, o),
                  p = this._isDelta(r) ? f["default"].getDeltaEnd(r) : r;
                return a ? p : null;
              }
              if (this._isDelta(n)) {
                var u;
                return (
                  (i[e] = ((u = {}), (u[r] = f["default"].getDeltaEnd(n)), u)),
                  null
                );
              }
              return (i[e] = r), this._isRewriteNext(n, o) ? r : null;
            }),
            (e.prototype._isRewriteNext = function (t, e) {
              if (null == e && null != t) return !1;
              var r = t === e,
                i = this._isDelta(e),
                s = this._isDelta(t),
                n = !1,
                o = !1;
              return (
                s && i
                  ? f["default"].getDeltaEnd(t) ==
                      f["default"].getDeltaStart(e) && (o = !0)
                  : i && (n = f["default"].getDeltaStart(e) === "" + t),
                r || n || o
              );
            }),
            (e.prototype._tuneSubModules = function () {
              for (var t = 1; t < this._modules.length; t++)
                this._modules[t]._tuneNewOptions(this._history[t]);
            }),
            (e.prototype._resetTweens = function () {
              var t = 0,
                e = 0,
                r = this.timeline._timelines;
              if (null != r) {
                for (var t = 0; t < r.length; t++) {
                  var i = r[t],
                    s = r[t - 1];
                  (e += s ? s._props.repeatTime : 0),
                    this._resetTween(i, this._history[t], e);
                }
                this.timeline._setProp(this._props.timeline),
                  this.timeline._recalcTotalDuration();
              }
            }),
            (e.prototype._resetTween = function (t, e) {
              var r =
                arguments.length <= 2 || void 0 === arguments[2]
                  ? 0
                  : arguments[2];
              (e.shiftTime = r), t._setProp(e);
            }),
            e
          );
        })(_["default"]);
      e["default"] = y;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(23),
        n = i(s),
        o = r(8),
        a = i(o),
        p =
          (r(19),
          (function () {
            function t() {
              var e =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? {}
                  : arguments[0];
              n["default"](this, t),
                (this._o = e),
                this._createTween(e.tweenOptions),
                !this._o.isChained && this.refresh(!0);
            }
            return (
              (t.prototype.refresh = function (t) {
                this._previousValues = [];
                for (var e = this._o.deltas, r = 0; r < e.length; r++) {
                  var i = e[r].name;
                  this._previousValues.push({
                    name: i,
                    value: this._o.props[i],
                  });
                }
                return this.tween._refresh(t), this;
              }),
              (t.prototype.restore = function () {
                for (var t = this._previousValues, e = 0; e < t.length; e++) {
                  var r = t[e];
                  this._o.props[r.name] = r.value;
                }
                return this;
              }),
              (t.prototype._createTween = function () {
                var t =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? {}
                      : arguments[0],
                  e = this;
                (t.callbackOverrides = {
                  onUpdate: function (t, r) {
                    e._calcCurrentProps(t, r);
                  },
                }),
                  this._o.isChained ||
                    (t.callbackOverrides.onRefresh = function (t, r, i) {
                      e._calcCurrentProps(r, i);
                    }),
                  (t.callbacksContext = this._o.callbacksContext),
                  (this.tween = new a["default"](t));
              }),
              (t.prototype._calcCurrentProps = function (t, e) {
                for (var r = this._o.deltas, i = 0; i < r.length; i++) {
                  var s = r[i].type;
                  this["_calcCurrent_" + s](r[i], t, e);
                }
              }),
              (t.prototype._calcCurrent_color = function (t, e, r) {
                var i,
                  s,
                  n,
                  o,
                  a = t.start,
                  p = t.delta;
                if (t.curve) {
                  var u = t.curve(r);
                  (i = parseInt(u * (a.r + r * p.r), 10)),
                    (s = parseInt(u * (a.g + r * p.g), 10)),
                    (n = parseInt(u * (a.b + r * p.b), 10)),
                    (o = parseFloat(u * (a.a + r * p.a)));
                } else
                  (i = parseInt(a.r + e * p.r, 10)),
                    (s = parseInt(a.g + e * p.g, 10)),
                    (n = parseInt(a.b + e * p.b, 10)),
                    (o = parseFloat(a.a + e * p.a));
                this._o.props[t.name] =
                  "rgba(" + i + "," + s + "," + n + "," + o + ")";
              }),
              (t.prototype._calcCurrent_number = function (t, e, r) {
                this._o.props[t.name] = t.curve
                  ? t.curve(r) * (t.start + r * t.delta)
                  : t.start + e * t.delta;
              }),
              (t.prototype._calcCurrent_unit = function (t, e, r) {
                var i = t.curve
                  ? t.curve(r) * (t.start.value + r * t.delta)
                  : t.start.value + e * t.delta;
                this._o.props[t.name] = "" + i + t.end.unit;
              }),
              (t.prototype._calcCurrent_array = function (t, e, r) {
                for (
                  var i = t.name,
                    s = this._o.props,
                    n = "",
                    o = t.curve ? t.curve(r) : null,
                    a = 0;
                  a < t.delta.length;
                  a++
                ) {
                  var p = t.delta[a],
                    u = t.curve
                      ? o * (t.start[a].value + r * p.value)
                      : t.start[a].value + e * p.value;
                  n += "" + u + p.unit + " ";
                }
                s[i] = n;
              }),
              t
            );
          })());
      e["default"] = p;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(27),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(28),
        u = i(p),
        l = r(9),
        h = i(l),
        c = r(8),
        f = i(c),
        d = r(14),
        _ = i(d),
        y = r(22),
        m = r(19),
        g = {};
      f["default"].prototype._declareDefaults.call(g);
      for (var v = u["default"](g._defaults), w = 0; w < v.length; w++)
        g._defaults[v[w]] = 1;
      g._defaults.timeline = 1;
      var b = g._defaults,
        S = (function () {
          function t() {
            var e =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0];
            a["default"](this, t),
              (this._o = e),
              (this._shortColors = {
                transparent: "rgba(0,0,0,0)",
                none: "rgba(0,0,0,0)",
                aqua: "rgb(0,255,255)",
                black: "rgb(0,0,0)",
                blue: "rgb(0,0,255)",
                fuchsia: "rgb(255,0,255)",
                gray: "rgb(128,128,128)",
                green: "rgb(0,128,0)",
                lime: "rgb(0,255,0)",
                maroon: "rgb(128,0,0)",
                navy: "rgb(0,0,128)",
                olive: "rgb(128,128,0)",
                purple: "rgb(128,0,128)",
                red: "rgb(255,0,0)",
                silver: "rgb(192,192,192)",
                teal: "rgb(0,128,128)",
                white: "rgb(255,255,255)",
                yellow: "rgb(255,255,0)",
                orange: "rgb(255,128,0)",
              }),
              (this._ignoreDeltasMap = { prevChainModule: 1, masterModule: 1 }),
              this._parseDeltas(e.options),
              this._createDeltas(),
              this._createTimeline(this._mainTweenOptions);
          }
          return (
            (t.prototype.refresh = function (t) {
              for (var e = 0; e < this._deltas.length; e++)
                this._deltas[e].refresh(t);
              return this;
            }),
            (t.prototype.restore = function () {
              for (var t = 0; t < this._deltas.length; t++)
                this._deltas[t].restore();
              return this;
            }),
            (t.prototype._createTimeline = function () {
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0];
              (this.timeline = new h["default"]()),
                this.timeline.add(this._deltas);
            }),
            (t.prototype._createDeltas = function () {
              (this._deltas = []),
                this._deltas.push(
                  this._createDelta(this._mainDeltas, this._mainTweenOptions)
                );
              for (var t = 0; t < this._childDeltas.length; t++) {
                var e = this._childDeltas[t];
                this._deltas.push(this._createDelta([e.delta], e.tweenOptions));
              }
            }),
            (t.prototype._createDelta = function (t, e) {
              var r = this._o;
              return new _["default"]({
                deltas: t,
                tweenOptions: e,
                props: r.props,
                isChained: r.isChained,
                callbacksContext: r.callbacksContext,
              });
            }),
            (t.prototype._parseDeltas = function (t) {
              var e = this._splitTweenOptions(t),
                r = e.delta;
              (this._mainTweenOptions = e.tweenOptions),
                (this._mainDeltas = []),
                (this._childDeltas = []);
              for (var i = u["default"](r), s = 0; s < i.length; s++) {
                var n = i[s];
                if (this._isDelta(r[n]) && !this._ignoreDeltasMap[n]) {
                  var o = this._splitAndParseDelta(n, r[n]);
                  o.tweenOptions
                    ? this._childDeltas.push(o)
                    : this._mainDeltas.push(o.delta);
                }
              }
            }),
            (t.prototype._splitAndParseDelta = function (t, e) {
              var r = this._splitTweenOptions(e);
              return (r.delta = this._parseDelta(t, r.delta)), r;
            }),
            (t.prototype._parseDelta = function (t, e, r) {
              return this._o.customProps && null != this._o.customProps[t]
                ? this._parseDeltaByCustom(t, e, r)
                : this._parseDeltaByGuess(t, e, r);
            }),
            (t.prototype._parseDeltaByCustom = function (t, e, r) {
              return this._parseNumberDelta(t, e, r);
            }),
            (t.prototype._parseDeltaByGuess = function (t, e, r) {
              var i = this._preparseDelta(e),
                s = i.start,
                n = this._o;
              return !isNaN(parseFloat(s)) ||
                s.match(/rand\(/) ||
                s.match(/stagger\(/)
                ? n.arrayPropertyMap && n.arrayPropertyMap[t]
                  ? this._parseArrayDelta(t, e)
                  : n.numberPropertyMap && n.numberPropertyMap[t]
                  ? this._parseNumberDelta(t, e, r)
                  : this._parseUnitDelta(t, e, r)
                : this._parseColorDelta(t, e);
            }),
            (t.prototype._splitTweenOptions = function (t) {
              t = n["default"]({}, t);
              for (
                var e = u["default"](t), r = {}, i = null, s = 0;
                s < e.length;
                s++
              ) {
                var o = e[s];
                b[o] &&
                  (null != t[o] && ((r[o] = t[o]), (i = !0)), delete t[o]);
              }
              return { delta: t, tweenOptions: i ? r : void 0 };
            }),
            (t.prototype._isDelta = function (t) {
              var e = m.isObject(t);
              return (e = e && !t.unit), !(!e || m.isArray(t) || m.isDOM(t));
            }),
            (t.prototype._parseColorDelta = function (t, e) {
              if ("strokeLinecap" === t)
                return (
                  m.warn(
                    "Sorry, stroke-linecap property is not animatable yet, using the start(#{start}) value instead",
                    e
                  ),
                  {}
                );
              var r = this._preparseDelta(e),
                i = this._makeColorObj(r.start),
                s = this._makeColorObj(r.end),
                n = {
                  type: "color",
                  name: t,
                  start: i,
                  end: s,
                  curve: r.curve,
                  delta: {
                    r: s.r - i.r,
                    g: s.g - i.g,
                    b: s.b - i.b,
                    a: s.a - i.a,
                  },
                };
              return n;
            }),
            (t.prototype._parseArrayDelta = function (t, e) {
              var r = this._preparseDelta(e),
                i = this._strToArr(r.start),
                s = this._strToArr(r.end);
              m.normDashArrays(i, s);
              for (var n = 0; n < i.length; n++) {
                var o = s[n];
                m.mergeUnits(i[n], o, t);
              }
              var a = {
                type: "array",
                name: t,
                start: i,
                end: s,
                delta: m.calcArrDelta(i, s),
                curve: r.curve,
              };
              return a;
            }),
            (t.prototype._parseUnitDelta = function (t, e, r) {
              var i = this._preparseDelta(e),
                s = m.parseUnit(m.parseStringOption(i.end, r)),
                n = m.parseUnit(m.parseStringOption(i.start, r));
              m.mergeUnits(n, s, t);
              var o = {
                type: "unit",
                name: t,
                start: n,
                end: s,
                delta: s.value - n.value,
                curve: i.curve,
              };
              return o;
            }),
            (t.prototype._parseNumberDelta = function (t, e, r) {
              var i = this._preparseDelta(e),
                s = parseFloat(m.parseStringOption(i.end, r)),
                n = parseFloat(m.parseStringOption(i.start, r)),
                o = {
                  type: "number",
                  name: t,
                  start: n,
                  end: s,
                  delta: s - n,
                  curve: i.curve,
                };
              return o;
            }),
            (t.prototype._preparseDelta = function (t) {
              t = n["default"]({}, t);
              var e = t.curve;
              null != e && ((e = y.parseEasing(e)), (e._parent = this)),
                delete t.curve;
              var r = u["default"](t)[0],
                i = t[r];
              return { start: r, end: i, curve: e };
            }),
            (t.prototype._makeColorObj = function (t) {
              var e = {};
              if ("#" === t[0]) {
                var r = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(
                  t
                );
                if (r) {
                  var i = 2 === r[1].length ? r[1] : r[1] + r[1],
                    s = 2 === r[2].length ? r[2] : r[2] + r[2],
                    n = 2 === r[3].length ? r[3] : r[3] + r[3];
                  e = {
                    r: parseInt(i, 16),
                    g: parseInt(s, 16),
                    b: parseInt(n, 16),
                    a: 1,
                  };
                }
              }
              if ("#" !== t[0]) {
                var o = "r" === t[0] && "g" === t[1] && "b" === t[2],
                  a = void 0;
                o && (a = t),
                  o ||
                    (this._shortColors[t]
                      ? (a = this._shortColors[t])
                      : ((m.div.style.color = t),
                        (a = m.computedStyle(m.div).color)));
                var p = "^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),",
                  u = "\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$",
                  r = new RegExp(p + u, "gi").exec(a),
                  l = parseFloat(r[4] || 1);
                r &&
                  (e = {
                    r: parseInt(r[1], 10),
                    g: parseInt(r[2], 10),
                    b: parseInt(r[3], 10),
                    a: null == l || isNaN(l) ? 1 : l,
                  });
              }
              return e;
            }),
            (t.prototype._strToArr = function (t) {
              var e = [];
              return "number" != typeof t || isNaN(t)
                ? (t
                    .trim()
                    .split(/\s+/gim)
                    .forEach(function (t) {
                      e.push(m.parseUnit(m.parseIfRand(t)));
                    }),
                  e)
                : (e.push(m.parseUnit(t)), e);
            }),
            t
          );
        })();
      e["default"] = S;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(18),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(19),
        u = i(p),
        l = (function () {
          function t() {
            var e =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0];
            a["default"](this, t),
              (this._o = e),
              (this._index = this._o.index || 0),
              (this._arrayPropertyMap = {
                strokeDashoffset: 1,
                strokeDasharray: 1,
                origin: 1,
              }),
              (this._skipPropsDelta = {
                timeline: 1,
                prevChainModule: 1,
                callbacksContext: 1,
              }),
              this._declareDefaults(),
              this._extendDefaults(),
              this._vars(),
              this._render();
          }
          return (
            (t.prototype._declareDefaults = function () {
              this._defaults = {};
            }),
            (t.prototype._vars = function () {
              (this._progress = 0), (this._strokeDasharrayBuffer = []);
            }),
            (t.prototype._render = function () {}),
            (t.prototype._setProp = function (t, e) {
              if (
                "object" ===
                ("undefined" == typeof t ? "undefined" : n["default"](t))
              )
                for (var r in t) this._assignProp(r, t[r]);
              else this._assignProp(t, e);
            }),
            (t.prototype._assignProp = function (t, e) {
              this._props[t] = e;
            }),
            (t.prototype._show = function () {
              var t = this._props;
              this.el &&
                (t.isSoftHide
                  ? this._showByTransform()
                  : (this.el.style.display = "block"),
                (this._isShown = !0));
            }),
            (t.prototype._hide = function () {
              this.el &&
                (this._props.isSoftHide
                  ? u["default"].setPrefixedStyle(
                      this.el,
                      "transform",
                      "scale(0)"
                    )
                  : (this.el.style.display = "none"),
                (this._isShown = !1));
            }),
            (t.prototype._showByTransform = function () {}),
            (t.prototype._parseOptionString = function (t) {
              return (
                "string" == typeof t &&
                  t.match(/stagger/) &&
                  (t = u["default"].parseStagger(t, this._index)),
                "string" == typeof t &&
                  t.match(/rand/) &&
                  (t = u["default"].parseRand(t)),
                t
              );
            }),
            (t.prototype._parsePositionOption = function (t, e) {
              return (
                u["default"].unitOptionMap[t] &&
                  (e = u["default"].parseUnit(e).string),
                e
              );
            }),
            (t.prototype._parseStrokeDashOption = function (t, e) {
              var r = e;
              if (this._arrayPropertyMap[t]) {
                var r = [];
                switch (
                  "undefined" == typeof e ? "undefined" : n["default"](e)
                ) {
                  case "number":
                    r.push(u["default"].parseUnit(e));
                    break;
                  case "string":
                    for (var i = e.split(" "), s = 0; s < i.length; s++)
                      r.push(u["default"].parseUnit(i[s]));
                }
              }
              return r;
            }),
            (t.prototype._isDelta = function (t) {
              var e = u["default"].isObject(t);
              return (
                (e = e && !t.unit),
                !(!e || u["default"].isArray(t) || u["default"].isDOM(t))
              );
            }),
            (t.prototype._getDelta = function (t, e) {
              var r;
              if (
                (("left" !== t && "top" !== t) ||
                  this._o.ctx ||
                  u["default"].warn(
                    "Consider to animate x/y properties instead of left/top,\n        as it would be much more performant",
                    e
                  ),
                !this._skipPropsDelta || !this._skipPropsDelta[t])
              ) {
                (r = u["default"].parseDelta(t, e, this._index)),
                  null != r.type && (this._deltas[t] = r);
                var i =
                  "object" === n["default"](r.end)
                    ? 0 === r.end.value
                      ? 0
                      : r.end.string
                    : r.end;
                this._props[t] = i;
              }
            }),
            (t.prototype._extendDefaults = function () {
              (this._props = {}), (this._deltas = {});
              for (var t in this._defaults) {
                var e = null != this._o[t] ? this._o[t] : this._defaults[t];
                this._parseOption(t, e);
              }
            }),
            (t.prototype._tuneNewOptions = function (t) {
              this._hide();
              for (var e in t)
                t && delete this._deltas[e],
                  (this._o[e] = t[e]),
                  this._parseOption(e, t[e]);
            }),
            (t.prototype._parseOption = function (t, e) {
              if (this._isDelta(e) && !this._skipPropsDelta[t]) {
                this._getDelta(t, e);
                var r = u["default"].getDeltaEnd(e);
                return this._assignProp(t, this._parseProperty(t, r));
              }
              this._assignProp(t, this._parseProperty(t, e));
            }),
            (t.prototype._parsePreArrayProperty = function (t, e) {
              return (
                (e = this._parseOptionString(e)),
                this._parsePositionOption(t, e)
              );
            }),
            (t.prototype._parseProperty = function (t, e) {
              return "parent" === t
                ? u["default"].parseEl(e)
                : ((e = this._parsePreArrayProperty(t, e)),
                  this._parseStrokeDashOption(t, e));
            }),
            (t.prototype._parseDeltaValues = function (t, e) {
              var r = {};
              for (var i in e) {
                var s = e[i],
                  n = this._parsePreArrayProperty(t, s);
                r[this._parsePreArrayProperty(t, i)] = n;
              }
              return r;
            }),
            (t.prototype._preparsePropValue = function (t, e) {
              return this._isDelta(e)
                ? this._parseDeltaValues(t, e)
                : this._parsePreArrayProperty(t, e);
            }),
            (t.prototype._calcCurrentProps = function (t, e) {
              for (var r in this._deltas) {
                var i = this._deltas[r],
                  s = !!i.curve,
                  n = null == i.easing || s ? t : i.easing(e);
                if ("array" === i.type) {
                  var o;
                  u["default"].isArray(this._props[r])
                    ? ((o = this._props[r]), (o.length = 0))
                    : (o = []);
                  for (
                    var a = s ? i.curve(e) : null, p = 0;
                    p < i.delta.length;
                    p++
                  ) {
                    var l = i.delta[p],
                      h = s
                        ? a * (i.start[p].value + e * l.value)
                        : i.start[p].value + n * l.value;
                    o.push({ string: "" + h + l.unit, value: h, unit: l.unit });
                  }
                  this._props[r] = o;
                } else if ("number" === i.type)
                  this._props[r] = s
                    ? i.curve(e) * (i.start + e * i.delta)
                    : i.start + n * i.delta;
                else if ("unit" === i.type) {
                  var c = s
                    ? i.curve(e) * (i.start.value + e * i.delta)
                    : i.start.value + n * i.delta;
                  this._props[r] = "" + c + i.end.unit;
                } else if ("color" === i.type) {
                  var f, d, _, y;
                  if (s) {
                    var m = i.curve(e);
                    (f = parseInt(m * (i.start.r + e * i.delta.r), 10)),
                      (d = parseInt(m * (i.start.g + e * i.delta.g), 10)),
                      (_ = parseInt(m * (i.start.b + e * i.delta.b), 10)),
                      (y = parseFloat(m * (i.start.a + e * i.delta.a)));
                  } else
                    (f = parseInt(i.start.r + n * i.delta.r, 10)),
                      (d = parseInt(i.start.g + n * i.delta.g, 10)),
                      (_ = parseInt(i.start.b + n * i.delta.b, 10)),
                      (y = parseFloat(i.start.a + n * i.delta.a));
                  this._props[r] =
                    "rgba(" + f + "," + d + "," + _ + "," + y + ")";
                }
              }
            }),
            (t.prototype._setProgress = function (t, e) {
              (this._progress = t), this._calcCurrentProps(t, e);
            }),
            t
          );
        })();
      e["default"] = l;
    },
    function (t, e, r) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            (t.children = []),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var s =
        "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof _Symbol &&
                t.constructor === _Symbol
                ? "symbol"
                : typeof t;
            };
      e.__esModule = !0;
      var n = r(32),
        o = i(n),
        a = r(33),
        p = i(a);
      e["default"] =
        "function" == typeof p["default"] && "symbol" === s(o["default"])
          ? function (t) {
              return "undefined" == typeof t ? "undefined" : s(t);
            }
          : function (t) {
              return t &&
                "function" == typeof p["default"] &&
                t.constructor === p["default"]
                ? "symbol"
                : "undefined" == typeof t
                ? "undefined"
                : s(t);
            };
    },
    function (t, e, r) {
      var i, s;
      (i = (function () {
        function t() {
          this.vars();
        }
        return (
          (t.prototype.NS = "http://www.w3.org/2000/svg"),
          (t.prototype.logBadgeCss =
            "background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;"),
          (t.prototype.shortColors = {
            transparent: "rgba(0,0,0,0)",
            none: "rgba(0,0,0,0)",
            aqua: "rgb(0,255,255)",
            black: "rgb(0,0,0)",
            blue: "rgb(0,0,255)",
            fuchsia: "rgb(255,0,255)",
            gray: "rgb(128,128,128)",
            green: "rgb(0,128,0)",
            lime: "rgb(0,255,0)",
            maroon: "rgb(128,0,0)",
            navy: "rgb(0,0,128)",
            olive: "rgb(128,128,0)",
            purple: "rgb(128,0,128)",
            red: "rgb(255,0,0)",
            silver: "rgb(192,192,192)",
            teal: "rgb(0,128,128)",
            white: "rgb(255,255,255)",
            yellow: "rgb(255,255,0)",
            orange: "rgb(255,128,0)",
          }),
          (t.prototype.chainOptionMap = {}),
          (t.prototype.callbacksMap = {
            onRefresh: 1,
            onStart: 1,
            onComplete: 1,
            onFirstUpdate: 1,
            onUpdate: 1,
            onProgress: 1,
            onRepeatStart: 1,
            onRepeatComplete: 1,
            onPlaybackStart: 1,
            onPlaybackPause: 1,
            onPlaybackStop: 1,
            onPlaybackComplete: 1,
          }),
          (t.prototype.tweenOptionMap = {
            duration: 1,
            delay: 1,
            speed: 1,
            repeat: 1,
            easing: 1,
            backwardEasing: 1,
            isYoyo: 1,
            shiftTime: 1,
            isReversed: 1,
            callbacksContext: 1,
          }),
          (t.prototype.unitOptionMap = {
            left: 1,
            top: 1,
            x: 1,
            y: 1,
            rx: 1,
            ry: 1,
          }),
          (t.prototype.RAD_TO_DEG = 180 / Math.PI),
          (t.prototype.vars = function () {
            var t;
            return (
              (this.prefix = this.getPrefix()),
              this.getRemBase(),
              (this.isFF = "moz" === this.prefix.lowercase),
              (this.isIE = "ms" === this.prefix.lowercase),
              (t = navigator.userAgent),
              (this.isOldOpera = t.match(/presto/gim)),
              (this.isSafari = t.indexOf("Safari") > -1),
              (this.isChrome = t.indexOf("Chrome") > -1),
              (this.isOpera = t.toLowerCase().indexOf("op") > -1),
              this.isChrome && this.isSafari && (this.isSafari = !1),
              t.match(/PhantomJS/gim) && (this.isSafari = !1),
              this.isChrome && this.isOpera && (this.isChrome = !1),
              (this.is3d = this.checkIf3d()),
              (this.uniqIDs = -1),
              (this.div = document.createElement("div")),
              document.body.appendChild(this.div),
              (this.defaultStyles = this.computedStyle(this.div))
            );
          }),
          (t.prototype.cloneObj = function (t, e) {
            var r, i, s, n;
            for (s = Object.keys(t), n = {}, r = s.length; r--; )
              (i = s[r]), null != e ? e[i] || (n[i] = t[i]) : (n[i] = t[i]);
            return n;
          }),
          (t.prototype.extend = function (t, e) {
            var r, i;
            for (r in e) (i = e[r]), null == t[r] && (t[r] = e[r]);
            return t;
          }),
          (t.prototype.getRemBase = function () {
            var t, e;
            return (
              (t = document.querySelector("html")),
              (e = getComputedStyle(t)),
              (this.remBase = parseFloat(e.fontSize))
            );
          }),
          (t.prototype.clamp = function (t, e, r) {
            return e > t ? e : t > r ? r : t;
          }),
          (t.prototype.setPrefixedStyle = function (t, e, r) {
            return (
              "transform" === e && (t.style["" + this.prefix.css + e] = r),
              (t.style[e] = r)
            );
          }),
          (t.prototype.style = function (t, e, r) {
            var i, s, n, o;
            if ("object" == typeof e) {
              for (s = Object.keys(e), n = s.length, o = []; n--; )
                (i = s[n]), (r = e[i]), o.push(this.setPrefixedStyle(t, i, r));
              return o;
            }
            return this.setPrefixedStyle(t, e, r);
          }),
          (t.prototype.prepareForLog = function (t) {
            return (
              (t = Array.prototype.slice.apply(t)),
              t.unshift("::"),
              t.unshift(this.logBadgeCss),
              t.unshift("%cmo·js%c"),
              t
            );
          }),
          (t.prototype.log = function () {
            return mojs.isDebug !== !1
              ? console.log.apply(console, this.prepareForLog(arguments))
              : void 0;
          }),
          (t.prototype.warn = function () {
            return mojs.isDebug !== !1
              ? console.warn.apply(console, this.prepareForLog(arguments))
              : void 0;
          }),
          (t.prototype.error = function () {
            return mojs.isDebug !== !1
              ? console.error.apply(console, this.prepareForLog(arguments))
              : void 0;
          }),
          (t.prototype.parseUnit = function (t) {
            var e, r, i, s, n, o;
            return "number" == typeof t
              ? (n = {
                  unit: "px",
                  isStrict: !1,
                  value: t,
                  string: 0 === t ? "" + t : t + "px",
                })
              : "string" == typeof t
              ? ((s = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg/gim),
                (o = null != (i = t.match(s)) ? i[0] : void 0),
                (r = !0),
                o || ((o = "px"), (r = !1)),
                (e = parseFloat(t)),
                (n = {
                  unit: o,
                  isStrict: r,
                  value: e,
                  string: 0 === e ? "" + e : "" + e + o,
                }))
              : t;
          }),
          (t.prototype.bind = function (t, e) {
            var r, i;
            return (
              (i = function () {
                var i, s;
                return (
                  (i = Array.prototype.slice.call(arguments)),
                  (s = r.concat(i)),
                  t.apply(e, s)
                );
              }),
              (r = Array.prototype.slice.call(arguments, 2)),
              i
            );
          }),
          (t.prototype.getRadialPoint = function (t) {
            var e, r, i, s;
            return (
              null == t && (t = {}),
              (r = 0.017453292519943295 * (t.angle - 90)),
              (i = null != t.radiusX ? t.radiusX : t.radius),
              (s = null != t.radiusY ? t.radiusY : t.radius),
              (e = {
                x: t.center.x + Math.cos(r) * i,
                y: t.center.y + Math.sin(r) * s,
              })
            );
          }),
          (t.prototype.getPrefix = function () {
            var t, e, r, i;
            return (
              (r = window.getComputedStyle(document.documentElement, "")),
              (i = Array.prototype.slice
                .call(r)
                .join("")
                .match(/-(moz|webkit|ms)-/)),
              (e = (i || ("" === r.OLink && ["", "o"]))[1]),
              (t = "WebKit|Moz|MS|O".match(new RegExp("(" + e + ")", "i"))[1]),
              {
                dom: t,
                lowercase: e,
                css: "-" + e + "-",
                js: e[0].toUpperCase() + e.substr(1),
              }
            );
          }),
          (t.prototype.strToArr = function (t) {
            var e;
            return (
              (e = []),
              "number" != typeof t || isNaN(t)
                ? (t
                    .trim()
                    .split(/\s+/gim)
                    .forEach(
                      (function (t) {
                        return function (r) {
                          return e.push(t.parseUnit(t.parseIfRand(r)));
                        };
                      })(this)
                    ),
                  e)
                : (e.push(this.parseUnit(t)), e)
            );
          }),
          (t.prototype.calcArrDelta = function (t, e) {
            var r, i, s, n, o;
            for (r = [], i = s = 0, n = t.length; n > s; i = ++s)
              (o = t[i]),
                (r[i] = this.parseUnit(
                  "" + (e[i].value - t[i].value) + e[i].unit
                ));
            return r;
          }),
          (t.prototype.isArray = function (t) {
            return t instanceof Array;
          }),
          (t.prototype.normDashArrays = function (t, e) {
            var r, i, s, n, o, a, p, u, l, h;
            if (((r = t.length), (i = e.length), r > i))
              for (
                p = r - i, h = e.length, n = o = 0, u = p;
                u >= 0 ? u > o : o > u;
                n = u >= 0 ? ++o : --o
              )
                (s = n + h), e.push(this.parseUnit("0" + t[s].unit));
            else if (i > r)
              for (
                p = i - r, h = t.length, n = a = 0, l = p;
                l >= 0 ? l > a : a > l;
                n = l >= 0 ? ++a : --a
              )
                (s = n + h), t.push(this.parseUnit("0" + e[s].unit));
            return [t, e];
          }),
          (t.prototype.makeColorObj = function (t) {
            var e, r, i, s, n, o, a, p, u, l;
            return (
              "#" === t[0] &&
                ((u = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(
                  t
                )),
                (i = {}),
                u &&
                  ((o = 2 === u[1].length ? u[1] : u[1] + u[1]),
                  (s = 2 === u[2].length ? u[2] : u[2] + u[2]),
                  (r = 2 === u[3].length ? u[3] : u[3] + u[3]),
                  (i = {
                    r: parseInt(o, 16),
                    g: parseInt(s, 16),
                    b: parseInt(r, 16),
                    a: 1,
                  }))),
              "#" !== t[0] &&
                ((n = "r" === t[0] && "g" === t[1] && "b" === t[2]),
                n && (l = t),
                n ||
                  (l = this.shortColors[t]
                    ? this.shortColors[t]
                    : ((this.div.style.color = t),
                      this.computedStyle(this.div).color)),
                (a = "^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),"),
                (p = "\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$"),
                (u = new RegExp(a + p, "gi").exec(l)),
                (i = {}),
                (e = parseFloat(u[4] || 1)),
                u &&
                  (i = {
                    r: parseInt(u[1], 10),
                    g: parseInt(u[2], 10),
                    b: parseInt(u[3], 10),
                    a: null == e || isNaN(e) ? 1 : e,
                  })),
              i
            );
          }),
          (t.prototype.computedStyle = function (t) {
            return getComputedStyle(t);
          }),
          (t.prototype.capitalize = function (t) {
            if ("string" != typeof t)
              throw Error("String expected - nothing to capitalize");
            return t.charAt(0).toUpperCase() + t.substring(1);
          }),
          (t.prototype.parseRand = function (t) {
            var e, r, i;
            return (
              (r = t.split(/rand\(|\,|\)/)),
              (i = this.parseUnit(r[2])),
              (e = this.rand(parseFloat(r[1]), parseFloat(r[2]))),
              i.unit && r[2].match(i.unit) ? e + i.unit : e
            );
          }),
          (t.prototype.parseStagger = function (t, e) {
            var r, i, s, n, o, a;
            return (
              (a = t.split(/stagger\(|\)$/)[1].toLowerCase()),
              (s = a.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim)),
              (a =
                s.length > 3
                  ? ((r = this.parseUnit(this.parseIfRand(s[1]))), s[3])
                  : ((r = this.parseUnit(0)), s[1])),
              (a = this.parseIfRand(a)),
              (o = this.parseUnit(a)),
              (i = e * o.value + r.value),
              (n = r.isStrict ? r.unit : o.isStrict ? o.unit : ""),
              n ? "" + i + n : i
            );
          }),
          (t.prototype.parseIfStagger = function (t, e) {
            return "string" == typeof t && t.match(/stagger/g)
              ? this.parseStagger(t, e)
              : t;
          }),
          (t.prototype.parseIfRand = function (t) {
            return "string" == typeof t && t.match(/rand\(/)
              ? this.parseRand(t)
              : t;
          }),
          (t.prototype.parseDelta = function (t, e, r) {
            var i, s, n, o, a, p, u, l, h, c, f, d;
            if (
              ((e = this.cloneObj(e)),
              (n = e.easing),
              null != n && (n = mojs.easing.parseEasing(n)),
              delete e.easing,
              (i = e.curve),
              null != i && (i = mojs.easing.parseEasing(i)),
              delete e.curve,
              (c = Object.keys(e)[0]),
              (o = e[c]),
              (s = { start: c }),
              !isNaN(parseFloat(c)) ||
                c.match(/rand\(/) ||
                c.match(/stagger\(/))
            )
              if (
                "strokeDasharray" === t ||
                "strokeDashoffset" === t ||
                "origin" === t
              ) {
                for (
                  f = this.strToArr(c),
                    a = this.strToArr(o),
                    this.normDashArrays(f, a),
                    u = l = 0,
                    h = f.length;
                  h > l;
                  u = ++l
                )
                  (c = f[u]), (o = a[u]), this.mergeUnits(c, o, t);
                s = {
                  type: "array",
                  name: t,
                  start: f,
                  end: a,
                  delta: this.calcArrDelta(f, a),
                  easing: n,
                  curve: i,
                };
              } else
                this.callbacksMap[t] ||
                  this.tweenOptionMap[t] ||
                  (this.unitOptionMap[t]
                    ? ((o = this.parseUnit(this.parseStringOption(o, r))),
                      (c = this.parseUnit(this.parseStringOption(c, r))),
                      this.mergeUnits(c, o, t),
                      (s = {
                        type: "unit",
                        name: t,
                        start: c,
                        end: o,
                        delta: o.value - c.value,
                        easing: n,
                        curve: i,
                      }))
                    : ((o = parseFloat(this.parseStringOption(o, r))),
                      (c = parseFloat(this.parseStringOption(c, r))),
                      (s = {
                        type: "number",
                        name: t,
                        start: c,
                        end: o,
                        delta: o - c,
                        easing: n,
                        curve: i,
                      })));
            else {
              if ("strokeLinecap" === t)
                return (
                  this.warn(
                    "Sorry, stroke-linecap property is not animatable yet, using the start(" +
                      c +
                      ") value instead",
                    e
                  ),
                  s
                );
              (d = this.makeColorObj(c)),
                (p = this.makeColorObj(o)),
                (s = {
                  type: "color",
                  name: t,
                  start: d,
                  end: p,
                  easing: n,
                  curve: i,
                  delta: {
                    r: p.r - d.r,
                    g: p.g - d.g,
                    b: p.b - d.b,
                    a: p.a - d.a,
                  },
                });
            }
            return s;
          }),
          (t.prototype.mergeUnits = function (t, e, r) {
            return !e.isStrict && t.isStrict
              ? ((e.unit = t.unit), (e.string = "" + e.value + e.unit))
              : e.isStrict && !t.isStrict
              ? ((t.unit = e.unit), (t.string = "" + t.value + t.unit))
              : e.isStrict && t.isStrict && e.unit !== t.unit
              ? ((t.unit = e.unit),
                (t.string = "" + t.value + t.unit),
                this.warn(
                  'Two different units were specified on "' +
                    r +
                    '" delta property, mo · js will fallback to end "' +
                    e.unit +
                    '" unit '
                ))
              : void 0;
          }),
          (t.prototype.rand = function (t, e) {
            return Math.random() * (e - t) + t;
          }),
          (t.prototype.isDOM = function (t) {
            var e;
            return null == t
              ? !1
              : ((e =
                  "number" == typeof t.nodeType &&
                  "string" == typeof t.nodeName),
                "object" == typeof t && e);
          }),
          (t.prototype.getChildElements = function (t) {
            var e, r, i;
            for (e = t.childNodes, r = [], i = e.length; i--; )
              1 === e[i].nodeType && r.unshift(e[i]);
            return r;
          }),
          (t.prototype.delta = function (t, e) {
            var r, i, s, n, o;
            return (
              (n = typeof t),
              (o = typeof e),
              (r = "string" === n || ("number" === n && !isNaN(t))),
              (i = "string" === o || ("number" === o && !isNaN(e))),
              r && i
                ? ((s = {}), (s[t] = e), s)
                : void this.error(
                    "delta method expects Strings or Numbers at input but got - " +
                      t +
                      ", " +
                      e
                  )
            );
          }),
          (t.prototype.getUniqID = function () {
            return ++this.uniqIDs;
          }),
          (t.prototype.parsePath = function (t) {
            var e;
            return "string" == typeof t
              ? "m" === t.charAt(0).toLowerCase()
                ? ((e = document.createElementNS(this.NS, "path")),
                  e.setAttributeNS(null, "d", t),
                  e)
                : document.querySelector(t)
              : t.style
              ? t
              : void 0;
          }),
          (t.prototype.closeEnough = function (t, e, r) {
            return Math.abs(t - e) < r;
          }),
          (t.prototype.checkIf3d = function () {
            var t, e, r, i;
            return (
              (t = document.createElement("div")),
              this.style(t, "transform", "translateZ(0)"),
              (r = t.style),
              (e = this.prefix.css + "transform"),
              (i = null != r[e] ? r[e] : r.transform),
              "" !== i
            );
          }),
          (t.prototype.isObject = function (t) {
            return null !== t && "object" == typeof t;
          }),
          (t.prototype.getDeltaEnd = function (t) {
            var e;
            return (e = Object.keys(t)[0]), t[e];
          }),
          (t.prototype.getDeltaStart = function (t) {
            var e;
            return (e = Object.keys(t)[0]);
          }),
          (t.prototype.isTweenProp = function (t) {
            return this.tweenOptionMap[t] || this.callbacksMap[t];
          }),
          (t.prototype.parseStringOption = function (t, e) {
            return (
              null == e && (e = 0),
              "string" == typeof t &&
                ((t = this.parseIfStagger(t, e)), (t = this.parseIfRand(t))),
              t
            );
          }),
          (t.prototype.getLastItem = function (t) {
            return t[t.length - 1];
          }),
          (t.prototype.parseEl = function (t) {
            return s.isDOM(t)
              ? t
              : ("string" == typeof t && (t = document.querySelector(t)),
                null === t && s.error("Can't parse HTML element: ", t),
                t);
          }),
          (t.prototype.force3d = function (t) {
            return this.setPrefixedStyle(t, "backface-visibility", "hidden"), t;
          }),
          (t.prototype.isDelta = function (t) {
            var e;
            return (
              (e = this.isObject(t)),
              (e = e && !t.unit),
              !(!e || this.isArray(t) || this.isDOM(t))
            );
          }),
          t
        );
      })()),
        (s = new i()),
        (t.exports = s);
    },
    function (t, e, r) {
      var i, s, n, o, a, p, u, l, h, c, f, d;
      (i = r(26)["default"] || r(26)),
        (p = r(36)["default"] || r(36)),
        (n = r(37)),
        (l = r(38)),
        (f = r(39)),
        (c = r(35)),
        (h = r(40)),
        (o = r(41)),
        (a = r(42)["default"] || r(42)),
        (u = r(43)),
        (d = r(19)),
        (s = (function () {
          function t() {
            this.addShape = d.bind(this.addShape, this);
          }
          return (
            (t.prototype.bit = i),
            (t.prototype.custom = p),
            (t.prototype.circle = n),
            (t.prototype.line = l),
            (t.prototype.zigzag = f),
            (t.prototype.rect = c),
            (t.prototype.polygon = h),
            (t.prototype.cross = o),
            (t.prototype.equal = u),
            (t.prototype.curve = a),
            (t.prototype.getShape = function (t) {
              return (
                this[t] ||
                d.error(
                  'no "' +
                    t +
                    '" shape available yet, please choose from this list:',
                  [
                    "circle",
                    "line",
                    "zigzag",
                    "rect",
                    "polygon",
                    "cross",
                    "equal",
                    "curve",
                  ]
                )
              );
            }),
            (t.prototype.addShape = function (t, e) {
              return (this[t] = e);
            }),
            t
          );
        })()),
        (t.exports = new s());
    },
    function (t, e, r) {
      var i,
        s,
        n,
        o,
        a,
        p = function (t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        };
      (o = r(19)),
        (a = r(34)),
        (n = r(8)["default"]),
        (s = r(9)["default"]),
        (i = (function () {
          function t(t) {
            (this.o = null != t ? t : {}),
              (this.calcHeight = p(this.calcHeight, this)),
              this.vars() || this.createTween();
          }
          return (
            (t.prototype.defaults = {
              path: null,
              curvature: { x: "75%", y: "50%" },
              isCompositeLayer: !0,
              delay: 0,
              duration: 1e3,
              easing: null,
              repeat: 0,
              yoyo: !1,
              onStart: null,
              onComplete: null,
              onUpdate: null,
              offsetX: 0,
              offsetY: 0,
              angleOffset: null,
              pathStart: 0,
              pathEnd: 1,
              motionBlur: 0,
              transformOrigin: null,
              isAngle: !1,
              isReverse: !1,
              isRunLess: !1,
              isPresetPosition: !0,
            }),
            (t.prototype.vars = function () {
              return (
                (this.getScaler = o.bind(this.getScaler, this)),
                (this.resize = a),
                (this.props = o.cloneObj(this.defaults)),
                this.extendOptions(this.o),
                (this.isMotionBlurReset = o.isSafari || o.isIE),
                this.isMotionBlurReset && (this.props.motionBlur = 0),
                (this.history = [o.cloneObj(this.props)]),
                this.postVars()
              );
            }),
            (t.prototype.curveToPath = function (t) {
              var e, r, i, s, n, a, p, u, l, h, c, f, d;
              return (
                (h = document.createElementNS(o.NS, "path")),
                (d = t.start),
                (l = { x: d.x + t.shift.x, y: d.x + t.shift.y }),
                (r = t.curvature),
                (p = t.shift.x),
                (u = t.shift.y),
                (f = Math.sqrt(p * p + u * u)),
                (c = f / 100),
                (e = Math.atan(u / p) * (180 / Math.PI) + 90),
                t.shift.x < 0 && (e += 180),
                (i = o.parseUnit(r.x)),
                (i = "%" === i.unit ? i.value * c : i.value),
                (a = o.getRadialPoint({
                  center: { x: d.x, y: d.y },
                  radius: i,
                  angle: e,
                })),
                (s = o.parseUnit(r.y)),
                (s = "%" === s.unit ? s.value * c : s.value),
                (n = o.getRadialPoint({
                  center: { x: a.x, y: a.y },
                  radius: s,
                  angle: e + 90,
                })),
                h.setAttribute(
                  "d",
                  "M" +
                    d.x +
                    "," +
                    d.y +
                    " Q" +
                    n.x +
                    "," +
                    n.y +
                    " " +
                    l.x +
                    "," +
                    l.y
                ),
                h
              );
            }),
            (t.prototype.postVars = function () {
              return (
                (this.props.pathStart = o.clamp(this.props.pathStart, 0, 1)),
                (this.props.pathEnd = o.clamp(
                  this.props.pathEnd,
                  this.props.pathStart,
                  1
                )),
                (this.angle = 0),
                (this.speedX = 0),
                (this.speedY = 0),
                (this.blurX = 0),
                (this.blurY = 0),
                (this.prevCoords = {}),
                (this.blurAmount = 20),
                (this.props.motionBlur = o.clamp(this.props.motionBlur, 0, 1)),
                (this.onUpdate = this.props.onUpdate),
                this.o.el
                  ? ((this.el = this.parseEl(this.props.el)),
                    this.props.motionBlur > 0 && this.createFilter(),
                    (this.path = this.getPath()),
                    this.path.getAttribute("d")
                      ? ((this.len = this.path.getTotalLength()),
                        (this.slicedLen =
                          this.len *
                          (this.props.pathEnd - this.props.pathStart)),
                        (this.startLen = this.props.pathStart * this.len),
                        (this.fill = this.props.fill),
                        null != this.fill &&
                        ((this.container = this.parseEl(
                          this.props.fill.container
                        )),
                        (this.fillRule = this.props.fill.fillRule || "all"),
                        this.getScaler(),
                        null != this.container)
                          ? (this.removeEvent(
                              this.container,
                              "onresize",
                              this.getScaler
                            ),
                            this.addEvent(
                              this.container,
                              "onresize",
                              this.getScaler
                            ))
                          : void 0)
                      : (o.error(
                          "Path has no coordinates to work with, aborting"
                        ),
                        !0))
                  : (o.error(
                      'Missed "el" option. It could be a selector, DOMNode or another module.'
                    ),
                    !0)
              );
            }),
            (t.prototype.addEvent = function (t, e, r) {
              return t.addEventListener(e, r, !1);
            }),
            (t.prototype.removeEvent = function (t, e, r) {
              return t.removeEventListener(e, r, !1);
            }),
            (t.prototype.createFilter = function () {
              var t, e;
              return (
                (t = document.createElement("div")),
                (this.filterID = "filter-" + o.getUniqID()),
                (t.innerHTML =
                  '<svg id="svg-' +
                  this.filterID +
                  '"\n    style="visibility:hidden; width:0px; height:0px">\n  <filter id="' +
                  this.filterID +
                  '" y="-20" x="-20" width="40" height="40">\n    <feOffset\n      id="blur-offset" in="SourceGraphic"\n      dx="0" dy="0" result="offset2"></feOffset>\n    <feGaussianblur\n      id="blur" in="offset2"\n      stdDeviation="0,0" result="blur2"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in="SourceGraphic"></feMergeNode>\n      <feMergeNode in="blur2"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>'),
                (e = t.querySelector("#svg-" + this.filterID)),
                (this.filter = e.querySelector("#blur")),
                (this.filterOffset = e.querySelector("#blur-offset")),
                document.body.insertBefore(e, document.body.firstChild),
                (this.el.style.filter = "url(#" + this.filterID + ")"),
                (this.el.style[o.prefix.css + "filter"] =
                  "url(#" + this.filterID + ")")
              );
            }),
            (t.prototype.parseEl = function (t) {
              return "string" == typeof t
                ? document.querySelector(t)
                : t instanceof HTMLElement
                ? t
                : null != t._setProp
                ? ((this.isModule = !0), t)
                : void 0;
            }),
            (t.prototype.getPath = function () {
              var t;
              return (
                (t = o.parsePath(this.props.path)),
                t
                  ? t
                  : this.props.path.x || this.props.path.y
                  ? this.curveToPath({
                      start: { x: 0, y: 0 },
                      shift: {
                        x: this.props.path.x || 0,
                        y: this.props.path.y || 0,
                      },
                      curvature: {
                        x: this.props.curvature.x || this.defaults.curvature.x,
                        y: this.props.curvature.y || this.defaults.curvature.y,
                      },
                    })
                  : void 0
              );
            }),
            (t.prototype.getScaler = function () {
              var t, e, r;
              switch (
                ((this.cSize = {
                  width: this.container.offsetWidth || 0,
                  height: this.container.offsetHeight || 0,
                }),
                (r = this.path.getPointAtLength(0)),
                (t = this.path.getPointAtLength(this.len)),
                (e = {}),
                (this.scaler = {}),
                (e.width = t.x >= r.x ? t.x - r.x : r.x - t.x),
                (e.height = t.y >= r.y ? t.y - r.y : r.y - t.y),
                this.fillRule)
              ) {
                case "all":
                  return this.calcWidth(e), this.calcHeight(e);
                case "width":
                  return this.calcWidth(e), (this.scaler.y = this.scaler.x);
                case "height":
                  return this.calcHeight(e), (this.scaler.x = this.scaler.y);
              }
            }),
            (t.prototype.calcWidth = function (t) {
              return (
                (this.scaler.x = this.cSize.width / t.width),
                !isFinite(this.scaler.x) && (this.scaler.x = 1)
              );
            }),
            (t.prototype.calcHeight = function (t) {
              return (
                (this.scaler.y = this.cSize.height / t.height),
                !isFinite(this.scaler.y) && (this.scaler.y = 1)
              );
            }),
            (t.prototype.run = function (t) {
              var e, r, i;
              if (t) {
                e = this.history[0];
                for (r in t)
                  (i = t[r]),
                    o.callbacksMap[r] || o.tweenOptionMap[r]
                      ? (o.warn(
                          'the property "' +
                            r +
                            '" property can not be overridden on run yet'
                        ),
                        delete t[r])
                      : (this.history[0][r] = i);
                this.tuneOptions(t);
              }
              return this.startTween();
            }),
            (t.prototype.createTween = function () {
              return (
                (this.tween = new n({
                  duration: this.props.duration,
                  delay: this.props.delay,
                  yoyo: this.props.yoyo,
                  repeat: this.props.repeat,
                  easing: this.props.easing,
                  onStart: (function (t) {
                    return function () {
                      var e;
                      return null != (e = t.props.onStart)
                        ? e.apply(t)
                        : void 0;
                    };
                  })(this),
                  onComplete: (function (t) {
                    return function () {
                      var e;
                      return (
                        t.props.motionBlur &&
                          t.setBlur({
                            blur: { x: 0, y: 0 },
                            offset: { x: 0, y: 0 },
                          }),
                        null != (e = t.props.onComplete) ? e.apply(t) : void 0
                      );
                    };
                  })(this),
                  onUpdate: (function (t) {
                    return function (e) {
                      return t.setProgress(e);
                    };
                  })(this),
                  onFirstUpdate: (function (t) {
                    return function (e, r) {
                      return e
                        ? void 0
                        : t.history.length > 1 && t.tuneOptions(t.history[0]);
                    };
                  })(this),
                })),
                (this.timeline = new s()),
                this.timeline.add(this.tween),
                !this.props.isRunLess && this.startTween(),
                this.props.isPresetPosition && this.setProgress(0, !0)
              );
            }),
            (t.prototype.startTween = function () {
              return setTimeout(
                (function (t) {
                  return function () {
                    var e;
                    return null != (e = t.timeline) ? e.play() : void 0;
                  };
                })(this),
                1
              );
            }),
            (t.prototype.setProgress = function (t, e) {
              var r, i, s, n;
              return (
                (r =
                  this.startLen +
                  (this.props.isReverse
                    ? (1 - t) * this.slicedLen
                    : t * this.slicedLen)),
                (i = this.path.getPointAtLength(r)),
                (s = i.x + this.props.offsetX),
                (n = i.y + this.props.offsetY),
                this._getCurrentAngle(i, r, t),
                this._setTransformOrigin(t),
                this._setTransform(s, n, t, e),
                this.props.motionBlur && this.makeMotionBlur(s, n)
              );
            }),
            (t.prototype.setElPosition = function (t, e, r) {
              var i, s, n, a;
              return (
                (n = 0 !== this.angle ? "rotate(" + this.angle + "deg)" : ""),
                (s = this.props.isCompositeLayer && o.is3d),
                (i = s ? "translateZ(0)" : ""),
                (a = "translate(" + t + "px," + e + "px) " + n + " " + i),
                o.setPrefixedStyle(this.el, "transform", a)
              );
            }),
            (t.prototype.setModulePosition = function (t, e) {
              return (
                this.el._setProp({
                  shiftX: t + "px",
                  shiftY: e + "px",
                  angle: this.angle,
                }),
                this.el._draw()
              );
            }),
            (t.prototype._getCurrentAngle = function (t, e, r) {
              var i, s, n, a, p;
              return (
                (s = "function" == typeof this.props.transformOrigin),
                this.props.isAngle || null != this.props.angleOffset || s
                  ? ((n = this.path.getPointAtLength(e - 1)),
                    (a = t.y - n.y),
                    (p = t.x - n.x),
                    (i = Math.atan(a / p)),
                    !isFinite(i) && (i = 0),
                    (this.angle = i * o.RAD_TO_DEG),
                    "function" != typeof this.props.angleOffset
                      ? (this.angle += this.props.angleOffset || 0)
                      : (this.angle = this.props.angleOffset.call(
                          this,
                          this.angle,
                          r
                        )))
                  : (this.angle = 0)
              );
            }),
            (t.prototype._setTransform = function (t, e, r, i) {
              var s;
              return (
                this.scaler && ((t *= this.scaler.x), (e *= this.scaler.y)),
                (s = null),
                i ||
                  (s =
                    "function" == typeof this.onUpdate
                      ? this.onUpdate(r, { x: t, y: e, angle: this.angle })
                      : void 0),
                this.isModule
                  ? this.setModulePosition(t, e)
                  : "string" != typeof s
                  ? this.setElPosition(t, e, r)
                  : o.setPrefixedStyle(this.el, "transform", s)
              );
            }),
            (t.prototype._setTransformOrigin = function (t) {
              var e, r;
              return this.props.transformOrigin
                ? ((e = "function" == typeof this.props.transformOrigin),
                  (r = e
                    ? this.props.transformOrigin(this.angle, t)
                    : this.props.transformOrigin),
                  o.setPrefixedStyle(this.el, "transform-origin", r))
                : void 0;
            }),
            (t.prototype.makeMotionBlur = function (t, e) {
              var r, i, s, n, a, p, u;
              return (
                (u = 0),
                (a = 1),
                (p = 1),
                null == this.prevCoords.x || null == this.prevCoords.y
                  ? ((this.speedX = 0), (this.speedY = 0))
                  : ((s = t - this.prevCoords.x),
                    (n = e - this.prevCoords.y),
                    s > 0 && (a = -1),
                    0 > a && (p = -1),
                    (this.speedX = Math.abs(s)),
                    (this.speedY = Math.abs(n)),
                    (u = Math.atan(n / s) * (180 / Math.PI) + 90)),
                (r = u - this.angle),
                (i = this.angToCoords(r)),
                (this.blurX = o.clamp(
                  (this.speedX / 16) * this.props.motionBlur,
                  0,
                  1
                )),
                (this.blurY = o.clamp(
                  (this.speedY / 16) * this.props.motionBlur,
                  0,
                  1
                )),
                this.setBlur({
                  blur: {
                    x: 3 * this.blurX * this.blurAmount * Math.abs(i.x),
                    y: 3 * this.blurY * this.blurAmount * Math.abs(i.y),
                  },
                  offset: {
                    x: 3 * a * this.blurX * i.x * this.blurAmount,
                    y: 3 * p * this.blurY * i.y * this.blurAmount,
                  },
                }),
                (this.prevCoords.x = t),
                (this.prevCoords.y = e)
              );
            }),
            (t.prototype.setBlur = function (t) {
              return this.isMotionBlurReset
                ? void 0
                : (this.filter.setAttribute(
                    "stdDeviation",
                    t.blur.x + "," + t.blur.y
                  ),
                  this.filterOffset.setAttribute("dx", t.offset.x),
                  this.filterOffset.setAttribute("dy", t.offset.y));
            }),
            (t.prototype.extendDefaults = function (t) {
              var e, r, i;
              r = [];
              for (e in t) (i = t[e]), r.push((this[e] = i));
              return r;
            }),
            (t.prototype.extendOptions = function (t) {
              var e, r, i;
              r = [];
              for (e in t) (i = t[e]), r.push((this.props[e] = i));
              return r;
            }),
            (t.prototype.then = function (t) {
              var e, r, i, s, a;
              (s = this.history[this.history.length - 1]), (i = {});
              for (r in s)
                (a = s[r]),
                  (!o.callbacksMap[r] && !o.tweenOptionMap[r]) ||
                  "duration" === r
                    ? null == t[r] && (t[r] = a)
                    : null == t[r] && (t[r] = void 0),
                  o.tweenOptionMap[r] &&
                    (i[r] =
                      "duration" !== r ? t[r] : null != t[r] ? t[r] : s[r]);
              return (
                this.history.push(t),
                (e = this),
                (i.onUpdate = (function (t) {
                  return function (e) {
                    return t.setProgress(e);
                  };
                })(this)),
                (i.onStart = (function (t) {
                  return function () {
                    var e;
                    return null != (e = t.props.onStart) ? e.apply(t) : void 0;
                  };
                })(this)),
                (i.onComplete = (function (t) {
                  return function () {
                    var e;
                    return null != (e = t.props.onComplete)
                      ? e.apply(t)
                      : void 0;
                  };
                })(this)),
                (i.onFirstUpdate = function () {
                  return e.tuneOptions(e.history[this.index]);
                }),
                (i.isChained = !t.delay),
                this.timeline.append(new n(i)),
                this
              );
            }),
            (t.prototype.tuneOptions = function (t) {
              return this.extendOptions(t), this.postVars();
            }),
            (t.prototype.angToCoords = function (t) {
              var e, r, i;
              return (
                (t %= 360),
                (e = ((t - 90) * Math.PI) / 180),
                (r = Math.cos(e)),
                (i = Math.sin(e)),
                (r = 0 > r ? Math.max(r, -0.7) : Math.min(r, 0.7)),
                (i = 0 > i ? Math.max(i, -0.7) : Math.min(i, 0.7)),
                { x: 1.428571429 * r, y: 1.428571429 * i }
              );
            }),
            t
          );
        })()),
        (t.exports = i);
    },
    function (t, e, r) {
      var i, s, n, o, a, p, u, l, h;
      (a = r(44)),
        (n = r(45)),
        (l = r(46)),
        (u = r(19)),
        (o = r(47)["default"] || r(47)),
        (h = Math.sin),
        (s = Math.PI),
        (i = (function () {
          function t() {}
          return (
            (t.prototype.bezier = a),
            (t.prototype.PathEasing = n),
            (t.prototype.path = new n("creator").create),
            (t.prototype.approximate = o),
            (t.prototype.inverse = function (t) {
              return 1 - t;
            }),
            (t.prototype.linear = {
              none: function (t) {
                return t;
              },
            }),
            (t.prototype.ease = {
              in: a.apply(t, [0.42, 0, 1, 1]),
              out: a.apply(t, [0, 0, 0.58, 1]),
              inout: a.apply(t, [0.42, 0, 0.58, 1]),
            }),
            (t.prototype.sin = {
              in: function (t) {
                return 1 - Math.cos((t * s) / 2);
              },
              out: function (t) {
                return h((t * s) / 2);
              },
              inout: function (t) {
                return 0.5 * (1 - Math.cos(s * t));
              },
            }),
            (t.prototype.quad = {
              in: function (t) {
                return t * t;
              },
              out: function (t) {
                return t * (2 - t);
              },
              inout: function (t) {
                return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
              },
            }),
            (t.prototype.cubic = {
              in: function (t) {
                return t * t * t;
              },
              out: function (t) {
                return --t * t * t + 1;
              },
              inout: function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t
                  : 0.5 * ((t -= 2) * t * t + 2);
              },
            }),
            (t.prototype.quart = {
              in: function (t) {
                return t * t * t * t;
              },
              out: function (t) {
                return 1 - --t * t * t * t;
              },
              inout: function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t * t
                  : -0.5 * ((t -= 2) * t * t * t - 2);
              },
            }),
            (t.prototype.quint = {
              in: function (t) {
                return t * t * t * t * t;
              },
              out: function (t) {
                return --t * t * t * t * t + 1;
              },
              inout: function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t * t * t
                  : 0.5 * ((t -= 2) * t * t * t * t + 2);
              },
            }),
            (t.prototype.expo = {
              in: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1);
              },
              out: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
              },
              inout: function (t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : (t *= 2) < 1
                  ? 0.5 * Math.pow(1024, t - 1)
                  : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
              },
            }),
            (t.prototype.circ = {
              in: function (t) {
                return 1 - Math.sqrt(1 - t * t);
              },
              out: function (t) {
                return Math.sqrt(1 - --t * t);
              },
              inout: function (t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              },
            }),
            (t.prototype.back = {
              in: function (t) {
                var e;
                return (e = 1.70158), t * t * ((e + 1) * t - e);
              },
              out: function (t) {
                var e;
                return (e = 1.70158), --t * t * ((e + 1) * t + e) + 1;
              },
              inout: function (t) {
                var e;
                return (
                  (e = 2.5949095),
                  (t *= 2) < 1
                    ? 0.5 * t * t * ((e + 1) * t - e)
                    : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                );
              },
            }),
            (t.prototype.elastic = {
              in: function (t) {
                var e, r, i;
                return (
                  (i = void 0),
                  (r = 0.4),
                  0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : ((e = 1),
                      (i = r / 4),
                      -(
                        e *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((2 * (t - i) * Math.PI) / r)
                      ))
                );
              },
              out: function (t) {
                var e, r, i;
                return (
                  (i = void 0),
                  (r = 0.4),
                  0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : ((e = 1),
                      (i = r / 4),
                      e *
                        Math.pow(2, -10 * t) *
                        Math.sin((2 * (t - i) * Math.PI) / r) +
                        1)
                );
              },
              inout: function (t) {
                var e, r, i;
                return (
                  (i = void 0),
                  (r = 0.4),
                  0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : ((e = 1),
                      (i = r / 4),
                      (t *= 2) < 1
                        ? -0.5 *
                          e *
                          Math.pow(2, 10 * (t -= 1)) *
                          Math.sin((2 * (t - i) * Math.PI) / r)
                        : e *
                            Math.pow(2, -10 * (t -= 1)) *
                            Math.sin((2 * (t - i) * Math.PI) / r) *
                            0.5 +
                          1)
                );
              },
            }),
            (t.prototype.bounce = {
              in: function (t) {
                return 1 - p.bounce.out(1 - t);
              },
              out: function (t) {
                return 1 / 2.75 > t
                  ? 7.5625 * t * t
                  : 2 / 2.75 > t
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : 2.5 / 2.75 > t
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              },
              inout: function (t) {
                return 0.5 > t
                  ? 0.5 * p.bounce["in"](2 * t)
                  : 0.5 * p.bounce.out(2 * t - 1) + 0.5;
              },
            }),
            (t.prototype.parseEasing = function (t) {
              var e, r;
              return (
                null == t && (t = "linear.none"),
                (r = typeof t),
                "string" === r
                  ? "m" === t.charAt(0).toLowerCase()
                    ? this.path(t)
                    : ((t = this._splitEasing(t)),
                      (e = this[t[0]]),
                      e
                        ? e[t[1]]
                        : (u.error(
                            'Easing with name "' +
                              t[0] +
                              '" was not found, fallback to "linear.none" instead'
                          ),
                          this.linear.none))
                  : u.isArray(t)
                  ? this.bezier.apply(this, t)
                  : t
              );
            }),
            (t.prototype._splitEasing = function (t) {
              var e, r, i;
              return "function" == typeof t
                ? t
                : "string" == typeof t && t.length
                ? ((i = t.split(".")),
                  (e = i[0].toLowerCase() || "linear"),
                  (r = i[1].toLowerCase() || "none"),
                  [e, r])
                : ["linear", "none"];
            }),
            t
          );
        })()),
        (p = new i()),
        (p.mix = l(p)),
        (t.exports = p);
    },
    function (t, e, r) {
      "use strict";
      (e.__esModule = !0),
        (e["default"] = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        });
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(18),
        n = i(s);
      e["default"] = function (t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e ||
          ("object" !==
            ("undefined" == typeof e ? "undefined" : n["default"](e)) &&
            "function" != typeof e)
          ? t
          : e;
      };
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(48),
        n = i(s),
        o = r(49),
        a = i(o),
        p = r(18),
        u = i(p);
      e["default"] = function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              ("undefined" == typeof e ? "undefined" : u["default"](e))
          );
        (t.prototype = a["default"](e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e && (n["default"] ? n["default"](t, e) : (t.__proto__ = e));
      };
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(18),
        n = i(s),
        o = r(23),
        a = i(o),
        p = r(24),
        u = i(p),
        l = r(25),
        h = i(l),
        c = r(16),
        f = i(c),
        d = r(19),
        _ = i(d),
        y = (function (t) {
          function e() {
            return (
              a["default"](this, e),
              u["default"](this, t.apply(this, arguments))
            );
          }
          return (
            h["default"](e, t),
            (e.prototype._declareDefaults = function () {
              (this._defaults = {
                ns: "http://www.w3.org/2000/svg",
                tag: "ellipse",
                parent: document.body,
                ratio: 1,
                radius: 50,
                radiusX: null,
                radiusY: null,
                stroke: "hotpink",
                "stroke-dasharray": "",
                "stroke-dashoffset": "",
                "stroke-linecap": "",
                "stroke-width": 2,
                "stroke-opacity": 1,
                fill: "transparent",
                "fill-opacity": 1,
                width: 0,
                height: 0,
              }),
                (this._drawMap = [
                  "stroke",
                  "stroke-width",
                  "stroke-opacity",
                  "stroke-dasharray",
                  "fill",
                  "stroke-dashoffset",
                  "stroke-linecap",
                  "fill-opacity",
                  "transform",
                ]);
            }),
            (e.prototype._vars = function () {
              (this._state = {}), (this._drawMapLength = this._drawMap.length);
            }),
            (e.prototype._render = function () {
              this._isRendered ||
                ((this._isRendered = !0),
                this._createSVGCanvas(),
                this._setCanvasSize(),
                this._props.parent.appendChild(this._canvas));
            }),
            (e.prototype._createSVGCanvas = function () {
              var t = this._props;
              (this._canvas = document.createElementNS(t.ns, "svg")),
                (this.el = document.createElementNS(t.ns, t.tag)),
                this._canvas.appendChild(this.el);
            }),
            (e.prototype._setCanvasSize = function () {
              var t = (this._props, this._canvas.style);
              (t.display = "block"),
                (t.width = "100%"),
                (t.height = "100%"),
                (t.left = "0px"),
                (t.top = "0px");
            }),
            (e.prototype._draw = function () {
              this._props.length = this._getLength();
              for (
                var t = (this._state, this._props, this._drawMapLength);
                t--;

              ) {
                var e = this._drawMap[t];
                switch (e) {
                  case "stroke-dasharray":
                  case "stroke-dashoffset":
                    this.castStrokeDash(e);
                }
                this._setAttrIfChanged(e, this._props[e]);
              }
              this._state.radius = this._props.radius;
            }),
            (e.prototype.castStrokeDash = function (t) {
              var e = this._props;
              if (_["default"].isArray(e[t])) {
                for (var r = "", i = 0; i < e[t].length; i++) {
                  var s = e[t][i],
                    o = "%" === s.unit ? this.castPercent(s.value) : s.value;
                  r += o + " ";
                }
                return (e[t] = "0 " === r ? (r = "") : r), (e[t] = r);
              }
              "object" === n["default"](e[t]) &&
                ((r =
                  "%" === e[t].unit
                    ? this.castPercent(e[t].value)
                    : e[t].value),
                (e[t] = 0 === r ? (r = "") : r));
            }),
            (e.prototype.castPercent = function (t) {
              return t * (this._props.length / 100);
            }),
            (e.prototype._setAttrIfChanged = function (t, e) {
              this._state[t] !== e &&
                (this.el.setAttribute(t, e), (this._state[t] = e));
            }),
            (e.prototype._getLength = function () {
              var t = this._props,
                e = 0,
                r = !(!this.el || !this.el.getTotalLength);
              return (e =
                r && this.el.getAttribute("d")
                  ? this.el.getTotalLength()
                  : 2 * (null != t.radiusX ? t.radiusX : t.radius));
            }),
            (e.prototype._getPointsPerimiter = function (t) {
              for (var e = 0, r = 1; r < t.length; r++)
                e += this._pointsDelta(t[r - 1], t[r]);
              return (e += this._pointsDelta(
                t[0],
                _["default"].getLastItem(t)
              ));
            }),
            (e.prototype._pointsDelta = function (t, e) {
              var r = Math.abs(t.x - e.x),
                i = Math.abs(t.y - e.y);
              return Math.sqrt(r * r + i * i);
            }),
            (e.prototype._setSize = function (t, e) {
              var r = this._props;
              (r.width = t), (r.height = e), this._draw();
            }),
            e
          );
        })(f["default"]);
      e["default"] = y;
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(50),
        n = i(s);
      e["default"] =
        n["default"] ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        };
    },
    function (t, e, r) {
      t.exports = { default: r(52), __esModule: !0 };
    },
    function (t, e, r) {
      t.exports = { default: r(51), __esModule: !0 };
    },
    function (t, e, r) {
      !(function () {
        "use strict";
        var t, e, r, i, s, n, o;
        for (
          s = ["webkit", "moz"], e = 0, o = window;
          e < s.length && !o.requestAnimationFrame;

        )
          (n = s[e]),
            (o.requestAnimationFrame = o[n + "RequestAnimationFrame"]),
            (t = o[n + "CancelAnimationFrame"]),
            (o.cancelAnimationFrame =
              t || o[n + "CancelRequestAnimationFrame"]),
            ++e;
        (r = !o.requestAnimationFrame || !o.cancelAnimationFrame),
          (/iP(ad|hone|od).*OS 6/.test(o.navigator.userAgent) || r) &&
            ((i = 0),
            (o.requestAnimationFrame = function (t) {
              var e, r;
              return (
                (r = Date.now()),
                (e = Math.max(i + 16, r)),
                setTimeout(function () {
                  t((i = e));
                }, e - r)
              );
            }),
            (o.cancelAnimationFrame = clearTimeout));
      })();
    },
    function (t, e, r) {
      !(function (t) {
        var e, r, i;
        return (
          null == t.performance && (t.performance = {}),
          (Date.now =
            Date.now ||
            function () {
              return new Date().getTime();
            }),
          null == t.performance.now
            ? ((e = (
                null != (r = t.performance) && null != (i = r.timing)
                  ? i.navigationStart
                  : void 0
              )
                ? performance.timing.navigationStart
                : Date.now()),
              (t.performance.now = function () {
                return Date.now() - e;
              }))
            : void 0
        );
      })(window);
    },
    function (t, e, r) {
      t.exports = { default: r(1), __esModule: !0 };
    },
    function (t, e, r) {
      t.exports = { default: r(54), __esModule: !0 };
    },
    function (t, e, r) {
      var i, s;
      !(function () {
        var r;
        return (
          (r = (function () {
            function t(t) {
              (this.o = null != t ? t : {}),
                window.isAnyResizeEventInited ||
                  (this.vars(), this.redefineProto());
            }
            return (
              (t.prototype.vars = function () {
                return (
                  (window.isAnyResizeEventInited = !0),
                  (this.allowedProtos = [
                    HTMLDivElement,
                    HTMLFormElement,
                    HTMLLinkElement,
                    HTMLBodyElement,
                    HTMLParagraphElement,
                    HTMLFieldSetElement,
                    HTMLLegendElement,
                    HTMLLabelElement,
                    HTMLButtonElement,
                    HTMLUListElement,
                    HTMLOListElement,
                    HTMLLIElement,
                    HTMLHeadingElement,
                    HTMLQuoteElement,
                    HTMLPreElement,
                    HTMLBRElement,
                    HTMLFontElement,
                    HTMLHRElement,
                    HTMLModElement,
                    HTMLParamElement,
                    HTMLMapElement,
                    HTMLTableElement,
                    HTMLTableCaptionElement,
                    HTMLImageElement,
                    HTMLTableCellElement,
                    HTMLSelectElement,
                    HTMLInputElement,
                    HTMLTextAreaElement,
                    HTMLAnchorElement,
                    HTMLObjectElement,
                    HTMLTableColElement,
                    HTMLTableSectionElement,
                    HTMLTableRowElement,
                  ]),
                  (this.timerElements = {
                    img: 1,
                    textarea: 1,
                    input: 1,
                    embed: 1,
                    object: 1,
                    svg: 1,
                    canvas: 1,
                    tr: 1,
                    tbody: 1,
                    thead: 1,
                    tfoot: 1,
                    a: 1,
                    select: 1,
                    option: 1,
                    optgroup: 1,
                    dl: 1,
                    dt: 1,
                    br: 1,
                    basefont: 1,
                    font: 1,
                    col: 1,
                    iframe: 1,
                  })
                );
              }),
              (t.prototype.redefineProto = function () {
                var t, e, r, i;
                return (
                  (e = this),
                  (i = function () {
                    var i, s, n, o;
                    for (
                      n = this.allowedProtos, o = [], t = i = 0, s = n.length;
                      s > i;
                      t = ++i
                    )
                      (r = n[t]),
                        null != r.prototype &&
                          o.push(
                            (function (t) {
                              var r, i;
                              return (
                                (r =
                                  t.prototype.addEventListener ||
                                  t.prototype.attachEvent),
                                (function (r) {
                                  var i;
                                  return (
                                    (i = function () {
                                      var t;
                                      return (
                                        (this !== window ||
                                          this !== document) &&
                                          ((t =
                                            "onresize" === arguments[0] &&
                                            !this.isAnyResizeEventInited),
                                          t &&
                                            e.handleResize({
                                              args: arguments,
                                              that: this,
                                            })),
                                        r.apply(this, arguments)
                                      );
                                    }),
                                    t.prototype.addEventListener
                                      ? (t.prototype.addEventListener = i)
                                      : t.prototype.attachEvent
                                      ? (t.prototype.attachEvent = i)
                                      : void 0
                                  );
                                })(r),
                                (i =
                                  t.prototype.removeEventListener ||
                                  t.prototype.detachEvent),
                                (function (e) {
                                  var r;
                                  return (
                                    (r = function () {
                                      return (
                                        (this.isAnyResizeEventInited = !1),
                                        this.iframe &&
                                          this.removeChild(this.iframe),
                                        e.apply(this, arguments)
                                      );
                                    }),
                                    t.prototype.removeEventListener
                                      ? (t.prototype.removeEventListener = r)
                                      : t.prototype.detachEvent
                                      ? (t.prototype.detachEvent =
                                          wrappedListener)
                                      : void 0
                                  );
                                })(i)
                              );
                            })(r)
                          );
                    return o;
                  }.call(this))
                );
              }),
              (t.prototype.handleResize = function (t) {
                var e, r, i, s, n, o, a;
                return (
                  (r = t.that),
                  this.timerElements[r.tagName.toLowerCase()]
                    ? this.initTimer(r)
                    : ((i = document.createElement("iframe")),
                      r.appendChild(i),
                      (i.style.width = "100%"),
                      (i.style.height = "100%"),
                      (i.style.position = "absolute"),
                      (i.style.zIndex = -999),
                      (i.style.opacity = 0),
                      (i.style.top = 0),
                      (i.style.left = 0),
                      (e = window.getComputedStyle
                        ? getComputedStyle(r)
                        : r.currentStyle),
                      (n = "" === r.style.position),
                      (o = "static" === e.position && n),
                      (s = "" === e.position && "" === r.style.position),
                      (o || s) && (r.style.position = "relative"),
                      null != (a = i.contentWindow) &&
                        (a.onresize = (function (t) {
                          return function (e) {
                            return t.dispatchEvent(r);
                          };
                        })(this)),
                      (r.iframe = i)),
                  (r.isAnyResizeEventInited = !0)
                );
              }),
              (t.prototype.initTimer = function (t) {
                var e, r;
                return (
                  (r = 0),
                  (e = 0),
                  (this.interval = setInterval(
                    (function (i) {
                      return function () {
                        var s, n;
                        return (
                          (n = t.offsetWidth),
                          (s = t.offsetHeight),
                          n !== r || s !== e
                            ? (i.dispatchEvent(t), (r = n), (e = s))
                            : void 0
                        );
                      };
                    })(this),
                    this.o.interval || 62.5
                  ))
                );
              }),
              (t.prototype.dispatchEvent = function (t) {
                var e;
                return document.createEvent
                  ? ((e = document.createEvent("HTMLEvents")),
                    e.initEvent("onresize", !1, !1),
                    t.dispatchEvent(e))
                  : document.createEventObject
                  ? ((e = document.createEventObject()),
                    t.fireEvent("onresize", e))
                  : !1;
              }),
              (t.prototype.destroy = function () {
                var t, e, r, i, s, n, o;
                for (
                  clearInterval(this.interval),
                    this.interval = null,
                    window.isAnyResizeEventInited = !1,
                    e = this,
                    n = this.allowedProtos,
                    o = [],
                    t = r = 0,
                    i = n.length;
                  i > r;
                  t = ++r
                )
                  (s = n[t]),
                    null != s.prototype &&
                      o.push(
                        (function (t) {
                          var e;
                          return (
                            (e =
                              t.prototype.addEventListener ||
                              t.prototype.attachEvent),
                            t.prototype.addEventListener
                              ? (t.prototype.addEventListener =
                                  Element.prototype.addEventListener)
                              : t.prototype.attachEvent &&
                                (t.prototype.attachEvent =
                                  Element.prototype.attachEvent),
                            t.prototype.removeEventListener
                              ? (t.prototype.removeEventListener =
                                  Element.prototype.removeEventListener)
                              : t.prototype.detachEvent
                              ? (t.prototype.detachEvent =
                                  Element.prototype.detachEvent)
                              : void 0
                          );
                        })(s)
                      );
                return o;
              }),
              t
            );
          })()),
          (i = []),
          (s = function () {
            return new r();
          }.apply(e, i)),
          !(void 0 !== s && (t.exports = s))
        );
      })();
    },
    function (t, e, r) {
      var i,
        s,
        n = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var i in e) o.call(e, i) && (t[i] = e[i]);
          return (
            (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.__super__ = e.prototype),
            t
          );
        },
        o = {}.hasOwnProperty;
      (i = r(26)["default"] || r(26)),
        (s = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            n(e, t),
            (e.prototype._declareDefaults = function () {
              return (
                e.__super__._declareDefaults.apply(this, arguments),
                (this._defaults.tag = "rect"),
                (this._defaults.rx = 0),
                (this._defaults.ry = 0)
              );
            }),
            (e.prototype._draw = function () {
              var t, r, i;
              return (
                e.__super__._draw.apply(this, arguments),
                (t = this._props),
                (r = null != t.radiusX ? t.radiusX : t.radius),
                (i = null != t.radiusY ? t.radiusY : t.radius),
                this._setAttrIfChanged("width", 2 * r),
                this._setAttrIfChanged("height", 2 * i),
                this._setAttrIfChanged("x", t.width / 2 - r),
                this._setAttrIfChanged("y", t.height / 2 - i),
                this._setAttrIfChanged("rx", t.rx),
                this._setAttrIfChanged("ry", t.ry)
              );
            }),
            (e.prototype._getLength = function () {
              var t, e;
              return (
                (t =
                  null != this._props.radiusX
                    ? this._props.radiusX
                    : this._props.radius),
                (e =
                  null != this._props.radiusY
                    ? this._props.radiusY
                    : this._props.radius),
                2 * (2 * t + 2 * e)
              );
            }),
            e
          );
        })(i)),
        (t.exports = s);
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(23),
        n = i(s),
        o = r(24),
        a = i(o),
        p = r(25),
        u = i(p),
        l = r(26),
        h = i(l),
        c = (function (t) {
          function e() {
            return (
              n["default"](this, e),
              a["default"](this, t.apply(this, arguments))
            );
          }
          return (
            u["default"](e, t),
            (e.prototype._declareDefaults = function () {
              t.prototype._declareDefaults.call(this),
                (this._defaults.tag = "path"),
                (this._defaults.parent = null);
              for (var e = 0; e < this._drawMap.length; e++)
                "stroke-width" === this._drawMap[e] &&
                  this._drawMap.splice(e, 1);
            }),
            (e.prototype.getShape = function () {
              return "";
            }),
            (e.prototype.getLength = function () {
              return 100;
            }),
            (e.prototype._draw = function () {
              var e = this._props,
                r = this._state,
                i = r.radiusX !== e.radiusX,
                s = r.radiusY !== e.radiusY,
                n = r.radius !== e.radius;
              (i || s || n) &&
                (this.el.setAttribute("transform", this._getScale()),
                (r.radiusX = e.radiusX),
                (r.radiusY = e.radiusY),
                (r.radius = e.radius)),
                this._setAttrIfChanged(
                  "stroke-width",
                  e["stroke-width"] / e.maxScale
                ),
                t.prototype._draw.call(this);
            }),
            (e.prototype._render = function () {
              if (!this._isRendered) {
                (this._isRendered = !0), (this._length = this.getLength());
                var t = this._props;
                (t.parent.innerHTML =
                  '<svg id="js-mojs-shape-canvas" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="js-mojs-shape-el">' +
                  this.getShape() +
                  "</g></svg>"),
                  (this._canvas = t.parent.querySelector(
                    "#js-mojs-shape-canvas"
                  )),
                  (this.el = t.parent.querySelector("#js-mojs-shape-el")),
                  this._setCanvasSize();
              }
            }),
            (e.prototype._getScale = function () {
              var t = this._props,
                e = t.radiusX ? t.radiusX : t.radius,
                r = t.radiusY ? t.radiusY : t.radius;
              (t.scaleX = (2 * e) / 100),
                (t.scaleY = (2 * r) / 100),
                (t.maxScale = Math.max(t.scaleX, t.scaleY)),
                (t.shiftX = t.width / 2 - 50 * t.scaleX),
                (t.shiftY = t.height / 2 - 50 * t.scaleY);
              var i = "translate(" + t.shiftX + ", " + t.shiftY + ")";
              return i + " scale(" + t.scaleX + ", " + t.scaleY + ")";
            }),
            (e.prototype._getLength = function () {
              return this._length;
            }),
            e
          );
        })(h["default"]);
      e["default"] = c;
    },
    function (t, e, r) {
      var i,
        s,
        n = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var i in e) o.call(e, i) && (t[i] = e[i]);
          return (
            (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.__super__ = e.prototype),
            t
          );
        },
        o = {}.hasOwnProperty;
      (i = r(26)["default"] || r(26)),
        (s = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            n(e, t),
            (e.prototype._declareDefaults = function () {
              return (
                e.__super__._declareDefaults.apply(this, arguments),
                (this._defaults.shape = "ellipse")
              );
            }),
            (e.prototype._draw = function () {
              var t, r;
              return (
                (t =
                  null != this._props.radiusX
                    ? this._props.radiusX
                    : this._props.radius),
                (r =
                  null != this._props.radiusY
                    ? this._props.radiusY
                    : this._props.radius),
                this._setAttrIfChanged("rx", t),
                this._setAttrIfChanged("ry", r),
                this._setAttrIfChanged("cx", this._props.width / 2),
                this._setAttrIfChanged("cy", this._props.height / 2),
                e.__super__._draw.apply(this, arguments)
              );
            }),
            (e.prototype._getLength = function () {
              var t, e;
              return (
                (t =
                  null != this._props.radiusX
                    ? this._props.radiusX
                    : this._props.radius),
                (e =
                  null != this._props.radiusY
                    ? this._props.radiusY
                    : this._props.radius),
                2 * Math.PI * Math.sqrt((t * t + e * e) / 2)
              );
            }),
            e
          );
        })(i)),
        (t.exports = s);
    },
    function (t, e, r) {
      var i,
        s,
        n = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var i in e) o.call(e, i) && (t[i] = e[i]);
          return (
            (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.__super__ = e.prototype),
            t
          );
        },
        o = {}.hasOwnProperty;
      (i = r(26)["default"] || r(26)),
        (s = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            n(e, t),
            (e.prototype._declareDefaults = function () {
              return (
                e.__super__._declareDefaults.apply(this, arguments),
                (this._defaults.tag = "line")
              );
            }),
            (e.prototype._draw = function () {
              var t, r, i;
              return (
                (t =
                  null != this._props.radiusX
                    ? this._props.radiusX
                    : this._props.radius),
                (r = this._props.width / 2),
                (i = this._props.height / 2),
                this._setAttrIfChanged("x1", r - t),
                this._setAttrIfChanged("x2", r + t),
                this._setAttrIfChanged("y1", i),
                this._setAttrIfChanged("y2", i),
                e.__super__._draw.apply(this, arguments)
              );
            }),
            e
          );
        })(i)),
        (t.exports = s);
    },
    function (t, e, r) {
      var i,
        s,
        n = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var i in e) o.call(e, i) && (t[i] = e[i]);
          return (
            (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.__super__ = e.prototype),
            t
          );
        },
        o = {}.hasOwnProperty;
      (i = r(26)["default"] || r(26)),
        (s = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            n(e, t),
            (e.prototype._declareDefaults = function () {
              return (
                e.__super__._declareDefaults.apply(this, arguments),
                (this._defaults.tag = "path"),
                (this._defaults.points = 3)
              );
            }),
            (e.prototype._draw = function () {
              var t, r, i, s, n, o, a, p, u, l, h, c, f, d, _, y, m, g;
              if (
                (e.__super__._draw.apply(this, arguments),
                (l = this._props),
                this._props.points &&
                  ((c =
                    null != this._props.radiusX
                      ? this._props.radiusX
                      : this._props.radius),
                  (f =
                    null != this._props.radiusY
                      ? this._props.radiusY
                      : this._props.radius),
                  (o = c === this._prevRadiusX),
                  (a = f === this._prevRadiusY),
                  (n = l.points === this._prevPoints),
                  !(o && a && n)))
              ) {
                for (
                  y = l.width / 2,
                    m = l.height / 2,
                    t = y - c,
                    r = m,
                    _ = (2 * c) / (l.points - 1),
                    g = -1,
                    i = Math.sqrt(_ * _ + f * f),
                    u = -i,
                    h = "M" + t + ", " + m + " ",
                    s = p = 0,
                    d = l.points;
                  d >= 0 ? d > p : p > d;
                  s = d >= 0 ? ++p : --p
                )
                  (h += "L" + t + ", " + r + " "),
                    (t += _),
                    (u += i),
                    (r = -1 === g ? m - f : m),
                    (g = -g);
                return (
                  (this._length = u),
                  this.el.setAttribute("d", h),
                  (this._prevPoints = l.points),
                  (this._prevRadiusX = c),
                  (this._prevRadiusY = f)
                );
              }
            }),
            (e.prototype._getLength = function () {
              return this._length;
            }),
            e
          );
        })(i)),
        (t.exports = s);
    },
    function (t, e, r) {
      var i,
        s,
        n,
        o = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var i in e) a.call(e, i) && (t[i] = e[i]);
          return (
            (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.__super__ = e.prototype),
            t
          );
        },
        a = {}.hasOwnProperty;
      (i = r(26)["default"] || r(26)),
        (n = r(19)),
        (s = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            o(e, t),
            (e.prototype._declareDefaults = function () {
              return (
                e.__super__._declareDefaults.apply(this, arguments),
                (this._defaults.tag = "path"),
                (this._defaults.points = 3)
              );
            }),
            (e.prototype._draw = function () {
              var t, r, i, s, o, a, p, u, l, h, c, f, d, _, y, m;
              if (
                ((h = this._props),
                (f =
                  null != this._props.radiusX
                    ? this._props.radiusX
                    : this._props.radius),
                (d =
                  null != this._props.radiusY
                    ? this._props.radiusY
                    : this._props.radius),
                (o = f === this._prevRadiusX),
                (a = d === this._prevRadiusY),
                (s = h.points === this._prevPoints),
                !(o && a && s))
              ) {
                for (
                  m = 360 / this._props.points,
                    null == this._radialPoints
                      ? (this._radialPoints = [])
                      : (this._radialPoints.length = 0),
                    i = p = 0,
                    _ = this._props.points;
                  _ >= 0 ? _ > p : p > _;
                  i = _ >= 0 ? ++p : --p
                )
                  this._radialPoints.push(
                    n.getRadialPoint({
                      radius: this._props.radius,
                      radiusX: this._props.radiusX,
                      radiusY: this._props.radiusY,
                      angle: i * m,
                      center: { x: h.width / 2, y: h.height / 2 },
                    })
                  );
                for (
                  r = "", y = this._radialPoints, i = u = 0, l = y.length;
                  l > u;
                  i = ++u
                )
                  (c = y[i]),
                    (t = 0 === i ? "M" : "L"),
                    (r += "" + t + c.x.toFixed(4) + "," + c.y.toFixed(4) + " ");
                (this._prevPoints = h.points),
                  (this._prevRadiusX = f),
                  (this._prevRadiusY = d),
                  this.el.setAttribute("d", (r += "z"));
              }
              return e.__super__._draw.apply(this, arguments);
            }),
            (e.prototype._getLength = function () {
              return this._getPointsPerimiter(this._radialPoints);
            }),
            e
          );
        })(i)),
        (t.exports = s);
    },
    function (t, e, r) {
      var i,
        s,
        n = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var i in e) o.call(e, i) && (t[i] = e[i]);
          return (
            (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.__super__ = e.prototype),
            t
          );
        },
        o = {}.hasOwnProperty;
      (i = r(26)["default"] || r(26)),
        (s = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            n(e, t),
            (e.prototype._declareDefaults = function () {
              return (
                e.__super__._declareDefaults.apply(this, arguments),
                (this._defaults.tag = "path")
              );
            }),
            (e.prototype._draw = function () {
              var t, r, i, s, n, o, a, p, u, l, h, c, f, d;
              return (
                e.__super__._draw.apply(this, arguments),
                (o = this._props),
                (a =
                  null != this._props.radiusX
                    ? this._props.radiusX
                    : this._props.radius),
                (p =
                  null != this._props.radiusY
                    ? this._props.radiusY
                    : this._props.radius),
                (r = a === this._prevRadiusX),
                (i = p === this._prevRadiusY),
                r && i
                  ? void 0
                  : ((u = this._props.width / 2),
                    (c = this._props.height / 2),
                    (l = u - a),
                    (h = u + a),
                    (s = "M" + l + "," + c + " L" + h + "," + c),
                    (f = c - p),
                    (d = c + p),
                    (n = "M" + u + "," + f + " L" + u + "," + d),
                    (t = s + " " + n),
                    this.el.setAttribute("d", t),
                    (this._prevRadiusX = a),
                    (this._prevRadiusY = p))
              );
            }),
            (e.prototype._getLength = function () {
              var t, e;
              return (
                (t =
                  null != this._props.radiusX
                    ? this._props.radiusX
                    : this._props.radius),
                (e =
                  null != this._props.radiusY
                    ? this._props.radiusY
                    : this._props.radius),
                2 * (t + e)
              );
            }),
            e
          );
        })(i)),
        (t.exports = s);
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(23),
        n = i(s),
        o = r(24),
        a = i(o),
        p = r(25),
        u = i(p),
        l = r(26),
        h = i(l),
        c = (function (t) {
          function e() {
            return (
              n["default"](this, e),
              a["default"](this, t.apply(this, arguments))
            );
          }
          return (
            u["default"](e, t),
            (e.prototype._declareDefaults = function () {
              t.prototype._declareDefaults.call(this),
                (this._defaults.tag = "path");
            }),
            (e.prototype._draw = function () {
              t.prototype._draw.call(this);
              var e = this._props,
                r = null != e.radiusX ? e.radiusX : e.radius,
                i = null != e.radiusY ? e.radiusY : e.radius,
                s = r === this._prevRadiusX,
                n = i === this._prevRadiusY,
                o = e.points === this._prevPoints;
              if (!(s && n && o)) {
                var a = e.width / 2,
                  p = e.height / 2,
                  u = a - r,
                  l = a + r,
                  h =
                    "M" +
                    u +
                    " " +
                    p +
                    " Q " +
                    a +
                    " " +
                    (p - 2 * i) +
                    " " +
                    l +
                    " " +
                    p;
                this.el.setAttribute("d", h),
                  (this._prevPoints = e.points),
                  (this._prevRadiusX = r),
                  (this._prevRadiusY = i);
              }
            }),
            (e.prototype._getLength = function () {
              var t = this._props,
                e = null != t.radiusX ? t.radiusX : t.radius,
                r = null != t.radiusY ? t.radiusY : t.radius,
                i = e + r,
                s = Math.sqrt((3 * e + r) * (e + 3 * r));
              return 0.5 * Math.PI * (3 * i - s);
            }),
            e
          );
        })(h["default"]);
      e["default"] = c;
    },
    function (t, e, r) {
      var i,
        s,
        n = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var i in e) o.call(e, i) && (t[i] = e[i]);
          return (
            (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.__super__ = e.prototype),
            t
          );
        },
        o = {}.hasOwnProperty;
      (i = r(26)["default"] || r(26)),
        (s = (function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }
          return (
            n(e, t),
            (e.prototype._declareDefaults = function () {
              return (
                e.__super__._declareDefaults.apply(this, arguments),
                (this._defaults.tag = "path"),
                (this._defaults.points = 2)
              );
            }),
            (e.prototype._draw = function () {
              var t, r, i, s, n, o, a, p, u, l, h, c, f, d, _, y;
              if (
                (e.__super__._draw.apply(this, arguments),
                (a = this._props),
                this._props.points &&
                  ((p =
                    null != this._props.radiusX
                      ? this._props.radiusX
                      : this._props.radius),
                  (u =
                    null != this._props.radiusY
                      ? this._props.radiusY
                      : this._props.radius),
                  (s = p === this._prevRadiusX),
                  (n = u === this._prevRadiusY),
                  (i = a.points === this._prevPoints),
                  !(s && n && i)))
              ) {
                for (
                  h = this._props.width / 2,
                    d = this._props.height / 2,
                    c = h - p,
                    f = h + p,
                    t = "",
                    y = (2 * u) / (this._props.points - 1),
                    _ = d - u,
                    r = o = 0,
                    l = this._props.points;
                  l >= 0 ? l > o : o > l;
                  r = l >= 0 ? ++o : --o
                )
                  (d = "" + (r * y + _)),
                    (t += "M" + c + ", " + d + " L" + f + ", " + d + " ");
                return (
                  this.el.setAttribute("d", t),
                  (this._prevPoints = a.points),
                  (this._prevRadiusX = p),
                  (this._prevRadiusY = u)
                );
              }
            }),
            (e.prototype._getLength = function () {
              return (
                2 *
                (null != this._props.radiusX
                  ? this._props.radiusX
                  : this._props.radius)
              );
            }),
            e
          );
        })(i)),
        (t.exports = s);
    },
    function (t, e, r) {
      (function (e) {
        var i,
          s,
          n,
          o =
            [].indexOf ||
            function (t) {
              for (var e = 0, r = this.length; r > e; e++)
                if (e in this && this[e] === t) return e;
              return -1;
            };
        (n = r(19)),
          (i = (function () {
            function t(t) {
              return this.vars(), this.generate;
            }
            return (
              (t.prototype.vars = function () {
                return (this.generate = n.bind(this.generate, this));
              }),
              (t.prototype.generate = function (t, r, i, s) {
                var n,
                  a,
                  p,
                  u,
                  l,
                  h,
                  c,
                  f,
                  d,
                  _,
                  y,
                  m,
                  g,
                  v,
                  w,
                  b,
                  S,
                  P,
                  x,
                  T,
                  M,
                  C,
                  k,
                  D;
                if (arguments.length < 4)
                  return this.error("Bezier function expects 4 arguments");
                for (S = P = 0; 4 > P; S = ++P)
                  if (
                    ((d = arguments[S]),
                    "number" != typeof d || isNaN(d) || !isFinite(d))
                  )
                    return this.error("Bezier function expects 4 arguments");
                return 0 > t || t > 1 || 0 > i || i > 1
                  ? this.error("Bezier x values should be > 0 and < 1")
                  : ((u = 4),
                    (l = 0.001),
                    (c = 1e-7),
                    (h = 10),
                    (T = 11),
                    (x = 1 / (T - 1)),
                    (v = o.call(e, "Float32Array") >= 0),
                    (n = function (t, e) {
                      return 1 - 3 * e + 3 * t;
                    }),
                    (a = function (t, e) {
                      return 3 * e - 6 * t;
                    }),
                    (p = function (t) {
                      return 3 * t;
                    }),
                    (y = function (t, e, r) {
                      return ((n(e, r) * t + a(e, r)) * t + p(e)) * t;
                    }),
                    (w = function (t, e, r) {
                      return 3 * n(e, r) * t * t + 2 * a(e, r) * t + p(e);
                    }),
                    (C = function (e, r) {
                      var s, n;
                      for (S = 0; u > S; ) {
                        if (((s = w(r, t, i)), 0 === s)) return r;
                        (n = y(r, t, i) - e), (r -= n / s), ++S;
                      }
                      return r;
                    }),
                    (m = function () {
                      for (S = 0; T > S; ) (M[S] = y(S * x, t, i)), ++S;
                    }),
                    (_ = function (e, r, s) {
                      var n, o, a;
                      for (o = void 0, n = void 0, S = 0; ; )
                        if (
                          ((n = r + (s - r) / 2),
                          (o = y(n, t, i) - e),
                          o > 0 ? (s = n) : (r = n),
                          (a = Math.abs(o) > c),
                          !(a && ++S < h))
                        )
                          break;
                      return n;
                    }),
                    (b = function (e) {
                      var r, s, n, o, a, p, u;
                      for (p = 0, r = 1, u = T - 1; r !== u && M[r] <= e; )
                        (p += x), ++r;
                      return (
                        --r,
                        (s = M[r + 1] - M[r]),
                        (n = (e - M[r]) / s),
                        (o = p + n * x),
                        (a = w(o, t, i)),
                        a >= l ? C(e, o) : 0 === a ? o : _(e, p, p + x)
                      );
                    }),
                    (k = function () {
                      var e;
                      return (e = !0), t !== r || i !== s ? m() : void 0;
                    }),
                    (M = v ? new Float32Array(T) : new Array(T)),
                    (f = !1),
                    (g = function (e) {
                      return (
                        f || k(),
                        t === r && i === s
                          ? e
                          : 0 === e
                          ? 0
                          : 1 === e
                          ? 1
                          : y(b(e), r, s)
                      );
                    }),
                    (D = "bezier(" + [t, r, i, s] + ")"),
                    (g.toStr = function () {
                      return D;
                    }),
                    g);
              }),
              (t.prototype.error = function (t) {
                return n.error(t);
              }),
              t
            );
          })()),
          (s = new i()),
          (t.exports = s);
      }.call(
        e,
        (function () {
          return this;
        })()
      ));
    },
    function (t, e, r) {
      var i, s;
      (s = r(19)),
        (i = (function () {
          function t(t, e) {
            if (((this.o = null != e ? e : {}), "creator" !== t)) {
              if (((this.path = s.parsePath(t)), null == this.path))
                return s.error("Error while parsing the path");
              this._vars(),
                this.path.setAttribute(
                  "d",
                  this._normalizePath(this.path.getAttribute("d"))
                ),
                (this.pathLength = this.path.getTotalLength()),
                (this.sample = s.bind(this.sample, this)),
                (this._hardSample = s.bind(this._hardSample, this)),
                this._preSample();
            }
          }
          return (
            (t.prototype._vars = function () {
              return (
                (this._precompute = s.clamp(
                  this.o.precompute || 1450,
                  100,
                  1e4
                )),
                (this._step = 1 / this._precompute),
                (this._rect = this.o.rect || 100),
                (this._approximateMax = this.o.approximateMax || 5),
                (this._eps = this.o.eps || 0.001),
                (this._boundsPrevProgress = -1)
              );
            }),
            (t.prototype._preSample = function () {
              var t, e, r, i, s, n, o;
              for (
                this._samples = [], o = [], t = e = 0, n = this._precompute;
                n >= 0 ? n >= e : e >= n;
                t = n >= 0 ? ++e : --e
              )
                (s = t * this._step),
                  (r = this.pathLength * s),
                  (i = this.path.getPointAtLength(r)),
                  o.push(
                    (this._samples[t] = { point: i, length: r, progress: s })
                  );
              return o;
            }),
            (t.prototype._findBounds = function (t, e) {
              var r, i, s, n, o, a, p, u, l, h, c, f, d;
              if (e === this._boundsPrevProgress) return this._prevBounds;
              for (
                null == this._boundsStartIndex && (this._boundsStartIndex = 0),
                  a = t.length,
                  this._boundsPrevProgress > e
                    ? ((p = 0), (i = "reverse"))
                    : ((p = a), (i = "forward")),
                  "forward" === i
                    ? ((f = t[0]), (s = t[t.length - 1]))
                    : ((f = t[t.length - 1]), (s = t[0])),
                  n = o = h = this._boundsStartIndex,
                  c = p;
                c >= h ? c > o : o > c;
                n = c >= h ? ++o : --o
              ) {
                if (
                  ((d = t[n]),
                  (l = d.point.x / this._rect),
                  (u = e),
                  "reverse" === i && ((r = l), (l = u), (u = r)),
                  !(u > l))
                ) {
                  s = d;
                  break;
                }
                (f = d), (this._boundsStartIndex = n);
              }
              return (
                (this._boundsPrevProgress = e),
                (this._prevBounds = { start: f, end: s })
              );
            }),
            (t.prototype.sample = function (t) {
              var e, r;
              return (
                (t = s.clamp(t, 0, 1)),
                (e = this._findBounds(this._samples, t)),
                (r = this._checkIfBoundsCloseEnough(t, e)),
                null != r ? r : this._findApproximate(t, e.start, e.end)
              );
            }),
            (t.prototype._checkIfBoundsCloseEnough = function (t, e) {
              var r, i;
              return (
                (r = void 0),
                (i = this._checkIfPointCloseEnough(t, e.start.point)),
                null != i ? i : this._checkIfPointCloseEnough(t, e.end.point)
              );
            }),
            (t.prototype._checkIfPointCloseEnough = function (t, e) {
              return s.closeEnough(t, e.x / this._rect, this._eps)
                ? this._resolveY(e)
                : void 0;
            }),
            (t.prototype._approximate = function (t, e, r) {
              var i, s;
              return (
                (i = e.point.x - t.point.x),
                (s = (r - t.point.x / this._rect) / (i / this._rect)),
                t.length + s * (e.length - t.length)
              );
            }),
            (t.prototype._findApproximate = function (t, e, r, i) {
              var n, o, a, p, u;
              return (
                null == i && (i = this._approximateMax),
                (n = this._approximate(e, r, t)),
                (p = this.path.getPointAtLength(n)),
                (u = p.x / this._rect),
                s.closeEnough(t, u, this._eps)
                  ? this._resolveY(p)
                  : --i < 1
                  ? this._resolveY(p)
                  : ((a = { point: p, length: n }),
                    (o = u > t ? [t, e, a, i] : [t, a, r, i]),
                    this._findApproximate.apply(this, o))
              );
            }),
            (t.prototype._resolveY = function (t) {
              return 1 - t.y / this._rect;
            }),
            (t.prototype._normalizePath = function (t) {
              var e, r, i, s, n, o;
              return (
                (o = /[M|L|H|V|C|S|Q|T|A]/gim),
                (s = t.split(o)),
                s.shift(),
                (e = t.match(o)),
                (n = 0),
                (s[n] = this._normalizeSegment(s[n])),
                (r = s.length - 1),
                (s[r] = this._normalizeSegment(s[r], this._rect || 100)),
                (i = this._joinNormalizedPath(e, s))
              );
            }),
            (t.prototype._joinNormalizedPath = function (t, e) {
              var r, i, s, n, o, a;
              for (o = "", i = s = 0, n = t.length; n > s; i = ++s)
                (r = t[i]),
                  (a = 0 === i ? "" : " "),
                  (o += "" + a + r + e[i].trim());
              return o;
            }),
            (t.prototype._normalizeSegment = function (t, e) {
              var r, i, s, n, o, a, p, u, l, h;
              if (
                (null == e && (e = 0),
                (t = t.trim()),
                (o =
                  /(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim),
                (a = this._getSegmentPairs(t.match(o))),
                (s = a[a.length - 1]),
                (h = s[0]),
                (p = Number(h)),
                p !== e)
              )
                for (t = "", s[0] = e, r = i = 0, n = a.length; n > i; r = ++i)
                  (u = a[r]),
                    (l = 0 === r ? "" : " "),
                    (t += "" + l + u[0] + "," + u[1]);
              return t;
            }),
            (t.prototype._getSegmentPairs = function (t) {
              var e, r, i, n, o, a;
              for (
                t.length % 2 !== 0 &&
                  s.error(
                    "Failed to parse the path - segment pairs are not even.",
                    t
                  ),
                  n = [],
                  e = r = 0,
                  i = t.length;
                i > r;
                e = r += 2
              )
                (a = t[e]), (o = [t[e], t[e + 1]]), n.push(o);
              return n;
            }),
            (t.prototype.create = function (e, r) {
              var i;
              return (i = new t(e, r)), (i.sample.path = i.path), i.sample;
            }),
            t
          );
        })()),
        (t.exports = i);
    },
    function (t, e, r) {
      var i,
        s,
        n,
        o,
        a,
        p,
        u = [].slice;
      (s = null),
        (a = function (t) {
          return "number" == typeof t.value ? t.value : s.parseEasing(t.value);
        }),
        (p = function (t, e) {
          var r;
          return (
            (t.value = a(t)),
            (e.value = a(e)),
            (r = 0),
            t.to < e.to && (r = -1),
            t.to > e.to && (r = 1),
            r
          );
        }),
        (n = function (t, e) {
          var r, i, s, n, o;
          for (
            i = 0, r = s = 0, n = t.length;
            n > s && ((o = t[r]), (i = r), !(o.to > e));
            r = ++s
          );
          return i;
        }),
        (o = function () {
          var t;
          return (
            (t = 1 <= arguments.length ? u.call(arguments, 0) : []),
            t.length > 1 ? (t = t.sort(p)) : (t[0].value = a(t[0])),
            function (e) {
              var r, i;
              return (
                (r = n(t, e)),
                -1 !== r
                  ? ((i = t[r].value),
                    r === t.length - 1 && e > t[r].to
                      ? 1
                      : "function" == typeof i
                      ? i(e)
                      : i)
                  : void 0
              );
            }
          );
        }),
        (i = function (t) {
          return (s = t), o;
        }),
        (t.exports = i);
    },
    function (t, e, r) {
      "use strict";
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.__esModule = !0;
      var s = r(18),
        n = i(s),
        o = r(19),
        a =
          (i(o),
          function (t) {
            function e(t, e) {
              e = +e || 0;
              var r = Math.pow(10, e);
              return Math.round(t * r) / r;
            }
            var r = t.base,
              i = Math.pow(10, r),
              s = 1 / i,
              n = function (i) {
                var n = e(i, r),
                  o = t[n.toString()];
                if (Math.abs(i - n) < s) return o;
                if (i > n)
                  var a = n + s,
                    p = t[a];
                else
                  var a = n - s,
                    p = t[a];
                var u = a - n,
                  l = p - o;
                if (s > l) return o;
                var h = (i - n) / u,
                  c = p > o ? -1 : 1,
                  f = c * h * l;
                return o + f;
              };
            return (
              (n.getSamples = function () {
                return t;
              }),
              n
            );
          }),
        p = function (t) {
          var e =
              arguments.length <= 1 || void 0 === arguments[1]
                ? 4
                : arguments[1],
            r = "undefined" == typeof e ? "undefined" : n["default"](e),
            i = {};
          if ("number" === r) {
            var s = 0,
              o = Math.pow(10, e),
              a = 1 / o;
            i[0] = t(0);
            for (var p = 0; o - 1 > p; p++) {
              s += a;
              var l = parseFloat(s.toFixed(e));
              i[l] = t(s);
            }
            (i[1] = t(1)), (i.base = e);
          } else
            "object" === r ? (i = e) : "string" === r && (i = JSON.parse(e));
          return u._sample._proximate(i);
        },
        u = { _sample: p, _proximate: a };
      (u._sample._proximate = u._proximate), (e["default"] = u._sample);
    },
    function (t, e, r) {
      t.exports = { default: r(55), __esModule: !0 };
    },
    function (t, e, r) {
      t.exports = { default: r(56), __esModule: !0 };
    },
    function (t, e, r) {
      t.exports = { default: r(57), __esModule: !0 };
    },
    function (t, e, r) {
      r(58), r(59), (t.exports = r(60));
    },
    function (t, e, r) {
      r(67), (t.exports = r(64).Object.keys);
    },
    function (t, e, r) {
      var i, s;
      (function (t) {
        "use strict";
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        e.__esModule = !0;
        var o = r(18),
          a = n(o),
          p = r(19),
          u = n(p),
          l = r(20),
          h = n(l),
          c = r(2),
          f = n(c),
          d = r(3),
          _ = n(d),
          y = r(4),
          m = n(y),
          g = r(5),
          v = n(g),
          w = r(6),
          b = n(w),
          S = r(7),
          P = n(S),
          x = r(21),
          T = n(x),
          M = r(8),
          C = n(M),
          k = r(9),
          D = n(k),
          O = r(10),
          E = n(O),
          A = r(11),
          L = n(A),
          R = r(12),
          I = n(R),
          F = r(13),
          Y = n(F),
          j = r(14),
          X = n(j),
          U = r(15),
          B = n(U),
          H = r(16),
          N = n(H),
          z = r(22),
          q = n(z),
          V = {
            revision: "0.288.1",
            isDebug: !0,
            helpers: u["default"],
            Shape: f["default"],
            ShapeSwirl: _["default"],
            Burst: m["default"],
            Html: v["default"],
            stagger: b["default"],
            Spriter: P["default"],
            MotionPath: T["default"],
            Tween: C["default"],
            Timeline: D["default"],
            Tweenable: L["default"],
            Thenable: I["default"],
            Tunable: Y["default"],
            Module: N["default"],
            tweener: E["default"],
            easing: q["default"],
            shapesMap: h["default"],
            _pool: { Delta: X["default"], Deltas: B["default"] },
          };
        (V.h = V.helpers),
          (V.delta = V.h.delta),
          (V.addShape = V.shapesMap.addShape),
          (V.CustomShape = V.shapesMap.custom),
          (V.Transit = V.Shape),
          (V.Swirl = V.ShapeSwirl),
          (i = []),
          (s = function () {
            return V;
          }.apply(e, i)),
          !(void 0 !== s && (t.exports = s)),
          "object" === a["default"](t) &&
            "object" === a["default"](t.exports) &&
            (t.exports = V),
          (e["default"] = V),
          "undefined" != typeof window && (window.mojs = V);
      }.call(e, r(17)(t)));
    },
    function (t, e, r) {
      r(62), r(63), (t.exports = r(64).Symbol);
    },
    function (t, e, r) {
      r(65), (t.exports = r(64).Object.setPrototypeOf);
    },
    function (t, e, r) {
      var i = r(66);
      t.exports = function (t, e) {
        return i.create(t, e);
      };
    },
    function (t, e, r) {
      r(68), (t.exports = r(64).Object.assign);
    },
    function (t, e, r) {
      r(69);
      var i = r(70);
      i.NodeList = i.HTMLCollection = i.Array;
    },
    function (t, e, r) {
      "use strict";
      var i = r(71)(!0);
      r(72)(
        String,
        "String",
        function (t) {
          (this._t = String(t)), (this._i = 0);
        },
        function () {
          var t,
            e = this._t,
            r = this._i;
          return r >= e.length
            ? { value: void 0, done: !0 }
            : ((t = i(e, r)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function (t, e, r) {
      var i = r(73),
        s = r(74);
      t.exports = r(64).getIterator = function (t) {
        var e = s(t);
        if ("function" != typeof e) throw TypeError(t + " is not iterable!");
        return i(e.call(t));
      };
    },
    function (t, e, r) {
      var i = r(75)("wks"),
        s = r(76),
        n = r(77).Symbol;
      t.exports = function (t) {
        return i[t] || (i[t] = (n && n[t]) || (n || s)("Symbol." + t));
      };
    },
    function (t, e, r) {
      "use strict";
      var i = r(66),
        s = r(77),
        n = r(78),
        o = r(79),
        a = r(80),
        p = r(81),
        u = r(82),
        l = r(75),
        h = r(83),
        c = r(76),
        f = r(61),
        d = r(84),
        _ = r(85),
        y = r(86),
        m = r(87),
        g = r(73),
        v = r(88),
        w = r(89),
        b = i.getDesc,
        S = i.setDesc,
        P = i.create,
        x = _.get,
        T = s.Symbol,
        M = s.JSON,
        C = M && M.stringify,
        k = !1,
        D = f("_hidden"),
        O = i.isEnum,
        E = l("symbol-registry"),
        A = l("symbols"),
        L = "function" == typeof T,
        R = Object.prototype,
        I =
          o &&
          u(function () {
            return (
              7 !=
              P(
                S({}, "a", {
                  get: function () {
                    return S(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, e, r) {
                var i = b(R, e);
                i && delete R[e], S(t, e, r), i && t !== R && S(R, e, i);
              }
            : S,
        F = function (t) {
          var e = (A[t] = P(T.prototype));
          return (
            (e._k = t),
            o &&
              k &&
              I(R, t, {
                configurable: !0,
                set: function (e) {
                  n(this, D) && n(this[D], t) && (this[D][t] = !1),
                    I(this, t, w(1, e));
                },
              }),
            e
          );
        },
        Y = function (t) {
          return "symbol" == typeof t;
        },
        j = function (t, e, r) {
          return r && n(A, e)
            ? (r.enumerable
                ? (n(t, D) && t[D][e] && (t[D][e] = !1),
                  (r = P(r, { enumerable: w(0, !1) })))
                : (n(t, D) || S(t, D, w(1, {})), (t[D][e] = !0)),
              I(t, e, r))
            : S(t, e, r);
        },
        X = function (t, e) {
          g(t);
          for (var r, i = y((e = v(e))), s = 0, n = i.length; n > s; )
            j(t, (r = i[s++]), e[r]);
          return t;
        },
        U = function (t, e) {
          return void 0 === e ? P(t) : X(P(t), e);
        },
        B = function (t) {
          var e = O.call(this, t);
          return e || !n(this, t) || !n(A, t) || (n(this, D) && this[D][t])
            ? e
            : !0;
        },
        H = function (t, e) {
          var r = b((t = v(t)), e);
          return (
            !r || !n(A, e) || (n(t, D) && t[D][e]) || (r.enumerable = !0), r
          );
        },
        N = function (t) {
          for (var e, r = x(v(t)), i = [], s = 0; r.length > s; )
            n(A, (e = r[s++])) || e == D || i.push(e);
          return i;
        },
        z = function (t) {
          for (var e, r = x(v(t)), i = [], s = 0; r.length > s; )
            n(A, (e = r[s++])) && i.push(A[e]);
          return i;
        },
        q = function (t) {
          if (void 0 !== t && !Y(t)) {
            for (var e, r, i = [t], s = 1, n = arguments; n.length > s; )
              i.push(n[s++]);
            return (
              (e = i[1]),
              "function" == typeof e && (r = e),
              (r || !m(e)) &&
                (e = function (t, e) {
                  return r && (e = r.call(this, t, e)), Y(e) ? void 0 : e;
                }),
              (i[1] = e),
              C.apply(M, i)
            );
          }
        },
        V = u(function () {
          var t = T();
          return (
            "[null]" != C([t]) || "{}" != C({ a: t }) || "{}" != C(Object(t))
          );
        });
      L ||
        ((T = function () {
          if (Y(this)) throw TypeError("Symbol is not a constructor");
          return F(c(arguments.length > 0 ? arguments[0] : void 0));
        }),
        p(T.prototype, "toString", function () {
          return this._k;
        }),
        (Y = function (t) {
          return t instanceof T;
        }),
        (i.create = U),
        (i.isEnum = B),
        (i.getDesc = H),
        (i.setDesc = j),
        (i.setDescs = X),
        (i.getNames = _.get = N),
        (i.getSymbols = z),
        o && !r(90) && p(R, "propertyIsEnumerable", B, !0));
      var W = {
        for: function (t) {
          return n(E, (t += "")) ? E[t] : (E[t] = T(t));
        },
        keyFor: function (t) {
          return d(E, t);
        },
        useSetter: function () {
          k = !0;
        },
        useSimple: function () {
          k = !1;
        },
      };
      i.each.call(
        "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
          ","
        ),
        function (t) {
          var e = f(t);
          W[t] = L ? e : F(e);
        }
      ),
        (k = !0),
        a(a.G + a.W, { Symbol: T }),
        a(a.S, "Symbol", W),
        a(a.S + a.F * !L, "Object", {
          create: U,
          defineProperty: j,
          defineProperties: X,
          getOwnPropertyDescriptor: H,
          getOwnPropertyNames: N,
          getOwnPropertySymbols: z,
        }),
        M && a(a.S + a.F * (!L || V), "JSON", { stringify: q }),
        h(T, "Symbol"),
        h(Math, "Math", !0),
        h(s.JSON, "JSON", !0);
    },
    function (t, e, r) {},
    function (t, e, r) {
      var i = (t.exports = { version: "1.2.6" });
      "number" == typeof __e && (__e = i);
    },
    function (t, e, r) {
      var i = r(80);
      i(i.S, "Object", { setPrototypeOf: r(91).set });
    },
    function (t, e, r) {
      var i = Object;
      t.exports = {
        create: i.create,
        getProto: i.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: i.getOwnPropertyDescriptor,
        setDesc: i.defineProperty,
        setDescs: i.defineProperties,
        getKeys: i.keys,
        getNames: i.getOwnPropertyNames,
        getSymbols: i.getOwnPropertySymbols,
        each: [].forEach,
      };
    },
    function (t, e, r) {
      var i = r(92);
      r(93)("keys", function (t) {
        return function (e) {
          return t(i(e));
        };
      });
    },
    function (t, e, r) {
      var i = r(80);
      i(i.S + i.F, "Object", { assign: r(94) });
    },
    function (t, e, r) {
      "use strict";
      var i = r(95),
        s = r(96),
        n = r(70),
        o = r(88);
      (t.exports = r(72)(
        Array,
        "Array",
        function (t, e) {
          (this._t = o(t)), (this._i = 0), (this._k = e);
        },
        function () {
          var t = this._t,
            e = this._k,
            r = this._i++;
          return !t || r >= t.length
            ? ((this._t = void 0), s(1))
            : "keys" == e
            ? s(0, r)
            : "values" == e
            ? s(0, t[r])
            : s(0, [r, t[r]]);
        },
        "values"
      )),
        (n.Arguments = n.Array),
        i("keys"),
        i("values"),
        i("entries");
    },
    function (t, e, r) {
      t.exports = {};
    },
    function (t, e, r) {
      var i = r(97),
        s = r(98);
      t.exports = function (t) {
        return function (e, r) {
          var n,
            o,
            a = String(s(e)),
            p = i(r),
            u = a.length;
          return 0 > p || p >= u
            ? t
              ? ""
              : void 0
            : ((n = a.charCodeAt(p)),
              55296 > n ||
              n > 56319 ||
              p + 1 === u ||
              (o = a.charCodeAt(p + 1)) < 56320 ||
              o > 57343
                ? t
                  ? a.charAt(p)
                  : n
                : t
                ? a.slice(p, p + 2)
                : ((n - 55296) << 10) + (o - 56320) + 65536);
        };
      };
    },
    function (t, e, r) {
      "use strict";
      var i = r(90),
        s = r(80),
        n = r(81),
        o = r(99),
        a = r(78),
        p = r(70),
        u = r(100),
        l = r(83),
        h = r(66).getProto,
        c = r(61)("iterator"),
        f = !([].keys && "next" in [].keys()),
        d = "@@iterator",
        _ = "keys",
        y = "values",
        m = function () {
          return this;
        };
      t.exports = function (t, e, r, g, v, w, b) {
        u(r, e, g);
        var S,
          P,
          x = function (t) {
            if (!f && t in k) return k[t];
            switch (t) {
              case _:
                return function () {
                  return new r(this, t);
                };
              case y:
                return function () {
                  return new r(this, t);
                };
            }
            return function () {
              return new r(this, t);
            };
          },
          T = e + " Iterator",
          M = v == y,
          C = !1,
          k = t.prototype,
          D = k[c] || k[d] || (v && k[v]),
          O = D || x(v);
        if (D) {
          var E = h(O.call(new t()));
          l(E, T, !0),
            !i && a(k, d) && o(E, c, m),
            M &&
              D.name !== y &&
              ((C = !0),
              (O = function () {
                return D.call(this);
              }));
        }
        if (
          ((i && !b) || (!f && !C && k[c]) || o(k, c, O),
          (p[e] = O),
          (p[T] = m),
          v)
        )
          if (
            ((S = {
              values: M ? O : x(y),
              keys: w ? O : x(_),
              entries: M ? x("entries") : O,
            }),
            b)
          )
            for (P in S) P in k || n(k, P, S[P]);
          else s(s.P + s.F * (f || C), e, S);
        return S;
      };
    },
    function (t, e, r) {
      var i = r(101);
      t.exports = function (t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function (t, e, r) {
      var i = r(102),
        s = r(61)("iterator"),
        n = r(70);
      t.exports = r(64).getIteratorMethod = function (t) {
        return void 0 != t ? t[s] || t["@@iterator"] || n[i(t)] : void 0;
      };
    },
    function (t, e, r) {
      var i = r(77),
        s = "__core-js_shared__",
        n = i[s] || (i[s] = {});
      t.exports = function (t) {
        return n[t] || (n[t] = {});
      };
    },
    function (t, e, r) {
      var i = 0,
        s = Math.random();
      t.exports = function (t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++i + s).toString(36)
        );
      };
    },
    function (t, e, r) {
      var i = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = i);
    },
    function (t, e, r) {
      var i = {}.hasOwnProperty;
      t.exports = function (t, e) {
        return i.call(t, e);
      };
    },
    function (t, e, r) {
      t.exports = !r(82)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (t, e, r) {
      var i = r(77),
        s = r(64),
        n = r(103),
        o = "prototype",
        a = function (t, e, r) {
          var p,
            u,
            l,
            h = t & a.F,
            c = t & a.G,
            f = t & a.S,
            d = t & a.P,
            _ = t & a.B,
            y = t & a.W,
            m = c ? s : s[e] || (s[e] = {}),
            g = c ? i : f ? i[e] : (i[e] || {})[o];
          c && (r = e);
          for (p in r)
            (u = !h && g && p in g),
              (u && p in m) ||
                ((l = u ? g[p] : r[p]),
                (m[p] =
                  c && "function" != typeof g[p]
                    ? r[p]
                    : _ && u
                    ? n(l, i)
                    : y && g[p] == l
                    ? (function (t) {
                        var e = function (e) {
                          return this instanceof t ? new t(e) : t(e);
                        };
                        return (e[o] = t[o]), e;
                      })(l)
                    : d && "function" == typeof l
                    ? n(Function.call, l)
                    : l),
                d && ((m[o] || (m[o] = {}))[p] = l));
        };
      (a.F = 1),
        (a.G = 2),
        (a.S = 4),
        (a.P = 8),
        (a.B = 16),
        (a.W = 32),
        (t.exports = a);
    },
    function (t, e, r) {
      t.exports = r(99);
    },
    function (t, e, r) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    function (t, e, r) {
      var i = r(66).setDesc,
        s = r(78),
        n = r(61)("toStringTag");
      t.exports = function (t, e, r) {
        t &&
          !s((t = r ? t : t.prototype), n) &&
          i(t, n, { configurable: !0, value: e });
      };
    },
    function (t, e, r) {
      var i = r(66),
        s = r(88);
      t.exports = function (t, e) {
        for (var r, n = s(t), o = i.getKeys(n), a = o.length, p = 0; a > p; )
          if (n[(r = o[p++])] === e) return r;
      };
    },
    function (t, e, r) {
      var i = r(88),
        s = r(66).getNames,
        n = {}.toString,
        o =
          "object" == typeof window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        a = function (t) {
          try {
            return s(t);
          } catch (e) {
            return o.slice();
          }
        };
      t.exports.get = function (t) {
        return o && "[object Window]" == n.call(t) ? a(t) : s(i(t));
      };
    },
    function (t, e, r) {
      var i = r(66);
      t.exports = function (t) {
        var e = i.getKeys(t),
          r = i.getSymbols;
        if (r)
          for (var s, n = r(t), o = i.isEnum, a = 0; n.length > a; )
            o.call(t, (s = n[a++])) && e.push(s);
        return e;
      };
    },
    function (t, e, r) {
      var i = r(104);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == i(t);
        };
    },
    function (t, e, r) {
      var i = r(105),
        s = r(98);
      t.exports = function (t) {
        return i(s(t));
      };
    },
    function (t, e, r) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    function (t, e, r) {
      t.exports = !0;
    },
    function (t, e, r) {
      var i = r(66).getDesc,
        s = r(101),
        n = r(73),
        o = function (t, e) {
          if ((n(t), !s(e) && null !== e))
            throw TypeError(e + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function (t, e, s) {
                try {
                  (s = r(103)(
                    Function.call,
                    i(Object.prototype, "__proto__").set,
                    2
                  )),
                    s(t, []),
                    (e = !(t instanceof Array));
                } catch (n) {
                  e = !0;
                }
                return function (t, r) {
                  return o(t, r), e ? (t.__proto__ = r) : s(t, r), t;
                };
              })({}, !1)
            : void 0),
        check: o,
      };
    },
    function (t, e, r) {
      var i = r(98);
      t.exports = function (t) {
        return Object(i(t));
      };
    },
    function (t, e, r) {
      var i = r(80),
        s = r(64),
        n = r(82);

      t.exports = function (t, e) {
        var r = (s.Object || {})[t] || Object[t],
          o = {};
        (o[t] = e(r)),
          i(
            i.S +
              i.F *
                n(function () {
                  r(1);
                }),
            "Object",
            o
          );
      };
    },
    function (t, e, r) {
      var i = r(66),
        s = r(92),
        n = r(105);
      t.exports = r(82)(function () {
        var t = Object.assign,
          e = {},
          r = {},
          i = Symbol(),
          s = "abcdefghijklmnopqrst";
        return (
          (e[i] = 7),
          s.split("").forEach(function (t) {
            r[t] = t;
          }),
          7 != t({}, e)[i] || Object.keys(t({}, r)).join("") != s
        );
      })
        ? function (t, e) {
            for (
              var r = s(t),
                o = arguments,
                a = o.length,
                p = 1,
                u = i.getKeys,
                l = i.getSymbols,
                h = i.isEnum;
              a > p;

            )
              for (
                var c,
                  f = n(o[p++]),
                  d = l ? u(f).concat(l(f)) : u(f),
                  _ = d.length,
                  y = 0;
                _ > y;

              )
                h.call(f, (c = d[y++])) && (r[c] = f[c]);
            return r;
          }
        : Object.assign;
    },
    function (t, e, r) {
      t.exports = function () {};
    },
    function (t, e, r) {
      t.exports = function (t, e) {
        return { value: e, done: !!t };
      };
    },
    function (t, e, r) {
      var i = Math.ceil,
        s = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? s : i)(t);
      };
    },
    function (t, e, r) {
      t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function (t, e, r) {
      var i = r(66),
        s = r(89);
      t.exports = r(79)
        ? function (t, e, r) {
            return i.setDesc(t, e, s(1, r));
          }
        : function (t, e, r) {
            return (t[e] = r), t;
          };
    },
    function (t, e, r) {
      "use strict";
      var i = r(66),
        s = r(89),
        n = r(83),
        o = {};
      r(99)(o, r(61)("iterator"), function () {
        return this;
      }),
        (t.exports = function (t, e, r) {
          (t.prototype = i.create(o, { next: s(1, r) })), n(t, e + " Iterator");
        });
    },
    function (t, e, r) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function (t, e, r) {
      var i = r(104),
        s = r(61)("toStringTag"),
        n =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })()
          );
      t.exports = function (t) {
        var e, r, o;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" == typeof (r = (e = Object(t))[s])
          ? r
          : n
          ? i(e)
          : "Object" == (o = i(e)) && "function" == typeof e.callee
          ? "Arguments"
          : o;
      };
    },
    function (t, e, r) {
      var i = r(106);
      t.exports = function (t, e, r) {
        if ((i(t), void 0 === e)) return t;
        switch (r) {
          case 1:
            return function (r) {
              return t.call(e, r);
            };
          case 2:
            return function (r, i) {
              return t.call(e, r, i);
            };
          case 3:
            return function (r, i, s) {
              return t.call(e, r, i, s);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    },
    function (t, e, r) {
      var i = {}.toString;
      t.exports = function (t) {
        return i.call(t).slice(8, -1);
      };
    },
    function (t, e, r) {
      var i = r(104);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return "String" == i(t) ? t.split("") : Object(t);
          };
    },
    function (t, e, r) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
  ]);
});
