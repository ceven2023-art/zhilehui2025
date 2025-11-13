const quizData = {
categories: [
{
id: 'music',
display: '🎵 音乐相关',
repeatable: true,
questions: [
{
question: '🎵 音乐题：请主理人播放音乐',
options: [],
correctAnswer: -1,
explanation: '主理人播放音乐即可，完成后点击"继续随机"进入下一轮。'
}
]
},
{
id: 'life',
display: '💡 生活常识',
questions: [
{
question: '我们常说"不锈钢"，但它真的不会生锈吗？',
options: [
'A. 绝对不会生锈',
'B. 会生锈，但其耐腐蚀性比普通钢材强得多',
'C. 只有在接触盐水时才会生锈',
'D. 是否生锈取决于价格，高价的不锈钢不会锈'
],
correctAnswer: 1,
explanation: '"不锈钢"的"不锈"是相对的，它表面有氧化铬薄膜，耐腐蚀性强，但在潮湿、含盐等环境中薄膜被破坏后依然会生锈。'
},
{
question: '为什么切洋葱时会流泪？',
options: [
'A. 洋葱含有刺激性气体',
'B. 洋葱汁液溅入眼睛',
'C. 洋葱释放的化学物质与眼泪反应',
'D. 心理作用'
],
correctAnswer: 0,
explanation: '切洋葱时，细胞破裂释放出含硫化合物，这些化合物与空气中的水分反应生成亚硫酸，刺激眼睛产生眼泪。'
},
{
question: '衣物标签上常提示"深浅色分开洗"，主要是为了避免什么情况？',
options: [
'A. 洗衣机受损',
'B. 深色衣物染色到浅色衣物',
'C. 增加柔顺剂效果',
'D. 方便晾晒'
],
correctAnswer: 1,
explanation: '深色衣物中的染料在水中易析出，混洗会让浅色衣物被染色，因此建议深浅分开清洗。'
},
{
question: '电热水壶长期使用后出现的白色水垢主要来源是什么？',
options: [
'A. 壶壁涂层老化脱落',
'B. 水中溶解的钙、镁离子沉积',
'C. 空气中的灰尘附着',
'D. 加热管释放金属粉末'
],
correctAnswer: 1,
explanation: '自来水中含有的钙、镁离子在加热过程中会析出碳酸盐沉淀，形成附着在壶壁上的水垢。'
},
{
question: '预包装食品的配料表通常按照什么规则排列？',
options: [
'A. 按汉字拼音顺序',
'B. 按配料添加量由多到少',
'C. 按营养价值高低',
'D. 按生产日期先后'
],
correctAnswer: 1,
explanation: '国家标准规定，配料表需按各配料在产品中的添加量由高到低排列，便于消费者判断主要成分。'
},
{
question: '为什么冰箱门能自动关闭？',
options: [
'A. 内置弹簧装置',
'B. 磁条吸附作用',
'C. 重力平衡设计',
'D. 电动马达驱动'
],
correctAnswer: 1,
explanation: '冰箱门边缘装有磁条，关门时与箱体金属面产生磁力吸附，实现自动关闭。'
},
{
question: '微波炉加热食物主要利用什么原理？',
options: [
'A. 红外辐射',
'B. 水分子共振',
'C. 热空气对流',
'D. 电磁感应'
],
correctAnswer: 1,
explanation: '微波炉通过产生微波使食物中的水分子高速振动摩擦生热。'
},
{
question: '为什么雷雨天气要拔掉电器插头？',
options: [
'A. 节省用电',
'B. 防止雷击损坏',
'C. 避免信号干扰',
'D. 延长电器寿命'
],
correctAnswer: 1,
explanation: '雷电可能通过电源线引入高压电流，损坏电器设备。'
},
{
question: '食用油出现"哈喇味"说明什么？',
options: [
'A. 油品质量很好',
'B. 油脂已经氧化变质',
'C. 这是正常现象',
'D. 需要加热后使用'
],
correctAnswer: 1,
explanation: '哈喇味是油脂氧化酸败产生的气味，说明油已变质不宜食用。'
},
{
question: '为什么不能用湿手触摸电器开关？',
options: [
'A. 会留下指纹',
'B. 容易触电危险',
'C. 影响开关灵敏度',
'D. 导致开关生锈'
],
correctAnswer: 1,
explanation: '水能导电，湿手接触开关可能形成电流通路，造成触电事故。'
},
{
question: '新鲜鸡蛋放入水中会怎样？',
options: [
'A. 浮在水面',
'B. 沉入水底',
'C. 悬浮在水中',
'D. 立即破裂'
],
correctAnswer: 1,
explanation: '新鲜鸡蛋密度大于水，会沉入水底；不新鲜的鸡蛋气室变大，会浮起来。'
},
{
question: '为什么煮饺子时要加三次冷水？',
options: [
'A. 让饺子皮更筋道',
'B. 控制沸腾防止破皮',
'C. 降低水温节约能源',
'D. 传统习惯无实际作用'
],
correctAnswer: 1,
explanation: '加冷水可以控制水温，避免持续沸腾导致饺子皮破裂，同时让馅料充分熟透。'
},
{
question: '冰箱冷藏室的温度一般设定在多少度最合适？',
options: [
'A. 0-2℃',
'B. 3-5℃',
'C. 6-8℃',
'D. 9-11℃'
],
correctAnswer: 1,
explanation: '冷藏室温度设定在3-5℃既能保鲜食物，又不会过度耗电。'
},
{
question: '为什么不能用金属容器放入微波炉加热？',
options: [
'A. 金属会吸收微波',
'B. 金属会产生电弧火花',
'C. 金属会释放有害物质',
'D. 金属会影响微波炉寿命'
],
correctAnswer: 1,
explanation: '金属在微波炉中会产生电弧放电，可能损坏微波炉甚至引发火灾。'
},
{
question: '洗衣服时洗衣粉放得越多效果越好吗？',
options: [
'A. 是的，清洁力更强',
'B. 不是，适量即可',
'C. 取决于水温',
'D. 取决于衣物材质'
],
correctAnswer: 1,
explanation: '过量洗衣粉难以彻底漂洗干净，残留在衣物上可能刺激皮肤。'
},
{
question: '为什么新买的牛仔裤要先洗再穿？',
options: [
'A. 去除残留化学物质',
'B. 让颜色更牢固',
'C. 使布料更柔软',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '新牛仔裤含有染料固色剂等化学物质，洗涤可以去除这些物质，让穿着更舒适安全。'
},
{
question: '哪种材质的砧板更卫生？',
options: [
'A. 木质砧板',
'B. 塑料砧板',
'C. 玻璃砧板',
'D. 各有优缺点'
],
correctAnswer: 3,
explanation: '木质砧板天然抗菌但易滋生细菌，塑料砧板易清洁但会有划痕，需根据使用情况选择。'
},
{
question: '为什么煮米饭前要浸泡？',
options: [
'A. 让米饭更香',
'B. 缩短烹饪时间',
'C. 增加米饭营养',
'D. 传统习惯无实际作用'
],
correctAnswer: 1,
explanation: '浸泡可以让米粒充分吸水，缩短煮饭时间，使米饭口感更好。'
},
{
question: '冰箱里的食物应该怎样摆放？',
options: [
'A. 随意摆放',
'B. 按购买时间',
'C. 按温度区域',
'D. 按食物种类'
],
correctAnswer: 2,
explanation: '冰箱不同区域温度不同，上层较冷适合放熟食，下层适合放蔬菜水果。'
},
{
question: '为什么不能用热水解冻冷冻肉？',
options: [
'A. 会使肉质变老',
'B. 会滋生细菌',
'C. 会破坏营养',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '热水解冻会使肉表面迅速升温滋生细菌，同时影响口感和营养。'
},
{
question: '哪种清洁方式对去除油污最有效？',
options: [
'A. 冷水加洗洁精',
'B. 热水加洗洁精',
'C. 只用热水',
'D. 只用冷水'
],
correctAnswer: 1,
explanation: '热水能更好地溶解油脂，配合洗洁精可有效去除油污。'
},
{
question: '为什么炒菜时要热锅冷油？',
options: [
'A. 防止油烟',
'B. 防止油温过高',
'C. 保持油品营养',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '热锅冷油可以减少油烟产生，防止油温过高破坏营养，使菜肴更健康。'
},
{
question: '洗衣机用完后应该怎样处理？',
options: [
'A. 立即关闭舱门',
'B. 敞开舱门通风',
'C. 用布擦干内部',
'D. 喷洒消毒液'
],
correctAnswer: 1,
explanation: '敞开舱门可以让内部水分蒸发，防止霉菌滋生，保持洗衣机清洁。'
},
{
question: '为什么不能用钢丝球刷不粘锅？',
options: [
'A. 会刮伤涂层',
'B. 会产生金属碎屑',
'C. 影响锅具寿命',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '钢丝球会破坏不粘锅的特氟龙涂层，影响使用效果和安全性。'
},
{
question: '哪种保存方式能让蔬菜保鲜更久？',
options: [
'A. 直接放入冰箱',
'B. 用保鲜膜包裹',
'C. 放入密封袋',
'D. 以上都可以'
],
correctAnswer: 3,
explanation: '不同的蔬菜适合不同的保存方式，但密封包装通常能延长保鲜时间。'
},
{
question: '为什么煮面条时要加盐？',
options: [
'A. 让面条更筋道',
'B. 防止面条粘连',
'C. 增加面条风味',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '加盐可以增强面条的筋道口感，防止粘连，同时提升风味。'
},
{
question: '空调温度设定在多少度最节能？',
options: [
'A. 20℃',
'B. 24℃',
'C. 28℃',
'D. 32℃'
],
correctAnswer: 1,
explanation: '夏季空调设定在24-26℃，冬季设定在18-20℃最为节能舒适。'
},
{
question: '为什么不能用塑料瓶装热水？',
options: [
'A. 塑料会释放有害物质',
'B. 塑料瓶会变形',
'C. 影响水质口感',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '高温会使塑料中的化学物质溶出，可能对人体健康造成影响。'
},
{
question: '哪种晾晒方式对衣物保护最好？',
options: [
'A. 阳光下暴晒',
'B. 阴凉处风干',
'C. 室内烘干',
'D. 取决于衣物材质'
],
correctAnswer: 3,
explanation: '不同材质的衣物适合不同的晾晒方式，棉麻可晒太阳，丝绸羊毛宜阴干。'
},
{
question: '为什么煮鸡蛋时要在水中加盐？',
options: [
'A. 让鸡蛋更易剥壳',
'B. 防止鸡蛋破裂',
'C. 增加鸡蛋风味',
'D. 以上都是'
],
correctAnswer: 1,
explanation: '加盐可以提高水的沸点，同时如果鸡蛋破裂，盐能使蛋白快速凝固防止流出。'
},
{
question: '哪种材质的餐具最安全？',
options: [
'A. 塑料餐具',
'B. 不锈钢餐具',
'C. 陶瓷餐具',
'D. 各有优缺点需正确使用'
],
correctAnswer: 3,
explanation: '不同材质的餐具各有特点，关键是正确使用和保养，避免高温、酸性物质等。'
},
{
question: '为什么炒青菜时要大火快炒？',
options: [
'A. 保持青菜翠绿',
'B. 减少营养流失',
'C. 保持爽脆口感',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '大火快炒可以缩短烹饪时间，保持青菜的色泽、营养和口感。'
},
{
question: '冰箱除霜的最佳方法是什么？',
options: [
'A. 用刀刮除',
'B. 用热水浇淋',
'C. 自然融化',
'D. 用吹风机加热'
],
correctAnswer: 2,
explanation: '自然融化最为安全，不会损坏冰箱内部结构，虽然时间较长但效果最好。'
},
{
question: '为什么煮粥时会溢锅？',
options: [
'A. 水量过多',
'B. 淀粉糊化产生泡沫',
'C. 锅盖太紧',
'D. 火力太大'
],
correctAnswer: 1,
explanation: '米中的淀粉在加热过程中糊化，产生大量泡沫导致溢锅。'
},
{
question: '哪种清洁剂对去除水垢最有效？',
options: [
'A. 洗洁精',
'B. 白醋',
'C. 小苏打',
'D. 酒精'
],
correctAnswer: 1,
explanation: '白醋中的醋酸能与水垢中的碳酸钙、碳酸镁反应生成可溶性盐。'
},
{
question: '为什么新买的毛巾要先洗再用？',
options: [
'A. 去除化学残留',
'B. 让毛巾更柔软',
'C. 增强吸水性能',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '新毛巾含有染料固色剂等化学物质，洗涤可以去除这些物质，改善使用感受。'
},
{
question: '空调滤网应该多久清洗一次？',
options: [
'A. 每月一次',
'B. 每季度一次',
'C. 每半年一次',
'D. 每年一次'
],
correctAnswer: 1,
explanation: '建议每1-3个月清洗一次空调滤网，保持空气清洁，提高制冷效率。'
},
{
question: '为什么煮豆浆要彻底煮沸？',
options: [
'A. 去除豆腥味',
'B. 破坏有害物质',
'C. 增加豆浆香味',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '未煮熟的豆浆含有皂苷等有害物质，彻底煮沸才能确保安全饮用。'
},
{
question: '哪种保存方式能让大米防虫？',
options: [
'A. 放入冰箱冷藏',
'B. 放入密封容器',
'C. 放入花椒或大蒜',
'D. 以上都可以'
],
correctAnswer: 3,
explanation: '低温、密封、放入天然驱虫剂都能有效防止大米生虫。'
},
{
question: '为什么不能用湿布擦电器？',
options: [
'A. 会留下水渍',
'B. 可能造成短路',
'C. 影响电器外观',
'D. 缩短电器寿命'
],
correctAnswer: 1,
explanation: '湿布擦拭电器可能导致水分进入内部，引起短路或触电危险。'
},
{
question: '煮饭时米和水的比例通常是多少？',
options: [
'A. 1:1',
'B. 1:1.2',
'C. 1:1.5',
'D. 1:2'
],
correctAnswer: 1,
explanation: '一般情况下，米和水的比例为1:1.2，但可根据个人口感喜好适当调整。'
},
{
question: '为什么炒菜时油烟机要提前开启？',
options: [
'A. 预热机器',
'B. 形成负压区',
'C. 测试功能',
'D. 传统习惯'
],
correctAnswer: 1,
explanation: '提前开启油烟机可以在烹饪区域形成负压，更好地吸收油烟。'
},
{
question: '哪种材质的杯子最适合装热水？',
options: [
'A. 塑料杯',
'B. 不锈钢杯',
'C. 玻璃杯',
'D. 陶瓷杯'
],
correctAnswer: 2,
explanation: '玻璃杯化学性质稳定，不会释放有害物质，是最安全的选择。'
},
{
question: '为什么煮饺子要点水？',
options: [
'A. 防止饺子破皮',
'B. 让馅料充分熟透',
'C. 控制沸腾程度',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '点水可以控制水温，避免持续沸腾导致饺子皮破裂，同时确保馅料完全熟透。'
},
{
question: '洗衣机应该放在什么位置？',
options: [
'A. 潮湿的卫生间',
'B. 通风的阳台',
'C. 密闭的储物间',
'D. 以上都可以'
],
correctAnswer: 1,
explanation: '通风良好的位置可以防止洗衣机内部潮湿发霉，延长使用寿命。'
},
{
question: '为什么不能用微波炉加热鸡蛋？',
options: [
'A. 鸡蛋会爆炸',
'B. 营养会流失',
'C. 口感会变差',
'D. 以上都是'
],
correctAnswer: 0,
explanation: '微波炉加热鸡蛋时，内部蒸汽无法释放会导致压力积聚而爆炸。'
},
{
question: '哪种清洁方式对木地板最好？',
options: [
'A. 大量水冲洗',
'B. 湿拖把擦拭',
'C. 干布或微湿布擦拭',
'D. 钢丝球刷洗'
],
correctAnswer: 2,
explanation: '木地板怕水，过度潮湿会导致变形，建议用干布或微湿布擦拭。'
},
{
question: '为什么煮饭要用冷水？',
options: [
'A. 让米饭更香',
'B. 保护电饭煲',
'C. 防止营养流失',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '用冷水煮饭可以让米粒充分吸水，口感更好，同时避免营养破坏。'
},
{
question: '冰箱里的异味如何去除？',
options: [
'A. 放入活性炭',
'B. 放入柠檬片',
'C. 放入小苏打',
'D. 以上都可以'
],
correctAnswer: 3,
explanation: '活性炭、柠檬片、小苏打等都有很好的除味效果，可根据实际情况选择使用。'
},
{
question: '为什么炒肉前要腌制？',
options: [
'A. 让肉质更嫩',
'B. 增加风味',
'C. 去除腥味',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '腌制可以使肉质更嫩滑，增加风味，同时有效去除肉类的腥味。'
},
{
question: '哪种材质的砧板最适合切熟食？',
options: [
'A. 木质砧板',
'B. 塑料砧板',
'C. 竹质砧板',
'D. 各有优缺点'
],
correctAnswer: 1,
explanation: '塑料砧板易清洁消毒，不易滋生细菌，更适合切熟食。'
},
{
question: '为什么煮粥时要不断搅拌？',
options: [
'A. 增加粥的粘稠度',
'B. 防止粘锅',
'C. 使粥更均匀',
'D. 以上都是'
],
correctAnswer: 3,
explanation: '不断搅拌可以防止粥粘锅，使粥更均匀，口感更好。'
},
{
question: '哪种水果不宜空腹食用？',
options: [
'A. 苹果',
'B. 香蕉',
'C. 橘子',
'D. 西瓜'
],
correctAnswer: 2,
explanation: '橘子等酸性水果空腹食用可能刺激胃黏膜，引起不适。'
},
{
question: '为什么洗衣服时要翻面？',
options: [
'A. 保护衣物表面',
'B. 使衣物更干净',
'C. 节省洗衣粉',
'D. 以上都是'
],
correctAnswer: 0,
explanation: '翻面洗涤可以减少衣物表面的磨损，延长衣物使用寿命。'
}
]
},


{
    id: 'internet',
    display: '🌐 网络热点',
    questions: [
        // ... 原有的5道题目 ...
        
        {
            question: '"AWSL"在网络用语中表示什么意思？',
            options: [
                'A. 啊我死了',
                'B. 爱无时差',
                'C. 安慰说了',
                'D. 安排上了'
            ],
            correctAnswer: 0,
            explanation: '"AWSL"是"啊，我死了"的拼音首字母缩写，常用来表达被可爱、美好事物击中的激动心情。'
        },
        {
            question: '"破防了"通常用来形容什么状态？',
            options: [
                'A. 游戏装备损坏',
                'B. 心理防线被突破',
                'C. 网络连接中断',
                'D. 考试成绩不佳'
            ],
            correctAnswer: 1,
            explanation: '"破防了"原指游戏中突破防御，现多形容心理防线被触动，情绪失控的状态。'
        },
        {
            question: '"社死"是什么意思？',
            options: [
                'A. 社会性死亡',
                'B. 社交恐惧症',
                'C. 社区服务',
                'D. 社团活动'
            ],
            correctAnswer: 0,
            explanation: '"社死"是"社会性死亡"的简称，指在公众面前出丑，尴尬到只想原地消失的感觉。'
        },
        {
            question: '"内卷"现象主要描述什么？',
            options: [
                'A. 经济发展放缓',
                'B. 无意义的内部竞争',
                'C. 产业升级转型',
                'D. 文化融合交流'
            ],
            correctAnswer: 1,
            explanation: '"内卷"指在有限资源下，个体间非理性的内部竞争，导致付出增多但收益未增的现象。'
        },
        {
            question: '"emo"在网络语境中表达什么情绪？',
            options: [
                'A. 开心兴奋',
                'B. 悲伤抑郁',
                'C. 愤怒生气',
                'D. 平静淡定'
            ],
            correctAnswer: 1,
            explanation: '"emo"源自情绪硬核音乐风格，现泛指忧郁、伤感、情绪低落的负面情绪。'
        },
        {
            question: '"凡尔赛文学"的特点是什么？',
            options: [
                'A. 直白表达不满',
                'B. 低调炫耀优越',
                'C. 夸张描写贫困',
                'D. 理性分析问题'
            ],
            correctAnswer: 1,
            explanation: '"凡尔赛文学"指用看似抱怨、低调的方式，实则炫耀自己优越生活的表达方式。'
        },
        {
            question: '"yyds"是哪个短语的缩写？',
            options: [
                'A. 永远单身',
                'B. 永远的神',
                'C. 音乐大师',
                'D. 友谊第一'
            ],
            correctAnswer: 1,
            explanation: '"yyds"是"永远的神"的拼音首字母缩写，用于表达对某人或某物的极致赞美。'
        },
        {
            question: '"蚌埠住了"是什么意思？',
            options: [
                'A. 城市发展停滞',
                'B. 情绪崩溃忍不住',
                'C. 交通堵塞',
                'D. 美食推荐'
            ],
            correctAnswer: 1,
            explanation: '"蚌埠住了"是"绷不住了"的谐音，表示情绪失控，忍不住笑或哭出来的状态。'
        },
        {
            question: '"绝绝子"通常用来表达什么？',
            options: [
                'A. 彻底断绝关系',
                'B. 形容事物好到极致',
                'C. 绝育手术',
                'D. 绝对保密'
            ],
            correctAnswer: 1,
            explanation: '"绝绝子"是网络流行语，后缀"子"无实义，整体表示"太绝了"、"好极了"的赞叹。'
        },
        {
            question: '"躺平"主要表达什么态度？',
            options: [
                'A. 积极进取',
                'B. 放弃奋斗顺从安排',
                'C. 体育锻炼',
                'D. 工作休息'
            ],
            correctAnswer: 1,
            explanation: '"躺平"指在面对压力时，选择不作为、不抵抗的消极生活态度。'
        },
        {
            question: '"cue"在网络用语中是什么意思？',
            options: [
                'A. 台球运动',
                'B. 点名、提醒',
                'C. 音乐节奏',
                'D. 影视术语'
            ],
            correctAnswer: 1,
            explanation: '"cue"源自英文，在网络上表示"点名"、"提示"或"给镜头"的意思。'
        },
        {
            question: '"下头"是什么意思？',
            options: [
                'A. 下面开始',
                'B. 扫兴、破坏好感',
                'C. 低头认错',
                'D. 下楼出门'
            ],
            correctAnswer: 1,
            explanation: '"下头"与"上头"相对，指某事让人失去兴趣、感到失望或反感。'
        },
        {
            question: '"瑞思拜"是什么意思？',
            options: [
                'A. 瑞士银行',
                'B. 英语respect的音译',
                'C. 思考尊敬',
                'D. 快速礼拜'
            ],
            correctAnswer: 1,
            explanation: '"瑞思拜"是英文"respect"的音译，表示尊敬、敬佩之意。'
        },
        {
            question: '"肝"在网络游戏中常指什么？',
            options: [
                'A. 游戏角色',
                'B. 拼命玩游戏',
                'C. 游戏装备',
                'D. 游戏货币'
            ],
            correctAnswer: 1,
            explanation: '"肝"由"爆肝"简化而来，形容投入大量时间和精力玩游戏的行为。'
        },
        {
            question: '"氪金"是什么意思？',
            options: [
                'A. 购买金属',
                'B. 花钱充值游戏',
                'C. 化学元素',
                'D. 投资理财'
            ],
            correctAnswer: 1,
            explanation: '"氪金"原指漫画中的氪石，现泛指在游戏中充值消费的行为。'
        },
        {
            question: '"种草"是什么意思？',
            options: [
                'A. 种植草药',
                'B. 推荐好东西让人想买',
                'C. 绿化环境',
                'D. 农业技术'
            ],
            correctAnswer: 1,
            explanation: '"种草"指通过分享推荐，激发他人购买欲望的行为，与"拔草"相对。'
        },
        {
            question: '"拔草"是什么意思？',
            options: [
                'A. 清除杂草',
                'B. 打消购买念头',
                'C. 园艺技巧',
                'D. 植物学知识'
            ],
            correctAnswer: 1,
            explanation: '"拔草"指打消购买某物的念头，也指实际购买了之前被"种草"的商品。'
        },
        {
            question: '"真香"定律描述了什么现象？',
            options: [
                'A. 食物香气',
                'B. 前后言行不一',
                'C. 香水推荐',
                'D. 烹饪技巧'
            ],
            correctAnswer: 1,
            explanation: '"真香"源自某综艺节目，形容某人起初拒绝某事物，后来却喜欢上的打脸行为。'
        },
        {
            question: '"摸鱼"是什么意思？',
            options: [
                'A. 捕捉鱼类',
                'B. 上班偷懒、划水',
                'C. 游泳运动',
                'D. 海鲜美食'
            ],
            correctAnswer: 1,
            explanation: '"摸鱼"原指趁混乱捞取利益，现多指在工作或学习时偷懒、不务正业。'
        },
        {
            question: '"666"在网络用语中表示什么？',
            options: [
                'A. 电话号码',
                'B. 表示厉害、很棒',
                'C. 幸运数字',
                'D. 彩票号码'
            ],
            correctAnswer: 1,
            explanation: '"666"原指魔鬼数字，在网络语境中反其意而用之，表示"很牛"、"厉害"的赞美。'
        },
        {
            question: '"2333"是什么意思？',
            options: [
                'A. 数字序列',
                'B. 大笑的意思',
                'C. 密码代号',
                'D. 房间号码'
            ],
            correctAnswer: 1,
            explanation: '"2333"源于贴吧表情包编号，现已成为表示大笑的网络用语。'
        },
        {
            question: '"佛系"描述的是什么样的人？',
            options: [
                'A. 虔诚的佛教徒',
                'B. 随缘、不争不抢',
                'C. 寺庙工作人员',
                'D. 佛教文化研究者'
            ],
            correctAnswer: 1,
            explanation: '"佛系"形容那些看淡一切、随遇而安、无欲无求的生活态度。'
        },
        {
            question: '"彩虹屁"是什么意思？',
            options: [
                'A. 彩虹的颜色',
                'B. 花式吹捧',
                'C. 彩虹的尽头',
                'D. 彩虹糖广告'
            ],
            correctAnswer: 1,
            explanation: '"彩虹屁"是粉丝用来形容对偶像的花式赞美，意思是连偶像放的屁都能吹成彩虹。'
        },
        {
            question: '"打call"是什么意思？',
            options: [
                'A. 打电话',
                'B. 表示支持、加油',
                'C. 呼叫服务',
                'D. 紧急求助'
            ],
            correctAnswer: 1,
            explanation: '"打call"源自日本演唱会应援文化，现泛指对某人或某事的支持、加油。'
        },
        {
            question: '"尬聊"是什么意思？',
            options: [
                'A. 尴尬地聊天',
                'B. 强行找话题聊天',
                'C. 语音聊天',
                'D. 视频聊天'
            ],
            correctAnswer: 0,
            explanation: '"尬聊"指尴尬、不自然地聊天，多因缺乏共同话题或气氛不对。'
        },
        {
            question: '"戏精"是什么意思？',
            options: [
                'A. 戏曲艺术家',
                'B. 喜欢夸张表演的人',
                'C. 电影演员',
                'D. 话剧表演者'
            ],
            correctAnswer: 1,
            explanation: '"戏精"指那些喜欢用夸张表演吸引注意、表现欲强的人。'
        },
        {
            question: '"吃瓜"是什么意思？',
            options: [
                'A. 吃西瓜',
                'B. 围观看热闹',
                'C. 农业活动',
                'D. 美食节目'
            ],
            correctAnswer: 1,
            explanation: '"吃瓜"源自"吃瓜群众"，指对某事不了解或不想介入，只是旁观看热闹的人。'
        },
        {
            question: '"diss"是什么意思？',
            options: [
                'A. 讨论问题',
                'B. 不尊重、贬低他人',
                'C. 学术讨论',
                'D. 体育比赛'
            ],
            correctAnswer: 1,
            explanation: '"diss"是英文"disrespect"的简写，指用言语攻击、贬低他人，尤其在说唱文化中常见。'
        },
        {
            question: '"凉凉"是什么意思？',
            options: [
                'A. 温度降低',
                'B. 完蛋、没希望',
                'C. 空调温度',
                'D. 饮料名称'
            ],
            correctAnswer: 1,
            explanation: '"凉凉"原是一首歌曲名，现多用来形容事情失败、希望破灭的状态。'
        },
        {
            question: '"奥利给"是什么意思？',
            options: [
                'A. 品牌名称',
                'B. 加油、鼓励',
                'C. 食品品牌',
                'D. 运动口号'
            ],
            correctAnswer: 1,
            explanation: '"奥利给"是"给力哦"的倒读，表示加油、鼓励的意思。'
        },
        {
            question: '"上头"是什么意思？',
            options: [
                'A. 领导层',
                'B. 沉迷其中无法自拔',
                'C. 头部位置',
                'D. 上面开始'
            ],
            correctAnswer: 1,
            explanation: '"上头"指对某事物极度沉迷，控制不住自己，也指酒后头晕的感觉。'
        },
        {
            question: '"甩锅"是什么意思？',
            options: [
                'A. 扔掉锅具',
                'B. 推卸责任',
                'C. 烹饪技巧',
                'D. 厨房用具'
            ],
            correctAnswer: 1,
            explanation: '"甩锅"指将责任推卸给他人，源自英文"pass the buck"。'
        },
        {
            question: '"硬核"是什么意思？',
            options: [
                'A. 坚硬的果核',
                'B. 很厉害、很彪悍',
                'C. 核心部件',
                'D. 重要人物'
            ],
            correctAnswer: 1,
            explanation: '"硬核"原指一种音乐风格，现形容那些专业、直接、有挑战性的事物或人。'
        },
        {
            question: '"柠檬精"是什么意思？',
            options: [
                'A. 卖柠檬的人',
                'B. 嫉妒别人的人',
                'C. 喜欢酸味的人',
                'D. 水果爱好者'
            ],
            correctAnswer: 1,
            explanation: '"柠檬精"指那些看到别人比自己好就酸溜溜嫉妒的人，源自"柠檬树上柠檬果，柠檬树下你和我"。'
        },
        {
            question: '"干饭人"是什么意思？',
            options: [
                'A. 做饭的人',
                'B. 努力吃饭的人',
                'C. 餐厅服务员',
                'D. 美食评论家'
            ],
            correctAnswer: 1,
            explanation: '"干饭人"指那些热爱美食、专注于吃饭的人，带有自嘲和幽默的意味。'
        },
        {
            question: '"集美"是什么意思？',
            options: [
                'A. 收集美物',
                'B. 姐妹的意思',
                'C. 美容护肤',
                'D. 美术馆'
            ],
            correctAnswer: 1,
            explanation: '"集美"是"姐妹"的谐音，用来称呼关系好的女性朋友。'
        },
        {
            question: '"针不戳"是什么意思？',
            options: [
                'A. 缝纫技巧',
                'B. "真不错"的谐音',
                'C. 针灸治疗',
                'D. 针线活'
            ],
            correctAnswer: 1,
            explanation: '"针不戳"是"真不错"的谐音，用来表达对某事或某人的赞美和认可。'
        },
        {
            question: '"小丑竟是我自己"表达了什么？',
            options: [
                'A. 职业选择',
                'B. 自嘲、认清现实',
                'C. 马戏团表演',
                'D. 喜剧演员'
            ],
            correctAnswer: 1,
            explanation: '这句话用来形容本以为在看别人笑话，结果发现自己才是那个被蒙在鼓里的人。'
        },
        {
            question: '"格局打开"是什么意思？',
            options: [
                'A. 打开箱子',
                'B. 眼界放宽、提升境界',
                'C. 建筑设计',
                'D. 棋类游戏'
            ],
            correctAnswer: 1,
            explanation: '"格局打开"指要放宽眼界、提升境界，不要局限于眼前的小事。'
        },
        {
            question: '"你品，你细品"是什么意思？',
            options: [
                'A. 品尝美食',
                'B. 仔细体会',
                'C. 品茶艺术',
                'D. 细致观察'
            ],
            correctAnswer: 1,
            explanation: '这句话用来提醒对方要仔细思考、体会，往往含有话外有话的意味。'
        },
        {
            question: '"伤害性不高，侮辱性极强"形容什么情况？',
            options: [
                'A. 身体伤害',
                'B. 言语攻击',
                'C. 精神伤害',
                'D. 身体侮辱'
            ],
            correctAnswer: 1,
            explanation: '这句话形容某件事或某句话虽然不会造成实质性伤害，但让人感到被冒犯、没面子。'
        },
        {
            question: '"那我走？"是什么梗？',
            options: [
                'A. 恋爱关系',
                'B. 尴尬场面',
                'C. 工作离职',
                'D. 旅行出发'
            ],
            correctAnswer: 1,
            explanation: '这个梗源自一段视频，当一方表现出失望时，另一方用"那我走？"来化解尴尬，现常用于幽默自嘲。'
        },
        {
            question: '"栓Q"是什么意思？',
            options: [
                'A. 拴住物品',
                'B. "thank you"的谐音',
                'C. 感谢信',
                'D. 感恩的心'
            ],
            correctAnswer: 1,
            explanation: '"栓Q"是英文"thank you"的谐音，原意是感谢，现多用于表达无语、无奈的情绪。'
        },
        {
            question: '"PUA"是什么意思？',
            options: [
                'A. 职业培训',
                'B. 精神控制',
                'C. 搭讪技巧',
                'D. 心理治疗'
            ],
            correctAnswer: 1,
            explanation: '"PUA"原指"搭讪艺术家"，现泛指通过精神打压、情感操控等方式控制他人的行为。'
        },
        {
            question: '"元宇宙"是什么概念？',
            options: [
                'A. 天文宇宙',
                'B. 虚拟现实世界',
                'C. 哲学概念',
                'D. 物理理论'
            ],
            correctAnswer: 1,
            explanation: '"元宇宙"指通过虚拟现实等技术构建的、可与现实世界交互的虚拟世界。'
        },
        {
            question: '"摆烂"是什么意思？',
            options: [
                'A. 摆放物品',
                'B. 放任事情变坏',
                'C. 懒惰行为',
                'D. 休闲方式'
            ],
            correctAnswer: 1,
            explanation: '"摆烂"指当事情无法向好的方向发展时，就任其往坏的方向发展。'
        },
        {
            question: '"雪糕刺客"是什么意思？',
            options: [
                'A. 雪糕品牌',
                'B. 价格昂贵的雪糕',
                'C. 冷饮店',
                'D. 冰淇淋制作'
            ],
            correctAnswer: 1,
            explanation: '"雪糕刺客"指那些看起来普通但价格昂贵的雪糕，让消费者在结账时感到意外和受伤。'
        },
        {
            question: '"退！退！退！"是什么梗？',
            options: [
                'A. 退货流程',
                'B. 驱赶、拒绝',
                'C. 后退动作',
                'D. 体育比赛'
            ],
            correctAnswer: 1,
            explanation: '这个梗源自一段视频，一位大叔用"退！退！退！"来驱赶他人，现多用于表达拒绝、驱赶的意思。'
        },
        {
            question: '"挖呀挖"是什么梗？',
            options: [
                'A. 园艺活动',
                'B. 网络流行语',
                'C. 儿童歌曲',
                'D. 健身动作'
            ],
            correctAnswer: 1,
            explanation: '这个梗源自一首儿童歌曲，因一位幼教老师的演唱视频而走红网络。'
        },
        {
            question: '"尊嘟假嘟"是什么意思？',
            options: [
                'A. 尊敬程度',
                'B. "真的假的"的谐音',
                'C. 真假辨别',
                'D. 诚实测试'
            ],
            correctAnswer: 1,
            explanation: '"尊嘟假嘟"是"真的假的"的谐音，用来表达对某事的惊讶或怀疑。'
        },
        {
            question: '"特种兵式旅游"是什么意思？',
            options: [
                'A. 军事训练',
                'B. 高强度快节奏旅游',
                'C. 冒险旅行',
                'D. 极限运动'
            ],
            correctAnswer: 1,
            explanation: '"特种兵式旅游"指在短时间内快速游览多个景点的高强度旅游方式。'
        },
        {
            question: '"搭子"是什么意思？',
            options: [
                'A. 搭建工具',
                'B. 特定场合的伙伴',
                'C. 合作伙伴',
                'D. 旅行伴侣'
            ],
            correctAnswer: 1,
            explanation: '"搭子"指在特定场合或活动中临时结成的伙伴关系。'
        },
        {
            question: '"显眼包"是什么意思？',
            options: [
                'A. 明显可见的包裹',
                'B. 爱出风头的人',
                'C. 显眼的位置',
                'D. 明显的包裹'
            ],
            correctAnswer: 1,
            explanation: '"显眼包"指那些在人群中格外引人注目、喜欢表现自己的人。'
        },
        {
            question: '"电子榨菜"是什么意思？',
            options: [
                'A. 榨菜品牌',
                'B. 下饭的视频或音频',
                'C. 电子设备',
                'D. 美食制作'
            ],
            correctAnswer: 1,
            explanation: '"电子榨菜"指那些适合在吃饭时观看的视频或收听的内容，就像榨菜能下饭一样。'
        },
        {
            question: '"脆皮大学生"是什么意思？',
            options: [
                'A. 易碎的物品',
                'B. 身体素质差的大学生',
                'C. 大学生活',
                'D. 教育制度'
            ],
            correctAnswer: 1,
            explanation: '"脆皮大学生"指那些身体素质差、容易生病的大学生，带有幽默和自嘲的意味。'
        },
        {
            question: '"公主请上车"是什么梗？',
            options: [
                'A. 童话故事',
                'B. 网络流行语',
                'C. 电影台词',
                'D. 广告宣传'
            ],
            correctAnswer: 1,
            explanation: '这个梗源自一段视频，一位司机用"公主请上车"来邀请乘客上车，现多用于表达对女性的尊重和礼貌。'
        },
        {
            question: '"遥遥领先"是什么梗？',
            options: [
                'A. 比赛胜利',
                'B. 形容某方面特别突出',
                'C. 科技产品',
                'D. 广告语'
            ],
            correctAnswer: 1,
            explanation: '"遥遥领先"原指在比赛中远远超过对手，现多用于幽默地表达某方面的优势。'
        },
        {
            question: '"科目三"是什么梗？',
            options: [
                'A. 驾照考试',
                'B. 一种舞蹈',
                'C. 考试科目',
                'D. 学习内容'
            ],
            correctAnswer: 1,
            explanation: '"科目三"原指驾照考试中的路考，现因一段魔性舞蹈视频而成为网络热梗。'
        }
    ]
},



{
    id: 'fun',
    display: '❓ 趣味问答',
    questions: [
        {
            question: '为什么企鹅的脚不怕冻？',
            options: [
                'A. 脚上没有神经',
                'B. 脚部血液循环特殊',
                'C. 脚上覆盖特殊脂肪层',
                'D. 脚部有防冻液'
            ],
            correctAnswer: 1,
            explanation: '企鹅脚部有特殊的血液循环系统，能够减少热量散失，同时脚部温度接近冰点，减少与冰面的温差。'
        },
        {
            question: '香蕉为什么是弯的？',
            options: [
                'A. 生长时向光性',
                'B. 基因决定',
                'C. 便于攀爬',
                'D. 美观考虑'
            ],
            correctAnswer: 0,
            explanation: '香蕉在生长过程中具有向光性，会朝着太阳方向生长，因此呈现弯曲形状。'
        },
        {
            question: '为什么猫从高处跳下不容易受伤？',
            options: [
                'A. 身体轻巧',
                'B. 有九条命',
                'C. 会轻功',
                'D. 有特殊骨骼'
            ],
            correctAnswer: 0,
            explanation: '猫的平衡感极佳，在空中能调整姿态，同时身体柔韧性好，脚掌有肉垫缓冲。'
        },
        {
            question: '为什么打哈欠会传染？',
            options: [
                'A. 心理暗示',
                'B. 镜像神经元作用',
                'C. 集体无意识',
                'D. 遗传本能'
            ],
            correctAnswer: 1,
            explanation: '人类大脑中的镜像神经元会在看到他人打哈欠时被激活，产生模仿行为。'
        },
        {
            question: '为什么切洋葱会流泪？',
            options: [
                'A. 洋葱释放刺激性气体',
                'B. 视觉刺激反射',
                'C. 气味过敏反应',
                'D. 心理共鸣'
            ],
            correctAnswer: 0,
            explanation: '洋葱被切开时会释放一种酶，与空气中的氧气反应生成刺激性气体刺激眼睛。'
        },
        {
            question: '为什么蚂蚁能搬动比自己重很多的东西？',
            options: [
                'A. 肌肉结构特殊',
                'B. 相对力量大',
                'C. 进化优势',
                'D. 环境适应'
            ],
            correctAnswer: 1,
            explanation: '蚂蚁体型小，肌肉相对力量更大，能搬动比自身体重重数十倍的物体。'
        },
        {
            question: '为什么天空是蓝色的？',
            options: [
                'A. 海水反射',
                'B. 瑞利散射',
                'C. 大气折射',
                'D. 阳光反射'
            ],
            correctAnswer: 1,
            explanation: '阳光中的蓝光波长较短，更容易被大气分子散射，所以我们看到的天空是蓝色的。'
        },
        {
            question: '为什么泡泡是圆的？',
            options: [
                'A. 表面张力作用',
                'B. 美观考虑',
                'C. 便于漂浮',
                'D. 空气流动形成'
            ],
            correctAnswer: 0,
            explanation: '泡泡的表面张力会使液体表面积最小化，而球形在相同体积下表面积最小。'
        },
        {
            question: '为什么火柴能点燃？',
            options: [
                'A. 摩擦生热',
                'B. 化学反应',
                'C. 静电作用',
                'D. 空气压力'
            ],
            correctAnswer: 0,
            explanation: '火柴头含有易燃化学物质，与火柴盒侧面的磷面摩擦时产生足够热量引发燃烧。'
        },
        {
            question: '为什么镜子里的影像是左右颠倒而不是上下颠倒？',
            options: [
                'A. 光的反射原理',
                'B. 视觉习惯',
                'C. 大脑处理方式',
                'D. 光学原理'
            ],
            correctAnswer: 0,
            explanation: '镜子反射光线时，实际是前后方向颠倒，但我们的大脑习惯将其理解为左右颠倒。'
        },
        {
            question: '为什么热水比冷水结冰快？',
            options: [
                'A. 姆潘巴效应',
                'B. 热胀冷缩',
                'C. 密度变化',
                'D. 热传导'
            ],
            correctAnswer: 0,
            explanation: '这一现象被称为姆潘巴效应，可能与热水蒸发、对流等因素有关。'
        },
        {
            question: '为什么彩虹是弧形的？',
            options: [
                'A. 光的折射和反射',
                'B. 大气分层',
                'C. 温度梯度',
                'D. 湿度影响'
            ],
            correctAnswer: 0,
            explanation: '彩虹是阳光在水滴中发生折射、反射形成的，由于地球是圆的，所以我们看到的彩虹是弧形。'
        },
        {
            question: '为什么猫的眼睛在黑暗中会发光？',
            options: [
                'A. 自发光',
                'B. 反射外界光线',
                'C. 生物荧光',
                'D. 化学发光'
            ],
            correctAnswer: 1,
            explanation: '猫眼后方有一层反光膜，能将进入眼睛的光线再次反射到视网膜上，增强夜视能力。'
        },
        {
            question: '为什么气球能飞起来？',
            options: [
                'A. 空气浮力',
                'B. 充入氢气或氦气',
                'C. 空气流动',
                'D. 重力作用'
            ],
            correctAnswer: 1,
            explanation: '气球内充入比空气轻的气体（如氢气、氦气），产生向上的浮力。'
        },
        {
            question: '为什么冰会浮在水面上？',
            options: [
                'A. 冰的密度比水小',
                'B. 表面张力',
                'C. 空气压力',
                'D. 温度差异'
            ],
            correctAnswer: 0,
            explanation: '水结冰时体积膨胀，密度变小（约0.9g/cm³），因此能浮在水面上。'
        },
        {
            question: '为什么树叶在秋天会变色？',
            options: [
                'A. 温度变化',
                'B. 叶绿素分解',
                'C. 水分减少',
                'D. 光合作用停止'
            ],
            correctAnswer: 0,
            explanation: '气温下降时，树叶中的叶绿素分解，其他色素显现出来。'
        },
        {
            question: '为什么打喷嚏时要闭上眼睛？',
            options: [
                'A. 保护眼睛',
                'B. 条件反射',
                'C. 肌肉联动',
                'D. 神经反射'
            ],
            correctAnswer: 2,
            explanation: '打喷嚏时面部肌肉收缩，包括眼轮匝肌，导致眼睛自然闭合。'
        },
        {
            question: '为什么海水是咸的？',
            options: [
                'A. 河流带来盐分',
                'B. 海底盐矿溶解',
                'C. 火山喷发',
                'D. 生物排泄'
            ],
            correctAnswer: 0,
            explanation: '河流将陆地上的盐分带入海洋，经过亿万年的积累，海水就变咸了。'
        },
        {
            question: '为什么星星会闪烁？',
            options: [
                'A. 星星本身亮度变化',
                'B. 大气湍流影响',
                'C. 视觉暂留',
                'D. 光速变化'
            ],
            correctAnswer: 1,
            explanation: '星光穿过地球大气层时，受到空气流动和温度变化的影响，产生闪烁现象。'
        },
        {
            question: '为什么骆驼能在沙漠中长时间不喝水？',
            options: [
                'A. 驼峰储水',
                'B. 代谢效率高',
                'C. 水分消耗少',
                'D. 能从食物中获取水分'
            ],
            correctAnswer: 0,
            explanation: '骆驼的驼峰储存的是脂肪，但能通过代谢产生水分，同时骆驼能调节体温减少水分蒸发。'
        },
        {
            question: '为什么橡皮能擦掉铅笔字？',
            options: [
                'A. 摩擦生热',
                'B. 物理吸附作用',
                'C. 化学分解',
                'D. 静电作用'
            ],
            correctAnswer: 0,
            explanation: '橡皮与纸张摩擦时，产生的碎屑能包裹并带走石墨颗粒。'
        },
        {
            question: '为什么自行车骑起来不会倒？',
            options: [
                'A. 重心稳定',
                'B. 陀螺效应',
                'C. 摩擦力作用',
                'D. 惯性维持'
            ],
            correctAnswer: 1,
            explanation: '自行车前进时，车轮的旋转产生陀螺效应，同时前轮的转向能自动调整平衡。'
        },
        {
            question: '为什么微波炉能加热食物？',
            options: [
                'A. 产生微波使水分子振动',
                'B. 红外线辐射',
                'C. 热传导',
                'D. 空气对流'
            ],
            correctAnswer: 0,
            explanation: '微波炉产生高频电磁波，使食物中的水分子快速振动摩擦生热。'
        },
        {
            question: '为什么磁铁能吸引铁？',
            options: [
                'A. 磁场作用',
                'B. 静电吸引',
                'C. 分子间作用力',
                'D. 静电感应'
            ],
            correctAnswer: 0,
            explanation: '磁铁产生磁场，使铁等磁性材料中的磁畴排列一致，产生吸引力。'
        },
        {
            question: '为什么雨后空气特别清新？',
            options: [
                'A. 雨水带走灰尘',
                'B. 负离子增多',
                'C. 温度变化',
                'D. 湿度变化'
            ],
            correctAnswer: 0,
            explanation: '雨水冲刷空气中的灰尘和污染物，同时雷电产生臭氧，使空气更清新。'
        },
        {
            question: '为什么热水瓶能保温？',
            options: [
                'A. 真空隔热',
                'B. 材料导热性差',
                'C. 反射热辐射',
                'D. 减少热对流'
            ],
            correctAnswer: 0,
            explanation: '热水瓶采用双层玻璃结构，中间抽成真空，减少热传导和热对流。'
        },
        {
            question: '为什么萤火虫会发光？',
            options: [
                'A. 生物化学反应',
                'B. 磷光物质',
                'C. 荧光效应',
                'D. 生物电'
            ],
            correctAnswer: 0,
            explanation: '萤火虫体内含有荧光素和荧光素酶，与氧气反应产生光能。'
        },
        {
            question: '为什么石头会沉入水底？',
            options: [
                'A. 密度比水大',
                'B. 重量太重',
                'C. 表面不光滑',
                'D. 密度不均匀'
            ],
            correctAnswer: 0,
            explanation: '石头的密度一般大于水的密度，因此会沉入水底。'
        },
        {
            question: '为什么纸张放久了会变黄？',
            options: [
                'A. 氧化反应',
                'B. 受潮变质',
                'C. 光照影响',
                'D. 微生物作用'
            ],
            correctAnswer: 0,
            explanation: '纸张中的木质素在空气中氧化，导致纸张变黄。'
        },
        {
            question: '为什么冬天会下雪？',
            options: [
                'A. 气温低于冰点',
                'B. 水汽凝结',
                'C. 大气压力变化',
                'D. 湿度变化'
            ],
            correctAnswer: 0,
            explanation: '当高空温度低于0℃时，水汽直接凝华成冰晶，形成雪花。'
        },
        {
            question: '为什么钟表指针是顺时针转动的？',
            options: [
                'A. 日晷投影方向',
                'B. 地球自转方向',
                'C. 历史习惯',
                'D. 国际标准'
            ],
            correctAnswer: 0,
            explanation: '古代日晷在北半球投影移动方向为顺时针，因此钟表沿用了这个方向。'
        },
        {
            question: '为什么电池会有电？',
            options: [
                'A. 化学反应产生电能',
                'B. 储存太阳能',
                'C. 静电积累',
                'D. 电磁感应'
            ],
            correctAnswer: 0,
            explanation: '电池内部发生氧化还原反应，电子定向移动形成电流。'
        },
        {
            question: '为什么辣椒会辣？',
            options: [
                'A. 含有辣椒素',
                'B. 酸性物质',
                'C. 碱性物质',
                'D. 盐分作用'
            ],
            correctAnswer: 0,
            explanation: '辣椒中含有辣椒素，能刺激口腔中的痛觉感受器，产生"辣"的感觉。'
        },
        {
            question: '为什么镜子能照出人影？',
            options: [
                'A. 光的反射',
                'B. 光的折射',
                'C. 光的衍射',
                'D. 光的干涉'
            ],
            correctAnswer: 0,
            explanation: '镜子表面光滑，能规则反射光线，形成清晰的影像。'
        },
        {
            question: '为什么气球会爆炸？',
            options: [
                'A. 内部压力过大',
                'B. 温度过高',
                'C. 材质老化',
                'D. 外部撞击'
            ],
            correctAnswer: 0,
            explanation: '气球内气体压力超过橡胶承受极限时就会破裂爆炸。'
        },
        {
            question: '为什么肥皂能去污？',
            options: [
                'A. 乳化作用',
                'B. 溶解污渍',
                'C. 化学分解',
                'D. 物理摩擦'
            ],
            correctAnswer: 0,
            explanation: '肥皂分子一端亲水一端亲油，能将油污包裹并分散在水中。'
        },
        {
            question: '为什么头发会变白？',
            options: [
                'A. 黑色素减少',
                'B. 营养不良',
                'C. 年龄增长',
                'D. 遗传因素'
            ],
            correctAnswer: 0,
            explanation: '随着年龄增长，毛囊中的黑色素细胞功能衰退，产生的黑色素减少。'
        },
        {
            question: '为什么鸡蛋一头大一头小？',
            options: [
                'A. 便于滚动',
                'B. 气室位置',
                'C. 便于孵化',
                'D. 美观考虑'
            ],
            correctAnswer: 1,
            explanation: '鸡蛋在母鸡体内形成时，先在输卵管较宽处形成蛋清和蛋黄，然后在较窄处形成蛋壳，因此形状不对称。'
        },
        {
            question: '为什么月亮会有阴晴圆缺？',
            options: [
                'A. 地球遮挡阳光',
                'B. 月球公转位置变化',
                'C. 大气折射',
                'D. 视觉错觉'
            ],
            correctAnswer: 1,
            explanation: '月球绕地球公转时，太阳照射月球的角度不断变化，从地球上看就呈现不同形状。'
        },
        {
            question: '为什么电视遥控器能换台？',
            options: [
                'A. 红外线信号',
                'B. 无线电波',
                'C. 蓝牙信号',
                'D. WiFi信号'
            ],
            correctAnswer: 0,
            explanation: '遥控器发出红外线信号，电视机接收器接收信号后执行相应操作。'
        },
        {
            question: '为什么弹簧能伸缩？',
            options: [
                'A. 弹性变形',
                'B. 塑性变形',
                'C. 热胀冷缩',
                'D. 电磁作用'
            ],
            correctAnswer: 0,
            explanation: '弹簧材料具有弹性，受力时发生弹性变形，撤去力后恢复原状。'
        },
        {
            question: '为什么胶水能粘东西？',
            options: [
                'A. 高分子链相互缠绕',
                'B. 化学反应',
                'C. 物理吸附',
                'D. 静电作用'
            ],
            correctAnswer: 0,
            explanation: '胶水中的高分子物质在固化过程中形成网状结构，产生粘接力。'
        },
        {
            question: '为什么计算器能计算？',
            options: [
                'A. 集成电路处理',
                'B. 机械传动',
                'C. 电子流动',
                'D. 光电效应'
            ],
            correctAnswer: 0,
            explanation: '计算器内部有微处理器，能执行逻辑运算和数学计算。'
        },
        {
            question: '为什么风筝能飞起来？',
            options: [
                'A. 风力作用',
                'B. 重力作用',
                'C. 磁力作用',
                'D. 静电作用'
            ],
            correctAnswer: 0,
            explanation: '风筝利用风力产生升力，同时拉线控制方向和稳定性。'
        },
        {
            question: '为什么灯泡会发光？',
            options: [
                'A. 电流热效应',
                'B. 光电效应',
                'C. 电磁感应',
                'D. 化学发光'
            ],
            correctAnswer: 0,
            explanation: '电流通过灯丝时，由于电阻产生热量，使灯丝温度升高至白炽状态而发光。'
        },
        {
            question: '为什么吸管能吸饮料？',
            options: [
                'A. 大气压力作用',
                'B. 毛细现象',
                'C. 虹吸效应',
                'D. 表面张力'
            ],
            correctAnswer: 0,
            explanation: '用吸管吸气时，管内气压降低，外界大气压将饮料压入吸管。'
        },
        {
            question: '为什么石头剪刀布游戏中，剪刀赢布？',
            options: [
                'A. 剪刀能剪开布',
                'B. 游戏规则设定',
                'C. 概率分布',
                'D. 心理预期'
            ],
            correctAnswer: 0,
            explanation: '这是游戏规则的人为设定，基于现实生活中的逻辑关系。'
        },
        {
            question: '为什么铅笔芯是黑色的？',
            options: [
                'A. 石墨颜色',
                'B. 碳元素特性',
                'C. 化学性质',
                'D. 物理特性'
            ],
            correctAnswer: 0,
            explanation: '铅笔芯主要成分是石墨，石墨是碳的同素异形体，呈灰黑色。'
        },
        {
            question: '为什么冰淇淋会融化？',
            options: [
                'A. 温度高于冰点',
                'B. 空气湿度大',
                'C. 光照强烈',
                'D. 空气流动'
            ],
            correctAnswer: 0,
            explanation: '冰淇淋中的冰晶在室温下会融化，从固态变为液态。'
        },
        {
            question: '为什么放大镜能放大物体？',
            options: [
                'A. 光的折射',
                'B. 光的反射',
                'C. 光的衍射',
                'D. 光的干涉'
            ],
            correctAnswer: 0,
            explanation: '放大镜是凸透镜，能使光线折射并会聚，形成放大的虚像。'
        },
        {
            question: '为什么气球摩擦头发后会粘在墙上？',
            options: [
                'A. 静电作用',
                'B. 胶水残留',
                'C. 空气压力',
                'D. 磁力效应'
            ],
            correctAnswer: 0,
            explanation: '气球与头发摩擦产生静电，带电的气球能吸附在墙壁等物体表面。'
        },
        {
            question: '为什么磁铁能指南北？',
            options: [
                'A. 地球磁场作用',
                'B. 重力方向',
                'C. 地轴指向',
                'D. 磁场极性'
            ],
            correctAnswer: 0,
            explanation: '磁铁在地球磁场中会受到磁力作用，自动指向南北方向。'
        },
        {
            question: '为什么水烧开时会冒泡？',
            options: [
                'A. 水蒸气形成',
                'B. 溶解气体释放',
                'C. 化学变化',
                'D. 物理变化'
            ],
            correctAnswer: 0,
            explanation: '水加热到沸点时，液态水迅速汽化形成水蒸气，产生气泡。'
        },
        {
            question: '为什么太阳从东边升起？',
            options: [
                'A. 地球自转方向',
                'B. 公转轨道',
                'C. 黄道平面',
                'D. 赤道方向'
            ],
            correctAnswer: 0,
            explanation: '地球自西向东自转，从地球上看太阳就从东边升起。'
        },
        {
            question: '为什么橡皮筋能拉伸？',
            options: [
                'A. 高分子链伸展',
                'B. 弹性变形',
                'C. 塑性变形',
                'D. 热变形'
            ],
            correctAnswer: 0,
            explanation: '橡皮筋中的高分子聚合物在外力作用下发生弹性变形，能恢复原状。'
        },
        {
            question: '为什么云能飘在空中？',
            options: [
                'A. 空气浮力',
                'B. 风力作用',
                'C. 重力作用',
                'D. 惯性作用'
            ],
            correctAnswer: 0,
            explanation: '云由微小水滴或冰晶组成，重量很轻，能被空气浮力托住。'
        },
        {
            question: '为什么纸船能浮在水上？',
            options: [
                'A. 浮力作用',
                'B. 表面张力',
                'C. 空气压力',
                'D. 热对流'
            ],
            correctAnswer: 0,
            explanation: '纸船排开水的体积产生向上的浮力，当浮力大于重力时就能浮在水面。'
        },
        {
            question: '为什么石头扔进水里会产生波纹？',
            options: [
                'A. 水的表面张力',
                'B. 重力波传播',
                'C. 表面波扩散',
                'D. 压力传递'
            ],
            correctAnswer: 0,
            explanation: '石头扰动水面，使水分子振动，这种振动以波的形式向四周传播。'
        },
        {
            question: '为什么热水会冒热气？',
            options: [
                'A. 水蒸气遇冷凝结',
                'B. 空气对流',
                'C. 蒸发作用',
                'D. 沸腾现象'
            ],
            correctAnswer: 0,
            explanation: '热水蒸发产生水蒸气，遇到较冷的空气时迅速凝结成小水滴，形成"热气"。'
        },
        {
            question: '为什么铁会生锈？',
            options: [
                'A. 氧化反应',
                'B. 腐蚀作用',
                'C. 化学变化',
                'D. 物理变化'
            ],
            correctAnswer: 0,
            explanation: '铁与空气中的氧气和水反应，生成氧化铁（铁锈）。'
        },
        {
            question: '为什么影子会跟着人走？',
            options: [
                'A. 光沿直线传播',
                'B. 影子有意识',
                'C. 视觉暂留',
                'D. 光学错觉'
            ],
            correctAnswer: 0,
            explanation: '光线被人体遮挡无法到达地面，形成与人体轮廓相似的暗区。'
        },
        {
            question: '为什么彩虹有七种颜色？',
            options: [
                'A. 光的色散',
                'B. 大气分层',
                'C. 温度梯度',
                'D. 湿度变化'
            ],
            correctAnswer: 0,
            explanation: '阳光中的不同颜色光波长不同，在水滴中折射角度不同，因此分离出七种颜色。'
        },
        {
            question: '为什么冬天呼出的气是白色的？',
            options: [
                'A. 水蒸气凝结',
                'B. 二氧化碳呼出',
                'C. 体温差异',
                'D. 空气成分'
            ],
            correctAnswer: 0,
            explanation: '呼出的气体中含有水蒸气，遇到冷空气时迅速凝结成微小水滴，呈现白色。'
        }
    ]
}


]
};

window.quizData = quizData;