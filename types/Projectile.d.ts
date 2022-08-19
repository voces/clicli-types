declare interface Projectile {
  /**
   * Projectile itself object
   * @returns Unit
   */
  api_get_self: () => Unit;

  /**
   * projectile number
   * @returns ProjectileKey
   */
  api_get_key: () => ProjectileKey;

  /**
   * projectile generator
   * @returns Unit
   */
  api_get_owner: () => Unit;

  /**
   * projectile target object
   * @returns Unit
   */
  api_get_target: () => Unit;

  /**
   * destroy projectile object
   * @param unit Destroyed projectile object
   */
  api_delete: (
    /** Destroyed projectile object */
    unit: Unit | null,
  ) => void;

  /**
   * Set projectile position
   * @param point Projectile position
   */
  api_set_position: (
    /** Projectile position */
    point: Point,
  ) => void;

  /**
   * Set projectile orientation
   * @param face_angle Projectile facing
   */
  api_set_face_angle: (
    /** Projectile facing */
    face_angle: Float,
  ) => void;

  /**
   * Set projectile rotation
   * @param x x-axis rotation
   * @param y y-axis rotation
   * @param z z-axis rotation
   */
  api_set_rotation: (
    /** x-axis rotation */
    x: Float,
    /** y-axis rotation */
    y: Float,
    /** z-axis rotation */
    z: Float,
  ) => void;

  /**
   * Set projectile scaling
   * @param x x-axis scaling
   * @param y y-axis scaling
   * @param z z-axis scaling
   */
  api_set_scale: (
    /** x-axis scaling */
    x: Float,
    /** y-axis scaling */
    y: Float,
    /** z-axis scaling */
    z: Float,
  ) => void;

  /**
   * Set projectile effect playback speed
   * @param rate playback speed
   */
  api_set_animation_speed: (
    /** playback speed */
    rate: Float,
  ) => void;

  /**
   * Set projectile duration
   * @param duration duration
   */
  api_set_duration: (
    /** duration */
    duration: Float,
  ) => void;

  /**
   * Increased projectile duration
   * @param extra_time duration change value
   */
  api_add_duration: (
    /** duration change value */
    extra_time: Float,
  ) => void;

  /**
   * Get the remaining duration of the projectile
   * @returns Float
   */
  api_get_left_time: () => Float;

  /**
   * Get projectile height
   * @returns Float
   */
  api_get_height: () => Float;

  /**
   * get projectile angle
   * @returns Float
   */
  api_get_face_angle: () => Float;

  /**
   * Get projectile position
   * @returns FVector3
   */
  api_get_position: () => FVector3;

  /**
   * Get projectile orientation
   * @returns FVector3
   */
  api_get_face_dir: () => FVector3;

  /**
   * The normal direction of the obstacle the projectile hits
   * @returns FVector3
   */
  api_collide_obstacle_normal: () => FVector3;

  /**
   * projectile raised
   * @param y fixed number
   */
  api_raise_height: (
    /** fixed number */
    y: Fixed,
  ) => void;

  /**
   * Attach link effect between projectile and unit
   * @param from_socket_name starting node
   * @param target_unit target unit
   * @param target_socket_name target socket
   * @param sfx_res_id Effect ID
   * @param scale scale
   * @param keep_time maximum duration
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
    /** maximum duration */
    keep_time: Float,
    /** owning player */
    role: Role | null,
    /**
     * visibility rules
     * @defaultValue `1`
     */
    visible_type: UInt32 | null,
  ) => void;

  /**
   * Attach a link effect between the projectile and the unit and return the effect entity
   * @param from_socket_name starting node
   * @param target_unit target unit
   * @param target_socket_name target socket
   * @param sfx_res_id Effect ID
   * @param scale scale
   * @param keep_time maximum duration
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
    /** maximum duration */
    keep_time: Float,
    /** owning player */
    role: Role | null,
    /**
     * visibility rules
     * @defaultValue `1`
     */
    visible_type: UInt32 | null,
  ) => Sfx;

  /**
   * Hang link effects between projectiles
   * @param from_socket_name starting node
   * @param target_unit target projectile
   * @param target_socket_name target socket
   * @param sfx_res_id Effect ID
   * @param scale scale
   * @param keep_time maximum duration
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
    /** maximum duration */
    keep_time: Float,
    /** owning player */
    role: Role | null,
    /**
     * visibility rules
     * @defaultValue `1`
     */
    visible_type: UInt32 | null,
  ) => void;

  /**
   * Get the string property of the projectile
   * @param attr_name attribute name
   * @returns string
   */
  api_get_str_attr: (
    /** attribute name */
    attr_name: string,
  ) => string;

  /**
   * Set the projectile's string property
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
   * Projectiles add key-value pairs
   * @param tag TAG
   */
  api_add_tag: (
    /** TAG */
    tag: string,
  ) => void;

  /**
   * Projectile removal key-value pair
   * @param tag TAG
   */
  api_remove_tag: (
    /** TAG */
    tag: string,
  ) => void;
}
