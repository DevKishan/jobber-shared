import JWT from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from './error-handler';

const tokens:string[] = [ 'auth', 'seller', 'gig', 'search', 'buyer', 'message', 'order', 'review', 'order' ];

export function verifyGatewayRequest( req:Request, res: Response, next: NextFunction ): void {
    if ( ! req.headers?.gatewayToken ) {
        throw new NotAuthorizedError( 'Invalid request', 'verifyGatewayRequest() method: Request coming from api gateway' );
    }
    
    const gatewayToken:string = req.headers.gatewayToken as string;
    if( ! gatewayToken ) {
        throw new NotAuthorizedError( 'Invalid request', 'verifyGatewayRequest() method: Request coming from api gateway' );
    }
    
    try {
        const payload:JWT.JwtPayload = JWT.verify( gatewayToken, '' ) as JWT.JwtPayload;
        if ( ! tokens.includes( payload.id ) ) {
            throw new NotAuthorizedError( 'Invalid request', 'verifyGatewayRequest() method: Request payload is invalid' );
        }
    } catch (error) {
        throw new NotAuthorizedError( 'Invalid request', 'verifyGatewayRequest() method: Request coming from api gateway' );
    }
}