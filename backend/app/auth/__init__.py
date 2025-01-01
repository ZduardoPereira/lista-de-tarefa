from flask import Blueprint
from .routes import login, register

auth_bp = Blueprint("auth", __name__)

# Adicione as rotas ao blueprint
auth_bp.add_url_rule("/login", view_func=login, methods=["POST"])
auth_bp.add_url_rule("/register", view_func=register, methods=["POST"])
