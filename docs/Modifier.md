# Modifier
## describe
effect trigger

-----
## method list
Method name | Brief description |
:----- | :--- |
[`api_add_buff_max_layer`](#api_add_buff_max_layer) | Increase the maximum number of buff layers |
[`api_add_buff_layer`](#api_add_buff_layer) | Increase the number of buff instance layers |
[`api_add_buff_residue_time`](#api_add_buff_residue_time) | Increase the remaining duration of the buff |
[`api_add_float_shield`](#api_add_float_shield) | Increase the effect of buff floating point attribute |
[`api_add_cycle_time`](#api_add_cycle_time) | Increase the cycle time of cycle events |
[`api_prevent_will_modifier`](#api_prevent_will_modifier) ​​| Prevents incoming magic effects |
[`api_remove`](#api_remove) | remove magic effect |
[`api_get_owner`](#api_get_owner) | Get the effect carrier |
[`api_get_releaser`](#api_get_releaser) | Get the effect releaser |
[`api_get_residue_time`](#api_get_residue_time) | Get remaining duration |
[`api_get_passed_time`](#api_get_passed_time) | Get the elapsed time |
[`api_get_int_attr`](#api_get_int_attr) | Get the effect of buff integer attribute |
[`api_get_modifier_type`](#api_get_modifier_type) | Get buff type |
[`api_get_modifier_effect_type`](#api_get_modifier_effect_type) | Get the buff effect type |
[`api_get_float_attr`](#api_get_float_attr) | Get the effect of buff floating point attribute |
[`api_get_sub_halo_modifier_key`](#api_get_sub_halo_modifier_key) | Get the sub-halo type of the halo magic effect |
[`api_get_halo_modifier_instance`](#api_get_halo_modifier_instance) | Get the halo entity of the sub halo |
[`api_get_halo_inf_rng`](#api_get_halo_inf_rng) | Get the range of the halo |
[`api_get_will_modifier_unit`](#api_get_will_modifier_unit) | Get the unit that will receive the magic effect |
[`api_get_will_modifier_key`](#api_get_will_modifier_key) | Get the type of magic effect to be obtained |
[`api_get_modifier_unique_id`](#api_get_modifier_unique_id) | Get the unique id of the buff |
[`api_get_modifier_key`](#api_get_modifier_key) | Get the type key of buff |
[`api_get_str_attr`](#api_get_str_attr) | Get buff character attribute effect |
[`api_set_buff_max_layer`](#api_set_buff_max_layer) | Set buff integer attribute effect |
[`api_set_buff_layer`](#api_set_buff_layer) | Set the number of buff instance layers |
[`api_set_buff_residue_time`](#api_set_buff_residue_time) | Set the remaining duration of the buff |
[`api_set_float_shield`](#api_set_float_shield) | Set the effect of buff floating point properties |
[`api_set_cycle_time`](#api_set_cycle_time) | Set cycle event |
[`api_set_duration`](#api_set_duration) | Set the duration of the magic effect |
[`api_set_buff_str_attr`](#api_set_buff_str_attr) | Set the string attribute of buff |


-----
## method

### `api_add_buff_max_layer` <span id="api_add_buff_max_layer"></span>
##### **describe**
Increase the maximum number of buff stacks
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_num` | integer attribute value | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_add_buff_layer` <span id="api_add_buff_layer"></span>
##### **describe**
Increase the number of layers of buff instances
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`plus_layer` | integer attribute value | [`Int64`](../etype#Int64) |

##### **return value**
none

### `api_add_buff_residue_time` <span id="api_add_buff_residue_time"></span>
##### **describe**
Increases the remaining duration of the buff
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`residue_time` | float remaining time | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_float_shield` <span id="api_add_float_shield"></span>
##### **describe**
Increase the effect of buff floating point attribute
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |
`attr_num` | float attribute value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_cycle_time` <span id="api_add_cycle_time"></span>
##### **describe**
Increase the cycle time of recurring periodic events
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`new_cycle_time` | float property value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_prevent_will_modifier` <span id="api_prevent_will_modifier"></span>
##### **describe**
Blocks incoming magic effects
##### **parameters**
none

##### **return value**
`Bool` : return value

### `api_remove` <span id="api_remove"></span>
##### **describe**
remove magic effect
##### **parameters**
none

##### **return value**
`Bool` : return value

### `api_get_owner` <span id="api_get_owner"></span>
##### **describe**
Get the effect carrier
##### **parameters**
none

##### **return value**
`Unit` : the effect carrier

### `api_get_releaser` <span id="api_get_releaser"></span>
##### **describe**
Get the effect releaser
##### **parameters**
none

##### **return value**
`Unit` : the effector

### `api_get_residue_time` <span id="api_get_residue_time"></span>
##### **describe**
Get remaining duration
##### **parameters**
none

##### **return value**
`Fixed` : remaining duration

### `api_get_passed_time` <span id="api_get_passed_time"></span>
##### **describe**
get elapsed duration
##### **parameters**
none

##### **return value**
`Fixed` : has duration

### `api_get_int_attr` <span id="api_get_int_attr"></span>
##### **describe**
Get the buff integer attribute effect
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`UInt32` : Integer type return value

### `api_get_modifier_type` <span id="api_get_modifier_type"></span>
##### **describe**
Get the buff category
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`ModifierType` : the type of magic effect

### `api_get_modifier_effect_type` <span id="api_get_modifier_effect_type"></span>
##### **describe**
Get the buff effect type
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`ModifierEffectType` : the magic effect effect type

### `api_get_float_attr` <span id="api_get_float_attr"></span>
##### **describe**
Get the effect of the buff floating point attribute
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : float return type

### `api_get_sub_halo_modifier_key` <span id="api_get_sub_halo_modifier_key"></span>
##### **describe**
Get the sub-aura type of the aura magic effect
##### **parameters**
none

##### **return value**
`ModifierKey` : the magic effect number

### `api_get_halo_modifier_instance` <span id="api_get_halo_modifier_instance"></span>
##### **describe**
Get the halo entity of the sub halo
##### **parameters**
none

##### **return value**
`ModifierEntity` : the magic effect object

### `api_get_halo_inf_rng` <span id="api_get_halo_inf_rng"></span>
##### **describe**
Get the range of the aura
##### **parameters**
none

##### **return value**
`Float` : Aura's area of ​​influence

### `api_get_will_modifier_unit` <span id="api_get_will_modifier_unit"></span>
##### **describe**
Get the unit that is about to get the magic effect
##### **parameters**
none

##### **return value**
`Unit` : unit

### `api_get_will_modifier_key` <span id="api_get_will_modifier_key"></span>
##### **describe**
Get the type of magic effect that is about to get
##### **parameters**
none

##### **return value**
`ModifierKey` : the magic effect number

### `api_get_modifier_unique_id` <span id="api_get_modifier_unique_id"></span>
##### **describe**
Get the unique id of the buff
##### **parameters**
none

##### **return value**
`UInt32` : Unique ID of the magic effect

### `api_get_modifier_key` <span id="api_get_modifier_key"></span>
##### **describe**
Get the type key of the buff
##### **parameters**
none

##### **return value**
`ModifierKey` : the magic effect key

### `api_get_str_attr` <span id="api_get_str_attr"></span>
##### **describe**
Get the buff character attribute effect
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Str` : return value of character type

### `api_set_buff_max_layer` <span id="api_set_buff_max_layer"></span>
##### **describe**
Set the buff integer attribute effect
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_num` | integer attribute value | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_buff_layer` <span id="api_set_buff_layer"></span>
##### **describe**
Set the number of buff instance layers
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_num` | integer attribute value | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_set_buff_residue_time` <span id="api_set_buff_residue_time"></span>
##### **describe**
Sets the remaining duration of the buff
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`residue_time` | float remaining time | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_float_shield` <span id="api_set_float_shield"></span>
##### **describe**
Set the buff floating point property effect
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |
`attr_num` | float attribute value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_cycle_time` <span id="api_set_cycle_time"></span>
##### **describe**
Set recurring events
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`new_cycle_time` | float property value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_duration` <span id="api_set_duration"></span>
##### **describe**
Set the duration of the magic effect
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`residue_time` | non-negative real value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_buff_str_attr` <span id="api_set_buff_str_attr"></span>
##### **describe**
Set the string property of the buff
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`name` | attribute name | [`Str`](../etype#Str) |
`value` | attribute value | [`Str`](../etype#Str) |

##### **return value**
none