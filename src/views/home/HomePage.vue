<template>
  <el-row type="flex"  >
    <el-col :span="8">
      <el-card :body-style="{ padding: '0px' }" class="card">
        <div>
          <img :src="userImg" class="image" />

          <div class="tags">
            <span class="username" style="padding: 14px" margin-left="20px">
              <i class="el-icon-user-solid"></i>
              WowDarkGo </span
            ><el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
              size="small"
            >
              {{ tag }}
            </el-tag>
          </div>
          <div class="time">
            <p class="timeText">登入时间: {{ timePlace }}</p>
          </div>
          <div class="bottom clearfix">
            <el-popconfirm @onConfirm="quit()" title="确定退出吗？">
              <el-button slot="reference" class="button">登出</el-button>
            </el-popconfirm>
          </div>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 410px; max-height: 100%">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="todayBuy" label="今日购买" width="100">
          </el-table-column>
          <el-table-column prop="name" label="商品" width="100">
          </el-table-column>
          <el-table-column prop="totalBuy" label="总计购入"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>
      <el-col :span="16">
        <div class="line2">
          <div class="num">
            <el-card
              v-for="item in countData"
              :key="item.name"
              class="num_card"
              shadow="hover"
            >
              <i class="icon" :class="item.icon"></i>
              <div class="detail">
                <p class="txt">
                  {{ item.name }}
                </p>
                <p class="number">¥{{ item.value }}</p>
              </div>
            </el-card>
          </div>
          <div class="graph">
            <el-card class="square">
              <div style="height: 300px; width: 350px" ref="userEcharts"></div>
            </el-card>
            <el-card class="circle">
              <div style="height: 300px; width: 300px" ref="circleChart"></div>
            </el-card>
          </div>
        </div>
      </el-col>

  </el-row>
</template>

<script>
import { getData } from "../../../API/API";
import * as echarts from "echarts";
import Mock from "mockjs";
export default {
  name: "HomePage",
  data() {
    return {
      userImg: require("../../assets/head.jpg"),
      timePlace: undefined,
      dynamicTags: ["tag1", "tag2", "tag3"],
      inputVisible: false,
      inputValue: "",
      tableData: [],
      countData: [
        {
          name: "已支付",
          value: Mock.Random.float(0, 100, 0, 0),
          icon: "el-icon-circle-check",
        },
        {
          name: "未支付",
          value: Mock.Random.float(0, 100, 0, 0),
          icon: "el-icon-circle-close",
        },
        {
          name: "待处理",
          value: Mock.Random.float(0, 100, 0, 0),
          icon: "el-icon-s-help",
        },
      ],
    }; 
  },
  methods: {
    getTimer() {
      let time = new Date();
      let h = time.getHours();
      h = h < 10 ? "0" + h : h;
      let m = time.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = time.getSeconds();
      s = s < 10 ? "0" + s : s;
      return h + ":" + m + ":" + s;
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    quit() {
      alert("222");
    },
  },
  mounted() {
    this.timePlace = this.getTimer();
    getData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        this.tableData = data.tableData;
        //开始用户界面柱状
        const userOption = {
          legend: {
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: data.userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              intervel: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: "新用户",
              data: data.userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活用户",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ],
        };
        echarts.init(this.$refs.userEcharts).setOption(userOption);
      }

      // 开始饼图

      echarts.init(this.$refs.circleChart).setOption({
        series: [
          {
            name: "消费结构",
            roseType: "angle",
            type: "pie", // 设置图表类型为饼图
            radius: "50%", // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            data: data.videoData,
            itemStyle: {
              normal: {
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            // 数据数组，name 为数据项名称，value 为数据项
          },
        ],
      });
    });
  },
};
</script>

<style scoped>
/* 用户信息模块 */
.user {
  height: 300px;
}
.card {
  display: flex;
  position: relative;
}
.time {
  font-size: 13px;
  color: #999;
  border-top: 1px solid #999999 !important;
  margin-top: 10px;
}

.timeText {
  margin-top: 20px;
  margin-left: 20px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  float: right;
}
.image {
  width: 20%;
  display: block;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 30%;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.tags {
  min-width: 100px;
  display: flex;
  justify-content: space-between;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.username {
  color: #caa173;
  font-weight: bold;
}

/* 钱模块 */
.num {
  /* position: absolute; */
  /* right: 0px;
  top: 0; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 20px;
}
.num_card {
  width: 200px;
  height: 240px;
  margin-right: 20px;
  padding-right: 40px;
  display: flex;
  justify-content: flex-end;
}
.txt {
  font-size: 20px;
  text-align: center;
  line-height: 20px;
  margin: 40px;
}
.icon {
  font-size: 40px;
  color: #629eff;
}
.number {
  font-size: 40px;
  text-align: center;
}
.circle {
margin-left: 30px;
}

.graph {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-left: 20px;
}

.line2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>>
