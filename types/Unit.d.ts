declare interface Unit {
  /**
   * 获取单位ID
   * @returns UnitID
   */
  api_get_id: () => UnitID;

  /**
   * 获取单位编号
   * @returns UnitKey
   */
  api_get_key: () => UnitKey;

  /**
   * 获取单位所属阵营id
   * @returns CampID
   */
  api_get_camp_id: () => CampID;

  /**
   * 获取单位所属玩家ID
   * @returns RoleID
   */
  api_get_role_id: () => RoleID;

  /**
   * 获取单位所属玩家
   * @returns Role
   */
  api_get_role: () => Role;

  /**
   * 获取单位所属阵营
   * @returns Camp
   */
  api_get_camp: () => Camp;

  /**
   * 获取单位类型
   * @returns UnitType
   */
  api_get_type: () => UnitType;

  /**
   * 获取单位名称
   * @returns string
   */
  api_get_name: () => string;

  /**
   * 添加定时器
   * @param time 定时时长
   * @param callback 超时函数
   * @returns UInt32
   */
  add_timer: (
    /** 定时时长 */
    time: Fixed,
    /** 超时函数 */
    callback: () => void,
  ) => UInt32;

  /**
   * 添加周期定时器
   * @param time 定时时长
   * @param callback 超时函数
   * @returns UInt32
   */
  add_repeat_timer: (
    /** 定时时长 */
    time: Fixed,
    /** 超时函数 */
    callback: () => void,
  ) => UInt32;

  /**
   * 取消定时器
   * @param timer_id 定时器ID
   */
  cancel_timer: (
    /** 定时器ID */
    timer_id: UInt32,
  ) => void;

  /**
   * 单位移除键值对
   * @param k 键名
   */
  api_remove_kv: (
    /** 键名 */
    k: string,
  ) => void;

  /**
   * 单位是否存活
   * @returns boolean
   */
  api_is_alive: () => boolean;

  /**
   * 隐藏头顶信息
   * @param show 是否隐藏头顶信息
   */
  api_hide_head_bar: (
    /** 是否隐藏头顶信息 */
    show: boolean,
  ) => void;

  /**
   * 单位是否拥有标签
   * @param tag 标签
   * @returns boolean
   */
  has_tag: (
    /** 标签 */
    tag: string,
  ) => boolean;

  /**
   * 复活单位
   * @param position 复活位置
   */
  api_revive: (
    /** 复活位置 */
    position: Point | null,
  ) => void;

  /**
   * 单位是否已销毁
   * @returns boolean
   */
  api_is_destroyed: () => boolean;

  /**
   * 删除单位
   */
  api_delete: () => void;

  /**
   * 强制单位死亡
   * @param source_unit 杀手单位
   */
  api_kill: (
    /** 杀手单位 */
    source_unit: Unit | null,
  ) => void;

  /**
   * 获取单位图标路径
   * @returns string
   */
  api_get_icon: () => string;

  /**
   * 获取单位图片路径
   * @param pic_type 图片类型
   * @returns string
   */
  api_get_unit_pic: (
    /** 图片类型 */
    pic_type: string,
  ) => string;

  /**
   * 获取单位的父单位
   * @returns Unit
   */
  api_get_parent_unit: () => Unit;

  /**
   * 改变单位血条颜色
   * @param color 单位血条颜色值
   */
  api_set_hp_color: (
    /** 单位血条颜色值 */
    color: string,
  ) => void;

  /**
   * 开启/关闭伤害及助攻统计
   * @param enable 开启
   */
  api_switch_atk_assist_record: (
    /** 开启 */
    enable: boolean,
  ) => void;

  /**
   * 单位/点是否在范围内
   * @param unit 单位
   * @param radius 范围
   * @returns boolean
   */
  api_is_in_range: (
    /** 单位 */
    unit: Unit,
    /** 范围 */
    radius: Float,
  ) => boolean;

  /**
   * 点是否在范围内
   * @param point 点
   * @param radius 范围
   * @returns boolean
   */
  api_is_point_in_range: (
    /** 点 */
    point: Point,
    /** 范围 */
    radius: Float,
  ) => boolean;

  /**
   * 设置单位生命周期
   * @param life_time 生命周期
   */
  api_set_life_cycle: (
    /** 生命周期 */
    life_time: Float,
  ) => void;

  /**
   * 暂停单位生命周期
   * @param pause 是否暂停
   */
  api_pause_life_cycle: (
    /** 是否暂停 */
    pause: boolean,
  ) => void;

  /**
   * 获取单位当前生命周期
   * @returns Fixed
   */
  api_get_life_cycle: () => Fixed;

  /**
   * 获取单位总生命周期时长
   * @returns Fixed
   */
  api_get_total_life_cycle: () => Fixed;

  /**
   * 获取单位攻击类型
   * @returns UInt32
   */
  api_get_atk_type: () => UInt32;

  /**
   * 获取单位护甲类型
   * @returns UInt32
   */
  api_get_def_type: () => UInt32;

  /**
   * 获取 attr_other
   * @param key 属性名
   * @returns Fixed
   */
  api_get_attr_other: (
    /** 属性名 */
    key: string,
  ) => Fixed;

  /**
   * 获取attr_base
   * @param key 属性名
   * @returns Fixed
   */
  api_get_attr_base: (
    /** 属性名 */
    key: string,
  ) => Fixed;

  /**
   * 获取attr_base_ratio
   * @param key 属性名
   * @returns Fixed
   */
  api_get_attr_base_ratio: (
    /** 属性名 */
    key: string,
  ) => Fixed;

  /**
   * 获取attr_bonus
   * @param key 属性名
   * @returns Fixed
   */
  api_get_attr_bonus: (
    /** 属性名 */
    key: string,
  ) => Fixed;

  /**
   * 获取attr_bonus_ratio
   * @param key 属性名
   * @returns Fixed
   */
  api_get_attr_bonus_ratio: (
    /** 属性名 */
    key: string,
  ) => Fixed;

  /**
   * 获取attr_all_ratio
   * @param key 属性名
   * @returns Fixed
   */
  api_get_attr_all_ratio: (
    /** 属性名 */
    key: string,
  ) => Fixed;

  /**
   * 获取单位主属性
   * @returns string
   */
  api_get_main_attr: () => string;

  /**
   * 设置纯值类型的值
   * @param key 属性名
   * @param val 值
   */
  api_set_attr: (
    /** 属性名 */
    key: string,
    /** 值 */
    val: Fixed,
  ) => void;

  /**
   * 设置单位属性（根据属性分类）
   * @param key 属性名
   * @param val 值
   * @param attr_element 属性分类
   */
  api_set_attr_by_attr_element: (
    /** 属性名 */
    key: string,
    /** 值 */
    val: Fixed,
    /** 属性分类 */
    attr_element: string,
  ) => void;

  /**
   * 设置单位属性基础值部分
   * @param key 属性名
   * @param val 基础值
   */
  api_set_attr_base: (
    /** 属性名 */
    key: string,
    /** 基础值 */
    val: Fixed,
  ) => void;

  /**
   * 增加单位属性（根据属性分类）
   * @param key 属性名
   * @param val 值
   * @param attr_element 属性分类
   */
  api_add_attr_by_attr_element: (
    /** 属性名 */
    key: string,
    /** 值 */
    val: Fixed,
    /** 属性分类 */
    attr_element: string,
  ) => void;

  /**
   * 增加单位属性基础值
   * @param key 属性名
   * @param delta 增加值
   */
  api_add_attr_base: (
    /** 属性名 */
    key: string,
    /** 增加值 */
    delta: Fixed,
  ) => void;

  /**
   * 设置单位属性 attr_bonus
   * @param key 属性名
   * @param val 设置值
   */
  api_set_attr_bonus: (
    /** 属性名 */
    key: string,
    /** 设置值 */
    val: Fixed,
  ) => void;

  /**
   * 增加单位属性 attr_bonus
   * @param key 属性名
   * @param delta 增加值
   */
  api_add_attr_bonus: (
    /** 属性名 */
    key: string,
    /** 增加值 */
    delta: Fixed,
  ) => void;

  /**
   * 设置单位属性 attr_bouns_ratio
   * @param key 属性名
   * @param val 设置值
   */
  api_set_attr_bonus_ratio: (
    /** 属性名 */
    key: string,
    /** 设置值 */
    val: Fixed,
  ) => void;

  /**
   * 增加单位属性 attr_bouns_ratio
   * @param key 属性名
   * @param delta 加成比例
   */
  api_add_attr_bonus_ratio: (
    /** 属性名 */
    key: string,
    /** 加成比例 */
    delta: Fixed,
  ) => void;

  /**
   * 设置单位属性 基础值和额外值 加成比例
   * @param key 属性名
   * @param val 设置值
   */
  api_set_attr_all_ratio: (
    /** 属性名 */
    key: string,
    /** 设置值 */
    val: Fixed,
  ) => void;

  /**
   * 增加单位属性 基础值和额外值 加成比例
   * @param key 属性名
   * @param delta 加成比例
   */
  api_add_attr_all_ratio: (
    /** 属性名 */
    key: string,
    /** 加成比例 */
    delta: Fixed,
  ) => void;

  /**
   * 设置单位属性 基础值 加成比例
   * @param key 属性名
   * @param val 设置值
   */
  api_set_attr_base_ratio: (
    /** 属性名 */
    key: string,
    /** 设置值 */
    val: Fixed,
  ) => void;

  /**
   * 增加单位属性基础值百分比加成
   * @param key 属性名
   * @param delta 加成比例
   */
  api_add_attr_base_ratio: (
    /** 属性名 */
    key: string,
    /** 加成比例 */
    delta: Fixed,
  ) => void;

  /**
   * 设置单位等级
   * @param level 等级
   */
  api_set_level: (
    /** 等级 */
    level: Int32,
  ) => void;

  /**
   * 增加单位等级
   * @param level 等级
   */
  api_add_level: (
    /** 等级 */
    level: Int32,
  ) => void;

  /**
   * 获取单位实数属性
   * @param attr 属性名
   * @returns Fixed
   */
  api_get_float_attr: (
    /** 属性名 */
    attr: string,
  ) => Fixed;

  /**
   * 获取单位字符串属性
   * @param attr 属性名
   * @returns string
   */
  api_get_str_attr: (
    /** 属性名 */
    attr: string,
  ) => string;

  /**
   * 设置单位字符串属性
   * @param attr 属性名
   * @param value 字符串值
   */
  api_set_str_attr: (
    /** 属性名 */
    attr: string,
    /** 字符串值 */
    value: string,
  ) => void;

  /**
   * 获取单位等级
   * @returns UInt32
   */
  api_get_level: () => UInt32;

  /**
   * 获取单位血量
   * @returns Fixed
   */
  api_get_hp: () => Fixed;

  /**
   * 获取单位血量百分比
   * @returns Fixed
   */
  api_get_hpp: () => Fixed;

  /**
   * 治疗单位
   * @param hp_change 治疗的数值
   * @param jump_word 是否跳字
   */
  api_heal: (
    /** 治疗的数值 */
    hp_change: Fixed,
    /**
     @defaultValue `False`
     */
    jump_word: boolean | null,
  ) => void;

  /**
   * 获取输出伤害统计值
   * @returns Fixed
   */
  api_get_dmg_statistics: () => Fixed;

  /**
   * 清空输出伤害统计值
   */
  api_clear_dmg_statistics: () => void;

  /**
   * 增加经验，增加值为正数
   * @param exp 经验
   */
  api_add_exp: (
    /** 经验 */
    exp: Fixed,
  ) => void;

  /**
   * 设置经验
   * @param exp 经验
   */
  api_set_exp: (
    /** 经验 */
    exp: Fixed,
  ) => void;

  /**
   * 获取单位当前经验, 如果达到了顶级，就返回-1
   * @returns UInt32
   */
  api_get_exp: () => UInt32;

  /**
   * 获取当前升级所需经验, 如果达到了顶级，就返回-1
   * @returns Fixed
   */
  api_get_upgrade_exp: () => Fixed;

  /**
   * 单位移除键值对
   * @param tag TAG
   */
  api_add_tag: (
    /** TAG */
    tag: string,
  ) => void;

  /**
   * 单位移除键值对
   * @param tag TAG
   */
  api_remove_tag: (
    /** TAG */
    tag: string,
  ) => void;

  /**
   * 设置单位名称
   * @param name 名称
   */
  api_set_name: (
    /** 名称 */
    name: string,
  ) => void;

  /**
   * 设置单位白天视野
   * @param value 视野
   */
  api_set_unit_day_vision: (
    /** 视野 */
    value: Float,
  ) => void;

  /**
   * 设置单位夜晚视野
   * @param value 视野
   */
  api_set_unit_night_vision: (
    /** 视野 */
    value: Float,
  ) => void;

  /**
   * 获取单位装备栏数量
   */
  api_get_unit_pkg_cnt: () => void;

  /**
   * 获取单位背包栏数量
   */
  api_get_unit_bag_cnt: () => void;

  /**
   * 获取单位动态碰撞半径
   * @returns Fixed
   */
  api_get_unit_collision_radius: () => Fixed;

  /**
   * 单位停止移动
   */
  api_stop_move: () => void;

  /**
   * 单位传送到指定坐标
   * @param point 目标坐标
   */
  api_transmit: (
    /** 目标坐标 */
    point: FVector3,
  ) => void;

  /**
   * 单位强制传送到指定坐标
   * @param pos 目标坐标
   */
  api_force_transmit: (
    /** 目标坐标 */
    pos: FVector3,
  ) => void;

  /**
   * 单位设置朝向
   * @param face_dir 朝向
   * @param speed_effect 是否受转身速度影响
   */
  api_set_face_dir: (
    /** 朝向 */
    face_dir: FVector3,
    /**
     @defaultValue `False`
     */
    speed_effect: boolean | null,
  ) => void;

  /**
   * 单位设置朝向角度
   * @param face_angle 朝向角度
   * @param turn_time_ms 转身时间毫秒
   */
  api_set_face_angle: (
    /** 朝向角度 */
    face_angle: Fixed,
    /**
     @defaultValue `-1`
     */
    turn_time_ms: Int32 | null,
  ) => void;

  /**
   * 单位是否能传送到目标点
   * @param pos 目标点
   * @returns boolean
   */
  api_can_teleport_to: (
    /** 目标点 */
    pos: FVector3,
  ) => boolean;

  /**
   * 获取单位位置
   * @returns FVector3
   */
  api_get_position: () => FVector3;

  /**
   * 获取单位朝向
   * @returns FVector3
   */
  api_get_face_dir: () => FVector3;

  /**
   * 获取单位面向角度
   * @returns Fixed
   */
  get_face_angle: () => Fixed;

  /**
   * 单位碰撞到的障碍的法线方向
   * @returns FVector3
   */
  api_collide_obstacle_normal: () => FVector3;

  /**
   * 设置单位转身速度
   * @param turn_speed 转身速度
   */
  api_set_turn_speed: (
    /** 转身速度 */
    turn_speed: Fixed,
  ) => void;

  /**
   * 获得单位转身速度
   * @returns Fixed
   */
  api_get_turn_speed: () => Fixed;

  /**
   * 单位是否在移动
   * @returns boolean
   */
  api_is_moving: () => boolean;

  /**
   * 设置单位是否计算某种碰撞类型
   * @param collision_layer 碰撞mask
   * @param enable 开启状态
   */
  api_set_move_collision: (
    /** 碰撞mask */
    collision_layer: Int32,
    /** 开启状态 */
    enable: boolean,
  ) => void;

  /**
   * 获取单位是否计算某种碰撞类型
   * @param collision_layer 碰撞mask
   * @returns boolean
   */
  api_get_move_collision: (
    /** 碰撞mask */
    collision_layer: Int32,
  ) => boolean;

  /**
   * 播放动画
   * @param name 动画名称
   * @param rate 播放倍率
   * @param init_time 开始时间(s)
   * @param end_time 结束时间(s)，正数 -1 表示不结束
   * @param loop 是否循环
   * @param return_idle 播放结束后是否恢复idle
   */
  api_play_animation: (
    /** 动画名称 */
    name: string,
    /**
     @defaultValue `1`
     */
    rate: Float | null,
    /**
     @defaultValue `0`
     */
    init_time: Float | null,
    /**
     @defaultValue `-1`
     */
    end_time: Float | null,
    /**
     @defaultValue `False`
     */
    loop: boolean | null,
    /**
     @defaultValue `False`
     */
    return_idle: boolean | null,
  ) => void;

  /**
   * 停止播放动画
   * @param name 动画名称
   */
  api_stop_animation: (
    /** 动画名称 */
    name: string,
  ) => void;

  /**
   * 停止当前正在播放的动画
   */
  api_stop_cur_animation: () => void;

  /**
   * 单位播放特效
   * @param socket_name 挂节点名字
   * @param sfx_res_id 特效编号
   * @param keep_time 持续时间，单位：秒
   * @param scale 缩放比例
   * @param inherit_pos 是否跟随单位位置
   * @param inherit_rotate 是否跟随单位旋转
   * @param inherit_scale 是否跟随缩放
   * @param role 所属单位
   * @param visible_type 可见性规则
   * @param rotation 初始旋转 角度制
   */
  api_play_sfx: (
    /** 挂节点名字 */
    socket_name: string,
    /** 特效编号 */
    sfx_res_id: SfxKey,
    /** 持续时间，单位：秒 */
    keep_time: Fixed,
    /**
     @defaultValue `1.0`
     */
    scale: Float | null,
    /**
     @defaultValue `True`
     */
    inherit_pos: boolean | null,
    /**
     @defaultValue `True`
     */
    inherit_rotate: boolean | null,
    /**
     @defaultValue `True`
     */
    inherit_scale: boolean | null,
    /** 所属单位 */
    role: Role | null,
    /**
     @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
    /**
     @defaultValue `0`
     */
    rotation: Float | null,
  ) => void;

  /**
   * 在单位上播放特效并返回特效实体
   * @param socket_name 挂节点名字
   * @param sfx_res_id 特效编号
   * @param keep_time 持续时间，单位：秒
   * @param scale 缩放比例
   * @param inherit_pos 是否跟随单位位置
   * @param inherit_rotate 是否跟随单位旋转
   * @param inherit_scale 是否跟随缩放
   * @param role 所属单位
   * @param visible_type 可见性规则
   * @param rotation 初始旋转 角度制
   * @returns Sfx
   */
  api_play_sfx_with_return: (
    /** 挂节点名字 */
    socket_name: string,
    /** 特效编号 */
    sfx_res_id: SfxKey,
    /** 持续时间，单位：秒 */
    keep_time: Fixed,
    /**
     @defaultValue `1.0`
     */
    scale: Float | null,
    /**
     @defaultValue `True`
     */
    inherit_pos: boolean | null,
    /**
     @defaultValue `True`
     */
    inherit_rotate: boolean | null,
    /**
     @defaultValue `True`
     */
    inherit_scale: boolean | null,
    /** 所属单位 */
    role: Role | null,
    /**
     @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
    /**
     @defaultValue `0.0`
     */
    rotation: Float | null,
  ) => Sfx;

  /**
   * 在两个单位之间挂链接特效
   * @param from_socket_name 起始挂节点
   * @param target_unit 目标单位
   * @param target_socket_name 目标挂节点
   * @param sfx_res_id 特效编号
   * @param scale 缩放比例
   * @param keep_time 最多持续时间 单位：秒
   * @param role 所属玩家
   * @param visible_type 可见性规则
   */
  api_play_link_sfx: (
    /** 起始挂节点 */
    from_socket_name: string,
    /** 目标单位 */
    target_unit: Unit,
    /** 目标挂节点 */
    target_socket_name: string,
    /** 特效编号 */
    sfx_res_id: SfxKey,
    /** 缩放比例 */
    scale: Float,
    /** 最多持续时间 单位：秒 */
    keep_time: Float,
    /** 所属玩家 */
    role: Role | null,
    /**
     @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
  ) => void;

  /**
   * 在两个单位之间挂链接特效并返回特效实体
   * @param from_socket_name 起始挂节点
   * @param target_unit 目标单位
   * @param target_socket_name 目标挂节点
   * @param sfx_res_id 特效编号
   * @param scale 缩放比例
   * @param keep_time 最多持续时间 单位：秒
   * @param role 所属玩家
   * @param visible_type 可见性规则
   * @returns Sfx
   */
  api_play_link_sfx_with_return: (
    /** 起始挂节点 */
    from_socket_name: string,
    /** 目标单位 */
    target_unit: Unit,
    /** 目标挂节点 */
    target_socket_name: string,
    /** 特效编号 */
    sfx_res_id: SfxKey,
    /** 缩放比例 */
    scale: Float,
    /** 最多持续时间 单位：秒 */
    keep_time: Float,
    /** 所属玩家 */
    role: Role | null,
    /**
     @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
  ) => Sfx;

  /**
   * 在单位和投射物之间挂链接特效
   * @param from_socket_name 起始挂节点
   * @param target_unit 目标投射物
   * @param target_socket_name 目标挂节点
   * @param sfx_res_id 特效编号
   * @param scale 缩放比例
   * @param keep_time 最多持续时间 单位：秒
   * @param role 所属玩家
   * @param visible_type 可见性规则
   */
  api_play_link_sfx_to_projectile: (
    /** 起始挂节点 */
    from_socket_name: string,
    /** 目标投射物 */
    target_unit: ProjectileEntity,
    /** 目标挂节点 */
    target_socket_name: string,
    /** 特效编号 */
    sfx_res_id: SfxKey,
    /** 缩放比例 */
    scale: Float,
    /** 最多持续时间 单位：秒 */
    keep_time: Float,
    /** 所属玩家 */
    role: Role | null,
    /**
     @defaultValue `1`
     */
    visible_type: SfxVisibleType | null,
  ) => void;

  /**
   * 单位播放音效
   * @param sound_id 音效资源编号
   * @param is_g_unit 是否仅对自己生效
   */
  api_play_sound_effect: (
    /** 音效资源编号 */
    sound_id: AudioKey,
    /**
     @defaultValue `False`
     */
    is_g_unit: boolean | null,
  ) => void;

  /**
   * 单位播放受击音效
   * @param sound_id 音效资源编号
   * @param attack_unit 攻击单位
   */
  api_play_hit_sound_effect: (
    /** 音效资源编号 */
    sound_id: AudioKey,
    /** 攻击单位 */
    attack_unit: Unit,
  ) => void;

  /**
   * 单位替换播放动画
   * @param target_ani 目标动画名字
   * @param source_ani 原动画名字
   */
  api_change_animation: (
    /** 目标动画名字 */
    target_ani: string,
    /** 原动画名字 */
    source_ani: string,
  ) => void;

  /**
   * 取消单位替换播放动画
   * @param target_ani 目标动画名字
   * @param source_ani 原动画名字
   */
  api_cancel_change_animation: (
    /** 目标动画名字 */
    target_ani: string,
    /** 原动画名字 */
    source_ani: string,
  ) => void;

  /**
   * 取消单位所有替换播放动画
   * @param source_ani 原动画名字
   */
  api_clear_change_animation: (
    /** 原动画名字 */
    source_ani: string,
  ) => void;

  /**
   * 单位替换模型
   * @param target_model 目标模型编号
   * @param source_model 原模型编号
   */
  api_change_model: (
    /** 目标模型编号 */
    target_model: ModelKey,
    /** 原模型编号 */
    source_model: ModelKey,
  ) => void;

  /**
   * 取消单位替换模型
   * @param target_model 目标模型编号
   * @param source_model 原模型编号
   */
  api_cancel_change_model: (
    /** 目标模型编号 */
    target_model: ModelKey,
    /** 原模型编号 */
    source_model: ModelKey,
  ) => void;

  /**
   * 取消单位所有替换模型
   * @param source_model 原模型编号
   */
  api_clear_change_model: (
    /** 原模型编号 */
    source_model: ModelKey,
  ) => void;

  /**
   * 单位替换模型
   * @param target_model 目标模型编号
   */
  api_replace_model: (
    /** 目标模型编号 */
    target_model: ModelKey,
  ) => void;

  /**
   * 取消单位替换模型
   * @param target_model 目标模型名字
   */
  api_cancel_replace_model: (
    /** 目标模型名字 */
    target_model: ModelKey,
  ) => void;

  /**
   * 显示血条倒计时
   * @param left_time 倒计时时长, 单位秒
   */
  api_show_health_bar_count_down: (
    /** 倒计时时长, 单位秒 */
    left_time: Fixed,
  ) => void;

  /**
   * 获取单位模型
   * @returns ModelKey
   */
  api_get_model: () => ModelKey;

  /**
   * 获取单位原模型
   * @returns ModelKey
   */
  api_get_source_model: () => ModelKey;

  /**
   * 显示单位头顶文本
   * @param text 显示信息
   * @param second 持续时间, 单位秒
   * @param localize 多语言环境
   */
  api_show_text: (
    /** 显示信息 */
    text: string,
    /** 持续时间, 单位秒 */
    second: Fixed,
    /**
     @defaultValue `0`
     */
    localize: Int32 | null,
  ) => void;

  /**
   * 更改单位称号
   * @param title_str 称号
   * @param localize 多语言转化
   */
  api_set_title: (
    /** 称号 */
    title_str: string,
    /**
     @defaultValue `False`
     */
    localize: boolean | null,
  ) => void;

  /**
   * 设置单位称号可见性
   * @param visible 是否显示
   */
  api_set_title_visible: (
    /** 是否显示 */
    visible: boolean,
  ) => void;

  /**
   * 隐藏显示单位名称,对于无头顶UI的单位该API不生效,每次隐藏计数+1,每次显示计数-1,计数归零显示单位名称
   * @param visible 是否显示
   */
  api_set_name_visible: (
    /** 是否显示 */
    visible: boolean,
  ) => void;

  /**
   * 隐藏显示单位名称,对于无头顶UI的单位该API不生效,每次隐藏计数+1,每次显示计数-1,计数归零显示单位名称
   * @param visible 是否显示
   */
  api_set_bar_name_visible: (
    /** 是否显示 */
    visible: boolean,
  ) => void;

  /**
   * 设置血条显示名字
   * @param name 名字
   */
  api_set_bar_name: (
    /** 名字 */
    name: string,
  ) => void;

  /**
   * 设置血条显示名字缩放
   * @param scale 缩放
   */
  set_bar_name_scale: (
    /** 缩放 */
    scale: Float,
  ) => void;

  /**
   * 设置血条显示名字字体
   * @param font_name 字体名称
   */
  api_set_bar_name_font_type: (
    /** 字体名称 */
    font_name: string,
  ) => void;

  /**
   * 设置血条显示名字字体大小
   * @param size 字号
   */
  api_set_bar_name_font_size: (
    /** 字号 */
    size: UInt32,
  ) => void;

  /**
   * 隐藏显示单位头顶文本,每次隐藏计数+1,每次显示计数-1,计数归零显示单位头顶文本
   * @param visible 是否显示
   */
  api_set_bar_text_visible: (
    /** 是否显示 */
    visible: boolean,
  ) => void;

  /**
   * 设置头顶显示文字缩放
   * @param scale 缩放
   */
  api_set_bar_text_scale: (
    /** 缩放 */
    scale: Float,
  ) => void;

  /**
   * 设置头顶显示文字类型
   * @param bar_text_type 类型
   */
  api_set_bar_text_type: (
    /** 类型 */
    bar_text_type: UInt32,
  ) => void;

  /**
   * 设置头顶显示文字字体
   * @param font_type 字体
   */
  api_set_bar_text_font_type: (
    /** 字体 */
    font_type: string,
  ) => void;

  /**
   * 设置头顶显示文字字号
   * @param font_size 字号
   */
  api_set_bar_text_font_size: (
    /** 字号 */
    font_size: UInt32,
  ) => void;

  /**
   * 设置血条名称显示样式
   * @param t 样式,具体参见**HeadBarShowNameType**
   */
  api_set_bar_name_show_type: (
    /** 样式,具体参见**HeadBarShowNameType** */
    t: UInt32,
  ) => void;

  /**
   * 隐藏显示单位血条,对于无头顶UI的单位该API不生效,每次隐藏计数+1,每次显示计数-1,计数归零显示单位血条
   * @param visible 是否显示
   */
  api_set_hp_bar_visible: (
    /** 是否显示 */
    visible: boolean,
  ) => void;

  /**
   * 设置单位血条显示样式,对于无头顶UI的单位该API不生效
   * @param t 显示样式,具体参见**HeadBarShowType**
   */
  api_set_hp_bar_show_type: (
    /** 显示样式,具体参见**HeadBarShowType** */
    t: UInt32,
  ) => void;

  /**
   * 设置单位血条样式,对于无头顶UI的单位该API不生效
   * @param t 血条样式
   */
  api_set_hp_bar_type: (
    /** 血条样式 */
    t: UInt32,
  ) => void;

  /**
   * 绑定UI控件
   * @param ui_comp UI控件
   * @param socket_name 挂接点(需确认模型拥有该挂接点,挂接点可在模型属性中查看,具体挂接点类型参见**ModelSocket**)
   */
  api_add_ui_comp: (
    /** UI控件 */
    ui_comp: WorldUINode,
    /** 挂接点(需确认模型拥有该挂接点,挂接点可在模型属性中查看,具体挂接点类型参见**ModelSocket**) */
    socket_name: string,
  ) => void;

  /**
   * 修改单位称号字号
   * @param font_size 字号
   */
  api_change_title_font_size: (
    /** 字号 */
    font_size: UInt32,
  ) => void;

  /**
   * 修改单位称号缩放
   * @param scale 缩放比例
   */
  api_change_title_scale: (
    /** 缩放比例 */
    scale: Float,
  ) => void;

  /**
   * 修改单位称号字体
   * @param font_name 字体
   */
  api_change_title_font_type: (
    /** 字体 */
    font_name: string,
  ) => void;

  /**
   * 修改单位称号样式
   * @param style_type 称号样式
   */
  api_change_title_type: (
    /** 称号样式 */
    style_type: UInt32,
  ) => void;

  /**
   * 修改单位称号背景不透明度
   * @param opacity 不透明度
   */
  api_set_title_bg_opacity: (
    /** 不透明度 */
    opacity: Float,
  ) => void;

  /**
   * 修改单位称号背景缩放
   * @param scale 缩放
   */
  api_set_title_bg_scale: (
    /** 缩放 */
    scale: Float,
  ) => void;

  /**
   * 修改单位血条刻度可见性
   * @param visible 可见性
   */
  api_set_blood_scale_visible: (
    /** 可见性 */
    visible: boolean,
  ) => void;

  /**
   * 修改单位称号位置偏移
   * @param offset 位置偏移
   */
  api_set_title_bar_pos_offset: (
    /** 位置偏移 */
    offset: Vector2,
  ) => void;

  /**
   * 修改单位血条位置偏移
   * @param offset 位置偏移
   */
  api_set_hp_bar_pos_offset: (
    /** 位置偏移 */
    offset: Vector2,
  ) => void;

  /**
   * 修改单位名称位置偏移
   * @param offset 位置偏移
   */
  api_set_name_bar_pos_offset: (
    /** 位置偏移 */
    offset: Vector2,
  ) => void;

  /**
   * 修改单位文本位置偏移
   * @param offset 位置偏移
   */
  api_set_text_bar_pos_offset: (
    /** 位置偏移 */
    offset: Vector2,
  ) => void;

  /**
   * 修改单位倒计时位置偏移
   * @param offset 位置偏移
   */
  api_set_countdown_bar_pos_offset: (
    /** 位置偏移 */
    offset: Vector2,
  ) => void;

  /**
   * 单位抬高
   * @param y 抬高高度
   * @param dt 时间
   */
  api_raise_height: (
    /** 抬高高度 */
    y: Fixed,
    /** 时间 */
    dt: Fixed,
  ) => void;

  /**
   * 获取单位高度
   * @returns Fixed
   */
  api_get_height: () => Fixed;

  /**
   * 设置单位缩放
   * @param scale 缩放
   */
  api_set_scale: (
    /** 缩放 */
    scale: Float,
  ) => void;

  /**
   * 修改单位血条样式
   * @param blood_bar_type 血条样式
   */
  api_set_blood_bar_type: (
    /** 血条样式 */
    blood_bar_type: UInt64,
  ) => void;

  /**
   * 修改单位血条显示模式
   * @param blood_bar_show_type 血条显示模式
   */
  api_set_blood_bar_show_type: (
    /** 血条显示模式 */
    blood_bar_show_type: UInt64,
  ) => void;

  /**
   * 开启残影
   * @param r r
   * @param g g
   * @param b b
   * @param a a
   * @param interval interval
   * @param duration duration
   * @param start start
   * @param end end
   */
  api_start_ghost: (
    /**
     @defaultValue `Fix32(255.0)`
     */
    r: Fixed | null,
    /**
     @defaultValue `Fix32(255.0)`
     */
    g: Fixed | null,
    /**
     @defaultValue `Fix32(255.0)`
     */
    b: Fixed | null,
    /**
     @defaultValue `Fix32(255.0)`
     */
    a: Fixed | null,
    /**
     @defaultValue `Fix32(0.3)`
     */
    interval: Fixed | null,
    /**
     @defaultValue `Fix32(0.5)`
     */
    duration: Fixed | null,
    /**
     @defaultValue `Fix32(0.4)`
     */
    start: Fixed | null,
    /**
     @defaultValue `Fix32(0.3)`
     */
    end: Fixed | null,
  ) => void;

  /**
   * 关闭残影
   */
  api_stop_ghost: () => void;

  /**
   * 设置残影颜色
   * @param r r
   * @param g g
   * @param b b
   * @param a a
   */
  api_set_ghost_color: (
    /** r */
    r: Fixed,
    /** g */
    g: Fixed,
    /** b */
    b: Fixed,
    /** a */
    a: Fixed,
  ) => void;

  /**
   * 设置残影时间
   * @param interval interval
   * @param duration duration
   * @param start start
   * @param end end
   */
  api_set_ghost_time: (
    /** interval */
    interval: Fixed,
    /** duration */
    duration: Fixed,
    /** start */
    start: Fixed,
    /** end */
    end: Fixed,
  ) => void;

  /**
   * 单位添加指定编号的效果
   * @param modifier_key 效果编号
   * @param from_unit 来源单位对象
   * @param from_ability 关联技能
   * @param time 持续时间
   * @param cycle_time 循环周期
   * @param stack_count 效果层数
   */
  api_add_modifier: (
    /** 效果编号 */
    modifier_key: ModifierKey,
    /** 来源单位对象 */
    from_unit: Unit | null,
    /** 关联技能 */
    from_ability: Ability | null,
    /**
     @defaultValue `Fix32(-1.0)`
     */
    time: Fixed | null,
    /**
     @defaultValue `Fix32(0.0)`
     */
    cycle_time: Fixed | null,
    /**
     @defaultValue `1`
     */
    stack_count: Int32 | null,
  ) => void;

  /**
   * 获取单位身上指定编号的的效果层数
   * @param modifier_key 效果编号
   * @returns Int32
   */
  api_get_modifier_stack_count: (
    /** 效果编号 */
    modifier_key: ModifierKey,
  ) => Int32;

  /**
   * 单位身上是否拥有指定编号的效果
   * @param modifier_key 效果编号
   * @returns boolean
   */
  api_has_modifier: (
    /** 效果编号 */
    modifier_key: ModifierKey,
  ) => boolean;

  /**
   * 单位身上是否拥有指定标签的效果
   * @param tag 标签
   * @returns boolean
   */
  api_has_modifier_with_tag: (
    /** 标签 */
    tag: string,
  ) => boolean;

  /**
   * 获取单位身上指定编号的第i个效果实例
   * @param add_index 效果位置
   * @param modifier_key 效果编号
   */
  api_get_modifier: (
    /** 效果位置 */
    add_index: Int32,
    /** 效果编号 */
    modifier_key: ModifierKey,
  ) => void;

  /**
   * 获取单位身上指定编号的第i个效果的个数
   * @param modifier_key 效果编号
   */
  api_get_modifier_count: (
    /** 效果编号 */
    modifier_key: ModifierKey,
  ) => void;

  /**
   * 移除目标单位身上的目标modifier实例
   * @param tar_modifier 效果编号
   */
  api_remove_modifier_instance: (
    /** 效果编号 */
    tar_modifier: ModifierEntity,
  ) => void;

  /**
   * 移除目标单位身上的目标modifier类型的所有实例
   * @param modifier_key 效果编号
   */
  api_remove_modifier_type: (
    /** 效果编号 */
    modifier_key: ModifierKey,
  ) => void;

  /**
   * 单位身上是否拥有指定类别的效果
   * @param modifier_effect_type 魔法效果类型
   * @returns boolean
   */
  api_has_modifier_type: (
    /** 魔法效果类型 */
    modifier_effect_type: ModifierEffectType,
  ) => boolean;

  /**
   * 删除单位指定影响类型的魔法效果
   * @param effect_type 效果影响类型
   */
  api_delete_all_modifiers_by_effect_type: (
    /** 效果影响类型 */
    effect_type: ModifierEffectType,
  ) => void;

  /**
   * 获取单位身上所有的魔法效果
   * @returns ModifierEntity
   */
  api_get_all_modifiers: () => ModifierEntity;

  /**
   * 单位添加技能
   * @param ability_type 技能类型
   * @param ability_id 技能编号
   * @param ability_index 技能槽位编号
   * @returns Ability
   */
  api_add_ability: (
    /** 技能类型 */
    ability_type: AbilityType,
    /** 技能编号 */
    ability_id: AbilityKey,
    /**
     @defaultValue `-1`
     */
    ability_index: AbilityIndex | null,
  ) => Ability;

  /**
   * 单位根据槽位移除技能
   * @param ability_type 技能类型
   * @param ability_index 技能槽位
   */
  api_remove_ability_by_index: (
    /** 技能类型 */
    ability_type: Int32,
    /** 技能槽位 */
    ability_index: Int32,
  ) => void;

  /**
   * 单位移除某种类型里所有是指定技能ID的技能
   * @param ability_type 技能类型
   * @param ability_id 技能ID
   */
  api_remove_abilities_in_type: (
    /** 技能类型 */
    ability_type: Int32,
    /** 技能ID */
    ability_id: AbilityKey,
  ) => void;

  /**
   * 单位设置技能等级。
   * @param modify 修改方式
   * @param ability_type 技能类型
   * @param ability_index 技能槽位
   * @param level 技能等级
   */
  api_set_ability_level: (
    /** 修改方式 */
    modify: Int32,
    /** 技能类型 */
    ability_type: AbilityType,
    /** 技能槽位 */
    ability_index: AbilityIndex,
    /** 技能等级 */
    level: Int32,
  ) => void;

  /**
   * 单位学习技能
   * @param ability_key 技能类型
   */
  api_unit_learn_ability: (
    /** 技能类型 */
    ability_key: AbilityKey,
  ) => void;

  /**
   * 获取英雄的技能点
   * @returns Int32
   */
  api_get_ability_point: () => Int32;

  /**
   * 设置英雄的技能点
   * @param ability_point 技能点
   */
  api_set_ability_point: (
    /** 技能点 */
    ability_point: Int32,
  ) => void;

  /**
   * 增加英雄的技能点
   * @param value 技能点
   */
  api_add_ability_point: (
    /** 技能点 */
    value: Int32,
  ) => void;

  /**
   * 通过技能槽位获取技能
   * @param ability_type 技能类型
   * @param ability_index 技能槽位
   * @returns Ability
   */
  api_get_ability: (
    /** 技能类型 */
    ability_type: AbilityType,
    /** 技能槽位 */
    ability_index: AbilityIndex,
  ) => Ability;

  /**
   * 通过技能类型加技能ID获取技能
   * @param ability_type 技能类型
   * @param ability_id 技能编号
   * @returns Ability
   */
  api_get_ability_by_type: (
    /** 技能类型 */
    ability_type: AbilityType,
    /** 技能编号 */
    ability_id: AbilityKey,
  ) => Ability;

  /**
   * 获取某种类型的技能列表
   * @param ability_type 技能类型
   * @returns Ability
   */
  api_get_abilities_by_type: (
    /** 技能类型 */
    ability_type: AbilityType,
  ) => Ability;

  /**
   * 是否有对应技能类型的技能
   * @param ability_id 技能类型
   * @returns boolean
   */
  api_check_has_ability_type: (
    /** 技能类型 */
    ability_id: AbilityKey,
  ) => boolean;

  /**
   * 获取单位技能列表
   * @returns Ability
   */
  api_get_all_abilities_can_show: () => Ability;

  /**
   * 交换技能
   * @param ability_1 技能
   * @param ability_2 技能
   */
  api_switch_ability: (
    /** 技能 */
    ability_1: Ability,
    /** 技能 */
    ability_2: Ability,
  ) => void;

  /**
   * 单位禁用技能。
   * @param ability_type 技能类型
   * @param ability_index 技能槽位
   */
  api_disable_ability: (
    /** 技能类型 */
    ability_type: AbilityType,
    /** 技能槽位 */
    ability_index: AbilityIndex,
  ) => void;

  /**
   * 单位解禁技能。
   * @param ability_type 技能类型
   * @param ability_index 技能槽位
   */
  api_enable_ability: (
    /** 技能类型 */
    ability_type: AbilityType,
    /** 技能槽位 */
    ability_index: AbilityIndex,
  ) => void;

  /**
   * 返回单位实体指定槽位技能的字符串属性值
   * @param ability_type 技能类型
   * @param ability_index 技能槽位
   * @param prop 属性名
   * @returns string
   */
  api_get_ability_str_attr_value: (
    /** 技能类型 */
    ability_type: AbilityType,
    /** 技能槽位 */
    ability_index: AbilityIndex,
    /** 属性名 */
    prop: string,
  ) => string;

  /**
   * 根据技能序号获取技能对象
   * @param seq 技能序号
   * @returns Ability
   */
  api_get_ability_by_seq: (
    /** 技能序号 */
    seq: AbilitySeq,
  ) => Ability;

  /**
   * 给单位施加状态
   * @param state_id 状态ID
   */
  api_add_state: (
    /** 状态ID */
    state_id: UInt32,
  ) => void;

  /**
   * 给单位去除状态
   * @param state_id 状态ID
   */
  api_remove_state: (
    /** 状态ID */
    state_id: UInt32,
  ) => void;

  /**
   * 是否在战斗状态
   * @returns boolean
   */
  api_is_in_battle_state: () => boolean;

  /**
   * 单位是否处于某状态
   * @param state_bit 状态
   * @returns boolean
   */
  api_has_state: (
    /** 状态 */
    state_bit: Int32,
  ) => boolean;

  /**
   * 单位施放技能
   * @param ability_type 技能类型
   * @param ability_index 技能槽位
   */
  api_release_ability_by_index: (
    /** 技能类型 */
    ability_type: Int32,
    /** 技能槽位 */
    ability_index: Int32,
  ) => void;

  /**
   * 单位施放技能，具有释放目标地点
   * @param ability_type 技能类型
   * @param ability_index 技能坑位
   * @param postion 技能目标位置
   */
  api_release_ability_at_position: (
    /** 技能类型 */
    ability_type: Int32,
    /** 技能坑位 */
    ability_index: Int32,
    /** 技能目标位置 */
    postion: Point,
  ) => void;

  /**
   * 发布建造命令(目标点)
   * @param build_key 建筑类型
   * @param point 目标位置
   */
  api_create_building_on_point: (
    /** 建筑类型 */
    build_key: UnitKey,
    /** 目标位置 */
    point: Point,
  ) => void;

  /**
   * 发布建造命令(坐标)
   * @param build_key 建筑类型
   * @param pos_x 坐标X
   * @param pos_z 坐标Z
   */
  api_create_building_on_position: (
    /** 建筑类型 */
    build_key: UnitKey,
    /** 坐标X */
    pos_x: Fixed,
    /** 坐标Z */
    pos_z: Fixed,
  ) => void;

  /**
   * 单位是否拥有物品
   * @param item 物品
   * @returns boolean
   */
  api_has_item: (
    /** 物品 */
    item: Item,
  ) => boolean;

  /**
   * 单位是否拥有特定编号物品
   * @param item_no 物品编号
   * @returns boolean
   */
  api_has_item_key: (
    /** 物品编号 */
    item_no: ItemKey,
  ) => boolean;

  /**
   * 给单位添加物品名
   * @param item_no 物品编号
   * @returns Item
   */
  api_add_item: (
    /** 物品编号 */
    item_no: ItemKey,
  ) => Item;

  /**
   * 给单位删除物品名
   * @param item_key 物品编号
   * @param num 数量
   */
  api_delete_item: (
    /** 物品编号 */
    item_key: ItemKey,
    /**
     @defaultValue `1`
     */
    num: Int32 | null,
  ) => void;

  /**
   * 单位丢弃物品实体到场景中
   * @param item 物品
   * @param pos 点
   * @param stack_cnt 数量
   */
  api_drop_item: (
    /** 物品 */
    item: Item,
    /** 点 */
    pos: FPoint,
    /** 数量 */
    stack_cnt: Int32,
  ) => void;

  /**
   * 单位删除物品实体
   * @param stack_cnt 数量
   * @param item 物品
   */
  api_remove_item: (
    /** 数量 */
    stack_cnt: Int32,
    /** 物品 */
    item: Item,
  ) => void;

  /**
   * 获取单位背包槽位的物品
   * @param slot_type 背包槽位
   * @param slot_idx 格子下标
   * @returns Item
   */
  api_get_item_by_slot: (
    /** 背包槽位 */
    slot_type: SlotType,
    /** 格子下标 */
    slot_idx: Int32,
  ) => Item;

  /**
   * 移动物品
   * @param item 物品
   * @param slot_type 背包槽位
   * @param slot_idx 格子下标
   */
  api_shift_item: (
    /** 物品 */
    item: Item,
    /** 背包槽位 */
    slot_type: SlotType,
    /** 格子下标 */
    slot_idx: UInt32,
  ) => void;

  /**
   * 单位身上所有物品
   * @returns ItemGroup
   */
  api_get_all_item_pids: () => ItemGroup;

  /**
   * 单位是否商店
   * @returns boolean
   */
  api_is_shop: () => boolean;

  /**
   * 获取商店单位范围
   * @returns Fixed
   */
  api_get_shop_range: () => Fixed;

  /**
   * 添加物品商品到商店
   * @param tab_name 页签
   * @param item_no 道具编号
   */
  api_add_shop_item: (
    /** 页签 */
    tab_name: TabName,
    /** 道具编号 */
    item_no: ItemKey,
  ) => void;

  /**
   * 获取商店某页签的商品列表
   * @param tab_idx 页签id
   * @returns ItemKey
   */
  api_get_shop_item_list: (
    /** 页签id */
    tab_idx: TabIdx,
  ) => ItemKey;

  /**
   * 获取商店商品的恢复时间
   * @param tab_idx 页签id
   * @param item_no 道具编号
   */
  api_get_shop_item_cd: (
    /** 页签id */
    tab_idx: TabIdx,
    /** 道具编号 */
    item_no: ItemKey,
  ) => void;

  /**
   * 获取商店页签数量
   * @returns ItemKey
   */
  api_get_shop_tab_cnt: () => ItemKey;

  /**
   * 获取商店的页签名
   * @param tab_idx 页签id
   * @returns string
   */
  api_get_shop_tab_name: (
    /** 页签id */
    tab_idx: TabIdx,
  ) => string;

  /**
   * 添加单位商品到商店
   * @param tab_name 页签
   * @param entity_no 单位编号
   */
  api_add_shop_unit: (
    /** 页签 */
    tab_name: TabName,
    /** 单位编号 */
    entity_no: UnitKey,
  ) => void;

  /**
   * 删除商店物品商品
   * @param tab_name 页签
   * @param item_no 道具编号
   */
  api_remove_shop_item: (
    /** 页签 */
    tab_name: TabName,
    /** 道具编号 */
    item_no: ItemKey,
  ) => void;

  /**
   * 删除商店单位商品
   * @param tab_name 页签
   * @param entity_no 单位编号
   */
  api_remove_shop_unit: (
    /** 页签 */
    tab_name: TabName,
    /** 单位编号 */
    entity_no: UnitKey,
  ) => void;

  /**
   * 设置物品商品库存
   * @param tab_name 页签
   * @param item_no 道具编号
   * @param cnt 库存
   */
  api_set_shop_item_stock: (
    /** 页签 */
    tab_name: TabName,
    /** 道具编号 */
    item_no: ItemKey,
    /** 库存 */
    cnt: UInt32,
  ) => void;

  /**
   * 设置单位商品库存
   * @param tab_name 页签
   * @param entity_no 单位编号
   * @param cnt 库存
   */
  api_set_shop_unit_stock: (
    /** 页签 */
    tab_name: TabName,
    /** 单位编号 */
    entity_no: UnitKey,
    /** 库存 */
    cnt: UInt32,
  ) => void;

  /**
   * 设置商店开关
   * @param is_shop 开关
   */
  api_set_is_shop: (
    /** 开关 */
    is_shop: boolean,
  ) => void;

  /**
   * 单位购买物品
   * @param shop_unit 商店
   * @param tab_idx 页签id
   * @param item_no 物品编号
   */
  api_buy_item_with_tab_name: (
    /** 商店 */
    shop_unit: Unit,
    /** 页签id */
    tab_idx: TabIdx,
    /** 物品编号 */
    item_no: ItemKey,
  ) => void;

  /**
   * 单位购买单位
   * @param shop_unit 商店
   * @param tab_name 页签
   * @param entity_no 单位编号
   */
  api_buy_unit_with_tab_name: (
    /** 商店 */
    shop_unit: Unit,
    /** 页签 */
    tab_name: TabName,
    /** 单位编号 */
    entity_no: UnitKey,
  ) => void;

  /**
   * 单位出售物品
   * @param shop_unit 商店
   * @param item 道具
   */
  api_sell_item: (
    /** 商店 */
    shop_unit: Unit,
    /** 道具 */
    item: Item,
  ) => void;

  /**
   * 设置商店目标
   * @param target_unit 目标
   */
  api_set_shop_target: (
    /** 目标 */
    target_unit: Unit,
  ) => void;

  /**
   * 获取单位商店物品商品库存
   * @param tab_idx 页签id
   * @param item_no 物品编号
   * @returns Int32
   */
  api_get_shop_item_stock: (
    /** 页签id */
    tab_idx: TabIdx,
    /** 物品编号 */
    item_no: ItemKey,
  ) => Int32;

  /**
   * 获取单位商店单位商品库存
   * @param tab_name 页签
   * @param entity_no 单位编号
   * @returns Int32
   */
  api_get_shop_unit_stock: (
    /** 页签 */
    tab_name: TabName,
    /** 单位编号 */
    entity_no: UnitKey,
  ) => Int32;

  /**
   * 获取单位商店单位商品售价
   * @param tab_name 页签
   * @param entity_no 单位编号
   * @returns Fixed
   */
  api_get_shop_item_price: (
    /** 页签 */
    tab_name: TabName,
    /** 单位编号 */
    entity_no: UnitKey,
  ) => Fixed;

  /**
   * 科技升级
   * @param tech_no 科技编号
   */
  api_upgrade_tech: (
    /** 科技编号 */
    tech_no: TechKey,
  ) => void;

  /**
   * 获取科技列表
   * @returns TechKey
   */
  api_get_tech_list: () => TechKey;

  /**
   * 获取科技是否满足前置条件
   * @param tech_no 科技编号
   * @returns TechKey
   */
  api_check_tech_precondition: (
    /** 科技编号 */
    tech_no: TechKey,
  ) => TechKey;

  /**
   * 添加科技
   * @param tech_no 科技编号
   */
  api_add_tech: (
    /** 科技编号 */
    tech_no: TechKey,
  ) => void;

  /**
   * 删除科技
   * @param tech_no 科技编号
   */
  api_remove_tech: (
    /** 科技编号 */
    tech_no: TechKey,
  ) => void;

  /**
   * 发布命令
   * @param command 命令
   */
  api_release_command: (
    /** 命令 */
    command: UnitCommand,
  ) => void;
}
