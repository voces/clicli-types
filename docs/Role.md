# Role
## describe
player

-----
## method list
Method name | Brief description |
:----- | :--- |
[`api_get_role_id`](#api_get_role_id) | Player gets player ID |
[`api_get_camp_id`](#api_get_camp_id) | Get the ID of the camp the player belongs to |
[`get_role_id_num`](#get_role_id_num) | Get player ID value |
[`get_camp_id_num`](#get_camp_id_num) | Get the ID value of the camp the player belongs to |
[`get_role_name`](#get_role_name) | Get player name |
[`get_role_type`](#get_role_type) | Get player controller type |
[`api_get_camp`](#api_get_camp) | Get the camp object the player belongs to |
[`set_attr_val`](#set_attr_val) | Player set attributes |
[`get_all_unit_id`](#get_all_unit_id) | Get all unit objects of the player |
[`set_role_exp_rate`](#set_role_exp_rate) | Set player experience gain rate |
[`get_role_exp_rate`](#get_role_exp_rate) | Get player experience multiplier |
[`set_role_spawn_point`](#set_role_spawn_point) | Set player spawn point |
[`get_role_spawn_point`](#get_role_spawn_point) | Get the player's spawn point |
[`api_set_camp`](#api_set_camp) | Set player team ID |
[`set_role_name`](#set_role_name) | set player name |
[`change_role_res`](#change_role_res) | Modify player resources |
[`set_role_res`](#set_role_res) | Set player resources |
[`get_role_res`](#get_role_res) | Get player resources |
[`set_group_navigate_mode`](#set_group_navigate_mode) | Set player group pathfinding strict mode |
[`set_save_data_int_value`](#set_save_data_int_value) | Set integer parameter to player save field |
[`set_save_data_fixed_value`](#set_save_data_fixed_value) | Set real number parameter to player save field |
[`set_save_data_bool_value`](#set_save_data_bool_value) | Set boolean parameter to player save field |
[`set_save_data_str_value`](#set_save_data_str_value) | Set string parameter to player save field |
[`upload_save_data`](#upload_save_data) | Upload player save data |
[`download_save_data`](#download_save_data) | Download player save data |
[`reset_download_save_data_callback`](#reset_download_save_data_callback) | Reset download archive data callback |
[`get_save_data_int_value`](#get_save_data_int_value) | Read integer player save data |
[`get_save_data_fixed_value`](#get_save_data_fixed_value) | Read real player save data |
[`get_save_data_bool_value`](#get_save_data_bool_value) | Read boolean player save data |
[`get_save_data_str_value`](#get_save_data_str_value) | Read string type player save data |
[`api_use_store_item`](#api_use_store_item) | Players use paid items |
[`get_store_item_cnt`](#get_store_item_cnt) | Get the number of items charged by the player |
[`get_visibility_of_unit`](#get_visibility_of_unit) | Whether the player has visibility of the unit |
[`api_change_tech_level`](#api_change_tech_level) | Modify player technology level |
[`api_set_tech_level`](#api_set_tech_level) | Modify player technology level |
[`api_get_tech_level`](#api_get_tech_level) | Get player technology level |
[`is_point_visible_to_player`](#is_point_visible_to_player) | Whether the point is visible to the player |
[`is_point_in_fog`](#is_point_in_fog) | Whether the point is in the fog |
[`is_point_in_shadow`](#is_point_in_shadow) | Whether the point is in black shadow |
[`get_role_status`](#get_role_status) | Get player status |
[`set_role_hostility`](#set_role_hostility) | Set whether the player is hostile |
[`players_is_alliance`](#players_is_alliance) | Whether the player is an alliance |
[`players_is_enemy`](#players_is_enemy) | Whether the player is a hostile relationship |
[`share_source_player_vision_to_target`](#share_source_player_vision_to_target) | Original player opens vision to target player |
[`close_source_player_vision_to_target`](#close_source_player_vision_to_target) | Original player closes vision to target player |
[`share_source_unit_vision_to_target`](#share_source_unit_vision_to_target) | The original unit has vision for the target player |
[`close_source_unit_vision_to_target`](#close_source_unit_vision_to_target) | The original unit closes the vision to the target player |
[`role_select_unit`](#role_select_unit) | Selected unit or unit group |
[`set_role_mouse_left_click`](#set_role_mouse_left_click) | Turn on/off player mouse click |
[`set_role_mouse_move_select`](#set_role_mouse_move_select) | Enable/disable the player's mouse box selection |
[`set_role_mouse_wheel`](#set_role_mouse_wheel) | Turn on/off the player's mouse wheel |


-----
## method

### `api_get_role_id` <span id="api_get_role_id"></span>
##### **describe**
Player gets player ID
##### **parameters**
none

##### **return value**
`RoleID` : Player ID

### `api_get_camp_id` <span id="api_get_camp_id"></span>
##### **describe**
Get the faction ID the player belongs to
##### **parameters**
none

##### **return value**
`Int64` : the faction ID the player belongs to

### `get_role_id_num` <span id="get_role_id_num"></span>
##### **describe**
Get player ID value
##### **parameters**
none

##### **return value**
`UInt32` : Player ID value

### `get_camp_id_num` <span id="get_camp_id_num"></span>
##### **describe**
Get the player's faction ID value
##### **parameters**
none

##### **return value**
`UInt32` : The player's faction ID value

### `get_role_name` <span id="get_role_name"></span>
##### **describe**
Get player name
##### **parameters**
none

##### **return value**
`Str` : player name

### `get_role_type` <span id="get_role_type"></span>
##### **describe**
Get player controller type
##### **parameters**
none

##### **return value**
`RoleType` : the player controller type

### `api_get_camp` <span id="api_get_camp"></span>
##### **describe**
Get the faction object the player belongs to
##### **parameters**
none

##### **return value**
`Camp` : the camp object

### `set_attr_val` <span id="set_attr_val"></span>
##### **describe**
Player settings
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`k` | attribute name | [`Str`](../etype#Str) |
`value` | property value | [`Int32`](../etype#Int32) |

##### **return value**
none

### `get_all_unit_id` <span id="get_all_unit_id"></span>
##### **describe**
Get all unit objects of the player
##### **parameters**
none

##### **return value**
`UnitGroup` : list of unit objects

### `set_role_exp_rate` <span id="set_role_exp_rate"></span>
##### **describe**
Set player experience gain rate
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`rate` | Magnification | [`Float`](../etype#Float) |

##### **return value**
none

### `get_role_exp_rate` <span id="get_role_exp_rate"></span>
##### **describe**
Gain player experience multiplier
##### **parameters**
none

##### **return value**
`Fixed` : returns the magnification

### `set_role_spawn_point` <span id="set_role_spawn_point"></span>
##### **describe**
Set player spawn point
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`point` | 点  | [`Point`](../etype#Point) | 

##### **return value**
none

### `get_role_spawn_point` <span id="get_role_spawn_point"></span>
##### **describe**
Get player spawn point
##### **parameters**
none

##### **return value**
`FVector3` : returns the spawn location

### `api_set_camp` <span id="api_set_camp"></span>
##### **describe**
Set player team ID
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`new_camp` | Team ID | [`Camp`](../etype#Camp) |

##### **return value**
none

### `set_role_name` <span id="set_role_name"></span>
##### **describe**
set player name
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`name` | name | [`Str`](../etype#Str) |

##### **return value**
none

### `change_role_res` <span id="change_role_res"></span>
##### **describe**
Modify player resources
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`res_key` | resource name | [`RoleResKey`](../etype#RoleResKey) |
`res_cnt` | resource value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `set_role_res` <span id="set_role_res"></span>
##### **describe**
Set up player resources
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`res_key` | resource name | [`RoleResKey`](../etype#RoleResKey) |
`res_cnt` | resource value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `get_role_res` <span id="get_role_res"></span>
##### **describe**
Get player resources
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`res_key` | resource name | [`RoleResKey`](../etype#RoleResKey) |

##### **return value**
`Fixed` : resource value

### `set_group_navigate_mode` <span id="set_group_navigate_mode"></span>
##### **describe**
Set player group pathfinding strict mode
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`group_navigate_mode` | Enable group pathfinding strict mode | [`Bool`](../etype#Bool) |

##### **return value**
none

### `set_save_data_int_value` <span id="set_save_data_int_value"></span>
##### **describe**
Set integer parameter to player save field
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`index` | Player save field | [`Int32`](../etype#Int32) |
`value` | integer parameter | [`Int32`](../etype#Int32) |

##### **return value**
none

### `set_save_data_fixed_value` <span id="set_save_data_fixed_value"></span>
##### **describe**
Set the real parameter to the player's save field
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`index` | Player save field | [`Int32`](../etype#Int32) |
`value` | real parameter | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `set_save_data_bool_value` <span id="set_save_data_bool_value"></span>
##### **describe**
Set boolean parameter to player save field
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`index` | Player save field | [`Int32`](../etype#Int32) |
`value` | boolean parameter | [`Bool`](../etype#Bool) |

##### **return value**
none

### `set_save_data_str_value` <span id="set_save_data_str_value"></span>
##### **describe**
Set string parameter to player save field
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`index` | Player save field | [`Int32`](../etype#Int32) |
`value` | String parameter | [`Str`](../etype#Str) |

##### **return value**
none

### `upload_save_data` <span id="upload_save_data"></span>
##### **describe**
Upload player save data
##### **parameters**
none

##### **return value**
none

### `download_save_data` <span id="download_save_data"></span>
##### **describe**
Download player save data
##### **parameters**
none

##### **return value**
none

### `reset_download_save_data_callback` <span id="reset_download_save_data_callback"></span>
##### **describe**
Reset download archive data callback
##### **parameters**
none

##### **return value**
none

### `get_save_data_int_value` <span id="get_save_data_int_value"></span>
##### **describe**
Read integer player save data
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`index` | Player save field | [`Int32`](../etype#Int32) |

##### **return value**
`Int32` : Integer

### `get_save_data_fixed_value` <span id="get_save_data_fixed_value"></span>
##### **describe**
Read real-number player save data
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`index` | Player save field | [`Int32`](../etype#Int32) |

##### **return value**
`Fixed` : fixed point number

### `get_save_data_bool_value` <span id="get_save_data_bool_value"></span>
##### **describe**
Read boolean player save data
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`index` | Player save field | [`Int32`](../etype#Int32) |

##### **return value**
`Bool` : boolean value

### `get_save_data_str_value` <span id="get_save_data_str_value"></span>
##### **describe**
Read string type player save data
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`index` | Player save field | [`Int32`](../etype#Int32) |

##### **return value**
`Str` : string

### `api_use_store_item` <span id="api_use_store_item"></span>
##### **describe**
Players use paid items
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`cnt` | quantity | [`UInt32`](../etype#UInt32) |
`no` | Charge item KEY | [`StoreKey`](../etype#StoreKey) |

##### **return value**
none

### `get_store_item_cnt` <span id="get_store_item_cnt"></span>
##### **describe**
Get the number of paid items for players
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`no` | Charge item key | [`StoreKey`](../etype#StoreKey) |

##### **return value**
`UInt32` : number of chargeable items

### `get_visibility_of_unit` <span id="get_visibility_of_unit"></span>
##### **describe**
Whether the player has visibility of the unit
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`unit` | unit | [`Unit`](../etype#Unit) |

##### **return value**
`Bool` : is it visible

### `api_change_tech_level` <span id="api_change_tech_level"></span>
##### **describe**
Modify player technology level
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`tech_no` | Tech number | [`TechKey`](../etype#TechKey) |
`delta_lv` | delta level | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_set_tech_level` <span id="api_set_tech_level"></span>
##### **describe**
Modify player technology level
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`tech_no` | Tech number | [`TechKey`](../etype#TechKey) |
`lv` | level | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_get_tech_level` <span id="api_get_tech_level"></span>
##### **describe**
Get player tech level
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`tech_no` | Tech number | [`TechKey`](../etype#TechKey) |

##### **return value**
`UInt32` : technology level

### `is_point_visible_to_player` <span id="is_point_visible_to_player"></span>
##### **describe**
Whether the point is visible to the player
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`point` | Point | [`FPoint`](../etype#FPoint) |

##### **return value**
`Bool` : boolean value

### `is_point_in_fog` <span id="is_point_in_fog"></span>
##### **describe**
Is the point in the fog
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`point` | Point | [`FPoint`](../etype#FPoint) |

##### **return value**
`Bool` : boolean value

### `is_point_in_shadow` <span id="is_point_in_shadow"></span>
##### **describe**
whether the point is in black shadow
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`point` | Point | [`FPoint`](../etype#FPoint) |

##### **return value**
`Bool` : boolean value

### `get_role_status` <span id="get_role_status"></span>
##### **describe**
Get player status
##### **parameters**
none

##### **return value**
`RoleStatus` : player status

### `set_role_hostility` <span id="set_role_hostility"></span>
##### **describe**
Set whether the player is a hostile relationship
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`role` | player | [`Role`](../etype#Role) |
`is_enemy` | player | [`Role`](../etype#Role) |

##### **return value**
none

### `players_is_alliance` <span id="players_is_alliance"></span>
##### **describe**
Whether the player is an alliance
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`role` | player | [`Role`](../etype#Role) |

##### **return value**
`Bool` : return value

### `players_is_enemy` <span id="players_is_enemy"></span>
##### **describe**
Whether the player is hostile
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`role` | player | [`Role`](../etype#Role) |

##### **return value**
`Bool` : return value

### `share_source_player_vision_to_target` <span id="share_source_player_vision_to_target"></span>
##### **describe**
Original player opens vision to target player
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`role_2` | player | [`Role`](../etype#Role) |

##### **return value**
`Bool` : return value

### `close_source_player_vision_to_target` <span id="close_source_player_vision_to_target"></span>
##### **describe**
The original player closes the field of view to the target player
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`role_2` | player | [`Role`](../etype#Role) |

##### **return value**
`Bool` : return value

### `share_source_unit_vision_to_target` <span id="share_source_unit_vision_to_target"></span>
##### **describe**
The original unit opens sight to the target player
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`unit` | unit | [`Unit`](../etype#Unit) |

##### **return value**
`Bool` : return value

### `close_source_unit_vision_to_target` <span id="close_source_unit_vision_to_target"></span>
##### **describe**
The original unit closes vision to the target player
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`unit` | unit | [`Unit`](../etype#Unit) |

##### **return value**
`Bool` : return value

### `role_select_unit` <span id="role_select_unit"></span>
##### **describe**
Selected unit or unit group
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`unit_or_unit_groupd` | unit or unit group | [`DynamicTypeMeta`](../etype#DynamicTypeMeta) |

##### **return value**
none

### `set_role_mouse_left_click` <span id="set_role_mouse_left_click"></span>
##### **describe**
On/off player mouse click
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`value` | on/off | [`Bool`](../etype#Bool) |

##### **return value**
none

### `set_role_mouse_move_select` <span id="set_role_mouse_move_select"></span>
##### **describe**
Turn on/off the box selection of the player's mouse
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`value` | on/off | [`Bool`](../etype#Bool) |

##### **return value**
none

### `set_role_mouse_wheel` <span id="set_role_mouse_wheel"></span>
##### **describe**
Turns the player's mouse wheel on/off
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`value` | on/off | [`Bool`](../etype#Bool) |

##### **return value**
none