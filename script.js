const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer =Math.floor(Math.random()*20)+1
let arr = ['Стремитесь к успеху и выглядите так, словно вы его уже достигли.', 
'Лучшее всегда является врагом хорошего.',
 'Ничего не может быть смешнее, чем нравиться всем и каждому.',
  'Чем мы наполняем наши молитвы, то нам и причитается.', 
  'Разница между победителем и побежденным только в том, что первый поднялся больше раз, чем упал',
  'Каждый дарованный нам день является первым в том отрезке жизни, что нам остался.',
  'Не стоит тратить время и силы на мелочи, нужно думать о главном.',
  'Все не так гладко, как того бы хотелось, но намного лучше, чем могло бы быть.',
  'Нужно делать то, что ты должен делать. И пусть все будет так, как будет.',
"Определитесь с конечной целью – и у вас появится шанс на победу.",
"Обратной стороной каждого поражения являются открывающиеся новые возможности.",
"Стать твоим другом дано не каждому, но каждому дано стать чьим-то учителем.",
"Чтобы быть поистине счастливым – властвуй над своими помыслами.",
"Каждому из нас дается столько блага, сколько он сам дал другим.",
"Если Господь закрывает перед нами дверь, значит, он растворил окно.",
"Каким бы огромным ни было расстояние – оно начинается с первого шага.",
"Пусть тебя не страшит неумение. Делая с желанием – научишься.",
"Лучше сделать и пожалеть о сделанном, чем не сделать и сожалеть о не сделанном.",
"Стоя на месте, двигаться можно только назад.",
"Что бы ни случилось, все в конечном итоге приведет к лучшему."
];
  let rand = Math.floor(Math.random() * arr.length);
 console.log (answer)
 console.log (rand)
  
  


input.addEventListener("keypress", function (e) {
    if (e.keyCode===13) {
        play ()
    }
})

button.addEventListener("click", play);

function play (){
    const userNumber = document.querySelector("#guess").value; 
    console.log (userNumber)
    if (userNumber<1 || userNumber>20) {
    
Swal.fire({
  icon: 'error',
  title: 'Ой...',
  text: 'Введи число от 1 до 20!',
  
})
    }

    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Сосредоточься...',
            text: 'Введи число!',
                      }) 
    }
    else if(userNumber<answer){
        Swal.fire('Введи число повыше')  
    }
    else if (userNumber>answer){
        Swal.fire('Введи число пониже')  
    }
    else if (userNumber==answer) {
        
        Swal.fire(arr[rand]);
           }
  
    
}