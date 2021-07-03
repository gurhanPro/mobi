export const LOGIN_REQUESTED = 'login-requested';
export const LOGIN__SUCCEEDED = 'login-succeeded';
export const LOGIN__FAILED = 'login-failed';
export const LOGIN__COMPLETED = 'login-completed';

export const PURCHASE_POLICY_REQUEST = 'purchase-policy-request';
export const PURCHASE_POLICY_SUCCESS = 'purchase-policy-success';
export const PURCHASE_POLICY_FAILURE = 'purchase-policy-failure';

export const UPDATE_POLICY_REQUEST = 'update-policy-request';
export const UPDATE_POLICY_FAILURE = 'update-policy-failure';

export const CLAIM_SUBMISSION_REQUEST = 'claim-submission-request';
export const CLAIM_SUBMISSION_SUCCESS = 'claim-submission-success';
export const CLAIM_SUBMISSION_FAILURE = 'claim-submission-failure';
export const CLAIM_SUBMISSION_RESET = 'claim-submission-reset';

export const CURRENT_PROFILE_REQUEST = 'current-profile-request';
export const CURRENT_PROFILE_SUCCESS = 'current-profile-success';
export const CURRENT_PROFILE_FAIL = 'current-profile-failure';

export const CLAIM_REJECTION_REASON_REQUEST = 'claim-rejection-reason-request';
export const CLAIM_REJECTION_REASON_SUCCESS = 'claim-rejection-reason-success';
export const CLAIM_REJECTION_REASON_FAILURE = 'claim-rejection-reason-failure';

export const CURRENT_PROFILE_UPDATE_REQUEST = 'current-profile-update-request';
export const CURRENT_PROFILE_UPDATE_SUCCESS = 'current-profile-update-success';
export const CURRENT_PROFILE_UPDATE_FAIL = 'current-profile-update-failure';

export const MAKE_CURRENT_CUSTOMER = 'make-current-customer';
export const SEARCH_CUSTOMER_BY_MSISDN_SUCCESS =
  'search-customer-by-msisdn-success';

export const PAID_PRODUCT_LIST_REQUEST = 'paid-roduct-list-request';
export const PAID_PRODUCT_LIST_SUCCESS = 'paid-product-list-success';
export const PAID_PRODUCT_LIST_FAIL = 'paid-product-list-failure';

export const UPDATE_CUSTOMER_REQUEST = 'customer-update-requested';
export const UPDATE_CUSTOMER_SUCCESS = 'customer-update-succeeded';
export const UPDATE_CUSTOMER_FAIL = 'customer-update-failed';
export const EDIT_CUSTOMER_DISPLAY_ERROR = 'edit-customer-display-error';

export const UPDATE_LANGUAGE = 'update-current-language';

// TODO: Test all use of the actions below before renaming the string to lower case
export const REFRESH_CUSTOMER_REQUEST = 'REFRESH_CUSTOMER_REQUEST';
export const USER_LOGOUT = 'USER_LOGOUT';
// TODO: Rename this action, it does *both* search by msisdn & name
export const SEARCH_CUSTOMER_BY_MSISDN_REQUEST =
  'SEARCH_CUSTOMER_BY_MSISDN_REQUEST';

export const CHANGE_CURRENT_CUSTOMER = 'CHANGE_CURRENT_CUSTOMER';

export const REGISTER_CUSTOMER_REQUEST = 'REGISTER_CUSTOMER_REQUEST';
export const REGISTER_CUSTOMER_SUCCESS = 'REGISTER_CUSTOMER_SUCCESS';
export const REGISTER_CUSTOMER_FAIL = 'REGISTER_CUSTOMER_FAIL';
export const SET_REGISTRATION_ERROR = 'SET_REGISTRATION_ERROR';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const SESSION_EXPIRED_ALERT = 'SESSION_EXPIRED_ALERT';
export const SESSION_REFRESH_REQUEST = 'SESSION_REFRESH_REQUEST';
export const SESSION_REFRESH_SUCCESS = 'SESSION_REFRESH_SUCCESS';
export const SESSION_REFRESH_FAIL = 'SESSION_REFRESH_FAIL';

export const DELETE_POLICY_REQUEST = 'DELETE_POLICY_REQUEST';
export const DELETE_POLICY_SUCCESS = 'DELETE_POLICY_SUCCESS';
export const DELETE_POLICY_FAIL = 'DELETE_POLICY_FAIL';

// TODO: END of capitalise strings

export const REPORT_REQUEST = 'report-request';
export const REPORT_REQUEST_SUCCESS = 'report-request-success';
export const REPORT_REQUEST_ERROR = 'report-request-failure';
export const REPORT_REQUEST_RESET = 'report-request-reset';

