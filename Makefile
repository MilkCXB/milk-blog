imageName=milk-blog
registry=registry.cn-hangzhou.aliyuncs.com/milkcxb/milk-blog


install:
	npm install --registry=https://registry.npm.taobao.org

buildBeta:
	docker build . -t ${imageName} -f ./docker/Dockerfile-beta --platform linux/amd64
	docker tag ${imageName} ${registry}:beta
	docker push ${registry}:beta

# buildProd:
# 	docker build . -t ${imageName} -f ./docker/Dockerfile --platform linux/amd64
# 	docker tag ${imageName} ${registry}:prod
# 	docker push ${registry}:prod
