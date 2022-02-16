export default [{
	"id": 1,
	"name": "调整常规项目",
	"parentId": 0,
	"siniTreeBeans": [{
		"id": 9,
		"name": "档位信息",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 10,
			"name": "物理信号",
			"parentId": 9,
			"siniTreeBeans": [{
				"id": 11,
				"name": "档位数组",
				"parentId": 10,
				"uiType": 4,
				"values": [
					["7.0", "6.0", "5.0", "4.0", "3.0", "2.0", "1.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"]
				]
			}, {
				"id": 12,
				"name": "速比数组",
				"parentId": 10,
				"uiType": 4,
				"values": [
					["0.83", "1.0", "1.5", "2.23", "3.5", "5.63", "8.2", "10.0", "10.0", "10.0", "10.0", "10.0", "10.0", "10.0", "12.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0", "20.0"]
				]
			}],
			"uiType": 2
		}, {
			"id": 13,
			"name": "CAN信号-ETC2",
			"parentId": 9,
			"uiType": 2
		}],
		"uiType": 1,
		"values": [
			["物理信号"]
		]
	}, {
		"id": 14,
		"name": "刹车开关选择",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 15,
			"name": "物理信号-单刹车",
			"parentId": 14,
			"uiType": 2
		}, {
			"id": 16,
			"name": "物理信号-双刹车",
			"parentId": 14,
			"uiType": 2
		}, {
			"id": 17,
			"name": "CAN信号(BrkEBC1)",
			"parentId": 14,
			"uiType": 2
		}, {
			"id": 18,
			"name": "CAN信号(BrkCCVs)",
			"parentId": 14,
			"uiType": 2
		}],
		"uiType": 1
	}, {
		"id": 19,
		"name": "离合开关选择",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 20,
			"name": "物理信号",
			"parentId": 19,
			"uiType": 2
		}, {
			"id": 21,
			"name": "CAN信号-CCVS",
			"parentId": 19,
			"uiType": 2
		}, {
			"id": 22,
			"name": "屏蔽信号输入",
			"parentId": 19,
			"uiType": 2
		}],
		"uiType": 1,
		"values": [
			["物理信号"]
		]
	}, {
		"id": 23,
		"name": "空调请求开关选择",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 24,
			"name": "物理信号",
			"parentId": 23,
			"uiType": 2
		}, {
			"id": 25,
			"name": "CAN信号-ACCD",
			"parentId": 23,
			"uiType": 2
		}],
		"uiType": 1
	}, {
		"id": 26,
		"name": "巡航控制开关选择",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 27,
			"name": "物理信号",
			"parentId": 26,
			"uiType": 2
		}, {
			"id": 28,
			"name": "CAN信号-ACCD",
			"parentId": 26,
			"uiType": 2
		}, {
			"id": 29,
			"name": "屏蔽信号输入",
			"parentId": 26,
			"uiType": 2
		}],
		"uiType": 1,
		"values": [
			["屏蔽信号输入"]
		]
	}, {
		"id": 30,
		"name": "预热控制",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 31,
			"name": "启用",
			"parentId": 30,
			"uiType": 2
		}, {
			"id": 32,
			"name": "禁用",
			"parentId": 30,
			"uiType": 2
		}],
		"uiType": 1
	}, {
		"id": 33,
		"name": "空调继电器控制",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 34,
			"name": "启用",
			"parentId": 33,
			"siniTreeBeans": [{
				"id": 35,
				"name": "空调关闭最高水温",
				"parentId": 34,
				"uiType": 3,
				"values": [
					["103.96000999999997"]
				]
			}, {
				"id": 36,
				"name": "空调关闭最低水温",
				"parentId": 34,
				"uiType": 3,
				"values": [
					["4.960009999999966"]
				]
			}],
			"uiType": 2
		}, {
			"id": 37,
			"name": "禁用",
			"parentId": 33,
			"uiType": 2
		}],
		"uiType": 1
	}, {
		"id": 38,
		"name": "排气制动",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 39,
			"name": "启用",
			"parentId": 38,
			"uiType": 2
		}, {
			"id": 40,
			"name": "禁用",
			"parentId": 38,
			"uiType": 2
		}],
		"uiType": 1,
		"values": [
			["启用"]
		]
	}, {
		"id": 41,
		"name": "缸内制动",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 42,
			"name": "请求开关启用",
			"parentId": 41,
			"siniTreeBeans": [{
				"id": 43,
				"name": "发动机制动进入转速偏移量",
				"parentId": 42,
				"uiType": 3,
				"values": [
					["50.0"]
				]
			}, {
				"id": 44,
				"name": "发动机制动退出转速曲线",
				"parentId": 42,
				"uiType": 5,
				"valueXs": ["-50.03999000000003", "-0.039990000000034345", "49.96000999999997", "99.96000999999997", "149.96000999999995", "199.96000999999995"],
				"values": [
					["1000.0", "950.0", "950.0", "950.0", "950.0", "950.0"]
				]
			}],
			"uiType": 2
		}, {
			"id": 45,
			"name": "请求刹车联动",
			"parentId": 41,
			"siniTreeBeans": [{
				"id": 46,
				"name": "发动机制动进入转速偏移量",
				"parentId": 45,
				"uiType": 3,
				"values": [
					["50.0"]
				]
			}, {
				"id": 47,
				"name": "发动机制动退出转速曲线",
				"parentId": 45,
				"uiType": 5,
				"valueXs": ["-50.03999000000003", "-0.039990000000034345", "49.96000999999997", "99.96000999999997", "149.96000999999995", "199.96000999999995"],
				"values": [
					["1000.0", "950.0", "950.0", "950.0", "950.0", "950.0"]
				]
			}],
			"uiType": 2
		}, {
			"id": 48,
			"name": "禁用缸内制动",
			"parentId": 41,
			"uiType": 2
		}],
		"uiType": 1,
		"values": [
			["禁用缸内制动"]
		]
	}, {
		"id": 107,
		"name": "机油压力输出",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 108,
			"name": "输出相对值",
			"parentId": 107,
			"uiType": 2
		}, {
			"id": 109,
			"name": "输出绝对值",
			"parentId": 107,
			"uiType": 2
		}, {
			"id": 110,
			"name": "禁用",
			"parentId": 107,
			"uiType": 2
		}],
		"uiType": 1
	}, {
		"id": 111,
		"name": "多功能开关",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 112,
			"name": "启用",
			"parentId": 111,
			"uiType": 2
		}, {
			"id": 113,
			"name": "禁用",
			"parentId": 111,
			"uiType": 2
		}],
		"uiType": 1,
		"values": [
			["禁用"]
		]
	}, {
		"id": 121,
		"name": "扭矩限制",
		"parentId": 1,
		"siniTreeBeans": [{
			"id": 122,
			"name": "启用",
			"parentId": 121,
			"siniTreeBeans": [{
				"id": 125,
				"name": "二档扭矩限制值",
				"parentId": 122,
				"uiType": 3
			}, {
				"id": 124,
				"name": "一档扭矩限制值",
				"parentId": 122,
				"uiType": 3
			}, {
				"id": 123,
				"name": "零档扭矩限制值",
				"parentId": 122,
				"uiType": 3
			}],
			"uiType": 2
		}, {
			"id": 126,
			"name": "禁用",
			"parentId": 121,
			"uiType": 2
		}],
		"uiType": 1
	}],
	"uiType": 0
}, {
	"id": 1518,
	"name": "发动机启动相关功能",
	"parentId": 0,
	"siniTreeBeans": [{
		"id": 49,
		"name": "起动机控制",
		"parentId": 1518,
		"siniTreeBeans": [{
			"id": 50,
			"name": "启用",
			"parentId": 49,
			"uiType": 2
		}, {
			"id": 51,
			"name": "禁用",
			"parentId": 49,
			"uiType": 2
		}],
		"uiType": 1
	}, {
		"id": 114,
		"name": "辅助起动",
		"parentId": 1518,
		"siniTreeBeans": [{
			"id": 115,
			"name": "启用",
			"parentId": 114,
			"uiType": 2
		}, {
			"id": 116,
			"name": "禁用",
			"parentId": 114,
			"uiType": 2
		}],
		"uiType": 1
	}],
	"uiType": 0
}, {
	"id": 1516,
	"name": "风扇/巡航/PTO/远程油门相关功能",
	"parentId": 0,
	"siniTreeBeans": [{
		"id": 52,
		"name": "风扇控制",
		"parentId": 1516,
		"siniTreeBeans": [{
			"id": 54,
			"name": "三级风扇",
			"parentId": 52,
			"siniTreeBeans": [{
				"id": 53,
				"name": "三级风扇启用",
				"parentId": 54,
				"uiType": 2
			}, {
				"id": 55,
				"name": "三级风扇禁用",
				"parentId": 54,
				"uiType": 2
			}],
			"uiType": 1,
			"values": [
				["三级风扇"]
			]
		}, {
			"id": 1019,
			"name": "二级风扇",
			"parentId": 52,
			"siniTreeBeans": [{
				"id": 57,
				"name": "二级风扇启用",
				"parentId": 1019,
				"uiType": 2
			}, {
				"id": 59,
				"name": "二级风扇禁用",
				"parentId": 1019,
				"uiType": 2
			}],
			"uiType": 1
		}, {
			"id": 56,
			"name": "风扇温度",
			"parentId": 52,
			"siniTreeBeans": [{
				"id": 58,
				"name": "风扇温度转速曲线",
				"parentId": 56,
				"uiType": 5,
				"valueXs": ["79.96000999999997", "81.96000999999997", "83.96000999999997", "84.96000999999997", "86.96000999999997", "88.96000999999997", "91.96000999999997", "99.96000999999997"],
				"values": [
					["-0.0", "800.0", "1000.0", "1300.0", "1500.0", "1800.0", "2000.0", "2500.0"]
				]
			}],
			"uiType": 1
		}],
		"uiType": 1
	}, {
		"id": 64,
		"name": "远程油门",
		"parentId": 1516,
		"siniTreeBeans": [{
			"id": 5998,
			"name": "远程油门状态",
			"parentId": 64,
			"siniTreeBeans": [{
				"id": 65,
				"name": "启用",
				"parentId": 5998,
				"uiType": 2
			}, {
				"id": 68,
				"name": "禁用",
				"parentId": 5998,
				"uiType": 2
			}],
			"uiType": 1
		}, {
			"id": 5999,
			"name": "远程油门怠速提升值",
			"parentId": 64,
			"siniTreeBeans": [{
				"id": 66,
				"name": "远程油门怠速提升值",
				"parentId": 5999,
				"uiType": 3,
				"values": [
					["1300.0"]
				]
			}],
			"uiType": 1,
			"values": [
				["1300.0"]
			]
		}, {
			"id": 6000,
			"name": "远程油门转速曲线",
			"parentId": 64,
			"siniTreeBeans": [{
				"id": 67,
				"name": "远程油门转速曲线",
				"parentId": 6000,
				"uiType": 5,
				"valueXs": ["-0.0", "7.99560546875", "30.0048828125", "59.99755859375", "75.0", "84.99755859375", "94.9951171875", "100.0"],
				"values": [
					["850.0", "850.0", "1000.0", "1550.0", "1850.0", "2050.0", "2200.0", "2200.0"]
				]
			}],
			"uiType": 1,
			"values": [
				["850.0,850.0,1000.0,1550.0,1850.0,2050.0,2200.0,2200.0"]
			]
		}],
		"uiType": 1
	}, {
		"id": 69,
		"name": "巡航控制",
		"parentId": 1516,
		"siniTreeBeans": [{
			"id": 70,
			"name": "启用",
			"parentId": 69,
			"siniTreeBeans": [{
				"id": 71,
				"name": "巡航最高发动机转速",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["3700.0"]
				]
			}, {
				"id": 72,
				"name": "巡航最低发动机转速",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["800.0"]
				]
			}, {
				"id": 73,
				"name": "巡航最高车速",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["140.0"]
				]
			}, {
				"id": 74,
				"name": "关闭巡航控制的车速上限",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["110.0"]
				]
			}, {
				"id": 75,
				"name": "巡航激活最低车速",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["40.0"]
				]
			}, {
				"id": 76,
				"name": "关闭巡航控制的车速下限",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["35.0"]
				]
			}, {
				"id": 77,
				"name": "巡航最低档位",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["-0.0"]
				]
			}, {
				"id": 78,
				"name": "巡航车速点动调整步长",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["2.0"]
				]
			}, {
				"id": 79,
				"name": "巡航车速加速速率",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["1.600036596679129"]
				]
			}, {
				"id": 80,
				"name": "巡航车速减速速率",
				"parentId": 70,
				"uiType": 3,
				"values": [
					["1.600036596679129"]
				]
			}],
			"uiType": 2
		}, {
			"id": 81,
			"name": "禁用",
			"parentId": 69,
			"uiType": 2
		}],
		"uiType": 1
	}, {
		"id": 82,
		"name": "PTO控制",
		"parentId": 1516,
		"siniTreeBeans": [{
			"id": 83,
			"name": "启用PTO(踩离合不退出)",
			"parentId": 82,
			"siniTreeBeans": [{
				"id": 84,
				"name": "PTO控制最大转速",
				"parentId": 83,
				"uiType": 3,
				"values": [
					["PTO控制最大转速"]
				]
			}, {
				"id": 85,
				"name": "PTO控制最低转速",
				"parentId": 83,
				"uiType": 3,
				"values": [
					["1200.0"]
				]
			}, {
				"id": 86,
				"name": "PTO初始转速",
				"parentId": 83,
				"uiType": 3,
				"values": [
					["1200.0"]
				]
			}, {
				"id": 87,
				"name": "PTO退出最大车速",
				"parentId": 83,
				"uiType": 3,
				"values": [
					["PTO退出最大车速"]
				]
			}, {
				"id": 88,
				"name": "PTO加速速率",
				"parentId": 83,
				"uiType": 3,
				"values": [
					["75.0"]
				]
			}, {
				"id": 89,
				"name": "PTO减速速率",
				"parentId": 83,
				"uiType": 3,
				"values": [
					["60.0"]
				]
			}, {
				"id": 90,
				"name": "PTO点动控制调整步长",
				"parentId": 83,
				"uiType": 3,
				"values": [
					["50.0"]
				]
			}],
			"uiType": 2
		}, {
			"id": 91,
			"name": "启用PTO(踩离合退出)",
			"parentId": 82,
			"siniTreeBeans": [{
				"id": 92,
				"name": "PTO控制最大转速",
				"parentId": 91,
				"uiType": 3,
				"values": [
					["PTO控制最大转速"]
				]
			}, {
				"id": 93,
				"name": "PTO控制最低转速",
				"parentId": 91,
				"uiType": 3,
				"values": [
					["1200.0"]
				]
			}, {
				"id": 94,
				"name": "PTO初始转速",
				"parentId": 91,
				"uiType": 3,
				"values": [
					["1200.0"]
				]
			}, {
				"id": 95,
				"name": "PTO退出最大车速",
				"parentId": 91,
				"uiType": 3,
				"values": [
					["PTO退出最大车速"]
				]
			}, {
				"id": 96,
				"name": "PTO加速速率",
				"parentId": 91,
				"uiType": 3,
				"values": [
					["75.0"]
				]
			}, {
				"id": 97,
				"name": "PTO减速速率",
				"parentId": 91,
				"uiType": 3,
				"values": [
					["60.0"]
				]
			}, {
				"id": 98,
				"name": "PTO点动控制调整步长",
				"parentId": 91,
				"uiType": 3,
				"values": [
					["50.0"]
				]
			}],
			"uiType": 2
		}, {
			"id": 99,
			"name": "禁用PTO",
			"parentId": 82,
			"uiType": 2
		}],
		"uiType": 1
	}],
	"uiType": 0
}, {
	"id": 1515,
	"name": "车速/怠速/转速相关功能",
	"parentId": 0,
	"siniTreeBeans": [{
		"id": 2,
		"name": "车速传感器特性",
		"parentId": 1515,
		"siniTreeBeans": [{
			"id": 3,
			"name": "物理信号",
			"parentId": 2,
			"siniTreeBeans": [{
				"id": 4,
				"name": "每公里接收的脉冲数",
				"parentId": 3,
				"uiType": 3,
				"values": [
					["8.0"]
				]
			}, {
				"id": 5,
				"name": "传动轴每转脉冲数",
				"parentId": 3,
				"uiType": 3,
				"values": [
					["8.0"]
				]
			}],
			"uiType": 2
		}, {
			"id": 6,
			"name": "CAN信号-TCO1",
			"parentId": 2,
			"uiType": 2
		}, {
			"id": 7,
			"name": "CAN信号-CCVS",
			"parentId": 2,
			"uiType": 2
		}, {
			"id": 8,
			"name": "屏蔽信号输入",
			"parentId": 2,
			"uiType": 2
		}],
		"uiType": 1
	}, {
		"id": 60,
		"name": "怠速设置",
		"parentId": 1515,
		"siniTreeBeans": [{
			"id": 61,
			"name": "正常暖机怠速",
			"parentId": 60,
			"uiType": 3,
			"values": [
				["750.0"]
			]
		}, {
			"id": 62,
			"name": "开空调怠速",
			"parentId": 60,
			"uiType": 3,
			"values": [
				["800.0"]
			]
		}, {
			"id": 63,
			"name": "行车怠速",
			"parentId": 60,
			"uiType": 3,
			"values": [
				["800.0"]
			]
		}],
		"uiType": 1
	}, {
		"id": 100,
		"name": "车速限制",
		"parentId": 1515,
		"siniTreeBeans": [{
			"id": 101,
			"name": "启用",
			"parentId": 100,
			"siniTreeBeans": [{
				"id": 102,
				"name": "最高车速限制值",
				"parentId": 101,
				"uiType": 3,
				"values": [
					["200.0"]
				]
			}],
			"uiType": 2
		}, {
			"id": 103,
			"name": "禁用",
			"parentId": 100,
			"uiType": 2
		}],
		"uiType": 1,
		"values": [
			["禁用"]
		]
	}, {
		"id": 104,
		"name": "转速输出",
		"parentId": 1515,
		"siniTreeBeans": [{
			"id": 105,
			"name": "转速输出脉冲设置",
			"parentId": 104,
			"uiType": 3,
			"values": [
				["60.0"]
			]
		}, {
			"id": 106,
			"name": "发动机每转输出脉冲数",
			"parentId": 104,
			"uiType": 3,
			"values": [
				["10.0"]
			]
		}],
		"uiType": 1
	}, {
		"id": 117,
		"name": "辅助停机与强制怠速",
		"parentId": 1515,
		"siniTreeBeans": [{
			"id": 118,
			"name": "辅助停机",
			"parentId": 117,
			"uiType": 2
		}, {
			"id": 119,
			"name": "强制怠速",
			"parentId": 117,
			"uiType": 2
		}, {
			"id": 120,
			"name": "禁用",
			"parentId": 117,
			"uiType": 2
		}],
		"uiType": 1
	}, {
		"id": 127,
		"name": "二级车速限制",
		"parentId": 1515,
		"siniTreeBeans": [{
			"id": 131,
			"name": "禁用",
			"parentId": 127,
			"uiType": 2
		}, {
			"id": 128,
			"name": "启用",
			"parentId": 127,
			"siniTreeBeans": [{
				"id": 129,
				"name": "最高车速限制值",
				"parentId": 128,
				"uiType": 3,
				"values": [
					["200.0"]
				]
			}, {
				"id": 130,
				"name": "二级车速限制值",
				"parentId": 128,
				"uiType": 3,
				"values": [
					["150.0"]
				]
			}],
			"uiType": 2
		}],
		"uiType": 1
	}],
	"uiType": 0
}, {
	"id": 132,
	"name": "调整故障码项目",
	"parentId": 0,
	"siniTreeBeans": [{
		"faultCodeBeans": [{
			"code": "P0100",
			"desc": "空气流量计(HFM)供电电压故障",
			"faultLabel": "DFC_DisblMsk.DFC_AFSBattErr_C",
			"state": false
		}, {
			"code": "P0101",
			"desc": "空气流量计(HFM)漂移修正检测：载荷时的修正值和怠速修正值偏差超出限值",
			"faultLabel": "DFC_DisblMsk.DFC_AFSDrftAdjPlausMax_C",
			"state": false
		}, {
			"code": "P0101",
			"desc": "空气流量计(HFM)漂移修正检测：怠速时的修正量超出限值，并且载荷时的修正值低于限值",
			"faultLabel": "DFC_DisblMsk.DFC_AFSDrftAdjPlausNPL_C",
			"state": false
		}, {
			"code": "P0101",
			"desc": "空气流量计(HFM)怠速工况偏移修正量高于上限值",
			"faultLabel": "DFC_DisblMsk.DFC_AFSDrftIdlAdjVal_C",
			"state": false
		}, {
			"code": "P0101",
			"desc": "空气流量计(HFM)负荷工况偏移修正量高于上限值",
			"faultLabel": "DFC_DisblMsk.DFC_AFSDrftLdAdjVal_C",
			"state": false
		}, {
			"code": "P0101",
			"desc": "空气流量计(HFM)偏差值高于上限值",
			"faultLabel": "DFC_DisblMsk.DFC_AFSSetyDrftMax_C",
			"state": false
		}, {
			"code": "P0101",
			"desc": "空气流量计(HFM)偏差值低于下限值",
			"faultLabel": "DFC_DisblMsk.DFC_AFSSetyDrftMin_C",
			"state": false
		}, {
			"code": "P0103",
			"desc": "空气流量计(HFM)硬件故障",
			"faultLabel": "DFC_DisblMsk.DFC_AFSSigErr_C",
			"state": false
		}, {
			"code": "P0103",
			"desc": "空气流量计(HFM)周期信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_AFSSRCRawMax_C",
			"state": false
		}, {
			"code": "P0102",
			"desc": "空气流量计(HFM)周期信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_AFSSRCRawMin_C",
			"state": false
		}, {
			"code": "P0645",
			"desc": "空调压缩机线路开路",
			"faultLabel": "DFC_DisblMsk.DFC_AirCCmprOL_C",
			"state": false
		}, {
			"code": "P0645",
			"desc": "电控单元(ECU)内空调压缩机驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_AirCCmprOvrTemp_C",
			"state": false
		}, {
			"code": "P0645",
			"desc": "可变排量空调压缩机驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_AirCCmprRedTrqOL_C",
			"state": false
		}, {
			"code": "P0645",
			"desc": "可变排量空调压缩机驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_AirCCmprRedTrqOvrTemp_C",
			"state": false
		}, {
			"code": "P0647",
			"desc": "可变排量空调压缩机驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_AirCCmprRedTrqSCB_C",
			"state": false
		}, {
			"code": "P0646",
			"desc": "可变排量空调压缩机驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_AirCCmprRedTrqSCG_C",
			"state": false
		}, {
			"code": "P0647",
			"desc": "空调压缩机驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_AirCCmprSCB_C",
			"state": false
		}, {
			"code": "P0646",
			"desc": "空调压缩机驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_AirCCmprSCG_C",
			"state": false
		}, {
			"code": "U0424",
			"desc": "空调开关CAN信号不可信",
			"faultLabel": "DFC_DisblMsk.DFC_AirCSwtNpl_C",
			"state": false
		}, {
			"code": "U0466",
			"desc": "空调开关CAN信号接收超时（在规定的时间内未接收到空调开关CAN消息）",
			"faultLabel": "DFC_DisblMsk.DFC_AirCSwtSig_C",
			"state": false
		}, {
			"code": "P0101",
			"desc": "再生模式下空气设定量与实际新鲜进气量的差值高于上限值（新鲜进气量过小）",
			"faultLabel": "DFC_DisblMsk.DFC_AirCtlGovDvtEOMMax_C",
			"state": false
		}, {
			"code": "P0101",
			"desc": "再生模式下空气设定量与实际新鲜进气量的差值低过下限值（新鲜进气量过大）",
			"faultLabel": "DFC_DisblMsk.DFC_AirCtlGovDvtEOMMin_C",
			"state": false
		}, {
			"code": "P0402",
			"desc": "空气设定量与实际新鲜进气量的差值高于上限值（新鲜进气量过小）",
			"faultLabel": "DFC_DisblMsk.DFC_AirCtlGovDvtMax_C",
			"state": false
		}, {
			"code": "P0401",
			"desc": "空气设定量与实际新鲜进气量的差值低于下限值（新鲜进气量过大）",
			"faultLabel": "DFC_DisblMsk.DFC_AirCtlGovDvtMin_C",
			"state": false
		}, {
			"code": "P0100",
			"desc": "废气再循环（EGR）控制从再生状态切换到普通状态的时间过长",
			"faultLabel": "DFC_DisblMsk.DFC_AirCtlRmpTOut_C",
			"state": false
		}, {
			"code": "P2609",
			"desc": "进气加热格栅在关闭期间电池电压信号超过限值",
			"faultLabel": "DFC_DisblMsk.DFC_AirHt_TstOffHi_C",
			"state": false
		}, {
			"code": "P2609",
			"desc": "进气加热格栅在关闭期间电池电压信号低于限值",
			"faultLabel": "DFC_DisblMsk.DFC_AirHt_TstOffLo_C",
			"state": false
		}, {
			"code": "P2609",
			"desc": "进气加热格栅在开启期间电池电压信号超过限值",
			"faultLabel": "DFC_DisblMsk.DFC_AirHt_TstOnHi_C",
			"state": false
		}, {
			"code": "P2609",
			"desc": "进气加热格栅在开启期间电池电压信号低于限值",
			"faultLabel": "DFC_DisblMsk.DFC_AirHt_TstOnLo_C",
			"state": false
		}, {
			"code": "P2609",
			"desc": "进气加热格栅加热开关常吸合",
			"faultLabel": "DFC_DisblMsk.DFC_AirHtStickOn_C",
			"state": false
		}, {
			"code": "P1000",
			"desc": "系统冷启动时温度传感器可信性故障(组合0)",
			"faultLabel": "DFC_DisblMsk.DFC_AirTMonPlaus_0_C",
			"state": false
		}, {
			"code": "P1001",
			"desc": "系统冷启动时温度传感器可信性故障(组合1)",
			"faultLabel": "DFC_DisblMsk.DFC_AirTMonPlaus_1_C",
			"state": false
		}, {
			"code": "P1002",
			"desc": "系统冷启动时温度传感器可信性故障(组合2)",
			"faultLabel": "DFC_DisblMsk.DFC_AirTMonPlaus_2_C",
			"state": false
		}, {
			"code": "P1003",
			"desc": "系统冷启动时温度传感器可信性故障(组合3)",
			"faultLabel": "DFC_DisblMsk.DFC_AirTMonPlaus_3_C",
			"state": false
		}, {
			"code": "P1004",
			"desc": "系统冷启动时温度传感器可信性故障(组合4)",
			"faultLabel": "DFC_DisblMsk.DFC_AirTMonPlaus_4_C",
			"state": false
		}, {
			"code": "P1005",
			"desc": "系统冷启动时温度传感器可信性故障",
			"faultLabel": "DFC_DisblMsk.DFC_AirTMonPlausTot_C",
			"state": false
		}, {
			"code": "P0659",
			"desc": "电控单元(ECU)内部主继电器0短路到电源",
			"faultLabel": "DFC_DisblMsk.DFC_ARlySCB_0_C",
			"state": true
		}, {
			"code": "P2671",
			"desc": "电控单元(ECU)内部主继电器1短路到电源",
			"faultLabel": "DFC_DisblMsk.DFC_ARlySCB_1_C",
			"state": true
		}, {
			"code": "P0658",
			"desc": "电控单元(ECU)内部主继电器0短路到地",
			"faultLabel": "DFC_DisblMsk.DFC_ARlySCG_0_C",
			"state": true
		}, {
			"code": "P2670",
			"desc": "电控单元(ECU)内部主继电器1短路到地",
			"faultLabel": "DFC_DisblMsk.DFC_ARlySCG_1_C",
			"state": true
		}, {
			"code": "P0563",
			"desc": "蓄电池电压过高",
			"faultLabel": "DFC_DisblMsk.DFC_BattUHi_C",
			"state": true
		}, {
			"code": "P0562",
			"desc": "蓄电池电压过低",
			"faultLabel": "DFC_DisblMsk.DFC_BattULo_C",
			"state": true
		}, {
			"code": "P0563",
			"desc": "电控单元(ECU)内部蓄电池电压信号过高",
			"faultLabel": "DFC_DisblMsk.DFC_BattUSRCMax_C",
			"state": true
		}, {
			"code": "P0562",
			"desc": "电控单元(ECU)内部蓄电池电压信号过低",
			"faultLabel": "DFC_DisblMsk.DFC_BattUSRCMin_C",
			"state": true
		}, {
			"code": "P0504",
			"desc": "刹车信号不合理导致的巡航功能故障",
			"faultLabel": "DFC_DisblMsk.DFC_BrkCrCtlLmp_C",
			"state": false
		}, {
			"code": "P0504",
			"desc": "无有效刹车信号导致的巡航功能故障",
			"faultLabel": "DFC_DisblMsk.DFC_BrkCrCtlRls_C",
			"state": false
		}, {
			"code": "P0504",
			"desc": "刹车信号不可信，主刹信号和副刹信号不同时变化",
			"faultLabel": "DFC_DisblMsk.DFC_BrkNpl_C",
			"state": false
		}, {
			"code": "P0504",
			"desc": "刹车(单)信号合理性故障",
			"faultLabel": "DFC_DisblMsk.DFC_BrkNplSngSwt_C",
			"state": false
		}, {
			"code": "P0571",
			"desc": "刹车信号故障（CAN信号接收超时）",
			"faultLabel": "DFC_DisblMsk.DFC_BrkSig_C",
			"state": false
		}, {
			"code": "U0073",
			"desc": "CAN A被动故障",
			"faultLabel": "DFC_DisblMsk.DFC_BusDiagBusOffErrPasNodeA_C",
			"state": true
		}, {
			"code": "U0073",
			"desc": "CAN B被动故障",
			"faultLabel": "DFC_DisblMsk.DFC_BusDiagBusOffErrPasNodeB_C",
			"state": false
		}, {
			"code": "U0073",
			"desc": "CAN C被动故障",
			"faultLabel": "DFC_DisblMsk.DFC_BusDiagBusOffErrPasNodeC_C",
			"state": false
		}, {
			"code": "U0073",
			"desc": "CAN D被动故障",
			"faultLabel": "DFC_DisblMsk.DFC_BusDiagBusOffErrPasNodeD_C",
			"state": false
		}, {
			"code": "U0073",
			"desc": "CAN A通讯中断",
			"faultLabel": "DFC_DisblMsk.DFC_BusDiagBusOffNodeA_C",
			"state": true
		}, {
			"code": "U0073",
			"desc": "CAN B通讯中断",
			"faultLabel": "DFC_DisblMsk.DFC_BusDiagBusOffNodeB_C",
			"state": false
		}, {
			"code": "U0073",
			"desc": "CAN C通讯中断",
			"faultLabel": "DFC_DisblMsk.DFC_BusDiagBusOffNodeC_C",
			"state": false
		}, {
			"code": "U0073",
			"desc": "CAN D通讯中断",
			"faultLabel": "DFC_DisblMsk.DFC_BusDiagBusOffNodeD_C",
			"state": false
		}, {
			"code": "P0116",
			"desc": "水温传感器绝对值合理性检测故障(水温在一定时间内未达到门槛值)",
			"faultLabel": "DFC_DisblMsk.DFC_CEngDsTAbsTst_C",
			"state": false
		}, {
			"code": "P0116",
			"desc": "水温传感器动态值合理性检测故障(水温在一定时间内上升值未达到门槛值)",
			"faultLabel": "DFC_DisblMsk.DFC_CEngDsTDynTst_C",
			"state": false
		}, {
			"code": "U0116",
			"desc": "水温CAN帧接收超时",
			"faultLabel": "DFC_DisblMsk.DFC_CEngDsTSig_C",
			"state": false
		}, {
			"code": "P0118",
			"desc": "水温传感器电压高于上限值",
			"faultLabel": "DFC_DisblMsk.DFC_CEngDsTSRCMax_C",
			"state": true
		}, {
			"code": "P0117",
			"desc": "水温传感器电压低于下限值",
			"faultLabel": "DFC_DisblMsk.DFC_CEngDsTSRCMin_C",
			"state": true
		}, {
			"code": "P0116",
			"desc": "水温传感器可信性故障",
			"faultLabel": "DFC_DisblMsk.DFC_CEngDsTVDPlaus_C",
			"state": false
		}, {
			"code": "P0704",
			"desc": "离合器信号不可信",
			"faultLabel": "DFC_DisblMsk.DFC_ClthNpl_C",
			"state": false
		}, {
			"code": "U1400",
			"desc": "离合器信号故障(CAN信号出错)",
			"faultLabel": "DFC_DisblMsk.DFC_ClthSig_C",
			"state": false
		}, {
			"code": "P1038",
			"desc": "增压器保护调用了扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_CoETSBstPrtTrqLim_C",
			"state": true
		}, {
			"code": "P1039",
			"desc": "发动机保护调用了扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_CoETSEngPrtTrqLim_C",
			"state": true
		}, {
			"code": "P1040",
			"desc": "喷射系统调用了扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_CoETSInjSysTrqLim_C",
			"state": true
		}, {
			"code": "P1006",
			"desc": "发动机扭矩限制被调用",
			"faultLabel": "DFC_DisblMsk.DFC_CoETSLimInfo_C",
			"state": true
		}, {
			"code": "P1041",
			"desc": "发动机制动调用了扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_CoETSNTCTrqLim_C",
			"state": true
		}, {
			"code": "P1042",
			"desc": "颗粒捕集器调用了扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_CoETSPDiffTrqLim_C",
			"state": true
		}, {
			"code": "P1043",
			"desc": "性能限制功能调用了扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_CoETSPrfmLimTrqLim_C",
			"state": true
		}, {
			"code": "P1044",
			"desc": "烟度限制功能调用了扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_CoETSSmkTrqLim_C",
			"state": true
		}, {
			"code": "U0100",
			"desc": "ACK CAN应答信号发送超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComACKTO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "外部环境(AmbCon) CAN信号帧传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComAmbConTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "上游氮氧传感器CAN信号帧长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComAT1IG1DLC_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "上游氮氧传感器 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComAT1IG1TO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "上游氮氧传感器CAN信号修正帧1 接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComAT1IGC1TO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "上游氮氧传感器CAN信号修正帧2接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComAT1IGC2TO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "下游氮氧传感器CAN信号帧长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComAT1OG1DLC_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "下游氮氧传感器 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComAT1OG1TO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "下游氮氧传感器CAN信号修正帧1 接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComAT1OGC1TO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "下游氮氧传感器CAN信号修正帧2接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComAT1OGC2TO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "DM19Ds CAN应答信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM19DsAck_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "DM19Ds CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM19DsBAM2PKTTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "DM19Ds CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM19DsBAMTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "DM19Ds CAN信息超时故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM19DsPKT2PKTTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "DM19Us CAN应答信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM19UsAck_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "DM19Us CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM19UsBAM2PKTTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "DM19Us CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM19UsBAMTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "DM19Us CAN信息超时故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM19UsPKT2PKTTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "尿素喷射控制器(DCU) CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM1DCUBAM2PCKTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "尿素喷射控制器(DCU) CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM1DCUPCK2PCKTO_C",
			"state": false
		}, {
			"code": "P1400",
			"desc": "OBD相关故障：用于尿素喷射控制单元(DCU)激活扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM1DCUSPN1_C",
			"state": false
		}, {
			"code": "P1401",
			"desc": "OBD相关故障：用于尿素喷射控制单元(DCU)激活扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM1DCUSPN2_C",
			"state": false
		}, {
			"code": "P1402",
			"desc": "OBD相关故障：用于尿素喷射控制单元(DCU)激活扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM1DCUSPN3_C",
			"state": false
		}, {
			"code": "P1403",
			"desc": "OBD相关故障：用于尿素喷射控制单元(DCU)激活扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM1DCUSPN4_C",
			"state": false
		}, {
			"code": "P1404",
			"desc": "OBD相关故障：用于尿素喷射控制单元(DCU)激活扭矩限制",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM1DCUSPN5_C",
			"state": false
		}, {
			"code": "P1405",
			"desc": "DM1DCU CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComDM1DCUTO_C",
			"state": false
		}, {
			"code": "U0129",
			"desc": "EBC1 CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComEBC1DLC_C",
			"state": false
		}, {
			"code": "U0129",
			"desc": "EBC1 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComEBC1TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "EEC1 CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComEEC1TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "EEC2 CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComEEC2TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "电控单元(ECU)与氮氧传感器之间的 CAN通讯中断",
			"faultLabel": "DFC_DisblMsk.DFC_ComEEC3TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "EFL_P1 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComEFL_P1TO_C",
			"state": false
		}, {
			"code": "U1100",
			"desc": "EBC(电子制动控制器)要求关闭发动机(非具体故障，只是外部请求指示)",
			"faultLabel": "DFC_DisblMsk.DFC_ComEngShOffEBC1_C",
			"state": true
		}, {
			"code": "U0100",
			"desc": "EngTemp CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComEngTempTO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "ERC1 CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComERC1TO_C",
			"state": false
		}, {
			"code": "U0103",
			"desc": "ETC1 CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComETC1DLC_C",
			"state": false
		}, {
			"code": "U0103",
			"desc": "ETC1 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComETC1TO_C",
			"state": false
		}, {
			"code": "U0291",
			"desc": "ETC2 CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComETC2DLC_C",
			"state": false
		}, {
			"code": "U0291",
			"desc": "ETC2 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComETC2TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "FIEco CAN信号传输超时(即信号丢失)",
			"faultLabel": "DFC_DisblMsk.DFC_ComFlEcoTO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "INCON CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComIC1TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "FIC CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComLFCTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxCorGnCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxCorGnCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxCorGnDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxCorGnDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxCorOfsCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxCorOfsCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxCorOfsDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxCorOfsDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxCorPresLamCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxCorPresLamCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxCorPresLamDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxCorPresLamDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxCorPresNOxCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxCorPresNOxCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxCorPresNOxDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxCorPresNOxDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxHtrRatCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxHtrRatCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxHtrRatDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxHtrRatDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxNH3CorCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxNH3CorCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxNH3CorDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxNH3CorDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxNO2CorCat2DS CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxNO2CorCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxNO2CorDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxNO2CorDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxNOCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxNoCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxNOMCatDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxNoMCatDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxSenDsRxBAM CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxSenDsRxBAMTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "NOxSenUsRxBAM CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComNOxSenUsRxBAMTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "O2NoCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComO2NoCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "O2NoMCatDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComO2NoMCatDsSAE_C",
			"state": false
		}, {
			"code": "U110E",
			"desc": "PROSCR1 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComPROSCR1TO_C",
			"state": false
		}, {
			"code": "U110F",
			"desc": "PROSCR2 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComPROSCR2TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "BAM CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComRCBAMTO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "CAN CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComRCPACTO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "RxCCVS CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComRxCCVSDLC_C",
			"state": false
		}, {
			"code": "U0104",
			"desc": "RxCCVS CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComRxCCVSTO_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "SensNOxNoMCatDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComSensNOxNoMCatDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "SensNOxStabNoCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComSensNOxStabNoCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "SensO2NoMCatDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComSensO2NoMCatDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "SensO2StabNoCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComSensO2StabNoCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "SensPwrNOMCatDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComSensPwrNoMCatDsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "SensPwrRngNoCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComSensPwrRngNoCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "SensTempNoCat2Ds CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComSensTempNoCat2DsSAE_C",
			"state": false
		}, {
			"code": "U0113",
			"desc": "SensTempNoMCatDs CAN信息内容超出SAE规定合理范围",
			"faultLabel": "DFC_DisblMsk.DFC_ComSensTempNoMCatDsSAE_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "ShutDwn CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComShutDwnTO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "TCO1 CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTCO1DLC_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "TCO1 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTCO1TO_C",
			"state": false
		}, {
			"code": "U1103",
			"desc": "电控单元(ECU)与CAN仪表之间的通讯断开",
			"faultLabel": "DFC_DisblMsk.DFC_ComTI1TO_C",
			"state": false
		}, {
			"code": "U0101",
			"desc": "TimeDate CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTimeDateDLC_C",
			"state": false
		}, {
			"code": "U1101",
			"desc": "TimeDate CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTimeDateTO_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1AE信息帧主动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1AEAct_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1AE信息帧被动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1AEPas_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1AR CAN信号主动接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1ARAct_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1AR CAN信号被动接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1ARPas_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1DE信息帧主动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1DEAct_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1DE信息帧被动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1DEPas_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1DR CAN信号主动接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1DRAct_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1DR CAN信号被动接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1DRPas_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1PE信息帧主动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1PEAct_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1PE信息帧被动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1PEPas_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1TE信息帧主动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1TEAct_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1TE信息帧被动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1TEPas_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1TR CAN信号主动接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1TRAct_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1TR CAN信号被动接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1TRPas_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1VE信息帧主动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1VEAct_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1VE信息帧被动丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1VEPas_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1VR CAN信号主动接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1VRAct_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1VR CAN信号被动接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTOTSC1VRPas_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1AE CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1AEDLC_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1AE CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1AETO_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1AR CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1ARDLC_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1AR CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1ARTO_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1DE CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1DEDLC_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1DE CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1DETO_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1DR CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1DRDLC_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1DR CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1DRTO_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1PE CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1PEDLC_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1PE CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1PETO_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1TE CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1TEDLC_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1TE CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1TETO_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1TR CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1TRDLC_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1TR CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1TRTO_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1VE CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1VEDLC_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1VE CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1VETO_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1VR CAN接收帧信号长度出错",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1VRDLC_C",
			"state": false
		}, {
			"code": "U0121",
			"desc": "TSC1VR CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTSC1VRTO_C",
			"state": false
		}, {
			"code": "U0104",
			"desc": "TxCCVS CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTxCCVSTO_C",
			"state": false
		}, {
			"code": "U1105",
			"desc": "TxPGNRQGlb CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTxPGNRQGlbTO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "TxPGNRQ CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComTxPGNRQTO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "UAA1 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComUAA1TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "UAA2 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComUAA2TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "UAA3 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComUAA3TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "UAA4 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComUAA4TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "UAA5 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComUAA5TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "UAA6 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComUAA6TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "UAA7 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComUAA7TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "UAA8 CAN信号接收超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComUAA8TO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "VD CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComVDTO_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "VEP1 CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComVEP1TO_C",
			"state": false
		}, {
			"code": "U1106",
			"desc": "WFI CAN信号传输超时（即信号丢失）",
			"faultLabel": "DFC_DisblMsk.DFC_ComWFITO_C",
			"state": false
		}, {
			"code": "P1007",
			"desc": "整车性能限制功能激活",
			"faultLabel": "DFC_DisblMsk.DFC_CoVehPrfmLimAct_C",
			"state": true
		}, {
			"code": "P0575",
			"desc": "巡航控制键信号不合理",
			"faultLabel": "DFC_DisblMsk.DFC_CrCUIModeNpl_C",
			"state": false
		}, {
			"code": "P0607",
			"desc": "电控单元(ECU)内部芯片Cy146通讯故障",
			"faultLabel": "DFC_DisblMsk.DFC_Cy146SpiCom1_C",
			"state": true
		}, {
			"code": "P0607",
			"desc": "电控单元(ECU)内部芯片Cy320通讯故障",
			"faultLabel": "DFC_DisblMsk.DFC_Cy320SpiCom_C",
			"state": true
		}, {
			"code": "P0563",
			"desc": "电池电压过高导致相关部件停止工作",
			"faultLabel": "DFC_DisblMsk.DFC_DevLibBattUHi_C",
			"state": true
		}, {
			"code": "P0562",
			"desc": "电池电压过低导致相关部件停止工作",
			"faultLabel": "DFC_DisblMsk.DFC_DevLibBattULo_C",
			"state": true
		}, {
			"code": "P1500",
			"desc": "发动机制动不合理",
			"faultLabel": "DFC_DisblMsk.DFC_EBrkPreSelPlaus_C",
			"state": false
		}, {
			"code": "P2536",
			"desc": "发动机舱停机按钮被长时间按下",
			"faultLabel": "DFC_DisblMsk.DFC_ECBtnStopSig_C",
			"state": true
		}, {
			"code": "P2536",
			"desc": "发动机舱启动按钮被长时间按下",
			"faultLabel": "DFC_DisblMsk.DFC_ECBtnStrtSig_C",
			"state": true
		}, {
			"code": "P0475",
			"desc": "发动机缸内制动阀(ECR)驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_ECRVlvOL_C",
			"state": false
		}, {
			"code": "P0475",
			"desc": "电控单元(ECU)内发动机缸内制动阀(ECR)驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_ECRVlvOvrTemp_C",
			"state": false
		}, {
			"code": "P0478",
			"desc": "发动机缸内制动阀(ECR)驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_ECRVlvSCB_C",
			"state": false
		}, {
			"code": "P0477",
			"desc": "发动机缸内制动阀(ECR)驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_ECRVlvSCG_C",
			"state": false
		}, {
			"code": "P062F",
			"desc": "电控单元(ECU)内存储单元EEPROM区擦除故障",
			"faultLabel": "DFC_DisblMsk.DFC_EEPEraseErr_C",
			"state": false
		}, {
			"code": "P062F",
			"desc": "电控单元(ECU)内存储单元EEPROM区读取故障",
			"faultLabel": "DFC_DisblMsk.DFC_EEPRdErr_C",
			"state": false
		}, {
			"code": "P062F",
			"desc": "电控单元(ECU)内存储单元EEPROM区编写故障",
			"faultLabel": "DFC_DisblMsk.DFC_EEPWrErr_C",
			"state": false
		}, {
			"code": "P0403",
			"desc": "废气再循环（EGR）阀工作电流受限",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvCurrLim_C",
			"state": false
		}, {
			"code": "P0404",
			"desc": "废气再循环（EGR）阀全关位置的自学习值超出限值",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvDrftClsd_C",
			"state": false
		}, {
			"code": "P0404",
			"desc": "废气再循环（EGR）阀全开位置的自学习值超出阀的机械点",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvDrftOpn_C",
			"state": false
		}, {
			"code": "P0404",
			"desc": "废气再循环（EGR）阀机械关闭位置的自学习值偏移超出阀的机械点",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvDrftRng_C",
			"state": false
		}, {
			"code": "P0404",
			"desc": "废气再循环（EGR）阀控制偏差超过限值（在冷启动时由于温度过低导致）",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvGovDvtCld_C",
			"state": false
		}, {
			"code": "P0401",
			"desc": "废气再循环（EGR）阀开度设定值与实际值的差值高于上限值（正偏差过大）",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvGovDvtMax_C",
			"state": false
		}, {
			"code": "P0402",
			"desc": "废气再循环（EGR）阀开度设定值与实际值的差值差值低于下限值（负偏差过大）",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvGovDvtMin_C",
			"state": false
		}, {
			"code": "P0401",
			"desc": "废气再循环（EGR）阀卡在关闭状态",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvJamVlvClsd_C",
			"state": false
		}, {
			"code": "P0402",
			"desc": "废气再循环（EGR）阀卡在开启状态",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvJamVlvOpn_C",
			"state": false
		}, {
			"code": "P0404",
			"desc": "自学习过程中，废气再循环（EGR）阀全关位置的自学习值与本轮第一次的值偏移过大",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvLonTimeDrftClsd_C",
			"state": false
		}, {
			"code": "P0404",
			"desc": "自学习过程中，废气再循环（EGR）阀全开位置的自学习值与本轮第一次的值偏移过大",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvLonTimeDrftOpn_C",
			"state": false
		}, {
			"code": "P0403",
			"desc": "废气再循环（EGR）阀驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvOL_C",
			"state": false
		}, {
			"code": "P0403",
			"desc": "电控单元(ECU）内废气再循环（EGR）阀驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvOvrTemp_C",
			"state": false
		}, {
			"code": "P0409",
			"desc": "废气再循环（EGR）阀位置传感器物理值超过上限",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvPhysSRCMax_C",
			"state": false
		}, {
			"code": "P0409",
			"desc": "废气再循环（EGR）阀位置传感器物理值低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvPhysSRCMin_C",
			"state": false
		}, {
			"code": "P0403",
			"desc": "废气再循环（EGR）阀驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvSCB_C",
			"state": false
		}, {
			"code": "P0403",
			"desc": "废气再循环（EGR）阀驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvSCG_C",
			"state": false
		}, {
			"code": "P0404",
			"desc": "自学习过程中，废气再循环（EGR）阀全关位置的值短时间偏移超过限值",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvShrtTimeDrftClsd_C",
			"state": false
		}, {
			"code": "P0404",
			"desc": "自学习过程中，废气再循环（EGR）阀全开位置的值短时间偏移超过限值",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvShrtTimeDrftOpn_C",
			"state": false
		}, {
			"code": "P0406",
			"desc": "废气再循环（EGR）阀位置传感器电压高于上限值",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvSRCMax_C",
			"state": false
		}, {
			"code": "P0405",
			"desc": "废气再循环（EGR）阀位置传感器电压低于下限值",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvSRCMin_C",
			"state": false
		}, {
			"code": "P0409",
			"desc": "废气再循环（EGR）阀驱动电路接触不良",
			"faultLabel": "DFC_DisblMsk.DFC_EGRVlvTmpErr_C",
			"state": false
		}, {
			"code": "P1008",
			"desc": "喷油切断请求指示",
			"faultLabel": "DFC_DisblMsk.DFC_EngICO_C",
			"state": true
		}, {
			"code": "P0219",
			"desc": "发动机超速指示",
			"faultLabel": "DFC_DisblMsk.DFC_EngPrtOvrSpd_C",
			"state": true
		}, {
			"code": "P1009",
			"desc": "双质量飞轮的转速保护指示",
			"faultLabel": "DFC_DisblMsk.DFC_EngPrtTMFWShOff_C",
			"state": false
		}, {
			"code": "P100A",
			"desc": "转速输出驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_EngSpdOL_C",
			"state": false
		}, {
			"code": "P100B",
			"desc": "电控单元(ECU)内转速输出驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_EngSpdOvrTemp_C",
			"state": false
		}, {
			"code": "P100C",
			"desc": "转速输出驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_EngSpdSCB_C",
			"state": false
		}, {
			"code": "P100D",
			"desc": "转速输出驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_EngSpdSCG_C",
			"state": false
		}, {
			"code": "U1401",
			"desc": "来自CAN总线的大气压力信号故障",
			"faultLabel": "DFC_DisblMsk.DFC_EnvPSig_C",
			"state": false
		}, {
			"code": "P2229",
			"desc": "大气压力传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_EnvPSRCMax_C",
			"state": true
		}, {
			"code": "P2228",
			"desc": "大气压力传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_EnvPSRCMin_C",
			"state": true
		}, {
			"code": "P0071",
			"desc": "环境温度传感器信号不可信",
			"faultLabel": "DFC_DisblMsk.DFC_EnvTAmbTempMon_C",
			"state": false
		}, {
			"code": "P0073",
			"desc": "环境温度传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_EnvTSRCMax_C",
			"state": false
		}, {
			"code": "P0072",
			"desc": "环境温度传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_EnvTSRCMin_C",
			"state": false
		}, {
			"code": "P0341",
			"desc": "凸轮轴信号有干扰或信号丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_EpmCaSI1ErrSig_C",
			"state": true
		}, {
			"code": "P0340",
			"desc": "没有检测到凸轮轴信号",
			"faultLabel": "DFC_DisblMsk.DFC_EpmCaSI1NoSig_C",
			"state": true
		}, {
			"code": "P0340",
			"desc": "凸轮轴信号与曲轴信号偏差过大",
			"faultLabel": "DFC_DisblMsk.DFC_EpmCaSI1OfsErr_C",
			"state": true
		}, {
			"code": "P0336",
			"desc": "曲轴信号有干扰或信号丢失故障",
			"faultLabel": "DFC_DisblMsk.DFC_EpmCrSErrSig_C",
			"state": true
		}, {
			"code": "P0335",
			"desc": "没有检测到曲轴信号",
			"faultLabel": "DFC_DisblMsk.DFC_EpmCrSNoSig_C",
			"state": true
		}, {
			"code": "P0475",
			"desc": "排气制动阀驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_ExhFlpLPOL_C",
			"state": true
		}, {
			"code": "P0475",
			"desc": "电控单元(ECU)内排气制动阀驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_ExhFlpLPOvrTemp_C",
			"state": true
		}, {
			"code": "P0478",
			"desc": "排气制动阀驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_ExhFlpLPSCB_C",
			"state": true
		}, {
			"code": "P0477",
			"desc": "排气制动阀驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_ExhFlpLPSCG_C",
			"state": true
		}, {
			"code": "P0476",
			"desc": "排气制动阀状态反馈信号线信号在上电自检过程中故障",
			"faultLabel": "DFC_DisblMsk.DFC_ExhFlpLPStLnNpl_C",
			"state": false
		}, {
			"code": "P0475",
			"desc": "排气制动阀状态反馈信号线信号在正常运行过程中故障",
			"faultLabel": "DFC_DisblMsk.DFC_ExhFlpLPStLnSig_C",
			"state": false
		}, {
			"code": "P0480",
			"desc": "开关型低速风扇控制电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_FanDIOOL_0_C",
			"state": false
		}, {
			"code": "P0480",
			"desc": "开关型高速风扇控制电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_FanDIOOL_1_C",
			"state": false
		}, {
			"code": "P0480",
			"desc": "电控单元(ECU)内开关型低速风扇控制驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_FanDIOOvrTemp_0_C",
			"state": false
		}, {
			"code": "P0480",
			"desc": "电控单元(ECU)内开关型高速风扇控制驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_FanDIOOvrTemp_1_C",
			"state": false
		}, {
			"code": "P0692",
			"desc": "开关型低速风扇控制电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_FanDIOSCB_0_C",
			"state": false
		}, {
			"code": "P0692",
			"desc": "开关型高速风扇控制电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_FanDIOSCB_1_C",
			"state": false
		}, {
			"code": "P0691",
			"desc": "开关型低速风扇控制电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_FanDIOSCG_0_C",
			"state": false
		}, {
			"code": "P0691",
			"desc": "开关型高速风扇控制电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_FanDIOSCG_1_C",
			"state": false
		}, {
			"code": "P0481",
			"desc": "无级型风扇驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_FanPWMOL_C",
			"state": false
		}, {
			"code": "P0481",
			"desc": "电控单元(ECU)内无级型风扇驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_FanPWMOvrTemp_C",
			"state": false
		}, {
			"code": "P0694",
			"desc": "无级型风扇驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_FanPWMSCB_C",
			"state": false
		}, {
			"code": "P0693",
			"desc": "无级型风扇驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_FanPWMSCG_C",
			"state": false
		}, {
			"code": "P0480",
			"desc": "风扇转速传感器（频率信号）周期过长",
			"faultLabel": "DFC_DisblMsk.DFC_FanSpdLonPer_C",
			"state": false
		}, {
			"code": "P0495",
			"desc": "风扇转速太高",
			"faultLabel": "DFC_DisblMsk.DFC_FanSpdSRCHigh_C",
			"state": false
		}, {
			"code": "P0494",
			"desc": "风扇转速太低",
			"faultLabel": "DFC_DisblMsk.DFC_FanSpdSRCLow_C",
			"state": false
		}, {
			"code": "P0611",
			"desc": "发火顺序第1缸油量修正(FBC)超限值",
			"faultLabel": "DFC_DisblMsk.DFC_FBCMon_0_C",
			"state": false
		}, {
			"code": "P0611",
			"desc": "发火顺序第2缸油量修正(FBC)超限值",
			"faultLabel": "DFC_DisblMsk.DFC_FBCMon_1_C",
			"state": false
		}, {
			"code": "P0611",
			"desc": "发火顺序第3缸油量修正(FBC)超限值",
			"faultLabel": "DFC_DisblMsk.DFC_FBCMon_2_C",
			"state": false
		}, {
			"code": "P0611",
			"desc": "发火顺序第4缸油量修正(FBC)超限值",
			"faultLabel": "DFC_DisblMsk.DFC_FBCMon_3_C",
			"state": false
		}, {
			"code": "P0611",
			"desc": "发火顺序第5缸油量修正(FBC)超限值",
			"faultLabel": "DFC_DisblMsk.DFC_FBCMon_4_C",
			"state": false
		}, {
			"code": "P0611",
			"desc": "发火顺序第6缸油量修正(FBC)超限值",
			"faultLabel": "DFC_DisblMsk.DFC_FBCMon_5_C",
			"state": false
		}, {
			"code": "P1046",
			"desc": "油滤堵塞传感器电压信号过高",
			"faultLabel": "DFC_DisblMsk.DFC_FlFCDetSRCMax_C",
			"state": false
		}, {
			"code": "P1047",
			"desc": "油滤堵塞传感器电压信号过低",
			"faultLabel": "DFC_DisblMsk.DFC_FlFCDetSRCMin_C",
			"state": false
		}, {
			"code": "P1048",
			"desc": "油滤堵塞故障",
			"faultLabel": "DFC_DisblMsk.DFC_FlFltCtlClogDet_C",
			"state": false
		}, {
			"code": "P1049",
			"desc": "油滤堵塞传感器信号不合理",
			"faultLabel": "DFC_DisblMsk.DFC_FlFltCtlClogDetPlaus_C",
			"state": false
		}, {
			"code": "P1032",
			"desc": "燃油滤清加热器驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_FlFltHtOL_C",
			"state": false
		}, {
			"code": "P1033",
			"desc": "电控单元(ECU)燃油滤清加热器驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_FlFltHtOvrTemp_C",
			"state": false
		}, {
			"code": "P1034",
			"desc": "燃油滤清加热器驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_FlFltHtSCB_C",
			"state": false
		}, {
			"code": "P1035",
			"desc": "燃油滤清加热器驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_FlFltHtSCG_C",
			"state": false
		}, {
			"code": "P2267",
			"desc": "油中含水传感器电压高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_FlFWLvlSRCMax_C",
			"state": false
		}, {
			"code": "P2266",
			"desc": "油中含水传感器电压低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_FlFWLvlSRCMin_C",
			"state": false
		}, {
			"code": "P2269",
			"desc": "油中含水故障",
			"faultLabel": "DFC_DisblMsk.DFC_FlSys_WtDet_C",
			"state": true
		}, {
			"code": "P0460",
			"desc": "燃油液位过低",
			"faultLabel": "DFC_DisblMsk.DFC_FlSysTnkLo_C",
			"state": false
		}, {
			"code": "P0183",
			"desc": "燃油温度传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_FuelTSRCMax_C",
			"state": false
		}, {
			"code": "P0182",
			"desc": "燃油温度传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_FuelTSRCMin_C",
			"state": false
		}, {
			"code": "P0181",
			"desc": "燃油温度传感器信号不可信",
			"faultLabel": "DFC_DisblMsk.DFC_FuelTVDPlaus_C",
			"state": false
		}, {
			"code": "U1402",
			"desc": "来自CAN总线的变速箱信号故障",
			"faultLabel": "DFC_DisblMsk.DFC_GbxNPosSig_C",
			"state": false
		}, {
			"code": "P0381",
			"desc": "预热指示灯驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_GlwLmpOL_C",
			"state": false
		}, {
			"code": "P0381",
			"desc": "电控单元(ECU)内预热指示灯驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_GlwLmpOvrTemp_C",
			"state": false
		}, {
			"code": "P0381",
			"desc": "预热指示灯驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_GlwLmpSCB_C",
			"state": false
		}, {
			"code": "P0381",
			"desc": "预热指示灯驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_GlwLmpSCG_C",
			"state": false
		}, {
			"code": "P0110",
			"desc": "进气加热格栅驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_IAirHtOL_C",
			"state": true
		}, {
			"code": "P0110",
			"desc": "电控单元(ECU)内进气加热格栅驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_IAirHtOvrTemp_C",
			"state": true
		}, {
			"code": "P0113",
			"desc": "进气加热格栅驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_IAirHtSCB_C",
			"state": true
		}, {
			"code": "P0112",
			"desc": "进气加热格栅驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_IAirHtSCG_C",
			"state": true
		}, {
			"code": "P100E",
			"desc": "喷油器喷射次数被电控单元(ECU)充电模块能力限制指示",
			"faultLabel": "DFC_DisblMsk.DFC_InjCrvInjLimChrgBal_C",
			"state": true
		}, {
			"code": "P100F",
			"desc": "喷油器喷射次数被高压油泵油量平衡限制指示",
			"faultLabel": "DFC_DisblMsk.DFC_InjCrvInjLimQntBal_C",
			"state": true
		}, {
			"code": "P1010",
			"desc": "喷油器喷射次数被系统限制指示",
			"faultLabel": "DFC_DisblMsk.DFC_InjCrvInjLimSys_C",
			"state": true
		}, {
			"code": "P1011",
			"desc": "喷油器喷射次数被运行时间限制指示",
			"faultLabel": "DFC_DisblMsk.DFC_InjCrvNumInjRtmLim_C",
			"state": true
		}, {
			"code": "P0A0F",
			"desc": "发动机启动失败",
			"faultLabel": "DFC_DisblMsk.DFC_InjUnStrtTst_C",
			"state": false
		}, {
			"code": "P0087",
			"desc": "轨压过低（无法达到喷油器最小开启压力）",
			"faultLabel": "DFC_DisblMsk.DFC_InjVlvPresMin_C",
			"state": false
		}, {
			"code": "P062B",
			"desc": "发火顺序第1缸缺少喷油器油量修正(IQA)码",
			"faultLabel": "DFC_DisblMsk.DFC_IVAdjDiaIVAdj_0_C",
			"state": true
		}, {
			"code": "P062B",
			"desc": "发火顺序第2缸缺少喷油器油量修正(IQA)码",
			"faultLabel": "DFC_DisblMsk.DFC_IVAdjDiaIVAdj_1_C",
			"state": true
		}, {
			"code": "P062B",
			"desc": "发火顺序第3缸缺少喷油器油量修正(IQA)码",
			"faultLabel": "DFC_DisblMsk.DFC_IVAdjDiaIVAdj_2_C",
			"state": true
		}, {
			"code": "P062B",
			"desc": "发火顺序第4缸缺少喷油器油量修正(IQA)码",
			"faultLabel": "DFC_DisblMsk.DFC_IVAdjDiaIVAdj_3_C",
			"state": true
		}, {
			"code": "P062B",
			"desc": "发火顺序第5缸缺少喷油器油量修正(IQA)码",
			"faultLabel": "DFC_DisblMsk.DFC_IVAdjDiaIVAdj_4_C",
			"state": false
		}, {
			"code": "P062B",
			"desc": "发火顺序第6缸缺少喷油器油量修正(IQA)码",
			"faultLabel": "DFC_DisblMsk.DFC_IVAdjDiaIVAdj_5_C",
			"state": false
		}, {
			"code": "P062D",
			"desc": "喷油控制模块1（线束）短路故障",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaBnkShCir_0_C",
			"state": true
		}, {
			"code": "P062E",
			"desc": "喷油控制模块2（线束）短路故障",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaBnkShCir_1_C",
			"state": true
		}, {
			"code": "P062B",
			"desc": "电控单元(ECU)内喷油器驱动芯片(CY33X)故障",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaChp_0_C",
			"state": true
		}, {
			"code": "P0201",
			"desc": "发火顺序第1缸喷油器驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylNoLd_0_C",
			"state": true
		}, {
			"code": "P0205",
			"desc": "发火顺序第2缸喷油器驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylNoLd_1_C",
			"state": true
		}, {
			"code": "P0203",
			"desc": "发火顺序第3缸喷油器驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylNoLd_2_C",
			"state": true
		}, {
			"code": "P0206",
			"desc": "发火顺序第4缸喷油器驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylNoLd_3_C",
			"state": true
		}, {
			"code": "P0202",
			"desc": "发火顺序第5缸喷油器驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylNoLd_4_C",
			"state": false
		}, {
			"code": "P0204",
			"desc": "发火顺序第6缸喷油器驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylNoLd_5_C",
			"state": false
		}, {
			"code": "P0263",
			"desc": "发火顺序第1缸喷油器驱动电路特殊故障",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylPttDet_0_C",
			"state": false
		}, {
			"code": "P0275",
			"desc": "发火顺序第2缸喷油器驱动电路特殊故障",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylPttDet_1_C",
			"state": false
		}, {
			"code": "P0269",
			"desc": "发火顺序第3缸喷油器驱动电路特殊故障",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylPttDet_2_C",
			"state": false
		}, {
			"code": "P0278",
			"desc": "发火顺序第4缸喷油器驱动电路特殊故障",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylPttDet_3_C",
			"state": false
		}, {
			"code": "P0266",
			"desc": "发火顺序第5缸喷油器驱动电路特殊故障",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylPttDet_4_C",
			"state": false
		}, {
			"code": "P0272",
			"desc": "发火顺序第6缸喷油器驱动电路特殊故障",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylPttDet_5_C",
			"state": false
		}, {
			"code": "P0262",
			"desc": "发火顺序第1缸喷油器线束短路（高端或低端对电源或地短路）",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCir_0_C",
			"state": true
		}, {
			"code": "P0274",
			"desc": "发火顺序第2缸喷油器线束短路（高端或低端对电源或地短路）",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCir_1_C",
			"state": true
		}, {
			"code": "P0268",
			"desc": "发火顺序第3缸喷油器线束短路（高端或低端对电源或地短路）",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCir_2_C",
			"state": true
		}, {
			"code": "P0277",
			"desc": "发火顺序第4缸喷油器线束短路（高端或低端对电源或地短路）",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCir_3_C",
			"state": true
		}, {
			"code": "P0265",
			"desc": "发火顺序第5缸喷油器线束短路（高端或低端对电源或地短路）",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCir_4_C",
			"state": false
		}, {
			"code": "P0271",
			"desc": "发火顺序第6缸喷油器线束短路（高端或低端对电源或地短路）",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCir_5_C",
			"state": false
		}, {
			"code": "P0261",
			"desc": "发火顺序第1缸线束低端对高端短路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCirHSLS_0_C",
			"state": true
		}, {
			"code": "P0273",
			"desc": "发火顺序第2缸线束低端对高端短路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCirHSLS_1_C",
			"state": true
		}, {
			"code": "P0267",
			"desc": "发火顺序第3缸线束低端对高端短路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCirHSLS_2_C",
			"state": true
		}, {
			"code": "P0276",
			"desc": "发火顺序第4缸线束低端对高端短路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCirHSLS_3_C",
			"state": true
		}, {
			"code": "P0264",
			"desc": "发火顺序第5缸线束低端对高端短路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCirHSLS_4_C",
			"state": false
		}, {
			"code": "P0270",
			"desc": "发火顺序第6缸线束低端对高端短路",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaCylShCirHSLS_5_C",
			"state": false
		}, {
			"code": "P062D",
			"desc": "喷油控制模块1对地短路自检超时",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaShCirGndToutBnk_0_C",
			"state": true
		}, {
			"code": "P062E",
			"desc": "喷油控制模块2对地短路自检超时",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaShCirGndToutBnk_1_C",
			"state": true
		}, {
			"code": "P1581",
			"desc": "喷油控制模块1处于短路测试状态",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaShCirGndTstBnk_0_C",
			"state": true
		}, {
			"code": "P1582",
			"desc": "喷油控制模块2处于短路测试状态",
			"faultLabel": "DFC_DisblMsk.DFC_IVDiaShCirGndTstBnk_1_C",
			"state": true
		}, {
			"code": "P251C",
			"desc": "PTO开关电压信号过高故障",
			"faultLabel": "DFC_DisblMsk.DFC_MaxPTOSwt_C",
			"state": false
		}, {
			"code": "P0251",
			"desc": "高压油泵油量计量单元(MeUN)接头松动",
			"faultLabel": "DFC_DisblMsk.DFC_MeUnIntCtct_C",
			"state": true
		}, {
			"code": "P0251",
			"desc": "高压油泵油量计量单元（MeUN）驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_MeUnOL_C",
			"state": true
		}, {
			"code": "P0252",
			"desc": "电控单元(ECU)内油量计量单元(MeUN)驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_MeUnOT_C",
			"state": true
		}, {
			"code": "P0254",
			"desc": "高压油泵油量计量单元（MeUn）驱动电路高端对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_MeUnShCirHSBatt_C",
			"state": true
		}, {
			"code": "P0253",
			"desc": "高压油泵油量计量单元（MeUn）驱动电路高端对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_MeUnShCirHSGnd_C",
			"state": true
		}, {
			"code": "P0254",
			"desc": "高压油泵油量计量单元（MeUn）驱动电路低端对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_MeUnShCirLSBatt_C",
			"state": true
		}, {
			"code": "P0253",
			"desc": "高压油泵油量计量单元（MeUn）驱动电路低端对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_MeUnShCirLSGnd_C",
			"state": true
		}, {
			"code": "P0254",
			"desc": "高压油泵油量计量单元（MeUN）驱动电流过大",
			"faultLabel": "DFC_DisblMsk.DFC_MeUnSRCMax_C",
			"state": false
		}, {
			"code": "P0253",
			"desc": "高压油泵油量计量单元（MeUN）驱动电流过小",
			"faultLabel": "DFC_DisblMsk.DFC_MeUnSRCMin_C",
			"state": false
		}, {
			"code": "P0650",
			"desc": "MIL灯(OBD灯)驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_MILOL_C",
			"state": false
		}, {
			"code": "P0650",
			"desc": "电控单元(ECU)内MIL灯(OBD灯)驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_MILOvrTemp_C",
			"state": false
		}, {
			"code": "P0650",
			"desc": "MIL灯(OBD灯)驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_MILSCB_C",
			"state": false
		}, {
			"code": "P0650",
			"desc": "MIL灯(OBD灯)驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_MILSCG_C",
			"state": false
		}, {
			"code": "P251B",
			"desc": "PTO开关电压信号过低故障",
			"faultLabel": "DFC_DisblMsk.DFC_MinPTOSwt_C",
			"state": false
		}, {
			"code": "P060B",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCADCNTP_C",
			"state": true
		}, {
			"code": "P060B",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCADCTst_C",
			"state": true
		}, {
			"code": "P060B",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCADCVltgRatio_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCComErrCnt_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCComSPI_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCROMErrXPg_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPErrMMRespByte_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPErrNoChk_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPErrRespTime_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPErrSPI_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPLoLi_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPMM_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPOSTimeOut_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPPsvTstErr_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPTimeOut_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoC)",
			"faultLabel": "DFC_DisblMsk.DFC_MoCSOPUpLi_C",
			"state": true
		}, {
			"code": "P1012",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFAPP_C",
			"state": true
		}, {
			"code": "P1013",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFESpd_C",
			"state": true
		}, {
			"code": "P1014",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFInjDatET_C",
			"state": true
		}, {
			"code": "P1015",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFInjDatPhi_C",
			"state": true
		}, {
			"code": "P1016",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFInjQnt_C",
			"state": true
		}, {
			"code": "P1017",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFMode1_C",
			"state": true
		}, {
			"code": "P1018",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFMode2_C",
			"state": true
		}, {
			"code": "P1019",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFMode3_C",
			"state": true
		}, {
			"code": "P101A",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFOvR_C",
			"state": true
		}, {
			"code": "P101A",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFOvRHtPrt_C",
			"state": true
		}, {
			"code": "P101B",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFQntCor_C",
			"state": true
		}, {
			"code": "P101C",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFRailP_C",
			"state": true
		}, {
			"code": "P1045",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFRmtAPP_C",
			"state": false
		}, {
			"code": "P101D",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoF)",
			"faultLabel": "DFC_DisblMsk.DFC_MoFTrqCmp_C",
			"state": true
		}, {
			"code": "P101E",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoN)",
			"faultLabel": "DFC_DisblMsk.DFC_MonLimCurr_C",
			"state": true
		}, {
			"code": "P101F",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoN)",
			"faultLabel": "DFC_DisblMsk.DFC_MonLimLead_C",
			"state": true
		}, {
			"code": "P1020",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoN)",
			"faultLabel": "DFC_DisblMsk.DFC_MonLimSet_C",
			"state": true
		}, {
			"code": "P1600",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoN)",
			"faultLabel": "DFC_DisblMsk.DFC_MonUMaxSupply1_C",
			"state": true
		}, {
			"code": "P1601",
			"desc": "电控单元(ECU)内部软硬件底层监控报错(MoN)",
			"faultLabel": "DFC_DisblMsk.DFC_MonUMinSupply1_C",
			"state": true
		}, {
			"code": "P068A",
			"desc": "主继电器断开过早故障",
			"faultLabel": "DFC_DisblMsk.DFC_MRlyErlyOpng_C",
			"state": true
		}, {
			"code": "P068B",
			"desc": "主继电器卡滞故障",
			"faultLabel": "DFC_DisblMsk.DFC_MRlyStk_C",
			"state": true
		}, {
			"code": "P253E",
			"desc": "PTO开关电压信号不合理故障",
			"faultLabel": "DFC_DisblMsk.DFC_NplPTOSwt_C",
			"state": false
		}, {
			"code": "P1021",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct1_C",
			"state": false
		}, {
			"code": "P1022",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct10_C",
			"state": false
		}, {
			"code": "P1023",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct11_C",
			"state": false
		}, {
			"code": "P1024",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct12_C",
			"state": false
		}, {
			"code": "P1025",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct13_C",
			"state": false
		}, {
			"code": "P1026",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct14_C",
			"state": false
		}, {
			"code": "P1027",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct15_C",
			"state": false
		}, {
			"code": "P1028",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct16_C",
			"state": false
		}, {
			"code": "P1029",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct2_C",
			"state": false
		}, {
			"code": "P102A",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct3_C",
			"state": false
		}, {
			"code": "P102B",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct4_C",
			"state": false
		}, {
			"code": "P102C",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct5_C",
			"state": false
		}, {
			"code": "P102D",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct6_C",
			"state": false
		}, {
			"code": "P102E",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct7_C",
			"state": false
		}, {
			"code": "P102F",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct8_C",
			"state": false
		}, {
			"code": "P1030",
			"desc": "OBD 故障",
			"faultLabel": "DFC_DisblMsk.DFC_OBDGenFaultClct9_C",
			"state": false
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部芯片通讯故障（应答通讯）",
			"faultLabel": "DFC_DisblMsk.DFC_OCWDACom_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部芯片通讯故障（电压低）",
			"faultLabel": "DFC_DisblMsk.DFC_OCWDALowVltg_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部芯片通讯故障（电压高）",
			"faultLabel": "DFC_DisblMsk.DFC_OCWDAOvrVltg_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内部芯片通讯故障（其他原因）",
			"faultLabel": "DFC_DisblMsk.DFC_OCWDAReasUnkwn_C",
			"state": true
		}, {
			"code": "P250D",
			"desc": "机油液位传感器电压信号过高",
			"faultLabel": "DFC_DisblMsk.DFC_OilLvlMax_C",
			"state": false
		}, {
			"code": "P250C",
			"desc": "机油液位传感器电压信号过低",
			"faultLabel": "DFC_DisblMsk.DFC_OilLvlMin_C",
			"state": false
		}, {
			"code": "P250B",
			"desc": "机油液位传感器信号不可信",
			"faultLabel": "DFC_DisblMsk.DFC_OilLvlNpl_C",
			"state": false
		}, {
			"code": "P252F",
			"desc": "机油液位传感器测得液位值超出上限",
			"faultLabel": "DFC_DisblMsk.DFC_OilLvlPhysRngHi_C",
			"state": false
		}, {
			"code": "P250F",
			"desc": "机油液位传感器测得液位值低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_OilLvlPhysRngLo_C",
			"state": false
		}, {
			"code": "P160B",
			"desc": "机油压力报警灯驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_OilPLmpOL_C",
			"state": false
		}, {
			"code": "P160C",
			"desc": "电控单元(ECU)内机油压力报警灯驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_OilPLmpOvrTemp_C",
			"state": false
		}, {
			"code": "P160D",
			"desc": "机油压力报警灯驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_OilPLmpSCB_C",
			"state": false
		}, {
			"code": "P160E",
			"desc": "机油压力报警灯驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_OilPLmpSCG_C",
			"state": false
		}, {
			"code": "P0524",
			"desc": "机油压力过低",
			"faultLabel": "DFC_DisblMsk.DFC_OilPMin_C",
			"state": false
		}, {
			"code": "P0521",
			"desc": "机油压力传感器信号不可信",
			"faultLabel": "DFC_DisblMsk.DFC_OilPNpl_C",
			"state": false
		}, {
			"code": "P0523",
			"desc": "机油压力传感器测得压力值高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_OilPSwmpPhysRngHi_C",
			"state": false
		}, {
			"code": "P0524",
			"desc": "机油压力传感器测得压力值低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_OilPSwmpPhysRngLo_C",
			"state": true
		}, {
			"code": "P0520",
			"desc": "来自CAN总线的机油压力信号故障",
			"faultLabel": "DFC_DisblMsk.DFC_OilPSwmpSig_C",
			"state": false
		}, {
			"code": "P0523",
			"desc": "机油压力传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_OilPSwmpSRCMax_C",
			"state": false
		}, {
			"code": "P0522",
			"desc": "机油压力传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_OilPSwmpSRCMin_C",
			"state": false
		}, {
			"code": "P0196",
			"desc": "机油温度传感器信号不可信（机油温度过高）",
			"faultLabel": "DFC_DisblMsk.DFC_OilTNplHigh_C",
			"state": false
		}, {
			"code": "U1403",
			"desc": "来自CAN总线的机油温度信号故障",
			"faultLabel": "DFC_DisblMsk.DFC_OilTSig_C",
			"state": false
		}, {
			"code": "P0198",
			"desc": "机油温度传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_OilTSRCMax_C",
			"state": false
		}, {
			"code": "P0197",
			"desc": "机油温度传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_OilTSRCMin_C",
			"state": false
		}, {
			"code": "P0196",
			"desc": "机油温度传感器信号不可信",
			"faultLabel": "DFC_DisblMsk.DFC_OilTVDPlaus_C",
			"state": false
		}, {
			"code": "P2263",
			"desc": "增压压力调节控制器偏差值(增压压力设定值减去实际值)高于上限(正偏差过大)",
			"faultLabel": "DFC_DisblMsk.DFC_PCRGovDvtMax_C",
			"state": false
		}, {
			"code": "P2263",
			"desc": "增压压力调节控制器偏差值(增压压力设定值减去实际值)低于下限(负偏差过大)",
			"faultLabel": "DFC_DisblMsk.DFC_PCRGovDvtMin_C",
			"state": false
		}, {
			"code": "P1031",
			"desc": "扭矩油量转换MAP不单调故障指示",
			"faultLabel": "DFC_DisblMsk.DFC_PhyModNonMonMapNpl_C",
			"state": false
		}, {
			"code": "P006D",
			"desc": "增压压力传感器信号不合理-偏大",
			"faultLabel": "DFC_DisblMsk.DFC_PIntkVUsPlsHi_C",
			"state": true
		}, {
			"code": "P006D",
			"desc": "增压压力传感器信号不合理-偏小",
			"faultLabel": "DFC_DisblMsk.DFC_PIntkVUsPlsLo_C",
			"state": false
		}, {
			"code": "P0238",
			"desc": "增压压力传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_PIntkVUsSRCMax_C",
			"state": true
		}, {
			"code": "P0237",
			"desc": "增压压力传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_PIntkVUsSRCMin_C",
			"state": true
		}, {
			"code": "P2002",
			"desc": "颗粒氧化催化器(POC)堵塞故障",
			"faultLabel": "DFC_DisblMsk.DFC_PMCatBlk_C",
			"state": false
		}, {
			"code": "P2002",
			"desc": "颗粒氧化催化器(POC)移除故障",
			"faultLabel": "DFC_DisblMsk.DFC_PMCatRmv_C",
			"state": false
		}, {
			"code": "P2455",
			"desc": "颗粒氧化催化器(POC)两端压差高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_PPMCatPhysRngChkHi_C",
			"state": false
		}, {
			"code": "P2454",
			"desc": "颗粒氧化催化器(POC)两端压差低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_PPMCatPhysRngChkLo_C",
			"state": false
		}, {
			"code": "P2453",
			"desc": "颗粒氧化催化器(POC)压差传感器信号不可信",
			"faultLabel": "DFC_DisblMsk.DFC_PPMCatPlaus_C",
			"state": false
		}, {
			"code": "U0100",
			"desc": "来自CAN总线的颗粒氧化催化器(POC)压差传感器信号故障",
			"faultLabel": "DFC_DisblMsk.DFC_PPMCatSig_C",
			"state": false
		}, {
			"code": "P2455",
			"desc": "颗粒氧化催化器(POC)压差传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_PPMCatSRCMax_C",
			"state": false
		}, {
			"code": "P2454",
			"desc": "颗粒氧化催化器(POC)压差传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_PPMCatSRCMin_C",
			"state": false
		}, {
			"code": "P0089",
			"desc": "限压阀(PRV)达到最大允许开启次数",
			"faultLabel": "DFC_DisblMsk.DFC_PRVctOpnMax_C",
			"state": false
		}, {
			"code": "P0089",
			"desc": "限压阀(PRV)因压力升高被强迫打开",
			"faultLabel": "DFC_DisblMsk.DFC_PRVFrOpnPresInc_C",
			"state": false
		}, {
			"code": "P0089",
			"desc": "限压阀(PRV)因压力波动被强迫打开",
			"faultLabel": "DFC_DisblMsk.DFC_PRVFrOpnPresShck_C",
			"state": false
		}, {
			"code": "P0089",
			"desc": "限压阀(PRV)被打开",
			"faultLabel": "DFC_DisblMsk.DFC_PRVOpn_C",
			"state": true
		}, {
			"code": "P1036",
			"desc": "限压阀(PRV)被打开，核查油量平衡（指示性故障）",
			"faultLabel": "DFC_DisblMsk.DFC_PRVQBalChk_C",
			"state": true
		}, {
			"code": "P1037",
			"desc": "平均轨压超出预计的误差范围（指示性故障）",
			"faultLabel": "DFC_DisblMsk.DFC_PRVRPOutOfRng_C",
			"state": true
		}, {
			"code": "P0089",
			"desc": "限压阀(PRV)达到最大允许开启时间",
			"faultLabel": "DFC_DisblMsk.DFC_PRVtiOpnMax_C",
			"state": false
		}, {
			"code": "P060C",
			"desc": "电控单元(ECU)内R2S2芯片MSC故障",
			"faultLabel": "DFC_DisblMsk.DFC_R2S2_MscComm1_C",
			"state": true
		}, {
			"code": "P0251",
			"desc": "轨压正偏差超（实际轨压低于设定值)限值(MeUN方案）",
			"faultLabel": "DFC_DisblMsk.DFC_RailMeUn0_C",
			"state": true
		}, {
			"code": "P0251",
			"desc": "油量计量单元设定流量相比理论计算的最大值大",
			"faultLabel": "DFC_DisblMsk.DFC_RailMeUn10_C",
			"state": true
		}, {
			"code": "P0251",
			"desc": "油量计量单元(MeUN)供油量达到最小设定流量的情况下，轨压负偏差超限值（实际轨压高于设定值）",
			"faultLabel": "DFC_DisblMsk.DFC_RailMeUn2_C",
			"state": true
		}, {
			"code": "P0251",
			"desc": "轨压实际值大于设定值",
			"faultLabel": "DFC_DisblMsk.DFC_RailMeUn22_C",
			"state": true
		}, {
			"code": "P0087",
			"desc": "实际轨压低于最低轨压值(MeUN方案)",
			"faultLabel": "DFC_DisblMsk.DFC_RailMeUn3_C",
			"state": true
		}, {
			"code": "P0088",
			"desc": "实际轨压高于最高轨压值(MeUN方案)",
			"faultLabel": "DFC_DisblMsk.DFC_RailMeUn4_C",
			"state": true
		}, {
			"code": "P0088",
			"desc": "轨压偏高",
			"faultLabel": "DFC_DisblMsk.DFC_RailMeUn42_C",
			"state": true
		}, {
			"code": "P1050",
			"desc": "倒拖工况(Overrun)状态时，油量计量单元流量偏大",
			"faultLabel": "DFC_DisblMsk.DFC_RailMeUn7_C",
			"state": true
		}, {
			"code": "P0251",
			"desc": "怠速状态时，油量计量单元流量偏大",
			"faultLabel": "DFC_DisblMsk.DFC_RailMeUn8_C",
			"state": true
		}, {
			"code": "P0194",
			"desc": "轨压传感器信号断续",
			"faultLabel": "DFC_DisblMsk.DFC_RailPGradMon_C",
			"state": true
		}, {
			"code": "P0191",
			"desc": "轨压传感器信号漂移故障（电压过高）",
			"faultLabel": "DFC_DisblMsk.DFC_RailPOfsTstMax_C",
			"state": true
		}, {
			"code": "P0191",
			"desc": "轨压传感器信号漂移故障（电压过低）",
			"faultLabel": "DFC_DisblMsk.DFC_RailPOfsTstMin_C",
			"state": true
		}, {
			"code": "P0088",
			"desc": "限压阀PRV打开后，轨压过大",
			"faultLabel": "DFC_DisblMsk.DFC_RailPRV4_C",
			"state": true
		}, {
			"code": "P0088",
			"desc": "设定喷油量小于标定的实际可能最小值（限压阀PRV打开后）",
			"faultLabel": "DFC_DisblMsk.DFC_RailPRV8_C",
			"state": false
		}, {
			"code": "P0088",
			"desc": "燃油温度偏高（限压阀PRV打开后）",
			"faultLabel": "DFC_DisblMsk.DFC_RailPRV9_C",
			"state": false
		}, {
			"code": "P0193",
			"desc": "轨压传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_RailPSRCMax_C",
			"state": true
		}, {
			"code": "P0192",
			"desc": "轨压传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_RailPSRCMin_C",
			"state": true
		}, {
			"code": "U1404",
			"desc": "PTO开关CAN 信号故障",
			"faultLabel": "DFC_DisblMsk.DFC_SigPTOSwt_C",
			"state": false
		}, {
			"code": "P0123",
			"desc": "油门踏板传感器1电压信号高于上限值",
			"faultLabel": "DFC_DisblMsk.DFC_SRCHighAPP1_C",
			"state": true
		}, {
			"code": "P0223",
			"desc": "油门踏板传感器2电压信号高于上限值",
			"faultLabel": "DFC_DisblMsk.DFC_SRCHighAPP2_C",
			"state": true
		}, {
			"code": "P1501",
			"desc": "远程油门踏板电位计1电压高于最大值",
			"faultLabel": "DFC_DisblMsk.DFC_SRCHighRmtAPP1_C",
			"state": true
		}, {
			"code": "P1502",
			"desc": "远程油门踏板电位计2电压高于最大值",
			"faultLabel": "DFC_DisblMsk.DFC_SRCHighRmtAPP2_C",
			"state": true
		}, {
			"code": "P0122",
			"desc": "油门踏板传感器1电压信号低于下限值",
			"faultLabel": "DFC_DisblMsk.DFC_SRCLowAPP1_C",
			"state": true
		}, {
			"code": "P0222",
			"desc": "油门踏板传感器2电压信号低于下限值",
			"faultLabel": "DFC_DisblMsk.DFC_SRCLowAPP2_C",
			"state": true
		}, {
			"code": "P1503",
			"desc": "远程油门踏板电位计1电压低于最小值",
			"faultLabel": "DFC_DisblMsk.DFC_SRCLowRmtAPP1_C",
			"state": true
		}, {
			"code": "P1504",
			"desc": "远程油门踏板电位计２电压高于最大值",
			"faultLabel": "DFC_DisblMsk.DFC_SRCLowRmtAPP2_C",
			"state": true
		}, {
			"code": "P0643",
			"desc": "传感器供电模块1故障",
			"faultLabel": "DFC_DisblMsk.DFC_SSpMon1_C",
			"state": true
		}, {
			"code": "P0653",
			"desc": "传感器供电模块2故障",
			"faultLabel": "DFC_DisblMsk.DFC_SSpMon2_C",
			"state": true
		}, {
			"code": "P0699",
			"desc": "传感器供电模块3故障",
			"faultLabel": "DFC_DisblMsk.DFC_SSpMon3_C",
			"state": true
		}, {
			"code": "P1602",
			"desc": "12V的传感器供电电源2电压超过限值",
			"faultLabel": "DFC_DisblMsk.DFC_SSpMonSply1Max_C",
			"state": true
		}, {
			"code": "P1603",
			"desc": "12V的传感器供电电源2电压低于限值",
			"faultLabel": "DFC_DisblMsk.DFC_SSpMonSply1Min_C",
			"state": true
		}, {
			"code": "P1602",
			"desc": "12V的传感器供电电源1电压超过限值",
			"faultLabel": "DFC_DisblMsk.DFC_SSpMonSplyMax_C",
			"state": true
		}, {
			"code": "P1603",
			"desc": "12V的传感器供电电源1电压低于限值",
			"faultLabel": "DFC_DisblMsk.DFC_SSpMonSplyMin_C",
			"state": true
		}, {
			"code": "P060C",
			"desc": "发动机停机时间计时器计数故障",
			"faultLabel": "DFC_DisblMsk.DFC_StopCntTmr_C",
			"state": false
		}, {
			"code": "P160F",
			"desc": "停机警示灯(Stop Lamp)驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_StopLmpOL_C",
			"state": false
		}, {
			"code": "P1610",
			"desc": "电控单元(ECU)内停机警示灯(Stop Lamp)驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_StopLmpOvrTemp_C",
			"state": false
		}, {
			"code": "P1611",
			"desc": "停机警示灯(Stop Lamp)驱动电路对电池短路",
			"faultLabel": "DFC_DisblMsk.DFC_StopLmpSCB_C",
			"state": false
		}, {
			"code": "P1612",
			"desc": "停机警示灯(Stop Lamp)驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_StopLmpSCG_C",
			"state": false
		}, {
			"code": "P0615",
			"desc": "起动机继电器控制端开路",
			"faultLabel": "DFC_DisblMsk.DFC_StrtOL_C",
			"state": false
		}, {
			"code": "P0615",
			"desc": "电控单元(ECU)内起动机继电器控制端驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_StrtOvrTemp_C",
			"state": false
		}, {
			"code": "P0617",
			"desc": "起动机继电器控制端对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_StrtSCB_C",
			"state": false
		}, {
			"code": "P0616",
			"desc": "起动机继电器控制端对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_StrtSCG_C",
			"state": false
		}, {
			"code": "P1604",
			"desc": "系统灯(SVS)驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_SVSOL_C",
			"state": false
		}, {
			"code": "P1605",
			"desc": "电控单元(ECU)内系统灯(SVS)驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_SVSOvrTemp_C",
			"state": false
		}, {
			"code": "P1606",
			"desc": "系统灯(SVS)驱动电路对电池短路",
			"faultLabel": "DFC_DisblMsk.DFC_SVSSCB_C",
			"state": false
		}, {
			"code": "P1607",
			"desc": "系统灯(SVS)驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_SVSSCG_C",
			"state": false
		}, {
			"code": "P1608",
			"desc": "ECU软件重置_0",
			"faultLabel": "DFC_DisblMsk.DFC_SWReset_0_C",
			"state": true
		}, {
			"code": "P1609",
			"desc": "ECU软件重置_1",
			"faultLabel": "DFC_DisblMsk.DFC_SWReset_1_C",
			"state": true
		}, {
			"code": "P160A",
			"desc": "ECU软件重置_2",
			"faultLabel": "DFC_DisblMsk.DFC_SWReset_2_C",
			"state": true
		}, {
			"code": "P2135",
			"desc": "油门踏板1和油门踏板2信号合理性故障",
			"faultLabel": "DFC_DisblMsk.DFC_SyncAPP_C",
			"state": true
		}, {
			"code": "P2135",
			"desc": "油门踏板和怠速开关信号不合理故障",
			"faultLabel": "DFC_DisblMsk.DFC_SyncAPPDblPotLIS_C",
			"state": false
		}, {
			"code": "P1505",
			"desc": "远程油门踏板电位计1和2的不同步故障",
			"faultLabel": "DFC_DisblMsk.DFC_SyncRmtAPP_C",
			"state": true
		}, {
			"code": "P2530",
			"desc": "错误的T50开关操作",
			"faultLabel": "DFC_DisblMsk.DFC_T50Err_C",
			"state": false
		}, {
			"code": "P0113",
			"desc": "空气流量计(HFM)进气温度传感器占空比信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_TAFSDtyCycHi_C",
			"state": false
		}, {
			"code": "P0112",
			"desc": "空气流量计(HFM)进气温度传感器占空比信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_TAFSDtyCycLo_C",
			"state": false
		}, {
			"code": "P0113",
			"desc": "空气流量计(HFM)进气温度传感器周期信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_TAFSPerHi_C",
			"state": false
		}, {
			"code": "P0112",
			"desc": "空气流量计(HFM)进气温度传感器周期信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_TAFSPerLo_C",
			"state": false
		}, {
			"code": "P0099",
			"desc": "来自CAN总线的增压中冷后的进气温度信号故障",
			"faultLabel": "DFC_DisblMsk.DFC_TCACDsSig_C",
			"state": false
		}, {
			"code": "P0098",
			"desc": "增压中冷后的进气温度传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_TCACDsSRCMax_C",
			"state": true
		}, {
			"code": "P0097",
			"desc": "增压中冷后的进气温度传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_TCACDsSRCMin_C",
			"state": true
		}, {
			"code": "P0096",
			"desc": "增压中冷后的进气温度信号不可信",
			"faultLabel": "DFC_DisblMsk.DFC_TCACDsVDPlaus_C",
			"state": false
		}, {
			"code": "P0669",
			"desc": "电控单元(ECU)内温度值传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_TECUSRCMax_C",
			"state": true
		}, {
			"code": "P0668",
			"desc": "电控单元(ECU)内温度值传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_TECUSRCMin_C",
			"state": true
		}, {
			"code": "P2100",
			"desc": "节流阀(TVA)驱动电流受限",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvCurrLim_C",
			"state": false
		}, {
			"code": "P2108",
			"desc": "电子节流阀(TVA)全关位置的自学习值偏移超过限值",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvDrftClsd_C",
			"state": false
		}, {
			"code": "P2108",
			"desc": "电子节流阀(TVA)全开位置的自学习值偏移超过限值",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvDrftOpn_C",
			"state": false
		}, {
			"code": "P2108",
			"desc": "电子节流阀(TVA)机械关闭位置的自学习值偏移超过限值",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvDrftRng_C",
			"state": false
		}, {
			"code": "P2112",
			"desc": "节流阀(TVA)控制器在冷启动过程产生偏差",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvGovDvtCld_C",
			"state": false
		}, {
			"code": "P2112",
			"desc": "节流阀(TVA)控制器产生永久正偏差",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvGovDvtMax_C",
			"state": false
		}, {
			"code": "P2111",
			"desc": "节流阀(TVA)控制器产生永久负偏差",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvGovDvtMin_C",
			"state": false
		}, {
			"code": "P2112",
			"desc": "节流阀(TVA)卡在关的位置",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvJamVlvClsd_C",
			"state": false
		}, {
			"code": "P2111",
			"desc": "节流阀(TVA)卡在开的位置",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvJamVlvOpn_C",
			"state": false
		}, {
			"code": "P2108",
			"desc": "电子节流阀(TVA)全关位置的自学习值与本轮第一次值差值过大",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvLonTimeDrftClsd_C",
			"state": false
		}, {
			"code": "P2108",
			"desc": "电子节流阀(TVA)全开位置的自学习值与本轮第一次值差值过大",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvLonTimeDrftOpn_C",
			"state": false
		}, {
			"code": "P2101",
			"desc": "电子节流阀(TVA)信号超过机械最大位置",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvPhysSRCMax_C",
			"state": false
		}, {
			"code": "P2101",
			"desc": "电子节流阀(TVA)信号超过机械最小位置",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvPhysSRCMin_C",
			"state": false
		}, {
			"code": "P2108",
			"desc": "电子节流阀(TVA)全关位置的前后两次自学习值差值过大",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvShrtTimeDrftClsd_C",
			"state": false
		}, {
			"code": "P2108",
			"desc": "电子节流阀(TVA)全开位置的前后两次自学习值差值过大",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvShrtTimeDrftOpn_C",
			"state": false
		}, {
			"code": "P2622",
			"desc": "节流阀(TVA)位置反馈传感器值高于上限值(模拟信号)",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvSRCMax_C",
			"state": false
		}, {
			"code": "P2621",
			"desc": "节流阀(TVA)位置反馈传感器值低于下限值(模拟信号)",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvSRCMin_C",
			"state": false
		}, {
			"code": "P2620",
			"desc": "节流阀（TVA）临时故障",
			"faultLabel": "DFC_DisblMsk.DFC_ThrVlvTmpErr_C",
			"state": false
		}, {
			"code": "P0113",
			"desc": "上游进气温度传感器电压信号高于限值",
			"faultLabel": "DFC_DisblMsk.DFC_TIntkVUsSRCMax_C",
			"state": false
		}, {
			"code": "P0112",
			"desc": "上游进气温度传感器电压信号低于限值",
			"faultLabel": "DFC_DisblMsk.DFC_TIntkVUsSRCMin_C",
			"state": false
		}, {
			"code": "P0045",
			"desc": "增压器驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_TrbChOL_C",
			"state": false
		}, {
			"code": "P0049",
			"desc": "增压器超速故障",
			"faultLabel": "DFC_DisblMsk.DFC_TrbChOvrSpd_C",
			"state": false
		}, {
			"code": "P0045",
			"desc": "电控单元(ECU)内增压器驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_TrbChOvrTemp_C",
			"state": false
		}, {
			"code": "P0048",
			"desc": "增压器驱动电路对蓄电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_TrbChSCB_C",
			"state": false
		}, {
			"code": "P0047",
			"desc": "增压器控制电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_TrbChSCG_C",
			"state": false
		}, {
			"code": "U1405",
			"desc": "来自CAN总线的车速信号故障",
			"faultLabel": "DFC_DisblMsk.DFC_VehVCANSig_C",
			"state": false
		}, {
			"code": "P0279",
			"desc": "车速高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_VehVMax_C",
			"state": false
		}, {
			"code": "P2162",
			"desc": "车速信号不合理",
			"faultLabel": "DFC_DisblMsk.DFC_VehVNplMon_C",
			"state": false
		}, {
			"code": "P0501",
			"desc": "车速信号不合理",
			"faultLabel": "DFC_DisblMsk.DFC_VehVPlaus_C",
			"state": false
		}, {
			"code": "P0503",
			"desc": "车速传感器电压信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_VehVSRCHi_C",
			"state": false
		}, {
			"code": "P0502",
			"desc": "车速传感器电压信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_VehVSRCLo_C",
			"state": false
		}, {
			"code": "P2158",
			"desc": "来自仪表盘的车速信号高于上限",
			"faultLabel": "DFC_DisblMsk.DFC_VehVTachMax_C",
			"state": false
		}, {
			"code": "P2160",
			"desc": "来自仪表盘的车速信号低于下限",
			"faultLabel": "DFC_DisblMsk.DFC_VehVTachMin_C",
			"state": false
		}, {
			"code": "P2161",
			"desc": "来自仪表盘的车速信号故障",
			"faultLabel": "DFC_DisblMsk.DFC_VehVTachSig_C",
			"state": false
		}, {
			"code": "P1613",
			"desc": "警示灯驱动电路开路",
			"faultLabel": "DFC_DisblMsk.DFC_WrnLmpOL_C",
			"state": false
		}, {
			"code": "P1614",
			"desc": "电控单元(ECU)内警示灯驱动芯片过热",
			"faultLabel": "DFC_DisblMsk.DFC_WrnLmpOvrTemp_C",
			"state": false
		}, {
			"code": "P1615",
			"desc": "警示灯驱动电路对电源短路",
			"faultLabel": "DFC_DisblMsk.DFC_WrnLmpSCB_C",
			"state": false
		}, {
			"code": "P1616",
			"desc": "警示灯驱动电路对地短路",
			"faultLabel": "DFC_DisblMsk.DFC_WrnLmpSCG_C",
			"state": false
		}],
		"id": 0,
		"parentId": 0,
		"uiType": 7
	}],
	"uiType": 0
}, {
	"id": 133,
	"name": "发动机扭矩和烟度限制",
	"parentId": 0,
	"siniTreeBeans": [{
		"id": 3918,
		"name": "最大喷油量限制",
		"parentId": 133,
		"siniTreeBeans": [{
			"id": 134,
			"name": "最大喷油量限制",
			"parentId": 3918,
			"uiType": 5,
			"valueXs": ["-0.0", "500.0", "800.0", "1000.0", "1200.0", "1400.0", "1600.0", "1800.0", "1900.0", "2000.0", "2200.0", "2400.0", "2600.0", "2800.0", "2900.0", "3000.0", "3200.0", "3250.0", "3300.0", "3400.0", "3500.0", "3600.0", "3650.0", "3800.0"],
			"values": [
				["50.0", "40.0", "41.0", "40.0", "42.5", "52.0", "58.0", "60.7", "61.0", "61.0", "59.0", "58.2", "57.5", "55.5", "55.0", "57.5", "58.8", "56.5", "39.5", "25.0", "19.0", "16.0", "10.0", "-0.0"]
			]
		}],
		"uiType": 1,
		"values": [
			["50.0,40.0,41.0,40.0,42.5,52.0,58.0,60.7,61.0,61.0,59.0,58.2,57.5,55.5,55.0,57.5,58.8,56.5,39.5,25.0,19.0,16.0,10.0,-0.0"]
		]
	}, {
		"id": 3919,
		"name": "最大扭矩限制",
		"parentId": 133,
		"siniTreeBeans": [{
			"id": 135,
			"name": "最大扭矩限制",
			"parentId": 3919,
			"uiType": 5,
			"valueXs": ["500.0", "800.0", "900.0", "1000.0", "1200.0", "1400.0", "1600.0", "1800.0", "1900.0", "2000.0", "2100.0", "2200.0", "2300.0", "2400.0", "2600.0", "2800.0", "3000.0", "3200.0", "3250.0", "3300.0", "3600.0", "3800.0"],
			"values": [
				["200.0", "200.0", "200.0", "209.6", "271.3", "301.3", "310.5", "310.0", "310.0", "310.0", "310.0", "310.0", "310.0", "290.6", "289.9", "280.4", "275.2", "269.6", "263.9", "240.0", "240.0", "-0.0"]
			]
		}],
		"uiType": 1,
		"values": [
			["200.0,200.0,200.0,209.6,271.3,301.3,310.5,310.0,310.0,310.0,310.0,310.0,310.0,290.6,289.9,280.4,275.2,269.6,263.9,240.0,240.0,-0.0"]
		]
	}, {
		"id": 3920,
		"name": "烟度系数图1",
		"parentId": 133,
		"siniTreeBeans": [{
			"id": 136,
			"name": "烟度系数图1",
			"parentId": 3920,
			"uiType": 6,
			"valueXs": ["600.0", "750.0", "1000.0", "1200.0", "1400.0", "1600.0", "1800.0", "2000.0", "2200.0", "2400.0", "2600.0", "2800.0", "3000.0", "3200.0"],
			"valueYs": ["500.05499945000554", "599.9340006599934", "650.0934990650094", "700.0329996700034", "749.9725002749973", "799.9120008799913", "850.0714992850072", "900.0109998900011", "999.890001099989", "1099.989000109999", "1200.0879991200088", "1299.9670003299968", "1400.0659993400068", "1499.9450005499946", "1600.0439995600045", "2000.0000000000002"],
			"values": [
				["1.0", "1.187", "1.295", "1.293", "1.465", "1.483", "1.504", "1.498", "1.525", "1.538", "1.546", "1.554", "1.557", "1.559"],
				["1.0", "1.164", "1.27", "1.266", "1.465", "1.483", "1.504", "1.498", "1.525", "1.538", "1.546", "1.554", "1.557", "1.559"],
				["1.0", "1.153", "1.257", "1.252", "1.451", "1.47", "1.489", "1.48", "1.507", "1.526", "1.548", "1.558", "1.558", "1.558"],
				["1.0", "1.147", "1.252", "1.246", "1.443", "1.452", "1.467", "1.462", "1.492", "1.514", "1.539", "1.558", "1.558", "1.558"],
				["1.0", "1.141", "1.247", "1.233", "1.439", "1.442", "1.452", "1.438", "1.465", "1.494", "1.526", "1.558", "1.558", "1.558"],
				["1.0", "1.064", "1.17", "1.161", "1.383", "1.379", "1.386", "1.418", "1.444", "1.423", "1.469", "1.508", "1.508", "1.508"],
				["1.0", "1.046", "1.163", "1.148", "1.378", "1.365", "1.364", "1.397", "1.426", "1.411", "1.457", "1.508", "1.508", "1.508"],
				["1.0", "1.029", "1.156", "1.135", "1.332", "1.355", "1.346", "1.364", "1.394", "1.378", "1.427", "1.488", "1.488", "1.488"],
				["1.0", "0.995", "1.143", "1.109", "1.167", "1.242", "1.286", "1.345", "1.377", "1.365", "1.414", "1.468", "1.487", "1.489"],
				["1.0", "0.96", "1.129", "1.083", "1.101", "1.149", "1.236", "1.274", "1.305", "1.365", "1.414", "1.457", "1.48", "1.493"],
				["1.0", "1.0", "1.004", "1.052", "1.091", "1.11", "1.234", "1.268", "1.3", "1.25", "1.404", "1.446", "1.47", "1.487"],
				["1.0", "1.0", "1.0", "1.012", "1.044", "1.071", "1.188", "1.218", "1.23", "1.274", "1.3", "1.3", "1.3", "1.3"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.109", "1.162", "1.174", "1.209", "1.273", "1.35", "1.3", "1.3"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.049", "1.095", "1.123", "1.152", "1.193", "1.241", "1.284", "1.309"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.006", "1.021", "1.037", "1.056", "1.095", "1.134"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0"]
			]
		}],
		"uiType": 1,
		"values": [
			["1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.187,1.164,1.153,1.147,1.141,1.064,1.046,1.029,0.995,0.96,1.0,1.0,1.0,1.0,1.0,1.0,1.295,1.27,1.257,1.252,1.247,1.17,1.163,1.156,1.143,1.129,1.004,1.0,1.0,1.0,1.0,1.0,1.293,1.266,1.252,1.246,1.233,1.161,1.148,1.135,1.109,1.083,1.052,1.012,1.0,1.0,1.0,1.0,1.465,1.465,1.451,1.443,1.439,1.383,1.378,1.332,1.167,1.101,1.091,1.044,1.0,1.0,1.0,1.0,1.483,1.483,1.47,1.452,1.442,1.379,1.365,1.355,1.242,1.149,1.11,1.071,1.0,1.0,1.0,1.0,1.504,1.504,1.489,1.467,1.452,1.386,1.364,1.346,1.286,1.236,1.234,1.188,1.109,1.049,1.0,1.0,1.498,1.498,1.48,1.462,1.438,1.418,1.397,1.364,1.345,1.274,1.268,1.218,1.162,1.095,1.0,1.0,1.525,1.525,1.507,1.492,1.465,1.444,1.426,1.394,1.377,1.305,1.3,1.23,1.174,1.123,1.006,1.0,1.538,1.538,1.526,1.514,1.494,1.423,1.411,1.378,1.365,1.365,1.25,1.274,1.209,1.152,1.021,1.0,1.546,1.546,1.548,1.539,1.526,1.469,1.457,1.427,1.414,1.414,1.404,1.3,1.273,1.193,1.037,1.0,1.554,1.554,1.558,1.558,1.558,1.508,1.508,1.488,1.468,1.457,1.446,1.3,1.35,1.241,1.056,1.0,1.557,1.557,1.558,1.558,1.558,1.508,1.508,1.488,1.487,1.48,1.47,1.3,1.3,1.284,1.095,1.0,1.559,1.559,1.558,1.558,1.558,1.508,1.508,1.488,1.489,1.493,1.487,1.3,1.3,1.309,1.134,1.0"]
		]
	}, {
		"id": 3941,
		"name": "烟度系数图2",
		"parentId": 133,
		"siniTreeBeans": [{
			"id": 3942,
			"name": "烟度系数图2",
			"parentId": 3941,
			"uiType": 6,
			"valueXs": ["700.0", "740.0", "900.0", "1000.0", "1200.0", "1400.0", "1600.0", "2000.0", "2400.0", "2800.0", "3000.0", "3200.0"],
			"valueYs": ["449.8955010449896", "500.05499945000554", "549.9945000549995", "599.9340006599934", "650.0934990650094", "700.0329996700034", "749.9725002749973", "799.9120008799913", "850.0714992850072", "900.0109998900011", "999.890001099989", "1099.989000109999", "1200.0879991200088", "1299.9670003299968", "1400.0659993400068", "1499.9450005499946"],
			"values": [
				["1.0", "1.264", "1.263", "1.264", "1.265", "1.263", "1.265", "1.287", "1.307", "1.349", "1.37", "1.397"],
				["1.0", "1.264", "1.263", "1.264", "1.265", "1.263", "1.265", "1.287", "1.307", "1.349", "1.371", "1.397"],
				["1.0", "1.264", "1.263", "1.264", "1.265", "1.263", "1.265", "1.287", "1.307", "1.349", "1.371", "1.397"],
				["1.0", "1.264", "1.263", "1.264", "1.265", "1.263", "1.268", "1.287", "1.327", "1.386", "1.421", "1.46"],
				["1.0", "1.251", "1.252", "1.251", "1.251", "1.253", "1.259", "1.276", "1.315", "1.374", "1.406", "1.443"],
				["1.0", "1.236", "1.236", "1.237", "1.239", "1.24", "1.251", "1.275", "1.31", "1.368", "1.402", "1.436"],
				["1.0", "1.222", "1.225", "1.228", "1.236", "1.237", "1.243", "1.266", "1.301", "1.36", "1.395", "1.431"],
				["1.0", "1.0", "1.0", "1.105", "1.231", "1.239", "1.25", "1.273", "1.302", "1.366", "1.419", "1.47"],
				["1.0", "1.0", "1.0", "1.0", "1.125", "1.233", "1.242", "1.269", "1.306", "1.361", "1.403", "1.449"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.138", "1.24", "1.263", "1.298", "1.351", "1.385", "1.43"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.098", "1.225", "1.247", "1.3", "1.357", "1.389", "1.429"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.195", "1.213", "1.248", "1.342", "1.395", "1.432"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.125", "1.153", "1.183", "1.308", "1.347", "1.375"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.065", "1.084", "1.111", "1.156", "1.178"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0"],
				["1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0"]
			]
		}],
		"uiType": 1,
		"values": [
			["1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.264,1.264,1.264,1.264,1.251,1.236,1.222,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.263,1.263,1.263,1.263,1.252,1.236,1.225,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.264,1.264,1.264,1.264,1.251,1.237,1.228,1.105,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.265,1.265,1.265,1.265,1.251,1.239,1.236,1.231,1.125,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.263,1.263,1.263,1.263,1.253,1.24,1.237,1.239,1.233,1.138,1.098,1.0,1.0,1.0,1.0,1.0,1.265,1.265,1.265,1.268,1.259,1.251,1.243,1.25,1.242,1.24,1.225,1.195,1.125,1.0,1.0,1.0,1.287,1.287,1.287,1.287,1.276,1.275,1.266,1.273,1.269,1.263,1.247,1.213,1.153,1.065,1.0,1.0,1.307,1.307,1.307,1.327,1.315,1.31,1.301,1.302,1.306,1.298,1.3,1.248,1.183,1.084,1.0,1.0,1.349,1.349,1.349,1.386,1.374,1.368,1.36,1.366,1.361,1.351,1.357,1.342,1.308,1.111,1.0,1.0,1.37,1.371,1.371,1.421,1.406,1.402,1.395,1.419,1.403,1.385,1.389,1.395,1.347,1.156,1.0,1.0,1.397,1.397,1.397,1.46,1.443,1.436,1.431,1.47,1.449,1.43,1.429,1.432,1.375,1.178,1.0,1.0"]
		]
	}, {
		"id": 3921,
		"name": "发动机基础图转换扭矩",
		"parentId": 133,
		"siniTreeBeans": [{
			"id": 137,
			"name": "发动机基础图转换扭矩",
			"parentId": 3921,
			"uiType": 6,
			"valueXs": ["300.0", "600.0", "1000.0", "1200.0", "1400.0", "1600.0", "1800.0", "2000.0", "2200.0", "2400.0", "2600.0", "2800.0", "3000.0", "3200.0"],
			"valueYs": ["-0.0", "60.0", "120.0", "170.0", "220.0", "270.0", "320.0", "370.0", "420.0", "470.0", "520.0", "570.0"],
			"values": [
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["16.9", "9.5", "5.5", "7.86", "7.5", "8.1", "7.0", "7.6", "7.5", "7.8", "6.7", "6.9", "6.9", "8.5"],
				["26.7", "18.7", "15.3", "16.4", "16.4", "17.1", "16.2", "16.2", "16.4", "16.2", "15.4", "15.2", "15.6", "17.4"],
				["36.0", "30.7", "26.4", "26.3", "25.3", "25.3", "24.1", "24.5", "23.7", "24.0", "24.0", "24.5", "25.2", "25.9"],
				["43.8", "39.9", "35.1", "33.6", "33.4", "33.0", "31.8", "32.3", "32.5", "32.7", "32.4", "32.7", "33.9", "33.4"],
				["52.0", "49.9", "46.9", "44.1", "43.1", "41.3", "41.1", "40.9", "40.9", "40.9", "42.4", "41.9", "43.4", "42.4"],
				["58.6", "57.4", "56.7", "54.3", "53.7", "50.1", "50.7", "49.9", "49.5", "49.6", "48.3", "48.3", "50.0", "51.3"],
				["66.2", "64.7", "64.2", "64.7", "63.7", "59.9", "59.7", "58.6", "58.4", "59.3", "57.7", "58.2", "58.4", "62.4"],
				["74.7", "73.5", "73.4", "74.9", "74.3", "68.2", "68.0", "68.7", "67.8", "69.2", "68.7", "69.9", "68.9", "71.1"],
				["83.3", "82.0", "81.6", "84.9", "83.3", "78.5", "77.6", "78.5", "77.2", "79.3", "78.8", "79.5", "78.8", "80.5"],
				["91.0", "89.7", "90.3", "93.3", "92.98", "88.7", "88.0", "88.7", "87.7", "89.2", "87.8", "88.7", "87.5", "88.7"],
				["99.8", "98.1", "97.7", "101.8", "102.7", "98.3", "98.9", "98.7", "97.9", "98.1", "96.2", "98.8", "96.7", "96.7"]
			]
		}],
		"uiType": 1,
		"values": [
			["-0.0,16.9,26.7,36.0,43.8,52.0,58.6,66.2,74.7,83.3,91.0,99.8,-0.0,9.5,18.7,30.7,39.9,49.9,57.4,64.7,73.5,82.0,89.7,98.1,-0.0,5.5,15.3,26.4,35.1,46.9,56.7,64.2,73.4,81.6,90.3,97.7,-0.0,7.86,16.4,26.3,33.6,44.1,54.3,64.7,74.9,84.9,93.3,101.8,-0.0,7.5,16.4,25.3,33.4,43.1,53.7,63.7,74.3,83.3,92.98,102.7,-0.0,8.1,17.1,25.3,33.0,41.3,50.1,59.9,68.2,78.5,88.7,98.3,-0.0,7.0,16.2,24.1,31.8,41.1,50.7,59.7,68.0,77.6,88.0,98.9,-0.0,7.6,16.2,24.5,32.3,40.9,49.9,58.6,68.7,78.5,88.7,98.7,-0.0,7.5,16.4,23.7,32.5,40.9,49.5,58.4,67.8,77.2,87.7,97.9,-0.0,7.8,16.2,24.0,32.7,40.9,49.6,59.3,69.2,79.3,89.2,98.1,-0.0,6.7,15.4,24.0,32.4,42.4,48.3,57.7,68.7,78.8,87.8,96.2,-0.0,6.9,15.2,24.5,32.7,41.9,48.3,58.2,69.9,79.5,88.7,98.8,-0.0,6.9,15.6,25.2,33.9,43.4,50.0,58.4,68.9,78.8,87.5,96.7,-0.0,8.5,17.4,25.9,33.4,42.4,51.3,62.4,71.1,80.5,88.7,96.7"]
		]
	}],
	"uiType": 0
}, {
	"id": 138,
	"name": "调整整车厂信息",
	"parentId": 0,
	"siniTreeBeans": [{
		"id": 139,
		"name": "标定数据图号",
		"parentId": 138,
		"uiType": 4,
		"values": [
			["F", "G", "F", "0", "2", "-", "3", "8", "2", "3", "3", "5", "2", "S", "F", "B", "1", "-", "0", "4", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
		]
	}, {
		"id": 145,
		"name": "发动机编号",
		"parentId": 138,
		"uiType": 4,
		"values": [
			["F", "G", "F", "0", "2", "J", "0", "1", "1", "9", "0", "0", "0", "0", "0"]
		]
	}, {
		"id": 146,
		"name": "车辆VIN码",
		"parentId": 138,
		"uiType": 4,
		"values": [
			["L", "Z", "0", "B", "9", "P", "B", "3", "0", "J", "1", "0", "1", "4", "4", "9", "6"]
		]
	}, {
		"id": 147,
		"name": "整车厂名称",
		"parentId": 138,
		"uiType": 4,
		"values": [
			["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
		]
	}, {
		"id": 148,
		"name": "车辆型号",
		"parentId": 138,
		"uiType": 4,
		"values": [
			["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
		]
	}, {
		"id": 149,
		"name": "整车生产日期",
		"parentId": 138,
		"uiType": 4,
		"values": [
			["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
		]
	}],
	"uiType": 0
}, {
	"id": 3923,
	"name": "OBD限扭矩和油嘴加电",
	"parentId": 0,
	"siniTreeBeans": [{
		"id": 3924,
		"name": "OBD扭矩限制1",
		"parentId": 3923,
		"siniTreeBeans": [{
			"id": 3925,
			"name": "OBD扭矩限制1",
			"parentId": 3924,
			"uiType": 3,
			"values": [
				["OBD扭矩限制1"]
			]
		}],
		"uiType": 1,
		"values": [
			["OBD扭矩限制1"]
		]
	}, {
		"id": 3926,
		"name": "OBD扭矩限制2",
		"parentId": 3923,
		"siniTreeBeans": [{
			"id": 3927,
			"name": "OBD扭矩限制2",
			"parentId": 3926,
			"uiType": 5,
			"valueXs": ["635.0", "680.0", "800.0", "1000.0", "1200.0", "1400.0", "1600.0", "1800.0", "2000.0", "2200.0", "2400.0", "2500.0", "2600.0", "3000.0", "3100.0"],
			"values": [
				["1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0", "1500.0"]
			]
		}],
		"uiType": 1,
		"values": [
			["1500.0,1500.0,1500.0,1500.0,1500.0,1500.0,1500.0,1500.0,1500.0,1500.0,1500.0,1500.0,1500.0,1500.0,1500.0"]
		]
	}, {
		"id": 3928,
		"name": "油嘴加电时间",
		"parentId": 3923,
		"siniTreeBeans": [{
			"id": 3929,
			"name": "油嘴加电时间",
			"parentId": 3928,
			"uiType": 6,
			"valueXs": ["100000.0", "250000.0", "300000.0", "400000.0", "500000.0", "600000.0", "700000.0", "800000.0", "900000.0", "1000000.0", "1100000.0", "1200000.0", "1300000.0", "1400000.0", "1500000.0", "1600000.0"],
			"valueYs": ["-0.0", "0.5", "1.0", "1.5", "2.0", "5.0", "7.5", "10.0", "12.5", "15.0", "20.0", "25.0", "30.0", "35.0", "40.0", "45.0", "50.0", "60.0", "70.0", "80.0"],
			"values": [
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["339.2", "339.2", "339.2", "275.2", "245.6", "238.4", "227.2", "221.2", "207.2", "207.2", "212.4", "212.4", "209.2", "212.4", "217.6", "216.0"],
				["412.4", "412.4", "412.4", "319.6", "282.4", "268.0", "252.4", "245.6", "241.6", "236.8", "233.2", "228.0", "231.6", "230.0", "228.0", "231.6"],
				["483.6", "483.6", "483.6", "382.8", "314.0", "288.8", "273.2", "262.8", "257.6", "247.2", "243.6", "242.0", "242.0", "240.4", "236.8", "238.4"],
				["514.8", "514.8", "514.8", "417.6", "350.8", "308.0", "288.8", "276.8", "268.0", "256.0", "256.0", "252.4", "252.4", "247.2", "243.6", "245.6"],
				["699.2", "699.2", "669.2", "554.0", "455.2", "460.0", "457.2", "328.0", "333.6", "305.2", "290.8", "287.2", "280.4", "278.4", "270.0", "270.0"],
				["777.2", "777.2", "747.2", "642.8", "520.0", "511.2", "508.0", "489.2", "469.2", "382.0", "378.0", "349.6", "334.8", "295.6", "288.0", "282.0"],
				["869.2", "869.2", "835.2", "707.6", "572.0", "574.0", "558.0", "528.0", "511.2", "460.0", "417.6", "387.6", "364.4", "353.6", "308.8", "301.2"],
				["952.8", "952.8", "913.2", "759.2", "626.0", "628.0", "611.2", "471.2", "449.2", "445.2", "444.0", "388.8", "398.8", "391.6", "399.2", "383.6"],
				["1006.4", "1006.4", "970.0", "843.2", "697.2", "675.2", "611.2", "565.2", "538.0", "454.0", "491.2", "465.2", "444.0", "422.0", "413.2", "400.0"],
				["1147.2", "1147.2", "1110.0", "952.0", "816.0", "728.0", "675.2", "638.0", "614.0", "570.4", "584.0", "524.0", "497.6", "463.6", "447.6", "436.4"],
				["1288.0", "1288.0", "1254.0", "1064.0", "911.2", "816.0", "769.6", "701.2", "656.0", "633.2", "648.0", "585.2", "556.0", "522.4", "498.4", "490.4"],
				["1425.2", "1425.2", "1385.2", "1166.0", "1003.2", "898.4", "841.2", "778.8", "729.2", "671.2", "677.2", "626.4", "586.0", "566.0", "554.0", "546.0"],
				["1498.4", "1498.4", "1447.2", "1282.4", "1108.4", "1012.0", "911.6", "858.0", "817.2", "735.2", "733.2", "697.2", "649.2", "617.2", "596.0", "588.0"],
				["1498.4", "1578.0", "1521.2", "1347.2", "1194.0", "1092.0", "978.4", "923.2", "865.6", "792.0", "741.6", "706.8", "706.0", "675.2", "654.0", "637.6"],
				["1498.4", "1766.0", "1678.4", "1587.2", "1381.2", "1126.0", "1042.0", "1060.0", "998.0", "914.0", "871.6", "764.8", "695.6", "698.4", "679.2", "644.0"],
				["1498.4", "1980.0", "1906.0", "1825.2", "1572.8", "1303.2", "1186.0", "1100.0", "1032.0", "1004.0", "976.4", "885.6", "804.4", "778.4", "711.2", "723.2"],
				["1498.4", "2041.2", "1948.0", "1920.0", "1728.4", "1463.2", "1410.0", "1234.0", "1162.0", "1055.2", "1043.6", "983.6", "901.6", "840.4", "831.2", "882.0"],
				["1498.4", "2028.0", "1951.2", "1900.0", "1760.0", "1626.0", "1565.2", "1416.0", "1323.2", "1132.0", "1128.4", "1055.6", "981.6", "965.6", "958.0", "972.0"],
				["1498.4", "1989.2", "1884.0", "1827.2", "1783.2", "1703.2", "1644.0", "1466.0", "1372.0", "1190.0", "1235.2", "1204.0", "1103.6", "1093.2", "1026.0", "965.6"]
			]
		}],
		"uiType": 1,
		"values": [
			["-0.0,339.2,412.4,483.6,514.8,699.2,777.2,869.2,952.8,1006.4,1147.2,1288.0,1425.2,1498.4,1498.4,1498.4,1498.4,1498.4,1498.4,1498.4,-0.0,339.2,412.4,483.6,514.8,699.2,777.2,869.2,952.8,1006.4,1147.2,1288.0,1425.2,1498.4,1578.0,1766.0,1980.0,2041.2,2028.0,1989.2,-0.0,339.2,412.4,483.6,514.8,669.2,747.2,835.2,913.2,970.0,1110.0,1254.0,1385.2,1447.2,1521.2,1678.4,1906.0,1948.0,1951.2,1884.0,-0.0,275.2,319.6,382.8,417.6,554.0,642.8,707.6,759.2,843.2,952.0,1064.0,1166.0,1282.4,1347.2,1587.2,1825.2,1920.0,1900.0,1827.2,-0.0,245.6,282.4,314.0,350.8,455.2,520.0,572.0,626.0,697.2,816.0,911.2,1003.2,1108.4,1194.0,1381.2,1572.8,1728.4,1760.0,1783.2,-0.0,238.4,268.0,288.8,308.0,460.0,511.2,574.0,628.0,675.2,728.0,816.0,898.4,1012.0,1092.0,1126.0,1303.2,1463.2,1626.0,1703.2,-0.0,227.2,252.4,273.2,288.8,457.2,508.0,558.0,611.2,611.2,675.2,769.6,841.2,911.6,978.4,1042.0,1186.0,1410.0,1565.2,1644.0,-0.0,221.2,245.6,262.8,276.8,328.0,489.2,528.0,471.2,565.2,638.0,701.2,778.8,858.0,923.2,1060.0,1100.0,1234.0,1416.0,1466.0,-0.0,207.2,241.6,257.6,268.0,333.6,469.2,511.2,449.2,538.0,614.0,656.0,729.2,817.2,865.6,998.0,1032.0,1162.0,1323.2,1372.0,-0.0,207.2,236.8,247.2,256.0,305.2,382.0,460.0,445.2,454.0,570.4,633.2,671.2,735.2,792.0,914.0,1004.0,1055.2,1132.0,1190.0,-0.0,212.4,233.2,243.6,256.0,290.8,378.0,417.6,444.0,491.2,584.0,648.0,677.2,733.2,741.6,871.6,976.4,1043.6,1128.4,1235.2,-0.0,212.4,228.0,242.0,252.4,287.2,349.6,387.6,388.8,465.2,524.0,585.2,626.4,697.2,706.8,764.8,885.6,983.6,1055.6,1204.0,-0.0,209.2,231.6,242.0,252.4,280.4,334.8,364.4,398.8,444.0,497.6,556.0,586.0,649.2,706.0,695.6,804.4,901.6,981.6,1103.6,-0.0,212.4,230.0,240.4,247.2,278.4,295.6,353.6,391.6,422.0,463.6,522.4,566.0,617.2,675.2,698.4,778.4,840.4,965.6,1093.2,-0.0,217.6,228.0,236.8,243.6,270.0,288.0,308.8,399.2,413.2,447.6,498.4,554.0,596.0,654.0,679.2,711.2,831.2,958.0,1026.0,-0.0,216.0,231.6,238.4,245.6,270.0,282.0,301.2,383.6,400.0,436.4,490.4,546.0,588.0,637.6,644.0,723.2,882.0,972.0,965.6"]
		]
	}],
	"uiType": 0
}, {
	"id": 3930,
	"name": "增压基础图",
	"parentId": 0,
	"siniTreeBeans": [{
		"id": 3931,
		"name": "增压基础图1",
		"parentId": 3930,
		"siniTreeBeans": [{
			"id": 3932,
			"name": "增压基础图1",
			"parentId": 3931,
			"uiType": 3,
			"values": [
				["增压基础图1"]
			]
		}],
		"uiType": 1,
		"values": [
			["增压基础图1"]
		]
	}, {
		"id": 3933,
		"name": "高度相关1增加",
		"parentId": 3930,
		"siniTreeBeans": [{
			"id": 3934,
			"name": "高度相关1增加",
			"parentId": 3933,
			"uiType": 3
		}],
		"uiType": 1
	}, {
		"id": 3935,
		"name": "高度相关2增加",
		"parentId": 3930,
		"siniTreeBeans": [{
			"id": 3936,
			"name": "高度相关2增加",
			"parentId": 3935,
			"uiType": 3
		}],
		"uiType": 1
	}, {
		"id": 3937,
		"name": "增压设定值的上限",
		"parentId": 3930,
		"siniTreeBeans": [{
			"id": 3938,
			"name": "增压设定值的上限",
			"parentId": 3937,
			"uiType": 6,
			"valueXs": ["700.0", "1012.0", "1500.0", "2000.0", "2500.0", "3000.0", "3500.0", "4000.0", "4500.0", "5012.0", "5013.0", "5014.0", "5015.0", "5016.0", "5017.0", "5018.0"],
			"valueYs": ["600.0", "750.0", "860.0", "1200.0", "1600.0", "1700.0", "1720.0", "1740.0", "1760.0"],
			"values": [
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"]
			]
		}],
		"uiType": 1,
		"values": [
			["-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0"]
		]
	}, {
		"id": 3939,
		"name": "进气与高度相关值",
		"parentId": 3930,
		"siniTreeBeans": [{
			"id": 3940,
			"name": "进气与高度相关值",
			"parentId": 3939,
			"uiType": 6,
			"valueXs": ["-0.0", "850.0", "1008.0", "1250.0", "1500.0", "1750.0", "2000.0", "2250.0", "2500.0", "2750.0", "3003.0", "3507.0", "4000.0", "4250.0", "4405.0", "4746.0"],
			"valueYs": ["-0.0", "5.0", "10.0", "15.0", "20.0", "25.0", "30.0", "35.0", "40.0", "50.0", "51.0", "52.0", "53.0", "54.0", "55.0", "60.0"],
			"values": [
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"],
				["-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0", "-0.0"]
			]
		}],
		"uiType": 1,
		"values": [
			["-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0"]
		]
	}],
	"uiType": 0
}]