export const REPORT_CLAIM_FINALISATION_REQUEST =
  'report-claim-finalisation-request';
export const REPORT_CLAIM_FINALISATION_SUCCESS =
  'report-claim-finalisation-success';
export const REPORT_CLAIM_FINALISATION_ERROR =
  'report-claim-finalisation-failure';
export const REPORT_CLAIM_FINALISATION_RESET =
  'report-claim-finalisation-reset';

export const CLAIM_SEARCH_REQUEST = 'claim-search-request';
export const CLAIM_SEARCH_SUCCESS = 'claim-search-success';
export const CLAIM_SEARCH_FAILURE = 'claim-search-failure';
export const CLAIM_SEARCH_RESET = 'claim-search-reset';

export const CLAIM_STATUS_REQUEST = 'claim-status-request';
export const CLAIM_STATUS_SUCCESS = 'claim-status-success';
export const CLAIM_STATUS_FAILURE = 'claim-status-failure';

export const CLAIM_TYPES_SUCCESS = 'claim-types-success';
export const CLAIM_STATUSES_SUCCESS = 'claim-statuses-success'; // NOTE: Can be confused with the above 'CLAIM_STATUS_SUCCESS'

export const CHANGE_LOYALTY_REGISTRATION_REQUEST =
  'change-loyalty-registration-request';
export const CHANGE_LOYALTY_REGISTRATION_FAILURE =
  'change-loyalty-registration-failure';

export const DELETE_PREMIUM_REQUEST = 'delete-premium-request';
export const DELETE_PREMIUM_SUCCESS = 'delete-premium-success';
export const DELETE_PREMIUM_FAILURE = 'delete-premium-failure';

export const ADD_MISSING_PAYMENT_REQUEST = 'add-missing-payment-request';
export const ADD_MISSING_PAYMENT_SUCCESS = 'add-missing-payment-success';
export const ADD_MISSING_PAYMENT_FAIL = 'add-missing-payment-fail';
export const ADD_MISSING_PAYMENT_RESET = 'add-missing-payment-reset';

export const ADD_SINGLE_PAYMENT_REQUEST = 'add-single-payment-request';
export const ADD_SINGLE_PAYMENT_SUCCESS = 'add-single-payment-success';
export const ADD_SINGLE_PAYMENT_FAIL = 'add-single-payment-fail';
export const ADD_PAYMENT_RESET = 'add-payment-reset';

export const ADD_MULTIPLE_PAYMENT_REQUEST = 'add-multiple-payment-request';
export const ADD_MULTIPLE_PAYMENT_SUCCESS = 'add-multiple-payment-success';
export const ADD_MULTIPLE_PAYMENT_FAIL = 'add-multiple-payment-fail';

export const CLAIM_CALLBACK_REQUEST = 'claim-callback-request';
export const CLAIM_CALLBACK_SUCCESS = 'claim-callback-success';
export const CLAIM_CALLBACK_FAILURE = 'claim-callback-failure';

export const FORGOT_PASSWORD_REQUEST = 'forgot-password-request';
export const FORGOT_PASSWORD_SUCCESS = 'forgot-password-success';
export const FORGOT_PASSWORD_FAILURE = 'forgot-password-failure';
export const FORGOT_PASSWORD_RESET = 'forgot-password-reset';

export const OPEN_EDIT_CUSTOMER_MODAL = 'open-edit-customer-modal';
export const CLOSE_EDIT_CUSTOMER_MODAL = 'close-edit-customer-modal';

export const REPORT_OPEN_CLAIM_REQUEST = 'report-open-claim-request';
export const REPORT_OPEN_CLAIM_SUCCESS = 'report-open-claim-success';
export const REPORT_OPEN_CLAIM_FAILURE = 'report-open-claim-failure';
export const REPORT_OPEN_CLAIM_RESET = 'report-open-claim-reset';

export const REPORT_REGISTRATION_REQUEST = 'report-registration-request';
export const REPORT_REGISTRATION_SUCCESS = 'report-registration-success';
export const REPORT_REGISTRATION_FAILURE = 'report-registration-failure';
export const REPORT_REGISTRATION_RESET = 'report-registration-reset';

export const REPORT_PAYABLE_CLAIM_REQUEST = 'report-payable-claim-request';
export const REPORT_PAYABLE_CLAIM_SUCCESS = 'report-payable-claim-success';
export const REPORT_PAYABLE_CLAIM_FAILURE = 'report-payable-claim-failure';
export const REPORT_PAYABLE_CLAIM_RESET = 'report-payable-claim-reset';

