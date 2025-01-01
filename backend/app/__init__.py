from flask import Flask
from flask_mysqldb import MySQL
from config import Config

mysql = MySQL()  # Instancia o MySQL

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    mysql.init_app(app)  # Inicializa o MySQL com a aplicação

    from .auth.routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/")

    return app
