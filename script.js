const input = document.getElementById('input-item')
const storeContainer = document.getElementById('store-item-container')
const storeItem = document.getElementById('store-item')

function additem(){
    if(input.value === ''){
        alert('Please Wright Something');

    }else{
        const li = document.createElement('li');
        li.innerHTML = input.value;
        storeContainer.prepend(li);        
        input.value = '';

        const span = document.createElement('span')
        span.innerHTML = 'X';
        li.append(span);
    }
    datastore();
}


input.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        additem();
        storeItem.style.display = 'none';
    }
})

storeContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('chaked')
        datastore()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        datastore()
    }
})

function datastore(){
    localStorage.setItem('data',storeContainer.innerHTML);
}

function showTask(){
    storeContainer.innerHTML = localStorage.getItem('data');
}

showTask();