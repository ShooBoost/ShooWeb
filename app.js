// visitor component
Vue.component('visitorComponent', {
    props: ['textH'],
    data: function(){
        return {
            text: this.textH
        }
    },
    template: '#visitorTemplate'
})


// Shoo 純文字 component
Vue.component('textComponent', {
    props: ['imgSrcH', 'textH'],
    data: function(){
        return {
            imgSrc: this.imgSrcH,
            text: this.textH,
        }
    },
    template: '#textTemplate',
})

// Shoo 學習與實習經驗 component
Vue.component('expComponent',{
    props: ['expSubTitleH', 'expTitleH', 'expDetailListH', 'imgSrcH'],
    data: function(){
        return {
            expSubTitle: this.expSubTitleH,
            expTitle: this.expTitleH,
            expDetailList: this.expDetailListH,
            imgSrc: this.imgSrcH,

        }
    },
    template: '#expTemplate',
})

// Shoo 相關作品 component
Vue.component('worksComponent', {
    props: ['workListH', 'imgSrcH'],
    data: function(){
        return {
            workListD: this.workListH,
            workList: this.workListH,
            worksIndexNow: 0,
            worksIndexLast: this.workListH.length - 1,
            imgSrc: this.imgSrcH,
            worksBtnL: true,
            worksBtnR: true,
        }
    },
    template: '#worksTemplate',
    methods: {
        // 切換下一個作品
        worksNext: function(){
            this.worksIndexNow ++; 
            this.workList = this.workListD.slice(this.worksIndexNow);
            console.log(this.workListH.length)

        },

        // 切換到上一個作品
        worksPre: function(){
            this.worksIndexNow --; 
            this.workList = this.workListD.slice(this.worksIndexNow);
            console.log(this.workListD.slice(this.worksIndex))

        },

    },

})