export const SET_SELECTED_POLICIES = 'set-selected-policies';

export const TIGO_UPLOAD_LOYALTY_REQUEST =
  'tigo-upload-loyalty-eligibilty-request';
export const TIGO_UPLOAD_LOYALTY_SUCCESS =
  'tigo-upload-loyalty-eligibilty-success';
export const TIGO_UPLOAD_LOYALTY_FAILURE =
  'tigo-upload-loyalty-eligibilty-failure';

export const LOYALTY_RENEWAL_REQUEST = 'loyalty-renewal-request';
export const LOYALTY_RENEWAL_SUCCESS = 'loyalty-renewal-success';
export const LOYALTY_RENEWAL_FAILURE = 'loyalty-renewal-failure';

export const CREATE_DEBIT_ORDER_REQUEST = 'create-debit-order-request';
export const CREATE_DEBIT_ORDER_SUCCESS = 'create-debit-order-success';
export const CREATE_DEBIT_ORDER_FAILURE = 'create-debit-order-failure';
export const RESET_CREATE_DEBIT_ORDER = 'reset-create-debit-order';

export const GET_DAILY_DEBIT_ORDER_REQUEST = 'get-daily-debit-order-request';
export const GET_DAILY_DEBIT_ORDER_SUCCESS = 'get-daily-debit-order-success';
export const GET_DAILY_DEBIT_ORDER_FAILURE = 'get-daily-debit-order-failuer';

export const UPDATE_DAILY_DEBIT_ORDER_REQUEST =
  'update-daily-debit-order-request';
export const UPDATE_DAILY_DEBIT_ORDER_SUCCESS =
  'update-daily-debit-order-success';
export const UPDATE_DAILY_DEBIT_ORDER_FAILURE =
  'update-daily-debit-order-failuer';

export const POLICIES_CREATED_REPORT_REQUEST =
  'policies-created-report-request';
export const POLICIES_CREATED_REPORT_REQUEST_SUCCESS =
  'policies-created-report-request-success';
export const POLICIES_CREATED_REPORT_REQUEST_ERROR =
  'policies-created-report-request-failure';
export const POLICIES_CREATED_REPORT_REQUEST_RESET =
  'policies-created-report-request-reset';

export const GET_POLICY_PRODUCT_REQUEST = 'get-policy-product-request';
export const GET_POLICY_PRODUCT_SUCCESS = 'get-policy-product-success';
export const GET_POLICY_PRODUCT_FAILURE = 'get-policy-product-failure';

export const INITIATE_POLICY_MOBILE_MONEY_PAYMENT_REQUEST =
  'initiate-policy-mobile-money-payment-request';
export const INITIATE_POLICY_MOBILE_MONEY_PAYMENT_SUCCESS =
  'initiate-policy-mobile-money-payment-success';
export const INITIATE_POLICY_MOBILE_MONEY_PAYMENT_FAILURE =
  'initiate-policy-mobile-money-payment-failure';
export const RESET_MOBILE_MONEY_INITIATION = 'reset-mobile-money-initiation';

export const CLAIM_UPLOAD_CALLBACK_REQUEST = 'claim-upload-callback-request';
export const CLAIM_FILE_DELETE_REQUEST = 'claim-file-delete-request';
export const CLAIM_FILE_DELETE_REQUEST_FAILURE =
  'claim-file-delete-request-failure';
export const CLAIM_FILE_DELETE_REQUEST_SUCCESS =
  'claim-file-delete-request-success';

export const CLAIM_CALLBACK_DELETE_REQUEST = 'claim-callback-delete-request';
export const CLAIM_CALLBACK_DELETE_SUCCESS = 'claim-callback-delete-success';
export const CLAIM_CALLBACK_DELETE_FAILURE = 'claim-callback-delete-failure';
export const RESET_CLAIM_CALLBACK_DELETE = 'reset-claim-callback-delete';

export const CLOSED_CLAIM_REQUEST = 'closed-claim-request';
export const CLOSED_CLAIM_SUCCESS = 'closed-claim-success';
export const CLOSED_CLAIM_FAIL = 'closed-claim-failure';

export const OPEN_CLAIM_REQUEST = 'open-claim-request';
export const OPEN_CLAIM_SUCCESS = 'open-claim-success';
export const OPEN_CLAIM_FAILURE = 'open-claim-failure';

export const SUMMARY_CLAIM_REQUEST = 'summary-claim-request';
export const SUMMARY_CLAIM_SUCCESS = 'summary-claim-success';
export const SUMMARY_CLAIM_FAILURE = 'summary-claim-failure';

