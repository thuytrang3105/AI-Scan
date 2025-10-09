//“cổng chính” của ứng dụng Flask. Dùng để khởi tạo app, load config, đăng ký routes (Blueprints), và chạy server.
from flask import Flask
from extensions import db
from routes.home_routes import home_bp
from routes.api_routes import api_bp

app = Flask(__name__)
app.config.from_pyfile('config.py')   
db.init_app(app)

//app.register_blueprint(home_bp)
//app.register_blueprint(api_bp)

if __name__ == '__main__':
    app.run(debug=True)
