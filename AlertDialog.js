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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@crud/react");
var core_1 = require("@material-ui/core");
var AlertDialog = /** @class */ (function (_super) {
    __extends(AlertDialog, _super);
    function AlertDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    AlertDialog.prototype.componentDidMount = function () {
        var _this = this;
        var $crud = this.context;
        $crud.config(function (config) {
            config.callbacks.alert = function (options) {
                if (options === void 0) { options = {}; }
                return new Promise(function (resolve) {
                    _this.onConfirm = resolve;
                    var textContent = options.textContent, title = options.title, _a = options.options, ok = _a.ok, cancel = _a.cancel;
                    _this.setState({ textContent: textContent, title: title, open: true, cancel: cancel, ok: ok });
                });
            };
            return config;
        });
    };
    AlertDialog.prototype.confirm = function () {
        this.setState({
            open: false
        });
        this.onConfirm();
    };
    AlertDialog.prototype.render = function () {
        var _this = this;
        var _a = this, _b = _a.state, title = _b.title, textContent = _b.textContent, _c = _b.ok, ok = _c === void 0 ? "Hide" : _c, dialogProps = _a.props.dialogProps;
        return React.createElement(core_1.Dialog, __assign({ fullWidth: true, maxWidth: "xs", open: !!this.state.open, onClose: function () { return _this.setState({ open: false }); } }, dialogProps),
            React.createElement(core_1.DialogTitle, { id: "responsive-dialog-title" }, title),
            React.createElement(core_1.DialogContent, null,
                React.createElement(core_1.DialogContentText, null, textContent)),
            React.createElement(core_1.DialogActions, null,
                React.createElement(core_1.Button, { onClick: function () { return _this.confirm(); }, color: "primary", autoFocus: true }, ok)));
    };
    AlertDialog.contextType = react_1.CrudContext;
    return AlertDialog;
}(React.Component));
exports.default = AlertDialog;