export const REPORT_REFUND_REQUEST = 'report-refund-request';
export const REPORT_REFUND_SUCCESS = 'report-refund-success';
export const REPORT_REFUND_FAILURE = 'report-refund-failure';
export const REPORT_REFUND_RESET = 'report-refund-reset';

export const REPORT_PAID_CLAIM_REQUEST = 'report-paid-claim-request';
export const REPORT_PAID_CLAIM_SUCCESS = 'report-paid-claim-success';
export const REPORT_PAID_CLAIM_FAILURE = 'report-paid-claim-failure';
export const REPORT_PAID_CLAIM_RESET = 'report-paid-claim-reset';

export const REPORT_VAS_AGENT_REQUEST = 'report-vas-agent-request';
export const REPORT_VAS_AGENT_SUCCESS = 'report-vas-agent-success';
export const REPORT_VAS_AGENT_FAILURE = 'report-vas-agent-failure';
export const REPORT_VAS_AGENT_RESET = 'report-vas-agent-reset';

export const REPORT_AGENT_WEB_REQUEST = 'report-agent-web-request';
export const REPORT_AGENT_WEB_SUCCESS = 'report-agent-web-success';
export const REPORT_AGENT_WEB_FAILURE = 'report-agent-web-failure';
export const REPORT_AGENT_WEB_RESET = 'report-agent-web-reset';

export const PULL_CUSTOMER_KYC_REQUEST = 'pull-customer-kyc-request';
export const PULL_CUSTOMER_KYC_REQUEST_FAILURE = 'pull-customer-kyc-failure';
export const PULL_CUSTOMER_KYC_REQUEST_SUCCESS = 'pull-customer-kyc-success';

export const REFRESH_CLAIM_REQUEST = 'refresh-claim-request';
export const REFRESH_CLAIM_SUCCESS = 'refresh-claim-success';
export const REFRESH_CLAIM_FAILURE = 'refresh-claim-failure';

export const REPORT_PAYMENT_REQUEST = 'report-payment-request';
export const REPORT_PAYMENT_REQUEST_SUCCESS = 'report-payment-request-success';
export const REPORT_PAYMENT_REQUEST_ERROR = 'report-payment-request-failure';
export const REPORT_PAYMENT_REQUEST_RESET = 'report-payment-request-reset';

export const RETRY_FAILED_CLAIM_PAYMENT_REQUEST = 'retry-failed-claim-payment';
export const RETRY_FAILED_CLAIM_PAYMENT_REQUEST_SUCCESS =
  'retry-failed-claim-payment-success';
export const RETRY_FAILED_CLAIM_PAYMENT_REQUEST_FAILURE =
  'retry-failed-claim-payment-failure';

export const CLAIM_PAYMENT_UPDATE_OUTCOME_REQUEST =
  'claim-payment-update-outcome';
export const CLAIM_PAYMENT_UPDATE_OUTCOME_REQUEST_SUCCESS =
  'claim-payment-update-outcome-success';
export const CLAIM_PAYMENT_UPDATE_OUTCOME_REQUEST_FAILURE =
  'claim-payment-update-outcome-failure';

export const UPLOAD_BULK_SMS_REQUEST = 'upload-bulk-sms-request';
export const UPLOAD_BULK_SMS_SUCCESS = 'upload-bulk-sms-success';
export const UPLOAD_BULK_SMS_FAILED = 'upload-bulk-sms-failed';
export const UPLOAD_BULK_SMS_RESET = 'upload-bulk-sms-reset';

export const DOWNLOAD_BULK_SMS_REQUEST = 'download-bulk-sms-request';
export const DOWNLOAD_BULK_SMS_SUCCESS = 'download-download-bulk-sms-success';
export const DOWNLOAD_BULK_SMS_FAILED = 'download-bulk-sms-failed';
export const DOWNLOAD_BULK_SMS_RESET = 'download-bulk-sms-reset';

export const SUMMARY_BULK_SMS_REQUEST = 'summary-bulk-sms-request';
export const SUMMARY_BULK_SMS_SUCCESS = 'summary-bulk-sms-success';
export const SUMMARY_BULK_SMS_FAILED = 'summary-bulk-sms-failed';
export const SUMMARY_BULK_SMS_RESET = 'summary-bulk-sms-reset';

export const REPORT_CLAIM_NOTIFICATION_REQUEST =
  'report-claim-notification-request';
export const REPORT_CLAIM_NOTIFICATION_SUCCESS =
  'report-claim-notification-success';
export const REPORT_CLAIM_NOTIFICATION_FAILURE =
  'report-claim-notification-failed';
