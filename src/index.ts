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
} from './auth.interface';

export { IBuyerDocument, IReduxBuyer } from './buyer.interface';

export { 
    IConversationDocument, 
    IMessageDocument,
    IMessageDetails,
    IChatBoxProps,
    IChatSellerProps,
    IChatBuyerProps,
    IChatMessageProps 
} from './chat.interface';

export { IEmailLocals } from './email.interface';

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
} from './gig.interface';

export { 
    IOffer,
    IExtendedDelivery,
    IDeliveredWork,
    IOrderEvents,
    IOrderReview,
    IOrderMessage,
    IOrderDocument,
    IOrderNotifcation
} from './order.interface';

export { 
    IReviewMessageDetails,
    IRatingTypes,
    IReviewDocument,
    IRatingCategoryItem,
    IRatingCategories
} from './review.interface';

export { 
    ILanguage,
    IExperience,
    IEducation,
    ICertificate,
    ISellerDocument
} from './seller.interface';

export { 
    ISearchResult,
    IHitsTotal,
    IQueryList,
    IQueryString,
    ITerm,
    IPaginateProps
} from './search.interface';

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