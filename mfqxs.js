/*
免费趣小说            cron 13 6 9,20 * * *  mfqxs.js

export mfqxs=" token @ token "  


多账号用 换行 或 @ 分割  
*/
const $ = Env('免费趣小说')
const { MD5 } = require('crypto-js')
const notify = require('./sendNotify')


const envSplitor = ['\n', '&', '@']     //支持多种分割，但要保证变量里不存在这个字符
const ckNames = ['mfqxs']                //支持多变量
//====================================================================================================
let DEFAULT_RETRY = 2           // 默认重试次数
//====================================================================================================




async function userTasks() {

    $.log('用户', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        await wait(1)
        list.push(user.userinfo1())
    } await Promise.all(list)

    await wait(1)
    $.log('签到', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        await wait(1)
        list.push(user.qd())
    } await Promise.all(list)

    await wait(1)
    $.log('看视频', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        await wait(1)
        list.push(user.kspxh())
    } await Promise.all(list)













}






class UserClass {
    constructor(ck) {
        this.idx = `账号[${++$.userIdx}]`
        this.ckFlog = true
		this.xr = ck.split('#')
		this.xs = this.xr[0]
		this.dh = this.xr[1]
        this.ts = $.ts(13)
        this.reqNonc = $.randomInt(100000, 999999)
		this.host = "androidapi4.yc.ifeng.com"
		this.hostname = "https://" + this.host



		this.qd_headers = {
            'User-Agent': 'freadInterestingNovel',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '313',
            'Host': 'androidapi4.yc.ifeng.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'       
        };
		this.ew_headers = {
            'User-Agent': 'freadInterestingNovel',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '299',
            'Host': 'androidapi4.yc.ifeng.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'       
        };
		this.cj_headers = {
            'User-Agent': 'freadInterestingNovel',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '33',
            'Host': 'androidapi4.yc.ifeng.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'       
        };
		this.ksp_headers = {
            'User-Agent': 'freadInterestingNovel',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '336',
            'Host': 'androidapi4.yc.ifeng.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'       
        };
		this.kspqz_headers = {
            'User-Agent': 'freadInterestingNovel',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '308',
            'Host': 'androidapi4.yc.ifeng.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'       
        };
    }


