--- 
title: 在vue中使用
--- 
## 介绍
**使用svg制作vue进度条,线条形,环形,扇形,矩形,椭圆的常规图形进度条,也可以制作其他复杂图形的进度条,三角形,多边形,自定义图形等**
## 源码地址   
    https://github.com/hemyWen/hemy-progress
## 安装使用
```javascript
   npm install hemy-progress
   import HemyProgress from 'hemy-progress'
```
## 基本使用
```html
<HemyProgress
 class="circle-item"
 type="circle"
 backStrokeColor="#ffff66"
 strokeColor="#48D1CC"
 :percentage="60"
/>
```
## 实例
### 1. 线条型 type=line 
- 自定义文字样式 textStyle 与文字内容 format=function(e){} 
- strokeColor:进度条颜色
- backStrokeColor:背景颜色

 ```html
<hemy-progress type='line' :percentage='percentage' />
<hemy-progress type='line' :percentage='percentage' strokeColor='red' backStrokeColor='green' :textStyle="{color:'#fff'}" :format="e=>'当前进度'+e+'%'" />
 ````
### 2. 环形 type=circle

```html
<hemy-progress :width='150' type='circle' :percentage='percentage' />
<hemy-progress :width='150' type='circle' :percentage='percentage' strokeColor='green' backStrokeColor="#ffff66" fillColor='#ef8989' />
```

- 自定义填充颜色 fillColor='#ef8989'
- strokeLinecap:设置进度条线帽样式butt:正常结尾,round:圆润,square:两端为方形
- strokeWidth:进度条宽度,backStrokeWidth:背景进度条的宽度

### 3. 扇形 type=circle时,设置isFan=true
```html
  <hemy-progress 
    type="circle"  
    backStrokeColor="#FFC0CB" 
    strokeColor="#663399" 
    :isFan="true" 
    :percentage="50" 
    :textStyle="{ color: '#fff', fontSize:'25px' }" 
  />
```
- 外框为矩形时,半径设置为宽度的一半
```html
  <hemy-progress  
    type="circle" 
    backStrokeColor="#ff66ff"  
    strokeColor="#9966ff"  
    :width="200"  
    :radius="100"  
    :isFan="true"  
    :percentage="63"  
    :textStyle="{ color: '#fff', fontSize: '25px' }" 
  />
```

### 4. 矩形 type=rect
- strokeLinejoin:线段连接处的样式,miter:正常连接,round:圆润,bevel:切除连接处的尖尖部分
- strokeMiterlimit 连接处宽度和线条宽度的比
```html
<hemy-progress
  type="rect"
  :percentage="60"
  :strokeWidth="10"
  strokeLinecap="round"
  strokeLinejoin="round"
  fillColor="#330033"
  backStrokeColor="#66ffff"
  strokeColor="#996633"
  :textStyle="{ fontSize: '25px', color: '#fff' }"
  :format="(e) => '加载中' + e + '%'"
/>
```

### 5. 椭圆 type=ellipse
```html
<hemy-progress type="ellipse" backStrokeColor="#445469" :percentage="20" :width="400" />
```
### 6. 虚线样式
- isDashed:是否为虚线
- isBackDashed:背景是否为虚线
- dashedLength:虚线长度
- dashedDistance:虚线间隔
```html
<hemy-progress type='line' :percentage='30' :isDashed='true' />
<hemy-progress style='margin-top:10px' type='line' :percentage='40' :dashedLength='10' :dashedDistance='2' strokeColor='red'  :isDashed='true' :isBackDashed='false' />
<hemy-progress :width='150'  :isDashed='true' type='circle' :dashedLength='10' :dashedDistance='2' :percentage='50'  />
<hemy-progress   :isDashed='true' type='rect' :dashedLength='10' :dashedDistance='2' :percentage='50'  />
```

### 7. 自定义动态颜色
- strokeColor传入一个颜色数组
```html
  <hemy-progress
    class="circle-item"
    type="circle"
    strokeLinecap="round"
    :strokeColor="['#6f7ad3', '#1989fa', '#5cb87a', '#e6a23c', '#f56c6c']"
    :percentage="p1"
    :radius="80"
    :strokeWidth="20"
    :backStrokeWidth="20"
  />
  <hemy-progress
    type="circle"
    backStrokeColor="#FFC0CB"
    :strokeColor="['#6f7ad3', '#1989fa', '#5cb87a', '#e6a23c', '#f56c6c']"
    :isFan="true"
    :percentage="p1"
    :textStyle="{ color: '#fff', fontSize: '25px' }"
  />
  <hemy-progress
    type="rect"
    :percentage="p1"
    :width="200"
    :height="100"
    :strokeWidth="10"
    :backStrokeWidth="10"
    strokeColor="#07c160"
    strokeLinecap="square"
    strokeLinejoin="miter"
    :strokeColor="['#6f7ad3', '#1989fa', '#5cb87a', '#e6a23c', '#f56c6c']"
  />
  <div>
    <button @click="decrease">-</button>
    <button style="margin-left: 10px" @click="increase">+</button>
  </div>
