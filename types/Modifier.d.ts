declare interface Modifier {
  /**
   * Increase the maximum number of buff stacks
   * @param attr_num integer attribute value
   */
  api_add_buff_max_layer: (
    /** integer attribute value */
    attr_num: UInt32,
  ) => void;

  /**
   * Increase the number of layers of buff instances
   * @param plus_layer integer attribute value
   */
  api_add_buff_layer: (
    /** integer attribute value */
    plus_layer: Int64,
  ) => void;

  /**
   * Increases the remaining duration of the buff
   * @param residue_time float remaining time
   */
  api_add_buff_residue_time: (
    /** float remaining time */
    residue_time: Fixed,
  ) => void;

  /**
   * Increase the effect of buff floating point attribute
   * @param attr_name attribute name
   * @param attr_num float attribute value
   */
  api_add_float_shield: (
    /** attribute name */
    attr_name: string,
    /** float attribute value */
    attr_num: Fixed,
  ) => void;

  /**
   * Increase the cycle time of recurring periodic events
   * @param new_cycle_time float property value
   */
  api_add_cycle_time: (
    /** float property value */
    new_cycle_time: Fixed,
  ) => void;

  /**
   * Blocks incoming magic effects
   * @returns boolean
   */
  api_prevent_will_modifier: () => boolean;

  /**
   * remove magic effect
   * @returns boolean
   */
  api_remove: () => boolean;

  /**
   * Get the effect carrier
   * @returns Unit
   */
  api_get_owner: () => Unit;

  /**
   * Get the effect releaser
   * @returns Unit
   */
  api_get_releaser: () => Unit;

  /**
   * Get remaining duration
   * @returns Fixed
   */
  api_get_residue_time: () => Fixed;

  /**
   * get elapsed duration
   * @returns Fixed
   */
  api_get_passed_time: () => Fixed;

  /**
   * Get the buff integer attribute effect
   * @param attr_name attribute name
   * @returns UInt32
   */
  api_get_int_attr: (
    /** attribute name */
    attr_name: string,
  ) => UInt32;

  /**
   * Get the buff category
   * @param attr_name attribute name
   * @returns ModifierType
   */
  api_get_modifier_type: (
    /** attribute name */
    attr_name: string,
  ) => ModifierType;

  /**
   * Get the buff effect type
   * @param attr_name attribute name
   * @returns ModifierEffectType
   */
  api_get_modifier_effect_type: (
    /** attribute name */
    attr_name: string,
  ) => ModifierEffectType;

  /**
   * Get the effect of the buff floating point attribute
   * @param attr_name attribute name
   * @returns Fixed
   */
  api_get_float_attr: (
    /** attribute name */
    attr_name: string,
  ) => Fixed;

  /**
   * Get the sub-aura type of the aura magic effect
   * @returns ModifierKey
   */
  api_get_sub_halo_modifier_key: () => ModifierKey;

  /**
   * Get the halo entity of the sub halo
   * @returns Modifier
   */
  api_get_halo_modifier_instance: () => Modifier;

  /**
   * Get the range of the aura
   * @returns Float
   */
  api_get_halo_inf_rng: () => Float;

  /**
   * Get the unit that is about to get the magic effect
   * @returns Unit
   */
  api_get_will_modifier_unit: () => Unit;

  /**
   * Get the type of magic effect that is about to get
   * @returns ModifierKey
   */
  api_get_will_modifier_key: () => ModifierKey;

  /**
   * Get the unique id of the buff
   * @returns UInt32
   */
  api_get_modifier_unique_id: () => UInt32;

  /**
   * Get the type key of the buff
   * @returns ModifierKey
   */
  api_get_modifier_key: () => ModifierKey;

  /**
   * Get the buff character attribute effect
   * @param attr_name attribute name
   * @returns string
   */
  api_get_str_attr: (
    /** attribute name */
    attr_name: string,
  ) => string;

  /**
   * Set the buff integer attribute effect
   * @param attr_num integer attribute value
   */
  api_set_buff_max_layer: (
    /** integer attribute value */
    attr_num: UInt32,
  ) => void;

  /**
   * Set the number of buff instance layers
   * @param attr_num integer attribute value
   */
  api_set_buff_layer: (
    /** integer attribute value */
    attr_num: UInt32,
  ) => void;

  /**
   * Sets the remaining duration of the buff
   * @param residue_time float remaining time
   */
  api_set_buff_residue_time: (
    /** float remaining time */
    residue_time: Fixed,
  ) => void;

  /**
   * Set the buff floating point property effect
   * @param attr_name attribute name
   * @param attr_num float attribute value
   */
  api_set_float_shield: (
    /** attribute name */
    attr_name: string,
    /** float attribute value */
    attr_num: Fixed,
  ) => void;

  /**
   * Set recurring events
   * @param new_cycle_time float property value
   */
  api_set_cycle_time: (
    /** float property value */
    new_cycle_time: Fixed,
  ) => void;

  /**
   * Set the duration of the magic effect
   * @param residue_time non-negative real value
   */
  api_set_duration: (
    /** non-negative real value */
    residue_time: Fixed,
  ) => void;

  /**
   * Set the string property of the buff
   * @param name attribute name
   * @param value attribute value
   */
  api_set_buff_str_attr: (
    /** attribute name */
    name: string,
    /** attribute value */
    value: string,
  ) => void;
}
