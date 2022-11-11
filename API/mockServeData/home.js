//mock数据模拟
import Mock from 'mockjs'

//图表数据
function getData() {
    return Mock.Random.float(0, 10000, 0, 0)
}

let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 10000, 0, 0),
                    小米: Mock.Random.float(100, 10000, 0, 0),
                    三星: Mock.Random.float(100, 10000, 0, 0),
                    中兴: Mock.Random.float(100, 10000, 0, 0),
                    锤子: Mock.Random.float(100, 10000, 0, 0),
                    黑鲨: Mock.Random.float(100, 10000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                //饼图数据
                videoData: [{
                    name: '小米',
                    value: 1999
                }, {
                    name: '三星',
                    value: 2999
                }, {
                    name: '苹果',
                    value: 11999
                }, {
                    name: '中兴',
                    value: 3999
                }, {
                    name: '锤子',
                    value: 5999
                }, {
                    name: '黑鲨',
                    value: 4999
                }, ],
                //柱状
                userData: [
                    { date: '周一', new: 23, active: 211 },
                    { date: '周三', new: 21, active: 985 },
                    { date: '周四', new: 20, active: 321 },
                    { date: '周五', new: 29, active: 443 },
                    { date: '周六', new: 27, active: 565 },
                    { date: '周日', new: 28, active: 404 },
                ],
                tableData: [{
                        name: '小米',
                        todayBuy: getData(),
                        monthBuy: 2123,
                        totalBuy: getData(),
                    },
                    {
                        name: '苹果',
                        todayBuy: getData(),
                        monthBuy: 56123,
                        totalBuy: 114514,
                    }, {
                        name: '三星',
                        todayBuy: getData(),
                        monthBuy: 0,
                        totalBuy: 100,
                    }, {
                        name: '中兴',
                        todayBuy: getData(),
                        monthBuy: 9999,
                        totalBuy: 999999,
                    }, {
                        name: '锤子',
                        todayBuy: getData(),
                        monthBuy: 1200,
                        totalBuy: getData(),
                    }, {
                        name: '黑鲨',
                        todayBuy: getData(),
                        monthBuy: 1000,
                        totalBuy: getData(),
                    },
                ]
            }
        }
    }
}