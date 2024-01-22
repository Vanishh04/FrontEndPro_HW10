const hours = +prompt('Введіть будь ласка кількість годин: ');

if(hours > 0 && hours <=  24){
    const seconds = hours * 3600;

    const resultMessage = `У ${hours} годинах - ${seconds} секунд`;
    
    alert(resultMessage);
}
else{
    alert('Других годин не існує');
}

