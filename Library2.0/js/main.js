//rem 自适应
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 30 * (clientWidth / 750) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


/*控制悬浮按钮的位置 */
$(document).ready(function () {
  $(window).scroll(function () {
    if (150 >= $(document).height() - $(window).height() - $(document).scrollTop()) {
      $('.drawDiv').css('display', 'none');
    } else {
      $('.drawDiv').css('display', 'block');
    }
  });
});

window.onload = function () {
  //加载评论列表
   init();
  //加载票数
  loadDate();
  // localStorage.clear();
 
};

//控制点击投票次数为1次
vote = localStorage.getItem("vote");
/*更新投票 */
var voteButton1 = document.getElementById('button1');
voteButton1.onclick = function () {
  if (vote != "1") {
    /*统计点击次数*/
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg1 = document.getElementById('flg1');
    Flg1.innerHTML = "1";
    var state = Flg1.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan1 = document.getElementById('span1');
    data.num = ++(oSpan1.innerHTML);
    console.log(data.num);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}
var voteButton2 = document.getElementById('button2');
voteButton2.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg2 = document.getElementById('flg1');
    Flg2.innerHTML = "1";
    var state = Flg2.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan2 = document.getElementById('span2');
    data.num = ++(oSpan2.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}
var voteButton3 = document.getElementById('button3');
voteButton3.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg3 = document.getElementById('flg3');
    Flg3.innerHTML = "1";
    var state = Flg3.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan3 = document.getElementById('span3');
    data.num = ++(oSpan3.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}
var voteButton4 = document.getElementById('button4');
voteButton4.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg4 = document.getElementById('flg5');
    Flg4.innerHTML = "1";
    var state = Flg4.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan4 = document.getElementById('span4');
    data.num = ++(oSpan4.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

var voteButton5 = document.getElementById('button5');
voteButton5.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg5 = document.getElementById('flg5');
    Flg5.innerHTML = "1";
    var state = Flg5.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan5 = document.getElementById('span5');
    data.num = ++(oSpan5.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

var voteButton6 = document.getElementById('button6');
voteButton6.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg6 = document.getElementById('flg6');
    Flg6.innerHTML = "1";
    var state = Flg6.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan6 = document.getElementById('span6');
    data.num = ++(oSpan6.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

var voteButton7 = document.getElementById('button7');
voteButton7.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg7 = document.getElementById('flg7');
    Flg7.innerHTML = "1";
    var state = Flg7.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan7 = document.getElementById('span7');
    data.num = ++(oSpan7.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

var voteButton8 = document.getElementById('button8');
voteButton8.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg8 = document.getElementById('flg8');
    Flg8.innerHTML = "1";
    var state = Flg8.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan8 = document.getElementById('span8');
    data.num = ++(oSpan8.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

var voteButton9 = document.getElementById('button9');
voteButton9.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg9 = document.getElementById('flg9');
    Flg9.innerHTML = "1";
    var state = Flg9.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan9 = document.getElementById('span9');
    data.num = ++(oSpan9.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}
var voteButton10 = document.getElementById('button10');
voteButton10.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg10 = document.getElementById('flg10');
    Flg10.innerHTML = "1";
    var state = Flg10.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan10 = document.getElementById('span10');
    data.num = ++(oSpan10.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

var voteButton11 = document.getElementById('button11');
voteButton11.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg11 = document.getElementById('flg11');
    Flg11.innerHTML = "1";
    var state = Flg11.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan11 = document.getElementById('span11');
    data.num = ++(oSpan11.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}
var voteButton12 = document.getElementById('button12');
voteButton12.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg12 = document.getElementById('flg12');
    Flg12.innerHTML = "1";
    var state = Flg12.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan12 = document.getElementById('span12');
    data.num = ++(oSpan12.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

var voteButton13 = document.getElementById('button13');
voteButton13.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg13 = document.getElementById('flg13');
    Flg13.innerHTML = "1";
    var state = Flg13.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan13 = document.getElementById('span13');
    data.num = ++(oSpan14.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

var voteButton14 = document.getElementById('button14');
voteButton14.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg14 = document.getElementById('flg14');
    Flg14.innerHTML = "1";
    var state = Flg14.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan14 = document.getElementById('span14');
    data.num = ++(oSpan14.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

var voteButton15 = document.getElementById('button15');
voteButton15.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg15 = document.getElementById('flg15');
    Flg15.innerHTML = "1";
    var state = Flg15.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan15 = document.getElementById('span15');
    data.num = ++(oSpan15.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}
var voteButton16 = document.getElementById('button16');
voteButton16.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg16 = document.getElementById('flg16');
    Flg16.innerHTML = "1";
    var state = Flg16.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan16 = document.getElementById('span16');
    data.num = ++(oSpan16.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}
var voteButton17 = document.getElementById('button17');
voteButton17.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg17 = document.getElementById('flg17');
    Flg17.innerHTML = "1";
    var state = Flg17.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan17 = document.getElementById('span17');
    data.num = ++(oSpan17.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}
var voteButton18 = document.getElementById('button18');
voteButton18.onclick = function () {
  if (vote != "1") {
    vote = 1;
    voteString = vote.toString();
    localStorage.setItem("vote", voteString);

    var Flg18 = document.getElementById('flg18');
    Flg18.innerHTML = "1";
    var state = Flg18.innerHTML;
    this.style.background = "#B0C4DE";
    this.setAttribute("disabled", "true"); // 一般只能投票一次的吧
    this.innerHTML = "已投票";
    alert("投票成功！");
    var ids = this.getAttribute('id');
    var data = new Object;
    data.ids = ids;
    var oSpan18 = document.getElementById('span18');
    data.num = ++(oSpan18.innerHTML);
    data.state = state;
    var str = JSON.stringify(data);
    localStorage.setItem(data.ids, str);
  } else {
    alert("您已经投过票了")
  }
}

/*加载票数*/

function loadDate() {
  for (i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key == "button1") {
      var str1 = localStorage.getItem("button1");
      var data1 = JSON.parse(str1);
      var oSpan1 = document.getElementById('span1');
      oSpan1.innerHTML = data1.num;
      console.log(oSpan1.innerHTML);
      var flg1 = document.getElementById('flg1');
      flg1.innerHTML = data1.state;
      if (flg1.innerHTML === "1") {
        voteButton1.style.background = "#B0C4DE";
        voteButton1.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton1.innerHTML = "已投票";
      }
    }
    if (key == "button2") {
      var str2 = localStorage.getItem("button2");
      var data2 = JSON.parse(str2);
      var oSpan2 = document.getElementById('span2');
      oSpan2.innerHTML = data2.num;
      var flg2 = document.getElementById('flg2');
      flg2.innerHTML = data2.state;
      if (flg2.innerHTML === "1") {
        voteButton2.style.background = "#B0C4DE";
        voteButton2.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton2.innerHTML = "已投票";
      }
    }
    if (key == "button3") {
      var str3 = localStorage.getItem("button3");
      var data3 = JSON.parse(str3);
      var oSpan3 = document.getElementById('span3');
      oSpan3.innerHTML = data3.num;
      var flg3 = document.getElementById('flg3');
      flg3.innerHTML = data3.state;
      if (flg3.innerHTML === "1") {
        voteButton3.style.background = "#B0C4DE";
        voteButton3.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton3.innerHTML = "已投票";
      }
    }
    if (key == "button4") {
      var str4 = localStorage.getItem("button4");
      var data4 = JSON.parse(str4);
      var oSpan4 = document.getElementById('span4');
      oSpan4.innerHTML = data4.num;
      var flg4 = document.getElementById('flg4');
      flg4.innerHTML = data4.state;
      if (flg4.innerHTML === "1") {
        voteButton4.style.background = "#B0C4DE";
        voteButton4.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton4.innerHTML = "已投票";
      }
    }
    if (key == "button5") {
      var str5 = localStorage.getItem("button5");
      var data5 = JSON.parse(str5);
      var oSpan5 = document.getElementById('span5');
      oSpan5.innerHTML = data5.num;
      var flg5 = document.getElementById('flg5');
      flg5.innerHTML = data5.state;
      if (flg5.innerHTML === "1") {
        voteButton5.style.background = "#B0C4DE";
        voteButton5.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton5.innerHTML = "已投票";
      }
    }
    if (key == "button6") {
      var str6 = localStorage.getItem("button6");
      var data6 = JSON.parse(str6);
      var oSpan6 = document.getElementById('span6');
      oSpan6.innerHTML = data6.num;
      var flg6 = document.getElementById('flg6');
      flg6.innerHTML = data6.state;
      if (flg6.innerHTML === "1") {
        voteButton6.style.background = "#B0C4DE";
        voteButton6.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton6.innerHTML = "已投票";
      }
    }
    if (key == "button7") {
      var str7 = localStorage.getItem("button7");
      var data7 = JSON.parse(str7);
      var oSpan7 = document.getElementById('span7');
      oSpan7.innerHTML = data7.num;
      var flg7 = document.getElementById('flg7');
      flg7.innerHTML = data7.state;
      if (flg7.innerHTML === "1") {
        voteButton7.style.background = "#B0C4DE";
        voteButton7.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton7.innerHTML = "已投票";
      }
    }
    if (key == "button8") {
      var str8 = localStorage.getItem("button8");
      var data8 = JSON.parse(str8);
      var oSpan8 = document.getElementById('span8');
      oSpan8.innerHTML = data8.num;
      var flg8 = document.getElementById('flg8');
      flg8.innerHTML = data8.state;
      if (flg8.innerHTML === "1") {
        voteButton8.style.background = "#B0C4DE";
        voteButton8.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton8.innerHTML = "已投票";
      }
    }
    if (key == "button9") {
      var str9 = localStorage.getItem("button9");
      var data9 = JSON.parse(str9);
      var oSpan9 = document.getElementById('span9');
      oSpan9.innerHTML = data9.num;
      var flg9 = document.getElementById('flg9');
      flg9.innerHTML = data9.state;
      if (flg9.innerHTML === "1") {
        voteButton9.style.background = "#B0C4DE";
        voteButton9.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton9.innerHTML = "已投票";
      }
    }
    if (key == "button10") {
      var str10 = localStorage.getItem("button10");
      var data10 = JSON.parse(str10);
      var oSpan10 = document.getElementById('span10');
      oSpan10.innerHTML = data10.num;
      var flg10 = document.getElementById('flg10');
      flg10.innerHTML = data10.state;
      if (flg10.innerHTML === "1") {
        voteButton10.style.background = "#B0C4DE";
        voteButton10.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton10.innerHTML = "已投票";
      }
    }
    if (key == "button11") {
      var str11 = localStorage.getItem("button11");
      var data11 = JSON.parse(str11);
      var oSpan11 = document.getElementById('span11');
      oSpan11.innerHTML = data11.num;
      var flg11 = document.getElementById('flg11');
      flg11.innerHTML = data11.state;
      if (flg11.innerHTML === "1") {
        voteButton11.style.background = "#B0C4DE";
        voteButton11.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton11.innerHTML = "已投票";
      }
    } if (key == "button12") {
      var str12 = localStorage.getItem("button12");
      var data12 = JSON.parse(str12);
      var oSpan12 = document.getElementById('span12');
      oSpan12.innerHTML = data12.num;
      var flg12 = document.getElementById('flg12');
      flg12.innerHTML = data12.state;
      if (flg12.innerHTML === "1") {
        voteButton12.style.background = "#B0C4DE";
        voteButton12.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton12.innerHTML = "已投票";
      }
    } if (key == "button13") {
      var str13 = localStorage.getItem("button13");
      var data13 = JSON.parse(str13);
      var oSpan13 = document.getElementById('span13');
      oSpan13.innerHTML = data13.num;
      var flg13 = document.getElementById('flg13');
      flg13.innerHTML = data13.state;
      if (flg13.innerHTML === "1") {
        voteButton13.style.background = "#B0C4DE";
        voteButton13.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton13.innerHTML = "已投票";
      }
    } if (key == "button14") {
      var str14 = localStorage.getItem("button14");
      var data14 = JSON.parse(str14);
      var oSpan14 = document.getElementById('span14');
      oSpan14.innerHTML = data14.num;
      var flg14 = document.getElementById('flg14');
      flg14.innerHTML = data14.state;
      if (flg14.innerHTML === "1") {
        voteButton14.style.background = "#B0C4DE";
        voteButton14.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton14.innerHTML = "已投票";
      }
    } if (key == "button15") {
      var str15 = localStorage.getItem("button15");
      var data15 = JSON.parse(str15);
      var oSpan15 = document.getElementById('span15');
      oSpan15.innerHTML = data15.num;
      var flg15 = document.getElementById('flg15');
      flg15.innerHTML = data15.state;
      if (flg15.innerHTML === "1") {
        voteButton15.style.background = "#B0C4DE";
        voteButton15.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton15.innerHTML = "已投票";
      }
    } if (key == "button16") {
      var str16 = localStorage.getItem("button16");
      var data16 = JSON.parse(str16);
      var oSpan16 = document.getElementById('span16');
      oSpan16.innerHTML = data16.num;
      var flg16 = document.getElementById('flg16');
      flg16.innerHTML = data16.state;
      if (flg16.innerHTML === "1") {
        voteButton16.style.background = "#B0C4DE";
        voteButton16.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton16.innerHTML = "已投票";
      }
    } if (key == "button17") {
      var str17 = localStorage.getItem("button17");
      var data17 = JSON.parse(str17);
      var oSpan17 = document.getElementById('span17');
      oSpan17.innerHTML = data17.num;

      var flg17 = document.getElementById('flg17');
      flg17.innerHTML = data17.state;
      if (flg17.innerHTML === "1") {
        voteButton17.style.background = "#B0C4DE";
        voteButton17.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton17.innerHTML = "已投票";
      }
    } if (key == "button18") {
      var str18 = localStorage.getItem("button18");
      var data18 = JSON.parse(str18);
      var oSpan18 = document.getElementById('span18');
      oSpan18.innerHTML = data18.num;
      var flg18 = document.getElementById('flg18');
      flg18.innerHTML = data18.state;
      if (flg18.innerHTML === "1") {
        voteButton18.style.background = "#B0C4DE";
        voteButton18.setAttribute("disabled", "true"); // 一般只能投票一次的吧
        voteButton18.innerHTML = "已投票";
      }
    }
  }
}

/*本地数据库存储留言 */
var commentlist = null;
var db = openDatabase('MyData', '', 'My Database', 102400);

function init() {
  // commentlist = document.getElementById('commentlist');
  showData();
}
var loadflg = 0;
function showData() {
  //绑定加载更多事件
  loadflg = 0;
  var loadDiv = document.getElementById('load-more');
  var bottomDiv = document.getElementById('bottom');
  bottomDiv.style.display = "none";
  loadDiv.onclick = function () {
    showAllData();
    loadDiv.style.display = "none";
  }
  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Comment(comment TEXT, timetext TEXT)', []);
    tx.executeSql(
      "SELECT * FROM Comment",
      [],
      function (tx, rs) {
        var result = '</ol>';
        var count=0;
          if(rs.rows){
              if (rs.rows.length >= 3) {
            loadDiv.style.display = "block";
          } else {
            loadDiv.style.display = "none";
          }
          for (i = rs.rows.length - 1; i >= 0; i--) {
          var comment = rs.rows.item(i).comment;
          var timetext = rs.rows.item(i).timetext;
          result += '<li class="comment"><div class="comment-user">' + "132****5612" + '</div><p>'
            + comment + '</p><div class="comment-time">' + timetext + '</div><div class="comment-index">' + (i + 1) + '楼' + '</div></li>';
            count++;
            if(count==3){
              break;
            }
        
        }
          }        
        result += '</ol>';
        document.getElementById('commentlist').innerHTML = result;
      },
      function (tx, error) {
        alert('查询失败: ' + error.message);
      });
  });
}
function showAllData() {
  loadflg = 1;
  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Comment(comment TEXT, timetext TEXT)', []);
    tx.executeSql(
      "SELECT * FROM Comment",
      [],
      function (tx, rs) {
        var result = '</ol>';
        for (i = rs.rows.length - 1; i >= 0; i--) {
          var comment = rs.rows.item(i).comment;
          var timetext = rs.rows.item(i).timetext;
          result += '<li class="comment"><div class="comment-user">' + "132****5612" + '</div><p>'
            + comment + '</p><div class="comment-time">' + timetext + '</div><div class="comment-index">' + (i + 1) + '楼' + '</div></li>';
        }
        //绑定收起事件
        var bottomDiv = document.getElementById('bottom');
        bottomDiv.style.display = "block";
        bottomDiv.onclick = function () {
          showData()
          bottomDiv.style.display = "none";
        }
        result += '</ol>';
        document.getElementById('commentlist').innerHTML = result;
      },
      function (tx, error) {
        alert('查询失败: ' + error.message);
      });
  });
}
function addData(comment, timetext) {
  db.transaction(function (tx) {
    tx.executeSql('INSERT INTO Comment VALUES(?,?)', [comment, timetext], function (tx, rs) {
      alert("数据已保存");
    },
      function (tx, error) {
        alert(error.sourse + "::" + error.message);
      });
  });
}
function saveData() {
  var comment = document.getElementById('memo').value;
  var date = new Date();//获取时间戳作为key值
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var timetext = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  if (comment) {
   
    addData(comment, timetext);;//添加一条留言
    var words = "1";
    localStorage.setItem("words", words);
    if (loadflg == 1) {
      showAllData();
    } else {
      showData();
    }
    document.getElementById('memo').value = "";
  } else {
    alert("请先输入内容！");
  }
}
