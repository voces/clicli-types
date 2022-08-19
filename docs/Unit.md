# Unit
## describe
A unit object in game logic.

-----
## method list
Method name | Brief description |
:----- | :--- |
[`api_get_id`](#api_get_id) | Get unit ID |
[`api_get_key`](#api_get_key) | Get the unit number |
[`api_get_camp_id`](#api_get_camp_id) | Get the id of the camp the unit belongs to |
[`api_get_role_id`](#api_get_role_id) | Get the ID of the player the unit belongs to |
[`api_get_role`](#api_get_role) | Get the player the unit belongs to |
[`api_get_camp`](#api_get_camp) | Get the camp the unit belongs to |
[`api_get_type`](#api_get_type) | Get unit type |
[`api_get_name`](#api_get_name) | Get unit name |
[`add_timer`](#add_timer) | Add timer |
[`add_repeat_timer`](#add_repeat_timer) | Add periodic timer |
[`cancel_timer`](#cancel_timer) | Cancel timer |
[`api_remove_kv`](#api_remove_kv) | Unit removal key-value pair |
[`api_is_alive`](#api_is_alive) | Is the unit alive |
[`api_hide_head_bar`](#api_hide_head_bar) | Hide head information |
[`has_tag`](#has_tag) | Whether the unit has a tag |
[`api_revive`](#api_revive) | Revive Units |
[`api_is_destroyed`](#api_is_destroyed) | Whether the unit has been destroyed |
[`api_delete`](#api_delete) | delete unit |
[`api_kill`](#api_kill) | Force unit to die |
[`api_get_icon`](#api_get_icon) | Get the unit icon path |
[`api_get_unit_pic`](#api_get_unit_pic) | Get the unit picture path |
[`api_get_parent_unit`](#api_get_parent_unit) | Get the parent unit of the unit |
[`api_set_hp_color`](#api_set_hp_color) | Change unit health bar color |
[`api_switch_atk_assist_record`](#api_switch_atk_assist_record) | Enable/disable damage and assist statistics |
[`api_is_in_range`](#api_is_in_range) | Whether units/points are in range |
[`api_is_point_in_range`](#api_is_point_in_range) | Whether the point is in range |
[`api_set_life_cycle`](#api_set_life_cycle) | Set unit life cycle |
[`api_pause_life_cycle`](#api_pause_life_cycle) | Pause unit life cycle |
[`api_get_life_cycle`](#api_get_life_cycle) | Get the current life cycle of the unit |
[`api_get_total_life_cycle`](#api_get_total_life_cycle) | Get the total life cycle duration of a unit |
[`api_get_atk_type`](#api_get_atk_type) | Get unit attack type |
[`api_get_def_type`](#api_get_def_type) | Get unit armor type |
[`api_get_attr_other`](#api_get_attr_other) | get attr_other |
[`api_get_attr_base`](#api_get_attr_base) | get attr_base |
[`api_get_attr_base_ratio`](#api_get_attr_base_ratio) | get attr_base_ratio |
[`api_get_attr_bonus`](#api_get_attr_bonus) | Get attr_bonus |
[`api_get_attr_bonus_ratio`](#api_get_attr_bonus_ratio) | get attr_bonus_ratio |
[`api_get_attr_all_ratio`](#api_get_attr_all_ratio) | get attr_all_ratio |
[`api_get_main_attr`](#api_get_main_attr) | Get unit main attribute |
[`api_set_attr`](#api_set_attr) | Set the value of a pure value type |
[`api_set_attr_by_attr_element`](#api_set_attr_by_attr_element) | Set unit attributes (classified by attributes) |
[`api_set_attr_base`](#api_set_attr_base) | Set unit attribute base value section |
[`api_add_attr_by_attr_element`](#api_add_attr_by_attr_element) | Add unit attributes (classified by attributes) |
[`api_add_attr_base`](#api_add_attr_base) | Increase unit attribute base value |
[`api_set_attr_bonus`](#api_set_attr_bonus) | Set unit attribute attr_bonus |
[`api_add_attr_bonus`](#api_add_attr_bonus) | Add unit attribute attr_bonus |
[`api_set_attr_bonus_ratio`](#api_set_attr_bonus_ratio) | Set unit attribute attr_bouns_ratio |
[`api_add_attr_bonus_ratio`](#api_add_attr_bonus_ratio) | Add unit attribute attr_bouns_ratio |
[`api_set_attr_all_ratio`](#api_set_attr_all_ratio) | Set the unit attribute base value and extra value bonus ratio |
[`api_add_attr_all_ratio`](#api_add_attr_all_ratio) | Increase unit attribute base value and extra value bonus ratio |
[`api_set_attr_base_ratio`](#api_set_attr_base_ratio) | Set the unit attribute base value bonus ratio |
[`api_add_attr_base_ratio`](#api_add_attr_base_ratio) | Increase unit attribute base value percentage bonus |
[`api_set_level`](#api_set_level) | Set unit level |
[`api_add_level`](#api_add_level) | Add unit level |
[`api_get_float_attr`](#api_get_float_attr) | Get unit real attribute |
[`api_get_str_attr`](#api_get_str_attr) | Get the unit string attribute |
[`api_set_str_attr`](#api_set_str_attr) | Set unit string attribute |
[`api_get_level`](#api_get_level) | Get unit level |
[`api_get_hp`](#api_get_hp) | Get unit HP |
[`api_get_hpp`](#api_get_hpp) | Get unit HP percentage |
[`api_heal`](#api_heal) | Healing Units |
[`api_get_dmg_statistics`](#api_get_dmg_statistics) | Get output damage statistics |
[`api_clear_dmg_statistics`](#api_clear_dmg_statistics) | Clear output damage statistics |
[`api_add_exp`](#api_add_exp) | Increase experience, the increase value is a positive number |
[`api_set_exp`](#api_set_exp) | set experience |
[`api_get_exp`](#api_get_exp) | Get the current experience of the unit, if it reaches the top level, return -1 |
[`api_get_upgrade_exp`](#api_get_upgrade_exp) | Get the experience required for the current upgrade, if it reaches the top level, return -1 |
[`api_add_tag`](#api_add_tag) | Unit removal key-value pair |
[`api_remove_tag`](#api_remove_tag) | Unit removal key-value pair |
[`api_set_name`](#api_set_name) | set unit name |
[`api_set_unit_day_vision`](#api_set_unit_day_vision) | Set unit day vision |
[`api_set_unit_night_vision`](#api_set_unit_night_vision) | Set unit night vision |
[`api_get_unit_pkg_cnt`](#api_get_unit_pkg_cnt) | Get the number of unit equipment slots |
[`api_get_unit_bag_cnt`](#api_get_unit_bag_cnt) | Get the number of unit bags |
[`api_get_unit_collision_radius`](#api_get_unit_collision_radius) | Get unit dynamic collision radius |
[`api_stop_move`](#api_stop_move) | Unit stops moving |
[`api_transmit`](#api_transmit) | Units are transmitted to the specified coordinates |
[`api_force_transmit`](#api_force_transmit) | Force the unit to transmit to the specified coordinates |
[`api_set_face_dir`](#api_set_face_dir) | Unit set facing |
[`api_set_face_angle`](#api_set_face_angle) | Unit set face angle |
[`api_can_teleport_to`](#api_can_teleport_to) | Whether the unit can be teleported to the target point |
[`api_get_position`](#api_get_position) | Get unit position |
[`api_get_face_dir`](#api_get_face_dir) | Get unit facing |
[`get_face_angle`](#get_face_angle) | Get the unit face angle |
[`api_collide_obstacle_normal`](#api_collide_obstacle_normal) | The normal direction of the obstacle the unit collides with |
[`api_set_turn_speed`](#api_set_turn_speed) | Set unit turn speed |
[`api_get_turn_speed`](#api_get_turn_speed) | Get unit turn speed |
[`api_is_moving`](#api_is_moving) | Whether the unit is moving |
[`api_set_move_collision`](#api_set_move_collision) | Set whether the unit calculates a certain collision type |
[`api_get_move_collision`](#api_get_move_collision) | Gets whether the unit calculates a certain collision type |
[`api_play_animation`](#api_play_animation) | Play animation |
[`api_stop_animation`](#api_stop_animation) | stop animation |
[`api_stop_cur_animation`](#api_stop_cur_animation) | Stop the currently playing animation |
[`api_play_sfx`](#api_play_sfx) | unit play effect |
[`api_play_sfx_with_return`](#api_play_sfx_with_return) | Play the effect on the unit and return the effect entity |
[`api_play_link_sfx`](#api_play_link_sfx) | Link effects between two units |
[`api_play_link_sfx_with_return`](#api_play_link_sfx_with_return) | Link effect between two units and return effect entity |
[`api_play_link_sfx_to_projectile`](#api_play_link_sfx_to_projectile) | Link effects between units and projectiles |
[`api_play_sound_effect`](#api_play_sound_effect) | unit play sound effect |
[`api_play_hit_sound_effect`](#api_play_hit_sound_effect) | The unit plays the hit sound effect |
[`api_change_animation`](#api_change_animation) | unit replacement play animation |
[`api_cancel_change_animation`](#api_cancel_change_animation) | Cancel unit replacement playback animation |
[`api_clear_change_animation`](#api_clear_change_animation) | Cancel all unit replacement animations |
[`api_change_model`](#api_change_model) | Unit replacement model |
[`api_cancel_change_model`](#api_cancel_change_model) | Cancel unit replacement model |
[`api_clear_change_model`](#api_clear_change_model) | Cancel all replacement models of the unit |
[`api_replace_model`](#api_replace_model) | Unit replacement model |
[`api_cancel_replace_model`](#api_cancel_replace_model) | Cancel unit replacement model |
[`api_show_health_bar_count_down`](#api_show_health_bar_count_down) | Show health bar countdown |
[`api_get_model`](#api_get_model) | Get unit model |
[`api_get_source_model`](#api_get_source_model) | Get the original model of the unit |
[`api_show_text`](#api_show_text) | Display unit overhead text |
[`api_set_title`](#api_set_title) | Change unit title |
[`api_set_title_visible`](#api_set_title_visible) | Set unit title visibility |
[`api_set_name_visible`](#api_set_name_visible) | Hide and display the unit name. For units without overhead UI, this API does not take effect.
[`api_set_bar_name_visible`](#api_set_bar_name_visible) | Hide and display the unit name. For units without overhead UI, this API does not take effect.
[`api_set_bar_name`](#api_set_bar_name) | Set health bar display name |
[`set_bar_name_scale`](#set_bar_name_scale) | Set health bar display name scale |
[`api_set_bar_name_font_type`](#api_set_bar_name_font_type) | Set the name font of the health bar display |
[`api_set_bar_name_font_size`](#api_set_bar_name_font_size) | Set the font size of the health bar display name |
[`api_set_bar_text_visible`](#api_set_bar_text_visible) | Hide the text above the head of the display unit, each time it hides the count +1, each time it displays the count -1, the count returns... |
[`api_set_bar_text_scale`](#api_set_bar_text_scale) | Set the text scale for overhead display |
[`api_set_bar_text_type`](#api_set_bar_text_type) | Set the top display text type |
[`api_set_bar_text_font_type`](#api_set_bar_text_font_type) | Set the font of the overhead display text |
[`api_set_bar_text_font_size`](#api_set_bar_text_font_size) | Set the font size of the top display text |
[`api_set_bar_name_show_type`](#api_set_bar_name_show_type) | Set the display style of the health bar name |
[`api_set_hp_bar_visible`](#api_set_hp_bar_visible) | Hide and display unit health bar. For units without overhead UI, this API does not take effect.
[`api_set_hp_bar_show_type`](#api_set_hp_bar_show_type) | Set the unit's HP bar display style, this API does not take effect for units without overhead UI |
[`api_set_hp_bar_type`](#api_set_hp_bar_type) | Set the unit health bar style, this API does not take effect for units without overhead UI |
[`api_add_ui_comp`](#api_add_ui_comp) | Bind UI controls |
[`api_change_title_font_size`](#api_change_title_font_size) | Modify unit title font size |
[`api_change_title_scale`](#api_change_title_scale) | Modify unit title scale |
[`api_change_title_font_type`](#api_change_title_font_type) | Modify unit title font |
[`api_change_title_type`](#api_change_title_type) | Modify unit title style |
[`api_set_title_bg_opacity`](#api_set_title_bg_opacity) | Modify unit title background opacity |
[`api_set_title_bg_scale`](#api_set_title_bg_scale) | Modify unit title background scale |
[`api_set_blood_scale_visible`](#api_set_blood_scale_visible) | Modify unit health bar scale visibility |
[`api_set_title_bar_pos_offset`](#api_set_title_bar_pos_offset) | Modify unit title position offset |
[`api_set_hp_bar_pos_offset`](#api_set_hp_bar_pos_offset) | Modify unit health bar position offset |
[`api_set_name_bar_pos_offset`](#api_set_name_bar_pos_offset) | Modify unit name position offset |
[`api_set_text_bar_pos_offset`](#api_set_text_bar_pos_offset) | Modify unit text position offset |
[`api_set_countdown_bar_pos_offset`](#api_set_countdown_bar_pos_offset) | Modify unit countdown position offset |
[`api_raise_height`](#api_raise_height) | Unit Raise |
[`api_get_height`](#api_get_height) | Get unit height |
[`api_set_scale`](#api_set_scale) | Set unit scale |
[`api_set_blood_bar_type`](#api_set_blood_bar_type) | Modify unit health bar style |
[`api_set_blood_bar_show_type`](#api_set_blood_bar_show_type) | Modify unit health bar display mode |
[`api_start_ghost`](#api_start_ghost) | Enable ghosting |
[`api_stop_ghost`](#api_stop_ghost) | Turn off ghosting |
[`api_set_ghost_color`](#api_set_ghost_color) | Set ghost color |
[`api_set_ghost_time`](#api_set_ghost_time) | Set ghost time |
[`api_add_modifier`](#api_add_modifier) ​​| Unit adds the effect of the specified number |
[`api_get_modifier_stack_count`](#api_get_modifier_stack_count) | Get the number of effect stacks with the specified number on the unit |
[`api_has_modifier`](#api_has_modifier) ​​| Whether the unit has the effect of the specified number |
[`api_has_modifier_with_tag`](#api_has_modifier_with_tag) | Whether the unit has the effect of the specified tag |
[`api_get_modifier`](#api_get_modifier) ​​| Get the ith effect instance with the specified number on the unit |
[`api_get_modifier_count`](#api_get_modifier_count) | Get the number of the ith effect of the specified number on the unit |
[`api_remove_modifier_instance`](#api_remove_modifier_instance) | Remove the target modifier instance from the target unit |
[`api_remove_modifier_type`](#api_remove_modifier_type) | Removes all instances of the target modifier type on the target unit |
[`api_has_modifier_type`](#api_has_modifier_type) | Whether the unit has the effect of the specified type |
[`api_delete_all_modifiers_by_effect_type`](#api_delete_all_modifiers_by_effect_type) | Deletes the magic effect of the specified effect type of the unit |
[`api_get_all_modifiers`](#api_get_all_modifiers) | Get all magic effects on the unit |
[`api_add_ability`](#api_add_ability) | Unit add skills |
[`api_remove_ability_by_index`](#api_remove_ability_by_index) | Units remove skills by slot |
[`api_remove_abilities_in_type`](#api_remove_abilities_in_type) | Unit removes all skills of a certain type with the specified skill ID |
[`api_set_ability_level`](#api_set_ability_level) | Unit set skill level. |
[`api_unit_learn_ability`](#api_unit_learn_ability) | Unit Learning Skills |
[`api_get_ability_point`](#api_get_ability_point) | Get hero's skill point |
[`api_set_ability_point`](#api_set_ability_point) | Set hero's skill point |
[`api_add_ability_point`](#api_add_ability_point) | Increase hero's skill points |
[`api_get_ability`](#api_get_ability) | Get skills through skill slots |
[`api_get_ability_by_type`](#api_get_ability_by_type) | Get skills by adding skill type and skill ID |
[`api_get_abilities_by_type`](#api_get_abilities_by_type) | Get a list of skills of a certain type |
[`api_check_has_ability_type`](#api_check_has_ability_type) | Whether there is a skill corresponding to the skill type |
[`api_get_all_abilities_can_show`](#api_get_all_abilities_can_show) | Get unit skills list |
[`api_switch_ability`](#api_switch_ability) | Switch Skills |
[`api_disable_ability`](#api_disable_ability) | Unit disable ability. |
[`api_enable_ability`](#api_enable_ability) | Unit unlock ability. |
[`api_get_ability_str_attr_value`](#api_get_ability_str_attr_value) | Returns the string attribute value of the specified slot skill of the unit entity |
[`api_get_ability_by_seq`](#api_get_ability_by_seq) | Get the skill object according to the skill serial number |
[`api_add_state`](#api_add_state) | Apply state to units |
[`api_remove_state`](#api_remove_state) | Remove state from unit |
[`api_is_in_battle_state`](#api_is_in_battle_state) | Is it in battle state |
[`api_has_state`](#api_has_state) | Whether the unit is in a state |
[`api_release_ability_by_index`](#api_release_ability_by_index) | Units cast skills |
[`api_release_ability_at_position`](#api_release_ability_at_position) | Unit casts ability with release target location |
[`api_create_building_on_point`](#api_create_building_on_point) | Issue building command (target point) |
[`api_create_building_on_position`](#api_create_building_on_position) | Post build command (coordinates) |
[`api_has_item`](#api_has_item) | Whether the unit has an item |
[`api_has_item_key`](#api_has_item_key) | Whether the unit owns a specific numbered item |
[`api_add_item`](#api_add_item) | Add item name to unit |
[`api_delete_item`](#api_delete_item) | Delete item name from unit |
[`api_drop_item`](#api_drop_item) | Units drop item entities into the scene |
[`api_remove_item`](#api_remove_item) | Unit remove item entity |
[`api_get_item_by_slot`](#api_get_item_by_slot) | Get the item in the unit's backpack slot |
[`api_shift_item`](#api_shift_item) | Move item |
[`api_get_all_item_pids`](#api_get_all_item_pids) | All items on the unit |
[`api_is_shop`](#api_is_shop) | Whether the unit is a shop |
[`api_get_shop_range`](#api_get_shop_range) | Get shop unit range |
[`api_add_shop_item`](#api_add_shop_item) | Add items to shop |
[`api_get_shop_item_list`](#api_get_shop_item_list) | Get the item list of a tab of the shop |
[`api_get_shop_item_cd`](#api_get_shop_item_cd) | Get the recovery time of shop items |
[`api_get_shop_tab_cnt`](#api_get_shop_tab_cnt) | Get the number of shop tabs |
[`api_get_shop_tab_name`](#api_get_shop_tab_name) | Get the shop's page signature |
[`api_add_shop_unit`](#api_add_shop_unit) | Add a unit item to the shop |
[`api_remove_shop_item`](#api_remove_shop_item) | Remove shop items |
[`api_remove_shop_unit`](#api_remove_shop_unit) | Remove shop unit items |
[`api_set_shop_item_stock`](#api_set_shop_item_stock) | Set item inventory |
[`api_set_shop_unit_stock`](#api_set_shop_unit_stock) | Set unit stock stock |
[`api_set_is_shop`](#api_set_is_shop) | Set shop switch |
[`api_buy_item_with_tab_name`](#api_buy_item_with_tab_name) | Unit purchase items |
[`api_buy_unit_with_tab_name`](#api_buy_unit_with_tab_name) | Unit Buy Unit |
[`api_sell_item`](#api_sell_item) | Units sell items |
[`api_set_shop_target`](#api_set_shop_target) | Set shop target |
[`api_get_shop_item_stock`](#api_get_shop_item_stock) | Get the unit store item stock |
[`api_get_shop_unit_stock`](#api_get_shop_unit_stock) | Get unit store unit stock |
[`api_get_shop_item_price`](#api_get_shop_item_price) | Get the price of the item in the unit shop |
[`api_upgrade_tech`](#api_upgrade_tech) | Tech Upgrade |
[`api_get_tech_list`](#api_get_tech_list) | Get tech list |
[`api_check_tech_precondition`](#api_check_tech_precondition) | Get whether the technology meets the precondition |
[`api_add_tech`](#api_add_tech) | Add technology |
[`api_remove_tech`](#api_remove_tech) | remove tech |
[`api_release_command`](#api_release_command) | Release command |


-----
## method

### `api_get_id` <span id="api_get_id"></span>
##### **describe**
Get unit ID
##### **parameters**
none

##### **return value**
`UnitID` : Unit ID

### `api_get_key` <span id="api_get_key"></span>
##### **describe**
Get unit number
##### **parameters**
none

##### **return value**
`UnitKey` : unit number

### `api_get_camp_id` <span id="api_get_camp_id"></span>
##### **describe**
Get the faction id the unit belongs to
##### **parameters**
none

##### **return value**
`CampID` : the camp ID

### `api_get_role_id` <span id="api_get_role_id"></span>
##### **describe**
Get the ID of the player the unit belongs to
##### **parameters**
none

##### **return value**
`RoleID` : Player ID

### `api_get_role` <span id="api_get_role"></span>
##### **describe**
Get the player the unit belongs to
##### **parameters**
none

##### **return value**
`Role` : the player

### `api_get_camp` <span id="api_get_camp"></span>
##### **describe**
Get the faction the unit belongs to
##### **parameters**
none

##### **return value**
`Camp` : camp

### `api_get_type` <span id="api_get_type"></span>
##### **describe**
Get unit type
##### **parameters**
none

##### **return value**
`UnitType` : unit type

### `api_get_name` <span id="api_get_name"></span>
##### **describe**
Get unit name
##### **parameters**
none

##### **return value**
`Str` : unit name

### `add_timer` <span id="add_timer"></span>
##### **describe**
Add timer
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`time` | timer duration | [`Fixed`](../etype#Fixed) |
`callback` | timeout function | [`Function`](../etype#Function) |

##### **return value**
`UInt32` : Timer ID

### `add_repeat_timer` <span id="add_repeat_timer"></span>
##### **describe**
Add periodic timer
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`time` | timer duration | [`Fixed`](../etype#Fixed) |
`callback` | timeout function | [`Function`](../etype#Function) |

##### **return value**
`UInt32` : Timer ID

### `cancel_timer` <span id="cancel_timer"></span>
##### **describe**
cancel timer
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`timer_id` | Timer ID | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_remove_kv` <span id="api_remove_kv"></span>
##### **describe**
Unit removal key-value pair
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`k` | key name | [`Str`](../etype#Str) |

##### **return value**
none

### `api_is_alive` <span id="api_is_alive"></span>
##### **describe**
Is the unit alive
##### **parameters**
none

##### **return value**
`Bool` : whether the unit is alive

### `api_hide_head_bar` <span id="api_hide_head_bar"></span>
##### **describe**
Hide overhead information
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`show` | whether to hide overhead information | [`Bool`](../etype#Bool) |

##### **return value**
none

### `has_tag` <span id="has_tag"></span>
##### **describe**
Whether the organization has a label
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tag` | tag | [`Str`](../etype#Str) |

##### **return value**
`Bool` : whether the unit has a label

### `api_revive` <span id="api_revive"></span>
##### **describe**
resurrection unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`position` | resurrection position | [`Point`](../etype#Point) | None

##### **return value**
none

### `api_is_destroyed` <span id="api_is_destroyed"></span>
##### **describe**
Whether the unit has been destroyed
##### **parameters**
none

##### **return value**
`Bool` : whether the unit has been destroyed

### `api_delete` <span id="api_delete"></span>
##### **describe**
delete unit
##### **parameters**
none

##### **return value**
none

### `api_kill` <span id="api_kill"></span>
##### **describe**
Force unit to die
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`source_unit` | Killer unit | [`Unit`](../etype#Unit) | None

##### **return value**
none

### `api_get_icon` <span id="api_get_icon"></span>
##### **describe**
Get the unit icon path
##### **parameters**
none

##### **return value**
`Str` : unit icon path

### `api_get_unit_pic` <span id="api_get_unit_pic"></span>
##### **describe**
Get unit image path
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`pic_type` | picture type | [`Str`](../etype#Str) |

##### **return value**
`Str` : unit image path

### `api_get_parent_unit` <span id="api_get_parent_unit"></span>
##### **describe**
Get the parent unit of the unit
##### **parameters**
none

##### **return value**
`Unit` : the parent unit of the unit

### `api_set_hp_color` <span id="api_set_hp_color"></span>
##### **describe**
Change unit health bar color
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`color` | unit health bar color value | [`Str`](../etype#Str) |

##### **return value**
none

### `api_switch_atk_assist_record` <span id="api_switch_atk_assist_record"></span>
##### **describe**
Turn damage and assist statistics on/off
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`enable` | enable | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_is_in_range` <span id="api_is_in_range"></span>
##### **describe**
Is the unit/point in range
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`unit` | unit | [`Unit`](../etype#Unit) |
`radius` | range | [`Float`](../etype#Float) |

##### **return value**
`Bool` : is in scope

### `api_is_point_in_range` <span id="api_is_point_in_range"></span>
##### **describe**
Is the point in range
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`point` | point | [`Point`](../etype#Point) |
`radius` | range | [`Float`](../etype#Float) |

##### **return value**
`Bool` : is in scope

### `api_set_life_cycle` <span id="api_set_life_cycle"></span>
##### **describe**
Set unit life cycle
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`life_time` | Lifetime | [`Float`](../etype#Float) |

##### **return value**
none

### `api_pause_life_cycle` <span id="api_pause_life_cycle"></span>
##### **describe**
Pause unit life cycle
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`pause` | whether to pause | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_get_life_cycle` <span id="api_get_life_cycle"></span>
##### **describe**
Get the current lifetime of the unit
##### **parameters**
none

##### **return value**
`Fixed` : Lifecycle

### `api_get_total_life_cycle` <span id="api_get_total_life_cycle"></span>
##### **describe**
Get the total lifetime of the unit
##### **parameters**
none

##### **return value**
`Fixed` : Lifecycle

### `api_get_atk_type` <span id="api_get_atk_type"></span>
##### **describe**
Get unit attack type
##### **parameters**
none

##### **return value**
`UInt32` : attack type

### `api_get_def_type` <span id="api_get_def_type"></span>
##### **describe**
Get unit armor type
##### **parameters**
none

##### **return value**
`UInt32` : armor type

### `api_get_attr_other` <span id="api_get_attr_other"></span>
##### **describe**
get attr_other
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : property value

### `api_get_attr_base` <span id="api_get_attr_base"></span>
##### **describe**
get attr_base
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : property value

### `api_get_attr_base_ratio` <span id="api_get_attr_base_ratio"></span>
##### **describe**
get attr_base_ratio
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : property value

### `api_get_attr_bonus` <span id="api_get_attr_bonus"></span>
##### **describe**
get attr_bonus
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : property value

### `api_get_attr_bonus_ratio` <span id="api_get_attr_bonus_ratio"></span>
##### **describe**
get attr_bonus_ratio
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : property value

### `api_get_attr_all_ratio` <span id="api_get_attr_all_ratio"></span>
##### **describe**
get attr_all_ratio
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : property value

### `api_get_main_attr` <span id="api_get_main_attr"></span>
##### **describe**
Get the unit main attribute
##### **parameters**
none

##### **return value**
`Str` : main attribute

### `api_set_attr` <span id="api_set_attr"></span>
##### **describe**
Set the value of a pure value type
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`val` | value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_attr_by_attr_element` <span id="api_set_attr_by_attr_element"></span>
##### **describe**
Set unit attributes (classified by attribute)
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`val` | value | [`Fixed`](../etype#Fixed) |
`attr_element` | attribute classification | [`Str`](../etype#Str) |

##### **return value**
none

### `api_set_attr_base` <span id="api_set_attr_base"></span>
##### **describe**
Set Unit Property Base Values ​​section
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`val` | base value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_attr_by_attr_element` <span id="api_add_attr_by_attr_element"></span>
##### **describe**
Added unit attributes (classified by attributes)
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`val` | value | [`Fixed`](../etype#Fixed) |
`attr_element` | attribute classification | [`Str`](../etype#Str) |

##### **return value**
none

### `api_add_attr_base` <span id="api_add_attr_base"></span>
##### **describe**
Increase unit attribute base value
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`delta` | increment value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_attr_bonus` <span id="api_set_attr_bonus"></span>
##### **describe**
Set the unit attribute attr_bonus
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`val` | set value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_attr_bonus` <span id="api_add_attr_bonus"></span>
##### **describe**
Added unit attribute attr_bonus
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`delta` | increment value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_attr_bonus_ratio` <span id="api_set_attr_bonus_ratio"></span>
##### **describe**
Set the unit attribute attr_bouns_ratio
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`val` | set value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_attr_bonus_ratio` <span id="api_add_attr_bonus_ratio"></span>
##### **describe**
Added unit attribute attr_bouns_ratio
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`delta` | Addition ratio | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_attr_all_ratio` <span id="api_set_attr_all_ratio"></span>
##### **describe**
Set the unit attribute base value and bonus value ratio
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`val` | set value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_attr_all_ratio` <span id="api_add_attr_all_ratio"></span>
##### **describe**
Increase the unit attribute base value and bonus value ratio
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`delta` | Addition ratio | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_attr_base_ratio` <span id="api_set_attr_base_ratio"></span>
##### **describe**
Set the unit attribute base value bonus ratio
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`val` | set value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_attr_base_ratio` <span id="api_add_attr_base_ratio"></span>
##### **describe**
Increase unit attribute base value percentage bonus
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`key` | attribute name | [`Str`](../etype#Str) |
`delta` | Addition ratio | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_level` <span id="api_set_level"></span>
##### **describe**
Set unit level
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`level` | level | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_add_level` <span id="api_add_level"></span>
##### **describe**
increase unit level
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`level` | level | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_get_float_attr` <span id="api_get_float_attr"></span>
##### **describe**
Get unit real property
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : Real property value

### `api_get_str_attr` <span id="api_get_str_attr"></span>
##### **describe**
Get the unit string property
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Str` : String property value

### `api_set_str_attr` <span id="api_set_str_attr"></span>
##### **describe**
Set the unit string property
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |
`value` | String value | [`Str`](../etype#Str) |

##### **return value**
none

### `api_get_level` <span id="api_get_level"></span>
##### **describe**
Get unit level
##### **parameters**
none

##### **return value**
`UInt32` : Unit level

### `api_get_hp` <span id="api_get_hp"></span>
##### **describe**
Get unit blood volume
##### **parameters**
none

##### **return value**
`Fixed` : unit health

### `api_get_hpp` <span id="api_get_hpp"></span>
##### **describe**
Get the percentage of unit blood volume
##### **parameters**
none

##### **return value**
`Fixed` : unit health percentage

### `api_heal` <span id="api_heal"></span>
##### **describe**
treatment unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`hp_change` | value of healing | [`Fixed`](../etype#Fixed) |
`jump_word` | whether to jump words | [`Bool`](../etype#Bool) | False

##### **return value**
none

### `api_get_dmg_statistics` <span id="api_get_dmg_statistics"></span>
##### **describe**
Get output damage stats
##### **parameters**
none

##### **return value**
`Fixed` : output damage stats

### `api_clear_dmg_statistics` <span id="api_clear_dmg_statistics"></span>
##### **describe**
Clear output damage stats
##### **parameters**
none

##### **return value**
none

### `api_add_exp` <span id="api_add_exp"></span>
##### **describe**
Increase experience, the increase value is a positive number
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`exp` | experience | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_exp` <span id="api_set_exp"></span>
##### **describe**
Set up experience
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`exp` | experience | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_get_exp` <span id="api_get_exp"></span>
##### **describe**
Get the unit's current experience, if it reaches the top level, return -1
##### **parameters**
none

##### **return value**
`UInt32` : The current experience value of the unit

### `api_get_upgrade_exp` <span id="api_get_upgrade_exp"></span>
##### **describe**
Get the experience required for the current level up, if you reach the top level, return -1
##### **parameters**
none

##### **return value**
`Fixed` : The current XP required to level up

### `api_add_tag` <span id="api_add_tag"></span>
##### **describe**
Unit removal key-value pair
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tag` | TAG | [`Str`](../etype#Str) |

##### **return value**
none

### `api_remove_tag` <span id="api_remove_tag"></span>
##### **describe**
Unit removal key-value pair
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tag` | TAG | [`Str`](../etype#Str) |

##### **return value**
none

### `api_set_name` <span id="api_set_name"></span>
##### **describe**
set unit name
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`name` | name | [`Str`](../etype#Str) |

##### **return value**
none

### `api_set_unit_day_vision` <span id="api_set_unit_day_vision"></span>
##### **describe**
Set the unit's daytime field of view
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | field of view | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_unit_night_vision` <span id="api_set_unit_night_vision"></span>
##### **describe**
Set unit night vision
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | field of view | [`Float`](../etype#Float) |

##### **return value**
none

### `api_get_unit_pkg_cnt` <span id="api_get_unit_pkg_cnt"></span>
##### **describe**
Get the number of unit equipment slots
##### **parameters**
none

##### **return value**
none

### `api_get_unit_bag_cnt` <span id="api_get_unit_bag_cnt"></span>
##### **describe**
Gets the number of units in the backpack
##### **parameters**
none

##### **return value**
none

### `api_get_unit_collision_radius` <span id="api_get_unit_collision_radius"></span>
##### **describe**
Get the unit dynamic collision radius
##### **parameters**
none

##### **return value**
`Fixed` : dynamic collision radius

### `api_stop_move` <span id="api_stop_move"></span>
##### **describe**
Unit stops moving
##### **parameters**
none

##### **return value**
none

### `api_transmit` <span id="api_transmit"></span>
##### **describe**
Units are teleported to the specified coordinates
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`point` | target coordinates | [`FVector3`](../etype#FVector3) |

##### **return value**
none

### `api_force_transmit` <span id="api_force_transmit"></span>
##### **describe**
Units are forced to be teleported to the specified coordinates
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`pos` | target coordinates | [`FVector3`](../etype#FVector3) |

##### **return value**
none

### `api_set_face_dir` <span id="api_set_face_dir"></span>
##### **describe**
Unit setting orientation
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`face_dir` | facing | [`FVector3`](../etype#FVector3) |
`speed_effect` | Whether to be affected by turning speed | [`Bool`](../etype#Bool) | False

##### **return value**
none

### `api_set_face_angle` <span id="api_set_face_angle"></span>
##### **describe**
Units set the orientation angle
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`face_angle` | facing angle | [`Fixed`](../etype#Fixed) |
`turn_time_ms` | turn time in milliseconds | [`Int32`](../etype#Int32) | -1

##### **return value**
none

### `api_can_teleport_to` <span id="api_can_teleport_to"></span>
##### **describe**
Whether the unit can teleport to the target point
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`pos` | target point | [`FVector3`](../etype#FVector3) |

##### **return value**
`Bool` : whether the unit can teleport to the target point

### `api_get_position` <span id="api_get_position"></span>
##### **describe**
Get unit location
##### **parameters**
none

##### **return value**
`FVector3` : unit position

### `api_get_face_dir` <span id="api_get_face_dir"></span>
##### **describe**
Get unit orientation
##### **parameters**
none

##### **return value**
`FVector3` : unit orientation

### `get_face_angle` <span id="get_face_angle"></span>
##### **describe**
Get unit orientation angle
##### **parameters**
none

##### **return value**
`Fixed` : the unit facing angle

### `api_collide_obstacle_normal` <span id="api_collide_obstacle_normal"></span>
##### **describe**
The normal direction of the obstacle the unit hits
##### **parameters**
none

##### **return value**
`FVector3` : normal direction

### `api_set_turn_speed` <span id="api_set_turn_speed"></span>
##### **describe**
Set the unit's turn speed
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`turn_speed` | turn speed | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_get_turn_speed` <span id="api_get_turn_speed"></span>
##### **describe**
Get unit turn speed
##### **parameters**
none

##### **return value**
`Fixed` : turn speed

### `api_is_moving` <span id="api_is_moving"></span>
##### **describe**
Is the unit moving
##### **parameters**
none

##### **return value**
`Bool` : whether to move

### `api_set_move_collision` <span id="api_set_move_collision"></span>
##### **describe**
Sets whether the unit calculates a certain collision type
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`collision_layer` | collision mask | [`Int32`](../etype#Int32) |
`enable` | enable state | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_get_move_collision` <span id="api_get_move_collision"></span>
##### **describe**
Gets whether the unit calculates a certain collision type
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`collision_layer` | collision mask | [`Int32`](../etype#Int32) |

##### **return value**
`Bool` : whether to enable

### `api_play_animation` <span id="api_play_animation"></span>
##### **describe**
play animation
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`name` | animation name | [`Str`](../etype#Str) |
`rate` | playback rate | [`Float`](../etype#Float) | 1
`init_time` | start time (s) | [`Float`](../etype#Float) | 0
`end_time` | end time (s), positive number -1 means no end | [`Float`](../etype#Float) | -1
`loop` | whether to loop | [`Bool`](../etype#Bool) | False
`return_idle` | Whether to resume idle after playback ends | [`Bool`](../etype#Bool) | False

##### **return value**
none

### `api_stop_animation` <span id="api_stop_animation"></span>
##### **describe**
stop animation
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`name` | animation name | [`Str`](../etype#Str) |

##### **return value**
none

### `api_stop_cur_animation` <span id="api_stop_cur_animation"></span>
##### **describe**
Stop the currently playing animation
##### **parameters**
none

##### **return value**
none

### `api_play_sfx` <span id="api_play_sfx"></span>
##### **describe**
unit play effect
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`socket_name` | Socket name | [`Str`](../etype#Str) |
`sfx_res_id` | Effect ID | [`SfxKey`](../etype#SfxKey) |
`keep_time` | duration in seconds | [`Fixed`](../etype#Fixed) |
`scale` | scale scale | [`Float`](../etype#Float) | 1.0
`inherit_pos` | Whether to follow the unit position | [`Bool`](../etype#Bool) | True
`inherit_rotate` | whether to follow the unit rotation | [`Bool`](../etype#Bool) | True
`inherit_scale` | whether to follow scaling | [`Bool`](../etype#Bool) | True
`role` | Organization | [`Role`](../etype#Role) | None
`visible_type` | visibility rules | [`SfxVisibleType`](../etype#SfxVisibleType) | 1
`rotation` | initial rotation angle system | [`Float`](../etype#Float) | 0

##### **return value**
none

### `api_play_sfx_with_return` <span id="api_play_sfx_with_return"></span>
##### **describe**
Play the effect on the unit and return the effect entity
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`socket_name` | Socket name | [`Str`](../etype#Str) |
`sfx_res_id` | Effect ID | [`SfxKey`](../etype#SfxKey) |
`keep_time` | duration in seconds | [`Fixed`](../etype#Fixed) |
`scale` | scale scale | [`Float`](../etype#Float) | 1.0
`inherit_pos` | Whether to follow the unit position | [`Bool`](../etype#Bool) | True
`inherit_rotate` | whether to follow the unit rotation | [`Bool`](../etype#Bool) | True
`inherit_scale` | whether to follow scaling | [`Bool`](../etype#Bool) | True
`role` | Organization | [`Role`](../etype#Role) | None
`visible_type` | visibility rules | [`SfxVisibleType`](../etype#SfxVisibleType) | 1
`rotation` | initial rotation angle system | [`Float`](../etype#Float) | 0.0

##### **return value**
`Sfx` : Effects

### `api_play_link_sfx` <span id="api_play_link_sfx"></span>
##### **describe**
Hang link effect between two units
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`from_socket_name` | starting node | [`Str`](../etype#Str) |
`target_unit` | target unit | [`Unit`](../etype#Unit) |
`target_socket_name` | target socket | [`Str`](../etype#Str) |
`sfx_res_id` | Effect ID | [`SfxKey`](../etype#SfxKey) |
`scale` | scale | [`Float`](../etype#Float) |
`keep_time` | maximum duration unit: seconds | [`Float`](../etype#Float) |
`role` | owning player | [`Role`](../etype#Role) | None
`visible_type` | visibility rules | [`SfxVisibleType`](../etype#SfxVisibleType) | 1

##### **return value**
none

### `api_play_link_sfx_with_return` <span id="api_play_link_sfx_with_return"></span>
##### **describe**
Link effect between two units and return effect entity
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`from_socket_name` | starting node | [`Str`](../etype#Str) |
`target_unit` | target unit | [`Unit`](../etype#Unit) |
`target_socket_name` | target socket | [`Str`](../etype#Str) |
`sfx_res_id` | Effect ID | [`SfxKey`](../etype#SfxKey) |
`scale` | scale | [`Float`](../etype#Float) |
`keep_time` | maximum duration unit: seconds | [`Float`](../etype#Float) |
`role` | owning player | [`Role`](../etype#Role) | None
`visible_type` | visibility rules | [`SfxVisibleType`](../etype#SfxVisibleType) | 1

##### **return value**
`Sfx` : Effects

### `api_play_link_sfx_to_projectile` <span id="api_play_link_sfx_to_projectile"></span>
##### **describe**
Attach link effect between unit and projectile
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`from_socket_name` | starting node | [`Str`](../etype#Str) |
`target_unit` | target projectile | [`ProjectileEntity`](../etype#ProjectileEntity) |
`target_socket_name` | target socket | [`Str`](../etype#Str) |
`sfx_res_id` | Effect ID | [`SfxKey`](../etype#SfxKey) |
`scale` | scale | [`Float`](../etype#Float) |
`keep_time` | maximum duration unit: seconds | [`Float`](../etype#Float) |
`role` | owning player | [`Role`](../etype#Role) | None
`visible_type` | visibility rules | [`SfxVisibleType`](../etype#SfxVisibleType) | 1

##### **return value**
none

### `api_play_sound_effect` <span id="api_play_sound_effect"></span>
##### **描述**
单位播放音效
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`sound_id` | 音效资源编号  | [`AudioKey`](../etype#AudioKey) | 
`is_g_unit` | 是否仅对自己生效  | [`Bool`](../etype#Bool) | False

##### **返回值**
无

### `api_play_hit_sound_effect` <span id="api_play_hit_sound_effect"></span>
##### **描述**
单位播放受击音效
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`sound_id` | 音效资源编号  | [`AudioKey`](../etype#AudioKey) | 
`attack_unit` | 攻击单位  | [`Unit`](../etype#Unit) | 

##### **返回值**
无

### `api_change_animation` <span id="api_change_animation"></span>
##### **描述**
单位替换播放动画
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`target_ani` | 目标动画名字  | [`Str`](../etype#Str) | 
`source_ani` | 原动画名字  | [`Str`](../etype#Str) | 

##### **返回值**
无

### `api_cancel_change_animation` <span id="api_cancel_change_animation"></span>
##### **描述**
取消单位替换播放动画
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`target_ani` | 目标动画名字  | [`Str`](../etype#Str) | 
`source_ani` | 原动画名字  | [`Str`](../etype#Str) | 

##### **返回值**
无

### `api_clear_change_animation` <span id="api_clear_change_animation"></span>
##### **describe**
Cancel all unit replacement play animations
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`source_ani` | original animation name | [`Str`](../etype#Str) |

##### **return value**
none

### `api_change_model` <span id="api_change_model"></span>
##### **describe**
unit replacement model
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`target_model` | target model number | [`ModelKey`](../etype#ModelKey) |
`source_model` | source model number | [`ModelKey`](../etype#ModelKey) |

##### **return value**
none

### `api_cancel_change_model` <span id="api_cancel_change_model"></span>
##### **describe**
Cancel Unit Replacement Model
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`target_model` | target model number | [`ModelKey`](../etype#ModelKey) |
`source_model` | source model number | [`ModelKey`](../etype#ModelKey) |

##### **return value**
none

### `api_clear_change_model` <span id="api_clear_change_model"></span>
##### **describe**
Cancel all replacement models for the unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`source_model` | source model number | [`ModelKey`](../etype#ModelKey) |

##### **return value**
none

### `api_replace_model` <span id="api_replace_model"></span>
##### **describe**
unit replacement model
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`target_model` | target model number | [`ModelKey`](../etype#ModelKey) |

##### **return value**
none

### `api_cancel_replace_model` <span id="api_cancel_replace_model"></span>
##### **describe**
Cancel Unit Replacement Model
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`target_model` | target model name | [`ModelKey`](../etype#ModelKey) |

##### **return value**
none

### `api_show_health_bar_count_down` <span id="api_show_health_bar_count_down"></span>
##### **describe**
Show health bar countdown
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`left_time` | countdown time, in seconds | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_get_model` <span id="api_get_model"></span>
##### **describe**
get unit model
##### **parameters**
none

##### **return value**
`ModelKey` : Model number

### `api_get_source_model` <span id="api_get_source_model"></span>
##### **describe**
Get the original model of the unit
##### **parameters**
none

##### **return value**
`ModelKey` : Model number

### `api_show_text` <span id="api_show_text"></span>
##### **describe**
Display unit overhead text
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`text` | Display information | [`Str`](../etype#Str) |
`second` | duration, in seconds | [`Fixed`](../etype#Fixed) |
`localize` | multi-locale | [`Int32`](../etype#Int32) | 0

##### **return value**
none

### `api_set_title` <span id="api_set_title"></span>
##### **describe**
Change unit name
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`title_str` | title | [`Str`](../etype#Str) |
`localize` | Multilingual translation | [`Bool`](../etype#Bool) | False

##### **return value**
none

### `api_set_title_visible` <span id="api_set_title_visible"></span>
##### **describe**
Set Unit Title Visibility
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`visible` | whether to show | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_name_visible` <span id="api_set_name_visible"></span>
##### **describe**
Hide the display unit name. For units without overhead UI, this API does not take effect. Each time the hidden count is +1, each time the display count is -1, the count returns to zero to display the unit name.
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`visible` | whether to show | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_bar_name_visible` <span id="api_set_bar_name_visible"></span>
##### **describe**
Hide the display unit name. For units without overhead UI, this API does not take effect. Each time the hidden count is +1, each time the display count is -1, the count returns to zero to display the unit name.
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`visible` | whether to show | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_bar_name` <span id="api_set_bar_name"></span>
##### **describe**
Set the health bar display name
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`name` | name | [`Str`](../etype#Str) |

##### **return value**
none

### `set_bar_name_scale` <span id="set_bar_name_scale"></span>
##### **describe**
Set health bar display name scaling
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`scale` | scale | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_bar_name_font_type` <span id="api_set_bar_name_font_type"></span>
##### **describe**
Set the blood bar display name font
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`font_name` | font name | [`Str`](../etype#Str) |

##### **return value**
none

### `api_set_bar_name_font_size` <span id="api_set_bar_name_font_size"></span>
##### **describe**
Set the font size of the blood bar display name
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`size` | font size | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_bar_text_visible` <span id="api_set_bar_text_visible"></span>
##### **describe**
Hide and display the text above the head of the unit, the count of each hide is +1, the count of each display is -1, and the count is reset to zero to display the text above the head of the unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`visible` | whether to show | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_bar_text_scale` <span id="api_set_bar_text_scale"></span>
##### **describe**
Sets the overhead display text zoom
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`scale` | scale | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_bar_text_type` <span id="api_set_bar_text_type"></span>
##### **describe**
Set the type of text displayed on the top of the head
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`bar_text_type` | type | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_bar_text_font_type` <span id="api_set_bar_text_font_type"></span>
##### **describe**
Set the font of the text displayed on the top of the head
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`font_type` | font | [`Str`](../etype#Str) |

##### **return value**
none

### `api_set_bar_text_font_size` <span id="api_set_bar_text_font_size"></span>
##### **describe**
Set the font size of the text displayed on the top of the head
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`font_size` | font size | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_bar_name_show_type` <span id="api_set_bar_name_show_type"></span>
##### **describe**
Set the display style of the health bar name
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`t` | Style, see **HeadBarShowNameType** | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_hp_bar_visible` <span id="api_set_hp_bar_visible"></span>
##### **describe**
Hide and display unit health bar. For units without overhead UI, this API does not take effect. Each time you hide the count +1, each time you display the count -1, the count returns to zero to display the unit health bar.
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`visible` | whether to show | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_hp_bar_show_type` <span id="api_set_hp_bar_show_type"></span>
##### **describe**
Set the display style of the unit's health bar. This API does not take effect for units without overhead UI.
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`t` | Display style, see **HeadBarShowType** | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_hp_bar_type` <span id="api_set_hp_bar_type"></span>
##### **describe**
Set the unit health bar style, this API does not take effect for units without overhead UI
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`t` | Health bar style | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_add_ui_comp` <span id="api_add_ui_comp"></span>
##### **describe**
Bind UI controls
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ui_comp` | UI Controls | [`WorldUINode`](../etype#WorldUINode) |
`socket_name` | mount point (need to confirm that the model has this mount point, the mount point can be viewed in the model properties, see **ModelSocket** for the specific mount point type) | [`Str`](../etype#Str) |

##### **return value**
none

### `api_change_title_font_size` <span id="api_change_title_font_size"></span>
##### **describe**
Modify unit name and font size
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`font_size` | font size | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_change_title_scale` <span id="api_change_title_scale"></span>
##### **describe**
Modify unit title scaling
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`scale` | scale | [`Float`](../etype#Float) |

##### **return value**
none

### `api_change_title_font_type` <span id="api_change_title_font_type"></span>
##### **describe**
Modify unit title font
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`font_name` | font | [`Str`](../etype#Str) |

##### **return value**
none

### `api_change_title_type` <span id="api_change_title_type"></span>
##### **describe**
Modify unit title style
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`style_type` | title style | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_title_bg_opacity` <span id="api_set_title_bg_opacity"></span>
##### **describe**
Modify unit title background opacity
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`opacity` | opacity | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_title_bg_scale` <span id="api_set_title_bg_scale"></span>
##### **describe**
Modify unit title background scaling
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`scale` | scale | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_blood_scale_visible` <span id="api_set_blood_scale_visible"></span>
##### **describe**
Modify unit health bar scale visibility
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`visible` | visibility | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_title_bar_pos_offset` <span id="api_set_title_bar_pos_offset"></span>
##### **describe**
Modify unit title position offset
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`offset` | position offset | [`Vector2`](../etype#Vector2) |

##### **return value**
none

### `api_set_hp_bar_pos_offset` <span id="api_set_hp_bar_pos_offset"></span>
##### **describe**
Modify unit health bar position offset
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`offset` | position offset | [`Vector2`](../etype#Vector2) |

##### **return value**
none

### `api_set_name_bar_pos_offset` <span id="api_set_name_bar_pos_offset"></span>
##### **describe**
Modify unit name position offset
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`offset` | position offset | [`Vector2`](../etype#Vector2) |

##### **return value**
none

### `api_set_text_bar_pos_offset` <span id="api_set_text_bar_pos_offset"></span>
##### **describe**
Modify unit text position offset
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`offset` | position offset | [`Vector2`](../etype#Vector2) |

##### **return value**
none

### `api_set_countdown_bar_pos_offset` <span id="api_set_countdown_bar_pos_offset"></span>
##### **describe**
Modify unit countdown position offset
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`offset` | position offset | [`Vector2`](../etype#Vector2) |

##### **return value**
none

### `api_raise_height` <span id="api_raise_height"></span>
##### **describe**
unit raised
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`y` | raise height | [`Fixed`](../etype#Fixed) |
`dt` | time | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_get_height` <span id="api_get_height"></span>
##### **describe**
Get unit height
##### **parameters**
none

##### **return value**
`Fixed` : model height

### `api_set_scale` <span id="api_set_scale"></span>
##### **describe**
Set unit scaling
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`scale` | scale | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_blood_bar_type` <span id="api_set_blood_bar_type"></span>
##### **describe**
Modify unit health bar style
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`blood_bar_type` | blood bar style | [`UInt64`](../etype#UInt64) |

##### **return value**
none

### `api_set_blood_bar_show_type` <span id="api_set_blood_bar_show_type"></span>
##### **describe**
Modify unit health bar display mode
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`blood_bar_show_type` | Blood bar display mode | [`UInt64`](../etype#UInt64) |

##### **return value**
none

### `api_start_ghost` <span id="api_start_ghost"></span>
##### **describe**
Enable afterimage
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`r` | r | [`Fixed`](../etype#Fixed) | Fix32(255.0)
`g` | g | [`Fixed`](../etype#Fixed) | Fix32(255.0)
`b` | b | [`Fixed`](../etype#Fixed) | Fix32(255.0)
`a` | a | [`Fixed`](../etype#Fixed) | Fix32(255.0)
`interval` | interval | [`Fixed`](../etype#Fixed) | Fix32(0.3)
`duration` | duration | [`Fixed`](../etype#Fixed) | Fix32(0.5)
`start` | start | [`Fixed`](../etype#Fixed) | Fix32(0.4)
`end` | end | [`Fixed`](../etype#Fixed) | Fix32(0.3)

##### **return value**
none

### `api_stop_ghost` <span id="api_stop_ghost"></span>
##### **describe**
Turn off afterimages
##### **parameters**
none

##### **return value**
none

### `api_set_ghost_color` <span id="api_set_ghost_color"></span>
##### **describe**
Set afterimage color
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`r` | r | [`Fixed`](../etype#Fixed) |
`g` | g | [`Fixed`](../etype#Fixed) |
`b` | b | [`Fixed`](../etype#Fixed) |
`a` | a | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_ghost_time` <span id="api_set_ghost_time"></span>
##### **describe**
Set afterimage time
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`interval` | interval | [`Fixed`](../etype#Fixed) |
`duration` | duration | [`Fixed`](../etype#Fixed) |
`start` | start | [`Fixed`](../etype#Fixed) |
`end` | end | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_modifier` <span id="api_add_modifier"></span>
##### **describe**
Unit adds the effect of the specified number
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`modifier_key` | effect number | [`ModifierKey`](../etype#ModifierKey) |
`from_unit` | source unit object | [`Unit`](../etype#Unit) | None
`from_ability` | associated ability | [`Ability`](../etype#Ability) | None
`time` | duration | [`Fixed`](../etype#Fixed) | Fix32(-1.0)
`cycle_time` | cycle period | [`Fixed`](../etype#Fixed) | Fix32(0.0)
`stack_count` | effect stacks | [`Int32`](../etype#Int32) | 1

##### **return value**
none

### `api_get_modifier_stack_count` <span id="api_get_modifier_stack_count"></span>
##### **describe**
Get the number of effect layers with the specified number on the unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`modifier_key` | effect number | [`ModifierKey`](../etype#ModifierKey) |

##### **return value**
`Int32` : the number of effect layers

### `api_has_modifier` <span id="api_has_modifier"></span>
##### **describe**
Whether the unit has the effect of the specified number
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`modifier_key` | effect number | [`ModifierKey`](../etype#ModifierKey) |

##### **return value**
`Bool` : Whether the unit has the effect of the specified number

### `api_has_modifier_with_tag` <span id="api_has_modifier_with_tag"></span>
##### **describe**
Whether the unit has the effect of the specified tag
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tag` | tag | [`Str`](../etype#Str) |

##### **return value**
`Bool` : Whether the unit has the effect of the specified tag

### `api_get_modifier` <span id="api_get_modifier"></span>
##### **describe**
Get the i-th effect instance with the specified number on the unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`add_index` | effect position | [`Int32`](../etype#Int32) |
`modifier_key` | effect number | [`ModifierKey`](../etype#ModifierKey) |

##### **return value**
none

### `api_get_modifier_count` <span id="api_get_modifier_count"></span>
##### **describe**
Get the number of the i-th effect with the specified number on the unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`modifier_key` | effect number | [`ModifierKey`](../etype#ModifierKey) |

##### **return value**
none

### `api_remove_modifier_instance` <span id="api_remove_modifier_instance"></span>
##### **describe**
Removes the target modifier instance from the target unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tar_modifier` | effect number | [`ModifierEntity`](../etype#ModifierEntity) |

##### **return value**
none

### `api_remove_modifier_type` <span id="api_remove_modifier_type"></span>
##### **describe**
Removes all instances of the target modifier type from the target unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`modifier_key` | effect number | [`ModifierKey`](../etype#ModifierKey) |

##### **return value**
none

### `api_has_modifier_type` <span id="api_has_modifier_type"></span>
##### **describe**
Whether the unit has the effect of the specified type
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`modifier_effect_type` | magic effect type | [`ModifierEffectType`](../etype#ModifierEffectType) |

##### **return value**
`Bool` : Whether the unit has the specified type of magic effect

### `api_delete_all_modifiers_by_effect_type` <span id="api_delete_all_modifiers_by_effect_type"></span>
##### **describe**
Removes the magic effect of the specified effect type on the unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`effect_type` | Effect effect type | [`ModifierEffectType`](../etype#ModifierEffectType) |

##### **return value**
none

### `api_get_all_modifiers` <span id="api_get_all_modifiers"></span>
##### **describe**
Get all magic effects on the unit
##### **parameters**
none

##### **return value**
`ModifierEntity` : magic effect

### `api_add_ability` <span id="api_add_ability"></span>
##### **describe**
unit add skills
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType) |
`ability_id` | Ability ID | [`AbilityKey`](../etype#AbilityKey) |
`ability_index` | skill slot number | [`AbilityIndex`](../etype#AbilityIndex) | -1

##### **return value**
`Ability` : Abilities

### `api_remove_ability_by_index` <span id="api_remove_ability_by_index"></span>
##### **describe**
Units remove skills based on slot
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | ability type | [`Int32`](../etype#Int32) |
`ability_index` | Ability slot | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_remove_abilities_in_type` <span id="api_remove_abilities_in_type"></span>
##### **describe**
Unit removes all skills of a certain type with the specified skill ID
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | ability type | [`Int32`](../etype#Int32) |
`ability_id` | Ability ID | [`AbilityKey`](../etype#AbilityKey) |

##### **return value**
none

### `api_set_ability_level` <span id="api_set_ability_level"></span>
##### **describe**
The unit sets the skill level.
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`modify` | Modification | [`Int32`](../etype#Int32) |
`ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType) |
`ability_index` | skill slot | [`AbilityIndex`](../etype#AbilityIndex) |
`level` | skill level | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_unit_learn_ability` <span id="api_unit_learn_ability"></span>
##### **describe**
unit study skills
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_key` | Ability Type | [`AbilityKey`](../etype#AbilityKey) |

##### **return value**
none

### `api_get_ability_point` <span id="api_get_ability_point"></span>
##### **describe**
Get hero's skill points
##### **parameters**
none

##### **return value**
`Int32` : skill points

### `api_set_ability_point` <span id="api_set_ability_point"></span>
##### **describe**
Set hero's skill points
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_point` | skill point | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_add_ability_point` <span id="api_add_ability_point"></span>
##### **describe**
Increase hero's skill points
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | skill points | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_get_ability` <span id="api_get_ability"></span>
##### **describe**
Acquire skills through skill slots
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType) |
`ability_index` | skill slot | [`AbilityIndex`](../etype#AbilityIndex) |

##### **return value**
`Ability` : skill object

### `api_get_ability_by_type` <span id="api_get_ability_by_type"></span>
##### **describe**
Obtain skills by adding skill type and skill ID
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType) |
`ability_id` | Ability ID | [`AbilityKey`](../etype#AbilityKey) |

##### **return value**
`Ability` : skill object

### `api_get_abilities_by_type` <span id="api_get_abilities_by_type"></span>
##### **describe**
Get a list of skills of a certain type
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType) |

##### **return value**
`Ability` : skill object

### `api_check_has_ability_type` <span id="api_check_has_ability_type"></span>
##### **describe**
Is there a skill corresponding to the skill type?
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_id` | Ability Type | [`AbilityKey`](../etype#AbilityKey) |

##### **return value**
`Bool` : Whether there is a skill corresponding to the skill type

### `api_get_all_abilities_can_show` <span id="api_get_all_abilities_can_show"></span>
##### **describe**
Get a list of unit skills
##### **parameters**
none

##### **return value**
`Ability` : skill object

### `api_switch_ability` <span id="api_switch_ability"></span>
##### **describe**
exchange skills
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_1` | Abilities | [`Ability`](../etype#Ability) |
`ability_2` | Abilities | [`Ability`](../etype#Ability) |

##### **return value**
none

### `api_disable_ability` <span id="api_disable_ability"></span>
##### **describe**
Unit disables skills.
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType) |
`ability_index` | skill slot | [`AbilityIndex`](../etype#AbilityIndex) |

##### **return value**
none

### `api_enable_ability` <span id="api_enable_ability"></span>
##### **describe**
Unit unlocking skills.
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType) |
`ability_index` | skill slot | [`AbilityIndex`](../etype#AbilityIndex) |

##### **return value**
none

### `api_get_ability_str_attr_value` <span id="api_get_ability_str_attr_value"></span>
##### **describe**
Returns the string attribute value of the specified slot skill of the unit entity
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | Ability Type | [`AbilityType`](../etype#AbilityType) |
`ability_index` | skill slot | [`AbilityIndex`](../etype#AbilityIndex) |
`prop` | property name | [`Str`](../etype#Str) |

##### **return value**
`Str` : character

### `api_get_ability_by_seq` <span id="api_get_ability_by_seq"></span>
##### **describe**
Get the skill object according to the skill serial number
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`seq` | ​​Skill number | [`AbilitySeq`](../etype#AbilitySeq) |

##### **return value**
`Ability` : skill object

### `api_add_state` <span id="api_add_state"></span>
##### **describe**
Apply a state to a unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`state_id` | State ID | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_remove_state` <span id="api_remove_state"></span>
##### **describe**
remove state from unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`state_id` | State ID | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_is_in_battle_state` <span id="api_is_in_battle_state"></span>
##### **describe**
Are you in combat
##### **parameters**
none

##### **return value**
`Bool` : is in combat state

### `api_has_state` <span id="api_has_state"></span>
##### **describe**
Is the unit in a state
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`state_bit` | state | [`Int32`](../etype#Int32) |

##### **return value**
`Bool` : whether the unit is in a certain state

### `api_release_ability_by_index` <span id="api_release_ability_by_index"></span>
##### **describe**
unit cast skill
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | ability type | [`Int32`](../etype#Int32) |
`ability_index` | Ability slot | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_release_ability_at_position` <span id="api_release_ability_at_position"></span>
##### **describe**
A unit casts a skill with a release target location
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`ability_type` | ability type | [`Int32`](../etype#Int32) |
`ability_index` | skill slot | [`Int32`](../etype#Int32) |
`postion` | skill target position | [`Point`](../etype#Point) |

##### **return value**
none

### `api_create_building_on_point` <span id="api_create_building_on_point"></span>
##### **describe**
Issue a build order (target point)
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`build_key` | building type | [`UnitKey`](../etype#UnitKey) |
`point` | target position | [`Point`](../etype#Point) |

##### **return value**
none

### `api_create_building_on_position` <span id="api_create_building_on_position"></span>
##### **describe**
Issue a build order (coordinates)
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`build_key` | building type | [`UnitKey`](../etype#UnitKey) |
`pos_x` | coordinate X | [`Fixed`](../etype#Fixed) |
`pos_z` | coordinate Z | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_has_item` <span id="api_has_item"></span>
##### **describe**
Whether the unit owns the item
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`item` | item | [`Item`](../etype#Item) |

##### **return value**
`Bool` : whether the unit owns the item

### `api_has_item_key` <span id="api_has_item_key"></span>
##### **describe**
Whether the unit owns a specific numbered item
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`item_no` | item number | [`ItemKey`](../etype#ItemKey) |

##### **return value**
`Bool` : whether the unit owns a specific numbered item

### `api_add_item` <span id="api_add_item"></span>
##### **describe**
Add item names to units
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`item_no` | item number | [`ItemKey`](../etype#ItemKey) |

##### **return value**
`Item` : the created item entity

### `api_delete_item` <span id="api_delete_item"></span>
##### **describe**
Delete item name from unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`item_key` | item number | [`ItemKey`](../etype#ItemKey) |
`num` | number | [`Int32`](../etype#Int32) | 1

##### **return value**
none

### `api_drop_item` <span id="api_drop_item"></span>
##### **describe**
Units drop item entities into the scene
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`item` | item | [`Item`](../etype#Item) |
`pos` | point | [`FPoint`](../etype#FPoint) |
`stack_cnt` | number | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_remove_item` <span id="api_remove_item"></span>
##### **describe**
unit delete item entity
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`stack_cnt` | number | [`Int32`](../etype#Int32) |
`item` | item | [`Item`](../etype#Item) |

##### **return value**
none

### `api_get_item_by_slot` <span id="api_get_item_by_slot"></span>
##### **describe**
Get items from a unit's backpack slot
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`slot_type` | Backpack slot | [`SlotType`](../etype#SlotType) |
`slot_idx` | Slot subscript | [`Int32`](../etype#Int32) |

##### **return value**
`Item` : the item object

### `api_shift_item` <span id="api_shift_item"></span>
##### **describe**
moving items
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`item` | item | [`Item`](../etype#Item) |
`slot_type` | Backpack slot | [`SlotType`](../etype#SlotType) |
`slot_idx` | Slot subscript | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_get_all_item_pids` <span id="api_get_all_item_pids"></span>
##### **describe**
All items on the unit
##### **parameters**
none

##### **return value**
`ItemGroup` : item group

### `api_is_shop` <span id="api_is_shop"></span>
##### **describe**
Whether the unit is a store
##### **parameters**
none

##### **return value**
`Bool` : whether the unit is a store

### `api_get_shop_range` <span id="api_get_shop_range"></span>
##### **describe**
Get store unit range
##### **parameters**
none

##### **return value**
`Fixed` : store scope

### `api_add_shop_item` <span id="api_add_shop_item"></span>
##### **describe**
Add items to the store
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_name` | Tabs | [`TabName`](../etype#TabName) |
`item_no` | item number | [`ItemKey`](../etype#ItemKey) |

##### **return value**
none

### `api_get_shop_item_list` <span id="api_get_shop_item_list"></span>
##### **describe**
Get the list of products on a page of the store
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_idx` | Tab id | [`TabIdx`](../etype#TabIdx) |

##### **return value**
`ItemKey` : item number

### `api_get_shop_item_cd` <span id="api_get_shop_item_cd"></span>
##### **describe**
Get recovery time for store items
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_idx` | Tab id | [`TabIdx`](../etype#TabIdx) |
`item_no` | item number | [`ItemKey`](../etype#ItemKey) |

##### **return value**
none

### `api_get_shop_tab_cnt` <span id="api_get_shop_tab_cnt"></span>
##### **describe**
Get the number of store tabs
##### **parameters**
none

##### **return value**
`ItemKey` : item number

### `api_get_shop_tab_name` <span id="api_get_shop_tab_name"></span>
##### **describe**
Get the store's page signature
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_idx` | Tab id | [`TabIdx`](../etype#TabIdx) |

##### **return value**
`Str` : page signature

### `api_add_shop_unit` <span id="api_add_shop_unit"></span>
##### **describe**
Add unit items to the store
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_name` | Tabs | [`TabName`](../etype#TabName) |
`entity_no` | Unit number | [`UnitKey`](../etype#UnitKey) |

##### **return value**
none

### `api_remove_shop_item` <span id="api_remove_shop_item"></span>
##### **describe**
delete shop items
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_name` | Tabs | [`TabName`](../etype#TabName) |
`item_no` | item number | [`ItemKey`](../etype#ItemKey) |

##### **return value**
none

### `api_remove_shop_unit` <span id="api_remove_shop_unit"></span>
##### **describe**
Delete store unit items
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_name` | Tabs | [`TabName`](../etype#TabName) |
`entity_no` | Unit number | [`UnitKey`](../etype#UnitKey) |

##### **return value**
none

### `api_set_shop_item_stock` <span id="api_set_shop_item_stock"></span>
##### **describe**
Set item inventory
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_name` | Tabs | [`TabName`](../etype#TabName) |
`item_no` | item number | [`ItemKey`](../etype#ItemKey) |
`cnt` | inventory | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_shop_unit_stock` <span id="api_set_shop_unit_stock"></span>
##### **describe**
Set unit inventory
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_name` | Tabs | [`TabName`](../etype#TabName) |
`entity_no` | Unit number | [`UnitKey`](../etype#UnitKey) |
`cnt` | inventory | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_is_shop` <span id="api_set_is_shop"></span>
##### **describe**
set store switch
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`is_shop` | switch | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_buy_item_with_tab_name` <span id="api_buy_item_with_tab_name"></span>
##### **describe**
unit purchases
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`shop_unit` | shop | [`Unit`](../etype#Unit) |
`tab_idx` | Tab id | [`TabIdx`](../etype#TabIdx) |
`item_no` | item number | [`ItemKey`](../etype#ItemKey) |

##### **return value**
none

### `api_buy_unit_with_tab_name` <span id="api_buy_unit_with_tab_name"></span>
##### **describe**
unit purchase unit
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`shop_unit` | shop | [`Unit`](../etype#Unit) |
`tab_name` | Tabs | [`TabName`](../etype#TabName) |
`entity_no` | Unit number | [`UnitKey`](../etype#UnitKey) |

##### **return value**
none

### `api_sell_item` <span id="api_sell_item"></span>
##### **describe**
unit for sale
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`shop_unit` | shop | [`Unit`](../etype#Unit) |
`item` | props | [`Item`](../etype#Item) |

##### **return value**
none

### `api_set_shop_target` <span id="api_set_shop_target"></span>
##### **describe**
Set store goals
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`target_unit` | target | [`Unit`](../etype#Unit) |

##### **return value**
none

### `api_get_shop_item_stock` <span id="api_get_shop_item_stock"></span>
##### **describe**
Get unit store item item inventory
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_idx` | Tab id | [`TabIdx`](../etype#TabIdx) |
`item_no` | item number | [`ItemKey`](../etype#ItemKey) |

##### **return value**
`Int32` : item inventory

### `api_get_shop_unit_stock` <span id="api_get_shop_unit_stock"></span>
##### **describe**
Get unit store unit item inventory
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_name` | Tabs | [`TabName`](../etype#TabName) |
`entity_no` | Unit number | [`UnitKey`](../etype#UnitKey) |

##### **return value**
`Int32` : item inventory

### `api_get_shop_item_price` <span id="api_get_shop_item_price"></span>
##### **describe**
Get unit store unit price
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tab_name` | Tabs | [`TabName`](../etype#TabName) |
`entity_no` | Unit number | [`UnitKey`](../etype#UnitKey) |

##### **return value**
`Fixed` : the price of the item

### `api_upgrade_tech` <span id="api_upgrade_tech"></span>
##### **describe**
Technology upgrade
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tech_no` | Tech number | [`TechKey`](../etype#TechKey) |

##### **return value**
none

### `api_get_tech_list` <span id="api_get_tech_list"></span>
##### **describe**
Get a list of technologies
##### **parameters**
none

##### **return value**
`TechKey` : Tech key

### `api_check_tech_precondition` <span id="api_check_tech_precondition"></span>
##### **describe**
Whether the acquisition technology meets the preconditions
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tech_no` | Tech number | [`TechKey`](../etype#TechKey) |

##### **return value**
`TechKey` : Tech key

### `api_add_tech` <span id="api_add_tech"></span>
##### **describe**
Add technology
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tech_no` | Tech number | [`TechKey`](../etype#TechKey) |

##### **return value**
none

### `api_remove_tech` <span id="api_remove_tech"></span>
##### **describe**
delete technology
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tech_no` | Tech number | [`TechKey`](../etype#TechKey) |

##### **return value**
none

### `api_release_command` <span id="api_release_command"></span>
##### **describe**
issue an order
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`command` | command | [`UnitCommand`](../etype#UnitCommand) |

##### **return value**
none