declare interface Role {
  /**
   * 玩家获取玩家ID
   * @returns RoleID
   */
  api_get_role_id: () => RoleID;

  /**
   * 获取玩家所属阵营ID
   * @returns Int64
   */
  api_get_camp_id: () => Int64;

  /**
   * 获取玩家ID数值
   * @returns UInt32
   */
  get_role_id_num: () => UInt32;

  /**
   * 获取玩家所属阵营ID数值
   * @returns UInt32
   */
  get_camp_id_num: () => UInt32;

  /**
   * 获取玩家名字
   * @returns string
   */
  get_role_name: () => string;

  /**
   * 获取玩家控制者类型
   * @returns RoleType
   */
  get_role_type: () => RoleType;

  /**
   * 获取玩家所属阵营对象
   * @returns Camp
   */
  api_get_camp: () => Camp;

  /**
   * 玩家设置属性
   * @param k 属性名
   * @param value 属性值
   */
  set_attr_val: (
    /** 属性名 */
    k: string,
    /** 属性值 */
    value: Int32,
  ) => void;

  /**
   * 获取玩家所有单位对象
   * @returns UnitGroup
   */
  get_all_unit_id: () => UnitGroup;

  /**
   * 设置玩家经验获得率
   * @param rate 倍率
   */
  set_role_exp_rate: (
    /** 倍率 */
    rate: Float,
  ) => void;

  /**
   * 获得玩家经验倍率
   * @returns Fixed
   */
  get_role_exp_rate: () => Fixed;

  /**
   * 设置玩家出生点
   * @param point 点
   */
  set_role_spawn_point: (
    /** 点 */
    point: Point,
  ) => void;

  /**
   * 获取玩家出生点
   * @returns FVector3
   */
  get_role_spawn_point: () => FVector3;

  /**
   * 设置玩家队伍ID
   * @param new_camp 队伍ID
   */
  api_set_camp: (
    /** 队伍ID */
    new_camp: Camp,
  ) => void;

  /**
   * 设置玩家名字
   * @param name 名字
   */
  set_role_name: (
    /** 名字 */
    name: string,
  ) => void;

  /**
   * 修改玩家资源
   * @param res_key 资源名
   * @param res_cnt 资源值
   */
  change_role_res: (
    /** 资源名 */
    res_key: RoleResKey,
    /** 资源值 */
    res_cnt: Fixed,
  ) => void;

  /**
   * 设置玩家资源
   * @param res_key 资源名
   * @param res_cnt 资源值
   */
  set_role_res: (
    /** 资源名 */
    res_key: RoleResKey,
    /** 资源值 */
    res_cnt: Fixed,
  ) => void;

  /**
   * 获得玩家资源
   * @param res_key 资源名
   * @returns Fixed
   */
  get_role_res: (
    /** 资源名 */
    res_key: RoleResKey,
  ) => Fixed;

  /**
   * 设置玩家群体寻路严格模式
   * @param group_navigate_mode 开启群体寻路严格模式
   */
  set_group_navigate_mode: (
    /** 开启群体寻路严格模式 */
    group_navigate_mode: boolean,
  ) => void;

  /**
   * 设置整数型参数到玩家存档栏位
   * @param index 玩家存档栏位
   * @param value 整型参数
   */
  set_save_data_int_value: (
    /** 玩家存档栏位 */
    index: Int32,
    /** 整型参数 */
    value: Int32,
  ) => void;

  /**
   * 设置实数型参数到玩家存档栏位
   * @param index 玩家存档栏位
   * @param value 实数型参数
   */
  set_save_data_fixed_value: (
    /** 玩家存档栏位 */
    index: Int32,
    /** 实数型参数 */
    value: Fixed,
  ) => void;

  /**
   * 设置布尔型参数到玩家存档栏位
   * @param index 玩家存档栏位
   * @param value 布尔型参数
   */
  set_save_data_bool_value: (
    /** 玩家存档栏位 */
    index: Int32,
    /** 布尔型参数 */
    value: boolean,
  ) => void;

  /**
   * 设置字符串型参数到玩家存档栏位
   * @param index 玩家存档栏位
   * @param value 字符串型参数
   */
  set_save_data_str_value: (
    /** 玩家存档栏位 */
    index: Int32,
    /** 字符串型参数 */
    value: string,
  ) => void;

  /**
   * 上传玩家存档数据
   */
  upload_save_data: () => void;

  /**
   * 下载玩家存档数据
   */
  download_save_data: () => void;

  /**
   * 重置下载档案数据回调
   */
  reset_download_save_data_callback: () => void;

  /**
   * 读取整数型玩家存档数据
   * @param index 玩家存档栏位
   * @returns Int32
   */
  get_save_data_int_value: (
    /** 玩家存档栏位 */
    index: Int32,
  ) => Int32;

  /**
   * 读取实数型玩家存档数据
   * @param index 玩家存档栏位
   * @returns Fixed
   */
  get_save_data_fixed_value: (
    /** 玩家存档栏位 */
    index: Int32,
  ) => Fixed;

