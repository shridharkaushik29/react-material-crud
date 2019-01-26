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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var CrudProvider_1 = require("./CrudProvider");
var Button_1 = __importDefault(require("@material-ui/core/es/Button"));
var Snackbar_1 = __importDefault(require("@material-ui/core/es/Snackbar"));
var withStyles_1 = __importDefault(require("@material-ui/core/es/styles/withStyles"));
var SnackbarContent_1 = __importDefault(require("@material-ui/core/es/SnackbarContent"));
var classNames = require("classnames");
// @ts-ignore
var NotifySnackbar = /** @class */ (function (_super) {
    __extends(NotifySnackbar, _super);
    function NotifySnackbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            action: _this.props.action || React.createElement(Button_1.default, { color: "inherit", onClick: function () { return _this.setState({ open: false }); } }, "Hide")
        };
        return _this;
    }
    NotifySnackbar.prototype.componentDidMount = function () {
        var _this = this;
        var $crud = this.context;
        $crud.config(function (config) {
            config.callbacks.notify = function (options) { return new Promise(function (resolve, reject) {
                _this.onClose = resolve;
                var type = options.type, message = options.message;
                _this.setState({ message: message, type: type, open: true });
            }); };
            return config;
        });
    };
    NotifySnackbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, _b = _a.autoHideDuration, autoHideDuration = _b === void 0 ? 2000 : _b;
        var _c = this.state, message = _c.message, type = _c.type, action = _c.action;
        return React.createElement(Snackbar_1.default, { autoHideDuration: autoHideDuration, open: !!this.state.open, onClose: function () {
                _this.setState({
                    open: false,
                });
                _this.onClose();
            } },
            React.createElement(SnackbarContent_1.default, { classes: {
                    root: classNames(type === "success" ? classes.success : type === "error" ? classes.error : "")
                }, message: message, action: action }));
    };
    NotifySnackbar.contextType = CrudProvider_1.CrudContext;
    NotifySnackbar = __decorate([
        withStyles_1.default({
            error: {
                backgroundColor: "red"
            },
            success: {
                backgroundColor: "green"
            }
        })
    ], NotifySnackbar);
    return NotifySnackbar;
}(React.Component));
exports.NotifySnackbar = NotifySnackbar;
//# sourceMappingURL=NotifySnackbar.js.map