export const REPORT_CLAIM_NOTIFICATION_RESET =
  'report-claim-notification-reset';

export const REPORT_CLAIM_REGISTER_REQUEST = 'report-claim-register-request';
export const REPORT_CLAIM_REGISTER_SUCCESS = 'report-claim-register-success';
export const REPORT_CLAIM_REGISTER_FAILURE = 'report-claim-register-failed';
export const REPORT_CLAIM_REGISTER_RESET = 'report-claim-register-reset';

export const REPORT_PREMIUM_REGISTER_REQUEST =
  'report-premium-register-request';
export const REPORT_PREMIUM_REGISTER_SUCCESS =
  'report-premium-register-success';
export const REPORT_PREMIUM_REGISTER_FAILURE = 'report-premium-register-failed';
export const REPORT_PREMIUM_REGISTER_RESET = 'report-premium-register-reset';

export const REPORT_SUSPENDED_POLICIES_REQUEST =
  'report-suspended-policies-request';
export const REPORT_SUSPENDED_POLICIES_SUCCESS =
  'report-suspended-policies-success';
export const REPORT_SUSPENDED_POLICIES_FAILURE =
  'report-suspended-policies-failed';
export const REPORT_SUSPENDED_POLICIES_RESET =
  'report-suspended-policies-reset';

export const CLAIM_CONDITION_REQUEST = 'claim-condition-request';
export const CLAIM_CONDITION_SUCCESS = 'claim-condition-success';
export const CLAIM_CONDITION_FAILURE = 'claim-condition-failure';

export const REPORT_PREMIUM_DUE_REQUEST = 'report-premium-due-request';
export const REPORT_PREMIUM_DUE_SUCCESS = 'report-premium-due-success';
export const REPORT_PREMIUM_DUE_FAILURE = 'report-premium-due-failure';
export const REPORT_PREMIUM_DUE_RESET = 'report-premium-due-reset';

export const UPDATE_ROLES_AND_PARTNERS_REQUEST =
  'update-roles-and-partners-request';
export const UPDATE_ROLES_AND_PARTNERS_SUCCESS =
  'update-roles-and-partners-success';
export const UPDATE_ROLES_AND_PARTNERS_FAILED =
  'update-roles-and-partners-failed';
export const RESET_USER_CONTAINER = 'reset-user-container';

export const RESET_USER_PASSWORD_REQUEST = 'reset-user-password-request';
export const RESET_USER_PASSWORD_SUCCESS = 'reset-user-password-success';
export const RESET_USER_PASSWORD_FAILED = 'reset-user-password-failed';

export const DELETE_USER_REQUEST = 'delete-user-request';
export const DELETE_USER_FAILED = 'delete-user-failed';
export const DELETE_USER_SUCCESS = 'delete-user-success';

export const EXPIRED_CLAIM_REVERSAL_REQUEST = 'expired-claim-reversal-outcome';
export const EXPIRED_CLAIM_REVERSAL_REQUEST_SUCCESS =
  'expired-claim-reversal-outcome-success';
export const EXPIRED_CLAIM_REVERSAL_REQUEST_FAILURE =
  'expired-claim-reversal-outcome-failure';

export const CREATE_COUNTRY_REQUEST = 'create-country-request';
export const CREATE_COUNTRY_SUCCESS = 'create-country-success';
export const CREATE_COUNTRY_FAILED = 'create-country-failed';

export const GET_COUNTRIES_REQUEST = 'get-countries-request';
export const GET_COUNTRIES_SUCCESS = 'get-countries-success';
export const GET_COUNTRIES_FAILED = 'get-countries-failed';

export const UPDATE_COUNTRY_REQUEST = 'update-country-request';
export const UPDATE_COUNTRY_SUCCESS = 'update-country-success';
export const UPDATE_COUNTRY_FAILED = 'update-country-failed';

export const DELETE_COUNTRY_REQUEST = 'delete-country-request';
export const DELETE_COUNTRY_SUCCESS = 'delete-country-success';
export const DELETE_COUNTRY_FAILED = 'delete-country-failed';

export const GET_LANGUAGES_REQUEST = 'get-languages-request';
export const GET_LANGUAGES_SUCCESS = 'get-languages-success';
export const GET_LANGUAGES_FAILED = 'get-languages-failed';

export const VIEW_ALL_PARTNERS_REQUEST = 'view-all-partners-request';
export const VIEW_ALL_PARTNERS_FAILURE = 'view-all-partners-failure';
export const VIEW_ALL_PARTNERS_SUCCESS = 'view-all-partners-success';

export const CREATE_PARTNER_REQUEST = 'create-partner-request';
export const CREATE_PARTNER_FAILURE = 'create-partner-failure';
export const CREATE_PARTNER_SUCCESS = 'create-partner-success';

