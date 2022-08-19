declare interface Item {
  /**
   * Get item number
   * @returns ItemKey
   */
  api_get_key: () => ItemKey;

  /**
   * set item name
   * @param name item name
   */
  set_name: (
    /** item name */
    name: string,
  ) => void;

  /**
   * get item name
   * @returns string
   */
  get_name: () => string;

  /**
   * Get item configuration name
   * @returns string
   */
  api_get_conf_name: () => string;

  /**
   * set item description
   * @param desc item description
   */
  api_set_desc: (
    /** item description */
    desc: string,
  ) => void;

  /**
   * Get item description
   * @returns string
   */
  api_get_desc: () => string;

  /**
   * Get item configuration description
   * @returns string
   */
  api_get_conf_desc: () => string;

  /**
   * Get item type
   * @returns UInt32
   */
  api_get_type: () => UInt32;

  /**
   * Get item level
   * @returns UInt32
   */
  api_get_level: () => UInt32;

  /**
   * Set item level
   * @param level level
   */
  api_set_level: (
    /** level */
    level: UInt32,
  ) => void;

  /**
   * discarded items
   * @param pos point
   * @param stack_cnt number
   */
  api_drop_self: (
    /** point */
    pos: FPoint,
    /** number */
    stack_cnt: Actor | null,
  ) => void;

  /**
   * Remove items from units
   */
  api_remove: () => void;

  /**
   * Set up items for sale
   * @param sale_state Available for sale
   */
  api_set_sale_state: (
    /** Available for sale */
    sale_state: boolean,
  ) => void;

  /**
   * Set the number of item stacks
   * @param stack_cnt number of stacks
   */
  api_set_stack_cnt: (
    /** number of stacks */
    stack_cnt: Int32,
  ) => void;

  /**
   * Set item charge count
   * @param charge_cnt number of charges
   */
  api_set_charge_cnt: (
    /** number of charges */
    charge_cnt: Int32,
  ) => void;

  /**
   * Set the maximum number of charges for an item
   * @param max_charge maximum number of charges
   */
  api_set_max_charge: (
    /** maximum number of charges */
    max_charge: Int32,
  ) => void;

  /**
   * Get item location
   * @returns Point
   */
  api_get_position: () => Point;

  /**
   * Whether the item is in the scene
   * @returns boolean
   */
  api_is_in_scene: () => boolean;

  /**
   * Get item stack count
   * @returns UInt32
   */
  api_get_stack_cnt: () => UInt32;

  /**
   * Get item stack type
   * @returns UInt32
   */
  api_get_stack_type: () => UInt32;

  /**
   * Get item charge
   * @returns UInt32
   */
  api_get_charge_cnt: () => UInt32;

  /**
   * Get item charge
   * @returns UInt32
   */
  api_get_max_charge: () => UInt32;

  /**
   * set item drop
   * @param can_drop Can drop
   */
  api_set_droppable: (
    /** Can drop */
    can_drop: boolean,
  ) => void;

  /**
   * Set up items for sale
   * @param can_sell Can discard
   */
  api_set_sellable: (
    /** Can discard */
    can_sell: boolean,
  ) => void;

  /**
   * Set item health
   * @param hp health
   */
  api_set_hp: (
    /** health */
    hp: Float,
  ) => void;

  /**
   * get item discard
   * @returns boolean
   */
  api_get_droppable: () => boolean;

  /**
   * Get items for sale
   * @returns boolean
   */
  api_get_sellable: () => boolean;

  /**
   * Get item health
   * @returns Fixed
   */
  api_get_hp: () => Fixed;

  /**
   * Set additional properties of items
   * @param attr_element_field attribute name
   * @param attr_key attribute component name
   * @param val property value
   */
  api_set_attr: (
    /** attribute name */
    attr_element_field: string,
    /** attribute component name */
    attr_key: string,
    /** property value */
    val: Float,
  ) => void;

  /**
   * Add additional attributes to items
   * @param attr_element_field attribute name
   * @param attr_key attribute component name
   * @param delta attribute value
   */
  api_change_attr: (
    /** attribute name */
    attr_element_field: string,
    /** attribute component name */
    attr_key: string,
    /** attribute value */
    delta: Float,
  ) => void;

  /**
   * Get additional attributes of items
   * @param attr_element_field attribute element name
   * @param attr_key attribute name
   * @returns Float
   */
  api_get_attr: (
    /** attribute element name */
    attr_element_field: string,
    /** attribute name */
    attr_key: string,
  ) => Float;

  /**
   * set item owner
   * @param creator owner
   */
  api_set_creator: (
    /** owner */
    creator: Role,
  ) => void;

  /**
   * get item owner
   * @returns Role
   */
  api_get_creator: () => Role;

  /**
   * get item owner
   * @returns Unit
   */
  api_get_owner: () => Unit;

  /**
   * Add item stack count
   * @param cnt number of stacks
   */
  api_add_stack: (
    /** number of stacks */
    cnt: Int32,
  ) => void;

  /**
   * Added item charge
   * @param cnt number of charges
   */
  api_add_charge: (
    /** number of charges */
    cnt: Int32,
  ) => void;

  /**
   * Get item zoom
   * @returns Fixed
   */
  api_get_scale: () => Fixed;

  /**
   * Get item orientation
   * @returns Fixed
   */
  api_get_face_angle: () => Fixed;

  /**
   * Set item scaling
   * @param scale scale
   */
  api_set_scale: (
    /** scale */
    scale: Float,
  ) => void;

  /**
   * Set item location
   * @param point item position
   */
  api_set_position: (
    /** item position */
    point: Point,
  ) => void;

  /**
   * set item orientation
   * @param face_angle item facing
   */
  api_set_face_angle: (
    /** item facing */
    face_angle: Float,
  ) => void;

  /**
   * Is it in the area
   * @param area area
   * @returns boolean
   */
  api_is_in_area: (
    /** area */
    area: Area,
  ) => boolean;

  /**
   * move item to point
   * @param point point
   */
  api_transmit: (
    /** point */
    point: Point,
  ) => void;

  /**
   * add tags to items
   * @param tag tag
   */
  api_add_tag: (
    /** tag */
    tag: string,
  ) => void;

  /**
   * item removal tag
   * @param tag tag
   */
  api_remove_tag: (
    /** tag */
    tag: string,
  ) => void;

  /**
   * Whether the item has a tag
   * @param tag tag
   * @returns boolean
   */
  api_has_tag: (
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * item removal key-value pair
   * @param k key to remove
   */
  api_remove_kv: (
    /** key to remove */
    k: string,
  ) => void;

  /**
   * Get the corresponding entity of the item in the scene
   * @returns Unit
   */
  api_get_item_unit: () => Unit;

  /**
   * get item id
   */
  api_get_id: () => void;

  /**
   * Whether the item is in the inventory
   * @returns boolean
   */
  api_is_in_bar: () => boolean;

  /**
   * Whether the item is in the inventory slot
   * @returns boolean
   */
  api_is_in_pkg: () => boolean;
}
