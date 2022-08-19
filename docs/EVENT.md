# Event
-----
## basic type

### `LOGIC_UNIT_DESTROY`
<span id="LOGIC_UNIT_DESTROY"></span>
##### **Name:** LOGIC_UNIT_DESTROY
##### **parameters**
none


### `TIMEOUT`
<span id="TIMEOUT"></span>
##### **name:** timer timeout
##### **parameters**
none


### `REPEAT_TIMEOUT`
<span id="REPEAT_TIMEOUT"></span>
##### **name:** Periodic timer timeout
##### **parameters**
none


### `GAME_INIT`
<span id="GAME_INIT"></span>
##### **Name:** Game initialization
##### **parameters**
none


### `LOADING_END`
<span id="LOADING_END"></span>
##### **Name:** End of Loading
##### **parameters**
none


### `RECV_TRIGGER`
<span id="RECV_TRIGGER"></span>
##### **name:** Receive trigger events
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__trigger_id` | trigger id | [`TriggerID`](../etype#TriggerID)


### `GAME_END`
<span id="GAME_END"></span>
##### **NAME:** GAME OVER
##### **parameters**
none


### `GAME_PAUSE`
<span id="GAME_PAUSE"></span>
##### **name:** game paused
##### **parameters**
none


### `GAME_RESUME`
<span id="GAME_RESUME"></span>
##### **NAME:** GAME RESTORATION
##### **parameters**
none


### `EMPTY`
<span id="EMPTY"></span>
##### **name:** empty event
##### **parameters**
none


### `ER_TIMEOUT`
<span id="ER_TIMEOUT"></span>
##### **name:** global timer timeout
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__name` | timer name | [`Str`](../etype#Str)


### `DAY_NIGHT_CHANGE`
<span id="DAY_NIGHT_CHANGE"></span>
##### **Name:** Day and night change
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__is_day_to_night` | Is it day to night | [`Bool`](../etype#Bool)


### `CONTAINER_ADDED`
<span id="CONTAINER_ADDED"></span>
##### **name:** add container
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__name` | container name | [`Str`](../etype#Str)
`__container` | container | [`ActorContainer`](../etype#ActorContainer)


### `CONTAINER_ACTOR_ADDED`
<span id="CONTAINER_ACTOR_ADDED"></span>
##### **name:** Add actor to container
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__owner` | container slave actor | [`Actor`](../etype#Actor)


### `CONTAINER_ACTOR_REMOVED`
<span id="CONTAINER_ACTOR_REMOVED"></span>
##### **name:** remove actor from container
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__owner` | original container slave actor | [`Actor`](../etype#Actor)


### `ACTOR_ATTR_UPDATED`
<span id="ACTOR_ATTR_UPDATED"></span>
##### **name:** actor property update
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__name` | attribute name | [`Str`](../etype#Str)


### `AREA_ENTER`
<span id="AREA_ENTER"></span>
##### **name:** unit entry area
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)
`__area_id` | 区域ID  | [`AreaID`](../etype#AreaID)
`__trigger_id` | trigger ID | [`TriggerID`](../etype#TriggerID)


### `AREA_LEAVE`
<span id="AREA_LEAVE"></span>
##### **Name:** Unit leaves area
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)
`__area_id` | 区域ID  | [`AreaID`](../etype#AreaID)
`__trigger_id` | trigger ID | [`TriggerID`](../etype#TriggerID)


### `ROLE_JOIN_BATTLE`
<span id="ROLE_JOIN_BATTLE"></span>
##### **Name:** Player joins battle
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `ROLE_ACTIVE_EXIT_GAME_EVENT`
<span id="ROLE_ACTIVE_EXIT_GAME_EVENT"></span>
##### **Name:** Player actively quits the game
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `ROLE_LOSE_CONNECT`
<span id="ROLE_LOSE_CONNECT"></span>
##### **name:** Player disconnected from server
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `AI_TAKE_CONTROL`
<span id="AI_TAKE_CONTROL"></span>
##### **NAME:** AI takes over the player
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `DOWNLOAD_MAP_ARCHIVE_CALLBACK`
<span id="DOWNLOAD_MAP_ARCHIVE_CALLBACK"></span>
##### **Name:** Download archive data callback
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `ROLE_USE_STORE_ITEM_END`
<span id="ROLE_USE_STORE_ITEM_END"></span>
##### **Name:** The player successfully used the paid item
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__store_key` | Charge item number | [`StoreKey`](../etype#StoreKey)
`__use_cnt` | number of uses | [`UInt32`](../etype#UInt32)


### `CONSUME_STORE_ITEM`
<span id="CONSUME_STORE_ITEM"></span>
##### **Name:** The player successfully used the paid item (in the trigger)
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__store_key` | Charge item number | [`StoreKey`](../etype#StoreKey)


### `ROLE_HOLD_STORE_ITEM`
<span id="ROLE_HOLD_STORE_ITEM"></span>
##### **Name:** Players have paid items
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__store_key` | Charge item number | [`StoreKey`](../etype#StoreKey)


### `ROLE_RESOURCE_CHANGED`
<span id="ROLE_RESOURCE_CHANGED"></span>
##### **Name:** Player resource changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__res_key` | Player resource type | [`RoleResKey`](../etype#RoleResKey)
`__res_value` | Player resource value | [`Int32`](../etype#Int32)


### `ROLE_INPUT_MSG`
<span id="ROLE_INPUT_MSG"></span>
##### **name:** player input string
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__msg` | string | [`Str`](../etype#Str)


### `ROLE_INPUT_ACTIVATION_CODE`
<span id="ROLE_INPUT_ACTIVATION_CODE"></span>
##### **Name:** Player enters activation code
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__activation_code_group` | activation code group | [`Str`](../etype#Str)


### `ROLE_TECH_UPGRADE`
<span id="ROLE_TECH_UPGRADE"></span>
##### **Name:** Player technology upgrade
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__tech_no` | tech number | [`TechKey`](../etype#TechKey)
`__curr_lv` | current tech level | [`Int32`](../etype#Int32)


### `ROLE_TECH_DOWNGRADE`
<span id="ROLE_TECH_DOWNGRADE"></span>
##### **Name:** Player Tech Downgrade
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__tech_no` | tech number | [`TechKey`](../etype#TechKey)
`__curr_lv` | current tech level | [`Int32`](../etype#Int32)


### `ROLE_TECH_CHANGED`
<span id="ROLE_TECH_CHANGED"></span>
##### **Name:** Player Tech Changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__tech_no` | tech number | [`TechKey`](../etype#TechKey)
`__tech_no` | current tech level | [`Int32`](../etype#Int32)
`__delta_lv` | Tech Change Level | [`Int32`](../etype#Int32)


### `UNIT_UPGRADE_TECH`
<span id="UNIT_UPGRADE_TECH"></span>
##### **Name:** Unit R&D Technology
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)
`__role_id` | The ID of the player the unit belongs to | [`RoleID`](../etype#RoleID)
`__tech_no` | tech number | [`TechKey`](../etype#TechKey)


### `UNIT_ADD_TECH`
<span id="UNIT_ADD_TECH"></span>
##### **Name:** Unit Add Technology
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)
`__role_id` | The ID of the player the unit belongs to | [`RoleID`](../etype#RoleID)
`__tech_no` | tech number | [`TechKey`](../etype#TechKey)


### `UNIT_REMOVE_TECH`
<span id="UNIT_REMOVE_TECH"></span>
##### **Name:** Unit Delete Technology
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)
`__role_id` | The ID of the player the unit belongs to | [`RoleID`](../etype#RoleID)
`__tech_no` | tech number | [`TechKey`](../etype#TechKey)


### `ROLE_CHANGE_RELATION`
<span id="ROLE_CHANGE_RELATION"></span>
##### **Name:** Player hostile relationship changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__src_role_id` | source player ID | [`RoleID`](../etype#RoleID)
`__dst_role_id` | target player ID | [`RoleID`](../etype#RoleID)
`__relation` | relation | [`RoleRelation`](../etype#RoleRelation)


### `ABILITY_BUILD_FINISH`
<span id="ABILITY_BUILD_FINISH"></span>
##### **Name:** Building Skills Build Successfully
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | 技能  | [`Ability`](../etype#Ability)
`__ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType)
`__ability_index` | 技能ID  | [`AbilityIndex`](../etype#AbilityIndex)
`__ability_seq` | 技能Seq  | [`AbilitySeq`](../etype#AbilitySeq)
`__unit_id` | Master | [`UnitID`](../etype#UnitID)
`__build_unit_id` | built unit ID | [`UnitID`](../etype#UnitID)


### `ATTACK_HIT_TARGET`
<span id="ATTACK_HIT_TARGET"></span>
##### **Name:** Normal Attack Hit
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_id` | skill id | [`UInt32`](../etype#UInt32)


### `ATTACK_HURT`
<span id="ATTACK_HURT"></span>
##### **Name:** Normal attack deals damage
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_id` | skill id | [`UInt32`](../etype#UInt32)
`__other_unit` | Damaged unit | [`Unit`](../etype#Unit)


### `ABILITY_CD_CHANGE`
<span id="ABILITY_CD_CHANGE"></span>
##### **Name:** Skill CD Changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_index` | skill pit | [`AbilityIndex`](../etype#AbilityIndex)
`__left` | cd remaining time | [`Fixed`](../etype#Fixed)
`__total` | total cd duration | [`Fixed`](../etype#Fixed)
`__ability_id` | 技能id  | [`AbilityKey`](../etype#AbilityKey)


### `ACTIVE_ABILITY_CHANGED`
<span id="ACTIVE_ABILITY_CHANGED"></span>
##### **Name:**
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_index` | skill pit | [`AbilityIndex`](../etype#AbilityIndex)


### `ABILITY_STACK_CHANGE`
<span id="ABILITY_STACK_CHANGE"></span>
##### **Name:** Skill Charge Changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_index` | skill pit | [`AbilityIndex`](../etype#AbilityIndex)
`__stack` | Ability charge stacks | [`Fixed`](../etype#Fixed)


### `ABILITY_PLUS_POINT`
<span id="ABILITY_PLUS_POINT"></span>
##### **Name:** Skill Points
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_index` | skill pit | [`AbilityIndex`](../etype#AbilityIndex)


### `ABILITY_STACK_CD_CHANGE`
<span id="ABILITY_STACK_CD_CHANGE"></span>
##### **Name:** Charge CD Change
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_index` | skill pit | [`AbilityIndex`](../etype#AbilityIndex)
`__left` | Recharge cd time remaining | [`Fixed`](../etype#Fixed)
`__total` | Recharge CD total duration | [`Fixed`](../etype#Fixed)


### `ABILITY_FORBIDDEN_CHANGED`
<span id="ABILITY_FORBIDDEN_CHANGED"></span>
##### **Name:**
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_index` | skill pit | [`AbilityIndex`](../etype#AbilityIndex)
`__is_forbidden` | whether to disable | [`Bool`](../etype#Bool)


### `ABILITY_SILENT_CHANGED`
<span id="ABILITY_SILENT_CHANGED"></span>
##### **Name:**
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__is_silent` | disabled | [`Bool`](../etype#Bool)


### `UNIT_NAME_CHANGE`
<span id="UNIT_NAME_CHANGE"></span>
##### **NAME:** The name of the unit has changed
##### **parameters**
none


### `ROLE_UNIT_CHANGE`
<span id="ROLE_UNIT_CHANGE"></span>
##### **Name:** Unit Changes in Faction
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_START_MOVE`
<span id="UNIT_START_MOVE"></span>
##### **name:** unit starts moving
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_END_MOVE`
<span id="UNIT_END_MOVE"></span>
##### **name:** unit end move
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_REMOVE`
<span id="UNIT_REMOVE"></span>
##### **Name:** Unit deletion (ECA only)
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_DELETE`
<span id="UNIT_DELETE"></span>
##### **name:** unit deletion (object is actually destroyed)
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `T_END_TRANSLATE`
<span id="T_END_TRANSLATE"></span>
##### **NAME:** UNITS TRANSFER END
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_ATTR_CHANGE`
<span id="UNIT_ATTR_CHANGE"></span>
##### **Name:** Unit Attribute Changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)
`__attr` | string | [`Str`](../etype#Str)


### `BEFORE_UNIT_DIE`
<span id="BEFORE_UNIT_DIE"></span>
##### **NAME:** Unit is dying
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__damage` | Damage taken | [`Fixed`](../etype#Fixed)
`__source_unit` | unit that deals damage | [`Unit`](../etype#Unit)
`__target_unit` | The unit that took damage | [`Unit`](../etype#Unit)
`__ability` | The skill of the current damage | [`Ability`](../etype#Ability)
`__damage_type` | damage type | [`Int32`](../etype#Int32)
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_DIE`
<span id="UNIT_DIE"></span>
##### **Name:** Unit Dead
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__damage` | Damage taken | [`Fixed`](../etype#Fixed)
`__source_unit` | unit that deals damage | [`Unit`](../etype#Unit)
`__target_unit` | The unit that took damage | [`Unit`](../etype#Unit)
`__ability` | The skill of the current damage | [`Ability`](../etype#Ability)
`__damage_type` | damage type | [`Int32`](../etype#Int32)
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_ON_UNBIND_ROLE`
<span id="UNIT_ON_UNBIND_ROLE"></span>
##### **Name:** Unit Unbinds Player
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `UNIT_ON_BIND_ROLE`
<span id="UNIT_ON_BIND_ROLE"></span>
##### **name:** unit bound player
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `UNIT_BE_HURT`
<span id="UNIT_BE_HURT"></span>
##### **NAME:** Unit is attacked
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__damage` | Damage taken | [`Fixed`](../etype#Fixed)
`__source_unit` | unit that deals damage | [`Unit`](../etype#Unit)
`__target_unit` | The unit that took damage | [`Unit`](../etype#Unit)
`__ability` | The skill of the current damage | [`Ability`](../etype#Ability)
`__damage_type` | damage type | [`Int32`](../etype#Int32)
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_HURT_OTHER`
<span id="UNIT_HURT_OTHER"></span>
##### **name:** unit hits other unit
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__damage` | Damage taken | [`Fixed`](../etype#Fixed)
`__source_unit` | unit that deals damage | [`Unit`](../etype#Unit)
`__target_unit` | The unit that took damage | [`Unit`](../etype#Unit)
`__ability` | The skill of the current damage | [`Ability`](../etype#Ability)
`__damage_type` | damage type | [`Int32`](../etype#Int32)
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `RES_ICON_CHANGED`
<span id="RES_ICON_CHANGED"></span>
##### **Name:** Modify player attribute icon
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__res_key` | resource | [`RoleResKey`](../etype#RoleResKey)
`__icon_id` | ICON ID  | [`Int32`](../etype#Int32)


### `UNIT_RELEASE_ABILITY`
<span id="UNIT_RELEASE_ABILITY"></span>
##### **Name:** Unit Cast Skill Event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | casted ability object | [`Ability`](../etype#Ability)
`__unit_id` | The unit unit_id that triggered the event | [`UnitID`](../etype#UnitID)


### `UNIT_RELEASE_ABILITY_START`
<span id="UNIT_RELEASE_ABILITY_START"></span>
##### **Name:** Unit cast skill start event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | casted ability object | [`Ability`](../etype#Ability)
`__unit_id` | The unit unit_id that triggered the event | [`UnitID`](../etype#UnitID)


### `UNIT_RELEASE_ABILITY_END`
<span id="UNIT_RELEASE_ABILITY_END"></span>
##### **Name:** Unit casts skill end event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | casted ability object | [`Ability`](../etype#Ability)
`__unit_id` | The unit unit_id that triggered the event | [`UnitID`](../etype#UnitID)


### `UNIT_RELEASE_MAGIC_BOOK`
<span id="UNIT_RELEASE_MAGIC_BOOK"></span>
##### **Name:** Unit Cast Skill Event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | casted ability object | [`Ability`](../etype#Ability)
`__unit_id` | The unit unit_id that triggered the event | [`UnitID`](../etype#UnitID)


### `UNIT_LEVEL_CHANGE`
<span id="UNIT_LEVEL_CHANGE"></span>
##### **Name:** Unit Skill Change Event
##### **parameters**
none


### `UNIT_EXP_CHANGE`
<span id="UNIT_EXP_CHANGE"></span>
##### **Name:** Unit XP Change Event
##### **parameters**
none


### `UNIT_PRE_ADD_EXP`
<span id="UNIT_PRE_ADD_EXP"></span>
##### **NAME:** Unit is about to gain experience
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | The unit that gained experience | [`UnitID`](../etype#UnitID)
`__add_exp` | Added experience | [`Float`](../etype#Float)


### `UNIT_ON_ADD_EXP`
<span id="UNIT_ON_ADD_EXP"></span>
##### **Name:** Units gain experience
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | The unit that gained experience | [`UnitID`](../etype#UnitID)
`__add_exp` | Added experience | [`Float`](../etype#Float)


### `UNIT_ON_COMMAND`
<span id="UNIT_ON_COMMAND"></span>
##### **Name:** Unit receives command
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit | [`UnitID`](../etype#UnitID)
`__cmd_type` | Command received | [`UnitCommand`](../etype#UnitCommand)
`__target_unit` | target unit | [`Unit`](../etype#Unit)
`__point` | target point | [`Point`](../etype#Point)
`__destructible_id` | target destructible ID | [`DestructibleID`](../etype#DestructibleID)
`__item_id` | target item ID | [`ItemID`](../etype#ItemID)


### `KILL_UNIT`
<span id="KILL_UNIT"></span>
##### **Name:** Unit kills other units
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__damage` | damage value | [`Fixed`](../etype#Fixed)
`__source_unit` | killer unit | [`Unit`](../etype#Unit)
`__target_unit` | death unit | [`Unit`](../etype#Unit)
`__ability` | Critical damage attribute | [`Ability`](../etype#Ability)
`__damage_type` | fatal damage type | [`Int32`](../etype#Int32)
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `ASSIST`
<span id="ASSIST"></span>
##### **Name:** Unit Assist Event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__damage` | damage value | [`Fixed`](../etype#Fixed)
`__source_unit` | killer unit | [`Unit`](../etype#Unit)
`__target_unit` | death unit | [`Unit`](../etype#Unit)
`__ability` | Critical damage attribute | [`Ability`](../etype#Ability)
`__damage_type` | fatal damage type | [`Int32`](../etype#Int32)
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_BORN`
<span id="UNIT_BORN"></span>
##### **Name:** Unit Birth
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_ENTER_BATTLE`
<span id="UNIT_ENTER_BATTLE"></span>
##### **Name:** Unit enters combat state
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `UNIT_EXIT_BATTLE`
<span id="UNIT_EXIT_BATTLE"></span>
##### **NAME:** Unit out of combat
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `UNIT_CREATE_SLAVE`
<span id="UNIT_CREATE_SLAVE"></span>
##### **Name:** Unit Creation Minion
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | minion id | [`UnitID`](../etype#UnitID)


### `ITEM_ATTACHED_ATTR_CHANGED`
<span id="ITEM_ATTACHED_ATTR_CHANGED"></span>
##### **Name:** Item Additional Attribute Changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__item_id` | Item ID | [`ItemID`](../etype#ItemID)
`__attr_key` | string | [`Str`](../etype#Str)
`__delta` | fixed number | [`Fixed`](../etype#Fixed)


### `UNIT_SHOP_BUY_ITEM`
<span id="UNIT_SHOP_BUY_ITEM"></span>
##### **Name:** Product Purchase
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Purchase item unit id | [`UnitID`](../etype#UnitID)
`__shop_unit_id` | shop unit id | [`UnitID`](../etype#UnitID)
`__tab_idx` | store tab | [`Int32`](../etype#Int32)
`__cnt` | Item quantity | [`UInt32`](../etype#UInt32)
`__item_stuff_id` | Item id | [`ItemID`](../etype#ItemID)


### `UNIT_SHOP_BUY_UNIT`
<span id="UNIT_SHOP_BUY_UNIT"></span>
##### **Name:** Product Purchase
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Purchase item unit id | [`UnitID`](../etype#UnitID)
`__shop_unit_id` | shop unit id | [`UnitID`](../etype#UnitID)
`__tab_idx` | store tab | [`Int32`](../etype#Int32)
`__cnt` | Item quantity | [`UInt32`](../etype#UInt32)
`__unit_stuff_id` | item unit id | [`UnitID`](../etype#UnitID)


### `UNIT_ITEM_SELL`
<span id="UNIT_ITEM_SELL"></span>
##### **Name:** Items for Sale
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Purchase item unit id | [`UnitID`](../etype#UnitID)
`__shop_unit_id` | shop unit id | [`UnitID`](../etype#UnitID)
`__item_id` | tool id | [`ItemID`](../etype#ItemID)


### `SHOP_ITEM_CHANGED`
<span id="SHOP_ITEM_CHANGED"></span>
##### **Name:** Store Item Changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__shop_unit_id` | shop unit id | [`UnitID`](../etype#UnitID)
`__tab_idx` | store tab | [`Int32`](../etype#Int32)
`__shop_key` | product id | [`Str`](../etype#Str)
`__curr_stock` | current stock | [`Int32`](../etype#Int32)


### `SHOP_STOCK_CHANGED`
<span id="SHOP_STOCK_CHANGED"></span>
##### **Name:** Product Inventory Change
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__shop_unit_id` | shop unit id | [`UnitID`](../etype#UnitID)
`__tab_idx` | store tab | [`Int32`](../etype#Int32)
`__shop_key` | product id | [`Str`](../etype#Str)
`__curr_stock` | current stock | [`Int32`](../etype#Int32)


### `SHOP_RES_COST_CHANGED`
<span id="SHOP_RES_COST_CHANGED"></span>
##### **Name:** Product Price Change
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__shop_unit_id` | shop unit id | [`UnitID`](../etype#UnitID)
`__tab_idx` | store tab | [`Int32`](../etype#Int32)
`__shop_key` | product id | [`Str`](../etype#Str)
`__res_type` | resource number | [`RoleResKey`](../etype#RoleResKey)
`__res_cost` | current selling price | [`Int32`](../etype#Int32)


### `UNIT_ITEM_COMPOSE`
<span id="UNIT_ITEM_COMPOSE"></span>
##### **name:** Prop synthesis event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)
`__compose_id` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_SHOP_BUY_WITH_COMPOSE`
<span id="UNIT_SHOP_BUY_WITH_COMPOSE"></span>
##### **Name:** Commodity synthesis purchase
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Purchase item unit id | [`UnitID`](../etype#UnitID)
`__shop_unit_id` | shop unit id | [`UnitID`](../etype#UnitID)
`__item_id` | item number | [`ItemID`](../etype#ItemID)


### `REVIVE_UNIT`
<span id="REVIVE_UNIT"></span>
##### **NAME:** Unit Respawn
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UPGRADE_UNIT`
<span id="UPGRADE_UNIT"></span>
##### **NAME:** UNIT UPGRADE
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `REACH_MOVE_TARGET_UNIT`
<span id="REACH_MOVE_TARGET_UNIT"></span>
##### **Name:** Unit Movement Goal Achieved
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `COLLIDE_OBSTACLE_UNIT`
<span id="COLLIDE_OBSTACLE_UNIT"></span>
##### **name:** Unit collided with obstacle
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_ENTER_GRASS`
<span id="UNIT_ENTER_GRASS"></span>
##### **Name:** Unit enters the grass
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `UNIT_LEAVE_GRASS`
<span id="UNIT_LEAVE_GRASS"></span>
##### **NAME:** Unit leaves the grass
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `MAP_VISIBILITY_CHANGE`
<span id="MAP_VISIBILITY_CHANGE"></span>
##### **Name:** Map visibility changed due to trigger
##### **parameters**
none


### `UNIT_PRECONDITION_SUCCEED`
<span id="UNIT_PRECONDITION_SUCCEED"></span>
##### **Name:** The prerequisites for the unit type meet the requirements
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`unit_key` | unit type | [`UnitKey`](../etype#UnitKey)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `UNIT_PRECONDITION_FAILED`
<span id="UNIT_PRECONDITION_FAILED"></span>
##### **Name:** Preconditions for unit type are not met
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`unit_key` | unit type | [`UnitKey`](../etype#UnitKey)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `ITEM_PRECONDITION_SUCCEED`
<span id="ITEM_PRECONDITION_SUCCEED"></span>
##### **Name:** The prerequisites for the item type meet the requirements
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__item_no` | item type | [`ItemKey`](../etype#ItemKey)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `ITEM_PRECONDITION_FAILED`
<span id="ITEM_PRECONDITION_FAILED"></span>
##### **Name:** The prerequisites for the item type do not meet the requirements
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__item_no` | item type | [`ItemKey`](../etype#ItemKey)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `ABILITY_PRECONDITION_SUCCEED`
<span id="ABILITY_PRECONDITION_SUCCEED"></span>
##### **Name:** The prerequisites of the skill type meet the requirements
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_id` | Ability Type | [`AbilityKey`](../etype#AbilityKey)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `ABILITY_PRECONDITION_FAILED`
<span id="ABILITY_PRECONDITION_FAILED"></span>
##### **Name:** The prerequisites for the skill type do not meet the requirements
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability_id` | Ability Type | [`AbilityKey`](../etype#AbilityKey)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `TECH_PRECONDITION_SUCCEED`
<span id="TECH_PRECONDITION_SUCCEED"></span>
##### **Name:** The prerequisites of the technology type meet the requirements
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__tech_no` | tech type | [`TechKey`](../etype#TechKey)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `TECH_PRECONDITION_FAILED`
<span id="TECH_PRECONDITION_FAILED"></span>
##### **Name:** The prerequisites for the technology type do not meet the requirements
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__tech_no` | tech type | [`TechKey`](../etype#TechKey)
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)


### `ABILITY_UPGRADE`
<span id="ABILITY_UPGRADE"></span>
##### **Name:** Skill Upgrade
##### **parameters**
none


### `ABILITY_CS_START`
<span id="ABILITY_CS_START"></span>
##### **name:** skill starts casting
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_CS_END`
<span id="ABILITY_CS_END"></span>
##### **Name:** Skill Starts Casting Ends
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_PS_START`
<span id="ABILITY_PS_START"></span>
##### **Name:** Skill front shake starts
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_PS_END`
<span id="ABILITY_PS_END"></span>
##### **Name:** Skill pre-shake ends
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ITEM_ABILITY_PS_END`
<span id="ITEM_ABILITY_PS_END"></span>
##### **Name:** Item skill front shake ends
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_SP_END`
<span id="ABILITY_SP_END"></span>
##### **Name:** Skill preparation is over
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_CST_END`
<span id="ABILITY_CST_END"></span>
##### **Name:** Skill Channeling Ends
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_BS_END`
<span id="ABILITY_BS_END"></span>
##### **Name:** Skill post-shake ends
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_CS_INTERRUPT`
<span id="ABILITY_CS_INTERRUPT"></span>
##### **Name:** Skill preparation phase was interrupted
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_PS_INTERRUPT`
<span id="ABILITY_PS_INTERRUPT"></span>
##### **Name:** Skill forward swing phase is interrupted
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_SP_INTERRUPT`
<span id="ABILITY_SP_INTERRUPT"></span>
##### **Name:** Skill preparation phase was interrupted
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_CST_INTERRUPT`
<span id="ABILITY_CST_INTERRUPT"></span>
##### **NAME:** Skill channeling phase is interrupted
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_BS_INTERRUPT`
<span id="ABILITY_BS_INTERRUPT"></span>
##### **Name:** Skill post-shake phase is interrupted
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_END`
<span id="ABILITY_END"></span>
##### **NAME:** END OF SKILL (WHATEVER)
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_OBTAIN`
<span id="ABILITY_OBTAIN"></span>
##### **NAME:** GET SKILLS
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_LOSE`
<span id="ABILITY_LOSE"></span>
##### **Name:** Lost Skill
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_SWITCH`
<span id="ABILITY_SWITCH"></span>
##### **Name:** Swap Skills
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_DISABLE`
<span id="ABILITY_DISABLE"></span>
##### **Name:** Skill Disabled
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_ENABLE`
<span id="ABILITY_ENABLE"></span>
##### **Name:** Skill Enable
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_ATTR_CHANGED`
<span id="ABILITY_ATTR_CHANGED"></span>
##### **Name:** Skill attribute changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__ability` | skill object | [`Ability`](../etype#Ability)


### `ABILITY_CD_END`
<span id="ABILITY_CD_END"></span>
##### **Name:** Skill Cooldown Event
##### **parameters**
none


### `OBTAIN_MODIFIER`
<span id="OBTAIN_MODIFIER"></span>
##### **name:** get effect
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__modifier` | Triggered magic effect | [`ModifierEntity`](../etype#ModifierEntity)
`__owner_unit` | effect carrier | [`Unit`](../etype#Unit)
`__from_unit_id` | effect applied by | [`Unit`](../etype#Unit)


### `LOSS_MODIFIER`
<span id="LOSS_MODIFIER"></span>
##### **Name:** Lost effect
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__modifier` | Triggered magic effect | [`ModifierEntity`](../etype#ModifierEntity)
`__owner_unit` | effect carrier | [`Unit`](../etype#Unit)
`__from_unit_id` | effect applied by | [`Unit`](../etype#Unit)


### `MODIFIER_CYCLE_TRIGGER`
<span id="MODIFIER_CYCLE_TRIGGER"></span>
##### **name:** Loop trigger event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__modifier` | Triggered magic effect | [`ModifierEntity`](../etype#ModifierEntity)
`__owner_unit` | effect carrier | [`Unit`](../etype#Unit)
`__from_unit_id` | effect applied by | [`Unit`](../etype#Unit)


### `MODIFIER_UPDATE_TIMER`
<span id="MODIFIER_UPDATE_TIMER"></span>
##### **NAME:** BUFF UPDATE EVENT
##### **parameters**
none


### `MODIFIER_LAYER_CHANGE`
<span id="MODIFIER_LAYER_CHANGE"></span>
##### **Name:** Effect layer change event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__modifier` | Triggered magic effect | [`ModifierEntity`](../etype#ModifierEntity)
`__owner_unit` | effect carrier | [`Unit`](../etype#Unit)
`__layer_change_values` | Layer change values ​​| [`Int32`](../etype#Int32)
`__from_unit_id` | effect applied by | [`Unit`](../etype#Unit)


### `MODIFIER_GET_BEFORE_CREATE`
<span id="MODIFIER_GET_BEFORE_CREATE"></span>
##### **Name:** Magic effect is about to get event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__modifier` | Triggered magic effect | [`ModifierEntity`](../etype#ModifierEntity)
`__owner_unit` | effect carrier | [`Unit`](../etype#Unit)
`__from_unit_id` | effect applied by | [`Unit`](../etype#Unit)


### `MODIFIER_BE_COVERED`
<span id="MODIFIER_BE_COVERED"></span>
##### **name:** Magic effect is overridden event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__owner_unit` | effect carrier | [`Unit`](../etype#Unit)
`__old_modifier` | Existing magic effect | [`ModifierEntity`](../etype#ModifierEntity)
`__new_modifier` | New magic effect | [`ModifierEntity`](../etype#ModifierEntity)


### `MODIFIER_ATTR_CHANGE`
<span id="MODIFIER_ATTR_CHANGE"></span>
##### **name:** Magic effect attribute change event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__modifier` | magic effect | [`ModifierEntity`](../etype#ModifierEntity)


### `SOURCE_NUMS_CHANGE`
<span id="SOURCE_NUMS_CHANGE"></span>
##### **Name:** The number of destructible resources has changed
##### **parameters**
none


### `NAME_CHANGE`
<span id="NAME_CHANGE"></span>
##### **name:** The name of the destructible has changed
##### **parameters**
none


### `SOURCE_NAME_CHANGE`
<span id="SOURCE_NAME_CHANGE"></span>
##### **name:** Destructible resource name changed
##### **parameters**
none


### `DEST_DIE`
<span id="DEST_DIE"></span>
##### **Name:** Destructible dies
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__destructible_id` | dead destructible | [`DestructibleID`](../etype#DestructibleID)
`__unit_for_dest` | killer unit | [`Unit`](../etype#Unit)


### `DEST_SOURCE_DRY`
<span id="DEST_SOURCE_DRY"></span>
##### **Name:** Destructibles are collected and depleted
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__destructible_id` | Destructibles that are exhausted | [`DestructibleID`](../etype#DestructibleID)
`__unit_for_dest` | collected units | [`Unit`](../etype#Unit)


### `DEST_ATTACKED`
<span id="DEST_ATTACKED"></span>
##### **Name:** Destructibles are attacked
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__destructible_id` | Destructible attacked | [`DestructibleID`](../etype#DestructibleID)
`__unit_for_dest` | attacking unit | [`Unit`](../etype#Unit)


### `DEST_COLLECTED`
<span id="DEST_COLLECTED"></span>
##### **Name:** Destructibles are collected
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__destructible_id` | Destructibles collected | [`DestructibleID`](../etype#DestructibleID)
`__unit_for_dest` | collected units | [`Unit`](../etype#Unit)


### `DEST_AREA_DIE`
<span id="DEST_AREA_DIE"></span>
##### **NAME:** Destructibles in the area die
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__area` | The area where destructibles die | [`Area`](../etype#Area)
`__destructible_id` | dead destructible | [`DestructibleID`](../etype#DestructibleID)
`__unit_for_dest` | killer unit | [`Unit`](../etype#Unit)


### `DEST_AREA_DRY`
<span id="DEST_AREA_DRY"></span>
##### **Name:** Destructibles in the area are collected and exhausted
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__area` | The area where destructibles are collected and depleted | [`Area`](../etype#Area)
`__destructible_id` | Destructibles that are exhausted | [`DestructibleID`](../etype#DestructibleID)
`__unit_for_dest` | collection unit | [`Unit`](../etype#Unit)


### `DEST_AREA_ATTACKED`
<span id="DEST_AREA_ATTACKED"></span>
##### **Name:** Destructibles in the area are attacked
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__area` | The area where the destructible is attacked | [`Area`](../etype#Area)
`__destructible_id` | Destructible attacked | [`DestructibleID`](../etype#DestructibleID)
`__unit_for_dest` | Attack unit | [`Unit`](../etype#Unit)


### `DEST_AREA_COLLECTED`
<span id="DEST_AREA_COLLECTED"></span>
##### **Name:** Destructibles in the area are collected
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__area` | The area where destructibles are collected | [`Area`](../etype#Area)
`__destructible_id` | Destructibles collected | [`DestructibleID`](../etype#DestructibleID)
`__unit_for_dest` | collection unit | [`Unit`](../etype#Unit)


### `PRODUCE_PROJECTILE`
<span id="PRODUCE_PROJECTILE"></span>
##### **name:** projectile spawn
##### **parameters**
none


### `DEATH_PROJECTILE`
<span id="DEATH_PROJECTILE"></span>
##### **NAME:** Projectile Death
##### **parameters**
none


### `START_MOVE_PROJECTILE`
<span id="START_MOVE_PROJECTILE"></span>
##### **NAME:** Projectile movement started
##### **parameters**
none


### `REACH_MOVE_TARGET_PROJECTILE`
<span id="REACH_MOVE_TARGET_PROJECTILE"></span>
##### **Name:** Projectile Movement Target Achieved
##### **parameters**
none


### `COLLIDE_OBSTACLE_PROJECTILE`
<span id="COLLIDE_OBSTACLE_PROJECTILE"></span>
##### **name:** Projectile collided with barrier
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Unit ID | [`UnitID`](../etype#UnitID)


### `UNIT_PRODUCE_PROJECTILE`
<span id="UNIT_PRODUCE_PROJECTILE"></span>
##### **name:** Create projectiles for units
##### **parameters**
none


### `TRIGGER_COMPONENT_EVENT`
<span id="TRIGGER_COMPONENT_EVENT"></span>
##### **name:** ui editor event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__ui_event_name` | ui event variable name | [`Str`](../etype#Str)
`__comp_name` | trigger event control name | [`Str`](../etype#Str)
`__pos` | Touch coordinates | [`Vector2`](../etype#Vector2)
`__touch_id` | Touch ID | [`Int32`](../etype#Int32)


### `GLOBAL_EVENT_TO_UI_WITH_DICT`
<span id="GLOBAL_EVENT_TO_UI_WITH_DICT"></span>
##### **name:** global trigger to send ui event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__event_name` | ui event name | [`Str`](../etype#Str)
`__args` | arguments | [`Dict`](../etype#Dict)


### `KEYBOARD_KEY_DOWN_EVENT`
<span id="KEYBOARD_KEY_DOWN_EVENT"></span>
##### **Name:** Keyboard key pressed
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | ID of the player that triggered the button | [`RoleID`](../etype#RoleID)
`__current_key` | current keyboard key | [`KeyboardKey`](../etype#KeyboardKey)


### `KEYBOARD_KEY_UP_EVENT`
<span id="KEYBOARD_KEY_UP_EVENT"></span>
##### **Name:** Keyboard key up
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | ID of the player that triggered the button | [`RoleID`](../etype#RoleID)
`__current_key` | current keyboard key | [`KeyboardKey`](../etype#KeyboardKey)


### `MOUSE_KEY_DOWN_EVENT`
<span id="MOUSE_KEY_DOWN_EVENT"></span>
##### **name:** mouse button pressed
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | ID of the player that triggered the button | [`RoleID`](../etype#RoleID)
`__current_key` | current mouse button | [`MouseKey`](../etype#MouseKey)
`__pointing_world_pos` | world coordinates where the mouse is pointing | [`Point`](../etype#Point)


### `MOUSE_KEY_UP_EVENT`
<span id="MOUSE_KEY_UP_EVENT"></span>
##### **Name:** Mouse Button Up
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | ID of the player that triggered the button | [`RoleID`](../etype#RoleID)
`__current_key` | current mouse button | [`MouseKey`](../etype#MouseKey)
`__pointing_world_pos` | world coordinates where the mouse is pointing | [`Point`](../etype#Point)


### `SE_KEY_DB_CLICK_EVENT`
<span id="SE_KEY_DB_CLICK_EVENT"></span>
##### **Name:** Mouse Button Double Click
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | ID of the player that triggered the button | [`RoleID`](../etype#RoleID)
`__current_key` | current mouse button | [`MouseKey`](../etype#MouseKey)
`__pointing_world_pos` | world coordinates where the mouse is pointing | [`Point`](../etype#Point)


### `SE_KEY_DOWN_UNIT_EVENT`
<span id="SE_KEY_DOWN_UNIT_EVENT"></span>
##### **name:** mouse button press unit
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | ID of the player that triggered the button | [`RoleID`](../etype#RoleID)
`__current_key` | current mouse button | [`MouseKey`](../etype#MouseKey)
`__unit_id` | Unit ID of the current operation | [`UnitID`](../etype#UnitID)


### `SE_KEY_UP_UNIT_EVENT`
<span id="SE_KEY_UP_UNIT_EVENT"></span>
##### **name:** mouse button up unit
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | ID of the player that triggered the button | [`RoleID`](../etype#RoleID)
`__current_key` | current mouse button | [`MouseKey`](../etype#MouseKey)
`__unit_id` | Unit ID of the current operation | [`UnitID`](../etype#UnitID)


### `SE_KEY_DB_CLICK_UNIT_EVENT`
<span id="SE_KEY_DB_CLICK_UNIT_EVENT"></span>
##### **Name:** Mouse Button Double Click Unit
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | ID of the player that triggered the button | [`RoleID`](../etype#RoleID)
`__current_key` | current mouse button | [`MouseKey`](../etype#MouseKey)
`__unit_id` | Unit ID of the current operation | [`UnitID`](../etype#UnitID)


### `SE_MOVE_EVENT`
<span id="SE_MOVE_EVENT"></span>
##### **name:** Mouse move event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | ID of the player that triggered the button | [`RoleID`](../etype#RoleID)
`__pointing_world_pos` | world coordinates where the mouse is pointing | [`Point`](../etype#Point)
`__tar_x` | screen coordinate X where the mouse is pointing | [`Int32`](../etype#Int32)
`__tar_y` | screen coordinate Y where the mouse is pointing | [`Int32`](../etype#Int32)


### `UNIT_EVENT_TO_GLOBAL`
<span id="UNIT_EVENT_TO_GLOBAL"></span>
##### **name:** Unit trigger sends event to global trigger
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__event_name` | event name | [`Str`](../etype#Str)
`__point` | 点  | [`Point`](../etype#Point)
`__int1` | integer 1 | [`Int32`](../etype#Int32)
`__float1` | real 1 | [`Fixed`](../etype#Fixed)
`__bool1` | boolean1 | ​​[`Bool`](../etype#Bool)
`__str1` | String1 | [`Str`](../etype#Str)
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `ABILITY_EVENT_TO_GLOBAL`
<span id="ABILITY_EVENT_TO_GLOBAL"></span>
##### **name:** Skill trigger sends event to global trigger
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__event_name` | event name | [`Str`](../etype#Str)
`__point` | 点  | [`Point`](../etype#Point)
`__int1` | integer 1 | [`Int32`](../etype#Int32)
`__float1` | real 1 | [`Fixed`](../etype#Fixed)
`__bool1` | boolean1 | ​​[`Bool`](../etype#Bool)
`__str1` | String1 | [`Str`](../etype#Str)
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `MODIFIER_EVENT_TO_GLOBAL`
<span id="MODIFIER_EVENT_TO_GLOBAL"></span>
##### **name:** Effect trigger sends event to global trigger
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__event_name` | event name | [`Str`](../etype#Str)
`__point` | 点  | [`Point`](../etype#Point)
`__int1` | integer 1 | [`Int32`](../etype#Int32)
`__float1` | real 1 | [`Fixed`](../etype#Fixed)
`__bool1` | boolean1 | ​​[`Bool`](../etype#Bool)
`__str1` | String1 | [`Str`](../etype#Str)
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `PROJECTILE_EVENT_TO_GLOBAL`
<span id="PROJECTILE_EVENT_TO_GLOBAL"></span>
##### **name:** projectile trigger sends event to global trigger
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__event_name` | event name | [`Str`](../etype#Str)
`__point` | 点  | [`Point`](../etype#Point)
`__int1` | integer 1 | [`Int32`](../etype#Int32)
`__float1` | real 1 | [`Fixed`](../etype#Fixed)
`__bool1` | boolean1 | ​​[`Bool`](../etype#Bool)
`__str1` | String1 | [`Str`](../etype#Str)
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `ITEM_EVENT_TO_GLOBAL`
<span id="ITEM_EVENT_TO_GLOBAL"></span>
##### **name:** Item trigger sends event to global trigger
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__event_name` | event name | [`Str`](../etype#Str)
`__point` | 点  | [`Point`](../etype#Point)
`__int1` | integer 1 | [`Int32`](../etype#Int32)
`__float1` | real 1 | [`Fixed`](../etype#Fixed)
`__bool1` | boolean1 | ​​[`Bool`](../etype#Bool)
`__str1` | String1 | [`Str`](../etype#Str)
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `SELECT_UNIT`
<span id="SELECT_UNIT"></span>
##### **Name:** Player selected unit
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__unit_id` | click to unit id | [`UnitID`](../etype#UnitID)


### `HIGH_LIGHT_UNIT_CHANGE`
<span id="HIGH_LIGHT_UNIT_CHANGE"></span>
##### **name:** the highlighted unit controlled by the player
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__high_light_unit_id` | Highlight unit id | [`HighLightUnitID`](../etype#HighLightUnitID)


### `SELECT_ITEM`
<span id="SELECT_ITEM"></span>
##### **Name:** Player selected item
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__item_id` | Click to item id | [`ItemID`](../etype#ItemID)


### `DOUBLE_CLICK_ITEM`
<span id="DOUBLE_CLICK_ITEM"></span>
##### **Name:** Player double clicks to select item
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__item_id` | double click to item id | [`ItemID`](../etype#ItemID)


### `SELECT_DEST`
<span id="SELECT_DEST"></span>
##### **Name:** Player selected destructible
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__destructible_id` | Click to destructible id | [`DestructibleID`](../etype#DestructibleID)


### `OPEN_SHOP_PANEL`
<span id="OPEN_SHOP_PANEL"></span>
##### **Name:** Open the store interface
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__unit_id` | Store unit ID | [`UnitID`](../etype#UnitID)


### `DOUBLE_CLICK_DEST`
<span id="DOUBLE_CLICK_DEST"></span>
##### **Name:** The player double-clicks to select the destructible object
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__destructible_id` | double click to destructible id | [`DestructibleID`](../etype#DestructibleID)


### `SELECT_UNIT_GROUP`
<span id="SELECT_UNIT_GROUP"></span>
##### **Name:** Player selected unit group
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__unit_group_id_list` | Box select to unit group id list | [`UnitGroup`](../etype#UnitGroup)
`__team_id` | Team ID | [`Int32`](../etype#Int32)


### `START_SKILL_POINTER`
<span id="START_SKILL_POINTER"></span>
##### **name:** Open skill indicator
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__unit_id` | release unit id | [`UnitID`](../etype#UnitID)
`__ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType)
`__ability_index` | 技能Index  | [`AbilityIndex`](../etype#AbilityIndex)
`__ability_seq` | 技能Seq  | [`AbilitySeq`](../etype#AbilitySeq)


### `STOP_SKILL_POINTER`
<span id="STOP_SKILL_POINTER"></span>
##### **name:** Turn off skill indicator
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__role_id` | Player ID | [`RoleID`](../etype#RoleID)
`__unit_id` | release unit id | [`UnitID`](../etype#UnitID)
`__ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType)
`__ability_index` | 技能Index  | [`AbilityIndex`](../etype#AbilityIndex)
`__ability_seq` | 技能Seq  | [`AbilitySeq`](../etype#AbilitySeq)


### `TOUCH_BEGIN`
<span id="TOUCH_BEGIN"></span>
##### **name:** touch (mouse) start event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__touch_id` | touch (mouse) id | [`Int32`](../etype#Int32)
`__pos` | touch (mouse) coordinates | [`Vector2`](../etype#Vector2)


### `TOUCH_MOVE`
<span id="TOUCH_MOVE"></span>
##### **name:** touch (mouse) move event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__touch_id` | touch (mouse) id | [`Int32`](../etype#Int32)
`__pos` | touch (mouse) coordinates | [`Vector2`](../etype#Vector2)


### `TOUCH_END`
<span id="TOUCH_END"></span>
##### **name:** touch (mouse) end event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__touch_id` | touch (mouse) id | [`Int32`](../etype#Int32)
`__pos` | touch (mouse) coordinates | [`Vector2`](../etype#Vector2)


### `TOP_TOUCH_END`
<span id="TOP_TOUCH_END"></span>
##### **name:** Bottom touch end event
##### **parameters**
none


### `K_LIST_INFO_CHANGE`
<span id="K_LIST_INFO_CHANGE"></span>
##### **Name:** Rank Change Event
##### **parameters**
none


### `UNIT_ADD_ITEM`
<span id="UNIT_ADD_ITEM"></span>
##### **Name:** Unit gets item
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Get the unit id of the item | [`UnitID`](../etype#UnitID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_ADD_ITEM_FOR_COMPOSE`
<span id="UNIT_ADD_ITEM_FOR_COMPOSE"></span>
##### **Name:** Unit adds items for the judgment of item synthesis events
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Get the unit id of the item | [`UnitID`](../etype#UnitID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_ADD_ITEM_TO_BAR`
<span id="UNIT_ADD_ITEM_TO_BAR"></span>
##### **Name:** Unit gets item to inventory
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Get the unit id of the item | [`UnitID`](../etype#UnitID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_ADD_ITEM_TO_PKG`
<span id="UNIT_ADD_ITEM_TO_PKG"></span>
##### **Name:** Unit gets item to inventory slot
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Get the unit id of the item | [`UnitID`](../etype#UnitID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_REMOVE_ITEM`
<span id="UNIT_REMOVE_ITEM"></span>
##### **name:** unit lost item
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | The unit id that lost the item | [`UnitID`](../etype#UnitID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_REMOVE_ITEM_FROM_BAR`
<span id="UNIT_REMOVE_ITEM_FROM_BAR"></span>
##### **name:** Unit item left from inventory
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | The unit id that lost the item | [`UnitID`](../etype#UnitID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_REMOVE_ITEM_FROM_PKG`
<span id="UNIT_REMOVE_ITEM_FROM_PKG"></span>
##### **Name:** Unit items leave the inventory slot
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | The unit id that lost the item | [`UnitID`](../etype#UnitID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_USE_ITEM`
<span id="UNIT_USE_ITEM"></span>
##### **Name:** Units use items
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | Use the unit id of this item | [`UnitID`](../etype#UnitID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_USE_ITEM_END`
<span id="UNIT_USE_ITEM_END"></span>
##### **Name:** After the unit uses the item
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)


### `UNIT_START_NAV_EVENT`
<span id="UNIT_START_NAV_EVENT"></span>
##### **name:** when the unit starts pathfinding
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `UNIT_END_NAV_EVENT`
<span id="UNIT_END_NAV_EVENT"></span>
##### **name:** when the unit finishes pathfinding
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit id | [`UnitID`](../etype#UnitID)


### `UNIT_BAG_REFRESH`
<span id="UNIT_BAG_REFRESH"></span>
##### **Name:** Backpack Refresh
##### **parameters**
none


### `ITEM_STACK_CHANGED`
<span id="ITEM_STACK_CHANGED"></span>
##### **Name:** Item Layer Change
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit id | [`ItemID`](../etype#ItemID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)
`__delta_cnt` | delta value | [`Int32`](../etype#Int32)


### `ITEM_CHARGE_CHANGED`
<span id="ITEM_CHARGE_CHANGED"></span>
##### **Name:** Item Charge Changes
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit_id` | unit id | [`ItemID`](../etype#ItemID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)
`__item_no` | item number | [`ItemKey`](../etype#ItemKey)
`__delta_cnt` | delta value | [`Int32`](../etype#Int32)


### `ITEM_ON_CREATE`
<span id="ITEM_ON_CREATE"></span>
##### **name:** Item Creation
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__item` | item created | [`Item`](../etype#Item)


### `ITEM_ENTITY_ON_DESTROY`
<span id="ITEM_ENTITY_ON_DESTROY"></span>
##### **Name:** Item Entity Destroyed
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__item_unit_id` | item entity id | [`ItemID`](../etype#ItemID)
`__item_id` | item id | [`ItemID`](../etype#ItemID)


### `ITEM_SOLD`
<span id="ITEM_SOLD"></span>
##### **Name:** Items for sale
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit` | purchaser | [`Unit`](../etype#Unit)
`__unit2` | Vendor | [`Unit`](../etype#Unit)
`__item` | item sold | [`Item`](../etype#Item)


### `ITEM_BROKEN`
<span id="ITEM_BROKEN"></span>
##### **Name:** Destruction Item
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__item` | Destroyed item | [`Item`](../etype#Item)
`__unit` | The unit that destroys the item | [`Unit`](../etype#Unit)


### `ITEM_NAME_CHANGED`
<span id="ITEM_NAME_CHANGED"></span>
##### **Name:** Item name changed
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__item` | rename object | [`Item`](../etype#Item)
`__name` | changed name | [`Str`](../etype#Str)


### `ITEM_DESC_CHANGED`
<span id="ITEM_DESC_CHANGED"></span>
##### **Name:** Destruction Item
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__item` | Change the description of the object | [`Item`](../etype#Item)
`__name` | Changed description | [`Str`](../etype#Str)


### `ATTACK_MOVE_CMD`
<span id="ATTACK_MOVE_CMD"></span>
##### **Name:** Left click A floor
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit` | Specify unit | [`Unit`](../etype#Unit)
`__tar_x` | Click position X coordinate | [`Fixed`](../etype#Fixed)
`__tar_y` | Click position Y coordinate | [`Fixed`](../etype#Fixed)


### `SELL_ITEM_CMD`
<span id="SELL_ITEM_CMD"></span>
##### **Name:** Items for sale
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__shop_unit_id` | Shop unit ID | [`UnitID`](../etype#UnitID)
`__item_id` | Product | [`ItemID`](../etype#ItemID)


### `AI_RELEASE_SKILL_CMD`
<span id="AI_RELEASE_SKILL_CMD"></span>
##### **Name:** Release Skill
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit` | Specify unit | [`Unit`](../etype#Unit)
`__ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType)
`__ability_index` | 技能Index  | [`AbilityIndex`](../etype#AbilityIndex)
`__ability_seq` | 技能SEQ  | [`AbilitySeq`](../etype#AbilitySeq)
`__target_item` | release skill parameter | [`Dict`](../etype#Dict)


### `PATROL_CMD`
<span id="PATROL_CMD"></span>
##### **Name:** Patrol
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit` | Specify unit | [`Unit`](../etype#Unit)
`__tar_x` | Click position X coordinate | [`Fixed`](../etype#Fixed)
`__tar_y` | Click position Y coordinate | [`Fixed`](../etype#Fixed)


### `MOVE_UNIT_TO_TARGET_CMD`
<span id="MOVE_UNIT_TO_TARGET_CMD"></span>
##### **name:** Pathfinding to location
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__unit` | Specify unit | [`Unit`](../etype#Unit)
`__tar_x` | Click position X coordinate | [`Fixed`](../etype#Fixed)
`__tar_y` | Click position Y coordinate | [`Fixed`](../etype#Fixed)


### `CATCH_FRAME_FINISHED`
<span id="CATCH_FRAME_FINISHED"></span>
##### **Name:** Chase frame end event
##### **parameters**
none


### `MOVER_FINISH`
<span id="MOVER_FINISH"></span>
##### **Name:** End of Exerciser
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__mover_unit_id` | Unit ID of the mover | [`UnitID`](../etype#UnitID)


### `MOVER_INTERRUPT`
<span id="MOVER_INTERRUPT"></span>
##### **Name:** Exerciser Interrupt
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__mover_unit_id` | Unit ID of the mover | [`UnitID`](../etype#UnitID)


### `MOVER_REMOVED`
<span id="MOVER_REMOVED"></span>
##### **Name:** Exerciser Removal
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__mover_unit_id` | Unit ID of the mover | [`UnitID`](../etype#UnitID)


### `MOVER_UNIT_COLLISION`
<span id="MOVER_UNIT_COLLISION"></span>
##### **name:** Kinematic Unit Collision
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__mover_unit_id` | Unit ID of the mover | [`UnitID`](../etype#UnitID)
`__collide_unit_id` | collision unit ID | [`UnitID`](../etype#UnitID)


### `MOVER_UNIT_COLLISION_ENTER`
<span id="MOVER_UNIT_COLLISION_ENTER"></span>
##### **name:** Kinematic Unit Collision
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__mover_unit_id` | Unit ID of the mover | [`UnitID`](../etype#UnitID)
`__collide_unit_id` | collision unit ID | [`UnitID`](../etype#UnitID)


### `MOVER_UNIT_COLLISION_LEAVE`
<span id="MOVER_UNIT_COLLISION_LEAVE"></span>
##### **Name:** End of Kinematic Unit Collision
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__mover_unit_id` | Unit ID of the mover | [`UnitID`](../etype#UnitID)
`__collide_unit_id` | collision unit ID | [`UnitID`](../etype#UnitID)


### `MOVER_TERRAIN_COLLISION`
<span id="MOVER_TERRAIN_COLLISION"></span>
##### **name:** Kinematic Terrain Collision
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__mover_unit_id` | Unit ID of the mover | [`UnitID`](../etype#UnitID)


### `CHAT_SEND_GM`
<span id="CHAT_SEND_GM"></span>
##### **Name:** Send command in chat
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__str1` | instruction string | [`Str`](../etype#Str)
`__role_id` | player id | [`RoleID`](../etype#RoleID)


### `CUSTOM_EVENT`
<span id="CUSTOM_EVENT"></span>
##### **name:** trigger custom event
##### **parameters**
parameter name | description | type
:----------- | :----------- | :-----------
`__c_param_1` | custom parameter 1 | [`Int32`](../etype#Int32)
`__c_param_2` | custom parameter 2 | [`Int32`](../etype#Int32)
`__c_param_3` | custom parameter 3 | [`Int32`](../etype#Int32)
`__c_param_4` | custom parameter 4 | [`Int32`](../etype#Int32)
`__c_param_5` | custom parameter 5 | [`Int32`](../etype#Int32)
