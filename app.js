'use strict';
/*フィボナッチ数列　二重再帰？？
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const length = 40;
for(let i = 0; i <= length; i++){
    console.log(fib(i));
}*/

const memo = new Map();//key=順番　値＝答え
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    //もし連想配列が、n をキーとした答えを持っていればその値をそのまま関数の値として返す
    if (memo.has(n)) {
        return memo.get(n);
    }
    //答えを持っていなければ再帰関数を計算して値を求める
    const value = fib(n - 1) + fib(n - 2);
    //連想配列(memo)に計算した値を格納する
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}