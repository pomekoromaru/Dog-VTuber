function toggleDropdown() {
    const dropdown = document.querySelector('.mobile-nav .dropdown');
    dropdown.classList.toggle('show');
}

function navigate(sectionId) {
    // セクションの表示切り替え
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');

    // ドロップダウンを閉じる
    const dropdown = document.querySelector('.mobile-nav .dropdown');
    dropdown.classList.remove('show');
}
