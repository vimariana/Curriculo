let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const langBtn = document.getElementById('langBtn');
const translations = {
    en: {
        about: "Brief description about my professional characteristics.",
        address: "Address: Amalia Falchi Senise Street, Jardim Marquesa, São Paulo - SP",
        skills: ["Communication", "Organization", "Teamwork"],
        experience: [
            { company: "Dasa", role: "Receptionist", period: "2021 - 2023", tasks: "Customer service, schedule management." },
            { company: "BX Group", role: "Administrative Assistant", period: "2023 - 2024", tasks: "Administrative support, document organization." }
        ],
        education: "Business Management (2022 - 2024)",
        charity: "I volunteered at the Methodist Church of Jardim Ângela delivering food and singing."
    },
    pt: {
        about: "Breve descrição sobre minhas características profissionais.",
        address: "Endereço: Rua Amalia Falchi Senise, Jardim Marquesa, São Paulo - SP",
        skills: ["Comunicação", "Organização", "Trabalho em equipe"],
        experience: [
            { company: "Dasa", role: "Recepcionista", period: "2021 - 2023", tasks: "Atendimento ao cliente, gestão de agenda." },
            { company: "BX Group", role: "Assistente Administrativo", period: "2023 - 2024", tasks: "Suporte administrativo, organização de documentos." }
        ],
        education: "Gestão Administrativa (2022 - 2024)",
        charity: "Prestei serviço na Igreja Metodista Jardim Ângela levando comida e cantando."
    }
};

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function toggleLanguage() {
    const currentLang = langBtn.innerText === 'Inglês' ? 'pt' : 'en';
    langBtn.innerText = currentLang === 'pt' ? 'Inglês' : 'Português';

    document.querySelector('#slide2 p:nth-of-type(1)').innerText = translations[currentLang].about;
    document.querySelector('#slide2 p:nth-of-type(2)').innerText = translations[currentLang].address;

    const skillsList = document.querySelector('#slide3 ul');
    skillsList.innerHTML = '';
    translations[currentLang].skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    });

    const experienceDiv = document.querySelector('#slide4');
    experienceDiv.innerHTML = '<h2>Experiências Profissionais</h2>';
    translations[currentLang].experience.forEach(job => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${job.company}:</strong> ${job.role} (${job.period}) - ${job.tasks}`;
        experienceDiv.appendChild(p);
    });

    document.querySelector('#slide5 p').innerText = translations[currentLang].education;
    document.querySelector('#slide6 p').innerText = translations[currentLang].charity;
}

changeSlide(0); // Start on the first slide
