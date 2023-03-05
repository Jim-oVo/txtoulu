/*
刷步数  app

cron 10 8 * * *  sbs
.js

========= 青龙--配置文件--贴心复制区域  ========= 
# 刷步数
export sbsck='账号&密码'  


多账号用 换行 或 @ 分割

*/


const utils = require("yml2213-utils");
const $ = new Env("刷步数");   // 1.名字改了
const ckName = "sbsck";           // 2. 英文名字改一下
//-------------------- 一般不动变量区域 -------------------------------------      // 3. 不用管 
const notify = $.isNode() ? require("./sendNotify") : ""
const Notify = 1		 //0为关闭通知,1为打开通知,默认为1
let envSplitor = ["\n"];
let ck = msg = ''
let host, hostname
let userCookie = process.env[ckName];
let userList = []
let userIdx = 0
let userCount = 0
let i = []
//---------------------- 自定义变量区域 -----------------------------------      // 4. 要杀变量自己加

let app_id = 14
let text = sign = ''
//---------------------------------------------------------






// 6. 一整个class   就是完整的任务 
class UserInfo {
	constructor(str) { 			// 7. 构造函数  处理变量等    用 this 挂在对象上
		this.index = ++userIdx
		this.ck = str.split('&')

		this.xs = this.ck[0]
		this.xr = this.ck[1]
        this.xe = this.ck[2]
		this.salt = 'FR*r!isE5W'
		this.id = app_id
		this.ts = utils.ts13()
		this.host = "apis.jxcxin.cn"
		this.hostname = "https://" + this.host,
		// this.bd = "{"articleId":12592}"

		this.sbs_headers = {
            "user": this.xs,
            "password": this.xr,
            "step": this.xe
            
		}



	}


	// 8. 每个函数实现一个功能
	async sbsck
(name) { //刷步数短视频    
	    try {                 
		    let options = {   //9. 就是组成请求的数据
			    method: "GET",
			    url: `${this.hostname}/api/mi?user=${this.xs}&password=${this.xr}&step=${this.xe}`,
			    headers: this.sbs_headers,
		    }
		    // console.log(options);
		    let result = await httpRequest(name, options);  // 10. 请求返回 result
            // console.log(result);
            if (result.code=="200") {
                DoubleLog(`账号[${this.index}] 用户:${result.user} 状态: ${result.msg} 步数: ${result.step} `)
             } else {
                
                console.log(result)
            }
    	} catch (error) {
		    console.log(error)
	    }
	}

	











	get_sign(path) {
		let _data = `${path}&&${this.xs}&&${this.xr}&&${this.ts}&&${this.salt}&&${this.id}`;
		// console.log('_data: ', _data);
		sign = utils.SHA256_Encrypt(_data)
		return sign
	}




}

!(async () => {
	if (!(await checkEnv())) return;
	if (userList.length > 0) {
		await start();
	}
	await SendMsg(msg);
})()
	.catch((e) => console.log(e))
	.finally(() => $.done())



// 下面的不用管了   全默认就行   记得装 yml2213-utils 依赖
// #region ********************************************************  固定代码  ********************************************************


async function start() {    // 5. 开始任务区域   自己按照格式加


	console.log('\n================== 刷步数 ==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.sbsck
('刷步数'))
	}
	await Promise.all(taskall)
    await wait(6*10)



}



// 变量检查与处理
async function checkEnv() {
	if (userCookie) {
		// console.log(userCookie);
		let e = envSplitor[0];
		for (let o of envSplitor)
			if (userCookie.indexOf(o) > -1) {
				e = o;
				break;
			}
		for (let n of userCookie.split(e)) n && userList.push(new UserInfo(n));
		userCount = userList.length;
	} else {
		console.log("未找到CK");
		return;
	}
	return console.log(`共找到${userCount}个账号`), !0;
}



// =========================================== 不懂不要动 =========================================================
function Env(name, e) { class s { constructor(name) { this.env = name; } } return new (class { constructor(name) { (this.name = name), (this.logs = []), (this.startTime = new Date().getTime()), this.log(`\n🔔${this.name}, 开始!`); } isNode() { return "undefined" != typeof module && !!module.exports; } log(...name) { name.length > 0 && (this.logs = [...this.logs, ...name]), console.log(name.join(this.logSeparator)); } done() { const e = new Date().getTime(), s = (e - this.startTime) / 1e3; this.log(`\n🔔${this.name}, 结束! 🕛 ${s} 秒`); } })(name, e); } async function httpRequest(name, options) { if (!name) { name = /function\s*(\w*)/i.exec(arguments.callee.toString())[1]; } try { let result = await utils.httpRequest(name, options); if (result) { return result; } { DoubleLog(`未知错误(1)`); } } catch (error) { console.log(error); } } async function SendMsg(message) { if (!message) return; if (Notify > 0) { if ($.isNode()) { var notify = require("./sendNotify"); await notify.sendNotify($.name, message); } else { console.log($.name, "", message); } } else { console.log(message); } } function wait(n) { return new Promise(function (resolve) { setTimeout(resolve, n * 1000); }); } function DoubleLog(data) { console.log(`    ${data}`); msg += `\n    ${data}`; }

