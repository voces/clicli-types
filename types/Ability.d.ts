declare interface Ability {
  /**
   * 获取技能字符串属性
   * @param attr 标记名
   * @returns string
   */
  api_get_str_attr: (
    /** 标记名 */
    attr: AbilityStrAttr,
  ) => string;

  /**
   * 设置技能字符串属性
   * @param attr 标记名
   * @param value 字符串值
   */
  api_set_str_attr: (
    /** 标记名 */
    attr: AbilityStrAttr,
    /** 字符串值 */
    value: string,
  ) => void;

  /**
   * 设置技能名字
   * @param value 字符串值
   */
  api_set_name: (
    /** 字符串值 */
    value: string,
  ) => void;

  /**
   * 获取技能拥有者
   * @returns Unit
   */
  api_get_owner: () => Unit;

  /**
   * 获取技能类型
   * @returns AbilityType
   */
  api_get_type: () => AbilityType;

  /**
   * 获取技能类型
   * @returns AbilityIndex
   */
  api_get_ability_index: () => AbilityIndex;

  /**
   * 获取技能拥有者
   * @returns AbilitySeq
   */
  api_get_ability_seq: () => AbilitySeq;

  /**
   * 获取技能释放类型
   * @returns AbilityCastType
   */
  api_get_ability_cast_type: () => AbilityCastType;

  /**
   * 移除技能
   */
  api_remove: () => void;

  /**
   * 获取技能的等级
   * @returns Int32
   */
  api_get_level: () => Int32;

  /**
   * 是否拥有标记
   * @param tag 标记名
   * @returns boolean
   */
  has_tag: (
    /** 标记名 */
    tag: string,
  ) => boolean;

  /**
   * 移除键值对
   * @param k 键
   */
  api_remove_kv: (
    /** 键 */
    k: string,
  ) => void;

  /**
   * 计算公式类型KV
   * @param k 键
   * @returns Fixed
   */
  api_calc_ability_formula_kv: (
    /** 键 */
    k: string,
  ) => Fixed;

  /**
   * 添加定时器
   * @param time 定时时长
   * @param callback 超时函数
   */
  add_timer: (
    /** 定时时长 */
    time: Fixed,
    /** 超时函数 */
    callback: () => void,
  ) => void;

  /**
   * 技能对象是否拥有目标
   * @param runtime_id runtime_id
   * @returns boolean
   */
  api_has_target: (
    /** runtime_id */
    runtime_id: Int32,
  ) => boolean;

  /**
   * 获取技能释放的位置
   * @param runtime_id runtime_id
   * @returns FPoint
   */
  api_get_release_position: (
    /** runtime_id */
    runtime_id: Int32,
  ) => FPoint;

  /**
   * 获取技能释放的方向
   * @param runtime_id runtime_id
   * @returns Fixed
   */
  api_get_release_direction: (
    /** runtime_id */
    runtime_id: Int32,
  ) => Fixed;

  /**
   * 获取技能实数属性值
   * @param attr 属性名
   * @returns Fixed
   */
  api_get_float_attr: (
    /** 属性名 */
    attr: string,
  ) => Fixed;

  /**
   * 获取技能整数属性值
   * @param attr 属性名
   * @returns Int32
   */
  api_get_int_attr: (
    /** 属性名 */
    attr: string,
  ) => Int32;

  /**
   * 获取技能布尔属性值
   * @param attr 属性名
   * @returns boolean
   */
  api_get_bool_attr: (
    /** 属性名 */
    attr: string,
  ) => boolean;

  /**
   * 设置技能等级
   * @param level 技能等级
   */
  api_set_level: (
    /** 技能等级 */
    level: Int32,
  ) => void;

  /**
   * 学习技能
   */
  api_learn_ability: () => void;

  /**
   * 增加技能等级
   * @param level 技能等级
   */
  api_add_level: (
    /** 技能等级 */
    level: Int32,
  ) => void;

  /**
   * 增量修改技能实数属性值
   * @param attr 属性名
   * @param value 实数属性值
   */
  api_add_float_attr: (
    /** 属性名 */
    attr: string,
    /** 实数属性值 */
    value: Fixed,
  ) => void;

  /**
   * 设置技能实数属性值
   * @param attr 属性名
   * @param value 实数属性值
   */
  api_set_float_attr: (
    /** 属性名 */
    attr: string,
    /** 实数属性值 */
    value: Fixed,
  ) => void;

  /**
   * 增量修改技能整数属性值
   * @param attr 属性名
   * @param value 整数属性值
   */
  api_add_int_attr: (
    /** 属性名 */
    attr: string,
    /** 整数属性值 */
    value: Int32,
  ) => void;

  /**
   * 设置技能整数属性值
   * @param attr 属性名
   * @param value 整数属性值
   */
  api_set_int_attr: (
    /** 属性名 */
    attr: string,
    /** 整数属性值 */
    value: Int32,
  ) => void;

  /**
   * 设置技能布尔属性值
   * @param attr 属性名
   * @param value 布尔属性值
   */
  api_set_bool_attr: (
    /** 属性名 */
    attr: string,
    /** 布尔属性值 */
    value: boolean,
  ) => void;

  /**
   * 阻止当前技能施法
   */
  api_break_ability_in_cs: () => void;

  /**
   * 获取技能编号
   * @returns AbilityKey
   */
  api_get_ability_id: () => AbilityKey;

  /**
   * 是否是近战技能
   * @returns boolean
   */
  api_is_melee_ability: () => boolean;

  /**
   * 是否是普攻
   * @returns boolean
   */
  api_is_common_atk: () => boolean;

  /**
   * 是否是被动
   * @returns boolean
   */
  is_passive_ability: () => boolean;

  /**
   * 获取技能名称
   * @returns string
   */
  api_get_name: () => string;

  /**
   * 获取技能的充能层数
   * @returns Int32
   */
  api_get_ability_stack: () => Int32;

  /**
   * 增加技能充能层数
   * @param value 充能层数
   */
  api_add_ability_stack_count: (
    /** 充能层数 */
    value: Int32,
  ) => void;

  /**
   * 设置技能充能层数
   * @param value 充能层数
   */
  api_set_ability_stack_count: (
    /** 充能层数 */
    value: Int32,
  ) => void;

  /**
   * 获取当前技能剩余冷却时间
   * @returns Fixed
   */
  api_get_cd_left_time: () => Fixed;

  /**
   * 技能立即冷却
   */
  api_immediately_clear_cd: () => void;

  /**
   * 改变技能冷却时间
   * @param value 冷却时间
   */
  api_change_ability_cd_cold_down: (
    /** 冷却时间 */
    value: Fixed,
  ) => void;

  /**
   * 设置技能冷却时间
   * @param value 冷却时间
   */
  api_set_ability_cd: (
    /** 冷却时间 */
    value: Fixed,
  ) => void;

  /**
   * 增加技能冷却时间
   * @param value 冷却时间
   */
  api_add_ability_cd: (
    /** 冷却时间 */
    value: Fixed,
  ) => void;

  /**
   * 从头开始冷却
   */
  api_restart_cd: () => void;

  /**
   * 改变当次充能时间
   * @param value 冷却时间
   */
  api_set_ability_cur_stack_cd: (
    /** 冷却时间 */
    value: Fixed,
  ) => void;

  /**
   * 获取技能当前剩余充能时间
   * @returns Fixed
   */
  api_get_stack_cd_left_time: () => Fixed;

  /**
   * 启用技能
   */
  api_enable: () => void;

  /**
   * 禁用技能
   */
  api_disable: () => void;
}
