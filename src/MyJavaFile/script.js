// 初期化時に最初のセクションを表示する
document.addEventListener('DOMContentLoaded', () => {
    const defaultSection = document.querySelector('.content:not(.hidden)');
    const sectionButton = document.querySelector('.mobile-nav button');
    if (defaultSection && sectionButton) {
        sectionButton.textContent = defaultSection.querySelector('h1').textContent;
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
