const count = 20;
let item_index = 0;

const obs = new IntersectionObserver(entries => {
    // console.log('ent', entries);

    entries.forEach(entry => {
        const list = document.querySelector('.list');

        if(entry.isIntersecting) {
            for (let i = item_index; i < item_index + count; i++){
                let item = document.createElement('p');

                item.textContent = i;
                item.className += 'item';
                list.appendChild(item);
            }
            item_index = item_index + count;
        }


    })
}, {root : null, threshold :0.1});



obs.observe(document.querySelector('.end'));