export const VIEW_PARTNER_REQUEST = 'view-partner-request';
export const VIEW_PARTNER_FAILURE = 'view-partner-failure';
export const VIEW_PARTNER_SUCCESS = 'view-partner-success';

export const VIEW_PRODUCT_REQUEST = 'view-product-request';
export const VIEW_PRODUCT_FAILURE = 'view-product-failure';
export const VIEW_PRODUCT_SUCCESS = 'view-product-success';

export const VIEW_ALL_PRODUCTS_REQUEST = 'view-all-products-request';
export const VIEW_ALL_PRODUCTS_FAILURE = 'view-all-products-failure';
export const VIEW_ALL_PRODUCTS_SUCCESS = 'view-all-products-success';

export const CREATE_PRODUCT_REQUEST = 'create-product-request';
export const CREATE_PRODUCT_FAILURE = 'create-product-failure';
export const CREATE_PRODUCT_SUCCESS = 'create-product-success';

export const PRODUCT_ENUMS_REQUEST = 'product-enums-request';
export const PRODUCT_ENUMS_FAILURE = 'product-enums-failure';
export const PRODUCT_ENUMS_SUCCESS = 'product-enums-success';

export const CREATE_PRODUCT_PREMIUM_REQUEST = 'create-product-premium-request';
export const CREATE_PRODUCT_PREMIUM_FAILURE = 'create-product-premium-failure';
export const CREATE_PRODUCT_PREMIUM_SUCCESS = 'create-product-premium-success';

export const PRODUCT_PREMIUM_ENUMS_REQUEST = 'product-premium-enums-request';
export const PRODUCT_PREMIUM_ENUMS_FAILURE = 'product-premium-enums-failure';
export const PRODUCT_PREMIUM_ENUMS_SUCCESS = 'product-premium-enums-success';

export const VIEW_ALL_PRODUCT_PREMIUMS_REQUEST =
  'view-all-product-premiums-request';
export const VIEW_ALL_PRODUCT_PREMIUMS_FAILURE =
  'view-all-product-premiums-failure';
export const VIEW_ALL_PRODUCT_PREMIUMS_SUCCESS =
  'view-all-product-premiums-success';

export const GET_SMS_TEMPLATES_REQUEST = 'get-sms-templates-request';
export const GET_SMS_TEMPLATES_FAIL = 'get-sms-templates-failure';
export const GET_SMS_TEMPLATES_SUCCESS = 'get-sms-templates-success';

export const CREATE_SMS_TEMPLATES_REQUEST = 'create-sms-templates-request';
export const CREATE_SMS_TEMPLATES_FAIL = 'create-sms-templates-failure';
export const CREATE_SMS_TEMPLATES_SUCCESS = 'create-sms-templates-success';

export const DELETE_SMS_TEMPLATES_REQUEST = 'delete-sms-templates-request';
export const DELETE_SMS_TEMPLATES_FAIL = 'delete-sms-templates-failure';
export const DELETE_SMS_TEMPLATES_SUCCESS = 'delete-sms-templates-success';

export const UPDATE_SMS_TEMPLATES_REQUEST = 'update-sms-templates-request';
export const UPDATE_SMS_TEMPLATES_FAIL = 'update-sms-templates-failure';
export const UPDATE_SMS_TEMPLATES_SUCCESS = 'update-sms-templates-success';

export const GET_SMS_TEMPLATES_RESET = 'get-sms-templates-reset';
export const CREATE_SMS_TEMPLATES_RESET = 'create-sms-templates-reset';
export const UPDATE_SMS_TEMPLATES_RESET = 'update-sms-templates-reset';
export const DELETE_SMS_TEMPLATES_RESET = 'delete-sms-templates-reset';

export const GET_SUPPORTED_PARAMETERS_REQUEST = 'get-supported-parameters-request';
export const GET_SUPPORTED_PARAMETERS_FAIL = 'get-supported-parameters-failure';
export const GET_SUPPORTED_PARAMETERS_SUCCESS = 'get-supported-parameters-success';

export const STOP_BLAST_REQUEST = 'stop-blast-request';
export const STOP_BLAST_SUCCESS = 'stop-blast-success';
export const STOP_BLAST_FAILED = 'stop-blast-failed';
export const STOP_BLAST_RESET = 'stop-blast-reset';

export const GET_BATCH_PROGRESS_REQUEST = 'get-batch-progress-request';
export const GET_BATCH_PROGRESS_SUCCESS = 'get-batch-progress-success';
export const GET_BATCH_PROGRESS_FAILED = 'get-batch-progress-failed';

