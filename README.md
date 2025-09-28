
---

## 📚 AcadêmicoApp

**AcadêmicoApp** é um MVP (Minimum Viable Product) desenvolvido para ajudar estudantes a organizarem suas atividades acadêmicas de forma simples, visual e funcional. O sistema permite login, visualização de tarefas pendentes, controle de prazos e categorização por status.

---

### 🚀 Funcionalidades

- ✅ Login com nome e e-mail acadêmico
- 📋 Dashboard com resumo de tarefas
- ⏰ Classificação por status: pendente, concluída e atrasada
- 📅 Visualização de prazos
- 📧 Contato com professores (simulado)
- 💾 Armazenamento local temporário via `localStorage`

---

### 🧠 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| **HTML5**  | Estrutura das páginas |
| **CSS3**   | Estilização e responsividade |
| **JavaScript (Vanilla)** | Lógica de interação e manipulação de dados |
| **JSON**   | Simulação de banco de dados |
| **LocalStorage** | Persistência temporária de dados do usuário |

---

### 🗂 Estrutura de Pastas

```
ACADEMICO-APP/
│
├── login.html              # Página de login
├── index.html              # Dashboard principal
│
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globais
│   ├── js/
│   │   ├── login.js        # Lógica de login
│   │   └── dashboard.js    # Lógica do dashboard
│   └── img/
│       └── logo.png        # Logotipo do app
│
├── data/
│   └── tasks.json          # Tarefas simuladas
│
└── README.md               # Documentação do projeto
```

---

### 📦 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/ACADEMICO-APP.git
   ```

2. **Abra o projeto no navegador**:
   - Inicie por `login.html`
   - Após login, será redirecionado para `index.html`

3. **(Opcional)**: Use uma extensão como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code para simular um ambiente local dinâmico.

---

### 🎯 Objetivo Acadêmico

Este projeto foi desenvolvido como parte de uma apresentação universitária com foco em:

- Práticas de desenvolvimento web moderno
- Organização de código e arquitetura de projeto
- Aplicação de conceitos de UI/UX
- Simulação de funcionalidades reais com tecnologias acessíveis

---

### 📌 Melhorias Futuras

- Integração com banco de dados real (Firebase ou Supabase)
- Sistema de autenticação com validação
- Marcar tarefas como concluídas dinamicamente
- Exportar tarefas para PDF
- Notificações via WhatsApp (API)

---




