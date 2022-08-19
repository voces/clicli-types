declare interface Modifier {
  /**
   * 增加buff最大层数
   * @param attr_num 整数属性值
   */
  api_add_buff_max_layer: (
    /** 整数属性值 */
    attr_num: UInt32,
  ) => void;

  /**
   * 增加buff实例层数
   * @param plus_layer 整数属性值
   */
  api_add_buff_layer: (
    /** 整数属性值 */
    plus_layer: Int64,
  ) => void;

  /**
   * 增加buff的剩余持续时间
   * @param residue_time 浮点数剩余时间
   */
  api_add_buff_residue_time: (
    /** 浮点数剩余时间 */
    residue_time: Fixed,
  ) => void;

  /**
   * 增加buff浮点属性效果
   * @param attr_name 属性名称
   * @param attr_num 浮点数属性值
   */
  api_add_float_shield: (
    /** 属性名称 */
    attr_name: string,
    /** 浮点数属性值 */
    attr_num: Fixed,
  ) => void;

  /**
   * 增加循环周期事件的循环时间
   * @param new_cycle_time 浮点数属性值
   */
  api_add_cycle_time: (
    /** 浮点数属性值 */
    new_cycle_time: Fixed,
  ) => void;

  /**
   * 阻止即将获得的魔法效果
   * @returns boolean
   */
  api_prevent_will_modifier: () => boolean;

  /**
   * 删除魔法效果
   * @returns boolean
   */
  api_remove: () => boolean;

  /**
   * 获取效果携带者
   * @returns Unit
   */
  api_get_owner: () => Unit;

  /**
   * 获取效果释放者
   * @returns Unit
   */
  api_get_releaser: () => Unit;

  /**
   * 获取剩余持续时间
   * @returns Fixed
   */
  api_get_residue_time: () => Fixed;

  /**
   * 获取已经持续时间
   * @returns Fixed
   */
  api_get_passed_time: () => Fixed;

  /**
   * 获取buff整数属性效果
   * @param attr_name 属性名称
   * @returns UInt32
   */
  api_get_int_attr: (
    /** 属性名称 */
    attr_name: string,
  ) => UInt32;

  /**
   * 获取buff类别
   * @param attr_name 属性名称
   * @returns ModifierType
   */
  api_get_modifier_type: (
    /** 属性名称 */
    attr_name: string,
  ) => ModifierType;

  /**
   * 获取buff影响类型
   * @param attr_name 属性名称
   * @returns ModifierEffectType
   */
  api_get_modifier_effect_type: (
    /** 属性名称 */
    attr_name: string,
  ) => ModifierEffectType;

  /**
   * 获取buff浮点属性效果
   * @param attr_name 属性名称
   * @returns Fixed
   */
  api_get_float_attr: (
    /** 属性名称 */
    attr_name: string,
  ) => Fixed;

  /**
   * 获取光环魔法效果的子光环类型
   * @returns ModifierKey
   */
  api_get_sub_halo_modifier_key: () => ModifierKey;

  /**
   * 获取子光环的光环实体
   * @returns Modifier
   */
  api_get_halo_modifier_instance: () => Modifier;

  /**
   * 获取光环的范围
   * @returns Float
   */
  api_get_halo_inf_rng: () => Float;

  /**
   * 获取即将获得魔法效果的单位
   * @returns Unit
   */
  api_get_will_modifier_unit: () => Unit;

  /**
   * 获取即将获得魔法效果类型
   * @returns ModifierKey
   */
  api_get_will_modifier_key: () => ModifierKey;

  /**
   * 获取buff的唯一id
   * @returns UInt32
   */
  api_get_modifier_unique_id: () => UInt32;

  /**
   * 获取buff的类型key
   * @returns ModifierKey
   */
  api_get_modifier_key: () => ModifierKey;

  /**
   * 获取buff字符属性效果
   * @param attr_name 属性名称
   * @returns string
   */
  api_get_str_attr: (
    /** 属性名称 */
    attr_name: string,
  ) => string;

  /**
   * 设置buff整数属性效果
   * @param attr_num 整数属性值
   */
  api_set_buff_max_layer: (
    /** 整数属性值 */
    attr_num: UInt32,
  ) => void;

  /**
   * 设置buff实例层数
   * @param attr_num 整数属性值
   */
  api_set_buff_layer: (
    /** 整数属性值 */
    attr_num: UInt32,
  ) => void;

  /**
   * 设置buff的剩余持续时间
   * @param residue_time 浮点数剩余时间
   */
  api_set_buff_residue_time: (
    /** 浮点数剩余时间 */
    residue_time: Fixed,
  ) => void;

  /**
   * 设置buff浮点属性效果
   * @param attr_name 属性名称
   * @param attr_num 浮点数属性值
   */
  api_set_float_shield: (
    /** 属性名称 */
    attr_name: string,
    /** 浮点数属性值 */
    attr_num: Fixed,
  ) => void;

  /**
   * 设置循环周期事件
   * @param new_cycle_time 浮点数属性值
   */
  api_set_cycle_time: (
    /** 浮点数属性值 */
    new_cycle_time: Fixed,
  ) => void;

  /**
   * 设置魔法效果的持续时间
   * @param residue_time 非负数实数值
   */
  api_set_duration: (
    /** 非负数实数值 */
    residue_time: Fixed,
  ) => void;

  /**
   * 设置buff的字符串属性
   * @param name 属性名称
   * @param value 属性值
   */
  api_set_buff_str_attr: (
    /** 属性名称 */
    name: string,
    /** 属性值 */
    value: string,
  ) => void;
}
