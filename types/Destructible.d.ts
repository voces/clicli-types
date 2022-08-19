declare interface Destructible {
  /**
   * Move destructible to point
   * @param point point
   */
  api_transmit: (
    /** point */
    point: Point,
  ) => void;

  /**
   * kill destructibles
   * @param unit Killer unit
   */
  api_kill: (
    /** Killer unit */
    unit: Unit,
  ) => void;

  /**
   * deplete destructibles
   * @param unit acquisition unit
   */
  api_set_dest_dry: (
    /** acquisition unit */
    unit: Unit,
  ) => void;

  /**
   * remove destructibles
   */
  api_delete: () => void;

  /**
   * Revive Destructibles
   * @param point resurrection point
   */
  api_revivie: (
    /** resurrection point */
    point: Point,
  ) => void;

  /**
   * show hidden destructibles
   * @param is_show whether to show
   */
  api_show_hide: (
    /** whether to show */
    is_show: boolean,
  ) => void;

  /**
   * Set destructible health
   * @param hp_value health value
   */
  api_set_hp: (
    /** health value */
    hp_value: UInt64,
  ) => void;

  /**
   * Set destructible max health
   * @param hp_value max health
   */
  api_set_max_hp: (
    /** max health */
    hp_value: UInt64,
  ) => void;

  /**
   * Set the name of the destructible
   * @param name name
   */
  api_set_name: (
    /** name */
    name: string,
  ) => void;

  /**
   * Sets the amount of destructible resources
   * @param num Number of resources
   */
  api_set_source_num: (
    /** Number of resources */
    num: UInt64,
  ) => void;

  /**
   * Set the size of the destructible
   * @param x x size
   * @param y y size
   * @param z z size
   */
  api_set_scale: (
    /** x size */
    x: UInt64,
    /** y size */
    y: UInt64,
    /** z size */
    z: UInt64,
  ) => void;

  /**
   * Set the angle of the destructible
   * @param angle angle
   */
  api_set_face_angle: (
    /** angle */
    angle: UInt64,
  ) => void;

  /**
   * Get the integer property of the destructible
   * @param attr_name attribute name
   * @returns UInt32
   */
  api_get_int_attr: (
    /** attribute name */
    attr_name: string,
  ) => UInt32;

  /**
   * Get the number of the destructible object
   * @returns DestructibleKey
   */
  api_get_key: () => DestructibleKey;

  /**
   * Get the string property of the destructible
   * @param attr_name attribute name
   * @returns string
   */
  api_get_str_attr: (
    /** attribute name */
    attr_name: string,
  ) => string;

  /**
   * Set the string property of the destructible
   * @param attr_name attribute name
   * @param value attribute value
   */
  api_set_str_attr: (
    /** attribute name */
    attr_name: string,
    /** attribute value */
    value: string,
  ) => void;

  /**
   * Get the boolean property of the destructible
   * @param attr_name attribute name
   * @returns boolean
   */
  api_get_bool_attr: (
    /** attribute name */
    attr_name: string,
  ) => boolean;

  /**
   * Get the float property of the destructible
   * @param attr_name attribute name
   * @returns Fixed
   */
  api_get_float_attr: (
    /** attribute name */
    attr_name: string,
  ) => Fixed;

  /**
   * Get the faction id of the destructible object
   * @returns CampID
   */
  api_get_camp_id: () => CampID;

  /**
   * Get destructible location
   * @returns FVector3
   */
  api_get_position: () => FVector3;

  /**
   * Get the description of the destructible
   * @returns string
   */
  api_get_desc: () => string;

  /**
   * Get the id of the destructible
   */
  api_get_id: () => void;

  /**
   * Get the x-axis scaling of the destructible
   * @returns Float
   */
  api_get_x_scale: () => Float;

  /**
   * Get the y-axis scaling of the destructible
   * @returns Float
   */
  api_get_y_scale: () => Float;

  /**
   * Get the z-axis scaling of the destructible
   * @returns Float
   */
  api_get_z_scale: () => Float;

  /**
   * Get the rotation angle of the destructible
   * @returns Float
   */
  api_get_angle: () => Float;

  /**
   * Get the destructible model
   * @returns ModelKey
   */
  api_get_dest_model: () => ModelKey;
}
