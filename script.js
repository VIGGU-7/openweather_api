document.addEventListener("DOMContentLoaded",()=>{
    const api_key="add this"
    const location=document.getElementById("location")
    const btn=document.getElementById("get-btn")
    const condition=document.getElementById("condition")
    const errorMsg=document.getElementById("error")
    btn.addEventListener("click",async ()=>{
        const city=location.value.trim()
        if(!city) return;
        try {
            const data=await fetchcity(city)
            display(data)
        } catch (error) {
            showError()
        }
    })
     async function fetchcity(city){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        const response=await fetch(url)
        if(!response.ok){
            throw new Error("city not found")
        }
        const data=await response.json()
        return data
    }
    function display(data){
        const temp=document.getElementById("temp")
        temp.textContent=data.main.temp
        condition.textContent=data.weather[0].main
    }
    function showError(){
        const p=document.getElementsByTagName("p")
        for (let i = 0; i < p.length; i++) {
            p[i].classList.add("hidden");
        }
        errorMsg.classList.remove("hidden")
    }
})
