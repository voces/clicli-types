# Destructible
## 描述
可破坏物

-----
## 方法列表
方法名  | 简述  |
:----- | :--- |
[`api_transmit`](#api_transmit) | 移动可破坏物到点 |
[`api_kill`](#api_kill) | 杀死可破坏物 |
[`api_set_dest_dry`](#api_set_dest_dry) | 使可破坏物枯竭 |
[`api_delete`](#api_delete) | 删除可破坏物 |
[`api_revivie`](#api_revivie) | 复活可破坏物 |
[`api_show_hide`](#api_show_hide) | 显示隐藏可破坏物 |
[`api_set_hp`](#api_set_hp) | 设置可破坏物生命值 |
[`api_set_max_hp`](#api_set_max_hp) | 设置可破坏物最大生命值 |
[`api_set_name`](#api_set_name) | 设置可破坏物的名称 |
[`api_set_source_num`](#api_set_source_num) | 设置可破坏物的资源数量 |
[`api_set_scale`](#api_set_scale) | 设置可破坏物的大小 |
[`api_set_face_angle`](#api_set_face_angle) | 设置可破坏物的角度 |
[`api_get_int_attr`](#api_get_int_attr) | 获取可破坏物的整型属性 |
[`api_get_key`](#api_get_key) | 获取可破坏物的编号 |
[`api_get_str_attr`](#api_get_str_attr) | 获取可破坏物的字符串属性 |
[`api_set_str_attr`](#api_set_str_attr) | 设置可破坏物的字符串属性 |
[`api_get_bool_attr`](#api_get_bool_attr) | 获取可破坏物的布尔值属性 |
[`api_get_float_attr`](#api_get_float_attr) | 获取可破坏物的浮点数属性 |
[`api_get_camp_id`](#api_get_camp_id) | 获取可破坏物所属阵营id |
[`api_get_position`](#api_get_position) | 获取可破坏物位置 |
[`api_get_desc`](#api_get_desc) | 获取可破坏物的描述 |
[`api_get_id`](#api_get_id) | 获取可破坏物的id |
[`api_get_x_scale`](#api_get_x_scale) | 获取可破坏物的x轴缩放 |
[`api_get_y_scale`](#api_get_y_scale) | 获取可破坏物的y轴缩放 |
[`api_get_z_scale`](#api_get_z_scale) | 获取可破坏物的z轴缩放 |
[`api_get_angle`](#api_get_angle) | 获取可破坏物的旋转角度 |
[`api_get_dest_model`](#api_get_dest_model) | 获取可破坏物模型 |


-----
## 方法

### `api_transmit` <span id="api_transmit"></span>
##### **描述**
移动可破坏物到点
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`point` | 点  | [`Point`](../etype#Point) | 

##### **返回值**
无

### `api_kill` <span id="api_kill"></span>
##### **描述**
杀死可破坏物
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`unit` | 凶手单位  | [`Unit`](../etype#Unit) | 

##### **返回值**
无

### `api_set_dest_dry` <span id="api_set_dest_dry"></span>
##### **描述**
使可破坏物枯竭
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`unit` | 采集单位  | [`Unit`](../etype#Unit) | 

##### **返回值**
无

### `api_delete` <span id="api_delete"></span>
##### **描述**
删除可破坏物
##### **参数**
无

##### **返回值**
无

### `api_revivie` <span id="api_revivie"></span>
##### **描述**
复活可破坏物
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`point` | 复活点  | [`Point`](../etype#Point) | 

##### **返回值**
无

### `api_show_hide` <span id="api_show_hide"></span>
##### **描述**
显示隐藏可破坏物
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`is_show` | 是否显示  | [`Bool`](../etype#Bool) | 

##### **返回值**
无

### `api_set_hp` <span id="api_set_hp"></span>
##### **描述**
设置可破坏物生命值
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`hp_value` | 生命值  | [`UInt64`](../etype#UInt64) | 

##### **返回值**
无

### `api_set_max_hp` <span id="api_set_max_hp"></span>
##### **描述**
设置可破坏物最大生命值
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`hp_value` | 最大生命值  | [`UInt64`](../etype#UInt64) | 

##### **返回值**
无

### `api_set_name` <span id="api_set_name"></span>
##### **描述**
设置可破坏物的名称
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`name` | 名称  | [`Str`](../etype#Str) | 

##### **返回值**
无

### `api_set_source_num` <span id="api_set_source_num"></span>
##### **描述**
设置可破坏物的资源数量
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`num` | 资源数量  | [`UInt64`](../etype#UInt64) | 

##### **返回值**
无

### `api_set_scale` <span id="api_set_scale"></span>
##### **描述**
设置可破坏物的大小
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`x` | x大小  | [`UInt64`](../etype#UInt64) | 
`y` | y大小  | [`UInt64`](../etype#UInt64) | 
`z` | z大小  | [`UInt64`](../etype#UInt64) | 

##### **返回值**
无

### `api_set_face_angle` <span id="api_set_face_angle"></span>
##### **描述**
设置可破坏物的角度
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`angle` | 角度  | [`UInt64`](../etype#UInt64) | 

##### **返回值**
无

### `api_get_int_attr` <span id="api_get_int_attr"></span>
##### **描述**
获取可破坏物的整型属性
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`attr_name` | 属性名称  | [`Str`](../etype#Str) | 

##### **返回值**
`UInt32` : 整数类型返回值

### `api_get_key` <span id="api_get_key"></span>
##### **描述**
获取可破坏物的编号
##### **参数**
无

##### **返回值**
`DestructibleKey` : 可破坏物编号

### `api_get_str_attr` <span id="api_get_str_attr"></span>
##### **描述**
获取可破坏物的字符串属性
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`attr_name` | 属性名称  | [`Str`](../etype#Str) | 

##### **返回值**
`Str` : 字符串类型返回值

### `api_set_str_attr` <span id="api_set_str_attr"></span>
##### **描述**
设置可破坏物的字符串属性
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`attr_name` | 属性名称  | [`Str`](../etype#Str) | 
`value` | 属性取值  | [`Str`](../etype#Str) | 

##### **返回值**
无

### `api_get_bool_attr` <span id="api_get_bool_attr"></span>
##### **描述**
获取可破坏物的布尔值属性
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`attr_name` | 属性名称  | [`Str`](../etype#Str) | 

##### **返回值**
`Bool` : 布尔类型返回值

### `api_get_float_attr` <span id="api_get_float_attr"></span>
##### **描述**
获取可破坏物的浮点数属性
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`attr_name` | 属性名称  | [`Str`](../etype#Str) | 

##### **返回值**
`Fixed` : 浮点类型返回值

### `api_get_camp_id` <span id="api_get_camp_id"></span>
##### **描述**
获取可破坏物所属阵营id
##### **参数**
无

##### **返回值**
`CampID` : 阵营ID

### `api_get_position` <span id="api_get_position"></span>
##### **描述**
获取可破坏物位置
##### **参数**
无

##### **返回值**
`FVector3` : 单位位置

### `api_get_desc` <span id="api_get_desc"></span>
##### **描述**
获取可破坏物的描述
##### **参数**
无

##### **返回值**
`Str` : 可破坏物描述

### `api_get_id` <span id="api_get_id"></span>
##### **描述**
获取可破坏物的id
##### **参数**
无

##### **返回值**
无

### `api_get_x_scale` <span id="api_get_x_scale"></span>
##### **描述**
获取可破坏物的x轴缩放
##### **参数**
无

##### **返回值**
`Float` : 缩放的值

### `api_get_y_scale` <span id="api_get_y_scale"></span>
##### **描述**
获取可破坏物的y轴缩放
##### **参数**
无

##### **返回值**
`Float` : 缩放的值

### `api_get_z_scale` <span id="api_get_z_scale"></span>
##### **描述**
获取可破坏物的z轴缩放
##### **参数**
无

##### **返回值**
`Float` : 缩放的值

### `api_get_angle` <span id="api_get_angle"></span>
##### **描述**
获取可破坏物的旋转角度
##### **参数**
无

##### **返回值**
`Float` : 角度值

### `api_get_dest_model` <span id="api_get_dest_model"></span>
##### **描述**
获取可破坏物模型
##### **参数**
无

##### **返回值**
`ModelKey` : 模型编号
