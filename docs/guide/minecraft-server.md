# Minecraft 开服教程（Java 版）

本文教你在 Windows 上从零搭建一个可联机的 Minecraft Java 版服务器。

## 1. 准备环境

1. 安装 Java 21（推荐 Temurin 或 Oracle JDK）。
2. 准备一个空目录，例如 `G:\mc-server`。
3. 确保你有稳定网络，并确认路由器可做端口映射。

可在 PowerShell 检查 Java 是否安装成功：

```powershell
java -version
```

如果命令不存在，请先重装 JDK 并确认环境变量已生效。

## 2. 下载服务端核心

推荐使用 Paper（兼容性和性能更好）。

1. 打开 https://papermc.io/downloads/paper
2. 选择对应 Minecraft 版本（例如 1.21.x）。
3. 下载后将文件重命名为 `paper.jar`，放入 `G:\mc-server`。

## 3. 首次启动并同意 EULA

在 `G:\mc-server` 目录执行：

```powershell
java -Xms2G -Xmx4G -jar paper.jar nogui
```

首次启动会自动生成文件并退出，随后会出现 `eula.txt`。

把 `eula.txt` 里的：

```text
eula=false
```

改为：

```text
eula=true
```

## 4. 配置服务器参数

编辑 `server.properties`，建议至少关注以下项目：

```properties
motd=My Minecraft Server
difficulty=normal
gamemode=survival
max-players=20
online-mode=true
server-port=25565
view-distance=10
```

说明：

- `online-mode=true`：正版验证，安全性更高。
- `server-port=25565`：默认端口，后续防火墙与路由器需放行该端口。

## 5. 二次启动与基础管理

再次启动：

```powershell
java -Xms2G -Xmx4G -jar paper.jar nogui
```

常用控制台命令：

```text
op 你的游戏名
whitelist on
whitelist add 朋友游戏名
save-all
stop
```

## 6. 开放端口（局域网外联机必做）

### Windows 防火墙放行

以管理员身份运行 PowerShell：

```powershell
New-NetFirewallRule -DisplayName "Minecraft 25565" -Direction Inbound -Protocol TCP -LocalPort 25565 -Action Allow
```

### 路由器端口映射

1. 登录路由器管理页面。
2. 找到“端口转发/虚拟服务器/NAT”相关配置。
3. 将外部端口 `25565` 转发到开服主机的内网 IP 和 `25565` 端口。

建议给开服机器绑定静态内网 IP，避免重启后 IP 变化导致转发失效。

## 7. 连接服务器

- 同一局域网玩家：用内网 IP 连接（例如 `192.168.1.20:25565`）。
- 外网玩家：用你的公网 IP 或域名连接。

可让朋友使用端口检测工具测试 `25565` 是否可达。

## 8. 常见问题排查

### 启动报错 `Unsupported class file major version`

Java 版本过低。升级到服务端要求的版本（通常是 Java 17 或 21）。

### 好友进不来，自己可以进

通常是端口未放行或路由器转发错误，按第 6 节逐项检查。

### 服务器卡顿

1. 适当提升 `-Xmx` 内存。
2. 降低 `view-distance`。
3. 减少高负载插件，或升级 CPU。

## 9. 建议的下一步

1. 安装权限与管理插件（如 LuckPerms）。
2. 配置自动备份脚本，避免误删地图。
3. 结合 frp/ZeroTier/Tailscale 实现更稳定的异地联机方案。
