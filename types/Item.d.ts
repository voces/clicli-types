declare interface Item {
  /**
   * 获取物品编号
   * @returns ItemKey
   */
  api_get_key: () => ItemKey;

  /**
   * 设置物品名称
   * @param name 物品名称
   */
  set_name: (
    /** 物品名称 */
    name: string,
  ) => void;

  /**
   * 获取物品名称
   * @returns string
   */
  get_name: () => string;

  /**
   * 获取物品配置名称
   * @returns string
   */
  api_get_conf_name: () => string;

  /**
   * 设置物品描述
   * @param desc 物品描述
   */
  api_set_desc: (
    /** 物品描述 */
    desc: string,
  ) => void;

  /**
   * 获取物品描述
   * @returns string
   */
  api_get_desc: () => string;

  /**
   * 获取物品配置描述
   * @returns string
   */
  api_get_conf_desc: () => string;

  /**
   * 获取物品类型
   * @returns UInt32
   */
  api_get_type: () => UInt32;

  /**
   * 获取物品等级
   * @returns UInt32
   */
  api_get_level: () => UInt32;

  /**
   * 设置物品等级
   * @param level 等级
   */
  api_set_level: (
    /** 等级 */
    level: UInt32,
  ) => void;

  /**
   * 丢弃物品
   * @param pos 点
   * @param stack_cnt 数量
   */
  api_drop_self: (
    /** 点 */
    pos: FPoint,
    /** 数量 */
    stack_cnt: Actor | null,
  ) => void;

  /**
   * 从单位身上移除物品
   */
  api_remove: () => void;

  /**
   * 设置物品出售
   * @param sale_state 可否出售
   */
  api_set_sale_state: (
    /** 可否出售 */
    sale_state: boolean,
  ) => void;

  /**
   * 设置物品堆叠数
   * @param stack_cnt 堆叠数
   */
  api_set_stack_cnt: (
    /** 堆叠数 */
    stack_cnt: Int32,
  ) => void;

  /**
   * 设置物品充能数
   * @param charge_cnt 充能数
   */
  api_set_charge_cnt: (
    /** 充能数 */
    charge_cnt: Int32,
  ) => void;

  /**
   * 设置物品最大充能数
   * @param max_charge 最大充能数
   */
  api_set_max_charge: (
    /** 最大充能数 */
    max_charge: Int32,
  ) => void;

  /**
   * 获取物品位置
   * @returns Point
   */
  api_get_position: () => Point;

  /**
   * 物品是否在场景中
   * @returns boolean
   */
  api_is_in_scene: () => boolean;

  /**
   * 获取物品堆叠数
   * @returns UInt32
   */
  api_get_stack_cnt: () => UInt32;

  /**
   * 获取物品堆叠类型
   * @returns UInt32
   */
  api_get_stack_type: () => UInt32;

  /**
   * 获取物品充能数
   * @returns UInt32
   */
  api_get_charge_cnt: () => UInt32;

  /**
   * 获取物品充能数
   * @returns UInt32
   */
  api_get_max_charge: () => UInt32;

  /**
   * 设置物品丢弃
   * @param can_drop 可否丢弃
   */
  api_set_droppable: (
    /** 可否丢弃 */
    can_drop: boolean,
  ) => void;

  /**
   * 设置物品出售
   * @param can_sell 可否丢弃
   */
  api_set_sellable: (
    /** 可否丢弃 */
    can_sell: boolean,
  ) => void;

  /**
   * 设置物品生命值
   * @param hp 生命值
   */
  api_set_hp: (
    /** 生命值 */
    hp: Float,
  ) => void;

  /**
   * 获取物品丢弃
   * @returns boolean
   */
  api_get_droppable: () => boolean;

  /**
   * 获取物品出售
   * @returns boolean
   */
  api_get_sellable: () => boolean;

  /**
   * 获取物品生命值
   * @returns Fixed
   */
  api_get_hp: () => Fixed;

  /**
   * 设置物品附加属性
   * @param attr_element_field 属性名
   * @param attr_key 属性成分名
   * @param val 属性值
   */
  api_set_attr: (
    /** 属性名 */
    attr_element_field: string,
    /** 属性成分名 */
    attr_key: string,
    /** 属性值 */
    val: Float,
  ) => void;

  /**
   * 增加物品附加属性
   * @param attr_element_field 属性名
   * @param attr_key 属性成分名
   * @param delta 属性值
   */
  api_change_attr: (
    /** 属性名 */
    attr_element_field: string,
    /** 属性成分名 */
    attr_key: string,
    /** 属性值 */
    delta: Float,
  ) => void;

  /**
   * 获取物品附加属性
   * @param attr_element_field 属性成分名
   * @param attr_key 属性名
   * @returns Float
   */
  api_get_attr: (
    /** 属性成分名 */
    attr_element_field: string,
    /** 属性名 */
    attr_key: string,
  ) => Float;

  /**
   * 设置物品所有者
   * @param creator 所有者
   */
  api_set_creator: (
    /** 所有者 */
    creator: Role,
  ) => void;

  /**
   * 获得物品所有者
   * @returns Role
   */
  api_get_creator: () => Role;

  /**
   * 获得物品拥有者
   * @returns Unit
   */
  api_get_owner: () => Unit;

  /**
   * 添加物品堆叠数
   * @param cnt 堆叠数
   */
  api_add_stack: (
    /** 堆叠数 */
    cnt: Int32,
  ) => void;

  /**
   * 添加物品充能数
   * @param cnt 充能数
   */
  api_add_charge: (
    /** 充能数 */
    cnt: Int32,
  ) => void;

  /**
   * 获取物品缩放
   * @returns Fixed
   */
  api_get_scale: () => Fixed;

  /**
   * 获取物品朝向
   * @returns Fixed
   */
  api_get_face_angle: () => Fixed;

  /**
   * 设置物品缩放
   * @param scale 缩放
   */
  api_set_scale: (
    /** 缩放 */
    scale: Float,
  ) => void;

  /**
   * 设置物品位置
   * @param point 物品位置
   */
  api_set_position: (
    /** 物品位置 */
    point: Point,
  ) => void;

  /**
   * 设置物品朝向
   * @param face_angle 物品朝向
   */
  api_set_face_angle: (
    /** 物品朝向 */
    face_angle: Float,
  ) => void;

  /**
   * 是否在区域内
   * @param area 区域
   * @returns boolean
   */
  api_is_in_area: (
    /** 区域 */
    area: Area,
  ) => boolean;

  /**
   * 移动物品到点
   * @param point 点
   */
  api_transmit: (
    /** 点 */
    point: Point,
  ) => void;

  /**
   * 物品添加标签
   * @param tag 标签
   */
  api_add_tag: (
    /** 标签 */
    tag: string,
  ) => void;

  /**
   * 物品删除标签
   * @param tag 标签
   */
  api_remove_tag: (
    /** 标签 */
    tag: string,
  ) => void;

  /**
   * 物品是否拥有标签
   * @param tag 标签
   * @returns boolean
   */
  api_has_tag: (
    /** 标签 */
    tag: string,
  ) => boolean;

  /**
   * 物品移除键值对
   * @param k 要移除的键
   */
  api_remove_kv: (
    /** 要移除的键 */
    k: string,
  ) => void;

  /**
   * 获取物品在场景中的对应实体
   * @returns Unit
   */
  api_get_item_unit: () => Unit;

  /**
   * 获取物品id
   */
  api_get_id: () => void;

  /**
   * 物品是否在物品栏
   * @returns boolean
   */
  api_is_in_bar: () => boolean;

  /**
   * 物品是否在背包栏中
   * @returns boolean
   */
  api_is_in_pkg: () => boolean;
}
