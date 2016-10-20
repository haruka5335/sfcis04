練習問題2

われ
fanction div(ここに引数を入れる){
let a , b;　ここで返り値の変数を定義？ (let result)
result = a / b; 割ろうね
return result;　出そうね
}

先生
function div(warareru, waru){
let result;
result = warareru / waru;
return result;
}


練習問題3

われ
fanction toMile(warareru){ Kmをマイルに直す⇨kmってした方が楽だよね
let result;
waru = 1.6　ココいらない、なぜなら
result = div　ここでdiv(km, 1.6)と定義するため
return result}

先生
function toMile(km){
    let result;
    result = div(km, 1.6);
    return result;
}


練習問題4
逆の計算？
マイル　キロメートルを1.6で割る
マイルに1.6をかける

function toKM(km){
    let result;
    result = toMile(km) * 1.6;
    return result;
}

いや入れた数1.6で割ってそれに1.6かけたんじゃそりゃ同じ値が返ってくるんだよなあ〜〜〜〜！！！！

いっそこうでは
　function toKM(mile){
    let result;
    result = mile * 1.6
    return result;
}
あってた