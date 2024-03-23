import { formatDiagnostic } from 'typescript';

export {
    IAuthPayload,
    IAuthDocument,
    IAuthBuyerMessageDetails,
    IEmailMessageDetails,
    IAuth,
    ISignInPayload,
    ISignUpPayload,
    IForgotPassword,
    IResetPassword,
    IReduxAddAuthUser,
    IReduxLogout,
    IAuthResponse,
    IAuthUser
} from './interfaces/auth.interface';

export { IBuyerDocument, IReduxBuyer } from './interfaces/buyer.interface';

export { 
    IConversationDocument, 
    IMessageDocument,
    IMessageDetails,
    IChatBoxProps,
    IChatSellerProps,
    IChatBuyerProps,
    IChatMessageProps 
} from './interfaces/chat.interface';

export { IEmailLocals } from './interfaces/email.interface';

export {
    ICreateGig,
    ISellerGig,
    IGigContext,
    IGigsProps,
    IGigCardItems,
    ISelectedBudget,
    IGigViewReviewsProps,
    IGigInfo,
    IGigTopProps
} from './interfaces/gig.interface';

export { 
    IOffer,
    IExtendedDelivery,
    IDeliveredWork,
    IOrderEvents,
    IOrderReview,
    IOrderMessage,
    IOrderDocument,
    IOrderNotifcation
} from './interfaces/order.interface';

export { 
    IReviewMessageDetails,
    IRatingTypes,
    IReviewDocument,
    IRatingCategoryItem,
    IRatingCategories
} from './interfaces/review.interface';

export { 
    ILanguage,
    IExperience,
    IEducation,
    ICertificate,
    ISellerDocument
} from './interfaces/seller.interface';

export { 
    ISearchResult,
    IHitsTotal,
    IQueryList,
    IQueryString,
    ITerm,
    IPaginateProps
} from './interfaces/search.interface';

export {
    uploads,
    videoUpload
} from './cloudinary-upload';

export {
    IError,
    IErrorResponse,
    CustomError,
    BadRequestError,
    NotFoundError,
    NotAuthorizedError,
    FileTooLargeError,
    ServerError,
    ErrorException
} from './error-handler';

export {
    verifyGatewayRequest
} from './gateway-middleware';

export {
    winstonLogger
} from './logger';

export {
    firstLetterUppercase,
    lowerCase,
    toUpperCase,
    isEmail,
    isDataURL
} from './helpers';