
function customRender(reactElement,container){
   /* this was good for one attribute, but for more tags,we use loop based
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
*/

    const domElement=document.createElement(reactElement.type)
        domElement.innerHTML=reactElement.children
        for(const prop in reactElement.props){
            //har element me jao aur uska value dekho
            if(prop==='children')continue
            domElement.setAttribute(prop,reactElement.props[prop])
        }
            container.appendChild(domElement)

    }
const reactElement={
type:'a',
props:{
    href:'https://google.com',
    target:'_blank',
},
children:'CLick to visit googlu'
}
//react jo bhi element hai usse tree banane ki koshish krta hai

const mainContainer= document.querySelector('#root')

customRender(reactElement,mainContainer)
//this is how react works and evaluated!!
