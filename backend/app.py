from flask import Flask
from flask_cors import CORS
from flask_mysqldb import MySQL
from config import Config
from app.auth.routes import login, register  # Importando as funções de login e register

mysql = MySQL()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    try:
        print("Tentando inicializar o MySQL...")
        mysql.init_app(app)
        print("MySQL inicializado com sucesso.")
    except Exception as e:
        print(f"Erro ao inicializar MySQL: {e}")

    CORS(app, resources={r"/*": {"origins": "*"}})

    # Rota para registro
    @app.route("/register", methods=["POST"])
    def register_route():
        return register()

    # Rota para login
    @app.route("/login", methods=["POST"])
    def login_route():
        return login()

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
