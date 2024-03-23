"use strict";

exports.__esModule = true;
exports.verifyGatewayRequest = verifyGatewayRequest;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _errorHandler = require("./error-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const tokens = ['auth', 'seller', 'gig', 'search', 'buyer', 'message', 'order', 'review', 'order'];
function verifyGatewayRequest(req, res, next) {
  var _req$headers;
  if (!((_req$headers = req.headers) != null && _req$headers.gatewayToken)) {
    throw new _errorHandler.NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request coming from api gateway');
  }
  const gatewayToken = req.headers.gatewayToken;
  if (!gatewayToken) {
    throw new _errorHandler.NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request coming from api gateway');
  }
  try {
    const payload = _jsonwebtoken.default.verify(gatewayToken, '');
    if (!tokens.includes(payload.id)) {
      throw new _errorHandler.NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request payload is invalid');
    }
  } catch (error) {
    throw new _errorHandler.NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request coming from api gateway');
  }
}
//# sourceMappingURL=gateway-middleware.js.map