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
var Button_1 = __importDefault(require("@material-ui/core/es/Button"));
var ConfirmDialog = /** @class */ (function (_super) {
    __extends(ConfirmDialog, _super);
    function ConfirmDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    ConfirmDialog.prototype.componentDidMount = function () {
        var _this = this;
        var $crud = this.context;
        $crud.config(function (config) {
            config.callbacks.confirm = function (options) { return new Promise(function (resolve, reject) {
                _this.onConfirm = resolve;
                _this.onCancel = reject;
                var textContent = options.textContent, title = options.title, cancel = options.cancel, ok = options.ok;
                _this.setState({ textContent: textContent, title: title, open: true, cancel: cancel, ok: ok });
            }); };
            return config;
        });
    };
    ConfirmDialog.prototype.cancel = function () {
        this.setState({
            open: false
        });
        this.onCancel();
    };
    ConfirmDialog.prototype.confirm = function () {
        this.setState({
            open: false
        });
        this.onConfirm();
    };
    ConfirmDialog.prototype.render = function () {
        var _this = this;
        var _a = this.state, _b = _a.title, title = _b === void 0 ? "Are you sure?" : _b, _c = _a.textContent, textContent = _c === void 0 ? "This action may not be reversible" : _c, _d = _a.cancel, cancel = _d === void 0 ? "No, I'm Not" : _d, _e = _a.ok, ok = _e === void 0 ? "Yes! Sure" : _e;
        return React.createElement(core_1.Dialog, { fullWidth: true, maxWidth: "xs", open: !!this.state.open, onClose: function () { return _this.setState({ open: false }); }, "aria-labelledby": "responsive-dialog-title" },
            React.createElement(core_1.DialogTitle, { id: "responsive-dialog-title" }, title),
            React.createElement(core_1.DialogContent, null,
                React.createElement(core_1.DialogContentText, null, textContent)),
            React.createElement(core_1.DialogActions, null,
                React.createElement(Button_1.default, { onClick: function () { return _this.cancel(); }, color: "primary" }, cancel),
                React.createElement(Button_1.default, { onClick: function () { return _this.confirm(); }, color: "primary", autoFocus: true }, ok)));
    };
    ConfirmDialog.contextType = CrudProvider_1.CrudContext;
    return ConfirmDialog;
}(React.Component));
exports.ConfirmDialog = ConfirmDialog;
//# sourceMappingURL=ConfirmDialog.js.map