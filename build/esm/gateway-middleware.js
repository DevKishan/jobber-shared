import JWT from 'jsonwebtoken';
import { NotAuthorizedError } from './error-handler';
const tokens = ['auth', 'seller', 'gig', 'search', 'buyer', 'message', 'order', 'review', 'order'];
export function verifyGatewayRequest(req, res, next) {
  var _req$headers;
  if (!((_req$headers = req.headers) != null && _req$headers.gatewayToken)) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request coming from api gateway');
  }
  const gatewayToken = req.headers.gatewayToken;
  if (!gatewayToken) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request coming from api gateway');
  }
  try {
    const payload = JWT.verify(gatewayToken, '');
    if (!tokens.includes(payload.id)) {
      throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request payload is invalid');
    }
  } catch (error) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request coming from api gateway');
  }
}
//# sourceMappingURL=gateway-middleware.js.map