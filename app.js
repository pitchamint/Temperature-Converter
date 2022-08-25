//ดึงตัวเลขจาก input ที่ผู้ใช้กรอกมา และแยกประเภทองศาด้วย
const celciusInput = document.getElementById('celcius')
const fahrenheitInput = document.getElementById('fahrenheit')
const kelvinInput = document.getElementById('kelvin')
const tempInput = document.querySelectorAll('input') //นำอุณภูมิที่เขากรอกมาเก็บในตัวแปรนี้ในรูปแบบ array
//เราอยากดึงเอาตัวเลขที่ป้อน และชื่อหน่วยองศามาใช้งาน ต้องทำการดึงค่ามาใช้โดยวนลูป
tempInput.forEach(input=>{
    input.addEventListener("input",(e)=>{
        //ตัวเลขที่ป้อนเข้ามา
        let tempValue = parseInt(e.target.value) //แปลง string เป็น number 
        //ชื่อหน่วยอุณหภูมิ
        let inputName = e.target.name //เรามีการตั้งชื่อไว้แล้วใน html

        if(e.target.value === ""){
            celciusInput.value = null
            fahrenheitInput.value= null
            kelvinInput.value = null
            return //รีเทิร์นออก เพื่อไม่ให้มันไปทำงานต่อที่ด้านล่าง(กระโดดออกนอกฟังก์ชั่นเลย) เพราะมันเป็นค่าว่าง
        }
        //กระบวนการแปลงอุณหภูมิ
        if(inputName === "celcius"){
            //Cเป็น F = 1.80*c+32
            let fahrenheit = tempValue *1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2)

            //Cเป็น K = c+273
            let kelvin =tempValue + 273
            kelvinInput.value = kelvin.toFixed(2)
        }else if(inputName === "fahrenheit"){
            //F -> C
            let celcius = (tempValue-32) / 1.8
            celciusInput.value = celcius.toFixed(2)

            //F -> K
            let kelvin = (tempValue-32) / 1.8 + 273
            kelvinInput.value = kelvin.toFixed(2)
        }else if(inputName === "kelvin"){
            // K -> C
            let celcius = tempValue -273
            celciusInput.value = celcius.toFixed(2)

            // K -> F
            let fahrenheit =(tempValue- 273) * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2)
        }
    })
})