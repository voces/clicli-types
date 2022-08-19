declare interface Ability {
  /**
   * Get skill string attribute
   * @param attr tagname
   * @returns string
   */
  api_get_str_attr: (
    /** tagname */
    attr: AbilityStrAttr,
  ) => string;

  /**
   * Set skill string properties
   * @param attr tagname
   * @param value String value
   */
  api_set_str_attr: (
    /** tagname */
    attr: AbilityStrAttr,
    /** String value */
    value: string,
  ) => void;

  /**
   * set skill name
   * @param value String value
   */
  api_set_name: (
    /** String value */
    value: string,
  ) => void;

  /**
   * Get the skill owner
   * @returns Unit
   */
  api_get_owner: () => Unit;

  /**
   * Get skill type
   * @returns AbilityType
   */
  api_get_type: () => AbilityType;

  /**
   * Get skill type
   * @returns AbilityIndex
   */
  api_get_ability_index: () => AbilityIndex;

  /**
   * Get the skill owner
   * @returns AbilitySeq
   */
  api_get_ability_seq: () => AbilitySeq;

  /**
   * Get skill release type
   * @returns AbilityCastType
   */
  api_get_ability_cast_type: () => AbilityCastType;

  /**
   * remove skill
   */
  api_remove: () => void;

  /**
   * Acquire skill level
   * @returns Int32
   */
  api_get_level: () => Int32;

  /**
   * Has a marker
   * @param tag tag name
   * @returns boolean
   */
  has_tag: (
    /** tag name */
    tag: string,
  ) => boolean;

  /**
   * remove key-value pairs
   * @param k key
   */
  api_remove_kv: (
    /** key */
    k: string,
  ) => void;

  /**
   * Calculation formula type KV
   * @param k key
   * @returns Fixed
   */
  api_calc_ability_formula_kv: (
    /** key */
    k: string,
  ) => Fixed;

  /**
   * Add timer
   * @param time timer duration
   * @param callback timeout function
   */
  add_timer: (
    /** timer duration */
    time: Fixed,
    /** timeout function */
    callback: () => void,
  ) => void;

  /**
   * Whether the skill object has a target
   * @param runtime_id runtime_id
   * @returns boolean
   */
  api_has_target: (
    /** runtime_id */
    runtime_id: Int32,
  ) => boolean;

  /**
   * Get the location of the skill release
   * @param runtime_id runtime_id
   * @returns FPoint
   */
  api_get_release_position: (
    /** runtime_id */
    runtime_id: Int32,
  ) => FPoint;

  /**
   * Get the direction of skill release
   * @param runtime_id runtime_id
   * @returns Fixed
   */
  api_get_release_direction: (
    /** runtime_id */
    runtime_id: Int32,
  ) => Fixed;

  /**
   * Get the real attribute value of the skill
   * @param attr attribute name
   * @returns Fixed
   */
  api_get_float_attr: (
    /** attribute name */
    attr: string,
  ) => Fixed;

  /**
   * Get skill integer attribute value
   * @param attr attribute name
   * @returns Int32
   */
  api_get_int_attr: (
    /** attribute name */
    attr: string,
  ) => Int32;

  /**
   * Get skill boolean attribute value
   * @param attr attribute name
   * @returns boolean
   */
  api_get_bool_attr: (
    /** attribute name */
    attr: string,
  ) => boolean;

  /**
   * Set skill level
   * @param level skill level
   */
  api_set_level: (
    /** skill level */
    level: Int32,
  ) => void;

  /**
   * learning skills
   */
  api_learn_ability: () => void;

  /**
   * Increase skill level
   * @param level skill level
   */
  api_add_level: (
    /** skill level */
    level: Int32,
  ) => void;

  /**
   * Incrementally modify the real attribute value of the skill
   * @param attr attribute name
   * @param value real property value
   */
  api_add_float_attr: (
    /** attribute name */
    attr: string,
    /** real property value */
    value: Fixed,
  ) => void;

  /**
   * Set skill real number attribute value
   * @param attr attribute name
   * @param value real property value
   */
  api_set_float_attr: (
    /** attribute name */
    attr: string,
    /** real property value */
    value: Fixed,
  ) => void;

  /**
   * Incremental modification skill integer attribute value
   * @param attr attribute name
   * @param value integer property value
   */
  api_add_int_attr: (
    /** attribute name */
    attr: string,
    /** integer property value */
    value: Int32,
  ) => void;

  /**
   * Set skill integer attribute value
   * @param attr attribute name
   * @param value integer property value
   */
  api_set_int_attr: (
    /** attribute name */
    attr: string,
    /** integer property value */
    value: Int32,
  ) => void;

  /**
   * Set skill boolean attribute value
   * @param attr attribute name
   * @param value boolean property value
   */
  api_set_bool_attr: (
    /** attribute name */
    attr: string,
    /** boolean property value */
    value: boolean,
  ) => void;

  /**
   * Prevents the current skill from casting
   */
  api_break_ability_in_cs: () => void;

  /**
   * Get skill number
   * @returns AbilityKey
   */
  api_get_ability_id: () => AbilityKey;

  /**
   * Is it a melee skill?
   * @returns boolean
   */
  api_is_melee_ability: () => boolean;

  /**
   * Is it a general attack
   * @returns boolean
   */
  api_is_common_atk: () => boolean;

  /**
   * Is it passive
   * @returns boolean
   */
  is_passive_ability: () => boolean;

  /**
   * Get skill name
   * @returns string
   */
  api_get_name: () => string;

  /**
   * Acquires the charge stacks of the skill
   * @returns Int32
   */
  api_get_ability_stack: () => Int32;

  /**
   * Increase skill charge stacks
   * @param value Charge stacks
   */
  api_add_ability_stack_count: (
    /** Charge stacks */
    value: Int32,
  ) => void;

  /**
   * Set skill charge levels
   * @param value Charge stacks
   */
  api_set_ability_stack_count: (
    /** Charge stacks */
    value: Int32,
  ) => void;

  /**
   * Get the remaining cooldown of the current skill
   * @returns Fixed
   */
  api_get_cd_left_time: () => Fixed;

  /**
   * Skill cools down immediately
   */
  api_immediately_clear_cd: () => void;

  /**
   * Change skill cooldown
   * @param value cooldown
   */
  api_change_ability_cd_cold_down: (
    /** cooldown */
    value: Fixed,
  ) => void;

  /**
   * Set skill cooldown
   * @param value cooldown
   */
  api_set_ability_cd: (
    /** cooldown */
    value: Fixed,
  ) => void;

  /**
   * Increase skill cooldown
   * @param value cooldown
   */
  api_add_ability_cd: (
    /** cooldown */
    value: Fixed,
  ) => void;

  /**
   * Cool from scratch
   */
  api_restart_cd: () => void;

  /**
   * Change the current charging time
   * @param value cooldown
   */
  api_set_ability_cur_stack_cd: (
    /** cooldown */
    value: Fixed,
  ) => void;

  /**
   * Get the current remaining charge time of the skill
   * @returns Fixed
   */
  api_get_stack_cd_left_time: () => Fixed;

  /**
   * enable skills
   */
  api_enable: () => void;

  /**
   * Disable skills
   */
  api_disable: () => void;
}
