declare interface Projectile {
  /**
   * 投射物本身对象
   * @returns Unit
   */
  api_get_self: () => Unit;

  /**
   * 投射物编号
   * @returns ProjectileKey
   */
  api_get_key: () => ProjectileKey;

  /**
   * 投射物产生者
   * @returns Unit
   */
  api_get_owner: () => Unit;

  /**
   * 投掷物目标对象
   * @returns Unit
   */
  api_get_target: () => Unit;

  /**
   * 销毁投射物对象
   * @param unit 销毁的投射物对象
   */
  api_delete: (
    /** 销毁的投射物对象 */
    unit: Unit | null,
  ) => void;

  /**
   * 设置投射物位置
   * @param point 投射物位置
   */
  api_set_position: (
    /** 投射物位置 */
    point: Point,
  ) => void;

  /**
   * 设置投射物朝向
   * @param face_angle 投射物朝向
   */
  api_set_face_angle: (
    /** 投射物朝向 */
    face_angle: Float,
  ) => void;

  /**
   * 设置投射物旋转
   * @param x x轴旋转
   * @param y y轴旋转
   * @param z z轴旋转
   */
  api_set_rotation: (
    /** x轴旋转 */
    x: Float,
    /** y轴旋转 */
    y: Float,
    /** z轴旋转 */
    z: Float,
  ) => void;

  /**
   * 设置投射物缩放
   * @param x x轴缩放
   * @param y y轴缩放
   * @param z z轴缩放
   */
  api_set_scale: (
    /** x轴缩放 */
    x: Float,
    /** y轴缩放 */
    y: Float,
    /** z轴缩放 */
    z: Float,
  ) => void;

  /**
   * 设置投射物特效播放速度
   * @param rate 播放速度
   */
  api_set_animation_speed: (
    /** 播放速度 */
    rate: Float,
  ) => void;

  /**
   * 设置投射物持续时间
   * @param duration 持续时间
   */
  api_set_duration: (
    /** 持续时间 */
    duration: Float,
  ) => void;

  /**
   * 增加投射物持续时间
   * @param extra_time 持续时间变化值
   */
  api_add_duration: (
    /** 持续时间变化值 */
    extra_time: Float,
  ) => void;

  /**
   * 获取投射物剩余持续时间
   * @returns Float
   */
  api_get_left_time: () => Float;

  /**
   * 获取投射物高度
   * @returns Float
   */
  api_get_height: () => Float;

  /**
   * 获取投射物角度
   * @returns Float
   */
  api_get_face_angle: () => Float;

  /**
   * 获取投射物位置
   * @returns FVector3
   */
  api_get_position: () => FVector3;

  /**
   * 获取投射物朝向
   * @returns FVector3
   */
  api_get_face_dir: () => FVector3;

  /**
   * 投射物碰撞到的障碍的法线方向
   * @returns FVector3
   */
  api_collide_obstacle_normal: () => FVector3;

  /**
   * 投射物抬高
   * @param y 定点数
   */
  api_raise_height: (
    /** 定点数 */
    y: Fixed,
  ) => void;

  /**
   * 在投射物和单位之间挂链接特效
   * @param from_socket_name 起始挂节点
   * @param target_unit 目标单位
   * @param target_socket_name 目标挂节点
   * @param sfx_res_id 特效编号
   * @param scale 缩放比例
   * @param keep_time 最多持续时间
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
    /** 最多持续时间 */
    keep_time: Float,
    /** 所属玩家 */
    role: Role | null,
    /**
     @defaultValue `1`
     */
    visible_type: UInt32 | null,
  ) => void;

  /**
   * 在投射物和单位之间挂链接特效并返回特效实体
   * @param from_socket_name 起始挂节点
   * @param target_unit 目标单位
   * @param target_socket_name 目标挂节点
   * @param sfx_res_id 特效编号
   * @param scale 缩放比例
   * @param keep_time 最多持续时间
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
    /** 最多持续时间 */
    keep_time: Float,
    /** 所属玩家 */
    role: Role | null,
    /**
     @defaultValue `1`
     */
    visible_type: UInt32 | null,
  ) => Sfx;

  /**
   * 在投射物之间挂链接特效
   * @param from_socket_name 起始挂节点
   * @param target_unit 目标投射物
   * @param target_socket_name 目标挂节点
   * @param sfx_res_id 特效编号
   * @param scale 缩放比例
   * @param keep_time 最多持续时间
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
    /** 最多持续时间 */
    keep_time: Float,
    /** 所属玩家 */
    role: Role | null,
    /**
     @defaultValue `1`
     */
    visible_type: UInt32 | null,
  ) => void;

  /**
   * 获取投射物的字符串属性
   * @param attr_name 属性名称
   * @returns string
   */
  api_get_str_attr: (
    /** 属性名称 */
    attr_name: string,
  ) => string;

  /**
   * 设置投射物的字符串属性
   * @param attr_name 属性名称
   * @param value 属性取值
   */
  api_set_str_attr: (
    /** 属性名称 */
    attr_name: string,
    /** 属性取值 */
    value: string,
  ) => void;

  /**
   * 投射物添加键值对
   * @param tag TAG
   */
  api_add_tag: (
    /** TAG */
    tag: string,
  ) => void;

  /**
   * 投射物移除键值对
   * @param tag TAG
   */
  api_remove_tag: (
    /** TAG */
    tag: string,
  ) => void;
}
