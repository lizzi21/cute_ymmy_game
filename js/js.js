document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector(".group-5");

    if (scrollButton) {
        scrollButton.addEventListener("click", function () {
            window.scrollTo({
                top: document.body.scrollHeight * 0.23, 
                behavior: "smooth"
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".group-18").addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tapToReturn = document.querySelector(".tap-to-return");

   
    tapToReturn.addEventListener("click", function() {
        window.scrollTo({
            top: 0, 
            behavior: "smooth" 
        });
    });
});


// Функция для перетаскивания
function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;
  
    element.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - element.getBoundingClientRect().left;
      offsetY = e.clientY - element.getBoundingClientRect().top;
      document.body.style.userSelect = "none"; // Отключаем выделение текста
    });
  
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        element.style.left = `${e.clientX - offsetX}px`;
        element.style.top = `${e.clientY - offsetY}px`;
      }
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.userSelect = "auto"; // Включаем выделение текста
    });
  }
  
  // Применяем к каждому объекту
  const group25 = document.querySelector(".group-25");
  const group26 = document.querySelector(".group-26");
  const groupB = document.querySelector(".group-b");
  const group2b = document.querySelector(".group-2b");
  
  makeDraggable(group25);
  makeDraggable(group26);
  makeDraggable(groupB);
  makeDraggable(group2b);
  

  document.querySelector('.group-24').addEventListener('click', function() {
    // Активируем анимацию для каждого объекта
    document.querySelectorAll('.vector, .vector-27, .vector-28, .vector-29, .vector-2a').forEach(function(element, index) {
      setTimeout(function() {
        // Показать элемент
        element.style.opacity = 1;
        element.style.top = parseInt(element.style.top) + 50 + 'px'; // Поднять немного вверх
        element.style.left = parseInt(element.style.left) + (Math.random() * 100 - 50) + 'px'; // Сдвигаем в случайную сторону
  
        // Падение элемента (на 80px вниз)
        setTimeout(function() {
          element.style.top = parseInt(element.style.top) + 80 + 'px'; // Падение вниз
        }, 1000); // Падение начинается через 1 секунду
  
        // Пропадание элемента
        setTimeout(function() {
          element.style.opacity = 0; // Элемент исчезает
        }, 700); // Элемент исчезает через 2 секунды
      }, index * 100); // Задержка для каждого объекта
    });
  });
  
  
  function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}





function scrollAndShowModal() {
    // Прокрутка страницы вниз
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    // Показать модальное окно
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    // Закрыть модальное окно
    document.getElementById("modal").style.display = "none";
}

function submitName() {
    const name = document.getElementById("name-input").value;
    alert("You entered: " + name); // Место, где будет обработано имя

    // Закрыть модальное окно после отправки
    closeModal();
}



document.querySelector('.op').addEventListener('click', function() {
    var op2 = document.querySelector('.op2');
    op2.style.display = op2.style.display === 'none' || op2.style.display === '' ? 'block' : 'none';
  });


  document.querySelector('.po').addEventListener('click', function() {
    var po2 = document.querySelector('.po2');
    po2.style.display = po2.style.display === 'none' || po2.style.display === '' ? 'block' : 'none';
  });


  document.querySelector('.zzz').addEventListener('click', function() {
    var zzz2 = document.querySelector('.zzz2');
    zzz2.style.display = zzz2.style.display === 'none' || zzz2.style.display === '' ? 'block' : 'none';
  });

  document.querySelector('.a').addEventListener('click', function() {
    var a2 = document.querySelector('.a2');
    a2.style.display = a2.style.display === 'none' || a2.style.display === '' ? 'block' : 'none';
  });

 