export const SEND_RECURRING_PAYMENT_RECOMMENDATION_SMS_REQUEST = 'send-recurring-recommedation-sms-request';
export const SEND_RECURRING_PAYMENT_RECOMMENDATION_SMS_SUCCESS = 'send-recurring-recommedation-sms-success';
export const SEND_RECURRING_PAYMENT_RECOMMENDATION_SMS_FAILED = 'send-recurring-recommedation-sms-failed';
export const SEND_RECURRING_PAYMENT_RECOMMENDATION_SMS_RESET = 'send-recurring-recommedation-sms-reset';

export const GET_GROUPS_REQUEST = 'get-groups-request';
export const GET_GROUPS_SUCCESS = 'get-groups-success';
export const GET_GROUPS_FAILURE = 'get-groups-failure';

export const GET_CURRENT_GROUP_MEMBERS_REQUEST = 'get-members-request';
export const GET_CURRENT_GROUP_MEMBERS_SUCCESS = 'get-members-success';
export const GET_CURRENT_GROUP_MEMBERS_FAILURE = 'get-members-failure';

export const GET_CURRENT_GROUP_MEMBERS_FOR_ADMINS_REQUEST = 'get-members-for-admins-request';
export const GET_CURRENT_GROUP_MEMBERS_FOR_ADMINS_SUCCESS = 'get-members-for-admins-success';
export const GET_CURRENT_GROUP_MEMBERS_FOR_ADMINS_FAILURE = 'get-members-for-admins-failure';
export const RESET_GET_CURRENT_GROUP_MEMBERS_FOR_ADMINS = 'reset-get-members-for-admins';

export const GET_CURRENT_GROUP_MEMBERS_FOR_CSV_REQUEST = 'get-members-for-csv-request';
export const GET_CURRENT_GROUP_MEMBERS_FOR_CSV_SUCCESS = 'get-members-for-csv-success';
export const GET_CURRENT_GROUP_MEMBERS_FOR_CSV_FAILURE = 'get-members-for-csv-failure';
export const RESET_GET_CURRENT_GROUP_MEMBERS_FOR_CSV = 'reset-get-members-for-csv';

export const GET_CURRENT_GROUP_POLICIES_REQUEST = 'get-current-group-policies-request';
export const GET_CURRENT_GROUP_POLICIES_SUCCESS = 'get-current-group-policies-success';
export const GET_CURRENT_GROUP_POLICIES_FAILURE = 'get-current-group-policies-failure';

export const GET_CURRENT_GROUP_PAYMENTS_REQUEST = 'get-current-group-payments-request';
export const GET_CURRENT_GROUP_PAYMENTS_SUCCESS = 'get-current-group-payments-success';
export const GET_CURRENT_GROUP_PAYMENTS_FAILURE = 'get-current-group-payments-failure';

export const GET_CURRENT_GROUP_PREMIUMS_REQUEST = 'get-current-group-premiums-request';
export const GET_CURRENT_GROUP_PREMIUMS_SUCCESS = 'get-current-group-premiums-success';
export const GET_CURRENT_GROUP_PREMIUMS_FAILURE = 'get-current-group-premiums-failure';

export const GET_CURRENT_GROUP_CLAIMS_REQUEST = 'get-current-group-claims-request';
export const GET_CURRENT_GROUP_CLAIMS_SUCCESS = 'get-current-group-claims-success';
export const GET_CURRENT_GROUP_CLAIMS_FAILURE = 'get-current-group-claims-failure';

export const GET_CURRENT_GROUP_CLAIM_CALLBACKS_REQUEST = 'get-current-group-claim-callbacks-request';
export const GET_CURRENT_GROUP_CLAIM_CALLBACKS_SUCCESS = 'get-current-group-claim-callbacks-success';
export const GET_CURRENT_GROUP_CLAIM_CALLBACKS_FAILURE = 'get-current-group-claim-callbacks-failure';

export const CREATE_GROUP_CLAIM_CALLBACK_REQUEST = 'create-group-claim-callback-request';
export const CREATE_GROUP_CLAIM_CALLBACK_SUCCESS = 'create-group-claim-callback-success';
export const CREATE_GROUP_CLAIM_CALLBACK_FAILURE = 'create-group-claim-callback-failure';
export const RESET_CREATE_GROUP_CLAIM_CALLBACK = 'reset-create-group-claim-callback';

export const REGISTER_GROUP_REQUEST = 'register-group-request';
export const REGISTER_GROUP_SUCCESS = 'register-group-success';
export const REGISTER_GROUP_FAILURE = 'register-group-failure';
export const RESET_GROUP_REGISTRAION = 'reset-group-registration';

