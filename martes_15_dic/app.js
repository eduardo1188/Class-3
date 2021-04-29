{/* <button onclick="newWindow()">Open new window</button>
    <button onclick="changecolor()">change color</button>


    <form onsubmit="preventDefault()">
        <label for="task">Task</label>
        <input type="text" name="task">
        <button type="submit" >Save Task</button>


    </form>


    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>

    <script>

        function changecolor() {
            document.body.style.backgroundColor='red'
        }



        function newWindow() {
            const url = 'https://google.com'
            const newWindow =window.open(url, "", "height=500, width=800")

            setTimeout(() => {
                newWindow.close()
            }, 3000)

            // alert("hola mundo")
        function submitform(e) {
            e.preventDefault()
            }

        }
        
    </script> */}

// alert("Hello From file")



 //document.getElementById('main') //.styles.backgroundcolor = 'color' //sirve para cambiar elem,entos por el id
//let elemento = document.getElementById('main')
//elemento.style.color='green'
//elemento.style.backgroundColor = 'Yellow' // return NODE

// document.getElementById('text').nodeType
// document.getElementsByClassName('lista').style = 'blue'

// const lista = document.getElementsByClassName('lista') //HTML collection
// for (let i = 0; i < lista.length; i++) {
//     lista[i].style.color = 'blue'
// }


const tagNames = document.getElementsByTagName('h1')
console.log(tagNames)
for (let i = 0; i < tagNames.length; i++) {
    tagNames[i].style.color = 'Red'
}

function redColor() {
    const red = document.getElementById('red').style.backgroundColor = 'red'
}

function blueColor() {
    const blue = document.getElementById('blue').style.backgroundColor = 'blue'
}

function cyanColor() {
    const cyan = document.getElementById('cyan').style.backgroundColor = 'cyan'
}

function randomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    document.getElementById('random').style.backgroundColor= color
}

function resetColor() {
    document.getElementById("red").style.backgroundColor = null
    document.getElementById("blue").style.backgroundColor = null
    document.getElementById("cyan").style.backgroundColor = null
    document.getElementById("random").style.backgroundColor = null
}

const $ = document.querySelector

//document.querySelector('#main').style.backgroundColor = 'pink'



// const one = document.getElementById('one')

// one.parentNode.style.backgroundColor = 'green'

const dos = document.getElementById('two')

// dos.nextElementSibling.style.border = '2px solid red'
// dos.previousElementSibling.style.border = '2px dashed green'

// dos.nextSibling.nextSibling.style.border = '2px solid red'

// dos.style.border = '2px solid blue'
// nieto.parentNode.parentNode.style.color = 'red'

// console.log(nieto.nodeName);

// const lista = wrapper.
// const lista = button.parentNode.children

// // const button = document.getElementById('cyan')
// const wrapper = document.getElementsByTagName('div')
// console.log(wrapper);
// const lista = wrapper[0].children
// console.log(lista);
// for (i = 0; i < lista.length; i++) {
//     lista[i].style.border = '2px dashed green'
// }

// const lista2Div = wrapper[1].children[0]
// console.log(lista2Div);

// lista2Div.firstElementChild.style.color = 'blue'
// lista2Div.lastElementChild.style.color = 'pink'

const parrafo = document.createElement('p')
const padre = document.querySelector('body')
parrafo.innerHTML = 'Hello from JS'
padre.appendChild(parrafo)


const array = ['naranja', 'manzana', 'limon', 'fresa', 'uva', 'mora', 'lulo', 'pera', 'guayaba', 'piña']
for (let i = 0; i < array.length; i++) {
    const button = document.createElement("button")
    button.innerHTML = array[i]
    
    const body = document.getElementsByTagName("body")[0]
    body.appendChild(button)

    if (i%2 === 0) {
        button.style.color = 'blue'
    } else {
        button.style.color = 'orange'
    }
} 

const button = document.getElementById('ejecutable')
button.addEventListener('click', () => console.log('clicked!'))

button.addEventListener('mouseover', () => alert('Te amo mi amor'))