    async userinfo1() {
        let options = {
            fn: 'userinfo1',
            method: 'post',
            url: `${this.hostname}/api/freeClient/user/space`,
            headers: this.ew_headers,
            body: `fr1=OnePlus&fr10=6.23.0.12&fr11=720&fr12=1280&fr13=${this.xr}&fr14=286&fr15=15&fr16=&fr17=&fr18=50110&fr19=0&fr2=50110&fr20=26&fr21=&fr22=&fr3=523118086cb8e5d4338f503df552b782&fr4=HD1900&fr5=OnePlus&fr6=HD1900&fr7=android&fr8=28&fr9=wlan&freadsign=7241a89ee48ee0f50cd09bb35150f075&timestamp=1679664798`
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
     if (resp.code == 100) {
         $.log(`${this.idx}:${resp.data.userInfo.phoneNum} 金币数：${resp.data.userInfo.balance} `)
         this.cjs = resp.data.userInfo.prizeWheelTimes
         if (this.cjs != 0) {
            for (let i = 0; i < this.cjs; i++) {
            await this.cj()
            await run1()
            }
         }
    } else if (resp.code != 100) {
        $.log(`${this.idx}: ${resp.msg}`)
        this.ckFlog = false
    }  

}


        async qd() {
            let options = {
                fn: 'qd',
                method: 'post',
                url: `${this.hostname}/api/freeClient/coin/daySignIn`,
                headers: this.qd_headers,
                body: `fr1=OnePlus&fr10=6.23.0.12&fr11=720&fr12=1280&fr13=${this.xr}&fr14=286&fr15=15&fr16=&fr17=&fr18=50110&fr19=0&fr2=50110&fr20=26&fr21=&fr22=&fr3=523118086cb8e5d4338f503df552b782&fr4=HD1900&fr5=OnePlus&fr6=HD1900&fr7=android&fr8=28&fr9=wlan&freadsign=d732fe146eefb6929e8c942f39baae12&signVersion=2&timestamp=1679656790`
            }
            // console.log(options)
            let resp = await $.request(options)
            // console.log(resp)
         if (resp.code == 100) {
             $.log(`${this.idx}: 今日签到获得：${resp.data.newComerReceiveGiftInfo.scrolls} 金币 /n5s后开始领取额外奖励/n`)
             await wait(5)
             await this.ew()
        } else if (resp.code != 100) {
            $.log(`${this.idx}: ${resp.msg}`)
            this.ckFlog = false
        }  

    }

    async ew() {
        let options = {
            fn: 'ew',
            method: 'post',
            url: `${this.hostname}/api/freeClient/coin/doubleDaySignIn`,
            headers: this.ew_headers,
            body: `fr1=OnePlus&fr10=6.23.0.12&fr11=720&fr12=1280&fr13=${this.xr}&fr14=286&fr15=15&fr16=&fr17=&fr18=50110&fr19=0&fr2=50110&fr20=26&fr21=&fr22=&fr3=523118086cb8e5d4338f503df552b782&fr4=HD1900&fr5=OnePlus&fr6=HD1900&fr7=android&fr8=28&fr9=wlan&freadsign=5c82d4cd4d5a88b4e6d5705ea1a252fc&timestamp=1679656851`
        }
        // console.log(options)
        let resp = await $.request(options)
         console.log(resp)
     if (resp.code == 100) {
         $.log(`${this.idx}: 额外获得：${resp.msg}`)
    } else if (resp.code != 100) {
        $.log(`${this.idx}: ${resp.msg}`)
        this.ckFlog = false
    }  

}

async cj() {
    let options = {
        fn: 'cj',
        method: 'post',
        url: `${this.hostname}/api/freeClient/coin/prizeWheel`,
        headers: this.cj_headers,
        body: `fr1=OnePlus&fr10=6.23.0.12&fr11=720&fr12=1280&fr13=${this.xr}&fr14=286&fr15=15&fr16=&fr17=&fr18=50110&fr19=0&fr2=50110&fr20=26&fr21=&fr22=&fr3=523118086cb8e5d4338f503df552b782&fr4=HD1900&fr5=OnePlus&fr6=HD1900&fr7=android&fr8=28&fr9=wlan&freadsign=e2f94e6b5b12d2ef1730ab8a4a6e6334&timestamp=1679660258`
    }
    // console.log(options)
    let resp = await $.request(options)
     console.log(resp)
 if (resp.code == 100) {
     $.log(`${this.idx}: 抽奖获得：${resp.msg}`)
} else if (resp.code != 100) {
    $.log(`${this.idx}: 抽奖：${resp.msg}`)
    this.ckFlog = false
}  

}

async kspqz() {
    let options = {
        fn: 'kspqz',
        method: 'post',
        url: `${this.hostname}/api/freeClient/ad/videoOnceCode`,
        headers: this.kspqz_headers,
        body: `adSite=6&fr1=OnePlus&fr10=6.23.0.12&fr11=720&fr12=1280&fr13=${this.xr}&fr14=286&fr15=15&fr16=&fr17=&fr18=50110&fr19=0&fr2=50110&fr20=26&fr21=&fr22=&fr3=523118086cb8e5d4338f503df552b782&fr4=HD1900&fr5=OnePlus&fr6=HD1900&fr7=android&fr8=28&fr9=wlan&freadsign=66c57907bc8ff1a298eafa3d0ef630e8&timestamp=1679664761`
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 100) {
    this.ks = resp.data.code
    await this.ksp()
} else if (resp.code != 100) {
    $.log(`${this.idx}: 看视频：${resp.msg}`)
    this.ckFlog = false
}  

}

async ksp() {
    let options = {
        fn: 'ksp',
        method: 'post',
        url: `${this.hostname}/api/freeClient/coin/videoBonus`,
        headers: this.ksp_headers,
        body: `adSite=6&fr1=OnePlus&fr10=6.23.0.12&fr11=720&fr12=1280&fr13=${this.xr}&fr14=286&fr15=15&fr16=&fr17=&fr18=50110&fr19=0&fr2=50110&fr20=26&fr21=&fr22=&fr3=523118086cb8e5d4338f503df552b782&fr4=HD1900&fr5=OnePlus&fr6=HD1900&fr7=android&fr8=28&fr9=wlan&freadsign=61d500b60caa635349bfdcab390d56f2&timestamp=1679661708&videoOnceCode=${this.ks}`
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 100) {
     $.log(`${this.idx}: 看视频获得：${resp.msg}获得金币100`)
} else if (resp.code != 100) {
    $.log(`${this.idx}: 看视频：${resp.msg}`)
    this.ckFlog = false
}  

}

async kspxh() {
    for (let i = 0; i < 10; i++) {
        await this.kspqz()
        await run()
        await this.ksp()
}




}




!(async () => {
    console.log(await $.yiyan())
    $.read_env(UserClass)


    await userTasks()


})()
    .catch((e) => $.log(e))
    .finally(() => $.exitNow())


function MD5Encrypt(a) { function b(a, b) { return a << b | a >>> 32 - b } function c(a, b) { var c, d, e, f, g; return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f } function d(a, b, c) { return a & b | ~a & c } function e(a, b, c) { return a & c | b & ~c } function f(a, b, c) { return a ^ b ^ c } function g(a, b, c) { return b ^ (a | ~c) } function h(a, e, f, g, h, i, j) { return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e) } function i(a, d, f, g, h, i, j) { return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d) } function j(a, d, e, g, h, i, j) { return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d) } function k(a, d, e, f, h, i, j) { return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d) } function l(a) { for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;)b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++; return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g } function m(a) { var b, c, d = "", e = ""; for (c = 0; 3 >= c; c++)b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2); return d } function n(a) { a = a.replace(/\r\n/g, "\n"); for (var b = "", c = 0; c < a.length; c++) { var d = a.charCodeAt(c); 128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128)) } return b } var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11, I = 16, J = 23, K = 6, L = 10, M = 15, N = 21; for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16)p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s); var O = m(t) + m(u) + m(v) + m(w); return O.toLowerCase() }
function wait(n) { return new Promise(function (resolve) { setTimeout(resolve, n * 1000); }); }

