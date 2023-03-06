/*
乐看热点            
cron 22 8 * * *  lkrd.js

export lkrd="device#Authorization"  


多账号用 换行 或 @ 分割  
*/
const $ = new Env('乐看热点')
const { MD5 } = require('crypto-js')
const notify = require('./sendNotify')


const envSplitor = ['\n', '&', '@']     //支持多种分割，但要保证变量里不存在这个字符
const ckNames = ['lkrd']                //支持多变量
//====================================================================================================
let DEFAULT_RETRY = 2           // 默认重试次数
//====================================================================================================




async function userTasks() {

 
    $.log('签到', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.list())
    } await Promise.all(list)


    $.log('悬浮', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.xfxh())
    } await Promise.all(list)



$.log('红包雨', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.hby())
    } await Promise.all(list)



/*
    $.log('转圈满', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.zqmq())
    } await Promise.all(list)

    $.log('cj', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.cjqz())
        await wait(10)
        list.push(user.cjcs())
    } await Promise.all(list)
*/


    


}

    




function sleep(time) {
    return new Promise((resolve)=>setTimeout(resolve, time));
}
 
async function run() {
    let i = 1;
    let iMax=64516;
    let iMin=65485;
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
    let iMax=36548;
    let iMin=23451;
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



class UserClass {
    constructor(ck) {
        this.idx = `账号[${++$.userIdx}]`
        this.ckFlog = true
		this.xr = ck.split('#')
		this.xs = this.xr[0]
		this.dh = this.xr[1]
        this.ts = $.ts(13)
        this.reqNonc = $.randomInt(100000, 999999)
		this.host = "apilkrd.cengaw.cn"
		this.hostname = "https://" + this.host
        this.sj = getRandom(3000,15000)


		this.hby_headers = {
			"Host": this.host,
            "accept": "application/json",
            "device": this.dh,
            "oaid": "",
            "store": "juliang",
            "version": "101",
            "platform": "1",
            "Authorization": this.xs,
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Content-Length": "0"
        };
		this.qd_headers = {
			"Host": this.host,
            "accept": "application/json",
            "device": this.dh,
            "oaid": "",
            "store": "juliang",
            "version": "101",
            "platform": "1",
            "Authorization": this.xs,
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Content-Length": "0"
        };
		this.wu_headers = {
			"Host": this.host,
            "accept": "application/json",
            "device": this.dh,
            "oaid": "",
            "store": "juliang",
            "version": "101",
            "platform": "1",
            "Authorization": this.xs,
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
        };
		this.xf_headers = {
			"Host": this.host,
            "accept": "application/json",
            "device": this.dh,
            "oaid": "",
            "store": "juliang",
            "version": "101",
            "platform": "1",
            "Authorization": this.xs,
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Content-Length": "4"
        };
        this.zq_headers = {
			"Host": this.host,
            "accept": "application/json",
            "device": this.dh,
            "oaid": "",
            "store": "juliang",
            "version": "101",
            "platform": "1",
            "Authorization": this.xs,
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Content-Length": "351"
        };
        this.ksp_headers = {
			"Host": this.host,
            "accept": "application/json",
            "device": this.dh,
            "oaid": "",
            "store": "juliang",
            "version": "101",
            "platform": "1",
            "Authorization": this.xs,
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip"        
        };
        this.ksp1_headers = {
			"Host": this.host,
            "accept": "application/json",
            "device": this.dh,
            "oaid": "",
            "store": "juliang",
            "version": "101",
            "platform": "1",
            "Authorization": this.xs,
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Content-Length": "6",        
        };
        this.cj_headers = {
			"Host": this.host,
            "accept": "application/json",
            "device": this.dh,
            "oaid": "",
            "store": "juliang",
            "version": "101",
            "platform": "1",
            "Authorization": this.xs,
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Content-Length": "324"
        };
        this.kkz_headers = {
			"Host": this.host,
            "accept": "application/json",
            "device": this.dh,
            "oaid": "",
            "store": "juliang",
            "version": "101",
            "platform": "1",
            "Authorization": this.xs,
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Content-Length": "333"
        };

function getRandom(min ,max){
        return Math.floor(Math.random()*(max -min) +min);
}


    }


    async list() {
        let options = {
            fn: 'list',
            method: 'POST',
            url: `${this.hostname}/api/v2/zhuan/index`,
            headers: this.qd_headers,
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
     if (resp.code == 0) {


    $.log(`${this.idx}: 获得:${resp.result.items[0].st}`)

    $.log('签到', { sp: true, console: false })  
    if (resp.result.items[0].st = 1) {
        await this.qd()
    } else if (resp.result.items[0].st = 0) {
        $.log(`${this.idx}: 状态:${resp.result.items[0].text}`)  
    }
await wait(3)

    $.log('看视频', { sp: true, console: false })  
    if (resp.result.items[1].st = 1) {
         for (let i = 0; i < 10; i++) {
            
            await this.kspqz()
            await this.kspqz1()
            
            await this.ksptj()
            await run()
            await this.ksp()
            await run()
            await wait(60)
        }

    } else if (resp.result.items[1].st = 0) {
        $.log(`${this.idx}: 状态:${resp.result.items[1].text}`)  
    } else if (resp.result.items[1].st = 2) {
        $.log(`${this.idx}: 状态:${resp.result.items[1].text}`)  
    }

await wait(3)

    $.log('看资讯，赚金币', { sp: true, console: false })  
    if (resp.result.items[2].st = 1) {
        for (let i = 0; i < 50; i++) {
            
            await run3()
            await this.zqqz()
            await wait(17)
            await this.zq()
            await run3()
            await this.zqmq()                        
        } 

    } else if (resp.result.items[2].st = 1) {
        $.log(`${this.idx}: 状态:${resp.result.items[2].text}`)  
        await this.zqlq()                        
    } else if (resp.result.items[1].st = 0) {
        $.log(`${this.idx}: 状态:${resp.result.items[2].text}`)  
    }
await wait(3)

    $.log('刷视频，赚金币', { sp: true, console: false })  
    if (resp.result.items[3].st = 1) {
        for (let i = 0; i < 50; i++) {
            
            await run3()
            await this.sspqz()
            await wait(17)
            await this.ssp()
            await run3()
            await this.sspmq()                        
        } 

    } else if (resp.result.items[3].st = 0) {
        $.log(`${this.idx}: 状态:${resp.result.items[3].text}`)  
    } else if (resp.result.items[1].st = 2) {
        $.log(`${this.idx}: 状态:${resp.result.items[3].text}`)  
    }
await wait(3)

    $.log('当天阅读10篇文章', { sp: true, console: false })  
    if (resp.result.items[5].st = 1) {
        for (let i = 0; i < 10; i++) {
            
        await run1()
        await this.ydwz()
        } 
        
    } else if (resp.result.items[5].st = 0) {
        $.log(`${this.idx}: 状态1:${resp.result.items[5].text}`)  
    } else if (resp.result.items[1].st = 2) {
        $.log(`${this.idx}: 状态2:${resp.result.items[5].text}`)  
    }
await wait(3)
/*
    $.log('当天完成4个看看赚任务', { sp: true, console: false })  
    if (resp.result.items[6].st = 1) {
           /*
            await this.kkzqz1()
            await wait(63)
            await this.kkz1()
            await this.kkzqz2()
            await wait(61)
            await this.kkz2()
            
            await this.kkzqz3()
            await wait(65)
            await this.kkz3()
            await this.kkzqz4()
            await wait(67)
            await this.kkz4()


            //await this.sspmq()                        
    } else if (resp.result.items[6].st = 1) {
        $.log(`${this.idx}: 状态:${resp.result.items[6].text}`)  
    } else if (resp.result.items[1].st = 2) {
        $.log(`${this.idx}: 状态:${resp.result.items[6].text}`)  
    }
await wait(3)

    $.log('当天抽奖5次以上', { sp: true, console: false })  
    if (resp.result.items[7].st = 1) {
        let i = ''
        for (let i = 0; i < 5; i++) {
        await this.cj1()
        await wait(16)
     }
    
    } else if (resp.result.items[7].st = 0) {
        $.log(`${this.idx}: 状态:${resp.result.items[7].text}`)  
    } else if (resp.result.items[7].st = 2) {
        $.log(`${this.idx}: 状态1:${resp.result.items[7].text}`)  
    }
*/










    } else if (resp.code != 0) {
        console.log(resp.message)
        this.ckFlog = false
    }  

}


    async qd() {
        let options = {
            fn: 'qd',
            method: 'POST',
            url: `${this.hostname}/api/v2/reward/sign`,
            headers: this.qd_headers,
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
     if (resp.code == 0) {
         $.log(`${this.idx}: 获得:${resp.result.coin}\n状态:${resp.result.message}\n`)
         this.tk = resp.result.ticket
         await run()
         await this.qdfb1()
    } else if (resp.code != 0) {
        console.log(resp.message)
        this.ckFlog = false
    }  

}


async qdfb1() {
    let options = {
        fn: 'qdfb1',
        method: 'get',
        url: `${this.hostname}/api/v2/ads/action/load?class=10000&&channel=2&type=1`,
        headers: this.wu_headers,
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    this.tr = resp.result.tid
    await this.qdfb2()
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  

}

async qdfb2() {
    let options = {
        fn: 'qdfb2',
        method: 'get',
        url: `${this.hostname}/api/v2/ads/action/showed?class=10000&channel=2&type=1&ecpm=5000.0&tid=${this.tr}&platformname=7`,
        headers: this.wu_headers,
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
     await this.qdfb()
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  

}



    async qdfb() {
        let options = {
            fn: 'qdfb',
            method: 'get',
            url: `${this.hostname}/api/v2/ads/action/completed?class=10000&type=1&ticket=${this.tk}&ecpm=5000.0&tid=${this.tr}&platformname=7`,
            headers: this.wu_headers,
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
     if (resp.code == 0) {
         $.log(`${this.idx}:\n状态:${resp.result.reward}\n`)
    } else if (resp.code != 0) {
        console.log(resp)
        this.ckFlog = false
    }  

}

    	
    async hby() {
        let options = {
            fn: 'hby',
            method: 'POST',
            url: `${this.hostname}/api/v2/reward/rain`,
            headers: this.hby_headers,
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
     if (resp.code == 0) {
        
        $.log(`${this.idx}: 获得:${resp.result.coin}\n状态:${resp.result.message}\n`)
    } else if (resp.code != 0) {
        console.log(resp)
        this.ckFlog = false
    }  

}


    async xf1() {
        let options = {
            fn: 'xf1',
            method: 'POST',
            url: `${this.hostname}/api/v2/reward/bubble2`,
            headers: this.hby_headers,
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
     if (resp.code == 0) {
        $.log(`${this.idx}:状态:${resp.result.message} 获得:${resp.result.coin}`)
    await run()
    await this.xffb()
    } else if (resp.code != 0) {
        $.log(`\n 状况:${resp.message}\n`)
        this.ckFlog = false
    }  
}
async xf2() {
    let options = {
        fn: 'xf2',
        method: 'POST',
        url: `${this.hostname}/api/v2/reward/coin`,
        headers: this.xf_headers,
        body: "id=2"
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}:状态:${resp.result.message} 获得:${resp.result.coin}`)
    this.tk2 = resp.result.ticket
    await run()
    await this.xffb()
} else if (resp.code == 40301) {
    $.log(`\n 状况:${resp.message}\n`)
    this.ckFlog = false
}  
}
async xf3() {
    let options = {
        fn: 'xf3',
        method: 'POST',
        url: `${this.hostname}/api/v2/reward/coin`,
        headers: this.xf_headers,
        body: "id=3"
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}:状态:${resp.result.message} 获得:${resp.result.coin}`)
    this.tk2 = resp.result.ticket
    await run()
    await this.xffb()
} else if (resp.code == 40301) {
    $.log(`\n 状况:${resp.message}\n`)
    this.ckFlog = false
}  
}
async xf4() {
    let options = {
        fn: 'xf4',
        method: 'POST',
        url: `${this.hostname}/api/v2/reward/coin`,
        headers: this.xf_headers,
        body: "id=4"
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}:状态:${resp.result.message} 获得:${resp.result.coin}`)
    this.tk2 = resp.result.ticket
    await run()
    await this.xffb()
} else if (resp.code == 40301) {
    $.log(`\n 状况:${resp.message}\n`)
    this.ckFlog = false
}  
}


async xffb() {
    let options = {
        fn: 'xffb',
        method: 'get',
        url: `${this.hostname}/api/v2/ad/log?type=1&ticket=${this.tk2}&ecpm=2500.0`,
        headers: this.qd_headers,
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}:翻倍:${resp.result.status}`)
} else if (resp.code == 40303) {
    $.log(`\n 状况:${resp.message}\n`)
    this.ckFlog = false
}  

}


async xfxh() {
let i = ''
    if (i >= 0) {
        for (let i = 0; i < 4; i++) {
            await run3()
            await this.xf1()
            await run3()
            await this.xf2()
            await run3()
            await this.xf3()
            await run3()
            await this.xf4()
        }
        
    }

}


async kspqz() {
    let options = {
        fn: 'kspqz',
        method: 'POST',
        url: `${this.hostname}/api/v2/zhuan/video`,
        headers: this.ksp1_headers,
        body: "type=1"
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    this.tk4 = resp.result.ticket
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}
async kspqz1() {
    let options = {
        fn: 'kspqz1',
        method: 'get',
        url: `${this.hostname}/api/v2/ads/action/load?class=10000&&channel=2&type=9`,
        headers: this.ksp_headers,
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    this.tkz = resp.result.tid
} else if (resp.code != 0) {
    $.log(`\n 状况:${resp.message}\n`)
    this.ckFlog = false
}  

}



async ksptj() {
    let options = {
        fn: 'ksptj',
        method: 'get',
        url: `${this.hostname}/api/v2/ads/action/showed?class=10000&channel=2&type=9&ecpm=${this.sj}&tid=${this.tkz}&platformname=6`,
        headers: this.ksp_headers,
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}:ok`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  

}


async csksp() {
let i = 0
    if (i >= 0) {
        for (let i = 0; i < 10; i++) {
            await run()
            await this.kspqz()
            await this.kspqz1()
            await run()
            await this.ksptj()
            await run()
            await this.ksp()
            
        }
    }

}


async ksp() {
    let i = ''
    let options = {
        fn: 'ksp',
        method: 'get',
        url: `${this.hostname}/api/v2/ads/action/completed?class=10000&type=9&ticket=${this.tk4}&ecpm=${this.sj}&tid=${this.tkz}&platformname=6`,
        headers: this.ksp_headers,
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}:金币:${resp.result.reward} 点卷:${resp.result.coupon}`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async zq() {
    let options = {
        fn: 'zq',
        method: 'get',
        url: `${this.hostname}/api/v2/news/coin?ticket=${this.tk3}`,
        headers: {
			"Host": 'apilkrd.cengaw.cn',
            "accept": 'application/json',
            "device": this.dh,
            "oaid": '',
            "store": 'juliang',
            "version": '101',
            "platform": '1',
            "Authorization": this.xs,
            "User-Agent": 'Dalvik/2.1.0 (Linux; U; Android 9; HPB-AN00 Build/PQ3B.190801.002)',
            "Connection": 'Keep-Alive',
            "Accept-Encoding": 'gzip',
        }
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}: 获得:${resp.result.reward}`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async zqqz() {
    let options = {
        fn: 'zqqz',
        method: 'get',
        url: `${this.hostname}/api/v2/news/coin`,
        headers: this.wu_headers
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    this.tk3 = resp.result.ticket
   // console.log(this.tk3)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async cszq() {
let i = ''
    if (i >= 0) {
        for (let i = 0; i < 50; i++) {
            
            await run3()
            await this.zqqz()
            await wait(17)
            await this.zq()
            await run3()
            await this.zqmq()                        
        } 
     }
    

}






async zqlq() {
    let options = {
        fn: 'zqlq',
        method: 'POST',
        url: `${this.hostname}/api/v2/zhuan/done`,
        headers: this.xf_headers,
        body: "id=8"
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}: 领取转圈:${resp.result.coin}`)
} else if (resp.code != 0) {
    $.log(`\n 状况:${resp.message}\n`)
    this.ckFlog = false
}  

}




async zqmq() {
    let options = {
        fn: 'zqmq',
        method: 'get',
        url: `${this.hostname}/api/v2/news/redenv`,
        headers: this.wu_headers,
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}: 转一圈获得:${resp.result.reward}`)
} else if (resp.code != 0) {
    //console.log(resp)
    this.ckFlog = false
}  
}
async cjqz() {
    let options = {
        fn: 'cjqz',
        method: 'GET',
        url: `${this.hostname}/api/v2/reward/lottery/index`,
        headers: this.wu_headers,
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}: 转盘次数:${resp.result.lottery_count}`)
    this.lottery = resp.result.lottery_count
    this.tk5 = resp.result.ticket
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async cj1() {
    let options = {
        fn: 'cj1',
        method: 'POST',
        url: `${this.hostname}/api/v2/reward/lottery/index`,
        headers: this.cj_headers,
        body: `ticket=eyJ0eXAiOiJKV1MiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2Nzc2NTE1MDcsImlhdCI6MTY3NzY0NzkwNywibmJmIjoxNjc3NjQ3OTA3LCJzdWIiOiJsb3R0ZXJ5IiwiYXVkIjo5OTg0Nn0.MTM2NTdmYTZiN2FiZGJhYmNmNDc1ZTQ1Yjk5NTU0NGYwNDNmNmVkM2I5OWUyOGFmZTkzNWE2N2Q1NjVhOWU0ZGQxODQ3ZWYzMjQzNzI2NmFjZmFjMWE3MDgwYWQyMjdmNWZhMTk1YTQzYWUyMzQ5Mjg0ZDlhZDQ0OGZkYzc2OGY`
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}: 获得:${resp.result.num}`)
    //this.tk6 = resp.result.ticket
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async cjcs() {

    if (this.lottery > 0) {
        for (let i = 0; i < this.lottery; i++) {
            await this.cjqz()
            await this.cj1()
            await run1()
            await this.cj()
            await run1()
        }
    }

}

async cj() {
    let options = {
        fn: 'cj',
        method: 'POST',
        url: `${this.hostname}/api/v2/reward/lottery/index`,
        headers: this.cj_headers,
        body: `ticket=${this.tk6}`
    }
    // console.log(options)
    let resp = await $.request(options)
   //  console.log(resp)
 if (resp.code == 0) {
    $.log(`${this.idx}: 获得:${resp.result.num}`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async sspqz() {
    let options = {
        fn: 'ssp',
        method: 'GET',
        url: `${this.hostname}/api/v2/video/coin`,
        headers: this.wu_headers
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    this.tks = resp.result.ticket
   // console.log(this.tk3)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async ssp() {
    let options = {
        fn: 'ssp',
        method: 'GET',
        url: `${this.hostname}/api/v2/video/coin?ticket=${this.tks}`,
        headers: this.wu_headers
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
   
   console.log(`刷视频获得:${resp.result.reward}`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async sspmq() {
    let options = {
        fn: 'ssp',
        method: 'GET',
        url: `${this.hostname}/api/v2/video/redenv`,
        headers: this.wu_headers
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
   
   console.log(`刷视频满圈获得:${resp.result.reward}`)
} else if (resp.code != 0) {
   //console.log(resp)
    this.ckFlog = false
}  
}



async kkzqz1() {
    let options = {
        fn: 'kkzqz1',
        method: 'GET',
        url: `${this.hostname}/api/v2/kan/click?id=1`,
        headers: this.wu_headers
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    this.tkk1 = resp.result.ticket
   // console.log(this.tk3)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async kkzqz2() {
    let options = {
        fn: 'kkzqz2',
        method: 'GET',
        url: `${this.hostname}/api/v2/kan/click?id=2`,
        headers: this.wu_headers
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    this.tkk2 = resp.result.ticket
   // console.log(this.tk3)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async kkzqz3() {
    let options = {
        fn: 'kkzqz3',
        method: 'GET',
        url: `${this.hostname}/api/v2/kan/click?id=3`,
        headers: this.wu_headers
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    this.tkk3 = resp.result.ticket
   // console.log(this.tk3)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async kkzqz4() {
    let options = {
        fn: 'kkzqz4',
        method: 'GET',
        url: `${this.hostname}/api/v2/kan/click?id=4`,
        headers: this.wu_headers
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
    this.tkk4 = resp.result.ticket
   // console.log(this.tk3)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}



async kkz1() {
    let options = {
        fn: 'kkz1',
        method: 'POST',
        url: `${this.hostname}/api/v2/kan/index`,
        headers: this.kkz_headers,
        body: `tickit=${this.tkk1}`
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
   
    console.log(`看看赞获得:${resp.result.coin}`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}

async kkz2() {
    let options = {
        fn: 'kkz2',
        method: 'POST',
        url: `${this.hostname}/api/v2/kan/index`,
        headers: this.kkz_headers,
        body: `tickit=${this.tkk2}`
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
   
    console.log(`看看赞获得:${resp.result.coin}`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}


async kkz3() {
    let options = {
        fn: 'kkz3',
        method: 'POST',
        url: `${this.hostname}/api/v2/kan/index`,
        headers: this.kkz_headers,
        body: `tickit=${this.tkk3}`
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
   
    console.log(`看看赞获得:${resp.result.coin}`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}


async kkz4() {
    let options = {
        fn: 'kkz4',
        method: 'POST',
        url: `${this.hostname}/api/v2/kan/index`,
        headers: this.kkz_headers,
        body: `tickit=${this.tkk4}`
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
   
    console.log(`看看赞获得:${resp.result.coin}`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}


async ydwz() {
    let options = {
        fn: 'ydwz',
        method: 'GET',
        url: `${this.hostname}/api/v2/news/sdk/zhuan/count?isfirstopen=0`,
        headers: this.wu_headers,
        //body: `tickit=${this.tkk}`
    }
    // console.log(options)
    let resp = await $.request(options)
    // console.log(resp)
 if (resp.code == 0) {
   
    console.log(`正在阅读第${resp.result.count}文章`)
} else if (resp.code != 0) {
    console.log(resp)
    this.ckFlog = false
}  
}








getSign(ts, reqNonc) {
        let salt = '17aaf8118ffb270b766c6d6774317a133.8.0'
        let sign = MD5(`signature${reqNonc}${ts}${salt}`).toString()
        return sign
    }


    getText() {
        let textarr = ['最简单的提高观赏性的办法就是把地球故事的部分剪辑掉半小时， emo的部分剪辑掉半小时。这样剩下的90分钟我们就看看外星人，看看月球，看看灾难片大场面就不错。', '顶着叛国罪的风险无比坚信前妻，这种还会离婚？', '你以为它是灾难片，其实它是科幻片；你以为它是科幻片，其实它是恐怖片；你以为它是恐怖片，其实它是科教片', '我的天，剧情真的好阴谋论，但是还算是能自圆其说', '大杂烩啊……我能理解这电影为什么在海外卖的不好了，因为核心创意真的已经太老套了', '一开始我以为这就是外国人看《流浪地球》时的感受啊，后来发现这不是我当初看《胜利号》的感受么']
        let ranNum = $.randomInt(1, textarr.length)
        let text = textarr[ranNum]
        return text
    }
    getCommentText() {
        let add_comment_text_arr = ['感谢推荐的电影呢', '有时间一定看看这个电影怎么样', '晚上就去看', '66666666666', '这部电影我看过，非常好看']
        let ranNum = $.randomInt(1, add_comment_text_arr.length)
        let text = add_comment_text_arr[ranNum]
        return text
    }




}



!(async () => {
    //console.log(await $.yiyan())
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
                        const response = await got('https://v2.hitokoto.cn')
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
