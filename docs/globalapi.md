# GlobalAPI
## Description
globalapi

-----
## List of Functions
Name  | Description  |
:----- | :--- |
[`has_tag`](#has_tag) | Determine whether the actor has a tag. |
[`filter_by_tag`](#filter_by_tag) | Filter to return a list of actors with tags. |
[`filter_by_int_kv`](#filter_by_int_kv) | Filter to return a list of actors with equal integer key values. |
[`filter_by_bool_kv`](#filter_by_bool_kv) | Filter to return a list of actors with equal Boolean key values. |
[`filter_by_str_kv`](#filter_by_str_kv) | Filter to return a list of actors with equal string key values. |
[`filter_by_fixed_kv`](#filter_by_fixed_kv) | Filter to return a list of actors with equal fixed-point key values. |
[`set_actor_trigger_enabled`](#set_actor_trigger_enabled) | Set the actor’s trigger enabled. |
[`restart_actor_trigger_enabled`](#restart_actor_trigger_enabled) | Restart the actor’s trigger. |
[`trigger_actor_trigger`](#trigger_actor_trigger) | Trigger the actor’s trigger. |
[`reg_actor_trigger`](#reg_actor_trigger) | Register the actor’s trigger and make it valid. |
[`unreg_actor_trigger`](#unreg_actor_trigger) | Remove the actor’s trigger.  |
[`point_subtract_point`](#point_subtract_point) | Subtract two points to get a vector. |
[`vector_rotate_angle`](#vector_rotate_angle) | Rotate the vector by a specified angle. |
[`create_sector_shape`](#create_sector_shape) | Create a sector. |
[`create_circular_shape`](#create_circular_shape) | Create a circle. |
[`create_rectangle_shape`](#create_rectangle_shape) | Create a rectangle. |
[`create_annular_shape`](#create_annular_shape) | Create an annulus. |
[`coord_to_point`](#coord_to_point) | Convert coordinate values to FVector3. |
[`int_iterator`](#int_iterator) | Integer iterator with the maximum number of iterations not exceeding 2^20.  |
[`int_iterator2`](#int_iterator2) | Integer iterator. |
[`list_iterator`](#list_iterator) | List iterator. |
[`list_index_iterator`](#list_index_iterator) | List index iterator. |
[`int32_arithmetic_operation`](#int32_arithmetic_operation) | Int32 arithmetic operation. |
[`int32_plus_one`](#int32_plus_one) | Automatically increment by 1 for int32. |
[`int32_min`](#int32_min) | Get the smaller of two 32-bit integers. |
[`int32_max`](#int32_max) | Get the larger of two 32-bit integers. |
[`get_point_offset_vector`](#get_point_offset_vector) | Get the point offset to the vector. |
[`int8_to_str`](#int8_to_str) | Convert int8 to string. |
[`int16_to_str`](#int16_to_str) | Convert int16 to string.  |
[`int32_to_str`](#int32_to_str) | Convert int32 to string.  |
[`int64_to_str`](#int64_to_str) | Convert int64 to string.  |
[`uint8_to_str`](#uint8_to_str) | Convert uint8 to string.  |
[`uint16_to_str`](#uint16_to_str) | Convert uint16 to string. |
[`uint32_to_str`](#uint32_to_str) | Convert uint32 to string. |
[`uint64_to_str`](#uint64_to_str) |Convert uint64 to string. |
[`api_remove_kv`](#api_remove_kv) | Delete key-value pair. |
[`add_texture_kv`](#add_texture_kv) | Get image-type key-value pair. |
[`get_unit_key_pool_num`](#get_unit_key_pool_num) | Get the number of unit IDs in the unit ID pool. |
[`plane_range_between_2_point`](#plane_range_between_2_point) | Distance between two points. |
[`i2fixed`](#i2fixed) | Convert integer to fixed-point number. |
[`fixed2i`](#fixed2i) | Convert fixed-point number to integer.  |
[`int32_to_fixed`](#int32_to_fixed) | Convert 32-bit integer to fixed-point number. |
[`fixed_to_int32`](#fixed_to_int32) | Convert fixed-point number to 32-bit integer. |
[`int32_to_float`](#int32_to_float) | Convert 32-bit integer to floating-point number.  |
[`float_to_int32`](#float_to_int32) | Convert floating-point number to 32-bit integer. |
[`ability_index_to_int32`](#ability_index_to_int32) | Convert ability slot to 32-bit integer. |
[`fixed_to_str`](#fixed_to_str) | Convert fixed-point number to string. |
[`fvector3_to_str`](#fvector3_to_str) | Convert fixed-point FVectors3 to string. |
[`fvector2_to_str`](#fvector2_to_str) | Convert fixed-point FVector2 to string. |
[`float_to_str`](#float_to_str) | Convert floating-point number to string. |
[`vector3_to_str`](#vector3_to_str) | Convert floating-point Vector3 to string. |
[`vector2_to_str`](#vector2_to_str) | Convert floating-point Vector2 to string. |
[`shape_to_str`](#shape_to_str) | Convert shape to string. |
[`dynamic_to_str`](#dynamic_to_str) | Convert dynamic number to string. |
[`bool_to_str`](#bool_to_str) | Convert Boolean to string. |
[`i2s`](#i2s) | Convert integer to string. |
[`join_s`](#join_s) | Splice strings. |
[`fixed_arithmetic_operation`](#fixed_arithmetic_operation) | Arithmetic operation of fixed-point numbers. |
[`fixed_plus_one`](#fixed_plus_one) | Automatically increment by 1 for fixed-point numbers. |
[`fixed_min`](#fixed_min) | Get the minimum value between two fixed-point numbers. |
[`fixed_max`](#fixed_max) | Get the maximum value between two fixed-point numbers. |
[`float_arithmetic_operation`](#float_arithmetic_operation) | Arithmetic operation of floating-point numbers. |
[`degree_to_radian`](#degree_to_radian) | Convert degree to radian. |
[`radian_to_degree`](#radian_to_degree) | Convert radian to degree. |
[`radian_sin`](#radian_sin) | Sin. |
[`radian_cos`](#radian_cos) | Cos. |
[`radian_tan`](#radian_tan) | Tan. |
[`radian_asin`](#radian_asin) | Arcsin. |
[`radian_acos`](#radian_acos) | Arccos. |
[`radian_atan`](#radian_atan) | Arctan. |
[`radian_atan_x_y`](#radian_atan_x_y) | Arctan (Y:X). |
[`sqrt`](#sqrt) | Square root. |
[`pow`](#pow) | Request power. |
[`abs`](#abs) | Request modulus. |
[`is_approximate`](#is_approximate) | Whether they are approximate. |
[`interval`](#interval) | Interval. |
[`nearest_quadratic_number`](#nearest_quadratic_number) | Find the nearest square number. |
[`degree_between_vectors`](#degree_between_vectors) | Acute angle between two vectors. |
[`ceil`](#ceil) | Min integer. |
[`floor`](#floor) | Max integer. |
[`is_quadratic_number`](#is_quadratic_number) | Whether it is a quadratic number. |
[`interpolate`](#interpolate) | Interpolation. |
[`invert_interpolate`](#invert_interpolate) | Inverse interpolation. |
[`log10`](#log10) | Log10. |
[`log`](#log) | Log. |
[`get_max_in_list`](#get_max_in_list) | Return the maximum value in the list. |
[`get_min_in_list`](#get_min_in_list) | Return the minimum value in the list. |
[`round`](#round) | Round. |
[`sign`](#sign) | Return positive/negative sign. |
[`fixed_trigonometric_operation`](#fixed_trigonometric_operation) | Trigonometric function operations of fixed-point numbers. |
[`float_trigonometric_operation`](#float_trigonometric_operation) | Trigonometric function operations of floating-point numbers. |
[`vector_to_angle`](#vector_to_angle) | Convert vector to degree-measured fixed-point number. |
[`angle_to_vector`](#angle_to_vector) | Convert degree-measured fixed-point number to vector. |
[`fixed_to_vector`](#fixed_to_vector) | Construct the vector of fixed-point numbers. |
[`angle_to_radius`](#angle_to_radius) | Convert angle to radian. |
[`radius_to_angle`](#radius_to_angle) | Convert radian to angle. |
[`get_player_group_num`](#get_player_group_num) | Get the number of players in the player group. |
[`get_related_ability`](#get_related_ability) | Get Actor-associated abilities. |
[`add_actor_timer`](#add_actor_timer) | Add timer to Actor. |
[`stop_actor_timer`](#stop_actor_timer) | Stop Actor’s timer. |
[`get_fixed_coord_index`](#get_fixed_coord_index) | Get one of FVector3 values. |
[`get_float_coord_index`](#get_float_coord_index) | Get one of Vector3 values. |
[`get_float_2_index`](#get_float_2_index) | Get one of Vector2 values. |
[`clear_group`](#clear_group) | Clear group. |
[`set_list_with_length`](#set_list_with_length) | Assign the value of the second list to the first list without changing the length of the first one. |
[`judge_role_in_group`](#judge_role_in_group) | Determine whether the player is in the player group. |
[`is_unit_alive`](#is_unit_alive) | Determine whether the unit is alive. |
[`get_empty_unit_key_pool`](#get_empty_unit_key_pool) | Get the empty unit ID pool. |
[`get_route_start`](#get_route_start) | Get the starting point of the path. |
[`get_route_end`](#get_route_end) | Get the ending point of the path. |
[`get_point_in_route`](#get_point_in_route) | Get some point in path. |
[`get_point_nearest_road_list`](#get_point_nearest_road_list) | Get the nearest point from [point] in path. |
[`get_point_rotate_y`](#get_point_rotate_y) | Get the point rotating around Y-axis (degrees). |
[`str_to_int`](#str_to_int) | Convert string to integer. |
[`str_to_fixed`](#str_to_fixed) | Convert string to fixed-point number. |
[`delete_sub_str`](#delete_sub_str) | Delete substring. |
[`extract_str`](#extract_str) | Slice substring. |
[`length_of_str`](#length_of_str) | Get the length of the string. |
[`str_to_upper_lower`](#str_to_upper_lower) | Unify upper/lower case for string. |
[`pos_in_str`](#pos_in_str) | Position of substring. |

-----
## Functions

### `has_tag` <span id="has_tag"></span>
##### **Description**
Determine whether the actor has a tag.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor` | Actor  | [`Actor`](../etype#Actor) | 
`tag` | Tag  | [`Str`](../etype#Str) | 

##### **Return Value**
`Bool` : True if the actor has a tag.

### `filter_by_tag` <span id="filter_by_tag"></span>
##### **Description**
Filter to return a list of actors with tags.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor_list` | Actor list  | [`ActorList`](../etype#ActorList) | 
`tag` | Tag  | [`Str`](../etype#Str) | 

##### **Return Value**
`ActorList` : Return an actor list.

### `filter_by_int_kv` <span id="filter_by_int_kv"></span>
##### **Description**
Filter to return a list of actors with equal integer key values.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor_list` | Actor list  | [`ActorList`](../etype#ActorList) | 
`key` | key  | [`Str`](../etype#Str) | 
`value` | value  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`ActorList` : Return an actor list.

### `filter_by_bool_kv` <span id="filter_by_bool_kv"></span>
##### **Description**
Filter to return a list of actors with equal Boolean key values.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor_list` | Actor list  | [`ActorList`](../etype#ActorList) | 
`key` | key  | [`Str`](../etype#Str) | 
`value` | value  | [`Bool`](../etype#Bool) | 

##### **Return Value**
`ActorList` : Return an actor list.

### `filter_by_str_kv` <span id="filter_by_str_kv"></span>
##### **Description**
Filter to return a list of actors with equal string key values.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor_list` | Actor list  | [`ActorList`](../etype#ActorList) | 
`key` | key  | [`Str`](../etype#Str) | 
`value` | value  | [`Str`](../etype#Str) | 

##### **Return Value**
`ActorList` : Return an actor list.

### `filter_by_fixed_kv` <span id="filter_by_fixed_kv"></span>
##### **Description**
Filter to return a list of actors with equal fixed-point key values.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor_list` | Actor list  | [`ActorList`](../etype#ActorList) | 
`key` | key  | [`Str`](../etype#Str) | 
`value` | value  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`ActorList` : Return an actor list.

### `set_actor_trigger_enabled` <span id="set_actor_trigger_enabled"></span>
##### **Description**
Set the actor’s trigger enabled.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor` | Actor  | [`Actor`](../etype#Actor) | 
`trigger_id` | Trigger ID  | [`TriggerID`](../etype#TriggerID) | 
`enabled` | Enabled  | [`Bool`](../etype#Bool) | 

##### **Return Value**
No return value.

### `restart_actor_trigger_enabled` <span id="restart_actor_trigger_enabled"></span>
##### **Description**
Restart the actor’s trigger. 
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor` | actor  | [`Actor`](../etype#Actor) | 
`trigger_id` | Trigger ID  | [`TriggerID`](../etype#TriggerID) | 

##### **Return Value**
No return value.

### `trigger_actor_trigger` <span id="trigger_actor_trigger"></span>
##### **Description**
Trigger the actor’s trigger. 
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor` | actor  | [`Actor`](../etype#Actor) | 
`trigger_id` | Trigger ID  | [`TriggerID`](../etype#TriggerID) | 

##### **Return Value**
No return value.

### `reg_actor_trigger` <span id="reg_actor_trigger"></span>
##### **Description**
Register the actor’s trigger and make it valid.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor` | actor  | [`Actor`](../etype#Actor) | 
`conf_id` | Trigger configuration ID  | [`TriggerID`](../etype#TriggerID) | 
`context` | Context  | [`Dict`](../etype#Dict) | 

##### **Return Value**
`DynamicTriggerInstance` : Dynamic trigger instance.

### `unreg_actor_trigger` <span id="unreg_actor_trigger"></span>
##### **Description**
Remove the actor’s trigger.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor` | actor  | [`Actor`](../etype#Actor) | 
`trigger_id` | Dynamic trigger instance  | [`DynamicTriggerInstance`](../etype#DynamicTriggerInstance) | 

##### **Return Value**
No return value.

### `point_subtract_point` <span id="point_subtract_point"></span>
##### **Description**
Subtract two points to get a vector.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`point1` | Coordinates  | [`FVector3`](../etype#FVector3) | 
`point2` | Coordinates  | [`FVector3`](../etype#FVector3) | 

##### **Return Value**
`FVector3` : Vector.

### `vector_rotate_angle` <span id="vector_rotate_angle"></span>
##### **Description**
Rotate the vector by a specified angle.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`vector` | Vector  | [`FVector3`](../etype#FVector3) | 
`angle` | Angle  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`FVector3` : Vector.

### `create_sector_shape` <span id="create_sector_shape"></span>
##### **Description**
Create a sector.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`radius` | Radius  | [`Fixed`](../etype#Fixed) | 
`angle` | Angle  | [`Fixed`](../etype#Fixed) | 
`yaw` | Yaw  | [`Float`](../etype#Float) | 

##### **Return Value**
`Shape` : Sector object.

### `create_circular_shape` <span id="create_circular_shape"></span>
##### **Description**
Create a circle.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`radius` | Radius  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Shape` : Circular object.

### `create_rectangle_shape` <span id="create_rectangle_shape"></span>
##### **Description**
Create a rectangle.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`width` | Width  | [`Fixed`](../etype#Fixed) | 
`length` | Length  | [`Fixed`](../etype#Fixed) | 
`yaw` | Yaw  | [`Float`](../etype#Float) | 

##### **Return Value**
`Shape` : Rectangle object.

### `create_annular_shape` <span id="create_annular_shape"></span>
##### **Description**
Create an annulus.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`small_r` | Radius of the smaller circle  | [`Fixed`](../etype#Fixed) | 
`big_r` | Radius of the larger circle  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Shape` : Annular object.

### `coord_to_point` <span id="coord_to_point"></span>
##### **Description**
Convert coordinate values to FVector3.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x` | x  | [`Fixed`](../etype#Fixed) | 
`z` | y  | [`Fixed`](../etype#Fixed) | 
`y` | z  | [`Fixed`](../etype#Fixed) | Fix32(0.0)

##### **Return Value**
`FVector3` : FVector3.

### `int_iterator` <span id="int_iterator"></span>
##### **Description**
Integer iterator with the maximum number of iterations not exceeding 2^20. 
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`num` | Number of iterations  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Int32Iterator` : Python iterator.

### `int_iterator2` <span id="int_iterator2"></span>
##### **Description**
Integer iterator.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`start` | Start iterating from”start”  | [`Int32`](../etype#Int32) | 
`stop` | Stop iterating at”stop”  | [`Int32`](../etype#Int32) | 
`step` | Step length  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Int32Iterator` : Python iterator.

### `list_iterator` <span id="list_iterator"></span>
##### **Description**
List iterator.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`l` | List  | [`List`](../etype#List) | 

##### **Return Value**
`Iterator` : Python iterator.

### `list_index_iterator` <span id="list_index_iterator"></span>
##### **Description**
List index iterator.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`l` | List  | [`List`](../etype#List) | 

##### **Return Value**
`Iterator` : Python iterator.

### `int32_arithmetic_operation` <span id="int32_arithmetic_operation"></span>
##### **Description**
Int32 arithmetic operation.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`v1` | x  | [`Int32`](../etype#Int32) | 
`op` | operator(+,-,*,/,%)  | [`Str`](../etype#Str) | 
`v2` | y  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Int32` : Return value.

### `int32_plus_one` <span id="int32_plus_one"></span>
##### **Description**
Automatically increment by 1 for int32.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`int_value` | x  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Int32` : Return value.

### `int32_min` <span id="int32_min"></span>
##### **Description**
Get the smaller of two 32-bit integers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`int_value1` | x1  | [`Int32`](../etype#Int32) | 
`int_value2` | x2  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Int32` : Return value.

### `int32_max` <span id="int32_max"></span>
##### **Description**
Get the larger of two 32-bit integers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`int_value1` | x1  | [`Int32`](../etype#Int32) | 
`int_value2` | x2  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Int32` : Return value.

### `get_point_offset_vector` <span id="get_point_offset_vector"></span>
##### **Description**
Get the point offset to the vector.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`point` | Starting point  | [`FVector3`](../etype#FVector3) | 
`angle` | Angle  | [`Fixed`](../etype#Fixed) | 
`dis` | Distance  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`FVector3` : Return value.

### `int8_to_str` <span id="int8_to_str"></span>
##### **Description**
Convert int8 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`val` | Value  | [`Int8`](../etype#Int8) | 

##### **Return Value**
`Str` : String.

### `int16_to_str` <span id="int16_to_str"></span>
##### **Description**
Convert int16 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`val` | Value  | [`Int16`](../etype#Int16) | 

##### **Return Value**
`Str` : String.

### `int32_to_str` <span id="int32_to_str"></span>
##### **Description**
Convert int32 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`val` | Value  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Str` : String.

### `int64_to_str` <span id="int64_to_str"></span>
##### **Description**
Convert int64 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`val` | Value  | [`Int64`](../etype#Int64) | 

##### **Return Value**
`Str` : String.

### `uint8_to_str` <span id="uint8_to_str"></span>
##### **Description**
Convert uint8 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`val` | Value  | [`UInt8`](../etype#UInt8) | 

##### **Return Value**
`Str` : String.

### `uint16_to_str` <span id="uint16_to_str"></span>
##### **Description**
Convert uint16 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`val` | Value  | [`UInt16`](../etype#UInt16) | 

##### **Return Value**
`Str` : String.

### `uint32_to_str` <span id="uint32_to_str"></span>
##### **Description**
Convert uint32 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`val` | Value  | [`UInt32`](../etype#UInt32) | 

##### **Return Value**
`Str` : String.

### `uint64_to_str` <span id="uint64_to_str"></span>
##### **Description**
Convert uint64 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`val` | Value  | [`UInt64`](../etype#UInt64) | 

##### **Return Value**
`Str` : String.

### `api_remove_kv` <span id="api_remove_kv"></span>
##### **Description**
Delete key-value pair.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`kvbase` | Key-value pair container  | [`KVBase`](../etype#KVBase) | 
`key` | Key  | [`Str`](../etype#Str) | 

##### **Return Value**
No return value.

### `add_texture_kv` <span id="add_texture_kv"></span>
##### **Description**
Get image-type key-value pair.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`kvbase` | Key-value pair container  | [`KVBase`](../etype#KVBase) | 
`k` | Key  | [`Str`](../etype#Str) | 
`v` | Value  | [`Texture`](../etype#Texture) | 

##### **Return Value**
No return value.

### `get_unit_key_pool_num` <span id="get_unit_key_pool_num"></span>
##### **Description**
Get the number of unit IDs in the unit ID pool.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`pool` | Unit ID pool  | [`UnitKeyPool`](../etype#UnitKeyPool) | 

##### **Return Value**
`Int32` : Number of unit IDs.

### `plane_range_between_2_point` <span id="plane_range_between_2_point"></span>
##### **Description**
Distance between two points.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`p1` | Target point  | [`FPoint`](../etype#FPoint) | 
`p2` | Starting point  | [`FPoint`](../etype#FPoint) | 

##### **Return Value**
`Fixed` : Distance

### `i2fixed` <span id="i2fixed"></span>
##### **Description**
Convert integer to fixed-point number.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`i` | Integer  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `fixed2i` <span id="fixed2i"></span>
##### **Description**
Convert fixed-point number to integer. 
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Int32` : Integer.

### `int32_to_fixed` <span id="int32_to_fixed"></span>
##### **Description**
Convert 32-bit integer to fixed-point number.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`i` | Integer  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `fixed_to_int32` <span id="fixed_to_int32"></span>
##### **Description**
Convert fixed-point number to 32-bit integer.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Int32` : Integer.

### `int32_to_float` <span id="int32_to_float"></span>
##### **Description**
Convert 32-bit integer to floating-point number.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`i` | Integer  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Float` : Floating-point number.

### `float_to_int32` <span id="float_to_int32"></span>
##### **Description**
Convert floating-point number to 32-bit integer.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Floating-point number  | [`Float`](../etype#Float) | 

##### **Return Value**
`Int32` : Integer.

### `ability_index_to_int32` <span id="ability_index_to_int32"></span>
##### **Description**
Convert ability slot to 32-bit integer.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`ability_index` | Ability slot  | [`AbilityIndex`](../etype#AbilityIndex) | 

##### **Return Value**
`Int32` : Integer.

### `fixed_to_str` <span id="fixed_to_str"></span>
##### **Description**
Convert fixed-point number to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Str` : String.

### `fvector3_to_str` <span id="fvector3_to_str"></span>
##### **Description**
Convert fixed-point FVectors3 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | FVector3  | [`FVector3`](../etype#FVector3) | 

##### **Return Value**
`Str` : String.

### `fvector2_to_str` <span id="fvector2_to_str"></span>
##### **Description**
Convert fixed-point FVector2 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | FVector2  | [`FVector2`](../etype#FVector2) | 

##### **Return Value**
`Str` : String.

### `float_to_str` <span id="float_to_str"></span>
##### **Description**
Convert floating-point number to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Floating-point number  | [`Float`](../etype#Float) | 

##### **Return Value**
`Str` : String.

### `vector3_to_str` <span id="vector3_to_str"></span>
##### **Description**
Convert floating-point Vector3 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Vector3  | [`Vector3`](../etype#Vector3) | 

##### **Return Value**
`Str` : String.

### `vector2_to_str` <span id="vector2_to_str"></span>
##### **Description**
Convert floating-point Vector2 to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Vector2  | [`Vector2`](../etype#Vector2) | 

##### **Return Value**
`Str` : String.

### `shape_to_str` <span id="shape_to_str"></span>
##### **Description**
Convert shape to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Shape  | [`Shape`](../etype#Shape) | 

##### **Return Value**
`Str` : String.

### `dynamic_to_str` <span id="dynamic_to_str"></span>
##### **Description**
Convert dynamic number to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Dynamic type  | [`DynamicTypeMeta`](../etype#DynamicTypeMeta) | 

##### **Return Value**
`Str` : String.

### `bool_to_str` <span id="bool_to_str"></span>
##### **Description**
Convert Boolean to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Boolean value  | [`Bool`](../etype#Bool) | 

##### **Return Value**
`Str` : String.

### `i2s` <span id="i2s"></span>
##### **Description**
Convert integer to string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`i` | Integer value  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Str` : String.

### `join_s` <span id="join_s"></span>
##### **Description**
Splice strings.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`s1` | String  | [`Str`](../etype#Str) | 
`s2` | String  | [`Str`](../etype#Str) | 

##### **Return Value**
`Str` : String.

### `fixed_arithmetic_operation` <span id="fixed_arithmetic_operation"></span>
##### **Description**
Arithmetic operation of fixed-point numbers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`a` | x  | [`Fixed`](../etype#Fixed) | 
`o` | operator(+,-*,/)  | [`Str`](../etype#Str) | 
`b` | y  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `fixed_plus_one` <span id="fixed_plus_one"></span>
##### **Description**
Automatically increment by 1 for fixed-point numbers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`fix_value` | x  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `fixed_min` <span id="fixed_min"></span>
##### **Description**
Get the minimum value between two fixed-point numbers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`fix_value1` | x1  | [`Fixed`](../etype#Fixed) | 
`fix_value2` | x2  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `fixed_max` <span id="fixed_max"></span>
##### **Description**
Get the maximum value between two fixed-point numbers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`fix_value1` | x1  | [`Fixed`](../etype#Fixed) | 
`fix_value2` | x2  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `float_arithmetic_operation` <span id="float_arithmetic_operation"></span>
##### **Description**
Arithmetic operation of floating-point numbers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`a` | x  | [`Float`](../etype#Float) | 
`o` | operator(+,-*,/)  | [`Str`](../etype#Str) | 
`b` | y  | [`Float`](../etype#Float) | 

##### **Return Value**
`Float` : Floating-point number.

### `degree_to_radian` <span id="degree_to_radian"></span>
##### **Description**
Convert degree to radian.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`d` | Degree  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Radian.

### `radian_to_degree` <span id="radian_to_degree"></span>
##### **Description**
Convert radian to degree.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`r` | Radian  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Degree.

### `radian_sin` <span id="radian_sin"></span>
##### **Description**
Sin.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`r` | Radian  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `radian_cos` <span id="radian_cos"></span>
##### **Description**
Cos.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`r` | Radian  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `radian_tan` <span id="radian_tan"></span>
##### **Description**
Tan.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`r` | Radian  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `radian_asin` <span id="radian_asin"></span>
##### **Description**
Arcsin.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`r` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Radian.

### `radian_acos` <span id="radian_acos"></span>
##### **Description**
Arccos.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`r` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Radian.

### `radian_atan` <span id="radian_atan"></span>
##### **Description**
Arctan.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`r` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Radian.

### `radian_atan_x_y` <span id="radian_atan_x_y"></span>
##### **Description**
Arctan (Y:X).
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`y` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`x` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Radian.

### `sqrt` <span id="sqrt"></span>
##### **Description**
Square root.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `pow` <span id="pow"></span>
##### **Description**
Request power.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`n` | Integer  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `abs` <span id="abs"></span>
##### **Description**
Request modulus.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `is_approximate` <span id="is_approximate"></span>
##### **Description**
Whether they are approximate.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`y` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`p` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Bool` : Boolean value.

### `interval` <span id="interval"></span>
##### **Description**
Interval.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x0` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`x1` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`x2` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `nearest_quadratic_number` <span id="nearest_quadratic_number"></span>
##### **Description**
Find the nearest square number.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Int32` : Quadratic number.

### `degree_between_vectors` <span id="degree_between_vectors"></span>
##### **Description**
Acute angle between two vectors.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`vector1` | Vector  | [`Vector2`](../etype#Vector2) | 
`vector2` | Vector  | [`Vector2`](../etype#Vector2) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `ceil` <span id="ceil"></span>
##### **Description**
Min integer.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Int32` : Integer.

### `floor` <span id="floor"></span>
##### **Description**
Max integer.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Int32` : Integer.

### `is_quadratic_number` <span id="is_quadratic_number"></span>
##### **Description**
Whether it is a quadratic number.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Bool` : Boolean value.

### `interpolate` <span id="interpolate"></span>
##### **Description**
Interpolation.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x_from` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`x_to` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`t` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `invert_interpolate` <span id="invert_interpolate"></span>
##### **Description**
Inverse interpolation.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x_from` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`x_to` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`res_val` |  Fixed-point number | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `log10` <span id="log10"></span>
##### **Description**
Log10.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `log` <span id="log"></span>
##### **Description**
Log.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x1` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`x2` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `get_max_in_list` <span id="get_max_in_list"></span>
##### **Description**
Return the maximum value in the list.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`l` | List  | [`List`](../etype#List) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `get_min_in_list` <span id="get_min_in_list"></span>
##### **Description**
Return the minimum value in the list.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`l` | List  | [`List`](../etype#List) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `round` <span id="round"></span>
##### **Description**
Round.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `sign` <span id="sign"></span>
##### **Description**
Return positive/negative sign.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`f` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `fixed_trigonometric_operation` <span id="fixed_trigonometric_operation"></span>
##### **Description**
Trigonometric function operations of fixed-point numbers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`o` | method(sin,cos,tan)  | [`Str`](../etype#Str) | 
`a` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `float_trigonometric_operation` <span id="float_trigonometric_operation"></span>
##### **Description**
Trigonometric function operations of floating-point numbers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`o` | method(sin,cos,tan)  | [`Str`](../etype#Str) | 
`a` | Floating-point number  | [`Float`](../etype#Float) | 

##### **Return Value**
`Float` : Return value.

### `vector_to_angle` <span id="vector_to_angle"></span>
##### **Description**
Convert vector to degree-measured fixed-point number.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`vec` | Vector  | [`FVector3`](../etype#FVector3) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `angle_to_vector` <span id="angle_to_vector"></span>
##### **Description**
Convert degree-measured fixed-point number to vector.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`angle` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`FVector3` : Vector

### `fixed_to_vector` <span id="fixed_to_vector"></span>
##### **Description**
Construct the vector of fixed-point numbers.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`x` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`y` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`z` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
No return value.

### `angle_to_radius` <span id="angle_to_radius"></span>
##### **Description**
Convert angle to radian.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`angle` | Angle  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Radian.

### `radius_to_angle` <span id="radius_to_angle"></span>
##### **Description**
Convert radian to angle.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`radius` | Radian  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`Fixed` : Degree.

### `get_player_group_num` <span id="get_player_group_num"></span>
##### **Description**
Get the number of players in the player group. 
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`player_group` | Player group  | [`RoleGroup`](../etype#RoleGroup) | 

##### **Return Value**
`Int32` : Number of players.

### `get_related_ability` <span id="get_related_ability"></span>
##### **Description**
Get Actor-associated abilities.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor` | Actor  | [`Actor`](../etype#Actor) | 

##### **Return Value**
`Ability` : Ability.

### `add_actor_timer` <span id="add_actor_timer"></span>
##### **Description**
Add timer to Actor.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor` | actor  | [`Actor`](../etype#Actor) | 
`name` | Name of timer  | [`Str`](../etype#Str) | 
`once` | String  | [`Str`](../etype#Str) | 
`interval` | Fixed-point number  | [`Fixed`](../etype#Fixed) | 
`context` | Dictionary  | [`Dict`](../etype#Dict) | 

##### **Return Value**
No return value.

### `stop_actor_timer` <span id="stop_actor_timer"></span>
##### **Description**
Stop Actor’s timer. 
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`actor` | actor  | [`Actor`](../etype#Actor) | 
`name` | String  | [`Str`](../etype#Str) | 

##### **Return Value**
No return value.

### `get_fixed_coord_index` <span id="get_fixed_coord_index"></span>
##### **Description**
Get one of FVector3 values.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`point` | FVector3  | [`FVector3`](../etype#FVector3) | 
`index` | Index (0-2)  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Fixed` : Fixed-point number.

### `get_float_coord_index` <span id="get_float_coord_index"></span>
##### **Description**
Get one of Vector3 values.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`point` | Vector3  | [`Vector3`](../etype#Vector3) | 
`index` | Index (0-2)  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Float` : Floating-point number.

### `get_float_2_index` <span id="get_float_2_index"></span>
##### **Description**
Get one of Vector2 values.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`point` | Floating-point Vector2  | [`Vector2`](../etype#Vector2) | 
`index` | Index (0-1)  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Float` : Floating-point number.

### `clear_group` <span id="clear_group"></span>
##### **Description**
Clear group.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`list1` | List  | [`List`](../etype#List) | 

##### **Return Value**
No return value.

### `set_list_with_length` <span id="set_list_with_length"></span>
##### **Description**
Assign the value of the second list to the first list without changing the length of the first one.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`list1` | List  | [`List`](../etype#List) | 
`list2` | List  | [`List`](../etype#List) | 

##### **Return Value**
No return value.

### `judge_role_in_group` <span id="judge_role_in_group"></span>
##### **Description**
Determine whether the player is in the player group.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`role` | Player  | [`Role`](../etype#Role) | 
`group` | Player group  | [`RoleGroup`](../etype#RoleGroup) | 

##### **Return Value**
`Bool` : Boolean value.

### `is_unit_alive` <span id="is_unit_alive"></span>
##### **Description**
Determine whether the unit is alive.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`unit` | Unit  | [`Unit`](../etype#Unit) | None

##### **Return Value**
`Bool` : Boolean value.

### `get_empty_unit_key_pool` <span id="get_empty_unit_key_pool"></span>
##### **Description**
Get the empty unit ID pool.
##### **Parameters**
No return value.

##### **Return Value**
`UnitKeyPool` : Unit ID pool.

### `get_route_start` <span id="get_route_start"></span>
##### **Description**
Get the starting point of the path.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`road_point` | Path  | [`Road`](../etype#Road) | 

##### **Return Value**
`FPoint` : Starting point.

### `get_route_end` <span id="get_route_end"></span>
##### **Description**
Get the ending point of the path.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`road_point` | Path  | [`Road`](../etype#Road) | 

##### **Return Value**
`FPoint` : Ending point.

### `get_point_in_route` <span id="get_point_in_route"></span>
##### **Description**
Get some point in path.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`road_point_list` | Path  | [`Road`](../etype#Road) | 
`index` | Subscript  | [`UInt32`](../etype#UInt32) | 

##### **Return Value**
`FPoint` : Point.

### `get_point_nearest_road_list` <span id="get_point_nearest_road_list"></span>
##### **Description**
Get the nearest point from [point] in path.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`road` | Path  | [`Road`](../etype#Road) | 
`pt` | Selected point  | [`FPoint`](../etype#FPoint) | 

##### **Return Value**
`FVector3` : Return point.

### `get_point_rotate_y` <span id="get_point_rotate_y"></span>
##### **Description**
Get the point rotating around Y-axis (degrees).
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`point` | Point  | [`FPoint`](../etype#FPoint) | 
`angle` | Rotation  | [`Fixed`](../etype#Fixed) | 

##### **Return Value**
`FPoint` : Point.

### `str_to_int` <span id="str_to_int"></span>
##### **Description**
Convert string to integer.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`s` | String  | [`Str`](../etype#Str) | 

##### **Return Value**
`Int32` : Return value.

### `str_to_fixed` <span id="str_to_fixed"></span>
##### **Description**
Convert string to fixed-point number.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`s` | String  | [`Str`](../etype#Str) | 

##### **Return Value**
`Fixed` : Return value.

### `delete_sub_str` <span id="delete_sub_str"></span>
##### **Description**
Delete substring.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`str1` | Original string  | [`Str`](../etype#Str) | 
`sub_str` | Substring   | [`Str`](../etype#Str) | 
`only_one` | One time only  | [`Bool`](../etype#Bool) | 

##### **Return Value**
`Str` : Original string.

### `extract_str` <span id="extract_str"></span>
##### **Description**
Slice substring.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`str1` | Original string  | [`Str`](../etype#Str) | 
`index1` | Left subscript  | [`Int32`](../etype#Int32) | 
`index2` | Right subscript  | [`Int32`](../etype#Int32) | 

##### **Return Value**
`Str` : Sliced string.

### `length_of_str` <span id="length_of_str"></span>
##### **Description**
Get the length of the string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`str1` | String  | [`Str`](../etype#Str) | 

##### **Return Value**
`Int32` : Length of the string.

### `str_to_upper_lower` <span id="str_to_upper_lower"></span>
##### **Description**
Unify upper/lower case for string.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`str1` | Original string  | [`Str`](../etype#Str) | 
`is_upper` | Whether they are uppercase  | [`Bool`](../etype#Bool) | 

##### **Return Value**
`Str` : Converted string.

### `pos_in_str` <span id="pos_in_str"></span>
##### **Description**
Position of substring.
##### **Parameters**
Name        | Description         | Type         | Default Value
:----------- | :----------- | :----------- | :----
`str1` | Original string  | [`Str`](../etype#Str) | 
`sub_str` | Substring  | [`Str`](../etype#Str) | 

##### **Return Value**
`Int32` : Position of substring.
