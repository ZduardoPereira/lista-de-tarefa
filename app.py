from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        # Validação simples
        if username == "1" and password == "1":
            return redirect(url_for("home"))  # Redireciona para a rota "home"
        return "Usuário ou senha inválidos!"
    return render_template("login.html")

@app.route("/home")
def home():
    return render_template("home.html")  # Renderiza a página inicial do usuário

if __name__ == "__main__":
    app.run(debug=True)
