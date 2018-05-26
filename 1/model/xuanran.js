define([
    'jquery',
], function ($) {
    'use strict';
    // 配置aja请求的参数
    const options = {
        "url": "http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=1&trace=0&limit=10&endId=0&pid=106888&_=1526528205879",
        "dataType": "jsonp"
    }
    var str = `
    <div class="item">
                    <img src="" alt="">
                    <div class="bottom">
                        <p>￥1000</p>
                        <div class="input_wrap">
                            <input class="btn" type="button" value="加入购物车" />
                        </div>
                        <h3>title</h3>
                    </div>
                </div>`;
    $.ajax(options)
        .then((res) => {
            let list = res.data.list;
            render(list);
        });
    // 渲染页面
    function render(list) {
        console.log(list)
        var str = '';
        for (let i = 0; i < list.length; i++) {
            str += `
            <div class="item">
                    <img src="${list[i].image}" alt="${list[i].title}">
                    <div class="bottom">
                        <p>$ ${list[i].price}</p>
                        <div class="input_wrap">
                            <input class="btn" type="button" value="加入购物车" id="${list[i].userId}" />
                        </div>
                        <h3>${list[i].title}</h3>
                    </div>
            </div>`;
        }
        $(".wrap").html(str);
    }
});