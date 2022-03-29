# Windows 客户端 使用方法

## 前言
Windows 系统是不自带Java运行时环境的，所以我们需要自行去下载<br>
地址：[下载Java](https://www.java.com/zh-CN/download/manual.jsp)<br>
Java8+都可以运行<br>
如果你的Java没有配置环境变量，那么请务必在运行时填绝对路径

## 下载Java
点击下载按钮，下载64位版本<br>
进去之后，点![image051bac1d2b715cfa.png](/image051bac1d2b715cfa.png)这个链接，然后跟着安装程序一路下一步即可。
## 下载客户端
::: tip 提示

[github](https://github.com/MossFrp/MossFrpClient-Java/releases/download/V0.5.2.1.2153/MossFrpStandard.jar)下载
:::

::: danger 注意！
GitHub 由于受到不可抗力影响，国内访问速度可能变慢或受阻<br>
根据个人需要，请自备魔法或者使用镜像站
:::

## 启动客户端
找到你存放客户端的目录（本例中存放于“下载”目录）<br>
![imagec0d63d35d6f3f051.png](/imagec0d63d35d6f3f051.png)
然后右键空白区域，选择“在Windows终端中打开”
![image04d1d8b9a17b1b6d.png](/image04d1d8b9a17b1b6d.png)
![image6c8c7d4e3055bd6a.png](/image6c8c7d4e3055bd6a.png)
::: tip 提示
根据个人需要，可以创建cmd或者直接加参数运行
:::
打开终端之后，输入以下命令（我的终端美化过）
``` bash
java -jar MossFrpStandard.jar -MossFrp=nb
```
（我知道大家看不清，所以我调了下）
![image3edef43749c4c12e.png](/image3edef43749c4c12e.png)
然后回车执行，正常情况应该如下图<br>
![image168428f783cbab27.png](/image168428f783cbab27.png)
之后输入tunnel，查看可用命令，然后就跟着引导开启内网穿透吧~