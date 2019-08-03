#  SpringBoot + Thymeleaf + Vuejs
# Cài đặt

 - Cài đặt IDE " **Intellij IDEA** " để quản lí source project. 
>Link download:   
   [https://www.jetbrains.com/idea/download/#section=windows](https://www.jetbrains.com/idea/download/#section=windows)
 - Cài đặt **XAMPP** để chạy project trên môi trường localhost.
 >Link download:[https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)
 - Cài đặt **DBeaver** để quản lí dữ liệu.
 > Link download: [https://dbeaver.io/download/](https://dbeaver.io/download/)
# Chạy DB Scripts
 - B1: Mở DBeaver vào **File->OpenFile** để chọn file scripts.
 - B2: Chọn đến đường dẫn project, vào mục **scripts/db.sql** để mở các
   bảng.
 - B3: Chọn tất cả các dòng (**Ctrl + A**), nhấn Execute SQL Scripts
   (**Alt + X**).
 - B4: Chọn đến đường dẫn project, vào mục scripts/data.sql để mở các
   bảng.
 - B5: Chọn tất cả các dòng (**Ctrl + A**), nhấn Execute SQL Scripts
   (**Alt + X**).

# Cách chạy trên localhost

 - B1: Mở **XAMPP**
 - B2: Start **Apache** và **MySQL**
 - B3: Mở IDE " **Intellij IDEA** " , sau đó **import** project (use Maven).
 - B4: Run project bằng **Icon Run**
 > Hoặc đường dẫn trên thanh menubar **Run -> Run "DemoApplication"**
 > Hoặc phím tắt **Alt + Shift + X**
 
 - B5: Mở trình duyệt gõ "**localhost:8080**" project sẽ chạy.

# Các việc đã làm
Tạo các RestAPI để thực hiện các chức năng.
 1. Tạo thêm tài khoản.(POST)
>Link: http://localhost:8080/api/users
 2. Sửa tài khoản.(PUT)
 >Link: http://localhost:8080/api/users/{id}
 3. Xóa tài khoản (Dùng thêm Ajax) (DELETE)
 >Link: http://localhost:8080/api/users/{id}
 4. Show tất cả tài khoản. (GET)
 >Link: http://localhost:8080/api/users
 5. Show 1 tài khoản. (GET)
 >Link: http://localhost:8080/api/users/{id}
