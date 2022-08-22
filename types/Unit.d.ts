/// <reference path="./Ability.d.ts" />
/// <reference path="./aliases.d.ts" />
/// <reference path="./Item.d.ts" />
/// <reference path="./Modifier.d.ts" />
/// <reference path="./Projectile.d.ts" />
/// <reference path="./Role.d.ts" />

declare interface Unit {
  /**
   * Get unit ID
   * @returns UnitID
   */
  api_get_id: () => UnitID;

  /**
   * Get unit number
   * @returns UnitKey
   */
  api_get_key: () => UnitKey;

  /**
   * Get the faction id the unit belongs to
   * @returns CampID
   */
  api_get_camp_id: () => CampID;

  /**
   * Get the ID of the player the unit belongs to
   * @returns RoleID
   */
  api_get_role_id: () => RoleID;

  /**
   * Get the player the unit belongs to
   * @returns Role
   */
  api_get_role: () => Role;

  /**
   * Get the faction the unit belongs to
   * @returns Camp
   */
  api_get_camp: () => Camp;

  /**
   * Get unit type
   * @returns UnitType
   */
  api_get_type: () => UnitType;

  /**
   * Get unit name
   * @returns string
   */
  api_get_name: () => string;

  /**
   * Add timer
   * @param time timer duration
   * @param callback timeout function
   * @returns UInt32
   */
  add_timer: (
    /** timer duration */
    time: Fixed,
    /** timeout function */
    callback: () => void,
  ) => UInt32;

  /**
   * Add periodic timer
   * @param time timer duration
   * @param callback timeout function
   * @returns UInt32
   */
  add_repeat_timer: (
    /** timer duration */
    time: Fixed,
    /** timeout function */
    callback: () => void,
  ) => UInt32;

  /**
   * cancel timer
   * @param timer_id Timer ID
   */
  cancel_timer: (
    /** Timer ID */
    timer_id: UInt32,
  ) => void;

  /**
   * Unit removal key-value pair
   * @param k key name
   */
  api_remove_kv: (
    /** key name */
    k: string,
  ) => void;

  /**
   * Is the unit alive
   * @returns boolean
   */
  api_is_alive: () => boolean;

  /**
   * Hide overhead information
   * @param show whether to hide overhead information
   */
  api_hide_head_bar: (
    /** whether to hide overhead information */
    show: boolean,
  ) => void;