function Env(name) {
    return new class {
        constructor(name) {
            this.name = name
            this.startTime = Date.now()
            this.log(`[${this.name}]开始运行`, { time: true })


            this.notifyStr = []
            this.notifyFlag = true


            this.userIdx = 0
            this.userList = []
            this.userCount = 0
        }
        async request(opt) {
            const got = require('got')
            let DEFAULT_TIMEOUT = 8000      // 默认超时时间
            let resp = null, count = 0
            let fn = opt.fn || opt.url
            let resp_opt = opt.resp_opt || 'body'
            opt.timeout = opt.timeout || DEFAULT_TIMEOUT
            opt.retry = opt.retry || { limit: 0 }
            opt.method = opt?.method?.toUpperCase() || 'GET'
            while (count++ < DEFAULT_RETRY) {
                try {
                    resp = await got(opt)
                    break
                } catch (e) {
                    if (e.name == 'TimeoutError') {
                        this.log(`[${fn}]请求超时，重试第${count}次`)
                    } else {
                        this.log(`[${fn}]请求错误(${e.message})，重试第${count}次`)
                    }
                }
            }
            if (resp == null) return Promise.resolve({ statusCode: 'timeout', headers: null, body: null })
            let { statusCode, headers, body } = resp
            if (body) try { body = JSON.parse(body) } catch { }
            if (resp_opt == 'body') {
                return Promise.resolve(body)
            } else if (resp_opt == 'hd') {
                return Promise.resolve(headers)
            } else if (resp_opt == 'statusCode') {
                return Promise.resolve(statusCode)
            }


        }


        log(msg, options = {}) {
            let opt = { console: true }
            Object.assign(opt, options)


            if (opt.time) {
                let fmt = opt.fmt || 'hh:mm:ss'
                msg = `[${this.time(fmt)}]` + msg
            }
            if (opt.notify) {
                this.notifyStr.push(msg)
            }
            if (opt.console) {
                console.log(msg)
            }
            if (opt.sp) {
                console.log(`\n-------------- ${msg} --------------`)
            }
        }
        read_env(Class) {
            let envStrList = ckNames.map(x => process.env[x])
            for (let env_str of envStrList.filter(x => !!x)) {
                let sp = envSplitor.filter(x => env_str.includes(x))
                let splitor = sp.length > 0 ? sp[0] : envSplitor[0]
                for (let ck of env_str.split(splitor).filter(x => !!x)) {
                    this.userList.push(new Class(ck))
                }
            }
            this.userCount = this.userList.length
            if (!this.userCount) {
                this.log(`未找到变量，请检查变量${ckNames.map(x => '[' + x + ']').join('或')}`, { notify: true })
                return false
            }
            this.log(`共找到${this.userCount}个账号`)
            return true
        }
        async taskThread(taskName, conf, opt = {}) {
            while (conf.idx < $.userList.length) {
                let user = $.userList[conf.idx++]
                await user[taskName](opt)
            }
        }
        async threadManager(taskName, thread) {
            let taskAll = []
            let taskConf = { idx: 0 }
            while (thread--) {
                taskAll.push(this.taskThread(taskName, taskConf))
            }
            await Promise.all(taskAll)
        }
        time(t, x = null) {
            let xt = x ? new Date(x) : new Date
            let e = {
                "M+": xt.getMonth() + 1,
                "d+": xt.getDate(),
                "h+": xt.getHours(),
                "m+": xt.getMinutes(),
                "s+": xt.getSeconds(),
                "q+": Math.floor((xt.getMonth() + 3) / 3),
                S: this.padStr(xt.getMilliseconds(), 3)
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (xt.getFullYear() + "").substr(4 - RegExp.$1.length)))
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)))
            return t
        }
        async showmsg() {
            if (!this.notifyFlag) return
            if (!this.notifyStr) return
            let notify = require('./sendNotify')
            this.log('\n============== 推送 ==============')
            await notify.sendNotify(this.name, this.notifyStr.join('\n'))
        }
        padStr(num, length, opt = {}) {
            let padding = opt.padding || '0'
            let mode = opt.mode || 'l'
            let numStr = String(num)
            let numPad = (length > numStr.length) ? (length - numStr.length) : 0
            let pads = ''
            for (let i = 0; i < numPad; i++) {
                pads += padding
            }
            if (mode == 'r') {
                numStr = numStr + pads
            } else {
                numStr = pads + numStr
            }
            return numStr
        }
        json2str(obj, c, encode = false) {
            let ret = []
            for (let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if (v && encode) v = encodeURIComponent(v)
                ret.push(keys + '=' + v)
            }
            return ret.join(c)
        }
        str2json(str, decode = false) {
            let ret = {}
            for (let item of str.split('&')) {
                if (!item) continue
                let idx = item.indexOf('=')
                if (idx == -1) continue
                let k = item.substr(0, idx)
                let v = item.substr(idx + 1)
                if (decode) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret
        }
        phoneNum(phone_num) {
            if (phone_num.length == 11) {
                let data = phone_num.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
                return data
            } else {
                return phone_num
            }
        }
        randomInt(min, max) {
            return Math.round(Math.random() * (max - min) + min)
        }
        async yiyan() {
            const got = require('got')
            return new Promise((resolve) => {
                (async () => {
                    try {
                        const response = await got('https://v1.hitokoto.cn')
                        // console.log(response.body)
                        let data = JSON.parse(response.body)
                        let data_ = `[一言]: ${data.hitokoto}  by--${data.from}`
                        // console.log(data_)
                        resolve(data_)
                    } catch (error) {
                        console.log(error.response.body)
                    }
                })()
            })
        }
        ts(type = false, _data = "") {
            let myDate = new Date()
            let a = ""
            switch (type) {
                case 10:
                    a = Math.round(new Date().getTime() / 1000).toString()
                    break
                case 13:
                    a = Math.round(new Date().getTime()).toString()
                    break
                case "h":
                    a = myDate.getHours()
                    break
                case "m":
                    a = myDate.getMinutes()
                    break
                case "y":
                    a = myDate.getFullYear()
                    break
                case "h":
                    a = myDate.getHours()
                    break
                case "mo":
                    a = myDate.getMonth()
                    break
                case "d":
                    a = myDate.getDate()
                    break
                case "ts2Data":
                    if (_data != "") {
                        time = _data
                        if (time.toString().length == 13) {
                            let date = new Date(time + 8 * 3600 * 1000)
                            a = date.toJSON().substr(0, 19).replace("T", " ")
                        } else if (time.toString().length == 10) {
                            time = time * 1000
                            let date = new Date(time + 8 * 3600 * 1000)
                            a = date.toJSON().substr(0, 19).replace("T", " ")
                        }
                    }
                    break
                default:
                    a = "未知错误,请检查"
                    break
            }
            return a
        }
        randomPattern(pattern, charset = 'abcdef0123456789') {
            let str = ''
            for (let chars of pattern) {
                if (chars == 'x') {
                    str += charset.charAt(Math.floor(Math.random() * charset.length))
                } else if (chars == 'X') {
                    str += charset.charAt(Math.floor(Math.random() * charset.length)).toUpperCase()
                } else {
                    str += chars
                }
            }
            return str
        }
        randomString(len, charset = 'abcdef0123456789') {
            let str = ''
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random() * charset.length))
            }
            return str
        }
        randomList(a) {
            let idx = Math.floor(Math.random() * a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t * 1000))
        }
        async exitNow() {
            await this.showmsg()
            let e = Date.now()
            let s = (e - this.startTime) / 1000
            this.log(`[${this.name}]运行结束，共运行了${s}秒`)
            process.exit(0)
        }
    }(name)
}

