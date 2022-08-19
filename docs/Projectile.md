# Projectile
## 描述
投射物

-----
## 方法列表
方法名  | 简述  |
:----- | :--- |
[`api_get_self`](#api_get_self) | 投射物本身对象 |
[`api_get_key`](#api_get_key) | 投射物编号 |
[`api_get_owner`](#api_get_owner) | 投射物产生者 |
[`api_get_target`](#api_get_target) | 投掷物目标对象 |
[`api_delete`](#api_delete) | 销毁投射物对象 |
[`api_set_position`](#api_set_position) | 设置投射物位置 |
[`api_set_face_angle`](#api_set_face_angle) | 设置投射物朝向 |
[`api_set_rotation`](#api_set_rotation) | 设置投射物旋转 |
[`api_set_scale`](#api_set_scale) | 设置投射物缩放 |
[`api_set_animation_speed`](#api_set_animation_speed) | 设置投射物特效播放速度 |
[`api_set_duration`](#api_set_duration) | 设置投射物持续时间 |
[`api_add_duration`](#api_add_duration) | 增加投射物持续时间 |
[`api_get_left_time`](#api_get_left_time) | 获取投射物剩余持续时间 |
[`api_get_height`](#api_get_height) | 获取投射物高度 |
[`api_get_face_angle`](#api_get_face_angle) | 获取投射物角度 |
[`api_get_position`](#api_get_position) | 获取投射物位置 |
[`api_get_face_dir`](#api_get_face_dir) | 获取投射物朝向 |
[`api_collide_obstacle_normal`](#api_collide_obstacle_normal) | 投射物碰撞到的障碍的法线方向 |
[`api_raise_height`](#api_raise_height) | 投射物抬高 |
[`api_play_link_sfx`](#api_play_link_sfx) | 在投射物和单位之间挂链接特效 |
[`api_play_link_sfx_with_return`](#api_play_link_sfx_with_return) | 在投射物和单位之间挂链接特效并返回特效实体 |
[`api_play_link_sfx_to_projectile`](#api_play_link_sfx_to_projectile) | 在投射物之间挂链接特效 |
[`api_get_str_attr`](#api_get_str_attr) | 获取投射物的字符串属性 |
[`api_set_str_attr`](#api_set_str_attr) | 设置投射物的字符串属性 |
[`api_add_tag`](#api_add_tag) | 投射物添加键值对 |
[`api_remove_tag`](#api_remove_tag) | 投射物移除键值对 |


-----
## 方法

### `api_get_self` <span id="api_get_self"></span>
##### **描述**
投射物本身对象
##### **参数**
无

##### **返回值**
`Unit` : 投射物本身对象

### `api_get_key` <span id="api_get_key"></span>
##### **描述**
投射物编号
##### **参数**
无

##### **返回值**
`ProjectileKey` : 投射物的key

### `api_get_owner` <span id="api_get_owner"></span>
##### **描述**
投射物产生者
##### **参数**
无

##### **返回值**
`Unit` : 投射物产生者

### `api_get_target` <span id="api_get_target"></span>
##### **描述**
投掷物目标对象
##### **参数**
无

##### **返回值**
`Unit` : 投掷物目标对象

### `api_delete` <span id="api_delete"></span>
##### **描述**
销毁投射物对象
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`unit` | 销毁的投射物对象  | [`Unit`](../etype#Unit) | None

##### **返回值**
无

### `api_set_position` <span id="api_set_position"></span>
##### **描述**
设置投射物位置
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`point` | 投射物位置  | [`Point`](../etype#Point) | 

##### **返回值**
无

### `api_set_face_angle` <span id="api_set_face_angle"></span>
##### **描述**
设置投射物朝向
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`face_angle` | 投射物朝向  | [`Float`](../etype#Float) | 

##### **返回值**
无

### `api_set_rotation` <span id="api_set_rotation"></span>
##### **描述**
设置投射物旋转
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`x` | x轴旋转  | [`Float`](../etype#Float) | 
`y` | y轴旋转  | [`Float`](../etype#Float) | 
`z` | z轴旋转  | [`Float`](../etype#Float) | 

##### **返回值**
无

### `api_set_scale` <span id="api_set_scale"></span>
##### **描述**
设置投射物缩放
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`x` | x轴缩放  | [`Float`](../etype#Float) | 
`y` | y轴缩放  | [`Float`](../etype#Float) | 
`z` | z轴缩放  | [`Float`](../etype#Float) | 

##### **返回值**
无

### `api_set_animation_speed` <span id="api_set_animation_speed"></span>
##### **描述**
设置投射物特效播放速度
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`rate` | 播放速度  | [`Float`](../etype#Float) | 

##### **返回值**
无

### `api_set_duration` <span id="api_set_duration"></span>
##### **描述**
设置投射物持续时间
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`duration` | 持续时间  | [`Float`](../etype#Float) | 

##### **返回值**
无

### `api_add_duration` <span id="api_add_duration"></span>
##### **描述**
增加投射物持续时间
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`extra_time` | 持续时间变化值  | [`Float`](../etype#Float) | 

##### **返回值**
无

### `api_get_left_time` <span id="api_get_left_time"></span>
##### **描述**
获取投射物剩余持续时间
##### **参数**
无

##### **返回值**
`Float` : 投射物剩余持续时间

### `api_get_height` <span id="api_get_height"></span>
##### **描述**
获取投射物高度
##### **参数**
无

##### **返回值**
`Float` : 投射物高度

### `api_get_face_angle` <span id="api_get_face_angle"></span>
##### **描述**
获取投射物角度
##### **参数**
无

##### **返回值**
`Float` : 投射物的角度

### `api_get_position` <span id="api_get_position"></span>
##### **描述**
获取投射物位置
##### **参数**
无

##### **返回值**
`FVector3` : 投射物位置

### `api_get_face_dir` <span id="api_get_face_dir"></span>
##### **描述**
获取投射物朝向
##### **参数**
无

##### **返回值**
`FVector3` : 投射物朝向

### `api_collide_obstacle_normal` <span id="api_collide_obstacle_normal"></span>
##### **描述**
投射物碰撞到的障碍的法线方向
##### **参数**
无

##### **返回值**
`FVector3` : 法线方向

### `api_raise_height` <span id="api_raise_height"></span>
##### **描述**
投射物抬高
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`y` | 定点数  | [`Fixed`](../etype#Fixed) | 

##### **返回值**
无

### `api_play_link_sfx` <span id="api_play_link_sfx"></span>
##### **描述**
在投射物和单位之间挂链接特效
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`from_socket_name` | 起始挂节点  | [`Str`](../etype#Str) | 
`target_unit` | 目标单位  | [`Unit`](../etype#Unit) | 
`target_socket_name` | 目标挂节点  | [`Str`](../etype#Str) | 
`sfx_res_id` | 特效编号  | [`SfxKey`](../etype#SfxKey) | 
`scale` | 缩放比例  | [`Float`](../etype#Float) | 
`keep_time` | 最多持续时间  | [`Float`](../etype#Float) | 
`role` | 所属玩家  | [`Role`](../etype#Role) | None
`visible_type` | 可见性规则  | [`UInt32`](../etype#UInt32) | 1

##### **返回值**
无

### `api_play_link_sfx_with_return` <span id="api_play_link_sfx_with_return"></span>
##### **描述**
在投射物和单位之间挂链接特效并返回特效实体
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`from_socket_name` | 起始挂节点  | [`Str`](../etype#Str) | 
`target_unit` | 目标单位  | [`Unit`](../etype#Unit) | 
`target_socket_name` | 目标挂节点  | [`Str`](../etype#Str) | 
`sfx_res_id` | 特效编号  | [`SfxKey`](../etype#SfxKey) | 
`scale` | 缩放比例  | [`Float`](../etype#Float) | 
`keep_time` | 最多持续时间  | [`Float`](../etype#Float) | 
`role` | 所属玩家  | [`Role`](../etype#Role) | None
`visible_type` | 可见性规则  | [`UInt32`](../etype#UInt32) | 1

##### **返回值**
`Sfx` : 特效

### `api_play_link_sfx_to_projectile` <span id="api_play_link_sfx_to_projectile"></span>
##### **描述**
在投射物之间挂链接特效
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`from_socket_name` | 起始挂节点  | [`Str`](../etype#Str) | 
`target_unit` | 目标投射物  | [`ProjectileEntity`](../etype#ProjectileEntity) | 
`target_socket_name` | 目标挂节点  | [`Str`](../etype#Str) | 
`sfx_res_id` | 特效编号  | [`SfxKey`](../etype#SfxKey) | 
`scale` | 缩放比例  | [`Float`](../etype#Float) | 
`keep_time` | 最多持续时间  | [`Float`](../etype#Float) | 
`role` | 所属玩家  | [`Role`](../etype#Role) | None
`visible_type` | 可见性规则  | [`UInt32`](../etype#UInt32) | 1

##### **返回值**
无

### `api_get_str_attr` <span id="api_get_str_attr"></span>
##### **描述**
获取投射物的字符串属性
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`attr_name` | 属性名称  | [`Str`](../etype#Str) | 

##### **返回值**
`Str` : 字符串类型返回值

### `api_set_str_attr` <span id="api_set_str_attr"></span>
##### **描述**
设置投射物的字符串属性
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`attr_name` | 属性名称  | [`Str`](../etype#Str) | 
`value` | 属性取值  | [`Str`](../etype#Str) | 

##### **返回值**
无

### `api_add_tag` <span id="api_add_tag"></span>
##### **描述**
投射物添加键值对
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`tag` | TAG  | [`Str`](../etype#Str) | 

##### **返回值**
无

### `api_remove_tag` <span id="api_remove_tag"></span>
##### **描述**
投射物移除键值对
##### **参数**
参数名        | 描述         | 类型         | 默认值
:----------- | :----------- | :----------- | :----
`tag` | TAG  | [`Str`](../etype#Str) | 

##### **返回值**
无
