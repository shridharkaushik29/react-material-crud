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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.CrudContext = React.createContext(null);
var CrudProvider = /** @class */ (function (_super) {
    __extends(CrudProvider, _super);
    function CrudProvider(props) {
        var _this = _super.call(this, props) || this;
        if (!_this.props.crud) {
            throw "Please provide a CrudRequest instance";
        }
        return _this;
    }
    CrudProvider.prototype.render = function () {
        return React.createElement(exports.CrudContext.Provider, { value: this.props.crud }, this.props.children);
    };
    return CrudProvider;
}(React.Component));
exports.CrudProvider = CrudProvider;
//# sourceMappingURL=CrudProvider.js.map