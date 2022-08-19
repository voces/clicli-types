declare const EVENT: {
  /** LOGIC_UNIT_DESTROY */
  readonly LOGIC_UNIT_DESTROY: unique symbol;

  /** timer timeout */
  readonly TIMEOUT: unique symbol;

  /** Periodic timer timeout */
  readonly REPEAT_TIMEOUT: unique symbol;

  /** Game initialization */
  readonly GAME_INIT: unique symbol;

  /** End of Loading */
  readonly LOADING_END: unique symbol;

  /**
   * Receive trigger events
   *
   * @data `__trigger_id`: `TriggerID` - trigger id
   */
  readonly RECV_TRIGGER: unique symbol;

  /** GAME OVER */
  readonly GAME_END: unique symbol;

  /** game paused */
  readonly GAME_PAUSE: unique symbol;

  /** GAME RESTORATION */
  readonly GAME_RESUME: unique symbol;

  /** empty event */
  readonly EMPTY: unique symbol;

  /**
   * global timer timeout
   *
   * @data `__name`: `string` - timer name
   */
  readonly ER_TIMEOUT: unique symbol;

  /**
   * Day and night change
   *
   * @data `__is_day_to_night`: `boolean` - Is it day to night
   */
  readonly DAY_NIGHT_CHANGE: unique symbol;

  /**
   * add container
   *
   * @data `__name`: `string` - container name,
   * @data `__container`: `ActorContainer` - container
   */
  readonly CONTAINER_ADDED: unique symbol;

  /**
   * Add actor to container
   *
   * @data `__owner`: `Actor` - container slave actor
   */
  readonly CONTAINER_ACTOR_ADDED: unique symbol;

  /**
   * remove actor from container
   *
   * @data `__owner`: `Actor` - original container slave actor
   */
  readonly CONTAINER_ACTOR_REMOVED: unique symbol;

  /**
   * actor property update
   *
   * @data `__name`: `string` - attribute name
   */
  readonly ACTOR_ATTR_UPDATED: unique symbol;

  /**
   * unit entry area
   *
   * @data `__unit_id`: `UnitID` - Unit ID,
   * @data `__area_id`: `AreaID` - 区域ID,
   * @data `__trigger_id`: `TriggerID` - trigger ID
   */
  readonly AREA_ENTER: unique symbol;

  /**
   * Unit leaves area
   *
   * @data `__unit_id`: `UnitID` - Unit ID,
   * @data `__area_id`: `AreaID` - 区域ID,
   * @data `__trigger_id`: `TriggerID` - trigger ID
   */
  readonly AREA_LEAVE: unique symbol;

  /**
   * Player joins battle
   *
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly ROLE_JOIN_BATTLE: unique symbol;

  /**
   * Player actively quits the game
   *
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly ROLE_ACTIVE_EXIT_GAME_EVENT: unique symbol;

  /**
   * Player disconnected from server
   *
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly ROLE_LOSE_CONNECT: unique symbol;

  /**
   * AI takes over the player
   *
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly AI_TAKE_CONTROL: unique symbol;

  /**
   * Download archive data callback
   *
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly DOWNLOAD_MAP_ARCHIVE_CALLBACK: unique symbol;

  /**
   * The player successfully used the paid item
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__store_key`: `StoreKey` - Charge item number,
   * @data `__use_cnt`: `UInt32` - number of uses
   */
  readonly ROLE_USE_STORE_ITEM_END: unique symbol;

  /**
   * The player successfully used the paid item (in the trigger)
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__store_key`: `StoreKey` - Charge item number
   */
  readonly CONSUME_STORE_ITEM: unique symbol;

  /**
   * Players have paid items
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__store_key`: `StoreKey` - Charge item number
   */
  readonly ROLE_HOLD_STORE_ITEM: unique symbol;

  /**
   * Player resource changes
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__res_key`: `RoleResKey` - Player resource type,
   * @data `__res_value`: `Int32` - Player resource value
   */
  readonly ROLE_RESOURCE_CHANGED: unique symbol;

  /**
   * player input string
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__msg`: `string` - string
   */
  readonly ROLE_INPUT_MSG: unique symbol;

  /**
   * Player enters activation code
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__activation_code_group`: `string` - activation code group
   */
  readonly ROLE_INPUT_ACTIVATION_CODE: unique symbol;

  /**
   * Player technology upgrade
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__tech_no`: `TechKey` - tech number,
   * @data `__curr_lv`: `Int32` - current tech level
   */
  readonly ROLE_TECH_UPGRADE: unique symbol;

  /**
   * Player Tech Downgrade
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__tech_no`: `TechKey` - tech number,
   * @data `__curr_lv`: `Int32` - current tech level
   */
  readonly ROLE_TECH_DOWNGRADE: unique symbol;

  /**
   * Player Tech Changes
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__tech_no`: `TechKey` - tech number,
   * @data `__tech_no`: `Int32` - current tech level,
   * @data `__delta_lv`: `Int32` - Tech Change Level
   */
  readonly ROLE_TECH_CHANGED: unique symbol;

  /**
   * Unit R&D Technology
   *
   * @data `__unit_id`: `UnitID` - Unit ID,
   * @data `__role_id`: `RoleID` - The ID of the player the unit belongs to,
   * @data `__tech_no`: `TechKey` - tech number
   */
  readonly UNIT_UPGRADE_TECH: unique symbol;

  /**
   * Unit Add Technology
   *
   * @data `__unit_id`: `UnitID` - Unit ID,
   * @data `__role_id`: `RoleID` - The ID of the player the unit belongs to,
   * @data `__tech_no`: `TechKey` - tech number
   */
  readonly UNIT_ADD_TECH: unique symbol;

  /**
   * Unit Delete Technology
   *
   * @data `__unit_id`: `UnitID` - Unit ID,
   * @data `__role_id`: `RoleID` - The ID of the player the unit belongs to,
   * @data `__tech_no`: `TechKey` - tech number
   */
  readonly UNIT_REMOVE_TECH: unique symbol;

  /**
   * Player hostile relationship changes
   *
   * @data `__src_role_id`: `RoleID` - source player ID,
   * @data `__dst_role_id`: `RoleID` - target player ID,
   * @data `__relation`: `RoleRelation` - relation
   */
  readonly ROLE_CHANGE_RELATION: unique symbol;

  /**
   * Building Skills Build Successfully
   *
   * @data `__ability`: `Ability` - 技能,
   * @data `__ability_type`: `AbilityType` - Ability Type,
   * @data `__ability_index`: `AbilityIndex` - 技能ID,
   * @data `__ability_seq`: `AbilitySeq` - 技能Seq,
   * @data `__unit_id`: `UnitID` - Master,
   * @data `__build_unit_id`: `UnitID` - built unit ID
   */
  readonly ABILITY_BUILD_FINISH: unique symbol;

  /**
   * Normal Attack Hit
   *
   * @data `__ability_id`: `UInt32` - skill id
   */
  readonly ATTACK_HIT_TARGET: unique symbol;

  /**
   * Normal attack deals damage
   *
   * @data `__ability_id`: `UInt32` - skill id,
   * @data `__other_unit`: `Unit` - Damaged unit
   */
  readonly ATTACK_HURT: unique symbol;

  /**
   * Skill CD Changes
   *
   * @data `__ability_index`: `AbilityIndex` - skill pit,
   * @data `__left`: `Fixed` - cd remaining time,
   * @data `__total`: `Fixed` - total cd duration,
   * @data `__ability_id`: `AbilityKey` - 技能id
   */
  readonly ABILITY_CD_CHANGE: unique symbol;

  /**
   * @data `__ability_index`: `AbilityIndex` - skill pit
   */
  readonly ACTIVE_ABILITY_CHANGED: unique symbol;

  /**
   * Skill Charge Changes
   *
   * @data `__ability_index`: `AbilityIndex` - skill pit,
   * @data `__stack`: `Fixed` - Ability charge stacks
   */
  readonly ABILITY_STACK_CHANGE: unique symbol;

  /**
   * Skill Points
   *
   * @data `__ability_index`: `AbilityIndex` - skill pit
   */
  readonly ABILITY_PLUS_POINT: unique symbol;

  /**
   * Charge CD Change
   *
   * @data `__ability_index`: `AbilityIndex` - skill pit,
   * @data `__left`: `Fixed` - Recharge cd time remaining,
   * @data `__total`: `Fixed` - Recharge CD total duration
   */
  readonly ABILITY_STACK_CD_CHANGE: unique symbol;

  /**
   * @data `__ability_index`: `AbilityIndex` - skill pit,
   * @data `__is_forbidden`: `boolean` - whether to disable
   */
  readonly ABILITY_FORBIDDEN_CHANGED: unique symbol;

  /**
   * @data `__is_silent`: `boolean` - disabled
   */
  readonly ABILITY_SILENT_CHANGED: unique symbol;

  /** The name of the unit has changed */
  readonly UNIT_NAME_CHANGE: unique symbol;

  /**
   * Unit Changes in Faction
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly ROLE_UNIT_CHANGE: unique symbol;

  /**
   * unit starts moving
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly UNIT_START_MOVE: unique symbol;

  /**
   * unit end move
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly UNIT_END_MOVE: unique symbol;

  /**
   * Unit deletion (ECA only)
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly UNIT_REMOVE: unique symbol;

  /**
   * unit deletion (object is actually destroyed)
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly UNIT_DELETE: unique symbol;

  /**
   * UNITS TRANSFER END
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly T_END_TRANSLATE: unique symbol;

  /**
   * Unit Attribute Changes
   *
   * @data `__unit_id`: `UnitID` - Unit ID,
   * @data `__attr`: `string` - string
   */
  readonly UNIT_ATTR_CHANGE: unique symbol;

  /**
   * Unit is dying
   *
   * @data `__damage`: `Fixed` - Damage taken,
   * @data `__source_unit`: `Unit` - unit that deals damage,
   * @data `__target_unit`: `Unit` - The unit that took damage,
   * @data `__ability`: `Ability` - The skill of the current damage,
   * @data `__damage_type`: `Int32` - damage type,
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly BEFORE_UNIT_DIE: unique symbol;

  /**
   * Unit Dead
   *
   * @data `__damage`: `Fixed` - Damage taken,
   * @data `__source_unit`: `Unit` - unit that deals damage,
   * @data `__target_unit`: `Unit` - The unit that took damage,
   * @data `__ability`: `Ability` - The skill of the current damage,
   * @data `__damage_type`: `Int32` - damage type,
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly UNIT_DIE: unique symbol;

  /**
   * Unit Unbinds Player
   *
   * @data `__unit_id`: `UnitID` - Unit ID,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly UNIT_ON_UNBIND_ROLE: unique symbol;

  /**
   * unit bound player
   *
   * @data `__unit_id`: `UnitID` - Unit ID,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly UNIT_ON_BIND_ROLE: unique symbol;

  /**
   * Unit is attacked
   *
   * @data `__damage`: `Fixed` - Damage taken,
   * @data `__source_unit`: `Unit` - unit that deals damage,
   * @data `__target_unit`: `Unit` - The unit that took damage,
   * @data `__ability`: `Ability` - The skill of the current damage,
   * @data `__damage_type`: `Int32` - damage type,
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly UNIT_BE_HURT: unique symbol;

  /**
   * unit hits other unit
   *
   * @data `__damage`: `Fixed` - Damage taken,
   * @data `__source_unit`: `Unit` - unit that deals damage,
   * @data `__target_unit`: `Unit` - The unit that took damage,
   * @data `__ability`: `Ability` - The skill of the current damage,
   * @data `__damage_type`: `Int32` - damage type,
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly UNIT_HURT_OTHER: unique symbol;

  /**
   * Modify player attribute icon
   *
   * @data `__res_key`: `RoleResKey` - resource,
   * @data `__icon_id`: `Int32` - ICON ID
   */
  readonly RES_ICON_CHANGED: unique symbol;

  /**
   * Unit Cast Skill Event
   *
   * @data `__ability`: `Ability` - casted ability object,
   * @data `__unit_id`: `UnitID` - The unit unit_id that triggered the event
   */
  readonly UNIT_RELEASE_ABILITY: unique symbol;

  /**
   * Unit cast skill start event
   *
   * @data `__ability`: `Ability` - casted ability object,
   * @data `__unit_id`: `UnitID` - The unit unit_id that triggered the event
   */
  readonly UNIT_RELEASE_ABILITY_START: unique symbol;

  /**
   * Unit casts skill end event
   *
   * @data `__ability`: `Ability` - casted ability object,
   * @data `__unit_id`: `UnitID` - The unit unit_id that triggered the event
   */
  readonly UNIT_RELEASE_ABILITY_END: unique symbol;

  /**
   * Unit Cast Skill Event
   *
   * @data `__ability`: `Ability` - casted ability object,
   * @data `__unit_id`: `UnitID` - The unit unit_id that triggered the event
   */
  readonly UNIT_RELEASE_MAGIC_BOOK: unique symbol;

  /** Unit Skill Change Event */
  readonly UNIT_LEVEL_CHANGE: unique symbol;

  /** Unit XP Change Event */
  readonly UNIT_EXP_CHANGE: unique symbol;

  /**
   * Unit is about to gain experience
   *
   * @data `__unit_id`: `UnitID` - The unit that gained experience,
   * @data `__add_exp`: `Float` - Added experience
   */
  readonly UNIT_PRE_ADD_EXP: unique symbol;

  /**
   * Units gain experience
   *
   * @data `__unit_id`: `UnitID` - The unit that gained experience,
   * @data `__add_exp`: `Float` - Added experience
   */
  readonly UNIT_ON_ADD_EXP: unique symbol;

  /**
   * Unit receives command
   *
   * @data `__unit_id`: `UnitID` - unit,
   * @data `__cmd_type`: `UnitCommand` - Command received,
   * @data `__target_unit`: `Unit` - target unit,
   * @data `__point`: `Point` - target point,
   * @data `__destructible_id`: `DestructibleID` - target destructible ID,
   * @data `__item_id`: `ItemID` - target item ID
   */
  readonly UNIT_ON_COMMAND: unique symbol;

  /**
   * Unit kills other units
   *
   * @data `__damage`: `Fixed` - damage value,
   * @data `__source_unit`: `Unit` - killer unit,
   * @data `__target_unit`: `Unit` - death unit,
   * @data `__ability`: `Ability` - Critical damage attribute,
   * @data `__damage_type`: `Int32` - fatal damage type,
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly KILL_UNIT: unique symbol;

  /**
   * Unit Assist Event
   *
   * @data `__damage`: `Fixed` - damage value,
   * @data `__source_unit`: `Unit` - killer unit,
   * @data `__target_unit`: `Unit` - death unit,
   * @data `__ability`: `Ability` - Critical damage attribute,
   * @data `__damage_type`: `Int32` - fatal damage type,
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly ASSIST: unique symbol;

  /**
   * Unit Birth
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly UNIT_BORN: unique symbol;

  /**
   * Unit enters combat state
   *
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly UNIT_ENTER_BATTLE: unique symbol;

  /**
   * Unit out of combat
   *
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly UNIT_EXIT_BATTLE: unique symbol;

  /**
   * Unit Creation Minion
   *
   * @data `__unit_id`: `UnitID` - minion id
   */
  readonly UNIT_CREATE_SLAVE: unique symbol;

  /**
   * Item Additional Attribute Changes
   *
   * @data `__item_id`: `ItemID` - Item ID,
   * @data `__attr_key`: `string` - string,
   * @data `__delta`: `Fixed` - fixed number
   */
  readonly ITEM_ATTACHED_ATTR_CHANGED: unique symbol;

  /**
   * Product Purchase
   *
   * @data `__unit_id`: `UnitID` - Purchase item unit id,
   * @data `__shop_unit_id`: `UnitID` - shop unit id,
   * @data `__tab_idx`: `Int32` - store tab,
   * @data `__cnt`: `UInt32` - Item quantity,
   * @data `__item_stuff_id`: `ItemID` - Item id
   */
  readonly UNIT_SHOP_BUY_ITEM: unique symbol;

  /**
   * Product Purchase
   *
   * @data `__unit_id`: `UnitID` - Purchase item unit id,
   * @data `__shop_unit_id`: `UnitID` - shop unit id,
   * @data `__tab_idx`: `Int32` - store tab,
   * @data `__cnt`: `UInt32` - Item quantity,
   * @data `__unit_stuff_id`: `UnitID` - item unit id
   */
  readonly UNIT_SHOP_BUY_UNIT: unique symbol;

  /**
   * Items for Sale
   *
   * @data `__unit_id`: `UnitID` - Purchase item unit id,
   * @data `__shop_unit_id`: `UnitID` - shop unit id,
   * @data `__item_id`: `ItemID` - tool id
   */
  readonly UNIT_ITEM_SELL: unique symbol;

  /**
   * Store Item Changes
   *
   * @data `__shop_unit_id`: `UnitID` - shop unit id,
   * @data `__tab_idx`: `Int32` - store tab,
   * @data `__shop_key`: `string` - product id,
   * @data `__curr_stock`: `Int32` - current stock
   */
  readonly SHOP_ITEM_CHANGED: unique symbol;

  /**
   * Product Inventory Change
   *
   * @data `__shop_unit_id`: `UnitID` - shop unit id,
   * @data `__tab_idx`: `Int32` - store tab,
   * @data `__shop_key`: `string` - product id,
   * @data `__curr_stock`: `Int32` - current stock
   */
  readonly SHOP_STOCK_CHANGED: unique symbol;

  /**
   * Product Price Change
   *
   * @data `__shop_unit_id`: `UnitID` - shop unit id,
   * @data `__tab_idx`: `Int32` - store tab,
   * @data `__shop_key`: `string` - product id,
   * @data `__res_type`: `RoleResKey` - resource number,
   * @data `__res_cost`: `Int32` - current selling price
   */
  readonly SHOP_RES_COST_CHANGED: unique symbol;

  /**
   * Prop synthesis event
   *
   * @data `__unit_id`: `UnitID` - unit id,
   * @data `__compose_id`: `ItemKey` - item number
   */
  readonly UNIT_ITEM_COMPOSE: unique symbol;

  /**
   * Commodity synthesis purchase
   *
   * @data `__unit_id`: `UnitID` - Purchase item unit id,
   * @data `__shop_unit_id`: `UnitID` - shop unit id,
   * @data `__item_id`: `ItemID` - item number
   */
  readonly UNIT_SHOP_BUY_WITH_COMPOSE: unique symbol;

  /**
   * Unit Respawn
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly REVIVE_UNIT: unique symbol;

  /**
   * UNIT UPGRADE
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly UPGRADE_UNIT: unique symbol;

  /**
   * Unit Movement Goal Achieved
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly REACH_MOVE_TARGET_UNIT: unique symbol;

  /**
   * Unit collided with obstacle
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly COLLIDE_OBSTACLE_UNIT: unique symbol;

  /**
   * Unit enters the grass
   *
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly UNIT_ENTER_GRASS: unique symbol;

  /**
   * Unit leaves the grass
   *
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly UNIT_LEAVE_GRASS: unique symbol;

  /** Map visibility changed due to trigger */
  readonly MAP_VISIBILITY_CHANGE: unique symbol;

  /**
   * The prerequisites for the unit type meet the requirements
   *
   * @data `unit_key`: `UnitKey` - unit type,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly UNIT_PRECONDITION_SUCCEED: unique symbol;

  /**
   * Preconditions for unit type are not met
   *
   * @data `unit_key`: `UnitKey` - unit type,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly UNIT_PRECONDITION_FAILED: unique symbol;

  /**
   * The prerequisites for the item type meet the requirements
   *
   * @data `__item_no`: `ItemKey` - item type,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly ITEM_PRECONDITION_SUCCEED: unique symbol;

  /**
   * The prerequisites for the item type do not meet the requirements
   *
   * @data `__item_no`: `ItemKey` - item type,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly ITEM_PRECONDITION_FAILED: unique symbol;

  /**
   * The prerequisites of the skill type meet the requirements
   *
   * @data `__ability_id`: `AbilityKey` - Ability Type,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly ABILITY_PRECONDITION_SUCCEED: unique symbol;

  /**
   * The prerequisites for the skill type do not meet the requirements
   *
   * @data `__ability_id`: `AbilityKey` - Ability Type,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly ABILITY_PRECONDITION_FAILED: unique symbol;

  /**
   * The prerequisites of the technology type meet the requirements
   *
   * @data `__tech_no`: `TechKey` - tech type,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly TECH_PRECONDITION_SUCCEED: unique symbol;

  /**
   * The prerequisites for the technology type do not meet the requirements
   *
   * @data `__tech_no`: `TechKey` - tech type,
   * @data `__role_id`: `RoleID` - Player ID
   */
  readonly TECH_PRECONDITION_FAILED: unique symbol;

  /** Skill Upgrade */
  readonly ABILITY_UPGRADE: unique symbol;

  /**
   * skill starts casting
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_CS_START: unique symbol;

  /**
   * Skill Starts Casting Ends
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_CS_END: unique symbol;

  /**
   * Skill front shake starts
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_PS_START: unique symbol;

  /**
   * Skill pre-shake ends
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_PS_END: unique symbol;

  /**
   * Item skill front shake ends
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ITEM_ABILITY_PS_END: unique symbol;

  /**
   * Skill preparation is over
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_SP_END: unique symbol;

  /**
   * Skill Channeling Ends
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_CST_END: unique symbol;

  /**
   * Skill post-shake ends
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_BS_END: unique symbol;

  /**
   * Skill preparation phase was interrupted
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_CS_INTERRUPT: unique symbol;

  /**
   * Skill forward swing phase is interrupted
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_PS_INTERRUPT: unique symbol;

  /**
   * Skill preparation phase was interrupted
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_SP_INTERRUPT: unique symbol;

  /**
   * Skill channeling phase is interrupted
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_CST_INTERRUPT: unique symbol;

  /**
   * Skill post-shake phase is interrupted
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_BS_INTERRUPT: unique symbol;

  /**
   * END OF SKILL (WHATEVER)
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_END: unique symbol;

  /**
   * GET SKILLS
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_OBTAIN: unique symbol;

  /**
   * Lost Skill
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_LOSE: unique symbol;

  /**
   * Swap Skills
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_SWITCH: unique symbol;

  /**
   * Skill Disabled
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_DISABLE: unique symbol;

  /**
   * Skill Enable
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_ENABLE: unique symbol;

  /**
   * Skill attribute changes
   *
   * @data `__ability`: `Ability` - skill object
   */
  readonly ABILITY_ATTR_CHANGED: unique symbol;

  /** Skill Cooldown Event */
  readonly ABILITY_CD_END: unique symbol;

  /**
   * get effect
   *
   * @data `__modifier`: `Modifier` - Triggered magic effect,
   * @data `__owner_unit`: `Unit` - effect carrier,
   * @data `__from_unit_id`: `Unit` - effect applied by
   */
  readonly OBTAIN_MODIFIER: unique symbol;

  /**
   * Lost effect
   *
   * @data `__modifier`: `Modifier` - Triggered magic effect,
   * @data `__owner_unit`: `Unit` - effect carrier,
   * @data `__from_unit_id`: `Unit` - effect applied by
   */
  readonly LOSS_MODIFIER: unique symbol;

  /**
   * Loop trigger event
   *
   * @data `__modifier`: `Modifier` - Triggered magic effect,
   * @data `__owner_unit`: `Unit` - effect carrier,
   * @data `__from_unit_id`: `Unit` - effect applied by
   */
  readonly MODIFIER_CYCLE_TRIGGER: unique symbol;

  /** BUFF UPDATE EVENT */
  readonly MODIFIER_UPDATE_TIMER: unique symbol;

  /**
   * Effect layer change event
   *
   * @data `__modifier`: `Modifier` - Triggered magic effect,
   * @data `__owner_unit`: `Unit` - effect carrier,
   * @data `__layer_change_values`: `Int32` - Layer change values ​​,
   * @data `__from_unit_id`: `Unit` - effect applied by
   */
  readonly MODIFIER_LAYER_CHANGE: unique symbol;

  /**
   * Magic effect is about to get event
   *
   * @data `__modifier`: `Modifier` - Triggered magic effect,
   * @data `__owner_unit`: `Unit` - effect carrier,
   * @data `__from_unit_id`: `Unit` - effect applied by
   */
  readonly MODIFIER_GET_BEFORE_CREATE: unique symbol;

  /**
   * Magic effect is overridden event
   *
   * @data `__owner_unit`: `Unit` - effect carrier,
   * @data `__old_modifier`: `Modifier` - Existing magic effect,
   * @data `__new_modifier`: `Modifier` - New magic effect
   */
  readonly MODIFIER_BE_COVERED: unique symbol;

  /**
   * Magic effect attribute change event
   *
   * @data `__modifier`: `Modifier` - magic effect
   */
  readonly MODIFIER_ATTR_CHANGE: unique symbol;

  /** The number of destructible resources has changed */
  readonly SOURCE_NUMS_CHANGE: unique symbol;

  /** The name of the destructible has changed */
  readonly NAME_CHANGE: unique symbol;

  /** Destructible resource name changed */
  readonly SOURCE_NAME_CHANGE: unique symbol;

  /**
   * Destructible dies
   *
   * @data `__destructible_id`: `DestructibleID` - dead destructible,
   * @data `__unit_for_dest`: `Unit` - killer unit
   */
  readonly DEST_DIE: unique symbol;

  /**
   * Destructibles are collected and depleted
   *
   * @data `__destructible_id`: `DestructibleID` - Destructibles that are exhausted,
   * @data `__unit_for_dest`: `Unit` - collected units
   */
  readonly DEST_SOURCE_DRY: unique symbol;

  /**
   * Destructibles are attacked
   *
   * @data `__destructible_id`: `DestructibleID` - Destructible attacked,
   * @data `__unit_for_dest`: `Unit` - attacking unit
   */
  readonly DEST_ATTACKED: unique symbol;

  /**
   * Destructibles are collected
   *
   * @data `__destructible_id`: `DestructibleID` - Destructibles collected,
   * @data `__unit_for_dest`: `Unit` - collected units
   */
  readonly DEST_COLLECTED: unique symbol;

  /**
   * Destructibles in the area die
   *
   * @data `__area`: `Area` - The area where destructibles die,
   * @data `__destructible_id`: `DestructibleID` - dead destructible,
   * @data `__unit_for_dest`: `Unit` - killer unit
   */
  readonly DEST_AREA_DIE: unique symbol;

  /**
   * Destructibles in the area are collected and exhausted
   *
   * @data `__area`: `Area` - The area where destructibles are collected and depleted,
   * @data `__destructible_id`: `DestructibleID` - Destructibles that are exhausted,
   * @data `__unit_for_dest`: `Unit` - collection unit
   */
  readonly DEST_AREA_DRY: unique symbol;

  /**
   * Destructibles in the area are attacked
   *
   * @data `__area`: `Area` - The area where the destructible is attacked,
   * @data `__destructible_id`: `DestructibleID` - Destructible attacked,
   * @data `__unit_for_dest`: `Unit` - Attack unit
   */
  readonly DEST_AREA_ATTACKED: unique symbol;

  /**
   * Destructibles in the area are collected
   *
   * @data `__area`: `Area` - The area where destructibles are collected,
   * @data `__destructible_id`: `DestructibleID` - Destructibles collected,
   * @data `__unit_for_dest`: `Unit` - collection unit
   */
  readonly DEST_AREA_COLLECTED: unique symbol;

  /** projectile spawn */
  readonly PRODUCE_PROJECTILE: unique symbol;

  /** Projectile Death */
  readonly DEATH_PROJECTILE: unique symbol;

  /** Projectile movement started */
  readonly START_MOVE_PROJECTILE: unique symbol;

  /** Projectile Movement Target Achieved */
  readonly REACH_MOVE_TARGET_PROJECTILE: unique symbol;

  /**
   * Projectile collided with barrier
   *
   * @data `__unit_id`: `UnitID` - Unit ID
   */
  readonly COLLIDE_OBSTACLE_PROJECTILE: unique symbol;

  /** Create projectiles for units */
  readonly UNIT_PRODUCE_PROJECTILE: unique symbol;

  /**
   * ui editor event
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__ui_event_name`: `string` - ui event variable name,
   * @data `__comp_name`: `string` - trigger event control name,
   * @data `__pos`: `Vector2` - Touch coordinates,
   * @data `__touch_id`: `Int32` - Touch ID
   */
  readonly TRIGGER_COMPONENT_EVENT: unique symbol;

  /**
   * global trigger to send ui event
   *
   * @data `__event_name`: `string` - ui event name,
   * @data `__args`: `Dict` - arguments
   */
  readonly GLOBAL_EVENT_TO_UI_WITH_DICT: unique symbol;

  /**
   * Keyboard key pressed
   *
   * @data `__role_id`: `RoleID` - ID of the player that triggered the button,
   * @data `__current_key`: `KeyboardKey` - current keyboard key
   */
  readonly KEYBOARD_KEY_DOWN_EVENT: unique symbol;

  /**
   * Keyboard key up
   *
   * @data `__role_id`: `RoleID` - ID of the player that triggered the button,
   * @data `__current_key`: `KeyboardKey` - current keyboard key
   */
  readonly KEYBOARD_KEY_UP_EVENT: unique symbol;

  /**
   * mouse button pressed
   *
   * @data `__role_id`: `RoleID` - ID of the player that triggered the button,
   * @data `__current_key`: `MouseKey` - current mouse button,
   * @data `__pointing_world_pos`: `Point` - world coordinates where the mouse is pointing
   */
  readonly MOUSE_KEY_DOWN_EVENT: unique symbol;

  /**
   * Mouse Button Up
   *
   * @data `__role_id`: `RoleID` - ID of the player that triggered the button,
   * @data `__current_key`: `MouseKey` - current mouse button,
   * @data `__pointing_world_pos`: `Point` - world coordinates where the mouse is pointing
   */
  readonly MOUSE_KEY_UP_EVENT: unique symbol;

  /**
   * Mouse Button Double Click
   *
   * @data `__role_id`: `RoleID` - ID of the player that triggered the button,
   * @data `__current_key`: `MouseKey` - current mouse button,
   * @data `__pointing_world_pos`: `Point` - world coordinates where the mouse is pointing
   */
  readonly SE_KEY_DB_CLICK_EVENT: unique symbol;

  /**
   * mouse button press unit
   *
   * @data `__role_id`: `RoleID` - ID of the player that triggered the button,
   * @data `__current_key`: `MouseKey` - current mouse button,
   * @data `__unit_id`: `UnitID` - Unit ID of the current operation
   */
  readonly SE_KEY_DOWN_UNIT_EVENT: unique symbol;

  /**
   * mouse button up unit
   *
   * @data `__role_id`: `RoleID` - ID of the player that triggered the button,
   * @data `__current_key`: `MouseKey` - current mouse button,
   * @data `__unit_id`: `UnitID` - Unit ID of the current operation
   */
  readonly SE_KEY_UP_UNIT_EVENT: unique symbol;

  /**
   * Mouse Button Double Click Unit
   *
   * @data `__role_id`: `RoleID` - ID of the player that triggered the button,
   * @data `__current_key`: `MouseKey` - current mouse button,
   * @data `__unit_id`: `UnitID` - Unit ID of the current operation
   */
  readonly SE_KEY_DB_CLICK_UNIT_EVENT: unique symbol;

  /**
   * Mouse move event
   *
   * @data `__role_id`: `RoleID` - ID of the player that triggered the button,
   * @data `__pointing_world_pos`: `Point` - world coordinates where the mouse is pointing,
   * @data `__tar_x`: `Int32` - screen coordinate X where the mouse is pointing,
   * @data `__tar_y`: `Int32` - screen coordinate Y where the mouse is pointing
   */
  readonly SE_MOVE_EVENT: unique symbol;

  /**
   * Unit trigger sends event to global trigger
   *
   * @data `__event_name`: `string` - event name,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - integer 1,
   * @data `__float1`: `Fixed` - real 1,
   * @data `__bool1`: `boolean` - boolean1,
   * @data `__str1`: `string` - String1,
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly UNIT_EVENT_TO_GLOBAL: unique symbol;

  /**
   * Skill trigger sends event to global trigger
   *
   * @data `__event_name`: `string` - event name,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - integer 1,
   * @data `__float1`: `Fixed` - real 1,
   * @data `__bool1`: `boolean` - boolean1,
   * @data `__str1`: `string` - String1,
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly ABILITY_EVENT_TO_GLOBAL: unique symbol;

  /**
   * Effect trigger sends event to global trigger
   *
   * @data `__event_name`: `string` - event name,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - integer 1,
   * @data `__float1`: `Fixed` - real 1,
   * @data `__bool1`: `boolean` - boolean1,
   * @data `__str1`: `string` - String1,
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly MODIFIER_EVENT_TO_GLOBAL: unique symbol;

  /**
   * projectile trigger sends event to global trigger
   *
   * @data `__event_name`: `string` - event name,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - integer 1,
   * @data `__float1`: `Fixed` - real 1,
   * @data `__bool1`: `boolean` - boolean1,
   * @data `__str1`: `string` - String1,
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly PROJECTILE_EVENT_TO_GLOBAL: unique symbol;

  /**
   * Item trigger sends event to global trigger
   *
   * @data `__event_name`: `string` - event name,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - integer 1,
   * @data `__float1`: `Fixed` - real 1,
   * @data `__bool1`: `boolean` - boolean1,
   * @data `__str1`: `string` - String1,
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly ITEM_EVENT_TO_GLOBAL: unique symbol;

  /**
   * Player selected unit
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__unit_id`: `UnitID` - click to unit id
   */
  readonly SELECT_UNIT: unique symbol;

  /**
   * the highlighted unit controlled by the player
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__high_light_unit_id`: `HighLightUnitID` - Highlight unit id
   */
  readonly HIGH_LIGHT_UNIT_CHANGE: unique symbol;

  /**
   * Player selected item
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__item_id`: `ItemID` - Click to item id
   */
  readonly SELECT_ITEM: unique symbol;

  /**
   * Player double clicks to select item
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__item_id`: `ItemID` - double click to item id
   */
  readonly DOUBLE_CLICK_ITEM: unique symbol;

  /**
   * Player selected destructible
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__destructible_id`: `DestructibleID` - Click to destructible id
   */
  readonly SELECT_DEST: unique symbol;

  /**
   * Open the store interface
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__unit_id`: `UnitID` - Store unit ID
   */
  readonly OPEN_SHOP_PANEL: unique symbol;

  /**
   * The player double-clicks to select the destructible object
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__destructible_id`: `DestructibleID` - double click to destructible id
   */
  readonly DOUBLE_CLICK_DEST: unique symbol;

  /**
   * Player selected unit group
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__unit_group_id_list`: `UnitGroup` - Box select to unit group id list,
   * @data `__team_id`: `Int32` - Team ID
   */
  readonly SELECT_UNIT_GROUP: unique symbol;

  /**
   * Open skill indicator
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__unit_id`: `UnitID` - release unit id,
   * @data `__ability_type`: `AbilityType` - Ability Type,
   * @data `__ability_index`: `AbilityIndex` - 技能Index,
   * @data `__ability_seq`: `AbilitySeq` - 技能Seq
   */
  readonly START_SKILL_POINTER: unique symbol;

  /**
   * Turn off skill indicator
   *
   * @data `__role_id`: `RoleID` - Player ID,
   * @data `__unit_id`: `UnitID` - release unit id,
   * @data `__ability_type`: `AbilityType` - Ability Type,
   * @data `__ability_index`: `AbilityIndex` - 技能Index,
   * @data `__ability_seq`: `AbilitySeq` - 技能Seq
   */
  readonly STOP_SKILL_POINTER: unique symbol;

  /**
   * touch (mouse) start event
   *
   * @data `__touch_id`: `Int32` - touch (mouse) id,
   * @data `__pos`: `Vector2` - touch (mouse) coordinates
   */
  readonly TOUCH_BEGIN: unique symbol;

  /**
   * touch (mouse) move event
   *
   * @data `__touch_id`: `Int32` - touch (mouse) id,
   * @data `__pos`: `Vector2` - touch (mouse) coordinates
   */
  readonly TOUCH_MOVE: unique symbol;

  /**
   * touch (mouse) end event
   *
   * @data `__touch_id`: `Int32` - touch (mouse) id,
   * @data `__pos`: `Vector2` - touch (mouse) coordinates
   */
  readonly TOUCH_END: unique symbol;

  /** Bottom touch end event */
  readonly TOP_TOUCH_END: unique symbol;

  /** Rank Change Event */
  readonly K_LIST_INFO_CHANGE: unique symbol;

  /**
   * Unit gets item
   *
   * @data `__unit_id`: `UnitID` - Get the unit id of the item,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number
   */
  readonly UNIT_ADD_ITEM: unique symbol;

  /**
   * Unit adds items for the judgment of item synthesis events
   *
   * @data `__unit_id`: `UnitID` - Get the unit id of the item,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number
   */
  readonly UNIT_ADD_ITEM_FOR_COMPOSE: unique symbol;

  /**
   * Unit gets item to inventory
   *
   * @data `__unit_id`: `UnitID` - Get the unit id of the item,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number
   */
  readonly UNIT_ADD_ITEM_TO_BAR: unique symbol;

  /**
   * Unit gets item to inventory slot
   *
   * @data `__unit_id`: `UnitID` - Get the unit id of the item,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number
   */
  readonly UNIT_ADD_ITEM_TO_PKG: unique symbol;

  /**
   * unit lost item
   *
   * @data `__unit_id`: `UnitID` - The unit id that lost the item,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number
   */
  readonly UNIT_REMOVE_ITEM: unique symbol;

  /**
   * Unit item left from inventory
   *
   * @data `__unit_id`: `UnitID` - The unit id that lost the item,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number
   */
  readonly UNIT_REMOVE_ITEM_FROM_BAR: unique symbol;

  /**
   * Unit items leave the inventory slot
   *
   * @data `__unit_id`: `UnitID` - The unit id that lost the item,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number
   */
  readonly UNIT_REMOVE_ITEM_FROM_PKG: unique symbol;

  /**
   * Units use items
   *
   * @data `__unit_id`: `UnitID` - Use the unit id of this item,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number
   */
  readonly UNIT_USE_ITEM: unique symbol;

  /**
   * After the unit uses the item
   *
   * @data `__item_no`: `ItemKey` - item number
   */
  readonly UNIT_USE_ITEM_END: unique symbol;

  /**
   * when the unit starts pathfinding
   *
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly UNIT_START_NAV_EVENT: unique symbol;

  /**
   * when the unit finishes pathfinding
   *
   * @data `__unit_id`: `UnitID` - unit id
   */
  readonly UNIT_END_NAV_EVENT: unique symbol;

  /** Backpack Refresh */
  readonly UNIT_BAG_REFRESH: unique symbol;

  /**
   * Item Layer Change
   *
   * @data `__unit_id`: `ItemID` - unit id,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number,
   * @data `__delta_cnt`: `Int32` - delta value
   */
  readonly ITEM_STACK_CHANGED: unique symbol;

  /**
   * Item Charge Changes
   *
   * @data `__unit_id`: `ItemID` - unit id,
   * @data `__item_id`: `ItemID` - item id,
   * @data `__item_no`: `ItemKey` - item number,
   * @data `__delta_cnt`: `Int32` - delta value
   */
  readonly ITEM_CHARGE_CHANGED: unique symbol;

  /**
   * Item Creation
   *
   * @data `__item`: `Item` - item created
   */
  readonly ITEM_ON_CREATE: unique symbol;

  /**
   * Item Entity Destroyed
   *
   * @data `__item_unit_id`: `ItemID` - item entity id,
   * @data `__item_id`: `ItemID` - item id
   */
  readonly ITEM_ENTITY_ON_DESTROY: unique symbol;

  /**
   * Items for sale
   *
   * @data `__unit`: `Unit` - purchaser,
   * @data `__unit2`: `Unit` - Vendor,
   * @data `__item`: `Item` - item sold
   */
  readonly ITEM_SOLD: unique symbol;

  /**
   * Destruction Item
   *
   * @data `__item`: `Item` - Destroyed item,
   * @data `__unit`: `Unit` - The unit that destroys the item
   */
  readonly ITEM_BROKEN: unique symbol;

  /**
   * Item name changed
   *
   * @data `__item`: `Item` - rename object,
   * @data `__name`: `string` - changed name
   */
  readonly ITEM_NAME_CHANGED: unique symbol;

  /**
   * Destruction Item
   *
   * @data `__item`: `Item` - Change the description of the object,
   * @data `__name`: `string` - Changed description
   */
  readonly ITEM_DESC_CHANGED: unique symbol;

  /**
   * Left click A floor
   *
   * @data `__unit`: `Unit` - Specify unit,
   * @data `__tar_x`: `Fixed` - Click position X coordinate,
   * @data `__tar_y`: `Fixed` - Click position Y coordinate
   */
  readonly ATTACK_MOVE_CMD: unique symbol;

  /**
   * Items for sale
   *
   * @data `__shop_unit_id`: `UnitID` - Shop unit ID,
   * @data `__item_id`: `ItemID` - Product
   */
  readonly SELL_ITEM_CMD: unique symbol;

  /**
   * Release Skill
   *
   * @data `__unit`: `Unit` - Specify unit,
   * @data `__ability_type`: `AbilityType` - Ability Type,
   * @data `__ability_index`: `AbilityIndex` - 技能Index,
   * @data `__ability_seq`: `AbilitySeq` - 技能SEQ,
   * @data `__target_item`: `Dict` - release skill parameter
   */
  readonly AI_RELEASE_SKILL_CMD: unique symbol;

  /**
   * Patrol
   *
   * @data `__unit`: `Unit` - Specify unit,
   * @data `__tar_x`: `Fixed` - Click position X coordinate,
   * @data `__tar_y`: `Fixed` - Click position Y coordinate
   */
  readonly PATROL_CMD: unique symbol;

  /**
   * Pathfinding to location
   *
   * @data `__unit`: `Unit` - Specify unit,
   * @data `__tar_x`: `Fixed` - Click position X coordinate,
   * @data `__tar_y`: `Fixed` - Click position Y coordinate
   */
  readonly MOVE_UNIT_TO_TARGET_CMD: unique symbol;

  /** Chase frame end event */
  readonly CATCH_FRAME_FINISHED: unique symbol;

  /**
   * End of Exerciser
   *
   * @data `__mover_unit_id`: `UnitID` - Unit ID of the mover
   */
  readonly MOVER_FINISH: unique symbol;

  /**
   * Exerciser Interrupt
   *
   * @data `__mover_unit_id`: `UnitID` - Unit ID of the mover
   */
  readonly MOVER_INTERRUPT: unique symbol;

  /**
   * Exerciser Removal
   *
   * @data `__mover_unit_id`: `UnitID` - Unit ID of the mover
   */
  readonly MOVER_REMOVED: unique symbol;

  /**
   * Kinematic Unit Collision
   *
   * @data `__mover_unit_id`: `UnitID` - Unit ID of the mover,
   * @data `__collide_unit_id`: `UnitID` - collision unit ID
   */
  readonly MOVER_UNIT_COLLISION: unique symbol;

  /**
   * Kinematic Unit Collision
   *
   * @data `__mover_unit_id`: `UnitID` - Unit ID of the mover,
   * @data `__collide_unit_id`: `UnitID` - collision unit ID
   */
  readonly MOVER_UNIT_COLLISION_ENTER: unique symbol;

  /**
   * End of Kinematic Unit Collision
   *
   * @data `__mover_unit_id`: `UnitID` - Unit ID of the mover,
   * @data `__collide_unit_id`: `UnitID` - collision unit ID
   */
  readonly MOVER_UNIT_COLLISION_LEAVE: unique symbol;

  /**
   * Kinematic Terrain Collision
   *
   * @data `__mover_unit_id`: `UnitID` - Unit ID of the mover
   */
  readonly MOVER_TERRAIN_COLLISION: unique symbol;

  /**
   * Send command in chat
   *
   * @data `__str1`: `string` - instruction string,
   * @data `__role_id`: `RoleID` - player id
   */
  readonly CHAT_SEND_GM: unique symbol;

  /**
   * trigger custom event
   *
   * @data `__c_param_1`: `Int32` - custom parameter 1,
   * @data `__c_param_2`: `Int32` - custom parameter 2,
   * @data `__c_param_3`: `Int32` - custom parameter 3,
   * @data `__c_param_4`: `Int32` - custom parameter 4,
   * @data `__c_param_5`: `Int32` - custom parameter 5
   */
  readonly CUSTOM_EVENT: unique symbol;
};
