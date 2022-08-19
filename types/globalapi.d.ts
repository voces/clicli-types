declare const globalapi: {
  /**
   * Determine whether the actor has a tag.
   * @param actor Actor
   * @param tag Tag
   * @returns boolean
   */
  has_tag: (
    /** Actor */
    actor: Actor,
    /** Tag */
    tag: string,
  ) => boolean;

  /**
   * Filter to return a list of actors with tags.
   * @param actor_list Actor list
   * @param tag Tag
   * @returns ActorList
   */
  filter_by_tag: (
    /** Actor list */
    actor_list: ActorList,
    /** Tag */
    tag: string,
  ) => ActorList;

  /**
   * Filter to return a list of actors with equal integer key values.
   * @param actor_list Actor list
   * @param key key
   * @param value value
   * @returns ActorList
   */
  filter_by_int_kv: (
    /** Actor list */
    actor_list: ActorList,
    /** key */
    key: string,
    /** value */
    value: Int32,
  ) => ActorList;

  /**
   * Filter to return a list of actors with equal Boolean key values.
   * @param actor_list Actor list
   * @param key key
   * @param value value
   * @returns ActorList
   */
  filter_by_bool_kv: (
    /** Actor list */
    actor_list: ActorList,
    /** key */
    key: string,
    /** value */
    value: boolean,
  ) => ActorList;

  /**
   * Filter to return a list of actors with equal string key values.
   * @param actor_list Actor list
   * @param key key
   * @param value value
   * @returns ActorList
   */
  filter_by_str_kv: (
    /** Actor list */
    actor_list: ActorList,
    /** key */
    key: string,
    /** value */
    value: string,
  ) => ActorList;

  /**
   * Filter to return a list of actors with equal fixed-point key values.
   * @param actor_list Actor list
   * @param key key
   * @param value value
   * @returns ActorList
   */
  filter_by_fixed_kv: (
    /** Actor list */
    actor_list: ActorList,
    /** key */
    key: string,
    /** value */
    value: Fixed,
  ) => ActorList;

  /**
   * Set the actor’s trigger enabled.
   * @param actor Actor
   * @param trigger_id Trigger ID
   * @param enabled Enabled
   */
  set_actor_trigger_enabled: (
    /** Actor */
    actor: Actor,
    /** Trigger ID */
    trigger_id: TriggerID,
    /** Enabled */
    enabled: boolean,
  ) => void;

  /**
   * Restart the actor’s trigger.
   * @param actor actor
   * @param trigger_id Trigger ID
   */
  restart_actor_trigger_enabled: (
    /** actor */
    actor: Actor,
    /** Trigger ID */
    trigger_id: TriggerID,
  ) => void;

  /**
   * Trigger the actor’s trigger.
   * @param actor actor
   * @param trigger_id Trigger ID
   */
  trigger_actor_trigger: (
    /** actor */
    actor: Actor,
    /** Trigger ID */
    trigger_id: TriggerID,
  ) => void;

  /**
   * Register the actor’s trigger and make it valid.
   * @param actor actor
   * @param conf_id Trigger configuration ID
   * @param context Context
   * @returns DynamicTriggerInstance
   */
  reg_actor_trigger: (
    /** actor */
    actor: Actor,
    /** Trigger configuration ID */
    conf_id: TriggerID,
    /** Context */
    context: Dict,
  ) => DynamicTriggerInstance;

  /**
   * Remove the actor’s trigger.
   * @param actor actor
   * @param trigger_id Dynamic trigger instance
   */
  unreg_actor_trigger: (
    /** actor */
    actor: Actor,
    /** Dynamic trigger instance */
    trigger_id: DynamicTriggerInstance,
  ) => void;

  /**
   * Subtract two points to get a vector.
   * @param point1 Coordinates
   * @param point2 Coordinates
   * @returns FVector3
   */
  point_subtract_point: (
    /** Coordinates */
    point1: FVector3,
    /** Coordinates */
    point2: FVector3,
  ) => FVector3;

  /**
   * Rotate the vector by a specified angle.
   * @param vector Vector
   * @param angle Angle
   * @returns FVector3
   */
  vector_rotate_angle: (
    /** Vector */
    vector: FVector3,
    /** Angle */
    angle: Fixed,
  ) => FVector3;

  /**
   * Create a sector.
   * @param radius Radius
   * @param angle Angle
   * @param yaw Yaw
   * @returns Shape
   */
  create_sector_shape: (
    /** Radius */
    radius: Fixed,
    /** Angle */
    angle: Fixed,
    /** Yaw */
    yaw: Float,
  ) => Shape;

  /**
   * Create a circle.
   * @param radius Radius
   * @returns Shape
   */
  create_circular_shape: (
    /** Radius */
    radius: Fixed,
  ) => Shape;

  /**
   * Create a rectangle.
   * @param width Width
   * @param length Length
   * @param yaw Yaw
   * @returns Shape
   */
  create_rectangle_shape: (
    /** Width */
    width: Fixed,
    /** Length */
    length: Fixed,
    /** Yaw */
    yaw: Float,
  ) => Shape;

  /**
   * Create an annulus.
   * @param small_r Radius of the smaller circle
   * @param big_r Radius of the larger circle
   * @returns Shape
   */
  create_annular_shape: (
    /** Radius of the smaller circle */
    small_r: Fixed,
    /** Radius of the larger circle */
    big_r: Fixed,
  ) => Shape;

  /**
   * Convert coordinate values to FVector3.
   * @param x x
   * @param z y
   * @param y z
   * @returns FVector3
   */
  coord_to_point: (
    /** x */
    x: Fixed,
    /** y */
    z: Fixed,
    /**
     * z
     * @defaultValue `Fix32(0.0)`
     */
    y: Fixed | null,
  ) => FVector3;

  /**
   * Integer iterator with the maximum number of iterations not exceeding 2^20.
   * @param num Number of iterations
   * @returns Int32Iterator
   */
  int_iterator: (
    /** Number of iterations */
    num: Int32,
  ) => Int32Iterator;

  /**
   * Integer iterator.
   * @param start Start iterating from”start”
   * @param stop Stop iterating at”stop”
   * @param step Step length
   * @returns Int32Iterator
   */
  int_iterator2: (
    /** Start iterating from”start” */
    start: Int32,
    /** Stop iterating at”stop” */
    stop: Int32,
    /** Step length */
    step: Int32,
  ) => Int32Iterator;

  /**
   * List iterator.
   * @param l List
   * @returns PyIterator
   */
  list_iterator: (
    /** List */
    l: List,
  ) => PyIterator;

  /**
   * List index iterator.
   * @param l List
   * @returns PyIterator
   */
  list_index_iterator: (
    /** List */
    l: List,
  ) => PyIterator;

  /**
   * Int32 arithmetic operation.
   * @param v1 x
   * @param op operator(+,-,*,/,%)
   * @param v2 y
   * @returns Int32
   */
  int32_arithmetic_operation: (
    /** x */
    v1: Int32,
    /** operator(+,-,*,/,%) */
    op: string,
    /** y */
    v2: Int32,
  ) => Int32;

  /**
   * Automatically increment by 1 for int32.
   * @param int_value x
   * @returns Int32
   */
  int32_plus_one: (
    /** x */
    int_value: Int32,
  ) => Int32;

  /**
   * Get the smaller of two 32-bit integers.
   * @param int_value1 x1
   * @param int_value2 x2
   * @returns Int32
   */
  int32_min: (
    /** x1 */
    int_value1: Int32,
    /** x2 */
    int_value2: Int32,
  ) => Int32;

  /**
   * Get the larger of two 32-bit integers.
   * @param int_value1 x1
   * @param int_value2 x2
   * @returns Int32
   */
  int32_max: (
    /** x1 */
    int_value1: Int32,
    /** x2 */
    int_value2: Int32,
  ) => Int32;

  /**
   * Get the point offset to the vector.
   * @param point Starting point
   * @param angle Angle
   * @param dis Distance
   * @returns FVector3
   */
  get_point_offset_vector: (
    /** Starting point */
    point: FVector3,
    /** Angle */
    angle: Fixed,
    /** Distance */
    dis: Fixed,
  ) => FVector3;

  /**
   * Convert int8 to string.
   * @param val Value
   * @returns string
   */
  int8_to_str: (
    /** Value */
    val: Int8,
  ) => string;

  /**
   * Convert int16 to string.
   * @param val Value
   * @returns string
   */
  int16_to_str: (
    /** Value */
    val: Int16,
  ) => string;

  /**
   * Convert int32 to string.
   * @param val Value
   * @returns string
   */
  int32_to_str: (
    /** Value */
    val: Int32,
  ) => string;

  /**
   * Convert int64 to string.
   * @param val Value
   * @returns string
   */
  int64_to_str: (
    /** Value */
    val: Int64,
  ) => string;

  /**
   * Convert uint8 to string.
   * @param val Value
   * @returns string
   */
  uint8_to_str: (
    /** Value */
    val: UInt8,
  ) => string;

  /**
   * Convert uint16 to string.
   * @param val Value
   * @returns string
   */
  uint16_to_str: (
    /** Value */
    val: UInt16,
  ) => string;

  /**
   * Convert uint32 to string.
   * @param val Value
   * @returns string
   */
  uint32_to_str: (
    /** Value */
    val: UInt32,
  ) => string;

  /**
   * Convert uint64 to string.
   * @param val Value
   * @returns string
   */
  uint64_to_str: (
    /** Value */
    val: UInt64,
  ) => string;

  /**
   * Delete key-value pair.
   * @param kvbase Key-value pair container
   * @param key Key
   */
  api_remove_kv: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => void;

  /**
   * Get image-type key-value pair.
   * @param kvbase Key-value pair container
   * @param k Key
   * @param v Value
   */
  add_texture_kv: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    k: string,
    /** Value */
    v: Texture,
  ) => void;

  /**
   * Get the number of unit IDs in the unit ID pool.
   * @param pool Unit ID pool
   * @returns Int32
   */
  get_unit_key_pool_num: (
    /** Unit ID pool */
    pool: UnitKeyPool,
  ) => Int32;

  /**
   * Distance between two points.
   * @param p1 Target point
   * @param p2 Starting point
   * @returns Fixed
   */
  plane_range_between_2_point: (
    /** Target point */
    p1: FPoint,
    /** Starting point */
    p2: FPoint,
  ) => Fixed;

  /**
   * Convert integer to fixed-point number.
   * @param i Integer
   * @returns Fixed
   */
  i2fixed: (
    /** Integer */
    i: Int32,
  ) => Fixed;

  /**
   * Convert fixed-point number to integer.
   * @param f Fixed-point number
   * @returns Int32
   */
  fixed2i: (
    /** Fixed-point number */
    f: Fixed,
  ) => Int32;

  /**
   * Convert 32-bit integer to fixed-point number.
   * @param i Integer
   * @returns Fixed
   */
  int32_to_fixed: (
    /** Integer */
    i: Int32,
  ) => Fixed;

  /**
   * Convert fixed-point number to 32-bit integer.
   * @param f Fixed-point number
   * @returns Int32
   */
  fixed_to_int32: (
    /** Fixed-point number */
    f: Fixed,
  ) => Int32;

  /**
   * Convert 32-bit integer to floating-point number.
   * @param i Integer
   * @returns Float
   */
  int32_to_float: (
    /** Integer */
    i: Int32,
  ) => Float;

  /**
   * Convert floating-point number to 32-bit integer.
   * @param f Floating-point number
   * @returns Int32
   */
  float_to_int32: (
    /** Floating-point number */
    f: Float,
  ) => Int32;

  /**
   * Convert ability slot to 32-bit integer.
   * @param ability_index Ability slot
   * @returns Int32
   */
  ability_index_to_int32: (
    /** Ability slot */
    ability_index: AbilityIndex,
  ) => Int32;

  /**
   * Convert fixed-point number to string.
   * @param f Fixed-point number
   * @returns string
   */
  fixed_to_str: (
    /** Fixed-point number */
    f: Fixed,
  ) => string;

  /**
   * Convert fixed-point FVectors3 to string.
   * @param f FVector3
   * @returns string
   */
  fvector3_to_str: (
    /** FVector3 */
    f: FVector3,
  ) => string;

  /**
   * Convert fixed-point FVector2 to string.
   * @param f FVector2
   * @returns string
   */
  fvector2_to_str: (
    /** FVector2 */
    f: FVector2,
  ) => string;

  /**
   * Convert floating-point number to string.
   * @param f Floating-point number
   * @returns string
   */
  float_to_str: (
    /** Floating-point number */
    f: Float,
  ) => string;

  /**
   * Convert floating-point Vector3 to string.
   * @param f Vector3
   * @returns string
   */
  vector3_to_str: (
    /** Vector3 */
    f: Vector3,
  ) => string;

  /**
   * Convert floating-point Vector2 to string.
   * @param f Vector2
   * @returns string
   */
  vector2_to_str: (
    /** Vector2 */
    f: Vector2,
  ) => string;

  /**
   * Convert shape to string.
   * @param f Shape
   * @returns string
   */
  shape_to_str: (
    /** Shape */
    f: Shape,
  ) => string;

  /**
   * Convert dynamic number to string.
   * @param f Dynamic type
   * @returns string
   */
  dynamic_to_str: (
    /** Dynamic type */
    f: DynamicTypeMeta,
  ) => string;

  /**
   * Convert Boolean to string.
   * @param f Boolean value
   * @returns string
   */
  bool_to_str: (
    /** Boolean value */
    f: boolean,
  ) => string;

  /**
   * Convert integer to string.
   * @param i Integer value
   * @returns string
   */
  i2s: (
    /** Integer value */
    i: Int32,
  ) => string;

  /**
   * Splice strings.
   * @param s1 String
   * @param s2 String
   * @returns string
   */
  join_s: (
    /** String */
    s1: string,
    /** String */
    s2: string,
  ) => string;

  /**
   * Arithmetic operation of fixed-point numbers.
   * @param a x
   * @param o operator(+,-*,/)
   * @param b y
   * @returns Fixed
   */
  fixed_arithmetic_operation: (
    /** x */
    a: Fixed,
    /** operator(+,-*,/) */
    o: string,
    /** y */
    b: Fixed,
  ) => Fixed;

  /**
   * Automatically increment by 1 for fixed-point numbers.
   * @param fix_value x
   * @returns Fixed
   */
  fixed_plus_one: (
    /** x */
    fix_value: Fixed,
  ) => Fixed;

  /**
   * Get the minimum value between two fixed-point numbers.
   * @param fix_value1 x1
   * @param fix_value2 x2
   * @returns Fixed
   */
  fixed_min: (
    /** x1 */
    fix_value1: Fixed,
    /** x2 */
    fix_value2: Fixed,
  ) => Fixed;

  /**
   * Get the maximum value between two fixed-point numbers.
   * @param fix_value1 x1
   * @param fix_value2 x2
   * @returns Fixed
   */
  fixed_max: (
    /** x1 */
    fix_value1: Fixed,
    /** x2 */
    fix_value2: Fixed,
  ) => Fixed;

  /**
   * Arithmetic operation of floating-point numbers.
   * @param a x
   * @param o operator(+,-*,/)
   * @param b y
   * @returns Float
   */
  float_arithmetic_operation: (
    /** x */
    a: Float,
    /** operator(+,-*,/) */
    o: string,
    /** y */
    b: Float,
  ) => Float;

  /**
   * Convert degree to radian.
   * @param d Degree
   * @returns Fixed
   */
  degree_to_radian: (
    /** Degree */
    d: Fixed,
  ) => Fixed;

  /**
   * Convert radian to degree.
   * @param r Radian
   * @returns Fixed
   */
  radian_to_degree: (
    /** Radian */
    r: Fixed,
  ) => Fixed;

  /**
   * Sin.
   * @param r Radian
   * @returns Fixed
   */
  radian_sin: (
    /** Radian */
    r: Fixed,
  ) => Fixed;

  /**
   * Cos.
   * @param r Radian
   * @returns Fixed
   */
  radian_cos: (
    /** Radian */
    r: Fixed,
  ) => Fixed;

  /**
   * Tan.
   * @param r Radian
   * @returns Fixed
   */
  radian_tan: (
    /** Radian */
    r: Fixed,
  ) => Fixed;

  /**
   * Arcsin.
   * @param r Fixed-point number
   * @returns Fixed
   */
  radian_asin: (
    /** Fixed-point number */
    r: Fixed,
  ) => Fixed;

  /**
   * Arccos.
   * @param r Fixed-point number
   * @returns Fixed
   */
  radian_acos: (
    /** Fixed-point number */
    r: Fixed,
  ) => Fixed;

  /**
   * Arctan.
   * @param r Fixed-point number
   * @returns Fixed
   */
  radian_atan: (
    /** Fixed-point number */
    r: Fixed,
  ) => Fixed;

  /**
   * Arctan (Y:X).
   * @param y Fixed-point number
   * @param x Fixed-point number
   * @returns Fixed
   */
  radian_atan_x_y: (
    /** Fixed-point number */
    y: Fixed,
    /** Fixed-point number */
    x: Fixed,
  ) => Fixed;

  /**
   * Square root.
   * @param x Fixed-point number
   * @returns Fixed
   */
  sqrt: (
    /** Fixed-point number */
    x: Fixed,
  ) => Fixed;

  /**
   * Request power.
   * @param f Fixed-point number
   * @param n Integer
   * @returns Fixed
   */
  pow: (
    /** Fixed-point number */
    f: Fixed,
    /** Integer */
    n: Int32,
  ) => Fixed;

  /**
   * Request modulus.
   * @param f Fixed-point number
   * @returns Fixed
   */
  abs: (
    /** Fixed-point number */
    f: Fixed,
  ) => Fixed;

  /**
   * Whether they are approximate.
   * @param x Fixed-point number
   * @param y Fixed-point number
   * @param p Fixed-point number
   * @returns boolean
   */
  is_approximate: (
    /** Fixed-point number */
    x: Fixed,
    /** Fixed-point number */
    y: Fixed,
    /** Fixed-point number */
    p: Fixed,
  ) => boolean;

  /**
   * Interval.
   * @param x0 Fixed-point number
   * @param x1 Fixed-point number
   * @param x2 Fixed-point number
   * @returns Fixed
   */
  interval: (
    /** Fixed-point number */
    x0: Fixed,
    /** Fixed-point number */
    x1: Fixed,
    /** Fixed-point number */
    x2: Fixed,
  ) => Fixed;

  /**
   * Find the nearest square number.
   * @param x Fixed-point number
   * @returns Int32
   */
  nearest_quadratic_number: (
    /** Fixed-point number */
    x: Fixed,
  ) => Int32;

  /**
   * Acute angle between two vectors.
   * @param vector1 Vector
   * @param vector2 Vector
   * @returns Fixed
   */
  degree_between_vectors: (
    /** Vector */
    vector1: Vector2,
    /** Vector */
    vector2: Vector2,
  ) => Fixed;

  /**
   * Min integer.
   * @param f Fixed-point number
   * @returns Int32
   */
  ceil: (
    /** Fixed-point number */
    f: Fixed,
  ) => Int32;

  /**
   * Max integer.
   * @param f Fixed-point number
   * @returns Int32
   */
  floor: (
    /** Fixed-point number */
    f: Fixed,
  ) => Int32;

  /**
   * Whether it is a quadratic number.
   * @param x Fixed-point number
   * @returns boolean
   */
  is_quadratic_number: (
    /** Fixed-point number */
    x: Fixed,
  ) => boolean;

  /**
   * Interpolation.
   * @param x_from Fixed-point number
   * @param x_to Fixed-point number
   * @param t Fixed-point number
   * @returns Fixed
   */
  interpolate: (
    /** Fixed-point number */
    x_from: Fixed,
    /** Fixed-point number */
    x_to: Fixed,
    /** Fixed-point number */
    t: Fixed,
  ) => Fixed;

  /**
   * Inverse interpolation.
   * @param x_from Fixed-point number
   * @param x_to Fixed-point number
   * @param res_val Fixed-point number
   * @returns Fixed
   */
  invert_interpolate: (
    /** Fixed-point number */
    x_from: Fixed,
    /** Fixed-point number */
    x_to: Fixed,
    /** Fixed-point number */
    res_val: Fixed,
  ) => Fixed;

  /**
   * Log10.
   * @param x Fixed-point number
   * @returns Fixed
   */
  log10: (
    /** Fixed-point number */
    x: Fixed,
  ) => Fixed;

  /**
   * Log.
   * @param x1 Fixed-point number
   * @param x2 Fixed-point number
   * @returns Fixed
   */
  log: (
    /** Fixed-point number */
    x1: Fixed,
    /** Fixed-point number */
    x2: Fixed,
  ) => Fixed;

  /**
   * Return the maximum value in the list.
   * @param l List
   * @returns Fixed
   */
  get_max_in_list: (
    /** List */
    l: List,
  ) => Fixed;

  /**
   * Return the minimum value in the list.
   * @param l List
   * @returns Fixed
   */
  get_min_in_list: (
    /** List */
    l: List,
  ) => Fixed;

  /**
   * Round.
   * @param x Fixed-point number
   * @returns Fixed
   */
  round: (
    /** Fixed-point number */
    x: Fixed,
  ) => Fixed;

  /**
   * Return positive/negative sign.
   * @param f Fixed-point number
   * @returns Fixed
   */
  sign: (
    /** Fixed-point number */
    f: Fixed,
  ) => Fixed;

  /**
   * Trigonometric function operations of fixed-point numbers.
   * @param o method(sin,cos,tan)
   * @param a Fixed-point number
   * @returns Fixed
   */
  fixed_trigonometric_operation: (
    /** method(sin,cos,tan) */
    o: string,
    /** Fixed-point number */
    a: Fixed,
  ) => Fixed;

  /**
   * Trigonometric function operations of floating-point numbers.
   * @param o method(sin,cos,tan)
   * @param a Floating-point number
   * @returns Float
   */
  float_trigonometric_operation: (
    /** method(sin,cos,tan) */
    o: string,
    /** Floating-point number */
    a: Float,
  ) => Float;

  /**
   * Convert vector to degree-measured fixed-point number.
   * @param vec Vector
   * @returns Fixed
   */
  vector_to_angle: (
    /** Vector */
    vec: FVector3,
  ) => Fixed;

  /**
   * Convert degree-measured fixed-point number to vector.
   * @param angle Fixed-point number
   * @returns FVector3
   */
  angle_to_vector: (
    /** Fixed-point number */
    angle: Fixed,
  ) => FVector3;

  /**
   * Construct the vector of fixed-point numbers.
   * @param x Fixed-point number
   * @param y Fixed-point number
   * @param z Fixed-point number
   */
  fixed_to_vector: (
    /** Fixed-point number */
    x: Fixed,
    /** Fixed-point number */
    y: Fixed,
    /** Fixed-point number */
    z: Fixed,
  ) => void;

  /**
   * Convert angle to radian.
   * @param angle Angle
   * @returns Fixed
   */
  angle_to_radius: (
    /** Angle */
    angle: Fixed,
  ) => Fixed;

  /**
   * Convert radian to angle.
   * @param radius Radian
   * @returns Fixed
   */
  radius_to_angle: (
    /** Radian */
    radius: Fixed,
  ) => Fixed;

  /**
   * Get the number of players in the player group.
   * @param player_group Player group
   * @returns Int32
   */
  get_player_group_num: (
    /** Player group */
    player_group: RoleGroup,
  ) => Int32;

  /**
   * Get Actor-associated abilities.
   * @param actor Actor
   * @returns Ability
   */
  get_related_ability: (
    /** Actor */
    actor: Actor,
  ) => Ability;

  /**
   * Add timer to Actor.
   * @param actor actor
   * @param name Name of timer
   * @param once String
   * @param interval Fixed-point number
   * @param context Dictionary
   */
  add_actor_timer: (
    /** actor */
    actor: Actor,
    /** Name of timer */
    name: string,
    /** String */
    once: string,
    /** Fixed-point number */
    interval: Fixed,
    /** Dictionary */
    context: Dict,
  ) => void;

  /**
   * Stop Actor’s timer.
   * @param actor actor
   * @param name String
   */
  stop_actor_timer: (
    /** actor */
    actor: Actor,
    /** String */
    name: string,
  ) => void;

  /**
   * Get one of FVector3 values.
   * @param point FVector3
   * @param index Index (0-2)
   * @returns Fixed
   */
  get_fixed_coord_index: (
    /** FVector3 */
    point: FVector3,
    /** Index (0-2) */
    index: Int32,
  ) => Fixed;

  /**
   * Get one of Vector3 values.
   * @param point Vector3
   * @param index Index (0-2)
   * @returns Float
   */
  get_float_coord_index: (
    /** Vector3 */
    point: Vector3,
    /** Index (0-2) */
    index: Int32,
  ) => Float;

  /**
   * Get one of Vector2 values.
   * @param point Floating-point Vector2
   * @param index Index (0-1)
   * @returns Float
   */
  get_float_2_index: (
    /** Floating-point Vector2 */
    point: Vector2,
    /** Index (0-1) */
    index: Int32,
  ) => Float;

  /**
   * Clear group.
   * @param list1 List
   */
  clear_group: (
    /** List */
    list1: List,
  ) => void;

  /**
   * Assign the value of the second list to the first list without changing the length of the first one.
   * @param list1 List
   * @param list2 List
   */
  set_list_with_length: (
    /** List */
    list1: List,
    /** List */
    list2: List,
  ) => void;

  /**
   * Determine whether the player is in the player group.
   * @param role Player
   * @param group Player group
   * @returns boolean
   */
  judge_role_in_group: (
    /** Player */
    role: Role,
    /** Player group */
    group: RoleGroup,
  ) => boolean;

  /**
   * Determine whether the unit is alive.
   * @param unit Unit
   * @returns boolean
   */
  is_unit_alive: (
    /** Unit */
    unit: Unit | null,
  ) => boolean;

  /**
   * Get the empty unit ID pool.
   * @returns UnitKeyPool
   */
  get_empty_unit_key_pool: () => UnitKeyPool;

  /**
   * Get the starting point of the path.
   * @param road_point Path
   * @returns FPoint
   */
  get_route_start: (
    /** Path */
    road_point: Road,
  ) => FPoint;

  /**
   * Get the ending point of the path.
   * @param road_point Path
   * @returns FPoint
   */
  get_route_end: (
    /** Path */
    road_point: Road,
  ) => FPoint;

  /**
   * Get some point in path.
   * @param road_point_list Path
   * @param index Subscript
   * @returns FPoint
   */
  get_point_in_route: (
    /** Path */
    road_point_list: Road,
    /** Subscript */
    index: UInt32,
  ) => FPoint;

  /**
   * Get the nearest point from [point] in path.
   * @param road Path
   * @param pt Selected point
   * @returns FVector3
   */
  get_point_nearest_road_list: (
    /** Path */
    road: Road,
    /** Selected point */
    pt: FPoint,
  ) => FVector3;

  /**
   * Get the point rotating around Y-axis (degrees).
   * @param point Point
   * @param angle Rotation
   * @returns FPoint
   */
  get_point_rotate_y: (
    /** Point */
    point: FPoint,
    /** Rotation */
    angle: Fixed,
  ) => FPoint;

  /**
   * Convert string to integer.
   * @param s String
   * @returns Int32
   */
  str_to_int: (
    /** String */
    s: string,
  ) => Int32;

  /**
   * Convert string to fixed-point number.
   * @param s String
   * @returns Fixed
   */
  str_to_fixed: (
    /** String */
    s: string,
  ) => Fixed;

  /**
   * Delete substring.
   * @param str1 Original string
   * @param sub_str Substring
   * @param only_one One time only
   * @returns string
   */
  delete_sub_str: (
    /** Original string */
    str1: string,
    /** Substring */
    sub_str: string,
    /** One time only */
    only_one: boolean,
  ) => string;

  /**
   * Slice substring.
   * @param str1 Original string
   * @param index1 Left subscript
   * @param index2 Right subscript
   * @returns string
   */
  extract_str: (
    /** Original string */
    str1: string,
    /** Left subscript */
    index1: Int32,
    /** Right subscript */
    index2: Int32,
  ) => string;

  /**
   * Get the length of the string.
   * @param str1 String
   * @returns Int32
   */
  length_of_str: (
    /** String */
    str1: string,
  ) => Int32;

  /**
   * Unify upper/lower case for string.
   * @param str1 Original string
   * @param is_upper Whether they are uppercase
   * @returns string
   */
  str_to_upper_lower: (
    /** Original string */
    str1: string,
    /** Whether they are uppercase */
    is_upper: boolean,
  ) => string;

  /**
   * Position of substring.
   * @param str1 Original string
   * @param sub_str Substring
   * @returns Int32
   */
  pos_in_str: (
    /** Original string */
    str1: string,
    /** Substring */
    sub_str: string,
  ) => Int32;
};
