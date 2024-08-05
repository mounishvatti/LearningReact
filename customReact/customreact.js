function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement1 = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click Here'
}

const reactElement2 = {
    type: 'div',
    props: {
        class: 'title',
    },
    children: 'Hello World'
}

const reactElement3 = {
    type: 'button',
    props: {
        class: 'btn',
    },
    children: 'I am a button'
}

const mainContainer = document.getElementById('root');

customRender(reactElement1, mainContainer);
customRender(reactElement2, mainContainer);
customRender(reactElement3, mainContainer);
