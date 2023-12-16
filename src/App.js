import React from 'react';

// まずクラスを作る
const App = () => {

    // クラス内部に変数とか定数を持てる。Javaと同じ
    const TEST = 'TEST';

    // 「htmlコード」をreturnする。
    return (
        <div>{TEST}</div>
    );
};
export default App;