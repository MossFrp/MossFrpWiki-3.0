# Linux 客户端 使用方法
## 前言
如果你在用服务商的服务器，无需穿透，到面板获取IP就可以了（一般是3条线路）<br>
Linux 安装 Java 较为繁琐，所以请跟紧教程！<br>
如果你还是不会，我奉劝自行学习 Linux 或使用 Windows 
## 安装Java
Ubuntu
```bash
sudo apt install java-1.8.0-openjdk.x86_64 -y
```
CentOS
```bash
sudo yum install java-1.8.0-openjdk* -y
```
安装后检查安装
```bash
java -version
```
## 下载客户端
请输入以下命令：
```bash
wget https://github.com/MossFrp/MossFrpClient-Java/releases/download/V0.5.2.1.2153/MossFrpStandard.jar
```
等待下载完成即可。
![image4b030094b07f0a4a.png](/image4b030094b07f0a4a.png)

## 开启客户端
```bash
java -jar MossFrpStandard.jar
```
![image376a0ad89f4677dc.png](/image376a0ad89f4677dc.png)
之后输入tunnel，查看可用命令，然后就跟着引导开启内网穿透吧~