  /**
   * Whether the organization has a label
   * @param tag tag
   * @returns boolean
   */
  has_tag: (
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * resurrection unit
   * @param position resurrection position
   */
  api_revive: (
    /** resurrection position */
    position: Point | null,
  ) => void;

  /**
   * Whether the unit has been destroyed
   * @returns boolean
   */
  api_is_destroyed: () => boolean;

  /**
   * delete unit
   */
  api_delete: () => void;

  /**
   * Force unit to die
   * @param source_unit Killer unit
   */
  api_kill: (
    /** Killer unit */
    source_unit: Unit | null,
  ) => void;

  /**
   * Get the unit icon path
   * @returns string
   */
  api_get_icon: () => string;

  /**
   * Get unit image path
   * @param pic_type picture type
   * @returns string
   */
  api_get_unit_pic: (
    /** picture type */
    pic_type: string,
  ) => string;

  /**
   * Get the parent unit of the unit
   * @returns Unit
   */
  api_get_parent_unit: () => Unit;

  /**
   * Change unit health bar color
   * @param color unit health bar color value
   */
  api_set_hp_color: (
    /** unit health bar color value */
    color: string,
  ) => void;

  /**
   * Turn damage and assist statistics on/off
   * @param enable enable
   */
  api_switch_atk_assist_record: (
    /** enable */
    enable: boolean,
  ) => void;

  /**
   * Is the unit/point in range
   * @param unit unit
   * @param radius range
   * @returns boolean
   */
  api_is_in_range: (
    /** unit */
    unit: Unit,
    /** range */
    radius: Float,
  ) => boolean;

  /**
   * Is the point in range
   * @param point point
   * @param radius range
   * @returns boolean
   */
  api_is_point_in_range: (
    /** point */
    point: Point,
    /** range */
    radius: Float,
  ) => boolean;

  /**
   * Set unit life cycle
   * @param life_time Lifetime
   */
  api_set_life_cycle: (
    /** Lifetime */
    life_time: Float,
  ) => void;

  /**
   * Pause unit life cycle
   * @param pause whether to pause
   */
  api_pause_life_cycle: (
    /** whether to pause */
    pause: boolean,
  ) => void;

  /**
   * Get the current lifetime of the unit
   * @returns Fixed
   */
  api_get_life_cycle: () => Fixed;

  /**
   * Get the total lifetime of the unit
   * @returns Fixed
   */
  api_get_total_life_cycle: () => Fixed;

  /**
   * Get unit attack type
   * @returns UInt32
   */
  api_get_atk_type: () => UInt32;

  /**
   * Get unit armor type
   * @returns UInt32
   */
  api_get_def_type: () => UInt32;

  /**
   * get attr_other
   * @param key attribute name
   * @returns Fixed
   */
  api_get_attr_other: (
    /** attribute name */
    key: string,
  ) => Fixed;

  /**
   * get attr_base
   * @param key attribute name
   * @returns Fixed
   */
  api_get_attr_base: (
    /** attribute name */
    key: string,
  ) => Fixed;

  /**
   * get attr_base_ratio
   * @param key attribute name
   * @returns Fixed
   */
  api_get_attr_base_ratio: (
    /** attribute name */
    key: string,
  ) => Fixed;

  /**
   * get attr_bonus
   * @param key attribute name
   * @returns Fixed
   */
  api_get_attr_bonus: (
    /** attribute name */
    key: string,
  ) => Fixed;

  /**
   * get attr_bonus_ratio
   * @param key attribute name
   * @returns Fixed
   */
  api_get_attr_bonus_ratio: (
    /** attribute name */
    key: string,
  ) => Fixed;

  /**
   * get attr_all_ratio
   * @param key attribute name
   * @returns Fixed
   */
  api_get_attr_all_ratio: (
    /** attribute name */
    key: string,
  ) => Fixed;

  /**
   * Get the unit main attribute
   * @returns string
   */
  api_get_main_attr: () => string;

  /**
   * Set the value of a pure value type
   * @param key attribute name
   * @param val value
   */
  api_set_attr: (
    /** attribute name */
    key: string,
    /** value */
    val: Fixed,
  ) => void;

  /**
   * Set unit attributes (classified by attribute)
   * @param key attribute name
   * @param val value
   * @param attr_element attribute classification
   */
  api_set_attr_by_attr_element: (
    /** attribute name */
    key: string,
    /** value */
    val: Fixed,
    /** attribute classification */
    attr_element: string,
  ) => void;

  /**
   * Set Unit Property Base Values section
   * @param key attribute name
   * @param val base value
   */
  api_set_attr_base: (
    /** attribute name */
    key: string,
    /** base value */
    val: Fixed,
  ) => void;

  /**
   * Added unit attributes (classified by attributes)
   * @param key attribute name
   * @param val value
   * @param attr_element attribute classification
   */
  api_add_attr_by_attr_element: (
    /** attribute name */
    key: string,
    /** value */
    val: Fixed,
    /** attribute classification */
    attr_element: string,
  ) => void;

  /**
   * Increase unit attribute base value
   * @param key attribute name
   * @param delta increment value
   */
  api_add_attr_base: (
    /** attribute name */
    key: string,
    /** increment value */
    delta: Fixed,
  ) => void;

  /**
   * Set the unit attribute attr_bonus
   * @param key attribute name
   * @param val set value
   */
  api_set_attr_bonus: (
    /** attribute name */
    key: string,
    /** set value */
    val: Fixed,
  ) => void;

  /**
   * Added unit attribute attr_bonus
   * @param key attribute name
   * @param delta increment value
   */
  api_add_attr_bonus: (
    /** attribute name */
    key: string,
    /** increment value */
    delta: Fixed,
  ) => void;

  /**
   * Set the unit attribute attr_bouns_ratio
   * @param key attribute name
   * @param val set value
   */
  api_set_attr_bonus_ratio: (
    /** attribute name */
    key: string,
    /** set value */
    val: Fixed,
  ) => void;

  /**
   * Added unit attribute attr_bouns_ratio
   * @param key attribute name
   * @param delta Addition ratio
   */
  api_add_attr_bonus_ratio: (
    /** attribute name */
    key: string,
    /** Addition ratio */
    delta: Fixed,
  ) => void;

  /**
   * Set the unit attribute base value and bonus value ratio
   * @param key attribute name
   * @param val set value
   */
  api_set_attr_all_ratio: (
    /** attribute name */
    key: string,
    /** set value */
    val: Fixed,
  ) => void;

  /**
   * Increase the unit attribute base value and bonus value ratio
   * @param key attribute name
   * @param delta Addition ratio
   */
  api_add_attr_all_ratio: (
    /** attribute name */
    key: string,
    /** Addition ratio */
    delta: Fixed,
  ) => void;

  /**
   * Set the unit attribute base value bonus ratio
   * @param key attribute name
   * @param val set value
   */
  api_set_attr_base_ratio: (
    /** attribute name */
    key: string,
    /** set value */
    val: Fixed,
  ) => void;

  /**
   * Increase unit attribute base value percentage bonus
   * @param key attribute name
   * @param delta Addition ratio
   */
  api_add_attr_base_ratio: (
    /** attribute name */
    key: string,
    /** Addition ratio */
    delta: Fixed,
  ) => void;

  /**
   * Set unit level
   * @param level level
   */
  api_set_level: (
    /** level */
    level: Int32,
  ) => void;

  /**
   * increase unit level
   * @param level level
   */
  api_add_level: (
    /** level */
    level: Int32,
  ) => void;

  /**
   * Get unit real property
   * @param attr attribute name
   * @returns Fixed
   */
  api_get_float_attr: (
    /** attribute name */
    attr: string,
  ) => Fixed;

  /**
   * Get the unit string property
   * @param attr attribute name
   * @returns string
   */
  api_get_str_attr: (
    /** attribute name */
    attr: string,
  ) => string;

  /**
   * Set the unit string property
   * @param attr attribute name
   * @param value String value
   */
  api_set_str_attr: (
    /** attribute name */
    attr: string,
    /** String value */
    value: string,
  ) => void;

  /**
   * Get unit level
   * @returns UInt32
   */
  api_get_level: () => UInt32;

  /**
   * Get unit blood volume
   * @returns Fixed
   */
  api_get_hp: () => Fixed;

  /**
   * Get the percentage of unit blood volume
   * @returns Fixed
   */
  api_get_hpp: () => Fixed;

  /**
   * treatment unit
   * @param hp_change value of healing
   * @param jump_word whether to jump words
   */
  api_heal: (
    /** value of healing */
    hp_change: Fixed,
    /**
     * whether to jump words
     * @defaultValue `false`
     */
    jump_word: boolean | null,
  ) => void;

  /**
   * Get output damage stats
   * @returns Fixed
   */
  api_get_dmg_statistics: () => Fixed;

  /**
   * Clear output damage stats
   */
  api_clear_dmg_statistics: () => void;

  /**
   * Increase experience, the increase value is a positive number
   * @param exp experience
   */
  api_add_exp: (
    /** experience */
    exp: Fixed,
  ) => void;

  /**
   * Set up experience
   * @param exp experience
   */
  api_set_exp: (
    /** experience */
    exp: Fixed,
  ) => void;

  /**
   * Get the unit's current experience, if it reaches the top level, return -1
   * @returns UInt32
   */
  api_get_exp: () => UInt32;

  /**
   * Get the experience required for the current level up, if you reach the top level, return -1
   * @returns Fixed
   */
  api_get_upgrade_exp: () => Fixed;

  /**
   * Unit removal key-value pair
   * @param tag TAG
   */
  api_add_tag: (
    /** TAG */
    tag: string,
  ) => void;

  /**
   * Unit removal key-value pair
   * @param tag TAG
   */
  api_remove_tag: (
    /** TAG */
    tag: string,
  ) => void;

  /**
   * set unit name
   * @param name name
   */
  api_set_name: (
    /** name */
    name: string,
  ) => void;

  /**
   * Set the unit's daytime field of view
   * @param value field of view
   */
  api_set_unit_day_vision: (
    /** field of view */
    value: Float,
  ) => void;

  /**
   * Set unit night vision
   * @param value field of view
   */
  api_set_unit_night_vision: (
    /** field of view */
    value: Float,
  ) => void;

  /**
   * Get the number of unit equipment slots
   */
  api_get_unit_pkg_cnt: () => void;

  /**
   * Gets the number of units in the backpack
   */
  api_get_unit_bag_cnt: () => void;

  /**
   * Get the unit dynamic collision radius
   * @returns Fixed
   */
  api_get_unit_collision_radius: () => Fixed;

  /**
   * Unit stops moving
   */
  api_stop_move: () => void;

  /**
   * Units are teleported to the specified coordinates
   * @param point target coordinates
   */
  api_transmit: (
    /** target coordinates */
    point: FVector3,
  ) => void;

  /**
   * Units are forced to be teleported to the specified coordinates
   * @param pos target coordinates
   */
  api_force_transmit: (
    /** target coordinates */
    pos: FVector3,
  ) => void;

  /**
   * Unit setting orientation
   * @param face_dir facing
   * @param speed_effect Whether to be affected by turning speed
   */
  api_set_face_dir: (
    /** facing */
    face_dir: FVector3,
    /**
     * Whether to be affected by turning speed
     * @defaultValue `false`
     */
    speed_effect: boolean | null,
  ) => void;

  /**
   * Units set the orientation angle
   * @param face_angle facing angle
   * @param turn_time_ms turn time in milliseconds
   */
  api_set_face_angle: (
    /** facing angle */
    face_angle: Fixed,
    /**
     * turn time in milliseconds
     * @defaultValue `-1`
     */
    turn_time_ms: Int32 | null,
  ) => void;

  /**
   * Whether the unit can teleport to the target point
   * @param pos target point
   * @returns boolean
   */
  api_can_teleport_to: (
    /** target point */
    pos: FVector3,
  ) => boolean;

  /**
   * Get unit location
   * @returns FVector3
   */
  api_get_position: () => FVector3;

  /**
   * Get unit orientation
   * @returns FVector3
   */
  api_get_face_dir: () => FVector3;

  /**
   * Get unit orientation angle
   * @returns Fixed
   */
  get_face_angle: () => Fixed;

  /**
   * The normal direction of the obstacle the unit hits
   * @returns FVector3
   */
  api_collide_obstacle_normal: () => FVector3;

  /**
   * Set the unit's turn speed
   * @param turn_speed turn speed
   */
  api_set_turn_speed: (
    /** turn speed */
    turn_speed: Fixed,
  ) => void;

  /**
   * Get unit turn speed
   * @returns Fixed
   */
  api_get_turn_speed: () => Fixed;

  /**
   * Is the unit moving
   * @returns boolean
   */
  api_is_moving: () => boolean;

  /**
   * Sets whether the unit calculates a certain collision type
   * @param collision_layer collision mask
   * @param enable enable state
   */
  api_set_move_collision: (
    /** collision mask */
    collision_layer: Int32,
    /** enable state */
    enable: boolean,
  ) => void;

  /**
   * Gets whether the unit calculates a certain collision type
   * @param collision_layer collision mask
   * @returns boolean
   */
  api_get_move_collision: (
    /** collision mask */
    collision_layer: Int32,
  ) => boolean;

  /**
   * play animation
   * @param name animation name
   * @param rate playback rate
   * @param init_time start time (s)
   * @param end_time end time (s), positive number -1 means no end
   * @param loop whether to loop
   * @param return_idle Whether to resume idle after playback ends
   */
  api_play_animation: (
    /** animation name */
    name: string,
    /**
     * playback rate
     * @defaultValue `1`
     */
    rate: Float | null,
    /**
     * start time (s)
     * @defaultValue `0`
     */
    init_time: Float | null,
    /**
     * end time (s), positive number -1 means no end
     * @defaultValue `-1`
     */
    end_time: Float | null,
    /**
     * whether to loop
     * @defaultValue `false`
     */
    loop: boolean | null,
    /**
     * Whether to resume idle after playback ends
     * @defaultValue `false`
     */
    return_idle: boolean | null,
  ) => void;

  /**
   * stop animation
   * @param name animation name
   */
  api_stop_animation: (
    /** animation name */
    name: string,
  ) => void;

  /**
   * Stop the currently playing animation
   */
  api_stop_cur_animation: () => void;

  /**
   * unit play effect
   * @param socket_name Socket name
   * @param sfx_res_id Effect ID
   * @param keep_time duration in seconds
   * @param scale scale scale
   * @param inherit_pos Whether to follow the unit position
   * @param inherit_rotate whether to follow the unit rotation
   * @param inherit_scale whether to follow scaling
   * @param role Organization
   * @param visible_type visibility rules
   * @param rotation initial rotation angle system
   */
  api_play_sfx: (
    /** Socket name */
    socket_name: string,
    /** Effect ID */
    sfx_res_id: SfxKey,
    /** duration in seconds */
    keep_time: Fixed,
    /**
     * scale scale
     * @defaultValue `1.0`
     */
    scale: Float | null,
    /**
     * Whether to follow the unit position
     * @defaultValue `true`
     */
    inherit_pos: boolean | null,
    /**
     * whether to follow the unit rotation
     * @defaultValue `true`
     */
    inherit_rotate: boolean | null,
    /**
     * whether to follow scaling
     * @defaultValue `true`
     */
    inherit_scale: boolean | null,
    /** Organization */
    role: Role | null,
    /**
     * visibility rules
     * @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
    /**
     * initial rotation angle system
     * @defaultValue `0`
     */
    rotation: Float | null,
  ) => void;

  /**
   * Play the effect on the unit and return the effect entity
   * @param socket_name Socket name
   * @param sfx_res_id Effect ID
   * @param keep_time duration in seconds
   * @param scale scale scale
   * @param inherit_pos Whether to follow the unit position
   * @param inherit_rotate whether to follow the unit rotation
   * @param inherit_scale whether to follow scaling
   * @param role Organization
   * @param visible_type visibility rules
   * @param rotation initial rotation angle system
   * @returns Sfx
   */
  api_play_sfx_with_return: (
    /** Socket name */
    socket_name: string,
    /** Effect ID */
    sfx_res_id: SfxKey,
    /** duration in seconds */
    keep_time: Fixed,
    /**
     * scale scale
     * @defaultValue `1.0`
     */
    scale: Float | null,
    /**
     * Whether to follow the unit position
     * @defaultValue `true`
     */
    inherit_pos: boolean | null,
    /**
     * whether to follow the unit rotation
     * @defaultValue `true`
     */
    inherit_rotate: boolean | null,
    /**
     * whether to follow scaling
     * @defaultValue `true`
     */
    inherit_scale: boolean | null,
    /** Organization */
    role: Role | null,
    /**
     * visibility rules
     * @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
    /**
     * initial rotation angle system
     * @defaultValue `0.0`
     */
    rotation: Float | null,
  ) => Sfx;

  /**
   * Hang link effect between two units
   * @param from_socket_name starting node
   * @param target_unit target unit
   * @param target_socket_name target socket
   * @param sfx_res_id Effect ID
   * @param scale scale
   * @param keep_time maximum duration unit: seconds
   * @param role owning player
   * @param visible_type visibility rules
   */
  api_play_link_sfx: (
    /** starting node */
    from_socket_name: string,
    /** target unit */
    target_unit: Unit,
    /** target socket */
    target_socket_name: string,
    /** Effect ID */
    sfx_res_id: SfxKey,
    /** scale */
    scale: Float,
    /** maximum duration unit: seconds */
    keep_time: Float,
    /** owning player */
    role: Role | null,
    /**
     * visibility rules
     * @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
  ) => void;

  /**
   * Link effect between two units and return effect entity
   * @param from_socket_name starting node
   * @param target_unit target unit
   * @param target_socket_name target socket
   * @param sfx_res_id Effect ID
   * @param scale scale
   * @param keep_time maximum duration unit: seconds
   * @param role owning player
   * @param visible_type visibility rules
   * @returns Sfx
   */
  api_play_link_sfx_with_return: (
    /** starting node */
    from_socket_name: string,
    /** target unit */
    target_unit: Unit,
    /** target socket */
    target_socket_name: string,
    /** Effect ID */
    sfx_res_id: SfxKey,
    /** scale */
    scale: Float,
    /** maximum duration unit: seconds */
    keep_time: Float,
    /** owning player */
    role: Role | null,
    /**
     * visibility rules
     * @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
  ) => Sfx;

  /**
   * Attach link effect between unit and projectile
   * @param from_socket_name starting node
   * @param target_unit target projectile
   * @param target_socket_name target socket
   * @param sfx_res_id Effect ID
   * @param scale scale
   * @param keep_time maximum duration unit: seconds
   * @param role owning player
   * @param visible_type visibility rules
   */
  api_play_link_sfx_to_projectile: (
    /** starting node */
    from_socket_name: string,
    /** target projectile */
    target_unit: Projectile,
    /** target socket */
    target_socket_name: string,
    /** Effect ID */
    sfx_res_id: SfxKey,
    /** scale */
    scale: Float,
    /** maximum duration unit: seconds */
    keep_time: Float,
    /** owning player */
    role: Role | null,
    /**
     * visibility rules
     * @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
  ) => void;

  /**
   * 单位播放音效
   * @param sound_id 音效资源编号
   * @param is_g_unit 是否仅对自己生效
   */
  api_play_sound_effect: (
    /** 音效资源编号 */
    sound_id: AudioKey,
    /**
     * 是否仅对自己生效
     * @defaultValue `false`
     */
    is_g_unit: boolean | null,
  ) => void;

  /**
   * 单位播放受击音效
   * @param sound_id 音效资源编号
   * @param attack_unit 攻击单位
   */
  api_play_hit_sound_effect: (
    /** 音效资源编号 */
    sound_id: AudioKey,
    /** 攻击单位 */
    attack_unit: Unit,
  ) => void;

  /**
   * 单位替换播放动画
   * @param target_ani 目标动画名字
   * @param source_ani 原动画名字
   */
  api_change_animation: (
    /** 目标动画名字 */
    target_ani: string,
    /** 原动画名字 */
    source_ani: string,
  ) => void;

  /**
   * 取消单位替换播放动画
   * @param target_ani 目标动画名字
   * @param source_ani 原动画名字
   */
  api_cancel_change_animation: (
    /** 目标动画名字 */
    target_ani: string,
    /** 原动画名字 */
    source_ani: string,
  ) => void;

  /**
   * Cancel all unit replacement play animations
   * @param source_ani original animation name
   */
  api_clear_change_animation: (
    /** original animation name */
    source_ani: string,
  ) => void;

  /**
   * unit replacement model
   * @param target_model target model number
   * @param source_model source model number
   */
  api_change_model: (
    /** target model number */
    target_model: ModelKey,
    /** source model number */
    source_model: ModelKey,
  ) => void;

  /**
   * Cancel Unit Replacement Model
   * @param target_model target model number
   * @param source_model source model number
   */
  api_cancel_change_model: (
    /** target model number */
    target_model: ModelKey,
    /** source model number */
    source_model: ModelKey,
  ) => void;

  /**
   * Cancel all replacement models for the unit
   * @param source_model source model number
   */
  api_clear_change_model: (
    /** source model number */
    source_model: ModelKey,
  ) => void;

  /**
   * unit replacement model
   * @param target_model target model number
   */
  api_replace_model: (
    /** target model number */
    target_model: ModelKey,
  ) => void;

  /**
   * Cancel Unit Replacement Model
   * @param target_model target model name
   */
  api_cancel_replace_model: (
    /** target model name */
    target_model: ModelKey,
  ) => void;

  /**
   * Show health bar countdown
   * @param left_time countdown time, in seconds
   */
  api_show_health_bar_count_down: (
    /** countdown time, in seconds */
    left_time: Fixed,
  ) => void;

  /**
   * get unit model
   * @returns ModelKey
   */
  api_get_model: () => ModelKey;

  /**
   * Get the original model of the unit
   * @returns ModelKey
   */
  api_get_source_model: () => ModelKey;

  /**
   * Display unit overhead text
   * @param text Display information
   * @param second duration, in seconds
   * @param localize multi-locale
   */
  api_show_text: (
    /** Display information */
    text: string,
    /** duration, in seconds */
    second: Fixed,
    /**
     * multi-locale
     * @defaultValue `0`
     */
    localize: Int32 | null,
  ) => void;

  /**
   * Change unit name
   * @param title_str title
   * @param localize Multilingual translation
   */
  api_set_title: (
    /** title */
    title_str: string,
    /**
     * Multilingual translation
     * @defaultValue `false`
     */
    localize: boolean | null,
  ) => void;

  /**
   * Set Unit Title Visibility
   * @param visible whether to show
   */
  api_set_title_visible: (
    /** whether to show */
    visible: boolean,
  ) => void;

  /**
   * Hide the display unit name. For units without overhead UI, this API does not take effect. Each time the hidden count is +1, each time the display count is -1, the count returns to zero to display the unit name.
   * @param visible whether to show
   */
  api_set_name_visible: (
    /** whether to show */
    visible: boolean,
  ) => void;

  /**
   * Hide the display unit name. For units without overhead UI, this API does not take effect. Each time the hidden count is +1, each time the display count is -1, the count returns to zero to display the unit name.
   * @param visible whether to show
   */
  api_set_bar_name_visible: (
    /** whether to show */
    visible: boolean,
  ) => void;

  /**
   * Set the health bar display name
   * @param name name
   */
  api_set_bar_name: (
    /** name */
    name: string,
  ) => void;

  /**
   * Set health bar display name scaling
   * @param scale scale
   */
  set_bar_name_scale: (
    /** scale */
    scale: Float,
  ) => void;

  /**
   * Set the blood bar display name font
   * @param font_name font name
   */
  api_set_bar_name_font_type: (
    /** font name */
    font_name: string,
  ) => void;

  /**
   * Set the font size of the blood bar display name
   * @param size font size
   */
  api_set_bar_name_font_size: (
    /** font size */
    size: UInt32,
  ) => void;

  /**
   * Hide and display the text above the head of the unit, the count of each hide is +1, the count of each display is -1, and the count is reset to zero to display the text above the head of the unit
   * @param visible whether to show
   */
  api_set_bar_text_visible: (
    /** whether to show */
    visible: boolean,
  ) => void;

  /**
   * Sets the overhead display text zoom
   * @param scale scale
   */
  api_set_bar_text_scale: (
    /** scale */
    scale: Float,
  ) => void;

  /**
   * Set the type of text displayed on the top of the head
   * @param bar_text_type type
   */
  api_set_bar_text_type: (
    /** type */
    bar_text_type: UInt32,
  ) => void;

  /**
   * Set the font of the text displayed on the top of the head
   * @param font_type font
   */
  api_set_bar_text_font_type: (
    /** font */
    font_type: string,
  ) => void;

  /**
   * Set the font size of the text displayed on the top of the head
   * @param font_size font size
   */
  api_set_bar_text_font_size: (
    /** font size */
    font_size: UInt32,
  ) => void;

  /**
   * Set the display style of the health bar name
   * @param t Style, see **HeadBarShowNameType**
   */
  api_set_bar_name_show_type: (
    /** Style, see **HeadBarShowNameType** */
    t: UInt32,
  ) => void;

  /**
   * Hide and display unit health bar. For units without overhead UI, this API does not take effect. Each time you hide the count +1, each time you display the count -1, the count returns to zero to display the unit health bar.
   * @param visible whether to show
   */
  api_set_hp_bar_visible: (
    /** whether to show */
    visible: boolean,
  ) => void;

  /**
   * Set the display style of the unit's health bar. This API does not take effect for units without overhead UI.
   * @param t Display style, see **HeadBarShowType**
   */
  api_set_hp_bar_show_type: (
    /** Display style, see **HeadBarShowType** */
    t: UInt32,
  ) => void;

  /**
   * Set the unit health bar style, this API does not take effect for units without overhead UI
   * @param t Health bar style
   */
  api_set_hp_bar_type: (
    /** Health bar style */
    t: UInt32,
  ) => void;

  /**
   * Bind UI controls
   * @param ui_comp UI Controls
   * @param socket_name mount point (need to confirm that the model has this mount point, the mount point can be viewed in the model properties, see **ModelSocket** for the specific mount point type)
   */
  api_add_ui_comp: (
    /** UI Controls */
    ui_comp: WorldUINode,
    /** mount point (need to confirm that the model has this mount point, the mount point can be viewed in the model properties, see **ModelSocket** for the specific mount point type) */
    socket_name: string,
  ) => void;

  /**
   * Modify unit name and font size
   * @param font_size font size
   */
  api_change_title_font_size: (
    /** font size */
    font_size: UInt32,
  ) => void;

  /**
   * Modify unit title scaling
   * @param scale scale
   */
  api_change_title_scale: (
    /** scale */
    scale: Float,
  ) => void;

  /**
   * Modify unit title font
   * @param font_name font
   */
  api_change_title_font_type: (
    /** font */
    font_name: string,
  ) => void;

  /**
   * Modify unit title style
   * @param style_type title style
   */
  api_change_title_type: (
    /** title style */
    style_type: UInt32,
  ) => void;

  /**
   * Modify unit title background opacity
   * @param opacity opacity
   */
  api_set_title_bg_opacity: (
    /** opacity */
    opacity: Float,
  ) => void;

  /**
   * Modify unit title background scaling
   * @param scale scale
   */
  api_set_title_bg_scale: (
    /** scale */
    scale: Float,
  ) => void;

  /**
   * Modify unit health bar scale visibility
   * @param visible visibility
   */
  api_set_blood_scale_visible: (
    /** visibility */
    visible: boolean,
  ) => void;

  /**
   * Modify unit title position offset
   * @param offset position offset
   */
  api_set_title_bar_pos_offset: (
    /** position offset */
    offset: Vector2,
  ) => void;

  /**
   * Modify unit health bar position offset
   * @param offset position offset
   */
  api_set_hp_bar_pos_offset: (
    /** position offset */
    offset: Vector2,
  ) => void;

  /**
   * Modify unit name position offset
   * @param offset position offset
   */
  api_set_name_bar_pos_offset: (
    /** position offset */
    offset: Vector2,
  ) => void;

  /**
   * Modify unit text position offset
   * @param offset position offset
   */
  api_set_text_bar_pos_offset: (
    /** position offset */
    offset: Vector2,
  ) => void;

  /**
   * Modify unit countdown position offset
   * @param offset position offset
   */
  api_set_countdown_bar_pos_offset: (
    /** position offset */
    offset: Vector2,
  ) => void;

  /**
   * unit raised
   * @param y raise height
   * @param dt time
   */
  api_raise_height: (
    /** raise height */
    y: Fixed,
    /** time */
    dt: Fixed,
  ) => void;

  /**
   * Get unit height
   * @returns Fixed
   */
  api_get_height: () => Fixed;

  /**
   * Set unit scaling
   * @param scale scale
   */
  api_set_scale: (
    /** scale */
    scale: Float,
  ) => void;

  /**
   * Modify unit health bar style
   * @param blood_bar_type blood bar style
   */
  api_set_blood_bar_type: (
    /** blood bar style */
    blood_bar_type: UInt64,
  ) => void;

  /**
   * Modify unit health bar display mode
   * @param blood_bar_show_type Blood bar display mode
   */
  api_set_blood_bar_show_type: (
    /** Blood bar display mode */
    blood_bar_show_type: UInt64,
  ) => void;

  /**
   * Enable afterimage
   * @param r r
   * @param g g
   * @param b b
   * @param a a
   * @param interval interval
   * @param duration duration
   * @param start start
   * @param end end
   */
  api_start_ghost: (
    /**
     * r
     * @defaultValue `Fix32(255.0)`
     */
    r: Fixed | null,
    /**
     * g
     * @defaultValue `Fix32(255.0)`
     */
    g: Fixed | null,
    /**
     * b
     * @defaultValue `Fix32(255.0)`
     */
    b: Fixed | null,
    /**
     * a
     * @defaultValue `Fix32(255.0)`
     */
    a: Fixed | null,
    /**
     * interval
     * @defaultValue `Fix32(0.3)`
     */
    interval: Fixed | null,
    /**
     * duration
     * @defaultValue `Fix32(0.5)`
     */
    duration: Fixed | null,
    /**
     * start
     * @defaultValue `Fix32(0.4)`
     */
    start: Fixed | null,
    /**
     * end
     * @defaultValue `Fix32(0.3)`
     */
    end: Fixed | null,
  ) => void;

  /**
   * Turn off afterimages
   */
  api_stop_ghost: () => void;

  /**
   * Set afterimage color
   * @param r r
   * @param g g
   * @param b b
   * @param a a
   */
  api_set_ghost_color: (
    /** r */
    r: Fixed,
    /** g */
    g: Fixed,
    /** b */
    b: Fixed,
    /** a */
    a: Fixed,
  ) => void;

  /**
   * Set afterimage time
   * @param interval interval
   * @param duration duration
   * @param start start
   * @param end end
   */
  api_set_ghost_time: (
    /** interval */
    interval: Fixed,
    /** duration */
    duration: Fixed,
    /** start */
    start: Fixed,
    /** end */
    end: Fixed,
  ) => void;

  /**
   * Unit adds the effect of the specified number
   * @param modifier_key effect number
   * @param from_unit source unit object
   * @param from_ability associated ability
   * @param time duration
   * @param cycle_time cycle period
   * @param stack_count effect stacks
   */
  api_add_modifier: (
    /** effect number */
    modifier_key: ModifierKey,
    /** source unit object */
    from_unit: Unit | null,
    /** associated ability */
    from_ability: Ability | null,
    /**
     * duration
     * @defaultValue `Fix32(-1.0)`
     */
    time: Fixed | null,
    /**
     * cycle period
     * @defaultValue `Fix32(0.0)`
     */
    cycle_time: Fixed | null,
    /**
     * effect stacks
     * @defaultValue `1`
     */
    stack_count: Int32 | null,
  ) => void;

  /**
   * Get the number of effect layers with the specified number on the unit
   * @param modifier_key effect number
   * @returns Int32
   */
  api_get_modifier_stack_count: (
    /** effect number */
    modifier_key: ModifierKey,
  ) => Int32;

  /**
   * Whether the unit has the effect of the specified number
   * @param modifier_key effect number
   * @returns boolean
   */
  api_has_modifier: (
    /** effect number */
    modifier_key: ModifierKey,
  ) => boolean;

  /**
   * Whether the unit has the effect of the specified tag
   * @param tag tag
   * @returns boolean
   */
  api_has_modifier_with_tag: (
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * Get the i-th effect instance with the specified number on the unit
   * @param add_index effect position
   * @param modifier_key effect number
   */
  api_get_modifier: (
    /** effect position */
    add_index: Int32,
    /** effect number */
    modifier_key: ModifierKey,
  ) => void;

  /**
   * Get the number of the i-th effect with the specified number on the unit
   * @param modifier_key effect number
   */
  api_get_modifier_count: (
    /** effect number */
    modifier_key: ModifierKey,
  ) => void;

  /**
   * Removes the target modifier instance from the target unit
   * @param tar_modifier effect number
   */
  api_remove_modifier_instance: (
    /** effect number */
    tar_modifier: Modifier,
  ) => void;

  /**
   * Removes all instances of the target modifier type from the target unit
   * @param modifier_key effect number
   */
  api_remove_modifier_type: (
    /** effect number */
    modifier_key: ModifierKey,
  ) => void;

  /**
   * Whether the unit has the effect of the specified type
   * @param modifier_effect_type magic effect type
   * @returns boolean
   */
  api_has_modifier_type: (
    /** magic effect type */
    modifier_effect_type: ModifierEffectType,
  ) => boolean;

  /**
   * Removes the magic effect of the specified effect type on the unit
   * @param effect_type Effect effect type
   */
  api_delete_all_modifiers_by_effect_type: (
    /** Effect effect type */
    effect_type: ModifierEffectType,
  ) => void;

  /**
   * Get all magic effects on the unit
   * @returns Modifier
   */
  api_get_all_modifiers: () => Modifier;

  /**
   * unit add skills
   * @param ability_type Ability Type
   * @param ability_id Ability ID
   * @param ability_index skill slot number
   * @returns Ability
   */
  api_add_ability: (
    /** Ability Type */
    ability_type: AbilityType,
    /** Ability ID */
    ability_id: AbilityKey,
    /**
     * skill slot number
     * @defaultValue `-1`
     */
    ability_index: AbilityIndex | null,
  ) => Ability;

  /**
   * Units remove skills based on slot
   * @param ability_type ability type
   * @param ability_index Ability slot
   */
  api_remove_ability_by_index: (
    /** ability type */
    ability_type: Int32,
    /** Ability slot */
    ability_index: Int32,
  ) => void;

  /**
   * Unit removes all skills of a certain type with the specified skill ID
   * @param ability_type ability type
   * @param ability_id Ability ID
   */
  api_remove_abilities_in_type: (
    /** ability type */
    ability_type: Int32,
    /** Ability ID */
    ability_id: AbilityKey,
  ) => void;

  /**
   * The unit sets the skill level.
   * @param modify Modification
   * @param ability_type Ability Type
   * @param ability_index skill slot
   * @param level skill level
   */
  api_set_ability_level: (
    /** Modification */
    modify: Int32,
    /** Ability Type */
    ability_type: AbilityType,
    /** skill slot */
    ability_index: AbilityIndex,
    /** skill level */
    level: Int32,
  ) => void;

  /**
   * unit study skills
   * @param ability_key Ability Type
   */
  api_unit_learn_ability: (
    /** Ability Type */
    ability_key: AbilityKey,
  ) => void;

  /**
   * Get hero's skill points
   * @returns Int32
   */
  api_get_ability_point: () => Int32;

  /**
   * Set hero's skill points
   * @param ability_point skill point
   */
  api_set_ability_point: (
    /** skill point */
    ability_point: Int32,
  ) => void;

  /**
   * Increase hero's skill points
   * @param value skill points
   */
  api_add_ability_point: (
    /** skill points */
    value: Int32,
  ) => void;

  /**
   * Acquire skills through skill slots
   * @param ability_type Ability Type
   * @param ability_index skill slot
   * @returns Ability
   */
  api_get_ability: (
    /** Ability Type */
    ability_type: AbilityType,
    /** skill slot */
    ability_index: AbilityIndex,
  ) => Ability;

  /**
   * Obtain skills by adding skill type and skill ID
   * @param ability_type Ability Type
   * @param ability_id Ability ID
   * @returns Ability
   */
  api_get_ability_by_type: (
    /** Ability Type */
    ability_type: AbilityType,
    /** Ability ID */
    ability_id: AbilityKey,
  ) => Ability;

  /**
   * Get a list of skills of a certain type
   * @param ability_type Ability Type
   * @returns Ability
   */
  api_get_abilities_by_type: (
    /** Ability Type */
    ability_type: AbilityType,
  ) => Ability;

  /**
   * Is there a skill corresponding to the skill type?
   * @param ability_id Ability Type
   * @returns boolean
   */
  api_check_has_ability_type: (
    /** Ability Type */
    ability_id: AbilityKey,
  ) => boolean;

  /**
   * Get a list of unit skills
   * @returns Ability
   */
  api_get_all_abilities_can_show: () => Ability;

  /**
   * exchange skills
   * @param ability_1 Abilities
   * @param ability_2 Abilities
   */
  api_switch_ability: (
    /** Abilities */
    ability_1: Ability,
    /** Abilities */
    ability_2: Ability,
  ) => void;

  /**
   * Unit disables skills.
   * @param ability_type Ability Type
   * @param ability_index skill slot
   */
  api_disable_ability: (
    /** Ability Type */
    ability_type: AbilityType,
    /** skill slot */
    ability_index: AbilityIndex,
  ) => void;

  /**
   * Unit unlocking skills.
   * @param ability_type Ability Type
   * @param ability_index skill slot
   */
  api_enable_ability: (
    /** Ability Type */
    ability_type: AbilityType,
    /** skill slot */
    ability_index: AbilityIndex,
  ) => void;

  /**
   * Returns the string attribute value of the specified slot skill of the unit entity
   * @param ability_type Ability Type
   * @param ability_index skill slot
   * @param prop property name
   * @returns string
   */
  api_get_ability_str_attr_value: (
    /** Ability Type */
    ability_type: AbilityType,
    /** skill slot */
    ability_index: AbilityIndex,
    /** property name */
    prop: string,
  ) => string;

  /**
   * Get the skill object according to the skill serial number
   * @param seq Skill number
   * @returns Ability
   */
  api_get_ability_by_seq: (
    /** Skill number */
    seq: AbilitySeq,
  ) => Ability;

  /**
   * Apply a state to a unit
   * @param state_id State ID
   */
  api_add_state: (
    /** State ID */
    state_id: UInt32,
  ) => void;

  /**
   * remove state from unit
   * @param state_id State ID
   */
  api_remove_state: (
    /** State ID */
    state_id: UInt32,
  ) => void;

  /**
   * Are you in combat
   * @returns boolean
   */
  api_is_in_battle_state: () => boolean;

  /**
   * Is the unit in a state
   * @param state_bit state
   * @returns boolean
   */
  api_has_state: (
    /** state */
    state_bit: Int32,
  ) => boolean;

  /**
   * unit cast skill
   * @param ability_type ability type
   * @param ability_index Ability slot
   */
  api_release_ability_by_index: (
    /** ability type */
    ability_type: Int32,
    /** Ability slot */
    ability_index: Int32,
  ) => void;

  /**
   * A unit casts a skill with a release target location
   * @param ability_type ability type
   * @param ability_index skill slot
   * @param postion skill target position
   */
  api_release_ability_at_position: (
    /** ability type */
    ability_type: Int32,
    /** skill slot */
    ability_index: Int32,
    /** skill target position */
    postion: Point,
  ) => void;

  /**
   * Issue a build order (target point)
   * @param build_key building type
   * @param point target position
   */
  api_create_building_on_point: (
    /** building type */
    build_key: UnitKey,
    /** target position */
    point: Point,
  ) => void;

  /**
   * Issue a build order (coordinates)
   * @param build_key building type
   * @param pos_x coordinate X
   * @param pos_z coordinate Z
   */
  api_create_building_on_position: (
    /** building type */
    build_key: UnitKey,
    /** coordinate X */
    pos_x: Fixed,
    /** coordinate Z */
    pos_z: Fixed,
  ) => void;

  /**
   * Whether the unit owns the item
   * @param item item
   * @returns boolean
   */
  api_has_item: (
    /** item */
    item: Item,
  ) => boolean;

  /**
   * Whether the unit owns a specific numbered item
   * @param item_no item number
   * @returns boolean
   */
  api_has_item_key: (
    /** item number */
    item_no: ItemKey,
  ) => boolean;

  /**
   * Add item names to units
   * @param item_no item number
   * @returns Item
   */
  api_add_item: (
    /** item number */
    item_no: ItemKey,
  ) => Item;

  /**
   * Delete item name from unit
   * @param item_key item number
   * @param num number
   */
  api_delete_item: (
    /** item number */
    item_key: ItemKey,
    /**
     * number
     * @defaultValue `1`
     */
    num: Int32 | null,
  ) => void;

  /**
   * Units drop item entities into the scene
   * @param item item
   * @param pos point
   * @param stack_cnt number
   */
  api_drop_item: (
    /** item */
    item: Item,
    /** point */
    pos: FPoint,
    /** number */
    stack_cnt: Int32,
  ) => void;

  /**
   * unit delete item entity
   * @param stack_cnt number
   * @param item item
   */
  api_remove_item: (
    /** number */
    stack_cnt: Int32,
    /** item */
    item: Item,
  ) => void;

  /**
   * Get items from a unit's backpack slot
   * @param slot_type Backpack slot
   * @param slot_idx Slot subscript
   * @returns Item
   */
  api_get_item_by_slot: (
    /** Backpack slot */
    slot_type: SlotType,
    /** Slot subscript */
    slot_idx: Int32,
  ) => Item;

  /**
   * moving items
   * @param item item
   * @param slot_type Backpack slot
   * @param slot_idx Slot subscript
   */
  api_shift_item: (
    /** item */
    item: Item,
    /** Backpack slot */
    slot_type: SlotType,
    /** Slot subscript */
    slot_idx: UInt32,
  ) => void;

  /**
   * All items on the unit
   * @returns ItemGroup
   */
  api_get_all_item_pids: () => ItemGroup;

  /**
   * Whether the unit is a store
   * @returns boolean
   */
  api_is_shop: () => boolean;

  /**
   * Get store unit range
   * @returns Fixed
   */
  api_get_shop_range: () => Fixed;

  /**
   * Add items to the store
   * @param tab_name Tabs
   * @param item_no item number
   */
  api_add_shop_item: (
    /** Tabs */
    tab_name: TabName,
    /** item number */
    item_no: ItemKey,
  ) => void;

  /**
   * Get the list of products on a page of the store
   * @param tab_idx Tab id
   * @returns ItemKey
   */
  api_get_shop_item_list: (
    /** Tab id */
    tab_idx: TabIdx,
  ) => ItemKey;

  /**
   * Get recovery time for store items
   * @param tab_idx Tab id
   * @param item_no item number
   */
  api_get_shop_item_cd: (
    /** Tab id */
    tab_idx: TabIdx,
    /** item number */
    item_no: ItemKey,
  ) => void;

  /**
   * Get the number of store tabs
   * @returns ItemKey
   */
  api_get_shop_tab_cnt: () => ItemKey;

  /**
   * Get the store's page signature
   * @param tab_idx Tab id
   * @returns string
   */
  api_get_shop_tab_name: (
    /** Tab id */
    tab_idx: TabIdx,
  ) => string;

  /**
   * Add unit items to the store
   * @param tab_name Tabs
   * @param entity_no Unit number
   */
  api_add_shop_unit: (
    /** Tabs */
    tab_name: TabName,
    /** Unit number */
    entity_no: UnitKey,
  ) => void;

  /**
   * delete shop items
   * @param tab_name Tabs
   * @param item_no item number
   */
  api_remove_shop_item: (
    /** Tabs */
    tab_name: TabName,
    /** item number */
    item_no: ItemKey,
  ) => void;

  /**
   * Delete store unit items
   * @param tab_name Tabs
   * @param entity_no Unit number
   */
  api_remove_shop_unit: (
    /** Tabs */
    tab_name: TabName,
    /** Unit number */
    entity_no: UnitKey,
  ) => void;

  /**
   * Set item inventory
   * @param tab_name Tabs
   * @param item_no item number
   * @param cnt inventory
   */
  api_set_shop_item_stock: (
    /** Tabs */
    tab_name: TabName,
    /** item number */
    item_no: ItemKey,
    /** inventory */
    cnt: UInt32,
  ) => void;

  /**
   * Set unit inventory
   * @param tab_name Tabs
   * @param entity_no Unit number
   * @param cnt inventory
   */
  api_set_shop_unit_stock: (
    /** Tabs */
    tab_name: TabName,
    /** Unit number */
    entity_no: UnitKey,
    /** inventory */
    cnt: UInt32,
  ) => void;

  /**
   * set store switch
   * @param is_shop switch
   */
  api_set_is_shop: (
    /** switch */
    is_shop: boolean,
  ) => void;

  /**
   * unit purchases
   * @param shop_unit shop
   * @param tab_idx Tab id
   * @param item_no item number
   */
  api_buy_item_with_tab_name: (
    /** shop */
    shop_unit: Unit,
    /** Tab id */
    tab_idx: TabIdx,
    /** item number */
    item_no: ItemKey,
  ) => void;

  /**
   * unit purchase unit
   * @param shop_unit shop
   * @param tab_name Tabs
   * @param entity_no Unit number
   */
  api_buy_unit_with_tab_name: (
    /** shop */
    shop_unit: Unit,
    /** Tabs */
    tab_name: TabName,
    /** Unit number */
    entity_no: UnitKey,
  ) => void;

  /**
   * unit for sale
   * @param shop_unit shop
   * @param item props
   */
  api_sell_item: (
    /** shop */
    shop_unit: Unit,
    /** props */
    item: Item,
  ) => void;

  /**
   * Set store goals
   * @param target_unit target
   */
  api_set_shop_target: (
    /** target */
    target_unit: Unit,
  ) => void;

  /**
   * Get unit store item item inventory
   * @param tab_idx Tab id
   * @param item_no item number
   * @returns Int32
   */
  api_get_shop_item_stock: (
    /** Tab id */
    tab_idx: TabIdx,
    /** item number */
    item_no: ItemKey,
  ) => Int32;

  /**
   * Get unit store unit item inventory
   * @param tab_name Tabs
   * @param entity_no Unit number
   * @returns Int32
   */
  api_get_shop_unit_stock: (
    /** Tabs */
    tab_name: TabName,
    /** Unit number */
    entity_no: UnitKey,
  ) => Int32;

  /**
   * Get unit store unit price
   * @param tab_name Tabs
   * @param entity_no Unit number
   * @returns Fixed
   */
  api_get_shop_item_price: (
    /** Tabs */
    tab_name: TabName,
    /** Unit number */
    entity_no: UnitKey,
  ) => Fixed;

  /**
   * Technology upgrade
   * @param tech_no Tech number
   */
  api_upgrade_tech: (
    /** Tech number */
    tech_no: TechKey,
  ) => void;

  /**
   * Get a list of technologies
   * @returns TechKey
   */
  api_get_tech_list: () => TechKey;

  /**
   * Whether the acquisition technology meets the preconditions
   * @param tech_no Tech number
   * @returns TechKey
   */
  api_check_tech_precondition: (
    /** Tech number */
    tech_no: TechKey,
  ) => TechKey;

  /**
   * Add technology
   * @param tech_no Tech number
   */
  api_add_tech: (
    /** Tech number */
    tech_no: TechKey,
  ) => void;

  /**
   * delete technology
   * @param tech_no Tech number
   */
  api_remove_tech: (
    /** Tech number */
    tech_no: TechKey,
  ) => void;

  /**
   * issue an order
   * @param command command
   */
  api_release_command: (
    /** command */
    command: UnitCommand,
  ) => void;
}
