const defaultState = {
    tabBarList: [{
        path: '/',
        name: 'home',
        title: '行街街'
    },{
        path: '/community',
        name: 'community',
        title: '倾计计'
    },{
        path: '/cart',
        name: 'cart',
        title: '俾钱钱'
    },{
        path: '/my',
        name: 'my',
        title: '我睇睇'
    }],
    navList: [{
        url: '#',
        imgUrl: 'images/nav01.png',
        title: '大家有惠'
    },{
        url: '#',
        imgUrl: 'images/nav02.png',
        title: '海外淘购'
    },{
        url: '#',
        imgUrl: 'images/nav03.png',
        title: '超市同品'
    },{
        url: '#',
        imgUrl: 'images/nav04.png',
        title: '厂家直销'
    },{
        url: '#',
        imgUrl: 'images/nav05.png',
        title: '好味好玩'
    }],
    merchantList: [{
        url: '/merchant',
        imgUrl: 'https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh0.jpg',
        title: '海绵宝宝'
    },{
        url: '/merchant',
        imgUrl: 'https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh3.png',
        title: '韩衣代购'
    },{
        url: '/merchant',
        imgUrl: 'https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh4.png',
        title: 'ARC潮店'
    },{
        url: '/merchant',
        imgUrl: 'https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh1.png',
        title: 'Zara女装'
    }]
}

export default (state = defaultState, action) => {
    let newState = Object.assign({}, state)
    return newState;
}