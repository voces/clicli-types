# Projectile
## describe
projectile

-----
## method list
Method name | Brief description |
:----- | :--- |
[`api_get_self`](#api_get_self) | Projectile itself object |
[`api_get_key`](#api_get_key) | projectile number |
[`api_get_owner`](#api_get_owner) | projectile generator |
[`api_get_target`](#api_get_target) | Projectile target object |
[`api_delete`](#api_delete) | Destroy projectile object |
[`api_set_position`](#api_set_position) | Set projectile position |
[`api_set_face_angle`](#api_set_face_angle) | Set projectile orientation |
[`api_set_rotation`](#api_set_rotation) | Set projectile rotation |
[`api_set_scale`](#api_set_scale) | Set projectile scale |
[`api_set_animation_speed`](#api_set_animation_speed) | Set projectile effect playback speed |
[`api_set_duration`](#api_set_duration) | Set projectile duration |
[`api_add_duration`](#api_add_duration) | Increase projectile duration |
[`api_get_left_time`](#api_get_left_time) | Get the remaining duration of the projectile |
[`api_get_height`](#api_get_height) | Get projectile height |
[`api_get_face_angle`](#api_get_face_angle) | Get the projectile angle |
[`api_get_position`](#api_get_position) | Get projectile position |
[`api_get_face_dir`](#api_get_face_dir) | Get projectile orientation |
[`api_collide_obstacle_normal`](#api_collide_obstacle_normal) | The normal direction of the obstacle the projectile collides with |
[`api_raise_height`](#api_raise_height) | Projectile Raise |
[`api_play_link_sfx`](#api_play_link_sfx) | Link effects between projectiles and units |
[`api_play_link_sfx_with_return`](#api_play_link_sfx_with_return) | Link effect between projectile and unit and return effect entity |
[`api_play_link_sfx_to_projectile`](#api_play_link_sfx_to_projectile) | Link effects between projectiles |
[`api_get_str_attr`](#api_get_str_attr) | Get the string attribute of the projectile |
[`api_set_str_attr`](#api_set_str_attr) | Set the string attribute of the projectile |
[`api_add_tag`](#api_add_tag) | Projectile add key-value pair |
[`api_remove_tag`](#api_remove_tag) | Projectile removal key-value pair |


-----
## method

### `api_get_self` <span id="api_get_self"></span>
##### **describe**
Projectile itself object
##### **parameters**
none

##### **return value**
`Unit` : the projectile itself object

### `api_get_key` <span id="api_get_key"></span>
##### **describe**
projectile number
##### **parameters**
none

##### **return value**
`ProjectileKey` : the key of the projectile

### `api_get_owner` <span id="api_get_owner"></span>
##### **describe**
projectile generator
##### **parameters**
none

##### **return value**
`Unit` : projectile generator

### `api_get_target` <span id="api_get_target"></span>
##### **describe**
projectile target object
##### **parameters**
none

##### **return value**
`Unit` : projectile target object

### `api_delete` <span id="api_delete"></span>
##### **describe**
destroy projectile object
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`unit` | Destroyed projectile object | [`Unit`](../etype#Unit) | None

##### **return value**
none

### `api_set_position` <span id="api_set_position"></span>
##### **describe**
Set projectile position
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`point` | Projectile position | [`Point`](../etype#Point) |

##### **return value**
none

### `api_set_face_angle` <span id="api_set_face_angle"></span>
##### **describe**
Set projectile orientation
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`face_angle` | Projectile facing | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_rotation` <span id="api_set_rotation"></span>
##### **describe**
Set projectile rotation
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`x` | x-axis rotation | [`Float`](../etype#Float) |
`y` | y-axis rotation | [`Float`](../etype#Float) |
`z` | z-axis rotation | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_scale` <span id="api_set_scale"></span>
##### **describe**
Set projectile scaling
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`x` | x-axis scaling | [`Float`](../etype#Float) |
`y` | y-axis scaling | [`Float`](../etype#Float) |
`z` | z-axis scaling | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_animation_speed` <span id="api_set_animation_speed"></span>
##### **describe**
Set projectile effect playback speed
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`rate` | playback speed | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_duration` <span id="api_set_duration"></span>
##### **describe**
Set projectile duration
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`duration` | duration | [`Float`](../etype#Float) |

##### **return value**
none

### `api_add_duration` <span id="api_add_duration"></span>
##### **describe**
Increased projectile duration
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`extra_time` | duration change value | [`Float`](../etype#Float) |

##### **return value**
none

### `api_get_left_time` <span id="api_get_left_time"></span>
##### **describe**
Get the remaining duration of the projectile
##### **parameters**
none

##### **return value**
`Float` : the remaining duration of the projectile

### `api_get_height` <span id="api_get_height"></span>
##### **describe**
Get projectile height
##### **parameters**
none

##### **return value**
`Float` : Projectile height

### `api_get_face_angle` <span id="api_get_face_angle"></span>
##### **describe**
get projectile angle
##### **parameters**
none

##### **return value**
`Float` : the angle of the projectile

### `api_get_position` <span id="api_get_position"></span>
##### **describe**
Get projectile position
##### **parameters**
none

##### **return value**
`FVector3` : Projectile position

### `api_get_face_dir` <span id="api_get_face_dir"></span>
##### **describe**
Get projectile orientation
##### **parameters**
none

##### **return value**
`FVector3` : Projectile direction

### `api_collide_obstacle_normal` <span id="api_collide_obstacle_normal"></span>
##### **describe**
The normal direction of the obstacle the projectile hits
##### **parameters**
none

##### **return value**
`FVector3` : normal direction

### `api_raise_height` <span id="api_raise_height"></span>
##### **describe**
projectile raised
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`y` | fixed number | [`Fixed`](../etype#Fixed) |

##### **return value**
none

### `api_play_link_sfx` <span id="api_play_link_sfx"></span>
##### **describe**
Attach link effect between projectile and unit
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`from_socket_name` | starting node | [`Str`](../etype#Str) |
`target_unit` | target unit | [`Unit`](../etype#Unit) |
`target_socket_name` | target socket | [`Str`](../etype#Str) |
`sfx_res_id` | Effect ID | [`SfxKey`](../etype#SfxKey) |
`scale` | scale | [`Float`](../etype#Float) |
`keep_time` | maximum duration | [`Float`](../etype#Float) |
`role` | owning player | [`Role`](../etype#Role) | None
`visible_type` | visibility rules | [`UInt32`](../etype#UInt32) | 1

##### **return value**
none

### `api_play_link_sfx_with_return` <span id="api_play_link_sfx_with_return"></span>
##### **describe**
Attach a link effect between the projectile and the unit and return the effect entity
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`from_socket_name` | starting node | [`Str`](../etype#Str) |
`target_unit` | target unit | [`Unit`](../etype#Unit) |
`target_socket_name` | target socket | [`Str`](../etype#Str) |
`sfx_res_id` | Effect ID | [`SfxKey`](../etype#SfxKey) |
`scale` | scale | [`Float`](../etype#Float) |
`keep_time` | maximum duration | [`Float`](../etype#Float) |
`role` | owning player | [`Role`](../etype#Role) | None
`visible_type` | visibility rules | [`UInt32`](../etype#UInt32) | 1

##### **return value**
`Sfx` : Effects

### `api_play_link_sfx_to_projectile` <span id="api_play_link_sfx_to_projectile"></span>
##### **describe**
Hang link effects between projectiles
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`from_socket_name` | starting node | [`Str`](../etype#Str) |
`target_unit` | target projectile | [`ProjectileEntity`](../etype#ProjectileEntity) |
`target_socket_name` | target socket | [`Str`](../etype#Str) |
`sfx_res_id` | Effect ID | [`SfxKey`](../etype#SfxKey) |
`scale` | scale | [`Float`](../etype#Float) |
`keep_time` | maximum duration | [`Float`](../etype#Float) |
`role` | owning player | [`Role`](../etype#Role) | None
`visible_type` | visibility rules | [`UInt32`](../etype#UInt32) | 1

##### **return value**
none

### `api_get_str_attr` <span id="api_get_str_attr"></span>
##### **describe**
Get the string property of the projectile
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Str` : String type return value

### `api_set_str_attr` <span id="api_set_str_attr"></span>
##### **describe**
Set the projectile's string property
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`attr_name` | attribute name | [`Str`](../etype#Str) |
`value` | attribute value | [`Str`](../etype#Str) |

##### **return value**
none

### `api_add_tag` <span id="api_add_tag"></span>
##### **describe**
Projectiles add key-value pairs
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`tag` | TAG  | [`Str`](../etype#Str) | 

##### **return value**
none

### `api_remove_tag` <span id="api_remove_tag"></span>
##### **describe**
Projectile removal key-value pair
##### **parameters**
parameter name | description | type | default value
:----------- | :----------- | :----------- | :----
`tag` | TAG  | [`Str`](../etype#Str) |

##### **return value**
none