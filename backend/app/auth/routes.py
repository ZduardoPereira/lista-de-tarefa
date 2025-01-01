from flask import request, jsonify
from .models import get_user_by_email, create_user
from .utils import hash_password, verify_password

def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = get_user_by_email(email)
    if not user or not verify_password(password, user[2]):
        return jsonify({"message": "Credenciais inválidas"}), 401

    return jsonify({"message": "Login realizado com sucesso!"})

def register():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if get_user_by_email(email):
        return jsonify({"message": "Usuário já existe"}), 400

    hashed_password = hash_password(password)
    create_user(email, hashed_password)

    return jsonify({"message": "Usuário criado com sucesso!"}), 201
