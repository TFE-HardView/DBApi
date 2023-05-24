import enLocale from 'element-ui/lib/locale/lang/en' // 引入element语言包
const en = {
  m: {
    login: 'Login',
    logout: 'Logout',
    cancel: 'Cancel',
    ok: 'OK',
    export: 'Export',
    datasource: 'Datasource',
    client: 'Client',
    access: 'Access',
    security: 'Security',
    createDS: 'New Datasource',
    exportDS: 'Export Datasources',
    importDS: 'Import Datasources',
    database: 'Database',
    name: 'Name',
    note: 'Note',
    jdbc_driver_class: 'JDBC Driver Class',
    username: 'Username',
    password: 'Password',
    change_password: 'Change Password',
    edit_password: 'Edit',
    sql_query_all_table_name: 'SQL that get table names',
    test_connection: 'Test Connection',
    save: 'Save',
    create_ds: 'New Datasource',
    update_ds: 'Modify Datasource',
    export_ds: 'Export Datasource',
    import_ds: 'Import Datasource',
    ds_detail: 'Datasource Detail',
    update_time: 'Update Time',
    operation: 'Operation',
    back: 'Back',
    ds_sql_tip: 'When you create or edit API, you should click to choose datasource, then this sql will be executed to query names of all tables',
    ds_driver_tip: 'If you choose other db,please make sure the corresponding jdbc driver jar exists.If not, you need to copy the jar file to lib/ directory.',

    basic: 'Basic Info',
    executor: 'Executor',
    global_plugin: 'Global Plugin',
    executor_type: 'Executor Type',
    executor_sql: 'SQL Executor',
    executor_es: 'Elasticsearch DSL Executor',
    executor_http: 'HTTP API Executor',
    create_api: 'New API',
    update_api: 'Edit API',
    edit: 'Edit',
    online: 'Online',
    offline: 'Offline',
    delete: 'Delete',

    tool: 'Tool',
    api_detail: 'API Detail',
    create_group: 'New Group',
    edit_group: 'Edit Group',
    api_group_manage: 'API Group Manage',
    export_api_doc: 'Export API Doc',
    export_api: 'Export API',
    import_api: 'Import API',
    export_api_groups: 'Export API Groups',
    import_api_groups: 'Import API Groups',
    api_group: 'API Group',
    search: 'Search',
    input_keyword: 'Please input keyword',
    path: 'Path',
    parameters: 'Parameters',
    private: 'Private',
    public: 'Public',
    transform: 'Transform',
    global_transform: 'Global Transform',
    cache: 'Cache',
    alarm: 'Alarm',
    basic_info: 'Basic Info',
    access_tip: 'Public API can always be accessed directly. Private API can only be accessed with token.',
    plugin_class: 'Plugin Class',
    plugin_parameter: 'Plugin Parameter',
    what_is_plugin: 'What is plugin',
    what_is_plugin_param: 'What is plugin parameter',
    request_test: 'API Request Test',
    url: 'URL',
    header: 'Request Header',
    result: 'Result',
    send: 'Send Request',
    json_format: 'JSON Format',
    view_in_table: 'View In Table',
    raw_data: 'Raw Data',
    transaction: 'Transaction',
    on: 'ON',
    off: 'OFF',
    transaction_tip: 'If trun on, multiple sql will be executed in one transaction.\nIf your datasource do not support transaction (like hive), do not trun on!',
    transaction_warning: 'If your datasource do not support transaction (like hive), do not trun on',
    no_plugin: 'No Plugin',
    request_params: 'Request Params',
    request_param_demo: 'Request Params Demo',
    type: 'Type',
    description: 'Description',
    no_param: 'No Param',
    content_type_info: 'For application/x-www-form-urlencoded API, clients can access api using application/x-www-form-urlencoded or application/json.For application/json API,clients can access api using only application/json',
    param_demo_placeholder: 'Please input json format param demo',
    app_json_tip: 'the demo used to generate API doc',
    plugin_desc: 'Plugin Description',
    plugin_param_desc: 'Plugin Param Description',
    plugin_param: 'Plugin Params',
    plugin_name: 'Plugin Name',
    alarm_plugin_warning: 'If choosed means alram when API failed, else means no alarm.\nAn API can be configured with multiple alarm plugin',
    transform_plugin_warning: 'If choosed means transform data,else means not transform.If there are multiple sql, each sql corresponds to a data transformation plugin',
    cache_plugin_warning: 'If choosed means open cache,else means no cache used',
    global_transform_plugin_warning: 'If choosed means transform global data returned by API, else means not transform',

    sql_warning: 'Multiple sql can be written, and only one sql can be written in a code editing box',
    run_sql: 'Run SQL',
    run_selected_sql: 'Run Selected SQL',
    parse_sql: 'Parse SQL',
    format: 'Format',
    sql_param: 'SQL Params',
    sql_param_tip: 'Please input params with json format',

    create_client: 'New Client',
    create_time: 'Create Time',
    forever: 'Forever',
    once: 'Once',
    token_expire_time: 'Token Expire Time',
    expired: 'Expired',
    generate: 'Generate Automatically',
    expire_tip: 'If set null, means forever',
    grant: 'Grant access rights to APIs of selected groups',
    token_tip: 'When request private API,token needed in http header with Authorization field(If public API,no need).\nFor example, python code:\n\n',
    token_tip2: 'How to get token?\nRequest API as follows with your clientId and secret:\n\n',
    firewall: 'IP Firewall',

    request_tip: 'Please get token with your clientId and secret, private API needs token',
    ip_tip: 'Please update IP to external network IP',
    get_token: 'Get Token',
    input_token: 'Please input token',
    request: 'Request',
    request_demo: 'Code Demo',
    input_json_param: 'Input Json Parameters',

    no_data: 'No Data',


    mode: 'Mode',
    black_list: 'Black List',
    white_list: 'White List',
    ip_list: 'IP List',
    status: 'IP Firewall Status',
    firewall_settings: 'IP Firewall Settings',
    black_tip: 'All IP can access except those in black list',
    white_tip: 'Only IP in white list can access',
    ip_list_tip: 'Input one IP in one line, multi ip must in multi lines',

    old_pwd: 'Please input old password',
    input_pwd: 'Please input new password',
    input_pwd_again: 'Please input new password again',
    monitor: 'Monitor',
    summary: 'Summary',
    detail: 'Detail',
    query: 'Query',
    startDate: 'Start Date',
    endDate: 'End Date',
    to: 'TO',
    apiNum: 'Total quantity of API',
    trend: 'API Access Trend',
    topNApi: 'Top 10 API',
    topNApp: 'Top 10 APP',
    topNDuration: 'Top 10 API ',
    lastWeek: 'Last Week',
    lastMonth: 'Last Month',
    last3Month: 'Last 3 Months',

    api_access_quantity: 'API Access Quantity',
    api_access_trend: 'API Access Trend',
    top_n_app: 'Clients with the most API access',
    top_n_api: 'The most visited API',
    top_n_ip: 'The most visited client IP',
    top_n_duration: 'API with largest average access time',
    settings: 'Settings',

    client_auth_btn_tip: 'Authorize client to access API'

  },
  ...enLocale
}

export default en
