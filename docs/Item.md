# Item
## describe
thing

-----
## method list
Method name | Brief description |
:----- | :--- |
[`api_get_key`](#api_get_key) | Get item number |
[`set_name`](#set_name) | Set item name |
[`get_name`](#get_name) | Get item name |
[`api_get_conf_name`](#api_get_conf_name) | Get item configuration name |
[`api_set_desc`](#api_set_desc) | Set item description |
[`api_get_desc`](#api_get_desc) | Get item description |
[`api_get_conf_desc`](#api_get_conf_desc) | Get item configuration description |
[`api_get_type`](#api_get_type) | Get item type |
[`api_get_level`](#api_get_level) | Get item level |
[`api_set_level`](#api_set_level) | Set item level |
[`api_drop_self`](#api_drop_self) | drop items |
[`api_remove`](#api_remove) | Remove items from units |
[`api_set_sale_state`](#api_set_sale_state) | Set item sale |
[`api_set_stack_cnt`](#api_set_stack_cnt) | Set item stack count |
[`api_set_charge_cnt`](#api_set_charge_cnt) | Set item charge count |
[`api_set_max_charge`](#api_set_max_charge) | Set the maximum charge of the item |
[`api_get_position`](#api_get_position) | Get item position |
[`api_is_in_scene`](#api_is_in_scene) | Whether the item is in the scene |
[`api_get_stack_cnt`](#api_get_stack_cnt) | Get item stack count |
[`api_get_stack_type`](#api_get_stack_type) | Get item stack type |
[`api_get_charge_cnt`](#api_get_charge_cnt) | Get item charge number |
[`api_get_max_charge`](#api_get_max_charge) | Get the number of item charges |
[`api_set_droppable`](#api_set_droppable) | Set item drop |
[`api_set_sellable`](#api_set_sellable) | Set items to sell |
[`api_set_hp`](#api_set_hp) | Set item health |
[`api_get_droppable`](#api_get_droppable) | Get item drop |
[`api_get_sellable`](#api_get_sellable) | Get items for sale |
[`api_get_hp`](#api_get_hp) | Get item health |
[`api_set_attr`](#api_set_attr) | Set item additional attributes |
[`api_change_attr`](#api_change_attr) | Add additional attributes to items |
[`api_get_attr`](#api_get_attr) | Get additional attributes of items |
[`api_set_creator`](#api_set_creator) | Set item owner |
[`api_get_creator`](#api_get_creator) | Get item owner |
[`api_get_owner`](#api_get_owner) | Get item owner |
[`api_add_stack`](#api_add_stack) | Add item stacks |
[`api_add_charge`](#api_add_charge) | Add item charge |
[`api_get_scale`](#api_get_scale) | Get item scale |
[`api_get_face_angle`](#api_get_face_angle) | Get the object orientation |
[`api_set_scale`](#api_set_scale) | Set item scale |
[`api_set_position`](#api_set_position) | Set item position |
[`api_set_face_angle`](#api_set_face_angle) | Set the object orientation |
[`api_is_in_area`](#api_is_in_area) | Is it in the area |
[`api_transmit`](#api_transmit) | Move item to point |
[`api_add_tag`](#api_add_tag) | item add tag |
[`api_remove_tag`](#api_remove_tag) | item removal tag |
[`api_has_tag`](#api_has_tag) | Whether the item has a tag |
[`api_remove_kv`](#api_remove_kv) | item removal key-value pair |
[`api_get_item_unit`](#api_get_item_unit) | Get the corresponding entity of the item in the scene |
[`api_get_id`](#api_get_id) | Get item id |
[`api_is_in_bar`](#api_is_in_bar) | Whether the item is in the inventory |
[`api_is_in_pkg`](#api_is_in_pkg) | Whether the item is in the inventory |


-----
## method

### `api_get_key` <span id="api_get_key"></span>
##### **describe**
Get item number
##### **parameters**
none

##### **return value**
`ItemKey` : item number

### `set_name` <span id="set_name"></span>
##### **describe**
set item name
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`name` | item name | [`Str`](../etype#Str) |

##### **return value**
none

### `get_name` <span id="get_name"></span>
##### **describe**
get item name
##### **parameters**
none

##### **return value**
`Str` : item name

### `api_get_conf_name` <span id="api_get_conf_name"></span>
##### **describe**
Get item configuration name
##### **parameters**
none

##### **return value**
`Str` : item name

### `api_set_desc` <span id="api_set_desc"></span>
##### **describe**
set item description
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`desc` | item description | [`Str`](../etype#Str) |

##### **return value**
none

### `api_get_desc` <span id="api_get_desc"></span>
##### **describe**
Get item description
##### **parameters**
none

##### **return value**
`Str` : item description

### `api_get_conf_desc` <span id="api_get_conf_desc"></span>
##### **describe**
Get item configuration description
##### **parameters**
none

##### **return value**
`Str` : item description

### `api_get_type` <span id="api_get_type"></span>
##### **describe**
Get item type
##### **parameters**
none

##### **return value**
`UInt32` : item type

### `api_get_level` <span id="api_get_level"></span>
##### **describe**
Get item level
##### **parameters**
none

##### **return value**
`UInt32` : item level

### `api_set_level` <span id="api_set_level"></span>
##### **describe**
Set item level
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`level` | level | [`UInt32`](../etype#UInt32) |

##### **return value**
none

### `api_drop_self` <span id="api_drop_self"></span>
##### **describe**
discarded items
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`pos` | point | [`FPoint`](../etype#FPoint) |
`stack_cnt` | number | [`Actor`](../etype#Actor) | None

##### **return value**
none

### `api_remove` <span id="api_remove"></span>
##### **describe**
Remove items from units
##### **parameters**
none

##### **return value**
none

### `api_set_sale_state` <span id="api_set_sale_state"></span>
##### **describe**
Set up items for sale
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`sale_state` | Available for sale | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_stack_cnt` <span id="api_set_stack_cnt"></span>
##### **describe**
Set the number of item stacks
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`stack_cnt` | number of stacks | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_set_charge_cnt` <span id="api_set_charge_cnt"></span>
##### **describe**
Set item charge count
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`charge_cnt` | number of charges | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_set_max_charge` <span id="api_set_max_charge"></span>
##### **describe**
Set the maximum number of charges for an item
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`max_charge` | maximum number of charges | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_get_position` <span id="api_get_position"></span>
##### **describe**
Get item location
##### **parameters**
none

##### **return value**
`Point` : position

### `api_is_in_scene` <span id="api_is_in_scene"></span>
##### **describe**
Whether the item is in the scene
##### **parameters**
none

##### **return value**
`Bool` : is it in the scene

### `api_get_stack_cnt` <span id="api_get_stack_cnt"></span>
##### **describe**
Get item stack count
##### **parameters**
none

##### **return value**
`UInt32` : number of stacks

### `api_get_stack_type` <span id="api_get_stack_type"></span>
##### **describe**
Get item stack type
##### **parameters**
none

##### **return value**
`UInt32` : stack type

### `api_get_charge_cnt` <span id="api_get_charge_cnt"></span>
##### **describe**
Get item charge
##### **parameters**
none

##### **return value**
`UInt32` : number of charges

### `api_get_max_charge` <span id="api_get_max_charge"></span>
##### **describe**
Get item charge
##### **parameters**
none

##### **return value**
`UInt32` : maximum number of charges

### `api_set_droppable` <span id="api_set_droppable"></span>
##### **describe**
set item drop
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`can_drop` | Can drop | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_sellable` <span id="api_set_sellable"></span>
##### **describe**
Set up items for sale
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`can_sell` | Can discard | [`Bool`](../etype#Bool) |

##### **return value**
none

### `api_set_hp` <span id="api_set_hp"></span>
##### **describe**
Set item health
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`hp` | health | [`Float`](../etype#Float) |

##### **return value**
none

### `api_get_droppable` <span id="api_get_droppable"></span>
##### **describe**
get item discard
##### **parameters**
none

##### **return value**
`Bool` : whether to discard

### `api_get_sellable` <span id="api_get_sellable"></span>
##### **describe**
Get items for sale
##### **parameters**
none

##### **return value**
`Bool` : available for sale

### `api_get_hp` <span id="api_get_hp"></span>
##### **describe**
Get item health
##### **parameters**
none

##### **return value**
`Fixed` : health

### `api_set_attr` <span id="api_set_attr"></span>
##### **describe**
Set additional properties of items
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr_element_field` | attribute name | [`Str`](../etype#Str) |
`attr_key` | attribute component name | [`Str`](../etype#Str) |
`val` | property value | [`Float`](../etype#Float) |

##### **return value**
none

### `api_change_attr` <span id="api_change_attr"></span>
##### **describe**
Add additional attributes to items
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr_element_field` | attribute name | [`Str`](../etype#Str) |
`attr_key` | attribute component name | [`Str`](../etype#Str) |
`delta` | attribute value | [`Float`](../etype#Float) |

##### **return value**
none

### `api_get_attr` <span id="api_get_attr"></span>
##### **describe**
Get additional attributes of items
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`attr_element_field` | attribute element name | [`Str`](../etype#Str) |
`attr_key` | attribute name | [`Str`](../etype#Str) |

##### **return value**
`Float` : property value

### `api_set_creator` <span id="api_set_creator"></span>
##### **describe**
set item owner
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`creator` | owner | [`Role`](../etype#Role) |

##### **return value**
none

### `api_get_creator` <span id="api_get_creator"></span>
##### **describe**
get item owner
##### **parameters**
none

##### **return value**
`Role` : the owner

### `api_get_owner` <span id="api_get_owner"></span>
##### **describe**
get item owner
##### **parameters**
none

##### **return value**
`Unit` : the owner

### `api_add_stack` <span id="api_add_stack"></span>
##### **describe**
Add item stack count
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`cnt` | number of stacks | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_add_charge` <span id="api_add_charge"></span>
##### **describe**
Added item charge
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`cnt` | number of charges | [`Int32`](../etype#Int32) |

##### **return value**
none

### `api_get_scale` <span id="api_get_scale"></span>
##### **describe**
Get item zoom
##### **parameters**
none

##### **return value**
`Fixed` : zoom

### `api_get_face_angle` <span id="api_get_face_angle"></span>
##### **describe**
Get item orientation
##### **parameters**
none

##### **return value**
`Fixed` : facing angle

### `api_set_scale` <span id="api_set_scale"></span>
##### **describe**
Set item scaling
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`scale` | scale | [`Float`](../etype#Float) |

##### **return value**
none

### `api_set_position` <span id="api_set_position"></span>
##### **describe**
Set item location
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`point` | item position | [`Point`](../etype#Point) |

##### **return value**
none

### `api_set_face_angle` <span id="api_set_face_angle"></span>
##### **describe**
set item orientation
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`face_angle` | item facing | [`Float`](../etype#Float) |

##### **return value**
none

### `api_is_in_area` <span id="api_is_in_area"></span>
##### **describe**
Is it in the area
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`area` | area | [`Area`](../etype#Area) |

##### **return value**
`Bool` : is in the region

### `api_transmit` <span id="api_transmit"></span>
##### **describe**
move item to point
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`point` | point | [`Point`](../etype#Point) |

##### **return value**
none

### `api_add_tag` <span id="api_add_tag"></span>
##### **describe**
add tags to items
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tag` | tag | [`Str`](../etype#Str) |

##### **return value**
none

### `api_remove_tag` <span id="api_remove_tag"></span>
##### **describe**
item removal tag
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tag` | tag | [`Str`](../etype#Str) |

##### **return value**
none

### `api_has_tag` <span id="api_has_tag"></span>
##### **describe**
Whether the item has a tag
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`tag` | tag | [`Str`](../etype#Str) |

##### **return value**
`Bool` : whether the item has a tag

### `api_remove_kv` <span id="api_remove_kv"></span>
##### **describe**
item removal key-value pair
##### **parameters**
parameter name | description | type | default value
:------------ | :------------ | :------------ | :----
`k` | key to remove | [`Str`](../etype#Str) |

##### **return value**
none

### `api_get_item_unit` <span id="api_get_item_unit"></span>
##### **describe**
Get the corresponding entity of the item in the scene
##### **parameters**
none

##### **return value**
`Unit` : the entity in the scene

### `api_get_id` <span id="api_get_id"></span>
##### **describe**
get item id
##### **parameters**
none

##### **return value**
none

### `api_is_in_bar` <span id="api_is_in_bar"></span>
##### **describe**
Whether the item is in the inventory
##### **parameters**
none

##### **return value**
`Bool` : is it in the inventory

### `api_is_in_pkg` <span id="api_is_in_pkg"></span>
##### **describe**
Whether the item is in the inventory slot
##### **parameters**
none

##### **return value**
`Bool` : is it in the inventory bar