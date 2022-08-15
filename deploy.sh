set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
git remote add origin https://github.com/hemyWen/hemyWen.github.io.git
git remote set-url origin https://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@github.com/hemyWen/hemyWen.github.io.git 
git push -f https://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@github.com/hemyWen/hemyWen.github.io.git 
git push

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