```
```javascript
    methods:{
        decrease() {
          this.p1 -= 10
          if (this.p1 <= 0) {
            this.p1 = 0
          }
        },
        increase() {
          this.p1 += 10
          if (this.p1 >= 100) {
            this.p1 = 100
          }
        }
    }  
```


### 8. 复杂图形

- pathLength  自定义图形路径的总长度,如果存在，路径将进行缩放，以便计算各点相当于此值的路径长度
- d 当type=path,图形的定义路径,必填
```html
  <hemy-progress
     d="m24.54542,111.05605l82.88714,0l25.61276,-84.69244l25.61278,84.69244l82.88713,0l-67.05698,52.34221l25.61409,84.69244l-67.05701,-52.34363l-67.057,52.34363l25.6141,-84.69244l-67.057,-52.34221l-0.00001,0z"
    type="path"
    backStrokeColor="#445469"
    :percentage="20"
    :width="430"
    :height="300"
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeColor="#feb23c"
  />
```


### 9. 配合动画

```html 
<hemy-progress
    class="progress-animation"
    d="m151.58526,148.1539c44.11559,-129.94309 216.96193,0 0,167.06968c-216.96193,-167.06968 -44.11559,-297.01277 0,-167.06968z"
    type="path"
    fillColor="red"
    backStrokeColor="none"
    strokeColor="black"
    :strokeWidth="10"
    :percentage="100"
    :width="400"
    :height="400"
    :pathLength="1000"
    strokeLinejoin="round"
    strokeLinecap="round"
  />
<style>
  .progress-animation .progress-path__item {
    animation: mypath 5s linear infinite;
  }
  @keyframes mypath {
    from {
      stroke-dashoffset: 1000;
    }

    to {
      stroke-dashoffset: 0;
    }
  }
