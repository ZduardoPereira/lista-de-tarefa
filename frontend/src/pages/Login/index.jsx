import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                alert("Login bem-sucedido!");
                navigate("/home"); // Redireciona para a página Home
            }
        } catch (error) {
            console.error("Erro no login:", error);
            if (error.response) {
                alert(error.response.data.message || "Erro ao fazer login.");
            } else {
                alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>
                <div className="login-footer">
                    <a href="/cadastro" className="login-link">
                        Não tem uma conta? Cadastre-se
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
