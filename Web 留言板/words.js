var datatable = null;
var db = openDatabase('MyData', '', 'My Database', 102400);

function init() {
    datatable = document.getElementById('datatable');
    showAllData();
}

function showAllData() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS MsgData(name TEXT,message TEXT, time TEXT)', []);
        tx.executeSql('SELECT * FROM MsgData', [], function (tx, rs) {
            removeAllData();
            for (var i = 0; i < rs.rows.length; i++) {
                showData(rs.rows.item(i));
            }
        });
    });
}
function showData(row) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML = row.name;
    var td2 = document.createElement('td');
    td2.innerHTML = row.message;
    var td3 = document.createElement('td');
    td3.innerHTML = row.time;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    datatable.appendChild(tr);
}
function removeAllData() {
    for (var i = datatable.childNodes.length - 1; i >= 0; i--) {
        datatable.removeChild(datatable.childNodes[i]);
    }
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    th1.innerHTML = '姓名';
    th2.innerHTML = "留言";
    th3.innerHTML = "时间";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    datatable.appendChild(tr);

}
function addData(name, message, time) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO MsgData VALUES(?,?,?)', [name, message, time], function (tx, rs) {
            alert("数据已保存");
        },
            function (tx, error) {
                alert(error.sourse + "::" + error.message);

            });
    });
}
function saveData() {
    var name = document.getElementById('name').value;
    var memo = document.getElementById('memo').value;
    var date = new Date();//获取时间戳作为key值
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    addData(name, memo, time);
    showAllData();
}

