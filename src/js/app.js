const tools = [
"Git","GitHub","Docker","Kubernetes","Jenkins",
"Ansible","Terraform","Prometheus","Grafana","Nagios",
"Linux","AWS CLI","Azure CLI","GCP SDK","Maven",
"Gradle","Nexus","SonarQube","Helm","OpenShift",
"Vagrant","Python","NodeJS","Java","MySQL",
"PostgreSQL","Redis","MongoDB","Apache","Nginx"
];

const container = document.getElementById("software-list");

tools.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${tool}</h3>
        <button onclick="alert('Downloading ${tool}...')">
        Download
        </button>
    `;
    container.appendChild(card);
});
