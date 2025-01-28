let companyName = document.getElementById('company-name')
        let btn = document.getElementById('btn')

        btn.addEventListener('click', async ()=>{

            let spinner = document.getElementById('logo-spin');
            spinner.style.display = 'inline-block'
            async function getLogo() {
let apiKey = 'ISZE7ohZCI5aVXMLDGUOsg==lC1ODuck45QOb0SD' 

try {

    let res = await fetch(`https://api.api-ninjas.com/v1/logo?name=${encodeURIComponent(companyName.value)}`,{
    method: 'GET',
    headers:{
        'X-Api-Key' : apiKey
    }
}); 

if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
    let result = await res.json();
console.log(result);
if (result.length > 0) {
                document.getElementById('logo-container').innerHTML = 
             
                `<img src="${result[0].image}" alt="Company Logo" width="200">`
                    ;
            } else {
                document.getElementById('logo-container').innerText = "No logo found.";
            }


    
} catch (error) {
    console.log('error');
}                
            }getLogo()
            console.log(btn);
        });

        window.addEventListener('load',()=>{
            let cont = document.querySelector('#containerSpin');
            cont.setAttribute('style','display:none')
        })