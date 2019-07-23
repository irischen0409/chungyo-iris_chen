function sayYaV5(welcome, ...names){
    for (let name of names){
        document.write(`${welcome}! ${name} <br>`);
    }       
}

function checkTWID(id){  //身分證
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/;  //正規表示法
    let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
    if (id.match(regex) != null){
        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10;
        //document.write(n12);
        let n1 = parseInt(n12/10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1,1));
        let n4 = parseInt(id.substr(2,1));
        let n5 = parseInt(id.substr(3,1));
        let n6 = parseInt(id.substr(4,1));
        let n7 = parseInt(id.substr(5,1));
        let n8 = parseInt(id.substr(6,1));
        let n9 = parseInt(id.substr(7,1));
        let n10 = parseInt(id.substr(8,1));
        let n11 = parseInt(id.substr(9,1));

        let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6 +
                  n6*5 + n7*4 + n8*3 + n9*2 + n10*1 + n11*1;
                  
        ret = sum % 10 == 0; //如果等於0 傳TRUE/FALSE
    }
    return ret;
}

function phoneid(number){  //手機號碼
    let ret = false;
    let regex1 = /^09[0-9]{2}-[0-9]{6}$/;  //正規表示法
    if (number.match(regex1) != null){
        ret = true;
    }
    return ret;
}