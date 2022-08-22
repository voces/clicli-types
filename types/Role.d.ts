/// <reference path="./aliases.d.ts" />
/// <reference path="./Unit.d.ts" />

declare interface Role {
  /**
   * Player gets player ID
   * @returns RoleID
   */
  api_get_role_id: () => RoleID;

  /**
   * Get the faction ID the player belongs to
   * @returns Int64
   */
  api_get_camp_id: () => Int64;

  /**
   * Get player ID value
   * @returns UInt32
   */
  get_role_id_num: () => UInt32;

  /**
   * Get the player's faction ID value
   * @returns UInt32
   */
  get_camp_id_num: () => UInt32;

  /**
   * Get player name
   * @returns string
   */
  get_role_name: () => string;

  /**
   * Get player controller type
   * @returns RoleType
   */
  get_role_type: () => RoleType;

  /**
   * Get the faction object the player belongs to
   * @returns Camp
   */
  api_get_camp: () => Camp;

  /**
   * Player settings
   * @param k attribute name
   * @param value property value
   */
  set_attr_val: (
    /** attribute name */
    k: string,
    /** property value */
    value: Int32,
  ) => void;

  /**
   * Get all unit objects of the player
   * @returns UnitGroup
   */
  get_all_unit_id: () => UnitGroup;

  /**
   * Set player experience gain rate
   * @param rate Magnification
   */
  set_role_exp_rate: (
    /** Magnification */
    rate: Float,
  ) => void;

  /**
   * Gain player experience multiplier
   * @returns Fixed
   */
  get_role_exp_rate: () => Fixed;

  /**
   * Set player spawn point
   * @param point 点
   */
  set_role_spawn_point: (
    /** 点 */
    point: Point,
  ) => void;

  /**
   * Get player spawn point
   * @returns FVector3
   */
  get_role_spawn_point: () => FVector3;

  /**
   * Set player team ID
   * @param new_camp Team ID
   */
  api_set_camp: (
    /** Team ID */
    new_camp: Camp,
  ) => void;

  /**
   * set player name
   * @param name name
   */
  set_role_name: (
    /** name */
    name: string,
  ) => void;

  /**
   * Modify player resources
   * @param res_key resource name
   * @param res_cnt resource value
   */
  change_role_res: (
    /** resource name */
    res_key: RoleResKey,
    /** resource value */
    res_cnt: Fixed,
  ) => void;

  /**
   * Set up player resources
   * @param res_key resource name
   * @param res_cnt resource value
   */
  set_role_res: (
    /** resource name */
    res_key: RoleResKey,
    /** resource value */
    res_cnt: Fixed,
  ) => void;

  /**
   * Get player resources
   * @param res_key resource name
   * @returns Fixed
   */
  get_role_res: (
    /** resource name */
    res_key: RoleResKey,
  ) => Fixed;

  /**
   * Set player group pathfinding strict mode
   * @param group_navigate_mode Enable group pathfinding strict mode
   */
  set_group_navigate_mode: (
    /** Enable group pathfinding strict mode */
    group_navigate_mode: boolean,
  ) => void;

  /**
   * Set integer parameter to player save field
   * @param index Player save field
   * @param value integer parameter
   */
  set_save_data_int_value: (
    /** Player save field */
    index: Int32,
    /** integer parameter */
    value: Int32,
  ) => void;

  /**
   * Set the real parameter to the player's save field
   * @param index Player save field
   * @param value real parameter
   */
  set_save_data_fixed_value: (
    /** Player save field */
    index: Int32,
    /** real parameter */
    value: Fixed,
  ) => void;

  /**
   * Set boolean parameter to player save field
   * @param index Player save field
   * @param value boolean parameter
   */
  set_save_data_bool_value: (
    /** Player save field */
    index: Int32,
    /** boolean parameter */
    value: boolean,
  ) => void;

  /**
   * Set string parameter to player save field
   * @param index Player save field
   * @param value String parameter
   */
  set_save_data_str_value: (
    /** Player save field */
    index: Int32,
    /** String parameter */
    value: string,
  ) => void;

  /**
   * Upload player save data
   */
  upload_save_data: () => void;

  /**
   * Download player save data
   */
  download_save_data: () => void;

  /**
   * Reset download archive data callback
   */
  reset_download_save_data_callback: () => void;

  /**
   * Read integer player save data
   * @param index Player save field
   * @returns Int32
   */
  get_save_data_int_value: (
    /** Player save field */
    index: Int32,
  ) => Int32;

  /**
   * Read real-number player save data
   * @param index Player save field
   * @returns Fixed
   */
  get_save_data_fixed_value: (
    /** Player save field */
    index: Int32,
  ) => Fixed;