export const GROUP_CERTIFICATE_UPLOAD_CALLBACK = 'group-certificate-upload-callback';
export const GROUP_EXCEL_UPLOAD_CALLBACK = 'group-excel-upload-callback';

export const GET_GROUP_PRODUCTS_REQUEST = 'get-group-products-request';
export const GET_GROUP_PRODUCTS_SUCCESS = 'get-group-products-success';
export const GET_GROUP_PRODUCTS_FAILURE = 'get-group-products-failure';

export const GET_ACTUAL_GROUP_QUOTE_REQUEST = 'get-actual-group-quote-request';
export const GET_ACTUAL_GROUP_QUOTE_SUCCESS = 'get-actual-group-quote-success';
export const GET_ACTUAL_GROUP_QUOTE_FAILURE = 'get-actual-group-quote-failure';

export const RESET_ACTUAL_QUOTE = 'reset-actual-group-quote';

export const GET_ALL_GROUPS_REQUEST = 'get-all-groups-request';
export const GET_ALL_GROUPS_SUCCESS = 'get-all-groups-success';
export const GET_ALL_GROUPS_FAILURE = 'get-all-groups-failure';

export const ADD_GROUP_PAYMENT_REQUEST = 'add-group-payment-request';
export const ADD_GROUP_PAYMENT_SUCCESS = 'add-group-payment-success';
export const ADD_GROUP_PAYMENT_FAILURE = 'add-group-payment-failure';
export const RESET_ADD_GROUP_PAYMENT = 'reset-group-payment';

export const ADD_REMITTANCES_REQUEST = 'add-remittances-request';
export const ADD_REMITTANCES_SUCCESS = 'add-remittances-success';
export const ADD_REMITTANCES_FAIL = 'add-remittances-fail';
export const ADD_REMITTANCES_RESET = 'add-remittances-reset';

export const GET_ALL_CASHBACKS_REQUEST = 'get-all-cashbacks-request';
export const GET_ALL_CASHBACKS_SUCCESS = 'get-all-cashback-success';
export const GET_ALL_CASHBACKS_FAILURE = 'get-all-cashback-failure';

export const MARK_CASHBACK_AS_PAID_REQUEST = 'mark-cashback-as-paid-request';
export const MARK_CASHBACK_AS_PAID_SUCCESS = 'mark-cashback-as-paid-success';
export const MARK_CASHBACK_AS_PAID_FAILURE = 'mark-cashback-as-paid-failure';

export const MARK_CASHBACK_AS_UNPAID_REQUEST = 'mark-cashback-as-unpaid-request';
export const MARK_CASHBACK_AS_UNPAID_SUCCESS = 'mark-cashback-as-unpaid-success';
export const MARK_CASHBACK_AS_UNPAID_FAILURE = 'mark-cashback-as-unpaid-failure';

export const UPLOAD_LOYALTY_DATA_REQUEST = 'upload-loyalty-data-request';
export const UPLOAD_LOYALTY_DATA_SUCCESS = 'upload-loyalty-data-success';
export const UPLOAD_LOYALTY_DATA_FAIL = 'upload-loyalty-data-fail';
export const UPLOAD_LOYALTY_DATA_RESET = 'upload-loyalty-data-reset';

export const SET_LOYALTIES_START_DATE_REQUEST = 'set-loyalties-start-date-request';
export const SET_LOYALTIES_END_DATE_REQUEST = 'set-loyalties-end-date-request';

export const MAP_COLUMN_NUMBER_TO_FIELDS_REQUEST = 'map-column-number-to-fields-request';
export const MAP_COLUMN_NUMBER_TO_FIELDS_SUCCESS = 'map-column-number-to-fields-success';
export const MAP_COLUMN_NUMBER_TO_FIELDS_FAIL = 'map-column-number-to-fields-fail';

export const GET_PREVIOUS_LOYALTY_STATUS_REQUEST = 'get-previous-loyalty-status-request';
export const GET_PREVIOUS_LOYALTY_STATUS_SUCCESS = 'get-previous-loyalty-status-success';
export const GET_PREVIOUS_LOYALTY_STATUS_FAIL = 'get-previous-loyalty-status-fail';

export const GET_PREVIOUS_LOYALTIES_STATUS_REQUEST = 'get-previous-loyalties-status-request';
export const GET_PREVIOUS_LOYALTIES_STATUS_SUCCESS = 'get-previous-loyalties-status-success';
export const GET_PREVIOUS_LOYALTIES_STATUS_FAIL = 'get-previous-loyalties-status-fail';
