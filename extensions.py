//Nơi khởi tạo các “module mở rộng” của Flask (ORM, login, mail, v.v.), để tránh vòng import khi project lớn.
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()