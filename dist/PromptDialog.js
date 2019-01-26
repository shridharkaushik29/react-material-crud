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
var CrudProvider_1 = require("./CrudProvider");
var core_1 = require("@material-ui/core");
var TextField_1 = __importDefault(require("@material-ui/core/es/TextField"));
var Button_1 = __importDefault(require("@material-ui/core/es/Button"));
var PromptDialog = /** @class */ (function (_super) {
    __extends(PromptDialog, _super);
    function PromptDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    PromptDialog.prototype.componentDidMount = function () {
        var _this = this;
        var $crud = this.context;
        $crud.config(function (config) {
            config.callbacks.prompt = function (options) { return new Promise(function (resolve, reject) {
                _this.onConfirm = resolve;
                _this.onCancel = reject;
                var textContent = options.textContent, title = options.title, placeholder = options.placeholder, _a = options.initialValue, initialValue = _a === void 0 ? "" : _a;
                _this.setState({ textContent: textContent, title: title, placeholder: placeholder, show: true, value: initialValue });
            }); };
            return config;
        });
    };
    PromptDialog.prototype.cancel = function () {
        this.setState({
            show: false
        });
        this.onCancel();
    };
    PromptDialog.prototype.confirm = function () {
        this.setState({
            show: false
        });
        this.onConfirm(String(this.state.value));
    };
    PromptDialog.prototype.render = function () {
        var _this = this;
        var _a = this.state, _b = _a.textContent, textContent = _b === void 0 ? "" : _b, _c = _a.title, title = _c === void 0 ? "" : _c, _d = _a.inputType, inputType = _d === void 0 ? "text" : _d, _e = _a.placeholder, placeholder = _e === void 0 ? "Type here..." : _e, _f = _a.label, label = _f === void 0 ? "" : _f, _g = _a.cancel, cancel = _g === void 0 ? "Cancel" : _g, _h = _a.ok, ok = _h === void 0 ? "Submit" : _h;
        return React.createElement(core_1.Dialog, { maxWidth: "xs", fullWidth: true, open: !!this.state.show, onClose: function () { return _this.setState({ show: false }); } },
            React.createElement(core_1.DialogTitle, { id: "responsive-dialog-title" }, title),
            React.createElement(core_1.DialogContent, null,
                React.createElement(core_1.Typography, { variant: "h6" }, textContent),
                React.createElement(TextField_1.default, { autoFocus: true, margin: "dense", id: "name", label: label, placeholder: placeholder, type: inputType, value: this.state.value, onChange: function (event) {
                        var value = event.target.value;
                        _this.setState(function (_a) {
                            var state = __rest(_a, []);
                            state.value = value;
                            return state;
                        });
                    }, fullWidth: true })),
            React.createElement(core_1.DialogActions, null,
                React.createElement(Button_1.default, { onClick: function () { return _this.cancel(); }, color: "primary" }, cancel),
                React.createElement(Button_1.default, { onClick: function () { return _this.confirm(); }, color: "primary" }, ok)));
    };
    PromptDialog.contextType = CrudProvider_1.CrudContext;
    return PromptDialog;
}(React.Component));
exports.PromptDialog = PromptDialog;
//# sourceMappingURL=PromptDialog.js.map