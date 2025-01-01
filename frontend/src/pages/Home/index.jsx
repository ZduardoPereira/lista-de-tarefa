import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Você saiu com sucesso!");
        navigate("/"); // Redireciona para a página de Login
    };

    return (
        <div>
            <nav style={{ background: "#007bff", padding: "10px", color: "#fff" }}>
                <h1 style={{ display: "inline", marginRight: "20px" }}>Home</h1>
                <button
                    onClick={handleLogout}
                    style={{
                        background: "#ff4d4d",
                        color: "#fff",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Sair
                </button>
            </nav>
            <div style={{ padding: "20px" }}>
                <h2>Bem-vindo à página inicial!</h2>
            </div>
        </div>
    );
}

export default Home;
