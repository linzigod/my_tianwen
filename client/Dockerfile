# 使用 Node.js 的 Alpine Linux 版作为基础镜像
FROM node:current-alpine

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 安装项目依赖
RUN pnpm install

# 将应用程序代码复制到工作目录
COPY . .

# 暴露容器的端口
EXPOSE 3000

# 定义容器启动时要执行的命令
CMD ["pnpm", "run", "dev"]