var app = new Vue({
    el: '#app',
    data: {
        bgClass: 'bg-dark',
        welcomeImg: 'asset/wel_myInfo.svg',
        worksBtnL: true,
        worksBtnR: true,
        showToggleList: false,
        toggleList: [
        {
            title: '我是誰',
            category: 'myInfo'

        },
        {
            title: '作品集',
            category: 'myWorks'

        },
        {
            title: '學習經歷',
            category: 'learnExp'

        },
        {
            title: '實習經歷',
            category: 'internExp'

        },
        ],
        shooImgSrc: 'asset/shoo.svg',
        messageShow: false,
        messageShowList: [],
        message: [
        {
            order: 0,
            category: ['myInfo'],
            messageStyle: 'text',
            content: {
                text: '哩賀哩賀，歡迎來到我的個人網站！',
            }
        },
        {
            order: 1,
            category: ['myInfo'],
            messageStyle: 'text',
            content: {
                text: `我是一名財金所研究生
                目前正持續進化成讚讚的網頁前端工程師 ！`,
            }
        },
        {
            order: 2,
            category: ['myInfo', 'learnExp'],
            messageStyle: 'text',
            content: {
                text: '跟你介紹我的學經歷，希望你能更瞭解我 yo',
            },
        },
        {
            order: 3,
            category: ['myInfo', 'learnExp'],
            messageStyle: 'exp',
            content: {
                title: '國立台灣大學 - 財務金融研究所 碩三',
                subTitle: '2017/09-現在',
                textList: ['學習 JavaScripts、HTML、CSS、SCSS、Vue.js', 
                '學習 Python', '學習 Adobe Illustrator', '學習 Adobe XD']
            },
            
        },
        {
            order: 4,
            category: ['myInfo'],
            messageStyle: 'visitor',
            content: {
                text: '那有沒有相關的作品呢？',
            },
        },
        {
            order: 5,
            category: ['myInfo'],
            messageStyle: 'text',
            content: {
                text: '哇嗚，你說想看我的作品？！',
            },
        },
        {
            order: 6,
            category: ['myInfo', 'learnExp', 'myWorks'],
            messageStyle: 'text',
            content: {
                text: `下列是我的前端相關作品`,
            },
        },
        {
            order: 7,
            category: ['myInfo', 'learnExp', 'myWorks'],
            messageStyle: 'works',
            content: {
                workList: [
                {
                    title: 'JavaScript 阿貓游起來',
                    img: 'asset/cat.png',
                    link: 'https://codepen.io/ShooLin/full/KjggMz',
                },
                {
                    title: 'JavaScript 空汙',
                    img: 'asset/pollu.png',
                    link: 'https://shooboost.github.io/Pollutant_Standards_Index/',
                },
                {
                    title: 'IPHONE 換桌布',
                    img: 'asset/iphone.svg',
                    link: 'https://codepen.io/ShooLin/full/QPyXGp',
                },
                {
                    title: 'Vue.js 泳秀個人網站',
                    img: 'asset/shooWeb.png',
                    link: '',
                },
                ]
            },
        },
        {
            order: 8,
            category: ['myInfo', 'learnExp', 'myWorks'],
            messageStyle: 'text',
            content: {
                text: '接下來是我的視覺設計相關作品',
            },
            
        },
        {
            order: 9,
            category: ['myInfo', 'learnExp', 'myWorks'],
            messageStyle: 'works',
            content: {
                workList: [
                {
                    title: 'Adobe XD 設計無印',
                    img: 'asset/muji.svg',
                    link: 'https://xd.adobe.com/view/fc62d258-a03a-4b4b-49a3-4867d1346247-8a53/',
                },
                {
                    title: '3D 蝙蝠俠遊戲',
                    img: 'asset/batMan.svg',
                    link: 'https://drive.google.com/open?id=13j6GP9_yzYWE2hwKUNnS2ckxq7R_UVDa',
                },
                {
                    title: '個人封面',
                    img: 'asset/selfie.png',
                    link: 'https://drive.google.com/open?id=11wejYu6vzBZaIg0fqQOnXPqEBFTq2ID_',
                },
                {
                    title: '烤雞卡片',
                    img: 'asset/chicken.svg',
                    link: 'https://drive.google.com/open?id=1uiTdcGu7xaCpKFP8jL991hU3x8WS1kmY',
                },
                {
                    title: 'Vue.js 泳秀個人網站',
                    img: 'asset/shooWeb.png',
                    link: 'https://xd.adobe.com/view/063b029a-7a45-4ddd-5003-f76aea275519-700a/',
                },
                ]
            },
        },
        {
            order: 10,
            category: ['myInfo', 'learnExp', 'myWorks'],
            messageStyle: 'text',
            content: {
                text: `希望能有機會獲得你的指教建議 or 觀後心得 :)`,
            },
            
        },
        {
            order: 11,
            category: ['myInfo'],
            messageStyle: 'visitor',
            content: {
                text: `你的作品我看過囉～
                想問你有實習工作經歷嗎？`,
            },
        },
        {
            order: 12,
            category: ['myInfo', 'internExp'],
            messageStyle: 'text',
            content: {
                text: '以下是我過去的實習經驗 :)',
            },
        },
        {
            order: 13,
            category: ['myInfo', 'internExp'],
            messageStyle: 'exp',
            content: {
                title: '台新銀行 - 數位金融處 RICHART 金融部 實習生',
                subTitle: '2018/02-2018/06',
                textList: ['分析國內外金融創新案例', '撰寫每週數位金融新知摘要', '紀錄外部機構舉辦之講座']
            },
        },
        {
            order: 14,
            category: ['myInfo', 'internExp'],
            messageStyle: 'exp',
            content: {
                title: '台大創意創業中心 台大車庫 - 工讀生',
                subTitle: '2016/02-2016/10',
                textList: ['公文收送，外賓接待', '協助追蹤進駐之新創企業營運狀況',
                '協助籌備新創工作坊、中心活動']
            },
        },
        {
            order: 15,
            category: [],
            messageStyle: '',
            content: {
            },
        },
        {
            order: 16,
            category: [],
            messageStyle: '',
            content: {
            },
        },
        {
            order: 17,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'text',
            content: {
                text: '很開心能跟你分享泳秀我的作品與學經歷～',
            },
        },
        {
            order: 18,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'text',
            content: {
                text: `我還持續在網頁前端的領域提升戰鬥力 ing`,
            },
        },
        {
            order: 19,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'text',
            content: {
                text: '關於我的作品，真心希望前輩大大能給予簡單的建議',
            },
        },
        {
            order: 20,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'works',
            content: {
                workList: [
                {
                    title: '網站建議',
                    img: 'asset/survey.svg',
                    link: 'https://forms.gle/msMNwTSY6tiZWNZw8',
                },
                ]
            },
        },
        {
            order: 21,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'visitor',
            content: {
                text: '我想跟你分享我的想法，但填問卷有點麻煩耶',
            },
        },
        {
            order: 22,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'text',
            content: {
                text: `或許你可以給我一個前端實習的面試機會 XDD
                我就可以直接接收你的建議分享啦  XDDDD
                `,
            },
        },
        {
            order: 23,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'text',
            content: {
                text: `上述對白是真心的 XD
                但無論前輩是透過問卷 or 直接跟阿秀面試的給予指教回饋，前端 Rookie 阿秀 都萬分感謝你！！
                `,
            },
        },
        {
            order: 24,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'text',
            content: {
                text: `以下是泳秀的 e-mail
                shooboost@gmail.com
                r06723063@ntu.edu.tw 
                `,
            },
        },
        {
            order: 25,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'text',
            content: {
                text: '希望有網頁前端的工作機會，或有相關建議，都歡迎用 e-mail 跟我聯絡～',
            },
        },
        {
            order: 26,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'text',
            content: {
                text: '謝謝你來到我的個人網頁',
            },
        },
        {
            order: 27,
            category: ['myInfo', 'myWorks', 'learnExp', 'internExp'],
            messageStyle: 'visitor',
            content: {
                text: ':)',
            },
        },
        ],
    },

    // 在 created 階段先鋪首頁面 (我是誰頁)
    created: function(){
        this.messageShowList = this.message.filter(function(item){
            return item.category.indexOf('myInfo') !== -1
        })
        this.messageShow = true;
    },


    methods: {
        // 切換頁面內容
        changeMessageShow: function(category){
            this.messageShow = false;
            this.welcomeImg = 'asset/wel_' + category + '.svg';
            this.messageShowList = this.message.filter(function(item){
                return item.category.indexOf(category) !== -1
            })
            this.showToggleList = false;
            
            // 確保 messageShowList 更新完再顯示到螢幕上
            var vm = this;
            setTimeout(function(){vm.messageShow = true;},1)
        },
        
    },

})