function sleep(time) {
    return new Promise((resolve)=>setTimeout(resolve, time));
}
 
async function run() {
    let i = 1;
    let iMax=34513;
    let iMin=35485;
    while (i <= 1) {
        let sleepTime = Math.floor(Math.random() * iMax) + iMin;
        await sleep(sleepTime);        
        let time = new Date()
        //console.log('本次Sleep: ' + sleepTime + ' ms 时间:'+time.toLocaleString());        
        i++;
    };
 
};
 
run();

async function run1() {
    let i = 1;
    let iMax=23414;
    let iMin=19645;
    while (i <= 1) {
        let sleepTime = Math.floor(Math.random() * iMax) + iMin;
        await sleep(sleepTime);        
        let time = new Date()
        //console.log('本次Sleep: ' + sleepTime + ' ms 时间:'+time.toLocaleString());        
        i++;
    };
 
};
 
run1();
 

async function run3() {
    let i = 1;
    let iMax=3542;
    let iMin=1254;
    while (i <= 1) {
        let sleepTime = Math.floor(Math.random() * iMax) + iMin;
        await sleep(sleepTime);        
        let time = new Date()
        //console.log('本次Sleep: ' + sleepTime + ' ms 时间:'+time.toLocaleString());        
        i++;
    };
 
};
 
run3();

//await async 用于控制 setTimeout 同步执行。模拟JS随机点击
