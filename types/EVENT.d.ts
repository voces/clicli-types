declare const EVENT: {
  /** LOGIC_UNIT_DESTROY */
  readonly LOGIC_UNIT_DESTROY: unique symbol;

  /** 定时器超时 */
  readonly TIMEOUT: unique symbol;

  /** 周期性定时器超时 */
  readonly REPEAT_TIMEOUT: unique symbol;

  /** 游戏初始化 */
  readonly GAME_INIT: unique symbol;

  /** Loading结束 */
  readonly LOADING_END: unique symbol;

  /**
   * 接收触发事件}
   *
   * @data `__trigger_id`: `TriggerID` - 触发器id
   */
  readonly RECV_TRIGGER: unique symbol;

  /** 游戏结束 */
  readonly GAME_END: unique symbol;

  /** 游戏暂停 */
  readonly GAME_PAUSE: unique symbol;

  /** 游戏恢复 */
  readonly GAME_RESUME: unique symbol;

  /** 空事件 */
  readonly EMPTY: unique symbol;

  /**
   * 全局计时器超时}
   *
   * @data `__name`: `string` - 计时器名称
   */
  readonly ER_TIMEOUT: unique symbol;

  /**
   * 昼夜发生变化}
   *
   * @data `__is_day_to_night`: `boolean` - 是否是白天转到黑夜
   */
  readonly DAY_NIGHT_CHANGE: unique symbol;

  /**
   * 添加容器}
   *
   * @data `__name`: `string` - 容器名,
   * @data `__container`: `ActorContainer` - 容器
   */
  readonly CONTAINER_ADDED: unique symbol;

  /**
   * 容器中添加actor}
   *
   * @data `__owner`: `Actor` - 容器从属actor
   */
  readonly CONTAINER_ACTOR_ADDED: unique symbol;

  /**
   * 容器中删除actor}
   *
   * @data `__owner`: `Actor` - 原容器从属actor
   */
  readonly CONTAINER_ACTOR_REMOVED: unique symbol;

  /**
   * actor属性更新}
   *
   * @data `__name`: `string` - 属性名
   */
  readonly ACTOR_ATTR_UPDATED: unique symbol;

  /**
   * 单位进入区域}
   *
   * @data `__unit_id`: `UnitID` - 单位ID,
   * @data `__area_id`: `AreaID` - 区域ID,
   * @data `__trigger_id`: `TriggerID` - 触发器ID
   */
  readonly AREA_ENTER: unique symbol;

  /**
   * 单位离开区域}
   *
   * @data `__unit_id`: `UnitID` - 单位ID,
   * @data `__area_id`: `AreaID` - 区域ID,
   * @data `__trigger_id`: `TriggerID` - 触发器ID
   */
  readonly AREA_LEAVE: unique symbol;

  /**
   * 玩家加入战斗}
   *
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly ROLE_JOIN_BATTLE: unique symbol;

  /**
   * 玩家主动退出游戏}
   *
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly ROLE_ACTIVE_EXIT_GAME_EVENT: unique symbol;

  /**
   * 玩家断开服务器连接}
   *
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly ROLE_LOSE_CONNECT: unique symbol;

  /**
   * AI接管玩家}
   *
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly AI_TAKE_CONTROL: unique symbol;

  /**
   * 下载档案数据回调}
   *
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly DOWNLOAD_MAP_ARCHIVE_CALLBACK: unique symbol;

  /**
   * 玩家成功使用收费道具}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__store_key`: `StoreKey` - 收费道具编号,
   * @data `__use_cnt`: `UInt32` - 使用次数
   */
  readonly ROLE_USE_STORE_ITEM_END: unique symbol;

  /**
   * 玩家成功使用收费道具（触发器内）}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__store_key`: `StoreKey` - 收费道具编号
   */
  readonly CONSUME_STORE_ITEM: unique symbol;

  /**
   * 玩家持有收费道具}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__store_key`: `StoreKey` - 收费道具编号
   */
  readonly ROLE_HOLD_STORE_ITEM: unique symbol;

  /**
   * 玩家资源变化}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__res_key`: `RoleResKey` - 玩家资源类型,
   * @data `__res_value`: `Int32` - 玩家资源值
   */
  readonly ROLE_RESOURCE_CHANGED: unique symbol;

  /**
   * 玩家输入字符串}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__msg`: `string` - 字符串
   */
  readonly ROLE_INPUT_MSG: unique symbol;

  /**
   * 玩家输入激活码}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__activation_code_group`: `string` - 激活码组
   */
  readonly ROLE_INPUT_ACTIVATION_CODE: unique symbol;

  /**
   * 玩家科技升级}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__tech_no`: `TechKey` - 科技编号,
   * @data `__curr_lv`: `Int32` - 当前科技等级
   */
  readonly ROLE_TECH_UPGRADE: unique symbol;

  /**
   * 玩家科技降级}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__tech_no`: `TechKey` - 科技编号,
   * @data `__curr_lv`: `Int32` - 当前科技等级
   */
  readonly ROLE_TECH_DOWNGRADE: unique symbol;

  /**
   * 玩家科技变化}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__tech_no`: `TechKey` - 科技编号,
   * @data `__tech_no`: `Int32` - 当前科技等级,
   * @data `__delta_lv`: `Int32` - 科技变化等级
   */
  readonly ROLE_TECH_CHANGED: unique symbol;

  /**
   * 单位研发科技}
   *
   * @data `__unit_id`: `UnitID` - 单位ID,
   * @data `__role_id`: `RoleID` - 单位所属玩家ID,
   * @data `__tech_no`: `TechKey` - 科技编号
   */
  readonly UNIT_UPGRADE_TECH: unique symbol;

  /**
   * 单位添加科技}
   *
   * @data `__unit_id`: `UnitID` - 单位ID,
   * @data `__role_id`: `RoleID` - 单位所属玩家ID,
   * @data `__tech_no`: `TechKey` - 科技编号
   */
  readonly UNIT_ADD_TECH: unique symbol;

  /**
   * 单位删除科技}
   *
   * @data `__unit_id`: `UnitID` - 单位ID,
   * @data `__role_id`: `RoleID` - 单位所属玩家ID,
   * @data `__tech_no`: `TechKey` - 科技编号
   */
  readonly UNIT_REMOVE_TECH: unique symbol;

  /**
   * 玩家敌对关系变化}
   *
   * @data `__src_role_id`: `RoleID` - 源玩家ID,
   * @data `__dst_role_id`: `RoleID` - 目标玩家ID,
   * @data `__relation`: `RoleRelation` - 关系
   */
  readonly ROLE_CHANGE_RELATION: unique symbol;

  /**
   * 建筑技能建造成功}
   *
   * @data `__ability`: `Ability` - 技能,
   * @data `__ability_type`: `AbilityType` - 技能类型,
   * @data `__ability_index`: `AbilityIndex` - 技能ID,
   * @data `__ability_seq`: `AbilitySeq` - 技能Seq,
   * @data `__unit_id`: `UnitID` - 主人,
   * @data `__build_unit_id`: `UnitID` - 建造出来的单位ID
   */
  readonly ABILITY_BUILD_FINISH: unique symbol;

  /**
   * 普通攻击命中}
   *
   * @data `__ability_id`: `UInt32` - 技能id
   */
  readonly ATTACK_HIT_TARGET: unique symbol;

  /**
   * 普通攻击造成伤害}
   *
   * @data `__ability_id`: `UInt32` - 技能id,
   * @data `__other_unit`: `Unit` - 被伤害的单位
   */
  readonly ATTACK_HURT: unique symbol;

  /**
   * 技能CD变化}
   *
   * @data `__ability_index`: `AbilityIndex` - 技能坑位,
   * @data `__left`: `Fixed` - cd剩余时间,
   * @data `__total`: `Fixed` - cd总时长,
   * @data `__ability_id`: `AbilityKey` - 技能id
   */
  readonly ABILITY_CD_CHANGE: unique symbol;

  /**
   * @data `__ability_index`: `AbilityIndex` - 技能坑位
   */
  readonly ACTIVE_ABILITY_CHANGED: unique symbol;

  /**
   * 技能充能层数变化}
   *
   * @data `__ability_index`: `AbilityIndex` - 技能坑位,
   * @data `__stack`: `Fixed` - 技能充能层数
   */
  readonly ABILITY_STACK_CHANGE: unique symbol;

  /**
   * 技能加点}
   *
   * @data `__ability_index`: `AbilityIndex` - 技能坑位
   */
  readonly ABILITY_PLUS_POINT: unique symbol;

  /**
   * 充能CD变化}
   *
   * @data `__ability_index`: `AbilityIndex` - 技能坑位,
   * @data `__left`: `Fixed` - 充能cd剩余时间,
   * @data `__total`: `Fixed` - 充能cd总时长
   */
  readonly ABILITY_STACK_CD_CHANGE: unique symbol;

  /**
   * @data `__ability_index`: `AbilityIndex` - 技能坑位,
   * @data `__is_forbidden`: `boolean` - 是否禁用
   */
  readonly ABILITY_FORBIDDEN_CHANGED: unique symbol;

  /**
   * @data `__is_silent`: `boolean` - 是否禁用
   */
  readonly ABILITY_SILENT_CHANGED: unique symbol;

  /** 单位的名称发生变化 */
  readonly UNIT_NAME_CHANGE: unique symbol;

  /**
   * 阵营内单位变化}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly ROLE_UNIT_CHANGE: unique symbol;

  /**
   * 单位开始移动}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly UNIT_START_MOVE: unique symbol;

  /**
   * 单位结束移动}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly UNIT_END_MOVE: unique symbol;

  /**
   * 单位删除（ECA专用）}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly UNIT_REMOVE: unique symbol;

  /**
   * 单位删除（对象真正销毁）}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly UNIT_DELETE: unique symbol;

  /**
   * 单位传送结束}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly T_END_TRANSLATE: unique symbol;

  /**
   * 单位属性变化}
   *
   * @data `__unit_id`: `UnitID` - 单位ID,
   * @data `__attr`: `string` - 字符串
   */
  readonly UNIT_ATTR_CHANGE: unique symbol;

  /**
   * 单位即将死亡}
   *
   * @data `__damage`: `Fixed` - 受到的伤害值,
   * @data `__source_unit`: `Unit` - 施加伤害的单位,
   * @data `__target_unit`: `Unit` - 承受伤害的单位,
   * @data `__ability`: `Ability` - 当前伤害所属技能,
   * @data `__damage_type`: `Int32` - 伤害类型,
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly BEFORE_UNIT_DIE: unique symbol;

  /**
   * 单位死亡}
   *
   * @data `__damage`: `Fixed` - 受到的伤害值,
   * @data `__source_unit`: `Unit` - 施加伤害的单位,
   * @data `__target_unit`: `Unit` - 承受伤害的单位,
   * @data `__ability`: `Ability` - 当前伤害所属技能,
   * @data `__damage_type`: `Int32` - 伤害类型,
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly UNIT_DIE: unique symbol;

  /**
   * 单位解绑玩家}
   *
   * @data `__unit_id`: `UnitID` - 单位ID,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly UNIT_ON_UNBIND_ROLE: unique symbol;

  /**
   * 单位绑定玩家}
   *
   * @data `__unit_id`: `UnitID` - 单位ID,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly UNIT_ON_BIND_ROLE: unique symbol;

  /**
   * 单位受到攻击}
   *
   * @data `__damage`: `Fixed` - 受到的伤害值,
   * @data `__source_unit`: `Unit` - 施加伤害的单位,
   * @data `__target_unit`: `Unit` - 承受伤害的单位,
   * @data `__ability`: `Ability` - 当前伤害所属技能,
   * @data `__damage_type`: `Int32` - 伤害类型,
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly UNIT_BE_HURT: unique symbol;

  /**
   * 单位击中其他单位}
   *
   * @data `__damage`: `Fixed` - 受到的伤害值,
   * @data `__source_unit`: `Unit` - 施加伤害的单位,
   * @data `__target_unit`: `Unit` - 承受伤害的单位,
   * @data `__ability`: `Ability` - 当前伤害所属技能,
   * @data `__damage_type`: `Int32` - 伤害类型,
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly UNIT_HURT_OTHER: unique symbol;

  /**
   * 修改玩家属性图标}
   *
   * @data `__res_key`: `RoleResKey` - 资源,
   * @data `__icon_id`: `Int32` - ICON ID
   */
  readonly RES_ICON_CHANGED: unique symbol;

  /**
   * 单位施放技能事件}
   *
   * @data `__ability`: `Ability` - 施放的技能对象,
   * @data `__unit_id`: `UnitID` - 触发事件的单位unit_id
   */
  readonly UNIT_RELEASE_ABILITY: unique symbol;

  /**
   * 单位施放技能开始事件}
   *
   * @data `__ability`: `Ability` - 施放的技能对象,
   * @data `__unit_id`: `UnitID` - 触发事件的单位unit_id
   */
  readonly UNIT_RELEASE_ABILITY_START: unique symbol;

  /**
   * 单位施放技能结束事件}
   *
   * @data `__ability`: `Ability` - 施放的技能对象,
   * @data `__unit_id`: `UnitID` - 触发事件的单位unit_id
   */
  readonly UNIT_RELEASE_ABILITY_END: unique symbol;

  /**
   * 单位施放技能事件}
   *
   * @data `__ability`: `Ability` - 施放的技能对象,
   * @data `__unit_id`: `UnitID` - 触发事件的单位unit_id
   */
  readonly UNIT_RELEASE_MAGIC_BOOK: unique symbol;

  /** 单位技能变化事件 */
  readonly UNIT_LEVEL_CHANGE: unique symbol;

  /** 单位经验变化事件 */
  readonly UNIT_EXP_CHANGE: unique symbol;

  /**
   * 单位即将获得经验}
   *
   * @data `__unit_id`: `UnitID` - 获得经验的单位,
   * @data `__add_exp`: `Float` - 增加的经验
   */
  readonly UNIT_PRE_ADD_EXP: unique symbol;

  /**
   * 单位获得经验}
   *
   * @data `__unit_id`: `UnitID` - 获得经验的单位,
   * @data `__add_exp`: `Float` - 增加的经验
   */
  readonly UNIT_ON_ADD_EXP: unique symbol;

  /**
   * 单位接收命令}
   *
   * @data `__unit_id`: `UnitID` - 单位,
   * @data `__cmd_type`: `UnitCommand` - 接收的命令,
   * @data `__target_unit`: `Unit` - 目标单位,
   * @data `__point`: `Point` - 目标点,
   * @data `__destructible_id`: `DestructibleID` - 目标可破坏物ID,
   * @data `__item_id`: `ItemID` - 目标物品ID
   */
  readonly UNIT_ON_COMMAND: unique symbol;

  /**
   * 单位击杀其他单位}
   *
   * @data `__damage`: `Fixed` - 伤害值,
   * @data `__source_unit`: `Unit` - 杀手单位,
   * @data `__target_unit`: `Unit` - 死亡单位,
   * @data `__ability`: `Ability` - 致命伤害所属技能,
   * @data `__damage_type`: `Int32` - 致命伤害类型,
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly KILL_UNIT: unique symbol;

  /**
   * 单位助攻事件}
   *
   * @data `__damage`: `Fixed` - 伤害值,
   * @data `__source_unit`: `Unit` - 杀手单位,
   * @data `__target_unit`: `Unit` - 死亡单位,
   * @data `__ability`: `Ability` - 致命伤害所属技能,
   * @data `__damage_type`: `Int32` - 致命伤害类型,
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly ASSIST: unique symbol;

  /**
   * 单位出生}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly UNIT_BORN: unique symbol;

  /**
   * 单位进入战斗状态}
   *
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly UNIT_ENTER_BATTLE: unique symbol;

  /**
   * 单位脱离战斗状态}
   *
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly UNIT_EXIT_BATTLE: unique symbol;

  /**
   * 单位创建仆从}
   *
   * @data `__unit_id`: `UnitID` - 仆从id
   */
  readonly UNIT_CREATE_SLAVE: unique symbol;

  /**
   * 物品附加属性变化}
   *
   * @data `__item_id`: `ItemID` - 物品ID,
   * @data `__attr_key`: `string` - 字符串,
   * @data `__delta`: `Fixed` - 定点数
   */
  readonly ITEM_ATTACHED_ATTR_CHANGED: unique symbol;

  /**
   * 商品购买}
   *
   * @data `__unit_id`: `UnitID` - 购买物品单位id,
   * @data `__shop_unit_id`: `UnitID` - 商店单位id,
   * @data `__tab_idx`: `Int32` - 商店分页,
   * @data `__cnt`: `UInt32` - 商品数量,
   * @data `__item_stuff_id`: `ItemID` - 商品物品id
   */
  readonly UNIT_SHOP_BUY_ITEM: unique symbol;

  /**
   * 商品购买}
   *
   * @data `__unit_id`: `UnitID` - 购买物品单位id,
   * @data `__shop_unit_id`: `UnitID` - 商店单位id,
   * @data `__tab_idx`: `Int32` - 商店分页,
   * @data `__cnt`: `UInt32` - 商品数量,
   * @data `__unit_stuff_id`: `UnitID` - 商品单位id
   */
  readonly UNIT_SHOP_BUY_UNIT: unique symbol;

  /**
   * 道具出售}
   *
   * @data `__unit_id`: `UnitID` - 购买物品单位id,
   * @data `__shop_unit_id`: `UnitID` - 商店单位id,
   * @data `__item_id`: `ItemID` - 道具id
   */
  readonly UNIT_ITEM_SELL: unique symbol;

  /**
   * 商店商品变化}
   *
   * @data `__shop_unit_id`: `UnitID` - 商店单位id,
   * @data `__tab_idx`: `Int32` - 商店分页,
   * @data `__shop_key`: `string` - 商品id,
   * @data `__curr_stock`: `Int32` - 当前库存
   */
  readonly SHOP_ITEM_CHANGED: unique symbol;

  /**
   * 商品库存变化}
   *
   * @data `__shop_unit_id`: `UnitID` - 商店单位id,
   * @data `__tab_idx`: `Int32` - 商店分页,
   * @data `__shop_key`: `string` - 商品id,
   * @data `__curr_stock`: `Int32` - 当前库存
   */
  readonly SHOP_STOCK_CHANGED: unique symbol;

  /**
   * 商品售价变化}
   *
   * @data `__shop_unit_id`: `UnitID` - 商店单位id,
   * @data `__tab_idx`: `Int32` - 商店分页,
   * @data `__shop_key`: `string` - 商品id,
   * @data `__res_type`: `RoleResKey` - 资源编号,
   * @data `__res_cost`: `Int32` - 当前售价
   */
  readonly SHOP_RES_COST_CHANGED: unique symbol;

  /**
   * 道具合成事件}
   *
   * @data `__unit_id`: `UnitID` - 单位id,
   * @data `__compose_id`: `ItemKey` - 道具编号
   */
  readonly UNIT_ITEM_COMPOSE: unique symbol;

  /**
   * 商品合成购买}
   *
   * @data `__unit_id`: `UnitID` - 购买物品单位id,
   * @data `__shop_unit_id`: `UnitID` - 商店单位id,
   * @data `__item_id`: `ItemID` - 物品编号
   */
  readonly UNIT_SHOP_BUY_WITH_COMPOSE: unique symbol;

  /**
   * 单位重生}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly REVIVE_UNIT: unique symbol;

  /**
   * 单位升级}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly UPGRADE_UNIT: unique symbol;

  /**
   * 单位运动目标达成}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly REACH_MOVE_TARGET_UNIT: unique symbol;

  /**
   * 单位碰撞到障碍}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly COLLIDE_OBSTACLE_UNIT: unique symbol;

  /**
   * 单位进入草丛}
   *
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly UNIT_ENTER_GRASS: unique symbol;

  /**
   * 单位离开草丛}
   *
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly UNIT_LEAVE_GRASS: unique symbol;

  /** 地图显隐因触发器发生变化 */
  readonly MAP_VISIBILITY_CHANGE: unique symbol;

  /**
   * 单位类型的前置条件满足要求}
   *
   * @data `unit_key`: `UnitKey` - 单位类型,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly UNIT_PRECONDITION_SUCCEED: unique symbol;

  /**
   * 单位类型的前置条件不满足要求}
   *
   * @data `unit_key`: `UnitKey` - 单位类型,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly UNIT_PRECONDITION_FAILED: unique symbol;

  /**
   * 物品类型的前置条件满足要求}
   *
   * @data `__item_no`: `ItemKey` - 物品类型,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly ITEM_PRECONDITION_SUCCEED: unique symbol;

  /**
   * 物品类型的前置条件不满足要求}
   *
   * @data `__item_no`: `ItemKey` - 物品类型,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly ITEM_PRECONDITION_FAILED: unique symbol;

  /**
   * 技能类型的前置条件满足要求}
   *
   * @data `__ability_id`: `AbilityKey` - 技能类型,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly ABILITY_PRECONDITION_SUCCEED: unique symbol;

  /**
   * 技能类型的前置条件不满足要求}
   *
   * @data `__ability_id`: `AbilityKey` - 技能类型,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly ABILITY_PRECONDITION_FAILED: unique symbol;

  /**
   * 科技类型的前置条件满足要求}
   *
   * @data `__tech_no`: `TechKey` - 科技类型,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly TECH_PRECONDITION_SUCCEED: unique symbol;

  /**
   * 科技类型的前置条件不满足要求}
   *
   * @data `__tech_no`: `TechKey` - 科技类型,
   * @data `__role_id`: `RoleID` - 玩家ID
   */
  readonly TECH_PRECONDITION_FAILED: unique symbol;

  /** 技能升级 */
  readonly ABILITY_UPGRADE: unique symbol;

  /**
   * 技能开始施法}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_CS_START: unique symbol;

  /**
   * 技能开始施法结束}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_CS_END: unique symbol;

  /**
   * 技能前摇开始}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_PS_START: unique symbol;

  /**
   * 技能前摇结束}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_PS_END: unique symbol;

  /**
   * 道具技能前摇结束}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ITEM_ABILITY_PS_END: unique symbol;

  /**
   * 技能准备结束}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_SP_END: unique symbol;

  /**
   * 技能持续施法结束}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_CST_END: unique symbol;

  /**
   * 技能后摇结束}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_BS_END: unique symbol;

  /**
   * 技能准备阶段被打断}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_CS_INTERRUPT: unique symbol;

  /**
   * 技能前摇阶段被打断}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_PS_INTERRUPT: unique symbol;

  /**
   * 技能准备阶段被打断}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_SP_INTERRUPT: unique symbol;

  /**
   * 技能持续施法阶段被打断}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_CST_INTERRUPT: unique symbol;

  /**
   * 技能后摇阶段被打断}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_BS_INTERRUPT: unique symbol;

  /**
   * 技能结束（无论何种方式）}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_END: unique symbol;

  /**
   * 获得技能}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_OBTAIN: unique symbol;

  /**
   * 失去技能}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_LOSE: unique symbol;

  /**
   * 交换技能}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_SWITCH: unique symbol;

  /**
   * 技能禁用}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_DISABLE: unique symbol;

  /**
   * 技能启用}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_ENABLE: unique symbol;

  /**
   * 技能属性变化}
   *
   * @data `__ability`: `Ability` - 技能对象
   */
  readonly ABILITY_ATTR_CHANGED: unique symbol;

  /** 技能冷却事件 */
  readonly ABILITY_CD_END: unique symbol;

  /**
   * 获得效果}
   *
   * @data `__modifier`: `Modifier` - 触发的魔法效果,
   * @data `__owner_unit`: `Unit` - 效果携带者,
   * @data `__from_unit_id`: `Unit` - 效果施加者
   */
  readonly OBTAIN_MODIFIER: unique symbol;

  /**
   * 失去效果}
   *
   * @data `__modifier`: `Modifier` - 触发的魔法效果,
   * @data `__owner_unit`: `Unit` - 效果携带者,
   * @data `__from_unit_id`: `Unit` - 效果施加者
   */
  readonly LOSS_MODIFIER: unique symbol;

  /**
   * 循环触发事件}
   *
   * @data `__modifier`: `Modifier` - 触发的魔法效果,
   * @data `__owner_unit`: `Unit` - 效果携带者,
   * @data `__from_unit_id`: `Unit` - 效果施加者
   */
  readonly MODIFIER_CYCLE_TRIGGER: unique symbol;

  /** BUFF更新事件 */
  readonly MODIFIER_UPDATE_TIMER: unique symbol;

  /**
   * 效果层数变化事件}
   *
   * @data `__modifier`: `Modifier` - 触发的魔法效果,
   * @data `__owner_unit`: `Unit` - 效果携带者,
   * @data `__layer_change_values`: `Int32` - 层数变化值,
   * @data `__from_unit_id`: `Unit` - 效果施加者
   */
  readonly MODIFIER_LAYER_CHANGE: unique symbol;

  /**
   * 魔法效果即将获得事件}
   *
   * @data `__modifier`: `Modifier` - 触发的魔法效果,
   * @data `__owner_unit`: `Unit` - 效果携带者,
   * @data `__from_unit_id`: `Unit` - 效果施加者
   */
  readonly MODIFIER_GET_BEFORE_CREATE: unique symbol;

  /**
   * 魔法效果被覆盖事件}
   *
   * @data `__owner_unit`: `Unit` - 效果携带者,
   * @data `__old_modifier`: `Modifier` - 已有的魔法效果,
   * @data `__new_modifier`: `Modifier` - 新增的魔法效果
   */
  readonly MODIFIER_BE_COVERED: unique symbol;

  /**
   * 魔法效果属性变化事件}
   *
   * @data `__modifier`: `Modifier` - 魔法效果
   */
  readonly MODIFIER_ATTR_CHANGE: unique symbol;

  /** 可破坏物资源个数发生变化 */
  readonly SOURCE_NUMS_CHANGE: unique symbol;

  /** 可破坏物的名称发生变化 */
  readonly NAME_CHANGE: unique symbol;

  /** 可破坏物资源名称发生变化 */
  readonly SOURCE_NAME_CHANGE: unique symbol;

  /**
   * 可破坏物死亡}
   *
   * @data `__destructible_id`: `DestructibleID` - 死亡的可破坏物,
   * @data `__unit_for_dest`: `Unit` - 凶手单位
   */
  readonly DEST_DIE: unique symbol;

  /**
   * 可破坏物被采集枯竭}
   *
   * @data `__destructible_id`: `DestructibleID` - 资源枯竭的可破坏物,
   * @data `__unit_for_dest`: `Unit` - 采集的单位
   */
  readonly DEST_SOURCE_DRY: unique symbol;

  /**
   * 可破坏物被攻击}
   *
   * @data `__destructible_id`: `DestructibleID` - 被攻击的可破坏物,
   * @data `__unit_for_dest`: `Unit` - 攻击的单位
   */
  readonly DEST_ATTACKED: unique symbol;

  /**
   * 可破坏物被采集}
   *
   * @data `__destructible_id`: `DestructibleID` - 被采集的可破坏物,
   * @data `__unit_for_dest`: `Unit` - 采集的单位
   */
  readonly DEST_COLLECTED: unique symbol;

  /**
   * 区域内的可破坏物死亡}
   *
   * @data `__area`: `Area` - 可破坏物死亡的区域,
   * @data `__destructible_id`: `DestructibleID` - 死亡的可破坏物,
   * @data `__unit_for_dest`: `Unit` - 杀手单位
   */
  readonly DEST_AREA_DIE: unique symbol;

  /**
   * 区域内的可破坏物被采集枯竭}
   *
   * @data `__area`: `Area` - 可破坏物被采集枯竭的区域,
   * @data `__destructible_id`: `DestructibleID` - 资源枯竭的可破坏物,
   * @data `__unit_for_dest`: `Unit` - 采集单位
   */
  readonly DEST_AREA_DRY: unique symbol;

  /**
   * 区域内的可破坏物被攻击}
   *
   * @data `__area`: `Area` - 可破坏物被攻击的区域,
   * @data `__destructible_id`: `DestructibleID` - 被攻击的可破坏物,
   * @data `__unit_for_dest`: `Unit` - 攻击单位
   */
  readonly DEST_AREA_ATTACKED: unique symbol;

  /**
   * 区域内的可破坏物被采集}
   *
   * @data `__area`: `Area` - 可破坏物被采集的区域,
   * @data `__destructible_id`: `DestructibleID` - 被采集的可破坏物,
   * @data `__unit_for_dest`: `Unit` - 采集单位
   */
  readonly DEST_AREA_COLLECTED: unique symbol;

  /** 投射物产生 */
  readonly PRODUCE_PROJECTILE: unique symbol;

  /** 投射物死亡 */
  readonly DEATH_PROJECTILE: unique symbol;

  /** 投射物运动开始 */
  readonly START_MOVE_PROJECTILE: unique symbol;

  /** 投射物运动目标达成 */
  readonly REACH_MOVE_TARGET_PROJECTILE: unique symbol;

  /**
   * 投射物碰撞到障碍}
   *
   * @data `__unit_id`: `UnitID` - 单位ID
   */
  readonly COLLIDE_OBSTACLE_PROJECTILE: unique symbol;

  /** 给单位创建投射物 */
  readonly UNIT_PRODUCE_PROJECTILE: unique symbol;

  /**
   * ui编辑器事件}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__ui_event_name`: `string` - ui事件变量名,
   * @data `__comp_name`: `string` - 触发事件控件名称,
   * @data `__pos`: `Vector2` - 触碰坐标,
   * @data `__touch_id`: `Int32` - 触碰ID
   */
  readonly TRIGGER_COMPONENT_EVENT: unique symbol;

  /**
   * 全局触发器发送ui事件}
   *
   * @data `__event_name`: `string` - ui事件名,
   * @data `__args`: `Dict` - 参数
   */
  readonly GLOBAL_EVENT_TO_UI_WITH_DICT: unique symbol;

  /**
   * 键盘按键按下}
   *
   * @data `__role_id`: `RoleID` - 触发按键的玩家ID,
   * @data `__current_key`: `KeyboardKey` - 当前键盘按键
   */
  readonly KEYBOARD_KEY_DOWN_EVENT: unique symbol;

  /**
   * 键盘按键抬起}
   *
   * @data `__role_id`: `RoleID` - 触发按键的玩家ID,
   * @data `__current_key`: `KeyboardKey` - 当前键盘按键
   */
  readonly KEYBOARD_KEY_UP_EVENT: unique symbol;

  /**
   * 鼠标按键按下}
   *
   * @data `__role_id`: `RoleID` - 触发按键的玩家ID,
   * @data `__current_key`: `MouseKey` - 当前鼠标按键,
   * @data `__pointing_world_pos`: `Point` - 鼠标指向的世界坐标
   */
  readonly MOUSE_KEY_DOWN_EVENT: unique symbol;

  /**
   * 鼠标按键抬起}
   *
   * @data `__role_id`: `RoleID` - 触发按键的玩家ID,
   * @data `__current_key`: `MouseKey` - 当前鼠标按键,
   * @data `__pointing_world_pos`: `Point` - 鼠标指向的世界坐标
   */
  readonly MOUSE_KEY_UP_EVENT: unique symbol;

  /**
   * 鼠标按键双击}
   *
   * @data `__role_id`: `RoleID` - 触发按键的玩家ID,
   * @data `__current_key`: `MouseKey` - 当前鼠标按键,
   * @data `__pointing_world_pos`: `Point` - 鼠标指向的世界坐标
   */
  readonly SE_KEY_DB_CLICK_EVENT: unique symbol;

  /**
   * 鼠标按键按下单位}
   *
   * @data `__role_id`: `RoleID` - 触发按键的玩家ID,
   * @data `__current_key`: `MouseKey` - 当前鼠标按键,
   * @data `__unit_id`: `UnitID` - 当前操作的单位ID
   */
  readonly SE_KEY_DOWN_UNIT_EVENT: unique symbol;

  /**
   * 鼠标按键抬起单位}
   *
   * @data `__role_id`: `RoleID` - 触发按键的玩家ID,
   * @data `__current_key`: `MouseKey` - 当前鼠标按键,
   * @data `__unit_id`: `UnitID` - 当前操作的单位ID
   */
  readonly SE_KEY_UP_UNIT_EVENT: unique symbol;

  /**
   * 鼠标按键双击单位}
   *
   * @data `__role_id`: `RoleID` - 触发按键的玩家ID,
   * @data `__current_key`: `MouseKey` - 当前鼠标按键,
   * @data `__unit_id`: `UnitID` - 当前操作的单位ID
   */
  readonly SE_KEY_DB_CLICK_UNIT_EVENT: unique symbol;

  /**
   * 鼠标移动事件}
   *
   * @data `__role_id`: `RoleID` - 触发按键的玩家ID,
   * @data `__pointing_world_pos`: `Point` - 鼠标指向的世界坐标,
   * @data `__tar_x`: `Int32` - 鼠标指向的屏幕坐标X,
   * @data `__tar_y`: `Int32` - 鼠标指向的屏幕坐标Y
   */
  readonly SE_MOVE_EVENT: unique symbol;

  /**
   * 单位触发器向全局触发器发送事件}
   *
   * @data `__event_name`: `string` - 事件名,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - 整数1,
   * @data `__float1`: `Fixed` - 实数1,
   * @data `__bool1`: `boolean` - 布尔1,
   * @data `__str1`: `string` - 字符串1,
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly UNIT_EVENT_TO_GLOBAL: unique symbol;

  /**
   * 技能触发器向全局触发器发送事件}
   *
   * @data `__event_name`: `string` - 事件名,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - 整数1,
   * @data `__float1`: `Fixed` - 实数1,
   * @data `__bool1`: `boolean` - 布尔1,
   * @data `__str1`: `string` - 字符串1,
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly ABILITY_EVENT_TO_GLOBAL: unique symbol;

  /**
   * 效果触发器向全局触发器发送事件}
   *
   * @data `__event_name`: `string` - 事件名,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - 整数1,
   * @data `__float1`: `Fixed` - 实数1,
   * @data `__bool1`: `boolean` - 布尔1,
   * @data `__str1`: `string` - 字符串1,
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly MODIFIER_EVENT_TO_GLOBAL: unique symbol;

  /**
   * 投射物触发器向全局触发器发送事件}
   *
   * @data `__event_name`: `string` - 事件名,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - 整数1,
   * @data `__float1`: `Fixed` - 实数1,
   * @data `__bool1`: `boolean` - 布尔1,
   * @data `__str1`: `string` - 字符串1,
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly PROJECTILE_EVENT_TO_GLOBAL: unique symbol;

  /**
   * 物品触发器向全局触发器发送事件}
   *
   * @data `__event_name`: `string` - 事件名,
   * @data `__point`: `Point` - 点,
   * @data `__int1`: `Int32` - 整数1,
   * @data `__float1`: `Fixed` - 实数1,
   * @data `__bool1`: `boolean` - 布尔1,
   * @data `__str1`: `string` - 字符串1,
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly ITEM_EVENT_TO_GLOBAL: unique symbol;

  /**
   * 玩家选中单位}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__unit_id`: `UnitID` - 点击到单位id
   */
  readonly SELECT_UNIT: unique symbol;

  /**
   * 玩家控制的高亮单位}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__high_light_unit_id`: `HighLightUnitID` - 高亮单位id
   */
  readonly HIGH_LIGHT_UNIT_CHANGE: unique symbol;

  /**
   * 玩家选中物品}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__item_id`: `ItemID` - 点击到物品id
   */
  readonly SELECT_ITEM: unique symbol;

  /**
   * 玩家双击选中物品}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__item_id`: `ItemID` - 双击到物品id
   */
  readonly DOUBLE_CLICK_ITEM: unique symbol;

  /**
   * 玩家选中可破坏物}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__destructible_id`: `DestructibleID` - 点击到可破坏物id
   */
  readonly SELECT_DEST: unique symbol;

  /**
   * 打开商店界面}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__unit_id`: `UnitID` - 商店单位ID
   */
  readonly OPEN_SHOP_PANEL: unique symbol;

  /**
   * 玩家双击选中可破坏物}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__destructible_id`: `DestructibleID` - 双击到可破坏物id
   */
  readonly DOUBLE_CLICK_DEST: unique symbol;

  /**
   * 玩家选中单位组}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__unit_group_id_list`: `UnitGroup` - 框选到单位组id列表,
   * @data `__team_id`: `Int32` - 队伍编号
   */
  readonly SELECT_UNIT_GROUP: unique symbol;

  /**
   * 打开技能指示器}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__unit_id`: `UnitID` - 释放单位id,
   * @data `__ability_type`: `AbilityType` - 技能类型,
   * @data `__ability_index`: `AbilityIndex` - 技能Index,
   * @data `__ability_seq`: `AbilitySeq` - 技能Seq
   */
  readonly START_SKILL_POINTER: unique symbol;

  /**
   * 关闭技能指示器}
   *
   * @data `__role_id`: `RoleID` - 玩家ID,
   * @data `__unit_id`: `UnitID` - 释放单位id,
   * @data `__ability_type`: `AbilityType` - 技能类型,
   * @data `__ability_index`: `AbilityIndex` - 技能Index,
   * @data `__ability_seq`: `AbilitySeq` - 技能Seq
   */
  readonly STOP_SKILL_POINTER: unique symbol;

  /**
   * 触碰（鼠标）开始事件}
   *
   * @data `__touch_id`: `Int32` - 触碰(鼠标)id,
   * @data `__pos`: `Vector2` - 触碰(鼠标)坐标
   */
  readonly TOUCH_BEGIN: unique symbol;

  /**
   * 触碰（鼠标）移动事件}
   *
   * @data `__touch_id`: `Int32` - 触碰(鼠标)id,
   * @data `__pos`: `Vector2` - 触碰(鼠标)坐标
   */
  readonly TOUCH_MOVE: unique symbol;

  /**
   * 触碰（鼠标）结束事件}
   *
   * @data `__touch_id`: `Int32` - 触碰(鼠标)id,
   * @data `__pos`: `Vector2` - 触碰(鼠标)坐标
   */
  readonly TOUCH_END: unique symbol;

  /** 最底层的触摸结束事件 */
  readonly TOP_TOUCH_END: unique symbol;

  /** 排位变更事件 */
  readonly K_LIST_INFO_CHANGE: unique symbol;

  /**
   * 单位获得物品}
   *
   * @data `__unit_id`: `UnitID` - 获得该物品的单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号
   */
  readonly UNIT_ADD_ITEM: unique symbol;

  /**
   * 单位添加物品用于物品合成事件的判断}
   *
   * @data `__unit_id`: `UnitID` - 获得该物品的单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号
   */
  readonly UNIT_ADD_ITEM_FOR_COMPOSE: unique symbol;

  /**
   * 单位获得物品到物品栏}
   *
   * @data `__unit_id`: `UnitID` - 获得该物品的单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号
   */
  readonly UNIT_ADD_ITEM_TO_BAR: unique symbol;

  /**
   * 单位获得物品到背包栏}
   *
   * @data `__unit_id`: `UnitID` - 获得该物品的单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号
   */
  readonly UNIT_ADD_ITEM_TO_PKG: unique symbol;

  /**
   * 单位失去物品}
   *
   * @data `__unit_id`: `UnitID` - 失去该物品的单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号
   */
  readonly UNIT_REMOVE_ITEM: unique symbol;

  /**
   * 单位物品从物品栏离开}
   *
   * @data `__unit_id`: `UnitID` - 失去该物品的单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号
   */
  readonly UNIT_REMOVE_ITEM_FROM_BAR: unique symbol;

  /**
   * 单位物品从背包栏离开}
   *
   * @data `__unit_id`: `UnitID` - 失去该物品的单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号
   */
  readonly UNIT_REMOVE_ITEM_FROM_PKG: unique symbol;

  /**
   * 单位使用物品}
   *
   * @data `__unit_id`: `UnitID` - 使用该物品的单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号
   */
  readonly UNIT_USE_ITEM: unique symbol;

  /**
   * 单位使用物品后}
   *
   * @data `__item_no`: `ItemKey` - 物品编号
   */
  readonly UNIT_USE_ITEM_END: unique symbol;

  /**
   * 单位开始寻路时}
   *
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly UNIT_START_NAV_EVENT: unique symbol;

  /**
   * 单位结束寻路时}
   *
   * @data `__unit_id`: `UnitID` - 单位id
   */
  readonly UNIT_END_NAV_EVENT: unique symbol;

  /** 背包刷新 */
  readonly UNIT_BAG_REFRESH: unique symbol;

  /**
   * 物品层数变化}
   *
   * @data `__unit_id`: `ItemID` - 单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号,
   * @data `__delta_cnt`: `Int32` - 变化值
   */
  readonly ITEM_STACK_CHANGED: unique symbol;

  /**
   * 物品充能变化}
   *
   * @data `__unit_id`: `ItemID` - 单位id,
   * @data `__item_id`: `ItemID` - 物品id,
   * @data `__item_no`: `ItemKey` - 物品编号,
   * @data `__delta_cnt`: `Int32` - 变化值
   */
  readonly ITEM_CHARGE_CHANGED: unique symbol;

  /**
   * 物品创建}
   *
   * @data `__item`: `Item` - 被创建的物品
   */
  readonly ITEM_ON_CREATE: unique symbol;

  /**
   * 物品实体销毁}
   *
   * @data `__item_unit_id`: `ItemID` - 物品实体id,
   * @data `__item_id`: `ItemID` - 物品id
   */
  readonly ITEM_ENTITY_ON_DESTROY: unique symbol;

  /**
   * 出售物品}
   *
   * @data `__unit`: `Unit` - 购买者,
   * @data `__unit2`: `Unit` - 贩卖者,
   * @data `__item`: `Item` - 被售出的物品
   */
  readonly ITEM_SOLD: unique symbol;

  /**
   * 破坏物品}
   *
   * @data `__item`: `Item` - 被破坏的物品,
   * @data `__unit`: `Unit` - 破坏物品的单位
   */
  readonly ITEM_BROKEN: unique symbol;

  /**
   * 物品名称改变}
   *
   * @data `__item`: `Item` - 改变名称的物体,
   * @data `__name`: `string` - 改变后的名称
   */
  readonly ITEM_NAME_CHANGED: unique symbol;

  /**
   * 破坏物品}
   *
   * @data `__item`: `Item` - 改变描述的物体,
   * @data `__name`: `string` - 改变后的描述
   */
  readonly ITEM_DESC_CHANGED: unique symbol;

  /**
   * 左键A地板}
   *
   * @data `__unit`: `Unit` - 指定单位,
   * @data `__tar_x`: `Fixed` - 点击位置X坐标,
   * @data `__tar_y`: `Fixed` - 点击位置Y坐标
   */
  readonly ATTACK_MOVE_CMD: unique symbol;

  /**
   * 出售物品}
   *
   * @data `__shop_unit_id`: `UnitID` - 商店单位ID,
   * @data `__item_id`: `ItemID` - 商品
   */
  readonly SELL_ITEM_CMD: unique symbol;

  /**
   * 释放技能}
   *
   * @data `__unit`: `Unit` - 指定单位,
   * @data `__ability_type`: `AbilityType` - 技能类型,
   * @data `__ability_index`: `AbilityIndex` - 技能Index,
   * @data `__ability_seq`: `AbilitySeq` - 技能SEQ,
   * @data `__target_item`: `Dict` - 释放技能参数
   */
  readonly AI_RELEASE_SKILL_CMD: unique symbol;

  /**
   * 巡逻}
   *
   * @data `__unit`: `Unit` - 指定单位,
   * @data `__tar_x`: `Fixed` - 点击位置X坐标,
   * @data `__tar_y`: `Fixed` - 点击位置Y坐标
   */
  readonly PATROL_CMD: unique symbol;

  /**
   * 寻路到位置}
   *
   * @data `__unit`: `Unit` - 指定单位,
   * @data `__tar_x`: `Fixed` - 点击位置X坐标,
   * @data `__tar_y`: `Fixed` - 点击位置Y坐标
   */
  readonly MOVE_UNIT_TO_TARGET_CMD: unique symbol;

  /** 追帧结束事件 */
  readonly CATCH_FRAME_FINISHED: unique symbol;

  /**
   * 运动器结束}
   *
   * @data `__mover_unit_id`: `UnitID` - 运动器所属单位ID
   */
  readonly MOVER_FINISH: unique symbol;

  /**
   * 运动器打断}
   *
   * @data `__mover_unit_id`: `UnitID` - 运动器所属单位ID
   */
  readonly MOVER_INTERRUPT: unique symbol;

  /**
   * 运动器移除}
   *
   * @data `__mover_unit_id`: `UnitID` - 运动器所属单位ID
   */
  readonly MOVER_REMOVED: unique symbol;

  /**
   * 运动器单位碰撞}
   *
   * @data `__mover_unit_id`: `UnitID` - 运动器所属单位ID,
   * @data `__collide_unit_id`: `UnitID` - 碰撞单位ID
   */
  readonly MOVER_UNIT_COLLISION: unique symbol;

  /**
   * 运动器单位碰撞}
   *
   * @data `__mover_unit_id`: `UnitID` - 运动器所属单位ID,
   * @data `__collide_unit_id`: `UnitID` - 碰撞单位ID
   */
  readonly MOVER_UNIT_COLLISION_ENTER: unique symbol;

  /**
   * 运动器单位碰撞结束}
   *
   * @data `__mover_unit_id`: `UnitID` - 运动器所属单位ID,
   * @data `__collide_unit_id`: `UnitID` - 碰撞单位ID
   */
  readonly MOVER_UNIT_COLLISION_LEAVE: unique symbol;

  /**
   * 运动器地形碰撞}
   *
   * @data `__mover_unit_id`: `UnitID` - 运动器所属单位ID
   */
  readonly MOVER_TERRAIN_COLLISION: unique symbol;

  /**
   * 聊天中发送指令}
   *
   * @data `__str1`: `string` - 指令字符串,
   * @data `__role_id`: `RoleID` - 玩家id
   */
  readonly CHAT_SEND_GM: unique symbol;

  /**
   * 触发器自定义事件}
   *
   * @data `__c_param_1`: `Int32` - 自定义参数1,
   * @data `__c_param_2`: `Int32` - 自定义参数2,
   * @data `__c_param_3`: `Int32` - 自定义参数3,
   * @data `__c_param_4`: `Int32` - 自定义参数4,
   * @data `__c_param_5`: `Int32` - 自定义参数5
   */
  readonly CUSTOM_EVENT: unique symbol;
};
