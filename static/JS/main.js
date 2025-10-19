const fileInput = document.getElementById("fileInput");
const uploadZone = document.getElementById("uploadZone");
const resultsArea = document.getElementById("resultsArea");
const previewImage = document.getElementById("previewImage");
const processSection = document.getElementById("processSection");
const processBtn = document.getElementById("processBtn");
const classificationResults = document.getElementById("classificationResults");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const feedbackBtn = document.getElementById("feedbackBtn");
const reclassifyBtn = document.getElementById("reclassifyBtn");
const saveBtn = document.getElementById("saveBtn");

uploadZone.addEventListener("click", () => fileInput.click());
// Xử lý khi chọn file
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    previewImage.src = ev.target.result;
    uploadZone.classList.add("hidden");
    processSection.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
});
// Xử lý khi nhấn nút xử lý ảnh
processBtn.addEventListener("click", () => {
  processSection.classList.add("hidden");
  setTimeout(() => {
    resultsArea.classList.remove("hidden");
    displayFakeResults();
    addChatMessage("AI: Ảnh này có vẻ là một con chó 🐶 (độ tin cậy 92%)", false);
  }, 2000);
});
// Hiển thị kết quả giả
function displayFakeResults() {
  classificationResults.innerHTML = "";
  const fakeResults = [
    { label: "Chó", confidence: 0.92 },
    { label: "Động vật", confidence: 0.87 },
    { label: "Thú cưng", confidence: 0.74 },
  ];
  fakeResults.forEach(r => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `<div class='flex justify-between'>
      <span>${r.label}</span><span>${(r.confidence*100).toFixed(1)}%</span>
    </div>
    <div class='h-2 bg-gray-200 rounded'><div class='bg-violet-600 h-2 rounded' style='width:${r.confidence*100}%'></div></div>`;
    classificationResults.appendChild(div);
  });
}
// Thêm tin nhắn vào khung chat
function addChatMessage(text, isUser = true) {
  const div = document.createElement("div");
  div.className = isUser ? "user-msg p-2 bg-blue-100 rounded-lg mb-2" : "ai-msg p-2 bg-gray-100 rounded-lg mb-2";
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
// Gửi tin nhắn khi nhấn nút gửi
sendBtn.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (!text) return;
  addChatMessage(text, true);
  chatInput.value = "";
  setTimeout(() => addChatMessage("AI: Cảm ơn bạn, tôi đang phân tích thêm...", false), 800);
});
// Gửi tin nhắn khi nhấn Enter
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
// Các nút chức năng khác
saveBtn.addEventListener("click", () => addChatMessage("AI: Kết quả đã được lưu thành công ✅", false));
reclassifyBtn.addEventListener("click", () => {
  resultsArea.classList.add("hidden");
  processSection.classList.remove("hidden");
});
feedbackBtn.addEventListener("click", () => addChatMessage("AI: Cảm ơn phản hồi của bạn!", false));
