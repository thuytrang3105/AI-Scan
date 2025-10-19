from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/index')
def index():
    return render_template('index.html', active_page='index')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', active_page='dashboard')

@app.route('/setting')
def setting():
    return render_template('setting.html', active_page='setting')


if __name__ == '__main__':
    app.run(debug=True)
