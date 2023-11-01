window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://agetresumecounter.azurewebsites.net/api/GetResumeCounter?code=bz0TpD2qTPfMred7IhNEUsaWlR3WYb90w5xK2xO5CHIVAzFu6zcL0w==';

const getVisitCount = async () => {
    try {
        const response = await fetch(functionApiUrl);
        const data = await response.json();
        console.log("Website called function API.");
        document.getElementById("counter").innerText = data.count;
    } catch (error) {
        console.log("An error occurred:", error);
    }
};
