
const toggleTheme = document.getElementById('toggleTheme');
if (toggleTheme) {
  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}

// Giữ chế độ tối khi reload
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Đổi màu chủ đề
function changeThemeColor(color) {
  document.documentElement.style.setProperty('--main-color', color);
  localStorage.setItem('themeColor', color);
}

// Giữ màu khi reload
const savedColor = localStorage.getItem('themeColor');
if (savedColor) document.documentElement.style.setProperty('--main-color', savedColor);

// Đổi font chữ
const fontSelector = document.getElementById('fontSelector');
if (fontSelector) {
  fontSelector.addEventListener('change', () => {
    document.body.style.fontFamily = fontSelector.value;
    localStorage.setItem('font', fontSelector.value);
  });

  // Load font đã lưu
  const savedFont = localStorage.getItem('font');
  if (savedFont) {
    document.body.style.fontFamily = savedFont;
    fontSelector.value = savedFont;
  }
}
