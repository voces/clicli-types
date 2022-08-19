declare interface Destructible {
  /**
   * 移动可破坏物到点
   * @param point 点
   */
  api_transmit: (
    /** 点 */
    point: Point,
  ) => void;

  /**
   * 杀死可破坏物
   * @param unit 凶手单位
   */
  api_kill: (
    /** 凶手单位 */
    unit: Unit,
  ) => void;

  /**
   * 使可破坏物枯竭
   * @param unit 采集单位
   */
  api_set_dest_dry: (
    /** 采集单位 */
    unit: Unit,
  ) => void;

  /**
   * 删除可破坏物
   */
  api_delete: () => void;

  /**
   * 复活可破坏物
   * @param point 复活点
   */
  api_revivie: (
    /** 复活点 */
    point: Point,
  ) => void;

  /**
   * 显示隐藏可破坏物
   * @param is_show 是否显示
   */
  api_show_hide: (
    /** 是否显示 */
    is_show: boolean,
  ) => void;

  /**
   * 设置可破坏物生命值
   * @param hp_value 生命值
   */
  api_set_hp: (
    /** 生命值 */
    hp_value: UInt64,
  ) => void;

  /**
   * 设置可破坏物最大生命值
   * @param hp_value 最大生命值
   */
  api_set_max_hp: (
    /** 最大生命值 */
    hp_value: UInt64,
  ) => void;

  /**
   * 设置可破坏物的名称
   * @param name 名称
   */
  api_set_name: (
    /** 名称 */
    name: string,
  ) => void;

  /**
   * 设置可破坏物的资源数量
   * @param num 资源数量
   */
  api_set_source_num: (
    /** 资源数量 */
    num: UInt64,
  ) => void;

  /**
   * 设置可破坏物的大小
   * @param x x大小
   * @param y y大小
   * @param z z大小
   */
  api_set_scale: (
    /** x大小 */
    x: UInt64,
    /** y大小 */
    y: UInt64,
    /** z大小 */
    z: UInt64,
  ) => void;

  /**
   * 设置可破坏物的角度
   * @param angle 角度
   */
  api_set_face_angle: (
    /** 角度 */
    angle: UInt64,
  ) => void;

  /**
   * 获取可破坏物的整型属性
   * @param attr_name 属性名称
   * @returns UInt32
   */
  api_get_int_attr: (
    /** 属性名称 */
    attr_name: string,
  ) => UInt32;

  /**
   * 获取可破坏物的编号
   * @returns DestructibleKey
   */
  api_get_key: () => DestructibleKey;

  /**
   * 获取可破坏物的字符串属性
   * @param attr_name 属性名称
   * @returns string
   */
  api_get_str_attr: (
    /** 属性名称 */
    attr_name: string,
  ) => string;

  /**
   * 设置可破坏物的字符串属性
   * @param attr_name 属性名称
   * @param value 属性取值
   */
  api_set_str_attr: (
    /** 属性名称 */
    attr_name: string,
    /** 属性取值 */
    value: string,
  ) => void;

  /**
   * 获取可破坏物的布尔值属性
   * @param attr_name 属性名称
   * @returns boolean
   */
  api_get_bool_attr: (
    /** 属性名称 */
    attr_name: string,
  ) => boolean;

  /**
   * 获取可破坏物的浮点数属性
   * @param attr_name 属性名称
   * @returns Fixed
   */
  api_get_float_attr: (
    /** 属性名称 */
    attr_name: string,
  ) => Fixed;

  /**
   * 获取可破坏物所属阵营id
   * @returns CampID
   */
  api_get_camp_id: () => CampID;

  /**
   * 获取可破坏物位置
   * @returns FVector3
   */
  api_get_position: () => FVector3;

  /**
   * 获取可破坏物的描述
   * @returns string
   */
  api_get_desc: () => string;

  /**
   * 获取可破坏物的id
   */
  api_get_id: () => void;

  /**
   * 获取可破坏物的x轴缩放
   * @returns Float
   */
  api_get_x_scale: () => Float;

  /**
   * 获取可破坏物的y轴缩放
   * @returns Float
   */
  api_get_y_scale: () => Float;

  /**
   * 获取可破坏物的z轴缩放
   * @returns Float
   */
  api_get_z_scale: () => Float;

  /**
   * 获取可破坏物的旋转角度
   * @returns Float
   */
  api_get_angle: () => Float;

  /**
   * 获取可破坏物模型
   * @returns ModelKey
   */
  api_get_dest_model: () => ModelKey;
}
