--- 
title: 进度条
--- 
## 介绍
**使用svg制作进度条,线条形,环形,扇形,矩形,椭圆的常规图形进度条,也可以制作其他复杂图形的进度条,三角形,多边形,自定义图形等**
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
1. 线条型 type=line 
 ```html
<hemy-progress type='line' :percentage='percentage' />
<hemy-progress type='line' :percentage='percentage' strokeColor='red' backStrokeColor='green' :textStyle="{color:'#fff'}" :format="e=>'当前进度'+e+'%'" />
 ````
 <hemy-progress type='line' :percentage='percentage' />
- 自定义文字样式 textStyle 与文字内容 format=function(e){} 
- strokeColor:进度条颜色
- backStrokeColor:背景颜色

<hemy-progress style='margin-top:10px' type='line' :percentage='percentage' strokeColor='red' backStrokeColor='green' :textStyle="{color:'#fff'}" :format="e=>'当前进度'+e+'%'" />

2. 环形 type=circle

```html
<hemy-progress :width='150' type='circle' :percentage='percentage' />
<hemy-progress :width='150' type='circle' :percentage='percentage' strokeColor='green' backStrokeColor="#ffff66" fillColor='#ef8989' />
```
<hemy-progress :width='150' type='circle' :percentage='percentage'  />

- 自定义填充颜色 fillColor='#ef8989'
- strokeLinecap:设置进度条线帽样式butt:正常结尾,round:圆润,square:两端为方形
- strokeWidth:进度条宽度,backStrokeWidth:背景进度条的宽度

<hemy-progress 
    :width='150' 
    :strokeWidth='10' 
    type='circle' 
    strokeLinecap='round' 
    :percentage='percentage' 
    strokeColor='green' 
    backStrokeColor="#ffff66" 
    fillColor='#ef8989' 
/>
3. 扇形 type=circle时,设置isFan=true
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
  <hemy-progress 
    type="circle"  
    backStrokeColor="#FFC0CB" 
    strokeColor="#663399" 
    :isFan="true" 
    :percentage="50" 
    :textStyle="{ color: '#fff', fontSize:'25px' }" 
  />
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
4. 矩形 type=rect
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
<hemy-progress type="rect" :percentage="60" :strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"  fillColor="#330033" backStrokeColor="#66ffff" strokeColor="#996633" :textStyle="{ fontSize: '25px', color: '#fff' }" :format="(e) => '加载中' + e + '%'" />
5. 椭圆 type=ellipse
```html
<hemy-progress type="ellipse" backStrokeColor="#445469" :percentage="20" :width="400" />
```
<hemy-progress type="ellipse" backStrokeColor="#445469" :percentage="20" :width="400" />
6. 自定义动态颜色
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
- strokeColor=['#6f7ad3', '#1989fa', '#5cb87a', '#e6a23c', '#f56c6c']  传入颜色数组
<div style='display:flex;overflow:auto'>
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
</div>

<div>
  <button v-on:click="decrease">- </button>
  <button style="margin-left: 10px" v-on:click="increase">+</button>
</div>


7. 复杂图形

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
<div style='display:flex;overflow:auto'>
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
  <hemy-progress
    d="m11.91262,141.38784l38.41213,-81.1099l102.43234,0l38.41212,81.1099l-38.41212,81.1099l-102.43234,0l-38.41213,-81.1099z"
    type="path"
    backStrokeColor="#445469"
    fillColor="#5B9BA2"
    :strokeWidth="10"
    :percentage="20"
    :width="400"
    :height="300"
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeColor="#feb23c"
  />
  <hemy-progress
    d="m205.58865,207.26894c4.72522,-5.9053 9.24437,-12.71333 13.22542,-18.82466l-119.28624,-2.80423l-16.36196,24.14976l-51.83504,-2.07417c6.49499,-10.99509 13.61002,-23.91136 18.88519,-33.61275l-18.76473,-32.61405l55.30683,0l11.25319,20.37749l121.78832,0l-15.1069,-20.33188c4.66219,-6.40735 11.56197,-14.95808 15.30486,-19.44136l40.95944,51.81951l-41.05261,52.62338l-14.31579,-19.26703l0.00002,0.00001z"
    type="path"
    backStrokeColor="#445469"
    fillColor="none"
    :strokeWidth="5"
    :pathLength="2000"
    :percentage="20"
    :width="300"
    :height="300"
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeColor="#feb23c"
  />
</div>

8. 配合动画

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
<div style='display:flex;overflow:auto'>
  <hemy-progress
    class="progress-animation"
    d="m97.75122,120.76251l-13.74195,0c0,0 -10.68821,-0.98544 -13.74195,11.82507c-5.43957,9.23818 -15.60283,5.17339 -18.32257,8.86874c-3.00609,0 -9.92477,1.72446 -9.16134,5.91241c0.76344,4.18807 3.05385,4.92709 2.29031,5.91254c-0.76344,0.98544 -2.86291,21.18653 17.17747,20.69381c0,0 2.09947,5.91241 11.45164,0c0,0 2.09937,-2.21718 5.72572,1.47804c3.62645,3.69535 10.87904,6.40526 12.59685,5.91254c1.71771,-0.49272 12.59675,23.40359 12.59675,57.6468c0,34.24334 14.69632,57.89323 19.46777,59.1251c0,0 11.59472,47.66947 12.02415,90.16556c0,0 2.86291,17.9839 -9.73384,17.73748c-6.79939,7.29828 -9.80548,12.28694 -5.72582,11.82507c0,0 1.57463,3.32565 4.58062,2.9562c1.30172,-0.60006 -10.52115,10.9012 -5.72582,10.34691c0,0 2.09958,7.88329 10.30644,2.9562c0,0 12.59685,1.47817 13.74195,-8.86874c1.1452,-10.34691 1.71781,-27.16051 6.87103,-25.12818c0,0 0.76334,-82.52856 6.87093,-88.68739c0,0 30.33869,3.23257 65.27425,-23.65001c9.92477,-7.637 20.04028,-18.96935 21.75798,7.39057c1.71781,26.35992 32.44629,48.28547 36.64524,63.55934c4.19895,15.274 6.48926,9.85418 5.72572,45.82186c0,0 -7.25259,-2.21718 -12.59675,5.91254c-3.43551,4.43437 1.1452,4.43437 1.1452,4.43437c0,0 -2.67208,3.44893 5.72582,2.95633c0,0 1.1451,1.66276 6.87093,0c0,0 9.543,0.73902 8.01613,-8.86874c0,0 0.5726,-54.69073 3.43551,-51.7344c2.86291,2.9562 17.55913,20.20096 17.17737,57.6468c0,0 -6.48926,1.23174 -6.87093,10.34691c0,0 -3.24458,4.68067 1.1451,5.91254c0,0 6.15525,2.03233 8.01613,0c0,0 7.8254,3.44893 8.01613,-8.86887c0.19083,-12.31766 -6.29832,-55.06004 -3.43541,-65.03738c0,0 -24.62099,-18.47663 -28.62911,-75.38441c0,0 11.45164,48.28547 48.09688,39.90933c0,0 2.67208,-1.47804 -1.1452,-2.9562c-3.81728,-1.47817 -33.97316,3.69535 -41.22586,-44.34369c-5.2964,-34.36649 -1.28828,-38.06171 -18.32257,-51.7344c-22.90319,-28.26911 -79.97047,0.2463 -97.33867,-8.86874c-16.03226,-10.34691 -16.60486,-10.53163 -34.35483,-17.73748c-18.17949,-12.37937 -15.07789,-26.60622 -28.62901,-45.82186c-10.37808,-18.01463 -10.49727,-16.01302 -11.45164,-17.73748c-0.95437,-1.72459 -0.19083,-9.85418 -12.59675,-11.82507z"
    type="path"
    backStrokeColor="#0a0b16"
    :strokeWidth="10"
    :percentage="100"
    :width="400"
    :height="500"
    :pathLength="1000"
    strokeLinejoin="round"
    strokeLinecap="round"
  />
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
</div>

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
    <td>进度条类型,line=线条,circle=环形</td>
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
    <td>环形宽度,type=circle时生效</td>
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
</table>



<script>
  import HemyProgress from 'hemy-progress';
  export default {
    components:{ HemyProgress },
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
