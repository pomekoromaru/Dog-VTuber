// 初期化時に最初のセクションを表示する
document.addEventListener('DOMContentLoaded', () => {
    // 現在表示されている（hidden クラスが付いていない）セクションを取得
    const defaultSection = document.querySelector('.content:not(.hidden)');
    // セクション選択ボタンを取得
    const sectionButton = document.querySelector('.mobile-nav button');
    if (defaultSection && sectionButton) {
        // 現在のセクションのタイトルをセクション選択ボタンにセット
        sectionButton.textContent = defaultSection.querySelector('h1').textContent;
    } else if (sectionButton) {
        // 万が一表示中のセクションがない場合、デフォルトのテキストを表示
        sectionButton.textContent = 'セクションを選択';
    }
});
 

// ドロップダウンを開閉する
function toggleDropdown() {
    const dropdown = document.querySelector('.mobile-nav .dropdown');
    dropdown.classList.toggle('show');
}

// セクションを切り替える
function navigate(sectionId) {
    // 全セクションを非表示にする
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.add('hidden'));

    // 対象セクションを表示
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // 現在のセクション名をボタンに表示
    const sectionButton = document.querySelector('.mobile-nav button');
    sectionButton.textContent = targetSection.querySelector('h1').textContent;

    // ドロップダウンを閉じる
    const dropdown = document.querySelector('.mobile-nav .dropdown');
    dropdown.classList.remove('show');
}