  /**
   * Read boolean player save data
   * @param index Player save field
   * @returns boolean
   */
  get_save_data_bool_value: (
    /** Player save field */
    index: Int32,
  ) => boolean;

  /**
   * Read string type player save data
   * @param index Player save field
   * @returns string
   */
  get_save_data_str_value: (
    /** Player save field */
    index: Int32,
  ) => string;

  /**
   * Players use paid items
   * @param cnt quantity
   * @param no Charge item KEY
   */
  api_use_store_item: (
    /** quantity */
    cnt: UInt32,
    /** Charge item KEY */
    no: StoreKey,
  ) => void;

  /**
   * Get the number of paid items for players
   * @param no Charge item key
   * @returns UInt32
   */
  get_store_item_cnt: (
    /** Charge item key */
    no: StoreKey,
  ) => UInt32;

  /**
   * Whether the player has visibility of the unit
   * @param unit unit
   * @returns boolean
   */
  get_visibility_of_unit: (
    /** unit */
    unit: Unit,
  ) => boolean;

  /**
   * Modify player technology level
   * @param tech_no Tech number
   * @param delta_lv delta level
   */
  api_change_tech_level: (
    /** Tech number */
    tech_no: TechKey,
    /** delta level */
    delta_lv: Int32,
  ) => void;

  /**
   * Modify player technology level
   * @param tech_no Tech number
   * @param lv level
   */
  api_set_tech_level: (
    /** Tech number */
    tech_no: TechKey,
    /** level */
    lv: Int32,
  ) => void;

  /**
   * Get player tech level
   * @param tech_no Tech number
   * @returns UInt32
   */
  api_get_tech_level: (
    /** Tech number */
    tech_no: TechKey,
  ) => UInt32;

  /**
   * Whether the point is visible to the player
   * @param point Point
   * @returns boolean
   */
  is_point_visible_to_player: (
    /** Point */
    point: FPoint,
  ) => boolean;

  /**
   * Is the point in the fog
   * @param point Point
   * @returns boolean
   */
  is_point_in_fog: (
    /** Point */
    point: FPoint,
  ) => boolean;

  /**
   * whether the point is in black shadow
   * @param point Point
   * @returns boolean
   */
  is_point_in_shadow: (
    /** Point */
    point: FPoint,
  ) => boolean;

  /**
   * Get player status
   * @returns RoleStatus
   */
  get_role_status: () => RoleStatus;

  /**
   * Set whether the player is a hostile relationship
   * @param role player
   * @param is_enemy player
   */
  set_role_hostility: (
    /** player */
    role: Role,
    /** player */
    is_enemy: Role,
  ) => void;

  /**
   * Whether the player is an alliance
   * @param role player
   * @returns boolean
   */
  players_is_alliance: (
    /** player */
    role: Role,
  ) => boolean;

  /**
   * Whether the player is hostile
   * @param role player
   * @returns boolean
   */
  players_is_enemy: (
    /** player */
    role: Role,
  ) => boolean;

  /**
   * Original player opens vision to target player
   * @param role_2 player
   * @returns boolean
   */
  share_source_player_vision_to_target: (
    /** player */
    role_2: Role,
  ) => boolean;

  /**
   * The original player closes the field of view to the target player
   * @param role_2 player
   * @returns boolean
   */
  close_source_player_vision_to_target: (
    /** player */
    role_2: Role,
  ) => boolean;

  /**
   * The original unit opens sight to the target player
   * @param unit unit
   * @returns boolean
   */
  share_source_unit_vision_to_target: (
    /** unit */
    unit: Unit,
  ) => boolean;

  /**
   * The original unit closes vision to the target player
   * @param unit unit
   * @returns boolean
   */
  close_source_unit_vision_to_target: (
    /** unit */
    unit: Unit,
  ) => boolean;

  /**
   * Selected unit or unit group
   * @param unit_or_unit_groupd unit or unit group
   */
  role_select_unit: (
    /** unit or unit group */
    unit_or_unit_groupd: DynamicTypeMeta,
  ) => void;

  /**
   * On/off player mouse click
   * @param value on/off
   */
  set_role_mouse_left_click: (
    /** on/off */
    value: boolean,
  ) => void;

  /**
   * Turn on/off the box selection of the player's mouse
   * @param value on/off
   */
  set_role_mouse_move_select: (
    /** on/off */
    value: boolean,
  ) => void;

  /**
   * Turns the player's mouse wheel on/off
   * @param value on/off
   */
  set_role_mouse_wheel: (
    /** on/off */
    value: boolean,
  ) => void;
}
