import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // 引入element语言包

const cn = {
  m: {
    login: '登 录',
    logout: '注销',
    cancel: '取消',
    ok: '确定',
    export: '导出',
    datasource: '数据源',
    client: '客户端',
    access: '访问权限',
    security: '安全管理',
    createDS: '创建数据源',
    exportDS: '导出数据源',
    importDS: '导入数据源',
    database: '数据库',
    name: '名称',
    note: '描述',
    jdbc_driver_class: 'JDBC驱动Class',
    username: '用户名',
    password: '密码',
    change_password :'修改密码',
    edit_password: '修改',
    sql_query_all_table_name: '查询所有表名称的SQL',
    test_connection: '连接测试',
    save: '保存',
    create_ds: '创建数据源',
    update_ds: '修改数据源',
    export_ds: '导出数据源',
    import_ds: '导入数据源',
    ds_detail: '数据源详情',
    update_time: '修改时间',
    operation: '操作',
    back: '返回',
    ds_sql_tip: '创建或编辑API的时候，选择数据源，会执行此sql来获取该数据源下的所有表名称',
    ds_driver_tip: '如果是其他类型数据库，DBAPI中可能缺少相应的JDBC驱动jar包，请手动将驱动包放入lib目录下',

    basic: '基本信息',
    executor: '执行器',
    global_plugin: '全局插件',
    executor_type: '执行器类型',
    executor_sql: 'SQL执行器',
    executor_es: 'Elasticsearch DSL执行器',
    executor_http: 'HTTP接口代理执行器',
    create_api: '创建API',
    update_api: '修改API',
    edit: '编辑',
    online: '上线',
    offline: '下线',
    delete: '删除',

    tool: '工具',
    api_detail: 'API详情',
    create_group: '创建API分组',
    edit_group: '修改API分组',
    api_group_manage: 'API分组管理',
    export_api_doc: '导出API文档',
    export_api: '导出API',
    import_api: '导入API',
    export_api_groups: '导出API分组',
    import_api_groups: '导入API分组',
    api_group: 'API分组',
    search: '搜索',
    input_keyword: '请输入关键字',
    path: '路径',
    parameters: '参数',
    private: '私有API',
    public: '开放API',
    transform: '数据转换',
    global_transform: '全局数据转换',
    cache: '缓存',
    alarm: '告警',
    basic_info: '基本信息',
    access_tip: '开放接口可以直接访问。私有接口在访问时必须在请求头中携带token，且该token值对应的客户端ID必须对此接口有访问权限',
    plugin_class: '插件类名',
    plugin_parameter: '插件参数',
    what_is_plugin: '什么是插件',
    what_is_plugin_param: '什么是插件参数',
    request_test: '接口请求测试',
    url: 'URL',
    header: '请求Header',
    result: '返回结果',
    send: '发送请求',
    json_format: 'JSON格式化',
    view_in_table: '表格展示',
    raw_data: '原始数据',
    transaction: '事务',
    on: '开启',
    off: '关闭',
    transaction_tip: '开启事务后，如果有多条SQL，多条SQL将在同一个事务内执行。\n注意如果是hive等不支持事务的数据库，不要开启事务！',
    transaction_warning: '注意如果是hive等不支持事务的数据库，不要开启事务',
    no_plugin: '暂无插件',
    request_params: '请求参数',
    request_param_demo: '请求参数示例',
    type: '类型',
    description: '说明',
    no_param: '暂无参数',
    content_type_info: '对于application/x-www-form-urlencoded类型的API，用户在请求该API的时候既可以使用application/x-www-form-urlencoded，也可以使用application/json。\n对于application/json类型的API，用户在请求该API的时候只能使用application/json',
    param_demo_placeholder: '填写json参数示例，用于生成接口文档',
    app_json_tip: '对于application/json类型的API，这个参数示例仅用来生成接口文档，方便调用API的用户查看接口的json参数格式',
    plugin_desc: '插件描述',
    plugin_param_desc: '插件参数描述',
    plugin_param: '插件参数',
    plugin_name: '插件名称',
    alarm_plugin_warning: '选择插件表示对API失败告警，不选择表示失败不告警。\n一个API可配置多个告警插件！',
    transform_plugin_warning: '选择插件表示对sql执行结果开启数据转换功能，不选择表示不转换。如果有多条sql，每个sql对应一个数据转换插件',
    cache_plugin_warning: '选择插件表示对结果数据开启缓存，不选择表示不开启缓存',
    global_transform_plugin_warning: '选择插件表示对API返回结果数据开启数据格式转换，不选择表示不转换',

    sql_warning: '可以编写多条sql，一个代码编辑框内只能写一条sql',
    run_sql: '运行SQL',
    run_selected_sql: '运行选中SQL',
    parse_sql: '解析SQL',
    format: '格式化',
    sql_param: 'SQL参数设置',
    sql_param_tip: '填写sql运行需要的参数值，拼接成json格式',

    create_client: '创建客户端',
    create_time: '创建时间',
    forever: '永久',
    once: '单次有效',
    token_expire_time: 'Token过期时间',
    expired: '已过期',
    generate: '自动生成',
    expire_tip: '不设置表示永久有效',
    grant: '授权该客户端可以访问以下分组的API',
    token_tip: '请求私有接口时，需要把token值放入header的Authorization字段中携带，才可以访问成功。（如果是开放接口，不需要设置header）\n以python为例，访问api的代码示例如下：\n\n',
    token_tip2: 'token如何获取？\n使用clientId和secret访问以下接口来获取token\n\n',
    firewall: '防火墙',

    request_tip: '请使用您的客户端id（clientId）和密钥（secret）来申请token，访问私有接口需要使用token',
    ip_tip: '如果是外网访问请将网关地址设置为外网IP端口',
    get_token: '申请Token',
    input_token: '请填入token',
    request: '访问接口',
    request_demo: '调用示例',
    input_json_param: '输入json参数',

    no_data: '暂无数据',



    mode: '模式',
    black_list: '黑名单',
    white_list: '白名单',
    ip_list: 'IP名单',
    status: 'IP防火墙状态',
    firewall_settings: 'IP防火墙设置',

    black_tip: '除了黑名单列表中的IP禁止访问API，其他IP一律允许访问',
    white_tip: '只有白名单列表中的IP才允许访问API，其他IP一律禁止访问',
    ip_list_tip: '每行填写一个ip，多个ip用换行符隔开',

    old_pwd: '请输入旧密码',
    input_pwd: '请输入新密码',
    input_pwd_again: '请再次输入新密码',

    monitor: '监控',
    summary: '汇总',
    detail: '详情',
    query: '查询',
    startDate: '开始日期',
    endDate: '结束日期',
    to: '至',
    apiNum: 'API访问总量',
    trend: 'API访问走势',
    topNApi: 'Top 10 API',
    topNApp: 'Top 10 APP',
    topNDuration: 'Top 10 API ',
    lastWeek: '最近一周',
    lastMonth: '最近一个月',
    last3Month: '最近三个月',

    api_access_quantity: 'API访问量',
    api_access_trend: 'API访问量走势',
    top_n_app: '访问API次数最多的客户端',
    top_n_api: '访问次数最多的API',
    top_n_ip: '访问次数最多的客户端IP',
    top_n_duration: '平均访问时长最大的API',
    settings: '系统设置'
  },
  ...zhLocale
}

export default cn
