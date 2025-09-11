// スクロールで要素をフェードインさせるための設定

// 'fade-in-section' というクラスを持つすべての要素を取得
const fade_in_elements = document.querySelectorAll(".fade-in-section");

// 要素が画面に入ったかどうかを監視するオブザーバーを作成
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // isIntersectingがtrueなら、要素が画面内に入ったことを意味する
        if (entry.isIntersecting) {
            // 'is-visible' というクラスを追加して、アニメーションを開始
            entry.target.classList.add("is-visible");
            
            // 一度表示されたら、この要素の監視を停止してパフォーマンスを向上
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // 要素が10%見えたらトリガー
});

// 取得したすべての要素を監視対象として登録
fade_in_elements.forEach((element) => {
    observer.observe(element);
});