document.addEventListener("DOMContentLoaded", () => {
    // ---------- Verificação de login ----------
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) {
        window.location.href = "login.html"; 
        return; 
    }

    // ---------- Saudação ----------
    const greeting = document.getElementById("user-greeting");
    greeting.textContent = `Olá, ${usuario?.nome || "Estudante"}!`;

    // ---------- Carregar Tarefas ----------
    fetch("data/tasks.json")
        .then(res => {
            if (!res.ok) {
                throw new Error('Não foi possível carregar as tarefas. Verifique o caminho para data/tasks.json.');
            }
            return res.json();
        })
        .then(tasks => {
            const pendentes = tasks.filter(t => t.status === "pendente");
            const concluidas = tasks.filter(t => t.status === "concluida");
            const atrasadas = tasks.filter(t => t.status === "atrasada");
            
            // Atualiza contadores
            document.getElementById("total").textContent = tasks.length;
            document.getElementById("pendentes").textContent = pendentes.length;
            document.getElementById("concluidas").textContent = concluidas.length;
            document.getElementById("atrasadas").textContent = atrasadas.length;

            // Lista de tarefas
            const taskList = document.getElementById("task-list");
            if (tasks.length === 0) {
                taskList.innerHTML = '<p class="no-tasks">🎉 Você não tem tarefas cadastradas!</p>';
                return;
            }

            tasks.forEach(task => {
                const div = document.createElement("div");
                div.className = `task-card status-${task.status}`; 
                
                let statusInfo = {};
                switch (task.status) {
                    case 'concluida':
                        statusInfo.icon = '<i class="fas fa-check-circle"></i>';
                        statusInfo.color = 'var(--success-color)';
                        break;
                    case 'pendente':
                        statusInfo.icon = '<i class="fas fa-hourglass-half"></i>';
                        statusInfo.color = 'var(--warning-color)';
                        break;
                    case 'atrasada':
                        statusInfo.icon = '<i class="fas fa-exclamation-triangle"></i>';
                        statusInfo.color = 'var(--danger-color)';
                        break;
                    default:
                        statusInfo.icon = '<i class="fas fa-info-circle"></i>';
                        statusInfo.color = '#777';
                }

                div.innerHTML = `
                    <h3>${task.titulo}</h3>
                    <p><strong><i class="fas fa-book"></i> Disciplina:</strong> ${task.disciplina}</p>
                    <p>${task.descricao}</p>
                    <p><strong><i class="fas fa-chalkboard-teacher"></i> Professor:</strong> ${task.professor}</p>
                    <p>
                        <strong>${statusInfo.icon} Status:</strong> 
                        <span style="color: ${statusInfo.color}; font-weight: bold;">
                            ${task.status.toUpperCase()}
                        </span>
                    </p>
                    <p><strong><i class="fas fa-calendar-alt"></i> Prazo:</strong> ${task.prazo}</p>
                `;
                taskList.appendChild(div);
            });

            // ---------- Botão do WhatsApp ----------
            const whatsappBtn = document.getElementById("whatsapp-button");
            const numeroWhatsApp = "558585750405"; // Número real do professor (formato internacional sem espaços)

            if (whatsappBtn) {
                whatsappBtn.addEventListener("click", (e) => {
                    e.preventDefault();

                    let mensagem = `Olá, professor! 👋\n\nAqui é ${usuario?.nome || "o aluno"}.\n\n`;

                    if (pendentes.length === 0 && atrasadas.length === 0) {
                        mensagem += "✅ No momento, não tenho atividades pendentes ou atrasadas.";
                    } else {
                        mensagem += "Gostaria de informar que tenho as seguintes atividades pendentes e atrasadas:\n\n";
                    }

                    if (pendentes.length > 0) {
                        mensagem += "📝 *Pendentes:*\n";
                        pendentes.forEach((t, i) => {
                            mensagem += `${i + 1}. ${t.titulo} - ${t.disciplina} (Prazo: ${t.prazo})\n`;
                        });
                        mensagem += "\n";
                    }

                    if (atrasadas.length > 0) {
                        mensagem += "⏰ *Atrasadas:*\n";
                        atrasadas.forEach((t, i) => {
                            mensagem += `${i + 1}. ${t.titulo} - ${t.disciplina} (Venceu em: ${t.prazo})\n`;
                        });
                        mensagem += "\n";
                    }

                    mensagem += "Poderia me orientar sobre essas atividades? Obrigado! 🙏";

                    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
                    window.open(link, "_blank");
                });
            }
        })
        .catch(error => {
            console.error("Erro ao carregar dados:", error);
            document.getElementById("task-list").innerHTML = '<p class="error-msg">❌ Não foi possível carregar as tarefas. Verifique se o arquivo data/tasks.json está correto.</p>';
        });
});
