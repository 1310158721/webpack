import '../static/styles/index.less'

console.log(process.env.NODE_ENV)

const str = '入口文件'

const say = (str) => {
    console.log(str)
}

say(str)