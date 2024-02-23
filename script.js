document.addEventListener('DOMContentLoaded', function () {
    const doctorContainer = document.getElementById('doctorContainer');
    
    fetch('db.json')
        .then(response => response.json())
        .then(doctors => {
            let rowContainer;

            doctors.forEach((doctor, index) => {
                if (index % 4 === 0) {
                    // Create a new row container for every three cards
                    rowContainer = document.createElement('div');
                    rowContainer.classList.add('row');
                    doctorContainer.appendChild(rowContainer);
                }

                const card = createDoctorCard(doctor);
                rowContainer.appendChild(card);
            });
        });

    function createDoctorCard(doctor) {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = doctor.image_url;
        image.alt = `Dr. ${doctor.name}`;

        const name = document.createElement('p');
        const profession = document.createElement('p');
        name.textContent = `${doctor.name}`;
        profession.textContent = `${doctor.profession}`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(profession);

        return card;
    }
});