</style>
```
## API
<table>
  <tr>
    <th>表格</th>
    <th>值类型</th>
    <th>是否必填</th>
    <th>描述</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>否</td>
    <td>进度条类型,line=线条,circle=环形,ellipse=椭圆,rect=矩形,path=自定义图形</td>
    <td>line</td>
  </tr>
  <tr>
    <td>percentage</td>
    <td>Number</td>
    <td>是</td>
    <td>进度条百分比</td>
    <td>100</td>
  </tr>
  <tr>
    <td>fillColor</td>
    <td>String</td>
    <td>否</td>
    <td>闭合图形填充颜色,type!==line生效</td>
    <td>none</td>
  </tr>
  <tr>
    <td>strokeColor</td>
    <td>String,Function,Array</td>
    <td>否</td>
    <td>
      进度条颜色,可接受字符串,参数为percentage的函数,数组, ['#f56c6c','#e6a23c','#5cb87a','#1989fa','#6f7ad3'] 或者 [
      {color: '#f56c6c', percentage: 20}, {color: '#e6a23c', percentage: 40}, {color: '#5cb87a', percentage: 60},
      {color: '#1989fa', percentage: 80}, {color: '#6f7ad3', percentage: 100} ]
    </td>
    <td>#409eff</td>
  </tr>
  <tr>
    <td>backStrokeColor</td>
    <td>String</td>
    <td>否</td>
    <td>背景进度条颜色</td>
    <td>#eee</td>
  </tr>
  <tr>
    <td>backStrokewidth</td>
    <td>Number</td>
    <td>否</td>
    <td>背景进度条宽度</td>
    <td>5</td>
  </tr>
  <tr>
    <td>textStyle</td>
    <td>Object</td>
    <td>否</td>
    <td>文字样式,例:{color:'red',fontSize:'25px'}</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>showText</td>
    <td>Boolean</td>
    <td>否</td>
    <td>是否显示文字</td>
    <td>true</td>
  </tr>
  <tr>
    <td>format</td>
    <td>function(percentage)</td>
    <td>否</td>
    <td>自定义进度条文字内容</td>
    <td></td>
  </tr>
  <tr>
    <td>width</td>
    <td>Number</td>
    <td>否</td>
    <td>画布宽,当type=circle为画布大小,type=rect时为矩形宽</td>
    <td>200</td>
  </tr>
  <tr>
    <td>height</td>
    <td>Number</td>
    <td>否</td>
    <td>画布高,type=rect时为矩形高</td>
    <td>200</td>
  </tr>
  <tr>
    <td>strokeWidth</td>
    <td>Number</td>
    <td>否</td>
    <td>进度条宽</td>
    <td>10</td>
  </tr>
  <tr>
    <td>strokeLinecap</td>
    <td>String</td>
    <td>否</td>
    <td>环形条线帽,butt:正常结尾,round:圆润,square:两端为方形</td>
    <td>round</td>
  </tr>
  <tr>
    <td>strokeLinejoin</td>
    <td>String</td>
    <td>否</td>
    <td>线段连接处的样式,miter:正常连接,round:圆润,bevel:切除连接处的尖尖部分</td>
    <td>miter</td>
  </tr>
  <tr>
    <td>strokeMiterlimit</td>
    <td>Number</td>
    <td>否</td>
    <td>连接处宽度和线条宽度的比</td>
    <td>4</td>
  </tr>
  <tr>
    <td>radius</td>
    <td>Number</td>
    <td>否</td>
    <td>环形半径</td>
    <td>50</td>
  </tr>
  <tr>
    <td>isFan</td>
    <td>Boolean</td>
    <td>否</td>
    <td>是否为扇形,type=circle时生效</td>
    <td>false</td>
  </tr>
  <tr>
    <td>borderRadius</td>
    <td>Number</td>
    <td>否</td>
    <td>type=rect的圆角半径</td>
    <td>0</td>
  </tr>
  <tr>
    <td>rx</td>
    <td>Number</td>
    <td>否</td>
    <td>type=ellispe椭圆时的长半轴</td>
    <td>100</td>
  </tr>
  <tr>
    <td>ry</td>
    <td>Number</td>
    <td>否</td>
    <td>type=ellispe椭圆时的短半轴</td>
    <td>50</td>
  </tr>
  <tr>
    <td>pathLength</td>
    <td>Number</td>
    <td>否</td>
    <td>自定义图形路径的总长度,如果存在，路径将进行缩放，以便计算各点相当于此值的路径长度</td>
    <td>1000</td>
  </tr>
  <tr>
    <td>d</td>
    <td>String</td>
    <td>否</td>
    <td>当type=path,图形的定义路径,必填</td>
    <td></td>
  </tr>
  <tr>
    <td>isDashed</td>
    <td>Boolean</td>
    <td>否</td>
    <td>进度条是否为虚线</td>
    <td>false</td>
  </tr>
  <tr>
    <td>isBackDashed</td>
    <td>Boolean</td>
    <td>否</td>
    <td>背景是否为虚线</td>
    <td>true</td>
  </tr>
  <tr>
    <td>dashedLength</td>
    <td>Number</td>
    <td>否</td>
    <td>虚线长度</td>
    <td>5</td>
  </tr>
  <tr>
    <td>dashedDistance</td>
    <td>Number</td>
    <td>否</td>
    <td>虚线间隔</td>
    <td>5</td>
  </tr>
  <tr>
    <td>isTransition</td>
    <td>Boolean</td>
    <td>否</td>
    <td>是否有过度动画</td>
    <td>true</td>
  </tr>
</table>

## 更新记录
#### 2022.08.24  <Badge text="1.3.0" type="tip"/>
- 新增属性:是否过渡动画
#### 2022.08.18  <Badge text="1.2.2" type="tip"/>
- 新增虚线样式

<script>
  export default {
    data(){
      return {
        percentage:60,
        p1:0
      }
    },
    methods: {
      decrease() {
        this.p1 -= 10
        if (this.p1 <= 0) {
          this.p1 = 0
        }
      },
      increase() {
        this.p1 += 10
        if (this.p1 >= 100) {
          this.p1 = 100
        }
      }
    }
  };
</script>
<style>
.progress-animation .progress-path__item {
  animation: mypath 5s linear infinite;
}
@keyframes mypath {
  from {
    stroke-dashoffset: 1000;
  }

  to {
    stroke-dashoffset: 0;
  }
}
</style>
