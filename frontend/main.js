window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
});

const functionApiUrl = 'https://agetresumecounter.azurewebsites.net/api/GetResumeCounter?code=bz0TpD2qTPfMred7IhNEUsaWlR3WYb90w5xK2xO5CHIVAzFu6zcL0w=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}