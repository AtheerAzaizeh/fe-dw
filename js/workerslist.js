
document.addEventListener('DOMContentLoaded', () => {
    const allWorkersTab = document.getElementById('all-workers');
    const suitableWorkersTab = document.getElementById('suitable-workers');
    const workersListAll = allWorkersTab.querySelector('.workers-list');
    const workersListSuitable = suitableWorkersTab.querySelector('.workers-list');

    const fetchJobs = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/jobs');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const jobs = await response.json();
            populateWorkersList(jobs);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };    

    const populateWorkersList = (jobs) => {
        const allWorkersHtml = jobs.map(job => `
            <div class="worker">
                <h3>${job.JobTitle}</h3>
                <p>${job.JobDescription}</p>
                <p><strong>Location:</strong> ${job.Location}</p>
                <p><strong>Skills:</strong> ${job.RequiredSkills}</p>
                <p><strong>Experience:</strong> ${job.RequiredExperience} years</p>
                <p><strong>Education:</strong> ${job.EducationLevel}</p>
            </div>
        `).join('');

        workersListAll.innerHTML = allWorkersHtml;
        workersListSuitable.innerHTML = allWorkersHtml;
    };

    fetchJobs();
});
