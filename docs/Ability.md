# Ability
## describe
Skill

-----
## method list
Method name | Brief description |
:----- | :--- |
[`api_get_str_attr`](#api_get_str_attr) | Get skill string attribute |
[`api_set_str_attr`](#api_set_str_attr) | Set skill string attributes |
[`api_set_name`](#api_set_name) | Set skill name |
[`api_get_owner`](#api_get_owner) | Get the skill owner |
[`api_get_type`](#api_get_type) | Get the skill type |
[`api_get_ability_index`](#api_get_ability_index) | Get skill type |
[`api_get_ability_seq`](#api_get_ability_seq) | Get the skill owner |
[`api_get_ability_cast_type`](#api_get_ability_cast_type) | Get skill cast type |
[`api_remove`](#api_remove) | remove skill |
[`api_get_level`](#api_get_level) | Get skill level |
[`has_tag`](#has_tag) | Has a tag |
[`api_remove_kv`](#api_remove_kv) | remove key-value pair |
[`api_calc_ability_formula_kv`](#api_calc_ability_formula_kv) | Calculation formula type KV |
[`add_timer`](#add_timer) | Add timer |
[`api_has_target`](#api_has_target) | Whether the skill object has a target |
[`api_get_release_position`](#api_get_release_position) | Get the position of the skill release |
[`api_get_release_direction`](#api_get_release_direction) | Get the direction of skill release |
[`api_get_float_attr`](#api_get_float_attr) | Get the real attribute value of the skill |
[`api_get_int_attr`](#api_get_int_attr) | Get skill integer attribute value |
[`api_get_bool_attr`](#api_get_bool_attr) | Get skill boolean attribute value |
[`api_set_level`](#api_set_level) | Set skill level |
[`api_learn_ability`](#api_learn_ability) | Learning Skills |
[`api_add_level`](#api_add_level) | Add skill level |
[`api_add_float_attr`](#api_add_float_attr) | Incrementally modify skill real attribute value |
[`api_set_float_attr`](#api_set_float_attr) | Set skill real attribute value |
[`api_add_int_attr`](#api_add_int_attr) | Incremental modification skill integer attribute value |
[`api_set_int_attr`](#api_set_int_attr) | Set skill integer attribute value |
[`api_set_bool_attr`](#api_set_bool_attr) | Set skill boolean attribute value |
[`api_break_ability_in_cs`](#api_break_ability_in_cs) | Prevent current ability from casting |
[`api_get_ability_id`](#api_get_ability_id) | Get skill ID |
[`api_is_melee_ability`](#api_is_melee_ability) | Is it a melee skill |
[`api_is_common_atk`](#api_is_common_atk) | Whether it is a normal attack |
[`is_passive_ability`](#is_passive_ability) | Is it passive |
[`api_get_name`](#api_get_name) | Get the skill name |
[`api_get_ability_stack`](#api_get_ability_stack) | Get the charge stacks of skills |
[`api_add_ability_stack_count`](#api_add_ability_stack_count) | Increase skill charge stacks |
[`api_set_ability_stack_count`](#api_set_ability_stack_count) | Set skill charge stacks |
[`api_get_cd_left_time`](#api_get_cd_left_time) | Get the remaining cooldown time of the current skill |
[`api_immediately_clear_cd`](#api_immediately_clear_cd) | Immediate skill cooldown |
[`api_change_ability_cd_cold_down`](#api_change_ability_cd_cold_down) | Change Skill Cooldown |
[`api_set_ability_cd`](#api_set_ability_cd) | Set skill cooldown |
[`api_add_ability_cd`](#api_add_ability_cd) | Increase skill cooldown |
[`api_restart_cd`](#api_restart_cd) | Cool down from scratch |
[`api_set_ability_cur_stack_cd`](#api_set_ability_cur_stack_cd) | Change current charge time |
[`api_get_stack_cd_left_time`](#api_get_stack_cd_left_time) | Get the current remaining charging time of the skill |
[`api_enable`](#api_enable) | Enable skill |
[`api_disable`](#api_disable) | Disable skill |


-----
## method

### `api_get_str_attr` <span id="api_get_str_attr"></span>
##### **describe**
Get skill string attribute
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | tagname | [`AbilityStrAttr`](../etype#AbilityStrAttr) |

##### **return value**
`Str` : String property

### `api_set_str_attr` <span id="api_set_str_attr"></span>
##### **describe**
Set skill string properties
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | tagname | [`AbilityStrAttr`](../etype#AbilityStrAttr) |
`value` | String value | [`Str`](../etype#Str) |

##### **return value**
none

### `api_set_name` <span id="api_set_name"></span>
##### **describe**
set skill name
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | String value | [`Str`](../etype#Str) |

##### **return value**
none

### `api_get_owner` <span id="api_get_owner"></span>
##### **describe**
Get the skill owner
##### **parameters**
none

##### **return value**
`Unit` : the skill owner

### `api_get_type` <span id="api_get_type"></span>
##### **describe**
Get skill type
##### **parameters**
none

##### **return value**
`AbilityType` : the skill type

### `api_get_ability_index` <span id="api_get_ability_index"></span>
##### **describe**
Get skill type
##### **parameters**
none

##### **return value**
`AbilityIndex` : skill number

### `api_get_ability_seq` <span id="api_get_ability_seq"></span>
##### **describe**
Get the skill owner
##### **parameters**
none

##### **return value**
`AbilitySeq` : Ability Seq

### `api_get_ability_cast_type` <span id="api_get_ability_cast_type"></span>
##### **describe**
Get skill release type
##### **parameters**
none

##### **return value**
`AbilityCastType` : skill cast type

### `api_remove` <span id="api_remove"></span>
##### **describe**
remove skill
##### **parameters**
none

##### **return value**
none

### `api_get_level` <span id="api_get_level"></span>
##### **describe**
Acquire skill level
##### **parameters**
none

##### **return value**
`Int32` : skill level

### `has_tag` <span id="has_tag"></span>
##### **describe**
Has a marker
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tag` | tag name | [`Str`](../etype#Str) |

##### **return value**
`Bool` : whether there is a flag

### `api_remove_kv` <span id="api_remove_kv"></span>
##### **describe**
remove key-value pairs
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`k` | key | [`Str`](../etype#Str) |

##### **return value**
none

### `api_calc_ability_formula_kv` <span id="api_calc_ability_formula_kv"></span>
##### **describe**
Calculation formula type KV
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`k` | key | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : value

### `add_timer` <span id="add_timer"></span>
##### **describe**
Add timer
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`time` | timer duration | [`Fixed`](../etype#Fixed) |
`callback` | timeout function | [`Function`](../etype#Function) |

##### **return value**
none

### `api_has_target` <span id="api_has_target"></span>
##### **describe**
Whether the skill object has a target
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`runtime_id` | runtime_id | [`Int32`](../etype#Int32) |

##### **return value**
`Bool` : Whether the skill object has a target

### `api_get_release_position` <span id="api_get_release_position"></span>
##### **describe**
Get the location of the skill release
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`runtime_id` | runtime_id | [`Int32`](../etype#Int32) |

##### **return value**
`FPoint` : The position where the skill is released

### `api_get_release_direction` <span id="api_get_release_direction"></span>
##### **describe**
Get the direction of skill release
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`runtime_id` | runtime_id | [`Int32`](../etype#Int32) |

##### **return value**
`Fixed` : the direction in which the skill is released

### `api_get_float_attr` <span id="api_get_float_attr"></span>
##### **describe**
Get the real attribute value of the skill
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : Real property value

### `api_get_int_attr` <span id="api_get_int_attr"></span>
##### **describe**
Get skill integer attribute value
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Int32` : integer property value

### `api_get_bool_attr` <span id="api_get_bool_attr"></span>
##### **describe**
Get skill boolean attribute value
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Bool` : Boolean property value

### `api_set_level` <span id="api_set_level"></span>
##### **describe**
Set skill level
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`level` | skill level | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_learn_ability` <span id="api_learn_ability"></span>
##### **describe**
learning skills
##### **parameters**
none

##### **return value**
none

### `api_add_level` <span id="api_add_level"></span>
##### **describe**
Increase skill level
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`level` | skill level | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_add_float_attr` <span id="api_add_float_attr"></span>
##### **describe**
Incrementally modify the real attribute value of the skill
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |
`value` | real property value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_float_attr` <span id="api_set_float_attr"></span>
##### **describe**
Set skill real number attribute value
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |
`value` | real property value | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_int_attr` <span id="api_add_int_attr"></span>
##### **describe**
Incremental modification skill integer attribute value
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |
`value` | integer property value | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_set_int_attr` <span id="api_set_int_attr"></span>
##### **describe**
Set skill integer attribute value
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |
`value` | integer property value | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_set_bool_attr` <span id="api_set_bool_attr"></span>
##### **describe**
Set skill boolean attribute value
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr` | attribute name | [`Str`](../etype#Str) |
`value` | boolean property value | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_break_ability_in_cs` <span id="api_break_ability_in_cs"></span>
##### **describe**
Prevents the current skill from casting
##### **parameters**
none

##### **return value**
none

### `api_get_ability_id` <span id="api_get_ability_id"></span>
##### **describe**
Get skill number
##### **parameters**
none

##### **return value**
`AbilityKey` : skill number

### `api_is_melee_ability` <span id="api_is_melee_ability"></span>
##### **describe**
Is it a melee skill?
##### **parameters**
none

##### **return value**
`Bool` : boolean value

### `api_is_common_atk` <span id="api_is_common_atk"></span>
##### **describe**
Is it a general attack
##### **parameters**
none

##### **return value**
`Bool` : boolean value

### `is_passive_ability` <span id="is_passive_ability"></span>
##### **describe**
Is it passive
##### **parameters**
none

##### **return value**
`Bool` : boolean value

### `api_get_name` <span id="api_get_name"></span>
##### **describe**
Get skill name
##### **parameters**
none

##### **return value**
`Str` : skill name

### `api_get_ability_stack` <span id="api_get_ability_stack"></span>
##### **describe**
Acquires the charge stacks of the skill
##### **parameters**
none

##### **return value**
`Int32` : skill stacks

### `api_add_ability_stack_count` <span id="api_add_ability_stack_count"></span>
##### **describe**
Increase skill charge stacks
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | Charge stacks | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_set_ability_stack_count` <span id="api_set_ability_stack_count"></span>
##### **describe**
Set skill charge levels
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | Charge stacks | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_get_cd_left_time` <span id="api_get_cd_left_time"></span>
##### **describe**
Get the remaining cooldown of the current skill
##### **parameters**
none

##### **return value**
`Fixed` : remaining cooldown

### `api_immediately_clear_cd` <span id="api_immediately_clear_cd"></span>
##### **describe**
Skill cools down immediately
##### **parameters**
none

##### **return value**
none

### `api_change_ability_cd_cold_down` <span id="api_change_ability_cd_cold_down"></span>
##### **describe**
Change skill cooldown
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | cooldown | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_set_ability_cd` <span id="api_set_ability_cd"></span>
##### **describe**
Set skill cooldown
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | cooldown | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_add_ability_cd` <span id="api_add_ability_cd"></span>
##### **describe**
Increase skill cooldown
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | cooldown | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_restart_cd` <span id="api_restart_cd"></span>
##### **describe**
Cool from scratch
##### **parameters**
none

##### **return value**
none

### `api_set_ability_cur_stack_cd` <span id="api_set_ability_cur_stack_cd"></span>
##### **describe**
Change the current charging time
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`value` | cooldown | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_get_stack_cd_left_time` <span id="api_get_stack_cd_left_time"></span>
##### **describe**
Get the current remaining charge time of the skill
##### **parameters**
none

##### **return value**
`Fixed` : remaining charge time

### `api_enable` <span id="api_enable"></span>
##### **describe**
enable skills
##### **parameters**
none

##### **return value**
none

### `api_disable` <span id="api_disable"></span>
##### **describe**
Disable skills
##### **parameters**
none

##### **return value**
none