  /**
   * 读取布尔型玩家存档数据
   * @param index 玩家存档栏位
   * @returns boolean
   */
  get_save_data_bool_value: (
    /** 玩家存档栏位 */
    index: Int32,
  ) => boolean;

  /**
   * 读取字符串型玩家存档数据
   * @param index 玩家存档栏位
   * @returns string
   */
  get_save_data_str_value: (
    /** 玩家存档栏位 */
    index: Int32,
  ) => string;

  /**
   * 玩家使用收费道具
   * @param cnt 数量
   * @param no 收费道具KEY
   */
  api_use_store_item: (
    /** 数量 */
    cnt: UInt32,
    /** 收费道具KEY */
    no: StoreKey,
  ) => void;

  /**
   * 获取玩家收费道具数量
   * @param no 收费道具key
   * @returns UInt32
   */
  get_store_item_cnt: (
    /** 收费道具key */
    no: StoreKey,
  ) => UInt32;

  /**
   * 玩家是否拥有单位的可见性
   * @param unit 单位
   * @returns boolean
   */
  get_visibility_of_unit: (
    /** 单位 */
    unit: Unit,
  ) => boolean;

  /**
   * 修改玩家科技等级
   * @param tech_no 科技编号
   * @param delta_lv 变化等级
   */
  api_change_tech_level: (
    /** 科技编号 */
    tech_no: TechKey,
    /** 变化等级 */
    delta_lv: Int32,
  ) => void;

  /**
   * 修改玩家科技等级
   * @param tech_no 科技编号
   * @param lv 等级
   */
  api_set_tech_level: (
    /** 科技编号 */
    tech_no: TechKey,
    /** 等级 */
    lv: Int32,
  ) => void;

  /**
   * 获取玩家科技等级
   * @param tech_no 科技编号
   * @returns UInt32
   */
  api_get_tech_level: (
    /** 科技编号 */
    tech_no: TechKey,
  ) => UInt32;

  /**
   * 点对于玩家是否可见
   * @param point 点
   * @returns boolean
   */
  is_point_visible_to_player: (
    /** 点 */
    point: FPoint,
  ) => boolean;

  /**
   * 点是否在迷雾中
   * @param point 点
   * @returns boolean
   */
  is_point_in_fog: (
    /** 点 */
    point: FPoint,
  ) => boolean;

  /**
   * 点是否在黑色阴影中
   * @param point 点
   * @returns boolean
   */
  is_point_in_shadow: (
    /** 点 */
    point: FPoint,
  ) => boolean;

  /**
   * 获取玩家状态
   * @returns RoleStatus
   */
  get_role_status: () => RoleStatus;

  /**
   * 设置玩家是否是敌对关系
   * @param role 玩家
   * @param is_enemy 玩家
   */
  set_role_hostility: (
    /** 玩家 */
    role: Role,
    /** 玩家 */
    is_enemy: Role,
  ) => void;

  /**
   * 玩家是否是同盟关系
   * @param role 玩家
   * @returns boolean
   */
  players_is_alliance: (
    /** 玩家 */
    role: Role,
  ) => boolean;

  /**
   * 玩家是否是敌对关系
   * @param role 玩家
   * @returns boolean
   */
  players_is_enemy: (
    /** 玩家 */
    role: Role,
  ) => boolean;

  /**
   * 原始玩家对目标玩家开放视野
   * @param role_2 玩家
   * @returns boolean
   */
  share_source_player_vision_to_target: (
    /** 玩家 */
    role_2: Role,
  ) => boolean;

  /**
   * 原始玩家对目标玩家关闭视野
   * @param role_2 玩家
   * @returns boolean
   */
  close_source_player_vision_to_target: (
    /** 玩家 */
    role_2: Role,
  ) => boolean;

  /**
   * 原始单位对目标玩家开放视野
   * @param unit 单位
   * @returns boolean
   */
  share_source_unit_vision_to_target: (
    /** 单位 */
    unit: Unit,
  ) => boolean;

  /**
   * 原始单位对目标玩家关闭视野
   * @param unit 单位
   * @returns boolean
   */
  close_source_unit_vision_to_target: (
    /** 单位 */
    unit: Unit,
  ) => boolean;

  /**
   * 选中单位或单位组
   * @param unit_or_unit_groupd 单位或单位组
   */
  role_select_unit: (
    /** 单位或单位组 */
    unit_or_unit_groupd: DynamicTypeMeta,
  ) => void;

  /**
   * 开/关玩家鼠标的点选
   * @param value 开/关
   */
  set_role_mouse_left_click: (
    /** 开/关 */
    value: boolean,
  ) => void;

  /**
   * 开/关玩家的鼠标的框选
   * @param value 开/关
   */
  set_role_mouse_move_select: (
    /** 开/关 */
    value: boolean,
  ) => void;

  /**
   * 开/关玩家的鼠标滚轮
   * @param value 开/关
   */
  set_role_mouse_wheel: (
    /** 开/关 */
    value: boolean,
  ) => void;
}
