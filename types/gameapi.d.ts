declare const gameapi: {
  /**
   * Remove the key-value pair of the unit from preset library.
   * @param unit_key Unit ID
   * @param key Key
   */
  del_unit_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => void;

  /**
   * Remove the key-value pair of the ability from preset library.
   * @param ability_key Ability ID
   * @param key Key
   */
  del_ability_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => void;

  /**
   * Remove the key-value pair of the item from preset library.
   * @param item_key Item ID
   * @param key Key
   */
  del_item_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => void;

  /**
   * Remove the key-value pair from preset library.
   * @param item_key Item ID
   * @param key Key
   * @param prefab_conf_key Preset library ID
   */
  del_prefab_key_kv: (
    /** Item ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** Preset library ID */
    prefab_conf_key: UInt32,
  ) => void;

  /**
   * Preset Library Add BOOLEAN key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_boolean_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: boolean,
  ) => void;

  /**
   * Preset Library Add INTEGER key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_integer_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Preset Library Add FLOAT key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_float_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Fixed,
  ) => void;

  /**
   * Preset Library Add STRING key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_string_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Preset Library Add UI_COMP key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_ui_comp_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Preset Library Add UNIT_ENTITY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_unit_entity_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Unit,
  ) => void;

  /**
   * Preset Library Add UNIT_GROUP key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_unit_group_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: UnitGroup,
  ) => void;

  /**
   * Preset Library Add UNIT_NAME key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_unit_name_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: UnitKey,
  ) => void;

  /**
   * Preset Library Add UNIT_NAME_POOL key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_unit_name_pool_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: UnitKeyPool,
  ) => void;

  /**
   * Preset Library Add UNIT_WRITE_ATTRIBUTE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_unit_write_attribute_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Preset Library Add ATTR_ELEMENT key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_attr_element_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Preset Library Add ITEM_ENTITY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_item_entity_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Item,
  ) => void;

  /**
   * Preset Library Add ITEM_GROUP key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_item_group_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: ItemGroup,
  ) => void;

  /**
   * Preset Library Add ITEM_NAME key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_item_name_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: ItemKey,
  ) => void;

  /**
   * Preset Library Add ABILITY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_ability_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Ability,
  ) => void;

  /**
   * Preset Library Add ABILITY_TYPE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_ability_type_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Preset Library Add ABILITY_CAST_TYPE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_ability_cast_type_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Preset Library Add ABILITY_NAME key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_ability_name_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: AbilityKey,
  ) => void;

  /**
   * Preset Library Add MODIFIER_ENTITY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_modifier_entity_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Modifier,
  ) => void;

  /**
   * Preset Library Add MODIFIER_TYPE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_modifier_type_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: ModifierType,
  ) => void;

  /**
   * Preset Library Add MODIFIER_EFFECT_TYPE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_modifier_effect_type_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: ModifierEffectType,
  ) => void;

  /**
   * Preset Library Add MODIFIER key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_modifier_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: ModifierKey,
  ) => void;

  /**
   * Preset Library Add PROJECTILE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_projectile_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: ProjectileKey,
  ) => void;

  /**
   * Preset Library Add PROJECTILE_ENTITY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_projectile_entity_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Projectile,
  ) => void;

  /**
   * Preset Library Add PROJECTILE_GROUP key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_projectile_group_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: ProjectileGroup,
  ) => void;

  /**
   * Preset Library Add DESTRUCTIBLE_ENTITY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_destructible_entity_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Destructible,
  ) => void;

  /**
   * Preset Library Add DESTRUCTIBLE_NAME key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_destructible_name_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: DestructibleKey,
  ) => void;

  /**
   * Preset Library Add SOUND_ENTITY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_sound_entity_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: SoundEntity,
  ) => void;

  /**
   * Preset Library Add PLAYER key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_player_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Role,
  ) => void;

  /**
   * Preset Library Add PLAYER_GROUP key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_player_group_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: RoleGroup,
  ) => void;

  /**
   * Preset Library Add ROLE_RES_KEY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_role_res_key_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: RoleResKey,
  ) => void;

  /**
   * Preset Library Add ROLE_STATUS key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_role_status_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: RoleStatus,
  ) => void;

  /**
   * Preset Library Add ROLE_TYPE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_role_type_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: RoleType,
  ) => void;

  /**
   * Preset Library Add TEAM key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_team_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Camp,
  ) => void;

  /**
   * Preset Library Add POINT key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_point_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: FPoint,
  ) => void;

  /**
   * Preset Library Add POINT_LIST key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_point_list_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Road,
  ) => void;

  /**
   * Preset Library Add RECTANGLE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_rectangle_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: RecArea,
  ) => void;

  /**
   * Preset Library Add ROUND_AREA key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_round_area_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: CirArea,
  ) => void;

  /**
   * Preset Library Add POLYGON key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_polygon_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: PolyArea,
  ) => void;

  /**
   * Preset Library Add CAMERA key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_camera_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Camera,
  ) => void;

  /**
   * Preset Library Add MODEL_ENTITY_NEW key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_model_entity_new_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Model,
  ) => void;

  /**
   * Preset Library Add MODEL key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_model_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: ModelKey,
  ) => void;

  /**
   * Preset Library Add SFX_ENTITY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_sfx_entity_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Sfx,
  ) => void;

  /**
   * Preset Library Add SFX_KEY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_sfx_key_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: SfxKey,
  ) => void;

  /**
   * Preset Library Add LINK_SFX_ENTITY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_link_sfx_entity_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: LinkSfx,
  ) => void;

  /**
   * Preset Library Add DYNAMIC_TRIGGER_INSTANCE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_dynamic_trigger_instance_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: DynamicTriggerInstance,
  ) => void;

  /**
   * Preset Library Add RANDOM_POOL key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_random_pool_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: RandomPool,
  ) => void;

  /**
   * Preset Library Add DAMAGE_TYPE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_damage_type_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Preset Library Add NEW_TIMER key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_new_timer_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: Timer,
  ) => void;

  /**
   * Preset Library Add TECH_KEY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_tech_key_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: TechKey,
  ) => void;

  /**
   * Preset Library Add STORE_KEY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_store_key_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: StoreKey,
  ) => void;

  /**
   * Preset Library Add KEYBOARD_KEY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_keyboard_key_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: KeyboardKey,
  ) => void;

  /**
   * Preset Library Add MOUSE_KEY key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_mouse_key_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: MouseKey,
  ) => void;

  /**
   * Preset Library Add UNIT_TYPE key-value pair.
   * @param prefab_conf_key Preset library ID
   * @param item_key ID
   * @param key Key
   * @param value value
   */
  set_prefab_key_unit_type_kv: (
    /** Preset library ID */
    prefab_conf_key: UInt32,
    /** ID */
    item_key: UInt32,
    /** Key */
    key: string,
    /** value */
    value: UnitType,
  ) => void;

  /**
   * Add BOOLEAN key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_boolean_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: boolean,
  ) => void;

  /**
   * Add INTEGER key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_integer_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add FLOAT key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_float_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Fixed,
  ) => void;

  /**
   * Add STRING key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_string_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add UI_COMP key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_ui_comp_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add UNIT_ENTITY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_unit_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Unit,
  ) => void;

  /**
   * Add UNIT_GROUP key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_unit_group_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: UnitGroup,
  ) => void;

  /**
   * Add UNIT_NAME key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_unit_name_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: UnitKey,
  ) => void;

  /**
   * Add UNIT_NAME_POOL key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_unit_name_pool_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: UnitKeyPool,
  ) => void;

  /**
   * Add UNIT_WRITE_ATTRIBUTE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_unit_write_attribute_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add ATTR_ELEMENT key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_attr_element_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add ITEM_ENTITY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_item_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Item,
  ) => void;

  /**
   * Add ITEM_GROUP key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_item_group_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: ItemGroup,
  ) => void;

  /**
   * Add ITEM_NAME key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_item_name_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: ItemKey,
  ) => void;

  /**
   * Add ABILITY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_ability_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Ability,
  ) => void;

  /**
   * Add ABILITY_TYPE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_ability_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add ABILITY_CAST_TYPE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_ability_cast_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add ABILITY_NAME key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_ability_name_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: AbilityKey,
  ) => void;

  /**
   *  Add MODIFIER_ENTITY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_modifier_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Modifier,
  ) => void;

  /**
   * Add MODIFIER_TYPE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_modifier_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: ModifierType,
  ) => void;

  /**
   * Add MODIFIER_EFFECT_TYPE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_modifier_effect_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: ModifierEffectType,
  ) => void;

  /**
   * Add MODIFIER key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_modifier_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: ModifierKey,
  ) => void;

  /**
   * Add PROJECTILE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_projectile_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: ProjectileKey,
  ) => void;

  /**
   * Add PROJECTILE_ENTITY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_projectile_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Projectile,
  ) => void;

  /**
   * Add PROJECTILE_GROUP key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_projectile_group_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: ProjectileGroup,
  ) => void;

  /**
   * Add DESTRUCTIBLE_ENTITY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_destructible_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Destructible,
  ) => void;

  /**
   * Add DESTRUCTIBLE_NAME key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_destructible_name_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: DestructibleKey,
  ) => void;

  /**
   * Add SOUND_ENTITY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_sound_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: SoundEntity,
  ) => void;

  /**
   * Add PLAYER key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_player_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Role,
  ) => void;

  /**
   * Add PLAYER_GROUP key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_player_group_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: RoleGroup,
  ) => void;

  /**
   * Add ROLE_RES_KEY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_role_res_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: RoleResKey,
  ) => void;

  /**
   * Add ROLE_STATUS key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_role_status_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: RoleStatus,
  ) => void;

  /**
   * Add ROLE_TYPE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_role_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: RoleType,
  ) => void;

  /**
   * Add TEAM key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_team_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Camp,
  ) => void;

  /**
   * Add POINT key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_point_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: FPoint,
  ) => void;

  /**
   * Add POINT_LIST key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_point_list_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Road,
  ) => void;

  /**
   * Add RECTANGLE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_rectangle_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: RecArea,
  ) => void;

  /**
   * Add ROUND_AREA key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_round_area_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: CirArea,
  ) => void;

  /**
   * Add POLYGON key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_polygon_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: PolyArea,
  ) => void;

  /**
   * Add CAMERA key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_camera_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Camera,
  ) => void;

  /**
   * Add MODEL_ENTITY_NEW key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_model_entity_new_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Model,
  ) => void;

  /**
   * Add MODEL key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_model_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: ModelKey,
  ) => void;

  /**
   * Add SFX_ENTITY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_sfx_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Sfx,
  ) => void;

  /**
   * Add SFX_KEY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_sfx_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: SfxKey,
  ) => void;

  /**
   * Add LINK_SFX_ENTITY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_link_sfx_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: LinkSfx,
  ) => void;

  /**
   * Add DYNAMIC_TRIGGER_INSTANCE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_dynamic_trigger_instance_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: DynamicTriggerInstance,
  ) => void;

  /**
   * Add RANDOM_POOL key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_random_pool_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: RandomPool,
  ) => void;

  /**
   * Add DAMAGE_TYPE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_damage_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add NEW_TIMER key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_new_timer_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: Timer,
  ) => void;

  /**
   * Add TECH_KEY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_tech_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: TechKey,
  ) => void;

  /**
   * Add STORE_KEY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_store_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: StoreKey,
  ) => void;

  /**
   * Add KEYBOARD_KEY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_keyboard_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: KeyboardKey,
  ) => void;

  /**
   * Add MOUSE_KEY key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_mouse_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: MouseKey,
  ) => void;

  /**
   * Add UNIT_TYPE key-value pair to units in preset library.
   * @param unit_key Unit ID
   * @param key Key
   * @param value value
   */
  set_unit_key_unit_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
    /** value */
    value: UnitType,
  ) => void;

  /**
   * Add BOOLEAN key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_boolean_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: boolean,
  ) => void;

  /**
   * Add INTEGER key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_integer_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add FLOAT key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_float_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Fixed,
  ) => void;

  /**
   * Add STRING key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_string_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add UI_COMP key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_ui_comp_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add UNIT_ENTITY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_unit_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Unit,
  ) => void;

  /**
   * Add UNIT_GROUP key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_unit_group_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: UnitGroup,
  ) => void;

  /**
   * Add UNIT_NAME key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_unit_name_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: UnitKey,
  ) => void;

  /**
   * Add UNIT_NAME_POOL key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_unit_name_pool_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: UnitKeyPool,
  ) => void;

  /**
   * Add UNIT_WRITE_ATTRIBUTE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_unit_write_attribute_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add ATTR_ELEMENT key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_attr_element_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add ITEM_ENTITY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_item_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Item,
  ) => void;

  /**
   * Add ITEM_GROUP key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_item_group_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: ItemGroup,
  ) => void;

  /**
   * Add ITEM_NAME key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_item_name_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: ItemKey,
  ) => void;

  /**
   * Add ABILITY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_ability_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Ability,
  ) => void;

  /**
   * Add ABILITY_TYPE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_ability_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add ABILITY_CAST_TYPE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_ability_cast_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add ABILITY_NAME key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_ability_name_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: AbilityKey,
  ) => void;

  /**
   * Add MODIFIER_ENTITY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_modifier_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Modifier,
  ) => void;

  /**
   * Add MODIFIER_TYPE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_modifier_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: ModifierType,
  ) => void;

  /**
   * Add MODIFIER_EFFECT_TYPE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_modifier_effect_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: ModifierEffectType,
  ) => void;

  /**
   * Add MODIFIER key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_modifier_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: ModifierKey,
  ) => void;

  /**
   * Add PROJECTILE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_projectile_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: ProjectileKey,
  ) => void;

  /**
   * Add PROJECTILE_ENTITY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_projectile_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Projectile,
  ) => void;

  /**
   * Add PROJECTILE_GROUP key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_projectile_group_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: ProjectileGroup,
  ) => void;

  /**
   * Add DESTRUCTIBLE_ENTITY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_destructible_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Destructible,
  ) => void;

  /**
   * Add DESTRUCTIBLE_NAME key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_destructible_name_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: DestructibleKey,
  ) => void;

  /**
   * Add SOUND_ENTITY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_sound_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: SoundEntity,
  ) => void;

  /**
   * Add PLAYER key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_player_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Role,
  ) => void;

  /**
   * Add PLAYER_GROUP key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_player_group_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: RoleGroup,
  ) => void;

  /**
   * Add ROLE_RES_KEY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_role_res_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: RoleResKey,
  ) => void;

  /**
   * Add ROLE_STATUS key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_role_status_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: RoleStatus,
  ) => void;

  /**
   * Add ROLE_TYPE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_role_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: RoleType,
  ) => void;

  /**
   * Add TEAM key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_team_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Camp,
  ) => void;

  /**
   * Add POINT key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_point_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: FPoint,
  ) => void;

  /**
   * Add POINT_LIST key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_point_list_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Road,
  ) => void;

  /**
   * Add RECTANGLE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_rectangle_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: RecArea,
  ) => void;

  /**
   * Add ROUND_AREA key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_round_area_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: CirArea,
  ) => void;

  /**
   * Add POLYGON key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_polygon_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: PolyArea,
  ) => void;

  /**
   * Add CAMERA key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_camera_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Camera,
  ) => void;

  /**
   * Add MODEL_ENTITY_NEW key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_model_entity_new_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Model,
  ) => void;

  /**
   * Add MODEL key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_model_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: ModelKey,
  ) => void;

  /**
   * Add SFX_ENTITY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_sfx_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Sfx,
  ) => void;

  /**
   * Add SFX_KEY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_sfx_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: SfxKey,
  ) => void;

  /**
   * Add LINK_SFX_ENTITY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_link_sfx_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: LinkSfx,
  ) => void;

  /**
   * Add DYNAMIC_TRIGGER_INSTANCE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_dynamic_trigger_instance_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: DynamicTriggerInstance,
  ) => void;

  /**
   * Add RANDOM_POOL key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_random_pool_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: RandomPool,
  ) => void;

  /**
   * Add DAMAGE_TYPE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_damage_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add NEW_TIMER key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_new_timer_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: Timer,
  ) => void;

  /**
   * Add TECH_KEY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_tech_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: TechKey,
  ) => void;

  /**
   * Add STORE_KEY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_store_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: StoreKey,
  ) => void;

  /**
   * Add KEYBOARD_KEY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_keyboard_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: KeyboardKey,
  ) => void;

  /**
   * Add MOUSE_KEY key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_mouse_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: MouseKey,
  ) => void;

  /**
   * Add UNIT_TYPE key-value pair to items in preset library.
   * @param item_key Item ID
   * @param key Key
   * @param value value
   */
  set_item_key_unit_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
    /** value */
    value: UnitType,
  ) => void;

  /**
   * Add BOOLEAN key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_boolean_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: boolean,
  ) => void;

  /**
   * Add INTEGER key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_integer_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add FLOAT key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_float_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Fixed,
  ) => void;

  /**
   * Add STRING key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_string_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add UI_COMP key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_ui_comp_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add UNIT_ENTITY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_unit_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Unit,
  ) => void;

  /**
   * Add UNIT_GROUP key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_unit_group_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: UnitGroup,
  ) => void;

  /**
   * Add UNIT_NAME key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_unit_name_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: UnitKey,
  ) => void;

  /**
   * Add UNIT_NAME_POOL key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_unit_name_pool_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: UnitKeyPool,
  ) => void;

  /**
   * Add UNIT_WRITE_ATTRIBUTE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_unit_write_attribute_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add ATTR_ELEMENT key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_attr_element_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: string,
  ) => void;

  /**
   * Add ITEM_ENTITY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_item_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Item,
  ) => void;

  /**
   * Add ITEM_GROUP key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_item_group_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: ItemGroup,
  ) => void;

  /**
   * Add ITEM_NAME key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_item_name_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: ItemKey,
  ) => void;

  /**
   * Add ABILITY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_ability_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Ability,
  ) => void;

  /**
   * Add ABILITY_TYPE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_ability_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add ABILITY_CAST_TYPE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_ability_cast_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add ABILITY_NAME key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_ability_name_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: AbilityKey,
  ) => void;

  /**
   * Add MODIFIER_ENTITY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_modifier_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Modifier,
  ) => void;

  /**
   * Add MODIFIER_TYPE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_modifier_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: ModifierType,
  ) => void;

  /**
   * Add MODIFIER_EFFECT_TYPE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_modifier_effect_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: ModifierEffectType,
  ) => void;

  /**
   * Add MODIFIER key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_modifier_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: ModifierKey,
  ) => void;

  /**
   * Add PROJECTILE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_projectile_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: ProjectileKey,
  ) => void;

  /**
   * Add PROJECTILE_ENTITY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_projectile_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Projectile,
  ) => void;

  /**
   * Add PROJECTILE_GROUP key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_projectile_group_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: ProjectileGroup,
  ) => void;

  /**
   * Add DESTRUCTIBLE_ENTITY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_destructible_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Destructible,
  ) => void;

  /**
   * Add DESTRUCTIBLE_NAME key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_destructible_name_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: DestructibleKey,
  ) => void;

  /**
   * Add SOUND_ENTITY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_sound_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: SoundEntity,
  ) => void;

  /**
   * Add PLAYER key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_player_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Role,
  ) => void;

  /**
   * Add PLAYER_GROUP key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_player_group_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: RoleGroup,
  ) => void;

  /**
   * Add ROLE_RES_KEY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_role_res_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: RoleResKey,
  ) => void;

  /**
   * Add ROLE_STATUS key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_role_status_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: RoleStatus,
  ) => void;

  /**
   * Add ROLE_TYPE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_role_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: RoleType,
  ) => void;

  /**
   * Add TEAM key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_team_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Camp,
  ) => void;

  /**
   * Add POINT key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_point_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: FPoint,
  ) => void;

  /**
   * Add POINT_LIST key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_point_list_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Road,
  ) => void;

  /**
   * Add RECTANGLE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_rectangle_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: RecArea,
  ) => void;

  /**
   * Add ROUND_AREA key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_round_area_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: CirArea,
  ) => void;

  /**
   * Add POLYGON key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_polygon_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: PolyArea,
  ) => void;

  /**
   * Add CAMERA key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_camera_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Camera,
  ) => void;

  /**
   * Add MODEL_ENTITY_NEW key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_model_entity_new_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Model,
  ) => void;

  /**
   * Add MODEL key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_model_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: ModelKey,
  ) => void;

  /**
   * Add SFX_ENTITY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_sfx_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Sfx,
  ) => void;

  /**
   * Add SFX_KEY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_sfx_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: SfxKey,
  ) => void;

  /**
   * Add LINK_SFX_ENTITY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_link_sfx_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: LinkSfx,
  ) => void;

  /**
   * Add DYNAMIC_TRIGGER_INSTANCE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_dynamic_trigger_instance_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: DynamicTriggerInstance,
  ) => void;

  /**
   * Add RANDOM_POOL key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_random_pool_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: RandomPool,
  ) => void;

  /**
   * Add DAMAGE_TYPE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_damage_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Int32,
  ) => void;

  /**
   * Add NEW_TIMER key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_new_timer_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: Timer,
  ) => void;

  /**
   * Add TECH_KEY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_tech_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: TechKey,
  ) => void;

  /**
   * Add STORE_KEY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_store_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: StoreKey,
  ) => void;

  /**
   * Add KEYBOARD_KEY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_keyboard_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: KeyboardKey,
  ) => void;

  /**
   * Add MOUSE_KEY key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_mouse_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: MouseKey,
  ) => void;

  /**
   * Add UNIT_TYPE key-value pair to abilities in preset library.
   * @param ability_key Ability ID
   * @param key Key
   * @param value value
   */
  set_ability_key_unit_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
    /** value */
    value: UnitType,
  ) => void;

  /**
   * Add BOOLEAN key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_boolean_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: boolean | null,
  ) => void;

  /**
   * Add INTEGER key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_integer_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Int32 | null,
  ) => void;

  /**
   * Add FLOAT key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_float_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Fixed | null,
  ) => void;

  /**
   * Add STRING key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_string_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: string | null,
  ) => void;

  /**
   * Add UI_COMP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_ui_comp_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: string | null,
  ) => void;

  /**
   * Add UNIT_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_unit_entity_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Unit | null,
  ) => void;

  /**
   * Add UNIT_GROUP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_unit_group_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: UnitGroup | null,
  ) => void;

  /**
   * Add UNIT_NAME key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_unit_name_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: UnitKey | null,
  ) => void;

  /**
   * Add UNIT_NAME_POOL key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_unit_name_pool_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: UnitKeyPool | null,
  ) => void;

  /**
   * Add UNIT_WRITE_ATTRIBUTE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_unit_write_attribute_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: string | null,
  ) => void;

  /**
   * Add ATTR_ELEMENT key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_attr_element_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: string | null,
  ) => void;

  /**
   * Add ITEM_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_item_entity_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Item | null,
  ) => void;

  /**
   * Add ITEM_GROUP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_item_group_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: ItemGroup | null,
  ) => void;

  /**
   * Add ITEM_NAME key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_item_name_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: ItemKey | null,
  ) => void;

  /**
   * Add ABILITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_ability_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Ability | null,
  ) => void;

  /**
   * Add ABILITY_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_ability_type_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Int32 | null,
  ) => void;

  /**
   * Add ABILITY_CAST_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_ability_cast_type_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Int32 | null,
  ) => void;

  /**
   * Add ABILITY_NAME key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_ability_name_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: AbilityKey | null,
  ) => void;

  /**
   * Add MODIFIER_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_modifier_entity_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Modifier | null,
  ) => void;

  /**
   * Add MODIFIER_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_modifier_type_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: ModifierType | null,
  ) => void;

  /**
   * Add MODIFIER_EFFECT_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_modifier_effect_type_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: ModifierEffectType | null,
  ) => void;

  /**
   * Add MODIFIER key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_modifier_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: ModifierKey | null,
  ) => void;

  /**
   * Add PROJECTILE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_projectile_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: ProjectileKey | null,
  ) => void;

  /**
   * Add PROJECTILE_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_projectile_entity_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Projectile | null,
  ) => void;

  /**
   * Add PROJECTILE_GROUP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_projectile_group_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: ProjectileGroup | null,
  ) => void;

  /**
   * Add DESTRUCTIBLE_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_destructible_entity_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Destructible | null,
  ) => void;

  /**
   * Add DESTRUCTIBLE_NAME key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_destructible_name_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: DestructibleKey | null,
  ) => void;

  /**
   * Add SOUND_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_sound_entity_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: SoundEntity | null,
  ) => void;

  /**
   * Add PLAYER key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_player_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Role | null,
  ) => void;

  /**
   * Add PLAYER_GROUP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_player_group_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: RoleGroup | null,
  ) => void;

  /**
   * Add ROLE_RES_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_role_res_key_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: RoleResKey | null,
  ) => void;

  /**
   * Add ROLE_STATUS key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_role_status_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: RoleStatus | null,
  ) => void;

  /**
   * Add ROLE_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_role_type_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: RoleType | null,
  ) => void;

  /**
   * Add TEAM key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_team_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Camp | null,
  ) => void;

  /**
   * Add POINT key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_point_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: FPoint | null,
  ) => void;

  /**
   * Add POINT_LIST key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_point_list_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Road | null,
  ) => void;

  /**
   * Add RECTANGLE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_rectangle_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: RecArea | null,
  ) => void;

  /**
   * Add ROUND_AREA key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_round_area_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: CirArea | null,
  ) => void;

  /**
   * Add POLYGON key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_polygon_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: PolyArea | null,
  ) => void;

  /**
   * Add CAMERA key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_camera_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Camera | null,
  ) => void;

  /**
   * Add MODEL_ENTITY_NEW key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_model_entity_new_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Model | null,
  ) => void;

  /**
   * Add MODEL key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_model_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: ModelKey | null,
  ) => void;

  /**
   * Add SFX_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_sfx_entity_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Sfx | null,
  ) => void;

  /**
   * Add SFX_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_sfx_key_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: SfxKey | null,
  ) => void;

  /**
   * Add LINK_SFX_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_link_sfx_entity_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: LinkSfx | null,
  ) => void;

  /**
   * Add DYNAMIC_TRIGGER_INSTANCE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_dynamic_trigger_instance_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: DynamicTriggerInstance | null,
  ) => void;

  /**
   * Add RANDOM_POOL key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_random_pool_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: RandomPool | null,
  ) => void;

  /**
   * Add DAMAGE_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_damage_type_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Int32 | null,
  ) => void;

  /**
   * Add NEW_TIMER key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_new_timer_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: Timer | null,
  ) => void;

  /**
   * Add TECH_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_tech_key_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: TechKey | null,
  ) => void;

  /**
   * Add STORE_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_store_key_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: StoreKey | null,
  ) => void;

  /**
   * Add KEYBOARD_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_keyboard_key_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: KeyboardKey | null,
  ) => void;

  /**
   * Add MOUSE_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_mouse_key_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: MouseKey | null,
  ) => void;

  /**
   * Add UNIT_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @param item value
   */
  add_unit_type_kv: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
    /** value */
    item: UnitType | null,
  ) => void;

  /**
   * Determine whether a key-value pair exists (regardless of its type).
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether BOOLEAN key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_boolean: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether BOOLEAN key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_boolean_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether BOOLEAN key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_boolean_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether BOOLEAN key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_boolean_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether BOOLEAN key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_boolean_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether INTEGER key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_integer: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether INTEGER key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_integer_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether INTEGER key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_integer_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether INTEGER key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_integer_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether INTEGER key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_integer_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether FLOAT key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_float: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether FLOAT key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_float_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether FLOAT key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_float_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether FLOAT key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_float_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether FLOAT key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_float_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STRING key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_string: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STRING key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_string_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STRING key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_string_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STRING key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_string_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STRING key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_string_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UI_COMP key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_ui_comp: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UI_COMP key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_ui_comp_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UI_COMP key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_ui_comp_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UI_COMP key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_ui_comp_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UI_COMP key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_ui_comp_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_ENTITY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_unit_entity: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_ENTITY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_unit_entity_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_ENTITY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_unit_entity_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_ENTITY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_unit_entity_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_ENTITY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_unit_entity_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_GROUP key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_unit_group: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_GROUP key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_unit_group_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_GROUP key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_unit_group_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_GROUP key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_unit_group_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_GROUP key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_unit_group_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_unit_name: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_unit_name_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_unit_name_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_unit_name_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_unit_name_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME_POOL key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_unit_name_pool: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME_POOL key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_unit_name_pool_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME_POOL key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_unit_name_pool_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME_POOL key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_unit_name_pool_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_NAME_POOL key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_unit_name_pool_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_WRITE_ATTRIBUTE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_unit_write_attribute: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_WRITE_ATTRIBUTE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_unit_write_attribute_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_WRITE_ATTRIBUTE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_unit_write_attribute_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_WRITE_ATTRIBUTE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_unit_write_attribute_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_WRITE_ATTRIBUTE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_unit_write_attribute_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ATTR_ELEMENT key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_attr_element: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ATTR_ELEMENT key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_attr_element_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ATTR_ELEMENT key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_attr_element_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ATTR_ELEMENT key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_attr_element_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ATTR_ELEMENT key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_attr_element_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_ENTITY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_item_entity: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_ENTITY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_item_entity_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_ENTITY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_item_entity_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_ENTITY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_item_entity_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_ENTITY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_item_entity_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_GROUP key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_item_group: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_GROUP key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_item_group_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_GROUP key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_item_group_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_GROUP key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_item_group_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_GROUP key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_item_group_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_NAME key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_item_name: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_NAME key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_item_name_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_NAME key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_item_name_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_NAME key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_item_name_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ITEM_NAME key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_item_name_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_ability: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_ability_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_ability_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_ability_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_ability_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_TYPE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_ability_type: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_TYPE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_ability_type_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_TYPE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_ability_type_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_TYPE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_ability_type_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_TYPE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_ability_type_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_CAST_TYPE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_ability_cast_type: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_CAST_TYPE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_ability_cast_type_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_CAST_TYPE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_ability_cast_type_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_CAST_TYPE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_ability_cast_type_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_CAST_TYPE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_ability_cast_type_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_NAME key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_ability_name: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_NAME key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_ability_name_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_NAME key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_ability_name_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_NAME key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_ability_name_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ABILITY_NAME key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_ability_name_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_ENTITY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_modifier_entity: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_ENTITY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_modifier_entity_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_ENTITY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_modifier_entity_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_ENTITY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_modifier_entity_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_ENTITY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_modifier_entity_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_TYPE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_modifier_type: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_TYPE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_modifier_type_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_TYPE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_modifier_type_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_TYPE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_modifier_type_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_TYPE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_modifier_type_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_EFFECT_TYPE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_modifier_effect_type: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_EFFECT_TYPE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_modifier_effect_type_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_EFFECT_TYPE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_modifier_effect_type_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_EFFECT_TYPE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_modifier_effect_type_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER_EFFECT_TYPE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_modifier_effect_type_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_modifier: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_modifier_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_modifier_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_modifier_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODIFIER key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_modifier_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_projectile: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_projectile_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_projectile_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_projectile_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_projectile_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_ENTITY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_projectile_entity: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_ENTITY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_projectile_entity_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_ENTITY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_projectile_entity_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_ENTITY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_projectile_entity_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_ENTITY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_projectile_entity_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_GROUP key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_projectile_group: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_GROUP key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_projectile_group_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_GROUP key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_projectile_group_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_GROUP key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_projectile_group_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PROJECTILE_GROUP key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_projectile_group_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_ENTITY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_destructible_entity: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_ENTITY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_destructible_entity_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_ENTITY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_destructible_entity_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_ENTITY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_destructible_entity_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_ENTITY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_destructible_entity_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_NAME key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_destructible_name: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_NAME key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_destructible_name_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_NAME key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_destructible_name_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_NAME key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_destructible_name_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DESTRUCTIBLE_NAME key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_destructible_name_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SOUND_ENTITY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_sound_entity: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SOUND_ENTITY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_sound_entity_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SOUND_ENTITY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_sound_entity_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SOUND_ENTITY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_sound_entity_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SOUND_ENTITY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_sound_entity_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_player: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_player_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_player_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_player_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_player_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER_GROUP key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_player_group: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER_GROUP key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_player_group_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER_GROUP key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_player_group_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER_GROUP key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_player_group_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether PLAYER_GROUP key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_player_group_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_RES_KEY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_role_res_key: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_RES_KEY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_role_res_key_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_RES_KEY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_role_res_key_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_RES_KEY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_role_res_key_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_RES_KEY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_role_res_key_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_STATUS key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_role_status: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_STATUS key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_role_status_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_STATUS key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_role_status_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_STATUS key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_role_status_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_STATUS key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_role_status_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_TYPE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_role_type: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_TYPE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_role_type_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_TYPE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_role_type_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_TYPE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_role_type_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROLE_TYPE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_role_type_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TEAM key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_team: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TEAM key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_team_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TEAM key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_team_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TEAM key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_team_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TEAM key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_team_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_point: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_point_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_point_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_point_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_point_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT_LIST key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_point_list: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT_LIST key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_point_list_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT_LIST key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_point_list_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT_LIST key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_point_list_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POINT_LIST key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_point_list_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RECTANGLE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_rectangle: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RECTANGLE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_rectangle_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RECTANGLE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_rectangle_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RECTANGLE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_rectangle_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RECTANGLE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_rectangle_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROUND_AREA key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_round_area: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROUND_AREA key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_round_area_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROUND_AREA key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_round_area_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROUND_AREA key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_round_area_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether ROUND_AREA key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_round_area_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POLYGON key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_polygon: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POLYGON key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_polygon_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POLYGON key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_polygon_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POLYGON key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_polygon_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether POLYGON key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_polygon_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether CAMERA key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_camera: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether CAMERA key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_camera_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether CAMERA key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_camera_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether CAMERA key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_camera_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether CAMERA key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_camera_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL_ENTITY_NEW key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_model_entity_new: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL_ENTITY_NEW key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_model_entity_new_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL_ENTITY_NEW key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_model_entity_new_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL_ENTITY_NEW key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_model_entity_new_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL_ENTITY_NEW key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_model_entity_new_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_model: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_model_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_model_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_model_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MODEL key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_model_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_ENTITY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_sfx_entity: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_ENTITY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_sfx_entity_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_ENTITY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_sfx_entity_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_ENTITY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_sfx_entity_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_ENTITY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_sfx_entity_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_KEY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_sfx_key: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_KEY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_sfx_key_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_KEY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_sfx_key_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_KEY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_sfx_key_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether SFX_KEY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_sfx_key_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether LINK_SFX_ENTITY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_link_sfx_entity: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether LINK_SFX_ENTITY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_link_sfx_entity_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether LINK_SFX_ENTITY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_link_sfx_entity_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether LINK_SFX_ENTITY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_link_sfx_entity_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether LINK_SFX_ENTITY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_link_sfx_entity_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DYNAMIC_TRIGGER_INSTANCE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_dynamic_trigger_instance: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DYNAMIC_TRIGGER_INSTANCE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_dynamic_trigger_instance_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DYNAMIC_TRIGGER_INSTANCE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_dynamic_trigger_instance_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DYNAMIC_TRIGGER_INSTANCE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_dynamic_trigger_instance_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DYNAMIC_TRIGGER_INSTANCE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_dynamic_trigger_instance_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RANDOM_POOL key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_random_pool: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RANDOM_POOL key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_random_pool_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RANDOM_POOL key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_random_pool_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RANDOM_POOL key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_random_pool_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether RANDOM_POOL key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_random_pool_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DAMAGE_TYPE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_damage_type: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DAMAGE_TYPE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_damage_type_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DAMAGE_TYPE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_damage_type_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DAMAGE_TYPE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_damage_type_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether DAMAGE_TYPE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_damage_type_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether NEW_TIMER key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_new_timer: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether NEW_TIMER key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_new_timer_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether NEW_TIMER key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_new_timer_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether NEW_TIMER key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_new_timer_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether NEW_TIMER key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_new_timer_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TECH_KEY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_tech_key: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TECH_KEY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_tech_key_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TECH_KEY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_tech_key_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TECH_KEY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_tech_key_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether TECH_KEY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_tech_key_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STORE_KEY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_store_key: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STORE_KEY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_store_key_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STORE_KEY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_store_key_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STORE_KEY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_store_key_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether STORE_KEY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_store_key_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether KEYBOARD_KEY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_keyboard_key: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether KEYBOARD_KEY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_keyboard_key_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether KEYBOARD_KEY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_keyboard_key_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether KEYBOARD_KEY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_keyboard_key_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether KEYBOARD_KEY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_keyboard_key_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MOUSE_KEY key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_mouse_key: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MOUSE_KEY key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_mouse_key_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MOUSE_KEY key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_mouse_key_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MOUSE_KEY key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_mouse_key_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether MOUSE_KEY key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_mouse_key_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_TYPE key-value pairs exist.
   * @param kvbase Key-value pair container
   * @param key Key
   * @returns boolean
   */
  has_kv_pair_unit_type: (
    /** Key-value pair container */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_TYPE key-value pairs exist in presets.
   * @param prefab_type Preset type
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_prefab_unit_type_kv: (
    /** Preset type */
    prefab_type: string,
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_TYPE key-value pairs exist in unit ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_unit_key_unit_type_kv: (
    /** Preset ID */
    prefab_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_TYPE key-value pairs exist in item ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_item_key_unit_type_kv: (
    /** Preset ID */
    prefab_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Determine whether UNIT_TYPE key-value pairs exist in ability ID.
   * @param prefab_key Preset ID
   * @param key Key
   * @returns boolean
   */
  has_ability_key_unit_type_kv: (
    /** Preset ID */
    prefab_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Get BOOLEAN key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns boolean
   */
  get_unit_key_boolean_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Get BOOLEAN key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns boolean
   */
  get_item_key_boolean_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Get BOOLEAN key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns boolean
   */
  get_ability_key_boolean_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Get BOOLEAN key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns boolean
   */
  get_modifier_key_boolean_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Get BOOLEAN key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns boolean
   */
  get_projectile_key_boolean_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Get BOOLEAN key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns boolean
   */
  get_tech_key_boolean_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Get BOOLEAN key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns boolean
   */
  get_kv_pair_value_boolean: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => boolean;

  /**
   * Get INTEGER key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Int32
   */
  get_unit_key_integer_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get INTEGER key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Int32
   */
  get_item_key_integer_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get INTEGER key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Int32
   */
  get_ability_key_integer_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get INTEGER key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Int32
   */
  get_modifier_key_integer_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get INTEGER key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Int32
   */
  get_projectile_key_integer_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get INTEGER key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Int32
   */
  get_tech_key_integer_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get INTEGER key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Int32
   */
  get_kv_pair_value_integer: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get FLOAT key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Fixed
   */
  get_unit_key_float_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Fixed;

  /**
   * Get FLOAT key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Fixed
   */
  get_item_key_float_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Fixed;

  /**
   * Get FLOAT key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Fixed
   */
  get_ability_key_float_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Fixed;

  /**
   * Get FLOAT key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Fixed
   */
  get_modifier_key_float_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Fixed;

  /**
   * Get FLOAT key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Fixed
   */
  get_projectile_key_float_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Fixed;

  /**
   * Get FLOAT key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Fixed
   */
  get_tech_key_float_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Fixed;

  /**
   * Get FLOAT key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Fixed
   */
  get_kv_pair_value_float: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Fixed;

  /**
   * Get STRING key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns string
   */
  get_unit_key_string_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get STRING key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns string
   */
  get_item_key_string_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get STRING key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns string
   */
  get_ability_key_string_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get STRING key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns string
   */
  get_modifier_key_string_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get STRING key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns string
   */
  get_projectile_key_string_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get STRING key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns string
   */
  get_tech_key_string_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get STRING key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns string
   */
  get_kv_pair_value_string: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UI_COMP key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns string
   */
  get_unit_key_ui_comp_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UI_COMP key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns string
   */
  get_item_key_ui_comp_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UI_COMP key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns string
   */
  get_ability_key_ui_comp_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UI_COMP key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns string
   */
  get_modifier_key_ui_comp_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UI_COMP key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns string
   */
  get_projectile_key_ui_comp_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UI_COMP key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns string
   */
  get_tech_key_ui_comp_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UI_COMP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns string
   */
  get_kv_pair_value_ui_comp: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UNIT_ENTITY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Unit
   */
  get_unit_key_unit_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Unit;

  /**
   * Get UNIT_ENTITY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Unit
   */
  get_item_key_unit_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Unit;

  /**
   * Get UNIT_ENTITY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Unit
   */
  get_ability_key_unit_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Unit;

  /**
   * Get UNIT_ENTITY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Unit
   */
  get_modifier_key_unit_entity_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Unit;

  /**
   * Get UNIT_ENTITY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Unit
   */
  get_projectile_key_unit_entity_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Unit;

  /**
   * Get UNIT_ENTITY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Unit
   */
  get_tech_key_unit_entity_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Unit;

  /**
   * Get UNIT_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Unit
   */
  get_kv_pair_value_unit_entity: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Unit;

  /**
   * Get UNIT_GROUP key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns UnitGroup
   */
  get_unit_key_unit_group_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => UnitGroup;

  /**
   * Get UNIT_GROUP key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns UnitGroup
   */
  get_item_key_unit_group_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => UnitGroup;

  /**
   * Get UNIT_GROUP key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns UnitGroup
   */
  get_ability_key_unit_group_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => UnitGroup;

  /**
   * Get UNIT_GROUP key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns UnitGroup
   */
  get_modifier_key_unit_group_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => UnitGroup;

  /**
   * Get UNIT_GROUP key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns UnitGroup
   */
  get_projectile_key_unit_group_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => UnitGroup;

  /**
   * Get UNIT_GROUP key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns UnitGroup
   */
  get_tech_key_unit_group_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => UnitGroup;

  /**
   * Get UNIT_GROUP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns UnitGroup
   */
  get_kv_pair_value_unit_group: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => UnitGroup;

  /**
   * Get UNIT_NAME key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns UnitKey
   */
  get_unit_key_unit_name_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => UnitKey;

  /**
   * Get UNIT_NAME key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns UnitKey
   */
  get_item_key_unit_name_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => UnitKey;

  /**
   * Get UNIT_NAME key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns UnitKey
   */
  get_ability_key_unit_name_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => UnitKey;

  /**
   * Get UNIT_NAME key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns UnitKey
   */
  get_modifier_key_unit_name_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => UnitKey;

  /**
   * Get UNIT_NAME key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns UnitKey
   */
  get_projectile_key_unit_name_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => UnitKey;

  /**
   * Get UNIT_NAME key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns UnitKey
   */
  get_tech_key_unit_name_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => UnitKey;

  /**
   * Get UNIT_NAME key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns UnitKey
   */
  get_kv_pair_value_unit_name: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => UnitKey;

  /**
   * Get UNIT_NAME_POOL key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns UnitKeyPool
   */
  get_unit_key_unit_name_pool_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => UnitKeyPool;

  /**
   * Get UNIT_NAME_POOL key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns UnitKeyPool
   */
  get_item_key_unit_name_pool_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => UnitKeyPool;

  /**
   * Get UNIT_NAME_POOL key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns UnitKeyPool
   */
  get_ability_key_unit_name_pool_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => UnitKeyPool;

  /**
   * Get UNIT_NAME_POOL key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns UnitKeyPool
   */
  get_modifier_key_unit_name_pool_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => UnitKeyPool;

  /**
   * Get UNIT_NAME_POOL key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns UnitKeyPool
   */
  get_projectile_key_unit_name_pool_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => UnitKeyPool;

  /**
   * Get UNIT_NAME_POOL key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns UnitKeyPool
   */
  get_tech_key_unit_name_pool_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => UnitKeyPool;

  /**
   * Get UNIT_NAME_POOL key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns UnitKeyPool
   */
  get_kv_pair_value_unit_name_pool: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => UnitKeyPool;

  /**
   * Get UNIT_WRITE_ATTRIBUTE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns string
   */
  get_unit_key_unit_write_attribute_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UNIT_WRITE_ATTRIBUTE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns string
   */
  get_item_key_unit_write_attribute_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UNIT_WRITE_ATTRIBUTE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns string
   */
  get_ability_key_unit_write_attribute_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UNIT_WRITE_ATTRIBUTE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns string
   */
  get_modifier_key_unit_write_attribute_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UNIT_WRITE_ATTRIBUTE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns string
   */
  get_projectile_key_unit_write_attribute_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UNIT_WRITE_ATTRIBUTE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns string
   */
  get_tech_key_unit_write_attribute_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get UNIT_WRITE_ATTRIBUTE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns string
   */
  get_kv_pair_value_unit_write_attribute: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get ATTR_ELEMENT key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns string
   */
  get_unit_key_attr_element_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get ATTR_ELEMENT key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns string
   */
  get_item_key_attr_element_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get ATTR_ELEMENT key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns string
   */
  get_ability_key_attr_element_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get ATTR_ELEMENT key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns string
   */
  get_modifier_key_attr_element_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get ATTR_ELEMENT key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns string
   */
  get_projectile_key_attr_element_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get ATTR_ELEMENT key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns string
   */
  get_tech_key_attr_element_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get ATTR_ELEMENT key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns string
   */
  get_kv_pair_value_attr_element: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => string;

  /**
   * Get ITEM_ENTITY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Item
   */
  get_unit_key_item_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Item;

  /**
   * Get ITEM_ENTITY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Item
   */
  get_item_key_item_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Item;

  /**
   * Get ITEM_ENTITY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Item
   */
  get_ability_key_item_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Item;

  /**
   * Get ITEM_ENTITY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Item
   */
  get_modifier_key_item_entity_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Item;

  /**
   * Get ITEM_ENTITY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Item
   */
  get_projectile_key_item_entity_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Item;

  /**
   * Get ITEM_ENTITY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Item
   */
  get_tech_key_item_entity_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Item;

  /**
   * Get ITEM_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Item
   */
  get_kv_pair_value_item_entity: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Item;

  /**
   * Get ITEM_GROUP key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns ItemGroup
   */
  get_unit_key_item_group_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => ItemGroup;

  /**
   * Get ITEM_GROUP key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns ItemGroup
   */
  get_item_key_item_group_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => ItemGroup;

  /**
   * Get ITEM_GROUP key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns ItemGroup
   */
  get_ability_key_item_group_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => ItemGroup;

  /**
   * Get ITEM_GROUP key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns ItemGroup
   */
  get_modifier_key_item_group_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => ItemGroup;

  /**
   * Get ITEM_GROUP key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns ItemGroup
   */
  get_projectile_key_item_group_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => ItemGroup;

  /**
   * Get ITEM_GROUP key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns ItemGroup
   */
  get_tech_key_item_group_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => ItemGroup;

  /**
   * Get ITEM_GROUP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns ItemGroup
   */
  get_kv_pair_value_item_group: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => ItemGroup;

  /**
   * Get ITEM_NAME key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns ItemKey
   */
  get_unit_key_item_name_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => ItemKey;

  /**
   * Get ITEM_NAME key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns ItemKey
   */
  get_item_key_item_name_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => ItemKey;

  /**
   * Get ITEM_NAME key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns ItemKey
   */
  get_ability_key_item_name_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => ItemKey;

  /**
   * Get ITEM_NAME key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns ItemKey
   */
  get_modifier_key_item_name_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => ItemKey;

  /**
   * Get ITEM_NAME key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns ItemKey
   */
  get_projectile_key_item_name_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => ItemKey;

  /**
   * Get ITEM_NAME key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns ItemKey
   */
  get_tech_key_item_name_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => ItemKey;

  /**
   * Get ITEM_NAME key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns ItemKey
   */
  get_kv_pair_value_item_name: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => ItemKey;

  /**
   * Get ABILITY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Ability
   */
  get_unit_key_ability_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Ability;

  /**
   * Get ABILITY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Ability
   */
  get_item_key_ability_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Ability;

  /**
   * Get ABILITY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Ability
   */
  get_ability_key_ability_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Ability;

  /**
   * Get ABILITY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Ability
   */
  get_modifier_key_ability_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Ability;

  /**
   * Get ABILITY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Ability
   */
  get_projectile_key_ability_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Ability;

  /**
   * Get ABILITY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Ability
   */
  get_tech_key_ability_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Ability;

  /**
   * Get ABILITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Ability
   */
  get_kv_pair_value_ability: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Ability;

  /**
   * Get ABILITY_TYPE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Int32
   */
  get_unit_key_ability_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_TYPE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Int32
   */
  get_item_key_ability_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_TYPE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Int32
   */
  get_ability_key_ability_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_TYPE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Int32
   */
  get_modifier_key_ability_type_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_TYPE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Int32
   */
  get_projectile_key_ability_type_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_TYPE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Int32
   */
  get_tech_key_ability_type_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Int32
   */
  get_kv_pair_value_ability_type: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_CAST_TYPE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Int32
   */
  get_unit_key_ability_cast_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_CAST_TYPE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Int32
   */
  get_item_key_ability_cast_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_CAST_TYPE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Int32
   */
  get_ability_key_ability_cast_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_CAST_TYPE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Int32
   */
  get_modifier_key_ability_cast_type_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_CAST_TYPE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Int32
   */
  get_projectile_key_ability_cast_type_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_CAST_TYPE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Int32
   */
  get_tech_key_ability_cast_type_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_CAST_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Int32
   */
  get_kv_pair_value_ability_cast_type: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get ABILITY_NAME key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns AbilityKey
   */
  get_unit_key_ability_name_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => AbilityKey;

  /**
   * Get ABILITY_NAME key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns AbilityKey
   */
  get_item_key_ability_name_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => AbilityKey;

  /**
   * Get ABILITY_NAME key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns AbilityKey
   */
  get_ability_key_ability_name_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => AbilityKey;

  /**
   * Get ABILITY_NAME key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns AbilityKey
   */
  get_modifier_key_ability_name_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => AbilityKey;

  /**
   * Get ABILITY_NAME key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns AbilityKey
   */
  get_projectile_key_ability_name_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => AbilityKey;

  /**
   * Get ABILITY_NAME key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns AbilityKey
   */
  get_tech_key_ability_name_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => AbilityKey;

  /**
   * Get ABILITY_NAME key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns AbilityKey
   */
  get_kv_pair_value_ability_name: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => AbilityKey;

  /**
   * Get MODIFIER_ENTITY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Modifier
   */
  get_unit_key_modifier_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Modifier;

  /**
   * Get MODIFIER_ENTITY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Modifier
   */
  get_item_key_modifier_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Modifier;

  /**
   * Get MODIFIER_ENTITY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Modifier
   */
  get_ability_key_modifier_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Modifier;

  /**
   * Get MODIFIER_ENTITY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Modifier
   */
  get_modifier_key_modifier_entity_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Modifier;

  /**
   * Get MODIFIER_ENTITY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Modifier
   */
  get_projectile_key_modifier_entity_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Modifier;

  /**
   * Get MODIFIER_ENTITY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Modifier
   */
  get_tech_key_modifier_entity_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Modifier;

  /**
   * Get MODIFIER_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Modifier
   */
  get_kv_pair_value_modifier_entity: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Modifier;

  /**
   * Get MODIFIER_TYPE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns ModifierType
   */
  get_unit_key_modifier_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => ModifierType;

  /**
   * Get MODIFIER_TYPE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns ModifierType
   */
  get_item_key_modifier_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => ModifierType;

  /**
   * Get MODIFIER_TYPE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns ModifierType
   */
  get_ability_key_modifier_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => ModifierType;

  /**
   * Get MODIFIER_TYPE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns ModifierType
   */
  get_modifier_key_modifier_type_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => ModifierType;

  /**
   * Get MODIFIER_TYPE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns ModifierType
   */
  get_projectile_key_modifier_type_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => ModifierType;

  /**
   * Get MODIFIER_TYPE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns ModifierType
   */
  get_tech_key_modifier_type_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => ModifierType;

  /**
   * Get MODIFIER_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns ModifierType
   */
  get_kv_pair_value_modifier_type: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => ModifierType;

  /**
   * Get MODIFIER_EFFECT_TYPE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns ModifierEffectType
   */
  get_unit_key_modifier_effect_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => ModifierEffectType;

  /**
   * Get MODIFIER_EFFECT_TYPE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns ModifierEffectType
   */
  get_item_key_modifier_effect_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => ModifierEffectType;

  /**
   * Get MODIFIER_EFFECT_TYPE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns ModifierEffectType
   */
  get_ability_key_modifier_effect_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => ModifierEffectType;

  /**
   * Get MODIFIER_EFFECT_TYPE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns ModifierEffectType
   */
  get_modifier_key_modifier_effect_type_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => ModifierEffectType;

  /**
   * Get MODIFIER_EFFECT_TYPE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns ModifierEffectType
   */
  get_projectile_key_modifier_effect_type_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => ModifierEffectType;

  /**
   * Get MODIFIER_EFFECT_TYPE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns ModifierEffectType
   */
  get_tech_key_modifier_effect_type_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => ModifierEffectType;

  /**
   * Get MODIFIER_EFFECT_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns ModifierEffectType
   */
  get_kv_pair_value_modifier_effect_type: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => ModifierEffectType;

  /**
   * Get MODIFIER key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns ModifierKey
   */
  get_unit_key_modifier_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => ModifierKey;

  /**
   * Get MODIFIER key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns ModifierKey
   */
  get_item_key_modifier_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => ModifierKey;

  /**
   * Get MODIFIER key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns ModifierKey
   */
  get_ability_key_modifier_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => ModifierKey;

  /**
   * Get MODIFIER key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns ModifierKey
   */
  get_modifier_key_modifier_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => ModifierKey;

  /**
   * Get MODIFIER key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns ModifierKey
   */
  get_projectile_key_modifier_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => ModifierKey;

  /**
   * Get MODIFIER key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns ModifierKey
   */
  get_tech_key_modifier_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => ModifierKey;

  /**
   * Get MODIFIER key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns ModifierKey
   */
  get_kv_pair_value_modifier: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => ModifierKey;

  /**
   * Get PROJECTILE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns ProjectileKey
   */
  get_unit_key_projectile_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => ProjectileKey;

  /**
   * Get PROJECTILE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns ProjectileKey
   */
  get_item_key_projectile_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => ProjectileKey;

  /**
   * Get PROJECTILE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns ProjectileKey
   */
  get_ability_key_projectile_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => ProjectileKey;

  /**
   * Get PROJECTILE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns ProjectileKey
   */
  get_modifier_key_projectile_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => ProjectileKey;

  /**
   * Get PROJECTILE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns ProjectileKey
   */
  get_projectile_key_projectile_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => ProjectileKey;

  /**
   * Get PROJECTILE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns ProjectileKey
   */
  get_tech_key_projectile_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => ProjectileKey;

  /**
   * Get PROJECTILE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns ProjectileKey
   */
  get_kv_pair_value_projectile: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => ProjectileKey;

  /**
   * Get PROJECTILE_ENTITY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Projectile
   */
  get_unit_key_projectile_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Projectile;

  /**
   * Get PROJECTILE_ENTITY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Projectile
   */
  get_item_key_projectile_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Projectile;

  /**
   * Get PROJECTILE_ENTITY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Projectile
   */
  get_ability_key_projectile_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Projectile;

  /**
   * Get PROJECTILE_ENTITY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Projectile
   */
  get_modifier_key_projectile_entity_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Projectile;

  /**
   * Get PROJECTILE_ENTITY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Projectile
   */
  get_projectile_key_projectile_entity_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Projectile;

  /**
   * Get PROJECTILE_ENTITY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Projectile
   */
  get_tech_key_projectile_entity_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Projectile;

  /**
   * Get PROJECTILE_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Projectile
   */
  get_kv_pair_value_projectile_entity: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Projectile;

  /**
   * Get PROJECTILE_GROUP key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns ProjectileGroup
   */
  get_unit_key_projectile_group_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => ProjectileGroup;

  /**
   * Get PROJECTILE_GROUP key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns ProjectileGroup
   */
  get_item_key_projectile_group_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => ProjectileGroup;

  /**
   * Get PROJECTILE_GROUP key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns ProjectileGroup
   */
  get_ability_key_projectile_group_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => ProjectileGroup;

  /**
   * Get PROJECTILE_GROUP key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns ProjectileGroup
   */
  get_modifier_key_projectile_group_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => ProjectileGroup;

  /**
   * Get PROJECTILE_GROUP key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns ProjectileGroup
   */
  get_projectile_key_projectile_group_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => ProjectileGroup;

  /**
   * Get PROJECTILE_GROUP key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns ProjectileGroup
   */
  get_tech_key_projectile_group_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => ProjectileGroup;

  /**
   * Get PROJECTILE_GROUP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns ProjectileGroup
   */
  get_kv_pair_value_projectile_group: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => ProjectileGroup;

  /**
   * Get DESTRUCTIBLE_ENTITY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Destructible
   */
  get_unit_key_destructible_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Destructible;

  /**
   * Get DESTRUCTIBLE_ENTITY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Destructible
   */
  get_item_key_destructible_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Destructible;

  /**
   * Get DESTRUCTIBLE_ENTITY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Destructible
   */
  get_ability_key_destructible_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Destructible;

  /**
   * Get DESTRUCTIBLE_ENTITY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Destructible
   */
  get_modifier_key_destructible_entity_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Destructible;

  /**
   * Get DESTRUCTIBLE_ENTITY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Destructible
   */
  get_projectile_key_destructible_entity_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Destructible;

  /**
   * Get DESTRUCTIBLE_ENTITY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Destructible
   */
  get_tech_key_destructible_entity_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Destructible;

  /**
   * Get DESTRUCTIBLE_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Destructible
   */
  get_kv_pair_value_destructible_entity: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Destructible;

  /**
   * Get DESTRUCTIBLE_NAME key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns DestructibleKey
   */
  get_unit_key_destructible_name_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => DestructibleKey;

  /**
   * Get DESTRUCTIBLE_NAME key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns DestructibleKey
   */
  get_item_key_destructible_name_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => DestructibleKey;

  /**
   * Get DESTRUCTIBLE_NAME key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns DestructibleKey
   */
  get_ability_key_destructible_name_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => DestructibleKey;

  /**
   * Get DESTRUCTIBLE_NAME key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns DestructibleKey
   */
  get_modifier_key_destructible_name_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => DestructibleKey;

  /**
   * Get DESTRUCTIBLE_NAME key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns DestructibleKey
   */
  get_projectile_key_destructible_name_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => DestructibleKey;

  /**
   * Get DESTRUCTIBLE_NAME key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns DestructibleKey
   */
  get_tech_key_destructible_name_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => DestructibleKey;

  /**
   * Get DESTRUCTIBLE_NAME key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns DestructibleKey
   */
  get_kv_pair_value_destructible_name: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => DestructibleKey;

  /**
   * Get SOUND_ENTITY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns SoundEntity
   */
  get_unit_key_sound_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => SoundEntity;

  /**
   * Get SOUND_ENTITY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns SoundEntity
   */
  get_item_key_sound_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => SoundEntity;

  /**
   * Get SOUND_ENTITY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns SoundEntity
   */
  get_ability_key_sound_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => SoundEntity;

  /**
   * Get SOUND_ENTITY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns SoundEntity
   */
  get_modifier_key_sound_entity_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => SoundEntity;

  /**
   * Get SOUND_ENTITY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns SoundEntity
   */
  get_projectile_key_sound_entity_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => SoundEntity;

  /**
   * Get SOUND_ENTITY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns SoundEntity
   */
  get_tech_key_sound_entity_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => SoundEntity;

  /**
   * Get SOUND_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns SoundEntity
   */
  get_kv_pair_value_sound_entity: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => SoundEntity;

  /**
   * Get PLAYER key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Role
   */
  get_unit_key_player_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Role;

  /**
   * Get PLAYER key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Role
   */
  get_item_key_player_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Role;

  /**
   * Get PLAYER key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Role
   */
  get_ability_key_player_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Role;

  /**
   * Get PLAYER key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Role
   */
  get_modifier_key_player_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Role;

  /**
   * Get PLAYER key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Role
   */
  get_projectile_key_player_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Role;

  /**
   * Get PLAYER key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Role
   */
  get_tech_key_player_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Role;

  /**
   * Get PLAYER key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Role
   */
  get_kv_pair_value_player: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Role;

  /**
   * Get PLAYER_GROUP key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns RoleGroup
   */
  get_unit_key_player_group_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => RoleGroup;

  /**
   * Get PLAYER_GROUP key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns RoleGroup
   */
  get_item_key_player_group_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => RoleGroup;

  /**
   * Get PLAYER_GROUP key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns RoleGroup
   */
  get_ability_key_player_group_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => RoleGroup;

  /**
   * Get PLAYER_GROUP key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns RoleGroup
   */
  get_modifier_key_player_group_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => RoleGroup;

  /**
   * Get PLAYER_GROUP key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns RoleGroup
   */
  get_projectile_key_player_group_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => RoleGroup;

  /**
   * Get PLAYER_GROUP key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns RoleGroup
   */
  get_tech_key_player_group_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => RoleGroup;

  /**
   * Get PLAYER_GROUP key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns RoleGroup
   */
  get_kv_pair_value_player_group: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => RoleGroup;

  /**
   * Get ROLE_RES_KEY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns RoleResKey
   */
  get_unit_key_role_res_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => RoleResKey;

  /**
   * Get ROLE_RES_KEY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns RoleResKey
   */
  get_item_key_role_res_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => RoleResKey;

  /**
   * Get ROLE_RES_KEY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns RoleResKey
   */
  get_ability_key_role_res_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => RoleResKey;

  /**
   * Get ROLE_RES_KEY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns RoleResKey
   */
  get_modifier_key_role_res_key_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => RoleResKey;

  /**
   * Get ROLE_RES_KEY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns RoleResKey
   */
  get_projectile_key_role_res_key_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => RoleResKey;

  /**
   * Get ROLE_RES_KEY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns RoleResKey
   */
  get_tech_key_role_res_key_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => RoleResKey;

  /**
   * Get ROLE_RES_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns RoleResKey
   */
  get_kv_pair_value_role_res_key: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => RoleResKey;

  /**
   * Get ROLE_STATUS key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns RoleStatus
   */
  get_unit_key_role_status_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => RoleStatus;

  /**
   * Get ROLE_STATUS key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns RoleStatus
   */
  get_item_key_role_status_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => RoleStatus;

  /**
   * Get ROLE_STATUS key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns RoleStatus
   */
  get_ability_key_role_status_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => RoleStatus;

  /**
   * Get ROLE_STATUS key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns RoleStatus
   */
  get_modifier_key_role_status_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => RoleStatus;

  /**
   * Get ROLE_STATUS key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns RoleStatus
   */
  get_projectile_key_role_status_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => RoleStatus;

  /**
   * Get ROLE_STATUS key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns RoleStatus
   */
  get_tech_key_role_status_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => RoleStatus;

  /**
   * Get ROLE_STATUS key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns RoleStatus
   */
  get_kv_pair_value_role_status: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => RoleStatus;

  /**
   * Get ROLE_TYPE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns RoleType
   */
  get_unit_key_role_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => RoleType;

  /**
   * Get ROLE_TYPE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns RoleType
   */
  get_item_key_role_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => RoleType;

  /**
   * Get ROLE_TYPE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns RoleType
   */
  get_ability_key_role_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => RoleType;

  /**
   * Get ROLE_TYPE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns RoleType
   */
  get_modifier_key_role_type_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => RoleType;

  /**
   * Get ROLE_TYPE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns RoleType
   */
  get_projectile_key_role_type_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => RoleType;

  /**
   * Get ROLE_TYPE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns RoleType
   */
  get_tech_key_role_type_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => RoleType;

  /**
   * Get ROLE_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns RoleType
   */
  get_kv_pair_value_role_type: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => RoleType;

  /**
   * Get TEAM key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Camp
   */
  get_unit_key_team_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Camp;

  /**
   * Get TEAM key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Camp
   */
  get_item_key_team_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Camp;

  /**
   * Get TEAM key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Camp
   */
  get_ability_key_team_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Camp;

  /**
   * Get TEAM key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Camp
   */
  get_modifier_key_team_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Camp;

  /**
   * Get TEAM key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Camp
   */
  get_projectile_key_team_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Camp;

  /**
   * Get TEAM key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Camp
   */
  get_tech_key_team_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Camp;

  /**
   * Get TEAM key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Camp
   */
  get_kv_pair_value_team: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Camp;

  /**
   * Get POINT key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns FPoint
   */
  get_unit_key_point_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => FPoint;

  /**
   * Get POINT key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns FPoint
   */
  get_item_key_point_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => FPoint;

  /**
   * Get POINT key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns FPoint
   */
  get_ability_key_point_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => FPoint;

  /**
   * Get POINT key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns FPoint
   */
  get_modifier_key_point_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => FPoint;

  /**
   * Get POINT key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns FPoint
   */
  get_projectile_key_point_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => FPoint;

  /**
   * Get POINT key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns FPoint
   */
  get_tech_key_point_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => FPoint;

  /**
   * Get POINT key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns FPoint
   */
  get_kv_pair_value_point: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => FPoint;

  /**
   * Get POINT_LIST key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Road
   */
  get_unit_key_point_list_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Road;

  /**
   * Get POINT_LIST key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Road
   */
  get_item_key_point_list_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Road;

  /**
   * Get POINT_LIST key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Road
   */
  get_ability_key_point_list_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Road;

  /**
   * Get POINT_LIST key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Road
   */
  get_modifier_key_point_list_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Road;

  /**
   * Get POINT_LIST key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Road
   */
  get_projectile_key_point_list_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Road;

  /**
   * Get POINT_LIST key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Road
   */
  get_tech_key_point_list_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Road;

  /**
   * Get POINT_LIST key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Road
   */
  get_kv_pair_value_point_list: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Road;

  /**
   * Get RECTANGLE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns RecArea
   */
  get_unit_key_rectangle_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => RecArea;

  /**
   * Get RECTANGLE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns RecArea
   */
  get_item_key_rectangle_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => RecArea;

  /**
   * Get RECTANGLE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns RecArea
   */
  get_ability_key_rectangle_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => RecArea;

  /**
   * Get RECTANGLE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns RecArea
   */
  get_modifier_key_rectangle_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => RecArea;

  /**
   * Get RECTANGLE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns RecArea
   */
  get_projectile_key_rectangle_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => RecArea;

  /**
   * Get RECTANGLE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns RecArea
   */
  get_tech_key_rectangle_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => RecArea;

  /**
   * Get RECTANGLE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns RecArea
   */
  get_kv_pair_value_rectangle: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => RecArea;

  /**
   * Get ROUND_AREA key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns CirArea
   */
  get_unit_key_round_area_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => CirArea;

  /**
   * Get ROUND_AREA key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns CirArea
   */
  get_item_key_round_area_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => CirArea;

  /**
   * Get ROUND_AREA key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns CirArea
   */
  get_ability_key_round_area_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => CirArea;

  /**
   * Get ROUND_AREA key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns CirArea
   */
  get_modifier_key_round_area_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => CirArea;

  /**
   * Get ROUND_AREA key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns CirArea
   */
  get_projectile_key_round_area_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => CirArea;

  /**
   * Get ROUND_AREA key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns CirArea
   */
  get_tech_key_round_area_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => CirArea;

  /**
   * Get ROUND_AREA key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns CirArea
   */
  get_kv_pair_value_round_area: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => CirArea;

  /**
   * Get POLYGON key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns PolyArea
   */
  get_unit_key_polygon_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => PolyArea;

  /**
   * Get POLYGON key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns PolyArea
   */
  get_item_key_polygon_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => PolyArea;

  /**
   * Get POLYGON key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns PolyArea
   */
  get_ability_key_polygon_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => PolyArea;

  /**
   * Get POLYGON key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns PolyArea
   */
  get_modifier_key_polygon_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => PolyArea;

  /**
   * Get POLYGON key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns PolyArea
   */
  get_projectile_key_polygon_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => PolyArea;

  /**
   * Get POLYGON key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns PolyArea
   */
  get_tech_key_polygon_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => PolyArea;

  /**
   * Get POLYGON key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns PolyArea
   */
  get_kv_pair_value_polygon: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => PolyArea;

  /**
   * Get CAMERA key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Camera
   */
  get_unit_key_camera_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Camera;

  /**
   * Get CAMERA key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Camera
   */
  get_item_key_camera_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Camera;

  /**
   * Get CAMERA key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Camera
   */
  get_ability_key_camera_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Camera;

  /**
   * Get CAMERA key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Camera
   */
  get_modifier_key_camera_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Camera;

  /**
   * Get CAMERA key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Camera
   */
  get_projectile_key_camera_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Camera;

  /**
   * Get CAMERA key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Camera
   */
  get_tech_key_camera_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Camera;

  /**
   * Get CAMERA key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Camera
   */
  get_kv_pair_value_camera: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Camera;

  /**
   * Get MODEL_ENTITY_NEW key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Model
   */
  get_unit_key_model_entity_new_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Model;

  /**
   * Get MODEL_ENTITY_NEW key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Model
   */
  get_item_key_model_entity_new_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Model;

  /**
   * Get MODEL_ENTITY_NEW key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Model
   */
  get_ability_key_model_entity_new_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Model;

  /**
   * Get MODEL_ENTITY_NEW key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Model
   */
  get_modifier_key_model_entity_new_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Model;

  /**
   * Get MODEL_ENTITY_NEW key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Model
   */
  get_projectile_key_model_entity_new_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Model;

  /**
   * Get MODEL_ENTITY_NEW key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Model
   */
  get_tech_key_model_entity_new_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Model;

  /**
   * Get MODEL_ENTITY_NEW key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Model
   */
  get_kv_pair_value_model_entity_new: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Model;

  /**
   * Get MODEL key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns ModelKey
   */
  get_unit_key_model_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => ModelKey;

  /**
   * Get MODEL key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns ModelKey
   */
  get_item_key_model_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => ModelKey;

  /**
   * Get MODEL key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns ModelKey
   */
  get_ability_key_model_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => ModelKey;

  /**
   * Get MODEL key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns ModelKey
   */
  get_modifier_key_model_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => ModelKey;

  /**
   * Get MODEL key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns ModelKey
   */
  get_projectile_key_model_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => ModelKey;

  /**
   * Get MODEL key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns ModelKey
   */
  get_tech_key_model_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => ModelKey;

  /**
   * Get MODEL key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns ModelKey
   */
  get_kv_pair_value_model: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => ModelKey;

  /**
   * Get SFX_ENTITY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Sfx
   */
  get_unit_key_sfx_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Sfx;

  /**
   * Get SFX_ENTITY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Sfx
   */
  get_item_key_sfx_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Sfx;

  /**
   * Get SFX_ENTITY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Sfx
   */
  get_ability_key_sfx_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Sfx;

  /**
   * Get SFX_ENTITY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Sfx
   */
  get_modifier_key_sfx_entity_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Sfx;

  /**
   * Get SFX_ENTITY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Sfx
   */
  get_projectile_key_sfx_entity_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Sfx;

  /**
   * Get SFX_ENTITY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Sfx
   */
  get_tech_key_sfx_entity_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Sfx;

  /**
   * Get SFX_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Sfx
   */
  get_kv_pair_value_sfx_entity: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Sfx;

  /**
   * Get SFX_KEY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns SfxKey
   */
  get_unit_key_sfx_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => SfxKey;

  /**
   * Get SFX_KEY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns SfxKey
   */
  get_item_key_sfx_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => SfxKey;

  /**
   * Get SFX_KEY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns SfxKey
   */
  get_ability_key_sfx_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => SfxKey;

  /**
   * Get SFX_KEY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns SfxKey
   */
  get_modifier_key_sfx_key_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => SfxKey;

  /**
   * Get SFX_KEY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns SfxKey
   */
  get_projectile_key_sfx_key_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => SfxKey;

  /**
   * Get SFX_KEY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns SfxKey
   */
  get_tech_key_sfx_key_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => SfxKey;

  /**
   * Get SFX_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns SfxKey
   */
  get_kv_pair_value_sfx_key: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => SfxKey;

  /**
   * Get LINK_SFX_ENTITY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns LinkSfx
   */
  get_unit_key_link_sfx_entity_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => LinkSfx;

  /**
   * Get LINK_SFX_ENTITY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns LinkSfx
   */
  get_item_key_link_sfx_entity_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => LinkSfx;

  /**
   * Get LINK_SFX_ENTITY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns LinkSfx
   */
  get_ability_key_link_sfx_entity_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => LinkSfx;

  /**
   * Get LINK_SFX_ENTITY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns LinkSfx
   */
  get_modifier_key_link_sfx_entity_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => LinkSfx;

  /**
   * Get LINK_SFX_ENTITY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns LinkSfx
   */
  get_projectile_key_link_sfx_entity_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => LinkSfx;

  /**
   * Get LINK_SFX_ENTITY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns LinkSfx
   */
  get_tech_key_link_sfx_entity_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => LinkSfx;

  /**
   * Get LINK_SFX_ENTITY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns LinkSfx
   */
  get_kv_pair_value_link_sfx_entity: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => LinkSfx;

  /**
   * Get DYNAMIC_TRIGGER_INSTANCE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns DynamicTriggerInstance
   */
  get_unit_key_dynamic_trigger_instance_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => DynamicTriggerInstance;

  /**
   * Get DYNAMIC_TRIGGER_INSTANCE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns DynamicTriggerInstance
   */
  get_item_key_dynamic_trigger_instance_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => DynamicTriggerInstance;

  /**
   * Get DYNAMIC_TRIGGER_INSTANCE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns DynamicTriggerInstance
   */
  get_ability_key_dynamic_trigger_instance_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => DynamicTriggerInstance;

  /**
   * Get DYNAMIC_TRIGGER_INSTANCE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns DynamicTriggerInstance
   */
  get_modifier_key_dynamic_trigger_instance_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => DynamicTriggerInstance;

  /**
   * Get DYNAMIC_TRIGGER_INSTANCE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns DynamicTriggerInstance
   */
  get_projectile_key_dynamic_trigger_instance_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => DynamicTriggerInstance;

  /**
   * Get DYNAMIC_TRIGGER_INSTANCE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns DynamicTriggerInstance
   */
  get_tech_key_dynamic_trigger_instance_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => DynamicTriggerInstance;

  /**
   * Get DYNAMIC_TRIGGER_INSTANCE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns DynamicTriggerInstance
   */
  get_kv_pair_value_dynamic_trigger_instance: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => DynamicTriggerInstance;

  /**
   * Get RANDOM_POOL key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns RandomPool
   */
  get_unit_key_random_pool_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => RandomPool;

  /**
   * Get RANDOM_POOL key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns RandomPool
   */
  get_item_key_random_pool_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => RandomPool;

  /**
   * Get RANDOM_POOL key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns RandomPool
   */
  get_ability_key_random_pool_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => RandomPool;

  /**
   * Get RANDOM_POOL key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns RandomPool
   */
  get_modifier_key_random_pool_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => RandomPool;

  /**
   * Get RANDOM_POOL key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns RandomPool
   */
  get_projectile_key_random_pool_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => RandomPool;

  /**
   * Get RANDOM_POOL key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns RandomPool
   */
  get_tech_key_random_pool_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => RandomPool;

  /**
   * Get RANDOM_POOL key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns RandomPool
   */
  get_kv_pair_value_random_pool: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => RandomPool;

  /**
   * Get DAMAGE_TYPE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Int32
   */
  get_unit_key_damage_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get DAMAGE_TYPE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Int32
   */
  get_item_key_damage_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get DAMAGE_TYPE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Int32
   */
  get_ability_key_damage_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get DAMAGE_TYPE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Int32
   */
  get_modifier_key_damage_type_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get DAMAGE_TYPE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Int32
   */
  get_projectile_key_damage_type_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get DAMAGE_TYPE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Int32
   */
  get_tech_key_damage_type_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get DAMAGE_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Int32
   */
  get_kv_pair_value_damage_type: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Int32;

  /**
   * Get NEW_TIMER key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns Timer
   */
  get_unit_key_new_timer_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => Timer;

  /**
   * Get NEW_TIMER key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns Timer
   */
  get_item_key_new_timer_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => Timer;

  /**
   * Get NEW_TIMER key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns Timer
   */
  get_ability_key_new_timer_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => Timer;

  /**
   * Get NEW_TIMER key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns Timer
   */
  get_modifier_key_new_timer_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => Timer;

  /**
   * Get NEW_TIMER key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns Timer
   */
  get_projectile_key_new_timer_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => Timer;

  /**
   * Get NEW_TIMER key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns Timer
   */
  get_tech_key_new_timer_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => Timer;

  /**
   * Get NEW_TIMER key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns Timer
   */
  get_kv_pair_value_new_timer: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => Timer;

  /**
   * Get TECH_KEY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns TechKey
   */
  get_unit_key_tech_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => TechKey;

  /**
   * Get TECH_KEY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns TechKey
   */
  get_item_key_tech_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => TechKey;

  /**
   * Get TECH_KEY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns TechKey
   */
  get_ability_key_tech_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => TechKey;

  /**
   * Get TECH_KEY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns TechKey
   */
  get_modifier_key_tech_key_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => TechKey;

  /**
   * Get TECH_KEY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns TechKey
   */
  get_projectile_key_tech_key_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => TechKey;

  /**
   * Get TECH_KEY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns TechKey
   */
  get_tech_key_tech_key_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => TechKey;

  /**
   * Get TECH_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns TechKey
   */
  get_kv_pair_value_tech_key: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => TechKey;

  /**
   * Get STORE_KEY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns StoreKey
   */
  get_unit_key_store_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => StoreKey;

  /**
   * Get STORE_KEY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns StoreKey
   */
  get_item_key_store_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => StoreKey;

  /**
   * Get STORE_KEY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns StoreKey
   */
  get_ability_key_store_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => StoreKey;

  /**
   * Get STORE_KEY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns StoreKey
   */
  get_modifier_key_store_key_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => StoreKey;

  /**
   * Get STORE_KEY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns StoreKey
   */
  get_projectile_key_store_key_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => StoreKey;

  /**
   * Get STORE_KEY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns StoreKey
   */
  get_tech_key_store_key_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => StoreKey;

  /**
   * Get STORE_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns StoreKey
   */
  get_kv_pair_value_store_key: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => StoreKey;

  /**
   * Get KEYBOARD_KEY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns KeyboardKey
   */
  get_unit_key_keyboard_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => KeyboardKey;

  /**
   * Get KEYBOARD_KEY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns KeyboardKey
   */
  get_item_key_keyboard_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => KeyboardKey;

  /**
   * Get KEYBOARD_KEY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns KeyboardKey
   */
  get_ability_key_keyboard_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => KeyboardKey;

  /**
   * Get KEYBOARD_KEY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns KeyboardKey
   */
  get_modifier_key_keyboard_key_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => KeyboardKey;

  /**
   * Get KEYBOARD_KEY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns KeyboardKey
   */
  get_projectile_key_keyboard_key_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => KeyboardKey;

  /**
   * Get KEYBOARD_KEY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns KeyboardKey
   */
  get_tech_key_keyboard_key_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => KeyboardKey;

  /**
   * Get KEYBOARD_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns KeyboardKey
   */
  get_kv_pair_value_keyboard_key: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => KeyboardKey;

  /**
   * Get MOUSE_KEY key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns MouseKey
   */
  get_unit_key_mouse_key_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => MouseKey;

  /**
   * Get MOUSE_KEY key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns MouseKey
   */
  get_item_key_mouse_key_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => MouseKey;

  /**
   * Get MOUSE_KEY key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns MouseKey
   */
  get_ability_key_mouse_key_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => MouseKey;

  /**
   * Get MOUSE_KEY key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns MouseKey
   */
  get_modifier_key_mouse_key_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => MouseKey;

  /**
   * Get MOUSE_KEY key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns MouseKey
   */
  get_projectile_key_mouse_key_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => MouseKey;

  /**
   * Get MOUSE_KEY key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns MouseKey
   */
  get_tech_key_mouse_key_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => MouseKey;

  /**
   * Get MOUSE_KEY key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns MouseKey
   */
  get_kv_pair_value_mouse_key: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => MouseKey;

  /**
   * Get UNIT_TYPE key-value pair of unit ID.
   * @param unit_key Unit ID
   * @param key Key
   * @returns UnitType
   */
  get_unit_key_unit_type_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => UnitType;

  /**
   * Get UNIT_TYPE key-value pair of item ID.
   * @param item_key Item ID
   * @param key Key
   * @returns UnitType
   */
  get_item_key_unit_type_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => UnitType;

  /**
   * Get UNIT_TYPE key-value pair of ability ID.
   * @param ability_key Ability ID
   * @param key Key
   * @returns UnitType
   */
  get_ability_key_unit_type_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => UnitType;

  /**
   * Get UNIT_TYPE key-value pair of modifier ID.
   * @param modifier_key Modifier ID
   * @param key Key
   * @returns UnitType
   */
  get_modifier_key_unit_type_kv: (
    /** Modifier ID */
    modifier_key: ModifierKey,
    /** Key */
    key: string,
  ) => UnitType;

  /**
   * Get UNIT_TYPE key-value pair of particle ID.
   * @param projectile_key Particle ID
   * @param key Key
   * @returns UnitType
   */
  get_projectile_key_unit_type_kv: (
    /** Particle ID */
    projectile_key: ProjectileKey,
    /** Key */
    key: string,
  ) => UnitType;

  /**
   * Get UNIT_TYPE key-value pair of tech ID.
   * @param tech_key Tech ID
   * @param key Key
   * @returns UnitType
   */
  get_tech_key_unit_type_kv: (
    /** Tech ID */
    tech_key: TechKey,
    /** Key */
    key: string,
  ) => UnitType;

  /**
   * Get UNIT_TYPE key-value pair.
   * @param kvbase Custom key carrier
   * @param key Key
   * @returns UnitType
   */
  get_kv_pair_value_unit_type: (
    /** Custom key carrier */
    kvbase: KVBase,
    /** Key */
    key: string,
  ) => UnitType;

  /**
   * Get the global trigger’s BOOLEAN non-array variable.
   * @param key Variable name
   * @returns boolean
   */
  get_trigger_variable_boolean: (
    /** Variable name */
    key: string,
  ) => boolean;

  /**
   * Get the trigger’s BOOLEAN non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns boolean
   */
  get_trigger_actor_variable_boolean: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => boolean;

  /**
   * Get the sub-item of the global trigger’s BOOLEAN array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns boolean
   */
  get_trigger_list_variable_boolean: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => boolean;

  /**
   * Get the sub-item of the trigger’s BOOLEAN array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns boolean
   */
  get_trigger_list_actor_variable_boolean: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => boolean;

  /**
   * Get the global trigger’s BOOLEAN array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_boolean: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s BOOLEAN group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_boolean: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s INTEGER non-array variable.
   * @param key Variable name
   * @returns Int32
   */
  get_trigger_variable_integer: (
    /** Variable name */
    key: string,
  ) => Int32;

  /**
   * Get the trigger’s INTEGER non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Int32
   */
  get_trigger_actor_variable_integer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Int32;

  /**
   * Get the sub-item of the global trigger’s INTEGER array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Int32
   */
  get_trigger_list_variable_integer: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Int32;

  /**
   * Get the sub-item of the trigger’s INTEGER array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Int32
   */
  get_trigger_list_actor_variable_integer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Int32;

  /**
   * Get the global trigger’s INTEGER array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_integer: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s INTEGER group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_integer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s FLOAT non-array variable.
   * @param key Variable name
   * @returns Fixed
   */
  get_trigger_variable_float: (
    /** Variable name */
    key: string,
  ) => Fixed;

  /**
   * Get the trigger’s FLOAT non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Fixed
   */
  get_trigger_actor_variable_float: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Fixed;

  /**
   * Get the sub-item of the global trigger’s FLOAT array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Fixed
   */
  get_trigger_list_variable_float: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Fixed;

  /**
   * Get the sub-item of the trigger’s FLOAT array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Fixed
   */
  get_trigger_list_actor_variable_float: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Fixed;

  /**
   * Get the global trigger’s FLOAT array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_float: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s FLOAT group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_float: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s STRING non-array variable.
   * @param key Variable name
   * @returns string
   */
  get_trigger_variable_string: (
    /** Variable name */
    key: string,
  ) => string;

  /**
   * Get the trigger’s STRING non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns string
   */
  get_trigger_actor_variable_string: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => string;

  /**
   * Get the sub-item of the global trigger’s STRING array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns string
   */
  get_trigger_list_variable_string: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => string;

  /**
   * Get the sub-item of the trigger’s STRING array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns string
   */
  get_trigger_list_actor_variable_string: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => string;

  /**
   * Get the global trigger’s STRING array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_string: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s STRING group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_string: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s UI_COMP non-array variable.
   * @param key Variable name
   * @returns string
   */
  get_trigger_variable_ui_comp: (
    /** Variable name */
    key: string,
  ) => string;

  /**
   * Get the trigger’s UI_COMP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns string
   */
  get_trigger_actor_variable_ui_comp: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => string;

  /**
   * Get the sub-item of the global trigger’s UI_COMP array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns string
   */
  get_trigger_list_variable_ui_comp: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => string;

  /**
   * Get the sub-item of the trigger’s UI_COMP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns string
   */
  get_trigger_list_actor_variable_ui_comp: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => string;

  /**
   * Get the global trigger’s UI_COMP array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_ui_comp: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s UI_COMP group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_ui_comp: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s UNIT_ENTITY non-array variable.
   * @param key Variable name
   * @returns Unit
   */
  get_trigger_variable_unit_entity: (
    /** Variable name */
    key: string,
  ) => Unit;

  /**
   * Get the trigger’s UNIT_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Unit
   */
  get_trigger_actor_variable_unit_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Unit;

  /**
   * Get the sub-item of the global trigger’s UNIT_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Unit
   */
  get_trigger_list_variable_unit_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Unit;

  /**
   * Get the sub-item of the trigger’s UNIT_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Unit
   */
  get_trigger_list_actor_variable_unit_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Unit;

  /**
   * Get the global trigger’s UNIT_ENTITY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_unit_entity: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s UNIT_ENTITY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_unit_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s UNIT_GROUP non-array variable.
   * @param key Variable name
   * @returns UnitGroup
   */
  get_trigger_variable_unit_group: (
    /** Variable name */
    key: string,
  ) => UnitGroup;

  /**
   * Get the trigger’s UNIT_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns UnitGroup
   */
  get_trigger_actor_variable_unit_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => UnitGroup;

  /**
   * Get the sub-item of the global trigger’s UNIT_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns UnitGroup
   */
  get_trigger_list_variable_unit_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => UnitGroup;

  /**
   * Get the sub-item of the trigger’s UNIT_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns UnitGroup
   */
  get_trigger_list_actor_variable_unit_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => UnitGroup;

  /**
   * Get the global trigger’s UNIT_GROUP array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_unit_group: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s UNIT_GROUP group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_unit_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s UNIT_NAME non-array variable.
   * @param key Variable name
   * @returns UnitKey
   */
  get_trigger_variable_unit_name: (
    /** Variable name */
    key: string,
  ) => UnitKey;

  /**
   * Get the trigger’s UNIT_NAME non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns UnitKey
   */
  get_trigger_actor_variable_unit_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => UnitKey;

  /**
   * Get the sub-item of the global trigger’s UNIT_NAME array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns UnitKey
   */
  get_trigger_list_variable_unit_name: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => UnitKey;

  /**
   * Get the sub-item of the trigger’s UNIT_NAME array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns UnitKey
   */
  get_trigger_list_actor_variable_unit_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => UnitKey;

  /**
   * Get the global trigger’s UNIT_NAME array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_unit_name: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s UNIT_NAME group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_unit_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s UNIT_NAME_POOL non-array variable.
   * @param key Variable name
   * @returns UnitKeyPool
   */
  get_trigger_variable_unit_name_pool: (
    /** Variable name */
    key: string,
  ) => UnitKeyPool;

  /**
   * Get the trigger’s UNIT_NAME_POOL non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns UnitKeyPool
   */
  get_trigger_actor_variable_unit_name_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => UnitKeyPool;

  /**
   * Get the sub-item of the global trigger’s UNIT_NAME_POOL array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns UnitKeyPool
   */
  get_trigger_list_variable_unit_name_pool: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => UnitKeyPool;

  /**
   * Get the sub-item of the trigger’s UNIT_NAME_POOL array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns UnitKeyPool
   */
  get_trigger_list_actor_variable_unit_name_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => UnitKeyPool;

  /**
   * Get the global trigger’s UNIT_NAME_POOL array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_unit_name_pool: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s UNIT_NAME_POOL group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_unit_name_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s UNIT_WRITE_ATTRIBUTE non-array variable.
   * @param key Variable name
   * @returns string
   */
  get_trigger_variable_unit_write_attribute: (
    /** Variable name */
    key: string,
  ) => string;

  /**
   * Get the trigger’s UNIT_WRITE_ATTRIBUTE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns string
   */
  get_trigger_actor_variable_unit_write_attribute: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => string;

  /**
   * Get the sub-item of the global trigger’s UNIT_WRITE_ATTRIBUTE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns string
   */
  get_trigger_list_variable_unit_write_attribute: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => string;

  /**
   * Get the sub-item of the trigger’s UNIT_WRITE_ATTRIBUTE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns string
   */
  get_trigger_list_actor_variable_unit_write_attribute: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => string;

  /**
   * Get the global trigger’s UNIT_WRITE_ATTRIBUTE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_unit_write_attribute: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s UNIT_WRITE_ATTRIBUTE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_unit_write_attribute: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ATTR_ELEMENT non-array variable.
   * @param key Variable name
   * @returns string
   */
  get_trigger_variable_attr_element: (
    /** Variable name */
    key: string,
  ) => string;

  /**
   * Get the trigger’s ATTR_ELEMENT non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns string
   */
  get_trigger_actor_variable_attr_element: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => string;

  /**
   * Get the sub-item of the global trigger’s ATTR_ELEMENT array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns string
   */
  get_trigger_list_variable_attr_element: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => string;

  /**
   * Get the sub-item of the trigger’s ATTR_ELEMENT array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns string
   */
  get_trigger_list_actor_variable_attr_element: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => string;

  /**
   * Get the global trigger’s ATTR_ELEMENT array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_attr_element: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ATTR_ELEMENT group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_attr_element: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ITEM_ENTITY non-array variable.
   * @param key Variable name
   * @returns Item
   */
  get_trigger_variable_item_entity: (
    /** Variable name */
    key: string,
  ) => Item;

  /**
   * Get the trigger’s ITEM_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Item
   */
  get_trigger_actor_variable_item_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Item;

  /**
   * Get the sub-item of the global trigger’s ITEM_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Item
   */
  get_trigger_list_variable_item_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Item;

  /**
   * Get the sub-item of the trigger’s ITEM_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Item
   */
  get_trigger_list_actor_variable_item_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Item;

  /**
   * Get the global trigger’s ITEM_ENTITY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_item_entity: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ITEM_ENTITY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_item_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ITEM_GROUP non-array variable.
   * @param key Variable name
   * @returns ItemGroup
   */
  get_trigger_variable_item_group: (
    /** Variable name */
    key: string,
  ) => ItemGroup;

  /**
   * Get the trigger’s ITEM_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns ItemGroup
   */
  get_trigger_actor_variable_item_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => ItemGroup;

  /**
   * Get the sub-item of the global trigger’s ITEM_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns ItemGroup
   */
  get_trigger_list_variable_item_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ItemGroup;

  /**
   * Get the sub-item of the trigger’s ITEM_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns ItemGroup
   */
  get_trigger_list_actor_variable_item_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ItemGroup;

  /**
   * Get the global trigger’s ITEM_GROUP array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_item_group: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ITEM_GROUP group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_item_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ITEM_NAME non-array variable.
   * @param key Variable name
   * @returns ItemKey
   */
  get_trigger_variable_item_name: (
    /** Variable name */
    key: string,
  ) => ItemKey;

  /**
   * Get the trigger’s ITEM_NAME non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns ItemKey
   */
  get_trigger_actor_variable_item_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => ItemKey;

  /**
   * Get the sub-item of the global trigger’s ITEM_NAME array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns ItemKey
   */
  get_trigger_list_variable_item_name: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ItemKey;

  /**
   * Get the sub-item of the trigger’s ITEM_NAME array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns ItemKey
   */
  get_trigger_list_actor_variable_item_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ItemKey;

  /**
   * Get the global trigger’s ITEM_NAME array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_item_name: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ITEM_NAME group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_item_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ABILITY non-array variable.
   * @param key Variable name
   * @returns Ability
   */
  get_trigger_variable_ability: (
    /** Variable name */
    key: string,
  ) => Ability;

  /**
   * Get the trigger’s ABILITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Ability
   */
  get_trigger_actor_variable_ability: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Ability;

  /**
   * Get the sub-item of the global trigger’s ABILITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Ability
   */
  get_trigger_list_variable_ability: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Ability;

  /**
   * Get the sub-item of the trigger’s ABILITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Ability
   */
  get_trigger_list_actor_variable_ability: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Ability;

  /**
   * Get the global trigger’s ABILITY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_ability: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ABILITY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_ability: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ABILITY_TYPE non-array variable.
   * @param key Variable name
   * @returns Int32
   */
  get_trigger_variable_ability_type: (
    /** Variable name */
    key: string,
  ) => Int32;

  /**
   * Get the trigger’s ABILITY_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Int32
   */
  get_trigger_actor_variable_ability_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Int32;

  /**
   * Get the sub-item of the global trigger’s ABILITY_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Int32
   */
  get_trigger_list_variable_ability_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Int32;

  /**
   * Get the sub-item of the trigger’s ABILITY_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Int32
   */
  get_trigger_list_actor_variable_ability_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Int32;

  /**
   * Get the global trigger’s ABILITY_TYPE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_ability_type: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ABILITY_TYPE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_ability_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ABILITY_CAST_TYPE non-array variable.
   * @param key Variable name
   * @returns Int32
   */
  get_trigger_variable_ability_cast_type: (
    /** Variable name */
    key: string,
  ) => Int32;

  /**
   * Get the trigger’s ABILITY_CAST_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Int32
   */
  get_trigger_actor_variable_ability_cast_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Int32;

  /**
   * Get the sub-item of the global trigger’s ABILITY_CAST_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Int32
   */
  get_trigger_list_variable_ability_cast_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Int32;

  /**
   * Get the sub-item of the trigger’s ABILITY_CAST_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Int32
   */
  get_trigger_list_actor_variable_ability_cast_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Int32;

  /**
   * Get the global trigger’s ABILITY_CAST_TYPE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_ability_cast_type: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ABILITY_CAST_TYPE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_ability_cast_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ABILITY_NAME non-array variable.
   * @param key Variable name
   * @returns AbilityKey
   */
  get_trigger_variable_ability_name: (
    /** Variable name */
    key: string,
  ) => AbilityKey;

  /**
   * Get the trigger’s ABILITY_NAME non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns AbilityKey
   */
  get_trigger_actor_variable_ability_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => AbilityKey;

  /**
   * Get the sub-item of the global trigger’s ABILITY_NAME array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns AbilityKey
   */
  get_trigger_list_variable_ability_name: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => AbilityKey;

  /**
   * Get the sub-item of the trigger’s ABILITY_NAME array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns AbilityKey
   */
  get_trigger_list_actor_variable_ability_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => AbilityKey;

  /**
   * Get the global trigger’s ABILITY_NAME array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_ability_name: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ABILITY_NAME group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_ability_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s MODIFIER_ENTITY non-array variable.
   * @param key Variable name
   * @returns Modifier
   */
  get_trigger_variable_modifier_entity: (
    /** Variable name */
    key: string,
  ) => Modifier;

  /**
   * Get the trigger’s MODIFIER_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Modifier
   */
  get_trigger_actor_variable_modifier_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Modifier;

  /**
   * Get the sub-item of the global trigger’s MODIFIER_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Modifier
   */
  get_trigger_list_variable_modifier_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Modifier;

  /**
   * Get the sub-item of the trigger’s MODIFIER_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Modifier
   */
  get_trigger_list_actor_variable_modifier_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Modifier;

  /**
   * Get the global trigger’s MODIFIER_ENTITY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_modifier_entity: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s MODIFIER_ENTITY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_modifier_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s MODIFIER_TYPE non-array variable.
   * @param key Variable name
   * @returns ModifierType
   */
  get_trigger_variable_modifier_type: (
    /** Variable name */
    key: string,
  ) => ModifierType;

  /**
   * Get the trigger’s MODIFIER_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns ModifierType
   */
  get_trigger_actor_variable_modifier_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => ModifierType;

  /**
   * Get the sub-item of the global trigger’s MODIFIER_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns ModifierType
   */
  get_trigger_list_variable_modifier_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ModifierType;

  /**
   * Get the sub-item of the trigger’s MODIFIER_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns ModifierType
   */
  get_trigger_list_actor_variable_modifier_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ModifierType;

  /**
   * Get the global trigger’s MODIFIER_TYPE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_modifier_type: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s MODIFIER_TYPE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_modifier_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s MODIFIER_EFFECT_TYPE non-array variable.
   * @param key Variable name
   * @returns ModifierEffectType
   */
  get_trigger_variable_modifier_effect_type: (
    /** Variable name */
    key: string,
  ) => ModifierEffectType;

  /**
   * Get the trigger’s MODIFIER_EFFECT_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns ModifierEffectType
   */
  get_trigger_actor_variable_modifier_effect_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => ModifierEffectType;

  /**
   * Get the sub-item of the global trigger’s MODIFIER_EFFECT_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns ModifierEffectType
   */
  get_trigger_list_variable_modifier_effect_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ModifierEffectType;

  /**
   * Get the sub-item of the trigger’s MODIFIER_EFFECT_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns ModifierEffectType
   */
  get_trigger_list_actor_variable_modifier_effect_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ModifierEffectType;

  /**
   * Get the global trigger’s MODIFIER_EFFECT_TYPE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_modifier_effect_type: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s MODIFIER_EFFECT_TYPE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_modifier_effect_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s MODIFIER non-array variable.
   * @param key Variable name
   * @returns ModifierKey
   */
  get_trigger_variable_modifier: (
    /** Variable name */
    key: string,
  ) => ModifierKey;

  /**
   * Get the trigger’s MODIFIER non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns ModifierKey
   */
  get_trigger_actor_variable_modifier: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => ModifierKey;

  /**
   * Get the sub-item of the global trigger’s MODIFIER array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns ModifierKey
   */
  get_trigger_list_variable_modifier: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ModifierKey;

  /**
   * Get the sub-item of the trigger’s MODIFIER array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns ModifierKey
   */
  get_trigger_list_actor_variable_modifier: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ModifierKey;

  /**
   * Get the global trigger’s MODIFIER array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_modifier: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s MODIFIER group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_modifier: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s PROJECTILE non-array variable.
   * @param key Variable name
   * @returns ProjectileKey
   */
  get_trigger_variable_projectile: (
    /** Variable name */
    key: string,
  ) => ProjectileKey;

  /**
   * Get the trigger’s PROJECTILE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns ProjectileKey
   */
  get_trigger_actor_variable_projectile: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => ProjectileKey;

  /**
   * Get the sub-item of the global trigger’s PROJECTILE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns ProjectileKey
   */
  get_trigger_list_variable_projectile: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ProjectileKey;

  /**
   * Get the sub-item of the trigger’s PROJECTILE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns ProjectileKey
   */
  get_trigger_list_actor_variable_projectile: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ProjectileKey;

  /**
   * Get the global trigger’s PROJECTILE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_projectile: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s PROJECTILE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_projectile: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s PROJECTILE_ENTITY non-array variable.
   * @param key Variable name
   * @returns Projectile
   */
  get_trigger_variable_projectile_entity: (
    /** Variable name */
    key: string,
  ) => Projectile;

  /**
   * Get the trigger’s PROJECTILE_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Projectile
   */
  get_trigger_actor_variable_projectile_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Projectile;

  /**
   * Get the sub-item of the global trigger’s PROJECTILE_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Projectile
   */
  get_trigger_list_variable_projectile_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Projectile;

  /**
   * Get the sub-item of the trigger’s PROJECTILE_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Projectile
   */
  get_trigger_list_actor_variable_projectile_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Projectile;

  /**
   * Get the global trigger’s PROJECTILE_ENTITY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_projectile_entity: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s PROJECTILE_ENTITY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_projectile_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s PROJECTILE_GROUP non-array variable.
   * @param key Variable name
   * @returns ProjectileGroup
   */
  get_trigger_variable_projectile_group: (
    /** Variable name */
    key: string,
  ) => ProjectileGroup;

  /**
   * Get the trigger’s PROJECTILE_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns ProjectileGroup
   */
  get_trigger_actor_variable_projectile_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => ProjectileGroup;

  /**
   * Get the sub-item of the global trigger’s PROJECTILE_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns ProjectileGroup
   */
  get_trigger_list_variable_projectile_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ProjectileGroup;

  /**
   * Get the sub-item of the trigger’s PROJECTILE_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns ProjectileGroup
   */
  get_trigger_list_actor_variable_projectile_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ProjectileGroup;

  /**
   * Get the global trigger’s PROJECTILE_GROUP array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_projectile_group: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s PROJECTILE_GROUP group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_projectile_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s DESTRUCTIBLE_ENTITY non-array variable.
   * @param key Variable name
   * @returns Destructible
   */
  get_trigger_variable_destructible_entity: (
    /** Variable name */
    key: string,
  ) => Destructible;

  /**
   * Get the trigger’s DESTRUCTIBLE_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Destructible
   */
  get_trigger_actor_variable_destructible_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Destructible;

  /**
   * Get the sub-item of the global trigger’s DESTRUCTIBLE_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Destructible
   */
  get_trigger_list_variable_destructible_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Destructible;

  /**
   * Get the sub-item of the trigger’s DESTRUCTIBLE_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Destructible
   */
  get_trigger_list_actor_variable_destructible_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Destructible;

  /**
   * Get the global trigger’s DESTRUCTIBLE_ENTITY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_destructible_entity: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s DESTRUCTIBLE_ENTITY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_destructible_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s DESTRUCTIBLE_NAME non-array variable.
   * @param key Variable name
   * @returns DestructibleKey
   */
  get_trigger_variable_destructible_name: (
    /** Variable name */
    key: string,
  ) => DestructibleKey;

  /**
   * Get the trigger’s DESTRUCTIBLE_NAME non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns DestructibleKey
   */
  get_trigger_actor_variable_destructible_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => DestructibleKey;

  /**
   * Get the sub-item of the global trigger’s DESTRUCTIBLE_NAME array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns DestructibleKey
   */
  get_trigger_list_variable_destructible_name: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => DestructibleKey;

  /**
   * Get the sub-item of the trigger’s DESTRUCTIBLE_NAME array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns DestructibleKey
   */
  get_trigger_list_actor_variable_destructible_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => DestructibleKey;

  /**
   * Get the global trigger’s DESTRUCTIBLE_NAME array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_destructible_name: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s DESTRUCTIBLE_NAME group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_destructible_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s SOUND_ENTITY non-array variable.
   * @param key Variable name
   * @returns SoundEntity
   */
  get_trigger_variable_sound_entity: (
    /** Variable name */
    key: string,
  ) => SoundEntity;

  /**
   * Get the trigger’s SOUND_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns SoundEntity
   */
  get_trigger_actor_variable_sound_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => SoundEntity;

  /**
   * Get the sub-item of the global trigger’s SOUND_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns SoundEntity
   */
  get_trigger_list_variable_sound_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => SoundEntity;

  /**
   * Get the sub-item of the trigger’s SOUND_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns SoundEntity
   */
  get_trigger_list_actor_variable_sound_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => SoundEntity;

  /**
   * Get the global trigger’s SOUND_ENTITY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_sound_entity: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s SOUND_ENTITY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_sound_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s PLAYER non-array variable.
   * @param key Variable name
   * @returns Role
   */
  get_trigger_variable_player: (
    /** Variable name */
    key: string,
  ) => Role;

  /**
   * Get the trigger’s PLAYER non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Role
   */
  get_trigger_actor_variable_player: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Role;

  /**
   * Get the sub-item of the global trigger’s PLAYER array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Role
   */
  get_trigger_list_variable_player: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Role;

  /**
   * Get the sub-item of the trigger’s PLAYER array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Role
   */
  get_trigger_list_actor_variable_player: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Role;

  /**
   * Get the global trigger’s PLAYER array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_player: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s PLAYER group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_player: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s PLAYER_GROUP non-array variable.
   * @param key Variable name
   * @returns RoleGroup
   */
  get_trigger_variable_player_group: (
    /** Variable name */
    key: string,
  ) => RoleGroup;

  /**
   * Get the trigger’s PLAYER_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns RoleGroup
   */
  get_trigger_actor_variable_player_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => RoleGroup;

  /**
   * Get the sub-item of the global trigger’s PLAYER_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns RoleGroup
   */
  get_trigger_list_variable_player_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoleGroup;

  /**
   * Get the sub-item of the trigger’s PLAYER_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns RoleGroup
   */
  get_trigger_list_actor_variable_player_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoleGroup;

  /**
   * Get the global trigger’s PLAYER_GROUP array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_player_group: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s PLAYER_GROUP group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_player_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ROLE_RES_KEY non-array variable.
   * @param key Variable name
   * @returns RoleResKey
   */
  get_trigger_variable_role_res_key: (
    /** Variable name */
    key: string,
  ) => RoleResKey;

  /**
   * Get the trigger’s ROLE_RES_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns RoleResKey
   */
  get_trigger_actor_variable_role_res_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => RoleResKey;

  /**
   * Get the sub-item of the global trigger’s ROLE_RES_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns RoleResKey
   */
  get_trigger_list_variable_role_res_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoleResKey;

  /**
   * Get the sub-item of the trigger’s ROLE_RES_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns RoleResKey
   */
  get_trigger_list_actor_variable_role_res_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoleResKey;

  /**
   * Get the global trigger’s ROLE_RES_KEY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_role_res_key: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ROLE_RES_KEY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_role_res_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ROLE_STATUS non-array variable.
   * @param key Variable name
   * @returns RoleStatus
   */
  get_trigger_variable_role_status: (
    /** Variable name */
    key: string,
  ) => RoleStatus;

  /**
   * Get the trigger’s ROLE_STATUS non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns RoleStatus
   */
  get_trigger_actor_variable_role_status: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => RoleStatus;

  /**
   * Get the sub-item of the global trigger’s ROLE_STATUS array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns RoleStatus
   */
  get_trigger_list_variable_role_status: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoleStatus;

  /**
   * Get the sub-item of the trigger’s ROLE_STATUS array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns RoleStatus
   */
  get_trigger_list_actor_variable_role_status: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoleStatus;

  /**
   * Get the global trigger’s ROLE_STATUS array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_role_status: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ROLE_STATUS group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_role_status: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ROLE_TYPE non-array variable.
   * @param key Variable name
   * @returns RoleType
   */
  get_trigger_variable_role_type: (
    /** Variable name */
    key: string,
  ) => RoleType;

  /**
   * Get the trigger’s ROLE_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns RoleType
   */
  get_trigger_actor_variable_role_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => RoleType;

  /**
   * Get the sub-item of the global trigger’s ROLE_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns RoleType
   */
  get_trigger_list_variable_role_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoleType;

  /**
   * Get the sub-item of the trigger’s ROLE_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns RoleType
   */
  get_trigger_list_actor_variable_role_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoleType;

  /**
   * Get the global trigger’s ROLE_TYPE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_role_type: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ROLE_TYPE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_role_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s TEAM non-array variable.
   * @param key Variable name
   * @returns Camp
   */
  get_trigger_variable_team: (
    /** Variable name */
    key: string,
  ) => Camp;

  /**
   * Get the trigger’s TEAM non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Camp
   */
  get_trigger_actor_variable_team: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Camp;

  /**
   * Get the sub-item of the global trigger’s TEAM array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Camp
   */
  get_trigger_list_variable_team: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Camp;

  /**
   * Get the sub-item of the trigger’s TEAM array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Camp
   */
  get_trigger_list_actor_variable_team: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Camp;

  /**
   * Get the global trigger’s TEAM array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_team: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s TEAM group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_team: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s POINT non-array variable.
   * @param key Variable name
   * @returns FPoint
   */
  get_trigger_variable_point: (
    /** Variable name */
    key: string,
  ) => FPoint;

  /**
   * Get the trigger’s POINT non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns FPoint
   */
  get_trigger_actor_variable_point: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => FPoint;

  /**
   * Get the sub-item of the global trigger’s POINT array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns FPoint
   */
  get_trigger_list_variable_point: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => FPoint;

  /**
   * Get the sub-item of the trigger’s POINT array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns FPoint
   */
  get_trigger_list_actor_variable_point: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => FPoint;

  /**
   * Get the global trigger’s POINT array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_point: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s POINT group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_point: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s POINT_LIST non-array variable.
   * @param key Variable name
   * @returns Road
   */
  get_trigger_variable_point_list: (
    /** Variable name */
    key: string,
  ) => Road;

  /**
   * Get the trigger’s POINT_LIST non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Road
   */
  get_trigger_actor_variable_point_list: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Road;

  /**
   * Get the sub-item of the global trigger’s POINT_LIST array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Road
   */
  get_trigger_list_variable_point_list: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Road;

  /**
   * Get the sub-item of the trigger’s POINT_LIST array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Road
   */
  get_trigger_list_actor_variable_point_list: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Road;

  /**
   * Get the global trigger’s POINT_LIST array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_point_list: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s POINT_LIST group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_point_list: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ROAD_GROUP non-array variable.
   * @param key Variable name
   * @returns RoadGroup
   */
  get_trigger_variable_road_group: (
    /** Variable name */
    key: string,
  ) => RoadGroup;

  /**
   * Get the trigger’s ROAD_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns RoadGroup
   */
  get_trigger_actor_variable_road_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => RoadGroup;

  /**
   * Get the sub-item of the global trigger’s ROAD_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns RoadGroup
   */
  get_trigger_list_variable_road_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoadGroup;

  /**
   * Get the sub-item of the trigger’s ROAD_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns RoadGroup
   */
  get_trigger_list_actor_variable_road_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RoadGroup;

  /**
   * Get the global trigger’s ROAD_GROUP array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_road_group: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ROAD_GROUP group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_road_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s RECTANGLE non-array variable.
   * @param key Variable name
   * @returns RecArea
   */
  get_trigger_variable_rectangle: (
    /** Variable name */
    key: string,
  ) => RecArea;

  /**
   * Get the trigger’s RECTANGLE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns RecArea
   */
  get_trigger_actor_variable_rectangle: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => RecArea;

  /**
   * Get the sub-item of the global trigger’s RECTANGLE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns RecArea
   */
  get_trigger_list_variable_rectangle: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RecArea;

  /**
   * Get the sub-item of the trigger’s RECTANGLE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns RecArea
   */
  get_trigger_list_actor_variable_rectangle: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RecArea;

  /**
   * Get the global trigger’s RECTANGLE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_rectangle: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s RECTANGLE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_rectangle: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s ROUND_AREA non-array variable.
   * @param key Variable name
   * @returns CirArea
   */
  get_trigger_variable_round_area: (
    /** Variable name */
    key: string,
  ) => CirArea;

  /**
   * Get the trigger’s ROUND_AREA non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns CirArea
   */
  get_trigger_actor_variable_round_area: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => CirArea;

  /**
   * Get the sub-item of the global trigger’s ROUND_AREA array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns CirArea
   */
  get_trigger_list_variable_round_area: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => CirArea;

  /**
   * Get the sub-item of the trigger’s ROUND_AREA array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns CirArea
   */
  get_trigger_list_actor_variable_round_area: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => CirArea;

  /**
   * Get the global trigger’s ROUND_AREA array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_round_area: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s ROUND_AREA group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_round_area: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s POLYGON non-array variable.
   * @param key Variable name
   * @returns PolyArea
   */
  get_trigger_variable_polygon: (
    /** Variable name */
    key: string,
  ) => PolyArea;

  /**
   * Get the trigger’s POLYGON non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns PolyArea
   */
  get_trigger_actor_variable_polygon: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => PolyArea;

  /**
   * Get the sub-item of the global trigger’s POLYGON array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns PolyArea
   */
  get_trigger_list_variable_polygon: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => PolyArea;

  /**
   * Get the sub-item of the trigger’s POLYGON array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns PolyArea
   */
  get_trigger_list_actor_variable_polygon: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => PolyArea;

  /**
   * Get the global trigger’s POLYGON array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_polygon: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s POLYGON group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_polygon: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s CAMERA non-array variable.
   * @param key Variable name
   * @returns Camera
   */
  get_trigger_variable_camera: (
    /** Variable name */
    key: string,
  ) => Camera;

  /**
   * Get the trigger’s CAMERA non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Camera
   */
  get_trigger_actor_variable_camera: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Camera;

  /**
   * Get the sub-item of the global trigger’s CAMERA array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Camera
   */
  get_trigger_list_variable_camera: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Camera;

  /**
   * Get the sub-item of the trigger’s CAMERA array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Camera
   */
  get_trigger_list_actor_variable_camera: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Camera;

  /**
   * Get the global trigger’s CAMERA array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_camera: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s CAMERA group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_camera: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s MODEL_ENTITY_NEW non-array variable.
   * @param key Variable name
   * @returns Model
   */
  get_trigger_variable_model_entity_new: (
    /** Variable name */
    key: string,
  ) => Model;

  /**
   * Get the trigger’s MODEL_ENTITY_NEW non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Model
   */
  get_trigger_actor_variable_model_entity_new: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Model;

  /**
   * Get the sub-item of the global trigger’s MODEL_ENTITY_NEW array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Model
   */
  get_trigger_list_variable_model_entity_new: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Model;

  /**
   * Get the sub-item of the trigger’s MODEL_ENTITY_NEW array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Model
   */
  get_trigger_list_actor_variable_model_entity_new: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Model;

  /**
   * Get the global trigger’s MODEL_ENTITY_NEW array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_model_entity_new: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s MODEL_ENTITY_NEW group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_model_entity_new: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s MODEL non-array variable.
   * @param key Variable name
   * @returns ModelKey
   */
  get_trigger_variable_model: (
    /** Variable name */
    key: string,
  ) => ModelKey;

  /**
   * Get the trigger’s MODEL non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns ModelKey
   */
  get_trigger_actor_variable_model: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => ModelKey;

  /**
   * Get the sub-item of the global trigger’s MODEL array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns ModelKey
   */
  get_trigger_list_variable_model: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ModelKey;

  /**
   * Get the sub-item of the trigger’s MODEL array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns ModelKey
   */
  get_trigger_list_actor_variable_model: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => ModelKey;

  /**
   * Get the global trigger’s MODEL array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_model: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s MODEL group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_model: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s SFX_ENTITY non-array variable.
   * @param key Variable name
   * @returns Sfx
   */
  get_trigger_variable_sfx_entity: (
    /** Variable name */
    key: string,
  ) => Sfx;

  /**
   * Get the trigger’s SFX_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Sfx
   */
  get_trigger_actor_variable_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Sfx;

  /**
   * Get the sub-item of the global trigger’s SFX_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Sfx
   */
  get_trigger_list_variable_sfx_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Sfx;

  /**
   * Get the sub-item of the trigger’s SFX_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Sfx
   */
  get_trigger_list_actor_variable_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Sfx;

  /**
   * Get the global trigger’s SFX_ENTITY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_sfx_entity: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s SFX_ENTITY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s SFX_KEY non-array variable.
   * @param key Variable name
   * @returns SfxKey
   */
  get_trigger_variable_sfx_key: (
    /** Variable name */
    key: string,
  ) => SfxKey;

  /**
   * Get the trigger’s SFX_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns SfxKey
   */
  get_trigger_actor_variable_sfx_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => SfxKey;

  /**
   * Get the sub-item of the global trigger’s SFX_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns SfxKey
   */
  get_trigger_list_variable_sfx_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => SfxKey;

  /**
   * Get the sub-item of the trigger’s SFX_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns SfxKey
   */
  get_trigger_list_actor_variable_sfx_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => SfxKey;

  /**
   * Get the global trigger’s SFX_KEY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_sfx_key: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s SFX_KEY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_sfx_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s LINK_SFX_ENTITY non-array variable.
   * @param key Variable name
   * @returns LinkSfx
   */
  get_trigger_variable_link_sfx_entity: (
    /** Variable name */
    key: string,
  ) => LinkSfx;

  /**
   * Get the trigger’s LINK_SFX_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns LinkSfx
   */
  get_trigger_actor_variable_link_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => LinkSfx;

  /**
   * Get the sub-item of the global trigger’s LINK_SFX_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns LinkSfx
   */
  get_trigger_list_variable_link_sfx_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => LinkSfx;

  /**
   * Get the sub-item of the trigger’s LINK_SFX_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns LinkSfx
   */
  get_trigger_list_actor_variable_link_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => LinkSfx;

  /**
   * Get the global trigger’s LINK_SFX_ENTITY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_link_sfx_entity: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s LINK_SFX_ENTITY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_link_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s DYNAMIC_TRIGGER_INSTANCE non-array variable.
   * @param key Variable name
   * @returns DynamicTriggerInstance
   */
  get_trigger_variable_dynamic_trigger_instance: (
    /** Variable name */
    key: string,
  ) => DynamicTriggerInstance;

  /**
   * Get the trigger’s DYNAMIC_TRIGGER_INSTANCE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns DynamicTriggerInstance
   */
  get_trigger_actor_variable_dynamic_trigger_instance: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => DynamicTriggerInstance;

  /**
   * Get the sub-item of the global trigger’s DYNAMIC_TRIGGER_INSTANCE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns DynamicTriggerInstance
   */
  get_trigger_list_variable_dynamic_trigger_instance: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => DynamicTriggerInstance;

  /**
   * Get the sub-item of the trigger’s DYNAMIC_TRIGGER_INSTANCE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns DynamicTriggerInstance
   */
  get_trigger_list_actor_variable_dynamic_trigger_instance: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => DynamicTriggerInstance;

  /**
   * Get the global trigger’s DYNAMIC_TRIGGER_INSTANCE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_dynamic_trigger_instance: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s DYNAMIC_TRIGGER_INSTANCE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_dynamic_trigger_instance: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s RANDOM_POOL non-array variable.
   * @param key Variable name
   * @returns RandomPool
   */
  get_trigger_variable_random_pool: (
    /** Variable name */
    key: string,
  ) => RandomPool;

  /**
   * Get the trigger’s RANDOM_POOL non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns RandomPool
   */
  get_trigger_actor_variable_random_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => RandomPool;

  /**
   * Get the sub-item of the global trigger’s RANDOM_POOL array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns RandomPool
   */
  get_trigger_list_variable_random_pool: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RandomPool;

  /**
   * Get the sub-item of the trigger’s RANDOM_POOL array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns RandomPool
   */
  get_trigger_list_actor_variable_random_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => RandomPool;

  /**
   * Get the global trigger’s RANDOM_POOL array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_random_pool: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s RANDOM_POOL group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_random_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s DAMAGE_TYPE non-array variable.
   * @param key Variable name
   * @returns Int32
   */
  get_trigger_variable_damage_type: (
    /** Variable name */
    key: string,
  ) => Int32;

  /**
   * Get the trigger’s DAMAGE_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Int32
   */
  get_trigger_actor_variable_damage_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Int32;

  /**
   * Get the sub-item of the global trigger’s DAMAGE_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Int32
   */
  get_trigger_list_variable_damage_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Int32;

  /**
   * Get the sub-item of the trigger’s DAMAGE_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Int32
   */
  get_trigger_list_actor_variable_damage_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Int32;

  /**
   * Get the global trigger’s DAMAGE_TYPE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_damage_type: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s DAMAGE_TYPE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_damage_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s NEW_TIMER non-array variable.
   * @param key Variable name
   * @returns Timer
   */
  get_trigger_variable_new_timer: (
    /** Variable name */
    key: string,
  ) => Timer;

  /**
   * Get the trigger’s NEW_TIMER non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns Timer
   */
  get_trigger_actor_variable_new_timer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => Timer;

  /**
   * Get the sub-item of the global trigger’s NEW_TIMER array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns Timer
   */
  get_trigger_list_variable_new_timer: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Timer;

  /**
   * Get the sub-item of the trigger’s NEW_TIMER array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns Timer
   */
  get_trigger_list_actor_variable_new_timer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => Timer;

  /**
   * Get the global trigger’s NEW_TIMER array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_new_timer: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s NEW_TIMER group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_new_timer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s TECH_KEY non-array variable.
   * @param key Variable name
   * @returns TechKey
   */
  get_trigger_variable_tech_key: (
    /** Variable name */
    key: string,
  ) => TechKey;

  /**
   * Get the trigger’s TECH_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns TechKey
   */
  get_trigger_actor_variable_tech_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => TechKey;

  /**
   * Get the sub-item of the global trigger’s TECH_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns TechKey
   */
  get_trigger_list_variable_tech_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => TechKey;

  /**
   * Get the sub-item of the trigger’s TECH_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns TechKey
   */
  get_trigger_list_actor_variable_tech_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => TechKey;

  /**
   * Get the global trigger’s TECH_KEY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_tech_key: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s TECH_KEY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_tech_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s STORE_KEY non-array variable.
   * @param key Variable name
   * @returns StoreKey
   */
  get_trigger_variable_store_key: (
    /** Variable name */
    key: string,
  ) => StoreKey;

  /**
   * Get the trigger’s STORE_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns StoreKey
   */
  get_trigger_actor_variable_store_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => StoreKey;

  /**
   * Get the sub-item of the global trigger’s STORE_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns StoreKey
   */
  get_trigger_list_variable_store_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => StoreKey;

  /**
   * Get the sub-item of the trigger’s STORE_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns StoreKey
   */
  get_trigger_list_actor_variable_store_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => StoreKey;

  /**
   * Get the global trigger’s STORE_KEY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_store_key: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s STORE_KEY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_store_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s KEYBOARD_KEY non-array variable.
   * @param key Variable name
   * @returns KeyboardKey
   */
  get_trigger_variable_keyboard_key: (
    /** Variable name */
    key: string,
  ) => KeyboardKey;

  /**
   * Get the trigger’s KEYBOARD_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns KeyboardKey
   */
  get_trigger_actor_variable_keyboard_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => KeyboardKey;

  /**
   * Get the sub-item of the global trigger’s KEYBOARD_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns KeyboardKey
   */
  get_trigger_list_variable_keyboard_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => KeyboardKey;

  /**
   * Get the sub-item of the trigger’s KEYBOARD_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns KeyboardKey
   */
  get_trigger_list_actor_variable_keyboard_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => KeyboardKey;

  /**
   * Get the global trigger’s KEYBOARD_KEY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_keyboard_key: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s KEYBOARD_KEY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_keyboard_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s MOUSE_KEY non-array variable.
   * @param key Variable name
   * @returns MouseKey
   */
  get_trigger_variable_mouse_key: (
    /** Variable name */
    key: string,
  ) => MouseKey;

  /**
   * Get the trigger’s MOUSE_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns MouseKey
   */
  get_trigger_actor_variable_mouse_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => MouseKey;

  /**
   * Get the sub-item of the global trigger’s MOUSE_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns MouseKey
   */
  get_trigger_list_variable_mouse_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => MouseKey;

  /**
   * Get the sub-item of the trigger’s MOUSE_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns MouseKey
   */
  get_trigger_list_actor_variable_mouse_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => MouseKey;

  /**
   * Get the global trigger’s MOUSE_KEY array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_mouse_key: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s MOUSE_KEY group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_mouse_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s UNIT_TYPE non-array variable.
   * @param key Variable name
   * @returns UnitType
   */
  get_trigger_variable_unit_type: (
    /** Variable name */
    key: string,
  ) => UnitType;

  /**
   * Get the trigger’s UNIT_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns UnitType
   */
  get_trigger_actor_variable_unit_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => UnitType;

  /**
   * Get the sub-item of the global trigger’s UNIT_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns UnitType
   */
  get_trigger_list_variable_unit_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => UnitType;

  /**
   * Get the sub-item of the trigger’s UNIT_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns UnitType
   */
  get_trigger_list_actor_variable_unit_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => UnitType;

  /**
   * Get the global trigger’s UNIT_TYPE array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_unit_type: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s UNIT_TYPE group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_unit_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the global trigger’s CURVED_PATH non-array variable.
   * @param key Variable name
   * @returns CurvedPath
   */
  get_trigger_variable_curved_path: (
    /** Variable name */
    key: string,
  ) => CurvedPath;

  /**
   * Get the trigger’s CURVED_PATH non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @returns CurvedPath
   */
  get_trigger_actor_variable_curved_path: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => CurvedPath;

  /**
   * Get the sub-item of the global trigger’s CURVED_PATH array variable.
   * @param key Variable name
   * @param index Subscript
   * @returns CurvedPath
   */
  get_trigger_list_variable_curved_path: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => CurvedPath;

  /**
   * Get the sub-item of the trigger’s CURVED_PATH array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @returns CurvedPath
   */
  get_trigger_list_actor_variable_curved_path: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
  ) => CurvedPath;

  /**
   * Get the global trigger’s CURVED_PATH array variable.
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_variable_all_curved_path: (
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Get the trigger’s CURVED_PATH group variable array.
   * @param actor Unit entity
   * @param key Variable name
   * @returns List
   */
  get_trigger_list_actor_variable_all_curved_path: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
  ) => List;

  /**
   * Set the sub-item of the global trigger’s BOOLEAN array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_boolean: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: boolean | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s BOOLEAN array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_boolean: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: boolean | null,
  ) => void;

  /**
   * Set the global trigger’s BOOLEAN non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_boolean: (
    /** Variable name */
    key: string,
    /** Value */
    value: boolean | null,
  ) => void;

  /**
   * Set the global trigger’s BOOLEAN non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_boolean: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: boolean | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s INTEGER array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value 值
   */
  set_trigger_list_variable_integer: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** 值 */
    value: Int32 | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s INTEGER array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value 值
   */
  set_trigger_list_actor_variable_integer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** 值 */
    value: Int32 | null,
  ) => void;

  /**
   * Set the global trigger’s INTEGER non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_integer: (
    /** Variable name */
    key: string,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the global trigger’s INTEGER non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_integer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's FLOAT array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_float: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Fixed | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s FLOAT array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_float: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Fixed | null,
  ) => void;

  /**
   * Set the global trigger’s FLOAT non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_float: (
    /** Variable name */
    key: string,
    /** Value */
    value: Fixed | null,
  ) => void;

  /**
   * Set the global trigger’s FLOAT non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_float: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Fixed | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's STRING array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_string: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's STRING array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_string: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the global trigger’s STRING non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_string: (
    /** Variable name */
    key: string,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the global trigger’s STRING non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_string: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UI_COMP array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_ui_comp: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UI_COMP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_ui_comp: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the global trigger’s UI_COMP non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_ui_comp: (
    /** Variable name */
    key: string,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the global trigger’s UI_COMP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_ui_comp: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UNIT_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_unit_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Unit | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UNIT_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_unit_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Unit | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_ENTITY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_unit_entity: (
    /** Variable name */
    key: string,
    /** Value */
    value: Unit | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_unit_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Unit | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UNIT_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_unit_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: UnitGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UNIT_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_unit_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: UnitGroup | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_GROUP non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_unit_group: (
    /** Variable name */
    key: string,
    /** Value */
    value: UnitGroup | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_unit_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: UnitGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UNIT_NAME array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_unit_name: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: UnitKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UNIT_NAME array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_unit_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: UnitKey | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_NAME non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_unit_name: (
    /** Variable name */
    key: string,
    /** Value */
    value: UnitKey | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_NAME non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_unit_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: UnitKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UNIT_NAME_POOL array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_unit_name_pool: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: UnitKeyPool | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's UNIT_NAME_POOL array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_unit_name_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: UnitKeyPool | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_NAME_POOL non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_unit_name_pool: (
    /** Variable name */
    key: string,
    /** Value */
    value: UnitKeyPool | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_NAME_POOL non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_unit_name_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: UnitKeyPool | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s UNIT_WRITE_ATTRIBUTE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_unit_write_attribute: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s UNIT_WRITE_ATTRIBUTE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_unit_write_attribute: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_WRITE_ATTRIBUTE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_unit_write_attribute: (
    /** Variable name */
    key: string,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_WRITE_ATTRIBUTE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_unit_write_attribute: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ATTR_ELEMENT array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_attr_element: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s ATTR_ELEMENT array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_attr_element: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the global trigger’s ATTR_ELEMENT non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_attr_element: (
    /** Variable name */
    key: string,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the global trigger’s ATTR_ELEMENT non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_attr_element: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: string | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ITEM_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_item_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Item | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ITEM_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_item_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Item | null,
  ) => void;

  /**
   * Set the global trigger’s ITEM_ENTITY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_item_entity: (
    /** Variable name */
    key: string,
    /** Value */
    value: Item | null,
  ) => void;

  /**
   * Set the global trigger’s ITEM_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_item_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Item | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ITEM_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_item_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ItemGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ITEM_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_item_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ItemGroup | null,
  ) => void;

  /**
   * Set the global trigger’s ITEM_GROUP non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_item_group: (
    /** Variable name */
    key: string,
    /** Value */
    value: ItemGroup | null,
  ) => void;

  /**
   * Set the global trigger’s ITEM_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_item_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: ItemGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ITEM_NAME array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_item_name: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ItemKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ITEM_NAME array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_item_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ItemKey | null,
  ) => void;

  /**
   * Set the global trigger’s ITEM_NAME non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_item_name: (
    /** Variable name */
    key: string,
    /** Value */
    value: ItemKey | null,
  ) => void;

  /**
   * Set the global trigger’s ITEM_NAME non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_item_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: ItemKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ABILITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_ability: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Ability | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ABILITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_ability: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Ability | null,
  ) => void;

  /**
   * Set the global trigger’s ABILITY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_ability: (
    /** Variable name */
    key: string,
    /** Value */
    value: Ability | null,
  ) => void;

  /**
   * Set the global trigger’s ABILITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_ability: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Ability | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ABILITY_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_ability_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ABILITY_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_ability_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the global trigger’s ABILITY_TYPE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_ability_type: (
    /** Variable name */
    key: string,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the global trigger’s ABILITY_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_ability_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ABILITY_CAST_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_ability_cast_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s ABILITY_CAST_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_ability_cast_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the global trigger’s ABILITY_CAST_TYPE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_ability_cast_type: (
    /** Variable name */
    key: string,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the global trigger’s ABILITY_CAST_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_ability_cast_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ABILITY_NAME array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_ability_name: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: AbilityKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ABILITY_NAME array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_ability_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: AbilityKey | null,
  ) => void;

  /**
   * Set the global trigger’s ABILITY_NAME non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_ability_name: (
    /** Variable name */
    key: string,
    /** Value */
    value: AbilityKey | null,
  ) => void;

  /**
   * Set the global trigger’s ABILITY_NAME non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_ability_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: AbilityKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's MODIFIER_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_modifier_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Modifier | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's MODIFIER_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_modifier_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Modifier | null,
  ) => void;

  /**
   * Set the global trigger’s MODIFIER_ENTITY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_modifier_entity: (
    /** Variable name */
    key: string,
    /** Value */
    value: Modifier | null,
  ) => void;

  /**
   * Set the global trigger’s MODIFIER_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_modifier_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Modifier | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's MODIFIER_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_modifier_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ModifierType | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's MODIFIER_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_modifier_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ModifierType | null,
  ) => void;

  /**
   * Set the global trigger’s MODIFIER_TYPE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_modifier_type: (
    /** Variable name */
    key: string,
    /** Value */
    value: ModifierType | null,
  ) => void;

  /**
   * Set the global trigger’s MODIFIER_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_modifier_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: ModifierType | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's MODIFIER_EFFECT_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_modifier_effect_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ModifierEffectType | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's MODIFIER_EFFECT_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_modifier_effect_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ModifierEffectType | null,
  ) => void;

  /**
   * Set the global trigger’s MODIFIER_EFFECT_TYPE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_modifier_effect_type: (
    /** Variable name */
    key: string,
    /** Value */
    value: ModifierEffectType | null,
  ) => void;

  /**
   * Set the global trigger’s MODIFIER_EFFECT_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_modifier_effect_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: ModifierEffectType | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's MODIFIER array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_modifier: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ModifierKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's MODIFIER array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_modifier: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ModifierKey | null,
  ) => void;

  /**
   * Set the global trigger’s MODIFIER non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_modifier: (
    /** Variable name */
    key: string,
    /** Value */
    value: ModifierKey | null,
  ) => void;

  /**
   * Set the global trigger’s MODIFIER non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_modifier: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: ModifierKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PROJECTILE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_projectile: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ProjectileKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PROJECTILE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_projectile: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ProjectileKey | null,
  ) => void;

  /**
   * Set the global trigger’s PROJECTILE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_projectile: (
    /** Variable name */
    key: string,
    /** Value */
    value: ProjectileKey | null,
  ) => void;

  /**
   * Set the global trigger’s PROJECTILE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_projectile: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: ProjectileKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PROJECTILE_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_projectile_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Projectile | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PROJECTILE_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_projectile_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Projectile | null,
  ) => void;

  /**
   * Set the global trigger’s PROJECTILE_ENTITY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_projectile_entity: (
    /** Variable name */
    key: string,
    /** Value */
    value: Projectile | null,
  ) => void;

  /**
   * Set the global trigger’s PROJECTILE_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_projectile_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Projectile | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PROJECTILE_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_projectile_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ProjectileGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PROJECTILE_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_projectile_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ProjectileGroup | null,
  ) => void;

  /**
   * Set the global trigger’s PROJECTILE_GROUP non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_projectile_group: (
    /** Variable name */
    key: string,
    /** Value */
    value: ProjectileGroup | null,
  ) => void;

  /**
   * Set the global trigger’s PROJECTILE_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_projectile_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: ProjectileGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's DESTRUCTIBLE_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_destructible_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Destructible | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's DESTRUCTIBLE_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_destructible_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Destructible | null,
  ) => void;

  /**
   * Set the global trigger’s DESTRUCTIBLE_ENTITY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_destructible_entity: (
    /** Variable name */
    key: string,
    /** Value */
    value: Destructible | null,
  ) => void;

  /**
   * Set the global trigger’s DESTRUCTIBLE_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_destructible_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Destructible | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's DESTRUCTIBLE_NAME array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_destructible_name: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: DestructibleKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's DESTRUCTIBLE_NAME array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_destructible_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: DestructibleKey | null,
  ) => void;

  /**
   * Set the global trigger’s DESTRUCTIBLE_NAME non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_destructible_name: (
    /** Variable name */
    key: string,
    /** Value */
    value: DestructibleKey | null,
  ) => void;

  /**
   * Set the global trigger’s DESTRUCTIBLE_NAME non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_destructible_name: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: DestructibleKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's SOUND_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_sound_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: SoundEntity | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's SOUND_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_sound_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: SoundEntity | null,
  ) => void;

  /**
   * Set the global trigger’s SOUND_ENTITY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_sound_entity: (
    /** Variable name */
    key: string,
    /** Value */
    value: SoundEntity | null,
  ) => void;

  /**
   * Set the global trigger’s SOUND_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_sound_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: SoundEntity | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PLAYER array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_player: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Role | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PLAYER array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_player: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Role | null,
  ) => void;

  /**
   * Set the global trigger’s PLAYER non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_player: (
    /** Variable name */
    key: string,
    /** Value */
    value: Role | null,
  ) => void;

  /**
   * Set the global trigger’s PLAYER non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_player: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Role | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PLAYER_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_player_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoleGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's PLAYER_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_player_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoleGroup | null,
  ) => void;

  /**
   * Set the global trigger’s PLAYER_GROUP non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_player_group: (
    /** Variable name */
    key: string,
    /** Value */
    value: RoleGroup | null,
  ) => void;

  /**
   * Set the global trigger’s PLAYER_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_player_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: RoleGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ROLE_RES_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_role_res_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoleResKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ROLE_RES_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_role_res_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoleResKey | null,
  ) => void;

  /**
   * Set the global trigger’s ROLE_RES_KEY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_role_res_key: (
    /** Variable name */
    key: string,
    /** Value */
    value: RoleResKey | null,
  ) => void;

  /**
   * Set the global trigger’s ROLE_RES_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_role_res_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: RoleResKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ROLE_STATUS array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_role_status: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoleStatus | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ROLE_STATUS array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_role_status: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoleStatus | null,
  ) => void;

  /**
   * Set the global trigger’s ROLE_STATUS non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_role_status: (
    /** Variable name */
    key: string,
    /** Value */
    value: RoleStatus | null,
  ) => void;

  /**
   * Set the global trigger’s ROLE_STATUS non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_role_status: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: RoleStatus | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ROLE_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_role_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoleType | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's ROLE_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_role_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoleType | null,
  ) => void;

  /**
   * Set the global trigger’s ROLE_TYPE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_role_type: (
    /** Variable name */
    key: string,
    /** Value */
    value: RoleType | null,
  ) => void;

  /**
   * Set the global trigger’s ROLE_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_role_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: RoleType | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's TEAM array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_team: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Camp | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's TEAM array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_team: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Camp | null,
  ) => void;

  /**
   * Set the global trigger’s TEAM non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_team: (
    /** Variable name */
    key: string,
    /** Value */
    value: Camp | null,
  ) => void;

  /**
   * Set the global trigger’s TEAM non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_team: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Camp | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's POINT array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_point: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: FPoint | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's POINT array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_point: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: FPoint | null,
  ) => void;

  /**
   * Set the global trigger’s POINT non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_point: (
    /** Variable name */
    key: string,
    /** Value */
    value: FPoint | null,
  ) => void;

  /**
   * Set the global trigger’s POINT non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_point: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: FPoint | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's POINT_LIST array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_point_list: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Road | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger's POINT_LIST array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_point_list: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Road | null,
  ) => void;

  /**
   * Set the global trigger’s POINT_LIST non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_point_list: (
    /** Variable name */
    key: string,
    /** Value */
    value: Road | null,
  ) => void;

  /**
   * Set the global trigger’s POINT_LIST non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_point_list: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Road | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s ROAD_GROUP array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_road_group: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoadGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s ROAD_GROUP array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_road_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RoadGroup | null,
  ) => void;

  /**
   * Set the global trigger’s ROAD_GROUP non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_road_group: (
    /** Variable name */
    key: string,
    /** Value */
    value: RoadGroup | null,
  ) => void;

  /**
   * Set the global trigger’s ROAD_GROUP non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_road_group: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: RoadGroup | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s RECTANGLE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_rectangle: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RecArea | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s RECTANGLE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_rectangle: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RecArea | null,
  ) => void;

  /**
   * Set the global trigger’s RECTANGLE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_rectangle: (
    /** Variable name */
    key: string,
    /** Value */
    value: RecArea | null,
  ) => void;

  /**
   * Set the global trigger’s RECTANGLE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_rectangle: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: RecArea | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s ROUND_AREA array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_round_area: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: CirArea | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s ROUND_AREA array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_round_area: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: CirArea | null,
  ) => void;

  /**
   * Set the global trigger’s ROUND_AREA non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_round_area: (
    /** Variable name */
    key: string,
    /** Value */
    value: CirArea | null,
  ) => void;

  /**
   * Set the global trigger’s ROUND_AREA non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_round_area: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: CirArea | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s POLYGON array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_polygon: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: PolyArea | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s POLYGON array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_polygon: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: PolyArea | null,
  ) => void;

  /**
   * Set the global trigger’s POLYGON non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_polygon: (
    /** Variable name */
    key: string,
    /** Value */
    value: PolyArea | null,
  ) => void;

  /**
   * Set the global trigger’s POLYGON non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_polygon: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: PolyArea | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s CAMERA array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_camera: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Camera | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s CAMERA array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_camera: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Camera | null,
  ) => void;

  /**
   * Set the global trigger’s CAMERA non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_camera: (
    /** Variable name */
    key: string,
    /** Value */
    value: Camera | null,
  ) => void;

  /**
   * Set the global trigger’s CAMERA non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_camera: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Camera | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s MODEL_ENTITY_NEW array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_model_entity_new: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Model | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s MODEL_ENTITY_NEW array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_model_entity_new: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Model | null,
  ) => void;

  /**
   * Set the global trigger’s MODEL_ENTITY_NEW non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_model_entity_new: (
    /** Variable name */
    key: string,
    /** Value */
    value: Model | null,
  ) => void;

  /**
   * Set the global trigger’s MODEL_ENTITY_NEW non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_model_entity_new: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Model | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s MODEL array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_model: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ModelKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s MODEL array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_model: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: ModelKey | null,
  ) => void;

  /**
   * Set the global trigger’s MODEL non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_model: (
    /** Variable name */
    key: string,
    /** Value */
    value: ModelKey | null,
  ) => void;

  /**
   * Set the global trigger’s MODEL non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_model: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: ModelKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s SFX_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_sfx_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Sfx | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s SFX_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Sfx | null,
  ) => void;

  /**
   * Set the global trigger’s SFX_ENTITY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_sfx_entity: (
    /** Variable name */
    key: string,
    /** Value */
    value: Sfx | null,
  ) => void;

  /**
   * Set the global trigger’s SFX_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Sfx | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s SFX_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_sfx_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: SfxKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s SFX_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_sfx_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: SfxKey | null,
  ) => void;

  /**
   * Set the global trigger’s SFX_KEY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_sfx_key: (
    /** Variable name */
    key: string,
    /** Value */
    value: SfxKey | null,
  ) => void;

  /**
   * Set the global trigger’s SFX_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_sfx_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: SfxKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s LINK_SFX_ENTITY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_link_sfx_entity: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: LinkSfx | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s LINK_SFX_ENTITY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_link_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: LinkSfx | null,
  ) => void;

  /**
   * Set the global trigger’s LINK_SFX_ENTITY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_link_sfx_entity: (
    /** Variable name */
    key: string,
    /** Value */
    value: LinkSfx | null,
  ) => void;

  /**
   * Set the global trigger’s LINK_SFX_ENTITY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_link_sfx_entity: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: LinkSfx | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s DYNAMIC_TRIGGER_INSTANCE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_dynamic_trigger_instance: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: DynamicTriggerInstance | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s DYNAMIC_TRIGGER_INSTANCE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_dynamic_trigger_instance: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: DynamicTriggerInstance | null,
  ) => void;

  /**
   * Set the global trigger’s DYNAMIC_TRIGGER_INSTANCE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_dynamic_trigger_instance: (
    /** Variable name */
    key: string,
    /** Value */
    value: DynamicTriggerInstance | null,
  ) => void;

  /**
   * Set the global trigger’s DYNAMIC_TRIGGER_INSTANCE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_dynamic_trigger_instance: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: DynamicTriggerInstance | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s RANDOM_POOL array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_random_pool: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RandomPool | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s RANDOM_POOL array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_random_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: RandomPool | null,
  ) => void;

  /**
   * Set the global trigger’s RANDOM_POOL non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_random_pool: (
    /** Variable name */
    key: string,
    /** Value */
    value: RandomPool | null,
  ) => void;

  /**
   * Set the global trigger’s RANDOM_POOL non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_random_pool: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: RandomPool | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s DAMAGE_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_damage_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s DAMAGE_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_damage_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the global trigger’s DAMAGE_TYPE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_damage_type: (
    /** Variable name */
    key: string,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the global trigger’s DAMAGE_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_damage_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Int32 | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s NEW_TIMER array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_new_timer: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Timer | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s NEW_TIMER array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_new_timer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: Timer | null,
  ) => void;

  /**
   * Set the global trigger’s NEW_TIMER non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_new_timer: (
    /** Variable name */
    key: string,
    /** Value */
    value: Timer | null,
  ) => void;

  /**
   * Set the global trigger’s NEW_TIMER non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_new_timer: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: Timer | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s TECH_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_tech_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: TechKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s TECH_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_tech_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: TechKey | null,
  ) => void;

  /**
   * Set the global trigger’s TECH_KEY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_tech_key: (
    /** Variable name */
    key: string,
    /** Value */
    value: TechKey | null,
  ) => void;

  /**
   * Set the global trigger’s TECH_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_tech_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: TechKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s STORE_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_store_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: StoreKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s STORE_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_store_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: StoreKey | null,
  ) => void;

  /**
   * Set the global trigger’s STORE_KEY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_store_key: (
    /** Variable name */
    key: string,
    /** Value */
    value: StoreKey | null,
  ) => void;

  /**
   * Set the global trigger’s STORE_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_store_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: StoreKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s KEYBOARD_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_keyboard_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: KeyboardKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s KEYBOARD_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_keyboard_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: KeyboardKey | null,
  ) => void;

  /**
   * Set the global trigger’s KEYBOARD_KEY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_keyboard_key: (
    /** Variable name */
    key: string,
    /** Value */
    value: KeyboardKey | null,
  ) => void;

  /**
   * Set the global trigger’s KEYBOARD_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_keyboard_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: KeyboardKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s MOUSE_KEY array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_mouse_key: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: MouseKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s MOUSE_KEY array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_mouse_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: MouseKey | null,
  ) => void;

  /**
   * Set the global trigger’s MOUSE_KEY non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_mouse_key: (
    /** Variable name */
    key: string,
    /** Value */
    value: MouseKey | null,
  ) => void;

  /**
   * Set the global trigger’s MOUSE_KEY non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_mouse_key: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: MouseKey | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s UNIT_TYPE array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_unit_type: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: UnitType | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s UNIT_TYPE array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_unit_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: UnitType | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_TYPE non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_unit_type: (
    /** Variable name */
    key: string,
    /** Value */
    value: UnitType | null,
  ) => void;

  /**
   * Set the global trigger’s UNIT_TYPE non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_unit_type: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: UnitType | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s CURVED_PATH array variable.
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_variable_curved_path: (
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: CurvedPath | null,
  ) => void;

  /**
   * Set the sub-item of the global trigger’s CURVED_PATH array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param index Subscript
   * @param value Value
   */
  set_trigger_list_actor_variable_curved_path: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Subscript */
    index: UInt32,
    /** Value */
    value: CurvedPath | null,
  ) => void;

  /**
   * Set the global trigger’s CURVED_PATH non-array variable.
   * @param key Variable name
   * @param value Value
   */
  set_trigger_variable_curved_path: (
    /** Variable name */
    key: string,
    /** Value */
    value: CurvedPath | null,
  ) => void;

  /**
   * Set the global trigger’s CURVED_PATH non-array group variable.
   * @param actor Unit entity
   * @param key Variable name
   * @param value Value
   */
  set_trigger_actor_variable_curved_path: (
    /** Unit entity */
    actor: Actor,
    /** Variable name */
    key: string,
    /** Value */
    value: CurvedPath | null,
  ) => void;

  /**
   * Get an item of UNIT_NAME array.
   * @param l List
   * @param i Subscript
   * @returns UnitKey
   */
  get_unit_name_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => UnitKey;

  /**
   * Set an item of UNIT_NAME array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_unit_name_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: UnitKey,
  ) => void;

  /**
   * Generate n UNIT_NAME arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_unit_name_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: UnitKey | null,
  ) => List;

  /**
   * Get an item of MODEL array.
   * @param l List
   * @param i Subscript
   * @returns ModelKey
   */
  get_model_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => ModelKey;

  /**
   * Set an item of MODEL array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_model_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: ModelKey,
  ) => void;

  /**
   * Generate n MODEL arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_model_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: ModelKey | null,
  ) => List;

  /**
   * Get an item of KEYBOARD_KEY array.
   * @param l List
   * @param i Subscript
   * @returns KeyboardKey
   */
  get_keyboard_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => KeyboardKey;

  /**
   * Set an item of KEYBOARD_KEY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_keyboard_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: KeyboardKey,
  ) => void;

  /**
   * Generate n KEYBOARD_KEY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_keyboard_key_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: KeyboardKey | null,
  ) => List;

  /**
   * Get an item of MOUSE_KEY array.
   * @param l List
   * @param i Subscript
   * @returns MouseKey
   */
  get_mouse_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => MouseKey;

  /**
   * Set an item of MOUSE_KEY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_mouse_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: MouseKey,
  ) => void;

  /**
   * Generate n MOUSE_KEY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_mouse_key_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: MouseKey | null,
  ) => List;

  /**
   * Get an item of STORE_KEY array.
   * @param l List
   * @param i Subscript
   * @returns StoreKey
   */
  get_store_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => StoreKey;

  /**
   * Set an item of STORE_KEY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_store_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: StoreKey,
  ) => void;

  /**
   * Generate n STORE_KEY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_store_key_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: StoreKey | null,
  ) => List;

  /**
   * Get an item of SFX_ENTITY array.
   * @param l List
   * @param i Subscript
   * @returns Sfx
   */
  get_sfx_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Sfx;

  /**
   * Set an item of SFX_ENTITY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_sfx_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Sfx,
  ) => void;

  /**
   * Generate n SFX_ENTITY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_sfx_entity_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Sfx | null,
  ) => List;

  /**
   * Get an item of ROAD_GROUP array.
   * @param l List
   * @param i Subscript
   * @returns RoadGroup
   */
  get_road_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => RoadGroup;

  /**
   * Set an item of ROAD_GROUP array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_road_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: RoadGroup,
  ) => void;

  /**
   * Generate n ROAD_GROUP arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_road_group_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: RoadGroup | null,
  ) => List;

  /**
   * Get an item of POLYGON array.
   * @param l List
   * @param i Subscript
   * @returns PolyArea
   */
  get_polygon_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => PolyArea;

  /**
   * Set an item of POLYGON array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_polygon_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: PolyArea,
  ) => void;

  /**
   * Generate n POLYGON arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_polygon_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: PolyArea | null,
  ) => List;

  /**
   * Get an item of MODEL_ENTITY_NEW array.
   * @param l List
   * @param i Subscript
   * @returns Model
   */
  get_model_entity_new_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Model;

  /**
   * Set an item of MODEL_ENTITY_NEW array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_model_entity_new_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Model,
  ) => void;

  /**
   * Generate n MODEL_ENTITY_NEW arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_model_entity_new_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Model | null,
  ) => List;

  /**
   * Get an item of ITEM_GROUP array.
   * @param l List
   * @param i Subscript
   * @returns ItemGroup
   */
  get_item_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => ItemGroup;

  /**
   * Set an item of ITEM_GROUP array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_item_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: ItemGroup,
  ) => void;

  /**
   * Generate n ITEM_GROUP arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_item_group_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: ItemGroup | null,
  ) => List;

  /**
   * Get an item of TECH_KEY array.
   * @param l List
   * @param i Subscript
   * @returns TechKey
   */
  get_tech_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => TechKey;

  /**
   * Set an item of TECH_KEY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_tech_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: TechKey,
  ) => void;

  /**
   * Generate n TECH_KEY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_tech_key_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: TechKey | null,
  ) => List;

  /**
   * Get an item of MODIFIER_EFFECT_TYPE array.
   * @param l List
   * @param i Subscript
   * @returns ModifierEffectType
   */
  get_modifier_effect_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => ModifierEffectType;

  /**
   * Set an item of MODIFIER_EFFECT_TYPE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_modifier_effect_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: ModifierEffectType,
  ) => void;

  /**
   * Generate n MODIFIER_EFFECT_TYPE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_modifier_effect_type_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: ModifierEffectType | null,
  ) => List;

  /**
   * Get an item of DYNAMIC_TRIGGER_INSTANCE array.
   * @param l List
   * @param i Subscript
   * @returns DynamicTriggerInstance
   */
  get_dynamic_trigger_instance_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => DynamicTriggerInstance;

  /**
   * Set an item of DYNAMIC_TRIGGER_INSTANCE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_dynamic_trigger_instance_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: DynamicTriggerInstance,
  ) => void;

  /**
   * Generate n DYNAMIC_TRIGGER_INSTANCE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_dynamic_trigger_instance_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: DynamicTriggerInstance | null,
  ) => List;

  /**
   * Get an item of ROLE_TYPE array.
   * @param l List
   * @param i Subscript
   * @returns RoleType
   */
  get_role_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => RoleType;

  /**
   * Set an item of ROLE_TYPE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_role_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: RoleType,
  ) => void;

  /**
   * Generate n ROLE_TYPE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_role_type_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: RoleType | null,
  ) => List;

  /**
   * Get an item of ROLE_STATUS array.
   * @param l List
   * @param i Subscript
   * @returns RoleStatus
   */
  get_role_status_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => RoleStatus;

  /**
   * Set an item of ROLE_STATUS array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_role_status_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: RoleStatus,
  ) => void;

  /**
   * Generate n ROLE_STATUS arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_role_status_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: RoleStatus | null,
  ) => List;

  /**
   * Get an item of NEW_TIMER array.
   * @param l List
   * @param i Subscript
   * @returns Timer
   */
  get_new_timer_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Timer;

  /**
   * Set an item of NEW_TIMER array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_new_timer_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Timer,
  ) => void;

  /**
   * Generate n NEW_TIMER arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_new_timer_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Timer | null,
  ) => List;

  /**
   * Get an item of ABILITY_TYPE array.
   * @param l List
   * @param i Subscript
   * @returns Int32
   */
  get_ability_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Int32;

  /**
   * Set an item of ABILITY_TYPE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_ability_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Int32,
  ) => void;

  /**
   * Generate n ABILITY_TYPE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_ability_type_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Int32 | null,
  ) => List;

  /**
   * Get an item of MODIFIER_TYPE array.
   * @param l List
   * @param i Subscript
   * @returns ModifierType
   */
  get_modifier_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => ModifierType;

  /**
   * Set an item of MODIFIER_TYPE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_modifier_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: ModifierType,
  ) => void;

  /**
   * Generate n MODIFIER_TYPE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_modifier_type_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: ModifierType | null,
  ) => List;

  /**
   * Get an item of RANDOM_POOL array.
   * @param l List
   * @param i Subscript
   * @returns RandomPool
   */
  get_random_pool_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => RandomPool;

  /**
   * Set an item of RANDOM_POOL array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_random_pool_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: RandomPool,
  ) => void;

  /**
   * Generate n RANDOM_POOL arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_random_pool_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: RandomPool | null,
  ) => List;

  /**
   * Get an item of LINK_SFX_ENTITY array.
   * @param l List
   * @param i Subscript
   * @returns LinkSfx
   */
  get_link_sfx_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => LinkSfx;

  /**
   * Set an item of LINK_SFX_ENTITY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_link_sfx_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: LinkSfx,
  ) => void;

  /**
   * Generate n LINK_SFX_ENTITY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_link_sfx_entity_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: LinkSfx | null,
  ) => List;

  /**
   * Get an item of PROJECTILE_GROUP array.
   * @param l List
   * @param i Subscript
   * @returns ProjectileGroup
   */
  get_projectile_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => ProjectileGroup;

  /**
   * Set an item of PROJECTILE_GROUP array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_projectile_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: ProjectileGroup,
  ) => void;

  /**
   * Generate n PROJECTILE_GROUP arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_projectile_group_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: ProjectileGroup | null,
  ) => List;

  /**
   * Get an item of DESTRUCTIBLE_ENTITY array.
   * @param l List
   * @param i Subscript
   * @returns Destructible
   */
  get_destructible_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Destructible;

  /**
   * Set an item of DESTRUCTIBLE_ENTITY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_destructible_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Destructible,
  ) => void;

  /**
   * Generate n DESTRUCTIBLE_ENTITY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_destructible_entity_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Destructible | null,
  ) => List;

  /**
   * Get an item of DESTRUCTIBLE_NAME array.
   * @param l List
   * @param i Subscript
   * @returns DestructibleKey
   */
  get_destructible_name_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => DestructibleKey;

  /**
   * Set an item of DESTRUCTIBLE_NAME array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_destructible_name_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: DestructibleKey,
  ) => void;

  /**
   * Generate n DESTRUCTIBLE_NAME arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_destructible_name_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: DestructibleKey | null,
  ) => List;

  /**
   * Get an item of SOUND_ENTITY array.
   * @param l List
   * @param i Subscript
   * @returns SoundEntity
   */
  get_sound_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => SoundEntity;

  /**
   * Set an item of SOUND_ENTITY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_sound_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: SoundEntity,
  ) => void;

  /**
   * Generate n SOUND_ENTITY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_sound_entity_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: SoundEntity | null,
  ) => List;

  /**
   * Get an item of ABILITY_CAST_TYPE array.
   * @param l List
   * @param i Subscript
   * @returns Int32
   */
  get_ability_cast_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Int32;

  /**
   * Set an item of ABILITY_CAST_TYPE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_ability_cast_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Int32,
  ) => void;

  /**
   * Generate n ABILITY_CAST_TYPE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_ability_cast_type_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Int32 | null,
  ) => List;

  /**
   * Get an item of CURVED_PATH array.
   * @param l List
   * @param i Subscript
   * @returns CurvedPath
   */
  get_curved_path_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => CurvedPath;

  /**
   * Set an item of CURVED_PATH array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_curved_path_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: CurvedPath,
  ) => void;

  /**
   * Generate n CURVED_PATH arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_curved_path_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: CurvedPath | null,
  ) => List;

  /**
   * Get an item of FLOAT array.
   * @param l List
   * @param i Subscript
   * @returns Fixed
   */
  get_float_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Fixed;

  /**
   * Set an item of FLOAT array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_float_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Fixed,
  ) => void;

  /**
   * Generate n FLOAT arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_float_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Fixed | null,
  ) => List;

  /**
   * Get an item of BOOLEAN array.
   * @param l List
   * @param i Subscript
   * @returns boolean
   */
  get_boolean_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => boolean;

  /**
   * Set an item of BOOLEAN array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_boolean_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: boolean,
  ) => void;

  /**
   * Generate n BOOLEAN arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_boolean_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: boolean | null,
  ) => List;

  /**
   * Get an item of INTEGER array.
   * @param l List
   * @param i Subscript
   * @returns Int32
   */
  get_integer_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Int32;

  /**
   * Set an item of INTEGER array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_integer_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Int32,
  ) => void;

  /**
   * Generate n INTEGER arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_integer_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Int32 | null,
  ) => List;

  /**
   * Get an item of STRING array.
   * @param l List
   * @param i Subscript
   * @returns string
   */
  get_string_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => string;

  /**
   * Set an item of STRING array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_string_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: string,
  ) => void;

  /**
   * Generate n STRING arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_string_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: string | null,
  ) => List;

  /**
   * Get an item of POINT array.
   * @param l List
   * @param i Subscript
   * @returns FPoint
   */
  get_point_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => FPoint;

  /**
   * Set an item of POINT array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_point_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: FPoint,
  ) => void;

  /**
   * Generate n POINT arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_point_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: FPoint | null,
  ) => List;

  /**
   * Get an item of UNIT_ENTITY array.
   * @param l List
   * @param i Subscript
   * @returns Unit
   */
  get_unit_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Unit;

  /**
   * Set an item of UNIT_ENTITY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_unit_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Unit,
  ) => void;

  /**
   * Generate n UNIT_ENTITY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_unit_entity_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Unit | null,
  ) => List;

  /**
   * Get an item of RECTANGLE array.
   * @param l List
   * @param i Subscript
   * @returns RecArea
   */
  get_rectangle_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => RecArea;

  /**
   * Set an item of RECTANGLE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_rectangle_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: RecArea,
  ) => void;

  /**
   * Generate n RECTANGLE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_rectangle_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: RecArea | null,
  ) => List;

  /**
   * Get an item of UNIT_TYPE array.
   * @param l List
   * @param i Subscript
   * @returns UnitType
   */
  get_unit_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => UnitType;

  /**
   * Set an item of UNIT_TYPE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_unit_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: UnitType,
  ) => void;

  /**
   * Generate n UNIT_TYPE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_unit_type_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: UnitType | null,
  ) => List;

  /**
   * Get an item of ABILITY array.
   * @param l List
   * @param i Subscript
   * @returns Ability
   */
  get_ability_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Ability;

  /**
   * Set an item of ABILITY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_ability_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Ability,
  ) => void;

  /**
   * Generate n ABILITY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_ability_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Ability | null,
  ) => List;

  /**
   * Get an item of TEAM array.
   * @param l List
   * @param i Subscript
   * @returns Camp
   */
  get_team_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Camp;

  /**
   * Set an item of TEAM array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_team_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Camp,
  ) => void;

  /**
   * Generate n TEAM arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_team_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Camp | null,
  ) => List;

  /**
   * Get an item of ROUND_AREA array.
   * @param l List
   * @param i Subscript
   * @returns CirArea
   */
  get_round_area_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => CirArea;

  /**
   * Set an item of ROUND_AREA array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_round_area_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: CirArea,
  ) => void;

  /**
   * Generate n ROUND_AREA arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_round_area_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: CirArea | null,
  ) => List;

  /**
   * Get an item of POINT_LIST array.
   * @param l List
   * @param i Subscript
   * @returns Road
   */
  get_point_list_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Road;

  /**
   * Set an item of POINT_LIST array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_point_list_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Road,
  ) => void;

  /**
   * Generate n POINT_LIST arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_point_list_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Road | null,
  ) => List;

  /**
   * Get an item of PLAYER array.
   * @param l List
   * @param i Subscript
   * @returns Role
   */
  get_player_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Role;

  /**
   * Set an item of PLAYER array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_player_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Role,
  ) => void;

  /**
   * Generate n PLAYER arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_player_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Role | null,
  ) => List;

  /**
   * Get an item of UNIT_GROUP array.
   * @param l List
   * @param i Subscript
   * @returns UnitGroup
   */
  get_unit_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => UnitGroup;

  /**
   * Set an item of UNIT_GROUP array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_unit_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: UnitGroup,
  ) => void;

  /**
   * Generate n UNIT_GROUP arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_unit_group_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: UnitGroup | null,
  ) => List;

  /**
   * Get an item of PLAYER_GROUP array.
   * @param l List
   * @param i Subscript
   * @returns RoleGroup
   */
  get_player_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => RoleGroup;

  /**
   * Set an item of PLAYER_GROUP array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_player_group_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: RoleGroup,
  ) => void;

  /**
   * Generate n PLAYER_GROUP arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_player_group_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: RoleGroup | null,
  ) => List;

  /**
   * Get an item of ITEM_ENTITY array.
   * @param l List
   * @param i Subscript
   * @returns Item
   */
  get_item_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Item;

  /**
   * Set an item of ITEM_ENTITY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_item_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Item,
  ) => void;

  /**
   * Generate n ITEM_ENTITY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_item_entity_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Item | null,
  ) => List;

  /**
   * Get an item of ITEM_NAME array.
   * @param l List
   * @param i Subscript
   * @returns ItemKey
   */
  get_item_name_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => ItemKey;

  /**
   * Set an item of ITEM_NAME array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_item_name_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: ItemKey,
  ) => void;

  /**
   * Generate n ITEM_NAME arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_item_name_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: ItemKey | null,
  ) => List;

  /**
   * Get an item of ROLE_RES_KEY array.
   * @param l List
   * @param i Subscript
   * @returns RoleResKey
   */
  get_role_res_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => RoleResKey;

  /**
   * Set an item of ROLE_RES_KEY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_role_res_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: RoleResKey,
  ) => void;

  /**
   * Generate n ROLE_RES_KEY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_role_res_key_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: RoleResKey | null,
  ) => List;

  /**
   * Get an item of UNIT_NAME_POOL array.
   * @param l List
   * @param i Subscript
   * @returns UnitKeyPool
   */
  get_unit_name_pool_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => UnitKeyPool;

  /**
   * Set an item of UNIT_NAME_POOL array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_unit_name_pool_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: UnitKeyPool,
  ) => void;

  /**
   * Generate n UNIT_NAME_POOL arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_unit_name_pool_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: UnitKeyPool | null,
  ) => List;

  /**
   * Get an item of ABILITY_NAME array.
   * @param l List
   * @param i Subscript
   * @returns AbilityKey
   */
  get_ability_name_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => AbilityKey;

  /**
   * Set an item of ABILITY_NAME array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_ability_name_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: AbilityKey,
  ) => void;

  /**
   * Generate n ABILITY_NAME arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_ability_name_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: AbilityKey | null,
  ) => List;

  /**
   * Get an item of UNIT_WRITE_ATTRIBUTE array.
   * @param l List
   * @param i Subscript
   * @returns string
   */
  get_unit_write_attribute_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => string;

  /**
   * Set an item of UNIT_WRITE_ATTRIBUTE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_unit_write_attribute_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: string,
  ) => void;

  /**
   * Generate n UNIT_WRITE_ATTRIBUTE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_unit_write_attribute_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: string | null,
  ) => List;

  /**
   * Get an item of ATTR_ELEMENT array.
   * @param l List
   * @param i Subscript
   * @returns string
   */
  get_attr_element_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => string;

  /**
   * Set an item of ATTR_ELEMENT array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_attr_element_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: string,
  ) => void;

  /**
   * Generate n ATTR_ELEMENT arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_attr_element_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: string | null,
  ) => List;

  /**
   * Get an item of MODIFIER array.
   * @param l List
   * @param i Subscript
   * @returns ModifierKey
   */
  get_modifier_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => ModifierKey;

  /**
   * Set an item of MODIFIER array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_modifier_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: ModifierKey,
  ) => void;

  /**
   * Generate n MODIFIER arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_modifier_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: ModifierKey | null,
  ) => List;

  /**
   * Get an item of PROJECTILE array.
   * @param l List
   * @param i Subscript
   * @returns ProjectileKey
   */
  get_projectile_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => ProjectileKey;

  /**
   * Set an item of PROJECTILE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_projectile_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: ProjectileKey,
  ) => void;

  /**
   * Generate n PROJECTILE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_projectile_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: ProjectileKey | null,
  ) => List;

  /**
   * Get an item of DAMAGE_TYPE array.
   * @param l List
   * @param i Subscript
   * @returns Int32
   */
  get_damage_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Int32;

  /**
   * Set an item of DAMAGE_TYPE array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_damage_type_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Int32,
  ) => void;

  /**
   * Generate n DAMAGE_TYPE arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_damage_type_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Int32 | null,
  ) => List;

  /**
   * Get an item of SFX_KEY array.
   * @param l List
   * @param i Subscript
   * @returns SfxKey
   */
  get_sfx_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => SfxKey;

  /**
   * Set an item of SFX_KEY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_sfx_key_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: SfxKey,
  ) => void;

  /**
   * Generate n SFX_KEY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_sfx_key_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: SfxKey | null,
  ) => List;

  /**
   * Get an item of UI_COMP array.
   * @param l List
   * @param i Subscript
   * @returns string
   */
  get_ui_comp_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => string;

  /**
   * Set an item of UI_COMP array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_ui_comp_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: string,
  ) => void;

  /**
   * Generate n UI_COMP arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_ui_comp_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: string | null,
  ) => List;

  /**
   * Get an item of CAMERA array.
   * @param l List
   * @param i Subscript
   * @returns Camera
   */
  get_camera_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Camera;

  /**
   * Set an item of CAMERA array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_camera_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Camera,
  ) => void;

  /**
   * Generate n CAMERA arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_camera_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Camera | null,
  ) => List;

  /**
   * Get an item of MODIFIER_ENTITY array.
   * @param l List
   * @param i Subscript
   * @returns Modifier
   */
  get_modifier_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Modifier;

  /**
   * Set an item of MODIFIER_ENTITY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_modifier_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Modifier,
  ) => void;

  /**
   * Generate n MODIFIER_ENTITY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_modifier_entity_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Modifier | null,
  ) => List;

  /**
   * Get an item of PROJECTILE_ENTITY array.
   * @param l List
   * @param i Subscript
   * @returns Projectile
   */
  get_projectile_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
  ) => Projectile;

  /**
   * Set an item of PROJECTILE_ENTITY array.
   * @param l List
   * @param i Subscript
   * @param v Value
   */
  set_projectile_entity_list_value: (
    /** List */
    l: List,
    /** Subscript */
    i: UInt32,
    /** Value */
    v: Projectile,
  ) => void;

  /**
   * Generate n PROJECTILE_ENTITY arrays with the value of v.
   * @param n Length
   * @param v Value
   * @returns List
   */
  get_projectile_entity_n_list: (
    /** Length */
    n: UInt32,
    /** Value */
    v: Projectile | null,
  ) => List;

  /**
   * Determine whether the BUFF is a case of the target BUFFID.
   * @param modifier1 BUFF case
   * @param modifier_key BUFFID
   * @returns boolean
   */
  is_modifier_id: (
    /** BUFF case */
    modifier1: Modifier,
    /** BUFFID */
    modifier_key: ModifierKey,
  ) => boolean;

  /**
   * Determine whether the BUFF is a case of the target BUFF.
   * @param modifier1 BUFF case
   * @param modifier2 BUFF case
   * @returns boolean
   */
  is_modifier_instance: (
    /** BUFF case */
    modifier1: Modifier,
    /** BUFF case */
    modifier2: Modifier,
  ) => boolean;

  /**
   * Determine whether the BUFF is a buff of the target type (buff or debuff).
   * @param modifier1 BUFF case
   * @param modifier_type BUFF type
   * @returns boolean
   */
  judge_modifier_effect_type: (
    /** BUFF case */
    modifier1: Modifier,
    /** BUFF type */
    modifier_type: ModifierEffectType,
  ) => boolean;

  /**
   * Get the effect type of the target buff.
   * @param modifier1 BUFF case
   * @returns ModifierKey
   */
  get_type_of_modifier_entity: (
    /** BUFF case */
    modifier1: Modifier,
  ) => ModifierKey;

  /**
   * Convert the target’s numerical ID to effect type.
   * @param modifier_key Numerical ID
   * @returns ModifierKey
   */
  transfer_num_into_modifier_key: (
    /** Numerical ID */
    modifier_key: Int32,
  ) => ModifierKey;

  /**
   * Last unit to compose item.
   * @returns Unit
   */
  get_last_compose_unit: () => Unit;

  /**
   * Last added item.
   * @returns Item
   */
  get_last_add_item: () => Item;

  /**
   * Last removed item.
   * @returns Item
   */
  get_last_remove_item: () => Item;

  /**
   * Last used item.
   * @returns Item
   */
  get_last_use_item: () => Item;

  /**
   * Last item whose stack has changed.
   * @returns Item
   */
  get_last_stack_changed_item: () => Item;

  /**
   * Last item whose charge has changed.
   * @returns Item
   */
  get_last_charge_changed_item: () => Item;

  /**
   * Last unit that added item.
   * @returns Unit
   */
  get_last_add_item_unit: () => Unit;

  /**
   * Last unit that removed item.
   * @returns Unit
   */
  get_last_remove_item_unit: () => Unit;

  /**
   * Last unit that used item.
   * @returns Unit
   */
  get_last_use_item_unit: () => Unit;

  /**
   * Last unit whose item’s stack has changed.
   * @returns Unit
   */
  get_last_change_item_stack_unit: () => Unit;

  /**
   * Last item to be purchased.
   * @returns Item
   */
  get_last_buy_shop_item: () => Item;

  /**
   * Last item to be sold.
   * @returns Item
   */
  get_last_sell_shop_item: () => Item;

  /**
   * Last buyer.
   * @returns Unit
   */
  get_last_buyer_unit: () => Unit;

  /**
   * Last seller.
   * @returns Unit
   */
  get_last_seller_unit: () => Unit;

  /**
   * Last unit to be purchased.
   * @returns Unit
   */
  get_last_buy_shop_unit: () => Unit;

  /**
   * Last upgraded tech.
   * @returns TechKey
   */
  get_last_upgraded_tech: () => TechKey;

  /**
   * Last upgraded/downgraded tech.
   * @returns TechKey
   */
  get_last_operated_tech: () => TechKey;

  /**
   * Last changed tech.
   * @returns TechKey
   */
  get_last_changed_tech: () => TechKey;

  /**
   * Last changed tech level.
   * @returns Int32
   */
  get_last_changed_tech_level: () => Int32;

  /**
   * Last gained tech.
   * @returns TechKey
   */
  get_last_added_tech: () => TechKey;

  /**
   * Last lost tech.
   * @returns TechKey
   */
  get_last_removed_tech: () => TechKey;

  /**
   * Last unit that researched tech.
   * @returns Unit
   */
  get_last_upgrade_tech_unit: () => Unit;

  /**
   * Last unit that gained tech.
   * @returns Unit
   */
  get_last_add_tech_unit: () => Unit;

  /**
   * Last unit that lost tech.
   * @returns Unit
   */
  get_last_remove_tech_unit: () => Unit;

  /**
   * Get the corresponding name of the tech level.
   * @param tech_no Tech ID
   * @param level Level
   * @returns string
   */
  get_tech_name: (
    /** Tech ID */
    tech_no: TechKey,
    /** Level */
    level: Int32,
  ) => string;

  /**
   * Get the corresponding icon of the tech level.
   * @param tech_no Tech ID
   * @param level Level
   * @returns Int32
   */
  get_tech_icon: (
    /** Tech ID */
    tech_no: TechKey,
    /** Level */
    level: Int32,
  ) => Int32;

  /**
   * Get the corresponding cost of the tech level.
   * @param tech_no Tech ID
   * @param level Level
   * @returns Int32
   */
  get_tech_cost: (
    /** Tech ID */
    tech_no: TechKey,
    /** Level */
    level: Int32,
  ) => Int32;

  /**
   * Get the max tech level.
   * @param tech_no Tech ID
   * @returns UInt32
   */
  get_tech_max_level: (
    /** Tech ID */
    tech_no: TechKey,
  ) => UInt32;

  /**
   * Last player to successfully used purchasables.
   * @returns Role
   */
  get_last_use_store_item_role: () => Role;

  /**
   * Call a function.
   * @param func_id Function
   * @param actor Caller
   * @param context Parameter and context
   * @returns DynamicTypeMeta
   */
  call_function: (
    /** Function */
    func_id: string,
    /** Caller */
    actor: Actor,
    /** Parameter and context */
    context: Dict,
  ) => DynamicTypeMeta;

  /**
   * Set the return value of a function.
   */
  set_function_return: () => void;

  /**
   * Remove the unit mover.
   * @param unit Unit
   */
  remove_unit_mover: (
    /** Unit */
    unit: Unit,
  ) => void;

  /**
   * Interrupt the unit mover.
   * @param unit Unit
   */
  break_unit_mover: (
    /** Unit */
    unit: Unit,
  ) => void;

  /**
   * Mover collision unit.
   * @returns Unit
   */
  get_mover_collide_unit: () => Unit;

  /**
   * Create a tracking mover.
   * @param unit Unit
   * @param target_unit Target unit
   * @param stop_distance_to_target Stopping distance
   * @param init_velocity Initial speed
   * @param acceleration Acceleration
   * @param max_velocity Max speed
   * @param min_velocity Min speed
   * @param init_height Initial height
   * @param parabola_height Parabolic vertex height
   * @param bind_point Socket
   * @param collision_type Collision type
   * @param collision_radius Collision range
   * @param is_face_angle Whether always facing movement direction
   * @param is_multi_collision Whether can collide with an object multiple times
   * @param terrain_block Terrain obstacle
   * @param priority Priority number
   * @param is_absolute_height Using absolutely height
   * @param f_unit_collide Mover complete event
   * @param f_mover_finish Mover interrupted event
   * @param f_terrain_collide Mover removed event
   * @param f_mover_interrupt Collides with terrain event
   * @param f_mover_removed Collides with unit event
   */
  create_chasing_mover: (
    /** Unit */
    unit: Unit,
    /** Target unit */
    target_unit: Unit,
    /** Stopping distance */
    stop_distance_to_target: Float,
    /** Initial speed */
    init_velocity: Float,
    /** Acceleration */
    acceleration: Float,
    /** Max speed */
    max_velocity: Float | null,
    /** Min speed */
    min_velocity: Float | null,
    /** Initial height */
    init_height: Float | null,
    /** Parabolic vertex height */
    parabola_height: Float | null,
    /** Socket */
    bind_point: string | null,
    /** Collision type */
    collision_type: Int32 | null,
    /** Collision range */
    collision_radius: Float | null,
    /** Whether always facing movement direction */
    is_face_angle: boolean | null,
    /** Whether can collide with an object multiple times */
    is_multi_collision: boolean | null,
    /** Terrain obstacle */
    terrain_block: boolean | null,
    /**
     * Priority number
     * @defaultValue `1`
     */
    priority: Int32 | null,
    /**
     * Using absolutely height
     * @defaultValue `false`
     */
    is_absolute_height: boolean | null,
    /** Mover complete event */
    f_unit_collide: () => void | null,
    /** Mover interrupted event */
    f_mover_finish: () => void | null,
    /** Mover removed event */
    f_terrain_collide: () => void | null,
    /** Collides with terrain event */
    f_mover_interrupt: () => void | null,
    /** Collides with unit event */
    f_mover_removed: () => void | null,
  ) => void;

  /**
   * Create a linear mover.
   * @param unit Unit
   * @param angle Movement direction
   * @param max_dist Max distance
   * @param init_velocity Initial speed
   * @param acceleration Acceleration
   * @param max_velocity Max speed
   * @param min_velocity Min speed
   * @param init_height Initial height
   * @param fin_height Terminal height
   * @param parabola_height Parabolic vertex height
   * @param collision_type Collision type
   * @param collision_radius Collision range
   * @param is_face_angle Whether always facing movement direction
   * @param is_multi_collision Whether can collide with an object multiple times
   * @param terrain_block Terrain obstacle
   * @param priority Priority number
   * @param is_absolute_height Using absolutely height
   * @param f_unit_collide Mover complete event
   * @param f_mover_finish Mover interrupted event
   * @param f_terrain_collide Mover removed event
   * @param f_mover_interrupt Collides with terrain event
   * @param f_mover_removed Collides with unit event
   */
  create_straight_mover: (
    /** Unit */
    unit: Unit,
    /** Movement direction */
    angle: Unit,
    /** Max distance */
    max_dist: Float,
    /** Initial speed */
    init_velocity: Float,
    /** Acceleration */
    acceleration: Float,
    /** Max speed */
    max_velocity: Float | null,
    /** Min speed */
    min_velocity: Float | null,
    /** Initial height */
    init_height: Float | null,
    /** Terminal height */
    fin_height: Float | null,
    /** Parabolic vertex height */
    parabola_height: Float | null,
    /** Collision type */
    collision_type: Int32 | null,
    /** Collision range */
    collision_radius: Float | null,
    /** Whether always facing movement direction */
    is_face_angle: boolean | null,
    /** Whether can collide with an object multiple times */
    is_multi_collision: boolean | null,
    /** Terrain obstacle */
    terrain_block: boolean | null,
    /**
     * Priority number
     * @defaultValue `1`
     */
    priority: Int32 | null,
    /**
     * Using absolutely height
     * @defaultValue `false`
     */
    is_absolute_height: boolean | null,
    /** Mover complete event */
    f_unit_collide: () => void | null,
    /** Mover interrupted event */
    f_mover_finish: () => void | null,
    /** Mover removed event */
    f_terrain_collide: () => void | null,
    /** Collides with terrain event */
    f_mover_interrupt: () => void | null,
    /** Collides with unit event */
    f_mover_removed: () => void | null,
  ) => void;

  /**
   * Create a loop mover.
   * @param unit Unit
   * @param target_unit Target unit
   * @param circle_radius Radius
   * @param angle_velocity Angular velocity
   * @param init_angle Initial angle
   * @param counterclockwise Direction
   * @param round_time Loop time
   * @param centrifugal_velocity Centrifugal speed
   * @param lifting_velocity Boost speed
   * @param around_init_height Loop height
   * @param collision_type Collision type
   * @param collision_radius Collision range
   * @param is_face_angle Whether always facing movement direction
   * @param is_multi_collision Whether can collide with an object multiple times
   * @param terrain_block Terrain obstacle
   * @param priority Priority number
   * @param target_pos Using absolutely height
   * @param is_absolute_height Target coordinates
   * @param f_unit_collide Mover complete event
   * @param f_mover_finish Mover interrupted event
   * @param f_terrain_collide Mover removed event
   * @param f_mover_interrupt Collides with terrain event
   * @param f_mover_removed Collides with unit event
   */
  create_round_mover: (
    /** Unit */
    unit: Unit,
    /** Target unit */
    target_unit: Unit,
    /** Radius */
    circle_radius: Float,
    /** Angular velocity */
    angle_velocity: Float,
    /** Initial angle */
    init_angle: Float | null,
    /** Direction */
    counterclockwise: Float | null,
    /** Loop time */
    round_time: Float | null,
    /** Centrifugal speed */
    centrifugal_velocity: Float | null,
    /** Boost speed */
    lifting_velocity: string | null,
    /** Loop height */
    around_init_height: Float | null,
    /** Collision type */
    collision_type: Int32 | null,
    /** Collision range */
    collision_radius: Float | null,
    /** Whether always facing movement direction */
    is_face_angle: boolean | null,
    /** Whether can collide with an object multiple times */
    is_multi_collision: boolean | null,
    /** Terrain obstacle */
    terrain_block: boolean | null,
    /**
     * Priority number
     * @defaultValue `1`
     */
    priority: Int32 | null,
    /** Using absolutely height */
    target_pos: boolean | null,
    /**
     * Target coordinates
     * @defaultValue `false`
     */
    is_absolute_height: Vector2 | null,
    /** Mover complete event */
    f_unit_collide: () => void | null,
    /** Mover interrupted event */
    f_mover_finish: () => void | null,
    /** Mover removed event */
    f_terrain_collide: () => void | null,
    /** Collides with terrain event */
    f_mover_interrupt: () => void | null,
    /** Collides with unit event */
    f_mover_removed: () => void | null,
  ) => void;

  /**
   * Create a curved mover.
   * @param unit Unit
   * @param angle Movement direction
   * @param max_dist Max distance
   * @param init_velocity Initial speed
   * @param acceleration Acceleration
   * @param max_velocity Max speed
   * @param min_velocity Min speed
   * @param init_height Initial height
   * @param fin_height Terminal height
   * @param collision_type Collision type
   * @param collision_radius Collision range
   * @param is_face_angle Whether always facing movement direction
   * @param is_multi_collision Whether can collide with an object multiple times
   * @param terrain_block Terrain obstacle
   * @param priority Priority number
   * @param is_absolute_height Using absolutely height
   * @param path Path
   * @param f_unit_collide Mover complete event
   * @param f_mover_finish Mover interrupted event
   * @param f_terrain_collide Mover removed event
   * @param f_mover_interrupt Collides with terrain event
   * @param f_mover_removed Collides with unit event
   */
  create_curved_mover: (
    /** Unit */
    unit: Unit,
    /** Movement direction */
    angle: Unit,
    /** Max distance */
    max_dist: Float,
    /** Initial speed */
    init_velocity: Float,
    /** Acceleration */
    acceleration: Float,
    /** Max speed */
    max_velocity: Float | null,
    /** Min speed */
    min_velocity: Float | null,
    /** Initial height */
    init_height: Float | null,
    /** Terminal height */
    fin_height: Float | null,
    /** Collision type */
    collision_type: Int32 | null,
    /** Collision range */
    collision_radius: Float | null,
    /** Whether always facing movement direction */
    is_face_angle: boolean | null,
    /** Whether can collide with an object multiple times */
    is_multi_collision: boolean | null,
    /** Terrain obstacle */
    terrain_block: boolean | null,
    /**
     * Priority number
     * @defaultValue `1`
     */
    priority: Int32 | null,
    /**
     * Using absolutely height
     * @defaultValue `false`
     */
    is_absolute_height: boolean | null,
    /** Path */
    path: CurvedPath | null,
    /** Mover complete event */
    f_unit_collide: () => void | null,
    /** Mover interrupted event */
    f_mover_finish: () => void | null,
    /** Mover removed event */
    f_terrain_collide: () => void | null,
    /** Collides with terrain event */
    f_mover_interrupt: () => void | null,
    /** Collides with unit event */
    f_mover_removed: () => void | null,
  ) => void;

  /**
   * Move.
   * @param pos Position
   * @returns UnitCommand
   */
  create_unit_command_move_to_pos: (
    /** Position */
    pos: FVector3,
  ) => UnitCommand;

  /**
   * Stop.
   * @returns UnitCommand
   */
  create_unit_command_stop: () => UnitCommand;

  /**
   * Garrison.
   * @param pos Position
   * @returns UnitCommand
   */
  create_unit_command_hold: (
    /** Position */
    pos: FVector3,
  ) => UnitCommand;

  /**
   * Attack move.
   * @param pos Position
   * @returns UnitCommand
   */
  create_unit_command_attack_move: (
    /** Position */
    pos: FVector3,
  ) => UnitCommand;

  /**
   * Attack.
   * @param target Target
   * @returns UnitCommand
   */
  create_unit_command_attack_target: (
    /** Target */
    target: Actor,
  ) => UnitCommand;

  /**
   * Move along path.
   * @param road Path
   * @param patrol_mode Movement type
   * @param can_attack Whether can actively attack.
   * @returns UnitCommand
   */
  create_unit_command_move_along_road: (
    /** Path */
    road: Road,
    /** Movement type */
    patrol_mode: Int32,
    /** Whether can actively attack. */
    can_attack: boolean,
  ) => UnitCommand;

  /**
   * Cast ability.
   * @param ability Ability
   * @param tar_point_1 Casting point 1
   * @param tar_point_2 Casting point 2
   * @param tar_unit Target casting unit
   * @param tar_item Target casting item
   * @param tar_dest Target destructible
   * @returns UnitCommand
   */
  create_unit_command_use_skill: (
    /** Ability */
    ability: Ability,
    /** Casting point 1 */
    tar_point_1: Point | null,
    /** Casting point 2 */
    tar_point_2: Point | null,
    /** Target casting unit */
    tar_unit: Unit | null,
    /** Target casting item */
    tar_item: Item | null,
    /** Target destructible */
    tar_dest: Destructible | null,
  ) => UnitCommand;

  /**
   * Pick up item.
   * @param item Item
   * @returns UnitCommand
   */
  create_unit_command_pick_item: (
    /** Item */
    item: Item,
  ) => UnitCommand;

  /**
   * Discard item.
   * @param item Item
   * @param pos Position
   * @returns UnitCommand
   */
  create_unit_command_drop_item: (
    /** Item */
    item: Item,
    /** Position */
    pos: FVector3,
  ) => UnitCommand;

  /**
   * Transfer item.
   * @param item Item
   * @param target Object
   * @returns UnitCommand
   */
  create_unit_command_transfer_item: (
    /** Item */
    item: Item,
    /** Object */
    target: Unit,
  ) => UnitCommand;

  /**
   * Follow.
   * @param target Target
   * @returns UnitCommand
   */
  create_unit_command_follow: (
    /** Target */
    target: Unit,
  ) => UnitCommand;

  /**
   * Create a unit.
   * @param key Unit ID
   * @param pos Position
   * @param angle Orientation
   * @param role_or_unit Affiliated player
   * @returns Unit
   */
  create_unit: (
    /** Unit ID */
    key: UnitKey,
    /** Position */
    pos: FVector3,
    /** Orientation */
    angle: Fixed,
    /** Affiliated player */
    role_or_unit: Role,
  ) => Unit;

  /**
   * Change the unit’s player owner.
   * @param unit Unit
   * @param role Affiliated player
   */
  change_unit_role: (
    /** Unit */
    unit: Unit,
    /** Affiliated player */
    role: Role,
  ) => void;

  /**
   * Modify the player’s resource icon.
   * @param res_key Resource name
   * @param icon_id Icon ID
   */
  change_role_res_icon: (
    /** Resource name */
    res_key: RoleResKey,
    /** Icon ID */
    icon_id: Int32,
  ) => void;

  /**
   * Remove a unit from the control list.
   * @param role Player
   * @param unit Unit
   */
  remove_control_unit: (
    /** Player */
    role: Role,
    /** Unit */
    unit: Unit,
  ) => void;

  /**
   * Get the unit list of faction.
   * @param role Player
   * @param team_id Faction ID
   */
  get_unit_ids_in_team: (
    /** Player */
    role: Role,
    /** Faction ID */
    team_id: Int32,
  ) => void;

  /**
   * Add the unit to faction.
   * @param role Player
   * @param team_id Faction ID
   * @param unit Unit
   */
  add_unit_to_team: (
    /** Player */
    role: Role,
    /** Faction ID */
    team_id: Int32,
    /** Unit */
    unit: Unit,
  ) => void;

  /**
   * Remove the unit from faction.
   * @param role Player
   * @param team_id Faction ID
   * @param unit Unit
   */
  remove_unit_from_team: (
    /** Player */
    role: Role,
    /** Faction ID */
    team_id: Int32,
    /** Unit */
    unit: Unit,
  ) => void;

  /**
   * Create an illusion.
   * @param clone_unit Copy target
   * @param caller_unit Summoner
   * @param role Player
   * @param pos Position
   * @param angle Orientation
   */
  create_illusion: (
    /** Copy target */
    clone_unit: Unit,
    /** Summoner */
    caller_unit: Unit,
    /** Player */
    role: Role,
    /** Position */
    pos: FVector3,
    /** Orientation */
    angle: Fixed,
  ) => void;

  /**
   * Determine whether the unit is an illusory unit.
   * @param unit Unit
   * @returns boolean
   */
  is_unit_illusion: (
    /** Unit */
    unit: Unit,
  ) => boolean;

  /**
   * Get the illusion's summoner
   * @param illusion_unit Illusion unit
   * @returns Unit
   */
  get_illusion_caller_unit: (
    /** Illusion unit */
    illusion_unit: Unit,
  ) => Unit;

  /**
   * Create a projectile at the unit’s socket.
   * @param p_key Projectile ID
   * @param socket_unit Socket’s affiliated unit
   * @param socket_name Socket name
   * @param face Orientation
   * @param owner_unit Affiliation unit
   * @param related_ability Affiliation ability
   * @param visibility Particle visibility rules
   * @returns Projectile
   */
  create_projectile_on_socket: (
    /** Projectile ID */
    p_key: ProjectileKey,
    /** Socket’s affiliated unit */
    socket_unit: Unit,
    /** Socket name */
    socket_name: string,
    /** Orientation */
    face: Fixed,
    /** Affiliation unit */
    owner_unit: Unit | null,
    /** Affiliation ability */
    related_ability: Ability | null,
    /**
     * Particle visibility rules
     * @defaultValue `1`
     */
    visibility: Int32 | null,
  ) => Projectile;

  /**
   * Create a projectile.
   * @param p_key Projectile ID
   * @param location Location
   * @param face Orientation
   * @param owner_unit Affiliation unit
   * @param related_ability Affiliation ability
   * @param duration Duration
   * @param is_open_duration Whether to enable duration
   * @param height Height
   * @param visibility Particle visibility rules
   * @returns Projectile
   */
  create_projectile_in_scene: (
    /** Projectile ID */
    p_key: ProjectileKey,
    /** Location */
    location: FVector3,
    /**
     * Orientation
     * @defaultValue `Fix32(0.0)`
     */
    face: Fixed | null,
    /** Affiliation unit */
    owner_unit: Unit | null,
    /** Affiliation ability */
    related_ability: Ability | null,
    /** Duration */
    duration: Fixed | null,
    /**
     * Whether to enable duration
     * @defaultValue `false`
     */
    is_open_duration: boolean | null,
    /** Height */
    height: Fixed | null,
    /**
     * Particle visibility rules
     * @defaultValue `1`
     */
    visibility: Int32 | null,
  ) => Projectile;

  /**
   * Play BGM for a single player.
   * @param role Player
   * @param sid Sound ID
   */
  single_player_play_bgm: (
    /** Player */
    role: Role,
    /** Sound ID */
    sid: AudioKey,
  ) => void;

  /**
   * Stop playing BGM for a single player.
   * @param role Player
   * @param sid Sound ID
   */
  single_player_stop_bgm: (
    /** Player */
    role: Role,
    /** Sound ID */
    sid: AudioKey,
  ) => void;

  /**
   * Play BGM for all players.
   * @param sid Sound ID
   */
  all_player_play_bgm: (
    /** Sound ID */
    sid: AudioKey,
  ) => void;

  /**
   * Stop playing BGM for all players.
   * @param sid Sound ID
   */
  all_player_stop_bgm: (
    /** Sound ID */
    sid: AudioKey,
  ) => void;

  /**
   * Play music.
   * @param role Player
   * @param sid Sound ID
   * @param loop Whether to loop
   */
  play_sound_for_player: (
    /** Player */
    role: Role,
    /** Sound ID */
    sid: AudioKey,
    /** Whether to loop */
    loop: boolean,
  ) => void;

  /**
   * Play spatial music.
   * @param role Player
   * @param sid Sound ID
   * @param position Play location
   * @param height Height
   * @param volume Volume
   */
  play_3d_sound_for_player: (
    /** Player */
    role: Role,
    /** Sound ID */
    sid: AudioKey,
    /** Play location */
    position: Point,
    /** Height */
    height: Float,
    /** Volume */
    volume: Int32,
  ) => void;

  /**
   * Play spatial music that follows unit.
   * @param role Player
   * @param sid Sound ID
   * @param volume Volume
   * @param unit Unit
   */
  follow_object_play_3d_sound_for_player: (
    /** Player */
    role: Role,
    /** Sound ID */
    sid: AudioKey,
    /** Volume */
    volume: Int32,
    /** Unit */
    unit: Unit,
  ) => void;

  /**
   * Stop playing music.
   * @param role Player
   * @param sound Sound
   * @param whether_stop_immediately Whether to stop instantly
   */
  stop_sound: (
    /** Player */
    role: Role,
    /** Sound */
    sound: SoundEntity,
    /**
     * Whether to stop instantly
     * @defaultValue `true`
     */
    whether_stop_immediately: boolean | null,
  ) => void;

  /**
   * Add the player to a player group.
   * @param role Player
   * @param group Player group
   */
  add_role_to_group: (
    /** Player */
    role: Role,
    /** Player group */
    group: RoleGroup,
  ) => void;

  /**
   * Remove the player from a player group.
   * @param role Player
   * @param group Player group
   */
  rem_role_from_group: (
    /** Player */
    role: Role,
    /** Player group */
    group: RoleGroup,
  ) => void;

  /**
   * Get unit by unit ID.
   * @param unit_id Unit ID
   * @returns Unit
   */
  get_unit_by_id: (
    /** Unit ID */
    unit_id: UnitID,
  ) => Unit;

  /**
   * Get projectile by projectile ID.
   * @param projectile_id Projectile ID
   * @returns Projectile
   */
  get_projectile_by_id: (
    /** Projectile ID */
    projectile_id: ProjectileID,
  ) => Projectile;

  /**
   * Filter unit group in traversing.
   * @param unit_group Unit group
   * @returns UnitGroup
   */
  refresh_unit_group: (
    /** Unit group */
    unit_group: UnitGroup,
  ) => UnitGroup;

  /**
   * Determine whether the unit is in a unit group.
   * @param unit Unit
   * @param group Unit group
   * @returns boolean
   */
  judge_unit_in_group: (
    /** Unit */
    unit: Unit,
    /** Unit group */
    group: UnitGroup,
  ) => boolean;

  /**
   * Angle between points.
   * @param p1 Point
   * @param p2 Target point
   * @returns Fixed
   */
  get_points_angle: (
    /** Point */
    p1: Point,
    /** Target point */
    p2: Point,
  ) => Fixed;

  /**
   * Distance between points.
   * @param p1 Point
   * @param p2 Target point
   * @returns Fixed
   */
  get_points_dis: (
    /** Point */
    p1: Point,
    /** Target point */
    p2: Point,
  ) => Fixed;

  /**
   * Get the current point’s height above ground.
   * @param point Point
   * @returns Fixed
   */
  get_point_ground_height: (
    /** Point */
    point: Point,
  ) => Fixed;

  /**
   * Get the current point’s collision type.
   * @param point Point
   * @returns Int32
   */
  get_point_ground_collision: (
    /** Point */
    point: Point,
  ) => Int32;

  /**
   * Get the current point’s visual occlusion type.
   * @param point Point
   * @returns Int32
   */
  get_point_view_block_type: (
    /** Point */
    point: Point,
  ) => Int32;

  /**
   * Determine whether the point is in the region.
   * @param point Point
   * @param area Region
   * @returns boolean
   */
  judge_point_in_area: (
    /** Point */
    point: FVector3,
    /** Region */
    area: Area,
  ) => boolean;

  /**
   * Determine whether the point is in the square.
   * @param point Point
   * @param center Central point
   * @param width Side length of square
   * @returns boolean
   */
  judge_point_in_rec: (
    /** Point */
    point: FVector3,
    /** Central point */
    center: FVector3,
    /** Side length of square */
    width: Fixed,
  ) => boolean;

  /**
   * Add tag to the region.
   * @param area Region
   * @param tag tag
   */
  add_area_tag: (
    /** Region */
    area: Area,
    /** tag */
    tag: string,
  ) => void;

  /**
   * Remove tag from the region.
   * @param area Region
   * @param tag tag
   */
  remove_area_tag: (
    /** Region */
    area: Area,
    /** tag */
    tag: string,
  ) => void;

  /**
   * Add tag to the path.
   * @param road Path
   * @param tag tag
   */
  add_road_tag: (
    /** Path */
    road: Road,
    /** tag */
    tag: string,
  ) => void;

  /**
   * Remove tag from the path.
   * @param road Path
   * @param tag tag
   */
  remove_road_tag: (
    /** Path */
    road: Road,
    /** tag */
    tag: string,
  ) => void;

  /**
   * Whether the circle has specific tags.
   * @param area Region
   * @param tag tag
   * @returns boolean
   */
  if_cir_area_has_tag: (
    /** Region */
    area: Area,
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * Whether the rectangle has specific tags.
   * @param area Region
   * @param tag tag
   * @returns boolean
   */
  if_rect_area_has_tag: (
    /** Region */
    area: Area,
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * Whether the path has specific tags.
   * @param road Path
   * @param tag tag
   * @returns boolean
   */
  if_road_has_tag: (
    /** Path */
    road: Road,
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * Get the corresponding circle by tag.
   * @param tag tag
   * @returns CirArea
   */
  get_cir_areas_by_tag: (
    /** tag */
    tag: string,
  ) => CirArea;

  /**
   * Get the corresponding rectangle by tag.
   * @param tag tag
   * @returns RecArea
   */
  get_rect_areas_by_tag: (
    /** tag */
    tag: string,
  ) => RecArea;

  /**
   * Get the corresponding path by tag.
   * @param tag tag
   * @returns Road
   */
  get_roads_by_tag: (
    /** tag */
    tag: string,
  ) => Road;

  /**
   * Create a rectangle.
   * @param point Bottom left starting point
   * @param width Width
   * @param height Height
   * @returns RecArea
   */
  create_new_rec_area: (
    /** Bottom left starting point */
    point: FVector3,
    /** Width */
    width: Fixed,
    /** Height */
    height: Fixed,
  ) => RecArea;

  /**
   * Create a rectangle from central point.
   * @param center Central point
   * @param width Width
   * @param height Height
   * @returns RecArea
   */
  create_rect_area_by_center: (
    /** Central point */
    center: FVector3,
    /** Width */
    width: Fixed,
    /** Height */
    height: Fixed,
  ) => RecArea;

  /**
   * Create a rectangle from two points.
   * @param point_begin Starting point
   * @param point_end Ending point
   * @returns RecArea
   */
  create_rec_area_from_two_points: (
    /** Starting point */
    point_begin: Point,
    /** Ending point */
    point_end: Point,
  ) => RecArea;

  /**
   * Create a circle.
   * @param point Central point
   * @param radius Radius
   * @returns CirArea
   */
  create_new_cir_area: (
    /** Central point */
    point: FVector3,
    /** Radius */
    radius: Fixed,
  ) => CirArea;

  /**
   * Create a polygon.
   * @param road Path
   * @returns PolyArea
   */
  create_polygon_area_by_road: (
    /** Path */
    road: Road,
  ) => PolyArea;

  /**
   * Set the circle's size.
   * @param area Circle
   * @param radius Radius
   */
  set_cir_area_radius: (
    /** Circle */
    area: CirArea,
    /** Radius */
    radius: Fixed,
  ) => void;

  /**
   * Get the circle’s radius.
   * @param area Circle
   * @returns Fixed
   */
  get_circle_area_radius: (
    /** Circle */
    area: CirArea,
  ) => Fixed;

  /**
   * Get the lowest value X coordinate in the circle.
   * @param area Circle
   * @returns Fixed
   */
  get_circle_area_min_x: (
    /** Circle */
    area: CirArea,
  ) => Fixed;

  /**
   * Get the lowest value Y coordinate in the circle.
   * @param area Circle
   * @returns Fixed
   */
  get_circle_area_min_y: (
    /** Circle */
    area: CirArea,
  ) => Fixed;

  /**
   * Get the highest value X coordinate in the circle.
   * @param area Circle
   * @returns Fixed
   */
  get_circle_area_max_x: (
    /** Circle */
    area: CirArea,
  ) => Fixed;

  /**
   * Get the highest value Y coordinate in the circle.
   * @param area Circle
   * @returns Fixed
   */
  get_circle_area_max_y: (
    /** Circle */
    area: CirArea,
  ) => Fixed;

  /**
   * Set the rectangle's size.
   * @param area Rectangle
   * @param length Length
   * @param width Width
   */
  set_rect_area_radius: (
    /** Rectangle */
    area: RecArea,
    /** Length */
    length: Fixed,
    /** Width */
    width: Fixed,
  ) => void;

  /**
   * Get the lowest value X coordinate in the rectangle.
   * @param area Rectangle
   * @returns Fixed
   */
  get_rect_area_min_x: (
    /** Rectangle */
    area: RecArea,
  ) => Fixed;

  /**
   * Get the lowest value Y coordinate in the rectangle.
   * @param area Rectangle
   * @returns Fixed
   */
  get_rect_area_min_y: (
    /** Rectangle */
    area: RecArea,
  ) => Fixed;

  /**
   * Get the highest value X coordinate in the rectangle.
   * @param area Rectangle
   * @returns Fixed
   */
  get_rect_area_max_x: (
    /** Rectangle */
    area: RecArea,
  ) => Fixed;

  /**
   * Get the highest value Y coordinate in the rectangle.
   * @param area Rectangle
   * @returns Fixed
   */
  get_rect_area_max_y: (
    /** Rectangle */
    area: RecArea,
  ) => Fixed;

  /**
   * Get usable map range.
   * @returns RecArea
   */
  get_usable_map_range: () => RecArea;

  /**
   * Return a rectangle by region ID.
   * @param res_id Region ID
   * @returns RecArea
   */
  get_rec_area_by_res_id: (
    /** Region ID */
    res_id: AreaID,
  ) => RecArea;

  /**
   * Return a circle by region ID.
   * @param res_id Region ID
   * @returns CirArea
   */
  get_circle_area_by_res_id: (
    /** Region ID */
    res_id: AreaID,
  ) => CirArea;

  /**
   * Return a custom polygon by region ID.
   * @param res_id Region ID
   * @returns PolyArea
   */
  get_polygon_area_by_res_id: (
    /** Region ID */
    res_id: AreaID,
  ) => PolyArea;

  /**
   * Last created rectangle.
   * @returns RecArea
   */
  get_rec_area_last_created: () => RecArea;

  /**
   * Whether the point is in a rectangle.
   * @param point Point
   * @param area Rectangle
   * @returns boolean
   */
  judge_point_in_rec_area: (
    /** Point */
    point: FPoint,
    /** Rectangle */
    area: RecArea,
  ) => boolean;

  /**
   * Whether the point is in a circle.
   * @param point Point
   * @param area Circle
   * @returns boolean
   */
  judge_point_in_cir_area: (
    /** Point */
    point: FPoint,
    /** Circle */
    area: CirArea,
  ) => boolean;

  /**
   * Whether the point is in an irregular region.
   * @param point Point
   * @param area Irregular region
   * @returns boolean
   */
  judge_point_in_polygon_area: (
    /** Point */
    point: FPoint,
    /** Irregular region */
    area: CirArea,
  ) => boolean;

  /**
   * Return a point by resource ID.
   * @param res_id Resource ID
   * @returns FPoint
   */
  get_point_by_res_id: (
    /** Resource ID */
    res_id: Int32,
  ) => FPoint;

  /**
   * Get the number of units in a region.
   * @param area Region
   * @returns UInt32
   */
  get_unit_num_in_area: (
    /** Region */
    area: Area,
  ) => UInt32;

  /**
   * Get the number of units in a rectangle.
   * @param area Rectangle
   * @returns UInt32
   */
  get_unit_num_in_rec_area: (
    /** Rectangle */
    area: RecArea,
  ) => UInt32;

  /**
   * Get the number of units in a circle.
   * @param area Circle
   * @returns UInt32
   */
  get_unit_num_in_cir_area: (
    /** Circle */
    area: CirArea,
  ) => UInt32;

  /**
   * All undestroyed units in the rectangle.
   * @param area Rectangle
   * @returns UnitGroup
   */
  get_unit_group_in_rec_area: (
    /** Rectangle */
    area: RecArea,
  ) => UnitGroup;

  /**
   * All undestroyed units in the circle.
   * @param area Circle
   * @returns UnitGroup
   */
  get_unit_group_in_cir_area: (
    /** Circle */
    area: CirArea,
  ) => UnitGroup;

  /**
   * All items in the rectangle.
   * @param area Rectangle
   * @returns ItemGroup
   */
  get_item_group_in_rec_area: (
    /** Rectangle */
    area: RecArea,
  ) => ItemGroup;

  /**
   * All items in the circle.
   * @param area Circle
   * @returns ItemGroup
   */
  get_item_group_in_cir_area: (
    /** Circle */
    area: CirArea,
  ) => ItemGroup;

  /**
   * Remove the region.
   * @param area Region
   */
  remove_area: (
    /** Region */
    area: Area,
  ) => void;

  /**
   * Get the region’s weather.
   * @param area Region
   * @returns UInt32
   */
  get_area_weather: (
    /** Region */
    area: Area,
  ) => UInt32;

  /**
   * Set the region’s weather.
   * @param area Region
   * @param weather_type Weather type
   */
  update_area_weather: (
    /** Region */
    area: Area,
    /** Weather type */
    weather_type: UInt32,
  ) => void;

  /**
   * Set global weather.
   * @param weather_type Weather type
   */
  update_global_weather: (
    /** Weather type */
    weather_type: UInt32,
  ) => void;

  /**
   * Get global weather.
   * @returns UInt32
   */
  get_global_weather: () => UInt32;

  /**
   * Start ability indicator.
   * @param role Player
   * @param ability Ability
   */
  start_skill_pointer: (
    /** Player */
    role: Role,
    /** Ability */
    ability: Ability,
  ) => void;

  /**
   * Stop ability indicator.
   * @param role Player
   * @param ability Ability
   */
  stop_skill_pointer: (
    /** Player */
    role: Role,
    /** Ability */
    ability: Ability,
  ) => void;

  /**
   * Get the unit group by fixed unit ID.
   * @param unit_key Unit ID
   * @returns UnitGroup
   */
  get_units_by_key: (
    /** Unit ID */
    unit_key: UnitKey,
  ) => UnitGroup;

  /**
   * Integer random units from a unit group.
   * @param units Unit group
   * @param n Different random units
   * @returns UnitGroup
   */
  get_random_n_unit_in_group: (
    /** Unit group */
    units: UnitGroup,
    /** Different random units */
    n: UInt32,
  ) => UnitGroup;

  /**
   * The first unit in a unit group.
   * @param units Unit group
   * @returns Unit
   */
  get_first_unit_in_group: (
    /** Unit group */
    units: UnitGroup,
  ) => Unit;

  /**
   * Get integer units from a unit group according to attribute values.
   * @param units Unit group
   * @param attr Attribute
   * @param rise Whether in ascending order
   * @param num Unit number
   * @returns UnitGroup
   */
  get_unit_sort_by_attr: (
    /** Unit group */
    units: UnitGroup,
    /** Attribute */
    attr: string,
    /** Whether in ascending order */
    rise: boolean,
    /** Unit number */
    num: UInt32,
  ) => UnitGroup;

  /**
   * Get integer units from a unit group according to distance.
   * @param units Unit group
   * @param point Point
   * @param rise Whether in ascending order
   * @param num Unit number
   * @returns UnitGroup
   */
  get_unit_sort_by_position: (
    /** Unit group */
    units: UnitGroup,
    /** Point */
    point: FPoint,
    /** Whether in ascending order */
    rise: boolean,
    /** Unit number */
    num: UInt32,
  ) => UnitGroup;

  /**
   * A random unit of the unit group.
   * @param units Unit group
   * @returns Unit
   */
  get_random_unit_in_unit_group: (
    /** Unit group */
    units: UnitGroup,
  ) => Unit;

  /**
   * Ability’s selected target unit.
   * @param ability Ability
   * @returns Unit
   */
  get_target_unit_in_ability: (
    /** Ability */
    ability: Ability,
  ) => Unit;

  /**
   * Ability’s selected target item.
   * @param ability Ability
   * @returns Item
   */
  get_target_item_in_ability: (
    /** Ability */
    ability: Ability,
  ) => Item;

  /**
   * Ability’s selected target destructible.
   * @param ability Ability
   * @returns Destructible
   */
  get_target_dest_in_ability: (
    /** Ability */
    ability: Ability,
  ) => Destructible;

  /**
   * Filter units in the range.
   * @param pos Coordinates
   * @param shape Shape
   * @returns UnitGroup
   */
  filter_unit_id_list_in_area: (
    /** Coordinates */
    pos: Vector3,
    /** Shape */
    shape: Shape,
  ) => UnitGroup;

  /**
   * Filter projectiles in the range.
   * @param pos Coordinates
   * @param shape Shape
   * @returns ProjectileGroup
   */
  filter_projectile_id_list_in_area: (
    /** Coordinates */
    pos: Vector3,
    /** Shape */
    shape: Shape,
  ) => ProjectileGroup;

  /**
   * Get faction object by faction ID.
   * @param camp_id Faction ID
   * @returns Camp
   */
  get_camp_by_camp_id: (
    /** Faction ID */
    camp_id: CampID,
  ) => Camp;

  /**
   * Get faction ID by player ID.
   * @param role_id Player ID
   * @returns Camp
   */
  get_camp_id_by_role_id: (
    /** Player ID */
    role_id: RoleID,
  ) => Camp;

  /**
   * Get player object by player ID.
   * @param role_id Player ID
   * @returns Role
   */
  get_role_by_role_id: (
    /** Player ID */
    role_id: RoleID,
  ) => Role;

  /**
   * Get player object by integer.
   * @param role_id Player ID
   * @returns Role
   */
  get_role_by_int: (
    /** Player ID */
    role_id: UInt32,
  ) => Role;

  /**
   * Get the number of units alive in the faction.
   * @param camp_id Faction ID
   * @returns Int32
   */
  get_alive_unit_num_by_camp_id: (
    /** Faction ID */
    camp_id: CampID,
  ) => Int32;

  /**
   * All players.
   * @returns RoleGroup
   */
  get_all_role_ids: () => RoleGroup;

  /**
   * All players in the faction.
   * @param camp Faction object
   * @returns RoleGroup
   */
  get_role_ids_by_camp: (
    /** Faction object */
    camp: Camp,
  ) => RoleGroup;

  /**
   * Get a player by specific type.
   * @param role_type Player type
   * @returns RoleGroup
   */
  get_role_ids_by_type: (
    /** Player type */
    role_type: Int32,
  ) => RoleGroup;

  /**
   * Friendly players.
   * @param role Player
   * @returns RoleGroup
   */
  get_ally_ids_by_role: (
    /** Player */
    role: Role,
  ) => RoleGroup;

  /**
   * Get a player’s hostile player group.
   * @param role Player
   * @returns RoleGroup
   */
  get_enemy_ids_by_role: (
    /** Player */
    role: Role,
  ) => RoleGroup;

  /**
   * Get the victorious player group.
   * @returns RoleGroup
   */
  get_victorious_role_ids: () => RoleGroup;

  /**
   * Get the defeated player group.
   * @returns RoleGroup
   */
  get_defeated_role_ids: () => RoleGroup;

  /**
   * End player’s game.
   * @param role Player
   * @param result Battle result
   * @param show Display ending panel
   * @param send Whether to upload the player’s leaderboard score
   * @param score Leaderboard score
   * @param accumulate Whether to accumulate scores
   */
  set_melee_result_by_role: (
    /** Player */
    role: Role,
    /** Battle result */
    result: string,
    /** Display ending panel */
    show: boolean,
    /**
     * Whether to upload the player’s leaderboard score
     * @defaultValue `false`
     */
    send: boolean | null,
    /**
     * Leaderboard score
     * @defaultValue `0`
     */
    score: Int32 | null,
    /**
     * Whether to accumulate scores
     * @defaultValue `false`
     */
    accumulate: boolean | null,
  ) => void;

  /**
   * Upload player's leaderboard score.
   * @param role Player
   * @param score Leaderboard score
   * @param accumulate Whether to accumulate scores
   */
  upload_role_billboard_score: (
    /** Player */
    role: Role,
    /** Leaderboard score */
    score: Int32,
    /**
     * Whether to accumulate scores
     * @defaultValue `false`
     */
    accumulate: boolean | null,
  ) => void;

  /**
   * Game ends.
   */
  game_end: () => void;

  /**
   * Pause the game.
   */
  pause_game: () => void;

  /**
   * Whether 3D attributes are enabled.
   * @returns boolean
   */
  api_if_pri_attr_state_open: () => boolean;

  /**
   * Determine whether the unit is hostile.
   * @param unit1 Unit
   * @param unit2 Unit
   * @returns boolean
   */
  is_enemy: (
    /** Unit */
    unit1: Unit,
    /** Unit */
    unit2: Unit,
  ) => boolean;

  /**
   * Determine whether the unit is friendly.
   * @param unit1 Unit
   * @param unit2 Unit
   * @returns boolean
   */
  is_ally: (
    /** Unit */
    unit1: Unit,
    /** Unit */
    unit2: Unit,
  ) => boolean;

  /**
   * Whether the unit is visible to a player or a unit.
   * @param role_or_unit Player
   * @param unit Unit
   * @returns boolean
   */
  get_visibility_of_unit: (
    /** Player */
    role_or_unit: Role,
    /** Unit */
    unit: Unit,
  ) => boolean;

  /**
   * Whether the player has joined the game.
   * @param role Player
   * @returns boolean
   */
  role_in_game: (
    /** Player */
    role: Role,
  ) => boolean;

  /**
   * Whether the player has a purchasable.
   * @param role Player
   * @param no Purchasable key
   * @returns boolean
   */
  role_has_store_item: (
    /** Player */
    role: Role,
    /** Purchasable key */
    no: StoreKey,
  ) => boolean;

  /**
   * Whether to call back when the player downloads save.
   * @param role Player
   * @returns boolean
   */
  has_download_save_data_callback: (
    /** Player */
    role: Role,
  ) => boolean;

  /**
   * Get the last created item.
   * @returns Item
   */
  get_last_created_item: () => Item;

  /**
   * Create items.
   * @param position Position
   * @param num Quantity
   * @param eid Item ID
   * @param player Affiliated player
   */
  create_items: (
    /** Position */
    position: FVector3,
    /** Quantity */
    num: Int32,
    /** Item ID */
    eid: ItemKey,
    /** Affiliated player */
    player: Role,
  ) => void;

  /**
   * Get the item by ID.
   * @param id Item ID
   * @returns Item
   */
  get_item: (
    /** Item ID */
    id: ItemID,
  ) => Item;

  /**
   * Get the item by item ID.
   * @param item_unit_id unit_id
   * @returns Item
   */
  get_item_by_unit_id: (
    /** unit_id */
    item_unit_id: UInt32,
  ) => Item;

  /**
   * Get the configuration name of the item.
   * @param key item_id
   * @returns string
   */
  get_item_conf_name: (
    /** item_id */
    key: ItemKey,
  ) => string;

  /**
   * Create a single item.
   * @param position Position
   * @param item_key Item ID
   * @param player Affiliated player
   * @returns Item
   */
  create_item_by_id: (
    /** Position */
    position: FVector3,
    /** Item ID */
    item_key: ItemKey,
    /** Affiliated player */
    player: Role,
  ) => Item;

  /**
   * Refresh trigger.
   */
  refresh_triggers: () => void;

  /**
   * Get the destructible by preset ID.
   * @param dest_unit_id Preset destructible unit_id
   * @returns Destructible
   */
  get_dest_by_id: (
    /** Preset destructible unit_id */
    dest_unit_id: DestructibleID,
  ) => Destructible;

  /**
   * Get destructible type.
   * @param dest Destructible
   * @returns DestructibleKey
   */
  get_dest_type: (
    /** Destructible */
    dest: Destructible,
  ) => DestructibleKey;

  /**
   * Determine whether the destructible is in the region.
   * @param dest_id Destructible
   * @param area Region
   * @returns boolean
   */
  is_dest_in_area: (
    /** Destructible */
    dest_id: Destructible,
    /** Region */
    area: Area,
  ) => boolean;

  /**
   * Create a destructible.
   * @param location Location
   * @param dest_key Item ID
   * @param angle Orientation
   * @param size Size
   */
  create_destructible: (
    /** Location */
    location: FVector3,
    /** Item ID */
    dest_key: DestructibleKey,
    /** Orientation */
    angle: Fixed,
    /** Size */
    size: Float,
  ) => void;

  /**
   * Get the destructible list in the region.
   * @param area Region object
   * @returns List
   */
  get_all_dest_in_area: (
    /** Region object */
    area: Area,
  ) => List;

  /**
   * Get the destructible list in the range.
   * @param point Region object
   * @param rng Radius
   * @returns List
   */
  get_all_dest_in_point_rng: (
    /** Region object */
    point: Point,
    /** Radius */
    rng: Float,
  ) => List;

  /**
   * Create camera.
   * @param focus_point Point
   * @param dis Focal length
   * @param focus_y Focal point height
   * @param yaw yaw
   * @param pitch pitch
   * @param fov fov
   */
  add_camera_conf: (
    /** Point */
    focus_point: FVector3,
    /** Focal length */
    dis: Float,
    /** Focal point height */
    focus_y: Float | null,
    /** yaw */
    yaw: Float | null,
    /** pitch */
    pitch: Float | null,
    /** fov */
    fov: Float | null,
  ) => void;

  /**
   * Apply camera configuration.
   * @param role Player
   * @param conf_id Camera configuration
   * @param duration Transition time
   */
  apply_camera_conf: (
    /** Player */
    role: Role,
    /** Camera configuration */
    conf_id: Camera,
    /** Transition time */
    duration: Float,
  ) => void;

  /**
   * Camera of linear movement (time).
   * @param role Player
   * @param point Point
   * @param duration Duration
   * @param acc Acceleration
   */
  camera_linear_move_duration: (
    /** Player */
    role: Role,
    /** Point */
    point: FVector3,
    /** Duration */
    duration: Fixed,
    /** Acceleration */
    acc: Int32,
  ) => void;

  /**
   * Camera of linear movement (initial speed).
   * @param role Player
   * @param point Point
   * @param speed Initial speed
   * @param acc Acceleration
   */
  camera_linear_move_speed: (
    /** Player */
    role: Role,
    /** Point */
    point: FVector3,
    /** Initial speed */
    speed: Fixed,
    /** Acceleration */
    acc: Int32,
  ) => void;

  /**
   * Lock camera to a point (without changing the camera position).
   * @param role Player
   * @param point Point
   */
  camera_look_at: (
    /** Player */
    role: Role,
    /** Point */
    point: FVector3,
  ) => void;

  /**
   * Set the camera parameter of roll.
   * @param role Player
   * @param roll Roll angle
   */
  camera_set_param_roll: (
    /** Player */
    role: Role,
    /** Roll angle */
    roll: Fixed,
  ) => void;

  /**
   * Set the camera parameter of pitch.
   * @param role Player
   * @param pitch Pitch
   */
  camera_set_param_pitch: (
    /** Player */
    role: Role,
    /** Pitch */
    pitch: Fixed,
  ) => void;

  /**
   * Set the camera parameter of yaw.
   * @param role Player
   * @param yaw Yaw
   */
  camera_set_param_yaw: (
    /** Player */
    role: Role,
    /** Yaw */
    yaw: Fixed,
  ) => void;

  /**
   * Set the camera parameter of distance.
   * @param role Player
   * @param distance Focal point distance
   */
  camera_set_param_distance: (
    /** Player */
    role: Role,
    /** Focal point distance */
    distance: Fixed,
  ) => void;

  /**
   * The camera is pitched (angle, time).
   * @param role Player
   * @param angle Angle
   * @param duration Time
   */
  camera_rotate_pitch_angle_duration: (
    /** Player */
    role: Role,
    /** Angle */
    angle: Fixed,
    /** Time */
    duration: Fixed,
  ) => void;

  /**
   * The camera is pitched (angular velocity, time).
   * @param role Player
   * @param angle_speed Angular velocity
   * @param duration Time
   */
  camera_rotate_pitch_speed_duration: (
    /** Player */
    role: Role,
    /** Angular velocity */
    angle_speed: Fixed,
    /** Time */
    duration: Fixed,
  ) => void;

  /**
   * The camera is pitched (angular velocity, angle).
   * @param role Player
   * @param angle_speed Angular velocity
   * @param angle Angle
   */
  camera_rotate_pitch_speed_angle: (
    /** Player */
    role: Role,
    /** Angular velocity */
    angle_speed: Fixed,
    /** Angle */
    angle: Fixed,
  ) => void;

  /**
   * The camera is yawed (angle, time).
   * @param role Player
   * @param angle Angle
   * @param duration Time
   */
  camera_rotate_yaw_angle_duration: (
    /** Player */
    role: Role,
    /** Angle */
    angle: Fixed,
    /** Time */
    duration: Fixed,
  ) => void;

  /**
   * The camera is yawed (angular velocity, time).
   * @param role Player
   * @param angle_speed Angular velocity
   * @param duration Time
   */
  camera_rotate_yaw_speed_duration: (
    /** Player */
    role: Role,
    /** Angular velocity */
    angle_speed: Fixed,
    /** Time */
    duration: Fixed,
  ) => void;

  /**
   * The camera is yawed (angular velocity, angle).
   * @param role Player
   * @param angle_speed Angular velocity
   * @param angle Angle
   */
  camera_rotate_yaw_speed_angle: (
    /** Player */
    role: Role,
    /** Angular velocity */
    angle_speed: Fixed,
    /** Angle */
    angle: Fixed,
  ) => void;

  /**
   * The camera is rolled (angle, time).
   * @param role Player
   * @param angle Angle
   * @param duration Time
   */
  camera_rotate_roll_angle_duration: (
    /** Player */
    role: Role,
    /** Angle */
    angle: Fixed,
    /** Time */
    duration: Fixed,
  ) => void;

  /**
   * The camera is rolled (angular velocity, time).
   * @param role Player
   * @param angle_speed Angular velocity
   * @param duration Time
   */
  camera_rotate_roll_speed_duration: (
    /** Player */
    role: Role,
    /** Angular velocity */
    angle_speed: Fixed,
    /** Time */
    duration: Fixed,
  ) => void;

  /**
   * The camera is rolled (angular velocity, angle).
   * @param role Player
   * @param angle_speed Angular velocity
   * @param angle Angle
   */
  camera_rotate_roll_speed_angle: (
    /** Player */
    role: Role,
    /** Angular velocity */
    angle_speed: Fixed,
    /** Angle */
    angle: Fixed,
  ) => void;

  /**
   * The camera is shaken horizontally.
   * @param role Player
   * @param amplitude Amplitude
   * @param speed Rate
   * @param duration Duration
   * @param t Mode of shake
   */
  camera_shake_xy: (
    /** Player */
    role: Role,
    /** Amplitude */
    amplitude: Fixed,
    /** Rate */
    speed: Fixed,
    /** Duration */
    duration: Fixed,
    /** Mode of shake */
    t: Int32,
  ) => void;

  /**
   * The camera is shaken from front to back.
   * @param role Player
   * @param amplitude Amplitude
   * @param speed Rate
   * @param duration Duration
   */
  camera_shake_z: (
    /** Player */
    role: Role,
    /** Amplitude */
    amplitude: Fixed,
    /** Rate */
    speed: Fixed,
    /** Duration */
    duration: Fixed,
  ) => void;

  /**
   * The camera's movement region is restricted.
   * @param role Player
   * @param area Restricted region
   */
  camera_limit_area: (
    /** Player */
    role: Role,
    /** Restricted region */
    area: Area,
  ) => void;

  /**
   * The camera's movement restrictions are disabled.
   * @param role Player
   */
  camera_limit_area_close: (
    /** Player */
    role: Role,
  ) => void;

  /**
   * The camera is set to follow the unit.
   * @param role Player
   * @param unit Followed unit
   */
  camera_set_follow_unit: (
    /** Player */
    role: Role,
    /** Followed unit */
    unit: Unit,
  ) => void;

  /**
   * The player’s camera is set to cancel binding.
   * @param role Player
   */
  camera_cancel_follow_unit: (
    /** Player */
    role: Role,
  ) => void;

  /**
   * Set the focal point height of player’s camera.
   * @param role Player
   * @param y Height
   */
  camera_set_focus_y: (
    /** Player */
    role: Role,
    /** Height */
    y: Fixed,
  ) => void;

  /**
   * The player’s camera is set to allow movement.
   * @param role Player
   */
  camera_set_move_enable: (
    /** Player */
    role: Role,
  ) => void;

  /**
   * The player’s camera is set to forbid movement.
   * @param role Player
   */
  camera_set_move_not_enable: (
    /** Player */
    role: Role,
  ) => void;

  /**
   * Display alert messages to players directly above.
   * @param role Player
   * @param seconds Duration
   * @param text Message
   * @param localize Multilingual conversion
   */
  api_show_text: (
    /** Player */
    role: Role,
    /**
     * Duration
     * @defaultValue `0.0`
     */
    seconds: Float | null,
    /** Message */
    text: string,
    /**
     * Multilingual conversion
     * @defaultValue `false`
     */
    localize: boolean | null,
  ) => void;

  /**
   * Display multilingual messages to players.
   * @param role Player
   * @param text Message
   * @param second Seconds of duration
   * @param localize Multilingual conversion
   */
  show_tips_text: (
    /** Player */
    role: Role,
    /** Message */
    text: string,
    /** Seconds of duration */
    second: Fixed,
    /**
     * Multilingual conversion
     * @defaultValue `false`
     */
    localize: boolean | null,
  ) => void;

  /**
   * The API test log is recorded and can be displayed.
   * @param text Message
   * @param seconds Seconds of duration
   * @param show Whether to display on the screen
   */
  api_test_log_msg: (
    /** Message */
    text: string,
    /** Seconds of duration */
    seconds: Fixed,
    /** Whether to display on the screen */
    show: boolean,
  ) => void;

  /**
   * The API test displays UI information.
   * @param text Information
   * @param seconds Seconds of duration
   */
  api_test_show_msg_tip: (
    /** Information */
    text: string,
    /** Seconds of duration */
    seconds: Fixed,
  ) => void;

  /**
   * API test-Add assert results to log.
   * @param is_pass Whether to pass
   * @param info_str Information
   */
  api_test_add_log_assert_result: (
    /** Whether to pass */
    is_pass: boolean,
    /** Information */
    info_str: string,
  ) => void;

  /**
   * Information is input into the dialog’s window.
   * @param type Window level
   * @param text Print message
   */
  print_to_dialog: (
    /** Window level */
    type: Int32,
    /** Print message */
    text: string,
  ) => void;

  /**
   * Display units’ dialog to players.
   * @param unit Unit
   * @param role Player
   * @param text Information
   * @param second Duration
   * @param localize Multilingual conversion
   */
  show_unit_text_to_role: (
    /** Unit */
    unit: Unit,
    /** Player */
    role: Role,
    /** Information */
    text: string,
    /** Duration */
    second: Fixed,
    /**
     * Multilingual conversion
     * @defaultValue `false`
     */
    localize: boolean | null,
  ) => void;

  /**
   * Display messages to players’ lower left corner.
   * @param role Player
   * @param text Information
   * @param localize Multilingual conversion
   */
  show_msg_to_role: (
    /** Player */
    role: Role,
    /** Information */
    text: string,
    /**
     * Multilingual conversion
     * @defaultValue `false`
     */
    localize: boolean | null,
  ) => void;

  /**
   * Display game over information by faction.
   * @param camp_id Faction ID
   * @param result Game over message
   */
  show_game_end_ui_by_camp_id: (
    /** Faction ID */
    camp_id: CampID,
    /** Game over message */
    result: string,
  ) => void;

  /**
   * Get random integer in the range.
   * @param min_num Min value
   * @param max_num Max value
   * @returns Int32
   */
  get_random_int: (
    /** Min value */
    min_num: Int32,
    /** Max value */
    max_num: Int32,
  ) => Int32;

  /**
   * Get random fixed-point number in the range.
   * @param min_num Min value
   * @param max_num Max value
   * @returns Fixed
   */
  get_random_fixed: (
    /** Min value */
    min_num: Fixed,
    /** Max value */
    max_num: Fixed,
  ) => Fixed;

  /**
   * Calculate formula-type key value.
   * @param actor Formula’s affiliated object
   * @param k key
   * @returns Fixed
   */
  api_calc_formula_kv: (
    /** Formula’s affiliated object */
    actor: Actor,
    /** key */
    k: string,
  ) => Fixed;

  /**
   * Get the number of units of all states in the unit group.
   * @param unit_group Unit group
   * @returns Int32
   */
  get_unit_group_num: (
    /** Unit group */
    unit_group: UnitGroup,
  ) => Int32;

  /**
   * Get the number of units of a specific state in the unit group.
   * @param unit_group Unit group
   * @param status State name
   * @returns Int32
   */
  get_state_unit_num_in_group: (
    /** Unit group */
    unit_group: UnitGroup,
    /** State name */
    status: string,
  ) => Int32;

  /**
   * Get the number of units of a specific unit ID.
   * @param unit_group Unit group
   * @param unit_key Unit ID
   * @returns UInt32
   */
  get_num_of_unit_key_in_group: (
    /** Unit group */
    unit_group: UnitGroup,
    /** Unit ID */
    unit_key: UnitKey,
  ) => UInt32;

  /**
   * Remove a unit of a specific type from a unit group.
   * @param unit_group Unit group
   * @param unit_key Unit ID
   */
  remove_unit_in_group_by_key: (
    /** Unit group */
    unit_group: UnitGroup,
    /** Unit ID */
    unit_key: UnitKey,
  ) => void;

  /**
   * Remove a specific unit from a unit group.
   * @param unit_group Unit group
   * @param unit Unit
   */
  remove_unit_in_group: (
    /** Unit group */
    unit_group: UnitGroup,
    /** Unit */
    unit: Unit,
  ) => void;

  /**
   * Set unit selection in unit group.
   * @param unit_group_id Unit group
   */
  set_unit_group_selected: (
    /** Unit group */
    unit_group_id: UnitGroup,
  ) => void;

  /**
   * Add unit ID to unit ID pool.
   * @param pool Unit ID pool
   * @param key Unit ID
   * @param pro Fixed-point number
   */
  unit_key_pool_add_key: (
    /** Unit ID pool */
    pool: UnitKeyPool,
    /** Unit ID */
    key: UnitKey,
    /** Fixed-point number */
    pro: Fixed,
  ) => void;

  /**
   * Remove unit ID from unit ID pool.
   * @param pool Unit ID pool
   * @param key Unit ID
   */
  unit_key_pool_rem_key: (
    /** Unit ID pool */
    pool: UnitKeyPool,
    /** Unit ID */
    key: UnitKey,
  ) => void;

  /**
   * Return unit ID from unit ID pool.
   * @param pool Unit ID pool
   * @returns UnitKey
   */
  get_unit_key_from_pool: (
    /** Unit ID pool */
    pool: UnitKeyPool,
  ) => UnitKey;

  /**
   * Get the icon path in unit preset library configuration.
   * @param key Unit ID
   * @returns string
   */
  get_unit_key_icon: (
    /** Unit ID */
    key: UnitKey,
  ) => string;

  /**
   * Get the icon path in item preset library configuration.
   * @param key Item ID
   * @returns string
   */
  get_item_key_icon: (
    /** Item ID */
    key: ItemKey,
  ) => string;

  /**
   * Get the image path in unit preset library configuration.
   * @param key Unit ID
   * @param pic_type Image type
   * @returns string
   */
  get_unit_key_pic: (
    /** Unit ID */
    key: UnitKey,
    /** Image type */
    pic_type: string,
  ) => string;

  /**
   * Get string attributes in unit preset library configuration.
   * @param unit_key Unit ID
   * @param attr Attribute name
   * @returns string
   */
  get_unit_key_str: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Attribute name */
    attr: string,
  ) => string;

  /**
   * Get float attributes in unit preset library configuration.
   * @param unit_key Unit ID
   * @param attr Attribute name
   * @returns Fixed
   */
  get_unit_key_fixed: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Attribute name */
    attr: string,
  ) => Fixed;

  /**
   * Get the icon path in preset library configuration according to UID.
   * @param icon_uid Icon’s unquie ID
   * @returns string
   */
  get_icon_by_uid: (
    /** Icon’s unquie ID */
    icon_uid: string,
  ) => string;

  /**
   * Get the icon path in ability preset library configuration.
   * @param key Ability ID
   * @returns string
   */
  get_ability_key_icon: (
    /** Ability ID */
    key: AbilityKey,
  ) => string;

  /**
   * Get the last created timer.
   * @returns Timer
   */
  get_last_created_timer: () => Timer;

  /**
   * Start timer.
   * @param name Timer name
   * @param once Whether it is single
   * @param interval Time
   * @param context Context
   */
  start_timer: (
    /** Timer name */
    name: string,
    /** Whether it is single */
    once: boolean,
    /** Time */
    interval: Fixed,
    /** Context */
    context: Dict,
  ) => void;

  /**
   * Stop timer.
   * @param name Timer name
   */
  stop_timer: (
    /** Timer name */
    name: string,
  ) => void;

  /**
   * Whether the timer is valid.
   * @param timer_id Timer ID
   * @returns boolean
   */
  is_timer_valid: (
    /** Timer ID */
    timer_id: Timer,
  ) => boolean;

  /**
   * Remove timer.
   * @param timer_id Timer ID
   */
  delete_timer: (
    /** Timer ID */
    timer_id: Timer,
  ) => void;

  /**
   * Pause timer.
   * @param timer_id Timer ID
   */
  pause_timer: (
    /** Timer ID */
    timer_id: Timer,
  ) => void;

  /**
   * Restore timer.
   * @param timer_id Timer ID
   */
  resume_timer: (
    /** Timer ID */
    timer_id: Timer,
  ) => void;

  /**
   * Get the timer's set time.
   * @param timer_id Timer
   * @returns Float
   */
  get_timer_time_out_time: (
    /** Timer */
    timer_id: Timer,
  ) => Float;

  /**
   * Get the timer's expended time.
   * @param timer_id Timer
   * @returns Float
   */
  get_timer_elapsed_time: (
    /** Timer */
    timer_id: Timer,
  ) => Float;

  /**
   * Get the timer's remaining time.
   * @param timer_id Timer
   * @returns Float
   */
  get_timer_remaining_time: (
    /** Timer */
    timer_id: Timer,
  ) => Float;

  /**
   * Get the timer's initial count.
   * @param timer_id Timer
   * @returns Int32
   */
  get_timer_init_count: (
    /** Timer */
    timer_id: Timer,
  ) => Int32;

  /**
   * Get the timer's remaining count.
   * @param timer_id Timer
   * @returns Int32
   */
  get_timer_remaining_count: (
    /** Timer */
    timer_id: Timer,
  ) => Int32;

  /**
   * Get the slave coefficient of 3D attributes.
   * @param pri 3D attributes
   * @param slave slave attribute
   * @returns Fixed
   */
  get_slave_coeff: (
    /** 3D attributes */
    pri: string,
    /** slave attribute */
    slave: string,
  ) => Fixed;

  /**
   * Set the slave coefficient of 3D attributes.
   * @param pri 3D attributes
   * @param slave slave attribute
   * @param coeff slave coefficient
   */
  set_slave_coeff: (
    /** 3D attributes */
    pri: string,
    /** slave attribute */
    slave: string,
    /** slave coefficient */
    coeff: Fixed,
  ) => void;

  /**
   * Get the coefficient for damage dealt by a specified attack type against a specified defense type.
   * @param attack_idx Attack type
   * @param armor_idx Defense type
   * @returns Fixed
   */
  get_damage_ratio: (
    /** Attack type */
    attack_idx: Int32,
    /** Defense type */
    armor_idx: Int32,
  ) => Fixed;

  /**
   * Set the coefficient for damage dealt by a specified attack type against a specified defense type.
   * @param attack_idx Attack type
   * @param armor_idx Defense type
   * @param damage_ratio Damage coefficient
   */
  set_damage_ratio: (
    /** Attack type */
    attack_idx: Int32,
    /** Defense type */
    armor_idx: Int32,
    /** Damage coefficient */
    damage_ratio: Fixed,
  ) => void;

  /**
   * Apply damage.
   * @param source_unit Source unit of damage
   * @param ability Associated ability of the source
   * @param target_unit Unit or item
   * @param damage_type Damage type
   * @param damage Damage value
   * @param jump_word Whether combat text shown
   */
  apply_damage: (
    /** Source unit of damage */
    source_unit: Unit | null,
    /** Associated ability of the source */
    ability: Ability | null,
    /** Unit or item */
    target_unit: Unit | null,
    /**
     * Damage type
     * @defaultValue `0`
     */
    damage_type: Int32 | null,
    /**
     * Damage value
     * @defaultValue `Fix32(0.0)`
     */
    damage: Fixed | null,
    /**
     * Whether combat text shown
     * @defaultValue `false`
     */
    jump_word: boolean | null,
  ) => void;

  /**
   * Get the modulus of attack damage.
   * @param damage Damage value
   * @returns Fixed
   */
  get_hurt_damage: (
    /** Damage value */
    damage: Fixed,
  ) => Fixed;

  /**
   * Set the current attack damage’s value.
   * @param damage Damage value
   */
  set_cur_damage: (
    /** Damage value */
    damage: Fixed,
  ) => void;

  /**
   * Activate behavior tree.
   * @param unit Unit
   * @param tree_name Behavior tree name
   * @param tree_args Behavior tree parameter
   */
  assign_behavior_tree: (
    /** Unit */
    unit: Unit,
    /** Behavior tree name */
    tree_name: string,
    /** Behavior tree parameter */
    tree_args: Dict,
  ) => void;

  /**
   * Stop a behavior tree.
   * @param unit Unit
   * @param tree_name Behavior tree name
   */
  stop_behavior_tree: (
    /** Unit */
    unit: Unit,
    /** Behavior tree name */
    tree_name: string,
  ) => void;

  /**
   * Stop all behavior trees.
   * @param unit Unit
   */
  stop_all_behavior_tree: (
    /** Unit */
    unit: Unit,
  ) => void;

  /**
   * Run a behavior tree.
   * @param unit Unit
   * @param tree_name Behavior tree name
   * @param tree_args Behavior tree parameter
   */
  run_behavior_tree_once: (
    /** Unit */
    unit: Unit,
    /** Behavior tree name */
    tree_name: string,
    /** Behavior tree parameter */
    tree_args: Dict,
  ) => void;

  /**
   * Remove the key-value pair of the unit from preset library.
   * @param unit_key Unit ID
   * @param key Key
   */
  unit_key_del_kv: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Key */
    key: string,
  ) => void;

  /**
   * Remove the key-value pair of the ability from preset library.
   * @param ability_key Ability ID
   * @param key Key
   */
  ability_key_del_kv: (
    /** Ability ID */
    ability_key: AbilityKey,
    /** Key */
    key: string,
  ) => void;

  /**
   * Remove the key-value pair of the item from preset library.
   * @param item_key Item ID
   * @param key Key
   */
  item_key_del_kv: (
    /** Item ID */
    item_key: ItemKey,
    /** Key */
    key: string,
  ) => void;

  /**
   * Add movement to projectile.
   * @param unit Projectile unit object
   * @param target_unit Target unit
   * @param speed Speed
   * @param collision_type Obstacle handling type
   * @param time Time
   */
  projectile_add_movement: (
    /** Projectile unit object */
    unit: Unit,
    /** Target unit */
    target_unit: Unit,
    /** Speed */
    speed: Fixed,
    /**
     * Obstacle handling type
     * @defaultValue `1`
     */
    collision_type: MovementObstacleProcessType | null,
    /**
     * Time
     * @defaultValue `Fix32(-1.0)`
     */
    time: Fixed | null,
  ) => void;

  /**
   * Projectile moves in a straight line.
   * @param speed Speed
   * @param unit Projectile unit object
   * @param angle Direction
   * @param dis_limit Distance limit
   * @param collision_type Obstacle handling type
   * @param time Time
   */
  projectile_direction_straight_movement: (
    /** Speed */
    speed: Fixed,
    /** Projectile unit object */
    unit: Unit,
    /** Direction */
    angle: Fixed,
    /** Distance limit */
    dis_limit: Fixed,
    /**
     * Obstacle handling type
     * @defaultValue `1`
     */
    collision_type: MovementObstacleProcessType | null,
    /**
     * Time
     * @defaultValue `Fix32(-1.0)`
     */
    time: Fixed | null,
  ) => void;

  /**
   * Projectile moves in an arc.
   * @param speed Speed
   * @param unit Projectile unit object
   * @param degree Direction
   * @param angle Angle
   * @param radius Radius
   * @param is_clock_wise Whether to move clockwise
   * @param dis_limit Distance limit
   * @param collision_type Obstacle handling type
   * @param time Time
   */
  projectile_direction_arc_movement: (
    /** Speed */
    speed: Fixed,
    /** Projectile unit object */
    unit: Unit,
    /** Direction */
    degree: Fixed,
    /** Angle */
    angle: Fixed,
    /** Radius */
    radius: Fixed,
    /** Whether to move clockwise */
    is_clock_wise: boolean,
    /** Distance limit */
    dis_limit: Fixed,
    /**
     * Obstacle handling type
     * @defaultValue `1`
     */
    collision_type: MovementObstacleProcessType | null,
    /**
     * Time
     * @defaultValue `Fix32(-1.0)`
     */
    time: Fixed | null,
  ) => void;

  /**
   * Projectile moves in a parabola.
   * @param speed Speed
   * @param acceleration Acceleration of horizontal direction
   * @param unit Projectile unit object
   * @param point Target point
   * @param collision_type Obstacle handling type
   * @param time Time
   */
  projectile_parabola_movement: (
    /** Speed */
    speed: Fixed,
    /** Acceleration of horizontal direction */
    acceleration: Fixed,
    /** Projectile unit object */
    unit: Unit,
    /** Target point */
    point: FVector3,
    /**
     * Obstacle handling type
     * @defaultValue `1`
     */
    collision_type: MovementObstacleProcessType | null,
    /**
     * Time
     * @defaultValue `Fix32(-1.0)`
     */
    time: Fixed | null,
  ) => void;

  /**
   * Projectile rebounds.
   * @param unit Projectile unit object
   * @param target_unit Target unit object
   * @param rebound_distance Rebound distance
   * @param speed Speed
   * @param rebound_times Rebound times
   * @param delay_time Rebound time
   * @param reduction Decay value of rebound speed each time
   * @param is_near_first Whether to prioritize the nearest point
   * @param can_repeat Whether to repeat rebounds
   * @param attack_target_hit_type Selection range of attacking target
   */
  projectile_rebound_movement: (
    /** Projectile unit object */
    unit: Unit,
    /** Target unit object */
    target_unit: Unit,
    /** Rebound distance */
    rebound_distance: Fixed,
    /** Speed */
    speed: Fixed,
    /** Rebound times */
    rebound_times: Int32,
    /** Rebound time */
    delay_time: Fixed,
    /** Decay value of rebound speed each time */
    reduction: Fixed,
    /**
     * Whether to prioritize the nearest point
     * @defaultValue `false`
     */
    is_near_first: boolean | null,
    /**
     * Whether to repeat rebounds
     * @defaultValue `false`
     */
    can_repeat: boolean | null,
    /**
     * Selection range of attacking target
     * @defaultValue `1`
     */
    attack_target_hit_type: AttackTargetHitType | null,
  ) => void;

  /**
   * Projectile moves in a loop.
   * @param speed Speed
   * @param radius Radius
   * @param projectile Projectile unit object
   * @param unit Target unit object
   * @param angle Initial angle
   * @param is_clock_wise Whether to move clockwise
   * @param height Height
   */
  projectile_surround_movement: (
    /** Speed */
    speed: Fixed,
    /** Radius */
    radius: Fixed,
    /** Projectile unit object */
    projectile: Unit,
    /** Target unit object */
    unit: Unit,
    /** Initial angle */
    angle: Fixed,
    /** Whether to move clockwise */
    is_clock_wise: boolean,
    /** Height */
    height: Fixed,
  ) => void;

  /**
   * Set the item’s shop price.
   * @param item_no Item ID
   * @param res_type Resource type
   * @param price Shop price
   */
  set_item_buy_price: (
    /** Item ID */
    item_no: ItemKey,
    /** Resource type */
    res_type: RoleResKey,
    /** Shop price */
    price: Float,
  ) => void;

  /**
   * Set the unit’s shop price.
   * @param entity_no Unit ID
   * @param res_type Resource type
   * @param price Shop price
   */
  set_unit_buy_price: (
    /** Unit ID */
    entity_no: UnitKey,
    /** Resource type */
    res_type: RoleResKey,
    /** Shop price */
    price: Float,
  ) => void;

  /**
   * Get the item’s shop price.
   * @param item_no Item ID
   * @param res_type Resource type
   * @returns Fixed
   */
  get_item_buy_price: (
    /** Item ID */
    item_no: ItemKey,
    /** Resource type */
    res_type: RoleResKey,
  ) => Fixed;

  /**
   * Get the unit’s shop price.
   * @param entity_no Unit ID
   * @param res_type Resource type
   * @returns Fixed
   */
  get_unit_buy_price: (
    /** Unit ID */
    entity_no: UnitKey,
    /** Resource type */
    res_type: RoleResKey,
  ) => Fixed;

  /**
   * Return the central point of a rectangle.
   * @param rec Rectangle
   * @returns FVector3
   */
  get_rec_center_point: (
    /** Rectangle */
    rec: RecArea,
  ) => FVector3;

  /**
   * Return the central point of a circle.
   * @param cir Circle
   * @returns FVector3
   */
  get_circle_center_point: (
    /** Circle */
    cir: CirArea,
  ) => FVector3;

  /**
   * Return a random point in a rectangle.
   * @param area Rectangle
   * @returns FVector3
   */
  get_random_point_in_rec_area: (
    /** Rectangle */
    area: RecArea,
  ) => FVector3;

  /**
   * Return a random point in a circle.
   * @param area Circle
   * @returns FVector3
   */
  get_random_point_in_circular_area: (
    /** Circle */
    area: CirArea,
  ) => FVector3;

  /**
   * Last created circle.
   * @returns CirArea
   */
  get_cir_area_last_created: () => CirArea;

  /**
   * Return path by resource ID.
   * @param res_id Resource ID
   * @returns Road
   */
  get_road_point_list_by_res_id: (
    /** Resource ID */
    res_id: Int32,
  ) => Road;

  /**
   * Create a path from a point.
   * @param point Point
   * @returns Road
   */
  create_road_point_list: (
    /** Point */
    point: Point,
  ) => Road;

  /**
   * Remove the path.
   * @param road Path
   */
  remove_road_point_list: (
    /** Path */
    road: Road,
  ) => void;

  /**
   * Add a point to a path.
   * @param road_point_list Path
   * @param num Number
   * @param point Point
   */
  add_road_point: (
    /** Path */
    road_point_list: Road,
    /** Number */
    num: Int32,
    /** Point */
    point: Point,
  ) => void;

  /**
   * Remove a point from a path.
   * @param road_point_list Path
   * @param num Number
   */
  remove_road_point: (
    /** Path */
    road_point_list: Road,
    /** Number */
    num: Int32,
  ) => void;

  /**
   * Get the nearest path to a point.
   * @param point Location
   * @returns Road
   */
  get_nearest_road_point_list_by_pos: (
    /** Location */
    point: Point,
  ) => Road;

  /**
   * Get the path after offsetting.
   * @param origin_roads Original path
   * @param offset Offsetting distance
   * @returns Road
   */
  get_road_point_list_by_offset: (
    /** Original path */
    origin_roads: Road,
    /** Offsetting distance */
    offset: Fixed,
  ) => Road;

  /**
   * Get the path after n loops.
   * @param point_list Original path
   * @param n Number of loops
   * @returns Road
   */
  get_road_point_list_loop: (
    /** Original path */
    point_list: Road,
    /** Number of loops */
    n: Int32,
  ) => Road;

  /**
   * Get the path after two paths splicing.
   * @param pl1 Original path
   * @param pl2 Original path
   * @returns Road
   */
  get_road_point_list_join: (
    /** Original path */
    pl1: Road,
    /** Original path */
    pl2: Road,
  ) => Road;

  /**
   * Get the path after reversal.
   * @param point_list Original path
   * @returns Road
   */
  get_road_point_list_inversion: (
    /** Original path */
    point_list: Road,
  ) => Road;

  /**
   * Get the number of points on the path.
   * @param road_point_list Path
   * @returns Int32
   */
  get_road_point_num: (
    /** Path */
    road_point_list: Road,
  ) => Int32;

  /**
   * Last created unit entity.
   * @returns Unit
   */
  get_last_created_unit: () => Unit;

  /**
   * Last created sub-trigger.
   * @returns Int32
   */
  get_last_created_trigger: () => Int32;

  /**
   * Last created projectile.
   * @returns Unit
   */
  get_last_created_projectile: () => Unit;

  /**
   * Get the unit ID list in the region.
   * @param area Region object
   * @returns List
   */
  get_unit_group_in_area: (
    /** Region object */
    area: Area,
  ) => List;

  /**
   * Get all unit ID lists of players in the region.
   * @param area Region object
   * @param role Player
   * @returns UnitGroup
   */
  get_unit_group_belong_to_player_in_area: (
    /** Region object */
    area: Area,
    /** Player */
    role: Role,
  ) => UnitGroup;

  /**
   * Get the item object ID list in the region.
   * @param area Region object
   * @returns List
   */
  get_item_group_in_area: (
    /** Region object */
    area: Area,
  ) => List;

  /**
   * Send UI events with dictionary attached.
   * @param s Event name
   * @param args Parameter
   */
  send_ui_global_event_with_info_dict: (
    /** Event name */
    s: string,
    /** Parameter */
    args: Dict,
  ) => void;

  /**
   * Add the unit to a unit group.
   * @param unit Unit
   * @param unit_group Unit group
   */
  add_unit_to_group: (
    /** Unit */
    unit: Unit,
    /** Unit group */
    unit_group: UnitGroup,
  ) => void;

  /**
   * Set multiple global trigger’s array variables at a time.
   * @param table Combined list in the format of[[array variable name, type ('INTEGER', 'BOOLEAN', 'FLOAT', ‘STRING’), list value ([value, value, ......])],[.....]]
   */
  set_trigger_table_list_variable: (
    /** Combined list in the format of[[array variable name, type ('INTEGER', 'BOOLEAN', 'FLOAT', ‘STRING’), list value ([value, value, ......])],[.....]] */
    table: List,
  ) => void;

  /**
   * Set string array by splitting string.
   * @param key String array
   * @param content Split content
   * @param split Separator
   */
  set_trigger_str_list_by_split: (
    /** String array */
    key: List,
    /** Split content */
    content: string,
    /** Separator */
    split: string,
  ) => void;

  /**
   * Create the global trigger’s array variable.
   * @param key Array variable name
   * @param var_type Value type
   * @param arr_val List value
   */
  create_trigger_list_variable: (
    /** Array variable name */
    key: string,
    /** Value type */
    var_type: string,
    /** List value */
    arr_val: List,
  ) => void;

  /**
   * Set the global trigger’s struct variable 00.
   * @param key1 Variable 1
   * @param key2 Variable 2
   */
  set_trigger_struct_variable_00: (
    /** Variable 1 */
    key1: string,
    /** Variable 2 */
    key2: string,
  ) => void;

  /**
   * Set the global trigger’s struct variable 01.
   * @param key1 Variable 1
   * @param key2 Variable 2
   * @param index2 Index 2
   */
  set_trigger_struct_variable_01: (
    /** Variable 1 */
    key1: string,
    /** Variable 2 */
    key2: string,
    /** Index 2 */
    index2: Int32,
  ) => void;

  /**
   * Set the global trigger’s struct variable 10.
   * @param key1 Variable 1
   * @param index1 Index 1
   * @param key2 Variable 2
   */
  set_trigger_struct_variable_10: (
    /** Variable 1 */
    key1: string,
    /** Index 1 */
    index1: Int32,
    /** Variable 2 */
    key2: string,
  ) => void;

  /**
   * Set the global trigger’s struct variable 11.
   * @param key1 Variable 1
   * @param index1 Index 1
   * @param key2 Variable 2
   * @param index2 Index 2
   */
  set_trigger_struct_variable_11: (
    /** Variable 1 */
    key1: string,
    /** Index 1 */
    index1: Int32,
    /** Variable 2 */
    key2: string,
    /** Index 2 */
    index2: Int32,
  ) => void;

  /**
   * Get the independent timer's current number of seconds recorded.
   * @param name Countdown name
   * @returns Fixed
   */
  get_actor_timer_run_time: (
    /** Countdown name */
    name: string,
  ) => Fixed;

  /**
   * Get the current expired timer.
   * @param timer_id Timer
   * @returns Timer
   */
  get_current_expired_timer: (
    /** Timer */
    timer_id: Timer,
  ) => Timer;

  /**
   * Whether the unit ID has a tag.
   * @param key Unit ID
   * @param tag tag
   * @returns boolean
   */
  unit_key_has_tag: (
    /** Unit ID */
    key: UnitKey,
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * Whether the item ID has a tag.
   * @param key Item ID
   * @param tag tag
   * @returns boolean
   */
  item_key_has_tag: (
    /** Item ID */
    key: ItemKey,
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * Whether the ability ID has a tag.
   * @param key Ability ID
   * @param tag tag
   * @returns boolean
   */
  ability_key_has_tag: (
    /** Ability ID */
    key: AbilityKey,
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * Whether the modifier ID has a tag.
   * @param key Ability ID
   * @param tag tag
   * @returns boolean
   */
  modifier_key_has_tag: (
    /** Ability ID */
    key: AbilityKey,
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * Whether the projectile ID has a tag.
   * @param key Projectile ID
   * @param tag tag
   * @returns boolean
   */
  projectile_key_has_tag: (
    /** Projectile ID */
    key: AbilityKey,
    /** tag */
    tag: string,
  ) => boolean;

  /**
   * Whether the unit entity exists.
   * @param unit Unit entity
   * @returns boolean
   */
  unit_is_exist: (
    /** Unit entity */
    unit: Unit | null,
  ) => boolean;

  /**
   * Whether the modifier entity exists.
   * @param modifier Modifier entity
   * @returns boolean
   */
  modifier_is_exist: (
    /** Modifier entity */
    modifier: Modifier | null,
  ) => boolean;

  /**
   * Whether the projectile entity exists.
   * @param projectile Projectile
   * @returns boolean
   */
  projectile_is_exist: (
    /** Projectile */
    projectile: Projectile | null,
  ) => boolean;

  /**
   * Whether the ability entity exists.
   * @param ability Ability
   * @returns boolean
   */
  ability_is_exist: (
    /** Ability */
    ability: Ability | null,
  ) => boolean;

  /**
   * Get the ability’s max level.
   * @param ability Ability
   * @returns Int32
   */
  get_ability_max_level: (
    /** Ability */
    ability: Ability,
  ) => Int32;

  /**
   * Return a list made up of random integer elements from the list.
   * @param list1 List
   * @param n Integer
   * @returns List
   */
  random_list_from_list: (
    /** List */
    list1: List,
    /** Integer */
    n: UInt32,
  ) => List;

  /**
   * Play particle at a specific location.
   * @param point Point
   * @param sfx Particle ID
   * @param scale Scale
   * @param duratime Duration
   * @param offset Offset vertically
   * @param role Player
   * @param visible_type Display type (1: all, 2: self, 3: self and friendly, 4: friendly but not self
   * @param rotation Original rotational angle
   * @returns Sfx
   */
  play_sfx_on_point: (
    /** Point */
    point: FVector3,
    /** Particle ID */
    sfx: SfxKey,
    /** Scale */
    scale: Fixed,
    /** Duration */
    duratime: Fixed,
    /** Offset vertically */
    offset: Fixed,
    /** Player */
    role: Role | null,
    /**
     * Display type (1: all, 2: self, 3: self and friendly, 4: friendly but not self
     * @defaultValue `1`
     */
    visible_type: UInt32 | null,
    /**
     * Original rotational angle
     * @defaultValue `Fix32(0.0)`
     */
    rotation: Fixed | null,
  ) => Sfx;

  /**
   * Create unit-to-point lightning.
   * @param sfx_res_id Effect ID
   * @param source_unit Starting point
   * @param source_socket Socket name of the starting unit
   * @param target_point Ending point
   * @param target_height Terminal height
   * @returns LinkSfx
   */
  create_link_sfx_from_unit_to_point: (
    /** Effect ID */
    sfx_res_id: SfxKey,
    /** Starting point */
    source_unit: Unit,
    /** Socket name of the starting unit */
    source_socket: string,
    /** Ending point */
    target_point: FVector3,
    /** Terminal height */
    target_height: Fixed,
  ) => LinkSfx;

  /**
   * Create unit-to-unit lightning.
   * @param sfx_res_id Effect ID
   * @param source_unit Starting point
   * @param source_socket Socket name of the starting unit
   * @param target_unit Ending unit
   * @param target_socket Socket name of the starting unit
   * @returns LinkSfx
   */
  create_link_sfx_from_unit_to_unit: (
    /** Effect ID */
    sfx_res_id: SfxKey,
    /** Starting point */
    source_unit: Unit,
    /** Socket name of the starting unit */
    source_socket: string,
    /** Ending unit */
    target_unit: Unit,
    /** Socket name of the starting unit */
    target_socket: string,
  ) => LinkSfx;

  /**
   * Create point-to-unit lightning.
   * @param sfx_res_id Effect ID
   * @param source_point Starting point
   * @param source_height Height of starting point
   * @param source_unit Terminal unit
   * @param source_socket Socket name of the starting unit
   * @returns LinkSfx
   */
  create_link_sfx_from_point_to_unit: (
    /** Effect ID */
    sfx_res_id: SfxKey,
    /** Starting point */
    source_point: FVector3,
    /** Height of starting point */
    source_height: Fixed,
    /** Terminal unit */
    source_unit: Unit,
    /** Socket name of the starting unit */
    source_socket: string,
  ) => LinkSfx;

  /**
   * Create point-to-point lightning.
   * @param sfx_res_id Effect ID
   * @param source_point Starting point
   * @param source_height Height of starting point
   * @param target_point Ending point
   * @param target_height Terminal height
   * @returns LinkSfx
   */
  create_link_sfx_from_point_to_point: (
    /** Effect ID */
    sfx_res_id: SfxKey,
    /** Starting point */
    source_point: FVector3,
    /** Height of starting point */
    source_height: Fixed,
    /** Ending point */
    target_point: FVector3,
    /** Terminal height */
    target_height: Fixed,
  ) => LinkSfx;

  /**
   * Set the lightning’s location point.
   * @param sfx_entity Effect
   * @param source_or_target Starting point/ending point
   * @param point Point
   * @param height Height
   */
  set_link_sfx_point: (
    /** Effect */
    sfx_entity: LinkSfx,
    /** Starting point/ending point */
    source_or_target: LinkSfxPointType,
    /** Point */
    point: Point,
    /** Height */
    height: Float,
  ) => void;

  /**
   * Set the lightning’s unit socket.
   * @param sfx_entity Effect
   * @param source_or_target Starting point/ending point
   * @param unit Unit
   * @param socket Unit socket
   */
  set_link_sfx_unit_socket: (
    /** Effect */
    sfx_entity: LinkSfx,
    /** Starting point/ending point */
    source_or_target: LinkSfxPointType,
    /** Unit */
    unit: Unit,
    /** Unit socket */
    socket: string,
  ) => void;

  /**
   * Remove the particle.
   * @param sfx_entity Particle
   */
  remove_link_sfx: (
    /** Particle */
    sfx_entity: LinkSfx,
  ) => void;

  /**
   * Set the particle to be displayed or hidden.
   * @param sfx_entity Particle
   * @param b_show Whether to display
   */
  enable_link_sfx_show: (
    /** Particle */
    sfx_entity: LinkSfx,
    /** Whether to display */
    b_show: boolean,
  ) => void;

  /**
   * Create the particle at a point.
   * @param sfx_id Particle ID
   * @param point Point
   * @param face_angle Orientation
   * @param scale Scale
   * @param height Height
   * @param duration Duration
   * @returns Sfx
   */
  create_sfx_on_point: (
    /** Particle ID */
    sfx_id: SfxKey,
    /** Point */
    point: Point,
    /** Orientation */
    face_angle: Float,
    /** Scale */
    scale: Float,
    /** Height */
    height: Float,
    /** Duration */
    duration: Float,
  ) => Sfx;

  /**
   * Create the particle at a unit socket.
   * @param sfx_id Particle ID
   * @param unit Unit
   * @param socket Unit socket
   * @param b_follow_rotate Whether following unit rotation
   * @param b_follow_scale Whether following unit scale
   * @param scale Scale
   * @param duration Duration
   * @returns Sfx
   */
  create_sfx_on_unit: (
    /** Particle ID */
    sfx_id: SfxKey,
    /** Unit */
    unit: Unit,
    /** Unit socket */
    socket: string,
    /** Whether following unit rotation */
    b_follow_rotate: boolean,
    /** Whether following unit scale */
    b_follow_scale: boolean,
    /**
     * Scale
     * @defaultValue `1`
     */
    scale: Float | null,
    /** Duration */
    duration: Float | null,
  ) => Sfx;

  /**
   * Remove the particle.
   * @param sfx_entity Particle
   */
  delete_sfx: (
    /** Particle */
    sfx_entity: Sfx | null,
  ) => void;

  /**
   * Set the particle’s rotation.
   * @param sfx_entity Particle
   * @param rotate_x X-axis rotation
   * @param rotate_y Y-axis rotation
   * @param rotate_z Z-axis rotation
   */
  set_sfx_rotate: (
    /** Particle */
    sfx_entity: Sfx,
    /** X-axis rotation */
    rotate_x: Float,
    /** Y-axis rotation */
    rotate_y: Float,
    /** Z-axis rotation */
    rotate_z: Float,
  ) => void;

  /**
   * Set the particle’s orientation.
   * @param sfx_entity Particle
   * @param face_angle Orientation
   */
  set_sfx_angle: (
    /** Particle */
    sfx_entity: Sfx,
    /** Orientation */
    face_angle: Float,
  ) => void;

  /**
   * Set the particle’s scale.
   * @param sfx_entity Particle
   * @param scale_x X-axis scale
   * @param scale_y Y-axis scale
   * @param scale_z Z-axis scale
   */
  set_sfx_scale: (
    /** Particle */
    sfx_entity: Sfx,
    /** X-axis scale */
    scale_x: Float,
    /** Y-axis scale */
    scale_y: Float,
    /** Z-axis scale */
    scale_z: Float,
  ) => void;

  /**
   * Set the particle’s height.
   * @param sfx_entity Particle
   * @param height Height
   */
  set_sfx_height: (
    /** Particle */
    sfx_entity: Sfx,
    /** Height */
    height: Float,
  ) => void;

  /**
   * Set the particle to a point.
   * @param sfx_entity Particle
   * @param point Point
   */
  set_sfx_position: (
    /** Particle */
    sfx_entity: Sfx,
    /** Point */
    point: Point,
  ) => void;

  /**
   * Set the particle's animation speed.
   * @param sfx_entity Particle
   * @param speed Animation speed
   */
  set_sfx_animation_speed: (
    /** Particle */
    sfx_entity: Sfx,
    /** Animation speed */
    speed: Float,
  ) => void;

  /**
   * Set the particle's duration.
   * @param sfx_entity Particle
   * @param duration Duration
   */
  set_sfx_duration: (
    /** Particle */
    sfx_entity: Sfx,
    /** Duration */
    duration: Float,
  ) => void;

  /**
   * Play screen particle.
   * @param sfx_key Particle ID
   * @param keep_time Duration
   */
  add_sfx_to_camera: (
    /** Particle ID */
    sfx_key: SfxKey,
    /** Duration */
    keep_time: Float,
  ) => void;

  /**
   * Play screen particle and return particle entity.
   * @param sfx_key Particle ID
   * @param keep_time Duration
   * @returns Sfx
   */
  add_sfx_to_camera_with_return: (
    /** Particle ID */
    sfx_key: SfxKey,
    /** Duration */
    keep_time: Float,
  ) => Sfx;

  /**
   * Shake screen.
   * @param role Player
   * @param period Period
   * @param amplitude_vector Amplitude
   * @param increase_vector Increment
   * @param keep_time Duration
   */
  start_shake: (
    /** Player */
    role: Role,
    /** Period */
    period: Float,
    /** Amplitude */
    amplitude_vector: FVector3,
    /** Increment */
    increase_vector: FVector3,
    /** Duration */
    keep_time: Float,
  ) => void;

  /**
   * Add timed callback.
   * @param interval Interval
   * @param is_repeat Whether it is repeated
   * @param func Callback
   * @returns Int64
   */
  add_timer: (
    /** Interval */
    interval: Fixed,
    /** Whether it is repeated */
    is_repeat: boolean,
    /** Callback */
    func: () => void,
  ) => Int64;

  /**
   * Cancel timed callback.
   * @param timer_id timer_id
   */
  cancel_timer: (
    /** timer_id */
    timer_id: Int64,
  ) => void;

  /**
   * Shake device.
   * @param role Player
   * @param time Time
   */
  shake_phone: (
    /** Player */
    role: Role,
    /** Time */
    time: Fixed,
  ) => void;

  /**
   * Input leaderboard <score> for a <player>.
   * @param role Player
   * @param score Leaderboard score within the combat
   */
  set_role_rank_score: (
    /** Player */
    role: Role,
    /** Leaderboard score within the combat */
    score: Int32,
  ) => void;

  /**
   * Unit triggers send events to global triggers with information attached.
   * @param event_name Event name
   * @param i Integer value
   * @param f Fixed-point value
   * @param b Boolean value
   * @param s String value
   * @param p Floating-point value
   * @param u Unit object
   */
  unit_send_global_event_with_info: (
    /** Event name */
    event_name: string,
    /** Integer value */
    i: Int32,
    /** Fixed-point value */
    f: Fixed,
    /** Boolean value */
    b: boolean,
    /** String value */
    s: string,
    /** Floating-point value */
    p: Point,
    /** Unit object */
    u: Unit | null,
  ) => void;

  /**
   * Ability triggers send events to global triggers with information attached.
   * @param event_name Event name
   * @param i Integer value
   * @param f Fixed-point value
   * @param b Boolean value
   * @param s String value
   * @param p Floating-point value
   * @param u Unit object
   */
  ability_send_global_event_with_info: (
    /** Event name */
    event_name: string,
    /** Integer value */
    i: Int32,
    /** Fixed-point value */
    f: Fixed,
    /** Boolean value */
    b: boolean,
    /** String value */
    s: string,
    /** Floating-point value */
    p: Point,
    /** Unit object */
    u: Unit | null,
  ) => void;

  /**
   * Modifier triggers send events to global triggers with information attached.
   * @param event_name Event name
   * @param i Integer value
   * @param f Fixed-point value
   * @param b Boolean value
   * @param s String value
   * @param p Floating-point value
   * @param u Unit object
   */
  modifier_send_global_event_with_info: (
    /** Event name */
    event_name: string,
    /** Integer value */
    i: Int32,
    /** Fixed-point value */
    f: Fixed,
    /** Boolean value */
    b: boolean,
    /** String value */
    s: string,
    /** Floating-point value */
    p: Point,
    /** Unit object */
    u: Unit | null,
  ) => void;

  /**
   * Projectile triggers send events to global triggers with information attached.
   * @param event_name Event name
   * @param i Integer value
   * @param f Fixed-point value
   * @param b Boolean value
   * @param s String value
   * @param p Floating-point value
   * @param u Unit object
   */
  projectile_send_global_event_with_info: (
    /** Event name */
    event_name: string,
    /** Integer value */
    i: Int32,
    /** Fixed-point value */
    f: Fixed,
    /** Boolean value */
    b: boolean,
    /** String value */
    s: string,
    /** Floating-point value */
    p: Point,
    /** Unit object */
    u: Unit | null,
  ) => void;

  /**
   * Item triggers send events to global triggers with information attached.
   * @param event_name Event name
   * @param i Integer value
   * @param f Fixed-point value
   * @param b Boolean value
   * @param s String value
   * @param p Floating-point value
   * @param u Unit object
   */
  item_send_global_event_with_info: (
    /** Event name */
    event_name: string,
    /** Integer value */
    i: Int32,
    /** Fixed-point value */
    f: Fixed,
    /** Boolean value */
    b: boolean,
    /** String value */
    s: string,
    /** Floating-point value */
    p: Point,
    /** Unit object */
    u: Unit | null,
  ) => void;

  /**
   * Get the [player]’s nickname.
   * @param role Player
   * @returns string
   */
  get_player_nick_name: (
    /** Player */
    role: Role,
  ) => string;

  /**
   * Get the [player]’s icon.
   * @param role Player
   * @returns string
   */
  get_player_icon: (
    /** Player */
    role: Role,
  ) => string;

  /**
   * Filter units’ state of being removed.
   * @param unit Unit
   * @returns Unit
   */
  filter_unit_status: (
    /** Unit */
    unit: Unit | null,
  ) => Unit;

  /**
   * Open the purchasable shop for player.
   * @param role Player
   */
  open_charge_item_store_for_role: (
    /** Player */
    role: Role,
  ) => void;

  /**
   * Get the current run time of the game.
   * @returns Fixed
   */
  get_cur_game_time: () => Fixed;

  /**
   * Determine whether two points are connected.
   * @param unit Pathfinding unit
   * @param pointa Starting point
   * @param pointb Ending point
   * @returns boolean
   */
  can_point_reach_point: (
    /** Pathfinding unit */
    unit: Unit,
    /** Starting point */
    pointa: Point,
    /** Ending point */
    pointb: Point,
  ) => boolean;

  /**
   * Determines whether the point is able to collide with a unit.
   * @param unit Unit
   * @param point Point
   * @param radius Range
   * @returns boolean
   */
  unit_can_collide_with_point: (
    /** Unit */
    unit: Unit,
    /** Point */
    point: Point,
    /** Range */
    radius: Float,
  ) => boolean;

  /**
   * Return the string attribute value of a specified ability name.
   * @param ability_id Ability ID
   * @param name Attribute name
   * @returns string
   */
  get_ability_name_str_attr_value: (
    /** Ability ID */
    ability_id: AbilityKey,
    /** Attribute name */
    name: string,
  ) => string;

  /**
   * Get the string attribute value of a slot ability specified by unit ID.
   * @param unit_key Unit ID
   * @param ability_index Ability slot
   * @param prop Attribute name
   * @returns string
   */
  get_unit_key_ability_str_attr_value: (
    /** Unit ID */
    unit_key: UnitKey,
    /** Ability slot */
    ability_index: AbilityIndex,
    /** Attribute name */
    prop: string,
  ) => string;

  /**
   * Return the ability name of a specified slot of a specified unit name.
   * @param unit_key Unit key
   * @param ability_index Ability slot
   * @returns AbilityKey
   */
  get_ability_key_from_unit_key: (
    /** Unit key */
    unit_key: UnitKey,
    /** Ability slot */
    ability_index: AbilityIndex,
  ) => AbilityKey;

  /**
   * Return the ability name of a specified slot of a specified unit name.
   * @param unit_key Unit key
   * @param ability_index Ability slot
   * @param prop Attribute name
   * @returns string
   */
  get_ability_str_attr_from_unit_key: (
    /** Unit key */
    unit_key: UnitKey,
    /** Ability slot */
    ability_index: AbilityIndex,
    /** Attribute name */
    prop: string,
  ) => string;

  /**
   * Get the ability by ability sequence ID.
   * @param unit Unit
   * @param ability_seq Ability sequence ID
   * @returns Ability
   */
  api_get_ability_by_seq: (
    /** Unit */
    unit: Unit,
    /** Ability sequence ID */
    ability_seq: AbilitySeq,
  ) => Ability;

  /**
   * Get the 【integer】th unit entity in the【unit group】’s damage ranking.
   * @param unit_group Unit group
   * @param rank Ranking
   * @returns Unit
   */
  get_damage_statistic_rank_unit: (
    /** Unit group */
    unit_group: UnitGroup,
    /** Ranking */
    rank: Int32,
  ) => Unit;

  /**
   * Get the scale of selection.
   * @param unit Unit
   * @returns Fixed
   */
  get_select_circle_scale: (
    /** Unit */
    unit: Unit,
  ) => Fixed;

  /**
   * Remove the model.
   * @param model Model
   */
  delete_model_entity: (
    /** Model */
    model: Model,
  ) => void;

  /**
   * Create a display model with the float orientation to a point.
   * @param model_res_id Model name
   * @param position Point
   * @param rotation Orientation
   * @returns Model
   */
  create_model_on_point: (
    /** Model name */
    model_res_id: ModelKey,
    /** Point */
    position: Point,
    /** Orientation */
    rotation: Float,
  ) => Model;

  /**
   * Get the preset path group.
   * @returns RoadGroup
   */
  get_road_group: () => RoadGroup;

  /**
   * Create a model.
   * @param model_key Model ID
   * @param pos Point
   * @param face Orientation
   * @returns Model
   */
  create_model_in_scene: (
    /** Model ID */
    model_key: ModelKey,
    /** Point */
    pos: FPoint,
    /** Orientation */
    face: Fixed,
  ) => Model;

  /**
   * Destroy a model.
   * @param model Model
   */
  destroy_model_in_scene: (
    /** Model */
    model: Model | null,
  ) => void;

  /**
   * Return the string attribute value of a specified item name.
   * @param key Item ID
   * @param name Attribute name
   * @returns string
   */
  get_item_key_str_attr: (
    /** Item ID */
    key: ItemKey,
    /** Attribute name */
    name: string,
  ) => string;

  /**
   * Forcefully remove a player.
   * @param role Player
   * @param reason Reason of removing
   */
  role_force_quit: (
    /** Player */
    role: Role,
    /** Reason of removing */
    reason: string,
  ) => void;

  /**
   * Get the current day and night time of the game.
   * @returns Float
   */
  get_cur_day_and_night_time: () => Float;

  /**
   * Set the day and night time of the game.
   * @param time Time (0-24)
   */
  set_day_and_night_time: (
    /** Time (0-24) */
    time: Float,
  ) => void;

  /**
   * Set the rate at which the game's day and night time elapses (multiplier).
   * @param time_multiple Multiplier and not a negative value
   */
  set_day_and_night_time_speed: (
    /** Multiplier and not a negative value */
    time_multiple: Float,
  ) => void;

  /**
   * Set the rate at which the game's day and night time elapses (percentage).
   * @param time_per Percentage and not a negative value
   */
  set_day_and_night_time_speed_per: (
    /** Percentage and not a negative value */
    time_per: Float,
  ) => void;

  /**
   * Toggle time elapse on/off.
   * @param flag Boolean value
   */
  open_or_close_time_speed: (
    /** Boolean value */
    flag: boolean,
  ) => void;

  /**
   * Create artificial time and make it continue for a set duration.
   * @param create_time Created time
   * @param time_delay Duration
   */
  create_day_and_night_human_time: (
    /** Created time */
    create_time: Float,
    /** Duration */
    time_delay: Float,
  ) => void;

  /**
   * Modify the terrain texture of a specific point.
   * @param position A specific point
   * @param texture_type Texture type
   * @param radius Range
   * @param area_shape Region type
   */
  modify_point_texture: (
    /** A specific point */
    position: Point,
    /** Texture type */
    texture_type: Int32,
    /** Range */
    radius: Int32,
    /** Region type */
    area_shape: Int32,
  ) => void;

  /**
   * Get texture type.
   * @param point Point
   * @returns Int32
   */
  get_point_texture: (
    /** Point */
    point: Point,
  ) => Int32;

  /**
   * Set the view in a rectangle.
   * @param rect_area Rectangle
   * @param player Player
   * @param is_vision Boolean variable
   * @param is_vision_true Boolean variable
   * @returns RecArea
   */
  set_rect_vision_visibility: (
    /** Rectangle */
    rect_area: RecArea,
    /** Player */
    player: Role,
    /** Boolean variable */
    is_vision: boolean,
    /** Boolean variable */
    is_vision_true: boolean,
  ) => RecArea;

  /**
   * Set the view in a circle.
   * @param circle_area Circle
   * @param player Player
   * @param is_vision Boolean variable
   * @param is_vision_true Boolean variable
   * @returns CirArea
   */
  set_circle_vision_visibility: (
    /** Circle */
    circle_area: CirArea,
    /** Player */
    player: Role,
    /** Boolean variable */
    is_vision: boolean,
    /** Boolean variable */
    is_vision_true: boolean,
  ) => CirArea;

  /**
   * Create random pool.
   * @returns RandomPool
   */
  create_random_pool: () => RandomPool;

  /**
   * Set the weight of a specified integer in random pool.
   * @param random_pool Random pool
   * @param value Integer
   * @param weight Integer
   */
  set_random_pool_value: (
    /** Random pool */
    random_pool: RandomPool,
    /** Integer */
    value: Int32,
    /** Integer */
    weight: Int32,
  ) => void;

  /**
   * Add the weight of a specified integer in random pool.
   * @param random_pool Random pool
   * @param value Integer
   * @param increment Integer
   */
  increase_random_pool_value: (
    /** Random pool */
    random_pool: RandomPool,
    /** Integer */
    value: Int32,
    /** Integer */
    increment: Int32,
  ) => void;

  /**
   * Remove a specified integer from random pool.
   * @param random_pool Random pool
   * @param value Integer
   */
  remove_random_pool_value: (
    /** Random pool */
    random_pool: RandomPool,
    /** Integer */
    value: Int32,
  ) => void;

  /**
   * Get a random integer from random pool.
   * @param random_pool Random pool
   * @returns Int32
   */
  get_bitrary_random_pool_value: (
    /** Random pool */
    random_pool: RandomPool,
  ) => Int32;

  /**
   * Get the weighting rate of a specified integer in the random pool.
   * @param random_pool Random pool
   * @param value Integer
   * @returns Float
   */
  get_random_pool_probability: (
    /** Random pool */
    random_pool: RandomPool,
    /** Integer */
    value: Int32,
  ) => Float;

  /**
   * Get the total weight of the random pool.
   * @param random_pool Random pool
   * @returns Int32
   */
  get_random_pool_all_weight: (
    /** Random pool */
    random_pool: RandomPool,
  ) => Int32;

  /**
   * Get the number of integers in the random pool.
   * @param random_pool Random pool
   * @returns Int32
   */
  get_random_pool_size: (
    /** Random pool */
    random_pool: RandomPool,
  ) => Int32;

  /**
   * Copy the random pool.
   * @param random_pool Random pool
   * @returns RandomPool
   */
  copy_random_pool: (
    /** Random pool */
    random_pool: RandomPool,
  ) => RandomPool;

  /**
   * Get the list of a random pool.
   * @param random_pool Random pool
   * @returns Int32
   */
  get_all_random_pool_value: (
    /** Random pool */
    random_pool: RandomPool,
  ) => Int32;

  /**
   * Get the weight of a specified integer in the random pool.
   * @param random_pool Random pool
   * @param value Integer
   * @returns Int32
   */
  get_random_pool_pointed_weight: (
    /** Random pool */
    random_pool: RandomPool,
    /** Integer */
    value: Int32,
  ) => Int32;

  /**
   * Send the custom event of triggers.
   * @param event_name Custom event name
   * @param p1 Parameter 1
   * @param p2 Parameter 2
   * @param p3 Parameter 3
   * @param p4 Parameter 4
   * @param p5 Parameter 5
   */
  send_custom_event: (
    /** Custom event name */
    event_name: string,
    /** Parameter 1 */
    p1: Int32,
    /** Parameter 2 */
    p2: Int32,
    /** Parameter 3 */
    p3: Int32,
    /** Parameter 4 */
    p4: Int32,
    /** Parameter 5 */
    p5: Int32,
  ) => void;

  /**
   * Display UI components and play animation.
   * @param role Player
   * @param comp_name Widget name
   * @param anim_name Animation name
   */
  show_ui_comp_animation: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Animation name */
    anim_name: string,
  ) => void;

  /**
   * Hide UI components and play animation.
   * @param role Player
   * @param comp_name Widget name
   * @param anim_name Animation name
   */
  hide_ui_comp_animation: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Animation name */
    anim_name: string,
  ) => void;

  /**
   * Set the coordinates of UI component.
   * @param role Player
   * @param comp_name Widget name
   * @param x x
   * @param y y
   */
  set_ui_comp_pos: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** x */
    x: Float,
    /** y */
    y: Float,
  ) => void;

  /**
   * Set the scale of UI component.
   * @param role Player
   * @param comp_name Widget name
   * @param width width
   * @param height height
   */
  set_ui_comp_scale: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** width */
    width: Float,
    /** height */
    height: Float,
  ) => void;

  /**
   * Set the size of UI component.
   * @param role Player
   * @param comp_name Widget name
   * @param width width
   * @param height height
   */
  set_ui_comp_size: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** width */
    width: Float,
    /** height */
    height: Float,
  ) => void;

  /**
   * Set the depth of UI component.
   * @param role Player
   * @param comp_name Widget name
   * @param z_order z_order
   */
  set_ui_comp_z_order: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** z_order */
    z_order: Int32,
  ) => void;

  /**
   * Set the image of UI component.
   * @param role Player
   * @param comp_name Widget name
   * @param image_id Image ID
   */
  set_ui_comp_image: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Image ID */
    image_id: Int32,
  ) => void;

  /**
   * Set the image to replace minimap.
   * @param role Player
   * @param image_id Image ID
   */
  change_mini_map_img: (
    /** Player */
    role: Role,
    /** Image ID */
    image_id: Int32,
  ) => void;

  /**
   * Set the max value of progress bar.
   * @param role Player
   * @param comp_name Widget name
   * @param max_value Max value
   */
  set_progress_bar_max_value: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Max value */
    max_value: Float,
  ) => void;

  /**
   * Set the current value of progress bar.
   * @param role Player
   * @param comp_name Widget name
   * @param current_value Current value
   */
  set_progress_bar_current_value: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Current value */
    current_value: Float,
  ) => void;

  /**
   * Set UI enabled/disabled.
   * @param role Player
   * @param comp_name Widget name
   * @param current_value Whether to enable
   */
  set_ui_comp_enable: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Whether to enable */
    current_value: boolean,
  ) => void;

  /**
   * Set the text color of UI.
   * @param role Player
   * @param comp_name Widget name
   * @param r R
   * @param g G
   * @param b B
   * @param a A
   */
  set_ui_comp_font_color: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** R */
    r: Float,
    /** G */
    g: Float,
    /** B */
    b: Float,
    /** A */
    a: Float,
  ) => void;

  /**
   * Set the text of UI.
   * @param role Player
   * @param comp_name Widget name
   * @param content Text
   */
  set_ui_comp_text: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Text */
    content: string,
  ) => void;

  /**
   * Set the text size of UI.
   * @param role Player
   * @param comp_name Widget name
   * @param size Text size
   */
  set_ui_comp_font_size: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Text size */
    size: Int32,
  ) => void;

  /**
   * Set the editable box to gain focal point.
   * @param role Player
   * @param comp_name Widget name
   */
  set_input_field_focus: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
  ) => void;

  /**
   * Set the editable box to lose focal point.
   * @param role Player
   * @param comp_name Widget name
   */
  set_input_field_not_focus: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
  ) => void;

  /**
   * Bind an ability entity to a widget.
   * @param role Player
   * @param ability Ability object
   * @param comp_name Widget name
   */
  set_skill_on_ui_comp: (
    /** Player */
    role: Role,
    /** Ability object */
    ability: Ability,
    /** Widget name */
    comp_name: string,
  ) => void;

  /**
   * Set the widget’s alpha.
   * @param role Player
   * @param comp_name Widget name
   * @param opacity Alpha
   */
  set_ui_comp_opacity: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Alpha */
    opacity: Float,
  ) => void;

  /**
   * Bind an object to the modifier widget.
   * @param role Player
   * @param unit Unit object
   * @param comp_name Widget name
   */
  set_buff_on_ui_comp: (
    /** Player */
    role: Role,
    /** Unit object */
    unit: Unit,
    /** Widget name */
    comp_name: string,
  ) => void;

  /**
   * Bind an item entity to a purchasable bar widget.
   * @param role Player
   * @param item Item object
   * @param comp_name Widget name
   */
  set_item_on_ui_comp: (
    /** Player */
    role: Role,
    /** Item object */
    item: Item,
    /** Widget name */
    comp_name: string,
  ) => void;

  /**
   * UI widget binds items in the scene.
   * @param role Player
   * @param comp_name Widget name
   * @param slot_type Type
   * @param slot_index Slot ID
   */
  set_ui_comp_slot: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Type */
    slot_type: SlotType,
    /** Slot ID */
    slot_index: Int32,
  ) => void;

  /**
   * UI widget binds items of a unit.
   * @param role Player
   * @param comp_name Widget name
   * @param unit Unit
   * @param slot_type Type
   * @param slot_index Slot ID
   */
  set_ui_comp_unit_slot: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Unit */
    unit: SlotType,
    /** Type */
    slot_type: SlotType,
    /** Slot ID */
    slot_index: Int32,
  ) => void;

  /**
   * Set the visibility of preset main interface UI.
   * @param role Player
   * @param visible Visibility
   */
  set_prefab_ui_visible: (
    /** Player */
    role: Role,
    /** Visibility */
    visible: boolean,
  ) => void;

  /**
   * Play/stop the ability button's activation animation.
   * @param role Player
   * @param comp_name Widget name
   * @param play Play/stop
   */
  set_skill_btn_action_effect: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Play/stop */
    play: boolean,
  ) => void;

  /**
   * Set the button's shortcut key.
   * @param role Player
   * @param comp_name Widget name
   * @param btn Button ID
   */
  set_btn_short_cut: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Button ID */
    btn: Int32,
  ) => void;

  /**
   * Set the UI model’s widget ID.
   * @param role Player
   * @param comp_name Widget name
   * @param model_id Model ID
   */
  set_ui_model_id: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Model ID */
    model_id: Model,
  ) => void;

  /**
   * Set the target shop unit for the player’s shop widget.
   * @param role Player
   * @param comp_name Widget name
   * @param shop_unit Shop unit
   * @param index Tab index
   */
  set_shop_comp_bind_shop_unit: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Shop unit */
    shop_unit: Unit,
    /** Tab index */
    index: Unit,
  ) => void;

  /**
   * Set and refresh the parameter for the player's composition widget.
   * @param role Player
   * @param comp_name Widget name
   * @param item_id Composition target item ID
   * @param shop_unit Shop unit
   * @param buy_unit Purchasing unit
   */
  set_compose_comp_refresh: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Composition target item ID */
    item_id: ItemID,
    /** Shop unit */
    shop_unit: Unit,
    /** Purchasing unit */
    buy_unit: Unit,
  ) => void;

  /**
   * Get the image ID for the icon image.
   * @param parameter Object
   * @returns Int32
   */
  get_icon_id: (
    /** Object */
    parameter: Actor,
  ) => Int32;

  /**
   * Get the image ID for the ability’s icon image.
   * @param key Ability ID
   * @returns Int32
   */
  get_icon_id_by_ability_type: (
    /** Ability ID */
    key: AbilityKey,
  ) => Int32;

  /**
   * Get the image ID for the item’s icon image.
   * @param key Item ID
   * @returns Int32
   */
  get_icon_id_by_item_type: (
    /** Item ID */
    key: ItemKey,
  ) => Int32;

  /**
   * Get the image ID for the unit’s icon image.
   * @param key Unit ID
   * @returns Int32
   */
  get_icon_id_by_unit_type: (
    /** Unit ID */
    key: UnitKey,
  ) => Int32;

  /**
   * Get the image ID for the modifier’s icon image.
   * @param key Modifier ID
   * @returns Int32
   */
  get_icon_id_by_buff_type: (
    /** Modifier ID */
    key: ModifierKey,
  ) => Int32;

  /**
   * Create floating text.
   * @param point Point
   * @param type Combat text type
   * @param value Combat text content
   * @param player_group Player group
   */
  create_harm_text: (
    /** Point */
    point: Point,
    /** Combat text type */
    type: Int32,
    /** Combat text content */
    value: string,
    /** Player group */
    player_group: RoleGroup,
  ) => void;

  /**
   * Whether the key has been pressed for a player.
   * @param role Player ID
   * @param key Key of keyboard
   * @returns boolean
   */
  player_key_is_pressed: (
    /** Player ID */
    role: RoleID,
    /** Key of keyboard */
    key: KeyboardKey,
  ) => boolean;

  /**
   * Get the player's mouse location.
   * @param role Player ID
   * @returns Point
   */
  get_player_pointing_pos: (
    /** Player ID */
    role: RoleID,
  ) => Point;

  /**
   * Return the name of a specified unit type.
   * @param unit_key Player ID
   * @returns string
   */
  get_unit_name_by_type: (
    /** Player ID */
    unit_key: UnitKey,
  ) => string;

  /**
   * Return the description of a specified unit type.
   * @param unit_key Player ID
   * @returns string
   */
  get_unit_desc_by_type: (
    /** Player ID */
    unit_key: UnitKey,
  ) => string;

  /**
   * Return the name of a specified destructible type.
   * @param dest_key Destructible ID
   * @returns string
   */
  get_dest_name_by_type: (
    /** Destructible ID */
    dest_key: DestructibleKey,
  ) => string;

  /**
   * Return the description of a specified destructible type.
   * @param dest_key Destructible ID
   * @returns string
   */
  get_dest_desc_by_type: (
    /** Destructible ID */
    dest_key: DestructibleKey,
  ) => string;

  /**
   * Return the name of a specified projectile type.
   * @param projectile_key Projectile ID
   * @returns string
   */
  get_projectile_name_by_type: (
    /** Projectile ID */
    projectile_key: ProjectileKey,
  ) => string;

  /**
   * Return the description of a specified projectile type.
   * @param projectile_key Projectile ID
   * @returns string
   */
  get_projectile_desc_by_type: (
    /** Projectile ID */
    projectile_key: ProjectileKey,
  ) => string;

  /**
   * Return the description of a specified item type.
   * @param item_key Item ID
   * @returns string
   */
  get_item_desc_by_type: (
    /** Item ID */
    item_key: ItemKey,
  ) => string;

  /**
   * Return the description of a specified ability type.
   * @param ability_key Ability ID
   * @returns string
   */
  get_ability_desc_by_type: (
    /** Ability ID */
    ability_key: AbilityKey,
  ) => string;

  /**
   * Return the name of a specified ability type.
   * @param ability_key Ability ID
   * @returns string
   */
  get_ability_name_by_type: (
    /** Ability ID */
    ability_key: AbilityKey,
  ) => string;

  /**
   * Return the name of a specified tech type.
   * @param tech_key Tech ID
   * @returns string
   */
  get_tech_name_by_type: (
    /** Tech ID */
    tech_key: TechKey,
  ) => string;

  /**
   * Return the description of a specified tech type.
   * @param tech_key Tech ID
   * @returns string
   */
  get_tech_desc_by_type: (
    /** Tech ID */
    tech_key: TechKey,
  ) => string;

  /**
   * Return the name of a specified modifier type.
   * @param modifier_key Modifier ID
   * @returns string
   */
  get_modifier_name_by_type: (
    /** Modifier ID */
    modifier_key: ModifierKey,
  ) => string;

  /**
   * Return the description of a specified modifier type.
   * @param modifier_key Modifier ID
   * @returns string
   */
  get_modifier_desc_by_type: (
    /** Modifier ID */
    modifier_key: ModifierKey,
  ) => string;

  /**
   * Return the name of a specified item type.
   * @param item_key Item ID
   * @returns string
   */
  get_item_name_by_type: (
    /** Item ID */
    item_key: ItemKey,
  ) => string;

  /**
   * Block global keyboard event.
   * @param role Player
   * @param block Whether to block
   */
  block_global_key_event: (
    /** Player */
    role: Role,
    /** Whether to block */
    block: boolean,
  ) => void;

  /**
   * Block global mouse event.
   * @param role Player
   * @param block Whether to block
   */
  block_global_mouse_event: (
    /** Player */
    role: Role,
    /** Whether to block */
    block: boolean,
  ) => void;

  /**
   * Block trigger keyboard event.
   * @param role Player
   * @param block Whether to block
   */
  block_trigger_key_event: (
    /** Player */
    role: Role,
    /** Whether to block */
    block: boolean,
  ) => void;

  /**
   * Block trigger mouse event.
   * @param role Player
   * @param block Whether to block
   */
  block_trigger_mouse_event: (
    /** Player */
    role: Role,
    /** Whether to block */
    block: boolean,
  ) => void;

  /**
   * Get the player’s attribute icon.
   * @param res_key Player attribute
   * @returns Int32
   */
  get_role_res_icon: (
    /** Player attribute */
    res_key: RoleResKey,
  ) => Int32;

  /**
   * Set the background color for UI model widget.
   * @param role Player
   * @param comp_name Widget name
   * @param r R
   * @param g G
   * @param b B
   * @param a A
   */
  set_show_room_background_color: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** R */
    r: Float,
    /** G */
    g: Float,
    /** B */
    b: Float,
    /** A */
    a: Float,
  ) => void;

  /**
   * Set FoV for showroom.
   * @param role Player
   * @param comp_name Widget name
   * @param fov fov
   */
  change_showroom_fov: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** fov */
    fov: Float,
  ) => void;

  /**
   * Set camera position for showroom.
   * @param role Player
   * @param comp_name Widget name
   * @param x x
   * @param y y
   * @param z z
   */
  change_showroom_cposition: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** x */
    x: Float,
    /** y */
    y: Float,
    /** z */
    z: Float,
  ) => void;

  /**
   * Set camera rotation for showroom.
   * @param role Player
   * @param comp_name Widget name
   * @param pitch pitch
   * @param roll roll
   * @param yaw yaw
   */
  change_showroom_crotation: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** pitch */
    pitch: Float,
    /** roll */
    roll: Float,
    /** yaw */
    yaw: Float,
  ) => void;

  /**
   * Set the number of sub-items in GridView.
   * @param role Player
   * @param comp_name Widget name
   * @param count Number of children nodes
   */
  set_grid_view_item_count: (
    /** Player */
    role: Role,
    /** Widget name */
    comp_name: string,
    /** Number of children nodes */
    count: Int32,
  ) => void;

  /**
   * Get child widget for GridView.
   * @param comp_name Widget name
   * @param index Index
   * @returns string
   */
  get_grid_view_item: (
    /** Widget name */
    comp_name: string,
    /** Index */
    index: Int32,
  ) => string;
};
