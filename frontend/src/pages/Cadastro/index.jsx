import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../services/api";

function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleCadastro = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const response = await api.post("/register", {
                email: email,
                password: password
            });

            if (response.status === 201) {
                alert("Cadastro realizado com sucesso!");
                navigate("/"); // Redireciona para a página de login
            }
        } catch (error) {
            console.error("Erro no cadastro:", error);
            if (error.response) {
                if (error.response.status === 400) {
                    alert("Usuário já existe!");
                } else {
                    alert(`Erro ${error.response.status}: ${error.response.data.message || "Ocorreu um erro."}`);
                }
            } else {
                alert("Erro ao realizar cadastro. Tente novamente mais tarde.");
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Cadastro</h2>
                <form onSubmit={handleCadastro}>
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
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-input"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
