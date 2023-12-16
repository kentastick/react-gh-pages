import React from 'react';

// まずクラスを作る
const TestCode = () => {

    // クラス内部に変数とか定数を持てる。Javaと同じ
    const TEST = 'TEST';

    // 「htmlコード」をreturnする。
    return (
        <div>{TEST}</div>
    );
};
export default TestCode;