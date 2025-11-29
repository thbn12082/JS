const name = "";
displayName = name || "Người dùng ẩn danh";
console.log(displayName);

const isLoggedIn = true;
const role = "ADMIN";
if (isLoggedIn && role === "ADMIN") {
    console.log("Hiển thị giao diện quản trị");
}