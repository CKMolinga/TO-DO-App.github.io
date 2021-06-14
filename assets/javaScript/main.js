(function() {

    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#add');

    const clear = document.getElementById('clearTask');
    clear.addEventListener('click', function() {
        list.innerHTML = "";
    })

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        list.innerHTML += '<li>' + item.value + '</li>';
        store();
        item.value = "";
    }, false)

    list.addEventListener('click', function(e) {
        var t = e.target;
        if (t.classList.contains('checked')) {
            t.parentNode.removeChild(t);
        } else {
            t.classList.add('checked');
        }
        store();
    }, false)

    function store() {
        window.localStorage.myitems = list.innerHTML;
    }

    function getValues() {
        var storedValues = window.localStorage.myitems;
        if (!storedValues) {
            list.innerHTML = '<li>Make a to do list</li>' +
                '<li>Check off first thing on the to do list</li>' +
                '<li>Realize you have already accomplished 2 things in the list</li>' +
                '<li>Reward yourself with a nap</li>';
        } else {
            list.innerHTML = storedValues;
        }
    }
    getValues();
})();