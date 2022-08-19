# Destructible
## describe
Destructibles

-----
## method list
Method name | Brief description |
:----- | :--- |
[`api_transmit`](#api_transmit) | Move destructible to point |
[`api_kill`](#api_kill) | Kill destructibles |
[`api_set_dest_dry`](#api_set_dest_dry) | Dries up destructibles |
[`api_delete`](#api_delete) | delete destructibles |
[`api_revivie`](#api_revivie) | Revive Destructibles |
[`api_show_hide`](#api_show_hide) | Show hidden destructibles |
[`api_set_hp`](#api_set_hp) | Set destructible health value |
[`api_set_max_hp`](#api_set_max_hp) | Set the max HP of destructibles |
[`api_set_name`](#api_set_name) | Set the name of the destructible object |
[`api_set_source_num`](#api_set_source_num) | Set the number of destructible resources |
[`api_set_scale`](#api_set_scale) | Set the size of destructibles |
[`api_set_face_angle`](#api_set_face_angle) | Set the angle of the destructible object |
[`api_get_int_attr`](#api_get_int_attr) | Get the integer attribute of the destructible object |
[`api_get_key`](#api_get_key) | Get the number of the destructible object |
[`api_get_str_attr`](#api_get_str_attr) | Get the string attribute of the destructible object |
[`api_set_str_attr`](#api_set_str_attr) | Set the string attribute of destructibles |
[`api_get_bool_attr`](#api_get_bool_attr) | Get boolean attributes of destructible objects |
[`api_get_float_attr`](#api_get_float_attr) | Get the float attribute of the destructible object |
[`api_get_camp_id`](#api_get_camp_id) | Get the camp id of the destructible object |
[`api_get_position`](#api_get_position) | Get the destructible object position |
[`api_get_desc`](#api_get_desc) | Get the description of the destructible object |
[`api_get_id`](#api_get_id) | Get the id of the destructible object |
[`api_get_x_scale`](#api_get_x_scale) | Get the x-axis scale of the destructible object |
[`api_get_y_scale`](#api_get_y_scale) | Get the y-axis scale of the destructible object |
[`api_get_z_scale`](#api_get_z_scale) | Get the z-scale of the destructible object |
[`api_get_angle`](#api_get_angle) | Get the rotation angle of the destructible object |
[`api_get_dest_model`](#api_get_dest_model) | Get the destructible object model |


-----
## method

### `api_transmit` <span id="api_transmit"></span>
##### **describe**
Move destructible to point
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`point` | point | [`Point`](../etype#Point) |

##### **return value**
none

### `api_kill` <span id="api_kill"></span>
##### **describe**
kill destructibles
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`unit` | Killer unit | [`Unit`](../etype#Unit) |

##### **return value**
none

### `api_set_dest_dry` <span id="api_set_dest_dry"></span>
##### **describe**
deplete destructibles
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`unit` | acquisition unit | [`Unit`](../etype#Unit) |

##### **return value**
none

### `api_delete` <span id="api_delete"></span>
##### **describe**
remove destructibles
##### **parameters**
none

##### **return value**
none

### `api_revivie` <span id="api_revivie"></span>
##### **describe**
Revive Destructibles
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`point` | resurrection point | [`Point`](../etype#Point) |

##### **return value**
none

### `api_show_hide` <span id="api_show_hide"></span>
##### **describe**
show hidden destructibles
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`is_show` | whether to show | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_hp` <span id="api_set_hp"></span>
##### **describe**
Set destructible health
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`hp_value` | health value | [`UInt64`](../etype#UInt64) |

##### **return value**
none

### `api_set_max_hp` <span id="api_set_max_hp"></span>
##### **describe**
Set destructible max health
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`hp_value` | max health | [`UInt64`](../etype#UInt64) |

##### **return value**
none

### `api_set_name` <span id="api_set_name"></span>
##### **describe**
Set the name of the destructible
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`name` | name | [`Str`](../etype#Str) |

##### **return value**
none

### `api_set_source_num` <span id="api_set_source_num"></span>
##### **describe**
Sets the amount of destructible resources
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`num` | Number of resources | [`UInt64`](../etype#UInt64) |

##### **return value**
none

### `api_set_scale` <span id="api_set_scale"></span>
##### **describe**
Set the size of the destructible
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`x` | x size | [`UInt64`](../etype#UInt64) |
`y` | y size | [`UInt64`](../etype#UInt64) |
`z` | z size | [`UInt64`](../etype#UInt64) |

##### **return value**
none

### `api_set_face_angle` <span id="api_set_face_angle"></span>
##### **describe**
Set the angle of the destructible
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`angle` | angle | [`UInt64`](../etype#UInt64) |

##### **return value**
none

### `api_get_int_attr` <span id="api_get_int_attr"></span>
##### **describe**
Get the integer property of the destructible
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`UInt32` : Integer type return value

### `api_get_key` <span id="api_get_key"></span>
##### **describe**
Get the number of the destructible object
##### **parameters**
none

##### **return value**
`DestructibleKey` : Destructible item number

### `api_get_str_attr` <span id="api_get_str_attr"></span>
##### **describe**
Get the string property of the destructible
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Str` : String type return value

### `api_set_str_attr` <span id="api_set_str_attr"></span>
##### **describe**
Set the string property of the destructible
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |
`value` | attribute value | [`Str`](../etype#Str) |

##### **return value**
none

### `api_get_bool_attr` <span id="api_get_bool_attr"></span>
##### **describe**
Get the boolean property of the destructible
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Bool` : boolean return value

### `api_get_float_attr` <span id="api_get_float_attr"></span>
##### **describe**
Get the float property of the destructible
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Fixed` : float type return value

### `api_get_camp_id` <span id="api_get_camp_id"></span>
##### **describe**
Get the faction id of the destructible object
##### **parameters**
none

##### **return value**
`CampID` : the camp ID

### `api_get_position` <span id="api_get_position"></span>
##### **describe**
Get destructible location
##### **parameters**
none

##### **return value**
`FVector3` : unit position

### `api_get_desc` <span id="api_get_desc"></span>
##### **describe**
Get the description of the destructible
##### **parameters**
none

##### **return value**
`Str` : Destructible description

### `api_get_id` <span id="api_get_id"></span>
##### **describe**
Get the id of the destructible
##### **parameters**
none

##### **return value**
none

### `api_get_x_scale` <span id="api_get_x_scale"></span>
##### **describe**
Get the x-axis scaling of the destructible
##### **parameters**
none

##### **return value**
`Float` : the value to scale

### `api_get_y_scale` <span id="api_get_y_scale"></span>
##### **describe**
Get the y-axis scaling of the destructible
##### **parameters**
none

##### **return value**
`Float` : the value to scale

### `api_get_z_scale` <span id="api_get_z_scale"></span>
##### **describe**
Get the z-axis scaling of the destructible
##### **parameters**
none

##### **return value**
`Float` : the value to scale

### `api_get_angle` <span id="api_get_angle"></span>
##### **describe**
Get the rotation angle of the destructible
##### **parameters**
none

##### **return value**
`Float` : angle value

### `api_get_dest_model` <span id="api_get_dest_model"></span>
##### **describe**
Get the destructible model
##### **parameters**
none

##### **return value**
`ModelKey` : Model number