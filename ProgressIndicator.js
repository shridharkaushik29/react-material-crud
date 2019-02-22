"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var CrudContext_1 = require("@crud/react/CrudContext");
// @ts-ignore
var ProgressIndicator = /** @class */ (function (_super) {
    __extends(ProgressIndicator, _super);
    function ProgressIndicator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    ProgressIndicator.prototype.componentDidMount = function () {
        var _this = this;
        var $crud = this.context;
        $crud.config(function (config) {
            config.callbacks.loading = function (value) { return _this.setState({ show: value }); };
            return config;
        });
    };
    ProgressIndicator.prototype.render = function () {
        var _a = this.props, _b = _a.color, color = _b === void 0 ? "secondary" : _b, _c = _a.variant, variant = _c === void 0 ? "indeterminate" : _c, classes = _a.classes, props = __rest(_a, ["color", "variant", "classes"]);
        var show = this.state.show;
        return show ? React.createElement(core_1.LinearProgress, __assign({ classes: {
                root: classes.root
            }, color: color, variant: variant }, props)) : null;
    };
    ProgressIndicator.contextType = CrudContext_1.CrudContext;
    ProgressIndicator = __decorate([
        withStyles_1.default({
            root: {
                position: "absolute",
                top: 0,
                width: '100%',
                zIndex: 1301
            }
        })
    ], ProgressIndicator);
    return ProgressIndicator;
}(React.Component));
exports.ProgressIndicator = ProgressIndicator;
