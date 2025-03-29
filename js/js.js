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



function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;
  
    element.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - element.getBoundingClientRect().left;
      offsetY = e.clientY - element.getBoundingClientRect().top;
      document.body.style.userSelect = "none"; 
    });
  
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        element.style.left = `${e.clientX - offsetX}px`;
        element.style.top = `${e.clientY - offsetY}px`;
      }
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.userSelect = "auto"; 
    });
  }
  
 
  const group25 = document.querySelector(".group-25");
  const group26 = document.querySelector(".group-26");
  const groupB = document.querySelector(".group-b");
  const group2b = document.querySelector(".group-2b");
  
  makeDraggable(group25);
  makeDraggable(group26);
  makeDraggable(groupB);
  makeDraggable(group2b);
  

  document.querySelector('.group-24').addEventListener('click', function() {
    
    document.querySelectorAll('.vector, .vector-27, .vector-28, .vector-29, .vector-2a').forEach(function(element, index) {
      setTimeout(function() {
        
        element.style.opacity = 1;
        element.style.top = parseInt(element.style.top) + 50 + 'px';
        element.style.left = parseInt(element.style.left) + (Math.random() * 100 - 50) + 'px'; 
        
        setTimeout(function() {
          element.style.top = parseInt(element.style.top) + 80 + 'px'; 
        }, 1000); 
  
        
        setTimeout(function() {
          element.style.opacity = 0; 
        }, 700); 
      }, index * 100); 
    });
  });
  
  
  function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}





function scrollAndShowModal() {
    
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

   
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
   
    document.getElementById("modal").style.display = "none";
}

function submitName() {
    const name = document.getElementById("name-input").value;
    alert("You entered: " + name); 

   
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

 

  document.querySelector('.group-d').addEventListener('click', function() {
    var groupD2 = document.querySelector('.group-d2'); 
    groupD2.style.display = groupD2.style.display === 'none' || groupD2.style.display === '' ? 'block' : 'none';
});

document.querySelector('.group-f').addEventListener('click', function() {
  var groupF2 = document.querySelector('.group-f2'); 
  groupF2.style.display = groupF2.style.display === 'none' || groupF2.style.display === '' ? 'block' : 'none';
});

document.querySelector('.g2').addEventListener('click', function() {
  var g122 = document.querySelector('.g122');
  g122.style.visibility = g122.style.visibility === 'hidden' ? 'visible' : 'hidden';
});






const group = document.querySelector('.group-17');

group.addEventListener('click', function() {
  group.classList.add('animate');
});
